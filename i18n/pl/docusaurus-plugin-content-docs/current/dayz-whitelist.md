---
id: dayz-whitelist
title: "DayZ: Whitelist"
description: "Informacje o tym, jak dodać serwer DayZ do whitelisty na ZAP-Hosting → Dowiedz się więcej"
sidebar_label: Whitelist
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to lista dostępu, która ogranicza, kto może dołączyć do Twojego serwera. DayZ ma wbudowany tryb whitelisty, który możesz włączyć i zarządzać nim dla poszczególnych graczy.

<InlineVoucher />


## Aktywacja Whitelisty

Połącz się z serwerem przez FTP i otwórz główny plik konfiguracyjny `serverDZ.cfg`. Znajdź ustawienie whitelisty i włącz je.

```cfg
enableWhitelist = 1;
```

Następnie znajdź lub utwórz plik whitelisty, który udostępnia Twój hosting, zwykle nazywa się `whitelist.txt` i znajduje się obok plików konfiguracyjnych serwera. Dodaj po jednym SteamID64 w każdej linii.

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

Zapisz wszystkie pliki i zrestartuj serwer, aby whitelist została zastosowana.

## Zarządzanie Graczami na Whitelistcie

Aby dodać gracza, dopisz jego SteamID64 do `whitelist.txt`, zapisz plik i zrestartuj serwer. Aby usunąć gracza, usuń jego linię z `whitelist.txt`, zapisz i zrestartuj serwer.

Utrzymuj plik w czystości, z jednym ID na linię. Komentarze nie są powszechnie obsługiwane, więc unikaj dodatkowego tekstu w tej samej linii, chyba że potwierdziłeś, że Twój serwer to akceptuje.

## Sprawdzanie Działania Whitelisty

Po restarcie spróbuj połączyć się kontem, które nie jest na liście w `whitelist.txt`. Dostęp powinien zostać zablokowany. Następnie połącz się kontem z listy, aby potwierdzić, że działa.

Jeśli gracze z listy nie mogą dołączyć, sprawdź, czy użyłeś wartości SteamID64 i czy serwer ładuje ten sam plik `whitelist.txt`, który edytowałeś.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, whitelist jest aktywna i możesz kontrolować, kto dokładnie może dołączyć do serwera. Jeśli dostęp nadal nie działa jak należy, zrestartuj serwer jeszcze raz i sprawdź plik lub wyjście komend, aby potwierdzić, że zmiana została zastosowana.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />