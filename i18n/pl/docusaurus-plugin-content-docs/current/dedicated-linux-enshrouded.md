---
id: dedicated-linux-enshrouded
title: "Serwer dedykowany: Enshrouded Serwer dedykowany Linux - instalacja"
description: "Dowiedz się, jak zainstalować i uruchomić serwer dedykowany Enshrouded na Linuxie, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim serwer dedykowany Enshrouded? Trafiłeś idealnie. W tym poradniku wyjaśnimy krok po kroku, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface tutaj](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwsze połączenie](dedicated-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twoje pierwsze użycie tego narzędzia na Linuxie. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
Enshrouded nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twoje pierwsze użycie tego na Linuxie. Skorzystaj z naszego szybkiego [poradnika Wine Compatibility Layer Setup](dedicated-linux-wine.md), aby to skonfigurować przed dalszymi krokami.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację za pomocą poniższego polecenia, które uruchomi SteamCMD bezpośrednio dla użytkownika `steam`. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację binarek Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania, może to potrwać dłużej przy większych grach. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Enshrouded. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Wszystkie parametry konfiguracyjne możesz zmienić, edytując plik **enshrouded_server.json** w katalogu głównym.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Zobacz nasz poradnik Enshrouded [Konfiguracja serwera](enshrouded-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchomienie i połączenie z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **enshrouded_server.exe** za pomocą poniższego polecenia. Pamiętaj, aby dodać polecenia **xvfb-run** i **wine**, aby uruchomić go przez warstwę kompatybilności Wine.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

W terminalu powinno pojawić się wiele logów. Jeśli zobaczysz komunikat `[Session] 'HostOnline' (up)!`, oznacza to, że serwer uruchomił się poprawnie. Połączysz się z nim, dodając dane serwera w zakładce **Znajdź gry**: `[twoj_adres_ip]:15636`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Enshrouded na swoim serwerze dedykowanym! Kolejnym krokiem polecamy zapoznanie się z naszym poradnikiem [Setup Linux Service](dedicated-linux-create-gameservice.md), który pokazuje, jak ustawić serwer gry jako usługę systemową. Dzięki temu serwer będzie się automatycznie uruchamiał przy starcie, aktualizował, a Ty zyskasz łatwy dostęp do zarządzania i logów!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!