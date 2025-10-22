---
id: vserver-windows-plesk
title: "VPS : Installation de Plesk"
description: "Découvrez comment gérer efficacement vos sites web et serveurs avec la plateforme polyvalente de Plesk, idéale pour débutants comme experts → En savoir plus maintenant"
sidebar_label: Installer Plesk
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plesk est une plateforme complète de gestion d’hébergement web et de serveurs qui permet aux utilisateurs de gérer sites web, serveurs, comptes email et bien plus via une interface intuitive. C’est une solution polyvalente adaptée aussi bien aux débutants qu’aux développeurs web et administrateurs système expérimentés.  
<InlineVoucher />


## Établir une connexion au serveur

Pour installer Plesk sur le serveur, il faut d’abord s’y connecter. Le fonctionnement est expliqué en détail dans notre guide séparé : [Accès initial (RDP)](vserver-windows-userdp.md)

## Installateur Plesk

Ensuite, vous aurez besoin de l’installateur Plesk, nécessaire pour l’installation. Vous pouvez le télécharger en cliquant sur [Installateur Plesk](https://installer-win.plesk.com/plesk-installer.exe)

Cet installateur est maintenant stocké dans un dossier, dans notre exemple nous utilisons un dossier "Plesk" créé sur notre bureau. Le chemin vers ce fichier sera important pour les étapes suivantes.

![](https://screensaver01.zap-hosting.com/index.php/s/kLWzpPdxXRPKbHP/preview)

### Ouvrir l’invite de commandes

La console CMD doit maintenant être ouverte pour l’installation.  
Pour cela, utilisez la combinaison de touches [Windows] + [R] ou cherchez "commande" dans la barre de recherche Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/Bxy33gxjASsf5G3/preview)

### Installation de Plesk

Dans cette console CMD, vous devez naviguer jusqu’au répertoire où l’installateur Plesk a été placé. Dans notre exemple, c’est le dossier "Plesk" sur le "Bureau".

Ce répertoire s’atteint via CMD avec la commande "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/QzQmFzpi3SDQbbE/preview)

Une fois dans ce répertoire, la dernière étape est d’exécuter la commande de l’installateur. Cela lancera plesk-installer.exe et la dernière version de Plesk sera installée automatiquement.

![](https://screensaver01.zap-hosting.com/index.php/s/2XcY2WEyX48RM4G/preview)

Commande : `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Le processus d’installation peut durer entre 30 et 60 minutes, après quoi Plesk sera installé et prêt à l’emploi.
:::


## Conclusion

Félicitations, vous avez installé et configuré Plesk avec succès sur votre VPS ! Si vous avez d’autres questions ou problèmes, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider !

<InlineVoucher />