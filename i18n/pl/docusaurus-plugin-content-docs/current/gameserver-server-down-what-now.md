---
id: gameserver-server-down-what-now
title: 'Serwer gier: Serwer nie działa - co teraz?'
description: "Dowiedz się, jak diagnozować awarie serwera gier, analizując pliki logów, aby zidentyfikować błędy i znaleźć skuteczne rozwiązania → Sprawdź teraz"
sidebar_label: Awaria serwera - co robić?
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Jeśli Twój serwer gier nie działa, może to mieć wiele przyczyn. **Ważne, żebyś nie próbował go od razu restartować, tylko najpierw zerknął do pliku logów. Zazwyczaj znajdują się tam **komunikaty o błędach**, które dokładnie opisują, dlaczego serwer się wyłączył. **Jeśli od razu zrestartujesz serwer, log zostanie nadpisany, a stary usunięty. Wtedy niestety nie zobaczysz już żadnych błędów.**

<InlineVoucher />

## Jak zobaczyć plik logów

Do pliku logów łatwo dostaniesz się przez menu po lewej stronie.

![](https://screensaver01.zap-hosting.com/index.php/s/rTMjGQPGoijMCXQ/preview)

Następnie możesz je podejrzeć klikając zielone oko. **Najważniejsze, żebyś zawsze otwierał najnowszy log.  
Poznasz go po dacie lub nazwie.**

![](https://screensaver01.zap-hosting.com/index.php/s/Hc4cYQSj3c9Enpi/preview)

Po otwarciu musisz sprawdzić, czy są tam błędy (**Błędy zwykle zawierają słowa takie jak "Error", "Cant find", "Couldnt load"**)

Na poniższym zrzucie ekranu masz przykład serwera Fivem z błędnym kluczem licencyjnym serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/pAwzNkHZBTtHds9/preview)

Taki błąd możesz wpisać np. w Google i sprawdzić, czy jest znany. Zazwyczaj szybko znajdziesz przyczynę tego błędu.

Jeśli nic nie znajdziesz o tym błędzie, możesz napisać na Live Chat i przesłać błąd jako tekst lub zrzut ekranu.

## Plik logów bez zawartości

Niestety, może się też zdarzyć, że plik logów jest pusty. To znaczy, że nie udało się go stworzyć, bo serwer padł od razu lub został usunięty po restarcie. W takim wypadku możesz tylko spróbować go zrestartować z nadzieją, że błąd pojawi się ponownie lub serwer zacznie działać.

## Brak rozwiązania na live chacie

Jeśli nie znalazłeś rozwiązania w Google ani na live chacie, masz dwie opcje. Pierwsza to otworzyć ticket i zostawić serwer tak, jak jest, żeby support mógł go dokładniej sprawdzić.

Druga opcja to przywrócenie kopii zapasowej lub reinstalacja serwera.

### Opcja 1 - Przywrócenie kopii zapasowej

Aby przywrócić kopię zapasową, po prostu przejdź do zakładki Kopie zapasowe po lewej i zaimportuj najnowszą kopię klikając zieloną strzałkę. Po tym Twój serwer powinien działać jak zwykle.

![](https://screensaver01.zap-hosting.com/index.php/s/j9C396QXtq8Pytx/preview)

### Opcja 2 - Reinstalacja serwera

Reinstalację uruchomisz w "Ustawieniach" po lewej stronie. Po niej cały serwer zostanie zresetowany do stanu z pierwszego dnia (możesz też dodatkowo zresetować ustawienia klikając "**Resetuj wszystkie opcje**")

![](https://screensaver01.zap-hosting.com/index.php/s/2edwoTrn3We67SB/preview)

## Reinstalacja bez efektu

Niestety to najgorszy scenariusz. Wtedy pozostaje tylko sprawdzenie serwera przez support na czacie lub w tickecie, bo to oznacza poważniejszy problem. W takim przypadku zrobimy wszystko, żeby jak najszybciej rozwiązać problem iś żebyś mógł normalnie korzystać ze swojego serwera.

<InlineVoucher />