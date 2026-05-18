---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI : Configurer les Bots"
description: "Apprends à configurer les paramètres des bots sur ton serveur Over the Top WWI → Découvre-en plus maintenant"
sidebar_label: Bots
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les bots peuvent être utilisés sur un **serveur de jeux Over the Top WWI** pour remplir les slots vides, simuler des batailles à grande échelle, et maintenir l’activité même avec peu de joueurs. En ajustant les paramètres des bots, tu peux contrôler la difficulté, le comportement, et l’intensité globale des parties.

Cela te permet de créer tout, depuis de petites escarmouches contrôlées jusqu’à de grandes batailles chaotiques avec de nombreuses unités contrôlées par l’IA.

<InlineVoucher />

## Configuration

Les paramètres des bots se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier de configuration `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```

- `AttackerBots` définit le nombre de bots dans l’équipe attaquante  
- `DefenderBots` définit le nombre de bots dans l’équipe défensive  
- `AutoAssignBots` répartit automatiquement les bots entre les équipes  
- `0` → Désactivé  
- `1` → Activé  

- `BotCallinMulti` contrôle la fréquence d’apparition ou de renfort des bots  
- `SubBotForPlayer` remplace les bots par de vrais joueurs quand ils rejoignent  
- `1` → Activé  
- `0` → Désactivé  

### Configuration avancée des bots

Tu peux personnaliser encore plus le comportement des bots avec ces paramètres supplémentaires :

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```

Ces valeurs contrôlent la fréquence de sélection de certains types d’unités quand les bots sont générés. Augmenter une valeur fera apparaître plus de bots de ce type dans les parties.

### Paramètres de vague et d’échelle

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```

- `WaveLegnth` contrôle la durée d’une vague de bots  
- `WaveBuildUpTime` définit le temps nécessaire pour que la vague soit complètement formée  
- `AutoAssignBotsScaleMulti` ajuste le nombre de bots en fonction du nombre de joueurs  

Après avoir modifié le fichier `ServerConfiguration.ini`, sauvegarde-le et redémarre ton serveur. Les nouveaux paramètres des bots seront appliqués pendant le jeu.

## Conclusion

Félicitations ! Tu as configuré avec succès les bots sur ton **serveur de jeux Over the Top WWI**. Ajuster ces paramètres te permet de contrôler l’intensité des parties, d’améliorer l’expérience des joueurs, et de garder ton serveur actif en permanence.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />