---
id: vserver-windows-speedtest-cli
title: "VPS : Installer Speedtest CLI sur Windows"
description: "Découvrez comment gérer efficacement le code source et collaborer avec Speedtest CLI pour un contrôle de version fluide dans le développement moderne → En savoir plus maintenant"
sidebar_label: Installer Speedtest CLI
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Speedtest CLI est un système de contrôle de version distribué conçu pour une gestion efficace du code source. Il permet aux développeurs de suivre les modifications, de travailler simultanément sur différentes branches et de collaborer sur des projets sans accroc. Grâce à sa flexibilité et ses performances, Speedtest CLI est devenu l’outil standard pour le contrôle de version dans le développement logiciel moderne.

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />

## Préparation

Avant d’installer **Speedtest CLI**, tu dois préparer ton système. Cela inclut la mise à jour de ton système d’exploitation vers la dernière version. Ces préparatifs garantissent un environnement stable et évitent les soucis pendant ou après l’installation.

### Mettre à jour le système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par faire une mise à jour complète. Ça garantit que ton système dispose des derniers patchs de sécurité et versions logicielles avant de continuer.

## Installation

Maintenant que les préparatifs sont faits, tu peux passer à l’installation de l’application Speedtest CLI. Pour cela, télécharge Speedtest CLI pour Windows (x64) ici : https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Ensuite, lance l’installation du fichier téléchargé et suis les étapes indiquées.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)

## Configuration

speedtest-cli ne repose pas sur un fichier de configuration classique, mais peut être personnalisé via des options en ligne de commande et des variables d’environnement. Ça te permet de l’adapter pour un usage automatisé et cohérent :

- `--server <ID>` : Choisis un serveur spécifique par son ID pour des résultats de test plus stables et comparables.  
- `--bytes` : Affiche les vitesses en octets par seconde au lieu de bits.  
- `--simple` : Affiche uniquement le ping, le téléchargement et l’upload dans un format compact.  
- `--json` ou `--csv` : Pratique pour l’automatisation et la journalisation, les résultats sont stockés dans un format lisible par machine.  
- Support proxy : Configure les variables d’environnement comme `http_proxy` ou `https_proxy` pour utiliser speedtest-cli derrière un proxy.  

Pour un usage régulier avec les mêmes options, crée un alias shell ou un petit script wrapper. Comme ça, tu peux lancer speedtest-cli rapidement tout en gardant une sortie uniforme.

## Conclusion et ressources supplémentaires

Bravo ! Tu as maintenant installé et configuré Speedtest CLI sur ton vServer avec succès. On te conseille aussi de jeter un œil aux ressources suivantes, qui peuvent t’apporter un coup de main et des conseils pendant la configuration de ton serveur :

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Site officiel

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />