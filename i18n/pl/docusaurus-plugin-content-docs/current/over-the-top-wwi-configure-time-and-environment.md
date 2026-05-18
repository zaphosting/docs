---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI: Konfiguracja czasu i środowiska"
description: "Dowiedz się, jak dostosować porę dnia i ustawienia środowiska na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Czas i środowisko
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Ustawienia czasu i środowiska w **Over the Top WWI** wpływają na widoczność, atmosferę i ogólne warunki rozgrywki. Dzięki ich modyfikacji możesz stworzyć jasne bitwy w ciągu dnia, mroczniejsze scenariusze lub różnorodne sezonowe klimaty.

Te ustawienia pozwalają spersonalizować wygląd i klimat Twojego serwera oraz zwiększyć immersję dla graczy.

<InlineVoucher />

## Konfiguracja

Ustawienia czasu i środowiska konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w **panelu zarządzania serwerem gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. W środku znajdziesz następujące parametry:

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```

- `TimeOfDay` definiuje godzinę w grze
- `Season` kontroluje aktualną porę roku

- `0` → Domyślna
- `1` → Wiosna
- `2` → Lato
- `3` → Jesień
- `4` → Zima

- `TemperatureinCelcius` reguluje temperaturę środowiska
- Może wpływać na atmosferę i efekty środowiskowe

Dzięki tym ustawieniom możesz tworzyć różne scenariusze, takie jak bitwy o świcie, nocne walki czy sezonowe klimaty.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Nowe ustawienia środowiska zostaną automatycznie zastosowane.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś czas i ustawienia środowiska na swoim **serwerze Over the Top WWI**. Teraz możesz dostosować atmosferę i tworzyć unikalne doświadczenia dla swoich graczy.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />