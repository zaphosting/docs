---
id: dedicated-windows-installmysql
title: "Configurer MySQL sur un serveur Windows - Déploie et gère des bases de données fiables"
description: "Apprends à configurer et sécuriser ton propre serveur de base de données MySQL sur un serveur dédié Windows pour une gestion fiable des données → Découvre-le maintenant"
sidebar_label: Installer MySQL
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Un serveur MySQL est nécessaire pour diverses applications et peut contenir des données importantes, par exemple pour un serveur de jeux ou un site web. Dans ce guide, on t’explique comment configurer ton propre serveur de base de données MySQL sur ton serveur dédié Windows.

## Installation

Au début, connecte-toi à ton serveur via une connexion bureau à distance et télécharge la dernière version de MariaDB, qui est utilisée pour le serveur de base de données : [Téléchargement MariaDB](https://mariadb.org/download/?t=mariadb).

Décompresse l’archive téléchargée avec WinRAR ou 7Zip et lance le fichier d’installation par un double clic :

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Ensuite, suis le processus d’installation en cliquant sur **Next** jusqu’à ce qu’on te demande de saisir le mot de passe root :

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Là, tu peux définir le mot de passe principal pour accéder à ton serveur de base de données. Assure-toi d’utiliser un mot de passe sécurisé que personne d’autre ne connaît !

:::info
IMPORTANT ! Si tu souhaites accéder à la base de données depuis l’extérieur via Navicat, HeidiSQL ou un autre outil, tu dois activer l’option **Enable access from remote machines for root user** ! Pour des raisons de sécurité, ce n’est généralement pas recommandé.
:::

Après, clique sur **Next** jusqu’à la fin de l’installation, puis clique sur **Install** :

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Ton serveur de base de données est maintenant en ligne et prêt à être utilisé !

## Configuration de l’accès externe

Si tu as activé "Enable access from remote machines for root user" pendant l’installation, tu dois aussi ouvrir le port MySQL **3306** dans le pare-feu Windows. Pour ça, ouvre le pare-feu et crée une nouvelle règle.

Tu peux trouver le guide pour rediriger les ports dans le pare-feu ici :  
[Redirection de ports (Pare-feu)](vserver-windows-port.md)

Maintenant, tu peux accéder à ton serveur MySQL depuis l’extérieur !

## Conclusion

Félicitations, tu as installé avec succès le serveur MySQL. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂