---
id: avorion-rcon
title: "Avorion : RCON"
description: "Découvrez comment gérer à distance vos serveurs Avorion avec RCON pour un contrôle flexible et sécurisé sans rejoindre le jeu → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-avorion
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans Avorion, RCON sert à exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les admins peuvent surveiller et contrôler Avorion depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait directement dans l’administration du serveur de jeux. Dans la section **Paramètres**, il y a une option appelée **RCON** qu’il faut activer. Un mot de passe sécurisé doit être défini.

Le port RCON attribué se trouve en bas de la page des paramètres dans la **Vue d’ensemble des ports**. 



## Connexion via RCON

Pour se connecter au serveur Avorion via RCON, on utilise l’outil en ligne de commande **rcon-cli**. Il peut être téléchargé depuis le [dépôt officiel GitHub](https://github.com/gorcon/rcon-cli). Après avoir téléchargé et installé l’outil sur votre ordinateur, vous pouvez établir une connexion en utilisant l’adresse IP du serveur, le port RCON et le mot de passe RCON.

Le port attribué se trouve dans la **Vue d’ensemble des ports** en bas de la page des paramètres dans l’administration du serveur de jeux. Le mot de passe et le port doivent correspondre aux valeurs configurées dans le panneau ou le fichier de configuration. Utilisez la commande suivante pour vous connecter et exécuter directement une commande :

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Commandes RCON

Une fois connecté via RCON, diverses commandes administratives et de diagnostic peuvent être exécutées sur le serveur Avorion. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes de statut et le contrôle du serveur.

| Commande                                   | Description                                               |
|--------------------------------------------|-----------------------------------------------------------|
| `/save`                                    | Sauvegarde le monde de jeu actuel                         |
| `/status`                                  | Affiche le statut du serveur et des joueurs              |
| `/kick <playername>`                        | Expulse un joueur du serveur                              |
| `/ban <playername>`                         | Bannit un joueur du serveur                               |
| `/unban <playername>`                       | Retire un bannissement                                    |
| `/teleport <x> <y>`                         | Téléporte le joueur aux coordonnées du secteur donné     |
| `/tpto <playername>`                        | Téléporte vers un autre joueur                            |
| `/sethome`                                 | Définit le secteur actuel comme domicile                  |
| `/home`                                    | Téléporte vers votre secteur domicile                     |
| `/give <itemName> <amount>`                 | Donne des objets ou ressources                            |




## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux Avorion. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous accompagner ! 🙂

<InlineVoucher />