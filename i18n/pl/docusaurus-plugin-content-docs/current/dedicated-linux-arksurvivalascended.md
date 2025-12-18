---
id: dedicated-linux-arksurvivalascended
title: "Serwer dedykowany: ARK Survival Ascended Serwer dedykowany Linux - konfiguracja"
description: "Dowiedz się, jak skonfigurować serwer dedykowany ARK: Survival Ascended na Linuxie, aby cieszyć się płynną rozgrywką i łatwym zarządzaniem serwerem → Sprawdź teraz"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim serwer dedykowany ARK: Survival Ascended? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z pełną integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface tutaj](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwsze połączenie](dedicated-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twoje pierwsze użycie na tym serwerze Linux. Skorzystaj z naszego [poradnika SteamCMD na Linux](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
ARK: Survival Ascended nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję serwera Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twoje pierwsze użycie na serwerze Linux. Skorzystaj z naszego szybkiego [poradnika instalacji Wine](dedicated-linux-wine.md), zanim przejdziesz dalej.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to potrwać, zwłaszcza przy większych grach. Po udanej instalacji zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer ARK: Survival Ascended. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Wszystkie parametry możesz zmieniać, edytując plik **GameUserSettings.ini** w folderze Saved.

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

Zobacz nasz [poradnik konfiguracji serwera ARK: Survival Ascended](ark-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **ArkAscendedServer.exe** za pomocą poniższego polecenia. Pamiętaj, aby dodać polecenia **xvfb-run** i **wine**, które uruchomią serwer przez warstwę kompatybilności Wine.
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
Niestety, z powodu braku wsparcia, nie możesz uruchomić wersji serwera z anty-cheatem Battleye na Linuxie. Anty-cheat nie jest kompatybilny z tym systemem.
:::

W konsoli powinny pojawić się logi, co oznacza, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twój_adres_ip]:7777`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer ARK: Survival Ascended na swoim serwerze dedykowanym! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem konfiguracji usługi Linux](dedicated-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer gier jako usługę. Dzięki temu zyskasz automatyczne uruchamianie serwera przy starcie, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!