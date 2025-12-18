---
id: vserver-linux-ftp-install
title: "VPS : Installation d’un serveur FTP"
description: "Découvre comment configurer et gérer un serveur FTP sécurisé sous Linux avec FileZilla Server pour transférer tes fichiers efficacement → En savoir plus maintenant"
sidebar_label: Installer un serveur FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le **FTP (File Transfer Protocol)** est un protocole réseau utilisé pour transférer des fichiers via un réseau TCP/IP. Ce protocole a été développé pour faciliter l’échange de fichiers entre systèmes. Avec **FileZilla Server**, il est possible de mettre en place un serveur FTP sur un système Linux. FileZilla Server est simple à installer et à configurer, et propose de nombreuses fonctionnalités comme la création de comptes utilisateurs, la gestion des droits d’accès et le transfert de fichiers. Dans ce guide, on va voir comment installer et configurer le service **FileZilla Server** sur un serveur Linux.

<InlineVoucher />

## Installation

Pour ajouter un utilisateur FTP, il faut d’abord installer le serveur FTP. Pour ça, connecte-toi une première fois au serveur via SSH (Putty).

Pour installer le serveur FTP, tape la commande suivante : **apt-get install proftpd**. Confirme la demande avec un **Y** et valide :

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

Maintenant, il faut encore ajuster la config. Pour ça, entre la commande **nano /etc/proftpd/proftpd.conf** et valide. Le fichier de config s’ouvre alors dans l’éditeur Nano :

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

Les lignes suivantes doivent être ajoutées : 

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

Il faut maintenant redémarrer le serveur FTP pour appliquer les changements. Utilise la commande : **service proftpd restart**

## Ajouter des utilisateurs

Pour créer un nouvel utilisateur FTP, il faut d’abord créer un groupe FTP. On fait ça avec la commande **addgroup ftpuser**. Ça donne ça : 

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

Ensuite, on peut ajouter notre premier utilisateur FTP avec les commandes : **adduser benutzerftp -shell /bin/false -home /var/www** puis **adduser benutzerftp ftpuser**.

On te demande alors de définir un mot de passe : 

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

Il faut ensuite confirmer que les infos sont correctes : 

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

La dernière étape est d’ajouter le nouvel utilisateur au groupe via **adduser benutzerftp ftpuser** :

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

Maintenant, tu peux te connecter avec les infos que tu as définies :

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)



## Conclusion

Félicitations, tu as installé et configuré ton serveur FTP avec succès ! Si tu as d’autres questions ou soucis, n’hésite pas à contacter notre équipe support, dispo tous les jours pour t’aider !

<InlineVoucher />