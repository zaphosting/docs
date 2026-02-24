---
id: dedicated-windows-installmysql
title: "Konfiguracja MySQL na serwerze Windows - Wdrażaj i zarządzaj niezawodnymi bazami danych"
description: "Dowiedz się, jak skonfigurować i zabezpieczyć własny serwer bazy danych MySQL na Windows serwerze dedykowanym dla niezawodnego zarządzania danymi → Sprawdź teraz"
sidebar_label: Instalacja MySQL
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwer MySQL jest potrzebny do różnych aplikacji i może przechowywać ważne dane, na przykład dla serwera gier lub strony internetowej. Poniżej wyjaśniamy, jak skonfigurować własny serwer bazy danych MySQL na Twoim Windows serwerze dedykowanym.

## Instalacja

Na początku łączysz się z serwerem przez zdalny pulpit i pobierasz najnowszą wersję MariaDB, która jest wykorzystywana jako serwer bazy danych: [Pobierz MariaDB](https://mariadb.org/download/?t=mariadb).

Rozpakuj pobrane archiwum za pomocą WinRAR lub 7Zip i uruchom plik instalacyjny przez podwójne kliknięcie:

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Następnie przechodzisz przez proces instalacji klikając **Dalej** aż do momentu, gdy zostaniesz poproszony o wpisanie hasła root:

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Tutaj możesz ustawić główne hasło do dostępu do swojego serwera bazy danych. Upewnij się, że używasz bezpiecznego hasła, którego nikt inny nie zna!

:::info
WAŻNE! Jeśli chcesz mieć dostęp do bazy danych zdalnie przez Navicat, HeidiSQL lub inne narzędzie, musisz aktywować opcję **Włącz dostęp zdalny dla użytkownika root**! Ze względów bezpieczeństwa generalnie tego nie zalecamy.
:::

Następnie kliknij **Dalej** aż dojdziesz do końca instalacji, gdzie musisz kliknąć **Zainstaluj**:

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Twój serwer bazy danych jest teraz online i gotowy do użycia!

## Konfiguracja dostępu zewnętrznego

Jeśli podczas instalacji włączyłeś opcję "Włącz dostęp zdalny dla użytkownika root", musisz również dodać port MySQL **3306** w zaporze sieciowej Windows. Otwórz zaporę i utwórz tam nową regułę.
Poradnik, jak przekierować porty w zaporze znajdziesz tutaj:
[Przekierowanie portów (Zapora sieciowa)](vserver-windows-port.md)

Teraz możesz zdalnie łączyć się ze swoim serwerem MySQL!

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś serwer MySQL. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂