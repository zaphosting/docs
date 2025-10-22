---
id: vserver-linux-xrdp
title: "VPS: Installation von xRDP (Remote Desktop)"
description: "Entdecke, wie du Remote-Desktop-Zugriff auf Ubuntu- und Debian-Server einrichtest für einfacheres Management und Kontrolle → Jetzt mehr erfahren"
sidebar_label: xRDP installieren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Auf Linux gibt es normalerweise eine Standard-SSH-Konsole zur Verwaltung des Servers. In manchen Fällen ist es aber einfacher, eine Remote-Desktop-Verbindung zu nutzen – ähnlich wie bei Windows.  
Eine Nachinstallation ist für die meisten Linux-Distributionen möglich. In dieser Anleitung erklären wir das für Ubuntu und Debian.  
<InlineVoucher />

:::info
Wichtig: Mindestens Ubuntu 18.04.X LTS (Bionic Beaver) oder Debian 10 (Buster) müssen als OS verwendet werden. Neuere Versionen sind empfohlen. 
:::

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
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/P3G4ztqbYjZZMGR/preview)

Wenn der Status passt, muss noch ein Benutzer angelegt werden. Danach den xRDP-Service neu starten: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Nach der Konfiguration kannst du dich per Remote Desktop mit dem Root- oder dem jeweiligen Benutzerkonto des Servers verbinden.  
Der Standard-Port ist: 3389

## Verbindung

Die Verbindung kannst du mit jedem RDP-Client herstellen, verbunden mit IP:PORT.  
Beim Verbinden wirst du nach den Login-Daten gefragt: 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/GHzrDz6Ct3TGDN2/preview)

Nach erfolgreichem Login siehst du den Desktop.  
Bei Ubuntu sieht das etwas anders aus als bei Debian:

Ubuntu: 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/tgkAEyQxXnrk3Qr/preview)

Debian: 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/gtxmQcPACEZJce7/preview)


## Fazit

Glückwunsch, du hast xRDP erfolgreich installiert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter! 

<InlineVoucher />