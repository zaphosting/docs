---
id: redm-server-customisation
title: "RedM: Personalizacja szczegółów serwera"
description: "Dowiedz się, jak spersonalizować nazwę serwera za pomocą kolorów i emoji, aby wyróżnić się na liście serwerów → Sprawdź teraz"
sidebar_label: Personalizacja szczegółów serwera
services:
  - gameserver-redm
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Chcesz spersonalizować swój serwer, aby wyświetlał niestandardowe informacje na liście serwerów? To proste! W tym poradniku nauczysz się, jak ustawić różne dostępne opcje personalizacji, które sprawią, że Twój serwer będzie się wyróżniał na liście!



<InlineVoucher />



## Niestandardowa nazwa serwera

### Kody kolorów

Masz do wyboru wiele kolorów, które możesz dodać do nazwy swojego serwera. Można je określić za pomocą prefiksu, gdy chcesz zmienić kolor. Listę dostępnych kolorów znajdziesz w tabeli poniżej.

:::info
Aby używać kolorów w nazwie serwera, musisz mieć ważną [subskrypcję Cfx.re](https://portal.cfx.re/subscriptions), która obejmuje tę funkcję. Jeśli ją masz, a mimo to nie działa, upewnij się, że ustawiłeś [Własny Klucz Licencyjny](redm-licensekey.md).
:::

Teraz możesz zmienić nazwę swojego serwera za pomocą jednej z trzech metod opisanych w sekcji dostępu do konfiguracji. Oto przykład użycia kolorów i efekt, jaki dają:
```
sv_hostname "^2ZAP-Hosting ^0| ^4Oficjalny Serwer Społeczności ^0- ^1Nadchodzą ^8wydarzenia^1!"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)



| Kod  | Kolor       | Kod Hex  |
| ---- | ----------- | -------- |
| ^0   | Biały       | #F0F0F0  |
| ^1   | Czerwony    | #F44336  |
| ^2   | Zielony     | #4CAF50  |
| ^3   | Żółty       | #FFEB3B  |
| ^4   | Niebieski   | #42A5F5  |
| ^5   | Jasnoniebieski | #03A9F4 |
| ^6   | Fioletowy   | #9C27B0  |
| ^7   | Biały       | #F0F0F0  |
| ^8   | Pomarańczowy| #FF5722  |
| ^9   | Szary       | #9E9E9E  |

### Emoji

RedM pozwala też na dodawanie emoji bezpośrednio do nazwy serwera. Wystarczy, że wstawisz dowolne emoji w parametr `sv_hostname` w konfiguracji serwera i będzie działać. Do tego nie potrzebujesz subskrypcji Cfx.re.



## Ustawianie szczegółów projektu

### Opis serwera

Ustawienie opisu serwera jest przydatne, by dać krótkie i konkretne info o Twoim serwerze. Możesz łatwo ustawić krótki opis projektu dla swojego serwera gier RedM, który wyświetli się obok nazwy serwera na liście. Oto przykład ustawienia opisu i efekt, jaki daje:

```
sets sv_projectDesc "Dołącz do naszego Discorda, aby być na bieżąco z wydarzeniami! discord.gg/zaphosting"
```

![](https://screensaver01.zap-hosting.com/index.php/s/F5TYfEGQkGjXger/preview)

### Tagowanie serwera

Ustawienie tagów serwera pomaga określić, czym jest Twój serwer, i pozwala potencjalnym graczom łatwiej go znaleźć, filtrując serwery według zainteresowań. Po ustawieniu tagów będą one widoczne na stronie Twojego serwera na liście i będą używane do filtrowania. Oto przykład ustawienia tagów i efekt, jaki dają:

```
sets tags "zap, zap-hosting, official, community, zap-community, zap-community-server"
```

![](https://screensaver01.zap-hosting.com/index.php/s/oS2Y3dbPZDFDJPj/preview)

### Inne szczegóły

Możesz też zmienić kilka innych szczegółów serwera według własnych preferencji.

#### Typ gry

Ustawienie parametru gametype zmienia to, co jest wyświetlane na stronie Twojego serwera na liście serwerów. Nie zmienia to jednak trybu gry na samym serwerze. Możesz zmienić gametype przez panel administracyjny serwera gier lub ustawiając tag:

```
sets gametype "Freeroam"
```

#### Język

Na koniec możesz zmienić język serwera, który jest wyświetlany na liście serwerów. Mamy [Poradnik Język / lokalizacja (flaga)](redm-locale.md) do ustawiania lokalizacji. Można to zrobić przez panel administracyjny serwera gier lub ustawiając tag:

```
sets locale "en-GB"
```

Listę wszystkich tagów lokalizacji znajdziesz w [tym źródle](https://github.com/TiagoDanin/Locale-Codes#locale-list) lub podobnych.



## Podsumowanie

Jeśli wykonałeś wszystkie kroki, to właśnie spersonalizowałeś swój serwer gier RedM. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />