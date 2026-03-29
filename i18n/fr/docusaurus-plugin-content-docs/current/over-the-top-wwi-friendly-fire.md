---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI : Configurer le tir ami"
description: "Apprenez à activer ou ajuster les paramètres de tir ami sur votre serveur Over the Top WWI → En savoir plus maintenant"
sidebar_label: Tir Ami
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le tir ami détermine si les joueurs peuvent infliger des dégâts à leurs coéquipiers pendant la partie. Ajuster ces paramètres vous permet de contrôler à quel point le combat doit être réaliste ou indulgent sur votre **serveur de jeux Over the Top WWI**.

Activer le tir ami peut augmenter le réalisme et la tactique, tandis que le désactiver ou le réduire peut offrir une expérience plus décontractée et accessible.

<InlineVoucher />

## Configuration

Les paramètres de tir ami se configurent dans le fichier de configuration du serveur. Vous pouvez accéder et modifier ce fichier dans votre **panneau de contrôle du serveur de jeux** sous **Configs**. Trouvez et ouvrez le fichier `ServerConfiguration.ini`. À l’intérieur, repérez les paramètres suivants :

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire` active ou désactive les dégâts au corps à corps contre les coéquipiers.
- `EnableFriendlyRangeFire` active ou désactive les dégâts à distance contre les coéquipiers.
- `FriendlyFireAtRoundStart` définit un délai en secondes avant que le tir ami ne soit actif.
- `FriendlyFirePercent` contrôle le pourcentage de dégâts au corps à corps infligés aux coéquipiers.
- `RangeFriendlyFirePercent` contrôle le pourcentage de dégâts à distance infligés aux coéquipiers.
- `ExplosionFf` active ou désactive les dégâts d’explosifs aux coéquipiers.
- `FriendlyFireReflectPercent` renvoie un pourcentage des dégâts à l’attaquant au lieu du coéquipier.

Après avoir modifié le `ServerConfiguration.ini`, sauvegardez le fichier et redémarrez votre serveur. Les nouveaux paramètres de tir ami seront appliqués immédiatement.

## Conclusion

Félicitations ! Vous avez configuré avec succès les paramètres de tir ami sur votre **serveur Over the Top WWI**. Ajuster ces valeurs vous permet d’équilibrer réalisme et expérience de jeu pour votre communauté.

Pour toute question ou aide, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous assister ! 🙂

<InlineVoucher />