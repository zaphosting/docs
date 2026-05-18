---
id: server-linux-coolify
title: "Setup Coolify on a Linux Server - Self-Hosted Cloud Applications"
description: "Discover how to install and set up Coolify to self-host your own applications, databases and services with ease  → Learn more now"
sidebar_label: Install Coolify
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[Coolify](https://coolify.io/) is an open-source, self-hosted Heroku and Vercel alternative that allows you to manage your servers, applications, and databases easily. 

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

Coolify's intuitive dashboard makes self-hosting easy. It gives you full control over your infrastructure, automated GitHub deployments, and keeps your cloud costs low.

In this guide, we will walk you through every step on how to set it up, pre-configure your admin account, and configure everything you need to know.

<InlineVoucher />

## Use cases of Coolify

Coolify can be used in many different everyday scenarios and is suitable for anyone who wants to automate application deployments, host databases, or run background workers. Coolify is perfect for both beginners and experts.

Coolify offers built-in support for deploying Static Sites, Node.js, Python, PHP, Rust, and Docker containers. It comes with trending one-click templates like WordPress, Ghost, Grafana, Appwrite, Nextcloud, and PostgreSQL databases. It automatically handles Let's Encrypt SSL certificates and reverse proxy routing via Traefik.

## Preparation

While Coolify is lightweight at its core, resource usage can increase drastically based on the amount of deployed applications, Docker builds, and databases running simultaneously. We recommend the following hardware requirements to host Coolify on your VPS/Dedicated Server.

| Hardware   | Minimum      | Recommended                |
| ---------- | ------------ | -------------------------- |
| CPU        | 2 vCPU Cores | 4 vCPU Cores               |
| RAM        | 2 GB         | 4 GB+                      |
| Disk space | 30 GB        | 50 GB+                     |

<InlineServiceLink />

Before installing Coolify, you need to connect to your server and ensure the operating system is up to date. You must connect to your server using SSH with root privileges. We already have a guide on [SSH Initial access](vserver-linux-ssh.md) if you need help with this step.

:::tip[SSH Key Authentication]
We **highly recommend** setting up an SSH Key instead of a password for the authentication method. You can find out how to do this by following our [SSH Key Setup](vserver-linux-sshkey.md) tutorial.
:::

## Installation

After you've connected to your server, update your system packages and install `curl`, which is required to fetch the Coolify installation script:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```



### Prepare Your Admin User Credentials

Coolify enforces strict security policies for your administrator account. Before running the installation command, prepare your Coolify root user credentials according to the following validation requirements:

* **Username**
  * Minimum length: 3 characters
  * Maximum length: 255 characters
  * Can only contain letters, numbers, spaces, underscores, and hyphens
* **Email**
  * Must be a valid email address
  * Must have a valid DNS record
  * Maximum length: 255 characters
* **Password**
  * Minimum length: 8 characters
  * Must contain both uppercase and lowercase letters
  * Must contain at least one number
  * Must contain at least one special symbol
  * Must not be a commonly used or compromised password



### Run the Installation Script

Coolify provides a fast, automated installation script. To secure the installation, we will use environment variables to predefine the root administrator account. This prevents unauthorized access while the setup completes.

Run the following command, making sure to replace the username, email, and password with your own secure credentials:

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[Open Source]
You can find the installation script’s source code in the [Official Coolify Repository](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)
:::

The script will automatically install Docker, set up the required networks, and configure the Coolify containers. This process may take a few minutes depending on your server's hardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)



### Accessing Coolify

After the installation is complete, the next step is to access the dashboard with a web browser. Enter your server's IP address followed by port 8000: `http://[your_server_ip]:8000`

Since you already provided your credentials via the installation command, you will directly see the login screen instead of the initial setup wizard. 

Enter the email and password you used in the command line to access your dashboard.



### Setting up DNS Records

After logging into your account on the Coolify dashboard, the first thing you should do is set up a custom domain. Accessing Coolify via your IP address (`http://[your_server_ip]:8000`) is insecure. 

Connecting a domain allows Coolify to automatically generate free SSL certificates for your dashboard and all your future applications.  

Go to the DNS management page of your domain provider and add two new `A` records pointing to your server. If your domain is registered with ZAP-Hosting, you can follow our [Domain Records](domain-records.md) guide to learn how to easily add these entries:

| Name / Host | Type | Value              | TTL           |
| ----------- | ---- | ------------------ | ------------- |
| `@`         | A    | `[your_server_ip]` | Auto / Lowest |
| `*`         | A    | `[your_server_ip]` | Auto / Lowest |

:::info[DNS Routing]
*   The `@` record allows Coolify to use the root of your domain
*   The `*` (wildcard) record lets Coolify automatically route any new subdomain (e.g., `api.[your_domain]`) without adding DNS records for each project.
:::



### Configuring Instance Domain

To secure your Coolify instance with an SSL certificate, you should assign a domain to it. Navigate to **Settings** in the left sidebar and locate the **Instance Domain** field. Enter your domain, including the `https://` prefix (e.g., `https://coolify.[your_domain]`). Click on **Save** to complete this step.

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)



## Deploying Your First App

After that, you'll be able to visit the **Projects** tab and start deploying your first application!

You can click on **+ Add Resource** to add a public repository or a Docker Compose file or select one of the many preconfigured services from the one-click template library. Your Coolify installation is all set!

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)



## Conclusion and More Resources

Cheers! You've successfully installed Coolify on your server and can start deploying your projects right away. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process.

- [coolify.io](https://coolify.io/) - Official Website
- [coolify.io/docs](https://coolify.io/docs/) - Coolify Documentation

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
