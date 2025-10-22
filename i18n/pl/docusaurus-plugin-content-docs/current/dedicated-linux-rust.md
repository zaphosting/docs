---
id: dedicated-linux-rust
title: "Serwer dedykowany: Konfiguracja Rust Dedicated Server na Linux"
description: "Dowiedz się, jak skonfigurować Rust Dedicated Server na Linux, aby efektywnie hostować swój serwer gier i zoptymalizować jego wydajność → Sprawdź teraz"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim Rust Dedicated Server? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z integracją do panelu głównego ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface tutaj](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

Jeśli to Twoje pierwsze użycie SteamCMD na tym serwerze Linux, musisz przeprowadzić wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje Rust Dedicated Server bezpośrednio do katalogu użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Bądź cierpliwy podczas pobierania – gry o większym rozmiarze mogą zająć trochę czasu. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Rust. Możesz dalej konfigurować serwer przez pliki konfiguracyjne znajdujące się w katalogu serwera.

Przejdź do katalogu głównego i stwórz plik `.sh`. Będzie to skrypt bash służący do uruchamiania serwera oraz ustawiania różnych parametrów konfiguracyjnych.
```
nano /home/steam/Rust-Server/start_server.sh
```

Wklej do pliku poniższą zawartość. W tym poleceniu znajdują się podstawowe i najczęściej używane parametry. Jeśli chcesz dodać więcej lub dowiedzieć się więcej o dostępnych opcjach, polecamy zajrzeć na [oficjalną wiki Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver).
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "twoja_nazwa_serwera" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Zapisz plik za pomocą `CTRL+X`, następnie `Y` i `Enter`. Na koniec nadaj plikowi uprawnienia do uruchamiania bez sudo:
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom skrypt **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

W terminalu powinny pojawić się logi, które potwierdzą, że serwer się uruchomił. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko jest konfigurowane. Jeśli wszystko pójdzie zgodnie z planem, Twój serwer pojawi się na liście serwerów. Możesz też połączyć się bezpośrednio, wpisując: `[twoj_adres_ip]:28015`.

## Podsumowanie

Gratulacje! Udało Ci się zainstalować i skonfigurować Rust Dedicated Server na swoim serwerze dedykowanym! Kolejnym krokiem polecamy nasz [poradnik Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer gier jako usługę systemową. Dzięki temu Twój serwer będzie się automatycznie uruchamiał przy starcie, aktualizował, a Ty zyskasz łatwy dostęp do zarządzania i logów.

Jeśli masz pytania lub problemy, nasz support jest do Twojej dyspozycji każdego dnia!

<InlineVoucher />