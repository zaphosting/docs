---
id: dedicated-windows-valheim
title: "Serwer dedykowany: Konfiguracja Valheim Dedicated Server na Windows"
description: "Dowiedz się, jak skonfigurować serwer dedykowany Valheim na własnym serwerze, aby cieszyć się płynną rozgrywką multiplayer → Sprawdź teraz"
sidebar_label: Valheim
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład Valheim Dedicated Server? Trafiłeś idealnie! W poniższym poradniku krok po kroku wyjaśnimy, jak zainstalować taką usługę na swoim serwerze.

<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/D2doaAqjzdMSo9r/preview" title="Konfiguracja Valheim Dedicated Server na Windows VPS" description="Wolisz zobaczyć wszystko na żywo, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które rozkłada wszystko na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć wiedzę w najbardziej angażujący sposób!"/>



## Przygotowanie
Do konfiguracji serwera Valheim potrzebny jest SteamCMD. SteamCMD to **wersja klienta Steam działająca w wierszu poleceń**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwerów dedykowanych popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie deweloperskiej Valve: https://developer.valvesoftware.com/wiki/SteamCMD. 

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które musisz najpierw rozpakować. Zalecamy utworzyć osobny folder, w którym rozpakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż proces instalacji się zakończy.
![](https://screensaver01.zap-hosting.com/index.php/s/Y5zygHw2DFJa4dZ/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera Valheim.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **wierszu poleceń Steam (steamcmd.exe)**. Musisz się tam zalogować. Zrób to jako użytkownik **anonymous**. Wpisz polecenie: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 896660`. ID aplikacji **896660** oznacza aplikację **Valheim Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/PxZFZat7cP2C26k/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::


Przejdź do katalogu, w którym wykonałeś instalację, a następnie do podkatalogu:  **../steamapps/common/Valheim dedicated Server/**

Tam musisz stworzyć plik startowy, który będzie uruchamiał oprogramowanie serwera. Utwórz plik o nazwie: start_headless.bat

:::info
Upewnij się, że masz włączoną opcję wyświetlania rozszerzeń plików, aby plik miał poprawne rozszerzenie.
:::

Otwórz plik, dodaj poniższą zawartość i zapisz zmiany:

```
@echo off
set SteamAppId-892970

echo "Starting server PRESS CIRL-C to exit"

REM Tip: Make a local copy of this script to avoid it being overwritten by steam.
REM NOTE: Minimum password length is 5 characters & Password cant be in the server name.
REM NOTE: You need to make sure che ports 2456-2458 is being forwarded to your server through your local router & firewall.

valheim server -nographics -batchmode -name "My Server" -port 2456 -world "Dedicated" -password "secret" -crossplay
```

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory systemu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/MTHjL85zKsLtN9g/preview)

W ustawieniach dodaj reguły przychodzące i wychodzące dla portów: 2456-2458 dla protokołów TCP/UDP.



## Konfiguracja

Sama instalacja jest już gotowa. Dalsze zmiany konfiguracji możesz wprowadzać w pliku **start_headless_server.bat**. Masz tam możliwość zmiany nazwy serwera, hasła serwera, hasła administratora i wielu innych opcji. Znajdziesz go w katalogu:

```
../steamapps/common/Valheim dedicated Server/
```



## Gra

Na koniec możesz uruchomić serwer, wykonując wcześniej utworzony plik **start_headless_server.bat**. Powinno to otworzyć konsolę serwera i rozpocząć proces startu. Jeśli wszystko pójdzie zgodnie z planem, serwer pojawi się na liście serwerów po pomyślnym uruchomieniu.