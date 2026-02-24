---
id: vserver-linux-plausible
title: "Setup Plausible Analytics on a Linux Server - Run Privacy Focused Web Analytics"
description: "Discover how to set up a privacy-focused web analytics platform for clear insights and fast performance → Learn more now"
sidebar_label: Install Plausible
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plausible is a lightweight, open-source web analytics platform that operates without cookies and fully adheres to privacy regulations. It delivers key metrics, such as visitor counts, pageviews, and visit duration, via a clean, intuitive dashboard. With its ease of use, fast performance, and EU-based infrastructure, Plausible serves as a modern and privacy-conscious alternative to Google Analytics.  

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.

<InlineVoucher />



## Prerequisites

Before installing **Plausible**, ensure that your hosting environment meets the following requirements to guarantee a smooth installation and optimal performance.

| Hardware   | Minimum      | ZAP-Hosting Recommendation |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cores | 4 vCPU Cores               |
| RAM        | 2 GB         | 4 GB                       |
| Disk space | 10 GB        | 25 GB                      |

The software requires that all necessary dependencies are installed and that it is running on a supported operating system. Make sure your server meets the following requirements before proceeding with the installation:

**Dependencies:** `Docker`

**Operating System:** Latest version of Ubuntu/Debian supporting Docker 26+

Ensure all dependencies are installed and the correct operating system version is in use to avoid compatibility issues during the installation of Plausible.



## Preparation

Before setting up the **Plausible**, you need to prepare your system. This includes updating your operating system to the latest version and installing all required dependencies. These preparations ensure a stable environment and help prevent issues during or after the installation.


### Update System
To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. To do this, run the following command:

```
sudo apt update && sudo apt upgrade -y
```
This ensures that your system has the latest security patches and software versions before proceeding.

### Install dependencies
Once the update process is complete, the installation of dependencies can now be proceeded with. 

#### Git
The Plausible data will be downloaded through GitHub. This requires Git  to be installed first. To do this, run the following command: 
```
sudo apt install git-all
```

#### Docker

Plausible will be deployed and run on your machine using a Docker container. This requires Docker to be installed first. To do this, run the following command: 

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

A complete walkthrough of the installation process and how to use Docker is available in our [Docker](dedicated-linux-docker.md) guide.




## Installation
Now that all requirements have been met and the necessary preparations have been completed, you can proceed with the installation of the Plausible application. 

Start by cloning the Community Edition repository and creating the necessary configuration file:

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

Next, create an environment file (.env) and define the essential variables. The BASE_URL must point to the actual domain that already has a DNS record resolving to your server. You will also need to generate a random SECRET_KEY_BASE with at least 64 bytes:
```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

Verify the file content with `cat .env` to confirm the values are correct. The output should like this:

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

These default ports allow Let’s Encrypt to automatically issue TLS certificates. If you plan to run Plausible behind a reverse proxy, you may adjust these values. In addition, create a `compose.override.yml` to expose the correct ports for the Plausible container:

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

Finally, start the required services using Docker Compose:

```
docker compose up -d
```

Once the containers are running, open your browser at the domain specified in BASE_URL and create the first user account.

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)



## Configuration

Plausible can be integrated with Google Search Console to enrich your analytics with search query data. This allows you to see which keywords are driving traffic to your site, providing deeper insights into visitor behavior.

With an existing Google Cloud account and an OAuth client set up, you only need to add your credentials (`GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`) to the `.env` file. Once saved, restart your Docker services using `docker compose up -d`. In the Plausible dashboard, go to *Site Settings > Integrations* to complete the connection and follow the authentication prompts.

For those who do not yet have an OAuth client or are unfamiliar with the process, the official Plausible Wiki offers a detailed step-by-step guide. It explains how to create a project in Google Cloud, enable the required APIs, configure an OAuth client, and add the generated credentials to Plausible: [Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration).

If you use Google Search Console, you can configure the Google Integration, so that you can pull in data from Search Console about search terms, which is really rather neat.

If you already got a Google Cloud account with an OAuth client, you can simply paste your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` into the `.env` file, restart your docker service with `docker compose up -d`, and follow the prompts in Plausible's Site Settings > Integrations screen.



## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Plausible on your VPS/Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Plausible.io](https://Plausible.io/) - Official Website
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - Announcements, Discussions, Issue report

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />