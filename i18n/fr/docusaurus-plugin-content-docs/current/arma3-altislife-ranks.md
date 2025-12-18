---
id: arma3-altislife-ranks
title: "Arma 3 : Ajouter des grades sur un serveur Altis Life"
description: "Apprends à attribuer et gérer les grades des joueurs comme Flic, Medic et Admin dans Arma 3 pour améliorer le gameplay et les rôles sur le serveur → Découvre tout maintenant"
sidebar_label: Grades Altis Life
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans Arma 3, il existe différents grades qui peuvent être attribués à un joueur. Cela inclut Flic, Medic et les différents grades d’Admin.  
Selon le serveur, il peut y avoir d’autres grades si par exemple une nouvelle faction ou profession est ajoutée.  
Dans ce qui suit, tu vas apprendre comment attribuer les grades pour les Flics, Medics et Administrateurs dans le jeu, en utilisant toujours la base de données dans la table **players**.

:::info
IMPORTANT : Pour trouver le nom du joueur dans la base de données, tu dois te connecter au serveur au moins une fois !
:::

<InlineVoucher />

## Ouvrir la base de données

D’abord, tu dois accéder à ta base de données via le menu à gauche sous **Outils** > **Bases de données** :

![](https://screensaver01.zap-hosting.com/index.php/s/Y8mZZ7JCNqr9zZM/preview)

La connexion à la base de données se fait via cette icône bleue, à gauche tu trouveras aussi les identifiants (nom d’utilisateur et mot de passe) pour ta base de données :

![](https://screensaver01.zap-hosting.com/index.php/s/3tta9MQ5XcdZk98/preview)

Après avoir cliqué sur ce bouton, tu arrives dans phpMyAdmin, l’interface d’administration de ta base de données.  
Là, tu choisis le nom de ta base de données dans la colonne de gauche :

![](https://screensaver01.zap-hosting.com/index.php/s/YfTpyoXmArbtBwb/preview)

Ensuite, tu sélectionnes la table **players** avec un clic gauche, c’est là que tu peux attribuer les grades :

![](https://screensaver01.zap-hosting.com/index.php/s/A643Ds2LFjFCzba/preview)

Tu cherches le nom du joueur à qui tu veux attribuer un grade et tu cliques sur **Modifier** :

![](https://screensaver01.zap-hosting.com/index.php/s/KrnpZMyeiL8YXAm/preview)

## Attribuer les grades pour les Flics et Medics

Les champs pour le niveau Flic ainsi que Medic se trouvent tout en haut de la liste :

![](https://screensaver01.zap-hosting.com/index.php/s/z5KoxwqHf7XMcFd/preview)

Tu peux maintenant facilement sélectionner le niveau de grade via le menu déroulant, les niveaux disponibles vont de 1 à 7 pour les flics et de 1 à 5 pour les medics.  
Plus le niveau est élevé, plus le Flic ou Medic a de permissions dans le jeu, cela influence notamment les armes et véhicules disponibles.

![](https://screensaver01.zap-hosting.com/index.php/s/bKr4MHNy5LYnWYr/preview)

## Attribuer les grades pour les administrateurs (niveau admin)

Tu règles le niveau admin comme décrit plus haut, seul le champ est plus bas dans la liste :

![](https://screensaver01.zap-hosting.com/index.php/s/fc5G93bWkdW7nAj/preview)

Tu peux aussi choisir parmi 5 niveaux différents via le menu déroulant. Plus le niveau est élevé, plus l’administrateur a de droits dans le jeu.

Pour sauvegarder les modifications, clique simplement sur le bouton **GO** en bas à droite :

![](https://screensaver01.zap-hosting.com/index.php/s/y85Zwq3J8zM9sFi/preview)

Les grades sont maintenant enregistrés et deviennent actifs pour le joueur qui doit simplement se reconnecter au serveur, un redémarrage du serveur n’est pas nécessaire.

<InlineVoucher />