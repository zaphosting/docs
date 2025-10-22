---
id: webspace-plesk-ftp
title: "Hébergement web : Configurer l’accès FTP pour l’hébergement web"
description: "Découvrez comment gérer plusieurs accès FTP pour des projets web collaboratifs et contrôler efficacement les permissions des dossiers → En savoir plus maintenant"
sidebar_label: Accès FTP
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

FTP signifie *protocole de transfert de fichiers* et est nécessaire pour uploader des fichiers depuis le PC vers l’hébergement web.  
Chaque client reçoit automatiquement un accès FTP pour l’hébergement web commandé.

Ici, on vous explique comment configurer d’autres accès FTP. C’est super utile si vous bossez à plusieurs sur un projet et que chaque personne doit avoir son propre accès FTP.

Ces personnes pourront alors utiliser l’accès FTP créé uniquement pour les dossiers spécifiés par le propriétaire de l’hébergement web.

<InlineVoucher />

## Configurer l’accès FTP

Dans le tableau de bord Plesk, ouvrez la fonction "**Accès FTP**"

:::info
Sur cette page principale, vous verrez aussi l’adresse IP, qui sera nécessaire pour le test plus tard.
:::

![Bildschirmfoto vom 2022-05-13 05-29-41](https://screensaver01.zap-hosting.com/index.php/s/FK3mBHJRqS3xdbB/preview)

Vous verrez maintenant l’accès FTP unique, créé automatiquement par le système à la fin de la commande de l’hébergement web.  
Pour créer un autre compte, cliquez sur le bouton "**Ajouter un compte FTP**".

![Bildschirmfoto vom 2022-05-13 05-29-53](https://screensaver01.zap-hosting.com/index.php/s/L2Qa3p5nYHA3WGf/preview)

Ensuite, entrez les données souhaitées. Dès que tout est rempli, validez avec "**OK**".

![Bildschirmfoto vom 2022-05-13 05-30-10](https://screensaver01.zap-hosting.com/index.php/s/xZM5rmy3QsPJN52/preview)

:::info
À "**Répertoire de base**", vous pouvez maintenant choisir le dossier auquel l’accès FTP doit avoir accès. Si l’accès FTP doit pouvoir voir et modifier tout, rien n’a besoin d’être changé ici. 
:::

## Tester l’accès FTP

Pour tester l’accès FTP, il faut un programme qui le permette. Dans notre exemple, on utilise *Filezilla Client*.  
Dans "**Serveur**", entrez l’IP du serveur affichée sur la page principale.  
Dans "**Nom d’utilisateur**" et "**Mot de passe**", entrez les identifiants créés pour l’accès FTP.  
Le port par défaut est "**21**".

## Compte utilisateur déjà existant

Ce message apparaît quand le nom du compte FTP est déjà utilisé par quelqu’un d’autre sur le système.  
L’hébergement web commandé est créé sur un système avec plusieurs clients, si l’un d’eux utilise déjà ce nom, aucun autre client ne peut l’utiliser.  
Dans ce cas, il faudra choisir un autre nom de compte.

<InlineVoucher />