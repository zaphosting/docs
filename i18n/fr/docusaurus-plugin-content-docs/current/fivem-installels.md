---
id: fivem-installels
title: "FiveM : Installer ELS sur ton serveur"
description: "Découvre comment configurer et activer ELS-FiveM avec des carmods pour un gameplay amélioré sur ton serveur → En savoir plus maintenant"
sidebar_label: Installer ELS
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connexion au FTP

Pour pouvoir installer la ressource, il faut configurer l’[accès via FTP](gameserver-ftpaccess.md).

## Préparation

Tout d’abord, télécharge la dernière [version d’ELS-FiveM](https://github.com/MrDaGree/ELS-FiveM/releases/latest), que tu trouveras sous la section "Assets".

Une fois ELS téléchargé, dézippe le fichier et ouvre le dossier "ELS-FiveM".

## Configuration

Maintenant, configure ELS-FiveM en faisant une copie du fichier `vcf.default.lua`, puis renomme-la en `vcf.lua`.

:::info
Note : Ne supprime pas l’ancien fichier `vcf.default.lua`.
:::

D’autres réglages peuvent aussi être modifiés dans le fichier "config.lua", mais on va les laisser par défaut.

## Upload de la ressource

Tu peux installer ELS-FiveM en uploadant les fichiers par glisser-déposer dans le dossier "resources".

Une fois uploadé, ouvre le fichier server.cfg dans le dossier server-data :

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

Parmi les autres lignes de démarrage des ressources, ajoute maintenant l’entrée pour ELS-FiveM.

Ensuite, redémarre le serveur et ELS-FiveM sera dispo en jeu !

## Configuration des Carmods

Pour ajouter de nouveaux carmods à ELS-FiveM, il te faut d’abord la config ELS que tu trouveras souvent dans le dossier du carmod téléchargé. En général, elle s’appelle `autoname.xml`, ici c’est `scpdvic.xml`.

Upload-les dans le dossier "vcf" de ton dossier ELS-FiveM via FTP.

Maintenant que le fichier est uploadé, ouvre le fichier 'vcf.lua' dans le dossier ELS-FiveM.

:::info
Assure-toi que la ligne précédente se termine toujours par une virgule.
:::

C’est tout ! Ton Carmod devrait être compatible ELS et fonctionnel après un redémarrage du serveur.

<InlineVoucher />