---
id: fivem-resolve-dbconnection
title: "FiveM: Rozwiązywanie problemów z połączeniem z bazą danych"
description: "Dowiedz się, jak naprawić problemy z połączeniem serwera FiveM z bazą danych i przywrócić płynną komunikację z bazą → Sprawdź teraz"
sidebar_label: Rozwiązywanie problemów z DB
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Oxmysql to przydatny, open-source’owy zasób FiveM, który jest preinstalowany na Twoim serwerze FiveM, umożliwiający komunikację między serwerem a bazą danych. Podczas rozwoju może się zdarzyć, że wprowadzisz zmiany (np. odświeżenie danych logowania do bazy), które będą wymagały aktualizacji łańcucha połączenia oxmysql. Przykład problemu z połączeniem z bazą danych:

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

W tym poradniku pokażemy, jak rozwiązać problemy z połączeniem do bazy danych na Twoim serwerze FiveM, dostosowując łańcuch połączenia w pliku konfiguracyjnym serwera.

<InlineVoucher />

## Metoda automatyczna

Zacznij od otwarcia panelu webowego Twojego serwera na stronie i przejdź do sekcji **Ustawienia**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

Na tej stronie przewiń na dół, gdzie znajdziesz przyciski **Akcje**. Wystarczy kliknąć przycisk **Przekonfiguruj łańcuch połączenia MySQL**, a następnie zrestartować serwer, aby zmiany zostały zastosowane.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

To automatycznie zaktualizuje Twój plik `server.cfg` z poprawnymi, aktualnymi danymi logowania, dzięki czemu baza danych powinna zacząć działać poprawnie.

## Metoda ręczna

Aby rozwiązać problem ręcznie, potrzebujesz dostępu do pliku `server.cfg`, gdzie samodzielnie zmienisz łańcuch połączenia, wpisując dane logowania z panelu webowego. Zaloguj się do interfejsu txAdmin i otwórz edytor CFG. W nowej karcie przejdź do sekcji **Narzędzia->Bazy danych**, gdzie znajdziesz swoje aktualne dane logowania.

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

W pliku `server.cfg` dodaj (lub **zamień**, jeśli już istnieje) następującą linię, wpisując swoje dane bazy danych z panelu webowego:

```
set mysql_connection_string "mysql://USER:PASSWORD@SERVER:3306/DATABASE"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

Po wykonaniu tej zmiany zapisz plik i zrestartuj serwer.

## Podsumowanie

Przy następnym uruchomieniu serwera baza danych powinna być ponownie dostępna i serwer będzie działał poprawnie. Udało Ci się rozwiązać problem z połączeniem do bazy danych. Jeśli masz dalsze pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />