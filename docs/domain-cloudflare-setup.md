---
id: domain-cloudflare-setup
title: "Domain: Setting up domain with Cloudflare"
description: "Discover how to enhance your website security and performance using Cloudflare with ZAP-Hosting domains → Learn more now"
sidebar_label: Cloudflare setup
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Cloudflare is a highly popular CDN (Content Delivery Network) provider which enchances your websites with improved security protection, DDoS mitigation and provides easy management via their dashboard. This guide will provide information about setting up your ZAP-Hosting domain to use it with Cloudflare through the use of ExpertDNS and adjusting nameservers.

<InlineVoucher />

## Preparation
In order to follow this guide, you will require:
- A domain on your ZAP-Hosting Account
- A Cloudflare account
  
## Step 1: Enabling ExpertDNS Option

Begin by navigating to the web interface panel for your selected domain on your ZAP-Hosting account. Locate the **ExpertDNS** option and enable it by ticking the checkmark and pressing the save button.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Step 2: Setting up your Domain on Cloudflare

The next steps will involve using Cloudflare, so begin by logging in to your Cloudflare account. Now that you are logged in, add your website to the dashboard by following the setup steps provided directly by Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

Once you reach step 4 of the process, you will be provided with nameservers that you will have to set up.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Head over to your domain's web interface panel and access the **ExpertDNS** section. In this section, remove the default ZAP-Hosting nameservers and replace them with the ones that you were provided with by Cloudflare.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

Make sure to save your changes once this is completed.

## Step 3: Completing the setup on Cloudflare

Proceed back to your Cloudflare dashboard. On the previous setup page for your domain, you should be able to see a button to force Cloudflare to check your nameservers again.

:::info
It can take up to 24 hours for your nameserver changes to be recognised however, it usually occurs in a much shorter timespan.
:::

Once Cloudflare recognises your nameserver changes, you will receive an email you letting you know that your setup is ready. You can also check your Cloudflare dashboard. A successful setup will display **Active** under the domain that you have set up.

You have successfully integrated your domain with Cloudflare, unlocking enhanced performance, security, and manageability for your website.

<InlineVoucher />
