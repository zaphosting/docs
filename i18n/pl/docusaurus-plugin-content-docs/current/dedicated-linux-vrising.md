---
id: dedicated-linux-vrising
title: "Serwer dedykowany: Konfiguracja serwera V-Rising na Linux"
description: "Dowiedz się, jak skonfigurować serwer dedykowany V-Rising na Linux, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim serwer dedykowany V-Rising? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Dowiedz się więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego poradnika [SSH Initial Access](dedicated-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz z tym narzędziem na serwerze Linux. Skorzystaj z naszego poradnika [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
V-Rising nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twój pierwszy raz z tym na serwerze Linux. Skorzystaj z naszego szybkiego poradnika [Wine Compatibility Layer Setup](dedicated-linux-wine.md), aby to zrobić przed dalszą instalacją.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio dla użytkownika `steam`. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację binarek Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to chwilę potrwać, zwłaszcza przy większych grach. Po udanej instalacji pojawi się komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer V-Rising. Możesz dalej konfigurować serwer, edytując pliki startowe.

Wszystkie parametry konfiguracyjne znajdziesz w plikach **ServerGameSettings.json** i **ServerHostSettings.json** w folderze Settings.
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Zobacz nasz poradnik V-Rising [Server Configuration](vrising-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i skopiuj przykładowy plik batch.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Możesz edytować ten plik według potrzeb. Gdy będziesz gotowy, uruchom nowy plik **start_server.bat** poleceniem poniżej. Pamiętaj, aby dodać **xvfb-run** i **wine**, by uruchomić go przez warstwę kompatybilności Wine.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

W konsoli powinny pojawić się logi, które potwierdzą poprawne uruchomienie serwera. Pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wyszukując na liście serwerów `[twoj_adres_ip]:8211`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer V-Rising na swoim serwerze dedykowanym! Kolejnym krokiem polecamy nasz poradnik [Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer gier jako usługę systemową. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!