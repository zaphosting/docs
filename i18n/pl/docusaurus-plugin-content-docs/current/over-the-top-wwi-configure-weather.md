---
id: over-the-top-wwi-configure-weather
title: "Over the Top WWI: Konfiguracja Pogody"
description: "Dowiedz się, jak skonfigurować ustawienia pogody na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Pogoda
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ustawienia pogody w **Over the Top WWI** mają bezpośredni wpływ na rozgrywkę, widoczność i klimat. Dzięki ich dostosowaniu możesz stworzyć jasne warunki do zrównoważonych walk lub wprowadzić wymagające środowiska, takie jak mgła, deszcz czy burze.

Własne konfiguracje pogody pozwalają kształtować ogólne doświadczenie i uczynić mecze bardziej dynamicznymi lub immersyjnymi.

<InlineVoucher />

## Konfiguracja

Ustawienia pogody konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. Wewnątrz tego pliku znajdź następujące parametry:

```
EnableRandomWeather = 1
CurrentWeather = 0
CloudCoverage = 20
TimeToChangeWeather = 180
TimeToChangeClouds = 180
```

- `EnableRandomWeather` włącza lub wyłącza dynamiczne zmiany pogody

- `0` → Wyłączone
- `1` → Włączone

- `CurrentWeather` definiuje aktualny typ pogody

- `0` → Czysta
- `1` → Deszcz
- `2` → Mgła
- `3` → Śnieg
- Dodaj `+3` dla bardziej intensywnych wersji

- `CloudCoverage` kontroluje, jak bardzo niebo jest pokryte chmurami

- Niższe wartości oznaczają jaśniejsze niebo
- Wyższe wartości zwiększają gęstość chmur

- `TimeToChangeWeather` określa, jak często zmienia się pogoda w sekundach

- `TimeToChangeClouds` kontroluje, jak często aktualizują się warunki chmur

Dodatkowe ustawienia środowiska:

```
WindStrength = 2
WindDirection = 0
ChanceOfLightningOccuring = 100
LightningTimer = 6
CanLightningKill = 1
```

- `WindStrength` kontroluje siłę wiatru wpływającą na rozgrywkę
- `WindDirection` definiuje kierunek wiatru
- `ChanceOfLightningOccuring` ustala prawdopodobieństwo wystąpienia błyskawic
- `LightningTimer` kontroluje częstotliwość pojawiania się błyskawic
- `CanLightningKill` określa, czy błyskawice mogą zadać obrażenia graczom

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Nowe ustawienia pogody zostaną zastosowane automatycznie.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś ustawienia pogody na swoim **serwerze gier Over the Top WWI**. Dostosowanie tych wartości pozwala tworzyć dynamiczne środowiska i wzbogacić doświadczenie rozgrywki dla Twoich graczy.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />