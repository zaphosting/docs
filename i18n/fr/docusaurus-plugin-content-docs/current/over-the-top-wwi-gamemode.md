---
title: "Over the Top WWI : Changer le mode de jeu"
description: "Apprends à changer le mode de jeu sur ton serveur Over the Top WWI → Découvre-le maintenant"
sidebar_label: Changer le mode de jeu
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le mode de jeu sur un **serveur de jeux Over the Top WWI** définit comment les parties se déroulent et quels objectifs les joueurs doivent accomplir. Différents modes de jeu peuvent changer radicalement le rythme, la stratégie et l’expérience globale.

En ajustant le mode de jeu, tu peux personnaliser ton serveur pour te concentrer sur des batailles à grande échelle, un gameplay défensif, ou des scénarios basés sur des objectifs, selon les préférences de ta communauté.

<InlineVoucher />

## Configuration

Le mode de jeu se configure dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier de configuration `ServerConfiguration.ini`. Dans ce fichier, repère le paramètre suivant :

```
CurrentGameMode = 2
```

La valeur détermine quel mode de jeu est actif sur ton serveur. Valeurs disponibles :

- `2` → Conquête
- `3` → Siège

La valeur sélectionnée définit les règles principales du gameplay pour chaque partie.

- **Conquête (2)** se concentre sur la capture et la tenue d’objectifs à travers la carte, favorisant le mouvement constant et la coordination d’équipe.
- **Siège (3)** est généralement plus défensif, où une équipe attaque pendant que l’autre défend des positions stratégiques.

Le choix du mode dépend de ton style de jeu préféré et du nombre de joueurs.

Après avoir modifié la valeur dans le `ServerConfiguration.ini`, sauvegarde le fichier et redémarre ton serveur. Le nouveau mode de jeu sera appliqué à la prochaine partie ou rotation de carte.

## Conclusion

Félicitations ! Tu as réussi à changer le mode de jeu sur ton **serveur Over the Top WWI**. En sélectionnant le mode adapté, tu peux façonner l’expérience de jeu et mieux correspondre aux attentes de ta communauté.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />