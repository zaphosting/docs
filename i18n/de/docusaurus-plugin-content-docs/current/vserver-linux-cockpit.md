---
id: vserver-linux-cockpit
title: "vServer: Installation von Cockpit"
description: Informationen, um Cockpit auf Linux zu installieren - ZAP-Hosting.com Dokumentation
sidebar_label: Cockpit installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Cockpit ist ein Webinterface, um einen oder mehrere Linux Server (Cluster) zu verwalten. Von einfachen Log-Ausgaben bis hin zum Verwalten des Raids bietet Cockpit sehr viele Features. 
Cockpit eignet sich für Einsteiger, aber auch für Fortgeschrittene, die gerne in kurzer Zeit alles Wichtige einsehen/managen möchten. Zudem kann ein Zugriff von fast jedem Endgerät erfolgen.
Die Projektwebseite ist unter https://cockpit-project.org/ erreichbar. 

:::info
In dieser Anleitung wird die Installation bei Debian (ab Buster)/ bei Ubuntu (ab Bionic Beaver) erklärt. Die Installation ist auf der Projektseite ebenfalls für Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Archlinux und Tumbleweed verfügbar.   
:::

<InlineVoucher />

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

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/bCKk4imKTxTa2Kz/preview)


## Abschluss

Glückwunsch, du hast Cockpit erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht! 
