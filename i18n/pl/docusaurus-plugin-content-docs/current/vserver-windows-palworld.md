---
id: vserver-windows-palworld
title: "VPS: Palworld Serwer Dedykowany Windows - Instalacja"
description: "Dowiedz się, jak zainstalować Palworld Serwer Dedykowany na swoim Windows VPS, aby bezproblemowo hostować rozgrywkę → Sprawdź teraz"
sidebar_label: Palworld
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS i chcesz zainstalować usługę Palworld Serwer Dedykowany? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/3gSdKyDDL65BAxM/preview" title="Jak skonfigurować Palworld Serwer Dedykowany na Windows VPS!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>
<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit Zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [Poradnika Dostępu Początkowego (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to **wersja konsolowa (CLI)** klienta Steam, która pozwala łatwo pobierać pliki z warsztatu Steam oraz pliki serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwij go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i przenieś go do folderu `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i używając wbudowanej funkcji rozpakowywania Windows lub dowolnej aplikacji jak 7zip czy WinRAR. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom po prostu **steamcmd.exe** i poczekaj, aż proces instalacji zakończy się całkowicie.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja zakończyła się sukcesem i możesz przejść do instalacji serwera dedykowanego Palworld w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Najpierw musisz się zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz rozpocząć pobieranie plików.

:::tip
Opcjonalnie: Możesz ustawić preferowany katalog instalacji za pomocą komendy `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na wybraną lokalizację serwera. Na przykład:
```
force_install_dir C:\Palworld-Server
```
:::

Teraz wpisz komendę `app_update 2394010`, która rozpocznie pobieranie. App ID **2394010** to aplikacja **Palworld**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu, w którym pobrano pliki serwera. Tam znajdziesz plik **PalServer.exe**, którym możesz uruchomić serwer. Zalecamy jednak najpierw skonfigurować przekierowanie portów i ustawienia serwera.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić albo przez polecenia Powershell (łatwiejsze), albo przez panel Zapory Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że uruchamiasz Powershell w trybie administratora, inaczej ustawienia mogą nie zostać poprawnie zastosowane.
:::

Następnie wklej poniższe polecenia w konsoli Powershell:
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory niezbędne, aby Twój serwer Palworld był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia Zapory Windows z Zaawansowanym Bezpieczeństwem**. Jeśli otworzy się podstawowy panel Zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego okna.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz utworzyć nowe reguły dla swojego serwera Palworld. Kliknij kolejno na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 8211
- UDP przychodzące i wychodzące: 8211

Jeśli potrzebujesz pomocy, skorzystaj z naszego [Poradnika Przekierowania Portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny publicznie, co oznacza, że możesz połączyć się z nim przez adres IP serwera. Wystarczy, że w przeglądarce listy serwerów wpiszesz adres: `[twoj_adres_ip]:8211`

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer Palworld. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Przejdź do następującego katalogu:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Znajdziesz tam plik konfiguracyjny **PalWorldSettings.ini**. W tym pliku możesz ustawić wiele parametrów serwera. Zobacz nasz [Poradnik Konfiguracji Serwera](palworld-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

:::note
Jeśli nie widzisz tego pliku, uruchom serwer przynajmniej **raz**, aby plik został wygenerowany automatycznie. Alternatywnie możesz skopiować domyślne ustawienia z `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Włącz tryb Xbox

Serwery dedykowane Palworld mają teraz możliwość działania jako serwer dedykowany Microsoft Store/Xbox, co pozwala graczom z Xbox i Microsoft Store na PC grać razem na tym samym serwerze.

:::note
Cross-play między wersjami Steam a Microsoft Store/Xbox nadal nie jest możliwy. Twój serwer może działać albo dla Steam, albo dla Microsoft Store/Xbox.
:::

Przejdź do katalogu i otwórz plik **PalWorldSettings.ini**:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

Dodaj do pliku poniższy fragment, aby włączyć tryb Xbox:
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

Zapisz plik, a przy następnym uruchomieniu serwer będzie działał w trybie Xbox.

:::info
Na konsolach Xbox nie można łączyć się bezpośrednio przez adres IP, więc jeśli planujesz grać na Xbox, musisz udostępnić swój serwer publicznie.

Zrób to, tworząc nowy plik `StartServer.bat` w katalogu głównym i wpisując w nim: `PalServer.exe -publiclobby`. Flaga `-publiclobby` uruchamia tryb Community Server, dzięki czemu serwer pojawi się na liście.

Ustaw też nazwę serwera, którą łatwo znaleźć — zobacz nasz [Poradnik Konfiguracji Serwera](palworld-configuration.md).
:::

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Może być konieczne zainstalowanie [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35), jeśli nie masz go jeszcze na swoim Windows VPS.

Przejdź do katalogu głównego serwera Palworld i uruchom **PalServer.exe**, aby rozpocząć start serwera. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces uruchamiania. Jeśli wszystko pójdzie zgodnie z planem, serwer pojawi się na liście serwerów. Możesz też połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twoj_adres_ip]:8211`.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Palworld na swoim VPS! Jeśli masz pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />