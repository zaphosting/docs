---
id: factorio-whitelist
title: "Factorio: Biała lista"
description: "Informacje o tym, jak dodać serwer Factorio do białej listy na ZAP-Hosting → Dowiedz się więcej"
sidebar_label: Biała lista
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Biała lista to lista dostępu, która ogranicza dostęp do serwera tylko do zatwierdzonych kont Factorio. Na większości serwerów hostingowych biała lista jest aktywowana, gdy zostanie dodany przynajmniej jeden gracz i jest przechowywana w pliku `server-whitelist.json`.

<InlineVoucher />

## Aktywacja białej listy

Otwórz Live Console w panelu zarządzania serwerem gier ZAP-Hosting i dodaj pierwszego gracza do białej listy. Dodanie pierwszej nazwy zazwyczaj od razu aktywuje białą listę.

```text
/whitelist add PlayerName
```

Jeśli Twój host udostępnia polecenie do wyraźnego włączenia, możesz je też wykonać przed dodaniem użytkowników.

```text
/whitelist enable
```

Zazwyczaj nie jest wymagany restart, aby zmiana zaczęła działać, ale restart po pierwszej konfiguracji gwarantuje zapisanie i załadowanie pliku białej listy podczas startu serwera.

## Zarządzanie graczami na białej liście

Aby dodać kolejnych graczy, ponownie użyj polecenia add z ich nazwą użytkownika Factorio.

```text
/whitelist add AnotherPlayer
```

Aby usunąć gracza, użyj polecenia remove.

```text
/whitelist remove PlayerName
```

Aby wyświetlić aktualną białą listę, użyj polecenia get.

```text
/whitelist get
```

## Sprawdzenie działania białej listy

Po dodaniu przynajmniej jednego gracza spróbuj dołączyć z konta, które nie jest na liście. Połączenie powinno zostać odrzucone. Następnie dołącz z kontem znajdującym się na białej liście, aby potwierdzić, że działa.

Jeśli serwer nadal pozwala na dostęp wszystkim, upewnij się, że polecenia zostały wykonane na właściwym serwerze i zrestartuj go raz, aby potwierdzić załadowanie pliku białej listy podczas startu.

## Podsumowanie

Jeśli wszystkie powyższe kroki zostały wykonane poprawnie, Twoja biała lista jest aktywna i możesz dokładnie kontrolować, kto może dołączyć do serwera. Jeśli dostęp nadal nie działa zgodnie z oczekiwaniami, zrestartuj serwer i ponownie sprawdź plik lub wynik polecenia, aby potwierdzić zastosowanie zmiany.

W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />