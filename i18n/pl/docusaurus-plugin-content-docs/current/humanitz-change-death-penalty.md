---
id: humanitz-change-death-penalty
title: "HumanitZ: Zmiana kary śmierci"
description: "Dowiedz się, jak dostosować ustawienia kary śmierci na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: Zmiana kary śmierci
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';



## Wprowadzenie

Kara śmierci w HumanitZ określa, co gracz traci po śmierci. W zależności od stylu gry na Twoim serwerze, możesz preferować bardziej wyrozumiałe przeżycie lub surowszy system, który podkręca napięcie i ryzyko. 

<InlineVoucher />



## Konfiguracja

Kara śmierci jest kontrolowana w pliku `GameServerSettings.ini`. Możesz uzyskać do niego dostęp w panelu zarządzania serwerem w zakładce **Konfiguracje**. W pliku konfiguracyjnym znajdź następujący parametr:

```
;0=Nie tracisz nic, 1=Tracisz plecak i broń w ręku, 2=Poprzednie + kieszenie i zawartość plecaka, 3=Wszystko poprzednie + wyposażenie
OnDeath=2
```

Wartość po `OnDeath=` określa, ile z ekwipunku gracza zostanie utracone po śmierci:

- `0` – Gracz nie traci nic  
- `1` – Gracz traci plecak i broń trzymaną w ręku  
- `2` – Poprzednie + kieszenie i zawartość plecaka  
- `3` – Wszystko poprzednie + wyposażenie  

Aby zmienić karę, po prostu ustaw odpowiednią wartość. Po edycji pliku zapisz zmiany i zrestartuj serwer, aby nowe ustawienia zaczęły działać.



## Podsumowanie

Gratulacje! Modyfikując wartość `OnDeath` w pliku `GameServerSettings.ini`, skutecznie skonfigurowałeś karę śmierci na swoim serwerze HumanitZ. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂



<InlineVoucher />