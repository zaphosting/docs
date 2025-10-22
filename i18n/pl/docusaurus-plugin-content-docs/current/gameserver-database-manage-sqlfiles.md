---
id: gameserver-database-manage-sqlfiles
title: "Serwer gier: Import lub eksport pliku SQL"
description: "Dowiedz się, jak efektywnie zarządzać bazą danych serwera gier, importując i eksportując pliki SQL za pomocą phpMyAdmin → Sprawdź teraz"
sidebar_label: Import/Eksport plików SQL
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Wiele gier na Twoim serwerze gier korzysta z baz danych do przechowywania danych na dłuższy czas i prawidłowego działania. Niektóre gry, zasoby lub mody mogą dostarczyć Ci plik `.sql`, który służy do importowania odpowiednich tabel i danych do Twojej bazy danych. Eksportowanie bazy danych może być również przydatne do przenoszenia danych między systemami lub po prostu do ręcznego tworzenia kopii zapasowej. W tym poradniku pokażemy, jak importować i eksportować pliki SQL do bazy danych Twojego serwera gier lub z niej, korzystając z interfejsu phpMyAdmin.

<InlineVoucher />

## Przygotowanie

Na początek musisz uzyskać dostęp do bazy danych MySQL Twojego serwera gier, co możesz zrobić bezpośrednio przez interfejs webowy. Powinieneś też mieć gotowe pliki `.sql`, które chcesz zaimportować do bazy.

:::tip
Niektóre pliki SQL mogą wymagać użycia konkretnej nazwy bazy danych, co może kolidować z nazwą bazy danych ZAP ID, którą otrzymujesz automatycznie, i powodować błędy.

Możesz to sprawdzić, szukając w pliku poleceń `USE xxx` lub `CREATE DATABASE` w edytorze tekstu. Jeśli takie występują, usuń je i zapisz plik przed importem.

![](https://screensaver01.zap-hosting.com/index.php/s/DRoDqGngrS7qbQW/preview)
:::

Przejdź do sekcji **Narzędzia->Bazy danych** i kliknij niebieski link, aby otworzyć interfejs phpMyAdmin. Zaloguj się, używając danych z panelu administracyjnego.

![](https://screensaver01.zap-hosting.com/index.php/s/8ix7q4tHmPnyYSy/preview)

Aby dowiedzieć się więcej o phpMyAdmin, polecamy nasz [poradnik Dostęp do bazy danych](gameserver-databases-pma.md), który omawia interfejs bardziej szczegółowo.

## Import pliku SQL

Po zalogowaniu się do phpMyAdmin wybierz główną bazę danych, czyli Twoje ZAP ID. Na górnym pasku nawigacyjnym znajdź sekcję **Import**.

Na tej stronie kliknij przycisk **Przeglądaj...**, aby otworzyć eksplorator plików. Znajdź plik SQL, który chcesz zaimportować do bazy i otwórz go.

:::note
Maksymalny rozmiar pliku SQL to 2MB. Jeśli Twój plik jest większy, polecamy użyć narzędzia do dzielenia plików SQL, np. [Pinetools SQL-Splitter](https://pinetools.com/split-files), które podzieli go na mniejsze części. Możesz wtedy importować je osobno.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/TgZZBaSJJmXraZc/preview)

Możesz też dostosować dodatkowe ustawienia, jeśli chcesz. Dla większości użytkowników domyślne wartości będą odpowiednie, więc po prostu przewiń w dół i kliknij **Importuj**.

Plik SQL powinien zostać pomyślnie zaimportowany, co zobaczysz po zmianach w bazie, takich jak nowe tabele, dane i inne.

## Eksport pliku SQL

Eksport bazy danych to kolejna ważna funkcja, przydatna do łatwego przenoszenia baz lub tworzenia kopii zapasowych. Ponownie wybierz główną bazę danych (Twoje ZAP ID) i znajdź sekcję **Eksport** na górnym pasku nawigacyjnym.

Domyślnie wybrana jest metoda eksportu **Szybka**, która automatycznie eksportuje wszystkie tabele i dane. Jeśli chcesz dostosować, które tabele i dane mają być eksportowane, wybierz opcję **Niestandardowa** i zmodyfikuj parametry według własnych potrzeb. Gdy będziesz gotowy, kliknij **Eksportuj**, aby pobrać plik SQL na swój komputer.

![](https://screensaver01.zap-hosting.com/index.php/s/Qa2HakWpYGpfzfA/preview)

## Podsumowanie

Pomyślnie wyeksportowałeś swoją bazę danych do pliku SQL, co pozwoli Ci łatwo ją zaimportować w przyszłości. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />