---
id: fivem-notlisted
title: "FiveM : Le serveur n’apparaît pas dans la liste des serveurs"
description: "Découvre comment résoudre les problèmes d’affichage dans la liste des serveurs et assure-toi que ton serveur apparaisse correctement → En savoir plus maintenant"
sidebar_label: Serveur non listé
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Si ton serveur n’apparaît pas dans la liste des serveurs, cela peut venir de plusieurs raisons. Si ce guide ne résout pas le problème, on te conseille de contacter notre [Support](https://zap-hosting.com/en/customer/support/).

<InlineVoucher />

## Erreur de configuration

Souvent, ce sont de simples erreurs de configuration qui causent ce souci. Commence par vérifier si la mise en liste de ton serveur est désactivée, pour ça, regarde la ligne `sv_master1` :

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
Cette ligne doit **toujours** être commentée avec un #, sinon le serveur ne sera pas listé.
:::

Vérifie aussi le nom du serveur (`sv_hostname`) :

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)

Ici, la guillemet à la fin de la ligne manque. Certains noms de serveur peuvent aussi poser problème à cause du formatage, on te recommande de les retirer dans ce cas, par exemple [DE], ou des caractères spéciaux comme ä, ü, ö.

## Ressources problématiques

Il est aussi possible que certaines ressources empêchent le serveur d’apparaître. Dans ce cas, on te conseille de supprimer les dernières ressources installées puis de laisser le serveur en ligne pendant environ 1h. Dans la plupart des cas, il devrait réapparaître.

## Réinstallation

Si rien de tout ça ne marche, une réinstallation propre est recommandée, ça remettra tous les fichiers du serveur à zéro.

:::info
Pense bien à faire une sauvegarde avant de réinstaller, sinon tu perdras toutes les données sur le serveur.
:::

<InlineVoucher />