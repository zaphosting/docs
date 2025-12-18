---
id: dedicated-windows-plesk
title: "Serveur dédié : Installation de Plesk"
description: "Découvrez comment gérer efficacement vos sites web et serveurs avec Plesk, que vous soyez débutant ou expert → En savoir plus maintenant"
sidebar_label: Installer Plesk
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Plesk est une plateforme complète de gestion d’hébergement web et de serveurs qui permet aux utilisateurs de gérer des sites web, serveurs, comptes email et bien plus via une interface intuitive. C’est une solution polyvalente adaptée aussi bien aux débutants qu’aux développeurs web et administrateurs système expérimentés.

## Établir une connexion au serveur

Pour installer Plesk sur le serveur, vous devez d’abord vous y connecter. Le fonctionnement est expliqué en détail dans notre guide séparé : [Accès initial (RDP)](vserver-windows-userdp.md)

## Installateur Plesk

Ensuite, vous avez besoin de l’installateur Plesk, nécessaire pour l’installation de Plesk. Vous pouvez le télécharger en cliquant sur [Installateur Plesk](https://installer-win.plesk.com/plesk-installer.exe)

Cet installateur est maintenant stocké dans un dossier, dans notre exemple nous utilisons un dossier "Plesk" créé sur notre bureau. Le chemin vers ce fichier sera important pour les prochaines étapes.

![](https://screensaver01.zap-hosting.com/index.php/s/qpQK28F3oPezWR8/preview)

### Ouvrir l’invite de commandes

La console CMD doit maintenant être ouverte pour l’installation.  
Cela se fait via la combinaison de touches [Windows] + [R] ou en recherchant "commande" dans la barre de recherche Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ZHCiRtYrFK43Xbn/preview)

### Installation de Plesk

Dans cette console CMD, vous devez naviguer jusqu’au répertoire où l’installateur Plesk a été téléchargé. Dans notre exemple, c’est le dossier "Plesk" sur le "Bureau".

Ce répertoire s’atteint via CMD avec la commande "*cd*".

![](https://screensaver01.zap-hosting.com/index.php/s/sCCpiogDGsrGN9F/preview)

Une fois dans ce répertoire, la dernière étape est d’exécuter la commande de l’installateur. Cela lancera plesk-installer.exe et la dernière version de Plesk sera installée automatiquement.

![](https://screensaver01.zap-hosting.com/index.php/s/TKrkZagQr4CC7Hr/preview)

Commande : `plesk-installer.exe --select-product-id=panel --select-release-latest --installation-type=recommended`

:::info
Le processus d’installation peut prendre entre 30 et 60 minutes, après quoi Plesk sera installé et prêt à l’emploi.
:::

## Conclusion

Félicitations, vous avez installé Plesk avec succès. Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂