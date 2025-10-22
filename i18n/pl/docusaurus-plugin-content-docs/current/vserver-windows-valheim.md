---
id: vserver-windows-valheim
title: "VPS: Valheim Dedicated Server Windows Setup"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować dedykowany serwer Valheim na swoim VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: Valheim
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład Valheim Dedicated Server? Trafiłeś idealnie! Poniżej krok po kroku wyjaśnimy, jak zainstalować taki serwer na swoim sprzęcie.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/8yWGtXMPFr8Jyza/preview" title="Konfiguracja Valheim Dedicated Server na Windows VPS" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>
<InlineVoucher />

## Przygotowanie
Do instalacji serwera Valheim potrzebny jest SteamCMD. SteamCMD to **wersja Steam w trybie tekstowym**. To narzędzie pozwala szybko i łatwo pobrać dedykowane serwery popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie Valve dla deweloperów: https://developer.valvesoftware.com/wiki/SteamCMD.

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które musisz rozpakować. Zalecamy utworzyć osobny folder, gdzie wypakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż instalacja się zakończy.
![](https://screensaver01.zap-hosting.com/index.php/s/7Hib2ZgaYWTsRNE/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że proces zakończył się pomyślnie i możesz przejść do instalacji serwera Valheim.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **Steam command line (steamcmd.exe)**. Musisz się tam zalogować. Użyj do tego użytkownika **anonymous**. Wpisz polecenie: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 896660`. ID aplikacji **896660** to **Valheim Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/cgMfJdL5DNNxjrf/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::


Przejdź do katalogu, w którym wykonałeś instalację i otwórz podfolder:  **../steamapps/common/Valheim dedicated Server/**

Tam musisz stworzyć plik startowy, który uruchomi serwer. Utwórz plik o nazwie: start_headless.bat

:::info
Upewnij się, że masz włączoną opcję wyświetlania rozszerzeń plików, aby plik miał poprawne rozszerzenie.
:::

Otwórz plik, wklej poniższą zawartość i zapisz zmiany:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/EM32i73TLcn32Mc/preview)

W ustawieniach dodaj reguły przychodzące i wychodzące dla portów: 2456-2458 dla protokołów TCP/UDP.




## Konfiguracja

Sama instalacja jest już gotowa. Dalsze zmiany konfiguracji możesz wprowadzać w pliku **start_headless_server.bat**. Masz tam możliwość zmiany nazwy serwera, hasła serwera, hasła admina i wielu innych opcji. Znajdziesz go w katalogu:

```
../steamapps/common/Valheim dedicated Server/
```



## Gra

Na koniec możesz uruchomić serwer, wykonując wcześniej utworzony plik **start_headless_server.bat**. Powinno to otworzyć konsolę serwera i rozpocząć proces startu. Jeśli wszystko pójdzie zgodnie z planem, serwer pojawi się na liście serwerów po pomyślnym uruchomieniu.


## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować Valheim na swoim VPS! Jeśli masz jakieś pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />