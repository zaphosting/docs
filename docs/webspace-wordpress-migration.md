---
id: webspace-wordpress-migration
title: "Webspace: Migrating Your WordPress Site to Zap Hosting"
description: Information on How to migrate Your WordPress Site to Zap Hosting - ZAP-Hosting.com documentation
sidebar_label: Migrating Your WordPress Site to Zap Hosting
---



## Introduction

Are you looking for a good web solution at a fair price? Then ZAP-Hosting is the right place for you! At ZAP-Hosting, you can rent or buy the right Webspace product to start your web presence.

**Key Features:**

- High-speed SSDs
- Full access control
- Live chat support
- Prepaid functionality
- More than 8 years of industry experience

## Prerequisites

Make sure you have the following things ready:

- [Zap Hosting Webspace Hosting](https://zap-hosting.com/en/shop/product/webspace/)
- Admin Access to your Domain Hosting nameservers.
- Admin Access to old WordPress Hosting.

## Step 1: Set Up Your New WordPress Hosting on Zap Hosting

Head back to Zap Hosting's Webspace product page and choose the appropriate Hosting plan that suits your website requirements.

![ZAP Hosting Webspace features List](https://snipboard.io/M3PV0r.jpg)

Now, Add your Domain to your new Zap Hosting Webspace: [Read this article](https://zap-hosting.com/guides/docs/webspace-adddomain) for step-by-step instructions on adding your Domain in your ZAP Hosting webspace.

![Adding your Domain with your webspace](https://user-images.githubusercontent.com/61953937/168205332-44be62d8-202b-4397-91d8-ba1dfeafd37b.png)


## Step 2: Migrate Your WordPress Site

**Access Your WordPress Admin on old Hosting**

To log in as an Admin in your old WordPress site, open your Browser and navigate to your website. Add "/wp-admin" to the end of your website's url (e.g., "www.yourwebsite.com/wp-admin") and press Enter. This will redirect you to the WordPress Admin login page, where you have to log in using your old Hosting WordPress admin panel credentials.

![Access Your WordPress Admin on old Hosting](https://i.imgur.com/HKXOa7n.png)

**Install and Configure Migrate Guru Plugin**

Once you have logged into your old WordPress Hosting Admin panel, you'll need to install a WordPress plugin to migrate your WordPress website to ZAP Hosting. To do this, Look at the "Plugins" category which is on from the left side on the page, just as shown in the visual image and click on "Add New." In the search bar, type "Migrate Guru." When the plugin marked in the visual image displayed below appears, click "Install," and then click "Activate." This WordPress plugin will migrate your WordPress site to the ZAP Hosting.

![Install and Configure Migrate Guru Plugin](https://i.imgur.com/l00UIIs.png)

***Initiate the Migration Process***

After activating the Migrate Guru plugin, a screen will be appeared stimulating you to enter your email address and agree to the terms and conditions of Migrate Guru plugin. Once you’ve completed this, click the "Migrate" button and select "Other Hosts" within the given list.

![Initiate the Migration Process](https://i.imgur.com/lFvN03g.png)

**Install WordPress**

Now [install WordPress](https://zap-hosting.com/guides/docs/webspace-wordpress) on your new Zap Hosting WordPress website and then install the Migrate Guru plugin again on your new Zap Hosting WordPress website by following the same steps.

![Install WordPress](https://user-images.githubusercontent.com/26007280/189989966-8b113e9c-749b-43fe-9fa1-e58fee20976f.png)

**Get your Migration Key**

Now, Acquire the Migrate Guru migration key using the Migrate Guru WordPress plugin on your new ZAP Hosting WordPress website.

![Get Your Migration Key](https://i.imgur.com/Dpmqh5K.png)

:::Caution
This process will not make you to lose your website data. However, as a safety measure, please make sure you have a full backup of your website before moving into the next step. Additionally, You're supposed to copy the Migrate Guru migration key from your ZAP Hosting WordPress Admin Panel and paste it into your old WordPress Hosting Admin Panel. Make sure not to mix it up in order to avoid inconvenience.

**Enter your Migration Key and Migration**

Now, Get back to your old hosting WordPress Admin panel where it was seeking for your Migrate Guru migration key, paste the Migrate Guru migration key there, and click on the "Migrate" button to proceed the Migration process.

![Entering your Migration Key](https://i.imgur.com/VeRH1EE.png)

**Complete the Migration Process**

After clicking on the "Migrate" button, the migration process will begin instantly after some validation checks. The migration will run smoothly without any downtime and will be completed efficiently.

![Complete the Migration Process](https://i.imgur.com/MxHNYyf.png)

:::Note
Ensure to check every part of your new migrated WordPress website to ensure that it has migrated properly without any bugs. 

## Step 3: Update Your Domain's DNS Settings

You need to modify our Domain's DNS settings and change it to ZAP Hosting's webspace IP address to make sure our new migrated WordPress website runs from ZAP Hosting servers.

**Acquire the IP address of the ZAP Hosting webspace**

To get the IP address, Return to your ZAP Hosting customer dashboard, choose your new webspace, and scroll down until you find the DNS section. The Webspace IP address can be found under "DNS ipaddress."

![Acquire the IP address of the ZAP Hosting webspace](https://i.imgur.com/TdgDExc.png)

**Update Your Domain's DNS Settings**

You need to point your Domain DNS settings to ZAP Hosting by replacing your old Hosting's webspace's IP address to ZAP Hosting's Webspace IP address to your Domain DNS settings. Start by logging into your Domain Hosting account and navigating to your Domain's DNS settings tab. You have to replace the existing 'A' record, which currently points to the old hosting provider's webspace IP address. Replace the old webspace IP address with the new webspace IP address provided by ZAP Hosting, ensuring to change every 'A' records if there are multiple 'A' records pointing to the same old WordPress Hosting webspace IP address. Once completed, your domain will be ready to load your WordPress website from ZAP Hosting.

![Update Your Domain's DNS Settings](https://i.imgur.com/vyDrJPH.png)

:::Note
It may take up to 24 hours for your nameserver changes to take effect globally, Usually it happens rapidly.

## Step 4: Secure Your Website with SSL Certificate

If a domain is created in the webspace, it initially remains unencrypted. You can verify this in the Plesk panel. [Follow this guide](https://zap-hosting.com/guides/docs/webspace-plesk-ssl) to enable SSL in your newly migrated WordPress site.

Congratulations! You have effectively migrated your own WordPress site to Zap Hosting.
