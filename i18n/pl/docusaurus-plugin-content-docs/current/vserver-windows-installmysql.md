---
id: vserver-windows-installmysql
title: "VPS: Instalacja MySQL"
description: "Dowiedz się, jak skonfigurować i zabezpieczyć własny serwer bazy danych MySQL na Windows VPS, aby mieć niezawodne zarządzanie danymi → Sprawdź teraz"
sidebar_label: Instalacja MySQL
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie

Serwer MySQL jest potrzebny do różnych aplikacji i może przechowywać ważne dane, na przykład dla serwera gier lub strony internetowej. Poniżej wyjaśniamy, jak skonfigurować własny serwer bazy danych MySQL na Twoim Windows VPS.
<InlineVoucher />

## Instalacja

Na początku łączysz się z serwerem przez zdalny pulpit i pobierasz najnowszą wersję MariaDB, która jest wykorzystywana jako serwer bazy danych: [Pobierz MariaDB](https://mariadb.org/download/?t=mariadb). 

Rozpakuj pobrane archiwum za pomocą WinRAR lub 7Zip i uruchom plik instalacyjny przez dwuklik: 

![](https://screensaver01.zap-hosting.com/index.php/s/aPZn6jmLK5NZybW/preview)

Następnie przechodzisz przez proces instalacji klikając **Dalej** aż do momentu, gdy zostaniesz poproszony o wpisanie hasła root:

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

Tutaj możesz ustawić główne hasło do dostępu do swojego serwera bazy danych. Pamiętaj, aby użyć silnego hasła, którego nikt inny nie zna!

:::info
WAŻNE! Jeśli chcesz mieć dostęp do bazy danych zdalnie przez Navicat, HeidiSQL lub inne narzędzie, musisz aktywować opcję **Włącz dostęp zdalny dla użytkownika root**! Ze względów bezpieczeństwa nie jest to jednak zalecane.
:::

Następnie kliknij **Dalej** aż dojdziesz do końca instalacji, gdzie musisz kliknąć **Zainstaluj**:

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

Twój serwer bazy danych jest teraz online i gotowy do użycia!

## Konfiguracja dostępu zewnętrznego

Jeśli podczas instalacji włączyłeś opcję "Włącz dostęp zdalny dla użytkownika root", musisz również dodać port MySQL **3306** w zaporze sieciowej Windows. Otwórz zaporę i utwórz tam nową regułę.
Poradnik, jak przekierować porty w zaporze znajdziesz tutaj:
[Przekierowanie portów (Zapora)](vserver-windows-port.md)

Teraz możesz zdalnie łączyć się z Twoim serwerem MySQL!



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer MySQL na swoim VPS! Jeśli masz dalsze pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie! 

<InlineVoucher />