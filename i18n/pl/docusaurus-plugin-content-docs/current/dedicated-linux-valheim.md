---
id: dedicated-linux-valheim
title: "Serwer dedykowany: Konfiguracja Valheim Dedicated Server na Linux"
description: "Dowiedz się, jak skonfigurować Valheim Dedicated Server na Linux, aby efektywnie hostować swoją grę i zoptymalizować wydajność serwera → Sprawdź teraz"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim usługę Valheim Dedicated Server? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

Jeśli to Twoje pierwsze użycie SteamCMD na tym serwerze Linux, musisz przeprowadzić wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Valheim bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to potrwać dłużej przy większych grach. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Valheim. Możesz dalej konfigurować serwer, edytując bezpośrednio plik startowy.

Przejdź do katalogu głównego i otwórz plik `.sh`. Tutaj możesz zmieniać parametry.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom plik powłoki **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

W terminalu powinny pojawić się logi, które oznaczają, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_ip]:2456`.

:::info
Jeśli nie możesz się połączyć i w konsoli pojawiają się błędy `PlayFab`, może być konieczne wyłączenie wsparcia crossplay, bo to obecny problem wersji Linux. Aby to zrobić, uruchom `nano /home/steam/Valheim-Server/start_server.sh` i usuń flagę `-crossplay`.

Jeśli potrzebujesz crossplay, alternatywą jest instalacja wersji Windows i użycie **Wine** jako warstwy kompatybilności. Skorzystaj z naszego szybkiego [poradnika Wine Compatibility Layer Setup](dedicated-linux-wine.md). Gdy wszystko będzie gotowe, zainstaluj serwer Valheim Windows przez SteamCMD poleceniem:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Po instalacji uruchom wersję Windows przez Wine poleceniem: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Valheim na swoim serwerze dedykowanym! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem Setup Linux Service](dedicated-linux-create-gameservice.md), który pokazuje, jak ustawić nowy serwer gier dedykowany jako usługę. Dzięki temu zyskasz automatyczne uruchamianie serwera przy starcie, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!