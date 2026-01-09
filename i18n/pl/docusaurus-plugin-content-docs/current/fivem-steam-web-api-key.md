---
id: fivem-steam-web-api-key
title: "FiveM: Konfiguracja Steam Web API Key"
description: "Dowiedz się, jak zdobyć i aktywować Steam Web API Key dla FiveM, aby umożliwić uwierzytelnianie i zwiększyć funkcjonalność serwera → Sprawdź teraz"
sidebar_label: Steam Web API Key
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Steam Web API Key ma kluczowe zastosowanie w FiveM. Umożliwia uwierzytelnianie przez API Key, gdy Steam jest używany jako identyfikator przez różne skrypty i/lub zasoby.

<InlineVoucher />

## Przygotowanie

Do uzyskania API key potrzebne jest konto Steam bez ograniczeń. Konta Steam z ograniczeniami mają ograniczony dostęp do funkcji Steam, więc bez pełnego dostępu nie da się wygenerować API key. Musisz wydać co najmniej **5,00 USD** w sklepie Steam, aby odblokować konto i jego funkcje.

## Jak zamówić API key

Gdy Twoje konto Steam jest gotowe, możesz zamówić własny Steam Web API Key. Zrób to, logując się [na stronie Steam](https://steamcommunity.com/dev/apikey) za pomocą nazwy konta i hasła Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Po zalogowaniu wpisz nazwę domeny, zaakceptuj warunki korzystania ze Steam Web API i kliknij **Register**. Jako domenę wpisz swój **adres IP serwera** *(bez portu)*.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Jeśli wszystko pójdzie dobrze, zobaczysz swój Steam Web API Key, tak jak na obrazku poniżej.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## Aktywacja API key

Mając już Steam Web API Key, musisz dodać go do pliku konfiguracyjnego serwera (`server.cfg`) na swoim serwerze gier FiveM. Wejdź do pliku `server.cfg` przez **panel administracyjny txAdmin** w zakładce **CFG Editor**. Znajdź istniejącą linię lub stwórz nową, jeśli jej nie ma, i dodaj poniższy wpis, zamieniając `YOUR_KEY_HERE` na swój klucz: 

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)



## Podsumowanie

Na koniec zrestartuj serwer. Twój Steam Web API Key zostanie załadowany przy następnym pełnym uruchomieniu serwera. Pomyślnie dodałeś Steam Web API Key do swojego serwera gier FiveM. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />