---
id: dedicated-linux-foundry
title: "Serwer dedykowany: Instalacja Foundry Dedicated Server na Linux"
description: "Dowiedz się, jak zainstalować serwer Foundry Dedicated na swoim serwerze Linux, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: Foundry
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim usługę Foundry Dedicated Server? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Dowiedz się więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego poradnika [SSH Initial Access](dedicated-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz z tym narzędziem na Linuxie. Skorzystaj z naszego poradnika [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
Foundry nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twój pierwszy raz z tym na Linuxie. Skorzystaj z naszego szybkiego poradnika [Wine Compatibility Layer Setup](dedicated-linux-wine.md), aby to skonfigurować przed dalszymi krokami.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Foundry bezpośrednio dla użytkownika `steam`. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację wersji Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania — może to potrwać, zwłaszcza przy większych plikach. Po udanej instalacji zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Foundry. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Wszystkie parametry konfiguracyjne znajdziesz i możesz edytować w pliku **app.cfg** w katalogu głównym.
```
nano /home/steam/Foundry-Server/app.cfg
```

Zobacz nasz poradnik Foundry [Server Configuration](foundry-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **FoundryDedicatedServerLauncher.exe** poleceniem poniżej. Pamiętaj, aby dodać polecenia **xvfb-run** i **wine**, które uruchomią serwer przez warstwę kompatybilności Wine.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

W konsoli powinny pojawić się logi, które potwierdzą poprawne uruchomienie serwera. Jeśli wszystko pójdzie zgodnie z planem, serwer pojawi się na liście serwerów. Możesz też połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_ip]:3724`.

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer Foundry na swoim serwerze dedykowanym! Kolejnym krokiem polecamy zapoznanie się z naszym poradnikiem [Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer gier jako usługę systemową. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, śmiało kontaktuj się z naszym supportem — jesteśmy do Twojej dyspozycji codziennie!