---
id: ark-rcon
title: "ARK: Survival Evolved : RCON"
description: "Découvrez comment gérer et contrôler à distance vos serveurs ARK: Survival Evolved en toute sécurité sans rejoindre la partie → En savoir plus maintenant"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet d’accéder à la console du serveur sans interaction directe avec l’environnement du serveur. Cela rend possible l’exécution de commandes administratives, l’ajustement des paramètres de configuration ou la récupération d’informations sur l’état du serveur.

Dans ARK: Survival Evolved, RCON est utilisé pour exécuter des commandes côté serveur, comme gérer les joueurs, modifier les réglages du gameplay ou accéder aux sorties de diagnostic. La connexion est protégée par un mot de passe et fonctionne via un port spécifié, accessible via des clients RCON compatibles.

Un avantage clé de RCON est qu’il permet la gestion du serveur **sans avoir à être connecté au jeu en tant que joueur**. Les administrateurs peuvent surveiller et contrôler ARK: Survival Evolved depuis des outils externes, des interfaces en ligne de commande ou des tableaux de bord web, offrant flexibilité et confort pour une gestion à distance.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer et le configurer. Cela se fait en modifiant le fichier de configuration situé dans **Configs** du panneau de gestion du serveur de jeux. Dans le fichier nommé `GameUserSettings.ini`, les entrées suivantes doivent être ajoutées ou modifiées :

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=define-your-password
```
Le port RCON attribué se trouve en bas de la page des paramètres dans l’aperçu des ports et doit y être spécifié.



## Connexion via RCON

Pour se connecter au serveur ARK: Survival Evolved via RCON, l’outil **ARKon** est utilisé. Il est téléchargeable depuis ce [Steam Thread]([Steam thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/)). Après avoir téléchargé et installé l’outil sur votre ordinateur, il faut créer une nouvelle entrée serveur avec les informations suivantes :

- Adresse IP du serveur  
- Port RCON
- Mot de passe RCON 

Après avoir sauvegardé le profil de connexion, le serveur peut être sélectionné dans la liste et la connexion établie. Une fois connecté, les commandes RCON peuvent être exécutées via l’interface graphique. ARKon offre aussi des fonctionnalités supplémentaires spécifiques à ARK: Survival Evolved, telles que :

- Liste des joueurs en temps réel et statut en ligne  
- Surveillance et interaction avec le chat en jeu  
- Boutons d’accès rapide pour les commandes admin courantes  
- Journalisation des sorties RCON et historique des commandes



## Commandes RCON

Une fois connecté via RCON, diverses commandes administratives et de diagnostic peuvent être exécutées sur le serveur ARK: Survival Evolved. Les commandes disponibles dépendent du moteur de jeu mais incluent généralement des actions pour la gestion des joueurs, les requêtes de statut et le contrôle du serveur.

| Commande                            | Description                                           |
|-----------------------------------|--------------------------------------------------------|
| `EnableCheats <password>`         | Active le mode admin sur le serveur (commandes admin)     |
| `AdminCheat KickPlayer <Steam64ID>` | Expulse un joueur                                     |
| `AdminCheat BanPlayer <Steam64ID>`  | Bannit un joueur                                        |
| `AdminCheat UnbanPlayer <playerName>` | Débannit un joueur                                    |
| `AdminCheat Broadcast <message>`   | Envoie un message broadcast à tous les joueurs              |
| `AdminCheat SaveWorld`            | Sauvegarde l’état actuel du monde                        |
| `AdminCheat SetTimeOfDay <hh:mm>` | Définit l’heure en jeu                                  |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | Téléporte un joueur à votre position         |
| `cheat Slomo <factor>`            | Ajuste la vitesse du jeu                                    |
| `AdminCheat GiveItemNum <ItemID> <quantity> <quality> 0` | Fait apparaître des objets dans votre inventaire        |




## Conclusion

RCON est un outil essentiel pour l’administration à distance des serveurs de jeux ARK: Survival Evolved. Il permet un accès rapide et direct aux fonctionnalités administratives tout en offrant un contrôle d’accès via authentification par mot de passe. Une configuration correcte et sécurisée est cruciale pour garantir la stabilité du serveur et protéger contre les accès non autorisés.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />