---
id: terraria-whitelist
title: "Terraria: Whitelist"
description: "Informacje o tym, jak dodać serwer Terraria do whitelisty na ZAP-Hosting → Sprawdź teraz"
sidebar_label: Whitelist
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to lista dostępu, która ogranicza, kto może dołączyć do Twojego serwera. W przypadku hostingu Terraria popularnym sposobem na whitelistę jest uruchomienie serwera TShock i włączenie funkcji whitelisty, którą zarządza się przez plik whitelisty i komendy.

<InlineVoucher />

## Aktywacja Whitelisty

Połącz się z serwerem przez FTP i upewnij się, że serwer działa na TShock. Następnie znajdź plik konfiguracyjny TShock `tshock/config.json` i włącz ustawienie whitelisty:

```
"EnableWhitelist": true
```

Zapisz plik i zrestartuj serwer. TShock będzie teraz wymagać zatwierdzenia na whitelistę dla nadchodzących połączeń.

## Zarządzanie Graczami na Whitelistcie

Aby dodać wpis, otwórz Live Console w panelu zarządzania serwerem gier ZAP-Hosting i użyj komendy whitelist z adresem IP gracza.

```text
whitelist 203.0.113.25
```

TShock przechowuje listę w pliku `tshock/whitelist.txt`. Aby usunąć wpis, połącz się przez FTP, otwórz ten plik, usuń linię z danym IP, zapisz i zrestartuj serwer.

```txt
203.0.113.25
198.51.100.10
```

## Sprawdzanie Działania Whitelisty

Po restarcie spróbuj połączyć się z adresu IP, który nie jest na liście. Dostęp powinien być zablokowany. Następnie połącz się z adresem IP, który jest na whitelistcie.

Jeśli gracze nadal mogą dołączać bez bycia na liście, sprawdź ponownie, czy `EnableWhitelist` jest ustawione na true w `config.json` oraz czy serwer faktycznie uruchomił się jako TShock.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja whitelist jest aktywna i możesz dokładnie kontrolować, kto może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer jeszcze raz i sprawdź plik lub wynik komendy, aby potwierdzić, że zmiana została zastosowana.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂



<InlineVoucher />