---
id: vserver-linux-css
title: "VPS: Counter-Strike: Source Serwer Dedykowany Linux - Konfiguracja"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować serwer dedykowany Counter-Strike: Source na swoim Linux VPS → Sprawdź teraz"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować serwer dedykowany Counter-Strike: Source? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim Linux serwerze za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwala na łatwe uruchamianie serwerów gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting, dosłownie kilkoma kliknięciami? Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](vserver-linux-ssh.md). Jeśli to Twój pierwszy raz z SteamCMD na Linuxie, musisz też przejść pierwszą konfigurację SteamCMD. Użyj naszego [poradnika SteamCMD Linux Setup](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni gotowy, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 232330 validate +quit
```

Poczekaj cierpliwie na pobranie plików, bo przy większych grach może to chwilę potrwać. Po udanej instalacji zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Counter-Strike: Source. Możesz dalej konfigurować serwer, edytując plik startowy.

Przejdź do katalogu głównego, a następnie do folderu cfg i otwórz plik `server.cfg`, gdzie możesz zmieniać opcje serwera.
```
nano /home/steam/css-ds/cstrike/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Wejdź na http://steamcommunity.com/dev/managegameservers i stwórz token, używając ID gry 232330, które odpowiada Counter-Strike: Source.

Po otrzymaniu tokenu dodaj go do parametrów startowych serwera jako `+sv_setsteamaccount <TOKEN>`.

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom serwer poleceniem:
```
./srcds_run -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwszy start może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twoj_adres_ip]:2456`.

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer Counter-Strike: Source na Twoim VPS! Kolejnym krokiem polecamy nasz [poradnik Setup Linux Service](vserver-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer dedykowany jako usługę systemową. Dzięki temu serwer będzie się automatycznie uruchamiał przy starcie VPS, aktualizował, a Ty zyskasz łatwy dostęp do zarządzania i logów – i wiele więcej!

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />