---
id: dedicated-linux-git
title: "Configurer Git sur un serveur Linux - Active le contrôle de version pour tes projets"
description: "Découvre comment installer et configurer Git pour un contrôle de version efficace et une collaboration fluide sur tes projets → En savoir plus maintenant"
sidebar_label: Installer Git
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Git est un système de contrôle de version distribué conçu pour une gestion efficace du code source. Il permet aux développeurs de suivre les modifications, de travailler simultanément sur différentes branches, et de collaborer facilement sur des projets. Grâce à sa flexibilité et ses performances, Git est devenu l’outil standard pour le contrôle de version dans le développement logiciel moderne.

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir pour que ça roule.



## Installer Git avec le One Click Apps Installer

Tu peux installer **Git** directement via notre **One Click Apps Installer** dans l’interface web de ton VPS. Après avoir terminé la configuration initiale des apps, ouvre le catalogue d’applications, cherche **Git**, et lance le déploiement avec tes paramètres préférés pour le projet, l’environnement et le domaine. C’est une manière rapide et simple de déployer et gérer **Git** sans passer par la ligne de commande manuelle, tout en profitant d’une gestion web intégrée, du support de domaine personnalisé, et de la mise en place SSL quand c’est dispo.

## Préparation

Avant de configurer **Git**, tu dois préparer ton système. Cela inclut la mise à jour de ton système d’exploitation vers la dernière version. Ces préparatifs garantissent un environnement stable et évitent les soucis pendant ou après l’installation.


### Mettre à jour le système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par faire une mise à jour système. Pour ça, lance la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Ça garantit que ton système dispose des derniers patchs de sécurité et versions logicielles avant de continuer.



## Installation

Maintenant que les préparatifs sont faits, tu peux passer à l’installation de Git. Pour ça, exécute la commande suivante : 

```console
sudo apt install git-all -y
```

Une fois l’installation terminée, vérifie que Git fonctionne correctement en ouvrant un terminal ou une invite de commandes. Tape la commande `git --version` et valide.

Si l’installation a réussi, Git affichera la version installée. Si tu reçois un message d’erreur ou aucun retour, cela signifie généralement que Git n’a pas été installé correctement ou que la commande n’est pas dans le chemin système.

```
git --version
git version 2.51.2
```



## Configuration

Configure ton nom d’utilisateur Git et ton email avec les commandes ci-dessous, en remplaçant les exemples par tes propres infos. Ces identifiants seront liés à chaque commit que tu feras.

```
git config --global user.name "John Doe Paris"
git config --global user.email "doe@e-mail.com"
```



## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré Git avec succès sur ton VPS/serveur dédié. On te conseille aussi de jeter un œil aux ressources suivantes, qui pourront t’apporter un coup de main et des conseils pendant ta configuration serveur :

- [git-scm.com](https://git-scm.com/) - Site officiel
- [git-scm.com/doc](https://git-scm.com/doc) Documentation Git

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou aide, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂