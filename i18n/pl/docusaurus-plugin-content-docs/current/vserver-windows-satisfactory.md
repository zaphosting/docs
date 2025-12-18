---
id: vserver-windows-satisfactory
title: "VPS: Satisfactory Dedicated Server Windows - Instalacja"
description: "Dowiedz się, jak szybko i łatwo zainstalować Satisfactory Dedicated Server na swoim VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: Satisfactory
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany i chcesz na nim postawić serwery gier? Na przykład Satisfactory Dedicated Server? Trafiłeś idealnie! W poniższym poradniku krok po kroku pokażemy Ci, jak zainstalować taki serwer na swoim sprzęcie.

<YouTube videoId="rqtQJa_awGw" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oHiNw9tMBtgL6nq/preview" title="Satisfactory Dedicated Server Setup on Windows VPS" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>
<InlineVoucher />

## Przygotowanie

Do instalacji serwera Satisfactory potrzebny jest SteamCMD. SteamCMD to **wersja Steam w trybie tekstowym (command line)**. To narzędzie pozwala szybko i łatwo pobrać dedykowane serwery popularnych gier ze Steam. SteamCMD znajdziesz na oficjalnej stronie Valve dla deweloperów: https://developer.valvesoftware.com/wiki/SteamCMD.

Następnie pobierz plik. Będzie to archiwum **steamcmd.zip**, które musisz rozpakować. Najlepiej utwórz osobny folder, gdzie wypakujesz plik. Po rozpakowaniu powinieneś zobaczyć plik **steamcmd.exe**. Uruchom go i poczekaj, aż instalacja się zakończy.

![](https://screensaver01.zap-hosting.com/index.php/s/NkbSey5q2rWRjtF/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że proces zakończył się pomyślnie i możesz przejść do instalacji serwera Satisfactory.



## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w **Steam command line (steamcmd.exe)**. Najpierw musisz się zalogować. Zrób to jako użytkownik **anonymous**. Wpisz polecenie: `login anonymous`

Kolejnym krokiem jest instalacja serwera. Wykonaj polecenie: `app_update 1690800`. ID aplikacji **1690800** to właśnie **Satisfactory Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/b8ePqS9FdP2rTzP/preview)



:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto uzbroić się w cierpliwość! :)
:::



Przejdź do katalogu, w którym wykonałeś instalację, a następnie do podkatalogu: **../steamapps/common/SatisfactoryDedicatedServer**

Tam musisz stworzyć plik startowy, który uruchomi oprogramowanie serwera. Utwórz plik o nazwie: server-start.bat

:::info
Upewnij się, że masz włączoną opcję wyświetlania rozszerzeń plików, aby plik miał poprawne rozszerzenie.
:::

Otwórz plik, dodaj do niego poniższą zawartość i zapisz zmiany:

```
Factoryserver.exe -log -unattended
```



Uruchom plik. Przy pierwszym starcie powinno pojawić się okienko z informacją, że potrzebne są dodatkowe komponenty do działania programu. Gra wymaga Visual C++ Runtime. Kliknij Tak i dokończ instalację.

Aby serwer był widoczny i dostępny z zewnątrz, musisz odblokować/przekierować porty serwera w zaporze sieciowej. Otwórz ustawienia Zapory systemu Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/x29gQWEreNt3y2W/preview)


W ustawieniach dodaj nowe reguły. Kliknij na reguły przychodzące i wychodzące, a następnie dodaj je dla protokołu UDP i portu 15000.



## Konfiguracja

Podstawowa instalacja jest już gotowa. Dalsze zmiany konfiguracji możesz wprowadzić w pliku **ServerSettings.ini**. Tam możesz zmienić nazwę serwera, hasło i inne opcje. Plik znajdziesz w katalogu:

```
../steamapps/common/SatisfactoryDedicatedServer/FactoryGame/Saved/Config/WindowsServer/
```



## Gra

Na koniec możesz uruchomić serwer, wykonując wcześniej utworzony plik **server-start.bat**. Powinno to otworzyć konsolę serwera i rozpocząć proces startu. Jeśli wszystko pójdzie zgodnie z planem, serwer pojawi się na liście serwerów po pomyślnym uruchomieniu.



## Podsumowanie

Gratulacje, właśnie zainstalowałeś i skonfigurowałeś serwer Satisfactory na swoim VPS! Jeśli masz jakieś pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />