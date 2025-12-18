---
id: dedicated-windows-installmysql
title: "Serveur dédié : Installation de MySQL"
description: "Apprenez à configurer et sécuriser votre propre serveur de base de données MySQL sur un serveur dédié Windows pour une gestion fiable des données → Découvrez-le maintenant"
sidebar_label: Installer MySQL
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Un serveur MySQL est nécessaire pour diverses applications et peut contenir des données importantes, par exemple pour un serveur de jeux ou un site web. Dans ce qui suit, nous expliquons comment configurer votre propre serveur de base de données MySQL sur votre serveur dédié Windows.

## Installation

Au début, connectez-vous via connexion bureau à distance à votre serveur et téléchargez la dernière version de MariaDB, qui est utilisée pour le serveur de base de données : [Téléchargement MariaDB](https://mariadb.org/download/?t=mariadb).

Décompressez l’archive téléchargée avec WinRAR ou 7Zip et lancez le fichier d’installation par un double clic :

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Ensuite, suivez le processus d’installation en cliquant sur **Suivant** jusqu’à ce que l’on vous demande de saisir le mot de passe root :

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Là, vous pouvez définir le mot de passe principal pour l’accès à votre serveur de base de données. Veillez à utiliser un mot de passe sécurisé que personne d’autre ne connaît !

:::info
IMPORTANT ! Si vous souhaitez accéder à la base de données depuis l’extérieur via Navicat, HeidiSQL ou tout autre outil, vous devez activer l’option **Autoriser l’accès à distance pour l’utilisateur root** ! Pour des raisons de sécurité, cela n’est généralement pas recommandé.
:::

Ensuite, cliquez sur **Suivant** jusqu’à la fin de l’installation, puis cliquez sur **Installer** :

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Votre serveur de base de données est maintenant en ligne et prêt à être utilisé !

## Configuration de l’accès externe

Si vous avez activé « Autoriser l’accès à distance pour l’utilisateur root » pendant l’installation, vous devez également ouvrir le port MySQL **3306** dans le pare-feu Windows. Pour cela, ouvrez-le et créez une nouvelle règle.

Vous trouverez le guide pour le transfert de ports dans le pare-feu ici :
[Redirection de ports (Pare-feu)](vserver-windows-port.md)

Vous pouvez maintenant accéder à votre serveur MySQL depuis l’extérieur !

## Conclusion

Félicitations, vous avez installé avec succès le serveur MySQL. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂