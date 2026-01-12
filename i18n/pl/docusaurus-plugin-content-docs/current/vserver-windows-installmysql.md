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

Na początku łączysz się z serwerem przez zdalny pulpit i pobierasz najnowszą wersję MariaDB, która jest używana jako serwer bazy danych: [MariaDB Download](https://mariadb.org/download/?t=mariadb). Rozpakuj pobrane archiwum za pomocą WinRAR lub 7Zip i uruchom plik instalacyjny przez dwuklik.

Następnie przechodzisz przez proces instalacji klikając **Next**, aż pojawi się pole do wpisania hasła root:

![](https://screensaver01.zap-hosting.com/index.php/s/gMrr8aHEM2eAG22/preview)

Tutaj możesz ustawić główne hasło do dostępu do swojego serwera bazy danych. Pamiętaj, aby użyć silnego hasła, którego nikt inny nie zna!

:::info
WAŻNE! Jeśli chcesz mieć dostęp do bazy danych zdalnie przez Navicat, HeidiSQL lub inne narzędzia, musisz zaznaczyć opcję **Enable access from remote machines for root user**! Ze względów bezpieczeństwa generalnie tego nie zalecamy.
:::

Następnie klikaj **Next** aż do końca instalacji, gdzie musisz kliknąć **Install**:

![](https://screensaver01.zap-hosting.com/index.php/s/qYT3rrDrcXRb4gc/preview)

Twój serwer bazy danych jest teraz online i gotowy do działania!

## Konfiguracja dostępu zewnętrznego

Jeśli podczas instalacji zaznaczyłeś opcję "Enable access from remote machines for root user", musisz również dodać port MySQL **3306** w zaporze sieciowej Windows. Otwórz zaporę i stwórz tam nową regułę.
Poradnik, jak przekierować porty w zaporze znajdziesz tutaj:
[Przekierowanie portów (Firewall)](vserver-windows-port.md)

Teraz możesz zdalnie łączyć się ze swoim serwerem MySQL!



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer MySQL na swoim VPS! Jeśli masz dalsze pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />