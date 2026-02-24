---
id: server-linux-n8n
title: "Configure o n8n em um Servidor Linux - Crie Automação de Workflows Poderosas"
description: "Descubra como instalar e configurar o n8n para auto-hospedagem e criar automações de workflow com IA que facilitam seu trabalho → Saiba mais agora"
sidebar_label: Instalar n8n
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## Introdução

[n8n](https://n8n.io/) é um editor visual líder para iteração rápida onde você pode criar workflows de automação e ver os resultados instantaneamente. Perfeito tanto para automações do dia a dia quanto para workflows complexos com agentes de IA.

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

O suporte para Auto-Hospedagem e o Editor Low Code fazem do n8n o favorito de todo Dev. Se você quer controle máximo, personalizações e manter os custos baixos a longo prazo, a opção Auto-Hospedada é uma escolha excelente para você.

Quer hospedar o n8n por conta própria? Vamos te guiar em cada passo para configurar e ajustar, além de tudo que você precisa saber.

<InlineVoucher />



## Casos de uso do n8n

O n8n pode ser usado em vários cenários do dia a dia e é ideal para quem quer automatizar tarefas, usar editor low code, criar agentes de IA, liderar automações, turbinar CRM, operações de TI, operações de segurança, prototipagem backend e muito mais! O n8n é perfeito para iniciantes e experts.

O n8n oferece mais de 1367 integrações como Google Sheets, Telegram, MySQL, Slack, Discord, Postgres com combinações de automação em alta como HubSpot e Salesforce, Twilio e WhatsApp, GitHub e Jira, Asana e Slack, Asana e Salesforce, Jira e Slack e muitos templates da comunidade.

## Requisitos

Embora o n8n seja leve no núcleo, o uso de recursos pode aumentar com o tempo dependendo da quantidade de workflows, chamadas API e nós que processam muitos dados. Recomendamos os seguintes requisitos de hardware para hospedar o n8n na sua VPS.

| Hardware   | Mínimo      | Recomendado                |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 2 núcleos vCPU             |
| RAM        | 2 GB         | 4 GB                       |
| Espaço em disco | 20 GB        | 50 GB                      |
<InlineServiceLink />

## Preparação

Antes de começar, precisamos instalar o Docker e atualizar os pacotes do sistema. Já temos um guia sobre [Instalar Docker](dedicated-linux-docker.md). Certifique-se de completar isso antes de iniciar a instalação.

## Instalação
Depois de instalar o Docker no seu servidor, rode o seguinte comando para verificar a instalação:

```
docker --version
docker compose version
```

### Crie um arquivo `.env`

Crie um diretório para o projeto onde os arquivos locais do n8n e as configurações de ambiente ficarão e entre nele:

```
mkdir n8n-compose
cd n8n-compose
```

Dentro do diretório `n8n-compose`, crie um arquivo `.env` usando `nano .env` e inclua o seguinte código com a configuração do ambiente do n8n.

```
# DOMAIN_NAME e SUBDOMAIN juntos determinam onde o n8n será acessível
# O domínio principal para servir
DOMAIN_NAME=zap.cloud

# O subdomínio para servir
SUBDOMAIN=silver-octopus-xxxxx

# O exemplo acima serve o n8n em: https://silver-octopus-xxxxx.zap.cloud

# Fuso horário opcional que será usado pelo Cron e outros nós de agendamento
GENERIC_TIMEZONE=Europe/Berlin

# O email para criação do certificado TLS/SSL
SSL_EMAIL=hello@zap-hosting.com
```

:::info
Para encontrar o DOMAIN_NAME e SUBDOMAIN, vá até a página do seu produto ZAP-Hosting, acesse sua VPS e localize o seu `Nome do host`.


![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

Digite a parte `zap.cloud` em DOMAIN_NAME e a parte anterior em SUBDOMAIN (ex: silver-octopus-xxxxx).

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning Requisito HTTPS
Não use um endereço IP puro no arquivo .env. O n8n exige conexão HTTPS para acessar o site, e certificados SSL são emitidos apenas para domínios, não para IPs puros.
:::

Se quiser hospedar o n8n no seu próprio Domínio, crie um subdomínio para o n8n adicionando um registro A no gerenciador DNS do seu domínio apontando para o IP da VPS que você está usando.

| Nome             | Tipo | Valor           | TTL  | Prioridade |
| ---------------- | ---- | --------------- | ---- | ---------- |
| n8n (Subdomínio) | A    | Endereço IPv4   | 1440 | 0          |

### Crie diretório para arquivos locais

Dentro do diretório do projeto, crie outro diretório chamado `local-files` para compartilhar arquivos entre a instância do n8n e o sistema host:

```
mkdir local-files
```

### Crie o arquivo Docker Compose

Crie o arquivo Docker Compose `compose.yaml` usando `nano compose.yaml` e cole o seguinte conteúdo:

```yaml
services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_RUNNERS_ENABLED=true
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:
```

Isso instala o n8n, emite o certificado SSL, configura e deixa o n8n online no domínio.

### Iniciar o n8n

Para iniciar o n8n, rode este comando:

```
sudo docker compose up -d
```

Para parar o n8n, rode este comando:

```
sudo docker compose stop
```

### Acessando o n8n

Depois de iniciar o n8n, o próximo passo é acessá-lo pelo navegador. Digite a URL (ou Nome do host se você usou) para entrar na página de configuração. Aqui, você precisa criar uma conta Admin antes de continuar.

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info Aviso de Senha
Lembre-se da sua senha para uso futuro!
:::

Depois, uma pequena pesquisa aparecerá pedindo alguns dados básicos.

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

Opcionalmente, você pode ter acesso gratuito a alguns recursos pagos, para isso insira seu email e receba um email com a Chave de Licença. Se quiser, digite seu email e solicite a Chave de Licença.

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

A Chave de Licença chegará instantaneamente no seu email. Copie essa chave e cole em Configurações > Uso e Planos > Inserir Chave de Ativação.

### Criando o primeiro Workflow

Depois disso, você poderá acessar o Dashboard e começar a usar o n8n na hora!

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

Agora, você pode começar com uma tela em branco ou usar um template pronto. Sua instalação do n8n está pronta!

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## Conclusão e mais Recursos

Parabéns! Você instalou o n8n no seu servidor com sucesso e já pode começar a usar. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante a configuração do servidor:

- [n8n.io](https://n8n.io/) - Site Oficial
- [docs.n8n.io](https://docs.n8n.io/) - Documentação do n8n

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂



<InlineVoucher />