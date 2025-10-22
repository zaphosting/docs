---
id: assetto-competizione-slot-requirement
title: "Assetto Corsa Competizione: Wymagania dotyczące slotów samochodów"
description: "Dowiedz się, jak odblokować więcej niż 10 slotów w Assetto Corsa, spełniając kluczowe wymagania dla lepszej rozgrywki → Sprawdź teraz"
sidebar_label: Wymagania dotyczące slotów samochodów
services:
  - gameserver-assetto-competizione
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W Assetto Corsa można poprawnie używać 10 slotów bez żadnych dodatkowych modyfikacji. Jednak aby korzystać z więcej niż 10 slotów, trzeba spełnić pewne wymagania wstępne. Wymagania te ustawia się w zakładce "**Configs**", gdzie należy edytować plik "**settings.json**".

![](https://screensaver01.zap-hosting.com/index.php/s/QbA5ZaeFywt974J/preview)

<InlineVoucher />

## Przygotowanie i limity slotów

Aby używać więcej niż 10 slotów, wartości **"trackMedalsRequirement": X,** oraz **"safetyRatingRequirement": X,** muszą zostać odpowiednio dostosowane.  
Jak wysoko muszą być ustawione, można obliczyć za pomocą poniższego wzoru.  
Ten sam wzór można wykorzystać do wyliczenia pożądanych wartości trackMedalRequirement i safetyRatingRequirement.

```
Slots = safetyRating / 4 + trackMedals + 10 
```

### Lista możliwych kombinacji

Poniżej znajduje się lista możliwych kombinacji, które można zastosować, aby móc używać pożądaną liczbę slotów.  
Istnieje więcej niż jedno rozwiązanie, aby osiągnąć wymagania dotyczące slotów.  
Dlatego w tabeli pokazane są różne opcje.

:::info
Pamiętaj, że dla safetyRatingRequirement i trackMedalRequirement wpisano **minimalne** wymagania. Oczywiście można też hostować mniej slotów przy wyższych wartościach safetyRatingRequirement i trackMedalRequirement.
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