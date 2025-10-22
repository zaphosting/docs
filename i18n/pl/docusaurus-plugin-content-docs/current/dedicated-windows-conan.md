---
id: dedicated-windows-conan
title: "Serwer dedykowany: Conan Exiles Dedicated Server Windows Setup"
description: "Dowiedz się, jak skonfigurować serwer dedykowany Conan Exiles na Windows serwerze dedykowanym, aby zapewnić płynną rozgrywkę i zarządzanie serwerem → Sprawdź teraz"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz serwer dedykowany z Windows i chcesz zainstalować na nim serwer dedykowany Conan Exiles? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować tę usługę na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez Remote Desktop (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Początkowy dostęp (RDP)](vserver-windows-userdp.md).

:::note Narzędzie do uruchamiania serwera
Alternatywnie do SteamCMD, twórcy Conan Exiles udostępniają przydatne narzędzie launcher serwera, które można używać na Windows, aby łatwiej uruchomić serwer.

Polecamy przeczytać [Oficjalny wpis na forum](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699), jeśli chcesz z niego skorzystać.
:::

Po uzyskaniu dostępu do serwera, musisz zainstalować **SteamCMD**, aby pobrać niezbędne pliki serwera dedykowanego. SteamCMD to wersja **kliencka wiersza poleceń (CLI)** Steam i narzędzie, które pozwala łatwo pobierać pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przypadku nazwij go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i umieść go w folderze `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z funkcji rozpakowywania Windows lub dowolnej aplikacji, np. 7zip czy Winrar. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom po prostu **steamcmd.exe** i poczekaj, aż proces instalacji zostanie w pełni zakończony.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera dedykowanego Conan Exiles w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Musisz się zalogować, zanim zaczniesz cokolwiek robić, używając konta **anonymous** poleceniem: `login anonymous`

Po zalogowaniu możesz rozpocząć pobieranie plików.

:::tip
Opcjonalnie: Możesz ustawić preferowany katalog instalacji, używając polecenia `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na ścieżkę, którą chcesz użyć dla swojego serwera. Na przykład:
```
force_install_dir C:\Conan-Server
```
:::

Teraz wpisz polecenie `app_update 443030`, które rozpocznie pobieranie. App ID **443030** to aplikacja **Conan Exiles**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu pobierania, gdzie znajdują się wszystkie pliki serwera. Tam możesz użyć pliku **StartServer.bat**, aby uruchomić serwer. Jednak najpierw zalecamy skonfigurować przekierowanie portów i ustawienia serwera.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić bezpośrednio przez polecenia Powershell, co jest łatwiejsze, lub standardowo przez panel Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia i wszystko działało poprawnie.

:::info
Upewnij się, że uruchamiasz Powershell w trybie administratora, inaczej ustawienia mogą się nie zastosować.
:::

Następnie skopiuj i wklej poniższe polecenia do konsoli Powershell:
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer Conan Exiles był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Możliwe, że będziesz musiał kliknąć **Ustawienia zaawansowane**, aby otworzyć odpowiednie okno, jeśli otworzysz tylko podstawową stronę zapory.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz utworzyć nowe reguły dla swojego serwera Conan Exiles. Zrób to, klikając na reguły przychodzące i wychodzące, jak opisano poniżej, i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 7777, 25575
- UDP przychodzące i wychodzące: 7777, 7778, 27015

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny publicznie, co oznacza, że będziesz mógł połączyć się z nim przez adres IP serwera. Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie zakończyłeś konfigurację serwera Conan Exiles. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Najpierw przejdź do katalogu:
```
../Conan-Server/Engine/Config/Windows
```

Znajdziesz tam plik konfiguracyjny **WindowsServerEngine.ini**. W tym pliku możesz dostosować wiele opcji, dodając odpowiednie parametry.

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

Teraz czas uruchomić serwer. Przejdź do głównego katalogu serwera Conan Exiles i uruchom **StartServer.bat**, który utworzyłeś wcześniej, aby rozpocząć proces startu. Otworzy się konsola serwera w wierszu poleceń i serwer zacznie działać. Teraz możesz połączyć się bezpośrednio z serwerem przez przeglądarkę serwerów w grze, wpisując adres IP serwera i port (domyślnie 7777).

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Conan Exiles na swoim serwerze dedykowanym! Jeśli masz jakiekolwiek pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />