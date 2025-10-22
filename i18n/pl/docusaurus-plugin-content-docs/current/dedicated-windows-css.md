---
id: dedicated-windows-css
title: "Serwer dedykowany: Counter-Strike: Source Dedicated Server Windows - konfiguracja"
description: "Dowiedz się, jak szybko i łatwo skonfigurować serwer dedykowany Counter-Strike: Source na swoim VPS lub serwerze → Sprawdź teraz"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład serwer dedykowany Counter-Strike: Source? Trafiłeś idealnie! W poniższym poradniku krok po kroku wyjaśnimy, jak zainstalować taką usługę na swoim serwerze.

<InlineVoucher />

## Przygotowanie

Do konfiguracji serwera Counter-Strike: Source potrzebny jest SteamCMD. SteamCMD to **wersja Steam klienta działająca w wierszu poleceń**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwerów dedykowanych popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie deweloperskiej Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które trzeba rozpakować. Zalecamy utworzyć osobny folder, gdzie rozpakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż proces instalacji się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja zakończyła się pomyślnie i możesz przejść do instalacji serwera Counter-Strike: Source.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **Steam wierszu poleceń (steamcmd.exe)**. Najpierw musisz się zalogować. Zrób to jako użytkownik **anonymous**. Wpisz polecenie: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 232330`. ID aplikacji **232330** oznacza **Counter-Strike: Source Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

Poczekaj cierpliwie na zakończenie pobierania, może to potrwać, zwłaszcza przy większych grach. Po pomyślnym zakończeniu zobaczysz komunikat potwierdzający sukces.

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

W ustawieniach dodaj nowe reguły dla ruchu przychodzącego i wychodzącego na porty: 27015-27020 dla protokołów TCP/UDP.



## Konfiguracja

Na tym etapie masz już skonfigurowany serwer Counter-Strike: Source. Możesz dalej dostosować serwer, edytując plik startowy. Przejdź do katalogu głównego serwera. Następnie wejdź do folderu cfg i otwórz plik `server.cfg`. Tam możesz zmieniać opcje serwera.

```
../steamapps/common/css-ds/cstrike/cfg/server.cfg
```

## Rejestracja tokena GSL

Aby inni gracze mogli dołączyć do Twojego serwera, musisz wygenerować i dodać Game Server Login Token (GSLT). Token ten uwierzytelnia Twój serwer w Steam. Aby wygenerować GSLT, odwiedź http://steamcommunity.com/dev/managegameservers i stwórz token, używając ID gry 232330, które odpowiada Counter-Strike: Source.

Po otrzymaniu tokena dodaj go do parametrów uruchomieniowych serwera jako `+sv_setsteamaccount <TOKEN>`.



## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i wykonaj poniższe polecenie startowe:

```
start srcds.exe -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

W konsoli powinny pojawić się logi, które potwierdzą, że serwer uruchomił się poprawnie. Pamiętaj, że pierwsze uruchomienie może potrwać dłużej, bo wszystko jest konfigurowane. Alternatywnie możesz połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twój_adres_ip]:2456`.


## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Counter-Strike: Source na swoim VPS! W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />