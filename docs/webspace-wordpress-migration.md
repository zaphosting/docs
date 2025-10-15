---
id: webspace-wordpress-migration
title: "Webspace: Migrating your WordPress website to ZAP-Hosting"
description: "Discover how to seamlessly migrate your WordPress site to ZAP-Hosting Webspace and enhance your web presence → Learn more now"
sidebar_label: Migration
services:
  - webspace
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Are you interested in our powerful webspace product offerings and are looking to switch to us? Look no further! In this guide, we will explore the process of migrating your WordPress site to your ZAP-Hosting Webspace product through the use of a WordPress plugin.

<InlineVoucher />

## Preparation

Before continuing with the guide, ensure that you have the following prepared:
- A domain, with admin access to manage DNS Settings.
- Admin access to your old WordPress instance.
- Own a [Webspace](https://zap-hosting.com/en/shop/product/webspace/) product with us.

## Step 1: Preparing Webspace

Begin by visiting our [Webspace](https://zap-hosting.com/en/shop/product/webspace/) product page and purchasing the appropriate webspace hosting plan that suits your website requirements. Once the product is set up, you will have to install WordPress onto it. Please read our dedicated [Install](webspace-wordpress.md)guide for detailed instructions on doing this.

With WordPress installed on the Webspace, you will have to link your Domain to it. Once again, please read our dedicated [Add Domain](webspace-adddomain.md) guide for detailed instructions on doing this.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa3mmmQtTybNgGj/preview)


## Step 2: Setting up Migrate Guru Plugin

In order to automate the migration process, you will be using the **Migrate Guru** WordPress plugin, which is free and is popularly used. You will need to install this on both your new and old WordPress instances.

:::tip Logging in to Admin Panel
To log in as an admin on a WordPress site, open your browser and navigate to your website. Add `/wp-admin` at the end of your website's URL (e.g. `[your_website].com/wp-admin`) and search for this in your browser. This will redirect you to the WordPress admin login page, where you have to log in using your old hosting WordPress admin panel credentials.

![](https://screensaver01.zap-hosting.com/index.php/s/zwzRyGJwEJMNPGQ/preview)
:::

On your WordPress panel, access the **Plugins** category, which is on the left-hand side of the page. Now select **Add New Plugin** and in the search bar enter **Migrate Guru**.

Once the search result appears, press **Install** followed by **Activate**. Ensure that you do this on both the old and new WordPress instance before continuing.

Once activated, you will see a screen appear prompting you to enter your email address and to agree to the terms and conditions, which you should complete.

![](https://screensaver01.zap-hosting.com/index.php/s/SXYGfpWJTwNyYjJ/preview)

## Step 3: Accessing Migration Key

With the Migrate Guru plugin now installed on both instances, you will have to access the **Migration Key** found on your **new** ZAP-Hosting WordPress instance. 

You can find this by accessing the **Migrate Guru** section on the left-hand side of your WordPress panel. Copy this key as it will be needed in the next step.

![](https://screensaver01.zap-hosting.com/index.php/s/g3X9fMrqoWyfwtN/preview)

:::tip Prepare Backup
As an additional safety precaution, we recommend creating a backup of your old WordPress instance before proceeding with the migration process via the plugin. This process doesn't cause any data loss, however it is always best to be safe and have a backup ready just in-case.
:::

## Step 4: Migration Process

Head over back to the admin panel of your **old** WordPress instance. On the **Migrate Guru** section, press the **Migrate** button and select **Other Hosts** from the list.

![](https://screensaver01.zap-hosting.com/index.php/s/x6ctdxnL2mdpTt5/preview)

Paste the Migrate Guru migration key that you just copied from your new ZAP-Hosting WordPress instance and press the **Migrate** button to proceed with the migration process.

:::warning
Ensure that you copy the Migration Key from your **new** ZAP-Hosting WordPress admin panel, and paste it into your **old** WordPress admin panel. If you do it the other way, you will erase data.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/7nEr2L48PKCDXrj/preview)

After pressing the **Migrate** button, the migration process will start instantly after a few validation checks. 

The migration process will run in the background without any downtime and should be completed within a few minutes. Please be patient as this heavily depends on the scale of your website. Once it is ready, you will see a success screen.

![](https://screensaver01.zap-hosting.com/index.php/s/YHSAwLkCjWBHsHT/preview)

:::tip
We recommend that you test the website thoroughly on your new WordPress instance, to ensure that the entire migration process was successful.
:::

## Step 5: Updating Domain DNS Settings

With the migration complete, the last step is to update the DNS Settings on your domain, in order to configure it for the new Webspace instance. You need to modify your Domain's DNS settings and set it to ZAP Hosting's webspace IP address to render your WordPress website from ZAP Hosting server.

To get the webspace IP address, begin by navigating to your webserver's web interface panel on the ZAP-Hosting website, and head over to the **DNS** section. You will be able to find the Webspace's IP address on this page.

![](https://screensaver01.zap-hosting.com/index.php/s/pd8iQdXsd8Kaobd/preview)

Now that you have the IP address ready, if your domain is not on your ZAP-Hosting account, begin by logging in to your account on your domain provider's website.

Find the **DNS Settings** section or similar on external providers. You will have to replace your existing **A Record** that points towards your old hosting provider, with the IP Address of your ZAP Webspace. 

Do this for all **A Records** that are still pointing to your old instance. Once completed, your domain will be ready to function alongside your WordPress website from ZAP-Hosting.

:::info
Please note that changes to DNS records may take up to 24 hours to propagate. This is usually occurring quickly, but it can take longer sometimes.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/P93CG3MLJc2DL3i/preview)

## Step 6: Setting up SSL Certificate

As a last step, we would recommend setting up a new SSL Certificate for your new website instance on your ZAP-Hosting Webspace. By default, when a domain is added via the webspace, it will remain unencrypted.

We recommend reading our dedicated [Create SSL Certificate](webspace-plesk-ssl.md) guide for detailed instructions on setting this up.

## Conclusion

By following this guide, you should have successfully migrated your old WordPress website instance to your new ZAP-Hosting Webspace. We recommend testing everything thoroughly to ensure that the migration process moved everything.

<InlineVoucher />
