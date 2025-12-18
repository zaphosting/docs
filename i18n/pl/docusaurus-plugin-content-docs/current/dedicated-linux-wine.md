---
id: dedicated-linux-wine
title: "Serwer dedykowany: Konfiguracja Wine na Linuxie"
description: "Dowiedz się, jak skonfigurować Wine na Linuxie, aby płynnie uruchamiać serwery gier Windows na Ubuntu i podobnych systemach → Sprawdź teraz"
sidebar_label: Konfiguracja Wine
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Wine to open-source’owa warstwa kompatybilności dla Linuxa, która pozwala na uruchamianie oprogramowania pierwotnie stworzonego dla Windows na systemach Linux. To szczególnie ważne dla serwerów dedykowanych gier, które oferują tylko pliki serwera Windows i może być wymagane jako warunek wstępny do naszych innych poradników dotyczących serwerów dedykowanych Linux. W tym poradniku przejdziemy przez proces pierwszej konfiguracji Wine na Twoim serwerze Linux. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwszy dostęp](vserver-linux-ssh.md).

## Instalacja Wine

Zacznij instalację od upewnienia się, że katalog `/etc/apt/keyrings/` istnieje, ponieważ jest on potrzebny dla Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Następnie pobierz i zapisz klucz GPG Wine do tego katalogu, co potwierdzi autentyczność pakietu.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Musisz też zapisać listę źródeł dla WineHQ, co zrobisz za pomocą poniższego gotowego polecenia:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Uruchom aktualizację, aby system odczytał i zainstalował zmiany w pakietach.
```
sudo apt update
```

Teraz możesz przejść do głównego kroku, czyli pobrania najnowszej wersji Wine. To może chwilę potrwać.
```
sudo apt install --install-recommends winehq-staging
```

Na koniec zainstaluj kilka dodatkowych pakietów, które zapewnią, że Wine będzie działać dobrze z serwerem dedykowanym gier, uruchamiając poniższe polecenie.
```
sudo apt install cabextract winbind screen xvfb
```

## Podsumowanie

Pomyślnie skonfigurowałeś warstwę kompatybilności Wine, która pozwoli Ci uruchamiać programy Windows na Twoim serwerze Linux. Mając ten ważny warunek wstępny, możesz teraz instalować serwery dedykowane gier, nawet jeśli są przeznaczone na Windows.

Polecamy też sprawdzić pozostałe poradniki w tej sekcji, które pokazują, jak instalować konkretne gry przez SteamCMD i ewentualnie Wine dla plików serwerów dedykowanych Windows.