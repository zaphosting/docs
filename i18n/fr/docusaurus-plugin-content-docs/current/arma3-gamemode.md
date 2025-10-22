---
id: arma3-gamemode
title: "Arma 3 : Changer de mode de jeu"
description: "Découvrez comment configurer et charger des modes de jeu sur votre serveur de jeux Arma 3 pour une expérience personnalisée → En savoir plus maintenant"
sidebar_label: Changer de mode de jeu
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Configurer le mode de jeu

Pour changer le mode de jeu sur votre serveur de jeux Arma 3, vous devez uploader le fichier de mission correspondant au mode de jeu sur votre serveur.

Nous proposons actuellement les fichiers de mission suivants sans que vous ayez besoin de les uploader :

- Arma 3 Wasteland

Ils se trouvent déjà dans votre répertoire **mpmissions**.

<InlineVoucher />

## Uploader le fichier de mission

Pour uploader le fichier de mission, vous devez d'abord vous connecter à votre serveur via FTP : [Accès via FTP](gameserver-ftpaccess.md).  
Là, vous uploadez le fichier de mission correspondant dans votre répertoire **mpmissions** que vous trouverez sous **/gxxxxxx/arma3/**.  
Dans cet exemple, nous uploadons le mode de jeu **King of the Hill** sur notre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## Charger le fichier de mission sur le serveur

Pour charger le fichier de mission depuis le serveur, rendez-vous dans l’interface de votre serveur de jeux Arma 3 et cliquez sur l’onglet **Configs** dans le menu à gauche :

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

Là, éditez le fichier **server.cfg** et entrez le nom de votre fichier de mission comme montré sur l’image : 

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

Ensuite, cliquez sur **Enregistrer** et vous pouvez démarrer votre serveur. Le nouveau fichier de mission sera chargé.

<InlineVoucher />