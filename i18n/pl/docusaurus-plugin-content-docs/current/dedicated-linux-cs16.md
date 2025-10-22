---
id: dedicated-linux-cs16
title: "Serwer dedykowany: Konfiguracja serwera Counter-Strike 1.6 na Linux"
description: "Dowiedz się, jak zainstalować serwer dedykowany Counter-Strike 1.6 na swoim VPS z Linuxem, aby cieszyć się płynną rozgrywką i łatwym zarządzaniem serwerem → Sprawdź teraz"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS z Linuxem i chcesz zainstalować na nim serwer dedykowany Counter-Strike 1.6? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwoli Ci skonfigurować serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting w zaledwie kilka kliknięć? Dowiedz się więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md). Jeśli to Twoje pierwsze użycie SteamCMD na Linuxie, musisz też przeprowadzić jego pierwszą konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację, używając poniższego polecenia, które uruchomi instalację przez SteamCMD bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 90 validate +quit
```

Bądź cierpliwy podczas pobierania, może to potrwać chwilę, zwłaszcza przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie zakończyłeś podstawową konfigurację serwera Counter-Strike 1.6. Możesz dalej dostosować serwer, edytując plik startowy.

Przejdź do katalogu głównego, a następnie do folderu cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby go wygenerować, odwiedź http://steamcommunity.com/dev/managegameservers i stwórz token dla gry o ID 90, czyli Counter-Strike 1.6.

Po uzyskaniu tokenu dodaj go do parametrów uruchamiania serwera jako `+sv_setsteamaccount <TOKEN>`.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wykonaj poniższe polecenie startowe:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

W terminalu powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twój_adres_ip]:2456`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Counter-Strike 1.6 na swoim VPS! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem Setup Linux Service](dedicated-linux-create-gameservice.md), który pokazuje, jak ustawić serwer dedykowany jako usługę. Dzięki temu Twój serwer będzie się automatycznie uruchamiał przy starcie systemu, aktualizował, a Ty zyskasz łatwy dostęp do zarządzania i logów – i wiele więcej!

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />