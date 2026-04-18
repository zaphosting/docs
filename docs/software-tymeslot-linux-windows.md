---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Learn how to deploy Tymeslot with Docker, manage docker containers, and review key configuration details for Linux and Windows hosting environments. -> Learn more now"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tymeslot is an open-source meeting and appointment scheduling platform built with Elixir and Phoenix LiveView. In this guide, you will learn what Tymeslot requires, how to deploy it with Docker on Linux or Windows, and which configuration points you should review before putting it into production.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, you need a system that can run Docker reliably and expose Tymeslot over the network.

### Requirements

| Requirement | Recommendation |
| --- | --- |
| CPU | 1 vCPU or more |
| RAM | At least 2 GB |
| Disk space | At least 10 GB |
| Operating system | Linux or Windows |
| Container platform | [Docker](https://www.docker.com/) |
| Network port | `4000/tcp` |

### What you need to have ready

| Item | Why it is needed |
| --- | --- |
| A Linux server or Windows system | To host the application |
| Docker installed | Tymeslot provides Docker-related files in its repository |
| Open network access to `4000` or a reverse proxy | To access the web interface |
| A hostname such as `[your_domain]` | Recommended for production use |
| A strong generated secret | Required for session and application security |

:::info Docker Installation Requirement
This guide focuses on Docker because the Tymeslot repository includes Docker-related files such as `Dockerfile.docker` and `docker-compose.yml`. Native installation with Elixir and Phoenix may be possible, but exact production steps were not fully verifiable from the provided source material.
:::

### Windows note

On Windows, you generally need a working Docker environment such as Docker Desktop. If you are using Docker for Windows, make sure virtualization is enabled and that Docker Desktop is running before continuing.

## About Tymeslot

Tymeslot is listed by its project repository as an open-source meeting scheduling platform built with Elixir and Phoenix LiveView. It is intended for self-hosting and can also be used through the project's managed cloud offering.

### Verified project details

| Attribute | Value |
| --- | --- |
| Name | Tymeslot |
| Category | Scheduling |
| Source repository | `https://github.com/tymeslot/tymeslot` |
| Weekly mention | Self-Host Weekly, 10 April 2026 |
| Technology | Elixir / Phoenix LiveView |
| Self-hosting support | Yes |

:::note Source Verification
The repository confirms the project name, purpose, and technology stack. However, some runtime details such as the exact published Docker image name, complete environment variable list, and official production port mapping were not fully visible in the provided source snapshot, so those parts should be verified directly in the upstream repository before production deployment.
:::

## Deployment Method

For most users, Docker is the simplest deployment method because it keeps dependencies isolated and makes updates easier to manage.

### Why Docker is recommended

| Benefit | Explanation |
| --- | --- |
| Easier setup | You do not need to install Elixir, Erlang, and Phoenix manually |
| Cleaner updates | You can replace docker images without rebuilding the host environment |
| Better portability | The same container setup can be used on Linux and Windows |
| Simpler rollback | You can return to an earlier image version if needed |

### Important limitation

:::caution Docker Image Name Must Be Verified
The provided draft used `youruser/tymeslot:latest` as an example image, but this is only a placeholder and not a verified official image name. Before deployment, check the Tymeslot repository, its `README-Docker.md`, or the project's container registry instructions to confirm the correct image source.
:::

## Install Tymeslot with Docker

This section shows a Docker-based deployment flow using a placeholder image reference. Replace `[your_tymeslot_image]` with the verified image name from the official Tymeslot project.

### Pull the image

```bash
docker pull [your_tymeslot_image]
```

### Generate a secret key

On Linux, you can generate a strong secret with:

```bash
openssl rand -base64 64 | tr -d '\n'
```

Save the output securely and use it as `[your_secret_key_base]`.

On Windows, you can generate a secure random value using another trusted method if `openssl` is not available in your shell environment.

### Run the container

```bash
docker run -d \
  --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE='[your_secret_key_base]' \
  -e PHX_HOST='[your_domain_or_ip]' \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  [your_tymeslot_image]
```

### Parameter reference

| Parameter | Meaning |
| --- | --- |
| `-d` | Starts the container in detached mode |
| `--name tymeslot` | Assigns a readable container name |
| `-p 4000:4000` | Maps host port `4000` to container port `4000` |
| `-e SECRET_KEY_BASE=...` | Sets the application secret |
| `-e PHX_HOST=...` | Sets the hostname used by Phoenix |
| `-v tymeslot_data:/app/data` | Persists application data |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Persists PostgreSQL data if used inside the container |

:::caution Verify Volume Paths First
The volume paths shown above come from the draft material and were not fully confirmed in the upstream documentation snapshot. Review the official Tymeslot Docker documentation before relying on these exact paths in production.
:::

### Check container status

```bash
docker ps
```

To review logs:

```bash
docker logs tymeslot
```

If you are troubleshooting startup problems, logs are the first place you should check.

## Optional Docker Compose Deployment

If you prefer managing docker containers with Compose, you can define the service in a `docker-compose.yml` file. This is often easier to maintain than long `docker run` commands.

### Example Compose file

```yaml
services:
  tymeslot:
    image: [your_tymeslot_image]
    container_name: tymeslot
    ports:
      - "4000:4000"
    environment:
      SECRET_KEY_BASE: "[your_secret_key_base]"
      PHX_HOST: "[your_domain_or_ip]"
    volumes:
      - tymeslot_data:/app/data
      - tymeslot_pg:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  tymeslot_data:
  tymeslot_pg:
```

Start the stack with:

```bash
docker compose up -d
```

:::tip Compose Management
Using Compose makes updates, restarts, and backups easier because your container configuration stays in a single file. This is especially useful if you manage multiple docker images on the same host.
:::

## Configure Tymeslot

After the container is running, review the most important configuration values.

### Core environment variables

| Variable | Purpose |
| --- | --- |
| `SECRET_KEY_BASE` | Protects sessions and application secrets |
| `PHX_HOST` | Defines the public hostname or IP address |

Use placeholders in the following way:

- `[your_secret_key_base]` is your generated secure secret
- `[your_domain_or_ip]` is the public hostname or server IP, for example `schedule.[your_domain]` or `[your_server_ip]`

### SMTP configuration

The draft material indicates that SMTP can be configured for email notifications in `config/prod.exs`. Example:

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

:::note SMTP Setup Verification
The example above comes from the provided draft and reflects a typical Elixir mailer configuration. You should still compare it with the current upstream Tymeslot configuration files because mail settings can change between releases.
:::

## Network and Access

Once Tymeslot is running, you need to make sure it is reachable from your browser.

### Access the web interface

Open the following URL in your browser:

```text
http://[your_server_ip]:4000
```

If you configured a reverse proxy and DNS, you may instead use:

```text
https://[your_domain]
```

### Port reference

| Port | Protocol | Purpose |
| --- | --- | --- |
| `4000` | TCP | Default web access from the draft setup |

### Firewall considerations

You need to allow inbound traffic to `4000/tcp` if you access Tymeslot directly.

:::caution Public Exposure
If you expose Tymeslot directly to the internet, you should strongly consider placing it behind a reverse proxy with HTTPS. This improves security and gives you cleaner domain-based access.
:::

## Reverse Proxy Recommendation

A reverse proxy is recommended if you want to use a domain name and TLS certificate.

### Why use a reverse proxy

| Benefit | Explanation |
| --- | --- |
| HTTPS support | Encrypts traffic between users and your service |
| Domain-based access | Lets you use `[your_domain]` instead of a raw port |
| Easier certificate management | Works well with Let's Encrypt and similar tools |
| Cleaner public access | Hides internal application ports |

### What to verify

The exact reverse proxy configuration depends on whether you use Nginx, Apache, or another web server. Because no official proxy example was fully available in the provided source material, you should verify the required headers and websocket handling in the upstream Tymeslot documentation before deployment.

## Native Installation Notes

Tymeslot is built with Elixir and Phoenix LiveView, so a native installation may be possible on Linux or Windows development environments. The draft included these commands:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### What to keep in mind

| Topic | Note |
| --- | --- |
| Elixir and Erlang | Must be installed in compatible versions |
| Phoenix dependencies | May require additional build tools |
| Database setup | Must be configured correctly before migrations |
| Production hardening | Usually more complex than Docker |

:::danger Native Production Deployment Requires Verification
The native installation steps above were included in the draft but were not fully confirmed from the provided upstream repository snapshot. You should not rely on them for production without checking the current official Tymeslot documentation and repository files first.
:::

## Verify the Installation

After deployment, confirm that the application is working correctly.

### Basic checks

| Check | Expected result |
| --- | --- |
| `docker ps` | The `tymeslot` container is running |
| `docker logs tymeslot` | No repeating startup or database errors |
| Browser access | The Tymeslot interface loads |
| Port test | `4000` responds on the server |

### Common issues

| Problem | Possible cause |
| --- | --- |
| Page does not load | Port `4000` is blocked or container is not running |
| Container exits immediately | Invalid environment variables or missing dependencies |
| Database errors in logs | Database initialization failed or storage path is wrong |
| Wrong hostname behavior | `PHX_HOST` is not set correctly |

## Updating Tymeslot

When a newer release is available, update the deployment carefully.

### Docker update workflow

1. Pull the updated image:
   ```bash
   docker pull [your_tymeslot_image]
   ```
2. Stop the current container:
   ```bash
   docker stop tymeslot
   ```
3. Remove the old container:
   ```bash
   docker rm tymeslot
   ```
4. Start a new container with the same configuration.

If you use Compose, you can usually update with:

```bash
docker compose pull
docker compose up -d
```

:::tip Backup Before Updating
Before updating, back up your persistent volumes and any related database data. This gives you a recovery path if the new version introduces a migration or compatibility issue.
:::

## Additional References

| Resource | Link |
| --- | --- |
| Official Tymeslot repository | [GitHub - Tymeslot](https://github.com/tymeslot/tymeslot) |
| Docker official website | [Docker](https://www.docker.com/) |
| Self-Host Weekly mention | [Self-Host Weekly - 10 April 2026](https://selfh.st/weekly/2026-04-10/) |

## Conclusion

Congratulations, you have successfully reviewed and deployed Tymeslot on Linux or Windows using Docker. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!