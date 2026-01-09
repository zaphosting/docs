---
id: dedicated-windows-avorion
title: "Serwer dedykowany: Konfiguracja Avorion Dedicated Server na Windows"
description: "Dowiedz się, jak skonfigurować Avorion Dedicated Server na swoim Windows VPS, aby bezproblemowo hostować rozgrywkę → Sprawdź teraz"
sidebar_label: Avorion
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS i chcesz zainstalować serwer dedykowany Avorion? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Jak skonfigurować Avorion Dedicated Server na Windows VPS!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Pierwszy dostęp (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby pobrać niezbędne pliki serwera dedykowanego. SteamCMD to **wersja konsolowa (CLI)** klienta Steam, która pozwala łatwo pobierać pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwaliśmy go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i przenieś go do folderu `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i używając wbudowanej funkcji rozpakowywania Windows lub dowolnej aplikacji typu 7zip czy Winrar. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom **steamcmd.exe** i poczekaj, aż proces instalacji zostanie w pełni zakończony.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że proces zakończył się sukcesem i możesz przejść do instalacji serwera dedykowanego Avorion w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Najpierw musisz się zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz zacząć pobierać pliki.

:::tip
Opcjonalnie: Możesz ustawić preferowany katalog instalacji za pomocą komendy `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na wybraną lokalizację dla serwera. Na przykład:
```
force_install_dir C:\Avorion-Server
```
:::

Teraz wpisz komendę `app_update 565060`, która rozpocznie pobieranie. App ID **565060** to aplikacja **Avorion**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu, gdzie pobrano pliki serwera. Tam zrób kopię pliku **server.bat** i zmień nazwę kopii na **startserver.bat** lub podobną. Nowy plik `.bat` będzie służył do uruchamiania serwera i umożliwi edycję opcji konfiguracyjnych serwera w kolejnej sekcji. Najpierw jednak zalecamy skonfigurować przekierowanie portów.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić albo przez polecenia Powershell (łatwiejsze), albo przez panel Zapory systemu Windows.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że uruchamiasz Powershell w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Skopiuj i wklej poniższe polecenia do konsoli Powershell:
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer Avorion był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows i otwórz **Ustawienia zapory systemu Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzy się podstawowy panel zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego okna.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera Avorion. Kliknij na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 27000
- UDP przychodzące i wychodzące: 27000, 27003, 27020, 27021

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny publicznie, co oznacza, że połączysz się z nim przez adres IP serwera. W grze wybierz postać, przejdź do zakładki **Znajdź gry** i kliknij **Dodaj serwer**. Wpisz tam adres IP serwera, port (domyślnie 15636) oraz hasło serwera (jeśli ustawione, w przeciwnym razie zostaw puste).

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer Avorion. Możesz konfigurować ustawienia serwera bezpośrednio w pliku **startserver.bat**, który skopiowałeś wcześniej. Otwórz go w edytorze tekstu, np. notatniku, i zmodyfikuj parametry serwera.

Jeśli chcesz edytować parametry i ustawienia konkretnej galaktyki, musisz wejść do zapisów świata i edytować plik konfiguracyjny **server.ini**. Znajdziesz go w folderze AppData Windows, pod ścieżką:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Możesz łatwo dostać się do tego folderu, naciskając jednocześnie `CTRL` + `R` i wpisując w oknie uruchamiania ścieżkę: `%userprofile%/AppData/Roaming/Avorion/galaxies`. Kliknij **OK**, a zostaniesz przeniesiony do folderu.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do katalogu głównego serwera Avorion i uruchom plik **startserver.bat**, który stworzyłeś wcześniej. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces startu. Teraz możesz połączyć się z serwerem bezpośrednio przez przeglądarkę serwerów w grze, wpisując adres IP i port serwera (domyślnie 27000).

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Avorion na swoim VPS! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!