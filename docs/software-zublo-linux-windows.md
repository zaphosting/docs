---
id: software-zublo-linux-windows
title: "Software - Zublo (Linux/Windows)"
description: "Learn how to deploy Zublo for secure subscription data management, recurring payment tracking, and self-hosted data insights with Docker -> Learn more now"
sidebar_label: Software - Zublo (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Zublo is an open-source, self-hosted subscription tracker designed to help you manage recurring payments and related data in one place. In this guide, you will learn how to deploy Zublo on a Linux or Windows server using Docker and verify that the web interface is working correctly.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure your server meets the basic requirements and has Docker installed.

### Requirements

| Component | Recommended minimum |
| --- | --- |
| CPU | 1 vCore |
| RAM | 512 MB |
| Storage | 1 GB free disk space |
| Operating System | Linux or Windows with Docker support |
| Network | Access to port `9597` |

### Required software

You need the following software installed:

| Software | Purpose |
| --- | --- |
| [Docker](https://www.docker.com/) | Runs the Zublo container |
| Docker Compose | Starts and manages the container stack |

:::info Docker Requirement
This guide is based on the Docker deployment method referenced by the project repository. If Docker is not installed yet, you need to complete that first before continuing.
:::

:::caution Port Access
Zublo uses port `9597` by default. Make sure this port is not already in use by another service and is allowed through your firewall if you want to access the web interface remotely.
:::

## About Zublo

Zublo is intended for tracking subscriptions, recurring payments, and spending-related data through a self-hosted web application. According to the project repository, it is Docker-first and built for self-hosters who want control over their own data.

### What the application provides

Based on the available project information, Zublo focuses on the following areas:

| Feature area | Description |
| --- | --- |
| Subscription tracking | Manage recurring services and payments |
| Self-hosting | Keep your subscription data on your own server |
| Web interface | Access the application through a browser |
| API access | Use the built-in API endpoint |
| Admin backend | Access the PocketBase admin interface |

:::note Feature Availability
Some advanced functions mentioned in third-party summaries, such as AI-assisted analysis, may depend on the current project version. If a feature is not visible in your installation, check the official repository for version-specific details: [Zublo GitHub repository](https://github.com/danielalves96/zublo)
:::

## Create the Zublo project directory

First, create a dedicated directory for your Zublo deployment so that your configuration and persistent data remain organized.

### Linux

Run the following commands in your terminal:

```bash
mkdir -p zublo-data
cd zublo-data
```

### Windows

If you are using PowerShell, run:

```powershell
mkdir zublo-data
cd zublo-data
```

This folder will contain your `docker-compose.yml` file and the persistent application data directory.

## Create the Docker Compose configuration

Next, create a `docker-compose.yml` file inside your project directory.

### Example configuration

Use the following configuration:

```yaml
services:
  zublo:
    image: ghcr.io/danielalves96/zublo:latest
    container_name: zublo
    restart: unless-stopped
    ports:
      - "9597:9597"
    environment:
      PB_ENCRYPTION_KEY: "[your_secure_encryption_key]"
    volumes:
      - ./zublo-data:/pb/pb_data
```

### Configuration overview

| Key | Example value | Purpose |
| --- | --- | --- |
| `image` | `ghcr.io/danielalves96/zublo:latest` | Pulls the latest Zublo container image |
| `container_name` | `zublo` | Sets a readable container name |
| `restart` | `unless-stopped` | Restarts the container automatically after reboots or failures |
| `ports` | `9597:9597` | Exposes the web application on port `9597` |
| `PB_ENCRYPTION_KEY` | `[your_secure_encryption_key]` | Protects sensitive stored data |
| `volumes` | `./zublo-data:/pb/pb_data` | Persists application data on your server |

:::danger Use a Strong Encryption Key
Do not leave the encryption key set to a weak or default value. Replace `[your_secure_encryption_key]` with a long, random secret before starting the container in production.
:::

### Save the file

Save the file as `docker-compose.yml` in your current directory. Once saved, you are ready to start the service.

## Start Zublo

After creating the Compose file, start the container stack.

```bash
docker compose up -d
```

If your environment uses the older Docker Compose syntax, you may need to use:

```bash
docker-compose up -d
```

### Verify that the container is running

You can check the container status with:

```bash
docker ps
```

You should see a container named `zublo` in the list.

### View logs if needed

If the service does not start correctly, inspect the logs:

```bash
docker logs zublo
```

This helps you identify issues such as invalid configuration, port conflicts, or permission problems with persistent data.

## Access the web interface

Once the container is running, you can open Zublo in your browser.

### Application URLs

Replace `[your_server_ip]` with your server's public IP address or local network IP.

| Interface | URL |
| --- | --- |
| Main application | `http://[your_server_ip]:9597` |
| PocketBase admin interface | `http://[your_server_ip]:9597/_/` |
| API endpoint | `http://[your_server_ip]:9597/api/` |

:::info Localhost vs Remote Access
If you are working directly on the same machine where Zublo is installed, you can also use `http://localhost:9597`. For remote access, use your actual server IP or a configured domain.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Configure secure access

After confirming that Zublo is reachable, you should review how it is exposed to the internet.

### Firewall considerations

If you cannot reach the application from another device, confirm that port `9597` is open in your firewall configuration.

| Port | Protocol | Purpose |
| --- | --- | --- |
| `9597` | TCP | Zublo web interface, admin panel, and API |

### Reverse proxy usage

If you want to use a domain such as `[your_domain]`, you can place Zublo behind a reverse proxy like Nginx or another supported proxy solution. In that setup, the proxy forwards requests to `http://127.0.0.1:9597` or the internal Docker host address.

:::tip Use HTTPS for Internet-Facing Access
If you plan to expose Zublo publicly, it is recommended to use a reverse proxy with SSL so your subscription data is encrypted in transit.
:::

## Manage persistent data

Zublo stores its persistent application data in the mounted directory defined in the Compose file.

### Data location

In this guide, the following volume mapping is used:

```yaml
volumes:
  - ./zublo-data:/pb/pb_data
```

This means your application data is stored in the local `zublo-data` folder inside your project directory.

### Why persistence matters

Persistent storage ensures that your application data remains available after:

- container restarts
- server reboots
- image updates
- maintenance operations

:::caution Backup Recommendation
Because Zublo stores important personal subscription data, you should back up the `zublo-data` directory regularly before making major changes or updates.
:::

## Basic maintenance

Once Zublo is running, you may occasionally need to update or restart it.

### Restart the container

```bash
docker restart zublo
```

### Stop the deployment

```bash
docker compose down
```

### Update to the latest image

Pull the latest image and recreate the container:

```bash
docker compose pull
docker compose up -d
```

### Useful command reference

| Command | Purpose |
| --- | --- |
| `docker compose up -d` | Start Zublo in the background |
| `docker ps` | Check running containers |
| `docker logs zublo` | View container logs |
| `docker restart zublo` | Restart the container |
| `docker compose down` | Stop and remove the container |
| `docker compose pull` | Download the latest image |

## Troubleshooting

If Zublo does not work as expected, check the following common causes.

### Port `9597` is already in use

If Docker reports a port binding error, another service is already using `9597`. You need to stop the conflicting service or change the host-side port mapping.

Example with a different external port:

```yaml
ports:
  - "9600:9597"
```

In that case, you would access the application through `http://[your_server_ip]:9600`.

### The container starts but the page does not load

Check the following:

- confirm that the container is running with `docker ps`
- review logs with `docker logs zublo`
- verify that your firewall allows the selected port
- confirm that you are using the correct IP address or hostname

### Encryption key issues

If you change `PB_ENCRYPTION_KEY` after initial setup, existing encrypted data may no longer be readable. If you need to rotate this key, review the project's official documentation first because the exact migration behavior is not documented in the provided source material.

:::note Missing Behavior Details
The provided source material does not fully document all first-run admin steps, account creation behavior, or advanced configuration options. If you need those details, review the upstream project documentation: [Zublo GitHub repository](https://github.com/danielalves96/zublo)
:::

## Conclusion

Congratulations, you have successfully installed and configured Zublo on Linux or Windows using Docker. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!