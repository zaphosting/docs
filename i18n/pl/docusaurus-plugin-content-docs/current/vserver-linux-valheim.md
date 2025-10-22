---
id: vserver-linux-valheim
title: "VPS: Valheim Serwer Dedykowany Linux - Instalacja"
description: "Dowiedz się, jak zainstalować serwer dedykowany Valheim na swoim Linux VPS, aby cieszyć się płynną rozgrywką i łatwym zarządzaniem serwerem → Sprawdź teraz"
sidebar_label: Valheim
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować serwer dedykowany Valheim? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy, jak zainstalować ten serwer na Twoim Linux VPS za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces będzie bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS? Dzięki temu w kilka kliknięć skonfigurujesz serwery gier z integracją do panelu głównego ZAP-Hosting! Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - pierwszy dostęp](vserver-linux-ssh.md).

Jeśli to Twoje pierwsze użycie SteamCMD na Linux VPS, musisz wykonać wstępną konfigurację. Skorzystaj z naszego [poradnika SteamCMD na Linux](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany przed dalszymi krokami.

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby zachować porządek.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer Valheim bezpośrednio dla użytkownika `steam`.
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Poczekaj cierpliwie na pobranie plików – może to potrwać, zwłaszcza przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Valheim. Możesz dalej konfigurować serwer, edytując plik startowy.

Przejdź do katalogu głównego i otwórz plik `.sh`, gdzie możesz zmieniać parametry.
```
nano /home/steam/Valheim-Server/start_server.sh
```

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom skrypt **start_server.sh**.
```
/home/steam/Valheim-Server/start_server.sh
```

W terminalu powinny pojawić się logi, które oznaczają, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twój_adres_IP]:2456`.

:::info
Jeśli nie możesz się połączyć i w konsoli pojawiają się błędy `PlayFab`, może być konieczne wyłączenie wsparcia crossplay, bo to obecny problem wersji Linux. Aby to zrobić, edytuj plik `nano /home/steam/Valheim-Server/start_server.sh` i usuń flagę `-crossplay`.

Jeśli potrzebujesz crossplay, alternatywą jest instalacja wersji Windows i użycie **Wine** jako warstwy kompatybilności. Skorzystaj z naszego szybkiego [poradnika konfiguracji Wine](vserver-linux-wine.md). Gdy wszystko będzie gotowe, zainstaluj serwer Windows przez SteamCMD poleceniem:
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

Po instalacji uruchom wersję Windows przez Wine poleceniem: `xvfb-run wine /home/steam/Valheim-Server/StartServer.bat`
:::

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer Valheim na swoim VPS! Kolejnym krokiem polecamy nasz [poradnik konfiguracji usługi Linux](vserver-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer dedykowany jako usługę systemową. Dzięki temu serwer będzie się automatycznie uruchamiał przy starcie VPS, aktualizował, a Ty zyskasz łatwy dostęp do zarządzania i logów.

Jeśli masz pytania lub problemy, nasz support jest do Twojej dyspozycji codziennie!

<InlineVoucher />