---
id: conan-rcon
title: "Conan Exiles : RCON"
description: "Découvrez comment gérer et contrôler à distance vos serveurs Conan Exiles en toute sécurité sans être connecté en jeu → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-conan
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans Conan Exiles, RCON sert à exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler Conan Exiles depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait en modifiant le fichier de configuration situé dans **Configs** du panneau de gestion du serveur de jeux. Dans le fichier nommé `game.ini`, les entrées suivantes doivent être ajoutées ou modifiées :

```cfg
[RconPlugin]
RconEnabled=1
RconPassword=define-your-password
RconPort=XXXXX
```
Le port RCON attribué se trouve en bas de la page des paramètres dans l’aperçu des ports et doit être renseigné ici.



## Connexion via RCON

Pour se connecter au serveur Conan Exiles via RCON, on utilise l’outil en ligne de commande **rcon-cli**. Il peut être téléchargé depuis le [dépôt officiel GitHub](https://github.com/gorcon/rcon-cli). Après avoir téléchargé et installé l’outil sur votre ordinateur, la connexion peut être établie en utilisant l’adresse IP du serveur, le port RCON et le mot de passe RCON.

Le port attribué se trouve dans l’**aperçu des ports** en bas de la page des paramètres dans l’administration du serveur de jeux. Le mot de passe et le port doivent correspondre aux valeurs configurées dans le panneau ou le fichier de configuration. Utilisez la commande suivante pour vous connecter et exécuter directement une commande :

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## Commandes RCON

Une fois connecté via RCON, diverses commandes administratives et de diagnostic peuvent être exécutées sur le serveur Conan Exiles. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état et le contrôle du serveur.

| Commande                    | Description                        |
| --------------------------- | ---------------------------------- |
| `broadcast <message>`       | Envoie un message à tous les joueurs |
| `kick <playername>`         | Expulse un joueur du serveur       |
| `ban <playername>`          | Bannit un joueur                   |
| `unban <playername>`        | Débannit un joueur                 |
| `restartserver`             | Redémarre le serveur              |
| `restartserver <seconds>`   | Redémarre le serveur avec un délai |
| `shutdownserver`            | Éteint le serveur                 |
| `shutdownserver <seconds>`  | Éteint le serveur avec un délai   |
| `changemap <mapname>`       | Charge une autre carte            |
| `setpassword <newpassword>` | Définit un nouveau mot de passe RCON |

## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux Conan Exiles. Il permet un accès rapide et direct aux fonctions administratives tout en offrant un contrôle d’accès via une authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous accompagner ! 🙂

<InlineVoucher />