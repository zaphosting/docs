---
id: arma3-rcon
title: "Arma 3 : RCON"
description: "Découvrez comment gérer et contrôler à distance vos serveurs Arma 3 en toute sécurité sans rejoindre la partie → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-arma3
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans Arma 3, RCON sert à exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible avec des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler Arma 3 depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait directement dans l’administration du serveur de jeux. Dans la section **Paramètres**, il y a une option appelée **RCON** qu’il faut activer. Un mot de passe sécurisé doit être défini.

Le port RCON attribué se trouve en bas de la page des paramètres dans la **Vue d’ensemble des ports**. 



## Connexion via RCON

Pour se connecter au serveur Arma 3 via RCON, on utilise l’outil **BattleWarden**. Il est téléchargeable depuis le [site officiel](https://www.battlewarden.net). Après avoir téléchargé et installé l’outil sur votre ordinateur, il faut créer un nouveau profil de connexion. Les valeurs suivantes sont nécessaires :

- Adresse IP du serveur  
- Port RCON 
- Mot de passe RCON

Une fois la connexion établie, les commandes RCON peuvent être exécutées via l’interface graphique. L’outil propose aussi des fonctionnalités supplémentaires comme les listes de joueurs, le chat en direct, et l’historique des commandes, selon l’intégration du jeu.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## Commandes RCON

Une fois connecté via RCON, différentes commandes administratives et de diagnostic peuvent être exécutées sur le serveur Arma 3. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état, et le contrôle du serveur.

| Commande                         | Description                                        |
|----------------------------------|----------------------------------------------------|
| `#login <motdepasse>`             | Se connecter en tant qu’admin serveur             |
| `#logout`                       | Se déconnecter du statut admin                      |
| `#mission <nomMission>`       | Lance une nouvelle mission sur le serveur           |
| `#missions`                    | Liste les missions disponibles pour sélection       |
| `#restart`                     | Redémarre la mission en cours                        |
| `#reassign`                    | Renvoie tous les joueurs à leur rôle assigné        |
| `#kick <IDjoueur>`             | Expulse un joueur                                    |
| `#exec ban <IDjoueur>`         | Bannit un joueur                                     |
| `#exec unban <IDjoueur>`       | Débannit un joueur                                   |
| `#shutdown`                    | Éteint le serveur                                   |



## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux Arma 3. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous accompagner ! 🙂

<InlineVoucher />