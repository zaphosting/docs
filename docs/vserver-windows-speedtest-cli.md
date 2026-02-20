---
id: vserver-windows-speedtest-cli
title: "Setup Speedtest CLI on a Windows Server - Monitor Your Network Performance"
description: "Discover how to efficiently manage source code and collaborate using Speedtest CLI for seamless version control in modern development → Learn more now"
sidebar_label: Install Speedtest CLI
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Speedtest CLI is a distributed version control system designed for efficient source code management. It allows developers to track changes, work on different branches simultaneously, and collaborate on projects seamlessly. Thanks to its flexibility and performance, Speedtest CLI has become the standard tool for version control in modern software development.

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.

<InlineVoucher />



## Preparation

Before setting up the **Speedtest CLI**, you need to prepare your system. This includes updating your operating system to the latest version. These preparations ensure a stable environment and help prevent issues during or after the installation.


### Update System
To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. This ensures that your system has the latest security patches and software versions before proceeding.



## Installation

Now that the necessary preparations have been completed, you can proceed with the installation of the Speedtest CLI application. To do so, download the Speedtest CLI for Windows (x64) here: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Next, run the setup for the downloaded file and follow the steps as shown.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)



## Configuration

speedtest-cli does not rely on a traditional configuration file but can be customized using command-line options and environment variables. This allows you to adapt it for consistent and automated use:

- `--server <ID>`: Select a specific server by its ID for more consistent and comparable test results.  
- `--bytes`: Display speeds in bytes per second instead of bits.  
- `--simple`: Output only ping, download, and upload values in a compact format.  
- `--json` or `--csv`: Useful for automation and logging, as results are stored in a machine-readable format.  
- Proxy support: Configure environment variables like `http_proxy` or `https_proxy` to run speedtest-cli behind a proxy.  

For repeated use with the same options, it’s convenient to create a shell alias or a small wrapper script. This way, you can run speedtest-cli quickly while ensuring uniform output.



## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Speedtest CLI on your vServer. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Official Website

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />