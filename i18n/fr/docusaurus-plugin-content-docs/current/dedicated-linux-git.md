---
id: dedicated-linux-git
title: "Serveur dédié : Installer Git sur Linux"
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

Avant d’installer **Git**, il faut préparer ton système. Cela inclut la mise à jour de ton système d’exploitation vers la dernière version. Ces préparatifs garantissent un environnement stable et évitent les soucis pendant ou après l’installation.

### Mettre à jour le système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par une mise à jour. Pour ça, lance la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Ça garantit que ton système dispose des derniers correctifs de sécurité et des versions logicielles avant de continuer.

## Installation

Maintenant que tout est prêt, tu peux installer Git. Pour ça, exécute la commande suivante :

```console
sudo apt install git-all -y
```

Une fois l’installation terminée, vérifie que Git fonctionne bien en ouvrant un terminal ou une invite de commandes. Tape `git --version` puis appuie sur Entrée.

Si l’installation a réussi, Git affichera la version installée. Si tu as un message d’erreur ou aucun retour, cela signifie généralement que Git n’a pas été installé correctement ou que la commande n’est pas dans le chemin système.

```
git --version
git version 2.51.2
```

## Configuration

Configure ton nom d’utilisateur et ton email Git avec les commandes ci-dessous, en remplaçant les exemples par tes propres infos. Ces identifiants seront liés à chaque commit que tu feras.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```

## Conclusion et ressources supplémentaires

Bravo ! Tu as maintenant installé et configuré Git sur ton serveur dédié. On te conseille aussi de jeter un œil à ces ressources, qui pourront t’aider et te guider pendant la configuration de ton serveur :

- [git-scm.com](https://git-scm.com/) - Site officiel
- [git-scm.com/doc](https://git-scm.com/doc) Documentation Git

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />