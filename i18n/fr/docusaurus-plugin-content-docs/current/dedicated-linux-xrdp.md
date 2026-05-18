---
id: dedicated-linux-xrdp
title: "Configurer xRDP sur un serveur Linux - Activer l'accès bureau à distance"
description: "Découvrez comment configurer l'accès bureau à distance sur des serveurs Ubuntu et Debian pour une gestion et un contrôle simplifiés → En savoir plus maintenant"
sidebar_label: Installer xRDP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Sur Linux, il y a généralement une console SSH par défaut pour gérer le serveur. Dans certains cas, il peut être plus simple d’utiliser une connexion bureau à distance, similaire à Windows.  
Une post-installation est possible pour la plupart des distributions Linux. Dans ce guide, cela est expliqué pour Ubuntu et Debian. 

:::info
Important : Il faut utiliser au minimum Ubuntu 18.04.X LTS (Bionic Beaver) ou Debian 10 (Buster) comme système d’exploitation. Les versions plus récentes sont recommandées. 
:::



## Installation de xRDP

D’abord, le serveur doit être mis à jour : 
```
// Debian
sudo apt update; sudo apt upgrade -y

// Ubuntu
sudo apt update; sudo apt upgrade -y
```

Après la mise à jour, les paquets nécessaires seront installés : 
```
// Debian
sudo apt install xfce4 xfce4-goodies xorg dbus-x11 x11-xserver-utils -y

// Ubuntu
sudo apt install ubuntu-desktop -y
```

Ensuite, xRDP peut être installé : 
```
// Debian
sudo apt install xrdp

// Ubuntu
sudo apt install xrdp
```

Après l’installation, le statut doit indiquer "active" : 
```
// Debian
sudo systemctl status xrdp

// Ubuntu
sudo systemctl status xrdp
```
![xrdp](https://screensaver01.zap-hosting.com/index.php/s/wdKep3W6GHWekp3/preview)

Si le statut est bon, un utilisateur doit encore être créé. Puis le service xRDP doit être redémarré : 
```
// Debian
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp

// Ubuntu
sudo adduser xrdp ssl-cert; sudo systemctl restart xrdp
```

Une fois la configuration terminée, vous pouvez vous connecter au root ou aux données utilisateur respectives du serveur via le bureau à distance.  
Le port par défaut est : 3389

## Connexion 

La connexion peut se faire via n’importe quel outil RDP, connecté avec IP:PORT.  
Lors de la connexion, les identifiants vous seront demandés : 

![xrdp2](https://screensaver01.zap-hosting.com/index.php/s/btRPMG73cT6ysyL/preview)

Après une connexion réussie, vous voyez le bureau.  
Avec Ubuntu, l’interface est un peu différente de celle de Debian :

Ubuntu : 

![xrdp3](https://screensaver01.zap-hosting.com/index.php/s/Co6TgmH3yoad6HP/preview)

Debian : 

![xrdp4](https://screensaver01.zap-hosting.com/index.php/s/riHNCEEyKcoLHDy/preview)
