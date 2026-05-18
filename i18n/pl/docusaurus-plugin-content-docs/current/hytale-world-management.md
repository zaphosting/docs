---
id: hytale-world-management
title: "Hytale: Zarządzanie Światami"
description: "Dowiedz się, jak zabezpieczyć swój serwer Hytale, zarządzając dostępem graczy za pomocą funkcji whitelist i chronić swoją rozgrywkę → Sprawdź teraz"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Zarządzanie światami na serwerze Hytale polega na kontrolowaniu trwałego środowiska gry, w którym gracze eksplorują, budują i wchodzą w interakcje. Świat obejmuje wszystkie dane terenu, budowle, postępy graczy oraz ustawienia definiujące wspólne doświadczenie. Możliwość tworzenia, zmieniania nazwy, resetowania czy organizowania światów to kluczowa część utrzymania serwera zarówno dla prywatnych, jak i publicznych społeczności.

:::info Informacja o Wczesnym Dostępie

Hytale został wydany 13 stycznia 2026 i jest obecnie dostępny we Wczesnym Dostępie. Ponieważ gra jest nadal w aktywnej fazie rozwoju, oprogramowanie serwera, pliki konfiguracyjne, wsparcie modów oraz procesy instalacji mogą się z czasem zmieniać.

:::

## Tworzenie nowego świata

Stworzenie nowego świata daje Twojemu serwerowi świeże środowisko do generowania terenu, budowli i postępów w rozgrywce od podstaw. Korzystając z konsoli na żywo, światy można tworzyć lub przełączać, wydając odpowiednie komendy związane ze światem.  
Gdy podasz nazwę nowego świata, serwer załaduje istniejący świat o tej nazwie lub wygeneruje nowy, jeśli nie znajdzie pasujących danych.

```
/world create <worldname>
```

Ta komenda tworzy nowy świat o nazwie `<worldname>`. Jeśli nie ma istniejących danych dla tej nazwy, serwer wygeneruje świeże środowisko świata.

## Ustawienie świata jako domyślnego

Konkretny świat można oznaczyć jako domyślny, aby był automatycznie ładowany przy starcie serwera. Ustawienie domyślnego świata jest przydatne, gdy istnieje wiele światów, a jeden z nich ma być zawsze głównym środowiskiem.

Korzystając z konsoli na żywo, domyślny świat można zmienić bez ręcznej edycji plików konfiguracyjnych. Po ustawieniu serwer będzie priorytetowo ładował ten świat przy następnym restarcie.

```
/world setdefault <worldname>
```

Ta komenda ustawia świat o nazwie `mainworld` jako domyślny. Po restarcie serwera ten świat zostanie automatycznie załadowany.

## Usunięcie istniejącego świata

Oprócz tworzenia i ładowania światów, konsola na żywo pozwala też usuwać istniejące światy z serwera. Jest to przydatne, gdy przestarzałe, nieużywane lub testowe światy nie są już potrzebne. Usunięcie świata powoduje skasowanie powiązanych z nim danych ze serwera. Ta operacja jest nieodwracalna, chyba że posiadasz kopię zapasową.

```
/world remove <worldname>
```

Ta komenda usuwa świat o nazwie `worldname` z serwera. Jeśli świat jest aktualnie aktywny, musi zostać najpierw wyładowany, inaczej serwer może odrzucić komendę w zależności od implementacji.

## Podsumowanie

Zarządzanie światami przez konsolę na żywo to szybki i elastyczny sposób kontroli aktywnego środowiska na serwerze Hytale. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂