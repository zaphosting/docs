---
id: over-the-top-wwi-configure-voice-chat
title: "Over the Top WWI: Konfiguracja czatu głosowego"
description: "Dowiedz się, jak włączyć i skonfigurować czat głosowy na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Czat głosowy
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Czat głosowy pozwala graczom na Twoim **serwerze gier Over the Top WWI** na bezpośrednią komunikację podczas rozgrywki. Dzięki temu poprawisz koordynację, współpracę i ogólne zanurzenie w grze, zwłaszcza w taktycznych sytuacjach.

Konfigurując ustawienia czatu głosowego, możesz kontrolować, czy komunikacja jest dozwolona, dostosować jakość oraz określić, jak czat głosowy działa podczas meczów.

<InlineVoucher />

## Konfiguracja

Ustawienia czatu głosowego konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. Wewnątrz tego pliku znajdź następujące parametry:

```
VoipAllowed = 1
VoipQuality = 0
VoipDelay = 0
```

- `VoipAllowed` włącza lub wyłącza czat głosowy na serwerze
- `VoipQuality` kontroluje poziom jakości dźwięku
- `VoipDelay` dodaje opóźnienie w sekundach, zanim gracze będą mogli korzystać z czatu głosowego po respawnie

Dostosuj te wartości w zależności od preferencji serwera i wymagań wydajnościowych. Niższe ustawienia jakości mogą być korzystne na serwerach z dużą liczbą graczy lub ograniczoną przepustowością.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Ustawienia czatu głosowego zostaną wtedy automatycznie zastosowane.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś czat głosowy na swoim **serwerze gier Over the Top WWI**. Dzięki temu gracze mogą skutecznie się komunikować, co zwiększa współpracę podczas meczów.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />