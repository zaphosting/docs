---
id: dedicated-linux-xrdp
title: "Dedicated Server: Installation von xRDP (Remotedesktop)"
description: Informationen, um xRDP (Remotedesktop) auf deinem Linux Dedicated Server zu installieren - ZAP-Hosting.com Dokumentation
sidebar_label: xRDP installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Unter Linux gibt es in der Regel eine SSH Console, um den Server zu verwalten. In manchen Fällen kann es einfacher sein, eine Remote Desktop Verbindung zu nutzen, ähnlich wie bei Windows. 
Eine nachträgliche Installation ist bei den meisten Linux Distributionen möglich. In dieser Anleitung wird dies für Ubuntu und Debian erklärt. 

:::info
Wichtig: Es muss mindestens Ubuntu 18.04.X LTS (Bionic Beaver) oder Debian 10 (Buster) genutzt werden als OS. Neuere Versionen sind empfehlenswert. 
:::

<InlineVoucher />

## Installation von xRDP

Zuerst sollte der Server upgedatet werden: 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

Nach dem Update werden die nötigen Pakete installiert: 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

Anschließend kann xRDP installiert werden: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Nach der Installation sollte der Status "aktive" zurückgeben: 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/BbfNo92nX2F5nJx/preview)

Nachdem der Status okay ist, muss noch ein User erstellt werden. Anschließend wird der xRDP Service neu gestartet: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Nach Abschluss der Konfiguration kann man sich mit den Root oder den jeweiligen User Daten des Servers via Remote Desktop verbinden. 
Der Standard Port lautet: 3389

## Verbindung 

Die Verbindung kann über jedes RDP Tool erfolgen, verbunden wird mit IP:PORT. 
Beim Verbinden wird man nach den Logindaten gefragt: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/gADCkjdnqn8EzJQ/preview)

Nach erfolgreicher Anmeldung sieht man den Desktop. 
Bei Ubuntu sieht es etwas anders aus als bei Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/bYdFSGbj8sW3KHe/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/HQD5eESyFKsZCRk/preview)

<InlineVoucher />
