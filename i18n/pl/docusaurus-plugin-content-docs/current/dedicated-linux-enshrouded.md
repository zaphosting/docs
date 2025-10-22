---
id: dedicated-linux-enshrouded
title: "Serwer dedykowany: Konfiguracja Enshrouded Dedicated Server na Linux"
description: "Dowiedz się, jak zainstalować i uruchomić Enshrouded Dedicated Server na Linux, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim usługę Enshrouded Dedicated Server? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface tutaj](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

Jeśli to Twoje pierwsze użycie SteamCMD na tym serwerze, musisz przeprowadzić jego wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
Enshrouded nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twoje pierwsze użycie na serwerze Linux. Skorzystaj z naszego szybkiego [poradnika Wine Compatibility Layer Setup](dedicated-linux-wine.md), aby to zrobić przed dalszymi krokami.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio dla użytkownika `steam`. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację binarek Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – gry o większym rozmiarze mogą chwilę zająć. Po udanej instalacji pojawi się komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Enshrouded. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Wszystkie parametry konfiguracyjne możesz zmienić, edytując plik **enshrouded_server.json** w katalogu głównym.
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

Zobacz nasz poradnik Enshrouded [Server Configuration](enshrouded-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **enshrouded_server.exe** poleceniem poniżej. Pamiętaj, aby dodać polecenia **xvfb-run** i **wine**, które uruchomią serwer przez warstwę kompatybilności Wine.
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

W konsoli powinno pojawić się wiele logów. Jeśli zobaczysz komunikat `[Session] 'HostOnline' (up)!`, oznacza to, że serwer uruchomił się poprawnie. Połączysz się z nim, dodając dane serwera w zakładce **Find Games**: `[twoj_adres_ip]:15636`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Enshrouded na swoim serwerze dedykowanym! Kolejnym krokiem polecamy nasz poradnik [Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer gier jako usługę. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!

<InlineVoucher />