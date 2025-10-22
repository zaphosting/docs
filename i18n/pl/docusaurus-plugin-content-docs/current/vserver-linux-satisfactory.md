---
id: vserver-linux-satisfactory
title: "VPS: Satisfactory Serwer Dedykowany Linux - Konfiguracja"
description: "Dowiedz się, jak zainstalować serwer dedykowany Satisfactory na swoim Linux VPS, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: Satisfactory
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować serwer dedykowany Satisfactory? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować ten serwer na Twoim Linux VPS za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z integracją do panelu głównego ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwszy dostęp](vserver-linux-ssh.md).

Jeśli to Twoje pierwsze użycie SteamCMD na Linuxie, musisz najpierw przeprowadzić jego konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio do katalogu użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – gry o większym rozmiarze mogą zająć trochę czasu. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Satisfactory. Możesz dalej konfigurować serwer, edytując pliki konfiguracyjne znajdujące się w katalogu serwera.

Wszystkie parametry konfiguracyjne znajdziesz w plikach **Engine.ini** oraz **GameUserSettings.ini** w folderze Saved.
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom skrypt **FactoryServer.sh**.
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

W konsoli powinny pojawić się logi, które oznaczają, że serwer wystartował poprawnie. Pamiętaj, że pierwszy start może potrwać dłużej, bo wszystko jest konfigurowane. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_IP]:15777`.

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś i skonfigurowałeś serwer Satisfactory na swoim VPS! Kolejnym krokiem polecamy nasz [poradnik Setup Linux Service](vserver-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer dedykowany jako usługę systemową. Dzięki temu zyskasz automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!

<InlineVoucher />