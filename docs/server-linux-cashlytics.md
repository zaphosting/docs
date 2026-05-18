---
id: server-linux-cashlytics
title: "Setup Cashlytics on a Linux Server - Self-host your AI powered finance manager"
description: "Learn how to install and run Cashlytics on your Linux VPS using Docker to manage personal finances and budgeting with AI assistance → Learn more now"
sidebar_label: Install Cashlytics
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai) is a modern **personal finance and budgeting platform** designed to help you track spending, manage budgets, and gain insights into your financial habits. By analyzing transaction data and spending categories, Cashlytics helps you understand where your money goes and how you can improve your financial planning.

The platform can also optionally integrate with **AI-powered assistance**, allowing you to analyze financial data, identify spending patterns, and receive intelligent insights into your budgeting behavior.

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

Self-hosting Cashlytics on your own server gives you **full control over your financial data** while keeping your budgeting tools accessible from anywhere through a web interface. Planning to host Cashlytics yourself? This guide walks you through the installation process using Docker on your Linux VPS.

<InlineVoucher />

## Use cases of Cashlytics

Cashlytics can be used in a variety of personal and professional scenarios where financial organization and budgeting are important. Typical use cases include:

- Tracking personal expenses and monthly budgets
- Monitoring spending patterns and financial habits
- Managing multiple income sources and financial categories
- Generating AI-powered insights for smarter budgeting
- Hosting a private and self-controlled financial dashboard

Because it is self-hosted, Cashlytics is ideal for users who want a privacy-focused alternative to cloud-based financial tools.

## Prerequisites

Before installing Cashlytics, ensure your VPS meets the following requirements.

| Hardware | Minimum | Recommended |
|----------|---------|-------------|
| CPU | 1 Core | 2 Core |
| RAM | 2 GB | 4 GB |
| Disk space | 10 GB | 20 GB |



Additionally, the following software must be installed:

- Docker
- Docker Compose

If Docker is not installed yet, please follow our guide on installing [Docker](dedicated-linux-docker.md) before continuing.



<InlineServiceLink />



## Preparation

First create a project directory for the Cashlytics installation.

```bash
mkdir cashlytics && cd cashlytics
```

Next download the official Cashlytics Docker configuration files.

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

Create your environment configuration file by copying the example file.

```
cp .env.example .env
```

The `.env` file contains the configuration variables required to run Cashlytics.



## Installation



### Open an `.env` file

Open the `.env` file and configure the required environment variables.

```
nano .env
```



### Configure database password

Set a secure password for the PostgreSQL database used by Cashlytics.

```
POSTGRES_PASSWORD=your_secure_password_here
```



### Configure database connection

Update the database connection string and use the same password defined above.

```
DATABASE_URL=postgresql://cashlytics:your_secure_password_here@postgres:5432/cashlytics
```



### Optional AI assistant

Cashlytics supports an optional AI assistant that can analyze financial data and provide budgeting insights. To enable this feature, add your OpenAI API key.

```
OPENAI_API_KEY=sk-your-openai-key
```

If you do not want to use the AI assistant, this variable can be left empty.



## Starting Cashlytics

Once the configuration is complete, start the application using Docker Compose.

```
docker compose -f docker-compose.selfhost.yml up -d
```

Docker will now download the required container images and start the Cashlytics services. To verify that the containers are running, you can use:

```
docker ps
```



## Accessing Cashlytics

After the containers have started successfully, you can access the Cashlytics web interface. Open your browser and navigate to:

```
http://YOUR_SERVER_IP:3000
```

Replace YOUR_SERVER_IP with the IP address of your VPS. Once the interface loads, you can begin configuring your finances, budgets, and categories.

## Conclusion

Congratulations! You have successfully installed Cashlytics on your Linux server. You can now start using the platform to track expenses, manage budgets, and gain insights into your financial data.

Running Cashlytics on your own VPS/Dedicated Server ensures that your financial information remains under your control while still benefiting from modern budgeting tools and optional AI-powered analysis.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />