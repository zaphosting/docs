---
id: vserver-linux-speedtest-cli
title: "VPS : Installer Speedtest-Cli sur Linux"
description: "Découvrez comment installer et utiliser Speedtest-Cli pour des tests réseau fiables et automatisés → En savoir plus maintenant"
sidebar_label: Installer Speedtest-Cli
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Speedtest-Cli est à la fois un outil gratuit en ligne de commande et une bibliothèque logicielle (libSpeedtest-Cli) pour transférer des données via des URLs. Il supporte une large gamme de protocoles — y compris HTTP(S), FTP, SMTP, LDAP, MQTT, et plus encore — et est couramment utilisé pour des tâches comme le téléchargement de fichiers, le test d’API, et l’automatisation des opérations réseau.

Tu envisages d’héberger ce service toi-même ? On te guide pas à pas pour l’installer et le configurer, avec tout ce qu’il faut savoir.

<InlineVoucher />

## Préparation

Avant d’installer **Speedtest-Cli**, tu dois préparer ton système. Cela inclut la mise à jour de ton système d’exploitation vers la dernière version. Ces préparations garantissent un environnement stable et aident à éviter les problèmes pendant ou après l’installation.

### Mettre à jour le système
Pour t’assurer que ton système tourne avec les dernières améliorations logicielles et de sécurité, commence toujours par une mise à jour. Pour cela, lance la commande suivante :

```
sudo apt update && sudo apt upgrade -y
```
Cela garantit que ton système dispose des derniers correctifs de sécurité et des versions logicielles avant de continuer.

## Installation

Maintenant que les préparatifs sont faits, tu peux passer à l’installation de l’application Speedtest-Cli. Pour cela, exécute la commande suivante :

```console
sudo apt install speedtest-cli
```

## Configuration

speedtest-cli ne repose pas sur un fichier de configuration classique, mais peut être personnalisé via des options en ligne de commande et des variables d’environnement. Cela te permet de l’adapter pour un usage régulier et automatisé :

- `--server <ID>` : Choisis un serveur spécifique par son ID pour des résultats de test plus cohérents et comparables.  
- `--bytes` : Affiche les vitesses en octets par seconde au lieu de bits.  
- `--simple` : Affiche uniquement le ping, le téléchargement et l’upload dans un format compact.  
- `--json` ou `--csv` : Pratique pour l’automatisation et la journalisation, car les résultats sont stockés dans un format lisible par machine.  
- Support proxy : Configure les variables d’environnement comme `http_proxy` ou `https_proxy` pour utiliser speedtest-cli derrière un proxy.

Pour un usage répété avec les mêmes options, il est pratique de créer un alias shell ou un petit script wrapper. Comme ça, tu peux lancer speedtest-cli rapidement tout en garantissant une sortie uniforme.

## Conclusion et ressources supplémentaires

Félicitations ! Tu as maintenant installé et configuré Speedtest-Cli sur ton VPS avec succès. On te recommande aussi de jeter un œil aux ressources suivantes, qui peuvent t’apporter un coup de main et des conseils supplémentaires pendant la configuration de ton serveur :

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Site officiel

Tu as des questions spécifiques qui ne sont pas couvertes ici ? Pour toute question ou aide supplémentaire, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />