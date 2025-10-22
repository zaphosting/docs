---
id: dedicated-linux-ftp-install
title: "Serveur dédié : Installation d’un serveur FTP"
description: "Découvre comment configurer et gérer un serveur FTP sécurisé sous Linux avec FileZilla Server pour faciliter les transferts de fichiers et l’accès utilisateur → En savoir plus maintenant"
sidebar_label: Installer un serveur FTP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le **FTP (File Transfer Protocol)** est un protocole réseau utilisé pour transférer des fichiers via un réseau TCP/IP. Ce protocole a été développé pour permettre un échange facile de fichiers entre systèmes. Avec **FileZilla Server**, il est possible de mettre en place un tel serveur FTP sur un système Linux. FileZilla Server est simple à installer et à configurer, et offre de nombreuses fonctionnalités comme la création de comptes utilisateurs, la gestion des droits d’accès et le transfert de fichiers. Dans ce guide, on va voir comment installer et configurer le service **FileZilla Server** sur un serveur Linux.

<InlineVoucher />

## Comment installer le serveur FTP pour ajouter un utilisateur ?

Pour ajouter un utilisateur FTP, il faut d’abord installer le serveur FTP. Pour ça, connecte-toi une fois au serveur via SSH (Putty).

Pour installer le serveur FTP, tape la commande suivante : **apt-get install proftpd**. Confirme la demande avec un **Y** et valide :

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Maintenant, il faut encore ajuster la config. Pour ça, entre la commande **nano /etc/proftpd/proftpd.conf** et valide. Le fichier de config s’ouvre alors dans l’éditeur Nano :

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

Les lignes suivantes doivent être ajoutées :

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Il faut maintenant redémarrer le serveur FTP pour appliquer les changements. Utilise la commande suivante : **service proftpd restart**

## Comment ajouter un utilisateur FTP ?

Pour créer un nouvel utilisateur FTP, il faut d’abord créer un groupe FTP. On fait ça avec la commande **addgroup ftpuser**. Ça donne ça :

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

Ensuite, on peut ajouter notre premier utilisateur FTP avec les commandes : **adduser benutzerftp -shell /bin/false -home /var/www** puis **adduser benutzerftp ftpuser**.

On te demande alors de définir un mot de passe :

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Puis il faut confirmer que les infos sont correctes :

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

La dernière étape est d’ajouter le nouvel utilisateur au groupe via **adduser benutzerftp ftpuser** :

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

Maintenant, tu peux te connecter avec les infos que tu as définies :

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)


<InlineVoucher />