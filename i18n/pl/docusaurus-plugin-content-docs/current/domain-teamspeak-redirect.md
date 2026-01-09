---
id: domain-teamspeak-redirect
title: "Domena: Skonfiguruj przekierowanie TeamSpeak 3"
description: "Dowiedz się, jak uprościć łączenie się z Twoim serwerem TeamSpeak 3 za pomocą własnych domen lub subdomen → Sprawdź teraz"
sidebar_label: Przekierowanie TeamSpeak 3
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Pamiętaj, że zmiany w rekordach DNS mogą się aktywować nawet do 24 godzin!
:::

## Wprowadzenie

Możesz przekierować całą domenę lub tylko subdomenę na swój serwer TeamSpeak 3.  
Dzięki temu nikt nie musi pamiętać skomplikowanego adresu IP złożonego z cyfr i może po prostu połączyć się z Twoim serwerem TeamSpeak 3 za pomocą domeny.

:::note
Domyślnie **nowe** serwery TeamSpeak 3 otrzymują alias `.zap.cloud` z losowym prefiksem, który można wykorzystać do połączenia.
:::

<InlineVoucher />

## Szybka konfiguracja TSDNS

Wprowadziliśmy nowy system TSDNS dla naszych serwerów TeamSpeak 3, który pozwala na ustawienie subdomeny dla Twojego serwera TeamSpeak 3 w kilku kliknięciach! Jeśli nie masz u nas domeny, przejdź do następnej sekcji, aby ręcznie skonfigurować rekordy DNS.

Po prostu przejdź do sekcji **Ustawienia->TSDNS** w panelu administracyjnym Twojego TeamSpeak na naszej stronie. Tam możesz wybrać subdomenę (prefiks przed domeną) oraz wybrać naszą domenę `zap-ts3.com` lub jedną z Twoich własnych domen, które masz u nas na koncie ZAP-Hosting.

:::info
Do tej funkcji szybkiej konfiguracji potrzebujesz [zakupić idealną domenę bezpośrednio u nas](https://zap-hosting.com/en/shop/product/domain/) lub przenieść własną domenę na konto ZAP-Hosting. Te domeny pojawią się w sekcji TSDNS po konfiguracji. Alternatywnie możesz użyć standardowej domeny `zap-ts3.com` za darmo.
:::

Na przykładzie tworzymy nową subdomenę na domenie `.zap.cloud`, która będzie prowadzić do naszego serwera TeamSpeak 3 po użyciu.

![](https://screensaver01.zap-hosting.com/index.php/s/Mi3wK7cY639Rp3x/preview)

:::note
Pamiętaj, że propagacja domeny i jej działanie może potrwać do 3 godzin.
:::

## Standardowa konfiguracja DNS

Aby przekierować adres IP, utwórz subdomenę, która przekieruje na adres IP serwera TeamSpeak 3 lub przekieruj całą domenę bez subdomeny.  
To wystarczy, jeśli serwer TeamSpeak 3 korzysta z domyślnego portu **9987**.  
Jeśli jednak serwer TeamSpeak 3 używa innego portu niż domyślny, konieczne jest dodanie dodatkowego **rekordu SRV**, który przekieruje domenę lub subdomenę na właściwy port serwera TeamSpeak 3.

### Usługa SRV

Nazwa usługi zawsze zaczyna się od **podkreślenia**.  
Dla serwera TeamSpeak 3 nazwa usługi to zawsze **_ts3**, bez wyjątków.

### Protokół SRV

Protokół określa protokół internetowy używany do połączenia. Dostępne są **UDP** i **TCP**.  
Specyfikacja protokołu również zaczyna się od **podkreślenia** i jest to albo **_udp**, albo **_tcp**.  
Dla serwera TeamSpeak 3 zawsze używamy **_udp**, bez wyjątków.

## Przekierowanie domeny bez subdomeny

Aby przekierować domenę na serwer gier bez tworzenia subdomeny, najpierw otwórz swoją domenę na panelu głównym, a następnie z menu po lewej wybierz Zarządzanie DNS.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)

Zobaczysz tam wszystkie istniejące rekordy DNS dla Twojej domeny.  
Jeśli jeszcze nie stworzyłeś własnych rekordów, możesz wyświetlić wszystkie istniejące, klikając na czerwony kosz na śmieci po prawej stronie.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Kliknij **Nowy rekord**, aby przejść do tworzenia nowego rekordu DNS.  
Jako **Nazwa** wpisz nazwę domeny, np. **teamspeak-server.de**, typ ustaw na **A**, a wartość to adres IP Twojego serwera TeamSpeak 3, np. **88.214.57.116**.  
Pole **TTL** możesz zostawić bez zmian.

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

Po wpisaniu wszystkiego kliknij **Zapisz** – rekord zostanie zapisany w ustawieniach DNS i pojawi się w ciągu 24 godzin.

:::info
Nowe rekordy DNS mogą się aktywować nawet do 24 godzin. Niestety nikt nie ma na to wpływu.
:::

## Przekierowanie domeny z subdomeną

Jeśli chcesz stworzyć subdomenę, np. ts.teamspeak-server.de, postępuj jak w poprzednim przykładzie,  
ale jako **Nazwa** wpisz subdomenę, a nie nazwę domeny.  
Wygląda to tak:

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)

## Przekierowanie domeny z portem (SRV)

Jeśli nie używasz standardowego portu **9987**, musisz utworzyć dodatkowy **rekord SRV**, aby przekierować domenę nie tylko na IP serwera, ale też na właściwy port.

Najpierw utwórz **subdomenę** jak wyżej lub przekieruj domenę bezpośrednio na serwer TeamSpeak 3, oba sposoby działają.

### Przekierowanie bez subdomeny

Po przekierowaniu domeny na adres IP serwera TeamSpeak 3 kliknij **Nowy rekord** i stwórz rekord wyglądający tak:

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

Pole **Nazwa** zawiera nazwę usługi, czyli w tym przypadku nasz serwer TeamSpeak 3, czyli **_ts3**.  
Zawiera też typ protokołu, tutaj **_udp**, oraz nazwę domeny.  
Pole **Typ** to rodzaj rekordu, tutaj **SRV**.  
Pole **Wartość** zawiera port gry i domenę, np. **0 1234 teamspeak-server.de**, gdzie **1234** to **port gry**, a **teamspeak-server.de** to domena, na którą przekierowujemy.  
Wartość **0** nie ma znaczenia i zawsze pozostaje taka sama. Pola **TTL** i **Prio** również nie są modyfikowane.

Na koniec kliknij **Zapisz**.

:::info
Ważne, aby w polu **Wartość** na końcu domeny był **kropka**!
:::

### Przekierowanie z subdomeną

Z subdomeną jest prawie tak samo. Najpierw tworzysz subdomenę jak wyżej i przekierowujesz ją na adres IP serwera TeamSpeak 3.  
Następnie kliknij **Nowy rekord** i stwórz rekord z następującą zawartością:

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)

Pole **Nazwa** zawiera nazwę usługi, czyli **_ts3**, typ protokołu **_udp** oraz nazwę domeny wraz z subdomeną, np. **ts.teamspeak-server.de**.  
Pole **Typ** to **SRV**.  
Pole **Wartość** zawiera port i domenę z subdomeną, np. **0 1234 ts.teamspeak-server.de**, gdzie **1234** to **port serwera TeamSpeak 3**, a **ts.teamspeak-server.de** to domena z subdomeną, na którą przekierowujemy.  
Wartość **0** jest bez znaczenia i zawsze taka sama. Pola **TTL** i **Prio** pozostają bez zmian.

<InlineVoucher />