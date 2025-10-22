---
id: assettocorsa-mods
title: "Assetto Corsa: Instalacja modów na serwerze"
description: "Dowiedz się, jak skonfigurować i dostosować swój serwer gier Assetto Corsa, aby uzyskać najlepsze wrażenia z gry → Sprawdź teraz"
sidebar_label: Instalacja Modów
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Połącz się przez FTP

Zanim skonfigurujemy serwer, musisz ustawić [dostęp przez FTP](gameserver-ftpaccess.md):

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

Po skonfigurowaniu możesz połączyć się i otworzyć folder serwera:

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## Przygotowanie

Najpierw otwieramy folder Assetto Corsa, możesz to zrobić przez Steam, klikając prawym przyciskiem myszy na "Assetto Corsa" na liście gier.

Teraz wybieramy "Pliki lokalne" i otwieramy lokalne pliki gry:

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

Następnie otwieramy folder "server", gdzie znajduje się plik "acServerManager", który otwieramy.



## Ustaw Samochody

Przechodzimy teraz do zakładki "Cars / Entry List", tutaj możemy dodać nowe samochody:


Aby aktywować samochody, po lewej musi być zaznaczony checkbox

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

Pośrodku widzisz samochody, które mogą znaleźć się na gridzie, tutaj wybierasz auta w kolorach, które mają być na gridzie:

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
Aby wybrać kilka samochodów, możesz zaznaczyć kilka checkboxów, aby dodać różne auta do środkowej listy.

Pamiętaj, żeby wszystkie sloty na samochody były wypełnione i nie przekraczać dostępnej liczby slotów.

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## Wgraj Konfigurację

Teraz możesz zapisać konfigurację przyciskiem "Save" i wyeksportować ją przyciskiem "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

Wybierz teraz wolny folder, gdzie zostaną zapisane dane konfiguracyjne.

Możesz zamknąć AC Server Manager, a następnie otworzyć folder, do którego wyeksportowano konfiguracje.

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

Te konfiguracje możesz teraz skopiować metodą Drag&Drop do folderu "cfg" na swoim serwerze gier.

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## Wgraj Zawartość Serwera

Teraz musimy wygenerować zawartość serwera, aby modyfikacje samochodów i map były załadowane na serwerze. Kliknij w tym celu na "Update Server Content" poniżej

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

Ten proces może potrwać kilka minut, wszystkie mapy i samochody zostaną przekonwertowane na pliki serwera.

:::info
Po zakończeniu procesu może pojawić się komunikat "Could not update", nie jest to problem.
:::

Teraz otwórz folder "Server", gdzie znajduje się AcServerManager, znajdziesz tam folder "Content", który wgrywamy na serwer gier Assetto Corsa metodą Drag&Drop, nadpisując stary folder "Content":

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

Po wgraniu zawartości, modyfikacje samochodów są zainstalowane i aktywne po restarcie serwera.

<InlineVoucher />