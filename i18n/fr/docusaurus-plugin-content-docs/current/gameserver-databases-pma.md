---
id: gameserver-databases-pma
title: 'Serveur de jeux : accès PHPMyAdmin'
description: "Découvrez comment gérer efficacement les bases de données MySQL avec phpMyAdmin sur les serveurs de jeux ZAP-Hosting pour un contrôle fluide des bases de données → En savoir plus maintenant"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Avec phpMyAdmin, les bases de données MySQL peuvent être gérées rapidement et facilement via une interface web. ZAP-Hosting inclut des bases de données MySQL avec ses produits de serveur de jeux. Celles-ci peuvent être gérées avec phpMyAdmin ainsi qu’avec des programmes d’administration MySQL externes comme Navicat ou HeidiSQL. Nous proposons aussi un guide à ce sujet que vous pouvez trouver [Accès externe à la base de données](gameserver-database-external-access.md).

<InlineVoucher />

## Connexion à phpMyAdmin

On commence par accéder à la liste des bases de données créées pour le serveur de jeux. Pour cela, ouvrez le menu "Bases de données" dans la barre latérale gauche du serveur sous l’onglet "Outils".

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

Sur cette page, toutes les bases de données pour ce serveur sont listées. La connexion à phpMyAdmin est super simple car elle se fait automatiquement via notre système. Il suffit de cliquer sur le bouton bleu "Gérer".

:::info
Si la connexion ne se fait pas automatiquement, il faudra alors se connecter manuellement avec les identifiants correspondants. Les infos nécessaires se trouvent dans la zone rouge sur cet exemple.
:::


## Outils des tables

Au départ, seule la page d’accueil de phpMyAdmin s’affiche. Pour voir et modifier les tables de la base de données, il faut ouvrir la base concernée :

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

Toutes les tables de la base ainsi que quelques outils sont alors listés, avec lesquels vous pouvez effectuer certaines actions, par exemple supprimer des tables en cliquant sur le bouton rouge "Supprimer".

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

Pour gagner du temps, vous pouvez appliquer des actions à plusieurs tables en même temps. Pour cela, cliquez une fois sur la case de sélection tout à gauche et répétez jusqu’à ce que toutes les tables souhaitées soient cochées. Si vous voulez appliquer l’action à toutes les tables de la base, utilisez le bouton "Tout sélectionner" qui coche automatiquement toutes les tables. Ensuite, choisissez l’action désirée dans le menu déroulant et validez avec "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## Modifier le contenu des tables

Les valeurs dans une table peuvent être modifiées rapidement et facilement en double-cliquant sur le champ concerné. Il faut cependant que la table soit configurée pour permettre l’édition. Cela se reconnaît grâce aux trois boutons d’action affichés dans ce cas.

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## Exécuter des commandes SQL

Avec phpMyAdmin, il est aussi possible d’exécuter des commandes SQL classiques. Pour cela, sélectionnez d’abord la base de données, puis cliquez sur l’option "SQL" en haut de la barre de menu.

Une fois dans l’interface de commande, vous pouvez saisir toutes les commandes SQL souhaitées, qui seront exécutées en cliquant sur "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />