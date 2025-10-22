---
id: dedicated-windows-satisfactory
title: "Serwer dedykowany: Konfiguracja Satisfactory Dedicated Server na Windows"
description: "Dowiedz się, jak skonfigurować Satisfactory Dedicated Server na swoim serwerze dla płynnej rozgrywki i zarządzania → Sprawdź teraz"
sidebar_label: Satisfactory
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany i chcesz na nim zainstalować serwery gier? Na przykład Satisfactory Dedicated Server? Trafiłeś idealnie! W poniższym poradniku krok po kroku wyjaśnimy, jak zainstalować taką usługę na Twoim serwerze.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gp82J4xr9T5Y969/preview" title="Konfiguracja Satisfactory Dedicated Server na Windows VPS" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Przygotowanie

Do konfiguracji serwera Satisfactory potrzebny jest SteamCMD. SteamCMD to **wersja Steam klienta działająca w wierszu poleceń**. To narzędzie pozwala szybko i łatwo pobrać dedykowane serwery popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie Valve dla deweloperów: https://developer.valvesoftware.com/wiki/SteamCMD. 

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które musisz rozpakować. Zalecamy utworzenie osobnego folderu, gdzie wypakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż instalacja się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/9EaPpm3NWadXTx5/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera Satisfactory.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **Steam command line (steamcmd.exe)**. Musisz się tam zalogować. Zrób to jako użytkownik **anonymous**. Wpisz polecenie: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 1690800`. ID aplikacji **1690800** oznacza **Satisfactory Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/KtzJ3AaYJk7BJEt/preview)



:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::



Przejdź do katalogu, w którym wykonałeś instalację, a następnie do podkatalogu: **../steamapps/common/SatisfactoryDedicatedServer**

Tam musisz stworzyć plik startowy, który uruchomi oprogramowanie serwera. Utwórz plik o nazwie: server-start.bat

:::info
Upewnij się, że masz włączoną opcję wyświetlania rozszerzeń plików, aby plik miał poprawne rozszerzenie.
:::

Otwórz plik, dodaj następującą zawartość i zapisz zmiany:

```
Factoryserver.exe -log -unattended
```



Następnie uruchom plik. Przy pierwszym starcie powinno pojawić się okienko informujące, że potrzebne są dodatkowe komponenty do uruchomienia programu. Gra wymaga Visual C++ Runtime. Kliknij Tak i dokończ instalację. 

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory systemu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/dy6AwJsT8XBpdXr/preview)


W ustawieniach dodaj dodatkowe reguły. Kliknij na reguły przychodzące i wychodzące, jak poniżej, i dodaj je dla protokołu UDP na porcie 15000.



## Konfiguracja

Sama instalacja jest już gotowa. Dalsze zmiany konfiguracji możesz wprowadzić w pliku **ServerSettings.ini**. Możesz tam zmienić nazwę serwera, hasło i inne opcje. Przejdź do katalogu:

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Gra

Na koniec konfiguracji możesz uruchomić serwer, wykonując wcześniej utworzony plik **server-start.bat**. Powinno to otworzyć konsolę serwera i rozpocząć proces startu. Jeśli wszystko pójdzie zgodnie z planem, serwer pojawi się na liście serwerów po pomyślnym uruchomieniu.


<InlineVoucher />