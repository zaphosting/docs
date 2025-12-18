---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione: Requisito per Slot Auto"
description: "Scopri come sbloccare più di 10 slot in Assetto Corsa soddisfacendo i requisiti chiave per un gameplay potenziato → Scopri di più ora"
sidebar_label: Requisito Slot Auto
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

In Assetto Corsa, puoi usare correttamente 10 slot senza ulteriori modifiche. Però, per usare più di 10 slot, devi soddisfare alcuni requisiti. Questi requisiti si trovano sotto "**Configs**" e lì devi modificare il file "**settings.json**".

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## Preparazione e Limiti degli Slot

Per usare più di 10 slot, i valori **"trackMedalsRequirement": X,** e **"safetyRatingRequirement": X,** devono essere regolati.
Quanto devono essere alti si calcola con questa formula. 
La stessa formula può essere usata per calcolare i valori desiderati di trackMedalRequirement e safetyRatingRequirement.

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### Lista delle combinazioni possibili

Qui sotto trovi una lista di combinazioni possibili per poter usare il numero di slot desiderato.
Ci sono più soluzioni per raggiungere il requisito necessario per gli slot.
Per questo motivo, nella lista sono mostrate diverse opzioni.

:::info
Nota che per safetyRatingRequirement e trackMedalRequirement sono stati inseriti i requisiti **minimi**. Ovviamente puoi anche ospitare meno slot con valori più alti per safetyRatingRequirement e trackMedalRequirement.
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