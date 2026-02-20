---
id: dedicated-windows-git
title: "Setup Git on a Windows Server - Enable Version Control for Your Projects"
description: "Discover how to set up and configure Git for efficient version control and seamless collaboration in your projects → Learn more now"
sidebar_label: Install Git
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Git is a distributed version control system designed for efficient source code management. It allows developers to track changes, work on different branches simultaneously, and collaborate on projects seamlessly. Thanks to its flexibility and performance, Git has become the standard tool for version control in modern software development.

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.





## Preparation

Before setting up the **Git**, you need to prepare your system. This includes updating your operating system to the latest version. These preparations ensure a stable environment and help prevent issues during or after the installation.


### Update System
To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. This ensures that your system has the latest security patches and software versions before proceeding.



## Installation

Now that the necessary preparations have been completed, you can proceed with the installation of the Git application. To do so, download the Git for Windows (x64) here: https://git-scm.com/downloads/win 

Next, run the setup for the downloaded file and follow the steps as shown.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y3Rme8q9LHSk4fg/download)

Once the installation has finished, you should verify that Git is working correctly by opening a terminal or command prompt. Type the command `git --version` and press Enter.

If the installation was successful, Git will return the currently installed version number. If you receive an error message or no output, it usually indicates that Git was not installed properly or that the command is not included in the system path.

```
git --version
git version 2.51.2
```

![img](https://screensaver01.zap-hosting.com/index.php/s/FDDLGnLkStfb7nY/preview)



## Configuration

Set up your Git username and email with the commands below, replacing the sample values with your own details. These credentials will be linked to every commit you make.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Git on your vServer. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [git-scm.com](https://git-scm.com/) - Official Website
- [git-scm.com/doc](https://git-scm.com/doc) Git Documentation

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



