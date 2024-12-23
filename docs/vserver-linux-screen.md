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

## Basic Screen Usage

:::note 
All commands in this guide are case sensitive.

As previously mentioned screen allows users to create multiple sessions. To start one you just need to run:

```
screen -S [name]
```

:::tip
You can replace the `[name]` atribute with whatever you want. Just make sure you remember it for later.

:::note
This will then open up a new screen where you can start any script or program you want to keep running even after closing the remote connection.

To exit this screen we need to press the following key combination: `ctrl-a` then `d` or just type `exit` in the console.

:::tip 
If you want to keep tabs on all open screens you can run the `screen -ls` or `screen -list` commands.

Returning to our previously created screen is as easy as executing `screen -r [name]` in the console.

## Screen `-` flags

Screen has many `-` flags you can use to configure the commands. These are the most important:

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Shows the current version of screen |
| -S `[name]` | | Starts a new screen called `[name]` |
| -ls | -list | Lists all running screens |
| -wipe | | Same effect as 
| -r `[name]` | | Reattach to the `[name]` screen session |
| -d -r `[name]` | | Detach from your current screen and reattach to [name] |

:::note 
For all `-` flags you can run the `screen -h` command.

## Advanced Screen Usage

### Basic windows usage

Now that you've familiarized yourself with the basic commands of screens it's time to learn some shortcuts to help you navigate through your sessions more effectively. Inside any screen you can create multiple separate windows for different tasks.

:::note 
All of the shortcuts in this part of the guide need to be ran after pressing `ctrl+a`.

Pressing `c` will create a new empty window in your current directory. To navigate between windows you can run `n` (next) or `p` (previous) or `"` and selecting the window you want to see from the list with arrow keys.

By default all windows will have the same name (usually the name of the shell you're using). To change it run the `A` command and pick a new name. 

And finally to delete a window you can press `k`.

#### Split windows

To run 2 windows in a split configuration you can run `S` (horizontal) or `|` (vertical) and navigate between them using `Tab`. 

:::tip
After creating a new split window go to it using `Tab` and run `"` to open a previous window in the 2nd view of the split.

:::note
You can keep splitting these windows as much as you want but the server's RAM usage might increase exponentially.

## Conclusion

We hope this guide was helpful in teaching you how the screen utility works in Linux. If you have any further questions or problems, please contact our support team, who are available to help you every day! 





