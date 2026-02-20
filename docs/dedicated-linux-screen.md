---
id: dedicated-linux-screen
title: "Setup Screen on a Linux Server - Manage Persistent Terminal Sessions"
description: "Discover how to manage multiple terminal sessions on Linux with Screen for improved productivity and session persistence → Learn more now"
sidebar_label: Install Screen
services:
  - vserver
  - dedicated
---

## Introduction

Screen is a terminal multiplexer for Unix-like operating systems, like Linux. It allows users to manage multiple terminal sessions within a single window or remote connection. In this guide, we will cover the installation steps and provide usage guidance to make you more familiar with screen.

## Preparation

Before you install anything on a server, it is recommended to run the update command corresponding to your operating system to keep your server secure.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
sudo apt update && sudo apt upgrade
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

As previously mentioned screen allows users to create multiple sessions. To start one you simply need to run the following command, replacing `[name]` with anything you wish.
```
screen -S [name]
```

:::info
Keep in mind that the commands presented in this guide are case sensitive, particularly regarding any parameter flags.
:::

This will then open up a new screen where you can start any script or program you want to keep running even after closing the remote connection.

You can exit a screen by using `CTRL + A`, followed by `D` or simply by typing `exit` in the console as a command.

:::tip
You can browse all active sessions/screens by using the `screen -ls` or `screen -list` command.
:::

To return back to a previously created screen, you can execute the `screen -r [name]` command which will instantly take you back to the relevant screen.

## Screen Parameter Flags

Screen has many `-` parameter flags you can use to configure the commands. Some of the most important ones are listed below in the table.

| Flag | Alias | Info |
| ---- | ----- | ---- |
| -v   | | Shows the current version of screen |
| -S `[name]` | | Starts a new screen called `[name]` |
| -ls | -list | Lists all running screens |
| -wipe `[name]` | | Delete screens with optional `[name]` parameter
| -r `[name]` | | Reattach to the `[name]` screen session |
| -d -r `[name]` | | Detach from your current screen and reattach to [name] |

:::tip
You can browse all of the available parameters by running `screen -h` which will return a comprehensive list.
:::

## Advanced Screen Usage

### Window Usage

Now that you've familiarized yourself with the basic commands of screens it's time to learn some shortcuts to help you navigate through your sessions more effectively. Inside any screen you can create multiple separate windows for different tasks.

:::note 
All of the shortcuts in this part of the guide need to be ran after pressing `CTRL + A`.
:::

Pressing `C` will create a new empty window in your current directory. To navigate between windows you can run `N` (next) or `P` (previous) or `"` and selecting the window you want to see from the list with arrow keys.

By default all windows will have the same name (usually the name of the shell you're using). To change it run the `A` command and pick a new name. 

And finally to delete a window you can press `K`.

#### Split Windows

To run 2 windows in a split configuration you can run `S` (horizontal) or `|` (vertical) and navigate between them using `Tab`. 

:::tip
After creating a new split window go to it using `Tab` and run `"` to open a previous window in the 2nd view of the split.
:::

You can keep splitting these windows as much as you wish but the server's RAM usage might increase exponentially as you would expect when multi-tasking.

## Conclusion

We hope this guide was helpful in teaching you how the screen utility works in Linux. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂