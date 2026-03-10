---
id: server-linux-gluetun-webui
title: "Setup Gluetun WebUI on a Linux Server - Manage your VPN container easily"
description: "Learn how to install and run Gluetun WebUI on your Linux VPS to monitor and manage your Gluetun VPN container → Learn more now"
sidebar_label: Install Gluetun WebUI
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) is a lightweight web interface designed to simplify the management of the Gluetun VPN container. Gluetun itself is a popular Docker container used to route other applications through a secure VPN connection.

The WebUI adds a convenient dashboard that allows you to monitor the VPN status, manage connections, and control container behavior without needing to manually interact with Docker commands or configuration files.

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

Self-hosting the Gluetun WebUI on your own server provides a centralized interface for managing your VPN setup, making it especially useful when running multiple containers that depend on a Gluetun VPN connection.

Planning to run Gluetun WebUI on your VPS? This guide walks you through the installation and configuration process step by step.

<InlineVoucher />



## Use cases of Gluetun WebUI

Gluetun WebUI is useful for anyone running containerized applications behind a VPN. Typical use cases include:

- Monitoring VPN connection status in real time
- Managing containers that route traffic through Gluetun VPN
- Simplifying VPN container configuration and troubleshooting
- Controlling VPN services without using complex Docker commands
- Running a centralized VPN management interface for self-hosted environments

The WebUI is particularly useful in homelab environments or VPS setups where multiple applications rely on a VPN container.



## Prerequisites

Before installing Gluetun WebUI, ensure that your server meets the following requirements.

| Hardware | Minimum | Recommended |
|----------|---------|-------------|
| CPU | 1 Cores | 2 Cores |
| RAM | 1 GB | 4 GB |
| Disk space | 5 GB | 10 GB |

Required software:

- Docker
- Docker Compose

If Docker is not installed yet, follow our guide on installing Docker before proceeding.

<InlineServiceLink />

## Preparation

Before installing Gluetun WebUI, verify that Docker and Docker Compose are available on your server. Run the following commands to verify that Docker is installed and ready to use:

```
docker --version
docker compose version
```
Next create a directory for the Gluetun WebUI installation.
```
mkdir gluetun-webui
cd gluetun-webui
```
This directory will contain the Docker Compose configuration used to run the web interface.

## Installation

Create a Docker Compose file for Gluetun WebUI.
```
nano compose.yaml
```
Insert the following configuration:

```yaml
services:
gluetun-webui:
image: ghcr.io/sir-scuzza/gluetun-webui:latest
container_name: gluetun-webui
restart: unless-stopped
ports:
- "8000:8000"
environment:
- GLUETUN_API_URL=http://gluetun:8000
volumes:
- ./data:/app/data
```

This configuration will:

- Deploy the Gluetun WebUI container
- Connect it to the Gluetun API
- Expose the WebUI through port 8000
- Store persistent configuration data in the `data` directory

Save the file and exit the editor.

## Start Gluetun WebUI

Start the container using Docker Compose.

```
docker compose up -d
```

Docker will download the required image and launch the WebUI container. To verify the container is running, use:

```
docker ps
```

## Accessing the Web Interface

Once the container is running, open the WebUI in your browser.

```
http://YOUR_SERVER_IP:8000
```

Replace `YOUR_SERVER_IP` with the IP address of your VPS. After opening the interface, you will be able to:

- Monitor VPN connection status
- Manage Gluetun container behavior
- View VPN configuration details
- Control services routed through the VPN container



## Conclusion

Congratulations! You have successfully installed **Gluetun WebUI** on your Linux server. The web interface now allows you to easily monitor and manage your Gluetun VPN container without needing to manually interact with Docker commands.

Running Gluetun WebUI alongside your VPN container simplifies management and gives you a clear overview of your VPN connection status and configuration.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />