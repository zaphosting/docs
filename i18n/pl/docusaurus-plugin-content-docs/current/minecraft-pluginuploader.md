---
id: minecraft-pluginuploader
title: "Minecraft: Serwer z Uploaderem Pluginów ZAP-Hosting"
description: "Dowiedz się, jak łatwo zarządzać pluginami na serwerze Minecraft Spigot lub Bukkit i podkręć swoją rozgrywkę → Sprawdź teraz"
sidebar_label: Uploader Pluginów
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Uploader Pluginów

Kliknij swój serwer Minecraft na liście serwerów. Następnie wybierz zakładkę Plugins, która znajduje się w podsekcji Ustawienia.

:::info
Upewnij się, że Twój aktualny serwer to Spigot lub Bukkit. Uploader pluginów jest dostępny tylko tam.
:::

## Instalacja/Wgrywanie Pluginów

Masz dwie opcje, aby zainstalować plugin na swoim serwerze Minecraft.

- Możesz zainstalować plugin z jednej z naszych gotowych list (jeśli dostępna)
- Możesz wgrać własne pluginy metodą drag'n drop

### Pluginy z listy

Wybierz wybrany plugin z listy "Wszystkie pluginy" i kliknij zielony przycisk "Zainstaluj". Instalacja może chwilę potrwać, w zależności od rozmiaru pluginu.

![](https://screensaver01.zap-hosting.com/index.php/s/dxrtY8pQwmtfEP9/preview)

### Wgraj własny Plugin

Przeciągnij plik .jar wybranego pluginu do pola oznaczonego na obrazku. Możesz też przeciągnąć i zainstalować kilka pluginów naraz.

![](https://screensaver01.zap-hosting.com/index.php/s/fM2a4AeyspaQzYd/preview)

Po przeciągnięciu pluginu do pola uploadu, chwilę zajmie, zanim plugin pojawi się na serwerze.

Aby plugin zaczął działać, musisz przeładować serwer komendą `/rl` lub `/reload` w konsoli serwera gier (lub zrestartować cały serwer).

:::info
W rzadkich przypadkach konieczny jest restart serwera, aby plugin działał poprawnie.
:::


## Odinstalowanie Pluginu

![](https://screensaver01.zap-hosting.com/index.php/s/dKaeJr8M3jzgMBS/preview)

Aby odinstalować plugin, kliknij czerwony kosz obok wpisu.

## Dezaktywacja Pluginu

Kliknij zielony przycisk z ikoną kłódki przy zainstalowanym pluginie. Jeśli przycisk zmieni kolor z zielonego na pomarańczowy, oznacza to, że plugin został dezaktywowany. Odwrotnie - kliknij ponownie, aby go aktywować. Plik pluginu pozostaje na serwerze po dezaktywacji, ale nie jest już ładowany przez serwer gier.

:::info
Po dezaktywacji pluginu musisz przeładować serwer, aby zmiany weszły w życie. Użyj jednej z komend w konsoli serwera lub w grze: `/rl` lub `/reload`
:::

## Najczęstsze Problemy

**Nie mogę wgrać pluginu przez pole "Drag'n Drop".**

Proponowane rozwiązania:

- Twój plugin może być większy niż 5 MB i dlatego nie nadaje się do uploadu przez webowy interfejs. W takim wypadku użyj klienta FTP.
- Prawa FTP mogą powodować problemy. Aby to naprawić, kliknij zakładkę FTP w panelu i naciśnij Resetuj prawa FTP. Po tym powinieneś móc ponownie wgrywać pluginy.
- Twój plugin może być nieprawidłowy i nie zawierać poprawnego pliku plugin.yml. W takim przypadku użyj klienta FTP.
- Czasem lista może się nie odświeżyć. Po prostu odśwież stronę (F5 itp.).

### Nie mogę usunąć pluginu.

:::info
W takim wypadku skontaktuj się z supportem.
:::

### Nie mogę dezaktywować/aktywować pluginu.

Proponowane rozwiązania:

- Sprawdź, czy plugin nadal jest na serwerze. Kliknij przycisk Odśwież na krawędzi tabeli, aby zsynchronizować listę z faktycznymi pluginami na serwerze. Teraz wyświetlane są tylko pluginy faktycznie obecne na serwerze.

### Brakuje pluginów w sekcji Wszystkie Pluginy.

Proponowane rozwiązania:

- Może nie być dostępna aktualna wersja tego pluginu dla Twojej wersji serwera gier. Aby zgłosić brakujący plugin, użyj niebieskiego przycisku Plugin brakujący?.

![](https://screensaver01.zap-hosting.com/index.php/s/DeMjH2s74geaLPq/preview)

### Odinstalowanie/Instalacja z gotowej listy nie działa.

Proponowane rozwiązania:

- Odśwież stronę, aby rozwiązać problem.

### Wyświetla się plugin, którego wcale nie ma na serwerze.

Proponowane rozwiązania:

- Możesz po prostu usunąć wpis pluginu klikając przycisk odinstaluj.
- Alternatywnie spróbuj kliknąć przycisk Synchronizuj.

<InlineVoucher />