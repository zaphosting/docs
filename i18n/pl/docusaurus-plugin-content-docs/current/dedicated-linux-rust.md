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

Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim Rust Dedicated Server? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface tutaj](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

Jeśli to Twój pierwszy raz z SteamCMD na Linuxie, musisz przeprowadzić wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje Rust Dedicated Server bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to chwilę potrwać, zwłaszcza przy większych grach. Po udanej instalacji zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Rust. Możesz dalej konfigurować serwer przez pliki konfiguracyjne znajdujące się w katalogu serwera.

Przejdź do katalogu głównego i stwórz plik `.sh`. Będzie to skrypt bash do uruchamiania serwera oraz ustawiania różnych parametrów konfiguracyjnych.
```
nano /home/steam/Rust-Server/start_server.sh
```

Dodaj do pliku poniższą zawartość. W komendzie znajdziesz podstawowe i najczęściej używane parametry. Jeśli chcesz dodać więcej lub dowiedzieć się więcej o każdej opcji, polecamy zajrzeć na [oficjalną wiki Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver), gdzie znajdziesz wszystkie dostępne opcje konfiguracji.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Zapisz plik używając `CTRL+X`, potem `Y` i `Enter`. Na koniec, aby skrypt był wykonywalny bez sudo, nadaj mu uprawnienia do uruchamiania:
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom skrypt **start_server.sh**.
```
/home/steam/Rust-Server/start_server.sh
```

W terminalu powinny pojawić się logi, które potwierdzą, że serwer się uruchomił. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko jest konfigurowane. Jeśli wszystko pójdzie zgodnie z planem, Twój serwer pojawi się na liście serwerów. Możesz też połączyć się bezpośrednio, wpisując: `[twoj_adres_ip]:28015`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Rust na swoim serwerze dedykowanym! Kolejnym krokiem polecamy nasz [poradnik Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer gier jako usługę systemową. Dzięki temu Twój serwer będzie się automatycznie uruchamiał przy starcie, aktualizował, a Ty zyskasz łatwy dostęp do zarządzania i logów – i wiele więcej!

Jeśli masz pytania lub problemy, śmiało kontaktuj się z naszym supportem – jesteśmy dostępni codziennie, by Ci pomóc!