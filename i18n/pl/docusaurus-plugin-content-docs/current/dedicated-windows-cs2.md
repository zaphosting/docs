---
id: dedicated-windows-cs2
title: "Serwer dedykowany: Counter-Strike 2 Serwer dedykowany Windows - konfiguracja"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować serwer dedykowany Counter-Strike 2 na swoim VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: "Counter-Strike 2"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład serwer dedykowany Counter-Strike 2? Trafiłeś idealnie! W poniższym poradniku krok po kroku wyjaśnimy, jak zainstalować taki serwer na Twoim sprzęcie.

<InlineVoucher />

## Przygotowanie

Do konfiguracji serwera Counter-Strike 2 potrzebny jest SteamCMD. SteamCMD to **wersja Steam klienta w trybie tekstowym**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwerów dedykowanych popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie deweloperskiej Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które musisz rozpakować. Zalecamy utworzenie osobnego folderu, gdzie wypakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż instalacja się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że proces zakończył się pomyślnie i możesz przejść do instalacji serwera Counter-Strike 2.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **konsoli Steam (steamcmd.exe)**. Najpierw musisz się zalogować. Zrób to jako użytkownik **anonymous**. Wpisz polecenie: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 730`. ID aplikacji **730** oznacza **serwer dedykowany Counter-Strike 2**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Poczekaj cierpliwie na zakończenie pobierania, może to potrwać, zwłaszcza przy większych grach. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

W ustawieniach dodaj reguły przychodzące i wychodzące dla portów: 27015-27020 dla protokołów TCP/UDP.



## Konfiguracja

Na tym etapie masz już gotowy serwer Counter-Strike 2. Możesz dalej konfigurować serwer, edytując plik startowy. Przejdź do katalogu głównego serwera. Następnie wejdź do folderu cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.

```
../steamapps/common/cs2-ds/game/csgo/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby wygenerować GSLT, odwiedź http://steamcommunity.com/dev/managegameservers i stwórz token, używając ID gry 730, które odpowiada Counter-Strike 2.

Po otrzymaniu tokenu dodaj go do parametrów startowych serwera jako `+sv_setsteamaccount <TOKEN>`.



## Uruchomienie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wpisz polecenie startowe:

```
.\cs2.exe -dedicated +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX +map de_dust2
```

W konsoli powinny pojawić się logi, które potwierdzą poprawny start serwera. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko jest konfigurowane. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twoj_adres_ip]:2456`.


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Counter-Strike 2 na swoim VPS! W razie pytań lub problemów śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />