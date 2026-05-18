---
id: humanitz-change-day-night-length
title: "HumanitZ: Zmień Długość Dnia i Nocy"
description: "Dowiedz się, jak dostosować czas trwania dnia i nocy na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Zmień Długość Dnia i Nocy"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Cykl dnia i nocy w HumanitZ bezpośrednio wpływa na rozgrywkę, widoczność, trudność przetrwania oraz tempo gry. Krótsze dni mogą stworzyć bardziej intensywne doświadczenie survivalowe, podczas gdy dłuższe okresy światła dziennego dają graczom więcej czasu na eksplorację, budowanie i zbieranie surowców.

<InlineVoucher />

## Konfiguracja

Czas trwania dnia i nocy jest kontrolowany w pliku `GameServerSettings.ini`. Możesz uzyskać do niego dostęp w panelu zarządzania serwerem w zakładce **Konfiguracje**. W pliku konfiguracyjnym znajdź następujące parametry:

```
;Czas trwania dnia w minutach
DayDur=40
;Czas trwania nocy w minutach
NightDur=20
```

Wartości podane są w minutach:

- `DayDur` – Określa, jak długo trwa dzień  
- `NightDur` – Określa, jak długo trwa noc  

Aby zmienić długość cyklu, po prostu dostosuj liczby do swoich preferencji. Przykład na dłuższe dni i krótsze noce:

```
DayDur=60
NightDur=15
```

Po edycji pliku zapisz zmiany i zrestartuj serwer, aby nowe ustawienia zaczęły działać.

## Podsumowanie

Gratulacje! Modyfikując wartości `DayDur` i `NightDur` w pliku `GameServerSettings.ini`, pomyślnie dostosowałeś cykl dnia i nocy na swoim serwerze HumanitZ. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />