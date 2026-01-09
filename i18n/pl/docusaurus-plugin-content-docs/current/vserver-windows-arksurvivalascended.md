---
id: vserver-windows-arksurvivalascended
title: "VPS: ARK Survival Ascended Serwer Dedykowany Windows - Konfiguracja"
description: "Dowiedz się, jak skonfigurować serwer dedykowany ARK: Survival Ascended na Windows VPS, aby cieszyć się płynną rozgrywką i pełną kontrolą nad serwerem → Sprawdź teraz"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Windows VPS i chcesz zainstalować serwer dedykowany ARK: Survival Ascended? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.
<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Sa76nDiSmQKx7x2/preview" title="ARK: Survival Ascended Dedicated Server Setup on Windows VPS" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>
<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit Zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Pierwszy Dostęp (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby pobrać niezbędne pliki serwera dedykowanego. SteamCMD to **wersja konsolowa (CLI)** klienta Steam, która pozwala łatwo pobierać pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwij go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i przenieś go do folderu `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i używając wbudowanej funkcji rozpakowywania Windows lub dowolnej aplikacji jak 7zip czy Winrar. Po rozpakowaniu powinien pojawić się plik **steamcmd.exe**.

Uruchom **steamcmd.exe** i poczekaj, aż proces instalacji zakończy się całkowicie.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja zakończyła się sukcesem i możesz przejść do instalacji serwera dedykowanego ARK: Survival Ascended w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Najpierw musisz się zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz zacząć pobierać pliki.

:::tip
Opcjonalnie: Możesz ustawić własny katalog instalacji za pomocą komendy `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na wybraną lokalizację serwera. Na przykład:
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Teraz wpisz komendę `app_update 2430930`, która rozpocznie pobieranie. App ID **2430930** to aplikacja **ARK: Survival Ascended Dedicated Server**.

![](https://screensaver01.zap-hosting.com/index.php/s/DSMpETJYtkciNHT/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

### Tworzenie pliku startowego

Po pomyślnym pobraniu przejdź do katalogu, w którym zainstalowałeś serwer, a następnie do podkatalogu:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

W tym folderze musisz stworzyć plik startowy, który będzie uruchamiał serwer dedykowany. Utwórz plik o nazwie: `start-ark.bat`. Możesz najpierw stworzyć dokument tekstowy, a potem zmienić jego rozszerzenie na `.bat`.

:::info
Upewnij się, że masz włączoną opcję "Pokaż rozszerzenia plików" w Eksploratorze Windows, aby poprawnie zmienić rozszerzenie.
:::

Otwórz plik w edytorze tekstu (np. Notepad++) i wklej do niego następującą zawartość:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

W tym poleceniu zamień `[server_name]`, `[admin_password]` oraz `[max_players]` na swoje wartości.

Jeśli chcesz ustawić hasło dla zwykłych graczy, dodaj `?ServerPassword=[join_password]` do powyższej komendy, tak aby wyglądała tak:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[server_name]?ServerPassword=[join_password]?ServerAdminPassword=[admin_password]?Port=7777?QueryPort=27015?MaxPlayers=[max_players] -NoBattlEye
exit
```

Upewnij się, że zmieniłeś zmienne i zapisałeś plik przed zamknięciem.

Twój serwer będzie dostępny lokalnie pod adresem `127.0.0.1:7777` po uruchomieniu pliku startowego i włączeniu serwera. Jednak aby serwer był dostępny publicznie, musisz dodać reguły przekierowania portów w zaporze Windows, co omówimy w kolejnej sekcji.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz skonfigurować przekierowanie portów, których używa proces serwera dedykowanego. Możesz to zrobić przez polecenia Powershell (łatwiejsze) lub przez interfejs Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że uruchamiasz Powershell w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Wklej poniższe polecenia do konsoli Powershell:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które pozwolą na publiczny dostęp do Twojego serwera ARK: Survival Ascended.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzy się podstawowa strona zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego okna.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera ARK: Survival Ascended. Dodaj je dla następujących protokołów i portów, zarówno dla ruchu przychodzącego, jak i wychodzącego:
- TCP przychodzący i wychodzący: 27020
- UDP przychodzący i wychodzący: 27015
- UDP przychodzący i wychodzący: 7777-7778

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu reguł Twój serwer będzie dostępny publicznie i będziesz mógł połączyć się z nim przez adres IP serwera. W grze Ark: Survival Ascended otwórz konsolę i wpisz `open [twoj_adres_ip]:7777`.

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz grać.

## Konfiguracja

Na tym etapie masz już gotowy serwer dedykowany Ark: Survival Ascended. Możesz dalej konfigurować serwer przez dwa pliki konfiguracyjne znajdujące się w katalogu serwera.

Przejdź do następujących folderów:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Znajdziesz tam pliki konfiguracyjne **DefaultGameUserSettings.ini** oraz **GameUserSettings.ini**. W tych plikach możesz edytować wiele zmiennych i opcji dotyczących Twojego serwera.

:::warning[OBSŁUGA CROSSPLAY]
Od 18 listopada 2023 właściciele serwerów muszą ręcznie zainstalować listę unieważnionych certyfikatów, którą można pobrać z https://dev.epicgames.com/ (lub bezpośrednio z http://crl.r2m02.amazontrust.com/r2m02.crl). Pobraną listę r2m02.crl należy zainstalować (klikając prawym przyciskiem na plik) wybierając "Umieść wszystkie certyfikaty w następującym magazynie" i wybierając "Zaufane główne urzędy certyfikacji". Może być wymagany restart systemu.

Jeśli przed 18 listopada 2023 właściciele serwerów zainstalowali plik certyfikatu r2m02.cer i serwer nie jest widoczny, certyfikat ten musi zostać usunięty z systemu, aby serwery znów były widoczne. Aby usunąć unieważniony certyfikat, uruchom (Windows + R) certmgr.msc i wyszukaj Amazon RSA 2048 M02 w "Zaufane główne urzędy certyfikacji". To samo należy zrobić w certlm.msc. Na koniec może być potrzebny restart systemu.
:::

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Aby jednak serwer wystartował poprawnie, musisz zainstalować [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) na swoim Windows VPS.

:::info
Musisz zainstalować [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) na Windows VPS przed próbą uruchomienia serwera, jeśli jeszcze go nie masz, ponieważ jest to wymóg. Bez tego serwer może się nie uruchomić.
:::

Po instalacji możesz uruchomić serwer, wykonując plik **start-ark.bat**, który wcześniej stworzyłeś.

Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces startu. Jeśli wszystko pójdzie zgodnie z planem, Twój serwer pojawi się na liście serwerów. Możesz też połączyć się bezpośrednio, otwierając konsolę w grze i wpisując `open [twoj_adres_ip]:7777`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer ARK-Survival-Ascended na swoim VPS! Jeśli masz jakiekolwiek pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />