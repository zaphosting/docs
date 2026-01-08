---
id: terraria-whitelist
title: "Terraria: Whitelist"
description: "Informacje o tym, jak dodać serwer Terraria do whitelisty na ZAP-Hosting → Dowiedz się więcej"
sidebar_label: Whitelist
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to lista dostępu, która ogranicza, kto może dołączyć do Twojego serwera. W przypadku hostingu Terraria popularnym rozwiązaniem jest uruchomienie serwera TShock i włączenie funkcji whitelisty, którą zarządza się przez plik whitelisty i komendy.

<InlineVoucher />

## Aktywacja Whitelisty

Połącz się z serwerem przez FTP i upewnij się, że działa na nim TShock. Następnie znajdź plik konfiguracyjny TShock `tshock/config.json` i włącz opcję whitelisty:

```
"EnableWhitelist": true
```

Zapisz plik i zrestartuj serwer. Teraz TShock będzie wymagać zatwierdzenia na whitelistę dla nadchodzących połączeń.

## Zarządzanie graczami na Whitelistcie

Aby dodać wpis, otwórz Live Console w panelu zarządzania serwerem gier ZAP-Hosting i użyj komendy whitelist z adresem IP gracza.

```text
whitelist 203.0.113.25
```

TShock przechowuje listę w pliku `tshock/whitelist.txt`. Aby usunąć wpis, połącz się przez FTP, otwórz ten plik, usuń linię z danym IP, zapisz i zrestartuj serwer.

```txt
203.0.113.25
198.51.100.10
```

## Sprawdzanie działania Whitelisty

Po restarcie spróbuj połączyć się z adresu IP, który nie jest na liście. Dostęp powinien być zablokowany. Następnie połącz się z IP, które jest na whitelistcie.

Jeśli gracze nadal mogą dołączać bez wpisu na liście, sprawdź ponownie, czy `EnableWhitelist` jest ustawione na true w `config.json` oraz czy serwer faktycznie uruchomił się jako TShock.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja whitelist jest aktywna i możesz kontrolować, kto dokładnie może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer jeszcze raz i sprawdź plik lub wyjście komendy, aby potwierdzić, że zmiana została zastosowana.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂



<InlineVoucher />