---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI : Configurer les paramètres de carte aléatoire"
description: "Apprenez à configurer les paramètres de génération aléatoire de cartes sur votre serveur Over the Top WWI → En savoir plus maintenant"
sidebar_label: Cartes aléatoires
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les paramètres de carte aléatoire dans **Over the Top WWI** vous permettent de générer dynamiquement des cartes avec différents terrains, végétations et caractéristiques environnementales. Cela peut considérablement augmenter la rejouabilité et créer des champs de bataille uniques pour chaque partie.

En ajustant ces valeurs, vous pouvez contrôler la taille de la carte, la complexité du terrain, ainsi que la quantité d’objets comme les forêts, rochers ou bâtiments.

<InlineVoucher />

## Configuration

Les paramètres de carte aléatoire se configurent dans le fichier de configuration du serveur. Vous pouvez accéder et modifier ce fichier dans votre **panneau de contrôle du serveur de jeux** sous **Configs**. Trouvez et ouvrez le fichier de configuration `ServerConfiguration.ini`. À l’intérieur, repérez les paramètres suivants :

```
RandomMapSizee = 450
RandomFields = 8.25
RandomCivBuildings = 0
RandomMilBuildings = 0
RandomForests = 8.5
RandomSingleTrees = 1.1
RandomBush = 5
RandomRocks = 1.1
RandomNoiseSetting = 0
RandomWaterHeight = 12.25
RandomMaxTerrainHeight = 26
RandomFrequency = 5
RandomLacunarity = 3
RandomPersistence = 32
RandomDesert = 0
```

- `RandomMapSizee` définit la taille globale de la carte générée  
- `RandomFields`, `RandomForests`, `RandomBush`, `RandomRocks` contrôlent la quantité d’éléments naturels présents sur la carte  
- `RandomCivBuildings` et `RandomMilBuildings` définissent le nombre de structures civiles et militaires  
- `RandomSingleTrees` contrôle le placement des arbres isolés  
- `RandomNoiseSetting`, `RandomFrequency`, `RandomLacunarity` et `RandomPersistence` influencent la génération et la variation du terrain  
- `RandomWaterHeight` définit le niveau de l’eau  
- `RandomMaxTerrainHeight` contrôle l’élévation et la hauteur du terrain  
- `RandomDesert` détermine si des environnements désertiques peuvent apparaître  

- `0` → Désactivé  
- `1` → Activé  
- `2` → Aléatoire  

Ajustez ces valeurs pour créer différents types de cartes, allant de forêts denses à des champs de bataille ouverts ou des paysages variés.

Après avoir modifié le fichier `ServerConfiguration.ini`, sauvegardez-le et redémarrez votre serveur. Les nouveaux paramètres de carte seront appliqués lors de la génération d’une carte aléatoire.

## Conclusion

Félicitations ! Vous avez configuré avec succès les paramètres de carte aléatoire sur votre **serveur de jeux Over the Top WWI**. Cela vous permet de créer des champs de bataille uniques et dynamiques, améliorant la rejouabilité et l’expérience des joueurs.

Pour toute question ou assistance, n’hésitez pas à contacter notre équipe support, disponible tous les jours pour vous aider ! 🙂

<InlineVoucher />