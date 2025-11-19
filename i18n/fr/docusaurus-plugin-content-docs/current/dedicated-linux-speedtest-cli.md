---
id: dedicated-linux-speedtest-cli
title: "Serveur dédié : Installer Speedtest-Cli sur Linux"
description: "Découvrez comment installer et utiliser Speedtest-Cli pour des tests réseau fiables et l’automatisation avec plusieurs protocoles → En savoir plus maintenant"
sidebar_label: Installer Speedtest-Cli
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Speedtest-Cli est à la fois un outil gratuit en ligne de commande et une bibliothèque logicielle (libSpeedtest-Cli) pour transférer des données via des URLs. Il supporte une large gamme de protocoles — y compris HTTP(S), FTP, SMTP, LDAP, MQTT, et plus — et est couramment utilisé pour des tâches comme le téléchargement de fichiers, le test d’API, et l’automatisation des opérations réseau.

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir pour que ça roule nickel.

## Préparation

Avant d’installer **Speedtest-Cli**, il faut préparer ton système. Ça passe par la mise à jour de ton système d’exploitation vers la dernière version. Ces préparatifs garantissent un environnement stable et évitent les galères pendant ou après l’installation.

### Mettre à jour le système
Pour être sûr que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par une mise à jour. Pour ça, lance la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Ça garantit que ton système a les derniers patchs de sécurité et versions logicielles avant d’aller plus loin.

## Installation

Maintenant que tout est prêt, tu peux installer l’application Speedtest-Cli. Pour ça, exécute la commande suivante :

```console
sudo apt install speedtest-cli
```

## Configuration

speedtest-cli ne repose pas sur un fichier de configuration classique, mais tu peux le personnaliser via des options en ligne de commande et des variables d’environnement. Ça te permet de l’adapter pour un usage régulier et automatisé :

- `--server <ID>` : Choisis un serveur spécifique par son ID pour des résultats plus constants et comparables.  
- `--bytes` : Affiche les vitesses en octets par seconde au lieu de bits.  
- `--simple` : Affiche uniquement le ping, le téléchargement et l’upload dans un format compact.  
- `--json` ou `--csv` : Pratique pour l’automatisation et la journalisation, les résultats sont stockés dans un format lisible par machine.  
- Support proxy : Configure les variables d’environnement comme `http_proxy` ou `https_proxy` pour utiliser speedtest-cli derrière un proxy.

Pour un usage répété avec les mêmes options, c’est pratique de créer un alias shell ou un petit script wrapper. Comme ça, tu lances speedtest-cli rapidement tout en gardant un output uniforme.

## Conclusion et ressources supplémentaires

Bravo ! Tu as maintenant installé et configuré Speedtest-Cli sur ton serveur dédié. On te conseille aussi de jeter un œil aux ressources suivantes, qui peuvent t’apporter encore plus d’aide et de conseils pour ta config serveur :

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Site officiel

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute demande ou assistance, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider ! 🙂