---
id: dedicated-linux-cockpit
title: "Serveur dédié : Installation de Cockpit"
description: "Découvrez comment gérer efficacement vos serveurs Linux avec l’interface web de Cockpit pour la surveillance et l’administration → En savoir plus maintenant"
sidebar_label: Installer Cockpit
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Cockpit est une interface web pour gérer un ou plusieurs serveurs Linux (cluster). Des simples sorties de logs à la gestion du RAID, Cockpit offre plein de fonctionnalités.  
Cockpit est parfait pour les débutants mais aussi pour les utilisateurs avancés qui veulent voir/gérer tout ce qui est important rapidement. En plus, il est accessible depuis presque n’importe quel appareil.  
Le site du projet est dispo ici : https://cockpit-project.org/. 

:::info
Ce guide explique l’installation pour Debian (à partir de Buster) / Ubuntu (à partir de Bionic Beaver). L’installation est aussi dispo sur la page du projet pour Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Archlinux et Tumbleweed.  
:::

## Installation

D’abord, il faut mettre à jour le serveur :  
```
// Mise à jour
sudo apt update; sudo apt upgrade -y
```
Ensuite, l’installation peut commencer :  
```
// Installation de Cockpit
sudo apt install cockpit -y
```
Une fois l’installation terminée, le panneau Cockpit est accessible via IP:9090.  
La connexion se fait avec les identifiants habituels du serveur/utilisateur.  

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/iobBy6s7gDJ4Zxm/preview)