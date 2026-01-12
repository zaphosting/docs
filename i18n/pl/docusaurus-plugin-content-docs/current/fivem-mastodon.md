---
id: fivem-mastodon
title: "FiveM: Konfiguracja kanału aktywności za pomocą Mastodon"
description: "Dowiedz się, jak zintegrować kanał aktywności Mastodon na swoim serwerze, aby mieć aktualizacje w czasie rzeczywistym i lepszą interakcję z społecznością → Sprawdź teraz"
sidebar_label: Konfiguracja kanału aktywności
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Wprowadzenie

Kanał aktywności pomaga na bieżąco informować graczy bezpośrednio na Twoim serwerze FiveM. Dzięki połączeniu konta Mastodon, aktualizacje serwera, ogłoszenia i krótkie wiadomości mogą być wyświetlane w czasie rzeczywistym, bez konieczności sprawdzania zewnętrznych platform.

Ta integracja tworzy przejrzysty kanał komunikacji między serwerem a społecznością, zapewniając, że ważne informacje są zawsze widoczne w jednym, centralnym miejscu.

## Przygotowanie

Przed konfiguracją kanału aktywności potrzebne jest konto Mastodon. To konto będzie używane do publikowania aktualizacji, które później pojawią się na serwerze.

Jeśli jeszcze nie masz konta, zarejestruj się na wybranej instancji [Mastodon](https://joinmastodon.org/). Po rejestracji upewnij się, że profil jest dostępny i gotowy do publikowania aktualizacji, ponieważ te posty będą wyświetlane w kanale aktywności.



## Konfiguracja

Otwórz swój profil Mastodon i skopiuj pełną nazwę użytkownika.  
Nazwa użytkownika zwykle ma format:

```
username@instance.domain
```

W tym przykładzie nazwa użytkownika to `zaphosting@mstdn.instance`. Następnie przejdź do sekcji **Configs** swojego serwera FiveM i edytuj plik `server.cfg`. Przewiń na sam dół pliku i dodaj następującą linię:

```
sets activitypubFeed username
```

Zamień `username` na swoją nazwę użytkownika Mastodon.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Zapisz plik i zrestartuj serwer. Po restarcie może minąć do 20 minut, zanim kanał aktywności stanie się dostępny. Gdy będzie aktywny, pojawi się nowa zakładka **Feed** podczas otwierania serwera, pokazująca posty z powiązanego konta Mastodon.



## Podsumowanie

Po skonfigurowaniu kanału aktywności, aktualizacje i ogłoszenia serwera są wyświetlane bezpośrednio graczom w przejrzysty i łatwo dostępny sposób. To rozwiązanie zwiększa przejrzystość, wzmacnia interakcję społeczności i zapewnia efektywną metodę dzielenia się nowościami bez konieczności korzystania z zewnętrznych linków czy platform.



W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂