---
id: gameserver-database-external-access
title: 'Serveur de jeux : Accès externe à la base de données'
description: "Découvre comment gérer les bases de données MySQL ZAP-Hosting pour serveurs de jeux avec des outils comme Navicat ou HeidiSQL → En savoir plus maintenant"
sidebar_label: Accès externe à la base de données
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

ZAP-Hosting inclut des bases de données MySQL avec ses produits de serveur de jeux. Celles-ci peuvent être gérées soit en interne via phpMyAdmin, soit en externe via des outils d’administration MySQL comme Navicat ou HeidiSQL.

Pour cela, il te faut les identifiants d’accès à la base de données. Tu peux les trouver dans l’administration de ton serveur de jeux, sous la section bases de données. Tu auras besoin des infos suivantes : **serveur/IP**, **base de données**, **utilisateur**, **mot de passe** et le port par défaut **3306** :

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## Préparation

Avant tout, il te faut un logiciel. Ici on te montre l’exemple avec [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) ou [HeidiSQL](https://www.heidisql.com/download.php). Une fois le fichier téléchargé, lance-le et suis la procédure d’installation. Quand c’est fait, tu peux démarrer le programme et configurer la connexion à ta base de données.

## HeidiSQL

Pour établir la connexion dans HeidiSQL, crée une nouvelle connexion avec "New".

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

Dans Hostname / IP, entre le nom de ta base de données, dans notre exemple "mysql-mariadb-5-101.zap-hosting.com". Le nom d’utilisateur et le mot de passe sont aussi à prendre dans les infos fournies, le port reste sur 3306.

Ensuite, clique simplement sur "Open".

## Navicat

Pour établir la connexion dans Navicat, crée une nouvelle connexion. Sous **Connection**, choisis **MySQL**. Une nouvelle fenêtre s’ouvre où tu dois insérer les infos de ta base de données.

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

Le **Nom de la connexion** sert juste à organiser tes bases de données, tu peux donc choisir ce que tu veux. Toutes les autres infos viennent de l’interface comme expliqué plus haut. Clique ensuite sur **OK** pour finir la configuration. La connexion apparaît alors à gauche dans la vue d’ensemble des bases de données. Pour te connecter, double-clique sur ta base ou fais un clic droit et choisis "Open connection" :

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

Ta base de données s’ouvre alors avec toutes les tables existantes. Tu peux maintenant modifier ou gérer ta base comme avec phpMyAdmin, soit en cliquant, soit en utilisant des commandes SQL.

![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)

## Conclusion

Tu as réussi à établir une connexion à ta base de données et tu peux maintenant la gérer. Pour toute question ou aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂 

<InlineVoucher />