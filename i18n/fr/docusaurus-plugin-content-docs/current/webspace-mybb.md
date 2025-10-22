---
id: webspace-mybb
title: "Hébergement web : Installer le logiciel de forum MyBB"
description: "Découvrez comment configurer et lancer votre propre forum MyBB pour créer une communauté en ligne engageante → En savoir plus maintenant"
sidebar_label: Installer MyBB
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

MyBB, anciennement MyBulletinBoard, est un logiciel de forum gratuit et open source développé par le MyBB Group. Dans ce guide, nous expliquons comment installer ce logiciel de forum sur notre produit d’hébergement web.

<InlineVoucher />

## Préparation

Avant de pouvoir procéder à l’installation de MyBB, certaines préparations doivent être faites. Cela inclut l’obtention du logiciel de forum, la configuration de la base de données à utiliser ainsi que du serveur mail (adresse e-mail).

**Logiciel**

Le logiciel de forum peut être téléchargé depuis le site officiel de MyBB. Le téléchargement est disponible ici : [MyBB](https://mybb.com/download/)

![Bildschirmfoto vom 2022-05-15 23-16-59](https://screensaver01.zap-hosting.com/index.php/s/s8kbtNFq6c79SoH/preview)

Le téléchargement contient un fichier compressé, qu’il faut décompresser sur votre ordinateur local. À l’intérieur, vous trouverez un dossier nommé **Upload**. Son contenu est nécessaire et doit être uploadé soit via **FTP ou Gestionnaire de fichiers**. Sous **Sites & Domaines** dans **Accès FTP**, vous pouvez créer un utilisateur FTP.

Après avoir ouvert le gestionnaire de fichiers dans le panneau Plesk, naviguez vers le répertoire **httpdocs** et uploadez les fichiers du logiciel de forum.

![en-file](https://screensaver01.zap-hosting.com/index.php/s/x9oWpWCzrtB87e7/preview)

**Base de données**

Ensuite, la base de données doit être créée, elle servira à stocker toutes les informations du forum. Pour cela, cliquez de nouveau sur **Sites & Domaines** puis sur **Bases de données**. Cliquez ensuite sur Ajouter une base de données et créez une base :

![en-db](https://screensaver01.zap-hosting.com/index.php/s/f3dwjM5qxQQpzd6/preview)

Cliquez sur **OK** et la base de données sera créée.

**Serveur mail (adresse e-mail)**

Pour enregistrer un compte sur le forum, un serveur mail avec une adresse e-mail est nécessaire afin que les mails d’inscription puissent être envoyés aux utilisateurs. Les instructions pour configurer une telle adresse e-mail sont disponibles ici : [Envoyer des e-mails](webspace-plesk-sendmail.md)

## Installation

Si toutes les étapes de préparation ont été réalisées, vous pouvez commencer l’installation proprement dite de MyBB. Pour cela, il faut maintenant appeler le site web dans le navigateur Internet. Cela devrait ressembler à ceci :

![mybbinstall](https://screensaver01.zap-hosting.com/index.php/s/DzgRZMBFotTgsXZ/preview)

Une fois là, il faut configurer les 9 catégories pendant l’installation. La configuration vérifiera si toutes les conditions préalables sont remplies, configurera la base de données et le logiciel de forum, etc. Pour commencer, il faut d’abord décider si des statistiques anonymes doivent être envoyées à MyBB ou non. Ensuite, il faudra accepter les conditions de licence.

Un aperçu des prérequis système nécessaires devrait alors s’afficher. Cela inclut la version PHP, la mémoire, etc. L’hébergement web devrait déjà être configuré pour répondre à tous ces prérequis par défaut.

![install2](https://screensaver01.zap-hosting.com/index.php/s/fTJQGRADn5SF62C/preview)

Si certains prérequis ne sont pas remplis, merci de contacter le support. Sinon, vous pouvez cliquer sur **Suivant** et continuer l’installation. Il faut maintenant configurer la base de données, qui a déjà été créée auparavant. Les informations de la base de données créée doivent être renseignées ici :

![](https://screensaver01.zap-hosting.com/index.php/s/GaRZiSizcYCMX3Z/preview)

La base de données sera ensuite configurée. Cela peut prendre un moment. Après cela, les données et thèmes par défaut seront installés. Il suffit de cliquer sur **Suivant**.

Ensuite, on arrive à la configuration générale. Ici, vous pouvez définir le nom du site web, du forum, l’URL et plus encore :

![install3](https://screensaver01.zap-hosting.com/index.php/s/asEA4KqtZGaN65A/preview)

Enfin, un compte administrateur général doit être créé avant que l’installation puisse être terminée.

![Install4](https://screensaver01.zap-hosting.com/index.php/s/3T6NMLYyMnb4pja/preview)

Une fois cela fait et tout configuré avec succès, vous devriez voir le message suivant et pouvoir accéder à votre forum :

![](https://screensaver01.zap-hosting.com/index.php/s/9N2jBCbzEYe2iyn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/g9iecMjiDX4GoqP/preview)

<InlineVoucher />