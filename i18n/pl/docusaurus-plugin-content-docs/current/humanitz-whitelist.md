---
id: humanitz-whitelist
title: "HumanitZ: Zarządzanie whitelistą"
description: "Dowiedz się, jak zarządzać whitelistą i kontrolować dostęp do serwera na swoim serwerze HumanitZ → Sprawdź teraz"
sidebar_label: "Whitelist"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

Whitelist pozwala Ci dokładnie kontrolować, kto może dołączyć do Twojego serwera HumanitZ. Po włączeniu, tylko gracze, których Steam ID znajdują się na liście dozwolonych, będą mogli się połączyć.

<InlineVoucher />

## Konfiguracja

Funkcjonalność whitelisty jest kontrolowana w pliku `GameServerSettings.ini`. Możesz uzyskać do niego dostęp w panelu administracyjnym serwera w zakładce **Konfiguracje**. Aby włączyć tryb whitelisty, znajdź i ustaw następujący parametr:

```
OnlyAllowedPlayers=1
```

- `OnlyAllowedPlayers=1` – Włącza tryb whitelisty. Dołączają tylko gracze z listy.
- `OnlyAllowedPlayers=0` – Wyłącza tryb whitelisty. Każdy gracz może dołączyć.

Po włączeniu trybu whitelisty musisz ręcznie utworzyć plik whitelisty.

Połącz się z serwerem przez [FTP](gameserver-ftpaccess.md) używając swojego ulubionego klienta FTP. Po połączeniu przejdź do głównego katalogu serwera i stwórz nowy plik o nazwie `F_MVPAccess.txt`. W tym pliku wpisz po jednym **unikalnym Steam ID w każdej linii** dla każdego gracza, któremu chcesz pozwolić na dostęp.

```
76561198000000001
76561198000000002
```

Zapisz plik po dodaniu Steam ID.

## Monitorowanie aktywności graczy

HumanitZ udostępnia dodatkowe pliki do śledzenia połączeń graczy. `F_ConnectedPlayers.txt` pokazuje aktualnie połączonych graczy, a `PlayerConnectedLog.txt` rejestruje wszystkie połączenia i rozłączenia graczy, wraz z nazwą Steam i unikalnym Steam ID oraz znacznikiem czasu.

Te pliki są przydatne do identyfikacji Steam ID i monitorowania aktywności na serwerze. Po wprowadzeniu zmian w plikach whitelisty lub banów, zapisz pliki i zrestartuj serwer, aby zmiany zostały poprawnie zastosowane.

## Podsumowanie

Gratulacje! Włączając tryb whitelisty i zarządzając plikami `F_MVPAccess.txt` oraz `F_BannedPlayers.txt`, skutecznie skonfigurowałeś kontrolę dostępu na swoim serwerze HumanitZ.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />