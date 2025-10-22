---
id: fivem-mods-installreplace
title: "FiveM : Installer des Carmods de remplacement sur le serveur"
description: "Découvrez comment configurer et uploader des mods sur votre serveur FiveM pour des expériences de jeu personnalisées → En savoir plus maintenant"
sidebar_label: Installer des Carmods de remplacement
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connexion via FTP
Commence par te connecter à ton serveur via FTP, tu peux utiliser notre [guide Accès via FTP](gameserver-ftpaccess.md) pour ça.

## Préparation

Crée maintenant un dossier pour tes mods dans le dossier "resources".

:::info
Tu peux nommer ce dossier comme tu veux tant qu’il ne contient pas de caractères spéciaux. Dans notre exemple, il s’appelle "assets".
:::

Crée ensuite un fichier fxmanifest.lua dans ton dossier "assets" fraîchement créé.

Copie-colle le texte suivant dans ce fichier :

```
fx_version 'cerulean'
games { 'gta5' }

```

Tu peux maintenant sauvegarder et fermer le fxmanifest.lua, on n’en aura plus besoin.

Dans ton dossier assets, crée un dossier "stream".

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## Upload des Mods

Ouvre ce dossier stream, tu peux maintenant uploader tous les fichiers ytd et yft par glisser-déposer :

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

Une fois tous les mods uploadés, il ne te reste plus qu’à ajouter ta ressource dans le server.cfg, que tu trouveras dans le dossier "server-data" de ton serveur FiveM.

Tu peux ouvrir ce fichier avec n’importe quel éditeur de texte, sous les entrées "start" tu peux ajouter ta ressource comme ceci :

```
start assets
```

C’est fini ! Après un redémarrage du serveur, le Carmod devrait maintenant être dispo sur le serveur !

<InlineVoucher />