---
id: palworld-server-commands
title: "Palworld : Commandes du serveur Palworld"
description: "Découvrez comment gérer efficacement les serveurs Palworld grâce aux commandes intégrées pour le contrôle admin et le gameplay → En savoir plus maintenant"
sidebar_label: Commandes du serveur
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Les serveurs Palworld disposent tous d’un ensemble de commandes serveur intégrées utiles, utilisables en jeu et via la console de votre serveur. Dans ce guide, nous allons explorer plusieurs de ces commandes en fournissant descriptions et exemples d’utilisation pour chacune.

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="Configure ton serveur PALWORLD en seulement UNE MINUTE !" description="Tu comprends mieux en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décortique tout. Que tu sois pressé ou que tu préfères apprendre de manière super engageante !"/>

<InlineVoucher />

## Configuration de l’Admin

Tu dois d’abord définir un mot de passe admin pour ton serveur Palworld et t’ajouter comme admin en jeu avant de pouvoir accéder aux commandes admin du serveur dans la section suivante.

Tu peux définir le mot de passe admin de ton serveur via l’onglet **Paramètres** sur l’interface web de ton serveur ou via le fichier de configuration **PalWorldSettings.ini**. Une fois défini, tu peux utiliser la commande `/AdminPassword [motdepasse]` en jeu pour t’ajouter comme admin.

:::tip
On te recommande vivement de jeter un œil à notre [guide Configuration Admin](palworld-admin.md) qui est dédié à ce sujet et fournit des détails plus approfondis sur la définition du mot de passe admin et l’ajout d’utilisateurs comme admin.
:::

## Commandes Disponibles

Le tableau ci-dessous présente une série de commandes serveur pour Palworld, avec leurs exemples d’utilisation et descriptions, utilisables en jeu et via la console serveur.

Lorsque le paramètre `steamid` est requis, tu peux facilement copier le SteamID d’un joueur en cliquant deux fois droit sur la liste des joueurs.

:::info
Tu dois configurer un mot de passe Admin et t’octroyer les permissions via la commande `/AdminPassword` avant de pouvoir utiliser ces commandes. Sinon, tu recevras une erreur de permission. Lis la section suivante de ce guide pour comprendre comment faire.
:::

| Syntaxe de la commande         | Valeurs acceptées | Description                                                            | 
| ------------------------------ | ----------------- | ---------------------------------------------------------------------- | 
| /Shutdown [secs] [message]     | Entier, Chaîne    | Éteint le serveur après le nombre de secondes spécifié, avec message   | 
| /DoExit                        | -                 | Arrête le serveur de force                                            | 
| /Broadcast                     | Chaîne            | Envoie un message à tous les joueurs connectés sur le serveur         | 
| /KickPlayer [steamid]          | Chaîne            | Expulse le joueur ciblé du serveur                                    | 
| /BanPlayer [steamid]           | Chaîne            | Bannit le joueur ciblé du serveur                                     | 
| /TeleportToPlayer [steamid]    | Chaîne            | Téléporte vers le joueur ciblé                                        | 
| /TeleportToMe [steamid]        | Chaîne            | Téléporte le joueur ciblé vers toi                                    | 
| /ShowPlayers                   | -                 | Affiche des infos sur tous les joueurs actuellement connectés         | 
| /Info                          | -                 | Affiche les infos du serveur                                          | 
| /Save                          | -                 | Sauvegarde les données du monde actuel                               |

:::note
Tu ne peux pas encore débannir un joueur en jeu car aucune commande n’est disponible pour cela. Il faudra éditer manuellement le fichier `banlist.txt` dans le répertoire de ton serveur si tu souhaites débannir un joueur.
:::

<InlineVoucher />