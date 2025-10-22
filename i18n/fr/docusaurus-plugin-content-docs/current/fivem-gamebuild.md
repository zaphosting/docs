---
id: fivem-gamebuild
title: "FiveM : Activer le contenu DLC"
description: "Découvrez comment imposer des versions DLC spécifiques sur votre serveur FiveM pour accéder aux dernières cartes, véhicules et contenus → En savoir plus maintenant"
sidebar_label: Activer la version DLC
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Imposer une version de jeu vous permet de forcer une version DLC spécifique sur votre serveur, vous permettant de jouer avec les dernières cartes, vêtements, véhicules et bien plus encore !

<InlineVoucher />

## Versions de jeu disponibles

Voici un aperçu de tous les DLC disponibles et leurs IDs de version :

| ID de version |        Nom de la version         |
| :-----------: | :------------------------------: |
|     2060      | Los Santos Summer Special        |
|     2189      |        Cayo Perico               |
|     2372      |         Tuner DLC                |
|     2545      |       The Contract               |
|     2699      | The Criminal Enterprises        |
|     2802      |   Los Santos Drug Wars           |
|     2944      |  San Andreas Mercenaries         |
|     3095      |       The Chop Shop              |
|     3258      |  Bottom Dollar Bounties          |
|     3407      |    Agents of Sabotage            |
|     3570      |        Money Fronts              |



## Activer la version

Pour utiliser du contenu DLC supplémentaire comme Cayo Perico, le Tuner DLC ou Los Santos Summer Special, vous devez le configurer dans votre serveur. Pour définir la version DLC, ouvrez votre interface txAdmin et rendez-vous dans les paramètres FXServer.

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

Il vous suffit ensuite d’ajouter la version de jeu souhaitée dans la section **Arguments supplémentaires** via la commande set, en remplaçant `BUILD_ID_CHOICE` par un ID de la table :

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## Conclusion

Une fois votre choix fait, redémarrez votre serveur FiveM. Votre serveur démarrera désormais avec la version DLC spécifiée. Vous avez réussi à définir une version de jeu pour votre serveur de jeux FiveM. Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />