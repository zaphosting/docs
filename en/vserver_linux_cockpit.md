---
id: vserver_linux_cockpit
title: vServer/Dedicated Server: Cockpit installation
description: Guide to install Cockpit on Linux - ZAP-Hosting.com Documentation
sidebar_label: Cockpit
---

Cockpit is a web interface to manage one or more Linux servers (cluster). From simple log outputs to managing the raid, Cockpit offers many features. 
Cockpit is suitable for beginners but also for advanced users who want to see/manage everything important in a short time. In addition, it can be accessed from almost any device.
The project website can be reached at https://cockpit-project.org/. 

> This guide explains the installation for Debian (from Buster)/ for Ubuntu (from Bionic Beaver). The installation is also available on the project page for fedora, Red Hat, fedora CoreOS, CentOS, Clear Linux, archlinux and Tumbleweed.   

## Installation

First, the server must be updated:
```
// Update
sudo apt update; sudo apt upgrade -y
```
Afterwards, the installation can take place: 
```
// Cockpit installation
sudo apt install cockpit -y
```
Once the installation is complete, the cockpit panel can be reached via IP:9090. 
The login takes place with the normal login data of the server/user. 

![cockpit](https://user-images.githubusercontent.com/61953937/167338153-0ce78298-19f9-4ec0-96b1-09577048a1f0.png)
