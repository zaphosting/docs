---
id: projectzomboid-rcon
title: "Project Zomboid : RCON"
description: "Découvrez comment gérer et contrôler à distance vos serveurs Project Zomboid en toute sécurité sans accès en jeu → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-projectzomboid
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance des serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans Project Zomboid, RCON est utilisé pour exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler Project Zomboid depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait en modifiant le fichier de configuration situé dans **Configs** du panneau de gestion du serveur de jeux. Dans le fichier nommé `servertest.ini`, les entrées suivantes doivent être ajoutées ou modifiées :

```cfg
RCONPort=XXXXX
RCONPassword=define-your-password
```
Le port RCON attribué se trouve en bas de la page des paramètres dans l’aperçu des ports et doit y être spécifié.



## Connexion via RCON

Pour se connecter au serveur Project Zomboid via RCON, on utilise l’outil en ligne de commande **rcon-cli**. Il peut être téléchargé depuis le [dépôt officiel GitHub](https://github.com/gorcon/rcon-cli). Après avoir téléchargé et installé l’outil sur votre ordinateur, une connexion peut être établie en utilisant l’adresse IP du serveur, le port RCON et le mot de passe RCON.

Le port attribué se trouve dans l’**aperçu des ports** en bas de la page des paramètres dans l’administration du serveur de jeux. Le mot de passe et le port doivent correspondre aux valeurs configurées dans le panneau ou le fichier de configuration. Utilisez la commande suivante pour vous connecter et exécuter directement une commande :

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Commandes RCON

Une fois connecté via RCON, diverses commandes administratives et de diagnostic peuvent être exécutées sur le serveur Project Zomboid. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état et le contrôle du serveur.

| Commande                          | Description                             |
| -------------------------------- | --------------------------------------- |
| `/grantadmin <username>`         | Donne les droits admin à un joueur      |
| `/removeadmin <username>`        | Retire les droits admin à un joueur     |
| `/save`                          | Sauvegarde manuellement le monde        |
| `/kickuser <username>`           | Expulse un joueur du serveur             |
| `/banuser <username>`            | Bannit un joueur                         |
| `/unbanuser <username>`          | Débannit un joueur                       |
| `/adduser <username> <password>` | Crée un nouvel utilisateur avec un mot de passe |
| `/godmod <username>`             | Active/désactive le mode dieu pour l’utilisateur spécifié |
| `/teleport <Name1> <Name2>`      | Téléporte Name1 vers Name2               |
| `/chopper`                       | Simule un survol d’hélicoptère           |



## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux Project Zomboid. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via une authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />