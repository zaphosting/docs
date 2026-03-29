---
id: over-the-top-wwi-configure-map-rotation-rules
title: "Over the Top WWI: Konfiguracja reguł rotacji map"
description: "Dowiedz się, jak skonfigurować zachowanie rotacji map na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Rotacja map
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Reguły rotacji map w **Over the Top WWI** określają, jak mapy są wybierane i rozgrywane w zależności od liczby graczy. Dzięki temu mapy pozostają zbalansowane i dopasowane do aktywnej liczby graczy.

Konfigurując te ustawienia, zapobiegasz sytuacjom, w których duże mapy są rozgrywane przy zbyt małej liczbie graczy lub małe mapy stają się przepełnione.

<InlineVoucher />

## Konfiguracja

Reguły rotacji map konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik konfiguracyjny `ServerConfiguration.ini`. W tym pliku znajdź następujący parametr:


EnableMinMaxPlayersPerMapCheck = False


- `EnableMinMaxPlayersPerMapCheck` włącza lub wyłącza automatyczny wybór mapy na podstawie liczby graczy

  - `False` → Wyłączone
  - `True` → Włączone


Po włączeniu serwer będzie sprawdzał aktualną liczbę graczy i odpowiednio dostosowywał wybór mapy. Dzięki temu mapy są wybierane w odpowiednim zakresie, co pomaga utrzymać zbalansowaną rozgrywkę.

System korzysta z wewnętrznych progów, aby określić, czy mapa jest odpowiednia, zapobiegając sytuacjom, w których duże mapy są niedostatecznie zaludnione lub małe mapy są przepełnione.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Zaktualizowane zachowanie rotacji map zostanie zastosowane automatycznie.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś reguły rotacji map na swoim **serwerze Over the Top WWI**. Dzięki temu rozgrywka jest bardziej zbalansowana, dopasowując rozmiar mapy do liczby graczy.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />