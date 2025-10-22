---
id: dods-rcon
title: "Day of Defeat: Source : RCON"
description: "Découvre comment gérer à distance tes serveurs Day of Defeat: Source pour un contrôle et une surveillance flexibles → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-dods
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur le statut du serveur.

Dans Day of Defeat: Source, RCON sert à exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les admins peuvent surveiller et contrôler Day of Defeat: Source depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait directement dans l’administration du serveur de jeux. Dans la section **Paramètres**, il y a une option appelée **RCON** qu’il faut activer. Un mot de passe sécurisé doit être défini, ainsi qu’un port valide.

Le port RCON attribué se trouve en bas de la page des paramètres dans la **Vue d’ensemble des ports**.

Avant d’utiliser RCON, il faut aussi modifier le fichier de configuration situé sous **Configs** dans le panneau de gestion du serveur de jeux. Dans le fichier nommé `server.cfg`, les entrées suivantes doivent être ajoutées ou modifiées :

```cfg
rcon_password "définis-ton-mot-de-passe"
```


## Connexion via RCON

Pour se connecter au serveur Day of Defeat: Source via RCON, on utilise l’outil en ligne de commande **rcon-cli**. Il peut être téléchargé depuis le [dépôt officiel GitHub](https://github.com/gorcon/rcon-cli). Après avoir téléchargé et installé l’outil sur ton PC, tu peux établir une connexion en utilisant l’adresse IP du serveur, le port RCON et le mot de passe RCON.

Le port attribué se trouve dans la **Vue d’ensemble des ports** en bas de la page des paramètres dans l’administration du serveur de jeux. Le mot de passe et le port doivent correspondre aux valeurs configurées dans le panneau ou dans le fichier de config. Utilise la commande suivante pour te connecter et exécuter directement une commande :

```bash
rcon-cli -a <IP>:<PORT> -p <MOT_DE_PASSE> commande
```



## Commandes RCON

Une fois connecté via RCON, tu peux exécuter diverses commandes administratives et de diagnostic sur le serveur Day of Defeat: Source. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes de statut et le contrôle du serveur.

| Commande                      | Description                                  |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <mot_de_passe>`   | Authentifie l’accès RCON                      |
| `status`                     | Affiche les infos du serveur et des joueurs  |
| `changelevel <nom_carte>`      | Change la carte en cours                      |
| `mp_timelimit <min>`         | Définit la limite de temps par carte          |
| `mp_roundtime <min>`         | Définit la durée des rounds                    |
| `sv_cheats 0/1`              | Active/désactive les cheats (admin uniquement) |
| `kick <nom_joueur>`          | Expulse un joueur du serveur                   |
| `banid <durée> <SteamID>` | Bannit un joueur pour une durée donnée         |
| `exec <fichier.cfg>`            | Exécute un fichier de configuration           |
| `say <message>`              | Envoie un message à tous les joueurs           |



## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux Day of Defeat: Source. Il permet un accès rapide et direct aux fonctions d’administration tout en offrant un contrôle d’accès via authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />