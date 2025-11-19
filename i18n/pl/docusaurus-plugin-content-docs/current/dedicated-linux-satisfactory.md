---
id: dedicated-linux-satisfactory
title: "Serwer dedykowany: Konfiguracja Satisfactory Dedicated Server na Linux"
description: "Zacznij instalować i konfigurować Satisfactory Dedicated Server na swoim serwerze Linux, aby bezproblemowo hostować serwer gier → Dowiedz się więcej już teraz"
sidebar_label: Satisfactory
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim usługę Satisfactory Dedicated Server? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilku klikach skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface tutaj](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

Jeśli to Twoje pierwsze użycie SteamCMD na tym serwerze Linux, musisz przeprowadzić wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby zachować porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Satisfactory bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to potrwać, zwłaszcza przy większych grach. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie zakończyłeś podstawową konfigurację serwera Satisfactory. Możesz dalej dostosować ustawienia serwera, edytując pliki konfiguracyjne znajdujące się w katalogu serwera.

Wszystkie parametry konfiguracyjne znajdziesz w plikach **Engine.ini** oraz **GameUserSettings.ini** w folderze Saved.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom skrypt powłoki **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

W konsoli powinny pojawić się logi, które oznaczają, że serwer uruchomił się poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko jest konfigurowane. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów adres: `[twoj_adres_ip]:15777`.

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś i skonfigurowałeś serwer Satisfactory na swoim serwerze dedykowanym! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem Setup Linux Service](dedicated-linux-create-gameservice.md), który pokazuje, jak uruchomić nowy serwer gier jako usługę systemową. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy dostępni codziennie, by Ci pomóc!