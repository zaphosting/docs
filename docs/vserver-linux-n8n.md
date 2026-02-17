---
id: vserver-linux-n8n
title: "VPS: Install n8n on Linux"
description: "Discover how to install and set up n8n for self-hosting to build a AI workflow automation that makes your work easier!"
sidebar_label: Install n8n
services:
  - vserver-service-n8n
---

## Introduction

[n8n](https://n8n.io/) is a leading visual editor for fast iteration where you can build automation workflows and see results instantly. Perfect for both everyday automations and complex AI agent workflows. 

![img](https://i.imgur.com/R89CZ1H.png)

Self Hosting support and Low Code Editor makes n8n every Dev's favourite. If you want maximum control, customizations and want to keep costs down over time, the Self-Hosted option is an excellent choice for you.

Planning to host n8n yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.

## Use cases of n8n

n8n can be used in many different everyday scenarios and is suitable for anyone who wants to automate tasks, use low code editor, build AI agents, lead automations, supercharge CRM, IT operations, security operations, backend prototyping, and much more! n8n is perfect for both beginners and experts. 

n8n offers 1367+ integrations such as Google Sheets, Telegram, MySQL, Slack, Discord, Postgres with trending automation combinations like HubSpot and Salesforce, Twilio and WhatsApp, GitHub and Jira, Asana and Slack, Asana and Salesforce, Jira and Slack and so many community templates.

## Prerequisites

While n8n is lightweight at its core, resource usage can increase overtime based on the amount of workflows usages, API calls, data-heavy nodes. We recommend the following hardware requirements to host n8n on your VPS.

| Hardware   | Minimum      | Recommended                |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cores | 2 vCPU Cores               |
| RAM        | 2 GB         | 4 GB                       |
| Disk space | 20 GB        | 50 GB                      |

## Preparation

Before starting, we need to install Docker and update the system packages. We already have a guide on [Installing Docker](vserver-linux-docker.md). Make you complete this before getting started with the installation.

## Installation
After you've installed Docker on your VPS, run the following command to verify the installation:

```
docker --version
docker compose version
```

### Create an `.env` file

Create a project directory to store n8n local files and n8n environment configurations and navigate inside:

```
mkdir n8n-compose
cd n8n-compose
```

Inside the `n8n-compose` directory, create an `.env` file and include the following code with n8n environment configuration.

```
# DOMAIN_NAME and SUBDOMAIN together determine where n8n will be reachable from
# The top level domain to serve from
DOMAIN_NAME=zap.cloud

# The subdomain to serve from
SUBDOMAIN=silver-octopus-xxxxx

# The above example serve n8n at: https://silver-octopus-xxxxx.zap.cloud

# Optional timezone to set which gets used by Cron and other scheduling nodes
GENERIC_TIMEZONE=Europe/Berlin

# The email address to use for the TLS/SSL certificate creation
SSL_EMAIL=hello@zap-hosting.com
```

:::info
To find the DOMAIN_NAME and SUBDOMAIN, head over to your ZAP-Hosting Product Page and access your VPS, and locate your `Hostname`.

![img](https://i.imgur.com/dgxQoX6.png)
:::

Enter the `zap.cloud` part in DOMAIN_NAME and the previous part in SUBDOMAIN (i.e silver-octopus-xxxxx).

![img](https://i.imgur.com/S0WVOKU.png)

:::note
Do not use Bare `IP Address` instead of `Hostname` in the `.env` file because n8n requires HTTPS connection to access the website, and SSL Certificate is only issued to Domains and not to Bare IP Addresses.
:::

If you want to host n8n on your own Domain instead, make a subdomain for n8n by creating A record using your Domain DNS manager pointing to the VPS IP you're using.

| Name             | Type | Value           | TTL  | Priority |
| ---------------- | ---- | --------------- | ---- | -------- |
| n8n (Subdomain)  | A    | VPS IPv4 Address| 1440 | 0        |

### Create local files directory

Inside the project directory, create another directory called `local-files` for sharing files between the n8n instance and the host system:

```
mkdir local-files
```

### Create Docker Compose file

Create a `compose.yaml` file and paste the following:

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

This installs n8n, issues SSL certificate, configures and make n8n live on the Domain.

### Start n8n

To start n8n, run this command:

```
sudo docker compose up -d
```

To stop n8n, run this command:

```
sudo docker compose stop
```

### Accessing n8n

After starting n8n, the next step is to access it with a web browser. Enter the URL ( or Hostname if you used it) to get into the setup page. Here, you have to create an Admin account before proceeding.

![img](https://i.imgur.com/MlwmIWV.png)

:::note
Make sure you remember your password for future use!
:::

Next, a small Survey would pop up prompting you to enter some basic details.

![img](https://i.imgur.com/OmqXNr1.png)

Optionally, you get free access to some paid features which requires you to enter your email and receive an email with the License Key. If you you're interested, enter your email address and request for a License Key.

![img](https://i.imgur.com/OULedlu.png)

A License Key would appear instantly in your email. Copy that Key and paste in your Settings > Usage and Plans > Enter Activation Key.

### Creating first Workflow

After that, you'll be able to visit the Dashboard and start using n8n right away!

![img](https://i.imgur.com/fbcbDQt.png)

Now, you can start with a blank Canvas or work with a premade template. Your n8n installation is all set!

![img](https://i.imgur.com/XvXN20f.png)

## Conclusion

Cheers! you've successfully installed n8n on your VPS and can start using it right away. We also recommend you to visit the official [n8n Docs](https://docs.n8n.io/) and [n8n](https://n8n.io/) website for additional guidance!

Have some questions unsolved? Feel free to contact our Support Team, which is available daily to help you!