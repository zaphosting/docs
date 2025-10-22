---
id: minecraft-add-own-world
title: "Minecraft : Ajouter votre propre monde au serveur"
description: "Apprenez à uploader et configurer des mondes Minecraft personnalisés sur votre serveur pour une expérience de jeu unique → Découvrez-le maintenant"
sidebar_label: Ajouter votre propre monde
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Vous voulez utiliser votre propre monde ou un monde téléchargé sur internet sur votre serveur ? Alors vous êtes au bon endroit ! Tout ce dont vous avez besoin, c’est de votre monde et d’un client FTP. Si vous ne savez pas ce qu’est un client FTP ni comment l’utiliser, jetez un œil à ce guide : [Accès via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/Rmx6c6n2rP5MqBz/preview)

<YouTube videoId="5tII3C9yO3g" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/SbB6iZmdZtMAPaS/preview" title="Comment uploader des MAPS personnalisées sur votre serveur Minecraft" description="Vous préférez comprendre en voyant les choses en action ? On a ce qu’il vous faut ! Plongez dans notre vidéo qui vous explique tout. Que vous soyez pressé ou que vous aimiez apprendre de façon plus fun et immersive !"/>

Une fois la connexion au serveur établie via FTP, vous pouvez commencer à installer votre propre monde. Pour cela, vous devez d’abord vous rendre dans le répertoire où se trouve le monde actuel. Il se trouve dans ce répertoire : /gXXXXX/modpack/

![](https://screensaver01.zap-hosting.com/index.php/s/85KLwjPYt3yjHZt/preview)

Le nouveau monde doit maintenant être uploadé dans ce répertoire. Vous pouvez soit supprimer et remplacer le dossier **world** existant, soit uploader le nouveau monde sous un autre nom. Dans cet exemple, on upload le monde avec un nouveau nom :

![](https://screensaver01.zap-hosting.com/index.php/s/3DYD5ANgNsCNpkE/preview)

Il ne reste plus qu’à configurer le nouveau monde dans le fichier **server.properties**. Vous le trouverez dans l’**administration du serveur de jeux** sous **Configs**. Là, il faut modifier la valeur de la commande **level-name=** :

![](https://screensaver01.zap-hosting.com/index.php/s/idoHWafC3g4AbYL/preview)

Après avoir redémarré le serveur, le nouveau monde devrait être appliqué. Profitez bien de votre nouveau monde ! 🙂

<InlineVoucher />

<InlineVoucher />