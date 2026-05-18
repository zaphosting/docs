---
id: server-linux-arma3
title: "Arma 3 Serwer Dedykowany Linux - Instalacja"
description: "Dowiedz się, jak zainstalować i uruchomić Arma 3 Serwer Dedykowany na Linuxie, aby bezproblemowo hostować i zarządzać serwerem gier → Sprawdź teraz"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS/serwer dedykowany z Linuxem i chcesz zainstalować na nim serwer dedykowany Arma 3? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS/serwerze dedykowanym? Dzięki temu w kilka klików ustawisz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface tutaj](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim VPS/serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH Initial Access](dedicated-linux-ssh.md).

Jeśli to Twoje pierwsze użycie SteamCMD na Linuxie, musisz najpierw przejść konfigurację SteamCMD. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio dla użytkownika `steam`. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację binarek Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/arma3-server' +login anonymous +app_update 233780 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to chwilę potrwać, zwłaszcza przy większych grach. Po udanej instalacji zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Arma 3. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Wszystkie parametry serwera zmienisz, edytując plik **server.cfg** w katalogu głównym.
```
nano /home/steam/arma3-server/server.cfg
```

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **arma3server_x64** poleceniem:

```
/home/steam/arma3-server/arma3server_x64
```

W terminalu powinno pojawić się sporo logów, które potwierdzą, że serwer wystartował poprawnie.

Gracze będą mogli połączyć się bezpośrednio przez **przeglądarkę serwerów Arma 3**, używając Twojego adresu IP serwera i domyślnego portu **2302**.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś **serwer Arma 3** na swoim VPS/serwerze dedykowanym! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!

<InlineVoucher />