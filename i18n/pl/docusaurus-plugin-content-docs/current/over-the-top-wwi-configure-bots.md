---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI: Konfiguracja botów"
description: "Dowiedz się, jak skonfigurować ustawienia botów na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Boty
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Boty na serwerze **Over the Top WWI** mogą wypełniać puste miejsca, symulować wielkie bitwy i utrzymywać aktywność nawet przy niskiej liczbie graczy. Poprzez dostosowanie ustawień botów, możesz kontrolować ich trudność, zachowanie oraz ogólną intensywność rozgrywki.

Dzięki temu stworzysz wszystko – od małych, kontrolowanych potyczek po duże, chaotyczne bitwy z wieloma jednostkami sterowanymi przez AI.

<InlineVoucher />

## Konfiguracja

Ustawienia botów konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. W tym pliku znajdź następujące parametry:

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```

- `AttackerBots` określa liczbę botów w drużynie atakującej
- `DefenderBots` określa liczbę botów w drużynie broniącej
- `AutoAssignBots` automatycznie rozdziela boty między drużyny
- `0` → Wyłączone
- `1` → Włączone

- `BotCallinMulti` kontroluje, jak często boty są pojawiane lub wzmacniane
- `SubBotForPlayer` zastępuje boty prawdziwymi graczami, gdy dołączają
- `1` → Włączone
- `0` → Wyłączone

### Zaawansowana konfiguracja botów

Możesz dodatkowo dostosować zachowanie botów za pomocą poniższych parametrów:

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```

Te wartości kontrolują, jak często wybierane są określone typy jednostek podczas pojawiania się botów. Zwiększenie wartości spowoduje pojawienie się większej liczby botów danego typu w meczach.

### Ustawienia fal i skalowania

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```

- `WaveLegnth` kontroluje, jak długo trwa fala botów
- `WaveBuildUpTime` definiuje czas potrzebny na pełne zbudowanie fali
- `AutoAssignBotsScaleMulti` skaluje liczbę botów w zależności od liczby graczy

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Nowe ustawienia botów zostaną zastosowane podczas rozgrywki.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś boty na swoim **serwerze Over the Top WWI**. Dostosowanie tych ustawień pozwala kontrolować intensywność meczów, poprawić doświadczenie graczy i utrzymać aktywność serwera przez cały czas.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />