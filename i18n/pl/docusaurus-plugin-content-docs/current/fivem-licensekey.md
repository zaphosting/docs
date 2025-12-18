---
id: fivem-licensekey
title: "FiveM: Dodaj Własny Klucz Licencyjny"
description: "Dowiedz się, jak stworzyć i zarządzać własnym kluczem licencyjnym FiveM, aby odblokować korzyści subskrypcji i spersonalizować konfigurację serwera → Sprawdź teraz"
sidebar_label: Własny Klucz Licencyjny
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Domyślnie Twój serwer gier FiveM będzie miał automatycznie wygenerowany klucz licencyjny. Zmiana tego i użycie własnego klucza licencyjnego FiveM może być korzystne z wielu powodów, takich jak dostęp do korzyści subskrypcji FiveM Element Club, np. Onesync, zmiana właściciela serwera na Twoje imię i wiele więcej. W tym poradniku pokażemy, jak stworzyć i dodać własny klucz licencyjny do Twojego serwera gier FiveM.

<InlineVoucher />

## Przygotowanie

Aby rozpocząć proces tworzenia klucza, musisz przejść na oficjalną stronę **[Cfx.re Portal](https://portal.cfx.re/)** i zalogować się za pomocą konta na forum Cfx.re. Jeśli jeszcze nie masz konta, wybierz opcję rejestracji, aby je założyć.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Nowy Cfx.re Portal
Cfx.re Portal to nowe centrum wszystkiego, co związane z FiveM, zastępujące stare rozwiązania FiveM Keymaster i Patreon. Na tym portalu możesz zarządzać kluczami licencyjnymi serwera, mieć dostęp do zakupionych zasobów oraz zarządzać subskrypcją FiveM – wszystko w jednym miejscu.

Zdecydowanie polecamy przeczytać [oficjalny wpis na blogu](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) o migracji subskrypcji Patreon do nowego Cfx.re Portal, aby zachować swoje korzyści.
:::

## Generowanie Klucza Licencyjnego

Po zalogowaniu się do portalu, przejdź do sekcji **Servers** w górnym menu, aby dostać się do głównego panelu zarządzania kluczami. To zastępuje stary serwis FiveM Keymaster i oferuje wygodny, zintegrowany panel. Możesz też odświeżyć dowolny klucz licencyjny, korzystając z opcji **Re-Activate** na tej stronie.

Kliknij przycisk **Generate Key**, aby otworzyć formularz rejestracji.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

W formularzu wpisz przydatną nazwę klucza, która pomoże Ci go łatwo rozpoznać w przyszłości. Następnie kliknij przycisk generowania.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Teraz powinieneś zobaczyć nowy wpis w tabeli z wygenerowanym kluczem. Skopiuj klucz, korzystając z przycisków akcji po prawej stronie i miej go pod ręką do kolejnego kroku.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Dodanie Klucza do Serwera

Mając już przygotowany klucz licencyjny, musisz teraz zmienić istniejący klucz na swoim serwerze gier FiveM i zastąpić go nowo utworzonym kluczem. Aby to zrobić, zaloguj się do panelu txAdmin swojego serwera gier FiveM. Panel znajdziesz w panelu głównym interfejsu webowego serwera. Użyj danych logowania podanych na stronie, aby się zalogować.

Po wejściu do txAdmin, przejdź do **CFG Editor** po lewej stronie, aby otworzyć plik `server.cfg`. W edytorze znajdź linię z parametrem `sv_licensekey` i zamień ją na swój własny klucz licencyjny. Po edycji kliknij zapisz, aby zatwierdzić zmiany.

![](https://screensaver01.zap-hosting.com/index.php/s/2E8j9jtykcjwF7L/preview)

## Podsumowanie

Po skonfigurowaniu własnego klucza licencyjnego, zrestartuj serwer, aby zacząć z niego korzystać. Udało Ci się dodać własny klucz licencyjny do serwera gier FiveM. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />