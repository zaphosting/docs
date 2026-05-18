---
id: vserver-linux-cockpit
title: "Installer Cockpit sur un serveur Linux - Gère ton serveur via une interface web"
description: "Découvre comment gérer efficacement des serveurs Linux avec l’interface web de Cockpit, pour débutants et pros → En savoir plus maintenant"
sidebar_label: Installer Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Cockpit est une interface web pour gérer un ou plusieurs serveurs Linux (cluster). Du simple affichage des logs à la gestion du RAID, Cockpit propose plein de fonctionnalités.  
Cockpit est parfait pour les débutants mais aussi pour les utilisateurs avancés qui veulent voir/gérer tout ce qui compte en un rien de temps. En plus, tu peux y accéder depuis presque n’importe quel appareil.  
Le site officiel du projet est dispo ici : https://cockpit-project.org/. 

## Installer Cockpit avec le One Click Apps Installer

Tu peux installer **Cockpit** directement via notre **One Click Apps Installer** dans l’interface web de ton VPS. Après avoir fini la configuration initiale des apps, ouvre le catalogue d’applications, cherche **Cockpit**, et lance le déploiement avec ton projet, environnement et paramètres de domaine préférés. C’est une manière rapide et simple de déployer et gérer **Cockpit** sans passer par la ligne de commande, tout en profitant de la gestion web intégrée, du support de domaine personnalisé, et du SSL automatique quand c’est dispo.

:::info
Ce guide explique l’installation pour Debian (à partir de Buster) / Ubuntu (à partir de Bionic Beaver). L’installation est aussi dispo sur la page du projet pour Fedora, Red Hat, Fedora CoreOS, CentOS, Clear Linux, Arch Linux et Tumbleweed.   
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