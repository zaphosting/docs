---
id: projectzomboid-whitelist
title: "Project Zomboid: Whitelist"
description: "Informacje o tym, jak dodać serwer Project Zomboid do whitelisty na ZAP-Hosting → Dowiedz się więcej"
sidebar_label: Whitelist
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to tryb kontroli dostępu, który wymaga, abyś najpierw ręcznie utworzył konta użytkowników, zanim będą mogli dołączyć. W Project Zomboid najczęściej robi się to przez wyłączenie otwartej rejestracji w konfiguracji serwera, a następnie dodanie użytkowników za pomocą komend konsoli.

<InlineVoucher />


## Aktywacja Whitelisty

Połącz się z serwerem przez FTP i otwórz plik konfiguracyjny serwera. Zazwyczaj znajdziesz go w `Zomboid/Server/` i będzie nazwany tak jak Twój serwer, np. `servertest.ini` lub `<ServerName>.ini`. Znajdź ustawienie `Open` i ustaw je na false.

```ini
Open=false
```

Zapisz plik i zrestartuj serwer. Po wyłączeniu otwartej rejestracji, do serwera będą mogli dołączyć tylko użytkownicy, których sam dodasz.

## Zarządzanie graczami na Whitelist

Otwórz Live Console w panelu zarządzania serwerem gier ZAP-Hosting i twórz konta dla dozwolonych graczy. Użyj komendy adduser z nazwą użytkownika i hasłem.

```text
/adduser "username" "password"
```

Aby odebrać dostęp użytkownikowi, usuń go z whitelisty za pomocą dedykowanej komendy.

```text
/removeuserfromwhitelist "username"
```

Jeśli wcześniej miałeś włączoną otwartą rejestrację i chcesz przekonwertować istniejące połączone konta na wpisy na whitelistę, użyj komendy, która doda wszystkich aktualnie połączonych użytkowników do whitelisty.

```text
/addalltowhitelist
```

## Sprawdzanie działania Whitelisty

Po aktywowaniu `Open=false` nowy użytkownik, który nie został dodany przez `/adduser`, nie powinien mieć możliwości dołączenia. Przetestuj to na koncie z whitelisty, aby potwierdzić dostęp.

Jeśli użytkownicy spoza listy nadal mogą dołączać, upewnij się, że edytowałeś aktywny plik `<ServerName>.ini` i zrestartowałeś serwer.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja whitelist jest aktywna i masz pełną kontrolę nad tym, kto może dołączyć do serwera. Jeśli dostęp nadal nie działa tak, jak powinien, zrestartuj serwer jeszcze raz i sprawdź plik lub wyjście komend, aby potwierdzić, że zmiany zostały zastosowane.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />