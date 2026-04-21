---
id: vserver-one-click-apps-installer
title: "VPS: One Click Apps Installer"
description: "Deploy apps with the VPS One Click Apps Installer, manage projects through the web interface, and use Coolify for advanced app management -> Learn more now"
sidebar_label: One Click App Installer
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The One Click Apps Installer lets you browse an extensive app catalogue and deploy apps directly from your VPS web interface. In this guide, you will learn how to prepare your server, choose the correct installation type, install and manage apps, and use the advanced settings and troubleshooting tools when needed.

![img](https://screensaver01.zap-hosting.com/index.php/s/GDwkwA8Mi4gHS7D/preview)

<InlineVoucher />

## Preparation

Before you use the One Click Apps Installer, your VPS must meet the minimum requirements and use a supported operating system.

:::info Minimum Requirements
The apps feature requires your VPS to be online and configured with enough resources to run both the platform services and your installed apps reliably.
:::

| Requirement | Minimum | Recommended |
| --- | --- | --- |
| Server status | Online | Online |
| Storage | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 cores | 4 cores |
| Operating system | Debian or Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Fresh Operating System Recommended
It is strongly recommended to set up the apps feature on a fresh operating system installation. This helps avoid conflicts with existing services, occupied ports, Docker setups, or custom configurations already present on the server.
:::

If you need to reinstall your VPS before continuing, use a fresh supported Debian or Ubuntu LTS image from your VPS management interface.

## Accessing the One Click Apps Installer

Open your VPS in the ZAP-Hosting web interface and locate the One Click Apps section. From there, you can start the initial setup and later return to manage all apps installed on the server.

The first time you open this feature, you need to choose how the platform should be installed on your VPS.

## Choosing an Installation Type

You can select between a full installation and a node-only installation. The correct option depends on whether this VPS should host both the management panel and apps, or only act as a linked node for another panel.

### Full Installation

Choose **Full Installation** if you want to set up the server with the panel and the server itself as a node. This is the recommended option for first-time users and for most standard deployments.

With this method, you can:

- deploy apps from the app catalogue
- manage projects and environments
- organize all apps in one place
- use the integrated web interface management tools
- access the advanced panel later if required

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Recommended for Most Users
If this is your first time using the apps feature, select the full installation option. It provides the simplest setup and gives you complete management directly from the ZAP-Hosting web interface.
:::

### Node-only Installation

Choose **Node-only Installation** if you want this VPS to act only as a node. You can then link it to another VPS server or to an external panel instance.

This option is useful if you want to:

- scale across multiple VPS systems
- centralize management on one panel
- link this server to an existing deployment
- expand an existing multi-node setup

:::note Advanced Deployment Option
Node-only installation is intended for users who already have another panel instance available or who want to connect this server to an external environment.
:::

## Installing the Apps Feature

After selecting the installation type, start the setup from the web interface. The initial installation usually only takes a few minutes.

During this process, the platform services required for the One Click Apps feature are deployed to your VPS. Once complete, the app catalogue and management sections become available in the web interface.

:::info Installation Behavior
Exact installation progress details may vary depending on your VPS performance, operating system state, and network conditions. If the setup does not complete successfully, review the troubleshooting section later in this guide.
:::

## Browsing the App Catalogue

Once installation is complete, you can open the app catalogue and browse the available apps. The catalogue contains more than 300 ready-to-deploy apps and supports filtering to help you find the correct app quickly.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Searching and Filtering Apps

In the catalogue, you can search for apps by name and filter by category. This helps you narrow down all apps available in the app store style interface and find the right deployment target for your project.

Typical actions include:

- searching by app name
- filtering by category
- reviewing available app entries
- selecting an app for deployment

This workflow is especially useful if you are managing many apps download targets or comparing multiple services before installation.

### Starting an App Installation

After selecting an app from the catalogue, begin the installation through the web interface. Depending on the app, you may need to define values such as:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

These placeholders represent values specific to your deployment. For example, `[your_domain]` should be replaced with the domain you want to use for the app.

:::tip Projects and Environments
Use projects and environments to keep your deployment organized. This is especially helpful when you host multiple apps, test versions, or separate production and staging services.
:::

## Managing Installed Apps

After deployment, your installed apps are listed in the management section of the web interface. From here, you can monitor and control your services without manually working with the underlying containers.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Available Management Actions

The installed apps section allows you to perform common lifecycle actions directly from the web interface.

| Action | Purpose |
| --- | --- |
| Start | Starts a stopped app |
| Stop | Stops a running app |
| Check logs | Opens the app logs for troubleshooting |
| Reinstall | Re-deploys the app |

These tools make it easier to manage all apps from one place, especially if you want simple web-based control instead of manual command line administration.

### Organizing Projects and Environments

Projects and environments help you structure your deployments clearly. You can use them to separate:

- personal and production apps
- test and live environments
- multiple customer or team deployments
- different stacks on the same VPS

This organization becomes increasingly important as your app store apps collection grows and you manage more services on one or more nodes.

## Domains, Cloud Access, and SSL

The One Click Apps feature supports custom domains and ZAP Cloud integration. This allows you to expose apps securely and provision SSL certificates for your deployments.

:::info Domain and SSL Support
You can use custom domains for your apps and benefit from SSL certificate provisioning where supported by the platform setup.
:::

When assigning a domain, ensure that your DNS records point to `[your_server_ip]`. If your domain is not configured correctly, the app may not become reachable from the internet.

| Value | Description |
| --- | --- |
| `[your_domain]` | The domain or subdomain assigned to your app |
| `[your_server_ip]` | The public IP address of your VPS |

:::caution DNS Must Point to Your VPS
If the DNS for `[your_domain]` does not point to `[your_server_ip]`, domain validation and app access may fail.
:::

## Using Advanced Settings

Advanced users can access additional functionality through the external panel available in the advanced settings section.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

This can be useful if you need deeper customization, expanded deployment control, or direct access to features beyond the standard web interface.

### Important Support Limitation

:::caution Support Scope for Advanced Panel Usage
Advanced users are welcome to utilize the external Coolify panel for additional customization and functionality. However, support is limited to the ZAP-Hosting web interface. If you make changes outside of the web interface, assistance may not be available for those custom modifications.
:::

### When to Use the Advanced Panel

You may want to use the advanced panel if you need:

- more detailed deployment customization
- direct node linking workflows
- advanced app configuration
- panel-level management beyond the simplified interface

If you lose access or the integration stops responding, use the troubleshooting tools described below before making manual changes.

## Linking Nodes

If you selected the node-only installation type, you can link this VPS to another VPS server or an external panel instance. This allows you to scale your infrastructure and manage multiple nodes from a single location.

Node linking is useful when you want to:

- distribute apps across several VPS systems
- centralize management
- expand capacity without creating isolated deployments
- connect to an external panel environment

:::note External Panel Linking
You can link your node to another VPS or an external panel instance. Exact linking details depend on the target environment already in use.
:::

## Troubleshooting Degraded Status

If the web interface shows a degraded status, it means the platform cannot contact or retrieve data from the instance powering the One Click Apps feature. Follow the troubleshooting steps in chronological order.

### Status Indicators

The troubleshooting popup may show indicators such as the following:

| Status | Meaning |
| --- | --- |
| Coolify Status: Active | The panel service appears to be running |
| API Status: Accessible | The API can currently be reached |
| Service Status: Online | Your VPS itself is online |

If one or more parts are not functioning correctly, continue with the steps below.

### Step 1: Confirm the VPS Is Online

First, ensure that your VPS service is online in the ZAP-Hosting web interface. If the server is offline, the apps platform cannot function.

### Step 2: Refresh the Status

Use the **Refresh Status** action to run the health check again with the latest data. This can resolve temporary intermittent issues.

:::tip Temporary Connectivity Issues
A degraded state may sometimes be caused by a short-lived communication issue. Refreshing the status is the fastest first check.
:::

### Step 3: Restart Docker

If the status remains degraded, use the **Restart Docker** action. This forces the platform instance to restart. After a successful response, wait `1-2 minutes` and refresh the status again.

:::caution Service Restart
Restarting Docker may temporarily interrupt running apps while the services restart.
:::

### Step 4: Refresh Credentials

As a final step, use **Refresh Credentials**. This is especially important if the status appears online but web interface functions such as app installation are not working.

This action:

- does **not** delete your data
- refreshes the root user credentials
- refreshes the API token used by the web interface
- updates the panel credentials automatically on success

:::info Safe Credential Refresh
Refreshing credentials does not remove your installed apps or deployment data. It only renews the credentials required for access and communication.
:::

### When to Contact Support

If the issue still persists after completing all troubleshooting steps, create a support ticket through the ZAP-Hosting website.

## Best Practices

To keep the One Click Apps Installer stable and easy to manage, follow these recommendations:

| Best practice | Reason |
| --- | --- |
| Use a fresh OS installation | Reduces conflicts with existing services and ports |
| Meet recommended resources | Improves performance and reliability |
| Organize apps into projects and environments | Keeps deployments manageable |
| Configure DNS before assigning domains | Prevents access and SSL issues |
| Use advanced settings carefully | Avoids unsupported custom changes |

:::tip Keep Deployments Organized
If you plan to host many apps, create a clear naming scheme for `[your_project_name]`, `[your_environment_name]`, and `[your_app_name]` before deploying your first services.
:::

## Conclusion

Congratulations, you have successfully set up and used the VPS One Click Apps Installer to deploy and manage apps on your server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!

<InlineVoucher />