---
id: vserver-windows-userdp
title: "VPS : Accéder à Windows Server via Bureau à distance (RDP)"
description: "Découvrez comment vous connecter en toute sécurité à votre serveur Windows à distance avec RDP et gérer facilement l’accès → En savoir plus maintenant"
sidebar_label: Accès initial (RDP)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows utilise le protocole Bureau à distance (RDP) pour faciliter la connexion à distance vers d’autres systèmes Windows. Dans ce guide, on va voir ensemble le processus simple pour se connecter via RDP à votre serveur Windows.

<InlineVoucher />

## Préparer les infos de connexion

Peu importe l’application que vous utilisez pour accéder à votre serveur Windows, vous devrez toujours entrer des identifiants pour vous connecter.

Commencez par aller sur le panneau web de votre serveur et rendez-vous dans la section **Accès & Sécurité**. Sur cette page, vous trouverez toutes les infos nécessaires, principalement l’**Adresse IP** de votre serveur et les identifiants de connexion utilisateur. Vos identifiants sont composés du champ **Nom d’utilisateur** qui doit être `Administrator` et du champ **Mot de passe**.

Si votre serveur est tout neuf, vous pourrez récupérer votre mot de passe initial généré aléatoirement via une fenêtre pop-up sur cette page. Sinon, le mot de passe est masqué pour des raisons de sécurité, mais si vous l’oubliez, vous pouvez simplement en générer ou définir un nouveau sur cette même page.

![](https://screensaver01.zap-hosting.com/index.php/s/amLy6sC6XzBN5fQ/preview)

Maintenant que vous avez vos infos de connexion, passez à la section suivante pour choisir l’application adaptée pour vous connecter.

## Connexion via Windows

Depuis la création du RDP, Windows intègre l’application **Connexion Bureau à distance** en natif. Vous pouvez y accéder simplement en la cherchant dans la barre de recherche Windows ou en appuyant sur la touche Windows/icône et en utilisant la barre de recherche du menu démarrer.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

Dans la nouvelle fenêtre, remplissez le champ **Ordinateur** avec l’adresse IP de votre serveur et cliquez sur **Se connecter**. Une fenêtre native Windows vous demandera alors vos identifiants, entrez le **Nom d’utilisateur** `Administrator` et le **Mot de passe** correspondant à votre serveur Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Cliquez ensuite sur **OK** et vous devriez pouvoir vous connecter à distance à votre serveur Windows. Si vous avez des soucis, vérifiez bien que les identifiants saisis sont corrects.

:::info
Un message d’erreur de certificat peut apparaître lors de la première connexion. C’est normal et vous pouvez l’ignorer sans problème.
:::

Vous êtes maintenant connecté à votre serveur Windows.

## Autres applications de connexion à distance (RDP)

### Applications desktop

Voici quelques alternatives sympas pour vous connecter à votre serveur Windows via le protocole Bureau à distance (RDP). On recommande fortement d’utiliser l’application native si vous êtes sous Windows (comme vu juste avant), car c’est plus simple et ça marche très bien.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Applications mobiles

Aujourd’hui, Microsoft propose une application officielle Bureau à distance (RDP) pour les deux principaux systèmes mobiles. On recommande de les utiliser sur mobile car elles offrent plein de fonctionnalités utiles.

Vous pouvez la trouver ici selon votre plateforme : [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) et [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />