---
id: dedicated-linux-soulmask
title: "Serwer dedykowany: Konfiguracja Soulmask Dedicated Server na Linux"
description: "Dowiedz się, jak zainstalować i skonfigurować Soulmask Dedicated Server na Linuxie, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: Soulmask
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim usługę Soulmask Dedicated Server? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilka klików skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

Jeśli to Twój pierwszy raz z SteamCMD na Linuxie, musisz przejść przez wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Soulmask bezpośrednio do katalogu użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to potrwać, zwłaszcza przy większych grach. Po udanej instalacji pojawi się komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Soulmask. Możesz dalej konfigurować serwer, edytując pliki konfiguracyjne znajdujące się w katalogu serwera.

Wszystkie parametry konfiguracyjne znajdziesz w pliku **Engine.ini** w folderze Saved.
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **StartServer.sh** poleceniem:
```
/home/steam/Soulmask-Server/StartServer.sh
```

W konsoli powinny pojawić się logi, które oznaczają, że serwer uruchomił się poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_ip]:18888`.

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś i skonfigurowałeś serwer Soulmask na swoim serwerze dedykowanym! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer gier jako usługę systemową. Dzięki temu zyskasz automatyczne uruchamianie serwera przy starcie, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!