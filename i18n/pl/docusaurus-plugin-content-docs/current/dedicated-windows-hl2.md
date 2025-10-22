---
id: dedicated-windows-hl2
title: "Serwer dedykowany: Konfiguracja Half-Life 2 Dedicated Server na Windows"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować serwer dedykowany Half-Life 2 na swoim VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: "Half-Life 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład serwer dedykowany Half-Life 2? Trafiłeś idealnie! W tym poradniku krok po kroku pokażemy Ci, jak zainstalować taki serwer na Twoim sprzęcie.

<InlineVoucher />

## Przygotowanie

Do konfiguracji serwera Half-Life 2 potrzebujesz SteamCMD. SteamCMD to **wersja Steam w trybie tekstowym**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwerów dedykowanych popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie Valve dla deweloperów: https://developer.valvesoftware.com/wiki/SteamCMD.

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które musisz rozpakować. Zalecamy utworzyć osobny folder, gdzie wypakujesz pliki. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż instalacja się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że proces zakończył się pomyślnie i możesz przejść do instalacji serwera Half-Life 2.



## Instalacja

Po instalacji powinieneś mieć możliwość wpisywania komend w **konsoli Steam (steamcmd.exe)**. Najpierw musisz się zalogować. Zrób to jako użytkownik **anonymous**. Wpisz komendę: `login anonymous`

Kolejnym krokiem jest instalacja serwera. Wykonaj polecenie `app_update 232370`. ID aplikacji **232370** to właśnie **Half-Life 2 Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Poczekaj cierpliwie na zakończenie pobierania, bo przy większych grach może to chwilę potrwać. Po udanym pobraniu pojawi się komunikat potwierdzający sukces.

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory systemu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Dodaj nowe reguły przychodzące i wychodzące dla portów: 27015-27020 dla protokołów TCP/UDP.



## Konfiguracja

Na tym etapie masz już gotowy serwer Half-Life 2. Możesz dalej konfigurować serwer, edytując plik startowy. Przejdź do katalogu głównego serwera. Następnie wejdź do folderu cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.

```
../steamapps/common/hl2-ds/hl2mp/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby wygenerować GSLT, odwiedź http://steamcommunity.com/dev/managegameservers i stwórz token dla gry o ID 232370, czyli Half-Life 2.

Gdy masz już token, dodaj go do parametrów startowych serwera jako `+sv_setsteamaccount <TOKEN>`.



## Uruchomienie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom serwer poleceniem:

```
start srcds.exe -console -game hl2mp -secure +maxplayers 10 +map dm_runoff +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twoj_adres_ip]:2456`.


## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś serwer Half-Life 2 na swoim VPS! Jeśli masz pytania lub potrzebujesz pomocy, nasz support jest dostępny codziennie i chętnie Ci pomoże! 🙂

<InlineVoucher />