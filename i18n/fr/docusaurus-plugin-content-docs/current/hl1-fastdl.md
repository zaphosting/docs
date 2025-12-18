---
id: hl1-fastdl
title: "Half-Life 1 : Configurer FastDL"
description: "Découvrez comment optimiser la distribution de contenu de jeu avec FastDL via ZAP-Hosting pour améliorer la vitesse de téléchargement des joueurs et les performances du serveur → En savoir plus maintenant"
sidebar_label: FastDL
services:
  - gameserver-hl1
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

FastDL (Fast Download) est une méthode pour distribuer du contenu personnalisé comme des maps, des sons ou des modèles via un serveur web externe au lieu du serveur de jeux lui-même. Cela améliore la vitesse de téléchargement pour les joueurs et réduit la charge sur le serveur.

Pour utiliser FastDL, tu as besoin d’un accès à un serveur web HTTP public. Une super option est un **package d’hébergement web ZAP-Hosting**, parfaitement adapté à la distribution de contenu de jeux. Ce guide t’explique comment configurer FastDL avec l’hébergement web ZAP.

<InlineVoucher />

## Prérequis

Tu dois avoir un serveur Half-Life 1 actif hébergé chez ZAP-Hosting ainsi qu’un package d’hébergement web supplémentaire. L’accès FTP ou l’accès au gestionnaire de fichiers doit être disponible à la fois pour le serveur de jeux et pour l’hébergement web.

Côté serveur de jeux, les fichiers que tu souhaites distribuer (comme les maps `.bsp`, les fichiers sons ou les modèles) doivent déjà être organisés correctement. La même structure devra être reproduite sur l’hébergement web pour que FastDL fonctionne correctement.

## Préparer l’hébergement web

Pour gérer et uploader tes fichiers FastDL, on te recommande d’utiliser le **Gestionnaire de fichiers** intégré à l’interface d’hébergement web ZAP. Tu peux y accéder directement via le panneau web sous **Hébergement web > Gestionnaire de fichiers**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

Dans le répertoire racine de ton hébergement web, crée un dossier nommé `fastdl`. À l’intérieur, crée des sous-dossiers comme `maps`, `sound` ou `models` selon le contenu que tu souhaites distribuer. La structure des dossiers doit être exactement la même que celle utilisée par ton serveur Half-Life 1.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Avant d’uploader tes fichiers, assure-toi qu’ils sont **compressés au format `.bz2`** (bzip2). La plupart des moteurs basés sur Source exigent que les fichiers soient livrés dans ce format. Par exemple, une map `custom_map.bsp` doit être uploadée sous le nom `custom_map.bsp.bz2`.

:::info Compression avec 7-Zip
Pour préparer tes fichiers FastDL, tu peux utiliser des outils comme **7-Zip** pour les compresser au format `.bz2`. Clique droit sur le fichier, choisis **7-Zip > Ajouter à l’archive...**, sélectionne `bzip2` comme format d’archive, puis valide.
:::

Après avoir uploadé les fichiers compressés dans les dossiers appropriés, vérifie que **tous les dossiers et fichiers ont les permissions de lecture correctes** pour qu’ils soient accessibles publiquement. Le Gestionnaire de fichiers te permet de modifier les permissions des dossiers et fichiers.

Une fois les fichiers uploadés et les permissions vérifiées, le contenu FastDL sera accessible via l’URL publique suivante :

```
https://[ton-nom-de-domaine].zap.cloud/fastdl/
```

Tu peux tester en ouvrant cette URL dans ton navigateur pour vérifier que les fichiers sont bien accessibles.

## Configurer le serveur de jeux

Dans l’interface ZAP, sous l’administration du serveur de jeux, ouvre le fichier `server.cfg` via la page **Configs** et insère les lignes suivantes :

```cfg
sv_downloadurl "https://[ton-nom-de-domaine].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Assure-toi que l’URL FastDL correspond exactement à la structure utilisée sur ton hébergement web. Après avoir sauvegardé, redémarre ton serveur de jeux pour appliquer la configuration.

## Conclusion

FastDL peut être configuré rapidement et de manière fiable avec ton propre hébergement web ZAP. Cela permet une distribution rapide et efficace du contenu personnalisé et améliore l’expérience de tous les joueurs sur ton serveur Half-Life 1.

Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />