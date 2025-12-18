---
id: gameserver-database-external-access
title: 'Serwer gier: Zewnętrzny dostęp do bazy danych'
description: "Dowiedz się, jak zarządzać bazami danych MySQL ZAP-Hosting dla serwerów gier za pomocą narzędzi takich jak Navicat czy HeidiSQL → Sprawdź teraz"
sidebar_label: Zewnętrzny dostęp do bazy danych
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

ZAP-Hosting oferuje bazy danych MySQL w pakiecie z serwerami gier. Można nimi zarządzać zarówno wewnętrznie przez phpMyAdmin, jak i zewnętrznie za pomocą narzędzi do administrowania MySQL, takich jak Navicat czy HeidiSQL.

Do tego potrzebne są dane dostępowe do bazy. Znajdziesz je w panelu administracyjnym serwera gier w sekcji bazy danych. Potrzebujesz informacji o **serwerze/IP**, **bazie danych**, **użytkowniku**, **haśle** oraz domyślnym porcie **3306**:

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## Przygotowanie

Na początek potrzebujesz oprogramowania, w tym poradniku pokazujemy [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) lub [HeidiSQL](https://www.heidisql.com/download.php). Po pobraniu pliku uruchom instalator i przejdź przez proces instalacji. Gdy to zrobisz, możesz uruchomić program i skonfigurować połączenie z bazą danych.

## HeidiSQL

Aby nawiązać połączenie w HeidiSQL, tworzymy nowe połączenie klikając "New".

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

W polu Hostname / IP wpisujemy nazwę Twojej bazy danych, w naszym przykładzie "mysql-mariadb-5-101.zap-hosting.com". Nazwę użytkownika i hasło pobieramy z danych, port pozostaje na 3306.

Następnie klikamy "Open".

## Navicat

Aby nawiązać połączenie w Navicat, tworzymy nowe połączenie. W sekcji **Connection** wybieramy **MySQL**. Pojawi się nowe okno, w którym wpisujemy dane bazy.

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

**Connection Name** służy tylko do rozróżnienia połączeń i możesz wpisać tam dowolną nazwę. Pozostałe dane pobieramy z panelu, jak opisano wyżej. Po wpisaniu klikamy **OK** i konfiguracja jest zakończona. Połączenie znajdziesz po lewej stronie w przeglądzie baz danych. Aby się połączyć, kliknij dwukrotnie na bazę lub kliknij prawym i wybierz "Open connection":

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

Po tym baza otworzy się z wszystkimi istniejącymi tabelami. Teraz możesz modyfikować lub zarządzać bazą podobnie jak w phpMyAdmin, klikając lub używając poleceń SQL.

![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)

## Podsumowanie

Pomyślnie nawiązałeś połączenie z bazą danych i możesz nią zarządzać. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />