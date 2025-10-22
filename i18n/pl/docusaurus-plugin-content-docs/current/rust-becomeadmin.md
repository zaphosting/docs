---
id: rust-becomeadmin
title: "Rust: Zostań administratorem na swoim serwerze"
description: "Dowiedz się, jak przyznać uprawnienia administratora, aby mieć pełną kontrolę nad serwerem i skutecznie zarządzać swoją grą → Sprawdź teraz"
sidebar_label: Zostań adminem
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Przyznanie uprawnień administratora pozwala na prostą i kompleksową administrację z pełną kontrolą nad Twoim serwerem. Jako administrator masz możliwość korzystania ze wszystkich dostępnych opcji i funkcji oferowanych przez grę bezpośrednio w grze. Poniżej znajdziesz wszystkie kroki, które musisz wykonać, aby przyznać uprawnienia administratora na swoim serwerze.  
<InlineVoucher />

## Jak zostać adminem przez RCON

Dzięki RCON możesz wykonać komendę bezpośrednio, aby nadać sobie uprawnienia admina.  
Najpierw musisz się [połączyć przez RCON](rust-connectrcon.md).

Po połączeniu przejdź do miejsca, gdzie możesz wpisywać komendy konsoli. W naszym przykładzie używamy RustAdmin.

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

Tutaj wpisujesz odpowiednią komendę:  
`ownerid Steam64ID`

:::info
Zamień **Steam64ID** na swój rzeczywisty steam64 ID. Możesz go znaleźć za pomocą tego [narzędzia](https://steamid.io/)
:::

Po wpisaniu komendy zostaniesz od razu administratorem.

:::info
Jeśli jesteś w grze podczas wpisywania komendy, po prostu wyloguj się i zaloguj ponownie na serwer.
:::

I gotowe, jesteś teraz administratorem! :)

## Jak zostać adminem przez FTP

Alternatywnie możesz przyznać sobie uprawnienia admina bezpośrednio przez FTP.  
Najpierw połącz się korzystając z [dostępu FTP](gameserver-ftpaccess.md).

Po udanym połączeniu przejdź do następującego katalogu:

`/g#####/rust/server/<twoje_zapisane_stan_serwera>/cfg`

W tym folderze musisz **utworzyć** **nowy plik** o nazwie **users.cfg**

W tym pliku dodaj swoje wpisy w formacie:

`<rola> <Steam64ID> <powód/użytkownik>`

:::info
Zamień **Steam64ID** na swój rzeczywisty steam64 ID. Możesz go znaleźć za pomocą tego [narzędzia](https://steamid.io/)
:::

Przykładowy wpis wygląda tak:

```
ownerid 76561198114248380 "Możesz tu wpisać dowolną notatkę"
moderatorid 76561198114248380 "Testowa osoba"
```
:::info
Musisz zrestartować serwer, aby zmiany zaczęły działać.
:::

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś uprawnienia administratora. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />