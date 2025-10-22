---
id: vserver-linux-vrising
title: "VPS: V-Rising Serwer Dedykowany Linux - Instalacja"
description: "Dowiedz się, jak efektywnie zainstalować i uruchomić serwer dedykowany V-Rising na swoim VPS z Linuxem → Sprawdź teraz"
sidebar_label: V-Rising
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS z Linuxem i chcesz zainstalować na nim serwer dedykowany V-Rising? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwala na szybkie uruchomienie serwerów gier z integracją wprost z Twoim panelem głównym ZAP-Hosting? Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](vserver-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz z tym narzędziem na Linuxie. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
V-Rising nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twój pierwszy raz z tym na Linuxie. Skorzystaj z naszego szybkiego [poradnika Wine Compatibility Layer Setup](vserver-linux-wine.md), aby to zrobić przed dalszą instalacją.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Windows na Twoim użytkowniku `steam`. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację binarek Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

Poczekaj cierpliwie na pobranie – może to chwilę potrwać przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer V-Rising. Możesz dalej konfigurować serwer, edytując pliki startowe.

Wszystkie parametry konfiguracyjne znajdziesz w plikach **ServerGameSettings.json** i **ServerHostSettings.json** w folderze Settings.
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

Zobacz nasz poradnik V-Rising [Konfiguracja Serwera](vrising-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchomienie i połączenie z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i skopiuj przykładowy plik batch.
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

Możesz edytować ten plik według potrzeb. Gdy będziesz gotowy, uruchom nowy plik **start_server.bat** poleceniem poniżej. Pamiętaj, aby dodać **xvfb-run** i **wine**, by uruchomić go przez warstwę kompatybilności Wine.
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

W terminalu powinny pojawić się logi, które potwierdzą poprawny start serwera. Pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_ip]:8211`.

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś serwer V-Rising na swoim VPS! Kolejnym krokiem polecamy nasz poradnik [Setup Linux Service](vserver-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer dedykowany jako usługę systemową. To daje wiele korzyści, jak automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, nasz support jest do Twojej dyspozycji codziennie!

<InlineVoucher />