---
id: palworld-rcon
title: "Palworld : RCON"
description: "Découvrez comment gérer à distance vos serveurs Palworld pour un contrôle et une surveillance flexibles sans rejoindre le jeu → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans Palworld, RCON est utilisé pour exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler Palworld depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait en modifiant le fichier de configuration situé sous **Configs** dans le panneau de gestion du serveur de jeux. Dans le fichier nommé `PalWorldSettings.ini`, les entrées suivantes doivent être ajoutées ou modifiées :

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="définissez-votre-mot-de-passe"
```
Le port RCON attribué se trouve en bas de la page des paramètres dans l’aperçu des ports et doit être spécifié ici.



## Connexion via RCON

Pour se connecter au serveur Palworld via RCON, on utilise l’outil en ligne de commande **rcon-cli**. Il peut être téléchargé depuis le [dépôt officiel GitHub](https://github.com/gorcon/rcon-cli). Après avoir téléchargé et installé l’outil sur votre ordinateur, une connexion peut être établie en utilisant l’adresse IP du serveur, le port RCON et le mot de passe RCON.

Le port attribué se trouve dans l’**aperçu des ports** en bas de la page des paramètres dans l’administration du serveur de jeux. Le mot de passe et le port doivent correspondre aux valeurs configurées dans le panneau ou le fichier de configuration. Utilisez la commande suivante pour vous connecter et exécuter directement une commande :

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> commande
```



## Commandes RCON

Une fois connecté via RCON, diverses commandes administratives et de diagnostic peuvent être exécutées sur le serveur Palworld. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état et le contrôle du serveur.

| Commande                                 | Description                                               |
|-----------------------------------------|-----------------------------------------------------------|
| `/Shutdown <secondes> <message>`        | Éteint le serveur après un compte à rebours avec un message |
| `/DoExit`                               | Arrête immédiatement le serveur                           |
| `/Broadcast <message>`                  | Envoie un message à tous les joueurs connectés            |
| `/KickPlayer <SteamID>`                 | Expulse un joueur par SteamID                              |
| `/BanPlayer <SteamID>`                  | Bannit définitivement un joueur                            |
| `/TeleportToPlayer <SteamID>`           | Vous téléporte vers le joueur spécifié                     |
| `/TeleportToMe <SteamID>`               | Téléporte le joueur spécifié à votre position              |
| `/ShowPlayers`                          | Liste tous les joueurs actuellement connectés              |
| `/Info`                                 | Affiche les informations de base du serveur                |
| `/Save`                                 | Sauvegarde manuellement le monde                            |



## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux Palworld. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via une authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />