---
id: dedicated-windows-cs16
title: "Serwer dedykowany: Counter-Strike 1.6 Serwer dedykowany Windows - konfiguracja"
description: "Dowiedz się, jak szybko i łatwo skonfigurować serwer dedykowany Counter-Strike 1.6 na swoim VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład serwer dedykowany Counter-Strike 1.6? Trafiłeś idealnie! W poniższym poradniku krok po kroku pokażemy Ci, jak zainstalować taki serwer na Twoim sprzęcie.

<InlineVoucher />

## Przygotowanie

Do konfiguracji serwera Counter-Strike 1.6 potrzebny jest SteamCMD. SteamCMD to **wersja klienta Steam działająca w trybie tekstowym**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwerów dedykowanych popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie deweloperskiej Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które musisz rozpakować. Zalecamy utworzenie osobnego folderu, gdzie wypakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż proces instalacji się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja zakończyła się pomyślnie i możesz przejść do instalacji serwera Counter-Strike 1.6.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **konsoli Steam (steamcmd.exe)**. Najpierw musisz się zalogować. Zrób to jako użytkownik **anonymous**. Wpisz polecenie: `login anonymous`

Kolejnym krokiem jest instalacja serwera. Wykonaj polecenie `app_update 90`. ID aplikacji **90** oznacza **serwer dedykowany Counter-Strike 1.6**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Poczekaj cierpliwie na zakończenie pobierania, może to potrwać dłużej przy większych grach. Po udanym pobraniu pojawi się komunikat potwierdzający sukces.

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

Dodaj nowe reguły przychodzące i wychodzące dla portów: 27015-27020 dla protokołów TCP/UDP.



## Konfiguracja

Na tym etapie masz już gotowy serwer Counter-Strike 1.6. Możesz dalej konfigurować serwer, edytując bezpośrednio plik startowy. Przejdź do katalogu głównego serwera. Następnie wejdź do folderu cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```

## Rejestracja tokenu GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby wygenerować GSLT, odwiedź http://steamcommunity.com/dev/managegameservers i stwórz token dla gry o ID 90, czyli Counter-Strike 1.6.

Po otrzymaniu tokenu dodaj go do parametrów startowych serwera za pomocą `+sv_setsteamaccount <TOKEN>`.



## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wpisz następującą komendę startową:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać chwilę, bo wszystko się konfiguruje. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów adres: `[twoj_adres_ip]:2456`.


## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer Counter-Strike 1.6 na Twoim VPS! W razie pytań lub problemów śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />