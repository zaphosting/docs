---
id: vserver_linux_xrdp
title: vServer/Dedicated Server: Installation von xRDP (Remotedesktop) 
description: Guide um xRDP (Remotedesktop) auf Linux zu installieren - ZAP-Hosting.com Dokumentationen
sidebar_label: Linux Remotedesktop (xRDP)
---

Unter Linux gibt es default in der Regel eine SSH Console um den Server zu verwalten. In manchen Fällen kann es einfacher sein eine Remote Desktop Verbindung zu nutzen, ähnlich wie bei Windows. 
Eine nachträgliche Installation ist bei den meisten Linux Distrobutionen möglich. In diesem Guide wird dies für Ubuntu und Debian erklärt. 

> Es muss mindestens Ubuntu 18.04.X LTS (Bionic Beaver) oder Debian 10 (Buster) genutzt werden als OS. Neuere Versionen sind empfehlenswert. 

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
![](https://screensaver01.zap-hosting.com/index.php/s/nRs68GNnkB5Axbm/preview)

Nachdem der Status okay ist, muss noch ein User erstellt werden. Anschließend wird der xRDP Service neu gestartet: 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Nach Abschluss der Konfiguration kann man sich mit den Root oder den jeweiligen User Daten des Servers via Remote Desktop verbinden. 
Der default Port lautet: 3389

## Verbindung 

Die Verbindung kann über jedes RDP Tool erfolgen, verbunden wird mit IP:PORT. 
Beim verbinden wird man nach den Logindaten gefragt: 

![](https://screensaver01.zap-hosting.com/index.php/s/RncaLZpTjbTeTW3/preview)

Nach erfolgreicher Anmeldung sieht man den Desktop. 
Bei Ubuntu sieht es etwas anders aus als bei Debian:

Ubuntu: 

![](https://screensaver01.zap-hosting.com/index.php/s/yLfCEC3M3oeZ3XL/preview)

Debian: 

![](https://screensaver01.zap-hosting.com/index.php/s/G227tAg75fr33ix/preview)
