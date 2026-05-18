---
id: server-windows-arma3
title: "Arma 3 Serwer Dedykowany - Instalacja na Windows"
description: "Dowiedz się, jak skonfigurować serwer dedykowany Arma 3 na swoim serwerze Windows, by cieszyć się płynną rozgrywką i pełną kontrolą → Sprawdź teraz"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz VPS lub serwer dedykowany z Windows i chcesz zainstalować na nim serwer dedykowany Arma 3? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS/serwerem dedykowanym przez Pulpit Zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Initial Access (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to wersja klienta Steam działająca w trybie tekstowym (CLI), która pozwala łatwo pobierać pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder na serwerze, w tym przykładzie nazwij go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś, i przenieś go do folderu `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z wbudowanej funkcji Windows lub programów takich jak 7zip czy WinRAR. Po rozpakowaniu powinien pojawić się plik **steamcmd.exe**.

Uruchom **steamcmd.exe** i poczekaj, aż proces instalacji zostanie w pełni zakończony.

![](https://screensaver01.zap-hosting.com/index.php/s/RsC7AK37qrYnDYR/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, instalacja zakończyła się sukcesem i możesz przejść do instalacji serwera dedykowanego Arma 3 w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Najpierw musisz się zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz rozpocząć pobieranie plików.

:::tip
Opcjonalnie: Możesz ustawić własny katalog instalacji, wpisując komendę `force_install_dir [ścieżka]`, gdzie `[ścieżka]` to folder, w którym chcesz zainstalować serwer. Przykład:
```
force_install_dir C:\arma3-server
```
:::

Teraz wpisz komendę `app_update 233780`, która rozpocznie pobieranie. App ID **233780** to aplikacja **Arma 3**.

![](https://screensaver01.zap-hosting.com/index.php/s/52dAJQDFjTs8Y4f/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu pobierania przejdź do katalogu, w którym zostały pobrane pliki serwera. Tam możesz uruchomić plik **Arma 3_server.exe**, aby wystartować serwer. Zalecamy jednak najpierw skonfigurować przekierowanie portów i ustawienia serwera.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz ustawić reguły przekierowania portów dla portów używanych przez proces serwera na VPS/serwerze dedykowanym. Możesz to zrobić łatwiej przez polecenia Powershell lub standardowo przez zaporę Windows Defender.

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
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Inbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Outbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer Arma 3 był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzy się podstawowa strona zapory, kliknij **Ustawienia zaawansowane**, aby otworzyć właściwe okno.

![](https://screensaver01.zap-hosting.com/index.php/s/r9j8kYmR3LtcQJ2/preview)

Musisz utworzyć nowe reguły dla swojego serwera Arma 3. Kliknij na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- UDP przychodzące i wychodzące: 2302–2306

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny publicznie i będziesz mógł połączyć się z nim przez adres IP serwera. W grze wybierz postać, przejdź do zakładki **Znajdź gry** i kliknij **Dodaj serwer**. Wpisz tam adres IP serwera, port (domyślnie 2302) oraz hasło serwera (jeśli ustawione, w przeciwnym razie zostaw puste).

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer Arma 3. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Przejdź do katalogu:
```
C:\arma3-Server
```

Znajdziesz tam plik **server.cfg**, w którym możesz ustawić różne parametry serwera.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu gry i uruchom plik wykonywalny **arma3server_x64.exe**.

Otworzy się konsola serwera i rozpocznie proces startu.

Gracze mogą łączyć się z Twoim serwerem przez przeglądarkę serwerów Arma 3, wpisując **adres IP serwera** oraz domyślny port **2302**.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś **serwer Arma 3** na swoim VPS/serwerze dedykowanym! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />