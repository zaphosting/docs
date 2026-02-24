---
id: dedicated-linux-openmp
title: "Open.mp Dedicated Server Linux Setup"
description: "Discover how to set up the open.mp Dedicated Server on your Linux server for seamless game hosting and management → Learn more now"
sidebar_label: Open.mp
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you have a Linux VPS/Dedicated Server and you want to install the open.mp Dedicated server service on it? You are in the right place. In this guide, we will explain the step by step process of installing this service on your Linux server. We will be using Ubuntu in the examples, but the process should be very similar for other distributions.

:::tip
Did you know that you can install our **ZAP GS/TS3 Interface** directly onto your VPS/Dedicated Server, allowing you to setup game server services, with direct integration to your ZAP-Hosting dashboard, in just a few clicks! Learn more about the [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::



## Preparation

To begin with, connect to your VPS/Dedicated Server via SSH. Use our [SSH Initial Access](dedicated-linux-ssh.md) guide if you need help doing this.

### Creating User

We highly recommend creating a separate user to run all your dedicated game server services on. Running on the root user, as with most things, is not recommended for various reasons. If you already have a user ready, proceed to the installation steps.

Use the following command to create a user named `gameservers` with an optional password of your choice.

```
sudo useradd -m gameservers
sudo passwd gameservers # Optional Password
```

Once you have accessed your server and have a user ready, proceed with the installation steps.

## Installation

Begin by logging in to your `gameservers` user and heading over to the root `home/gameservers` user directory to keep things organised.
```
sudo -u gameservers -s
cd ~
```

To keep things organised, use the following command to create a new folder for your open.mp server and open it.
```
mkdir OpenMP-Server && cd OpenMP-Server
```

Now, you will have to download the latest release from the [open.mp GitHub Repository](https://github.com/openmultiplayer/open.mp/releases). On the page, right-click on the **linux-x86** version and copy the link. Run the following command to donwload the latest Linux release, replacing `[link]` with the copied link.
```
wget [link]
```

This will download the `.zip` file to your current location which should be into your new `OpenMP-Server` folder. Proceed with the following command to unzip and extract the files within the folder.
```
tar -xvzf open.mp-linux-x86.tar.gz
```

Your files should now be accessible within the **Server** folder, access it by running `cd Server`. Use `ls` to view the contents of the folder at any time. The server is now ready, proceed with the following section to configure parameters.

## Configuration

By this stage, you have finished the setup for your open.mp server. You can perform further server configuration through a configuration file found within the directory of your server.

You can edit the core configuration parameters by opening the **config.json** configuration file.
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

See our Open.mp [Server Configuration](openmp-configuration.md) guide to view all of the available options and what they each do.

## Starting & Connecting to your server

Now it is time to start your server. Head over to the main game directory and run the **omp-server** shell file.
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

You should now see logs appear in your command prompt, including network logs, which signals that the start up was successful. If everthing occurs as expected, your server will be accessible via direct connect and visible in the server list. Alternatively, you will be able to connect directly via: `[your_ip_address]:7777`.

## Conclusion

Congratulations, you have successfully installed and configured the open.mp server on your VPS/Dedicated Server! As a next step, we recommend looking over our [Setup Linux Service](dedicated-linux-create-gameservice.md) guide, which covers setting up your new dedicated game server as a service. This provides various benefits including automatic server launching on boot, automatic server updates, easy management and access to logs, plus much more!

If you have any further questions or problems, please contact our support team, who are available to help you every day!


