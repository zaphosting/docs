---
id: humanitz-rcon
title: "HumanitZ : RCON"
description: "Apprends à gérer à distance ton serveur HumanitZ avec RCON et rcon-cli → Découvre tout maintenant"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) est un protocole réseau utilisé pour contrôler à distance les serveurs de jeux. Il permet aux admins d’exécuter des commandes sur le serveur sans avoir besoin de se connecter directement au jeu. Ça rend possible la gestion des joueurs, l’ajustement des paramètres ou la surveillance de l’activité du serveur depuis l’extérieur.

Dans **HumanitZ**, RCON peut être utilisé pour lancer des commandes admin comme expulser des joueurs, envoyer des messages, ou contrôler le comportement du serveur. L’accès est sécurisé via un mot de passe et un port dédié.

Un gros avantage de RCON, c’est qu’il permet d’administrer le serveur **sans être connecté en tant que joueur dans le jeu**, offrant une gestion à distance flexible et efficace.

<InlineVoucher />

## Configuration

Avant de pouvoir utiliser RCON, il faut l’activer dans la config du serveur. Ouvre la page des paramètres de ton serveur et active l’option rcon. Tu peux aussi modifier ça via les fichiers de config. Ouvre ton panneau de gestion du serveur de jeux, va dans Configs, et trouve le fichier `GameServerSettings.ini`.

Ajoute ou modifie les lignes suivantes :

```
RCONEnabled=true
RCONPassword=ton_mot_de_passe_sécurisé
RCONPort=XXXXX
```

Le port RCON attribué se trouve dans la **vue d’ensemble des ports** dans l’administration de ton serveur. Vérifie que le mot de passe et le port correspondent bien à ta config.

Après avoir fait les modifications, sauvegarde le fichier et **redémarre le serveur** pour que les réglages soient pris en compte.

## Connexion via RCON

Pour te connecter à ton serveur HumanitZ via RCON, tu peux utiliser l’outil en ligne de commande **rcon-cli**. Il est dispo sur le dépôt officiel GitHub :
https://github.com/gorcon/rcon-cli

Une fois installé, connecte-toi à ton serveur avec la commande suivante :

```bash
rcon-cli -a <IP>:<PORT> -p <MOT_DE_PASSE> commande
```

Remplace les placeholders par l’adresse IP de ton serveur, le port RCON, et le mot de passe.

Cette commande te permet d’exécuter directement des commandes RCON depuis ta machine locale sans session interactive.

## Commandes RCON

Une fois connecté via RCON, tu peux lancer différentes commandes admin sur ton serveur HumanitZ. Les commandes dispo dépendent du jeu, mais incluent souvent la gestion des joueurs et le contrôle du serveur.

| Commande | Description|
|----------------------------------|------------------------------------------|
| `broadcast <message>`| Envoie un message à tous les joueurs |
| `kick <nomdujoueur>`| Expulse un joueur du serveur |
| `ban <nomdujoueur>` | Bannit un joueur|
| `unban <nomdujoueur>` | Débannit un joueur|
| `save` | Sauvegarde l’état actuel du jeu |
| `restart`| Redémarre le serveur|
| `shutdown` | Éteint le serveur|
| `whitelist add <steamid>`| Ajoute un joueur à la whitelist |
| `whitelist remove <steamid>` | Retire un joueur de la whitelist|

## Conclusion

Bravo ! Tu as configuré et utilisé avec succès **RCON pour ton serveur HumanitZ**. Ça te permet de gérer ton serveur à distance, d’exécuter des commandes admin, et de garder le contrôle sans avoir à rejoindre la partie.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />