---
id: hytale-change-day-night-duration
title: "Hytale : Modifier la durée du jour et de la nuit"
description: "Découvrez comment téléporter entre les Mondes sur un serveur Hytale → En savoir plus maintenant"
sidebar_label: Modifier la durée du jour et de la nuit
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Le cycle jour/nuit sur un serveur Hytale définit la durée des phases de jour et de nuit dans un monde. En ajustant la durée de ces cycles, les propriétaires de serveur peuvent influencer le rythme du gameplay, l’ambiance et la difficulté.

Des nuits plus courtes peuvent créer une ambiance plus détendue, tandis que des nuits plus longues augmentent le challenge et la tension. Personnaliser la durée du jour et de la nuit vous permet d’adapter le monde au style de jeu voulu sur votre serveur.

:::info Avis Early Access

Hytale est sorti le 13 janvier 2026 et est actuellement disponible en Early Access. Comme le jeu est encore en phase de développement actif, les logiciels serveur, fichiers de configuration, support du modding et processus d’installation peuvent continuer à évoluer avec le temps.

:::

<InlineVoucher />

## Configuration

Pour modifier la durée du jour et de la nuit, il faut ajuster la configuration directement dans le fichier `config.json` du monde, situé ici : 

```
/gXXXXXXX/hytale/universe/worlds/<world_name>/config.json
```

Si les entrées de configuration pour la durée du jour et de la nuit n’existent pas encore, il faut les ajouter manuellement. Faites défiler le fichier jusqu’à trouver la ligne suivante :

```
"GameplayConfig":
```

Juste en dessous, insérez les paramètres de durée du jour et de la nuit :

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

Ces valeurs définissent la durée du jour et de la nuit en secondes. Par exemple, une valeur de `1800` pour le jour allonge la phase de jour, tandis que `1000` pour la nuit contrôle la durée de la nuit avant que le cycle ne recommence. Après avoir fait les modifications, sauvegardez le fichier `config.json` et redémarrez le serveur.

## Conclusion

Une fois cette configuration terminée, vous avez un contrôle total sur la durée du jour et de la nuit dans chaque monde de votre serveur Hytale. Pour toute question ou aide, n’hésitez pas à contacter notre support, disponible tous les jours pour vous aider ! 🙂


<InlineVoucher />