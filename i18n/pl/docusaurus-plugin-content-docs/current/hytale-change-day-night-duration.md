---
id: hytale-change-day-night-duration
title: "Hytale: Zmień czas trwania dnia/nocy"
description: "Dowiedz się, jak teleportować się między Światami na serwerze Hytale → Sprawdź teraz"
sidebar_label: Zmień czas trwania dnia/nocy
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Cykl dnia i nocy na serwerze Hytale określa, jak długo trwają fazy dzienne i nocne w świecie.  Dostosowując czas trwania tych cykli, właściciele serwerów mogą wpływać na tempo rozgrywki, atmosferę i poziom trudności.

Krótsze noce mogą stworzyć bardziej luźną atmosferę, podczas gdy dłuższe noce zwiększają wyzwanie i napięcie.  Personalizacja długości dnia i nocy pozwala dopasować świat do stylu gry, jaki chcesz zaoferować na swoim serwerze.

:::info Informacja o Wczesnym Dostępie

Hytale zostało wydane 13 stycznia 2026 i jest obecnie dostępne we Wczesnym Dostępie. Ponieważ gra jest wciąż w aktywnej fazie rozwoju, oprogramowanie serwera, pliki konfiguracyjne, wsparcie modów oraz procesy instalacji mogą się z czasem zmieniać.

:::

<InlineVoucher />

## Konfiguracja

Aby zmienić czas trwania dnia i nocy, musisz bezpośrednio edytować plik `config.json` świata, który znajduje się pod ścieżką:

```
/gXXXXXXX/hytale/universe/worlds/<world_name>/config.json
```

Jeśli wpisy konfiguracyjne dotyczące długości dnia i nocy jeszcze nie istnieją, musisz je dodać ręcznie. Przewiń plik, aż znajdziesz linię:

```
"GameplayConfig":
```

Bezpośrednio pod nią wstaw ustawienia czasu trwania dnia i nocy:

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

Te wartości określają długość dnia i nocy w sekundach. Na przykład wartość `1800` dla dnia oznacza dłuższą fazę dzienną, a `1000` dla nocy kontroluje, jak długo trwa noc, zanim cykl się zresetuje. Po wprowadzeniu zmian zapisz plik `config.json` i uruchom serwer ponownie.

## Podsumowanie

Po wykonaniu tej konfiguracji masz pełną kontrolę nad tym, jak długo trwa dzień i noc w każdym świecie na Twoim serwerze Hytale. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />