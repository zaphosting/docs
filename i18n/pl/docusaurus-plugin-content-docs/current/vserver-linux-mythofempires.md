---
id: vserver-linux-mythofempires
title: "VPS: Myth of Empires Serwer Dedykowany Linux - Instalacja"
description: "Dowiedz się, jak zainstalować i uruchomić serwer dedykowany Myth of Empires na swoim Linux VPS, aby bezproblemowo hostować serwer gier → Sprawdź teraz"
sidebar_label: Myth of Empires
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować serwer dedykowany Myth of Empires? Trafiłeś idealnie. W tym poradniku pokażemy krok po kroku, jak zainstalować ten serwer na Twoim Linux VPS za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim VPS, co pozwala na łatwe uruchamianie serwerów gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting, dosłownie kilkoma kliknięciami? Sprawdź więcej o [GS/TS3 Interface](vserver-linux-gs-interface.md).
:::

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika SSH - Pierwszy dostęp](vserver-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twój pierwszy raz z tym narzędziem na Linuxie. Skorzystaj z naszego [poradnika SteamCMD Linux Setup](vserver-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
Myth of Empires nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję Windows na Linux VPS.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twój pierwszy raz z tym na Linuxie. Skorzystaj z naszego szybkiego [poradnika Wine Compatibility Layer Setup](vserver-linux-wine.md), aby to zrobić przed dalszymi krokami.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, żeby mieć wszystko poukładane.
```
sudo -u steam -s
cd ~
```

Będąc zalogowanym, rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio dla użytkownika `steam`. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację binarek Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Poczekaj cierpliwie na pobranie plików, może to chwilę potrwać przy większych grach. Po zakończeniu zobaczysz komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Myth of Empires. Możesz dalej konfigurować serwer przez różne pliki konfiguracyjne znajdujące się w katalogu serwera.

Wszystkie parametry możesz zmieniać, edytując pliki `.ini` w folderze Saved. Użyj polecenia `ls`, żeby zobaczyć dostępne pliki.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Aby edytować plik, wpisz `nano ./[nazwa_pliku].ini`, aby otworzyć go w edytorze nano.

Zobacz nasz poradnik Myth of Empires [Konfiguracja serwera](moe-configuration.md), gdzie znajdziesz wszystkie dostępne opcje i ich opis.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **MOEServer.exe** za pomocą poniższego polecenia. Pamiętaj, aby dodać polecenia **xvfb-run** i **wine**, które uruchomią serwer przez warstwę kompatybilności Wine.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

W terminalu powinny pojawić się logi, które potwierdzą, że serwer się uruchomił. Pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Po uruchomieniu możesz połączyć się z serwerem, wyszukując go w zakładce **Custom Server** pod adresem: `[twoj_adres_ip]:15636`.

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer Myth of Empires na Twoim VPS! Kolejnym krokiem polecamy nasz poradnik [Setup Linux Service](vserver-linux-create-gameservice.md), który pokaże Ci, jak uruchomić serwer dedykowany jako usługę systemową. Dzięki temu serwer będzie się automatycznie uruchamiał przy starcie VPS, aktualizował, a Ty zyskasz łatwy dostęp do zarządzania i logów – i wiele więcej!

Jeśli masz pytania lub problemy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />