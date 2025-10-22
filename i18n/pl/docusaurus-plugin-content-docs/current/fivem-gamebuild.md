---
id: fivem-gamebuild
title: "FiveM: Włącz zawartość DLC"
description: "Dowiedz się, jak wymusić konkretne wersje DLC na swoim serwerze FiveM, aby mieć dostęp do najnowszych map, pojazdów i zawartości → Sprawdź teraz"
sidebar_label: Włącz build DLC
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Wymuszanie buildu gry pozwala na narzucenie konkretnej wersji DLC na Twój serwer, dzięki czemu możesz grać na najnowszych mapach, z ubraniami, pojazdami i wieloma innymi! 

<InlineVoucher />

## Dostępne buildy

Oto przegląd wszystkich dostępnych DLC i ich Build ID: 

| Build ID |        Nazwa Buildu        |
| :------: | :------------------------: |
|   2060   | Los Santos Summer Special  |
|   2189   |        Cayo Perico         |
|   2372   |         Tuner DLC          |
|   2545   |       The Contract         |
|   2699   | The Criminal Enterprises   |
|   2802   |   Los Santos Drug Wars     |
|   2944   |  San Andreas Mercenaries   |
|   3095   |       The Chop Shop        |
|   3258   |  Bottom Dollar Bounties    |
|   3407   |    Agents of Sabotage      |
|   3570   |        Money Fronts        |



## Włącz build

Aby korzystać z dodatkowej zawartości DLC, takiej jak Cayo Perico, Tuner DLC czy Los Santos Summer Special, musisz ustawić to w konfiguracji swojego serwera. Aby ustawić build DLC, otwórz swój panel txAdmin i przejdź do ustawień FXServer.

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

Teraz po prostu dodaj wybrany build gry w sekcji **Additional Arguments** za pomocą komendy set, zamieniając `BUILD_ID_CHOICE` na wybraną wartość z tabeli:

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## Podsumowanie

Po wybraniu buildu, zrestartuj swój serwer FiveM. Twój serwer uruchomi się teraz z określonym buildem DLC. Pomyślnie ustawiłeś build gry dla swojego serwera gier FiveM. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />