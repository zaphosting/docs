---
id: dedicated-linux-tf2
title: "Serwer dedykowany: Konfiguracja serwera Team Fortress 2 na Linux"
description: "Dowiedz się, jak szybko i sprawnie postawić serwer dedykowany Team Fortress 2 na swoim Linux VPS → Sprawdź teraz"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować na nim serwer dedykowany Team Fortress 2? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim Linux serwerze za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwoli Ci w kilka klików skonfigurować serwery gier z integracją do Twojego panelu głównego ZAP-Hosting? Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md). Jeśli to Twój pierwszy raz z SteamCMD na Linuxie, musisz też przejść przez wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Team Fortress 2 bezpośrednio do katalogu `steam`.
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

Poczekaj cierpliwie na pobranie plików – może to chwilę potrwać, zwłaszcza przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Team Fortress 2. Możesz dalej konfigurować serwer, edytując plik startowy.

Przejdź do katalogu głównego, a następnie do folderu cfg i otwórz plik `server.cfg`, gdzie możesz zmieniać opcje serwera.
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Wejdź na http://steamcommunity.com/dev/managegameservers i stwórz token dla gry o ID 232250, czyli Team Fortress 2.

Po otrzymaniu tokenu dodaj go do parametrów startowych serwera jako `+sv_setsteamaccount <TOKEN>`.

## Uruchomienie i łączenie się z serwerem

Teraz czas odpalić serwer. Przejdź do głównego katalogu gry i uruchom serwer poleceniem:
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W konsoli zaczną pojawiać się logi, co oznacza, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twój_adres_IP]:2456`.

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer Team Fortress 2 na Twoim VPS! Kolejnym krokiem polecamy nasz [poradnik Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer dedykowany jako usługę systemową. Dzięki temu serwer będzie się automatycznie włączał przy starcie VPS, aktualizował, a Ty zyskasz łatwy dostęp do zarządzania i logów – i wiele więcej!

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂