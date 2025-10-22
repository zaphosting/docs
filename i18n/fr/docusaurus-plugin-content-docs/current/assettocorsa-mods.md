---
id: assettocorsa-mods
title: "Assetto Corsa : Installer des mods sur un serveur"
description: "Découvrez comment configurer et personnaliser votre serveur Assetto Corsa pour une expérience de jeu optimale → En savoir plus maintenant"
sidebar_label: Installer des Mods
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connexion au FTP

Avant de pouvoir configurer le serveur, l’[accès via FTP](gameserver-ftpaccess.md) doit être configuré :

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

Une fois cela configuré, vous pouvez maintenant vous connecter et ouvrir le dossier du serveur :

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## Préparation

On commence par ouvrir le dossier Assetto Corsa, on peut l’ouvrir en lançant Steam et en faisant un clic droit sur "Assetto Corsa" dans la liste des jeux.

Maintenant, on clique sur "Fichiers locaux" pour ouvrir les fichiers locaux du jeu :

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

Ensuite, on ouvre le dossier "server", où se trouve un fichier "acServerManager" qu’on ouvre.



## Configuration des Voitures

On passe maintenant à l’onglet "Cars / Entry List", ici on peut ajouter de nouvelles voitures :


Pour activer les voitures, il faut cocher la case à gauche

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

Au centre, vous voyez les voitures qui peuvent être placées sur la grille, ici on choisit les voitures avec les couleurs qui doivent apparaître sur la grille :

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
Pour sélectionner plusieurs voitures, vous pouvez cocher plusieurs cases pour ajouter différentes voitures au centre.

Attention à bien remplir tous les slots de voitures et ne pas dépasser le nombre de slots disponibles.

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## Upload de la Config

On peut maintenant sauvegarder la config avec le bouton "Save" et l’exporter avec le bouton "Export" :

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

Ici, on choisit un dossier libre où les données de config seront stockées.

On peut maintenant fermer l’AC Server Manager, puis ouvrir le dossier dans lequel les configs ont été exportées.

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

Ces configs peuvent maintenant être copiées par Drag&Drop dans le dossier "cfg" de votre serveur de jeux.

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## Upload du Contenu du Serveur

Maintenant, il faut générer le contenu pour le serveur, afin que les mods de voitures et de circuits soient chargés sur le serveur. Pour cela, cliquez d’abord sur "Update Server Content" en bas :

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

Ce processus peut prendre quelques minutes, toutes les maps et voitures sont maintenant converties en fichiers serveur.

:::info
Une fois ce processus terminé, un message "Could not update" peut apparaître, ce n’est pas un problème.
:::

On ouvre maintenant le dossier "Server", où se trouve l’AcServerManager, il y a un dossier "Content" qu’on upload via Drag&Drop sur notre serveur Assetto Corsa, en remplaçant l’ancien dossier "Content" :

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

Une fois le contenu uploadé, les mods de voitures sont installés et actifs après un redémarrage du serveur.

<InlineVoucher />