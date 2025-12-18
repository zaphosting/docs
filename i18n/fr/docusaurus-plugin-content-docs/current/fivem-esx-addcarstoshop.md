---
id: fivem-esx-addcarstoshop
title: "FiveM : Ajouter des voitures à la boutique"
description: "Découvrez comment gérer et ajouter des véhicules à votre base de données pour une expérience boutique de voitures personnalisée → En savoir plus maintenant"
sidebar_label: Ajouter des voitures à la concession
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Accès à la base de données

Tout d'abord, il faut se connecter à notre base de données. On fait ça dans l’onglet "Bases de données"

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

Là, on clique sur l’icône bleue et on se connecte avec nos identifiants, qu’on trouve aussi sur la page.

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## Trouver les noms de spawn

Ensuite, il faut trouver le nom de spawn de la voiture. On peut faire ça en testant directement ou en parcourant cette page :
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## Ajouter un nouveau véhicule

Une fois qu’on a choisi une voiture, on peut l’ajouter à la liste.

:::info
Par défaut, il y a déjà pas mal de voitures dans la boutique. Vérifie si ta voiture n’y est pas déjà.
:::

D’abord, on vérifie les catégories de voitures. Comme ça, on sait lesquelles on peut ajouter.
On fait ça dans la table "vehicle_categories"

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

Ici, on a besoin de la colonne "name". On la garde en tête.


![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

Une fois fait, on va dans la table "vehicles".
Puis on clique sur Insérer


![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

Maintenant, on ajoute un nouveau véhicule. Petite explication rapide de chaque champ :

**name** Le nom affiché dans la boutique  
**model** Nom de spawn (assure-toi qu’il soit en minuscules)  
**price** Prix du véhicule  
**category** Catégorie qu’on vient de sélectionner

Voici un petit exemple pour vous :


![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />