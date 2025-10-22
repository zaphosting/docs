---
id: vserver-windows-change-language
title: "VPS : Gérer les langues sur Windows Server"
description: "Découvrez comment personnaliser les paramètres de langue de votre serveur Windows pour une expérience localisée et améliorer l’ergonomie → En savoir plus maintenant"
sidebar_label: Ajouter & Gérer les langues
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windows OS est localisé dans une grande variété de langues, ce qui vous permet d’utiliser facilement votre langue maternelle. Dans ce guide, nous allons couvrir les méthodes disponibles pour changer la langue de votre serveur Windows.

:::info
Lors de la configuration initiale du serveur, vous pouvez choisir entre les versions serveur en anglais ou en allemand, indiquées par les tags **(EN)** et **(DE)** lors de la sélection de la version du système d’exploitation.
:::

<InlineVoucher />

## Ajouter des packs de langue

Les packs de langue sont une fonctionnalité intégrée à Windows qui vous permet de gérer facilement les packs de langue localisés sur votre serveur.

Commencez par vous connecter à votre serveur Windows via RDP. Si vous avez besoin d’aide pour cela, veuillez consulter notre [guide d’accès initial (RDP)](vserver-windows-userdp.md).

Une fois connecté, recherchez **Langue** via la barre de recherche Windows ou en appuyant sur la touche/icône Windows et en utilisant la barre de recherche du menu démarrer.

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

Sur cette page, trouvez la section langue et cliquez sur le bouton **Ajouter une langue**.

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

Dans le menu, recherchez la langue que vous souhaitez installer et sélectionnez-la en cliquant sur **Suivant**. Sur la page suivante, assurez-vous que toutes les options sont cochées, y compris l’option **Définir comme langue d’affichage Windows** si vous souhaitez l’activer immédiatement.

:::important
Pour changer la langue de l’ensemble du système Windows, assurez-vous que la langue sélectionnée prend en charge la fonctionnalité **Langue d’affichage**.
:::

:::tip
Si vous ne voyez aucune langue avec le champ **Langue d’affichage**, veuillez installer toutes les mises à jour Windows en attente via **Mise à jour et sécurité** dans les Paramètres, ce qui résout ce [bug](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

Windows va maintenant commencer à télécharger le pack de langue sélectionné. Soyez patient, cela peut prendre un certain temps.

Une fois le téléchargement terminé, si vous n’avez pas coché l’option **Définir comme langue d’affichage Windows** lors de l’étape de téléchargement, retournez sur la page des langues et sélectionnez-la dans le menu déroulant.

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

Enfin, redémarrez votre serveur et la nouvelle langue sera appliquée. Vous avez réussi à gérer les packs de langue sur votre serveur Windows.

## Réinstaller le système d’exploitation du serveur

Si vous rencontrez des difficultés pour changer les packs de langue ou si votre serveur est tout neuf, vous pouvez décider de simplement réinstaller votre serveur Windows en anglais ou en allemand via les versions OS disponibles.

:::warning
La réinstallation du système d’exploitation est un processus destructeur et **effacera** toutes les données sur le serveur. Assurez-vous de sauvegarder toutes les données importantes avant de procéder à cette étape.
:::

Cela peut se faire en accédant au panneau web de votre serveur et en allant dans la section **Paramètres**.

Sur cette page, vous pourrez choisir entre **Windows (EN)** et **Windows (DE)** pour la langue respective et lancer la réinstallation du serveur.

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

Une fois la réinstallation lancée, soyez patient car cela peut prendre un certain temps (jusqu’à 30 minutes) pour que le serveur termine l’ensemble du processus.

<InlineVoucher />