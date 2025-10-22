---
id: rimworldtogether-server-savegames
title: "Rimworld Together : Gérer les parties sauvegardées Rimworld Together"
description: "Découvrez comment gérer et sauvegarder vos parties Rimworld Together pour un gameplay multijoueur sans accroc → En savoir plus maintenant"
sidebar_label: Gérer les parties sauvegardées
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans ce guide, on va voir comment gérer vos parties sauvegardées Rimworld Together sur votre serveur de jeux, y compris comment faire une sauvegarde de vos parties locales et celles sur le serveur, ainsi que comment les uploader sur votre serveur.

:::info
Gardez en tête que déplacer une partie vanilla existante vers un serveur Rimworld Together avec des mods risque de causer des problèmes de gameplay. C’est surtout vrai quand vous déplacez des mondes entre des serveurs avec des mods différents.
:::

<InlineVoucher />

## Préparation

Pour accéder aux fichiers de votre serveur, vous aurez besoin d’un client FTP comme [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), tous deux open-source et gratuits.

Vous devrez vous connecter à votre serveur via un client FTP avec les identifiants que vous trouverez dans **Outils->FTP-Browser** sur le panneau de contrôle de votre serveur de jeux. Pour plus d’aide, utilisez notre [guide Accès via FTP](gameserver-ftpaccess.md) pour vous connecter à votre serveur.

## Sauvegarder la partie

### Partie locale

Les parties locales sont celles que vous avez créées en hébergeant une partie multijoueur localement sur votre appareil. Elles se trouvent dans le dossier AppData LocalLow de Windows, précisément ici :
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
Vous pouvez accéder facilement à ce chemin en appuyant simultanément sur `CTRL` + `R` et en collant ce chemin dans la fenêtre d’exécution : `%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`. Cliquez sur **OK** et vous serez directement dans le dossier.

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

À cet emplacement, vous verrez toutes vos parties locales.

### Accéder à la partie via FTP

Sauvegarder votre partie depuis le serveur est simple. Une fois connecté à votre serveur de jeux via un client FTP, rendez-vous dans ce dossier :
```
../rimworld-together/Saves
```

Là, vous verrez des dossiers, chacun correspondant à une partie sauvegardée. Faites un clic droit sur le dossier et cliquez sur **Télécharger** pour le sauvegarder localement sur votre appareil.

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### Sauvegarde automatique

On propose aussi une option pour sauvegarder automatiquement votre partie (et le fichier de config) directement via notre panneau de contrôle. Allez dans la section **Outils->Sauvegardes** de votre serveur de jeux. Vous pourrez configurer plusieurs options pour programmer des sauvegardes automatiques. On vous offre 10 Go de stockage gratuit pour vos sauvegardes. Pour plus d’infos sur les sauvegardes, jetez un œil à notre guide dédié [Sauvegardes](gameserver-backups.md).

## Upload de la partie

Comme pour la sauvegarde, uploader votre partie est simple. Connectez-vous d’abord à votre serveur de jeux via un client FTP. Ensuite, allez dans ce dossier :
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

Glissez-déposez simplement vos parties sauvegardées dans ce dossier via votre client FTP, elles seront uploadées sur votre serveur.

:::info
Comme dit au début du guide, déplacer des mondes entre des serveurs avec des mods différents risque de causer des problèmes de gameplay.
:::

<InlineVoucher />