---
id: eco-whitelist
title: "ECO: Aktywacja Whitelist"
description: "Dowiedz się, jak zabezpieczyć swój serwer, zarządzając dostępem graczy za pomocą funkcji whitelist w ECO → Sprawdź teraz"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Whitelist w ECO pozwala zabezpieczyć serwer, dopuszczając do niego tylko wybranych graczy znajdujących się na liście.

<InlineVoucher />

### Aktywacja (Konfiguracja)

Aktywacja whitelist odbywa się automatycznie. Staje się aktywna, gdy na liście znajdzie się przynajmniej jeden gracz. Gracze muszą zostać dodani do pliku konfiguracyjnego **Users.eco**.

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



Pole **$values** zawiera SteamID graczy, którzy mają zostać dodani do whitelisty. Znajdziesz je, otwierając najpierw swój profil Steam, a następnie klikając prawym przyciskiem myszy gdziekolwiek w profilu. Możesz tam skopiować URL profilu Steam.



![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)


Następnie otwórz jedną z poniższych stron i wklej tam URL swojego profilu:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/


![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

Strony te pokażą Ci ogólne informacje oraz Steam ID Twojego konta. Potrzebujemy tylko SteamID64. SteamID64 wpisujesz w pole **$values**. Wygląda to tak:

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "kolejneSteamID"      
      ]
    }
```



### Aktywacja (Chat)

Alternatywnie możesz dodać graczy do whitelisty z uprawnieniami administratora w grze. Dodawanie graczy do whitelisty odbywa się przez chat/konsolę za pomocą komendy:

```
/whitelist [gracz]
```



## Zarządzanie Whitelistą

Zarządzanie whitelistą możliwe jest tylko w pliku konfiguracyjnym **Users.eco**, ponieważ nie ma komendy serwerowej do usunięcia gracza z whitelisty. Jeśli chcesz usunąć gracza, wystarczy, że usuniesz go z pliku konfiguracyjnego. Po zmianie konieczny jest restart serwera, aby zmiany weszły w życie.

<InlineVoucher />