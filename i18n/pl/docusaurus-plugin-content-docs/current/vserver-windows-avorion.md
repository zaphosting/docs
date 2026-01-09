---
id: vserver-windows-avorion
title: "VPS: Avorion Serwer Dedykowany Windows - Konfiguracja"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować Avorion Serwer Dedykowany na swoim Windows VPS → Sprawdź teraz"
sidebar_label: Avorion
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS i chcesz zainstalować na nim usługę Avorion Serwer Dedykowany? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować tę usługę na Twoim serwerze.

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="Jak skonfigurować Avorion Serwer Dedykowany na Windows VPS!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć wiedzę w najbardziej angażujący sposób!"/>
<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit Zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Pierwszy Dostęp (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to **wersja konsolowa (CLI)** klienta Steam i narzędzie, które pozwala łatwo pobierać różne pliki z warsztatu Steam oraz serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwaliśmy go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i umieść go w folderze `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z funkcji rozpakowywania Windows lub dowolnej aplikacji jak .7zip czy Winrar. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom po prostu **steamcmd.exe** i poczekaj, aż proces instalacji zostanie w pełni zakończony.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera dedykowanego Avorion w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Musisz się najpierw zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz rozpocząć pobieranie plików.

:::tip
Opcjonalnie: Możesz ustawić preferowany katalog instalacji, używając komendy `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na lokalizację, którą chcesz wykorzystać dla serwera. Na przykład:
```
force_install_dir C:\Avorion-Server
```
:::

Teraz wpisz komendę `app_update 565060`, która rozpocznie pobieranie. App ID **565060** to aplikacja **Avorion**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu pobierania, gdzie znajdują się wszystkie pliki serwera. Skopiuj plik **server.bat** i zmień nazwę kopii na **startserver.bat** lub podobnie. Nowy plik `.bat` będzie służył do uruchamiania serwera oraz umożliwi edycję opcji konfiguracyjnych serwera w kolejnej sekcji. Najpierw jednak zalecamy przekierowanie portów i konfigurację serwera.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić albo bezpośrednio przez polecenia Powershell (łatwiejsze), albo standardowo przez panel Zapory Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia i wszystko działało poprawnie.

:::info
Upewnij się, że uruchamiasz Powershell w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Następnie skopiuj i wklej poniższe polecenia do konsoli Powershell:
```
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej niezbędne, aby Twój serwer Avorion był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia Zapory Windows z Zaawansowanym Bezpieczeństwem**. Jeśli otworzysz podstawową stronę Zapory Windows, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego okna.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera Avorion. Kliknij na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 27000
- UDP przychodzące i wychodzące: 27000, 27003, 27020, 27021

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie Portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny publicznie, co oznacza, że połączysz się z nim przez adres IP serwera. Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie zakończyłeś konfigurację serwera Avorion. Możesz edytować ustawienia serwera bezpośrednio w pliku **startserver.bat**, który wcześniej skopiowałeś. Otwórz go w edytorze tekstu, np. notatniku, i dostosuj parametry serwera.

Jeśli chcesz zmienić parametry i ustawienia specyficzne dla świata, musisz wejść do zapisów galaktyk i edytować plik konfiguracyjny **server.ini**. Znajdziesz go w katalogu AppData Windows, dostępnym pod następującą ścieżką:
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
Możesz łatwo dostać się do tego folderu, naciskając jednocześnie `CTRL` + `R` i wpisując w oknie uruchamiania ścieżkę: `%userprofile%/AppData/Roaming/Avorion/galaxies`. Kliknij **OK**, a zostaniesz przeniesiony do folderu.

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu serwera Avorion i uruchom plik **startserver.bat**, który stworzyłeś wcześniej, aby rozpocząć proces startu. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie się uruchamianie. Teraz możesz połączyć się bezpośrednio z serwerem przez przeglądarkę serwerów w grze, wpisując adres IP serwera i port (domyślnie 27000).

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Avorion na swoim VPS! Jeśli masz dodatkowe pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />