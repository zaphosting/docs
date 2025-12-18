---
id: vserver-windows-ark
title: "VPS: ARK Survival Evolved Dedicated Server - konfiguracja na Windows"
description: "Dowiedz się, jak szybko i łatwo skonfigurować ARK: Survival Evolved Dedicated Server na swoim Windows VPS → Sprawdź teraz"
sidebar_label: Konfiguracja ARK Survival Evolved Dedicated Server
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Wprowadzenie
Masz Windows VPS i chcesz postawić na nim serwery gier? Na przykład ARK: Survival Evolved Dedicated Server? Trafiłeś idealnie! Poniżej krok po kroku pokażemy Ci, jak zainstalować taki serwer na Twoim VPS.

<YouTube videoId="YOz_SqsUkg4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Tde2kaHrjgtMd3H/preview" title="Konfiguracja ARK: Survival Evolved Dedicated Server na Windows VPS" description="Wolisz zobaczyć wszystko na żywo, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

Połącz się z VPS przez RDP, aby skonfigurować swój ARK: Survival Evolved Dedicated Server. Jeśli nie wiesz, jak połączyć się z serwerem przez RDP, polecamy zajrzeć do [poradnika Początkowy dostęp (RDP)](vserver-windows-userdp.md).

<InlineVoucher />

## Przygotowanie

Do instalacji serwera ARK potrzebny jest SteamCMD. SteamCMD to **wersja Steam klienta działająca w trybie tekstowym**. To narzędzie pozwala szybko i łatwo pobrać dedykowane serwery popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie Valve dla deweloperów: https://developer.valvesoftware.com/wiki/SteamCMD. 

Po pobraniu otrzymasz plik **steamcmd.zip**, który musisz rozpakować. Zalecamy utworzyć osobny folder, w którym rozpakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż instalacja się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/67Prbs9CKEo4tfG/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera ARK.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **konsoli Steam (steamcmd.exe)**. Najpierw musisz się zalogować. Zrób to jako użytkownik **anonymous**. Wpisz polecenie: `login anonymous`

Następnie wykonaj instalację poleceniem `app_update 376030`. ID aplikacji **376030** to właśnie **ARK: Survival Evolved Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/37YL4YgiL4EogS6/preview)



:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto uzbroić się w cierpliwość! :)
:::



Przejdź do katalogu, w którym wykonałeś instalację, a następnie do podkatalogu: **../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Binaries/Win64**.

Tam musisz stworzyć plik startowy, który uruchomi serwer. Utwórz plik o nazwie: start-ark.bat

:::info
Upewnij się, że masz włączoną opcję wyświetlania rozszerzeń plików, aby plik miał poprawne rozszerzenie.
:::

Otwórz plik, wklej poniższą zawartość i zapisz zmiany:

```
start ShooterGameServer.exe TheIsland?listen?SessionName=<server_name>?ServerPassword=<join_password>?ServerAdminPassword=<admin_password>?Port=<port>?QueryPort=<query_port>?MaxPlayers=<max_players>
exit
```



Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej Windows. Otwórz ustawienia Zapory Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/WxKJRKAPf9dXwFF/preview)


Dodaj nowe reguły przychodzące i wychodzące dla poniższych protokołów i portów:

- TCP przychodzące i wychodzące: 27020
- UDP przychodzące i wychodzące: 27015
- UDP przychodzące i wychodzące: 7777-7778



## Konfiguracja

Podstawowa konfiguracja jest już gotowa. Dalsze zmiany możesz wprowadzić w plikach konfiguracyjnych **DefaultGameUserSettings.ini** oraz **Gameusersettings.ini**. Tam możesz zmienić nazwę serwera, hasło do serwera, hasło administratora i wiele innych opcji. Pliki znajdziesz w katalogach:

```
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Evolved Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```



## Gra

Na koniec możesz uruchomić serwer, wykonując wcześniej utworzony plik **start-ark.bat**. Powinno to otworzyć konsolę serwera i rozpocząć proces startu. Jeśli wszystko pójdzie zgodnie z planem, serwer pojawi się na liście serwerów po pomyślnym uruchomieniu.

![](https://screensaver01.zap-hosting.com/index.php/s/SkjP94KCa9YnJXn/preview)


## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer ARK Survival na Twoim VPS! Jeśli masz jeszcze jakieś pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />