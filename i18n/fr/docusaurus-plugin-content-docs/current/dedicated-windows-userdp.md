---
id: dedicated-windows-userdp
title: "Serveur dédié : Accéder à Windows Server via Bureau à distance (RDP)"
description: "Découvrez comment vous connecter facilement à votre serveur Windows à distance avec RDP et y accéder en toute sécurité depuis différents appareils → En savoir plus maintenant"
sidebar_label: Accès initial (RDP)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le système Windows utilise le protocole Bureau à distance (RDP) pour faciliter la connexion à distance à d’autres systèmes Windows. Dans ce guide, nous allons parcourir le processus simple de connexion via RDP à votre serveur Windows.





## Connexion via Windows

Depuis la création de RDP, Windows intègre l’application **Connexion Bureau à distance** comme application système de base. Vous pouvez y accéder simplement en la recherchant dans la barre de recherche Windows ou en appuyant sur la touche/icône Windows et en utilisant la barre de recherche du menu démarrer.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Dans la nouvelle fenêtre, remplissez le champ **Ordinateur** avec l’adresse IP de votre serveur et cliquez sur **Se connecter**. Vous devriez maintenant voir une invite de connexion Windows native, où vous devez saisir le **Nom d’utilisateur** `Administrator` et le **Mot de passe**, qui est le mot de passe de votre serveur Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Cliquez ensuite sur **OK** et vous devriez pouvoir vous connecter à distance à votre serveur Windows. Si vous rencontrez des problèmes, vérifiez bien que les identifiants saisis sont corrects.

:::info
Un avertissement de certificat peut apparaître lors de la première connexion. C’est normal et vous pouvez l’ignorer sans risque.
:::

Vous êtes maintenant connecté avec succès à votre serveur Windows.

## Autres applications de connexion à distance (RDP)

### Applications Desktop

Les programmes suivants sont d’excellentes alternatives adaptées pour se connecter à votre serveur Windows via le protocole Bureau à distance (RDP). Nous recommandons vivement d’utiliser l’application intégrée si vous accédez au serveur depuis Windows (comme vu dans l’étape précédente), car elle simplifie la procédure et fonctionne parfaitement.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Applications pour appareils mobiles

De nos jours, Microsoft propose une application officielle Bureau à distance (RDP) pour les deux principaux systèmes mobiles. Nous recommandons d’utiliser ces applications sur mobile car elles offrent beaucoup de fonctionnalités utiles.

L’application est disponible ici selon la plateforme : [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) et [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)