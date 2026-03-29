---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI : Configurer la météo"
description: "Apprends à configurer les paramètres météo sur ton serveur Over the Top WWI → Découvre-en plus maintenant"
sidebar_label: Météo
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les paramètres météo dans **Over the Top WWI** ont un impact direct sur le gameplay, la visibilité et l’ambiance. En ajustant ces valeurs, tu peux créer des conditions claires pour un combat équilibré ou introduire des environnements plus difficiles comme le brouillard, la pluie ou les tempêtes.

Les configurations météo personnalisées te permettent de façonner l’expérience globale et de rendre les parties plus dynamiques ou immersives.

<InlineVoucher />

## Configuration

Les paramètres météo se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier de configuration `ServerConfiguration.ini`. Dans ce fichier, repère les paramètres suivants :

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` active ou désactive les changements météo dynamiques

- `0` → Désactivé
- `1` → Activé

- `CurrentWeather` définit le type de météo actuel

- `0` → Clair
- `1` → Pluie
- `2` → Brouillard
- `3` → Neige
- Ajoute `+3` pour des versions plus intenses

- `CloudCoverage` contrôle la couverture nuageuse du ciel

- Des valeurs plus basses donnent un ciel plus dégagé
- Des valeurs plus élevées augmentent la densité des nuages

- `TimeToChangeWeather` définit la fréquence des changements météo en secondes

- `TimeToChangeClouds` contrôle la fréquence de mise à jour des conditions nuageuses

Paramètres supplémentaires pour l’environnement :

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` contrôle la force du vent qui influence le gameplay
- `WindDirection` définit la direction du vent
- `ChanceOfLightningOccuring` règle la probabilité d’apparition des éclairs
- `LightningTimer` contrôle la fréquence d’apparition des éclairs
- `CanLightningKill` détermine si les éclairs peuvent blesser les joueurs

Après avoir modifié le fichier `ServerConfiguration.ini`, sauvegarde-le et redémarre ton serveur. Les nouveaux paramètres météo seront appliqués automatiquement.

## Conclusion

Bravo ! Tu as configuré avec succès les paramètres météo sur ton **serveur Over the Top WWI**. Ajuster ces valeurs te permet de créer des environnements dynamiques et d’améliorer l’expérience de jeu pour tes joueurs.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’assister ! 🙂

<InlineVoucher />