---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI : Configurer le temps et l’environnement"
description: "Apprends à ajuster l’heure et les paramètres environnementaux sur ton serveur Over the Top WWI → Découvre tout maintenant"
sidebar_label: Temps & Environnement
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Les réglages de temps et d’environnement dans **Over the Top WWI** influencent la visibilité, l’ambiance et les conditions de jeu globales. En ajustant ces valeurs, tu peux créer des batailles en plein jour, des scénarios plus sombres ou des environnements saisonniers variés.

Ces paramètres te permettent de personnaliser l’apparence et l’atmosphère de ton serveur pour renforcer l’immersion de tes joueurs.

<InlineVoucher />

## Configuration

Les réglages de temps et d’environnement se configurent dans le fichier de configuration du serveur. Tu peux accéder et modifier ce fichier dans ton **panneau de contrôle du serveur de jeux** sous **Configs**. Trouve et ouvre le fichier `ServerConfiguration.ini`. À l’intérieur, repère les paramètres suivants :

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```

- `TimeOfDay` définit l’heure en jeu
- `Season` contrôle la saison actuelle

- `0` → Par défaut
- `1` → Printemps
- `2` → Été
- `3` → Automne
- `4` → Hiver

- `TemperatureinCelcius` ajuste la température environnementale
- Cela peut influencer l’ambiance et les effets environnementaux

Ces réglages te permettent de créer différents scénarios, comme des batailles tôt le matin, des combats nocturnes ou des environnements saisonniers.

Après avoir modifié le fichier `ServerConfiguration.ini`, sauvegarde-le et redémarre ton serveur. Les nouveaux paramètres d’environnement seront appliqués automatiquement.

## Conclusion

Bravo ! Tu as configuré avec succès le temps et l’environnement sur ton **serveur Over the Top WWI**. Cela te permet de personnaliser l’ambiance et de créer des expériences de jeu uniques pour tes joueurs.

Pour toute question ou aide, n’hésite pas à contacter notre équipe support, disponible tous les jours pour t’aider ! 🙂

<InlineVoucher />