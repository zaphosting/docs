---
id: dedicated-windows-nmrih
title: "Serwer dedykowany: No More Room In Hell - konfiguracja serwera dedykowanego Windows"
description: "Dowiedz się, jak szybko i łatwo skonfigurować dedykowany serwer gier No More Room In Hell na swoim VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład No More Room In Hell serwer dedykowany? Trafiłeś idealnie! Poniżej krok po kroku wyjaśnimy, jak zainstalować taką usługę na swoim serwerze.



## Przygotowanie

Do konfiguracji serwera No More Room In Hell potrzebny jest SteamCMD. SteamCMD to **wersja klienta Steam działająca w trybie konsoli**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwerów dedykowanych popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie Valve dla deweloperów: https://developer.valvesoftware.com/wiki/SteamCMD. 

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które musisz rozpakować. Zalecamy utworzenie osobnego folderu, gdzie rozpakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż proces instalacji się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja przebiegła pomyślnie i możesz przejść do instalacji serwera No More Room In Hell.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **konsoli Steam (steamcmd.exe)**. Musisz się tam zalogować. Zrobisz to jako użytkownik **anonymous**. Wpisz polecenie: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 317670`. ID aplikacji **317670** oznacza aplikację **No More Room In Hell Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Poczekaj cierpliwie na zakończenie pobierania, może to chwilę potrwać przy większych grach. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory systemu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

W ustawieniach dodaj nowe reguły przychodzące i wychodzące dla portów: 27015-27020 dla protokołów TCP/UDP.



## Konfiguracja

Na tym etapie masz już skonfigurowany serwer No More Room In Hell. Możesz dalej dostosować serwer, edytując plik startowy. Przejdź do katalogu głównego serwera. W środku znajdź folder cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby wygenerować GSLT, wejdź na http://steamcommunity.com/dev/managegameservers i stwórz token, używając ID gry 317670, które odpowiada No More Room In Hell.

Gdy masz token, dodaj go do parametrów uruchomieniowych serwera jako `+sv_setsteamaccount <TOKEN>`.



## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wpisz polecenie startowe:

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W konsoli powinny pojawić się logi potwierdzające poprawny start serwera. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów adres: `[twoj_adres_ip]:2456`.


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer No More Room In Hell na swoim VPS! W razie pytań lub problemów śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂