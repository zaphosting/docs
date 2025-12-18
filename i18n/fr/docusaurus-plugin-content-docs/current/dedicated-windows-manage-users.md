---
id: dedicated-windows-manage-users
title: "Serveur dédié : Gérer les utilisateurs sur Windows Server"
description: "Découvrez comment gérer plusieurs utilisateurs sur un serveur Windows pour un accès distant sécurisé et simultané avec des environnements personnalisés → En savoir plus maintenant"
sidebar_label: Ajouter & Gérer les utilisateurs
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows OS propose une gestion des utilisateurs intégrée qui vous permet de gérer facilement des utilisateurs supplémentaires. Parmi les avantages d’utiliser des utilisateurs individuels, on compte l’accès simultané (jusqu’à 2) au bureau à distance avec leurs propres identifiants, un bureau, des fichiers et programmes individuels ainsi qu’un système de permissions simple. Dans ce guide, nous allons couvrir le processus de gestion des utilisateurs sur votre serveur Windows.

## Préparation

Commencez par vous connecter à votre serveur Windows via RDP. Si vous avez besoin d’aide pour cela, veuillez consulter notre [guide d’accès initial (RDP)](dedicated-windows-userdp.md).

:::important Privilèges administratifs
Assurez-vous d’utiliser l’utilisateur **Administrateur** ou tout utilisateur avec des privilèges administratifs pour vous connecter à votre serveur Windows, sinon vous ne pourrez pas gérer les utilisateurs.
:::

Chaque utilisateur que vous créez sur votre serveur Windows pourra utiliser ses propres identifiants pour se connecter au serveur via le bureau à distance. De même, chaque utilisateur aura son propre bureau, fichiers et programmes indépendants des autres et ne pouvant être consultés que par un utilisateur avec des privilèges administratifs. Les programmes installés pour tous les utilisateurs seront accessibles globalement.

Avec la licence Windows Server classique, **2** comptes peuvent se connecter et utiliser le serveur simultanément. Si ce nombre est dépassé et qu’un autre utilisateur se connecte, l’utilisateur connecté en premier sera déconnecté au profit du nouvel utilisateur. En dehors de cela, il n’y a pas de limite au nombre de comptes utilisateurs pouvant être créés.

## Accéder à la gestion des utilisateurs

La gestion des comptes utilisateurs se fait via les paramètres dans le Panneau de contrôle. Commencez par ouvrir le menu démarrer de Windows sur votre serveur et sélectionnez **Panneau de contrôle**. Choisissez l’option **Comptes d’utilisateurs** qui vous mènera à un sous-menu.

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

Sélectionnez à nouveau l’option **Comptes d’utilisateurs** dans le menu pour accéder à une page de présentation.

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

Sur la page de présentation, sélectionnez l’option **Gérer un autre compte** pour accéder à la section **Gérer les comptes**, principalement utilisée pour gérer les utilisateurs.

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

Vous êtes maintenant prêt à gérer les utilisateurs sur votre serveur Windows, poursuivez avec l’une des sections suivantes selon l’action que vous souhaitez effectuer.

## Créer un nouvel utilisateur

Pour commencer la création d’un utilisateur, sélectionnez l’option **Ajouter un compte utilisateur** dans la section **Gérer les comptes**.

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

Une fenêtre s’ouvrira à l’écran, vous demandant de remplir quelques informations pour le compte, notamment le nom d’utilisateur, le mot de passe et un indice de mot de passe. Assurez-vous que votre mot de passe soit solide, sinon vous risquez une erreur de validation.

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

Une fois prêt, cliquez simplement sur le bouton suivant et votre nouvel utilisateur sera créé.

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

Enfin, vous devrez ajouter le nouvel utilisateur à la liste des connexions bureau à distance pour que le serveur accepte les connexions RDP de cet utilisateur. Rendez-vous dans le **Panneau de contrôle** et accédez à **Système et sécurité**.

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

Ici, trouvez **Autoriser l’accès à distance** et sélectionnez-le pour ouvrir un nouveau menu.

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

Dans ce menu, cliquez sur **Sélectionner les utilisateurs...** en bas, ce qui affichera une nouvelle fenêtre listant les utilisateurs actuels avec accès au bureau à distance.

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

Dans cette fenêtre, cliquez sur **Ajouter...** pour ouvrir une nouvelle invite de sélection d’utilisateur, puis choisissez **Avancé...**.

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

Cela étendra la fenêtre pour faciliter la recherche de votre utilisateur. Utilisez le bouton **Rechercher maintenant** pour afficher la liste des utilisateurs et trouvez votre nouvel utilisateur, ici `ZAP-Docs`.

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

Sélectionnez l’utilisateur et utilisez les boutons **OK** pour fermer toutes les fenêtres et confirmer les modifications.

Vous avez créé avec succès un nouvel utilisateur sur votre serveur Windows avec accès au bureau à distance. Vous devriez essayer de vous connecter au serveur via RDP avec les identifiants du nouvel utilisateur pour vérifier que tout fonctionne correctement.

## Gérer les utilisateurs

Vous pouvez facilement gérer tous les utilisateurs via la section **Gérer les comptes**. Sélectionnez simplement un utilisateur que vous souhaitez gérer.

:::important Privilèges administratifs
Pour gérer les utilisateurs, vous devez utiliser le compte principal **Administrateur** ou un utilisateur avec le type de compte administrateur qui possède tous les privilèges nécessaires pour cela.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

Sur cette page, vous pourrez utiliser différentes fonctions pour gérer l’utilisateur, notamment modifier le nom d’utilisateur, le mot de passe, le type de compte ainsi que supprimer l’utilisateur.

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)