---
id: vrising-rcon
title: "V Rising : RCON"
description: "Découvrez comment gérer et contrôler efficacement vos serveurs V Rising à distance sans être connecté en jeu → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans V Rising, RCON sert à exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler V Rising depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant ainsi flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait en modifiant le fichier de configuration situé dans **Configs** du panneau de gestion du serveur de jeux. Dans le fichier nommé `ServerHostSettings.json`, les entrées suivantes doivent être ajoutées ou modifiées :

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "define-your-password"
  },
```

Le port RCON attribué se trouve en bas de la page des paramètres dans l’aperçu des ports et doit être renseigné ici.



## Connexion via RCON

Pour se connecter au serveur V Rising via RCON, on utilise l’outil en ligne de commande **rcon-cli**. Il peut être téléchargé depuis le [dépôt officiel GitHub](https://github.com/gorcon/rcon-cli). Après avoir téléchargé et installé l’outil sur votre ordinateur, vous pouvez établir une connexion en utilisant l’adresse IP du serveur, le port RCON et le mot de passe RCON.

Le port attribué se trouve dans l’**aperçu des ports** en bas de la page des paramètres dans l’administration du serveur de jeux. Le mot de passe et le port doivent correspondre aux valeurs configurées dans le panneau ou le fichier de configuration. Utilisez la commande suivante pour vous connecter et exécuter directement une commande :

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Commandes RCON

Une fois connecté via RCON, diverses commandes administratives et de diagnostic peuvent être exécutées sur le serveur V Rising. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état et le contrôle du serveur.

| Commande                                   | Description                                                   |
|--------------------------------------------|---------------------------------------------------------------|
| `adminauth`                                | Active les droits admin pour votre personnage (en jeu uniquement) |
| `admindeauth`                              | Désactive les droits admin                                    |
| `banuser <SteamID>`                        | Bannit un joueur définitivement                              |
| `unbanuser <SteamID>`                      | Débannit un joueur précédemment banni                         |
| `kick <playername>`                        | Expulse immédiatement un joueur du serveur                   |
| `give <ItemName> <Amount>`                 | Donne des objets directement dans votre inventaire           |
| `teleport <X> <Y>`                         | Téléporte votre personnage aux coordonnées données           |
| `teleportplayer <name> <X> <Y>`            | Téléporte un autre joueur à des coordonnées spécifiques       |
| `changehealth <value>`                     | Définit votre santé actuelle à une valeur spécifique          |
| `spawn <EntityName> <Amount>`              | Fait apparaître des PNJ, créatures ou autres entités          |



## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux V Rising. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via une authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />