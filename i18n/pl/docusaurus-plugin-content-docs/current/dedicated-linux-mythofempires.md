---
id: dedicated-linux-mythofempires
title: "Serwer dedykowany: Konfiguracja Myth of Empires na Linux"
description: "Dowiedz się, jak zainstalować serwer dedykowany Myth of Empires na Linux i zoptymalizować swój hosting serwera gier → Sprawdź teraz"
sidebar_label: Myth of Empires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany z Linuxem i chcesz zainstalować na nim serwer dedykowany Myth of Empires? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze Linux za pomocą SteamCMD. W przykładach używamy Ubuntu, ale proces powinien być bardzo podobny na innych dystrybucjach.

:::tip
Czy wiesz, że możesz zainstalować nasz **ZAP GS/TS3 Interface** bezpośrednio na swoim serwerze dedykowanym? Dzięki temu w kilku klikach skonfigurujesz serwery gier z bezpośrednią integracją z Twoim panelem głównym ZAP-Hosting! Dowiedz się więcej o [GS/TS3 Interface tutaj](dedicated-linux-gs-interface.md).
:::

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez SSH. Jeśli potrzebujesz pomocy, skorzystaj z naszego poradnika [SSH Initial Access](dedicated-linux-ssh.md).

Musisz też wykonać pierwszą konfigurację SteamCMD, jeśli to Twoje pierwsze użycie tego narzędzia na Linuxie. Skorzystaj z naszego poradnika [SteamCMD Linux Setup](dedicated-linux-steamcmd.md) i upewnij się, że SteamCMD jest w pełni skonfigurowany, zanim przejdziesz dalej.

:::info Warstwa kompatybilności Wine
Myth of Empires nie oferuje natywnej wersji serwera na Linuxa, więc potrzebny jest dodatkowy krok, aby uruchomić wersję serwera Windows na Linuxie.

Musisz wykonać jednorazową instalację warstwy kompatybilności **Wine**, jeśli to Twoje pierwsze użycie tego na Linuxie. Skorzystaj z naszego szybkiego poradnika [Wine Compatibility Layer Setup](dedicated-linux-wine.md), aby to skonfigurować przed dalszymi krokami.
:::

## Instalacja

Zaloguj się jako użytkownik `steam` i przejdź do katalogu domowego `home/steam`, aby utrzymać porządek.
```
sudo -u steam -s
cd ~
```

Po zalogowaniu rozpocznij instalację poleceniem, które uruchomi SteamCMD i zainstaluje serwer bezpośrednio dla użytkownika `steam`. Parametr `+@sSteamCmdForcePlatformType windows` wymusza instalację binarek Windows.
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

Poczekaj cierpliwie na zakończenie pobierania – może to potrwać, zwłaszcza przy większych grach. Po udanej instalacji pojawi się komunikat potwierdzający sukces.

## Konfiguracja

Na tym etapie masz już gotowy serwer Myth of Empires. Możesz dalej konfigurować serwer, edytując różne pliki konfiguracyjne znajdujące się w katalogu serwera.

Wszystkie parametry konfiguracyjne znajdziesz w plikach `.ini` w folderze Saved. Użyj polecenia `ls`, aby zobaczyć dostępne pliki.
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

Aby edytować plik, wpisz `nano ./[nazwa_pliku].ini`, co otworzy edytor nano.

Zobacz nasz poradnik Myth of Empires [Server Configuration](moe-configuration.md), aby poznać wszystkie dostępne opcje serwera i ich funkcje.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **MOEServer.exe** poleceniem poniżej. Pamiętaj, aby dodać polecenia **xvfb-run** i **wine**, które uruchomią serwer przez warstwę kompatybilności Wine.
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

W konsoli powinny pojawić się logi, które oznaczają, że serwer wystartował poprawnie. Pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Po uruchomieniu możesz połączyć się bezpośrednio, wyszukując serwer w zakładce **Custom Server** pod adresem: `[twoj_adres_ip]:15636`.

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer Myth of Empires na Twoim serwerze dedykowanym! Kolejnym krokiem polecamy zapoznanie się z naszym poradnikiem [Setup Linux Service](dedicated-linux-create-gameservice.md), który pokaże Ci, jak ustawić serwer gier jako usługę systemową. Dzięki temu serwer będzie się automatycznie uruchamiał przy starcie, aktualizował, a Ty zyskasz łatwy dostęp do zarządzania i logów – i wiele więcej!

Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!