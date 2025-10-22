---
id: dedicated-linux-hl2
title: "Serwer dedykowany: Half-Life 2 Dedicated Server Linux - konfiguracja"
description: "Dowiedz się, jak szybko i sprawnie zainstalować serwer dedykowany Half-Life 2 na swoim Linux VPS → Sprawdź teraz"
sidebar_label: "Half-Life 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować na nim serwer dedykowany Half-Life 2? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować tę usługę na Twoim serwerze Linux, korzystając ze SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwala na łatwe uruchamianie serwerów gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting, dosłownie kilkoma kliknięciami? Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md). Jeśli to Twój pierwszy raz z SteamCMD na Linuxie, musisz też przeprowadzić pierwszą konfigurację SteamCMD. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Half-Life 2 bezpośrednio do katalogu użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/hl2-ds' +login anonymous +app_update 232370 validate +quit
```

Poczekaj cierpliwie na pobranie plików – może to chwilę potrwać, zwłaszcza przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Half-Life 2. Możesz dalej konfigurować serwer, edytując plik startowy.

Przejdź do katalogu głównego, a następnie do folderu cfg i otwórz plik `server.cfg`. Tam możesz zmieniać ustawienia serwera.
```
nano /home/steam/hl2-ds/hl2mp/cfg/server.cfg
```

## Rejestracja tokena GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Wejdź na http://steamcommunity.com/dev/managegameservers i stwórz token, używając ID gry 232370, które odpowiada Half-Life 2.

Po otrzymaniu tokena dodaj go do parametrów startowych serwera jako `+sv_setsteamaccount <TOKEN>`.

## Uruchomienie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom serwer poleceniem:
```
./srcds_run -console -game hl2mp -secure +maxplayers 10 +map dm_runoff +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twój_adres_ip]:2456`.

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś serwer Half-Life 2 na swoim VPS! Kolejnym krokiem polecamy nasz [poradnik Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer dedykowany jako usługę systemową. Dzięki temu zyskasz automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem – jesteśmy dostępni codziennie, by Ci pomóc! 🙂

<InlineVoucher />