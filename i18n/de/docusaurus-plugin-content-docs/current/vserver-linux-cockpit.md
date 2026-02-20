---
id: vserver-linux-cockpit
title: "Cockpit auf einem Linux-Server einrichten – Verwalte deinen Server per Webinterface"
description: "Entdecke, wie du Linux-Server effizient mit dem Cockpit-Webinterface verwaltest – perfekt für Einsteiger und Profis → Jetzt mehr erfahren"
sidebar_label: Cockpit installieren
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Cockpit ist ein Webinterface zur Verwaltung von einem oder mehreren Linux-Servern (Cluster). Von einfachen Log-Ausgaben bis hin zur Verwaltung des RAID bietet Cockpit viele Features.  
Cockpit eignet sich sowohl für Einsteiger als auch für fortgeschrittene Nutzer, die alles Wichtige schnell im Blick haben und verwalten wollen. Außerdem ist der Zugriff von fast jedem Gerät aus möglich.  
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
Danach kann die Installation starten: 
```
// Cockpit Installation
sudo apt install cockpit -y
```
Nach der Installation erreichst du das Cockpit-Panel über IP:9090.  
Der Login erfolgt mit den normalen Login-Daten des Servers/Users. 

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Fazit

Glückwunsch, du hast Cockpit erfolgreich installiert und eingerichtet! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 

<InlineVoucher />