---
id: dedicated-windows-foundry
title: "Serwer dedykowany: Konfiguracja Foundry Dedicated Server na Windows"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować Foundry Dedicated Server na swoim Windows VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS lub serwer dedykowany i chcesz zainstalować na nim usługę Foundry Dedicated Server? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować tę usługę na Twoim serwerze.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="Jak skonfigurować Foundry Dedicated Server na Windows VPS!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>



## Przygotowanie

Na początek połącz się ze swoim VPS przez Remote Desktop (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Początkowy dostęp (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to **wersja wiersza poleceń (CLI)** klienta Steam i narzędzie, które pozwala łatwo pobierać różne pliki z warsztatu Steam oraz pliki serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwaliśmy go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i umieść go w folderze `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z funkcji rozpakowywania Windows lub dowolnej aplikacji, np. 7zip czy WinRAR. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom po prostu **steamcmd.exe** i poczekaj, aż proces instalacji zostanie w pełni zakończony.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera dedykowanego Foundry w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Musisz się zalogować, zanim zaczniesz cokolwiek robić, używając użytkownika **anonymous** poleceniem: `login anonymous`

Po zalogowaniu możesz zacząć pobierać pliki.

:::tip
Opcjonalnie: Możesz ustawić preferowany katalog instalacji poleceniem `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na ścieżkę, której chcesz użyć dla swojego serwera. Na przykład:
```
force_install_dir C:\Foundry-Server
```
:::

Teraz wpisz polecenie `app_update 2915550`, które rozpocznie pobieranie. App ID **2915550** to aplikacja **Foundry**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu pobierania, gdzie znajdują się wszystkie pliki serwera. Tutaj możesz użyć **FoundryDedicatedServerLauncher.exe**, aby uruchomić serwer. Jednak zalecamy najpierw skonfigurować przekierowanie portów i ustawienia serwera.

### Przekierowanie portów na serwerze

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić albo bezpośrednio przez polecenia PowerShell (łatwiejsze), albo standardowo przez panel Zapory Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia i wszystko działało poprawnie.

:::info
Upewnij się, że uruchamiasz PowerShell w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Następnie skopiuj i wklej poniższe polecenia do PowerShell:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej niezbędne, aby Twój serwer Foundry był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia Zapory Windows z Zaawansowanym Bezpieczeństwem**. Jeśli otworzysz podstawową stronę Zapory Windows, kliknij **Zaawansowane ustawienia**, aby otworzyć potrzebne okno.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera Foundry. Zrób to, klikając kolejno na reguły przychodzące i wychodzące i dodając je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 3724, 27015
- UDP przychodzące i wychodzące: 3724, 27015

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny, co oznacza, że możesz się do niego podłączyć przez adres IP serwera. Zrób to, przechodząc do Multiplayer w menu głównym, wybierając IP Direct Connect i wpisując swój adres IP oraz port 3724 (domyślny i ten, który przekierowałeś).

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie zakończyłeś podstawową konfigurację serwera Foundry. Możesz dalej konfigurować serwer przez plik konfiguracyjny. Wróć do folderu gry i utwórz nowy plik **app.cfg** (jeśli jeszcze go nie ma) w katalogu głównym. Powinien znajdować się w tym samym folderze co plik wykonywalny **FoundryDedicatedServerLauncher.exe**.

Teraz otwórz plik **app.cfg** w notatniku lub innym edytorze i zacznij dodawać opcje konfiguracyjne dla parametrów, które chcesz zmienić. Każdy parametr wpisz w nowej linii w formacie `nazwa_parametru=wartość`.

Na przykład, oto trzy ustawienia konfiguracyjne:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Zobacz nasz [poradnik Konfiguracja serwera](foundry-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do katalogu głównego i uruchom **FoundryDedicatedServerLauncher.exe**, aby rozpocząć start serwera. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces uruchamiania.

Teraz możesz połączyć się bezpośrednio z serwerem przez IP, przechodząc do **Multiplayer->IP Direct Connect** i wpisując adres IP serwera oraz port 3724, który jest domyślny i przekierowany.

Jeśli chcesz, aby Twój serwer był widoczny na liście serwerów, sprawdź nasz [poradnik Konfiguracja serwera](foundry-configuration.md) i dodaj odpowiednie parametry `server_name` oraz `server_is_public` do pliku konfiguracyjnego. Zapisz plik i uruchom ponownie plik wykonywalny serwera.

Gratulacje! Pomyślnie zainstalowałeś Foundry na swoim Windows serwerze dedykowanym.