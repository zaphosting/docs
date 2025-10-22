---
id: hl2-rcon
title: "Half-Life 2 : RCON"
description: "Découvrez comment gérer à distance vos serveurs Half-Life 2 avec RCON pour un contrôle et une surveillance flexibles → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-hl2
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans Half-Life 2, RCON est utilisé pour exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler Half-Life 2 depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait en modifiant le fichier de configuration situé dans **Configs** du panneau de gestion du serveur de jeux. Dans le fichier nommé `server.cfg`, les entrées suivantes doivent être ajoutées ou modifiées :

```cfg
rcon_password "définis-ton-mot-de-passe"
```


## Connexion via RCON

Pour se connecter au serveur Half-Life 2 via RCON, on utilise l’outil en ligne de commande **rcon-cli**. Il peut être téléchargé depuis le [dépôt officiel GitHub](https://github.com/gorcon/rcon-cli). Après avoir téléchargé et installé l’outil sur ton ordinateur, une connexion peut être établie en utilisant l’adresse IP du serveur, le port RCON et le mot de passe RCON.

Le port attribué se trouve dans la **Vue d’ensemble des ports** en bas de la page des paramètres dans l’administration du serveur de jeux. Le mot de passe et le port doivent correspondre aux valeurs configurées dans le panneau ou le fichier de configuration. Utilise la commande suivante pour te connecter et exécuter directement une commande :

```bash
rcon-cli -a <IP>:<PORT> -p <MOT_DE_PASSE> commande
```



## Commandes RCON

Une fois connecté via RCON, différentes commandes administratives et de diagnostic peuvent être exécutées sur le serveur Half-Life 2. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état et le contrôle du serveur.

| Commande                      | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <mot_de_passe>`   | Authentifie l’accès RCON                      |
| `status`                     | Affiche les infos serveur et joueurs          |
| `changelevel <nom_de_carte>`      | Change pour la carte spécifiée                 |
| `mp_timelimit <min>`         | Définit la limite de temps par carte          |
| `mp_roundtime <min>`         | Définit la durée des rounds                     |
| `sv_cheats 0/1`              | Active/désactive les cheats (admin uniquement) |
| `kick <nom_du_joueur>`          | Expulse un joueur du serveur                   |
| `banid <durée> <SteamID>` | Bannit un joueur pour une durée donnée          |
| `exec <fichier.cfg>`            | Exécute un fichier de configuration            |
| `say <message>`              | Envoie un message à tous les joueurs           |



## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux Half-Life 2. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />