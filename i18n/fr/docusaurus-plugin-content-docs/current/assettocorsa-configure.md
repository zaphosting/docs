---
id: assettocorsa-configure
title: "Assetto Corsa : Configure ton serveur"
description: "Découvre comment configurer ton serveur Assetto Corsa avec des circuits et voitures personnalisés pour une expérience de jeu optimale → Apprends-en plus maintenant"
sidebar_label: Configurer le serveur
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connexion au FTP

Avant de pouvoir configurer le serveur, l’[accès via FTP](gameserver-ftpaccess.md) doit être configuré :

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

Une fois que c’est fait, tu peux te connecter et ouvrir le dossier du serveur :

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## Préparation

On commence par ouvrir le dossier Assetto Corsa, pour ça ouvre Steam et fais un clic droit sur "Assetto Corsa" dans ta liste de jeux

Maintenant, clique sur "Fichiers locaux" pour accéder aux fichiers locaux du jeu :

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

Ensuite, ouvre le dossier "server", tu y trouveras un fichier "acServerManager", ouvre-le

## Choisir la carte

On est maintenant dans l’interface "AC Server Manager", avec ça tu peux créer et gérer les configs du serveur, on commence par créer une nouvelle config

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

Maintenant on peut configurer notre serveur, ici on veut juste modifier les circuits & voitures, donc on ouvre l’onglet "Tracks"

Là tu peux cliquer sur ta carte préférée, et au-dessus tu peux régler le nombre de voitures sur le circuit.

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
Fais gaffe à ne pas mettre plus de voitures que de slots dispo sur ton serveur, sinon il ne démarrera pas
:::

## Choisir les voitures

On passe maintenant à l’onglet "Cars / Entry List", ici tu peux ajouter de nouvelles voitures :


Pour activer une voiture, coche la case à gauche

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

Au milieu, tu vois les voitures qui peuvent être placées sur la grille, tu peux choisir les couleurs des voitures qui seront sur la grille :

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
Pour sélectionner plusieurs voitures, coche plusieurs cases pour les ajouter au milieu.

Assure-toi que tous les slots voitures sont remplis et que tu ne dépasses pas le nombre de slots disponibles.

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## Upload de la config

Maintenant tu peux sauvegarder la config avec le bouton "Save" et l’exporter avec "Export" :

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

Choisis un dossier libre où les données de config seront stockées.

Tu peux maintenant fermer l’AC Server Manager, puis ouvre le dossier où les configs ont été exportées.

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

Ces configs peuvent maintenant être copiées par Drag&Drop dans le dossier "cfg" de ton serveur de jeux.

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

Ton serveur peut maintenant être lancé avec la nouvelle config.

<InlineVoucher />