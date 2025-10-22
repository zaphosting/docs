---
id: factorio-rcon
title: "Factorio : RCON"
description: "Découvrez comment gérer et contrôler à distance votre serveur de jeux Factorio pour une administration efficace et des ajustements de gameplay → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans Factorio, RCON est utilisé pour exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler Factorio depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une exploitation à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait directement dans l’administration du serveur de jeux. Dans la section **Paramètres**, il y a une option appelée **RCON** qu’il faut activer. Un mot de passe sécurisé doit être défini.

Le port RCON attribué se trouve en bas de la page des paramètres dans la **Vue d’ensemble des ports**. 



## Connexion via RCON

Pour se connecter au serveur Factorio via RCON, on utilise l’outil en ligne de commande **rcon-cli**. Il peut être téléchargé depuis le [dépôt officiel GitHub](https://github.com/gorcon/rcon-cli). Après avoir téléchargé et installé l’outil sur votre ordinateur, une connexion peut être établie en utilisant l’adresse IP du serveur, le port RCON et le mot de passe RCON.

Le port attribué se trouve dans la **Vue d’ensemble des ports** en bas de la page des paramètres dans l’administration du serveur de jeux. Le mot de passe et le port doivent correspondre aux valeurs configurées dans le panneau ou le fichier de configuration. Utilisez la commande suivante pour vous connecter et exécuter directement une commande :

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Commandes RCON

Une fois connecté via RCON, diverses commandes administratives et de diagnostic peuvent être exécutées sur le serveur Factorio. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état et le contrôle du serveur.

| Commande                         | Description                                            |
|---------------------------------|--------------------------------------------------------|
| `/help`                         | Affiche toutes les commandes disponibles               |
| `/players`                      | Liste tous les joueurs connectés                        |
| `/kick <player>`                | Expulse un joueur du serveur                            |
| `/ban <player>`                 | Bannit un joueur de façon permanente                    |
| `/unban <player>`               | Débannit un joueur précédemment banni                   |
| `/admins`                       | Affiche la liste des admins du serveur                  |
| `/promote <player>`             | Donne les droits d’admin à un joueur                     |
| `/demote <player>`              | Retire les droits d’admin d’un joueur                    |
| `/save`                         | Sauvegarde l’état actuel du monde                        |
| `/server-save`                  | Lance une sauvegarde manuelle du serveur                 |



## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux Factorio. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via une authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />