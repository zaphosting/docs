---
id: vserver-linux-speedtest-cli
title: "Setup Speedtest CLI on a Linux Server - Monitor Your Server Network Performance"
description: "Discover how to set up and use Speedtest-Cli for reliable network testing and automation → Learn more now"
sidebar_label: Install Speedtest-Cli
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Speedtest-Cli  is both a free command-line tool and a software library (libSpeedtest-Cli) for transferring data using URLs. It supports a wide range of protocols—including HTTP(S), FTP, SMTP, LDAP, MQTT, and more—and is commonly used for tasks such as downloading files, testing APIs, and automating network operations.  

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.

<InlineVoucher />



## Preparation

Before setting up the **Speedtest-Cli**, you need to prepare your system. This includes updating your operating system to the latest version. These preparations ensure a stable environment and help prevent issues during or after the installation.


### Update System
To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. To do this, run the following command:

```
sudo apt update && sudo apt upgrade -y
```
This ensures that your system has the latest security patches and software versions before proceeding.



## Installation

Now that the necessary preparations have been completed, you can proceed with the installation of the Speedtest-Cli application. To do so, execute the following command: 

```console
sudo apt install speedtest-cli
```



## Configuration

speedtest-cli does not rely on a traditional configuration file but can be customized using command-line options and environment variables. This allows you to adapt it for consistent and automated use:

- `--server <ID>`: Select a specific server by its ID for more consistent and comparable test results.  
- `--bytes`: Display speeds in bytes per second instead of bits.  
- `--simple`: Output only ping, download, and upload values in a compact format.  
- `--json` or `--csv`: Useful for automation and logging, as results are stored in a machine-readable format.  
- Proxy support: Configure environment variables like `http_proxy` or `https_proxy` to run speedtest-cli behind a proxy.  

For repeated use with the same options, it’s convenient to create a shell alias or a small wrapper script. This way, you can run speedtest-cli quickly while ensuring uniform output.



## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Speedtest-Cli on your VPS/Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Official Website

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />