---
id: vrising-firststeps-connect
title: "V Rising: Połącz się z serwerem V Rising"
description: "Dowiedz się, jak połączyć się z serwerem V Rising bezpośrednio lub przez listę serwerów, aby szybko zacząć rozgrywkę → Sprawdź teraz"
sidebar_label: Połącz się z serwerem
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W tym poradniku pokażemy, jak połączyć się z Twoim serwerem V Rising. Są dwie metody połączenia: bezpośrednio przez adres IP serwera lub przez listę serwerów. Zalecamy wcześniejsze skonfigurowanie serwera według własnych preferencji, więcej na ten temat znajdziesz w naszym [poradniku Konfiguracja serwera](vrising-configuration.md).

<InlineVoucher />

## Połączenie bezpośrednie przez IP

### Jak zdobyć adres IP serwera

Na początek musisz znać adres IP i port swojego serwera V Rising, aby móc połączyć się bezpośrednio. Po prostu zaloguj się do swojego [panelu administracyjnego ZAP-Hosting](https://zap-hosting.com/en/customer/) i miej pod ręką pełny adres IP oraz port.

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

Jeśli prowadzisz serwer V Rising na zewnętrznym serwerze dedykowanym, Twój adres IP to adres maszyny hostującej, a port to ten, który ustawiłeś w pliku konfiguracyjnym (domyślnie jest to 9876). Więcej informacji o porcie znajdziesz w naszym [poradniku Konfiguracja serwera](vrising-configuration.md).

### Łączenie się w grze

Najpierw uruchom V Rising z launcher’a gry. W menu głównym wybierz **Graj**, a następnie opcję **Gra online**.

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

Wybierz tryb gry, w który chcesz grać, lub po prostu kliknij **Pokaż wszystkie serwery** w prawym dolnym rogu, aby od razu przejść do przeglądarki serwerów.

Teraz kliknij przycisk **Połączenie bezpośrednie** na dole i wpisz swój adres IP wraz z portem, np.: `123.456.679.123:9876`. Jeśli serwer jest zabezpieczony hasłem, gra poprosi Cię o jego wpisanie po połączeniu.

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

Jeśli nie możesz dołączyć do serwera i pojawia się błąd timeout, upewnij się, że wpisany adres IP i port są poprawne oraz że serwer jest online. Możesz skorzystać z konsoli w panelu administracyjnym swojego serwera V Rising, aby pomóc w debugowaniu.

## Połączenie przez listę serwerów

Łatwiejszym sposobem na połączenie z serwerem jest użycie listy serwerów. Wymaga to jednak, aby Twój serwer był ustawiony jako publiczny w parametrach konfiguracji serwera.

Sprawdź nasz [poradnik Konfiguracja serwera](vrising-configuration.md), aby dodać odpowiednie parametry `Name` i `ListOnMasterServer` do pliku konfiguracyjnego lub przez panel administracyjny.

Gdy to zrobisz, w menu głównym wybierz **Graj**, potem **Gra online** i ponownie kliknij **Pokaż wszystkie serwery** w prawym dolnym rogu. Teraz możesz użyć przeglądarki serwerów, aby znaleźć swój serwer, korzystając z dostępnych filtrów, takich jak wyszukiwanie po nazwie, tryb gry, poziom trudności i wiele innych.

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />