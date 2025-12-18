---
id: dedicated-windows-cscz
title: "Serwer dedykowany: Counter-Strike: Condition Zero Serwer dedykowany Windows - konfiguracja"
description: "Dowiedz się, jak szybko i łatwo skonfigurować serwer dedykowany Counter-Strike: Condition Zero na swoim VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład serwer dedykowany Counter-Strike: Condition Zero? Trafiłeś idealnie! W poniższym poradniku krok po kroku pokażemy Ci, jak zainstalować taką usługę na Twoim serwerze.



## Przygotowanie

Do konfiguracji serwera Counter-Strike: Condition Zero potrzebny jest SteamCMD. SteamCMD to **wersja Steam klienta w trybie tekstowym**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwerów dedykowanych popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie Valve dla deweloperów: https://developer.valvesoftware.com/wiki/SteamCMD. 

Następnie pobierz plik. Będzie to plik **steamcmd.zip**, który musisz najpierw rozpakować. Zalecamy utworzenie osobnego folderu, w którym rozpakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż proces instalacji się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że proces zakończył się pomyślnie i możesz przejść do instalacji serwera Counter-Strike: Condition Zero.



## Instalacja

Po instalacji powinieneś mieć możliwość wykonywania poleceń w **konsoli Steam (steamcmd.exe)**. Musisz się tam zalogować. Zrobisz to jako użytkownik **anonymous**. Wpisz następujące polecenie: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 90`. ID aplikacji **90** oznacza **Counter-Strike: Condition Zero Serwer dedykowany**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Bądź cierpliwy podczas pobierania, może to chwilę potrwać, zwłaszcza przy większych grach. Po zakończeniu pojawi się komunikat potwierdzający sukces.

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

W ustawieniach dodaj nowe reguły przychodzące i wychodzące dla portów: 27015-27020 dla protokołów TCP/UDP.



## Konfiguracja

Na tym etapie masz już gotowy serwer Counter-Strike: Condition Zero. Możesz dalej konfigurować serwer, edytując bezpośrednio plik startowy. Przejdź do katalogu głównego serwera. Wewnątrz znajdź folder cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```



## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wykonaj następujące polecenie startowe:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów adres: `[twoj_adres_ip]:2456`.


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Counter-Strike: Condition Zero na swoim VPS! W razie pytań lub problemów śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂