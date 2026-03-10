---
id: server-windows-csgo
title: "CS:GO Serwer Dedykowany Windows - Konfiguracja"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować serwer dedykowany CS:GO na swoim serwerze → Sprawdź teraz"
sidebar_label: "CS:GO"
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS/serwer dedykowany i chcesz postawić na nim serwery gier? Na przykład serwer dedykowany CS:GO? Trafiłeś idealnie! Poniżej krok po kroku wyjaśnimy, jak zainstalować taki serwer na Twoim sprzęcie.



## Przygotowanie

Do konfiguracji serwera CS:GO potrzebujesz SteamCMD. SteamCMD to **wersja Steam w trybie tekstowym (command line)**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwerowe popularnych gier Steam na VPS/serwer dedykowany. SteamCMD znajdziesz na oficjalnej stronie Valve dla developerów: https://developer.valvesoftware.com/wiki/SteamCMD. 

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które musisz rozpakować. Zalecamy utworzenie osobnego folderu, gdzie rozpakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż instalacja się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja przebiegła pomyślnie i możesz przejść do instalacji serwera CS:GO.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **Steam command line (steamcmd.exe)**. Najpierw musisz się zalogować. Zrób to jako użytkownik **anonymous**. Wpisz komendę: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 730`. ID aplikacji **730** to **serwer dedykowany CS:GO**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Poczekaj cierpliwie na zakończenie pobierania, może to chwilę potrwać przy większych grach. Po udanym pobraniu pojawi się komunikat potwierdzający sukces.

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

W ustawieniach dodaj nowe reguły przychodzące i wychodzące dla portów: 27015-27020 dla protokołów TCP/UDP.



## Konfiguracja

Na tym etapie masz już gotowy serwer CS:GO. Możesz dalej konfigurować serwer, edytując plik startowy. Przejdź do katalogu głównego serwera. W środku znajdź folder cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.

```
../steamapps/common/CS:GO-ds/game/csgo/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby wygenerować GSLT, wejdź na http://steamcommunity.com/dev/managegameservers i stwórz token dla gry o ID **4465480**, czyli nowego CS:GO Standalone.

Po otrzymaniu tokenu dodaj go do parametrów startowych serwera jako `+sv_setsteamaccount <TOKEN>`.



## Uruchomienie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wpisz polecenie startowe:

```
.\CS:GO.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

W konsoli powinny pojawić się logi potwierdzające poprawny start serwera. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twoj_adres_ip]:2456`.


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer CS:GO na swoim VPS/serwerze dedykowanym! W razie pytań lub problemów śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂