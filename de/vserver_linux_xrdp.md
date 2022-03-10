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
![](https://screensaver01.zap-hosting.com/index.php/s/HDpcXZETwnfZAo7/preview)
