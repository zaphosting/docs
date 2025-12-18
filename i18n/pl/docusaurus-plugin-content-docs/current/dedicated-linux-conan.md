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
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwsze połączenie](dedicated-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz z tym narzędziem na Linuxie. Skorzystaj z naszego [poradnika SteamCMD Linux](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni gotowy, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
Conan Exiles nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twój pierwszy raz z tym na Linuxie. Skorzystaj z naszego szybkiego [poradnika instalacji Wine](dedicated-linux-wine.md), aby to przygotować przed dalszą konfiguracją.
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

Poczekaj cierpliwie na zakończenie pobierania – gry o większym rozmiarze mogą chwilę zająć. Po udanej instalacji zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Conan Exiles. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Wszystkie parametry konfiguracyjne znajdziesz i edytujesz w pliku **WindowsServerEngine.ini** pod ścieżką:
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

Możesz dodać opcje konfiguracyjne, wpisując odpowiednie parametry. Na przykład, aby ustawić nazwę serwera, hasło i hasło administratora, dodaj do pliku:
```
[OnlineSubsystem]
ServerName=[twoja_nazwa_serwera]
ServerPassword=[twoje_haslo]

[ServerSettings]
AdminPassword=[twoje_haslo_admina]
```

Polecamy zajrzeć na [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) po pełną listę dostępnych opcji.

## Uruchomienie i połączenie z serwerem

Teraz czas odpalić serwer. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **ConanSandboxServer.exe** poleceniem poniżej. Pamiętaj, aby dodać **xvfb-run** i **wine64**, by uruchomić serwer przez warstwę kompatybilności Wine.
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

W terminalu powinno pojawić się sporo logów, co oznacza, że serwer się uruchamia. Połączysz się z nim, wyszukując go na liście serwerów lub bezpośrednio przez: `[twoj_adres_ip]:7777`.

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer Conan Exiles na Twoim serwerze dedykowanym! Następny krok? Sprawdź nasz [poradnik konfiguracji usługi Linux](dedicated-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer gier jako usługę systemową. Dzięki temu serwer będzie się automatycznie uruchamiał przy starcie, aktualizował, a Ty zyskasz łatwy dostęp do zarządzania i logów – i wiele więcej!

Masz pytania lub problemy? Nasz support jest do Twojej dyspozycji codziennie i chętnie pomoże!