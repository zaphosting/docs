---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI: Konfiguracja Automatycznego Balansu Drużyn"
description: "Dowiedz się, jak skonfigurować automatyczny balans drużyn na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Automatyczny Balans Drużyn
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Balans drużyn to podstawa uczciwych i przyjemnych rozgrywek w **Over the Top WWI**. Bez odpowiedniego balansu jedna drużyna może zyskać znaczącą przewagę, co prowadzi do nierównej gry i słabszych wrażeń dla graczy.

System automatycznego balansu pomaga utrzymać fair play, automatycznie rozdzielając graczy między drużyny, gdy spełnione są określone warunki.

<InlineVoucher />

## Konfiguracja

Automatyczny balans drużyn konfiguruje się w pliku konfiguracyjnym serwera. Możesz go znaleźć i edytować w swoim **panelu zarządzania serwerem gier** w zakładce **Konfiguracje**. Odszukaj i otwórz plik `ServerConfiguration.ini`. W środku znajdź następujące parametry:

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` włącza lub wyłącza automatyczny balans drużyn

- `0` → Wyłączony  
- `1` → Włączony

- `TeamPercentsAutoBalance` definiuje pożądany rozkład drużyn. Przykład: `50` = równe wielkości drużyn  
- `AutoBalanceThreshold` określa, jak duża nierównowaga jest dozwolona, zanim zostanie wywołany balans  
- `MinAutoBalanceCount` definiuje minimalną liczbę graczy, od której automatyczny balans zaczyna działać  
- `LimitTeamSelection` ogranicza możliwość ręcznego wyboru drużyny przez graczy

- `0` → Brak ograniczeń  
- `1–3` → Ogranicza wybór drużyny w zależności od wartości

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. System automatycznego balansu będzie wtedy zarządzał rozdziałem drużyn automatycznie podczas meczów.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś automatyczny balans drużyn na swoim **serwerze Over the Top WWI**. Dzięki temu mecze będą bardziej wyrównane, a doświadczenia wszystkich graczy lepsze.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />