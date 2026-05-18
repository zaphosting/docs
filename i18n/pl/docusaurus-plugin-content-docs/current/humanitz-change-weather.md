---
id: humanitz-change-weather
title: "HumanitZ: Zmiana Pogody"
description: "Dowiedz się, jak edytować i dostosować częstotliwość oraz typy pogody na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Zmiana Pogody"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Wzorce pogodowe wpływają na rozgrywkę survivalową, widoczność oraz atmosferę świata w HumanitZ. Niezależnie od tego, czy chcesz spokojniejsze środowisko z przeważnie czystym niebem, czy surowszy świat z częstymi burzami i zamieciami, dostosowanie ustawień pogody pozwala kontrolować, jak często występują różne typy pogody.

<InlineVoucher />

## Konfiguracja

Ustawienia pogody kontroluje się w pliku `GameServerSettings.ini`. Możesz uzyskać do niego dostęp w panelu administracyjnym swojego serwera w zakładce **Konfiguracje**. W pliku konfiguracyjnym znajdź następujące parametry:

```
;Poniżej możesz dostosować szanse wystąpienia każdego typu pogody. Aktualna pora roku nadal decyduje, które typy pogody mogą się pojawić.
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=1
Weather_Thunderstorm=1
Weather_LightSnow=1
Weather_Snow=1
Weather_Blizzard=1
```

Każde ustawienie reprezentuje **względne prawdopodobieństwo** wystąpienia danego typu pogody. Wyższe wartości zwiększają szansę, że dany typ pogody zostanie wybrany podczas generowania pogody, a niższe ją zmniejszają.

Na przykład:

- Ustawienie `Weather_ClearSky=3` zwiększa szansę na czyste niebo w porównaniu do innych typów pogody  
- Ustawienie `Weather_Blizzard=0` skutecznie wyłącza pojawianie się zamieci (chyba że logika pory roku wymusi inaczej)



### Spokojna Pogoda

Ten przykład faworyzuje spokojną pogodę i redukuje surowe warunki:

```
Weather_ClearSky=3
Weather_Cloudy=2
Weather_Foggy=1
Weather_LightRain=1
Weather_Rain=0
Weather_Thunderstorm=0
Weather_LightSnow=1
Weather_Snow=0
Weather_Blizzard=0
```



### Surowa Pogoda

Ten przykład zwiększa szanse na surową i dynamiczną pogodę:

```
Weather_ClearSky=1
Weather_Cloudy=1
Weather_Foggy=2
Weather_LightRain=2
Weather_Rain=3
Weather_Thunderstorm=2
Weather_LightSnow=1
Weather_Snow=2
Weather_Blizzard=2
```

Po edycji pliku zapisz zmiany i zrestartuj serwer, aby nowe ustawienia pogody zaczęły działać.



## Podsumowanie

Gratulacje! Poprzez dostosowanie wartości częstotliwości pogody w pliku `GameServerSettings.ini` skutecznie spersonalizowałeś zachowanie pogody na swoim serwerze HumanitZ. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />