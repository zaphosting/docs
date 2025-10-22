---
id: fivem-esx-addcarstoshop
title: "FiveM: Dodawanie samochodów do sklepu"
description: "Dowiedz się, jak zarządzać i dodawać pojazdy do bazy danych, aby spersonalizować swój sklep z autami → Sprawdź teraz"
sidebar_label: Dodaj Samochody do Dealera
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Dostęp do bazy danych

Na początek musimy połączyć się z naszą bazą danych. Robimy to w zakładce "Bazy danych"

![](https://screensaver01.zap-hosting.com/index.php/s/8NYJC6Qq5inG5yk/preview)

Klikamy tam na niebieską ikonę i logujemy się danymi, które znajdziemy również na stronie.

![](https://screensaver01.zap-hosting.com/index.php/s/XK5CLoeckxxHk8w/preview)

## Znajdź nazwy spawnów

Następnie musimy poznać nazwę spawn auta. Możemy to zrobić, testując różne opcje lub przeglądając tę stronę:
https://wiki.gtanet.work/index.php?title=Vehicle_Models

## Dodaj nowy pojazd

Gdy wybierzemy auto, możemy dodać je do listy.

:::info
Domyślnie w sklepie jest już dużo samochodów. Sprawdź, czy Twoje auto nie jest już na liście.
:::

Najpierw sprawdzamy kategorie samochodów, żeby wiedzieć, które możemy dodać.
Robimy to w tabeli "vehicle_categories"

![](https://screensaver01.zap-hosting.com/index.php/s/PYSt6anrdXs8QLY/preview)

Potrzebujemy kolumny "name". Zapamiętujemy ją.


![](https://screensaver01.zap-hosting.com/index.php/s/CnrQJcGbf3SPdtg/preview)

Następnie przechodzimy do tabeli "vehicles".
Klikamy Insert


![](https://screensaver01.zap-hosting.com/index.php/s/eN5x9o724a6tKwf/preview)

Teraz dodajemy nowy pojazd. Krótkie wyjaśnienie, co oznacza co:

**name** Nazwa wyświetlana w sklepie  
**model** Nazwa spawn (upewnij się, że jest napisana małymi literami)  
**price** Cena pojazdu  
**category** Kategoria, którą właśnie wybraliśmy  

Mam dla Was mały przykład:


![](https://screensaver01.zap-hosting.com/index.php/s/cFrrLYKTALmCnFP/preview)

<InlineVoucher />