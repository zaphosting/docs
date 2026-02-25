---
id: humanitz-change-save-interval
title: "HumanitZ: Zmień Interwał Zapisu"
description: "Dowiedz się, jak dostosować automatyczny interwał zapisu świata na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Zmień Interwał Zapisu"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Interwał zapisu określa, jak często Twój serwer HumanitZ automatycznie zapisuje stan świata. Regularne zapisywanie pomaga zapobiegać utracie danych w przypadku awarii lub nieoczekiwanego wyłączenia, natomiast dłuższe interwały mogą nieco zmniejszyć aktywność dysku.

<InlineVoucher />

## Konfiguracja

Interwał zapisu świata jest kontrolowany w pliku `GameServerSettings.ini`. Możesz uzyskać do niego dostęp w panelu zarządzania serwerem w zakładce **Konfiguracje**. W pliku konfiguracyjnym znajdź następujący parametr:

```
;The interval in seconds at which the server saves the world. Set to 0 to disable auto-saving.
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – Serwer zapisuje świat co 300 sekund (5 minut).  
- `SaveIntervalSec=0` – Wyłącza automatyczny zapis świata.  

Wartość jest podana w **sekundach**. Na przykład:

- `600` = 10 minut
- `900` = 15 minut

Jeśli chcesz zwiększyć interwał do 10 minut:

```
SaveIntervalSec=600
```

Po edycji pliku zapisz zmiany i zrestartuj serwer, aby nowe ustawienie zaczęło działać.

## Podsumowanie

Gratulacje! Modyfikując wartość `SaveIntervalSec` w pliku `GameServerSettings.ini`, pomyślnie dostosowałeś automatyczny interwał zapisu świata na swoim serwerze HumanitZ.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />