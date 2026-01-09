---
id: dedicated-windows-conan
title: "Serwer dedykowany: Conan Exiles Serwer dedykowany Windows - konfiguracja"
description: "Dowiedz się, jak skonfigurować serwer dedykowany Conan Exiles na Windows serwerze dedykowanym, aby cieszyć się płynną rozgrywką i zarządzaniem serwerem → Sprawdź teraz"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz serwer dedykowany z Windows i chcesz zainstalować na nim serwer dedykowany Conan Exiles? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez Remote Desktop (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Początkowy dostęp (RDP)](vserver-windows-userdp.md).

:::note Narzędzie do uruchamiania serwera
Alternatywnie do SteamCMD, twórcy Conan Exiles udostępniają przydatne narzędzie do uruchamiania serwera, które można wykorzystać na Windows, aby ułatwić start serwera.

Zalecamy przeczytanie [oficjalnego wpisu na forum](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699), jeśli chcesz z niego skorzystać.
:::

Po uzyskaniu dostępu do serwera, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to **wersja konsolowa (CLI)** klienta Steam, która pozwala łatwo pobierać pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder na serwerze, w tym przykładzie nazwij go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś, i umieść go w folderze `steamcmd`. Następnie rozpakuj plik, klikając prawym przyciskiem i korzystając z funkcji rozpakowywania Windows lub programów takich jak 7zip czy WinRAR. Po rozpakowaniu powinien pojawić się plik **steamcmd.exe**.

Uruchom **steamcmd.exe** i poczekaj, aż proces instalacji zakończy się w całości.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, instalacja zakończyła się pomyślnie i możesz przejść do instalacji serwera dedykowanego Conan Exiles w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Najpierw musisz się zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz zacząć pobierać pliki.

:::tip
Opcjonalnie: Możesz ustawić preferowany katalog instalacji, używając komendy `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na wybraną lokalizację serwera. Na przykład:
```
force_install_dir C:\Conan-Server
```
:::

Teraz wpisz komendę `app_update 443030`, która rozpocznie pobieranie. App ID **443030** to aplikacja **Conan Exiles**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu, gdzie pobrano pliki serwera. Tam możesz uruchomić **StartServer.bat**, aby wystartować serwer. Zalecamy jednak najpierw skonfigurować przekierowanie portów i ustawienia serwera.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić przez polecenia Powershell (łatwiejsze) lub przez panel zapory Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że uruchamiasz Powershell jako administrator, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Wklej poniższe polecenia do konsoli Powershell:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer Conan Exiles był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows i otwórz **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzysz podstawową stronę zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego panelu.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera Conan Exiles. Dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 7777, 25575
- UDP przychodzące i wychodzące: 7777, 7778, 27015

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu reguł Twój serwer będzie dostępny publicznie, co oznacza, że możesz łączyć się z nim przez adres IP serwera. Zalecamy jednak najpierw skonfigurować ustawienia serwera w kolejnej sekcji.

## Konfiguracja

Na tym etapie masz już gotowy serwer Conan Exiles. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Przejdź do katalogu:
```
../Conan-Server/Engine/Config/Windows
```

Znajdziesz tam plik konfiguracyjny **WindowsServerEngine.ini**. W tym pliku możesz zmieniać wiele ustawień, dodając odpowiednie parametry.

Na przykład, aby ustawić nazwę serwera, hasło i hasło administratora, dodaj do pliku:
```
[OnlineSubsystem]
ServerName=[twoja_nazwa_serwera]
ServerPassword=[twoje_hasło]

[ServerSettings]
AdminPassword=[twoje_hasło_admina]
```

Polecamy zajrzeć na [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) po pełną listę dostępnych opcji.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu serwera Conan Exiles i uruchom **StartServer.bat**, który utworzyłeś wcześniej. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie się proces startu. Teraz możesz połączyć się z serwerem bezpośrednio przez przeglądarkę serwerów w grze, wpisując adres IP i port serwera (domyślnie 7777).

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Conan Exiles na swoim serwerze dedykowanym! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!