---
id: enshrouded-configuration
title: "Enshrouded : Configuration du Serveur Enshrouded"
description: "Découvrez comment personnaliser les paramètres de votre serveur Enshrouded pour un gameplay optimal et une gestion efficace → En savoir plus maintenant"
sidebar_label: Configuration du Serveur
services:
  - gameserver-enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Au lancement, Enshrouded propose quelques paramètres de configuration que tu peux personnaliser à ta guise. Dans ce guide, on va explorer tous les paramètres de configuration disponibles actuellement et expliquer chacun en détail.

<YouTube videoId="wgvfvQdtwN4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/tc7mcyZqk8Wyafa/preview" title="Configure ton Serveur Enshrouded en seulement 60 secondes !" description="Tu préfères comprendre en voyant les choses en action ? On a ce qu’il te faut ! Plonge dans notre vidéo qui te décompose tout ça. Que tu sois pressé ou que tu préfères apprendre de façon plus fun et immersive !" />

<InlineVoucher />

## Accéder à ton Fichier de Configuration

D’abord, tu dois accéder à ton fichier de configuration pour pouvoir modifier les paramètres. Il y a plusieurs façons d’éditer ce fichier.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via l’Interface Web" default>

#### Via l’Interface Web

La méthode la plus simple est de te rendre dans la section **Paramètres** de l’interface web de ton serveur de jeux et de chercher les réglages appropriés, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

</TabItem>

<TabItem value="configs" label="Via le fichier de config WI">

#### Via le fichier de config WI

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, sinon les changements seront annulés au redémarrage.
:::

Sinon, si tu préfères éditer directement le fichier brut, tu peux y accéder en allant dans la section **Configs** de l’interface web de ton serveur de jeux et en cliquant sur le bouton bleu d’édition du fichier, comme montré ci-dessous :

![](https://screensaver01.zap-hosting.com/index.php/s/jPep5HzYtWnJTxT/preview)

Cela ouvrira un éditeur de texte directement sur le site pour que tu puisses modifier le fichier.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
Le serveur doit être arrêté avant de pouvoir modifier la config, sinon les changements seront annulés au redémarrage.
:::

La dernière méthode pour accéder au fichier brut est via FTP. Si tu n’es pas familier avec FTP, on te conseille de jeter un œil au [guide d’accès via FTP](gameserver-ftpaccess.md). Cependant, cette méthode est plus longue et si tu veux modifier directement le contenu du fichier, on recommande d’utiliser simplement la section **Configs** de l’interface web de ton serveur de jeux comme expliqué plus haut.

</TabItem>
</Tabs>

## Options de Configuration du Serveur

Voici les options de configuration du serveur actuellement disponibles, fournies par le jeu pour personnaliser ton serveur, notamment le nom du serveur, le mot de passe ainsi que quelques réglages internes.

:::tip
On ne recommande pas de modifier les paramètres Port, IP ou Répertoire, car ils sont configurés automatiquement par le serveur de jeux. Les changer pourrait casser ton serveur !
:::

| Nom du Paramètre | Exemple                                 | Description                                                 |
| ---------------- | ------------------------------------- | ----------------------------------------------------------- | 
| name             | ZAP-Hosting Docs Test                  | Le nom de ton serveur                                       |
| password         | iLoveZAP!2024                         | Protège ton serveur avec un mot de passe (privé)           |
| saveDirectory    | ./savegame (par défaut)               | Définit le dossier où seront stockées tes sauvegardes      |
| logDirectory     | ./logs (par défaut)                   | Définit le dossier où seront stockés tes logs               |
| ip               | 123.123.123.123                      | L’adresse IP publique sur laquelle tourne le serveur        |
| gamePort         | 15636 (par défaut)                    | Le port public sur lequel tourne le serveur                  |
| queryPort        | 15637 (par défaut)                    | Le port public pour accéder au serveur                       |
| slotCount        | 4                                    | Le nombre max de joueurs pouvant rejoindre le serveur (max 16) |

Une fois tes modifications terminées, pense bien à sauvegarder le fichier et à redémarrer ton serveur. Au prochain démarrage, ton serveur utilisera les paramètres que tu as définis.

<InlineVoucher />