---
id: dedicated-linux-ftp-install
title: "Configurer ProFTPD sur un serveur Linux - Hébergez un service FTP sécurisé"
description: "Découvrez comment configurer et gérer un serveur FTP sécurisé sous Linux avec FileZilla Server pour simplifier les transferts de fichiers et l’accès utilisateur → En savoir plus maintenant"
sidebar_label: Installer un serveur FTP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le **FTP (File Transfer Protocol)** est un protocole réseau utilisé pour transférer des fichiers via un réseau TCP/IP. Ce protocole a été développé pour permettre un échange facile de fichiers entre systèmes. Avec **FileZilla Server**, il est possible de configurer un tel serveur FTP sur un système d’exploitation Linux. FileZilla Server est simple à installer et à configurer, et offre de nombreuses fonctionnalités comme la création de comptes utilisateurs, la gestion des droits d’accès et le transfert de fichiers. Dans ce guide, nous allons explorer le processus d’installation et de configuration du service **FileZilla Server** sur un serveur Linux.

## Comment installer le serveur FTP pour ajouter un utilisateur ?

Pour ajouter un utilisateur FTP, il faut d’abord installer le serveur FTP. Pour cela, connectez-vous une fois au serveur via SSH (Putty).

Pour installer le serveur FTP, entrez la commande suivante : **apt-get install proftpd**. Vous devez confirmer la demande avec un **Y** et valider :

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Il faut maintenant ajuster la configuration. Pour cela, entrez la commande **nano /etc/proftpd/proftpd.conf** et validez. Le fichier de configuration s’ouvre alors dans l’éditeur Nano :

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

Les entrées suivantes doivent être ajoutées :

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Il faut maintenant redémarrer le serveur FTP pour appliquer les modifications. Cela se fait avec la commande : **service proftpd restart**

## Comment ajouter un utilisateur FTP ?

Pour créer un nouvel utilisateur FTP, il faut d’abord créer un groupe FTP. On le fait avec la commande **addgroup ftpuser**. Cela donne ceci :

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

On peut maintenant ajouter notre premier utilisateur FTP avec les commandes : **adduser benutzerftp -shell /bin/false -home /var/www** puis **adduser benutzerftp ftpuser**.

On vous demande alors de définir un mot de passe :

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Ensuite, il faut confirmer que les informations sont correctes :

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

La dernière étape est d’assigner le nouvel utilisateur au groupe via **adduser benutzerftp ftpuser** :

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

On peut maintenant se connecter avec les informations définies :

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)