---
id: dedicated-windows-satisfactory
title: "Serwer dedykowany: Konfiguracja Satisfactory Dedicated Server na Windows"
description: "Dowiedz się, jak skonfigurować Satisfactory Dedicated Server na swoim serwerze, aby cieszyć się płynną rozgrywką i łatwym zarządzaniem → Sprawdź teraz"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany i chcesz zainstalować na nim serwery gier? Na przykład Satisfactory Dedicated Server? Trafiłeś idealnie! Poniżej krok po kroku wyjaśnimy, jak zainstalować taką usługę na swoim serwerze.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Konfiguracja Satisfactory Dedicated Server na Windows VPS" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>



## Przygotowanie

Do konfiguracji serwera Satisfactory potrzebny jest SteamCMD. SteamCMD to **wersja Steam klienta w linii poleceń**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwera dedykowanego popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie Valve dla deweloperów: https://developer.valvesoftware.com/wiki/SteamCMD. 

Następnie następuje pobranie pliku. Będzie to plik **steamcmd.zip**, który trzeba najpierw rozpakować. Zalecamy utworzyć osobny folder, w którym rozpakujesz plik. W efekcie powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż proces instalacji się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera Satisfactory.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **Steam command line (steamcmd.exe)**. Musisz się tam zalogować. Robi się to użytkownikiem **anonymous**. Wykonaj polecenie: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 1690800`. App ID **1690800** to aplikacja **Satisfactory Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::



Przejdź do katalogu, w którym wykonałeś instalację i otwórz podkatalog: **../steamapps/common/SatisfactoryDedicatedServer**

Tam musisz stworzyć plik startowy, który będzie uruchamiał oprogramowanie serwera. Utwórz plik o nazwie: server-start.bat

:::info
Upewnij się, że masz włączoną opcję wyświetlania rozszerzeń plików, aby plik miał poprawne rozszerzenie.
:::

Otwórz plik, dodaj poniższą zawartość i zapisz zmiany:

```
Factoryserver.exe -log -unattended
```



Następnie uruchom ten plik. Przy pierwszym starcie powinno pojawić się okienko informujące, że potrzebne są dodatkowe komponenty do uruchomienia programu. Gra wymaga Visual C++ Runtime. Kliknij Tak i dokończ instalację. 

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


W ustawieniach dodaj dodatkowe reguły. Kliknij na reguły przychodzące i wychodzące, jak poniżej, i dodaj je dla protokołu UDP na porcie 15000.



## Konfiguracja

Sama instalacja jest już gotowa. Dalsze zmiany konfiguracji możesz wprowadzić w pliku **ServerSettings.ini**. Masz tam możliwość zmiany nazwy serwera, hasła i innych opcji. Przejdź do katalogu: 

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Graj

Na koniec konfiguracji możesz uruchomić serwer, wykonując wcześniej utworzony plik **server-start.bat**. Powinno to otworzyć konsolę serwera i rozpocząć proces startu. Jeśli wszystko pójdzie zgodnie z planem, serwer pojawi się na liście serwerów po pomyślnym uruchomieniu.



