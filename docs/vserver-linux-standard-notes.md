---
id: vserver-linux-standard-notes
title: "Setup Standard Notes on a Linux Server - Build Your Private Notes System"
description: "Discover how to securely sync and protect your notes across devices with Standard Notes self-hosting → Learn more now"
sidebar_label: Install Standard Notes
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Standard Notes is an open-source notes app that safeguards your data using audited end-to-end encryption. Only you control the decryption keys. It syncs your encrypted notes and files seamlessly across unlimited devices, keeps them accessible offline, and actively protects your content from external access. 

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.

<InlineVoucher />



## Prerequisites

Before installing **Standard Notes**, ensure that your hosting environment meets the following requirements to guarantee a smooth installation and optimal performance.

| Hardware   | Minimum      | ZAP-Hosting Recommendation |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cores | 4 vCPU Cores               |
| RAM        | 2 GB         | 4 GB                       |
| Disk space | 5 GB         | 25 GB                      |

The software requires that all necessary dependencies are installed and that it is running on a supported operating system. Make sure your server meets the following requirements before proceeding with the installation:

**Dependencies:** `Docker (Engine 26+ and Compose)` 

**Operating System:** Latest version of Ubuntu/Debian supporting Docker 26+

Ensure all dependencies are installed and the correct operating system version is in use to avoid compatibility issues during the installation of Standard Notes.



## Preparation

Before setting up the **Standard Notes**, you need to prepare your system. This includes updating your operating system to the latest version and installing all required dependencies. These preparations ensure a stable environment and help prevent issues during or after the installation.


### Update System
To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. To do this, run the following command:

```
sudo apt update && sudo apt upgrade -y
```
This ensures that your system has the latest security patches and software versions before proceeding.

### Install dependencies
Once the update process is complete, the installation of dependencies can now be proceeded with. Standard Notes will be deployed and run on your machine using an array of Docker containers. This requires Docker to be installed first. To do this, run the following command: 

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

A complete walkthrough of the installation process and how to use Docker is available in our [Docker](dedicated-linux-docker.md) guide.




## Installation
Now that all requirements have been met and the necessary preparations have been completed, you can proceed with the installation of the Standard Notes application.



First, create a folder that will hold all configuration and setup files. This folder will serve as your working directory for the installation.

```
mkdir standardnotes
cd standardnotes
```

Next, create a .env file in your working directory and populate it with default values from the project’s sample configuration:
```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

This file contains only the minimum required variables for a functional setup. The complete list of variables currently in use can be found here: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Open the .env file and ensure that all keys in the KEYS section are properly set. Generate random values for each required environment variable using:

```
openssl rand -hex 32
```

Paste these values into your `.env` file.  Standard Notes requires a bootstrap script for LocalStack. Download it into your working directory and make it executable:

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Download the official example configuration and save it as `docker-compose.yml` inside your working folder. This file defines all container services needed for Standard Notes.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

Once everything is ready, pull the latest images and start the services in detached mode:

```
docker compose pull && docker compose up -d
```



## Configuration

The default configuration in the provided `docker-compose.yml` file can be customized to fit your specific requirements. A key area is the `server` service, where you can adjust the port mappings in the `ports` property. This allows you to choose which host ports the application should be accessible on, helping to avoid conflicts with other running services or to align with your preferred network setup.  

Securing the database is another critical step. Default passwords should be replaced with strong, randomly generated strings. You can create a secure password with:  

```
openssl rand -hex 12  
```

Add the generated value to the `.env` file as `DB_PASSWORD`. The same value also needs to be set for `MYSQL_ROOT_PASSWORD` and `MYSQL_PASSWORD` in the `docker-compose.yml` file to keep the containers in sync.  

These configuration changes ensure that your installation is not only functional but also secured and tailored to your environment.





## Connecting to Sync Server

To set up your account in Standard Notes, click on the avatar icon at the bottom right of the app. In the menu that appears, select “Create Account” to begin creating a new user profile. Enter a valid email address along with a secure password.  

Before completing the process, open the “Advanced Options” section. Under “Sync Server,” select the “Custom” option and enter the IP address and port of your own server in the format IP:Port. This ensures that your notes are not synced through the default Standard Notes service but instead with your self-hosted server.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Standard Notes on your VPS/Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Standardnotes.com](https://standardnotes.com/) - Official Website
- [Standardnotes.com/help](https://standardnotes.com/help) - Standard Notes Help Center (Documentation)

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂