---
id: vserver-linux-cockpit
title: "Configurer Cockpit sur un serveur Linux - Gère ton serveur via une interface web"
description: "Découvre comment gérer efficacement des serveurs Linux avec l’interface web de Cockpit, pour débutants comme pros → En savoir plus maintenant"
sidebar_label: Installer Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Cockpit est une interface web pour gérer un ou plusieurs serveurs Linux (cluster). Du simple affichage des logs à la gestion du RAID, Cockpit propose plein de fonctionnalités.  
Cockpit est parfait pour les débutants mais aussi pour les utilisateurs avancés qui veulent voir/gérer tout ce qui est important rapidement. En plus, tu peux y accéder depuis presque n’importe quel appareil.  
Le site du projet est dispo ici : https://cockpit-project.org/. 

:::info
Ce guide explique l’installation pour Debian (à partir de Buster) / Ubuntu (à partir de Bionic Beaver). L’installation est aussi dispo sur la page du projet pour Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Archlinux et Tumbleweed.  
:::

<InlineVoucher />

## Installation

D’abord, il faut mettre à jour le serveur :  
```
// Mise à jour
sudo apt update; sudo apt upgrade -y
```
Ensuite, tu peux lancer l’installation :  
```
// Installation de Cockpit
sudo apt install cockpit -y
```
Une fois l’installation terminée, tu peux accéder au panneau Cockpit via IP:9090.  
La connexion se fait avec les identifiants habituels du serveur/utilisateur.  

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Conclusion

Félicitations, tu as installé et configuré Cockpit avec succès ! Si tu as d’autres questions ou soucis, contacte notre équipe support, dispo tous les jours pour t’aider ! 

<InlineVoucher />