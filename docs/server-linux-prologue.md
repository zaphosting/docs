---
id: server-linux-prologue
title: "Setup Prologue on a Linux Server - Host your own audiobook listening platform"
description: "Learn how to install and run a Prologue-compatible audiobook server on your Linux VPS using either Docker or a manual setup → Learn more now"
sidebar_label: Install Prologue
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[Prologue](https://prologue.audio/) is a modern audiobook listening platform designed to work with self-hosted audiobook servers. It allows you to stream, organize, and listen to your audiobook library across multiple devices such as iPhone, iPad, Apple Watch, and CarPlay.

Instead of relying on cloud-based audiobook platforms, a self-hosted setup gives you full control over your audiobook collection and streaming infrastructure. Once the server is configured, the Prologue mobile application connects to it and synchronizes playback progress, bookmarks, and listening history.

In this guide, you will learn how to deploy a Prologue-compatible audiobook server on a Linux VPS using two different methods:

- Manual installation on a web server
- Docker-based deployment for easier containerized management

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Use cases of Prologue

Prologue can be used in many scenarios where users want full ownership and flexibility over their audiobook library.

Common use cases include:

- Hosting a private audiobook streaming platform
- Managing large audiobook collections in one centralized interface
- Syncing playback across multiple devices
- Accessing audiobooks remotely from anywhere
- Creating a self-hosted alternative to commercial audiobook platforms

A self-hosted setup also ensures your media files remain under your control while allowing you to build a scalable audiobook server.



## Prerequisites

Before installing the server, ensure your system meets the following requirements.

| Hardware | Minimum | Recommended |
|----------|---------|-------------|
| CPU | 1 vCPU | 2 vCPU |
| RAM | 2 GB | 4 GB |
| Disk space | 20 GB | 50 GB |

<InlineServiceLink />

Required software depends on the installation method:

Manual setup:

- Linux server
- Web server (Apache or Nginx)
- PHP
- Database server

Docker setup:

- Docker
- Docker Compose





## Preparation

Before starting the installation, update your system packages.

```
sudo apt update
sudo apt upgrade
```


Verify that the required runtime environment is installed depending on your chosen setup method. For Docker installations:

```
docker --version
docker compose version
```

If Docker is not installed yet, install it first before continuing.



## Manual Setup

The manual setup installs the application directly on your server without containers. This method is useful when deploying on traditional web hosting environments.



### Download the application

First create a project directory and download the application files.

```
mkdir prologue-server
cd prologue-server
```


Next, clone the project repository:

```
git clone https://github.com/michaelstaake/Prologue.git
```



### Configure the web server

Move the application files to your web server directory. Example for [Apache](dedicated-linux-webserver.md#apache):

```
sudo mv prologue-server /var/www/prologue
```


Create a virtual host configuration pointing to the application directory. Example Apache configuration:

```<VirtualHost *:80>
ServerName yourdomain.com
DocumentRoot /var/www/prologue
</VirtualHost>
```


Restart the web server after configuration.

```
sudo systemctl restart apache2
```



### Configure environment settings

Edit the configuration file and update the required settings such as database connection and server URL.

```
nano config.php
```


Once the configuration is complete, the web interface will be available through your configured domain or server IP.



## Docker Setup

Docker provides a simpler deployment method by running the application inside a container.



### Create project directory

Create a directory for the Docker deployment.

```
mkdir prologue-docker
cd prologue-docker
```



### Create Docker Compose configuration

Create a Docker Compose file by using `nano compose.yaml` and insert the following configuration:

```
services:
  prologue:
    image: ghcr.io/michaelstaake/prologue:latest
    container_name: prologue
    ports:
      - "13378:80"
    volumes:
      - ./data:/data
    restart: unless-stopped
```



### Start the container

Start the container using Docker Compose by running `docker compose up -d` and verify the container is running using `docker ps`. Docker will automatically download the required image and start the audiobook server.



### Accessing the Server

Once the server is running, open your browser and navigate to:

```
http://YOUR_SERVER_IP:13378
```

Replace YOUR_SERVER_IP with the IP address of your VPS. During the first launch you will be prompted to:

- Create an administrator account
- Configure your audiobook library directory
- Scan and import audiobook files


After your library is configured, you can connect the Prologue mobile app to the server and start streaming your audiobook collection.



## Conclusion

Congratulations! You have successfully deployed a Prologue-compatible audiobook server using either a manual installation or a Docker-based deployment.

Both installation methods allow you to host your audiobook collection on your own infrastructure and stream it to your devices through the Prologue app. The Docker setup provides easier maintenance and updates, while the manual setup offers greater control over your web server environment.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
