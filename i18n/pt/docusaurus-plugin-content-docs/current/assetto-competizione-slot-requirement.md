---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione: Pré-requisito para Slots de Carro"
description: "Descubra como desbloquear mais de 10 slots no Assetto Corsa cumprindo pré-requisitos chave para uma jogabilidade aprimorada → Saiba mais agora"
sidebar_label: Pré-requisito para Slots de Carro
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No Assetto Corsa, 10 slots podem ser usados normalmente sem nenhuma modificação adicional. Porém, para usar mais de 10 slots, certos pré-requisitos precisam ser cumpridos. Esses pré-requisitos são configurados em "**Configs**" e lá o arquivo "**settings.json**" deve ser editado.

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## Preparação e Limites de Slots

Para usar mais de 10 slots, os valores **"trackMedalsRequirement": X,** e **"safetyRatingRequirement": X,** precisam ser ajustados.  
O quão altos esses valores devem ser pode ser calculado pela seguinte fórmula.  
A mesma fórmula pode ser usada para calcular os valores desejados de trackMedalRequirement e safetyRatingRequirement.

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### Lista de combinações possíveis

A seguir, uma lista de combinações possíveis é exibida, que podem ser usadas para habilitar o número desejado de slots.  
Existem também mais de uma solução possível para alcançar o pré-requisito necessário para os slots.  
Por isso, as diferentes possibilidades também são mostradas na lista.

:::info
Note que para safetyRatingRequirement e trackMedalRequirement foram inseridos os pré-requisitos **mínimos**. É claro que também é possível hospedar menos slots com valores maiores para safetyRatingRequirement e trackMedalRequirement.
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