---
id: dedicated-linux-conan
title: "Serwer dedykowany: Conan Exiles Serwer dedykowany Linux - konfiguracja"
description: "Dowiedz się, jak skonfigurować serwer dedykowany Conan Exiles na Linuxie, aby bezproblemowo hostować i zarządzać rozgrywką → Sprawdź teraz"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim serwer dedykowany Conan Exiles? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiedziałeś, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka klików skonfigurujesz serwery gier z integracją do swojego panelu głównego ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwszy dostęp](dedicated-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz na tym serwerze Linux. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
Conan Exiles nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twój pierwszy raz na tym serwerze Linux. Skorzystaj z naszego szybkiego [poradnika Wine Compatibility Layer Setup](dedicated-linux-wine.md), aby to skonfigurować przed dalszymi krokami.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio dla użytkownika `steam`. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację binarek Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Poczekaj cierpliwie na pobranie – przy większych grach może to chwilę potrwać. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Conan Exiles. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Wszystkie parametry konfiguracyjne znajdziesz i edytujesz w pliku **WindowsServerEngine.ini** pod ścieżką:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Możesz dodać opcje konfiguracyjne, np. nazwę serwera, hasło i hasło admina, dodając do pliku takie wpisy:
```
[OnlineSubsystem]
ServerName=[twoja_nazwa_serwera]
ServerPassword=[twoje_hasło]

[ServerSettings]
AdminPassword=[twoje_hasło_admina]
```

Polecamy zajrzeć na [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) po pełną listę dostępnych opcji.

## Uruchomienie i połączenie z serwerem

Teraz czas odpalić serwer. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **ConanSandboxServer.exe** poleceniem poniżej. Pamiętaj, żeby dodać **xvfb-run** i **wine64**, żeby uruchomić go przez warstwę Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

W terminalu pojawi się masa logów, co oznacza, że serwer się uruchamia. Połączysz się z nim, wyszukując go na liście serwerów lub bezpośrednio przez: `[twój_adres_ip]:7777`.

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś serwer Conan Exiles na swoim serwerze dedykowanym! Następny krok? Sprawdź nasz [poradnik Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer gier jako usługę. To daje wiele korzyści, jak automatyczne uruchamianie serwera przy starcie, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, śmiało kontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!

<InlineVoucher />