---
id: rimworldtogether-mods
title: "RimWorld Together : Installer des mods"
description: "Découvrez comment améliorer votre serveur RimWorld Together avec des mods populaires pour un gameplay coop en ligne fluide → En savoir plus maintenant"
sidebar_label: Installer des Mods
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## Introduction

RimWorld Together est un mod multijoueur open-source ultra populaire, entièrement géré par la communauté RimWorld, qui permet un gameplay CO-OP en ligne pour le jeu RimWorld. Dans ce guide, on vous montre comment installer des mods sur votre serveur RimWorld Together.

<InlineVoucher />

## Récupérer des Mods

Vous pouvez installer une grande variété de mods RimWorld différents sur votre serveur RimWorld Together.

Les mods se divisent en trois types différents :
- **Mods Obligatoires** : Ces mods sont requis, le client doit les avoir sinon il ne pourra pas se connecter.
- **Mods Optionnels** : Ces mods ne sont pas obligatoires, le client peut se connecter même s’il ne les a pas.
- **Mods Interdits** : Ces mods sont bannis, ce qui signifie que le serveur refusera immédiatement la connexion du client.

Vous verrez ces trois types apparaître dans la section suivante pour l’upload des mods, car les mods sont répartis dans trois dossiers.

### Fichiers Core & DLCs

RimWorld Together vous permet de télécharger facilement les fichiers Core & DLCs. Ceux-ci sont traités exactement comme n’importe quel autre mod.

Vous pouvez télécharger le Core et les DLCs directement depuis le [dépôt GitHub de RimWorld Together](https://github.com/RimworldTogether/RimWorld-Together), en téléchargeant spécifiquement le dossier **Extras.zip**.

### Autres Mods

Vous pouvez trouver un large éventail de mods RimWorld simplement en cherchant sur internet. On recommande vivement d’utiliser la page [Steam Workshop de RimWorld](https://steamcommunity.com/app/294100/workshop/) pour chercher des mods, grâce à sa grande popularité et donc à la quantité élevée de mods disponibles.

Quand vous vous abonnez à des mods directement via Steam Workshop, ils se téléchargent via votre client Steam dans le répertoire suivant : `../steamapps/workshop/content/294100`.

:::tip
Si vous ne possédez pas RimWorld sur Steam, vous pouvez quand même télécharger les fichiers et mods Steam Workshop en utilisant SteamCMD. Commencez par télécharger [SteamCMD depuis le site officiel de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) ou directement [ici](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Lancez **steamcmd.exe** et attendez la fin de l’installation. Une fois prêt, tapez `login anonymous` dans la console.

Vous pouvez maintenant commencer à télécharger des mods en lançant `workshop_download_item 294100 [workshop_id]`, en remplaçant `[workshop_id]` par l’ID du mod Steam Workshop. Vous pouvez trouver l’ID du mod en analysant simplement l’URL, plus précisément la partie finale, par exemple : `/?id=3230195082`.

Tous les mods téléchargés via SteamCMD seront placés dans le chemin suivant : `../steamapps/workshop/content/294100`.
:::

Une fois que vous avez téléchargé vos mods, vous pouvez passer à la section suivante qui explique comment les uploader sur votre serveur de jeux.

:::note
Certains mods sont garantis incompatibles avec RimWorld Together. Vous pouvez consulter la liste des mods confirmés [incompatibles ici](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md).

De plus, il peut y avoir d’autres mods qui ne fonctionnent pas comme prévu avec RimWorld Together, donc il faudra peut-être faire un peu de recherche et de tests pour s’assurer que les mods fonctionnent correctement.
:::

## Upload des Mods

Maintenant que vous avez vos mods prêts, commencez par vous connecter à votre serveur de jeux via FTP. Consultez notre [guide Accès via FTP](gameserver-ftpaccess.md) pour apprendre comment faire.

Avec votre client FTP prêt, naviguez vers le répertoire suivant :
```
../rimworld-together/Mods
```

Dans ce répertoire, vous verrez trois dossiers séparés pour les différents types de mods. Cela correspond à ce qu’on a expliqué au début de la section précédente sur les types de mods. Si vous ne l’avez pas encore lu, on vous conseille de revenir en arrière pour bien comprendre où placer chaque mod.

Avec ça en tête, accédez maintenant aux fichiers des mods que vous avez téléchargés et uploadez-les un par un dans le dossier de catégorie de mod approprié sur votre serveur de jeux.

:::note
Le serveur doit être arrêté avant d’ajouter ou modifier des mods, sinon les modifications risquent de ne pas être prises en compte.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## Démarrer le Serveur

Une fois que vous avez uploadé les plugins que vous vouliez, il suffit de redémarrer votre serveur. Au prochain démarrage, tous les mods que vous avez ajoutés devraient être chargés sur le serveur.

Vous avez réussi à installer de nouveaux mods sur votre serveur RimWorld Together !

## Mods Populaires

Vous cherchez encore les mods parfaits pour votre serveur ? Parcourez notre liste soigneusement sélectionnée des mods les plus populaires et recommandés pour booster votre gameplay et donner à votre serveur la touche finale qu’il mérite. Trouvez l’inspiration et dénichez exactement les ajouts qui collent à votre projet.

<SearchableItemList items={items} />

<InlineVoucher />