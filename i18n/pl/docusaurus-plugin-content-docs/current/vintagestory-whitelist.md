---
id: vintagestory-whitelist
title: "Vintage Story: Whitelist"
description: "Informacje o tym, jak dodać serwer Vintage Story do whitelisty na ZAP-Hosting → Dowiedz się więcej"
sidebar_label: Whitelist
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to lista dostępu, która ogranicza, kto może dołączyć do Twojego serwera. Vintage Story ma wbudowany tryb whitelisty, który możesz włączyć i przełączać dla poszczególnych graczy.

<InlineVoucher />


## Aktywacja Whitelisty

Otwórz konsolę w grze i ustaw tryb whitelisty w konfiguracji serwera. Użyj wartości 1 dla whitelistmode, aby zezwolić tylko na graczy znajdujących się na liście.

```text
/serverconfig whitelistmode 1
```

Po włączeniu trybu zrestartuj serwer, aby ustawienie zostało zapisane i poprawnie zastosowane przy starcie.

## Zarządzanie Graczami na Whitelistcie

Aby dodać gracza, dodaj go do whitelisty za pomocą komendy dla gracza.

```text
/player PlayerName whitelist on
```

Aby odebrać dostęp, wyłącz whitelistę dla tego gracza.

```text
/player PlayerName whitelist off
```

Jeśli chcesz sprawdzić aktualne ustawienie serwera, wyświetl konfigurację serwera lub uruchom komendę whitelistmode bez zmiany innych wartości i upewnij się, że jest ustawiona na 1.

## Sprawdzanie Działania Whitelisty

Spróbuj połączyć się jako gracz, który nie jest na whitelistcie. Połączenie powinno zostać odrzucone. Następnie połącz się jako gracz, dla którego ustawiłeś `whitelist on`.

Jeśli wszyscy nadal mogą dołączyć, upewnij się, że `whitelistmode` jest ustawione na 1 i że wykonałeś komendy na właściwym serwerze.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja whitelist jest aktywna i możesz dokładnie kontrolować, kto może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer i ponownie sprawdź plik lub wynik komendy, aby potwierdzić, że zmiana została zastosowana.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />