---
id: dedicated-linux-avorion
title: "Serwer dedykowany: Konfiguracja Avorion Dedicated Server na Linux"
description: "Dowiedz się, jak zainstalować i skonfigurować serwer dedykowany Avorion na swoim Linux VPS, aby bezproblemowo hostować serwer gier → Sprawdź teraz"
sidebar_label: Avorion
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Linux VPS i chcesz zainstalować na nim serwer dedykowany Avorion? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux, korzystając ze SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwoli Ci w kilka kliknięć skonfigurować serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting? Sprawdź więcej o [GS/TS3 Interface](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

Jeśli to Twoje pierwsze użycie SteamCMD na Linuxie, musisz przeprowadzić wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby zachować porządek.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Avorion bezpośrednio do katalogu użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to potrwać, zwłaszcza przy większych grach. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Avorion. Możesz skonfigurować ustawienia serwera bezpośrednio w pliku **startserver.sh**, który wcześniej skopiowałeś. Otwórz go poleceniem `nano /home/steam/Avorion-Server/startserver.sh` i dostosuj parametry serwera.

Parametry i ustawienia specyficzne dla świata możesz edytować w pliku konfiguracyjnym **server.ini**, który znajdziesz w folderze zapisu każdej galaktyki. Pliki te są przechowywane w katalogu domowym użytkownika (czyli `steam`) i możesz nimi zarządzać za pomocą poniższych poleceń:
```
# Wyświetl aktualne zapisy
ls /home/steam/.avorion/galaxies

# Edytuj konfigurację zapisu
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i utwórz kopię przykładowego pliku batch.
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

Możesz edytować ten plik według potrzeb. Gdy będziesz gotowy, uruchom nowy plik batch **startserver.sh** poleceniem:
```
/home/steam/Avorion-Server/startserver.sh
```

W konsoli powinny pojawić się logi, które oznaczają, że serwer się uruchomił. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko jest konfigurowane. Gdy serwer będzie gotowy, zobaczysz w konsoli komunikat `Server startup complete.`. Teraz możesz połączyć się z serwerem bezpośrednio przez przeglądarkę serwerów w grze, wpisując adres IP serwera i port (domyślnie 27000).

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Avorion na swoim VPS! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak uruchomić nowy serwer dedykowany jako usługę systemową. Dzięki temu zyskasz automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!