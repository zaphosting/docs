---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI : Configurer les paramètres de spawn"
description: "Apprenez à configurer le comportement de spawn sur votre serveur Over the Top WWI → En savoir plus maintenant"
sidebar_label: Paramètres de spawn
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les paramètres de spawn dans **Over the Top WWI** contrôlent comment et quand les joueurs réapparaissent sur le champ de bataille. Ces réglages impactent directement le rythme, l’équité et le déroulement global des parties.

En ajustant les timers de spawn, les périodes de grâce et le comportement de réapparition, tu peux créer un gameplay plus rapide ou des combats plus tactiques et punitifs.

<InlineVoucher />

## Configuration

Les paramètres de spawn se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous l’onglet **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. À l’intérieur, repère les paramètres suivants :

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```

- `SpawnGracePeriod` définit la durée pendant laquelle les joueurs peuvent spawn sans pénalités ni restrictions au début
- `AttackerRespawnTime` règle le délai de réapparition pour l’équipe attaquante
- `DefenderRespawnTime` règle le délai de réapparition pour l’équipe défensive

- `WaveSpawning` active ou désactive le spawn par vagues

- `WaveLegnth` définit la durée d’une vague de spawn
- `WaveBuildUpTime` contrôle le temps nécessaire pour que la vague soit complètement formée

Modifier ces valeurs te permet de choisir si les joueurs spawnent individuellement ou en vagues coordonnées, et à quelle vitesse ils peuvent revenir au combat.

Après avoir modifié le fichier `ServerConfiguration.ini`, sauvegarde-le et redémarre ton serveur. Le nouveau comportement de spawn sera appliqué automatiquement.

## Conclusion

Félicitations ! Tu as configuré avec succès les paramètres de spawn sur ton **serveur Over the Top WWI**. Ces ajustements te permettent d’affiner le rythme du gameplay et d’améliorer l’expérience globale des joueurs.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />