---
id: vserver-linux-avorion
title: "VPS: Konfiguracja serwera dedykowanego Avorion na Linux"
description: "Dowiedz się, jak zainstalować i skonfigurować serwer dedykowany Avorion na swoim VPS z Linuxem, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: Avorion
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS z Linuxem i chcesz zainstalować na nim serwer dedykowany Avorion? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować ten serwer na Twoim Linuxowym VPS za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwoli Ci w kilka kliknięć skonfigurować serwery gier z integracją do panelu głównego ZAP-Hosting? Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](vserver-linux-ssh.md).

Jeśli to Twoje pierwsze użycie SteamCMD na Linuxie, musisz najpierw przeprowadzić jego konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni gotowy przed dalszymi krokami.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
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

Parametry i ustawienia konkretnej galaktyki możesz edytować w pliku konfiguracyjnym **server.ini**, który znajduje się w folderze zapisu każdej galaktyki. Pliki te są przechowywane w katalogu domowym użytkownika (czyli `steam`) i możesz nimi zarządzać za pomocą poniższych komend:
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

W konsoli powinny pojawić się logi, które oznaczają, że serwer się uruchamia. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko jest konfigurowane. Gdy zobaczysz komunikat `Server startup complete.`, serwer jest gotowy. Teraz możesz połączyć się z nim bezpośrednio przez przeglądarkę serwerów w grze, wpisując adres IP serwera i port (domyślnie 27000).

## Podsumowanie

Gratulacje! Udało Ci się zainstalować i skonfigurować serwer Avorion na swoim VPS! Kolejnym krokiem polecamy zapoznanie się z naszym [poradnikiem Setup Linux Service](vserver-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer dedykowany jako usługę systemową. To daje wiele korzyści, takich jak automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, śmiało kontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!

<InlineVoucher />