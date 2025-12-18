---
id: redm-licensekey
title: "RedM: Dodaj Własny Klucz Licencyjny"
description: "Dowiedz się, jak stworzyć i zarządzać własnym kluczem licencyjnym RedM, aby odblokować korzyści subskrypcji i spersonalizować konfigurację serwera → Sprawdź teraz"
sidebar_label: Własny Klucz Licencyjny
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Domyślnie Twój serwer gier RedM będzie miał automatycznie wygenerowany klucz licencyjny. Zmiana tego i użycie własnego klucza licencyjnego RedM może być korzystne z różnych powodów, w tym dostępu do korzyści subskrypcji RedM element club, takich jak Onesync, zmiany właściciela serwera na Twoje nazwisko i wiele więcej. W tym poradniku omówimy proces tworzenia i dodawania własnego klucza licencyjnego do Twojego serwera gier RedM.

<InlineVoucher />

## Przygotowanie

Aby rozpocząć proces tworzenia klucza, musisz przejść na oficjalną stronę **[Cfx.re Portal](https://portal.cfx.re/)** i zalogować się za pomocą konta na forum Cfx.re. Jeśli jeszcze nie masz konta, możesz wybrać opcję rejestracji, aby utworzyć nowe.

![](https://screensaver01.zap-hosting.com/index.php/s/j5onRjCSN42dbie/preview)

:::info Nowy Cfx.re Portal
Cfx.re Portal to nowe centrum wszystkiego, co związane z RedM, zastępujące stare rozwiązania RedM Keymaster i Patreon. Na tym nowym portalu możesz zarządzać kluczami licencyjnymi serwera, mieć dostęp do zakupionych zasobów oraz zarządzać subskrypcją RedM – wszystko w jednym miejscu.

Zdecydowanie polecamy przeczytać [oficjalny wpis na blogu](https://forum.cfx.re/t/introducing-the-cfx-re-portal/5287316/) o migracji subskrypcji Patreon do nowego Cfx.re Portal, aby zachować swoje korzyści.
:::

## Generowanie Klucza Licencyjnego

Po zalogowaniu się do portalu, przejdź do sekcji **Servers** w górnym menu, aby dostać się do głównego panelu zarządzania kluczami. To zastępuje stary serwis RedM Keymaster w wygodnym, kompleksowym portalu. Możesz też odświeżyć dowolny klucz licencyjny, korzystając z opcji **Re-Activate** na tej stronie.

Kliknij przycisk **Generate Key**, aby otworzyć okno rejestracji.

![](https://screensaver01.zap-hosting.com/index.php/s/JQ6dkNHZcBD4e4B/preview)

W oknie wpisz przydatną nazwę klucza, która pomoże Ci go łatwo zidentyfikować w przyszłości. Gdy będziesz gotowy, kliknij przycisk generuj.

![](https://screensaver01.zap-hosting.com/index.php/s/3cYyRo7pgzQraz2/preview)

Teraz powinieneś zobaczyć nowy wpis w tabeli z kluczem, który właśnie wygenerowałeś. Skopiuj klucz, korzystając z przycisków akcji po prawej stronie i miej go pod ręką do kolejnego kroku.

![](https://screensaver01.zap-hosting.com/index.php/s/3Hd8tQqJA4xPKWk/preview)

## Dodanie Klucza do Serwera

Mając już przygotowany klucz licencyjny, musisz teraz zmienić istniejący klucz na swoim serwerze gier RedM i zastąpić go nowo utworzonym kluczem. Aby to zrobić, zaloguj się do panelu txAdmin swojego serwera gier RedM. Znajdziesz go w panelu głównym interfejsu webowego serwera. Użyj danych logowania podanych na stronie, aby wejść do panelu.

Po wejściu do txAdmin, przejdź do **CFG Editor** po lewej stronie, aby otworzyć plik `server.cfg`. W edytorze znajdź linię z parametrem `sv_licensekey` i zamień ją na swój własny klucz licencyjny. Po zakończeniu kliknij zapisz, aby zatwierdzić zmiany.

![img](https://screensaver01.zap-hosting.com/index.php/s/KKQ8aRBKo9246yR/preview)

## Podsumowanie

Po skonfigurowaniu własnego klucza licencyjnego, zrestartuj serwer, aby zacząć z niego korzystać. Udało Ci się dodać własny klucz licencyjny do serwera gier RedM. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />