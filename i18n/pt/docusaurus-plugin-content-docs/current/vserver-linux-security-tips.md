---
id: vserver-linux-security-tips
title: "VPS: Dicas de Segurança para Linux"
description: "Descubra como melhorar a segurança do seu servidor Linux com dicas essenciais para evitar acessos não autorizados e proteger seus serviços → Saiba mais agora"
sidebar_label: Dicas de Segurança
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Este guia traz algumas dicas e conselhos sobre como deixar seu servidor Linux mais seguro. Especialmente porque servidores (virtuais) precisam ser acessados externamente, uma proteção básica contra acessos indesejados é super recomendada e não deve ser negligenciada.

:::info
Lembre-se que essas instruções não são exaustivas e que informações mais detalhadas podem ser encontradas em outras seções da documentação ZAP. (ex: [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
A forma mais fácil de proteger seu servidor é sempre a mesma, independente do servidor: use senhas seguras, atualize seus serviços regularmente e preste atenção nos serviços que você instala e nos guias que segue.
:::

<InlineVoucher />

## Protegendo o SSH

SSH (Secure Shell) é um serviço que permite acessar remotamente o console do seu servidor para executar comandos. Veja como configurar o SSH no seu servidor: [Acesso inicial (SSH)](vserver-linux-ssh.md)

Por padrão, o login via senha é usado para SSH. Porém, isso tem a grande desvantagem de que a autenticação pode ser facilmente burlada com ataques de força bruta, especialmente se você usar uma senha simples. Então, se optar por usar senha, use uma **senha segura**.

Para proteger ainda mais seu servidor contra acessos indesejados via SSH, você deve ativar a autenticação exclusiva por chaves SSH e desativar o login por senha. Dê uma olhada no guia [Chave SSH](vserver-linux-sshkey.md), que explica como gerar e adicionar chaves SSH.

## Configuração das portas dos seus serviços

| Serviço | Porta |
|---------|-------|
| SSH     | 22    |
| FTP     | 21    |
| Mail    | 25    |
| DNS     | 53    |
| HTTP    | 80    |
| HTTPS   | 443   |

Serviços como SSH ou FTP usam as mesmas portas por padrão (algumas listadas na tabela acima). Se um invasor externo quiser atacar o serviço SSH do seu servidor, ele precisa saber qual porta está sendo usada. Se você não configurar essas portas, as portas 22 e 21 geralmente são o alvo para executar comandos diretamente ou acessar arquivos via FTP.

Para evitar isso, recomendamos configurar as portas dos serviços padrão para portas personalizadas. Na próxima parte do guia você aprende como:

:::danger
A porta desejada deve estar entre 1024 e 65536 e não pode ser uma porta já em uso!
:::
Você pode usar `cat /etc/services` para ver algumas portas padrão e evitar escolher uma já usada.

### Porta do SSH

Para mudar a porta do SSH, você deve editar o arquivo de configuração. Normalmente ele fica em `/etc/ssh/sshd_config`, mas se não estiver lá, use o comando:
```
find / -name "sshd_config" 2>/dev/null
```

Agora abra o arquivo com nano (como root ou usando *sudo*).
```
sudo nano /etc/ssh/sshd_config
```

Adicione sua porta desejada após `Port`. Se `Port` estiver comentado (ex: `#Port 22`), remova o "#" e troque o 22 pela porta que você quer. Salve o arquivo (no Nano: Ctrl + o) e feche (Ctrl + x).

![Port sshd](https://screensaver01.zap-hosting.com/index.php/s/F4Z4SDjLW4y2iDp/preview)

Agora reinicie o serviço SSH para aplicar as mudanças.
```
#No Ubuntu/Debian/CentOS, por exemplo:
sudo systemctl restart sshd
```

### Porta do FTP

Se você instalou um serviço FTP como o **proFTPd**, a porta também pode ser alterada editando o arquivo de configuração, parecido com o SSH.

Encontre o arquivo `proftpd.conf`
```
find / -name "proftpd.conf" 2>/dev/null
```

Normalmente ele fica em `/etc/proftpd.conf` (CentOS) ou `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Abra com nano, remova o "#" antes de `port` e coloque a porta desejada. Lembre-se das dicas acima para não usar uma porta inválida.

:::tip
Use Ctrl + W para buscar no nano.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://screensaver01.zap-hosting.com/index.php/s/qw3a88EwfDCMKXS/preview)

## Uso de firewall

O princípio da acessibilidade externa de um servidor é sempre o mesmo: uma porta precisa estar aberta para que o servidor seja acessível. No caso do SSH, essa porta é **por padrão** a 22/TCP. (veja acima como mudar a porta padrão)

O problema é que essa porta fica acessível para todo mundo, independente de quem, onde e com qual intenção. Isso é uma vulnerabilidade grave, pois invasores podem bombardear o servidor com tentativas de login para descobrir a senha (força bruta, se o login por senha estiver ativo) ou tentar sobrecarregar a rede do servidor (ex: DDoS).

Para reduzir esses riscos, você pode aplicar regras de firewall que limitam o acesso às portas abertas.

Existem duas formas principais de fazer isso:
- **IPTables**: o firewall original do Linux, com muitas opções, mas mais complexo.
- **UFW**: uma interface mais simples para usar IPTables, com comandos mais fáceis, porém mais limitada.

A escolha é sua. Dependendo do uso, você pode precisar da flexibilidade do IPTables, mas às vezes o UFW já resolve. (ex: abrir/fechar portas, que já é melhor que nada!)

### IPTables

Aqui você vai usar IPTables para criar regras que limitam o número de tentativas de conexão. As explicações dos comandos estão logo abaixo.

Note que essa regra vale só para a **porta 22** (valor após `--dport`). Para outros serviços, adapte os comandos.

:::note
Esses comandos podem não funcionar em todas as distros Linux, mas funcionam na maioria das mais populares.
:::

Primeiro, faça login no seu servidor Linux. Se precisar, siga nosso guia [Acesso inicial (SSH)](vserver-linux-ssh.md). Depois, execute os comandos na ordem:

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1. A primeira regra descarta pacotes se houver mais de 2 conexões no estado `TIME_WAIT` para a porta 22 do mesmo IP.
2. A segunda adiciona o IP de uma nova conexão à lista `recent`.
3. A terceira descarta novas conexões de IPs que tentaram mais de 2 conexões no último segundo.

### UFW

Como dito, UFW é uma interface mais simples para IPTables. Primeiro instale o UFW, pois nem todas as distros já vêm com ele. Execute os comandos como root ou usando *sudo*.

Faça login no seu servidor Linux. Se precisar, siga o guia [Acesso inicial (SSH)](vserver-linux-ssh.md). As instruções abaixo foram testadas no Debian e Ubuntu, mas devem funcionar em outras distros também.

Atualize os pacotes:
```
sudo apt update && sudo apt upgrade -y
```

Instale o UFW:
```
sudo apt install ufw -y
```

Verifique se a instalação deu certo:
```
sudo ufw status
> Firewall not loaded
```

Para não se trancar fora do servidor, primeiro habilite o serviço ssh antes de ativar o firewall.

:::caution
Se você já mudou a porta do SSH, use a nova porta aqui, não a 22.
:::

Habilite o ssh:
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

A saída deve ser algo assim:
```
Status: active
  
To Action From
-- ------ ----
22/tcp ALLOW Anywhere
22/tcp (v6) ALLOW Anywhere (v6)
```

Agora limite as conexões para 6 por minuto:
```
ufw limit 22/tcp
```

:::note
O UFW limita conexões a 6 por minuto. É simples e pode não servir para todos os casos. Para configurações mais detalhadas, use IPTables.
:::

:::tip
O firewall (IPTables ou UFW) só conta as tentativas de conexão e bloqueia. Com Fail2Ban você pode analisar logs para detectar anomalias. A próxima seção mostra como instalar e ativar o Fail2Ban.
:::

## Medidas extras com Fail2Ban

Fail2Ban é um serviço que bloqueia IPs que tentam acessar o servidor com intenções suspeitas. Ele monitora logs em busca de anomalias e protege seu sistema de forma eficaz e simples.

Depois de instalado, o Fail2Ban já vem com configurações para serviços comuns como:
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Você pode adicionar outros serviços usando expressões regulares (RegEx) e especificando o arquivo de log.

Por exemplo, veja uma entrada em `/var/log/auth.log`, que registra todas as tentativas de login SSH, boas ou ruins.
![/var/log/auth.log](https://screensaver01.zap-hosting.com/index.php/s/XzpxrWZRkpFJseo/preview)

Aqui aparece:
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
O Fail2Ban usa esse log para monitorar falhas de autenticação. Como o log mostra o IP do atacante, o Fail2Ban pode bloquear esse IP após algumas tentativas falhas.

### Instalando Fail2Ban

Faça login no seu servidor Linux. Se precisar, siga o guia [Acesso inicial (SSH)](vserver-linux-ssh.md). Execute os comandos como root ou usando *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Depois, confira o status com `systemctl`: (saia do systemctl com Ctrl+C)
```
systemctl status fail2ban.service
* fail2ban.service - Fail2Ban Service
     Loaded: loaded (/lib/systemd/system/fail2ban.service; enabled; vendor pres>
     Active: active (running) since Sat 2023-12-02 13:10:33 UTC; 24s ago
       Docs: man:fail2ban(1)
    Process: 23988 ExecStartPre=/bin/mkdir -p /run/fail2ban (code=exited, statu>
   Main PID: 23989 (fail2ban-server)
        CPU: 409ms
     CGroup: /system.slice/fail2ban.service
             `-23989 /usr/bin/python3 /usr/bin/fail2ban-server -xf start

Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Starting Fail2Ban Service...
Dec 02 13:10:33 vps-zap515723-1 systemd[1]: Started Fail2Ban Service.
Dec 02 13:10:34 vps-zap515723-1 fail2ban-server[23989]: Server ready
```

### Configurando Fail2Ban

Fail2Ban está instalado, mas ainda não ativo ou configurado. Veja a pasta `/etc/fail2ban`, que deve conter:
```
action.d fail2ban.d jail.conf paths-arch.conf paths-debian.conf
fail2ban.conf filter.d jail.d paths-common.conf paths-opensuse.conf
```
Para ativar, crie o arquivo `jail.local`. Copie o conteúdo de `jail.conf` para ele e abra:
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo nano /etc/fail2ban/jail.local
```

Agora você pode fazer as configurações no `jail.local`, incluindo quais serviços monitorar.
Olhe só a parte após `[Default]`. Essa seção é para configurações padrão.

Role até encontrar e ajuste assim, por exemplo:

| Atributo     | Explicação                                         | Valor       |
|--------------|---------------------------------------------------|-------------|
| ignoreip     | IPs que não devem ser bloqueados                   | 127.0.0.1/8 |
| ignorecommand| Não relevante                                      |             |
| bantime      | Tempo que um IP fica bloqueado                      | 1h          |
| findtime     | Período para contar falhas                          | 10m         |
| maxretry     | Tentativas falhas antes do bloqueio                 | 5           |

```
# pode usar espaço (e/ou vírgula) para separar.
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" é o tempo em segundos que um host fica banido.
bantime  = 1h

# Um host é banido se gerar "maxretry" falhas no período "findtime"
findtime  = 10m

# "maxretry" é o número de falhas antes do banimento.
maxretry = 5
```

Pronto, você configurou as opções padrão. Para monitorar o SSH, role até a tag `[sshd]`. Se você mudou a porta, coloque ela em `port`.

O `[sshd]` deve ficar assim:
```
[sshd]

enabled = true
port = 22
filter = sshd
logpath = /var/log/auth.log
maxretry = 4
```
:::tip
Você pode configurar opções específicas para cada serviço (como `maxretry` aqui, que é menor que o padrão). Se não fizer isso, o padrão geral será usado.
:::

Agora reinicie o Fail2Ban para ativar a monitoração.
```
sudo systemctl restart fail2ban.service
```

### Testando o Fail2Ban

Se tiver acesso a uma VPN ou outro servidor, tente se bloquear para testar o Fail2Ban. Com VPN ou hotspot do celular, você terá um IP diferente para testar.

:::danger
Não faça isso na sua rede normal, pois seu IP pode ser bloqueado e você **ficará trancado fora**.
:::

Tente conectar via SSH com o IP diferente e digite a senha errada várias vezes. O resultado deve ser parecido com:
```
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
root@185.223.29.xxx: Permission denied (publickey,password).
root@vps-zap515723-2:/var/log# ssh root@185.223.29.179
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
Permission denied, please try again.
root@185.223.29.xxx's password:
^C
root@vps-zap515723-2:/var/log# ssh root@185.223.29.xxx
ssh: connect to host 185.223.29.xxx port 22: Connection refused
```

Como vê, a conexão é recusada (`Connection refused` em vez de `Permission denied`).

Agora veja o status do Fail2Ban. Você verá que um IP foi bloqueado.
```
fail2ban-client status sshd
Status for the jail: sshd
|- Filter
|  |- Currently failed: 4
|  |- Total failed:     8
|  `- File list:        /var/log/auth.log
`- Actions
   |- Currently banned: 1
   |- Total banned:     1
   `- Banned IP list:   xxx
```

Para desbloquear um IP, use: `fail2ban-client set sshd unbanip {seu IP}`.

:::info
Se você tiver muitos bloqueios, é recomendável aumentar o tempo de banimento a cada tentativa falha para reduzir as tentativas.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# O tempo de banimento aumenta a cada banimento do mesmo IP
bantime.increment = true
# Fator de escala de 24 horas (1h,24h,48h,3d,4d....)
bantime.factor = 24
# Tempo máximo de banimento = 5 semanas
bantime.maxtime = 5w
```

## Protegendo servidores web com Cloudflare

Muita gente usa Cloudflare para gerenciar o DNS do domínio. Além de ter uma das maiores redes do mundo, que melhora o tempo de carregamento, latência e experiência geral, o Cloudflare protege seu site contra ataques DoS/DDoS, incluindo floods e novos tipos de ataques que surgem todo dia.

Neste guia, você vai aprender a proteger seu servidor web contra ataques.

Vamos assumir que seu domínio já está gerenciado pelo Cloudflare. Se não, siga [o guia deles](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) para migrar seu domínio. No dashboard do Cloudflare, vá na aba DNS Records e certifique-se que o registro do seu servidor web tem a nuvem laranja e diz "Proxied".

![](https://screensaver01.zap-hosting.com/index.php/s/wptKPBTLwmKxx8F/preview)

Assim, todo o tráfego do seu domínio passa pelo Cloudflare e depois para seu servidor, sendo tráfego legítimo.

Mas seu servidor ainda pode ser acessado fora do Cloudflare. Para evitar isso, limite o acesso às portas 80 e 443 TCP do seu servidor Linux, permitindo acesso só se vier do tráfego legítimo do Cloudflare.

Para isso, você pode limitar manualmente o acesso usando regras de firewall com a [lista pública IPv4 do Cloudflare](https://cloudflare.com/ips-v4) e a [lista pública IPv6 do Cloudflare](https://cloudflare.com/ips-v6).

Ou, para economizar tempo, use ferramentas como [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) para importar essas regras em massa.

Garanta que você não tenha regras separadas que permitam acesso irrestrito ao seu servidor web, além das que você adicionou, senão elas não funcionarão.

## Conclusão - seu servidor está muito mais seguro agora!

Este guia mostrou funções básicas e avançadas para proteger seu servidor Linux. Se você aplicou todas as recomendações que se aplicam ao seu sistema, seu servidor já está muito mais seguro — parabéns!

Claro que dá para ir além:
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Adicionar mais configurações no Fail2Ban
- Configurar notificações por e-mail no Fail2Ban
- E muito mais...

<InlineVoucher />