---
id: vserver-linux-cs16
title: "VPS: Counter-Strike 1.6 Serwer Dedykowany Linux - Instalacja"
description: "Dowiedz się, jak szybko i sprawnie zainstalować serwer dedykowany Counter-Strike 1.6 na swoim VPS z Linuxem → Sprawdź teraz"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS z Linuxem i chcesz zainstalować na nim serwer dedykowany Counter-Strike 1.6? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować ten serwer na Twoim Linuxowym VPS za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces będzie bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwala na szybkie uruchamianie serwerów gier z integracją w panelu głównym ZAP-Hosting, dosłownie kilkoma kliknięciami? Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwszy dostęp](vserver-linux-ssh.md). Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz z tym narzędziem na Linuxie. Skorzystaj z naszego [poradnika SteamCMD Linux](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio do katalogu użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 90 validate +quit
```

Poczekaj cierpliwie na pobranie plików – może to chwilę potrwać, zwłaszcza przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Counter-Strike 1.6. Możesz dalej konfigurować serwer, edytując plik startowy.

Przejdź do katalogu głównego, a następnie do folderu cfg i otwórz plik `server.cfg`, gdzie możesz zmieniać ustawienia serwera.
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Wygenerujesz go na stronie http://steamcommunity.com/dev/managegameservers, tworząc token dla gry o ID 90, czyli Counter-Strike 1.6.

Po otrzymaniu tokenu dodaj go do parametrów startowych serwera jako `+sv_setsteamaccount <TOKEN>`.

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom serwer poleceniem:
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

W terminalu zaczną pojawiać się logi, które oznaczają, że serwer uruchomił się poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twoj_adres_ip]:2456`.

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś serwer Counter-Strike 1.6 na swoim VPS! Kolejnym krokiem polecamy nasz [poradnik o konfiguracji usługi Linux](vserver-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer dedykowany jako usługę systemową. Dzięki temu serwer będzie się automatycznie uruchamiał przy starcie VPS, aktualizował, a Ty zyskasz łatwy dostęp do logów i zarządzania!

Jeśli masz pytania lub potrzebujesz pomocy, nasz support jest dostępny codziennie i chętnie Ci pomoże! 🙂

<InlineVoucher />