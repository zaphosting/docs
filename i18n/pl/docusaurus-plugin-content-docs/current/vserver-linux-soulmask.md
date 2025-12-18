---
id: vserver-linux-soulmask
title: "VPS: Instalacja serwera dedykowanego Soulmask na Linux"
description: "Dowiedz się, jak szybko i sprawnie zainstalować i skonfigurować serwer dedykowany Soulmask na swoim VPS z Linux → Sprawdź teraz"
sidebar_label: Soulmask
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS z Linux i chcesz zainstalować na nim serwer dedykowany Soulmask? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwoli Ci skonfigurować serwery gier z integracją wprost z Twojego panelu głównego ZAP-Hosting, w zaledwie kilka kliknięć? Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](vserver-linux-ssh.md).

Jeśli to Twój pierwszy raz z SteamCMD na Linux, musisz przeprowadzić wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany przed dalszymi krokami.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby wszystko było ładnie poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Soulmask bezpośrednio do katalogu użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to chwilę potrwać, zwłaszcza przy większych grach. Po udanej instalacji zobaczysz komunikat potwierdzający sukces.

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

W terminalu powinny pojawić się logi, które oznaczają, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_IP]:18888`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Soulmask na swoim VPS! Jako kolejny krok polecamy zapoznać się z naszym [poradnikiem Setup Linux Service](vserver-linux-create-gameservice.md), który pokazuje, jak uruchomić nowy serwer dedykowany jako usługę. To daje wiele korzyści, m.in. automatyczne uruchamianie serwera przy starcie VPS, automatyczne aktualizacje, łatwe zarządzanie i dostęp do logów oraz wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!

<InlineVoucher />