---
id: over-the-top-wwi-configure-poll-system
title: "Over the Top WWI: Konfiguracja systemu głosowania"
description: "Dowiedz się, jak skonfigurować ustawienia głosowania i ankiet na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: System głosowania
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

System głosowania w **Over the Top WWI** pozwala graczom głosować nad różnymi akcjami, takimi jak wyrzucanie graczy, zmiana map czy modyfikacja ustawień rozgrywki. Ta funkcja poprawia interakcję w społeczności i zmniejsza potrzebę ciągłej ingerencji adminów.

Dzięki konfiguracji ustawień głosowania możesz kontrolować, które typy głosowań są dozwolone i jak zachowują się podczas gry.

<InlineVoucher />

## Konfiguracja

System głosowania konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. W środku znajdź następujące parametry:

```
PollPercentThresh = 51
EnableBanPlayerPoll = 0
EnableKickPlayerPoll = 0
EnableChangeMapsPoll = 0
EnableMutePlayerPoll = 0
EnableCustomPoll = 1
ChangeMapImmediately = 1
```

- `PollPercentThresh` definiuje procent głosów potrzebnych do zatwierdzenia ankiety
- `EnableBanPlayerPoll` pozwala graczom głosować za banowaniem innych
- `EnableKickPlayerPoll` pozwala graczom głosować za wyrzuceniem innych
- `EnableChangeMapsPoll` pozwala graczom głosować za zmianą mapy
- `EnableMutePlayerPoll` pozwala graczom głosować za wyciszeniem innych
- `EnableCustomPoll` włącza niestandardowe opcje głosowania
- `ChangeMapImmediately` decyduje, czy zatwierdzona zmiana mapy następuje natychmiast

Dozwolone tryby gry w ankietach:

```
PollBattle = 1
PollTDM = 1
PollConquest = 1
PollSiege = 1
PollKingoftheHill = 1
PollConvoyAmbush = 1
PollCaptureTheFlag = 1
PollCommanderBattle = 1
```

Te ustawienia określają, które tryby gry mogą być wybierane podczas głosowań.

- `1` → Włączone
- `0` → Wyłączone

Możesz wyłączyć konkretne tryby, aby ograniczyć opcje głosowania i utrzymać spójną rozgrywkę.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Zaktualizowane ustawienia głosowania zostaną automatycznie zastosowane.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś system głosowania na swoim **serwerze gier Over the Top WWI**. Dzięki temu gracze mogą brać udział w podejmowaniu decyzji, a zarządzanie serwerem staje się bardziej zautomatyzowane.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />