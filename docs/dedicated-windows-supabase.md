---
id: dedicated-windows-supabase
title: "Dedicated Server: Setup Supabase on Windows"
description: Information on how to setup Supabase on your Windows Dedicated Server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Supabase
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Supabase is an open-source Postgres development platform that provides a full Postgres database plus authentication, instant APIs, realtime, and storage, making it an open-source alternative to Firebase. 

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.

<InlineVoucher />



## Prerequisites

Before installing **Supabase**, ensure that your hosting environment meets the following requirements to guarantee a smooth installation and optimal performance.

| Hardware   | Minimum     | ZAP-Hosting Recommendation |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 CPU Cores | 4 CPU Cores                |
| RAM        | 4 GB        | 8 GB                       |
| Disk space | 25 GB       | 25 GB                      |

The software requires that all necessary dependencies are installed and that it is running on a supported operating system. Make sure your server meets the following requirements before proceeding with the installation:

**Dependencies:** `Git`, `Docker (Engine and Compose)` 

**Operating System:** Latest version of Ubuntu/Debian supporting Docker 2

Ensure all dependencies are installed and the correct operating system version is in use to avoid compatibility issues during the installation of Supabase.



## Preparation

Before setting up the **Supabase**, you need to prepare your system. This includes updating your operating system to the latest version and installing all required dependencies. These preparations ensure a stable environment and help prevent issues during or after the installation.


### Update System
To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. This ensures that your system has the latest security patches and software versions before proceeding.

### Install dependencies
Once the update process is complete, the installation of dependencies can now be proceeded with. 

#### Git
The Supabase data will be downloaded through GitHub. This requires Git  to be installed first. To do this install [Git for Windows](https://git-scm.com/downloads/win) on your server.
#### Docker

Supabase will be deployed and run on your machine using a Docker container. This requires Docker to be installed first. To do this install [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) on your server.

A complete walkthrough of the installation process and how to use Docker is available in our [Docker](dedicated-windows-docker.md) guide.


## Installation
Now that all requirements have been met and the necessary preparations have been completed, you can proceed with the installation of the Supabase application. Open the command prompt. Fetch the Supabase repository, create a dedicated project directory, and copy the Docker assets and sample environment file into it.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

Change into the project directory, pull the latest container images, and launch the stack in detached mode.
```
cd supabase-project
docker compose pull
docker compose up -d
```

You can now access Supabase Studio through `http://<your-ip>:8000`. You will be prompted for a username and password. By default, the credentials are:

- Username: `supabase`
- Password: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Default Credentials
Your app is now running with default credentials. Secure your services as soon as possible using the instructions below.
:::



## Configuration
You should never deploy with default or example values. You should replace all placeholders with strong, unique secrets, review the configuration against your security requirements, and restart all services to apply the changes.

Generate secure API keys before exposing any service. Start by choosing a 40-character JWT secret. You can use the provided value or create your own. Store this secret locally in a secure location. Do not share it and do not commit it to version control. Use the secret to generate a JWT and then derive the anon and service API keys using the form referenced in the Supabase docs: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Run the form twice to produce both keys. Update your `./docker/.env` with:

- `ANON_KEY`: anon key
- `SERVICE_ROLE_KEY`: service key

Update required secrets in `./docker/.env`. These values must be set for a working deployment:

- `POSTGRES_PASSWORD`: password for the `postgres` role
- `JWT_SECRET`: consumed by PostgREST and GoTrue
- `SITE_URL`: base URL of your site
- `SMTP_*`: mail server credentials
- `POOLER_TENANT_ID`: tenant id used by the Supavisor pooler

Protect the Dashboard with new credentials before production use. Edit `./docker/.env`:

- `DASHBOARD_USERNAME`: dashboard user
- `DASHBOARD_PASSWORD`: dashboard password

You can define multiple dashboard users in `./docker/volumes/api/kong.yml`:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

To enable all dashboard features outside `localhost`, set `SUPABASE_PUBLIC_URL` in `./docker/.env` to the URL or IP you will use to access the dashboard.

Apply configuration changes by restarting the stack:

```
docker compose down
docker compose up -d
```




## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Supabase on your Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Supabase.com](https://Supabase.com/) - Official Website
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase Documentation

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />