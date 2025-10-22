---
id: vserver-windows-installmysql
title: "VPS : Installation de MySQL"
description: "Découvrez comment configurer et sécuriser votre propre serveur de base de données MySQL sur un VPS Windows pour une gestion fiable des données → En savoir plus maintenant"
sidebar_label: Installer MySQL
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

Un serveur MySQL est nécessaire pour diverses applications et peut contenir des données importantes, par exemple pour un serveur de jeux ou un site web. Dans ce qui suit, nous expliquons comment configurer votre propre serveur de base de données MySQL sur votre VPS Windows.
<InlineVoucher />

## Installation

Au début, connectez-vous via connexion bureau à distance à votre serveur et téléchargez la dernière version de MariaDB, qui est utilisée pour le serveur de base de données : [Téléchargement MariaDB](https://mariadb.org/download/?t=mariadb). 

Décompressez l’archive téléchargée avec WinRAR ou 7Zip et lancez le fichier d’installation par un double clic : 

![](https://screensaver01.zap-hosting.com/index.php/s/aPZn6jmLK5NZybW/preview)

Ensuite, suivez le processus d’installation en cliquant sur **Suivant** jusqu’à ce qu’on vous demande de saisir le mot de passe root :

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

Là, vous pouvez définir le mot de passe principal pour l’accès à votre serveur de base de données. Veillez à utiliser un mot de passe sécurisé que personne d’autre ne connaît !

:::info
IMPORTANT ! Si vous souhaitez accéder à la base de données à distance via Navicat, HeidiSQL ou tout autre outil, vous devez activer l’option **Autoriser l’accès à distance pour l’utilisateur root** ! Pour des raisons de sécurité, cela n’est généralement pas recommandé.
:::

Ensuite, cliquez sur **Suivant** jusqu’à la fin de l’installation, puis cliquez sur **Installer** :

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

Votre serveur de base de données est maintenant en ligne et prêt à l’emploi !

## Configuration de l’accès externe

Si vous avez activé « Autoriser l’accès à distance pour l’utilisateur root » pendant l’installation, vous devez également ouvrir le port MySQL **3306** dans le pare-feu Windows. Pour cela, ouvrez-le et créez une nouvelle règle.
Vous trouverez le guide pour le transfert de ports dans le pare-feu ici :
[Redirection de port (Pare-feu)](vserver-windows-port.md)

Vous pouvez maintenant accéder à votre serveur MySQL depuis l’extérieur !



## Conclusion

Félicitations, vous avez installé et configuré avec succès le serveur MySQL sur votre VPS ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />