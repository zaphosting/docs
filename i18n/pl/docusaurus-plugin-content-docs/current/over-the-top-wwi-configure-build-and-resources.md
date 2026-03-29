---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI: Konfiguracja punktów budowy i zasobów"
description: "Dowiedz się, jak skonfigurować punkty budowy, działa i limity zasobów na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Punkty budowy i zasoby
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Punkty budowy i ustawienia zasobów w **Over the Top WWI** kontrolują, ile struktur, umocnień i wyposażenia gracze mogą postawić podczas meczu. Te wartości mają bezpośredni wpływ na balans rozgrywki, szczególnie w trybach, gdzie budowanie i fortyfikacje odgrywają kluczową rolę.

Dzięki dostosowaniu tych ustawień możesz stworzyć bardziej defensywną rozgrywkę z rozbudowanymi umocnieniami lub ograniczyć zasoby, by mecze były szybsze i bardziej agresywne.

<InlineVoucher />

## Konfiguracja

Ustawienia punktów budowy i zasobów konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. W środku znajdziesz następujące parametry:

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` i `DefenderBuildPoints` określają, ile punktów budowy ma każda drużyna

- `AttackerCannonPoints` i `DefenderCannonPoints` kontrolują, ile dział lub jednostek artyleryjskich można postawić

- `SapperBPRegenAmount` definiuje, ile punktów budowy regeneruje się z czasem

- `SapperCannonPRegenAmount` kontroluje, jak szybko regenerują się punkty dział

- `SapperPropBPRegenTime` i `CannonPropPRegenTime` określają czas w sekundach między kolejnymi cyklami regeneracji

Dostosuj te wartości, aby kontrolować, ile struktur i umocnień gracze mogą tworzyć oraz jak szybko zasoby są uzupełniane podczas rozgrywki.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Zaktualizowane ustawienia zasobów zostaną zastosowane automatycznie.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś punkty budowy i ustawienia zasobów na swoim **serwerze gier Over the Top WWI**. Dzięki temu możesz kontrolować fortyfikacje, balansować rozgrywkę i kształtować ogólne doświadczenie bitewne.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />