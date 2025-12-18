---
id: vserver-linux-cscz
title: "VPS: Counter-Strike: Condition Zero Serwer Dedykowany Linux - Konfiguracja"
description: "Dowiedz się, jak skonfigurować serwer dedykowany Counter-Strike: Condition Zero na VPS Linux, aby bezproblemowo hostować rozgrywkę → Sprawdź teraz"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS z Linuxem i chcesz zainstalować serwer dedykowany Counter-Strike: Condition Zero? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwala na łatwe uruchamianie serwerów gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting, w zaledwie kilka kliknięć? Dowiedz się więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwsze połączenie](vserver-linux-ssh.md). Jeśli to Twoje pierwsze użycie SteamCMD na tym serwerze, musisz też przeprowadzić jego wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD na Linux](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/cs-ds' +login anonymous +app_update 90 validate +quit
```

Bądź cierpliwy, pobieranie może chwilę potrwać, zwłaszcza przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Counter-Strike: Condition Zero. Możesz dalej konfigurować serwer, edytując plik startowy.

Przejdź do katalogu głównego, a następnie do folderu `cfg` i otwórz plik `server.cfg`, gdzie możesz zmieniać opcje serwera.
```
nano /home/steam/cs-ds/cstrike/cfg/server.cfg
```

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wykonaj poniższe polecenie startowe:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

W konsoli powinny pojawić się logi, które oznaczają, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_ip]:2456`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Counter-Strike: Condition Zero na swoim VPS! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem konfiguracji usługi Linux](vserver-linux-create-gameservice.md), który pokazuje, jak ustawić serwer dedykowany jako usługę systemową. Dzięki temu zyskujesz automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />