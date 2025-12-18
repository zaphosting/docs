---
id: dayz-rcon
title: "DayZ : RCON"
description: "Découvrez comment gérer et contrôler efficacement vos serveurs de jeux DayZ à distance sans être connecté en jeu → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-dayz
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans DayZ, RCON est utilisé pour exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler DayZ depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait directement dans l’administration du serveur de jeux. Dans la section **Paramètres**, il y a une option appelée **RCON** qu’il faut activer. Un mot de passe sécurisé doit être défini.

Le port RCON attribué se trouve en bas de la page des paramètres dans la **Vue d’ensemble des ports**. 



## Connexion via RCON

Pour se connecter au serveur DayZ via RCON, l’outil **BattleWarden** est utilisé. Il est téléchargeable depuis le [site officiel](https://www.battlewarden.net). Après avoir téléchargé et installé l’outil sur votre ordinateur, il faut créer un nouveau profil de connexion. Les valeurs suivantes sont nécessaires :

- Adresse IP du serveur  
- Port RCON 
- Mot de passe RCON

Une fois la connexion établie, les commandes RCON peuvent être exécutées via l’interface graphique. L’outil offre aussi des fonctionnalités supplémentaires comme les listes de joueurs, le chat en direct, et l’historique des commandes, selon l’intégration du jeu.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Commandes RCON

Une fois connecté via RCON, diverses commandes administratives et de diagnostic peuvent être exécutées sur le serveur DayZ. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état, et le contrôle du serveur.

| Commande                         | Description                                          |
|----------------------------------|------------------------------------------------------|
| `#login <motdepasse>`             | Se connecte en tant qu’administrateur RCON          |
| `#logout`                       | Termine la session admin                             |
| `#kick <nomJoueur>`            | Expulse un joueur du serveur                         |
| `#ban <nomJoueur>`             | Bannit un joueur définitivement                      |
| `#exec ban <playerID>`          | Bannit un joueur via Steam64ID (BattlEye)           |
| `#exec unban <playerID>`        | Débannit un joueur précédemment banni                |
| `#shutdown`                     | Éteint le serveur                                   |
| `#monitor <secondes>`            | Affiche les données de performance toutes les x secondes |
| `#lock`                         | Verrouille le serveur pour les nouvelles connexions |
| `#unlock`                       | Déverrouille à nouveau le serveur                    |




## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux DayZ. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via une authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />