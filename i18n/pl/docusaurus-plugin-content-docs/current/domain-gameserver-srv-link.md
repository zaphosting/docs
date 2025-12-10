---
id: domain-gameserver-srv-link
title: "Domena: Ustaw przekierowanie na serwer gier"
description: "Dowiedz się, jak przekierować swoją domenę lub subdomenę na serwer gier, aby ułatwić dostęp i poprawić łączność → Sprawdź teraz"
sidebar_label: Przekierowanie serwera gier
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Możesz przekierować całą domenę lub tylko subdomenę na swój serwer gier. To super wygodne, bo pozwala ludziom łączyć się z Twoim serwerem gier przez domenę, zamiast zapamiętywać skomplikowane adresy IP złożone tylko z cyfr. W tym poradniku pokażemy, jak ustawić domenę, aby przekierowywała na serwer gier za pomocą rekordów DNS.

<InlineVoucher />

:::info
Pamiętaj, że zmiany w rekordach DNS mogą się aktywować nawet do 24 godzin!
:::

## Funkcjonalność

Do przekierowania adresu IP możesz stworzyć subdomenę, która będzie kierować na adres IP serwera gier, albo przekierować całą domenę bez subdomeny. To wystarczy, jeśli serwer gier korzysta z domyślnego portu gry. Jeśli serwer gier używa innego portu niż domyślny, potrzebujesz dodatkowego **rekordu SRV**, który przekieruje subdomenę na serwer gier.

:::info
Nie wszystkie gry wspierają przekierowanie domeny na port gry przez rekord SRV, więc sprawdź wcześniej, czy Twoja gra obsługuje rekordy SRV.
:::

### Usługa SRV

Nazwa usługi zależy od gry i zawsze zaczyna się od **podkreślenia**. Na przykład nazwa usługi dla serwera Minecraft to zawsze **_minecraft**, a dla serwera FiveM to **_cfx**.

### Protokół SRV

Jako protokół określamy protokół internetowy używany do połączenia. Do wyboru są **UDP** i **TCP**. To, który protokół jest używany, zależy od gry. Nazwa protokołu również zaczyna się od **podkreślenia** i jest to albo **_udp**, albo **_tcp**.

## Przygotowanie

Aby przekierować domenę na serwer gier bez tworzenia subdomeny, najpierw otwórz swoją domenę w panelu głównym, a następnie z menu po lewej wybierz zarządzanie DNS.

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

Tam zobaczysz wszystkie istniejące rekordy DNS dla swojej domeny.

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## Przekierowanie domeny (Minecraft)

Najpierw musisz poznać IP i port serwera Minecraft, na który chcesz przekierować. Mając te dane, wykonaj poniższe kroki.

W naszym przykładzie używamy `testserver-domain.de` jako nazwy domeny, `123.123.123.123` jako adresu IP serwera i `25500` jako PORTU.

### Utwórz rekord A

Aby dodać nowy rekord, kliknij przycisk **Nowy wpis**.

Pojawi się okno z czterema polami do wypełnienia:

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

**Nazwa** to główna domena lub subdomena, przez którą będzie odbywać się przekierowanie na IP, możesz ją dowolnie wybrać. **Typ** zostaw na **A**. W polu **Wartość** wpisz tylko IP serwera Minecraft, które wcześniej ustaliłeś. W naszym przykładzie wygląda to tak:

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

Po zapisaniu wpis będzie wyglądał tak:

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### Utwórz rekord SRV

Teraz musisz dodać rekord SRV, który służy do przekierowania portu, co jest konieczne, jeśli nie korzystasz z domyślnego portu.

Kliknij ponownie **Nowy wpis**.

W polu **Nazwa** wpisz protokół i domenę połączenia. Ta nazwa domeny będzie później używana do łączenia się z serwerem. Jako **Typ** wybierz z listy **SRV**:

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

W polu **Wartość** wpisz trzy wartości: najpierw priorytet (domyślnie 0), potem port serwera gry (w naszym przykładzie `25500`), a na końcu nazwę domeny rekordu **A**, który właśnie stworzyłeś.

W naszym przykładzie wygląda to tak:

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### Rozwiązywanie problemów i efekt końcowy

:::important
Na końcu wpisu musi być kropka. Bez niej system będzie próbował dopisać domenę.
:::

Jeśli tego nie zrobisz, system przekieruje `minecraft.testserver-domain.de` na `minecraft.testserver-domain.de.testserver-domain.de` i przekierowanie nie zadziała.

## Przekierowanie domeny (FiveM)

Najpierw musisz poznać IP i port serwera FiveM, na który chcesz przekierować. Mając te dane, wykonaj poniższe kroki.

W naszym przykładzie używamy `testserver-domain.de` jako nazwy domeny, `123.123.123.123` jako adresu IP serwera i PORT `30300`.

### Utwórz rekord A

Aby dodać nowy rekord, kliknij przycisk **Nowy wpis**.

Pojawi się okno z czterema polami do wypełnienia:

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

**Nazwa** to główna domena lub subdomena, przez którą będzie odbywać się przekierowanie na IP, możesz ją dowolnie wybrać. **Typ** zostaw na **A**. W polu **Wartość** wpisz tylko IP serwera FiveM, które wcześniej ustaliłeś. W naszym przykładzie wygląda to tak:

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

Po zapisaniu wpis będzie wyglądał tak:

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### Utwórz rekord SRV

Teraz musisz dodać rekord SRV, który służy do przekierowania portu, co jest konieczne, jeśli nie korzystasz z domyślnego portu.

Kliknij ponownie **Nowy wpis**.

W polu **Nazwa** wpisz protokół i domenę połączenia. Ta nazwa domeny będzie później używana do łączenia się z serwerem. Jako **Typ** wybierz z listy **SRV**:

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

W polu **Wartość** wpisz trzy wartości: najpierw priorytet (domyślnie 0), potem port serwera gry (w naszym przykładzie `30300`), a na końcu nazwę domeny rekordu **A**, który właśnie stworzyłeś.

W naszym przykładzie wygląda to tak:

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### Rozwiązywanie problemów i efekt końcowy

:::important
Na końcu wpisu musi być kropka. Bez niej system będzie próbował dopisać domenę.
:::

Jeśli tego nie zrobisz, system przekieruje `fivem.testserver-domain.de` na `fivem.testserver-domain.de.testserver-domain.de` i przekierowanie nie zadziała.

<InlineVoucher />