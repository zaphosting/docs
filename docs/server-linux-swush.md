---
id: server-linux-swush
title: "Setup Swush on a Linux Server - Build your own private media and file vault"
description: "Learn how to install and run Swush on your Linux VPS to create a self-hosted media, files, and content management platform → Learn more now"
sidebar_label: Install Swush
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[Swush](https://github.com/imthatdev/swush) is a self-hosted digital vault and content management platform designed to help you organize files, media, and personal data in one centralized dashboard. The application combines file storage, sharing tools, media streaming, and knowledge management features into a single web interface.

With Swush, you can upload and manage files, organize content using folders and tags, generate shareable links, and even stream media directly from your server. Because it is fully self-hosted, you maintain complete control over your data and infrastructure, making it an excellent alternative to cloud-based storage platforms.

The application is built using modern technologies such as Next.js, TypeScript, and TailwindCSS, providing a fast and responsive interface while remaining easy to deploy on a VPS or dedicated server. This guide will walk you through installing and running Swush on a Linux server.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRRZ8MM6iWfF3kM/preview)

<InlineVoucher />



## Use cases of Swush

Swush is designed to act as a central hub for your digital content and workflows. It can be used in many different scenarios:

- Managing and organizing files, images, and documents
- Creating a personal media server for streaming uploaded content
- Generating secure share links for files and media
- Organizing knowledge such as notes, bookmarks, or snippets
- Hosting a private dashboard for personal workflows
- Automating uploads and integrations through the Swush API

The platform combines multiple tools into one environment, helping reduce reliance on scattered cloud services. 

## Prerequisites

Before installing Swush, ensure your server meets the following requirements.

| Hardware | Minimum | Recommended |
|----------|---------|-------------|
| CPU | 1 Cores | 4 Cores |
| RAM | 2 GB | 4 GB |
| Disk space | 20 GB | 50 GB |

Required software:

- Bun runtime
- PostgreSQL database
- Git

Make sure your system is updated before starting the installation.

<InlineServiceLink />

## Preparation

First create a directory for the Swush installation.
```
mkdir swush
cd swush
```
Next clone the Swush repository.
```
git clone https://github.com/imthatdev/swush.git .
```
Install the project dependencies using Bun.
```
bun install
```
## Configuration

Before starting the application, create the environment configuration file.
```
cp example.env .env
```
Open the `.env` file and configure the required values:
```
APP_NAME=Swush
 APP_URL=http://your-server-ip:3000
 SUPPORT_NAME=Support
 SUPPORT_EMAIL=support@example.com
DATABASE_URL=postgresql://username:password@localhost:5432/swush
```
You can also configure additional settings such as:

- Storage backend (local or S3)
- Upload directory
- SMTP settings for email notifications
- Authentication secrets

Swush supports both **local storage and S3-compatible storage systems**, allowing you to scale file storage depending on your environment.

## Installation

After configuring the environment variables, initialize the database schema.
```
bun run push:db
```
Next build the application.
```
bun run build
```
Start the Swush server.
```
bun start
```
The application will now start and listen on port **3000**.

## Accessing Swush

Once the server is running, open your web browser and navigate to:
```
http://YOUR_SERVER_IP:3000
```
Replace `YOUR_SERVER_IP` with the IP address of your VPS/Dedicated Server. When accessing the dashboard for the first time, you will be guided through the initial setup wizard where you can create your first account and configure storage settings.

After completing the setup, you can begin uploading files, organizing media, and managing your digital content from the Swush dashboard.

## Conclusion

Congratulations! You have successfully installed **Swush** on your Linux server. Your self-hosted digital vault is now ready to manage files, share media, and organize personal content from a centralized dashboard.

By hosting Swush yourself, you gain full control over your data while benefiting from a modern, privacy-focused content management platform.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

