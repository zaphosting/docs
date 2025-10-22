---
id: vserver-linux-wine
title: "VPS: Konfiguracja Wine na Linuxie"
description: "Dowiedz się, jak skonfigurować Wine na Linuxie, aby płynnie uruchamiać oprogramowanie Windows i serwery gier na swoim systemie → Sprawdź teraz"
sidebar_label: Konfiguracja Wine
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Wine to open-source warstwa kompatybilności dla Linuxa, która pozwala na uruchamianie oprogramowania pierwotnie stworzonego dla Windows na systemach Linux. Jest to szczególnie ważne dla dedykowanych serwerów gier, które oferują tylko pliki serwera Windows i może być wymagane jako warunek wstępny do naszych innych poradników dotyczących dedykowanych serwerów gier na Linuxie. W tym poradniku przejdziemy przez proces pierwszej konfiguracji instalacji Wine na Twoim serwerze Linux. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny dla innych dystrybucji.

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwszy dostęp](vserver-linux-ssh.md).

## Instalacja Wine

Rozpocznij instalację od upewnienia się, że katalog `/etc/apt/keyrings/` istnieje, ponieważ jest on niezbędny dla Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Następnie pobierz i zapisz klucz GPG Wine w tym katalogu, co potwierdzi autentyczność pakietu.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Musisz też zapisać listę źródeł dla WineHQ, co zrobisz za pomocą poniższego gotowego polecenia:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Uruchom polecenie aktualizacji, aby system odczytał i zainstalował zmiany w pakietach.
```
sudo apt update
```

Teraz możesz przejść do głównego kroku, czyli pobrania najnowszej wersji Wine. To może chwilę potrwać.
```
sudo apt install --install-recommends winehq-staging
```

Na koniec zainstaluj kilka dodatkowych pakietów, które zapewnią, że Wine będzie działać dobrze z dedykowanymi serwerami gier, wykonując poniższe polecenie.
```
sudo apt install cabextract winbind screen xvfb
```

## Podsumowanie

Udało Ci się właśnie skonfigurować warstwę kompatybilności Wine, która pozwoli Ci uruchamiać programy Windows na Twoim serwerze Linux. Mając ten ważny warunek wstępny zainstalowany, możesz teraz przejść do instalacji dedykowanych serwerów gier, nawet jeśli są one przeznaczone dla Windows.

Polecamy też sprawdzić pozostałe poradniki w tej sekcji, które pokazują, jak instalować konkretne gry za pomocą SteamCMD i ewentualnie Wine dla plików dedykowanych serwerów Windows.

<InlineVoucher />