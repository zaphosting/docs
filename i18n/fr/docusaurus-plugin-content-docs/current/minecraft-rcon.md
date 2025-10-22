---
id: minecraft-rcon
title: "Minecraft : RCON"
description: "Découvrez comment gérer à distance vos serveurs de jeux Minecraft avec RCON pour un contrôle flexible, sécurisé et une administration efficace → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans Minecraft, RCON sert à exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux diagnostics. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible avec des clients RCON compatibles.

Un gros avantage de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les admins peuvent surveiller et contrôler Minecraft depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait directement dans l’administration du serveur de jeux. Dans la section **Paramètres**, il y a une option appelée **RCON** qu’il faut activer. Un mot de passe sécurisé doit être défini, ainsi qu’un port valide. Cela se fait en modifiant le fichier de configuration situé sous **Configs** dans le panneau de gestion du serveur de jeux. Dans le fichier nommé `server.properties`, les entrées suivantes doivent être ajoutées ou modifiées :

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<définis-ton-mot-de-passe>
```
Le port RCON attribué se trouve en bas de la page des paramètres dans l’aperçu des ports et doit y être spécifié.



## Connexion via RCON

Pour se connecter au serveur Minecraft via RCON, on utilise l’outil en ligne de commande **rcon-cli**. Il peut être téléchargé depuis le [dépôt officiel GitHub](https://github.com/gorcon/rcon-cli). Après avoir téléchargé et installé l’outil sur ton ordinateur, tu peux établir une connexion en utilisant l’adresse IP du serveur, le port RCON et le mot de passe RCON.

Le port attribué se trouve dans l’**aperçu des ports** en bas de la page des paramètres dans l’administration du serveur de jeux. Le mot de passe et le port doivent correspondre aux valeurs configurées dans le panneau ou le fichier de configuration. Utilise la commande suivante pour te connecter et exécuter directement une commande :

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> commande
```



## Commandes RCON

Une fois connecté via RCON, tu peux exécuter différentes commandes administratives et de diagnostic sur le serveur Minecraft. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état et le contrôle du serveur.

| Commande               | Description                                 |
|------------------------|---------------------------------------------|
| `list`               | Liste les joueurs connectés                  |
| `say <message>`       | Envoie un message à tous les joueurs         |
| `kick <player>`       | Expulse un joueur du serveur                  |
| `ban <player>`        | Bannit un joueur                              |
| `pardon <player>`     | Débannit un joueur                            |
| `op <player>`         | Donne les privilèges d’opérateur à un joueur |
| `deop <player>`       | Retire les privilèges d’opérateur             |
| `time set <value>`    | Définit l’heure du monde (ex : jour, nuit, nombre) |
| `gamemode <mode> <player>` | Définit le mode de jeu d’un joueur       |
| `weather <clear/rain/thunder>` | Change la météo                      |
| `stop`                | Arrête le serveur proprement                  |



## Conclusion

RCON est un outil clé pour l’administration à distance des serveurs de jeux Minecraft. Il permet un accès rapide et direct aux fonctions administratives tout en offrant un contrôle d’accès via authentification par mot de passe. Une configuration correcte et sécurisée est essentielle pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’accompagner ! 🙂

<InlineVoucher />