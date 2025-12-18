---
id: minecraft-faultyworld
title: "Minecraft : Supprimer les chunks défectueux du monde"
description: "Découvrez comment réparer les erreurs de chunks Minecraft et retrouver un gameplay fluide en supprimant les sections corrompues du monde → En savoir plus maintenant"
sidebar_label: Monde défectueux (Chunks)
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Ton monde est partiellement surchargé ou buggé, ce qui limite le gameplay et t’empêche de jouer correctement ? Ça peut arriver s’il y a trop d’objets dans certaines zones de ton monde ou si des chunks sont corrompus. Une erreur de chunk est un bug assez courant dans Minecraft qui se produit quand un chunk ne se charge pas correctement.

![img](https://screensaver01.zap-hosting.com/index.php/s/A5bj6posqkTfGK8/preview)

## Préparation

Il existe plusieurs outils pour modifier les mondes Minecraft. L’un des plus utilisés est [MCA Selector](https://github.com/Querz/mcaselector), que nous utiliserons dans ce guide. Pour ça, télécharge le fichier `MCA_Selector_Setup.exe`.

Ensuite, il te faut les fichiers de ton monde sur ton PC. Tu peux télécharger le monde via FTP. Si tu ne connais pas FTP, on te conseille de jeter un œil à notre [guide Accès via FTP](gameserver-ftpaccess.md). Télécharge le dossier `world` depuis le répertoire de ton serveur de jeux.

## Charger le monde

Une fois l’outil et le monde téléchargés, tu peux importer le monde dans l’outil. Clique dans le menu sur `File -> Open World`. Tu devrais alors voir ton monde comme dans notre exemple.

:::info
Selon les coordonnées, il faudra peut-être d’abord zoomer en arrière avec la souris pour trouver la zone concernée.
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/eGY45mKdd4ZEwW4/download)

## Supprimer les chunk(s)

Tu peux sélectionner des cases (chunks) individuellement en cliquant avec la souris. Cherche et sélectionne les chunks qui posent problème et que tu veux supprimer. Puis clique sur `Selection -> Delete selected Chunks` dans le menu.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDCAEX3iWyjjXQm/download)

Les chunks sélectionnés sont alors supprimés, tu peux maintenant uploader le monde corrigé sur ton serveur via FTP.

## Conclusion

Bravo, tu as réussi à supprimer les chunks défectueux et tu devrais pouvoir rejouer sur ce monde sans souci. Si tu as d’autres questions ou besoin d’aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂

<InlineVoucher />