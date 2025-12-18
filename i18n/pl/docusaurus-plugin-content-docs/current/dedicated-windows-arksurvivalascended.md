---
id: dedicated-windows-arksurvivalascended
title: "Serwer dedykowany: ARK Survival Ascended - konfiguracja serwera dedykowanego na Windows"
description: "Dowiedz się, jak szybko i łatwo skonfigurować serwer dedykowany ARK: Survival Ascended na swoim VPS lub serwerze dedykowanym z Windows → Sprawdź teraz"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany z Windows i chcesz zainstalować na nim serwer dedykowany ARK: Survival Ascended? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

<YouTube videoId="NvaXYjLSCn8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/RpJWENYeqgTQaee/preview" title="Konfiguracja serwera dedykowanego ARK: Survival Ascended na Windows VPS" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>



## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Dostęp początkowy (RDP)](vserver-windows-userdp.md).

Po uzyskaniu dostępu do serwera, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to wersja **kliencka wiersza poleceń (CLI)** Steam, która pozwala łatwo pobierać pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwij go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i umieść go w folderze `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z funkcji rozpakowywania Windows lub dowolnej aplikacji, np. 7zip czy Winrar. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom po prostu **steamcmd.exe** i poczekaj, aż proces instalacji zakończy się w całości.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera dedykowanego ARK: Survival Ascended w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś mieć możliwość wykonywania poleceń w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Musisz się zalogować, zanim zaczniesz cokolwiek robić, używając konta **anonymous** poleceniem: `login anonymous`

Po zalogowaniu możesz rozpocząć pobieranie plików.

:::tip
Opcjonalnie: Możesz ustawić preferowany katalog instalacji poleceniem `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na ścieżkę, której chcesz użyć dla swojego serwera. Na przykład: 
```
force_install_dir C:\ARK-Survival-Ascended-Server
```
:::

Teraz wpisz polecenie `app_update 2430930`, które rozpocznie pobieranie. App ID **2430930** to aplikacja **ARK: Survival Ascended Dedicated Server**.

![](https://github.com/zaphosting/docs/assets/42719082/98d7c643-04be-488b-8831-86606363f98c)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

### Tworzenie pliku startowego

Po pomyślnym pobraniu przejdź do katalogu, w którym wykonałeś instalację i otwórz podkatalog:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Binaries/Win64
```

W tym folderze musisz stworzyć plik startowy, który jest potrzebny do uruchomienia serwera dedykowanego. Utwórz plik o nazwie: `start-ark.bat`. Najpierw możesz stworzyć dokument tekstowy, a potem zmienić jego rozszerzenie na `.bat`.

:::info
Upewnij się, że masz włączoną opcję "Pokaż rozszerzenia plików" w Eksploratorze plików, aby mieć pewność, że plik ma poprawne rozszerzenie.
:::

Otwórz plik w edytorze tekstu (np. Notepad++) i wklej do niego następującą zawartość:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[nazwa_serwera]?ServerAdminPassword=[haslo_admina]?Port=7777?QueryPort=27015?MaxPlayers=[max_graczy] -NoBattlEye
exit
```

W tym poleceniu zamień `[nazwa_serwera]`, `[haslo_admina]` oraz `[max_graczy]` na swoje wartości.

Jeśli chcesz ustawić hasło dla zwykłych graczy, dodaj `?ServerPassword=[haslo_dla_graczy]` do powyższego polecenia. Wtedy będzie wyglądać tak:
```
start ArkAscendedServer.exe TheIsland_WP?listen?SessionName=[nazwa_serwera]?ServerPassword=[haslo_dla_graczy]?ServerAdminPassword=[haslo_admina]?Port=7777?QueryPort=27015?MaxPlayers=[max_graczy] -NoBattlEye
exit
```

Upewnij się, że ustawiłeś zmienne i zapisałeś zmiany przed zamknięciem pliku.

Twój serwer będzie dostępny lokalnie pod adresem `127.0.0.1:7777` po uruchomieniu pliku startowego i włączeniu serwera. Jednak musisz jeszcze dodać reguły przekierowania portów w zaporze Windows, jeśli chcesz, aby serwer był dostępny publicznie — o tym w następnej sekcji.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmodyfikować reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić albo przez polecenia Powershell (łatwiejsze), albo przez standardowy interfejs Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że uruchamiasz Powershell w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Następnie wklej poniższe polecenia do konsoli Powershell:
```
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ARKSA Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej niezbędne, aby Twój serwer Ark: Survival Ascended był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzysz podstawową stronę zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego okna.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz stworzyć nowe reguły dla swojego serwera Ark: Survival Ascended. Kliknij kolejno na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 27020
- UDP przychodzące i wychodzące: 27015
- UDP przychodzące i wychodzące: 7777-7778

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny publicznie, czyli będziesz mógł połączyć się z nim przez adres IP serwera. W grze Ark: Survival Ascended otwórz konsolę i wpisz `open [twoj_adres_ip]:7777`.

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer dedykowany Ark: Survival Ascended. Możesz dalej konfigurować serwer przez dwa pliki konfiguracyjne znajdujące się w katalogu serwera.

Przejdź do następujących folderów:
```
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Config/
../steamapps/common/Ark Survival Ascended Dedicated Server/ShooterGame/Saved/Config/WindowsServer/
```

Znajdziesz tam pliki konfiguracyjne **DefaultGameUserSettings.ini** oraz **Gameusersettings.ini**. W tych plikach możesz edytować mnóstwo zmiennych i opcji dotyczących Twojego serwera.


:::warning[OBSŁUGA CROSSPLAY]
Od 18 listopada 2023 właściciele serwerów muszą ręcznie zainstalować listę unieważnionych certyfikatów, którą można pobrać z https://dev.epicgames.com/ (lub bezpośrednio z http://crl.r2m02.amazontrust.com/r2m02.crl). Pobraną listę r2m02.crl należy zainstalować (klikając prawym przyciskiem na plik) wybierając opcję „Umieść wszystkie certyfikaty w następującym magazynie” i wybierając „Zaufane główne urzędy certyfikacji”. Może być wymagany restart systemu.

Jeśli przed 18 listopada 2023 właściciele serwerów zainstalowali plik certyfikatu r2m02.cer i serwer nie jest widoczny, ten certyfikat musi zostać usunięty z systemu, aby serwery znów były widoczne. Aby usunąć unieważniony certyfikat, uruchom (Windows + R) certmgr.msc i wyszukaj Amazon RSA 2048 M02 w „Zaufanych głównych urzędach certyfikacji”. To samo zrób w certlm.msc. Na koniec może być potrzebny restart systemu.
:::





## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Aby jednak serwer uruchomił się poprawnie, musisz zainstalować [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) na swoim Windows VPS.

:::info
Musisz zainstalować [Microsoft Visual C++ 2015 Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) na swoim Windows VPS przed próbą uruchomienia serwera, jeśli jeszcze go nie masz, ponieważ jest to zależność. Bez tego serwer może się nie uruchomić.
:::

Po zainstalowaniu tego na VPS możesz uruchomić serwer, wykonując wcześniej utworzony plik **start-ark.bat**.

Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces startu. Jeśli wszystko pójdzie zgodnie z planem, Twój serwer pojawi się na liście serwerów. Alternatywnie możesz połączyć się bezpośrednio, otwierając konsolę w grze i wpisując `open [twoj_adres_ip]:7777`.

Gratulacje! Pomyślnie zainstalowałeś Ark: Survival Ascended na swoim Windows serwerze dedykowanym.