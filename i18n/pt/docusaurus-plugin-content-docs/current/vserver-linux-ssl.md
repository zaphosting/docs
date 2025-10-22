---
id: vserver-linux-ssl
title: "VPS: Criar certificado SSL (Let's Encrypt) para servidor Linux"
description: "Descubra como proteger seu site com certificados SSL gratuitos usando Certbot e Let's Encrypt para uma transmissão de dados segura → Saiba mais agora"
sidebar_label: Instalar Certificado SSL (Let's Encrypt)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Certificados SSL são partes essenciais da internet, garantindo que os dados possam ser transmitidos com segurança entre cliente e host. Neste guia, vamos explorar o processo de configuração da ferramenta open-source [**Certbot**](https://certbot.eff.org/) para solicitar certificados SSL gratuitos da autoridade certificadora sem fins lucrativos **Let's Encrypt**.

<InlineVoucher />

## Preparação

Para usar o Certbot, você vai precisar de um servidor Linux e um **domínio** que você possua. Você precisa ter acesso às configurações DNS do domínio e **deve** criar um registro DNS `A` apontando para o endereço IP do seu __servidor Linux__ para cada domínio raiz ou subdomínio que planeja usar.

O Certbot também possui plugins adicionais que permitem configurar um certificado para um domínio com "um clique", funcionando com vários servidores web como Nginx ou Apache. Recomendamos usar Nginx, pois é um servidor web open-source popular e de alta performance. Veja nosso [guia de proxy reverso Linux](vserver-linux-proxy.md) para ajuda na configuração.

## Instalação

Comece instalando o pacote open-source [**Certbot**](https://certbot.eff.org/), que você usará para solicitar certificados SSL gratuitos da **Let's Encrypt**.

```
sudo apt install certbot
```

Com o Certbot instalado, você pode solicitar certificados para seu(s) domínio(s). Let's Encrypt e Certbot oferecem vários Desafios ACME para verificar a propriedade do domínio.

Recomendamos fortemente usar o método padrão **HTTP-01**, pois permite renovação automática. Porém, se tiver problemas, pode tentar o método **DNS-01** como alternativa, que é manual e não suporta renovações automáticas, pois depende da verificação via registro DNS **TXT**.

:::tip Use Plugins para Servidores Web
Se você usa um servidor web como Nginx, Apache ou seu próprio servidor, recomendamos ir para a seção **Plugins para Servidores Web** abaixo, que mostra como usar plugins adicionais do Certbot para esses servidores, permitindo uma instalação "com um clique" e solicitação de certificados sem precisar desligar o servidor web.
:::

### Desafio HTTP-01

Com o Certbot instalado, você pode solicitar certificados para seu(s) domínio(s). Neste exemplo, usaremos o modo standalone, que significa que o Certbot vai iniciar um servidor web temporário para realizar as ações necessárias. Isso significa que você deve abrir a porta 80 nas regras do seu firewall e não ter nenhum servidor web ou serviço rodando na porta 80 para permitir que o servidor temporário inicie e o desafio seja acessado (daí o `HTTP` no nome do desafio).

No comando abaixo, você usará o parâmetro `--standalone` para informar ao Certbot que deseja usar o servidor web temporário.

```
# Para Domínios Raiz
certbot certonly --standalone -d [seu_dominio_raiz] -d www.[seu_dominio_raiz]

# Para Subdomínios
certbot certonly --standalone -d [seu_dominio]

# Configuração Interativa
certbot certonly --standalone
```

Após rodar o comando, pode ser que você precise seguir uma configuração interativa inicial, onde será solicitado um e-mail para comunicação do certificado, uma lista de e-mails opcional e os termos & condições que você deve aceitar.

O Certbot vai gerar um Desafio ACME e hospedá-lo usando o servidor temporário. Os servidores da Let's Encrypt tentarão acessar esse desafio no seu servidor e, se tudo der certo, os certificados serão criados e salvos no caminho `/etc/letsencrypt/live/[seu_dominio]`.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Agora você pode usar os certificados SSL onde precisar, apenas fornecendo o caminho local para eles.

### Registro DNS TXT

Se estiver com dificuldades para verificar seu domínio pelo método **HTTP-01**, como alternativa você pode usar o método **DNS-01**, que envolve criar um registro DNS **TXT** com um valor fornecido pela Let's Encrypt.

Como mencionado, esse método **não** suporta renovação automática, a menos que você configure sua própria infraestrutura para isso. Por isso, recomendamos usar o método **HTTP-01** sempre que possível.

No comando abaixo, você usará o parâmetro `--preferred-challenges` para informar ao Certbot que deseja usar o método `DNS-01`.

```
# Para Domínios Raiz
certbot certonly --preferred-challenges dns-01 -d [seu_dominio_raiz] -d www.[seu_dominio_raiz] --manual -m [seu_email]

# Para Subdomínios
certbot certonly --preferred-challenges dns-01 -d [seu_dominio] --manual -m [seu_email]

# Configuração Interativa
certbot certonly --preferred-challenges dns-01
```

Após rodar o comando, você pode precisar seguir uma configuração interativa inicial, onde será solicitado um e-mail para comunicação do certificado, uma lista de e-mails opcional e os termos & condições que você deve aceitar.

O Certbot vai fornecer instruções para criar um registro DNS **TXT** com um valor específico que você deve usar. O alvo normalmente será `_acme-challenge.` prefixado ao seu domínio (por exemplo, `_acme-challenge.zapdocs.example.com`) e o valor será mostrado no console.

Depois de criar o registro, pressione enter para continuar. Se tudo estiver correto e propagado, os certificados serão criados e salvos no caminho `/etc/letsencrypt/live/[seu_dominio]`.

:::note
Tenha paciência, pois mudanças em registros DNS podem levar algum tempo para propagar. Normalmente isso ocorre em minutos, mas em casos raros pode demorar mais.
:::

Agora você pode usar os certificados SSL onde precisar, apenas fornecendo o caminho local para eles.

## Plugins para Servidores Web

O Certbot tem vários plugins para servidores web que facilitam ainda mais o gerenciamento dos certificados, pois eles editam automaticamente os blocos de servidor relevantes para você. Para usar um plugin, basta adicionar o parâmetro correspondente ao seu comando `certbot`.

Ambos os métodos usam o desafio **HTTP-01** e funcionam basicamente da mesma forma. Quando um plugin é usado, o Certbot procura o bloco de servidor que inclui o domínio solicitado como parâmetro `server_name`. Encontrado isso, o Certbot gera um Desafio ACME e adiciona um bloco temporário `location /.well-known/acme-challenge/...` na configuração do servidor.

Os servidores da Let's Encrypt tentarão acessar esse desafio no seu servidor e, se tudo der certo, seu certificado será gerado e a configuração do bloco do servidor será automaticamente ajustada para usar HTTPS (porta 443) e adicionar os caminhos para o certificado recém-gerado.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Plugin Nginx

Antes de usar o plugin, certifique-se de que ele está instalado.

```
sudo apt install python3-certbot-nginx
```

Para usar o plugin Nginx, use o parâmetro `--nginx` no seu comando, assim:

```
# Para Domínios Raiz
certbot --nginx -d [seu_dominio_raiz] -d www.[seu_dominio_raiz]

# Para Subdomínios
certbot --nginx -d [seu_dominio]

# Configuração Interativa
certbot --nginx
```

:::tip
Se quiser desativar os ajustes automáticos "com um clique" nos blocos de servidor feitos pelo Certbot, você pode incluir o parâmetro `certonly` no comando, como `certbot certonly`.
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Plugin Apache

Antes de usar o plugin, certifique-se de que ele está instalado.

```
sudo apt install python3-certbot-apache
```

Para usar o plugin Apache, use o parâmetro `--apache` no seu comando, assim:

```
# Para Domínios Raiz
certbot --apache -d [seu_dominio_raiz] -d www.[seu_dominio_raiz]

# Para Subdomínios
certbot --apache -d [seu_dominio]

# Configuração Interativa
certbot --apache
```

:::tip
Se quiser desativar os ajustes automáticos "com um clique" nos blocos de servidor feitos pelo Certbot, você pode incluir o parâmetro `certonly` no comando, como `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Plugin Webroot

Se você está rodando seu próprio servidor web local que não usa softwares tradicionais, pode querer usar o método webroot para usar seu próprio servidor sem precisar pará-lo.

Para usar o plugin Webroot, use o parâmetro `--webroot` no seu comando. Também será necessário incluir `-w [caminho_do_seu_servidor_web]` (abreviação de `--webroot-path`), que é o caminho para o diretório raiz do seu servidor web.

```
# Para Domínios Raiz
certbot --webroot -w [caminho_do_seu_servidor_web] -d [seu_dominio_raiz] -d www.[seu_dominio_raiz]

# Para Subdomínios
certbot --webroot -w [caminho_do_seu_servidor_web] -d [seu_dominio]

# Configuração Interativa
certbot --webroot -w [caminho_do_seu_servidor_web]
```

:::tip
Um dos locais mais comuns para o webroot é `/var/www/html`. Você também pode usar isso para servidores web como Nginx ou Apache, caso queira usar o servidor sem os ajustes automáticos nos blocos de servidor que os plugins nativos oferecem.
:::

</TabItem>
</Tabs>

## Renovação Automática

Na maioria dos casos, o Certbot configura automaticamente a renovação dos certificados para você via cronjob e/ou timer do systemd. Você pode confirmar isso rodando o comando abaixo, que usa o parâmetro `--dry-run` para testar o processo.

```
certbot renew --dry-run
```

:::tip
Como mencionado antes, o método **DNS-01** não suporta renovação automática via Certbot, a menos que você configure sua própria infraestrutura para isso. Por isso, recomendamos usar o método **HTTP-01**.
:::

Se tudo estiver certo, o teste será bem-sucedido. Se quiser ver ou alterar a renovação automática, o comando estará em um destes locais: `/etc/crontab/`, `/etc/cron.*/*` ou via `systemctl list-timers`.

### Configuração Manual via Cronjob

Se por algum motivo a renovação automática não estiver configurada, você pode adicionar manualmente via cronjob. Abra o menu do crontab com `crontab -e`. Se for a primeira vez, pode ser solicitado que escolha um editor. Escolha a primeira opção, que deve ser `/bin/nano`.

Com o arquivo aberto no nano, adicione a linha abaixo para rodar a renovação todo dia às 6h da manhã no horário local.

```
0 6 * * * certbot renew
```

Salve o arquivo e saia do nano usando `CTRL + X`, depois `Y` para confirmar e por fim `ENTER`.

## Conclusão

Você configurou com sucesso o Certbot para seu(s) domínio(s) usando vários métodos, incluindo standalone, webroot ou via plugins, garantindo transmissão segura de dados via HTTPS para seu site. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />