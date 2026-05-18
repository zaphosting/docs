---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: Włącz/Wyłącz Permadeath"
description: "Dowiedz się, jak włączyć lub wyłączyć permadeath na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Włącz/Wyłącz Permadeath"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Permadeath znacznie podnosi poziom trudności i napięcia w rozgrywce survivalowej w HumanitZ. Po włączeniu, gracze tracą swojego bohatera na stałe po śmierci i muszą stworzyć nową postać. To ustawienie jest często stosowane na hardcore’owych lub wysokiego ryzyka serwerach survivalowych.

<InlineVoucher />

## Konfiguracja

Permadeath jest kontrolowany w pliku `GameServerSettings.ini`. Możesz uzyskać do niego dostęp w panelu zarządzania serwerem w zakładce **Konfiguracje**. W pliku konfiguracyjnym znajdź następujący parametr:

```
;When set to true the player that died will lose their character and have to create a new one
PermaDeath=false
```

- `PermaDeath=true` – Włącza permadeath. Gracze tracą postać na stałe po śmierci.  
- `PermaDeath=false` – Wyłącza permadeath. Gracze mogą respawnować się ze swoją istniejącą postacią.

Jeśli chcesz aktywować permadeath, zmień wartość na:

```
PermaDeath=true
```

Po edycji pliku zapisz zmiany i zrestartuj serwer, aby nowe ustawienie zaczęło działać.

## Podsumowanie

Gratulacje! Modyfikując wartość `PermaDeath` w pliku `GameServerSettings.ini`, pomyślnie włączyłeś lub wyłączyłeś permadeath na swoim serwerze HumanitZ. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />