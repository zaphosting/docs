---
id: vserver-linux-cockpit
title: "VPS : Installation de Cockpit"
description: "Découvrez comment gérer efficacement vos serveurs Linux avec l’interface web de Cockpit, pour débutants comme experts → En savoir plus maintenant"
sidebar_label: Installer Cockpit
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Cockpit est une interface web pour gérer un ou plusieurs serveurs Linux (cluster). Du simple affichage des logs à la gestion du RAID, Cockpit offre plein de fonctionnalités.  
Cockpit est parfait pour les débutants mais aussi pour les utilisateurs avancés qui veulent voir/gérer rapidement tout ce qui est important. En plus, on peut y accéder depuis presque n’importe quel appareil.  
Le site officiel du projet est accessible ici : https://cockpit-project.org/. 

:::info
Ce guide explique l’installation pour Debian (à partir de Buster) / Ubuntu (à partir de Bionic Beaver). L’installation est aussi disponible sur la page du projet pour Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Archlinux et Tumbleweed.  
:::

<InlineVoucher />

## Installation

D’abord, il faut mettre à jour le serveur :  
```
// Mise à jour
sudo apt update; sudo apt upgrade -y
```
Ensuite, on peut lancer l’installation :  
```
// Installation de Cockpit
sudo apt install cockpit -y
```
Une fois l’installation terminée, le panneau Cockpit est accessible via IP:9090.  
La connexion se fait avec les identifiants habituels du serveur/utilisateur.  

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## Conclusion

Félicitations, vous avez installé et configuré Cockpit avec succès ! Si vous avez d’autres questions ou soucis, n’hésitez pas à contacter notre équipe support, dispo tous les jours pour vous aider ! 

<InlineVoucher />