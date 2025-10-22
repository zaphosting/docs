---
id: dedicated-linux-nmrih
title: "Serwer dedykowany: No More Room In Hell – konfiguracja serwera dedykowanego na Linux"
description: "Dowiedz się, jak efektywnie skonfigurować serwer dedykowany No More Room In Hell na swoim Linux VPS → Sprawdź teraz"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować serwer dedykowany No More Room In Hell? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwala na łatwe uruchamianie serwerów gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting, w zaledwie kilka kliknięć? Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md). Jeśli to Twoje pierwsze użycie SteamCMD na Linuxie, musisz też przeprowadzić pierwszą konfigurację SteamCMD. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację, używając poniższego polecenia, które uruchomi instalację przez SteamCMD bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/nmrih-ds' +login anonymous +app_update 317670 validate +quit
```

Bądź cierpliwy, pobieranie może chwilę potrwać, zwłaszcza przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer No More Room In Hell. Możesz dalej konfigurować serwer, edytując plik startowy.

Przejdź do katalogu głównego, a następnie do folderu cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.
```
nano /home/steam/nmrih-ds/nmrih/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby wygenerować GSLT, odwiedź http://steamcommunity.com/dev/managegameservers i stwórz token, używając ID gry 317670, które odpowiada No More Room In Hell.

Po otrzymaniu tokenu dodaj go do parametrów startowych serwera jako `+sv_setsteamaccount <TOKEN>`.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wykonaj poniższe polecenie startowe:
```
./srcds_run -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W terminalu powinny pojawić się logi, które potwierdzą poprawny start serwera. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów adres: `[twoj_adres_ip]:2456`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer No More Room In Hell na swoim VPS! Kolejnym krokiem polecamy zapoznać się z naszym [poradnikiem Setup Linux Service](dedicated-linux-create-gameservice.md), który pokazuje, jak ustawić nowy serwer dedykowany jako usługę. Dzięki temu zyskujesz automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />