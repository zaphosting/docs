---
id: rust-whitelist
title: "Rust: Whitelist"
description: "Informacje o tym, jak ustawić whitelistę na serwerze Rust od ZAP-Hosting → Dowiedz się więcej już teraz"
sidebar_label: Whitelist
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to mechanizm kontroli dostępu, który ogranicza, kto może dołączyć do Twojego serwera. Serwery dedykowane Rust nie mają wbudowanej funkcji whitelisty, więc popularnym rozwiązaniem stosowanym przez hostingi jest instalacja uMod Oxide oraz pluginu whitelist, który blokuje połączenia, chyba że gracz jest wyraźnie dozwolony.

<InlineVoucher />


## Aktywacja Whitelisty

Połącz się z serwerem przez FTP i zainstaluj uMod Oxide, jeśli jeszcze go nie ma. Po instalacji uMod, wrzuć plik pluginu whitelist `Whitelist.cs` do folderu plugins, zwykle `oxide/plugins/Whitelist.cs`.

Gdy plugin jest już na miejscu, zrestartuj serwer lub przeładuj pluginy, aby został załadowany. Plugin whitelist zwykle działa na zasadzie wymogu posiadania konkretnego uprawnienia, zanim gracz będzie mógł się połączyć.

## Zarządzanie Graczami na Whitelistcie

Otwórz Live Console w panelu zarządzania serwerem gier ZAP-Hosting i nadaj uprawnienie whitelist graczowi, używając jego SteamID64.

```text
oxide.grant user 76561198000000000 whitelist.allow
```

Aby cofnąć dostęp, usuń to uprawnienie.

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

Aby sprawdzić, jakie uprawnienia ma dany użytkownik, wyświetl jego uprawnienia.

```text
oxide.show user 76561198000000000
```

## Sprawdzenie Działania Whitelisty

Spróbuj połączyć się kontem, które nie ma uprawnienia whitelist. Plugin powinien zablokować połączenie. Następnie połącz się kontem, któremu nadałeś `whitelist.allow`, aby potwierdzić dostęp.

Jeśli wszyscy nadal mogą dołączyć, upewnij się, że plugin jest załadowany i uMod działa. Najpewniejszym sposobem, by mieć pewność, że plugin jest aktywny, jest restart serwera po wrzuceniu pluginu.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja whitelist jest aktywna i możesz dokładnie kontrolować, kto może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer jeszcze raz i sprawdź pliki lub wyjście komend, by potwierdzić, że zmiany zostały zastosowane.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />