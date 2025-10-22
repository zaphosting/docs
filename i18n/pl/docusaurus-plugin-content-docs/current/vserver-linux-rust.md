---
id: vserver-linux-rust
title: "VPS: Rust Serwer Dedykowany Linux - Instalacja"
description: "Dowiedz się, jak zainstalować Rust Serwer Dedykowany na swoim Linux VPS za pomocą SteamCMD, aby bezproblemowo hostować serwer gier → Sprawdź teraz"
sidebar_label: Rust
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Linux VPS i chcesz zainstalować na nim Rust Serwer Dedykowany? Trafiłeś idealnie. W tym poradniku wyjaśnimy krok po kroku, jak zainstalować tę usługę na Twoim serwerze Linux, korzystając ze SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwala na łatwe uruchamianie usług serwerów gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting, w zaledwie kilka kliknięć? Sprawdź więcej o [GS/TS3 Interface tutaj](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](vserver-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz z tym narzędziem na Linuxie. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Rust bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

Bądź cierpliwy podczas pobierania, może to potrwać chwilę, zwłaszcza przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Rust. Możesz dalej konfigurować serwer przez pliki konfiguracyjne znajdujące się w katalogu serwera.

Przejdź do katalogu głównego i stwórz plik `.sh`. Będzie to skrypt bash do uruchamiania serwera oraz ustawiania różnych parametrów konfiguracyjnych.
```
nano /home/steam/Rust-Server/start_server.sh
```

Dodaj teraz do pliku poniższą zawartość. W komendzie znajdują się podstawowe i najczęściej używane parametry. Jeśli chcesz dodać więcej lub dowiedzieć się więcej o każdej opcji, polecamy zajrzeć na [oficjalną wiki Rust](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver), gdzie znajdziesz wszystkie dostępne opcje konfiguracyjne.
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "twoja_nazwa_serwera" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

Zapisz plik używając `CTRL+X`, następnie `Y` i `Enter`. Na koniec, aby skrypt bash był wykonywalny bez uprawnień sudo, nadaj mu prawa do wykonania:
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

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Rust na swoim VPS! Kolejnym krokiem polecamy nasz [poradnik Setup Linux Service](vserver-linux-create-gameservice.md), który pokaże Ci, jak ustawić nowy dedykowany serwer gier jako usługę systemową. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />