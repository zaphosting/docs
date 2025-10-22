---
id: vserver-linux-tf2
title: "VPS: Konfiguracja dedykowanego serwera Team Fortress 2 na Linux"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować dedykowany serwer Team Fortress 2 na swoim VPS z Linux → Sprawdź teraz"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS z Linux i chcesz zainstalować na nim dedykowany serwer Team Fortress 2? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwoli Ci skonfigurować serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting w zaledwie kilka kliknięć? Dowiedz się więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
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

Po zalogowaniu rozpocznij instalację, używając poniższego polecenia, które uruchomi SteamCMD i zainstaluje serwer Team Fortress 2 bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

Bądź cierpliwy podczas pobierania – gry o większym rozmiarze mogą zająć trochę czasu. Po zakończeniu zobaczysz komunikat potwierdzający pomyślną instalację.

## Konfiguracja

Na tym etapie zakończyłeś podstawową konfigurację serwera Team Fortress 2. Możesz dalej dostosować serwer, edytując plik startowy.

Przejdź do katalogu głównego, następnie do folderu cfg i otwórz plik `server.cfg`, gdzie możesz zmienić opcje serwera.
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby wygenerować GSLT, odwiedź http://steamcommunity.com/dev/managegameservers i utwórz token, używając ID gry 232250, które odpowiada Team Fortress 2.

Po uzyskaniu tokenu dodaj go do parametrów uruchamiania serwera jako `+sv_setsteamaccount <TOKEN>`.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wykonaj poniższe polecenie startowe:
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer uruchomił się poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, ponieważ wszystko jest konfigurowane. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów adres: `[twoj_adres_ip]:2456`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Team Fortress 2 na swoim VPS! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem konfiguracji usługi Linux](vserver-linux-create-gameservice.md), który pokaże Ci, jak uruchomić swój dedykowany serwer gier jako usługę. Dzięki temu zyskasz automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />