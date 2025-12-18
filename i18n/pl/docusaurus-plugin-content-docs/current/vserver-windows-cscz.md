---
id: vserver-windows-cscz
title: "VPS: Counter-Strike: Condition Zero Serwer Dedykowany Windows - Instalacja"
description: "Dowiedz się, jak szybko i łatwo zainstalować serwer dedykowany Counter-Strike: Condition Zero na swoim VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład serwer dedykowany Counter-Strike: Condition Zero? Trafiłeś idealnie! W poniższym poradniku krok po kroku wyjaśnimy, jak zainstalować taki serwer na Twoim sprzęcie.

<InlineVoucher />

## Przygotowanie

Do instalacji serwera Counter-Strike: Condition Zero potrzebny jest SteamCMD. SteamCMD to **wersja klienta Steam działająca w trybie tekstowym**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwerów dedykowanych popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie deweloperskiej Valve: https://developer.valvesoftware.com/wiki/SteamCMD.

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które musisz rozpakować. Zalecamy utworzenie osobnego folderu, gdzie rozpakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż proces instalacji się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja przebiegła pomyślnie i możesz przejść do instalacji serwera Counter-Strike: Condition Zero.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **konsoli Steam (steamcmd.exe)**. Najpierw musisz się zalogować. Zrób to jako użytkownik **anonymous**. Wpisz polecenie: `login anonymous`

Kolejnym krokiem jest instalacja serwera. Wykonaj polecenie `app_update 90`. ID aplikacji **90** oznacza **Counter-Strike: Condition Zero Serwer Dedykowany**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Poczekaj cierpliwie na zakończenie pobierania, może to potrwać, zwłaszcza przy większych grach. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

W ustawieniach dodaj nowe reguły przychodzące i wychodzące dla portów: 27015-27020 dla protokołów TCP/UDP.



## Konfiguracja

Na tym etapie masz już gotowy serwer Counter-Strike: Condition Zero. Możesz dalej konfigurować serwer, edytując plik startowy. Przejdź do katalogu głównego serwera. Następnie wejdź do folderu cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.

```
../steamapps/common/cs-ds/cstrike/cfg/server.cfg
```



## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wykonaj polecenie startowe:

```
hlds.exe -console -game cstrike +maxplayers 8 +map de_dust
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer wystartował poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko jest konfigurowane. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów adres: `[twoj_adres_ip]:2456`.


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Counter-Strike: Condition Zero na swoim VPS! W razie pytań lub problemów śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />