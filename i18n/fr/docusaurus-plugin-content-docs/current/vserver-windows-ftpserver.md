---
id: vserver-windows-ftpserver
title: "VPS : Installation de FTP"
description: "Découvrez comment configurer et gérer un serveur FTP FileZilla sous Windows pour des transferts de fichiers sécurisés et un contrôle d’accès utilisateur → En savoir plus maintenant"
sidebar_label: Installer FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le **FTP (File Transfer Protocol)** est un protocole réseau utilisé pour transférer des fichiers via un réseau TCP/IP. Ce protocole a été développé pour permettre un échange facile de fichiers entre systèmes.

Avec le **serveur FileZilla**, il est possible de configurer un tel serveur FTP sur un système d’exploitation Windows. Le serveur FileZilla est simple à installer et à configurer, et offre de nombreuses fonctionnalités comme la création de comptes utilisateurs, la gestion des droits d’accès et le transfert de fichiers.
<InlineVoucher />


## Préparation

### Téléchargement

Pour mettre en place un serveur FTP, il faut un logiciel adapté. Le logiciel serveur FileZilla peut être utilisé comme solution pour un système Windows. Vous pouvez le télécharger ici : [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Installation

Une fois le fichier d’installation téléchargé, il faut l’exécuter. Pour cela, cliquez sur le fichier téléchargé. La fenêtre suivante devrait s’ouvrir : ![](https://screensaver01.zap-hosting.com/index.php/s/Qi97fYbyoKDdsi3/preview)



Vous pouvez alors sélectionner les composants à installer. Cependant, il suffit d’installer les paquets pré-sélectionnés, donc cliquez simplement sur **Suivant** puis choisissez le chemin d’installation :

![](https://screensaver01.zap-hosting.com/index.php/s/fsMiKt9Zjas4Rme/preview)

Dans cet exemple, FileZilla Server sera installé sous **C:\Program Files (x86)\FileZilla Server**. Vous pouvez bien sûr choisir un autre chemin. Après avoir choisi le chemin, vous devez définir la manière dont le serveur FTP sera installé et démarré. Vous pouvez aussi définir le port et un mot de passe administrateur.



![](https://screensaver01.zap-hosting.com/index.php/s/gCoGAcGnTtLQ2P6/preview)

Cliquez ensuite sur **Suivant** puis dans l’étape suivante. Enfin, cliquez sur **Installer** pour lancer l’installation. L’interface d’administration du serveur FTP FileZilla va s’ouvrir. Cliquez sur le bouton **Connect to FileZilla FTP Server**.

Une fenêtre devrait apparaître avec les champs Hôte, Port et Mot de passe. Vous pouvez laisser les deux premiers champs tels quels et entrer le mot de passe administrateur que vous avez défini. Ensuite, établissez la connexion en cliquant sur le bouton **Ok**.



## Configuration

### Création d’utilisateur

Pour pouvoir vous connecter à votre serveur via FTP, vous devez créer un utilisateur.  
Cliquez sur **Server** dans le menu en haut puis sur **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/D7KHSrkGZEErEcH/preview)

Vous pouvez ensuite ajouter un nouvel utilisateur dans le menu Users en cliquant simplement sur **Add** :

![](https://screensaver01.zap-hosting.com/index.php/s/mtdi4oRmR4ZDzyq/preview)

Dans cet exemple, le nom d’utilisateur est **YourUserName**. Bien sûr, vous pouvez choisir votre propre nom d’utilisateur.



### Mot de passe et permissions

Maintenant que l’utilisateur est créé, il faut configurer l’accès et les permissions. Pour cela, activez l’utilisateur et configurez les options de mot de passe dans la catégorie **General** sous **Credentials**. On recommande fortement d’utiliser un mot de passe pour des raisons de sécurité. Choisissez **Require a password to log in** et définissez votre mot de passe.

![](https://screensaver01.zap-hosting.com/index.php/s/gwkkexqXgmfXc2q/preview)

Pour que l’utilisateur ait les bonnes permissions, vous devez spécifier les dossiers auxquels il peut accéder en cliquant sur **Add** dans les points de montage. Un chemin virtuel et un chemin natif doivent être définis. Dans notre exemple, on définit que le disque C est listé sous \.

![](https://screensaver01.zap-hosting.com/index.php/s/LE46PteX7eAftjQ/preview)

À droite, vous trouverez l’option **Permissions**, qui permet de définir les droits d’accès au chemin spécifié. Si vous voulez pouvoir lire et modifier les données, il est recommandé de choisir **Read+Write**.

::: danger
Pour des raisons de sécurité, ne donnez accès à un utilisateur qu’à certains dossiers spécifiques.
:::

Vous pouvez maintenant appliquer et valider vos modifications en cliquant sur le bouton **Apply**.



## Exceptions du pare-feu Windows

Pour permettre une connexion à votre serveur FTP, il faut autoriser l’utilisation du serveur FTP dans le pare-feu Windows. Pour cela, ouvrez les paramètres du pare-feu sous **Panneau de configuration\Système et sécurité\Pare-feu Windows Defender** et cliquez sur **Autoriser une application ou une fonctionnalité via le Pare-feu Windows Defender**.  
Dans la fenêtre suivante, sélectionnez l’application à autoriser :

![](https://screensaver01.zap-hosting.com/index.php/s/aorQ7Y8gQJPSE8e/preview)

Dans cet exemple, le chemin est **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe** :

![](https://screensaver01.zap-hosting.com/index.php/s/wx7p5GykbQfx8B6/preview)

Vous pouvez ensuite fermer la fenêtre avec un clic sur **OK**, la connexion à votre serveur FTP est maintenant possible.


## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur FTP sur votre VPS ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />