---
id: tf2-fastdl
title: "Team Fortress 2 : Configurer FastDL"
description: "Découvrez comment optimiser la distribution de contenu de jeu avec FastDL pour des téléchargements plus rapides et une charge serveur réduite → En savoir plus maintenant"
sidebar_label: FastDL
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

FastDL (Fast Download) est une méthode pour distribuer du contenu personnalisé comme des maps, des sons ou des modèles via un serveur web externe au lieu du serveur de jeux lui-même. Cela améliore la vitesse de téléchargement pour les joueurs et réduit la charge sur le serveur.

Pour utiliser FastDL, vous avez besoin d’un accès à un serveur web HTTP public. Une super option pour ça est un **package d’hébergement web ZAP-Hosting**, parfaitement adapté à la distribution de contenu de jeux. Ce guide explique comment configurer FastDL avec un hébergement web ZAP.

<InlineVoucher />

## Prérequis

Vous aurez besoin d’un serveur Team Fortress 2 actif hébergé chez ZAP-Hosting ainsi qu’un package d’hébergement web supplémentaire. L’accès FTP ou l’accès au Gestionnaire de fichiers doit être disponible à la fois pour le serveur de jeux et pour l’hébergement web.

Côté jeu, les fichiers que vous souhaitez distribuer (comme les maps `.bsp`, les fichiers sons ou les modèles) doivent déjà être organisés correctement. La même structure sera ensuite requise sur l’hébergement web pour permettre une distribution FastDL réussie.

## Préparer l’hébergement web

Pour gérer et uploader vos fichiers FastDL, on recommande d’utiliser le **Gestionnaire de fichiers** fourni dans l’interface d’hébergement web ZAP. Vous pouvez y accéder directement via le panneau web sous **Hébergement web > Gestionnaire de fichiers**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Dans le répertoire racine de votre hébergement web, créez un dossier nommé `fastdl`. À l’intérieur de ce dossier, créez des sous-dossiers comme `maps`, `sound` ou `models` selon le contenu que vous souhaitez servir. La structure des dossiers doit correspondre exactement à celle utilisée par votre serveur Team Fortress 2.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Avant d’uploader vos fichiers, assurez-vous qu’ils sont **compressés au format `.bz2`** (bzip2). La plupart des moteurs basés sur Source exigent que les fichiers soient livrés dans ce format. Par exemple, un fichier de map `custom_map.bsp` doit être uploadé sous le nom `custom_map.bsp.bz2`.

:::info Compression avec 7-Zip
Pour préparer vos fichiers pour FastDL, vous pouvez utiliser des outils comme **7-Zip** pour les compresser au format `.bz2`. Faites un clic droit sur le fichier, choisissez **7-Zip > Ajouter à l’archive...**, sélectionnez `bzip2` comme format d’archive, puis validez.
:::

Après avoir uploadé les fichiers compressés dans les dossiers appropriés, assurez-vous que **tous les dossiers et fichiers ont les permissions de lecture correctes** pour qu’ils soient accessibles publiquement. Le Gestionnaire de fichiers vous permet d’ajuster les permissions des dossiers et fichiers.

Une fois vos fichiers uploadés et les permissions vérifiées, le contenu FastDL sera disponible via l’URL publique suivante :

```
https://[votre-nom-de-domaine].zap.cloud/fastdl/
```

Vous pouvez tester cela en ouvrant l’URL dans votre navigateur et en vérifiant que les fichiers sont accessibles.

## Configurer le serveur de jeux

Dans l’interface ZAP, sous l’administration du serveur de jeux, ouvrez le fichier `server.cfg` via la page **Configs** et insérez les lignes suivantes :

```cfg
sv_downloadurl "https://[votre-nom-de-domaine].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Assurez-vous que l’URL FastDL correspond exactement à la structure utilisée sur votre hébergement web. Après avoir sauvegardé le fichier, redémarrez votre serveur de jeux pour appliquer la configuration.

## Conclusion

FastDL peut être configuré rapidement et de manière fiable en utilisant votre propre hébergement web ZAP. Cela permet une distribution rapide et efficace du contenu personnalisé et améliore l’expérience de tous les joueurs sur votre serveur Team Fortress 2.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />