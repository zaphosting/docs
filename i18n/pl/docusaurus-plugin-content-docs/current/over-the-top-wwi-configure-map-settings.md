---
id: over-the-top-wwi-configure-map-settings
title: "Over the Top WWI: Konfiguracja losowych ustawień mapy"
description: "Dowiedz się, jak skonfigurować losowe generowanie map na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Losowe Mapy
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Losowe ustawienia map w **Over the Top WWI** pozwalają na dynamiczne generowanie map z różnym terenem, roślinnością i elementami środowiskowymi. Dzięki temu możesz znacznie zwiększyć regrywalność i tworzyć unikalne pola bitew dla każdej rozgrywki.

Dostosowując te wartości, kontrolujesz rozmiar mapy, złożoność terenu oraz ilość obiektów takich jak lasy, skały czy budynki.

<InlineVoucher />

## Konfiguracja

Losowe ustawienia mapy konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. Wewnątrz pliku znajdź następujące parametry:

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

- `RandomMapSizee` definiuje ogólny rozmiar generowanej mapy  
- `RandomFields`, `RandomForests`, `RandomBush`, `RandomRocks` kontrolują ilość naturalnych elementów na mapie  
- `RandomCivBuildings` i `RandomMilBuildings` określają liczbę budynków cywilnych i wojskowych  
- `RandomSingleTrees` kontroluje rozmieszczenie pojedynczych drzew  
- `RandomNoiseSetting`, `RandomFrequency`, `RandomLacunarity` i `RandomPersistence` wpływają na generowanie i zróżnicowanie terenu  
- `RandomWaterHeight` definiuje poziom wody  
- `RandomMaxTerrainHeight` kontroluje wysokość terenu i ukształtowanie  
- `RandomDesert` decyduje, czy mogą pojawić się środowiska pustynne  

- `0` → Wyłączone  
- `1` → Włączone  
- `2` → Losowe  

Dostosuj te wartości, aby tworzyć różne typy map – od gęstych lasów, przez otwarte pola bitew, aż po zróżnicowane krajobrazy terenu.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Nowe ustawienia map zostaną zastosowane przy generowaniu losowej mapy.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś losowe ustawienia map na swoim **serwerze Over the Top WWI**. Dzięki temu możesz tworzyć unikalne i dynamiczne pola bitew, co zwiększa regrywalność i frajdę z gry.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />