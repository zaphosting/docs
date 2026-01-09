---
id: redm-steam-web-api-key
title: "RedM: Konfiguracja Steam Web API Key"
description: "Dowiedz się, jak zdobyć i aktywować Steam Web API Key dla RedM, aby umożliwić uwierzytelnianie i ulepszyć konfigurację serwera → Sprawdź teraz"
sidebar_label: Steam Web API Key
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Steam Web API Key ma kluczowe zastosowanie w RedM. Umożliwia uwierzytelnianie za pomocą klucza API, gdy Steam jest używany jako identyfikator przez różne skrypty i/lub zasoby.

<InlineVoucher />

## Przygotowanie

Do uzyskania klucza API potrzebne jest konto Steam bez ograniczeń. Konta Steam z ograniczeniami mają ograniczony dostęp do funkcji Steam, więc bez pełnego dostępu nie da się wygenerować klucza API. Musisz wydać co najmniej **5,00 USD** w sklepie Steam, aby odblokować konto i jego funkcje.

## Jak uzyskać klucz API

Gdy Twoje konto Steam jest gotowe, możesz poprosić o własny Steam Web API Key. Zrób to, logując się [na stronie Steam](https://steamcommunity.com/dev/apikey) za pomocą nazwy konta i hasła Steam.

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

Po zalogowaniu wpisz nazwę domeny, zaakceptuj warunki korzystania z Steam Web API i kliknij przycisk **Register**. Domenę ustaw na **adres IP serwera** *(bez portu)*, więc wpisz tam swój adres IP.

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

Jeśli wszystko pójdzie dobrze, zobaczysz swój Steam Web API Key, jak na obrazku poniżej.

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## Aktywacja klucza API

Mając już Steam Web API Key, musisz dodać go do pliku konfiguracyjnego serwera (`server.cfg`) na swoim serwerze gier RedM. Możesz edytować `server.cfg` przez **panel txAdmin** w zakładce **CFG Editor**. Znajdź istniejącą linię lub dodaj nową, jeśli jej nie ma, i wklej poniższe, zamieniając `YOUR_KEY_HERE` na swój klucz:

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/Rw48iY5FGCfP5s9/preview)

## Podsumowanie

Na koniec zrestartuj serwer. Twój Steam Web API Key zostanie załadowany przy następnym pełnym uruchomieniu serwera. Pomyślnie dodałeś Steam Web API Key do swojego serwera gier RedM. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />