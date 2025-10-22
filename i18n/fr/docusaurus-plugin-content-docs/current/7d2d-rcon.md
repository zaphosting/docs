---
id: 7d2d-rcon
title: "7 Days to Die : RCON"
description: "Découvrez comment gérer et contrôler à distance vos serveurs 7 Days to Die en toute sécurité sans accès en jeu pour une administration efficace → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-7d2d
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans 7 Days to Die, RCON est utilisé pour exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler 7 Days to Die depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait directement dans l’administration du serveur de jeux. Dans la section **Paramètres**, il y a une option appelée **RCON** qu’il faut activer. Un mot de passe sécurisé doit être défini, ainsi qu’un port valide.

Le port RCON attribué se trouve en bas de la page des paramètres dans la **Vue d’ensemble des ports**.

Avant d’utiliser RCON, il faut aussi modifier le fichier de configuration situé sous **Configs** dans le panneau de gestion du serveur de jeux. Dans le fichier nommé `serverconfig.xml`, les entrées suivantes doivent être ajoutées ou modifiées :

```cfg
<property name="TelnetPassword" value="définis-ton-mot-de-passe-ici"/>
```
Le port RCON attribué se trouve en bas de la page des paramètres dans la Vue d’ensemble des ports et doit y être spécifié.



## Connexion via RCON

Pour se connecter au serveur 7 Days to Die via RCON, on utilise l’outil en ligne de commande **rcon-cli**. Il peut être téléchargé depuis le [dépôt officiel GitHub](https://github.com/gorcon/rcon-cli). Après avoir téléchargé et installé l’outil sur ton ordinateur, tu peux établir une connexion en utilisant l’adresse IP du serveur, le port RCON et le mot de passe RCON.

Le port attribué se trouve dans la **Vue d’ensemble des ports** en bas de la page des paramètres dans l’administration du serveur de jeux. Le mot de passe et le port doivent correspondre aux valeurs configurées dans le panneau ou dans le fichier de configuration. Utilise la commande suivante pour te connecter et exécuter directement une commande :

```bash
rcon-cli -a <IP>:<PORT> -p <MOT_DE_PASSE> -t telnet commande
```



## Commandes RCON

Une fois connecté via RCON, différentes commandes administratives et de diagnostic peuvent être exécutées sur le serveur 7 Days to Die. Les commandes disponibles dépendent du moteur du jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état et le contrôle du serveur.

| Commande                | Description                                    |
|------------------------|------------------------------------------------|
| `dm` ou `debugmenu on`  | Active le mode développeur                      |
| `giveme <ItemName> <count>` | Donne un objet à soi-même                   |
| `buffplayer <ID> <buff>` | Donne un buff à un joueur                      |
| `tele <x> <y> <z>`     | Téléporte aux coordonnées spécifiées            |
| `settime <seconds>`     | Définit l’heure actuelle en jeu                 |
| `setgameday <day>`      | Définit le jour actuel du jeu                    |
| `spawnentity <ID>`      | Fait apparaître une entité par ID               |
| `kick <player>`         | Expulse un joueur du serveur                     |
| `ban <address>`         | Bannit une IP ou un joueur                       |
| `saveworld`             | Sauvegarde manuellement l’état du monde         |



## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux 7 Days to Die. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via une authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />