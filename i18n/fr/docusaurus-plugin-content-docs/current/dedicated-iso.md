---
id: dedicated-iso
title: "Serveur dédié : ISO perso"
description: "Découvrez comment monter facilement des fichiers ISO via iLO ou la console distante pour démarrer votre serveur efficacement → En savoir plus maintenant"
sidebar_label: ISO perso
services:
  - dedicated
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Tu cherches à monter un ISO ? Peut-être un de nos ISO ou tu préfères utiliser le tien ? Pas de souci. On propose une large sélection de fichiers ISO et aussi d’autres options.

:::danger Sélection et utilisation des fichiers ISO
Quand tu utilises ton propre ISO (OS), qu’on ne propose pas officiellement, on ne peut pas garantir que ça fonctionnera parfaitement en cas de problème.
:::



## Options de montage dispo
Il y a deux façons de monter ton propre fichier ISO. Il faut toujours redémarrer le serveur pour charger le fichier. En général, il n’y a pas de restrictions pour monter un fichier, mais il faut que le fichier ISO soit bootable.

## Montage via iLO
Ouvre ton interface de gestion iLO et va dans "Virtual" Media
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* Renseigne l’URL qui pointe vers le fichier ISO que tu veux utiliser. Assure-toi que le lien se termine bien par .iso
* Clique sur "Insert Media"
* Clique sur "Server Reset" pour redémarrer ton système.

Ton fichier ISO sera alors chargé.

## Montage via la console distante

**Console HTML5**
Tu peux facilement monter le fichier directement dans la console distante :
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* Clique sur l’icône du disque
* Choisis "CD/DVD"
* Choisis entre "Scripted media URL" ou "Local .iso File"

La différence entre "Scripted media URL" et "Local .iso File" c’est que tu peux monter un fichier ISO hébergé sur un serveur/hébergement web ou choisir directement un fichier ISO depuis ton ordi avec "Local *.iso File", sans avoir à l’uploader.

Une fois ton ISO choisi, il faudra redémarrer le serveur.


**Console Java**
Comme sur la console HTML5, le fichier ISO est monté directement dans l’application.
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* Ouvre "Virtual Drives"

La différence entre "Image File CD/DVD-ROM" et "URL CD/DVD-ROM" c’est que tu peux monter un fichier ISO hébergé sur un serveur/hébergement web ou choisir directement un fichier ISO depuis ton ordi avec "Image File CD/DVD-ROM", sans upload.

Après avoir injecté ton ISO, un redémarrage du serveur est nécessaire.


## Conclusion
Bravo, tu as monté ton fichier ISO avec succès. Si tu as des questions ou besoin d’aide, n’hésite pas à contacter notre support, dispo tous les jours pour t’aider ! 🙂