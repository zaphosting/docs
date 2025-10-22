---
id: redm-rcon
title: "RedM : RCON"
description: "Découvrez comment gérer à distance vos serveurs de jeux RedM de manière sécurisée et efficace sans être en jeu → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans RedM, RCON est utilisé pour exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler RedM depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait dans la section **Éditeur CFG** de l’administration du serveur de jeux dans **txAdmin**. Pour cela, assurez-vous que les lignes suivantes sont ajoutées ou ajustées dans la configuration :

```cfg
ensure rconlog
set rcon_password "votre-mot-de-passe-sécurisé"
```



## Connexion via RCON

Pour se connecter au serveur GameXY via RCON, on utilise l’outil Windows **IceCon**. Il est téléchargeable sur le [dépôt GitHub](https://github.com/icedream/icecon). Après avoir installé l’outil sur votre PC, créez une nouvelle connexion avec les informations suivantes :

- **Adresse IP du serveur**  
- **Port du jeu**
- **Mot de passe RCON**

Une fois la connexion établie avec succès, IceCon offre une interface graphique pour envoyer des commandes RCON au serveur RedM. Vous pouvez exécuter les commandes RCON standard et voir les retours en temps réel directement dans l’outil.

IceCon inclut aussi des fonctionnalités supplémentaires comme :

- Historique des commandes et auto-complétion  
- Visualiseur des logs du serveur  
- Boutons personnalisés pour commandes  
- Profils de connexion pour gérer plusieurs serveurs



## Commandes RCON

Une fois connecté via RCON, diverses commandes administratives et de diagnostic peuvent être exécutées sur le serveur RedM. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes d’état et le contrôle du serveur.

| Commande                  | Description                                         |
| ------------------------- | ------------------------------------------------- |
| `say <message>`           | Envoie un message à tous les joueurs dans le chat  |
| `start <resource-name>`   | Démarre une ressource serveur spécifique            |
| `stop <resource-name>`    | Arrête une ressource serveur spécifique             |
| `restart <resource-name>` | Redémarre une ressource serveur spécifique          |
| `ensure <resource-name>`  | Démarre la ressource uniquement si elle n’est pas déjà lancée |
| `refresh`                 | Recharge toutes les ressources depuis le dossier ressources |
| `clear`                   | Vide la sortie de la console serveur                |
| `crash`                   | Force un crash du serveur (à des fins de debug)     |
| `quit`                    | Éteint proprement le serveur                          |



## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux RedM. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous accompagner ! 🙂

<InlineVoucher />