---
id: factorio-whitelist
title: "Factorio: Whitelist"
description: "Informacje o tym, jak dodać serwer Factorio do whitelisty na ZAP-Hosting → Dowiedz się więcej"
sidebar_label: Whitelist
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Whitelist to lista dostępu, która ogranicza dostęp do serwera tylko do zatwierdzonych kont Factorio. Na większości serwerów gier wynajmowanych u nas whitelist jest aktywna od razu po dodaniu pierwszego gracza i jest zapisywana w pliku `server-whitelist.json`.

<InlineVoucher />

## Aktywacja Whitelisty

Otwórz Live Console w panelu administracyjnym serwera gier ZAP-Hosting i dodaj pierwszego gracza do whitelisty. Dodanie pierwszego użytkownika zazwyczaj od razu aktywuje whitelistę.

```text
/whitelist add PlayerName
```

Jeśli Twój serwer udostępnia osobne polecenie do włączenia whitelisty, możesz je wykonać przed dodaniem użytkowników.

```text
/whitelist enable
```

Zazwyczaj nie jest wymagany restart, aby zmiany zaczęły działać, ale warto zrestartować serwer raz po pierwszej konfiguracji, aby plik whitelisty został zapisany i załadowany przy starcie.

## Zarządzanie Graczami na Whitelistcie

Aby dodać kolejnych graczy, ponownie użyj polecenia add z ich nazwą użytkownika w Factorio.

```text
/whitelist add AnotherPlayer
```

Aby usunąć gracza, użyj polecenia remove.

```text
/whitelist remove PlayerName
```

Aby wyświetlić aktualną whitelistę, użyj polecenia get.

```text
/whitelist get
```

## Sprawdzenie Działania Whitelisty

Po dodaniu przynajmniej jednego gracza spróbuj dołączyć na serwer kontem, które nie jest na liście. Połączenie powinno zostać odrzucone. Następnie dołącz kontem z whitelisty, aby potwierdzić, że działa.

Jeśli serwer nadal pozwala dołączać wszystkim, upewnij się, że polecenia zostały wykonane na właściwym serwerze i zrestartuj go raz, aby potwierdzić, że plik whitelisty jest ładowany przy starcie.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja whitelist jest aktywna i możesz kontrolować, kto dokładnie może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer i sprawdź ponownie plik lub wynik poleceń, aby potwierdzić, że zmiany zostały zastosowane.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />