---
id: dedicated-windows-installmysql
title: "Serwer dedykowany: Instalacja MySQL"
description: "Dowiedz się, jak skonfigurować i zabezpieczyć własny serwer bazy danych MySQL na Windows serwerze dedykowanym dla niezawodnego zarządzania danymi → Sprawdź teraz"
sidebar_label: Instalacja MySQL
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwer MySQL jest potrzebny do różnych aplikacji i może przechowywać ważne dane, na przykład dla serwera gier lub strony internetowej. Poniżej wyjaśniamy, jak skonfigurować własny serwer bazy danych MySQL na Twoim Windows serwerze dedykowanym.

<InlineVoucher />

## Instalacja

Na początku łączysz się z serwerem przez zdalny pulpit i pobierasz najnowszą wersję MariaDB, która jest używana jako serwer bazy danych: [Pobierz MariaDB](https://mariadb.org/download/?t=mariadb).

Rozpakuj pobrane archiwum za pomocą WinRAR lub 7Zip i uruchom plik instalacyjny dwuklikiem:

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

Następnie przechodzisz przez proces instalacji klikając **Dalej**, aż pojawi się pole do wpisania hasła root:

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

Tutaj możesz ustawić główne hasło do dostępu do Twojego serwera bazy danych. Upewnij się, że używasz bezpiecznego hasła, którego nikt inny nie zna!

:::info
WAŻNE! Jeśli chcesz mieć zewnętrzny dostęp do bazy danych przez Navicat, HeidiSQL lub inne narzędzie, musisz aktywować opcję **Włącz dostęp zdalny dla użytkownika root**! Ze względów bezpieczeństwa generalnie tego nie zalecamy.
:::

Następnie klikaj **Dalej**, aż dojdziesz do końca instalacji, gdzie musisz kliknąć **Zainstaluj**:

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

Twój serwer bazy danych jest teraz online i gotowy do użycia!

## Konfiguracja dostępu zewnętrznego

Jeśli podczas instalacji włączyłeś opcję "Włącz dostęp zdalny dla użytkownika root", musisz również dodać port MySQL **3306** w zaporze sieciowej Windows. Otwórz zaporę i utwórz tam nową regułę.
Poradnik, jak przekierować porty w zaporze znajdziesz tutaj:
[Przekierowanie portów (zapora sieciowa)](vserver-windows-port.md)

Teraz możesz zewnętrznie łączyć się z Twoim serwerem MySQL!

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś serwer MySQL. W razie dalszych pytań lub pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />