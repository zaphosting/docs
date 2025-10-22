---
id: dedicated-windows-installmysql
title: "Serveur dédié : Installation de MySQL"
description: "Apprends à configurer et sécuriser ton propre serveur de base de données MySQL sur un serveur dédié Windows pour une gestion fiable des données → Découvre-le maintenant"
sidebar_label: Installer MySQL
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Un serveur MySQL est nécessaire pour diverses applications et peut contenir des données importantes, par exemple pour un serveur de jeux ou un site web. Dans ce guide, on t’explique comment configurer ton propre serveur de base de données MySQL sur ton serveur dédié Windows.

<InlineVoucher />

## Installation

Commence par te connecter à ton serveur via une connexion bureau à distance et télécharge la dernière version de MariaDB, qui est utilisée pour le serveur de base de données : [Téléchargement MariaDB](https://mariadb.org/download/?t=mariadb).

Décompresse l’archive téléchargée avec WinRAR ou 7Zip et lance le fichier d’installation par un double clic :

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Ensuite, suis le processus d’installation en cliquant sur **Suivant** jusqu’à ce qu’on te demande de saisir le mot de passe root :

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Là, tu peux définir le mot de passe principal pour l’accès à ton serveur de base de données. Assure-toi d’utiliser un mot de passe sécurisé que personne d’autre ne connaît !

:::info
IMPORTANT ! Si tu veux accéder à la base de données depuis l’extérieur via Navicat, HeidiSQL ou un autre outil, tu dois activer l’option **Autoriser l’accès distant pour l’utilisateur root** ! Pour des raisons de sécurité, ce n’est généralement pas recommandé.
:::

Clique ensuite sur **Suivant** jusqu’à la fin de l’installation, puis clique sur **Installer** :

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Ton serveur de base de données est maintenant en ligne et prêt à être utilisé !

## Configuration de l’accès externe

Si tu as activé l’option "Autoriser l’accès distant pour l’utilisateur root" pendant l’installation, tu dois aussi ouvrir le port MySQL **3306** dans le pare-feu Windows. Pour cela, ouvre le pare-feu et crée une nouvelle règle.

Tu trouveras le guide pour rediriger les ports dans le pare-feu ici :  
[Redirection de ports (Pare-feu)](vserver-windows-port.md)

Maintenant, tu peux accéder à ton serveur MySQL depuis l’extérieur !

## Conclusion

Félicitations, tu as installé avec succès ton serveur MySQL. Pour toute question ou aide, n’hésite pas à contacter notre support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />