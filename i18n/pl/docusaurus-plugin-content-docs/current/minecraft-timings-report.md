---
id: minecraft-timings-report
title: "Minecraft: Zidentyfikuj problemy serwera dzięki raportowi timings"
description: "Dowiedz się, jak analizować problemy z wydajnością serwera za pomocą raportów timings, aby wykryć lagi i zoptymalizować swój serwer → Sprawdź teraz"
sidebar_label: Raport Timings
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Wyjaśnienie

### Co to jest raport timings?

Raporty timings są bardzo podobne do menedżera zadań na Twoim komputerze, który pozwala znaleźć problem, zwłaszcza w przypadku lagów. Raport timings rejestruje wszystkie aktywności serwera i wyświetla je wizualnie.

## Raport timings

## Jak stworzyć raport timings

W zależności od oprogramowania serwera, raport timings tworzy się inaczej. Zasadniczo musisz najpierw rozpocząć nagrywanie za pomocą następującego polecenia (z wyjątkiem **Paper Spigot** (jeśli ustawienia nie zostały zmienione)

`/timings start`

Podczas nagrywania korzystaj z serwera tak jak zwykle, aby odpowiednie problemy mogły zostać zarejestrowane i później dokładniej przeanalizowane. Czas nagrywania powinien trwać **min. 10 minut** lub dłużej, jeśli to możliwe.

## Eksport raportu timings

Aby stworzyć i wyeksportować raport Timings, użyj następującego polecenia:

`/timings paste`

Po kilku sekundach pojawi się komunikat, że eksport zakończył się sukcesem. Raport Timings można otworzyć, klikając w link.

![](https://screensaver01.zap-hosting.com/index.php/s/wpmB2jr2XCibHtY/preview)

## Analiza

### ↔️ Zawężanie wartości

Po wyeksportowaniu i otwarciu raportu Timings, powinno pojawić się okno podobne do tego:

![](https://screensaver01.zap-hosting.com/index.php/s/9xMMtpr2jePk7B5/preview)

Na początek warto przyjrzeć się wykresowi, aby móc sprawdzić przybliżone wartości dla poszczególnych punktów nagrania, przesuwając mysz nad poszczególne punkty.

Aby uzyskać jak najdokładniejsze wartości, które odnoszą się do możliwego problemu na serwerze, problematyczny okres powinien zostać najpierw zawężony za pomocą suwaków poniżej, jak pokazano na wykresie:

![](https://screensaver01.zap-hosting.com/index.php/s/yfkbfqJdcQwbsiB/preview)

### Badanie wartości serwera

Mamy łącznie 3 kolumny. Jak widać na zrzucie ekranu poniżej, pole nr 1 pokazuje, ile % ticka (20 ticków to jedna sekunda) zajmuje główny proces. Możesz też zobaczyć, jak często ten proces był wykonywany podczas nagrania.

W polu nr 2 widzisz dokładniejsze wartości w milisekundach, ale pamiętaj, że czas nigdy nie powinien przekraczać 50 ms. Jeśli tak się dzieje, powoduje to reakcję łańcuchową i wszystkie kolejne procesy zaczynają się kumulować, co ostatecznie prowadzi do lagów, ponieważ serwer może obsługiwać procesy tylko z opóźnieniem.

:::info
**Full Server Tick** można zazwyczaj zignorować, ponieważ wartości są zawsze w czerwonym obszarze, ale to nie jest duży problem.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gLkFeTek6yR5tME/preview)

Zawsze warto dokładniej przyjrzeć się wartościom wyróżnionym kolorami.

W tym przykładzie przyglądamy się procesowi dla wszystkich encji (zwierząt, potworów, przedmiotów itd.), ponieważ wartości są już wyświetlane na pomarańczowo. Można z tego od razu wywnioskować, że problemem jest zbyt wiele encji na serwerze. Możliwe, że na serwerze działają farmy mobów lub pojawia się masa nowych mobów. Jeśli masz problem z nadmiarem encji, możesz ograniczyć ich spawn w ustawieniach lub zainstalować pluginy, które limitują liczbę encji i automatycznie je usuwają, jeśli to konieczne.

Jak opisano wyżej, lista zasadniczo zawsze pokazuje główny proces. Klikając na proces, możemy przyjrzeć się bliżej poszczególnym procesom dla każdego typu encji i je zbadać. Zwróć też uwagę na kolumny 2 i 3, jak wspomniano wcześniej.

Zauważysz, że **Minecraft::tickEntity - nms.EntitySkeleton** wykonał dużo procesów. Znów, farmy mobów mogą być problemem.

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

Innym procesem z pomarańczowymi wartościami są bloki oczekujące. Bloki oczekujące mogą być szczególnie nieefektywne, ponieważ serwer musi sprawdzać status każdego takiego bloku co tick. Przykładem mogą być latający piasek, żwir, a nawet lawa i woda.

Jeśli na dużej farmie używa się dużo wody, może to powodować wiele problemów. Problem może też pojawić się, gdy generowane są nowe chunk’i i w tych chunkach powstają źródła wody w górach. Serwer musi za każdym razem obliczać status, aby woda płynęła płynnie. Dodatkowo serwer musi tworzyć i ładować chunk’i, co jest bardzo intensywnym procesem.

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW)

Wszystkie dalsze analizy można przeprowadzać w ten sam sposób, ponieważ kroki są dokładnie takie same dla każdego innego procesu. Jeśli nadal potrzebujesz pomocy z oceną, jesteśmy dla Ciebie!

### Sprawdź pluginy

Czasem problemy mogą być też spowodowane przez pluginy. Aby ustalić, czy to plugin jest przyczyną, możesz tymczasowo usunąć zainstalowane pluginy z serwera i ponownie sprawdzić aktualny stan systemu.

Jeśli problem dotyczy pluginów, można to też zbadać w sekcji "Pluginy". Wartości są tam również podane w trzech kolumnach, które mają dokładnie taką samą strukturę jak normalne wartości serwera powyżej. Różnica jest taka, że nie jest już pokazywany główny proces. Zamiast tego wyświetlany jest sam plugin. Możemy jednak nadal sprawdzać wszystkie procesy, klikając na nie i dokładniej analizując wartości.

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD)

<InlineVoucher />