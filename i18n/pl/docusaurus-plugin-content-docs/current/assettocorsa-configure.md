---
id: assettocorsa-configure
title: "Assetto Corsa: Skonfiguruj swój serwer"
description: "Dowiedz się, jak skonfigurować swój serwer gier Assetto Corsa z niestandardowymi mapami i samochodami dla optymalnej rozgrywki → Sprawdź teraz"
sidebar_label: Konfiguracja Serwera
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Połącz się przez FTP

Zanim skonfigurujemy serwer, musisz ustawić [Dostęp przez FTP](gameserver-ftpaccess.md):

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

Po skonfigurowaniu możesz połączyć się i otworzyć folder serwera:

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## Przygotowanie

Najpierw otwieramy folder Assetto Corsa, zrobimy to przez Steam, klikając prawym przyciskiem myszy na "Assetto Corsa" na liście gier

Teraz wybieramy "Pliki lokalne" i otwieramy lokalne pliki gry:

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

Następnie otwieramy folder "server", w którym znajduje się plik "acServerManager" – otwieramy go

## Ustaw Mapę

Jesteśmy teraz w interfejsie "AC Server Manager", za pomocą którego możemy tworzyć i zarządzać konfiguracjami serwera. Najpierw tworzymy nową konfigurację

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

Teraz możemy skonfigurować nasz serwer, w naszym przypadku chcemy edytować tylko tory i samochody, więc przechodzimy do zakładki "Tracks"

Tutaj klikamy na wybraną mapę, a powyżej możemy ustawić liczbę samochodów na torze.

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
Upewnij się, że nie ustawiasz więcej samochodów niż slotów na Twoim serwerze, bo inaczej serwer się nie uruchomi
:::

## Ustaw Samochody

Teraz przechodzimy do zakładki "Cars / Entry List", gdzie możemy dodać nowe samochody:


Aby aktywować samochody, po lewej musi być zaznaczony checkbox

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

Pośrodku widzisz samochody, które mogą znaleźć się na gridzie, tutaj wybierasz kolory samochodów, które mają być na starcie:

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
Aby wybrać kilka samochodów, zaznacz kilka checkboxów, aby dodać różne auta do środkowej listy.

Pamiętaj, że wszystkie sloty na samochody muszą być wypełnione i nie może być więcej aut niż dostępnych slotów.

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## Wgraj Konfigurację

Teraz możesz zapisać konfigurację przyciskiem "Save" i wyeksportować ją przyciskiem "Export":

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

Wybierz teraz wolny folder, w którym zostaną zapisane dane konfiguracyjne.

Teraz możesz zamknąć AC Server Manager i otworzyć folder, do którego wyeksportowano konfiguracje.

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

Te konfiguracje możesz teraz skopiować metodą Drag&Drop do folderu "cfg" na Twoim serwerze gier.

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

Serwer można teraz uruchomić z nową konfiguracją.

<InlineVoucher />