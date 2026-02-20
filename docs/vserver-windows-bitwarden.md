---
id: vserver-windows-bitwarden
title: "Setup Bitwarden on a Windows Server - Secure Your Password Management"
description: "Discover how to securely self-host Bitwarden for managing passwords with end-to-end encryption and strong credential features → Learn more now"
sidebar_label: Install Bitwarden
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Bitwarden is an open source password manager for passwords and passkeys that uses zero knowledge, end to end encryption to protect data. You can use it as a cloud service or self host it, with features to generate, store, and autofill strong credentials. 

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.

<InlineVoucher />



## Prerequisites

Before installing **Bitwarden**, ensure that your hosting environment meets the following requirements to guarantee a smooth installation and optimal performance.

| Hardware   | Minimum      | ZAP-Hosting Recommendation |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 vCPU Cores | 4 vCPU Cores               |
| RAM        | 2 GB         | 4 GB                       |
| Disk space | 12 GB        | 25 GB                      |

The software requires that all necessary dependencies are installed and that it is running on a supported operating system. Make sure your server meets the following requirements before proceeding with the installation:

**Dependencies:** `Docker (Engine 26+ and Compose)` 

**Operating System:** Latest version of Windows Server supporting Docker 26+

Ensure all dependencies are installed and the correct operating system version is in use to avoid compatibility issues during the installation of Bitwarden.



## Preparation

Before setting up the **Bitwarden**, you need to prepare your system. This includes updating your operating system to the latest version and installing all required dependencies. These preparations ensure a stable environment and help prevent issues during or after the installation.


### Update System
To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. This ensures that your system has the latest security patches and software versions before proceeding.

### Install dependencies
Once the update process is complete, the installation of dependencies can now be proceeded with. Bitwarden will be deployed and run on your machine using an array of Docker containers. This requires Docker to be installed first. To do this install [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) on your server. 

A complete walkthrough of the installation process and how to use Docker is available in our [Docker](vserver-windows-docker.md) guide.



### Create user & directory

It is recommend configuring your Windows server with a dedicated `bitwarden` service account, from which to install and run Bitwarden. Doing so will make sure that your Bitwarden instance is isolated from other applications running on your server.

Open PowerShell as an administrator. Create the Bitwarden local user by running the following commands. After the first command, a text input dialog appears. Enter the desired password and confirm. Then run the second command to finish the setup.

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

Afterwards create a Bitwarden folder under `C:\` for the newly created user:

```
PS C:\> mkdir Bitwarden
```

In Docker Desktop, go to **Settings → Resources → File Sharing**. Add the directory `C:\Bitwarden` to the shared paths. Select Apply & Restart to apply the changes.



### Configure your domain

By default, Bitwarden runs on the host via ports 80 (HTTP) and 443 (HTTPS). Set up a domain with DNS records pointing to the host, for example server.example.com, especially when serving it on the internet. Avoid including Bitwarden in the hostname to reduce disclosure of the server’s role or software.




## Installation
Now that all requirements have been met and the necessary preparations have been completed, you can proceed with the installation of the Bitwarden application.

Download the Bitwarden installation script to your machine and then execute the installer script;

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

In the installer you first enter the domain name of your Bitwarden instance, typically the configured DNS record. Next you choose whether Let’s Encrypt should generate a free trusted SSL certificate. If yes you provide an email for expiry notices. If no the certificate questions follow. 

Enter your Installation ID and Installation Key, both obtained at [Bitwarden](https://bitwarden.com/host). Then select the region US or EU, which only matters if you connect a self hosted instance to a paid subscription. 

If you do not use Let’s Encrypt you can use an existing certificate by placing the files in `C:\Bitwarden\bwdata\ssl\<your_domain>` and stating whether it is trusted. Alternatively you can generate a self signed certificate, which is recommended for testing only. If you choose no certificate you must place an HTTPS proxy in front of the install or Bitwarden applications will not function.



## Configuration

After installation, complete the basic configuration using two files. First edit the environment file at `\bwdata\env\global.override.env`. Set your SMTP server details there, including host, port, SSL, username, and password, so Bitwarden can send verification and organization invite emails. If you need access to the System Administrator Portal, add an administrator email to `adminSettings__admins`.

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Validate the SMTP setup. A correct setup reports success; otherwise you will see messages about missing OpenSSL or incorrect values. Apply changes with `.\bitwarden.ps1 -start`.

A correct setup reports success; otherwise you will see messages about missing OpenSSL or incorrect values. Apply changes with `.\bitwarden.ps1 -restart`.

Next review the installation parameters in `.\bwdata\config.yml`. This file controls the generated assets and must be adjusted for special environments, for example when running behind a proxy or using alternate ports. Apply such changes with `.\bitwarden.ps1 -rebuild`.

Finally start the instance with `.\bitwarden.ps1 -start`. The first run may take time while Docker pulls images. Use `docker ps` to confirm all containers are healthy. Then open the web vault at your configured domain and register an account if needed. Email verification requires correctly configured SMTP variables.

## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Bitwarden on your VPS/Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [bitwarden.com](https://bitwarden.com/) - Official Website
- https://bitwarden.com/help/ - Bitwarden Help Center (Documentation)

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂