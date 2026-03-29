---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI: Konfiguracja Friendly Fire"
description: "Dowiedz się, jak włączyć lub dostosować ustawienia friendly fire na swoim serwerze Over the Top WWI → Sprawdź teraz"
sidebar_label: Friendly Fire
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Friendly fire określa, czy gracze mogą zadawać obrażenia swoim własnym sojusznikom podczas rozgrywki. Dostosowanie tych ustawień pozwala Ci kontrolować, jak realistyczna lub wyrozumiała ma być walka na Twoim **serwerze gier Over the Top WWI**.

Włączenie friendly fire zwiększa realizm i taktyczność rozgrywki, natomiast wyłączenie lub zmniejszenie go tworzy bardziej casualowe i przystępne doświadczenie.

<InlineVoucher />

## Konfiguracja

Ustawienia friendly fire konfiguruje się w pliku konfiguracyjnym serwera. Możesz uzyskać do niego dostęp i edytować go w swoim **panelu administracyjnym serwera gier** w zakładce **Konfiguracje**. Znajdź i otwórz plik `ServerConfiguration.ini`. Wewnątrz tego pliku znajdź następujące parametry:

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire` włącza lub wyłącza obrażenia w zwarciu zadawane sojusznikom.
- `EnableFriendlyRangeFire` włącza lub wyłącza obrażenia na dystans zadawane sojusznikom.
- `FriendlyFireAtRoundStart` definiuje opóźnienie w sekundach, zanim friendly fire stanie się aktywne.
- `FriendlyFirePercent` kontroluje, ile obrażeń w zwarciu jest zadawane sojusznikom.
- `RangeFriendlyFirePercent` kontroluje, ile obrażeń na dystans jest zadawane sojusznikom.
- `ExplosionFf` włącza lub wyłącza obrażenia wybuchowe zadawane sojusznikom.
- `FriendlyFireReflectPercent` odbija procent obrażeń z powrotem do atakującego zamiast do sojusznika.

Po zmianie pliku `ServerConfiguration.ini` zapisz go i zrestartuj serwer. Nowe ustawienia friendly fire zostaną zastosowane od razu.

## Podsumowanie

Gratulacje! Pomyślnie skonfigurowałeś ustawienia friendly fire na swoim **serwerze gier Over the Top WWI**. Dostosowanie tych wartości pozwala Ci wyważyć realizm i doświadczenie rozgrywki dla Twojej społeczności.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />