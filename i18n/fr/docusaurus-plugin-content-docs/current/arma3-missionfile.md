---
id: arma3-missionfile
title: "Arma 3 : Upload ton propre fichier de mission"
description: "Découvre comment uploader et charger des fichiers de mission personnalisés sur ton serveur de jeux Arma 3 pour une expérience de jeu unique → En savoir plus maintenant"
sidebar_label: Upload ton propre fichier de mission
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Upload le fichier de mission

Pour uploader ton propre fichier de mission, tu dois d'abord te connecter à ton serveur via FTP : [Accès via FTP](gameserver-ftpaccess.md).  
Là, tu dois uploader le fichier de mission dans ton dossier **mpmissions** que tu trouveras sous **/gxxxxxx/arma3/**.  
Dans cet exemple, on upload le fichier de mission **King_of_the_hill.Altis** sur notre serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/jkfK9X48qj2e7Pn/preview)

<InlineVoucher />

## Charger le fichier de mission sur le serveur

Pour charger le fichier de mission depuis le serveur, rends-toi dans l’interface de ton serveur Arma 3 et clique sur l’onglet **Configs** dans le menu à gauche :

![](https://screensaver01.zap-hosting.com/index.php/s/PD98ATq8xHdjy8Q/preview)

Là, édite le fichier **server.cfg** et entre le nom de ton fichier de mission comme montré sur l’image : 

![](https://screensaver01.zap-hosting.com/index.php/s/aG7QESxyTNpATsG/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/6TZ7mc578pcHpbF/preview)

Ensuite, clique sur **Save** et tu peux démarrer ton serveur. Le nouveau fichier de mission sera chargé.

<InlineVoucher />