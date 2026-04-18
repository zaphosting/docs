---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Learn how to deploy Tymeslot with Docker, Docker containers, and Docker install basics on Linux or Windows for self-hosted scheduling. -> Learn more now"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tymeslot is an open-source meeting and appointment scheduling platform built with Elixir and Phoenix LiveView. In this guide, you will learn what Tymeslot is, what you need to run it, and how to deploy it on Linux or Windows using Docker.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you deploy Tymeslot, you should make sure your system meets the basic requirements and that Docker is available.

### Requirements

The following requirements are based on the available project information and the provided setup draft:

| Requirement | Recommendation |
|---|---|
| CPU | At least `1` vCPU |
| RAM | At least `2 GB` |
| Disk space | At least `10 GB` |
| Operating system | Linux or Windows |
| Container runtime | Docker |
| Network | Access to port `4000` |

### What is verified and what is not

:::info Source Availability
The Tymeslot repository confirms that the project is an open-source meeting scheduling platform built with Elixir and Phoenix LiveView and that Docker-related files such as `Dockerfile.docker` and `docker-compose.yml` exist in the repository.

However, the exact production deployment steps, image name, and all required environment variables are not fully verifiable from the fetched source material provided here. Because of that, this guide uses the available draft information and clearly marks values that you should verify against the official repository before production use.
:::

### Install Docker

You need Docker before you can run Tymeslot in a container.

- On Linux, install Docker Engine using the official [Docker documentation](https://docs.docker.com/engine/install/)
- On Windows, install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

:::tip Docker for Windows
If you are using Docker for Windows, make sure virtualization is enabled and Docker Desktop is running before you continue.
:::

## Software Overview

Tymeslot belongs to the *Scheduling* category and is designed for self-hosted appointment and meeting management.

| Property | Value |
|---|---|
| Name | `Tymeslot` |
| Category | `Scheduling` |
| Source | `https://github.com/tymeslot/tymeslot` |
| Tech stack | `Elixir`, `Phoenix LiveView` |
| Deployment style | Self-hosted, Docker-supported |
| Weekly mention | Self-Host Weekly, 10 April 2026 |

### Why use Tymeslot

Tymeslot can be useful if you want to:

- host your own scheduling platform
- keep booking data on your own infrastructure
- manage appointments without relying on a third-party SaaS platform
- deploy a modern web application with Docker containers

## Deployment Options

Based on the available information, there are two possible approaches:

| Method | Status |
|---|---|
| Docker deployment | Recommended |
| Native Elixir/Phoenix installation | Possible, but more advanced |

For most users, Docker is the better option because it simplifies installation, updates, and service management.

## Install Tymeslot with Docker

This is the most practical method for Linux and Windows systems.

### Pull the Docker image

The provided draft uses the following image reference:

```bash
docker pull youruser/tymeslot:latest
```

:::caution Verify the Docker image first
The exact public image name is not confirmed by the fetched repository content. Before you use this command in production, verify the correct image name in the official Tymeslot repository, release notes, or Docker Hub page if one is published.
:::

### Start the container

You can start Tymeslot with the following command from the provided setup draft:

```bash
docker run --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE="$(openssl rand -base64 64 | tr -d '\n')" \
  -e PHX_HOST=localhost \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  youruser/tymeslot:latest
```

If you are using Windows PowerShell, the `openssl` command may not be available by default. In that case, generate a secure random value separately and replace `SECRET_KEY_BASE` manually.

### Example command reference

| Option | Purpose |
|---|---|
| `--name tymeslot` | Sets the container name |
| `-p 4000:4000` | Exposes Tymeslot on port `4000` |
| `-e SECRET_KEY_BASE=...` | Defines the application secret for encryption and sessions |
| `-e PHX_HOST=localhost` | Sets the hostname used by Phoenix |
| `-v tymeslot_data:/app/data` | Persists application data |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persists PostgreSQL data |
| `youruser/tymeslot:latest` | Docker image name from the draft |

### Generate a secret key on Linux

If `openssl` is installed, you can generate a secret like this:

```bash
openssl rand -base64 64 | tr -d '\n'
```

### Generate a secret key on Windows PowerShell

You can generate a placeholder secret in PowerShell like this:

```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

:::danger Use your own secret value
Do not reuse example secrets in production. Always generate your own `SECRET_KEY_BASE` and store it securely.
:::

## Configure Tymeslot

Before first use, you should review the most important runtime settings.

### Environment variables

The draft confirms the following environment variables:

| Variable | Example | Purpose |
|---|---|---|
| `SECRET_KEY_BASE` | `[your_secret_key]` | Secures sessions and encryption-related functions |
| `PHX_HOST` | `[your_domain]` or `[your_server_ip]` | Defines the public hostname used by the application |

When you use placeholders:

- `[your_secret_key]` is your generated secure secret
- `[your_domain]` is your public domain if you use one
- `[your_server_ip]` is your server's IP address for direct access

### SMTP configuration

The provided draft also mentions SMTP configuration in `config/prod.exs` for email notifications:

```elixir
config :tymeslot, Tymeslot.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.example.com",
  port: 587,
  username: "your_email@example.com",
  password: "your_password",
  tls: :if_available,
  auth: :always
```

:::note SMTP verification
The exact mailer configuration format should be verified against the current Tymeslot repository before you apply it in production, because application configuration can change between releases.
:::

## Access Tymeslot

Once the container is running, you can test the web interface.

### Local access

If you are testing locally, open:

```text
http://localhost:4000
```

### Remote access

If Tymeslot is running on a remote server, open:

```text
http://[your_server_ip]:4000
```

If you have configured a domain and reverse proxy, you may instead access it through:

```text
https://[your_domain]
```

## Firewall and Network

Tymeslot needs network access on the port you publish from Docker.

### Required port

| Port | Protocol | Purpose |
|---|---|---|
| `4000` | TCP | Web access to the Tymeslot application |

### Firewall considerations

You should ensure that:

- port `4000` is open on the server firewall if you want direct access
- your cloud firewall or provider firewall also allows the same port
- your reverse proxy forwards traffic correctly if you use a domain

:::caution Public exposure
If you expose port `4000` directly to the internet, make sure you understand the security implications. For production deployments, a reverse proxy with HTTPS is usually the better choice.
:::

## Optional Native Installation

A native installation may be possible if you prefer not to use Docker. This method is more advanced and requires an Elixir and Phoenix-compatible environment.

### Basic native steps

According to the provided draft, the process is:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Native deployment notes

For native deployments, you would also need:

- Elixir
- Erlang/OTP
- Phoenix dependencies
- a supported database setup
- production configuration review

:::info Native installation complexity
The fetched source material does not provide enough verified detail here to document a complete Linux or Windows native production setup safely. If you want to use this method, review the official repository documentation directly before deployment.
:::

## Maintenance and Troubleshooting

After deployment, you should verify that the service stays available and that your data is persistent.

### Check container status

```bash
docker ps
```

### View logs

```bash
docker logs tymeslot
```

### Restart the container

```bash
docker restart tymeslot
```

### Common issues

| Issue | Possible cause | Suggested action |
|---|---|---|
| Web page does not load | Port `4000` is blocked | Check firewall and Docker port mapping |
| Container exits immediately | Invalid environment variables | Review `SECRET_KEY_BASE` and image settings |
| Database-related errors | Persistent storage or database initialization issue | Check logs and verify volume usage |
| Wrong hostname in links | `PHX_HOST` is incorrect | Set `PHX_HOST` to `[your_domain]` or `[your_server_ip]` |

## Best Practices

### Use persistent volumes

Always keep persistent Docker volumes for application and database data so that container recreation does not remove your data.

### Use a reverse proxy

For public deployments, it is usually better to place Tymeslot behind a reverse proxy such as Nginx or Apache and enable HTTPS.

### Verify upstream changes

Because Tymeslot is actively developed, you should review the official repository before updating. This is especially important for:

- changed Docker images
- updated environment variables
- database migrations
- mail configuration changes

## Additional References

| Resource | Link |
|---|---|
| Tymeslot GitHub repository | [Official Tymeslot Repository](https://github.com/tymeslot/tymeslot) |
| Self-Host Weekly mention | [Self-Host Weekly - 10 April 2026](https://selfh.st/weekly/2026-04-10/) |
| Docker documentation | [Docker Documentation](https://docs.docker.com/) |
| Docker Desktop download | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |

## Conclusion

Congratulations, you have successfully learned how to review and deploy Tymeslot on Linux or Windows using Docker. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!