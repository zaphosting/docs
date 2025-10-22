---
id: vserver-linux-l4d2
title: "VPS: Left 4 Dead 2 Serwer Dedykowany Linux - Instalacja"
description: "Dowiedz się, jak zainstalować serwer dedykowany Left 4 Dead 2 na swoim Linux VPS, aby cieszyć się płynną rozgrywką i łatwym zarządzaniem serwerem → Sprawdź teraz"
sidebar_label: "Left 4 Dead 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować serwer dedykowany Left 4 Dead 2? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować ten serwer na Twoim Linux VPS za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces będzie bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z pełną integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](vserver-linux-ssh.md). Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz na Linux VPS. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Left 4 Dead 2 bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/l4d2-ds' +login anonymous +app_update 222840 validate +quit
```

Poczekaj cierpliwie na pobranie plików – może to chwilę potrwać, zwłaszcza przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Left 4 Dead 2. Możesz dalej konfigurować serwer, edytując plik startowy.

Przejdź do katalogu głównego, a następnie do folderu cfg i otwórz plik `server.cfg`. Tam możesz zmieniać ustawienia serwera.
```
nano /home/steam/l4d2-ds/l4d2/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Wygenerujesz go na stronie http://steamcommunity.com/dev/managegameservers, tworząc token dla gry o ID 222840, czyli Left 4 Dead 2.

Po otrzymaniu tokenu dodaj go do parametrów startowych serwera jako `+sv_setsteamaccount <TOKEN>`.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wykonaj poniższe polecenie:
```
./srcds_run -console -game left4dead2 -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twoj_adres_ip]:2456`.

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś serwer Left 4 Dead 2 na swoim VPS! Kolejnym krokiem polecamy nasz [poradnik Setup Linux Service](vserver-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer dedykowany jako usługę systemową. Dzięki temu Twój serwer będzie się automatycznie uruchamiał przy starcie VPS, aktualizował, a Ty zyskasz łatwy dostęp do logów i zarządzania!

Jeśli masz pytania lub potrzebujesz pomocy, nasz support jest dostępny codziennie i chętnie Ci pomoże! 🙂

<InlineVoucher />