---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ: Włącz/Wyłącz Powiadomienia o Śmierci"
description: "Dowiedz się, jak włączyć lub wyłączyć powiadomienia o śmierci graczy na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Włącz/Wyłącz Powiadomienia o Śmierci"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Powiadomienia o śmierci informują graczy, gdy ktoś na serwerze zginie. Może to być przydatne do śledzenia aktywności, ale niektóre serwery wolą bardziej immersyjne lub konkurencyjne doświadczenie bez publicznych komunikatów o śmierci.

HumanitZ pozwala na włączenie lub wyłączenie powiadomień o śmierci graczy bezpośrednio przez plik konfiguracyjny serwera.

<InlineVoucher />

## Konfiguracja

Ustawienia powiadomień o śmierci kontroluje się w pliku `GameServerSettings.ini`. Możesz uzyskać do niego dostęp w panelu zarządzania serwerem w zakładce **Konfiguracje**.  
W pliku konfiguracyjnym znajdź następujący parametr:

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – Wyłącza powiadomienia o śmierci dla zwykłych graczy. Administratorzy nadal je widzą.  
- `NoDeathFeedback=false` – Włącza powiadomienia o śmierci dla wszystkich graczy.

Jeśli chcesz, aby powiadomienia o śmierci były widoczne dla wszystkich, ustaw wartość na:

```
NoDeathFeedback=false
```

Po edycji pliku zapisz zmiany i zrestartuj serwer, aby nowe ustawienie zaczęło działać.

## Podsumowanie

Gratulacje! Modyfikując wartość `NoDeathFeedback` w pliku `GameServerSettings.ini`, pomyślnie skonfigurowałeś powiadomienia o śmierci na swoim serwerze HumanitZ. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />