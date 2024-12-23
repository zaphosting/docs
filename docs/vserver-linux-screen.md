---
id: vserver-linux-screen
title: "Installation of Screen"
description: Information on how to install screen on your Linux server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Screen
services:
  - vserver
---

## Introduction

Screen is a terminal multiplexer for Unix-like operating systems, like Linux. It allows users to manage multiple terminal sessions within a single window or remote connection.

## Prerequisites

Before you install anything on a server, it is recommended to run the update command corresponding to your operating system to keep your server secure.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Installation

Installing the screen utility is as easy as running the following command based on your Linux distro:

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt install screen
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum install screen
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper install screen
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf install screen
```

</TabItem>
</Tabs>

## Basic Screen Setup

As previously mentioned screen allows users to create multiple sessions. To start one you just need to run:

```
screen -S [name]
```

:::tip
You can replace the `[name]` atribute with whatever you want. Just make sure you remember it for later.

:::note
This will then open up a new window where you can start any script or program you want to keep running even after closing the remote connection.

To exit this window we need to press the following key combination: `ctrl-a` then `ctrl-d` or just ype `exit` in the console.

:::tip 
If you want to keep tabs on all open screens you can run the `screen -ls` or `screen -list` commands.

Returning to our previously created screen is as easy as executing `screen -r [name]` in the console.

## Screen `-` flags

Screen has many `-` flags you can use to configure the commands. These are the most important:

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   |       | Shows the current version of screen |

Now that you've familiarized yourself with the basic usage of screens


