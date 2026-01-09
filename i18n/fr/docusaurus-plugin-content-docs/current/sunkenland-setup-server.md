---
id: sunkenland-setup-server
title: "Sunkenland : Configuration du serveur Sunkenland"
description: "Découvrez comment configurer votre serveur de jeux Sunkenland pour un gameplay fluide et un fonctionnement optimal → En savoir plus maintenant"
sidebar_label: Configuration du serveur
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les serveurs Sunkenland nécessitent une configuration rapide lors du premier lancement pour que le serveur fonctionne correctement. Dans ce guide, nous allons explorer les étapes nécessaires pour configurer votre serveur de jeux Sunkenland.

<InlineVoucher />

## Préparation
Avant de commencer, vous devez d’abord lancer Sunkenland et créer une sauvegarde de monde. Assurez-vous de sauvegarder le monde avant de continuer.

Pour pouvoir accéder à vos fichiers serveur plus tard dans le guide, vous aurez également besoin d’un client FTP comme [WinSCP](https://winscp.net/eng/index.php) ou [FileZilla](https://filezilla-project.org/), tous deux open-source et gratuits à télécharger.

## Accéder à vos données locales
La première étape consiste à accéder à vos données de sauvegarde Sunkenland.

Appuyez simplement sur `CTRL+R` sur votre clavier, et entrez ce qui suit dans la fenêtre Exécuter de Windows :
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

À cet emplacement, vous verrez un dossier `Worlds` qui contient toutes vos sauvegardes locales. Sélectionnez celle que vous souhaitez héberger sur le serveur, ou si vous en avez créé une nouvelle, choisissez celle que vous avez générée avant de commencer ce guide.

:::tip
Vous ne voyez rien ici ? Assurez-vous d’avoir lancé Sunkenland et créé une sauvegarde de monde, ce qui devrait créer un nouveau dossier.
:::

## Upload de la sauvegarde
L’étape suivante consiste à vous connecter à votre serveur de jeux via FTP et à uploader la sauvegarde que vous avez sélectionnée à l’étape précédente.

Commencez par vous connecter à votre serveur via un client FTP en utilisant les identifiants disponibles sous **Outils->FTP-Browser** dans le panneau de contrôle de votre serveur de jeux. Utilisez notre [guide d’accès via FTP](gameserver-ftpaccess.md) pour vous aider à vous connecter à votre serveur.

Une fois connecté, rendez-vous dans le dossier Sunkenland, ouvrez le dossier "AppData" puis le dossier "Worlds", sélectionnez la sauvegarde de l’étape précédente et uploadez-la dans ce dossier.

La structure des dossiers devrait maintenant ressembler à ceci, où `Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` est votre propre sauvegarde.
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
À ce stade, copiez le GUID listé à la fin du nom de la sauvegarde du monde. Vous en aurez besoin à l’étape suivante pour rendre votre serveur fonctionnel.

Le GUID ressemble à ceci :
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Nom complet du monde
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Le GUID dont vous avez besoin
```
:::

## Activation du serveur
Enfin, rendez-vous dans la section **Paramètres** du panneau de contrôle de votre serveur de jeux.

Dans cette section, cherchez l’option **World GUID**. Dans ce champ, collez le GUID que vous avez copié à la fin de l’étape précédente.

N’oubliez pas de cliquer sur le bouton vert **Enregistrer** en bas de la page. Essayez maintenant de démarrer votre serveur, il devrait se lancer correctement.

Vous avez configuré avec succès votre serveur de jeux Sunkenland.

<InlineVoucher />