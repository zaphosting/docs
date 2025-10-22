---
id: dedicated-linux-security-tips
title: "Servidor Dedicado: Dicas de Segurança para Linux"
description: "Descubra como melhorar a segurança do seu servidor Linux com dicas essenciais para evitar acessos não autorizados e proteger seus serviços → Saiba mais agora"
sidebar_label: Dicas de Segurança
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Este guia traz algumas dicas e conselhos sobre como deixar seu servidor Linux mais seguro. Especialmente porque servidores precisam ser acessados externamente, uma proteção básica contra acessos indesejados é super recomendada e não deve ser negligenciada.

:::info
Lembre-se que essas instruções não são exaustivas e que informações mais detalhadas podem ser encontradas em outras seções da documentação ZAP. (ex: [2FA (SSH)](vserver-linux-ssh2fa.md))
:::

:::tip
A forma mais fácil de proteger seu servidor é sempre a mesma, independente do servidor: use senhas seguras, atualize seus serviços regularmente e preste atenção nos serviços que você instala e nos guias que segue.
:::

<InlineVoucher />

## Protegendo o SSH

SSH (Secure Shell) é um serviço que permite acessar remotamente o console do seu servidor para executar comandos. Veja como configurar o SSH no seu servidor: [Acesso inicial (SSH)](vserver-linux-ssh.md)

Por padrão, o login via SSH usa senha. Porém, isso tem a grande desvantagem de que a autenticação pode ser facilmente burlada com ataques de força bruta, especialmente se você usar uma senha simples para o login SSH. Então, se optar por usar senha, use uma **senha segura**.

Para proteger ainda mais seu servidor contra acessos SSH indesejados, você deve ativar a autenticação exclusivamente via chaves SSH e desativar o login por senha. Confira o guia [Chave SSH](vserver-linux-sshkey.md), que explica como gerar e adicionar chaves SSH.

## Configuração de portas dos seus serviços

| Serviço | Porta |
|---------|-------|
| SSH     | 22    |
| FTP     | 21    |
| Mail    | 25    |
| DNS     | 53    |
| HTTP    | 80    |
| HTTPS   | 443   |

Serviços como SSH ou FTP usam as mesmas portas padrão (algumas listadas na tabela acima). Se um invasor externo quiser atacar o serviço SSH do seu servidor, ele precisa saber qual porta está sendo usada para acessar o SSH. Se você não configurar essas portas de forma diferente, as portas 22 e 21 geralmente são o alvo para executar comandos diretamente no servidor ou acessar arquivos via FTP.

Para evitar isso, recomendamos configurar as portas dos serviços padrão como portas personalizadas. Na próxima parte do guia você aprende como fazer isso:

:::danger
A porta desejada deve estar entre 1024 e 65536 e não pode ser uma porta já em uso!
:::
Você pode usar `cat /etc/services` para ver algumas portas padrão e evitar escolher uma porta já ocupada.

### Porta SSH

Para mudar a porta do SSH, você precisa editar o arquivo de configuração. Normalmente ele fica em `/etc/ssh/sshd_config`, mas se não estiver lá, use o comando abaixo para encontrar:
```
find / -name "sshd_config" 2>/dev/null
```

Agora abra o arquivo com nano (como root ou usando *sudo*):
```
sudo nano /etc/ssh/sshd_config
```

Adicione a porta desejada após `Port`. Se `Port` estiver comentado (ex: `#Port 22`), remova o "#" e substitua o 22 pela porta que você quer. Salve o arquivo (no Nano: Ctrl + o) e feche (Ctrl + x).

![Port sshd](https://github.com/zaphosting/docs/assets/42719082/0adec0a9-f1b3-4428-9ce2-f78497cf1818)

Agora reinicie o serviço SSH para aplicar as mudanças:
```
# No Ubuntu/Debian/CentOS, por exemplo:
sudo systemctl restart sshd
```

### Porta FTP

Se você instalou um serviço FTP como o **proFTPd**, a porta também pode ser alterada editando o arquivo de configuração, parecido com o SSH.

Encontre o arquivo `proftpd.conf`:
```
find / -name "proftpd.conf" 2>/dev/null
```

Normalmente ele fica em `/etc/proftpd.conf` (CentOS) ou `/etc/proftpd/proftpd.conf` (Ubuntu, Debian).
Abra o arquivo com nano, remova o "#" antes de `port` e coloque a porta desejada. Lembre-se das recomendações para não usar uma porta inválida.

:::tip
Use Ctrl + W para buscar no nano.
:::

```
nano /etc/proftpd/proftpd.conf
```
![Port proftpd](https://github.com/zaphosting/docs/assets/42719082/b6f1d33e-8409-4fd7-9f32-5e2d641275c9)

## Uso de firewall

O princípio da acessibilidade externa de um servidor é sempre o mesmo: uma porta precisa estar aberta para que o servidor seja acessível externamente. No caso do SSH, essa porta é **por padrão** a 22/TCP. (veja acima como mudar a porta padrão)

O problema é que essa porta fica acessível para todo mundo, independente de quem, onde e com qual intenção. Isso é uma vulnerabilidade grave, pois invasores podem bombardear o servidor com tentativas de login para descobrir a senha correta (via ataque de força bruta, se o login por senha ainda estiver ativo) ou tentar sobrecarregar a rede do servidor com flood (ex: DDoS), o que é comum.

Para reduzir esses riscos, você pode aplicar regras de firewall que limitam o acesso às portas abertas.

Existem duas formas principais para isso:
- **IPTables**: o firewall original do Linux, com muitas opções, mas um pouco mais complexo de usar.
- **UFW**: uma interface mais simples para usar IPTables sem comandos complicados, porém com menos flexibilidade.

A escolha é sua. Dependendo do uso, você pode precisar da versatilidade do IPTables, mas às vezes o UFW já resolve. (ex: abrir/fechar portas, que já é melhor do que nada!)

### IPTables

Aqui você vai usar IPTables para criar regras que limitam o número de tentativas de conexão. As explicações dos comandos estão logo abaixo do bloco de código.

Note que essa regra vale só para a **porta 22** (valor após `--dport`), para outros serviços os comandos precisam ser adaptados.

:::note
Esses comandos podem não funcionar em todas as distros Linux, mas funcionam na maioria das mais populares.
:::

Primeiro, faça login no seu servidor Linux. Se precisar de ajuda, siga nosso guia [Acesso inicial (SSH)](vserver-linux-ssh.md). Depois, execute os comandos na ordem:

```
iptables -A INPUT -p tcp --syn --dport 22 -m connlimit --connlimit-above 2 --connlimit-mask 32 -j DROP
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 1 --hitcount 2 -j DROP
```

1. A primeira regra descarta pacotes se houver mais de 2 conexões no estado `TIME_WAIT` para a porta 22 de um mesmo IP.
2. A segunda adiciona o endereço IP de uma nova conexão à lista `recent`.
3. A terceira descarta novas conexões de IPs que tentaram mais de 2 conexões no último segundo.

### UFW

Como dito, UFW é uma interface "mais simples" para IPTables. Primeiro instale o UFW, pois ele não vem instalado em todas as distros. Execute os comandos como root ou usando *sudo*.

Faça login no seu servidor Linux. Se precisar, siga o guia [Acesso inicial (SSH)](vserver-linux-ssh.md). As instruções abaixo foram testadas no Debian e Ubuntu, mas devem funcionar em outras distros também.

Atualize os repositórios e pacotes:
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
Se você já mudou a porta do SSH, use a nova porta aqui no lugar da 22.
:::

Habilite o serviço ssh:
```
sudo ufw allow 22/tcp
sudo ufw enable
sudo ufw status
```

A saída deve ser parecida com isso:
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
O UFW limita conexões a 6 por minuto. O limitador do UFW é simples e pode não servir para todos os casos. Para configurações mais detalhadas e flexíveis, recomendamos usar IPTables direto.
:::

:::tip
O firewall (IPTables ou UFW) só conta as tentativas de conexão e bloqueia. Com Fail2Ban é possível analisar logs para detectar anomalias. A próxima seção mostra como instalar e ativar o Fail2Ban.
:::

## Medidas extras com Fail2Ban

Fail2Ban é um serviço que bloqueia IPs que tentam se conectar ao servidor com intenções suspeitas. Ele monitora logs em busca de anomalias e protege seu sistema de forma eficaz e simples.

Depois de instalado, o Fail2Ban já vem com configurações para serviços comuns como:
- apache
- lighttpd
- sshd
- qmail
- postfix
- Courier Mail Server
Outros serviços podem ser adicionados usando expressões regulares (RegEx) e especificando o arquivo de log.

Por exemplo, veja uma entrada em `/var/log/auth.log`, que contém todas as tentativas de login SSH, sucesso ou falha.
![/var/log/auth.log](https://github.com/zaphosting/docs/assets/42719082/2758141d-c2dd-4d24-9aee-876aab5d27e7)

Aqui aparece:
```
Dec 2 12:59:19 vps-zap515723-2 sshd[364126]: Failed password for root from 92.117.xxx.xxx port 52504 ssh2
```
O Fail2Ban usa esse log para monitorar falhas de autenticação. Como o log mostra o IP do atacante, o Fail2Ban pode bloquear esse IP após algumas tentativas falhas.

### Instalando o Fail2Ban

Faça login no seu servidor Linux. Se precisar, siga o guia [Acesso inicial (SSH)](vserver-linux-ssh.md). Execute os comandos como root ou usando *sudo*.

```
sudo apt update && sudo apt upgrade -y
sudo apt install fail2ban
```

Após instalar, verifique o status com `systemctl`: (saia do systemctl com Ctrl+C)
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

### Configurando o Fail2Ban

O Fail2Ban está instalado, mas ainda não ativo ou configurado. Veja a pasta `/etc/fail2ban`, que deve conter:
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
| maxretry     | Tentativas falhas para bloqueio                     | 5           |

```
# pode ser definido com espaço (e/ou vírgula) separador.
#ignoreip = 127.0.0.1/8 ::1

# ignorecommand = /path/to/command <ip>
ignorecommand =

# "bantime" é o tempo em segundos que um host fica banido.
bantime  = 1h

# Um host é banido se gerar "maxretry" falhas durante os últimos "findtime"
# segundos.
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
Você pode fazer configurações específicas para cada serviço (como `maxretry` menor que o padrão). Se não fizer, o padrão geral será usado.
:::

Agora reinicie o Fail2Ban para ativar a monitoração:
```
sudo systemctl restart fail2ban.service
```

### Testando o Fail2Ban

Se tiver acesso a uma VPN ou outro servidor, tente se bloquear no Fail2Ban para testar. Com VPN ou hotspot do celular você terá um IP diferente para testar.

:::danger
Não faça isso na sua rede normal, pois seu IP pode ser bloqueado e você **ficará trancado fora**.
:::

Tente conectar via SSH ao seu servidor (com IP diferente!) e digite a senha errada várias vezes. O resultado deve ser parecido com:
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

Como vê, a conexão está sendo recusada (`Connection refused` em vez de `Permission denied`).

Agora veja o status do Fail2Ban. Você verá que um IP foi bloqueado:
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
Se você tiver muitos bloqueios, vale a pena aumentar o tempo de banimento a cada tentativa falha para reduzir tentativas.
:::

```
[sshd]

enabled = true
port    = 22
filter  = sshd
logpath = /var/log/auth.log
maxretry = 4

bantime = 1h
# O tempo de banimento aumenta a cada bloqueio desse IP
bantime.increment = true
# Fator de escala de 24 horas (1h,24h,48h,3d,4d....)
bantime.factor = 24
# Tempo máximo de banimento = 5 semanas
bantime.maxtime = 5w
```

## Protegendo servidores web com Cloudflare

Muita gente usa Cloudflare como gerenciador DNS do domínio. Além de ter uma das maiores redes do mundo, que oferece menor tempo de carregamento, menor latência e melhor experiência geral, o Cloudflare também protege seu site contra ataques DoS/DDoS, incluindo floods e novos tipos de ataques que surgem todo dia.

Neste guia, você vai aprender a proteger seu servidor web contra ataques.

Vamos assumir que seu domínio já está gerenciado pelo Cloudflare. Se não, siga [o guia deles](https://developers.cloudflare.com/fundamentals/get-started/setup/add-site/) para migrar seu domínio. No dashboard do Cloudflare, vá na aba Registros DNS e certifique-se que o registro do seu servidor web tem a nuvem laranja e diz "Proxied".

![](https://github.com/zaphosting/docs/assets/42719082/a3572480-75df-4c43-bbba-e60ddedf9316)

Assim, todo o tráfego que passa pelo seu domínio vai pelo Cloudflare e depois para seu servidor, sendo tráfego legítimo.
Mas seu servidor ainda é acessível fora do Cloudflare, então você deve limitar o acesso às portas 80 e 443 do protocolo TCP no seu servidor Linux, permitindo acesso só se vier do tráfego legítimo do Cloudflare.

Para isso, você pode limitar manualmente o acesso usando regras de firewall com a [lista pública IPv4 do Cloudflare](https://cloudflare.com/ips-v4) e a [lista pública IPv6 do Cloudflare](https://cloudflare.com/ips-v6).

Ou pode economizar tempo usando ferramentas como [Cloudflare-ufw](https://github.com/Paul-Reed/cloudflare-ufw) para importar essas regras de firewall em massa.
Só tome cuidado para não ter regras separadas que liberem acesso irrestrito ao seu servidor web, além das que você adicionou, senão elas não vão funcionar.

## Conclusão - seu servidor está muito mais seguro agora!

Este guia mostrou funções básicas e avançadas para proteger seu servidor Linux. Se você aplicou todas as recomendações que valem para seu sistema, seu servidor já está muito mais seguro do que antes – parabéns!

Claro que dá para ir além:
- [2FA (SSH)](vserver-linux-ssh2fa.md)
- Adicionar mais configurações no Fail2Ban
- Configurar notificações por e-mail no Fail2Ban
- E muito mais...

<InlineVoucher />