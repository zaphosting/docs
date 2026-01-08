---
id: starmade-whitelist
title: "StarMade: Whitelist"
description: "Informacje o tym, jak dodać serwer StarMade do whitelisty na ZAP-Hosting → Dowiedz się więcej"
sidebar_label: Whitelist
services:
  - gameserver-starmade
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to lista dostępu, która ogranicza, kto może dołączyć do Twojego serwera. StarMade obsługuje wbudowaną whitelistę kontrolowaną w pliku `server.cfg` i uzupełnianą przez `whitelist.txt`.

<InlineVoucher />

## Aktywacja Whitelisty

Połącz się z serwerem przez FTP i otwórz `server.cfg`. Włącz uwierzytelnianie i whitelistę.

```cfg
USE_STARMADE_AUTHENTICATION=true
REQUIRE_STARMADE_AUTHENTICATION=true
USE_WHITELIST=true
```

Zapisz plik. Następnie otwórz lub stwórz `whitelist.txt` w tym samym katalogu serwera. Dodaj graczy w formacie używanym przez StarMade, po jednym wpisie w każdej linii.

```txt
act:-1:PlayerName
act:-1:AnotherPlayer
```

Zrestartuj serwer, aby załadować zaktualizowaną whitelistę.

## Zarządzanie Graczami na Whitelistcie

Aby dodać gracza, dopisz nową linię do `whitelist.txt` w tym samym formacie, zapisz i zrestartuj serwer. Aby usunąć gracza, usuń jego linię z `whitelist.txt`, zapisz i zrestartuj serwer.

Jeśli nazwy zawierają znaki specjalne, używaj dokładnej nazwy z gry, tak jak pojawia się przy logowaniu, aby uniknąć niezgodności.

## Sprawdzanie Działania Whitelisty

Po restarcie spróbuj połączyć się kontem, które nie znajduje się w `whitelist.txt`. Dostęp powinien być zablokowany. Następnie połącz się z nazwą gracza znajdującą się na liście.

Jeśli gracze z listy nie mogą dołączyć, upewnij się, że uwierzytelnianie StarMade jest włączone i wymagane, inaczej nazwy mogą się nie zgadzać.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja whitelist jest aktywna i możesz kontrolować, kto dokładnie może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer jeszcze raz i sprawdź plik lub wyjście polecenia, aby potwierdzić, że zmiana została zastosowana.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />