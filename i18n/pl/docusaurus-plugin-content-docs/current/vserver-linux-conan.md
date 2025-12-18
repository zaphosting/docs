---
id: vserver-linux-conan
title: "VPS: Conan Exiles Serwer Dedykowany Linux - Instalacja"
description: "Dowiedz się, jak zainstalować i uruchomić serwer dedykowany Conan Exiles na swoim Linux VPS z użyciem SteamCMD i kompatybilności Wine → Sprawdź teraz"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Linux VPS i chcesz zainstalować serwer dedykowany Conan Exiles? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować ten serwer na Twoim Linux VPS przy pomocy SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS? Dzięki temu w kilka klików skonfigurujesz serwery gier z integracją do panelu głównego ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwszy dostęp](vserver-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz na tym serwerze Linux. Skorzystaj z naszego [poradnika SteamCMD Linux](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
Conan Exiles nie oferuje natywnej wersji serwera na Linux, więc potrzebujesz dodatkowego kroku, by uruchomić wersję Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twój pierwszy raz na tym VPS. Skorzystaj z naszego szybkiego [poradnika instalacji Wine](vserver-linux-wine.md), zanim przejdziesz dalej.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Windows. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację binarek Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

Poczekaj cierpliwie na pobranie plików, może to chwilę potrwać przy większych grach. Po zakończeniu zobaczysz komunikat o sukcesie.

## Konfiguracja

Na tym etapie masz już zainstalowany serwer Conan Exiles. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Wszystkie parametry konfiguracyjne znajdziesz i edytujesz w pliku **WindowsServerEngine.ini** pod ścieżką:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Możesz dodać opcje konfiguracyjne, np. nazwę serwera, hasło i hasło admina, dodając do pliku takie wpisy:
```
[OnlineSubsystem]
ServerName=[twoja_nazwa_serwera]
ServerPassword=[twoje_haslo]

[ServerSettings]
AdminPassword=[twoje_haslo_admina]
```

Polecamy zajrzeć na [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) po pełną listę dostępnych opcji.

## Uruchomienie i połączenie z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom plik **ConanSandboxServer.exe** poleceniem poniżej. Pamiętaj, by dodać **xvfb-run** i **wine64**, żeby uruchomić go przez warstwę Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

W konsoli pojawi się masa logów, które oznaczają, że serwer się uruchamia. Połączysz się z nim, wyszukując go na liście serwerów lub bezpośrednio przez: `[twój_adres_ip]:7777`.

## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś serwer Conan Exiles na swoim VPS! Następny krok? Sprawdź nasz [poradnik konfiguracji usługi Linux](vserver-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer dedykowany jako usługę systemową. Dzięki temu serwer będzie się automatycznie uruchamiał przy starcie, aktualizował, a Ty zyskasz łatwy dostęp do logów i zarządzania.

Masz pytania lub problemy? Nasz support jest do Twojej dyspozycji codziennie!

<InlineVoucher />