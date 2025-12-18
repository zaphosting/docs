---
id: vserver-windows-foundry
title: "VPS: Foundry Serwer Dedykowany Windows - Instalacja"
description: "Dowiedz się, jak zainstalować Foundry Serwer Dedykowany na swoim Windows VPS, aby bezproblemowo hostować rozgrywkę → Sprawdź teraz"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS i chcesz zainstalować usługę Foundry Serwer Dedykowany na nim? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować tę usługę na Twoim serwerze.

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="Jak skonfigurować Foundry Serwer Dedykowany na Windows VPS!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>
<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit Zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Dostęp Początkowy (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to wersja **klienta Steam w trybie tekstowym (CLI)** i narzędzie, które pozwala łatwo pobierać różne pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwij go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i umieść go w folderze `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z funkcji rozpakowywania Windows lub dowolnej aplikacji, np. 7zip czy WinRAR. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom **steamcmd.exe** i poczekaj, aż proces instalacji zostanie w pełni zakończony.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji Foundry serwera dedykowanego w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Musisz się najpierw zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz zacząć pobierać pliki.

:::tip
Opcjonalnie: Możesz ustawić preferowany katalog instalacji za pomocą komendy `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na lokalizację, którą chcesz użyć dla serwera. Na przykład:
```
force_install_dir C:\Foundry-Server
```
:::

Teraz wpisz komendę `app_update 2915550`, która rozpocznie pobieranie. App ID **2915550** to aplikacja **Foundry**.

![](https://github.com/zaphosting/docs/assets/42719082/b265a784-cf9a-43dc-b100-376f080e18f3)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu z pobranymi plikami serwera. Tam możesz uruchomić **FoundryDedicatedServerLauncher.exe**, aby wystartować serwer. Jednak zalecamy najpierw skonfigurować przekierowanie portów i ustawienia serwera.

### Przekierowanie portów na serwerze

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić albo przez polecenia PowerShell, co jest prostsze, albo przez standardową konfigurację w Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że PowerShell działa w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Skopiuj i wklej poniższe polecenia do PowerShell:
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój Foundry serwer był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia Zapory Windows z Zaawansowanym Bezpieczeństwem**. Jeśli otworzysz podstawową stronę Zapory Windows, kliknij **Zaawansowane ustawienia**, aby przejść do właściwego okna.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz utworzyć nowe reguły dla swojego serwera Foundry. Kliknij kolejno na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 3724, 27015
- UDP przychodzące i wychodzące: 3724, 27015

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie Portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny, co oznacza, że możesz się do niego podłączyć przez adres IP serwera. W menu głównym przejdź do Multiplayer, wybierz IP Direct Connect i wpisz swój adres IP oraz port 3724 (domyślny lub ten, który ustawiłeś).

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy Foundry serwer. Możesz dalej konfigurować serwer przez plik konfiguracyjny. Wróć do folderu z grą i utwórz nowy plik **app.cfg** (jeśli jeszcze go nie ma) w katalogu głównym, czyli tam, gdzie znajduje się plik **FoundryDedicatedServerLauncher.exe**.

Otwórz plik **app.cfg** w notatniku lub innym edytorze i zacznij dodawać opcje konfiguracyjne, które chcesz zmienić. Każdą opcję wpisz w nowej linii w formacie `parametr=wartość`.

Przykład trzech ustawień:
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

Zobacz nasz [poradnik Konfiguracja Serwera](foundry-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do katalogu głównego i uruchom **FoundryDedicatedServerLauncher.exe**, aby rozpocząć start serwera. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces uruchamiania.

Możesz teraz połączyć się bezpośrednio z serwerem przez IP, wybierając w menu **Multiplayer->IP Direct Connect** i wpisując adres IP serwera oraz port 3724 (domyślny, który przekierowałeś).

Jeśli chcesz, aby Twój serwer był widoczny na liście serwerów, sprawdź nasz [poradnik Konfiguracja Serwera](foundry-configuration.md) i dodaj odpowiednie parametry `server_name` oraz `server_is_public` do pliku konfiguracyjnego. Zapisz plik i uruchom ponownie serwer.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś Foundry serwer na swoim VPS! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />