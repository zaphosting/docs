---
id: fivem-mods-installaddon
title: "FiveM : Installer des Addon Carmods sur le Serveur"
description: "Découvrez comment télécharger et convertir facilement des mods de voitures pour FiveM afin d'améliorer votre expérience de jeu avec un guide étape par étape → En savoir plus maintenant"
sidebar_label: Installer des Addon Carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connexion via FTP

Commence par te connecter à ton serveur via FTP, tu peux utiliser notre [Accès via FTP](gameserver-ftpaccess.md).

## Préparation

Pour ce tutoriel, on va utiliser l’outil [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest), qui simplifie beaucoup le processus. Pour ça, télécharge les dossiers "NConvert.zip" et "rpf2fivem.zip" depuis la section "Releases" :

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

On commence par décompresser rpf2fivem dans un dossier vide :

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

Ensuite, ouvre le fichier zip NConvert et copie le dossier "NConvert" dans le même dossier :

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

Maintenant, tu peux lancer `rpf2fivem.exe` !


## Télécharger les Mods

Pour installer des mods via rpf2fivem, il faut ajouter des liens directs dedans, par exemple depuis gta5-mods.com. Choisis simplement le carmod que tu veux et clique sur "Download".

Ensuite, fais un clic droit sur le bouton de téléchargement et choisis "Copier l’adresse du lien", que tu colleras en haut à gauche dans rpf2fivem :

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

Ici, tu peux taper ton propre nom de ressource et cliquer sur "Add to queue".

Si tu veux télécharger d’autres mods, ajoute-les de la même manière, plusieurs carmods peuvent être installés en même temps :

## Convertir les Mods

Une fois ta liste de mods prête, clique simplement sur le bouton "Start".

:::info
Note : la case 'compress/downsize textures' doit toujours être cochée pour éviter les erreurs de textures sur les Carmods dans FiveM.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

Les carmods sont maintenant téléchargés et préparés pour FiveM.

## Upload des ressources

Quand rpf2fivem a fini, tu trouveras les carmods dans le dossier "rpf2fivem" :

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

Tu peux maintenant les uploader facilement via [Installer des ressources](fivem-installresources.md). Un fichier `servercfg.txt` est aussi créé dans le dossier rpf2fivem, il contient les entrées à copier directement dans ton server.cfg pour intégrer les carmods, il suffit de copier-coller.

C’est fini ! Les Carmods sont maintenant installés sur ton serveur, après un redémarrage du serveur ils seront utilisables.

<InlineVoucher />