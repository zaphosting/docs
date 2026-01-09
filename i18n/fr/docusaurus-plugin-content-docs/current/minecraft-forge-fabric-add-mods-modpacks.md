---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft : Installer Mods / Modpacks"
description: "Découvrez comment télécharger et installer des mods et modpacks Minecraft pour améliorer le gameplay de votre serveur → En savoir plus maintenant"
sidebar_label: Installer Mods / Modpacks
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## Introduction

Vous allez apprendre comment télécharger et installer un Mod / Modpack sur votre serveur de jeux Minecraft.

<InlineVoucher />

## Préparation

- Un serveur de jeux ([vous pouvez en obtenir un ici](https://zap-hosting.com/en/gameserver-hosting/))
- Un client FTP (ex. WinSCP, FileZilla)
- Connectez-vous à votre serveur via FTP : ([Accès via FTP](gameserver-ftpaccess.md))



## Trouver & télécharger des mods ou modpacks

Il existe plein d’endroits sur internet pour trouver des mods / modpacks. La plus grande plateforme pour mods et modpacks est CurseForge. Presque 99% de tous les mods / modpacks Minecraft s’y trouvent et peuvent être téléchargés en quelques clics. Ce guide se concentre sur l’utilisation de CurseForge. Vous pouvez chercher des mods [ici](https://www.curseforge.com/minecraft/mc-mods) et des modpacks [ici](https://curseforge.com/minecraft/modpacks).

:::note
Les mods ne fonctionnent qu’avec une version spécifique du modloader. Vous devez vérifier la page du mod pour voir la version requise. Si vous installez plusieurs mods, assurez-vous qu’ils utilisent tous la même version. De plus, les mods Forge ne sont pas compatibles avec les mods Fabric, et vice versa.
:::

Allez sur la page de votre mod / modpack choisi et cliquez sur l’onglet "Files".

![](https://screensaver01.zap-hosting.com/index.php/s/abryep5KdQcqpAi/preview)


Trouvez la version que vous voulez et cliquez dessus pour accéder à la section "File Details".

:::tip
Vous pouvez filtrer par version et modloader avec le menu déroulant en haut de l’onglet "Files" sélectionné.

![](https://screensaver01.zap-hosting.com/index.php/s/HoJYzW7bkC4Z6oL/preview)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="Pour les Mods" default>
Dans la section "File Details", appuyez sur le bouton "Download". Sauvegardez ce fichier quelque part, vous en aurez besoin plus tard.

![](https://screensaver01.zap-hosting.com/index.php/s/7ZcEHsmmqZWdZB5/preview)

</TabItem>

<TabItem value="Modpacks" label="Pour les Modpacks">
Dans la section "File Details", descendez jusqu’à voir "Additional Files" et cliquez sur les trois points, sélectionnez "Download file". Sauvegardez ce fichier quelque part, vous en aurez besoin plus tard.

![](https://screensaver01.zap-hosting.com/index.php/s/YzH5Gz4w3yJZjx3/preview)

</TabItem>
</Tabs>

## Étape 2 - Extraire les fichiers téléchargés (uniquement pour les modpacks)

Trouvez le fichier téléchargé sur votre PC, faites un clic droit dessus, sélectionnez "Extraire tout...". Choisissez un dossier où vous voulez extraire les fichiers. Retenez-le !

![](https://screensaver01.zap-hosting.com/index.php/s/y9SWDpX2HYgekbQ/preview)

![extraire le fichier version allemande](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

Votre dossier dézippé devrait contenir un dossier mods, config et defaultconfig. Il peut aussi y avoir plus de dossiers que ceux montrés ici.

:::note
Certains modpacks demandent des étapes supplémentaires, comme AllOfFabric6. Pour AllOfFabric6, vous devrez lancer "startserver.bat" (Windows) ou "startserver.sh" (Linux / MacOS) pour obtenir les dossiers nommés ci-dessus. Le script téléchargera les dossiers pour vous. Mais dans la plupart des cas, les dossiers seront déjà là sans étapes supplémentaires. S’il n’y a pas de script dans le dossier dézippé, faites une petite recherche sur internet pour savoir comment obtenir les fichiers serveur pour votre modpack.
:::


## Étape 3 - Installer la bonne version serveur

Dans l’interface web Zap-Hosting, sélectionnez votre serveur de jeux et allez dans "Games" dans la section paramètres.

![](https://screensaver01.zap-hosting.com/index.php/s/Ne5B9CnHrbwgmfW/preview)

Déployez la section "Available Games" et cherchez votre modloader (Forge pour mods / modpacks Forge, Fabric pour mods / modpacks Fabric). Sélectionnez le bouton vert de téléchargement.

![](https://screensaver01.zap-hosting.com/index.php/s/dnBCddmXGAMpMj8/preview)


Cliquez sur le menu déroulant sous "Game version" et sélectionnez votre version Minecraft correspondant à la bonne version pour votre mod/modpack. Pour Forge, vous pouvez choisir la dernière version ou la version recommandée. Essayez d’abord la dernière version et si votre serveur ne fonctionne pas comme prévu, revenez et essayez la version recommandée. Sélectionnez le bouton "Accept and Install".

![](https://screensaver01.zap-hosting.com/index.php/s/gCdcwLzc4Hxptqp/preview)


:::tip
Si vous ne savez pas quelle version Minecraft vous faut, retournez à la page "File Details" sur CurseForge. À côté de l’icône manette vous verrez la version.

![](https://screensaver01.zap-hosting.com/index.php/s/9TsCBRP9PGQL2fC/preview)

:::

Une fois le jeu installé, vous verrez un bouton bleu à côté du nom de votre jeu (ex. Forge, Fabric). Cliquez dessus pour activer le jeu.

![](https://screensaver01.zap-hosting.com/index.php/s/YzzBzSJjnsaqKS2/preview)
![activer le jeu version allemande](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## Étape 4 - Connexion & upload des mods / modpack via FTP

Connectez-vous à votre serveur avec votre client FTP préféré. Assurez-vous que votre serveur est arrêté.

### Upload d’un mod

Une fois connecté, naviguez dans votre dossier de jeu (ex. minecraft-forge, minecraft-fabric). Ouvrez le dossier mods et glissez-déposez simplement vos fichiers mod téléchargés dans ce dossier.
![](https://screensaver01.zap-hosting.com/index.php/s/Zwm9SYdgK6MKBdz/preview)

Quand l’upload est terminé, vous pouvez démarrer votre serveur.

### Upload d’un modpack

Une fois connecté, naviguez dans votre dossier de jeu (ex. minecraft-forge, minecraft-fabric). Supprimez les dossiers world, mods, config et defaultconfig sur votre serveur. Maintenant, uploadez tous les dossiers du dossier dézippé que vous avez téléchargé plus tôt, sauf les dossiers jre, libraries. Sélectionnez simplement tous les dossiers et glissez-les dans votre répertoire serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/PEyqrSES4xPGaFz/preview)

Une fois l’upload terminé, vous pouvez démarrer votre serveur.



## Mods populaires

Vous cherchez encore les mods parfaits pour votre serveur ? Parcourez notre liste soigneusement sélectionnée des mods les plus populaires et recommandés pour booster votre gameplay et donner à votre serveur la touche finale qu’il mérite. Trouvez l’inspiration et dénichez exactement les ajouts qui collent à votre projet.

<SearchableItemList items={mods} />

## Modpacks populaires

Vous cherchez encore les modpacks parfaits pour votre serveur ? Parcourez notre liste soigneusement sélectionnée des modpacks les plus populaires et recommandés pour booster votre gameplay et donner à votre serveur la touche finale qu’il mérite. Trouvez l’inspiration et dénichez exactement les ajouts qui collent à votre projet.

<SearchableItemList items={modpacks} />

<InlineVoucher />