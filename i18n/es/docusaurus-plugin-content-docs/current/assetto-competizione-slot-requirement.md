---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione: Requisito para Slots de Coches"
description: "Descubre cómo desbloquear más de 10 slots en Assetto Corsa cumpliendo los requisitos clave para una experiencia de juego mejorada → Aprende más ahora"
sidebar_label: Requisito para Slots de Coches
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En Assetto Corsa, se pueden usar correctamente 10 slots sin ninguna modificación adicional. Sin embargo, para usar más de 10 slots, se deben cumplir ciertos requisitos previos. Estos requisitos se configuran en "**Configs**" y dentro de ahí se debe editar el archivo "**settings.json**".

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## Preparación y Límites de Slots

Para usar más de 10 slots, los valores **"trackMedalsRequirement": X,** y **"safetyRatingRequirement": X,** deben ajustarse.
Cuánto deben ser ajustados se puede calcular con la siguiente fórmula. 
La misma fórmula se puede usar para calcular los valores deseados de trackMedalRequirement y safetyRatingRequirement.

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### Lista de combinaciones posibles

A continuación, se muestra una lista de combinaciones posibles que se pueden usar para poder utilizar el número deseado de slots.
También hay más de una solución posible para lograr el requisito necesario de slots.
Por esta razón, las diferentes posibilidades también se muestran en la lista.

:::info
Ten en cuenta que para safetyRatingRequirement y trackMedalRequirement se han ingresado los requisitos **mínimos**. Por supuesto, también es posible alojar menos slots con valores más altos para safetyRatingRequirement y trackMedalRequirement.
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