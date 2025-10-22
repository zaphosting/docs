---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione : Prérequis pour les Slots de Voiture"
description: "Découvrez comment débloquer plus de 10 slots dans Assetto Corsa en remplissant les prérequis clés pour une expérience de jeu améliorée → En savoir plus maintenant"
sidebar_label: Prérequis Slots de Voiture
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Dans Assetto Corsa, 10 slots peuvent être utilisés correctement sans aucune modification supplémentaire. Cependant, pour utiliser plus de 10 slots, certains prérequis doivent être remplis. Ces prérequis se trouvent dans "**Configs**" et c’est dans le fichier "**settings.json**" qu’il faut faire les modifications.

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## Préparation et Limites de Slots

Pour utiliser plus de 10 slots, les valeurs **"trackMedalsRequirement": X,** et **"safetyRatingRequirement": X,** doivent être ajustées.  
Le niveau auquel ces valeurs doivent être réglées peut être calculé avec la formule suivante.  
La même formule peut ensuite être utilisée pour calculer les valeurs souhaitées de trackMedalRequirement et safetyRatingRequirement.

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### Liste des combinaisons possibles

Voici une liste des combinaisons possibles qui peuvent être utilisées pour pouvoir utiliser le nombre de slots désiré.  
Il existe plus d’une solution possible pour atteindre le prérequis nécessaire de slots.  
C’est pourquoi différentes possibilités sont également affichées dans la liste.

:::info
Notez que pour safetyRatingRequirement et trackMedalRequirement, les prérequis **minimums** ont été indiqués. Il est bien sûr aussi possible d’héberger moins de slots avec des valeurs plus élevées pour safetyRatingRequirement et trackMedalRequirement.
:::

Slots | safetyRatingRequirement | trackMedalRequirement
-----|-------|---------
10-16 | 24 | 0
18 | 40 | 0
18 | 24 | 2
20 | 40 | 0
20 | 30 | 3
22 | 50 | 0
22 | 40 | 2
24 | 60 | 0
24 | 50 | 2
26 | 70 | 0
26 | 60 | 1
28 | 80 | 0
28 | 70 | 1
30 | 90 | 0
30 | 80 | 1

<InlineVoucher />