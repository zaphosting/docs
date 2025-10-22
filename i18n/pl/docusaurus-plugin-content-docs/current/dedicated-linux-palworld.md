---
id: dedicated-linux-palworld
title: "Serwer dedykowany: Konfiguracja Palworld Dedicated Server na Linux"
description: "Dowiedz się, jak zainstalować i skonfigurować Palworld Dedicated Server na Linuxie, aby zarządzać rozgrywką bez problemów → Sprawdź teraz"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim serwer Palworld Dedicated? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy, jak zainstalować tę usługę na Twoim Linuxowym serwerze za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka klików skonfigurujesz serwery gier z integracją do panelu głównego ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface tutaj](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

Jeśli to Twoje pierwsze użycie SteamCMD na tym serwerze, musisz przejść przez wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Palworld bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – gry o większym rozmiarze mogą chwilę zająć. Po udanej instalacji zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Palworld. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Musisz skopiować domyślny plik konfiguracyjny do folderu zapisu, aby móc go edytować.
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Po skopiowaniu otwórz plik **PalWorldSettings.ini**, aby zmienić podstawowe parametry konfiguracji.
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Zajrzyj do naszego poradnika Palworld [Server Configuration](palworld-configuration.md), żeby poznać wszystkie dostępne opcje i ich działanie.

## Uruchomienie i połączenie z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom skrypt powłoki **PalServer.sh**.
```
/home/steam/Palworld-Server/PalServer.sh
```

W konsoli powinny pojawić się logi, w tym wersja gry, co oznacza, że serwer uruchomił się poprawnie. Jeśli wszystko pójdzie zgodnie z planem, Twój serwer będzie widoczny na liście serwerów. Możesz też połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_ip]:8211`.

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer Palworld na swoim serwerze dedykowanym! Kolejnym krokiem polecamy nasz poradnik [Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer gry jako usługę systemową. Dzięki temu Twój serwer będzie się automatycznie uruchamiał przy starcie, aktualizował, a Ty zyskasz łatwy dostęp do logów i zarządzania!

Jeśli masz pytania lub problemy, śmiało kontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!

<InlineVoucher />