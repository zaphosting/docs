---
id: dedicated-windows-ark
title: "Serwer dedykowany: ARK Survival Evolved Serwer dedykowany Windows - konfiguracja"
description: "Dowiedz się, jak skonfigurować serwer dedykowany ARK: Survival Evolved na Windows VPS, by cieszyć się płynną rozgrywką multiplayer → Sprawdź teraz"
sidebar_label: Konfiguracja serwera dedykowanego ARK Survival Evolved
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS i chcesz zainstalować na nim serwery gier? Na przykład serwer dedykowany ARK: Survival Evolved? Trafiłeś idealnie! Poniżej krok po kroku wyjaśnimy, jak zainstalować taki serwer na Twoim VPS. Połącz się z VPS przez RDP, aby skonfigurować serwer dedykowany ARK: Survival Evolved. Jeśli nie wiesz, jak połączyć się z serwerem przez RDP, polecamy zajrzeć do [poradnika Początkowy dostęp (RDP)](vserver-windows-userdp.md).

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BF23kJKNsFQyeyX/preview" title="Konfiguracja serwera dedykowanego ARK: Survival Evolved na Windows VPS" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Przygotowanie

Do konfiguracji serwera ARK potrzebny jest SteamCMD. SteamCMD to **wersja klienta Steam działająca w wierszu poleceń**. To narzędzie pozwala szybko i łatwo pobrać aplikacje serwerów dedykowanych popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie Valve dla deweloperów: https://developer.valvesoftware.com/wiki/SteamCMD.

Następnie pobierz plik. Będzie to plik **steamcmd.zip**, który trzeba rozpakować. Zalecamy utworzyć osobny folder, gdzie wypakujesz pliki. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż proces instalacji się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/QnqpbKQiEAFLL2T/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja zakończyła się pomyślnie i możesz przejść do instalacji serwera ARK.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **wierszu poleceń Steam (steamcmd.exe)**. Musisz się tam zalogować. Zrób to jako użytkownik **anonymous**. Wpisz polecenie: `login anonymous`

Kolejnym krokiem jest instalacja. Wykonaj polecenie `app_update 376030`. ID aplikacji **376030** oznacza aplikację **ARK: Survival Evolved Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/RJzpFL4ZPSsAZZd/preview)



:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::



Przejdź do katalogu, w którym wykonałeś instalację, a następnie do podkatalogu: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Tam musisz stworzyć plik startowy, który będzie uruchamiał oprogramowanie serwera. Utwórz plik o nazwie: start-ark.bat

:::info
Upewnij się, że masz włączoną opcję Pokazywania rozszerzeń plików, aby plik miał poprawne rozszerzenie.
:::

Otwórz plik, dodaj poniższą zawartość i zapisz zmiany:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/p7iyYxZwfeGaZaW/preview)


W ustawieniach dodaj reguły przychodzące i wychodzące dla poniższych protokołów i portów:

- TCP przychodzące i wychodzące: 27020
- UDP przychodzące i wychodzące: 27015
- UDP przychodzące i wychodzące: 7777-7778



## Konfiguracja

Podstawowa konfiguracja jest już gotowa. Dalsze zmiany możesz wprowadzić w plikach konfiguracyjnych **DefaultGameUserSettings.ini** oraz **Gameusersettings.ini**. Tam możesz zmienić nazwę serwera, hasło do serwera, hasło administratora i wiele innych opcji. Znajdziesz je w katalogach:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Gra

Na koniec konfiguracji możesz uruchomić serwer, wykonując wcześniej utworzony plik **start-ark.bat**. Powinno to otworzyć konsolę serwera i rozpocząć proces startu. Jeśli wszystko pójdzie zgodnie z planem, serwer pojawi się na liście serwerów po pomyślnym uruchomieniu.

![](https://screensaver01.zap-hosting.com/index.php/s/cENfRQGxK4NjM3Y/preview)

<InlineVoucher />