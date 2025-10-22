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
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim usługę Foundry Dedicated Server? Trafiłeś idealnie. W tym poradniku wyjaśnimy krok po kroku, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka klików skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Dowiedz się więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

Musisz też przeprowadzić pierwszą konfigurację SteamCMD, jeśli to Twoje pierwsze użycie tego narzędzia na serwerze Linux. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
Foundry nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twoje pierwsze użycie na serwerze Linux. Skorzystaj z naszego szybkiego [poradnika Wine Compatibility Layer Setup](dedicated-linux-wine.md), aby to zrobić przed dalszą instalacją.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację za pomocą poniższego polecenia, które uruchomi SteamCMD i zainstaluje serwer Foundry bezpośrednio dla użytkownika `steam`. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację binarek Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania, może to potrwać dłużej przy większych plikach. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie zakończyłeś podstawową instalację serwera Foundry. Możesz teraz dostosować konfigurację serwera przez edycję pliku konfiguracyjnego znajdującego się w katalogu serwera.

Wszystkie parametry konfiguracyjne znajdziesz w pliku **app.cfg** w katalogu głównym.
```
nano /home/steam/Foundry-Server/app.cfg
```

Sprawdź nasz poradnik Foundry [Server Configuration](foundry-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **FoundryDedicatedServerLauncher.exe** za pomocą poniższego polecenia. Pamiętaj, aby dodać polecenia **xvfb-run** i **wine**, które uruchomią serwer przez warstwę kompatybilności Wine.
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

W terminalu powinny pojawić się logi, które potwierdzą poprawny start serwera. Jeśli wszystko pójdzie zgodnie z planem, serwer będzie widoczny na liście serwerów. Możesz też połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_ip]:3724`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Foundry na swoim serwerze dedykowanym! Kolejnym krokiem polecamy zapoznanie się z naszym poradnikiem [Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer gier jako usługę systemową. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc!

<InlineVoucher />