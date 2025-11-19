---
id: dedicated-linux-cscz
title: "Serwer dedykowany: Counter-Strike: Condition Zero Serwer dedykowany Linux - konfiguracja"
description: "Dowiedz się, jak skonfigurować serwer dedykowany Counter-Strike: Condition Zero na Linux VPS, aby wygodnie zarządzać rozgrywką → Sprawdź teraz"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować serwer dedykowany Counter-Strike: Condition Zero? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwoli Ci w kilka kliknięć ustawić serwery gier z integracją do Twojego panelu głównego ZAP-Hosting? Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwsze połączenie](dedicated-linux-ssh.md). Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz z tym narzędziem na Linuxie. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/cs-ds' +login anonymous +app_update 90 validate +quit
```

Poczekaj cierpliwie na pobranie plików – może to chwilę potrwać, zwłaszcza przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Counter-Strike: Condition Zero. Możesz dalej konfigurować serwer, edytując plik startowy.

Przejdź do katalogu głównego, a następnie do folderu cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.
```
nano /home/steam/cs-ds/cstrike/cfg/server.cfg
```

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom serwer poleceniem:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_IP]:2456`.

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś serwer Counter-Strike: Condition Zero na swoim VPS! Kolejnym krokiem polecamy zapoznać się z naszym [poradnikiem Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer gier jako usługę. Dzięki temu zyskasz automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem – jesteśmy dostępni codziennie, by Ci pomóc! 🙂