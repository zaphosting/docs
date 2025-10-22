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

<InlineVoucher />

## Connexion via Windows

Depuis la création de RDP, Windows intègre l’application **Connexion Bureau à distance** comme application système de base. Vous pouvez y accéder simplement en la recherchant dans la barre de recherche Windows ou en appuyant sur la touche/icône Windows et en utilisant la barre de recherche du menu démarrer.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Dans la nouvelle fenêtre, remplissez le champ **Ordinateur** avec l’adresse IP de votre serveur puis cliquez sur **Se connecter**. Vous devriez maintenant voir une fenêtre native Windows vous demandant vos identifiants, où vous devez saisir le **Nom d’utilisateur** `Administrator` et le **Mot de passe**, qui est le mot de passe de votre serveur Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Cliquez ensuite sur **OK** et vous devriez pouvoir vous connecter à distance à votre serveur Windows. En cas de problème, vérifiez bien que les identifiants saisis sont corrects.

:::info
Un avertissement de certificat peut apparaître lors de la première connexion. C’est normal et vous pouvez l’ignorer sans risque.
:::

Vous êtes maintenant connecté avec succès à votre serveur Windows.

## Autres applications de connexion à distance (RDP)

### Applications Desktop

Voici quelques programmes alternatifs parfaits pour se connecter à votre serveur Windows via le protocole Bureau à distance (RDP). Nous recommandons vivement d’utiliser l’application intégrée si vous accédez au serveur depuis Windows (comme vu précédemment), car elle est simple et efficace.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Applications pour appareils mobiles

Aujourd’hui, Microsoft propose une application officielle Bureau à distance (RDP) pour les deux principaux systèmes mobiles. Nous recommandons de les utiliser sur mobile car elles offrent plein de fonctionnalités utiles.

Vous pouvez trouver l’application ici selon votre plateforme : [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) et [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />