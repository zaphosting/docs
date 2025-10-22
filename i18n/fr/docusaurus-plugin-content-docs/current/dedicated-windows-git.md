---
id: dedicated-windows-git
title: "Serveur dédié : Installer Git sur Windows"
description: "Découvrez comment installer et configurer Git pour un contrôle de version efficace et une collaboration fluide sur vos projets → En savoir plus maintenant"
sidebar_label: Installer Git
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Git est un système de contrôle de version distribué conçu pour une gestion efficace du code source. Il permet aux développeurs de suivre les modifications, de travailler simultanément sur différentes branches et de collaborer facilement sur des projets. Grâce à sa flexibilité et ses performances, Git est devenu l’outil standard pour le contrôle de version dans le développement logiciel moderne.

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />

## Préparation

Avant d’installer **Git**, il faut préparer ton système. Cela inclut la mise à jour de ton système d’exploitation vers la dernière version. Ces préparatifs garantissent un environnement stable et aident à éviter les problèmes pendant ou après l’installation.

### Mettre à jour le système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par faire une mise à jour système. Ça garantit que ton système dispose des derniers patchs de sécurité et versions logicielles avant de continuer.

## Installation

Maintenant que les préparatifs sont faits, tu peux passer à l’installation de Git. Pour ça, télécharge Git pour Windows (x64) ici : https://git-scm.com/downloads/win

Ensuite, lance l’installation du fichier téléchargé et suis les étapes indiquées.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y3Rme8q9LHSk4fg/download)

Une fois l’installation terminée, vérifie que Git fonctionne correctement en ouvrant un terminal ou l’invite de commandes. Tape la commande `git --version` et appuie sur Entrée.

Si l’installation a réussi, Git affichera la version installée. Si tu reçois un message d’erreur ou aucun retour, cela signifie généralement que Git n’a pas été installé correctement ou que la commande n’est pas dans le chemin système.

```
git --version
git version 2.51.2
```

![img](https://screensaver01.zap-hosting.com/index.php/s/FDDLGnLkStfb7nY/preview)

## Configuration

Configure ton nom d’utilisateur et ton email Git avec les commandes ci-dessous, en remplaçant les exemples par tes propres infos. Ces identifiants seront liés à chaque commit que tu feras.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```

## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré Git avec succès sur ton vServer. On te conseille aussi de jeter un œil aux ressources suivantes, qui peuvent t’apporter un coup de main et des conseils pendant ta configuration serveur :

- [git-scm.com](https://git-scm.com/) - Site officiel
- [git-scm.com/doc](https://git-scm.com/doc) Documentation Git

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute autre demande ou assistance, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />