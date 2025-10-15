---
id: vserver-linux-firewall
title: "VPS: Managing Firewall in Linux"
description: "Learn how to configure a firewall to secure your server and allow necessary external connections → Learn more now"
sidebar_label: Port Forwarding (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

For a lot of services and programs, you have to allow external connections. This is possible by setting up a firewall.
In this guide, you will learn how to set up a firewall and allow those connections.

<InlineVoucher />

## Preparation

To install the firewall, you need to connect to your server via SSH. If you don't know how, you can look at our [initial access](vserver-linux-ssh.md) guide.
After connecting, you should update the server by using `apt update` and `apt upgrade`.

## Using UFW (Easy) 

There are multiple firewall programs for Linux, this guide will focus on the 2 most popular ones: UFW and IPTables.
We will start with UFW, as it is easier to set up and manage.

### Installing UFW

You can install UFW simply via APT using `sudo apt install ufw`.
To not loose the connection via SSH, you should not activate it yet, first you have to set it up.

### Setting up UFW

We recommend using the following policies by default:

`sudo ufw default deny incoming`
and
`sudo ufw default allow outgoing`

Now you should allow the SSH connection and any other port you want to open now:

`sudo ufw allow 22` for SSH

`sudo ufw allow 80` example for HTTP

`sudo ufw allow 25565` example for a Minecraft Server


To enable UFW, you have to run `sudo ufw enable`. You can always open more ports, if needed, using `sudo ufw allow PORT`


### Add Port Forwardings

To forward a port, you can simply use this command:

For TCP ports:

`sudo ufw allow PORT/tcp` replacing PORT with the port you want to forward.

Example: `sudo ufw allow 25565/tcp` for a Minecraft server

For UDP ports:

`sudo ufw allow PORT/udp` replacing PORT with the port you want to forward.

Example: `sudo ufw allow 9987/udp` for a TeamSpeak 3 server

### List and remove Port Forwardings

To display all port rules, you can run `sudo ufw status numbered`. If you want to remove a rule, you can `sudo ufw delete NUMBER`, using the number of the rule in the list.

## Installing IPTables (Advanced)

Most System already include IPTables by default, but to make sure you can run `sudo apt install iptables`.

### Setting up IPTables

First, set the default policies and settings:

`sudo iptables -P INPUT DROP` to disallow all incoming connections

`sudo iptables -P FORWARD DROP` to disallow all forwardings

`sudo iptables -P OUTPUT ACCEPT` to accept all outgoing connections

`sudo iptables -A INPUT -i lo -j ACCEPT` to allow the loopback

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` to allow all existing connections

Now you should allow the SSH connection and any other port you want to open now:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` for SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` example for HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` example for a Minecraft Server

Then you have to make the rules persistent, so they are still active after you restart the server. Install the IPTables persistent package using `sudo apt install iptables-persistent`. Then apply it using `sudo netfilter-persistent save`. And add it to the autostart with `sudo systemctl enable netfilter-persistent`.

### Add Port Forwardings

To forward a port, you can simply use this command:

For TCP ports:

`sudo iptables -A INPUT -p tcp --dport PORT -j ACCEPT` replacing PORT with the port you want to forward.

Example: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` for a Minecraft server

For UDP ports:

`sudo iptables -A INPUT -p udp --dport PORT -j ACCEPT` replacing PORT with the port you want to forward.

Example: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` for a TeamSpeak 3 server


### List and remove Port Forwardings

You can display all rules using this command: `sudo iptables -L --line-numbers`. If you want to remove a rule, you use `sudo iptables -D INPUT NUMBER` replacing `NUMBER` with the one from the list you want to remove.

## Conclusion

You have successfully installed a firewall on your Linux server and created your very own port rules. You can also use this guide for forwarding more ports.
For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
