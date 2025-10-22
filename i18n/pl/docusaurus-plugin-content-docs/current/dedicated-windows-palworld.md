---
id: dedicated-windows-palworld
title: "Serwer dedykowany: Palworld Serwer dedykowany Windows - konfiguracja"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować Palworld Serwer dedykowany na swoim Windows VPS lub serwerze → Sprawdź teraz"
sidebar_label: Palworld
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS lub serwer dedykowany i chcesz zainstalować na nim usługę Palworld Serwer dedykowany? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować tę usługę na Twoim serwerze.

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pt4oNY8tPJdKf44/preview" title="Jak skonfigurować Palworld Serwer dedykowany na Windows VPS!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [Poradnika Dostępu Początkowego (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to **wersja wiersza poleceń (CLI)** klienta Steam, która pozwala łatwo pobierać różne pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwij go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i umieść go w folderze `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z funkcji rozpakowywania Windows lub dowolnej aplikacji, np. 7zip czy Winrar. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom **steamcmd.exe** i poczekaj, aż proces instalacji zostanie w pełni zakończony.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera dedykowanego Palworld w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w oknie konsoli **steamcmd.exe**, które wcześniej uruchomiłeś. Musisz się najpierw zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

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

Po zakończeniu przejdź do katalogu, w którym pobrano wszystkie pliki serwera. Tam możesz uruchomić **PalServer.exe**, aby wystartować serwer. Jednak najpierw zalecamy skonfigurować przekierowanie portów i ustawienia serwera.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów, z których korzysta proces serwera dedykowanego. Możesz to zrobić albo przez polecenia Powershell (łatwiejsze), albo przez panel zapory Windows Defender.

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
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer Palworld był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzysz podstawową stronę zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego okna.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz utworzyć nowe reguły dla swojego serwera Palworld. Kliknij kolejno na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 8211
- UDP przychodzące i wychodzące: 8211

Jeśli potrzebujesz pomocy, skorzystaj z naszego [Poradnika Przekierowania Portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny publicznie, co oznacza, że połączysz się z nim przez adres IP serwera. Wystarczy, że w przeglądarce listy serwerów wpiszesz: `[twoj_adres_ip]:8211`

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer Palworld. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Przejdź do katalogu:
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

Znajdziesz tam plik konfiguracyjny **PalWorldSettings.ini**. W tym pliku możesz ustawić wiele parametrów serwera. Zobacz nasz [Poradnik Konfiguracji Serwera](palworld-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

:::note
Jeśli nie widzisz tego pliku, uruchom serwer przynajmniej **raz**, aby plik został wygenerowany automatycznie. Alternatywnie możesz skopiować domyślne ustawienia z `steamapps/common/PalServer/DefaultPalWorldSettings.ini`.
:::

### Włącz tryb Xbox

Serwery dedykowane Palworld mają teraz opcję działania jako serwer dedykowany Microsoft Store/Xbox, co pozwala graczom z Xbox i Microsoft Store na PC grać razem na tym samym serwerze.

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

Zrób to, tworząc nowy plik `StartServer.bat` w katalogu głównym i wpisując w nim: `PalServer.exe -publiclobby`. Specjalna flaga startowa `-publiclobby` włącza tryb Community Server, dzięki czemu serwer pojawi się na liście.

Ustaw też łatwą do znalezienia nazwę serwera – zobacz nasz [Poradnik Konfiguracji Serwera](palworld-configuration.md), jak to zrobić.
:::

## Uruchamianie i łączenie się z serwerem

Teraz czas wystartować serwer. Może być konieczne zainstalowanie [DirectX runtime](https://www.microsoft.com/en-gb/download/details.aspx?id=35), jeśli nie masz go jeszcze na swoim Windows serwerze dedykowanym.

Przejdź do głównego katalogu serwera Palworld i uruchom **PalServer.exe**, aby rozpocząć start serwera. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces uruchamiania. Jeśli wszystko pójdzie zgodnie z planem, serwer pojawi się na liście serwerów. Możesz też połączyć się bezpośrednio, wpisując w dolnym pasku wyszukiwania listy serwerów: `[twoj_adres_ip]:8211`.

Gratulacje, pomyślnie zainstalowałeś Palworld na swoim Windows serwerze dedykowanym.

<InlineVoucher />