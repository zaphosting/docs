---
id: dedicated-linux-xrdp
title: "Dedicated Server: Installation von xRDP (Remote Desktop)"
description: "Entdecke, wie du Remote Desktop Zugriff auf Ubuntu- und Debian-Server einrichtest für einfacheres Management und Kontrolle → Jetzt mehr erfahren"
sidebar_label: xRDP installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Auf Linux gibt es normalerweise eine Standard-SSH-Konsole zur Verwaltung des Servers. In manchen Fällen ist es aber einfacher, eine Remote-Desktop-Verbindung zu nutzen, ähnlich wie bei Windows.  
Eine Nachinstallation ist für die meisten Linux-Distributionen möglich. In dieser Anleitung wird das für Ubuntu und Debian erklärt. 

:::info
Wichtig: Mindestens Ubuntu 18.04.X LTS (Bionic Beaver) oder Debian 10 (Buster) müssen als Betriebssystem verwendet werden. Neuere Versionen sind empfohlen. 
:::

<InlineVoucher />

## xRDP installieren

Zuerst sollte der Server aktualisiert werden: 
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

Dann kann xRDP installiert werden: 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Nach der Installation sollte der Status „active“ anzeigen: 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

Wenn der Status passt, muss noch ein Benutzer angelegt werden. Danach muss der xRDP-Service neu gestartet werden: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Nach Abschluss der Konfiguration kannst du dich per Remote Desktop mit dem Root- oder dem jeweiligen Benutzerkonto des Servers verbinden.  
Der Standard-Port ist: 3389

## Verbindung

Die Verbindung kann mit jedem RDP-Client hergestellt werden, verbunden mit IP:PORT.  
Beim Verbinden wirst du nach den Login-Daten gefragt: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

Nach erfolgreichem Login siehst du den Desktop.  
Bei Ubuntu sieht das etwas anders aus als bei Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)

<InlineVoucher />