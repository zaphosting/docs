---
id: hytale-commands
title: "Hytale : Liste des commandes"
description: "Aperçu des commandes console et en jeu disponibles pour les serveurs Hytale → Découvre tout maintenant"
sidebar_label: Liste des commandes
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs Hytale offrent une large gamme de commandes permettant aux admins de gérer le gameplay, les joueurs, les mondes et la configuration du serveur. Ces commandes peuvent être exécutées via la console live du serveur ou directement en jeu, à condition d’avoir les permissions nécessaires.

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

Cette page donne un aperçu des commandes Hytale les plus utilisées et officiellement documentées.

<InlineVoucher />



## Authentification

Les commandes d’authentification sont nécessaires pour autoriser le serveur à accepter les connexions des joueurs et interagir avec les services en ligne de Hytale.

| Commande               | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `/auth login device`  | Lance le processus d’authentification via appareil. Le serveur affiche une URL et un code appareil à valider avec un compte Hytale. |
| `/auth login browser` | Lance un processus d’authentification via navigateur. Nécessite un environnement graphique sur le serveur. |
| `/auth status`        | Affiche le statut actuel d’authentification du serveur.      |
| `/auth logout`        | Déconnecte le serveur et supprime la session d’authentification active. |



## Joueur & Permissions

Ces commandes gèrent l’accès admin et l’attribution fine des permissions aux utilisateurs et groupes.

| Commande                                   | Description                                             |
| ----- | - |
| `/op add <PlayerName>`                    | Donne les privilèges opérateur au joueur spécifié.     |
| `/op remove <PlayerName>`                 | Retire les privilèges opérateur au joueur spécifié.    |
| `/perm user list <uuid>`                  | Affiche toutes les permissions directement attribuées à l’utilisateur. |
| `/perm user add <uuid> <permission>`      | Attribue une ou plusieurs permissions directement à l’utilisateur. |
| `/perm user remove <uuid> <permission>`   | Supprime des permissions spécifiques à l’utilisateur.  |
| `/perm user group list <uuid>`            | Montre tous les groupes de permissions auxquels l’utilisateur appartient. |
| `/perm user group add <uuid> <group>`     | Ajoute l’utilisateur au groupe de permissions spécifié. |
| `/perm user group remove <uuid> <group>`  | Retire l’utilisateur du groupe de permissions spécifié. |
| `/perm group list <group>`                | Liste toutes les permissions attribuées à un groupe.   |
| `/perm group add <group> <permission>`    | Ajoute des permissions à un groupe.                     |
| `/perm group remove <group> <permission>` | Supprime des permissions d’un groupe.                   |



## Liste blanche

Les commandes de liste blanche limitent l’accès au serveur aux joueurs approuvés uniquement.

| Commande                          | Description                                      |
| -------------------------------- | ------------------------------------------------ |
| `/whitelist add <playername>`    | Ajoute le joueur spécifié à la liste blanche.    |
| `/whitelist remove <playername>` | Retire le joueur spécifié de la liste blanche.   |
| `/whitelist list`                | Affiche tous les joueurs actuellement sur liste blanche. |
| `/whitelist enable`              | Active l’application de la liste blanche.        |
| `/whitelist disable`             | Désactive la liste blanche.                       |
| `/whitelist status`              | Affiche le statut actuel de la liste blanche.    |



## Gestion des mondes

Les commandes monde contrôlent la création, le chargement, le déchargement et la suppression des mondes.

| Commande                    | Description                                        |
| -- | -- |
| `/world create <name>`     | Crée un nouveau monde avec le nom spécifié.       |
| `/world load <name>`       | Charge un monde existant et le rend actif.         |
| `/world unload <name>`     | Décharge un monde sans supprimer ses données.      |
| `/world remove <name>`     | Supprime un monde et toutes ses données associées. |
| `/world setdefault <name>` | Définit le monde par défaut qui se charge au démarrage du serveur. |



## Gameplay et environnement

Ces commandes affectent directement les règles de jeu et le comportement du monde.

| Commande                    | Description                                 |
| -------------------------- | ------------------------------------------- |
| `/list`                    | Affiche tous les joueurs actuellement connectés. |
| `/tp <player> <target>`    | Téléporte un joueur vers un autre joueur.  |
| `/tp <player> <x> <y> <z>` | Téléporte un joueur à des coordonnées spécifiques. |



## Téléportation & Positionnement

Commandes pour gérer les positions des joueurs et leur visibilité.

| Commande                    | Description                                 |
| -- | - |
| `/list`                    | Affiche tous les joueurs actuellement connectés. |
| `/tp <player> <target>`    | Téléporte un joueur vers un autre joueur.  |
| `/tp <player> <x> <y> <z>` | Téléporte un joueur à des coordonnées spécifiques. |



## Utilitaires et aide

Les commandes utilitaires fournissent de l’aide et des infos sur le serveur.

| Commande           | Description                                          |
| ----- | ---- |
| `/help`           | Affiche la liste des commandes disponibles.         |
| `/help <command>` | Affiche l’aide détaillée pour une commande spécifique. |
| `/status`         | Montre le statut actuel du serveur et des infos runtime. |



## Conclusion

Le système de commandes Hytale offre des outils puissants pour gérer les serveurs, les joueurs et le gameplay. En maîtrisant ces commandes, les admins peuvent exploiter et personnaliser efficacement leur environnement serveur Hytale.

Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂



<InlineVoucher />