---
id: minecraft-addop
title: "Minecraft: Nadawanie praw OP na serwerze"
description: "Dowiedz się, jak przydzielać prawa OP graczom i skutecznie zarządzać uprawnieniami serwera dla lepszej kontroli gry → Sprawdź teraz"
sidebar_label: Uprawnienia OP
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Nadawanie praw OP

Aby móc nadać sobie lub innym graczom prawa OP, najpierw musisz otworzyć konsolę, o ile żaden inny gracz nie ma jeszcze wystarczających praw OP, by przypisać je bezpośrednio w grze.


Aby otworzyć konsolę, najpierw musisz wejść na odpowiedni serwer przez **panel główny**. W interfejsie serwera znajdziesz po lewej stronie listy zakładkę "Live Console" pod sekcją "INFORMACJE".

![](https://screensaver01.zap-hosting.com/index.php/s/PAaZQPXF75aW4Bi/preview)

Teraz powinieneś zobaczyć ciemne okno reprezentujące konsolę serwera. Pod nim znajduje się pole do wpisywania komend, które są przekazywane do konsoli. Aby nadać prawa OP, wpisz w pole komendę "op player" (bez "/"), a następnie kliknij zielony przycisk "Wyślij komendę", aby wysłać ją do konsoli.

![](https://screensaver01.zap-hosting.com/index.php/s/myba237CL5XMfKi/preview)

Po kilku sekundach wysłana komenda powinna pojawić się w konsoli, a następnie komunikat "Made player a server operator", co oznacza, że operacja zakończyła się sukcesem. Teraz dany gracz ma pełne prawa OP i może np. zmieniać tryb gry.

:::info
Nadawanie praw OP jest teraz również możliwe bezpośrednio w grze, więc jeśli chcesz, dostosuj poziom uprawnień zgodnie z kolejnym krokiem.
:::

## Poziomy uprawnień

Prawa OP dzielą się na cztery poziomy, gdzie poziom 4 jest ustawiony domyślnie. Każdy poziom ma różne uprawnienia, co pozwala na ich przydzielanie według roli gracza. Szczegóły uprawnień dla poszczególnych poziomów:

| Poziom | Opis | Uprawnienia |
| :-----: |:-------------:| :-----:|
| 1 | Moderator | Możliwość dokonywania zmian w chronionym obszarze spawn. |
| 2 | Gamemaster | Ustawianie i edytowanie bloków komend oraz wykonywanie różnych komend cheat (np.: /gamemode). |
| 3 | Admin | Wyrzucanie i banowanie graczy oraz inne komendy związane z ogólną administracją serwera. Możliwość wyznaczania dodatkowych operatorów. |
| 4 | Właściciel | Brak ograniczeń. |

:::info
Instalując plugin do zarządzania uprawnieniami, taki jak LuckPerms na serwerze Bukkit/Spigot, możesz ustawiać uprawnienia znacznie bardziej szczegółowo i precyzyjnie. Możliwe jest też tworzenie wielu grup, co ułatwia zarządzanie prawami.
:::

## Dostosowanie poziomu uprawnień

Aby zmienić poziom uprawnień gracza, najpierw musi on zostać wyznaczony jako Operator, jak opisano w sekcji "Nadawanie praw OP". Następnie plik "ops.json" trzeba edytować przez połączenie FTP.

Po nawiązaniu połączenia FTP z serwerem, przejdź do odpowiedniego katalogu serwera. W naszym przypadku w FileZilla kliknij prawym przyciskiem myszy na plik i wybierz "Wyświetl/Edytuj" z menu.

![](https://screensaver01.zap-hosting.com/index.php/s/TTeL8WqnQfrdEDq/preview)

Teraz wartość "level" ustaw na pożądany poziom dla danego gracza, a następnie zapisz plik za pomocą **CTRL+S**.

![](https://screensaver01.zap-hosting.com/index.php/s/WKQkAR3oALsSNAc/preview)

Aby zmiany zaczęły działać, serwer musi zostać zrestartowany — możesz to zrobić, przytrzymując czerwony przycisk Stop w interfejsie serwera.

<InlineVoucher />