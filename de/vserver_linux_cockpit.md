---
id: vserver_linux_cockpit
title: vServer/Dedicated Server: Installation von Cockpit
description: Guide um Cockpit auf Linux zu installieren - ZAP-Hosting.com Dokumentationen
sidebar_label: Cockpit
---

Cockpit ist ein Webinterface um einen oder mehere Linux Server (Cluster) zu verwalten. Von einfachen Log Ausgaben bis hin zum managen des Raids bietet Cockpit sehr viele Features. 
Cockpit eigenet sich für Einsteiger aber auch für Fortgeschrittene, die gerne in kurzer Zeit alles wichtige einsehen/managen möchten. Zudem kann ein Zugriff von fast jedem Entgerät erfolgen.
Die Projektwebseite ist unter https://cockpit-project.org/ erreichbar. 

> In diesem Guide wird die Installation bei Debian (ab Buster)/ bei Ubuntu (ab Bionic Beaver) erklärt. Die Installation ist auf der Projektseite ebenfalls für fedora, Red Hat, fedora CoreOS, CentOS, Clear Linux, archlinux und Tumbleweed verfügbar.   

## Installation

Zuerst wird der Server upgedatet:
```
// Update
sudo apt update; sudo apt upgrade -y
```
Anschließend kann die Installation erfolgen: 
```
// Cockpit installation
sudo apt install cockpit -y
```
Sobald die Installation abgeschlossen ist, kann das Cockpit-Panel über die IP:9090 erreicht werden. 
Der Login findet mit den normalen Logindaten des Servers/Users statt. 

![](https://screensaver01.zap-hosting.com/index.php/s/Ase7PFoJtNTdrrL/preview)
