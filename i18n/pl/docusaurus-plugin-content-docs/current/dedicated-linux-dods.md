---
id: dedicated-linux-dods
title: "Serwer dedykowany: Day of Defeat: Source – konfiguracja serwera dedykowanego na Linux"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować serwer dedykowany Day of Defeat: Source na swoim VPS z Linux → Sprawdź teraz"
sidebar_label: "Day of Defeat: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS z Linux i chcesz zainstalować na nim serwer dedykowany Day of Defeat: Source? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwoli Ci w kilka kliknięć skonfigurować serwery gier z pełną integracją z Twoim panelem głównym ZAP-Hosting? Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH – pierwsze połączenie](dedicated-linux-ssh.md). Jeśli to Twoje pierwsze użycie SteamCMD na tym serwerze, musisz też przeprowadzić jego wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD na Linux](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację, używając poniższego polecenia, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio do katalogu użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/dod-ds' +login anonymous +app_update 232290 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to potrwać dłużej przy większych grach. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie zakończyłeś podstawową konfigurację serwera Day of Defeat: Source. Możesz teraz dostosować ustawienia serwera, edytując plik startowy.

Przejdź do katalogu głównego, a następnie do folderu `cfg` i otwórz plik `server.cfg`, gdzie możesz zmienić opcje serwera.
```
nano /home/steam/dod-ds/dod/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby go wygenerować, odwiedź http://steamcommunity.com/dev/managegameservers i stwórz token, używając ID gry 232290, które odpowiada Day of Defeat: Source.

Po uzyskaniu tokenu dodaj go do parametrów uruchamiania serwera jako `+sv_setsteamaccount <TOKEN>`.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wykonaj poniższe polecenie startowe:
```
./srcds_run -console -game dod -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko jest konfigurowane. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twój_adres_ip]:2456`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Day of Defeat: Source na swoim VPS! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem konfiguracji usługi Linux](dedicated-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer dedykowany jako usługę. Dzięki temu zyskasz automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub potrzebujesz pomocy, śmiało kontaktuj się z naszym supportem – jesteśmy dostępni codziennie, by Ci pomóc! 🙂