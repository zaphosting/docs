---
id: dedicated-windows-port
title: "Dedicated Server: Managing Windows Defender Firewall Rules"
description: "Discover how to effectively manage Windows Defender Firewall rules and optimize port forwarding for secure server communication → Learn more now"
sidebar_label: Port Forwarding (Firewall)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows OS consists of its own Windows Defender Firewall which manages incoming and outbound trafcic between the server and internet. In this guide, we will go through the process of managing firewall rules and general tips for port forwarding.



## Accessing Windows Defender Firewall

Windows OS includes the **Windows Defender Firewall with Advanced Seurity** application as a core system application which allows you to easily manage firewall rules in a single place.

You can access this simply by searching for this in the Windows search bar or by pressing the Windows key/icon and using the start menu search bar.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Managing Rules

Most applications and processes, especially ones that must be accessible across the internet such as game servers or web servers, will require port forwarding to ensure that clients can communicate with your server (the host).

:::info
By default, Windows only opens the firewall for applications that require it, keeping all other ports closed. This is done to prevent unnecessarily exposing ports, reducing risk. This is also why you may see UAC prompts appear when launching games for the first time for example, to confirm a new firewall rule.
:::

In Windows, managing rules is done easily in two ways; by creating rules for programs or by creating rules that cover ports as a whole (and thus any programs or processes that use it).

There are two types of rules:
- Inbound Rule: A rule that controls inbound communication (from the internet, to your server).
- Outbound Rule: A rule that controls outbound communication (from your server, to the internet).

Usually when port forwarding, you would need to create both types of rules to allow communication with clients. However, this depends on your specific use case and setup.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Program Rules

Creating a Program rule is usually the recommended choice because it restricts communication to a specific program or process, rather than an entire port which would mean any program/service can communicate on that port.

You will now create two Program Rules, an Outbound and Inbound rule which both accept connection.

In the example below, you will setup the **Inbound** rule only. The steps are exactly the same thus you should repeat the steps to also create the Outbound rule yourself.

Begin by right-clicking **Inbound Rules** on the sidebar and select the **New Rules...** option.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

On the first section, select the **Program** option as the rule type.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Now you will have to select the program that you wish to create the forwarding rule for, using the browse button. In this example, Mozilla Firefox browser was picked as an example application.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

In the action section, select the **Allow the Connection** option.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

In the profile section, keep all of the options ticked and continue to the final section. Here you should set a useful name that you can remember the rule by and you can add an optional description if necessary.

Once ready, finally press the **Finish** button to create the rule.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

You have successfully created your very own Program Rule for your Windows server. You should now repeat this to create an **Outbound Rule** following the same steps, but creating it under the Outbound Rules section.

### Port Rules

Creating a general Port Rule can also be useful for many use cases and follows similar steps to before.

You will now create two Program Rules, an Outbound and Inbound rule which both accept connection.

In the example below, you will setup the **Inbound** rule only. The steps are exactly the same thus you should repeat the steps to also create the Outbound rule yourself.

Begin by right-clicking **Inbound Rules** on the sidebar and select the **New Rules...** option.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

On the first section, select the **Port** option as the rule type.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Now you will have to define the port type (TCP or UDP) and allocated port(s) that you wish to port forward. If you need to port forward both TCP and UDP, you will have to create two seperate rules, one for each port type.

In this example, port 25565 (TCP) was used as an example port which is used as the default port for Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

In the action section, select the **Allow the Connection** option.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

In the profile section, keep all of the options ticked and continue to the final section. Here you should set a useful name that you can remember the rule by and you can add an optional description if necessary.

Once ready, finally press the **Finish** button to create the rule.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

You have successfully created your very own Port Rule for your Windows server. You should now repeat this to create an **Outbound Rule** following the same steps, but creating it under the Outbound Rules section.


