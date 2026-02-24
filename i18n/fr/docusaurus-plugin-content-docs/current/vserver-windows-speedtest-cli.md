---
id: vserver-windows-speedtest-cli
title: "Installer Speedtest CLI sur un serveur Windows - Surveille ta performance réseau"
description: "Découvre comment gérer efficacement ton code source et collaborer avec Speedtest CLI pour un contrôle de version fluide dans le dev moderne → En savoir plus maintenant"
sidebar_label: Installer Speedtest CLI
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Speedtest CLI est un système de contrôle de version distribué conçu pour une gestion efficace du code source. Il permet aux développeurs de suivre les modifications, de travailler sur différentes branches en même temps, et de collaborer sur des projets sans accroc. Grâce à sa flexibilité et ses performances, Speedtest CLI est devenu l’outil standard pour le contrôle de version dans le développement logiciel moderne.

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />

## Préparation

Avant d’installer **Speedtest CLI**, il faut préparer ton système. Ça passe par la mise à jour de ton système d’exploitation vers la dernière version. Ces étapes garantissent un environnement stable et évitent les galères pendant ou après l’installation.

### Mise à jour du système
Pour être sûr que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par faire une mise à jour complète. Ça garantit que ton système a les derniers patchs de sécurité et versions logicielles avant d’aller plus loin.

## Installation

Maintenant que tout est prêt, tu peux lancer l’installation de Speedtest CLI. Télécharge la version Windows (x64) ici : https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Ensuite, lance l’installateur du fichier téléchargé et suis les étapes indiquées.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)

## Configuration

speedtest-cli ne repose pas sur un fichier de config classique, mais tu peux le personnaliser via des options en ligne de commande et des variables d’environnement. Ça te permet de l’adapter pour un usage régulier et automatisé :

- `--server <ID>` : Choisis un serveur précis via son ID pour des résultats plus stables et comparables.  
- `--bytes` : Affiche les vitesses en octets par seconde au lieu de bits.  
- `--simple` : Affiche juste le ping, le download et l’upload dans un format compact.  
- `--json` ou `--csv` : Pratique pour l’automatisation et le logging, les résultats sont stockés dans un format lisible par machine.  
- Support proxy : Configure les variables d’environnement comme `http_proxy` ou `https_proxy` pour utiliser speedtest-cli derrière un proxy.  

Pour un usage répété avec les mêmes options, crée un alias shell ou un petit script wrapper. Comme ça, tu lances speedtest-cli rapidement avec une sortie uniforme.

## Conclusion et ressources supplémentaires

Bravo ! Tu as maintenant installé et configuré Speedtest CLI sur ton vServer avec succès. On te conseille aussi de jeter un œil aux ressources suivantes, qui peuvent t’aider encore plus dans ta config serveur :

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Site officiel

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour te filer un coup de main ! 🙂

<InlineVoucher />