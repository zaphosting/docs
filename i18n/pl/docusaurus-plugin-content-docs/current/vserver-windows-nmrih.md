---
id: vserver-windows-nmrih
title: "VPS: No More Room In Hell Serwer Dedykowany Windows - Instalacja"
description: "Dowiedz się, jak szybko i sprawnie zainstalować dedykowany serwer gier No More Room In Hell na swoim VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: "No More Room In Hell"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład No More Room In Hell Serwer Dedykowany? Trafiłeś idealnie! W poniższym poradniku krok po kroku wyjaśnimy, jak zainstalować taką usługę na swoim serwerze.

<InlineVoucher />

## Przygotowanie

Do instalacji serwera No More Room In Hell potrzebny jest SteamCMD. SteamCMD to **wersja Steam klienta w trybie tekstowym**. To narzędzie pozwala szybko i łatwo pobrać aplikacje dedykowanych serwerów popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie dewelopera Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Następnie następuje pobranie pliku. Będzie to plik **steamcmd.zip**, który należy rozpakować. Zalecamy utworzyć osobny folder, w którym rozpakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż proces instalacji zostanie zakończony.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera No More Room In Hell.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **konsoli Steam (steamcmd.exe)**. Musisz się tam zalogować. Zrobisz to jako użytkownik **anonymous**. Wpisz następujące polecenie: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 317670`. ID aplikacji **317670** oznacza **No More Room In Hell Serwer Dedykowany**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Bądź cierpliwy podczas pobierania, może to potrwać chwilę, zwłaszcza przy większych grach. Po zakończeniu pojawi się komunikat potwierdzający sukces.

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

W ustawieniach dodaj reguły przychodzące i wychodzące dla portów: 27015-27020 dla protokołów TCP/UDP.



## Konfiguracja

Na tym etapie masz już gotowy serwer No More Room In Hell. Możesz dalej konfigurować serwer, edytując plik startowy. Przejdź do katalogu głównego serwera. Wewnątrz znajdź folder cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.

```
../steamapps/common/nmrih-ds/nmrih/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby wygenerować GSLT, odwiedź http://steamcommunity.com/dev/managegameservers i stwórz token dla gry o ID 317670, czyli No More Room In Hell.

Po uzyskaniu tokenu dodaj go do parametrów uruchomieniowych serwera jako `+sv_setsteamaccount <TOKEN>`.



## Uruchamianie i łączenie się z serwerem

Teraz czas na start serwera. Przejdź do głównego katalogu gry i uruchom serwer poleceniem:

```
start srcds.exe -console -game nmrih -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w wyszukiwarce serwerów: `[twoj_adres_ip]:2456`.


## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer No More Room In Hell na Twoim VPS! W razie pytań lub problemów śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />