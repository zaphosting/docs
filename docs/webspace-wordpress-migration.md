---
id: webspace-wordpress-migration
title: "Webspace: Migrating Your WordPress Site to Zap Hosting"
description: Information on How to migrate Your WordPress Site to Zap Hosting - ZAP-Hosting.com documentation
sidebar_label: Migrating Your WordPress Site to Zap Hosting
---



## Introduction

Are you looking for the perfect web hosting at a fair price? Then ZAP-Hosting is the best place for you! At ZAP-Hosting, you can rent or purchase a lifetime Webspace and start your web presence.

**Key Features:**

- High-speed SSDs
- Full access control
- Live chat support
- Prepaid and lifetime functionality
- More than 14 years of industry experience

## Prerequisites

Make sure you have the following things ready:

- Admin access to your Domain hosting nameservers.
- Admin access to old WordPress hosting.

## Step 1: Set up your new WordPress hosting on Zap Hosting

Visit [Zap Hosting's webspace product page](https://zap-hosting.com/en/shop/product/webspace/) and purchase the appropriate webspace hosting plan that suits your website requirements.

![ZAP Hosting Webspace features List](https://snipboard.io/M3PV0r.jpg)

Now, link your Domain to your new Zap Hosting webspace: [Read this article](https://zap-hosting.com/guides/docs/webspace-adddomain) for step-by-step instructions on linking your Domain to your ZAP Hosting webspace.

![Linking your Domain with to ZAP Hosting webspace](https://user-images.githubusercontent.com/61953937/168205332-44be62d8-202b-4397-91d8-ba1dfeafd37b.png)


## Step 2: Migrate your WordPress site

**Access your WordPress admin panel on old Hosting**

To log in as an admin in your old WordPress site, open your browser and navigate to your website. Add "/wp-admin" at the end of your website's url (e.g., "www.yourwebsite.com/wp-admin") and press Enter. This will redirect you to the WordPress admin login page, where you have to log in using your old hosting WordPress admin panel credentials.

![Access Your WordPress Admin on old Hosting](https://i.imgur.com/HKXOa7n.png)

**Install Migrate Guru plugin**

Once you have logged into your old WordPress hosting admin panel, you'll have to install a WordPress plugin to migrate your WordPress website to ZAP Hosting. To do this, look at the "Plugins" category which is on the left side of the page. Now, click on "Add New Plugin." In the search bar, type "Migrate Guru." When the marked plugin appears, click "Install," and then click "Activate."

![Install and Configure Migrate Guru Plugin](https://i.imgur.com/l00UIIs.png)

***Configure Migrate Guru Plugin***

After activating the Migrate Guru plugin, a screen will appear stimulating you to enter your email address and agree to the terms and conditions of Migrate Guru plugin. Once you’ve completed this, click on the "Migrate" button and select "Other Hosts" from the list.

![Configure Migrate Guru plugin](https://i.imgur.com/lFvN03g.png)

**Install WordPress and Migrate Guru plugin on Zap Hosting webspace**

Now [install WordPress](https://zap-hosting.com/guides/docs/webspace-wordpress) on your new Zap Hosting WordPress website and then install the Migrate Guru plugin again by following the same steps.

![Install WordPress](https://user-images.githubusercontent.com/26007280/189989966-8b113e9c-749b-43fe-9fa1-e58fee20976f.png)

**Get your migration key**

Now, acquire the Migrate Guru migration key using the Migrate Guru WordPress plugin on your new ZAP Hosting WordPress website.

![Get Your migration Key](https://i.imgur.com/Dpmqh5K.png)

:::Caution
The migration process will not make you to lose any of your website data. However, as a safety measure, please make sure you have a full backup of your website before moving into the next step. Additionally, You're supposed to copy the Migrate Guru migration key from your ZAP Hosting WordPress Admin Panel and paste it into your old WordPress Hosting admin panel. Make sure not to mix it up in order to avoid inconvenience.

**Enter your migration key and proceed the migration process**

Now, get back to your old hosting WordPress admin panel where it was prompting you to enter your Migrate Guru migration key, paste the Migrate Guru migration key that you just copied from the Zap Hosting WordPress admin panel, and click on the "Migrate" button to proceed the migration process.

![Entering your migration Key](https://i.imgur.com/VeRH1EE.png)

**Complete the migration Process**

After clicking on the "Migrate" button, the migration process will start instantly after a few validation checks. The migration process will run in the background without any downtime and will be completed efficiently.

![Complete the migration Process](https://i.imgur.com/MxHNYyf.png)

:::Note
Ensure to check every part of your new migrated WordPress website to ensure that it has migrated properly without any bugs. 

## Step 3: Update your Domain's DNS settings

You need to modify your Domain's DNS settings and set it to ZAP Hosting's webspace IP address to render your WordPress website from ZAP Hosting server.

**Acquire the IP address of the ZAP Hosting webspace**

To get the webspace IP address, navigate to your ZAP Hosting customer dashboard, select your new webspace, and scroll down until you find the DNS section. The webspace IP address can be found under "DNS ipaddress."

![Acquire the IP address of the ZAP Hosting webspace](https://i.imgur.com/TdgDExc.png)

**Update your Domain's DNS settings**

Now, you have to configure the Domain DNS settings by replacing your old hosting's webspace's IP address to ZAP Hosting's webspace IP address. Start by logging into your Domain hosting account and navigating to your Domain's DNS settings tab. You have to replace the existing 'A' record, which is currently pointing to the old hosting provider's webspace IP address. Replace the old webspace IP address with the new webspace IP address provided by ZAP Hosting, ensuring to change every 'A' records if there are multiple 'A' records pointing to the same old WordPress hosting webspace IP address. Once completed, your Domain will be ready to render your WordPress website from ZAP Hosting.

![Update your Domain's DNS settings](https://i.imgur.com/vyDrJPH.png)

:::Note
It may take up to 24 hours for your nameservers changes to take effect globally, usually it happens rapidly.

## Step 4: Secure your website with SSL certificate

If a Domain is created in the webspace, it initially remains unencrypted. You can verify this in the Plesk panel. [Follow this guide](https://zap-hosting.com/guides/docs/webspace-plesk-ssl) to enable SSL in your newly migrated WordPress site.

Congratulations! You have effectively migrated your own WordPress site to Zap Hosting. 💚
