---
id: vserver-windows-plesk
title: "Installer Plesk sur un serveur Windows - Gère tes sites web avec un panneau de contrôle puissant"
description: "Découvre comment gérer efficacement tes sites web et serveurs avec la plateforme polyvalente de Plesk, pour débutants comme pros → En savoir plus maintenant"
sidebar_label: Installer Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plesk est une plateforme complète d’hébergement web et de gestion de serveurs qui permet aux utilisateurs de gérer sites web, serveurs, comptes email et bien plus via une interface intuitive. C’est une solution polyvalente adaptée aussi bien aux débutants qu’aux développeurs web et administrateurs système expérimentés.  
<InlineVoucher />


## Établir une connexion au serveur

Pour installer Plesk sur le serveur, il faut d’abord s’y connecter. Le fonctionnement est expliqué en détail dans notre guide dédié : [Accès initial (RDP)](vserver-windows-userdp.md)

## Installateur Plesk

Ensuite, il te faut l’installateur Plesk, nécessaire pour l’installation. Tu peux le télécharger en cliquant sur [Installateur Plesk](https://installer-win.plesk.com/plesk-installer.exe)

Cet installateur est maintenant stocké dans un dossier, dans notre exemple on utilise un dossier "Plesk" créé sur le bureau. Le chemin vers ce fichier sera important pour les prochaines étapes.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Ouvrir l’invite de commandes

La console CMD doit maintenant être ouverte pour l’installation.  
Tu peux faire ça avec la combinaison de touches [Windows] + [R] ou en cherchant "commande" dans la barre de recherche Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Installation de Plesk

Dans cette console CMD, il faut naviguer jusqu’au dossier où l’installateur Plesk a été placé. Dans notre exemple, c’est le dossier "Plesk" sur le "Bureau".

On accède à ce dossier via CMD avec la commande "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

Une fois dans le bon dossier, la dernière étape est de lancer la commande d’installation. Cela exécutera plesk-installer.exe et installera automatiquement la dernière version de Plesk.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Commande : `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Le processus d’installation peut prendre entre 30 et 60 minutes, après quoi Plesk sera installé et prêt à l’emploi.
:::


## Conclusion

Félicitations, tu as installé et configuré avec succès Plesk sur ton VPS/serveur dédié ! Si tu as d’autres questions ou soucis, contacte notre support, dispo tous les jours pour t’aider !

<InlineVoucher />