---
id: vrising-firststeps-connect
title: "V Rising : Se connecter à un serveur V Rising"
description: "Découvrez comment vous connecter à votre serveur V Rising directement ou via la liste des serveurs pour une configuration de jeu fluide → En savoir plus maintenant"
sidebar_label: Se connecter au serveur
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans ce guide, on va voir comment se connecter à votre serveur V Rising. Il y a deux façons de faire : soit directement via l’adresse IP de votre serveur, soit via la liste des serveurs. On vous conseille de configurer votre serveur comme vous le souhaitez avant, pour ça, jetez un œil à notre [guide de Configuration du Serveur](vrising-configuration.md).

<InlineVoucher />

## Connexion directe via IP

### Obtenir l’IP du serveur

D’abord, il faut connaître l’IP et le port de votre serveur V Rising pour pouvoir vous connecter directement. Allez simplement sur votre [interface web ZAP-Hosting](https://zap-hosting.com/en/customer/) et récupérez l’IP complète et le port.

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

Si vous hébergez votre serveur V Rising sur un serveur dédié externe, l’IP sera celle de la machine hôte et le port celui que vous avez défini dans votre fichier de configuration (par défaut c’est 9876). Pour plus d’infos sur le port, consultez notre [guide de Configuration du Serveur](vrising-configuration.md).

### Connexion en jeu

Lancez V Rising depuis votre launcher de jeux. Dans le menu principal, sélectionnez **Jouer**, puis l’option **Jeu en ligne**.

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

Choisissez le mode de jeu auquel vous voulez jouer, ou appuyez directement sur **Afficher tous les serveurs** en bas à droite pour accéder au navigateur de serveurs.

Ensuite, cliquez sur le bouton **Connexion directe** en bas et entrez votre IP suivie du port, par exemple : `123.456.679.123:9876`. S’il y a un mot de passe, le jeu vous le demandera après la connexion.

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

Si vous ne pouvez pas rejoindre le serveur et que vous avez une erreur de timeout, vérifiez que l’IP et le port sont corrects et que votre serveur est bien en ligne. Vous pouvez utiliser la section console de votre interface web pour votre serveur V Rising pour vous aider à débugger.

## Connexion via la liste des serveurs

La méthode la plus simple pour se connecter à votre serveur, c’est via la liste des serveurs. Mais pour ça, votre serveur doit être configuré en public dans les paramètres de configuration.

Vérifiez notre [guide de Configuration du Serveur](vrising-configuration.md) pour ajouter les paramètres `Name` et `ListOnMasterServer` dans votre fichier de configuration ou via le panneau web.

Une fois fait, dans le menu principal, sélectionnez **Jouer**, puis **Jeu en ligne** et encore une fois cliquez sur **Afficher tous les serveurs** en bas à droite. Vous pouvez maintenant utiliser le navigateur de serveurs pour trouver votre serveur avec les filtres disponibles comme la recherche par nom, mode de jeu, difficulté et bien plus.

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />