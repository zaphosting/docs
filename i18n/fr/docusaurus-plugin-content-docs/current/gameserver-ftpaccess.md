---
id: gameserver-ftpaccess
title: "Serveur de jeux : Accès via FTP pour gérer les fichiers du serveur"
description: "Découvrez comment accéder et gérer en toute sécurité les fichiers de votre serveur via FTP pour des transferts de fichiers fluides et un contrôle total → En savoir plus maintenant"
sidebar_label: Accès FTP
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le FTP (File Transfer Protocol) est un protocole réseau conçu pour transférer des fichiers sur un réseau TCP/IP. Ce protocole a été développé pour faciliter l’échange de fichiers entre systèmes. Avec le protocole FTP, vous pouvez accéder et gérer les fichiers de votre serveur, que ce soit pour uploader, télécharger ou modifier activement des fichiers.

<InlineVoucher />

## Préparation

Pour gérer vos fichiers via le protocole FTP, vous avez besoin d’un client FTP adapté. Il existe un large choix de clients FTP disponibles. Cependant, deux des clients FTP les plus connus et fiables sont **FileZilla** et **WinSCP**.

| Client FTP | Téléchargement                                               |
| ---------- | ------------------------------------------------------------ |
| FileZilla  | [Site officiel](https://filezilla-project.org/download.php?platform=win64) |
| WinSCP     | [Site officiel](https://winscp.net/eng/downloads.php)        |



## Obtenir les informations FTP

Pour accéder à votre serveur de jeux via FTP, vous aurez besoin des identifiants de connexion correspondants. Vous pouvez trouver ces informations dans la section **FTP Browser** de l’administration de votre serveur de jeux.

Il suffit d’entrer l’**adresse IP (serveur FTP)**, le **nom d’utilisateur** et le **mot de passe** pour établir la connexion. Ces identifiants sont listés sur la page **FTP Browser**. Le port est toujours **21** et est généralement configuré automatiquement.

![img](https://screensaver01.zap-hosting.com/index.php/s/6FTFDwyBQZ792Fd/download)



## FileZilla

### Connexion

Vous pouvez établir une connexion soit via la fonction Quickconnect, soit en allant dans **Fichier -> Gestionnaire de sites**. Entrez les **identifiants FTP** de votre serveur puis cliquez sur **Connexion**.

![](https://screensaver01.zap-hosting.com/index.php/s/wxSSFoW3GTXJdLK/preview)

:::info
Assurez-vous d’arrêter le serveur et de mettre à jour les permissions FTP avant d’accéder aux fichiers du serveur. Sinon, vous risquez d’avoir des messages d’erreur comme "Permission refusée" ou "Accès refusé".
:::

### Gestion des fichiers

Comme mentionné précédemment, vous pouvez utiliser le client FTP pour uploader, télécharger et modifier les fichiers sur votre serveur. Le client FTP est divisé en deux parties. La moitié gauche représente votre client (ordinateur) et la moitié droite représente votre serveur. Vous pouvez naviguer dans les deux répertoires, local et serveur.

La gestion se fait en cliquant droit sur le fichier ou dossier concerné. Selon ce que vous souhaitez faire, vous pouvez uploader, télécharger, modifier, renommer ou déplacer des fichiers ou dossiers.

![](https://screensaver01.zap-hosting.com/index.php/s/qizoBD5JnHBRkJc/preview)

:::info
Si vous avez plusieurs serveurs de jeux, vous devez d’abord naviguer vers le bon répertoire du serveur de jeux.
:::



### Problèmes possibles et solutions

#### Erreur "530 Login incorrect"
Si cette erreur apparaît lors de la connexion, cela signifie que les identifiants fournis sont incorrects. Vérifiez que tous les champs sont bien remplis et corrects.

#### Erreur "Transfer connection interrupted"
Si cette erreur survient pendant la connexion ou le transfert, essayez de changer le mode de transfert de *Passif* à *Actif*. Les étapes suivantes montrent comment modifier ce paramètre dans FileZilla.




## WinSCP

### Connexion
Vous pouvez établir une connexion via Quickconnect ou en haut via **Nouvelle session**. Entrez les identifiants FTP de votre serveur puis cliquez sur **Connexion**.

![](https://screensaver01.zap-hosting.com/index.php/s/KNnkJsnETTFqZpD/preview)


:::info
Assurez-vous d’arrêter le serveur et de mettre à jour les permissions FTP avant d’accéder aux fichiers du serveur. Sinon, vous risquez d’avoir des messages d’erreur comme "Permission refusée" ou "Accès refusé".
:::


### Gestion des fichiers

Comme mentionné précédemment, vous pouvez utiliser le client FTP pour uploader, télécharger et modifier les fichiers sur votre serveur. Le client FTP est divisé en deux parties. La moitié gauche représente votre client (ordinateur) et la moitié droite représente votre serveur. Vous pouvez naviguer dans les deux répertoires, local et serveur.

La gestion se fait en cliquant droit sur le fichier ou dossier concerné. Selon ce que vous souhaitez faire, vous pouvez uploader, télécharger, modifier, renommer ou déplacer des fichiers ou dossiers.

![](https://screensaver01.zap-hosting.com/index.php/s/dAYiFwWQAipgTqW/preview)


### Problèmes possibles et solutions

#### Erreur "530 Login incorrect"
Si cette erreur apparaît lors de la connexion, cela signifie que les identifiants fournis sont incorrects. Vérifiez que tous les champs sont bien remplis et corrects.

<InlineVoucher />