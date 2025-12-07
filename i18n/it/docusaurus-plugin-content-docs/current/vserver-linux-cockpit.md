---
id: vserver-linux-cockpit
title: "VPS: Installation von Cockpit"
description: "Entdecke, wie du Linux-Server effizient mit der Weboberfläche von Cockpit verwaltest – perfekt für Einsteiger und Profis → Jetzt mehr erfahren"
sidebar_label: Cockpit installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Cockpit ist eine Weboberfläche zur Verwaltung von einem oder mehreren Linux-Servern (Cluster). Von einfachen Log-Ausgaben bis hin zur Raid-Verwaltung bietet Cockpit viele Features.  
Cockpit ist ideal für Einsteiger, aber auch für fortgeschrittene Nutzer, die schnell alles Wichtige im Blick haben und steuern wollen. Außerdem kannst du von fast jedem Gerät darauf zugreifen.  
Die Projektseite findest du unter https://cockpit-project.org/. 

:::info
Diese Anleitung erklärt die Installation für Debian (ab Buster) und Ubuntu (ab Bionic Beaver). Die Installation ist auch auf der Projektseite für Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux und Tumbleweed verfügbar.  
:::

<InlineVoucher />

## Installation

Zuerst muss der Server aktualisiert werden:
```
// Update
sudo apt update; sudo apt upgrade -y
```
Danach kannst du Cockpit installieren: 
```
// Cockpit Installation
sudo apt install cockpit -y
```
Nach der Installation erreichst du das Cockpit-Panel über IP:9090.  
Der Login erfolgt mit den normalen Server-/User-Zugangsdaten. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Fazit

Glückwunsch, du hast Cockpit erfolgreich installiert und eingerichtet! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Seite und hilft dir gerne weiter! 

<InlineVoucher />