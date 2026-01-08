---
id: eco-whitelist
title: "ECO: Whitelist"
description: "Informacje o tym, jak dodać serwer ECO do whitelisty na ZAP-Hosting - Dokumentacja ZAP-Hosting.com"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to lista dostępu, która ogranicza, kto może połączyć się z Twoim serwerem. W ECO whitelist jest zapisana w pliku konfiguracyjnym `Users.eco` i aktywuje się automatycznie, gdy znajdzie się tam przynajmniej jeden SteamID64.

## Aktywacja Whitelisty

Połącz się z serwerem przez FTP i znajdź plik `Users.eco`. Otwórz go i znajdź sekcję `WhiteList`. Dodaj wartości SteamID64 wewnątrz `$values`.

```json
"WhiteList": {
  "System.String": {
"$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
"$values": [
  "76561198000000000"
]
  }
}
```

Zapisz plik i zrestartuj serwer, aby nowa lista dostępu została zastosowana.

## Zarządzanie Graczami na Whitelist

Dodawanie graczy możesz też zrobić przez Live Console w panelu zarządzania serwerem gier ZAP-Hosting, jeśli masz odpowiednie uprawnienia w grze. Użyj komendy whitelist z nazwą gracza.

```text
/whitelist PlayerName
```

Usuwanie graczy odbywa się przez edycję pliku `Users.eco`. Usuń SteamID64 z `$values`, zapisz plik i zrestartuj serwer, ponieważ nie ma komendy serwerowej do usuwania wpisów.

## Sprawdzanie Działania Whitelisty

Po restarcie spróbuj połączyć się kontem, które nie jest na liście `$values`. Dostęp powinien być zablokowany. Następnie połącz się kontem z whitelisty.

Jeśli dostęp nadal jest otwarty, upewnij się, że w pliku jest przynajmniej jeden SteamID64 i że edytowany plik `Users.eco` jest tym, który jest aktywny na serwerze.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, whitelist jest aktywna i możesz kontrolować, kto dokładnie może dołączyć do serwera. Jeśli dostęp nadal nie działa jak należy, zrestartuj serwer jeszcze raz i sprawdź plik lub wynik komendy, by potwierdzić, że zmiany zostały zastosowane.

<InlineVoucher />