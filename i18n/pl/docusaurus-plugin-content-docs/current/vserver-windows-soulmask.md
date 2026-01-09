---
id: vserver-windows-soulmask
title: "VPS: Instalacja serwera dedykowanego Soulmask na Windows"
description: "Dowiedz się, jak zainstalować serwer dedykowany Soulmask na swoim VPS lub serwerze dedykowanym z Windows, aby cieszyć się płynną rozgrywką → Sprawdź teraz"
sidebar_label: Soulmask
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz VPS z Windows lub serwer dedykowany i chcesz zainstalować na nim serwer dedykowany Soulmask? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować tę usługę na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Dostęp początkowy (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to wersja klienta Steam działająca w trybie tekstowym (CLI), która pozwala łatwo pobierać pliki z warsztatu Steam oraz serwery dedykowane. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder na serwerze, w tym przykładzie nazwij go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś, i przenieś go do folderu `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z wbudowanej funkcji rozpakowywania Windows lub użyj programów takich jak 7zip czy WinRAR. Po rozpakowaniu powinien pojawić się plik **steamcmd.exe**.

Uruchom **steamcmd.exe** i poczekaj, aż proces instalacji zostanie w pełni zakończony.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja zakończyła się sukcesem i możesz przejść do instalacji serwera dedykowanego Soulmask w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Najpierw musisz się zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz rozpocząć pobieranie plików.

:::tip
Opcjonalnie: Możesz ustawić własny katalog instalacji, wpisując komendę `force_install_dir [ścieżka]`, gdzie `[ścieżka]` to folder, w którym chcesz zainstalować serwer. Na przykład:
```
force_install_dir C:\Soulmask-Server
```
:::

Teraz wpisz komendę `app_update 3017310`, która rozpocznie pobieranie. ID aplikacji **3017310** to **Soulmask**.

![](https://screensaver01.zap-hosting.com/index.php/s/5wtdbQbZoj6WbTN/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu z pobranymi plikami serwera. Tam możesz uruchomić serwer za pomocą pliku **StartServer.bat**. Zalecamy jednak najpierw skonfigurować przekierowanie portów i ustawienia serwera.

### Przekierowanie portów na serwerze

Aby Twój serwer był dostępny publicznie, musisz dodać reguły przekierowania portów dla portów używanych przez serwer dedykowany. Możesz to zrobić przez polecenia PowerShell, co jest łatwiejsze, lub przez panel zapory Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że PowerShell działa w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Skopiuj i wklej poniższe polecenia do konsoli PowerShell:
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer Soulmask był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzy się podstawowy panel zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego okna.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera Soulmask. Kliknij kolejno na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 8777, 27015
- UDP przychodzące i wychodzące: 8777, 27015

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu reguł Twój serwer będzie dostępny publicznie, co oznacza, że możesz połączyć się z nim przez adres IP serwera. W grze przejdź do menu Multiplayer, wybierz IP Direct Connect i wpisz adres IP oraz port (domyślnie 8777 lub ten, który ustawiłeś).

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz grać.

## Konfiguracja

Na tym etapie masz już gotowy serwer Soulmask. Możesz dalej konfigurować serwer, edytując parametry w pliku **StartServer.bat** w katalogu głównym oraz w pliku **GameUserSettings.ini** znajdującym się pod ścieżką `../WS/Saved/Config/WindowsServer`.

Zobacz nasz [poradnik Konfiguracja serwera](soulmask-configuration.md), aby poznać wszystkie dostępne parametry i opcje konfiguracji serwera Soulmask.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do katalogu głównego i uruchom **StartServer.bat**, aby rozpocząć start serwera. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces uruchamiania.

:::tip
Jeśli serwer nie chce się uruchomić i okno konsoli znika, sprawdź najnowszy log w katalogu `../WS/Saved/Logs`, aby zdiagnozować problem.

Częstym problemem jest błąd związany z usługą Steam online, która nie startuje na Windowsowych plikach serwera dedykowanego z powodu błędnego pakowania. Jeśli błąd dotyczy Steam, przenieś w katalogu głównym pliki `steamclient64.dll`, `tier0_s64.dll`, `vstdlib_s64.dll` do folderu `../WS/Binaries/Win64`. Następnie spróbuj ponownie uruchomić serwer — powinien wystartować poprawnie w konsoli.
:::

Teraz możesz połączyć się bezpośrednio z serwerem, wpisując jego adres IP i port 8777 w menu multiplayer w grze.

Jeśli chcesz, aby Twój serwer był widoczny na liście serwerów, sprawdź nasz [poradnik Konfiguracja serwera](soulmask-configuration.md) i dodaj odpowiedni parametr `-SteamServerName` do pliku **StartServer.bat**. Zapisz zmiany i uruchom plik ponownie.

Gratulacje! Pomyślnie zainstalowałeś Soulmask na swoim Windows serwerze dedykowanym.

## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer Soulmask na Twoim VPS! Jeśli masz jakiekolwiek pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!

<InlineVoucher />