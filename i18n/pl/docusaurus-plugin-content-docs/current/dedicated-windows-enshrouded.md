---
id: dedicated-windows-enshrouded
title: "Serwer dedykowany: Konfiguracja Enshrouded na Windows"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować serwer dedykowany Enshrouded na swoim Windows VPS lub serwerze dedykowanym → Sprawdź teraz"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Windows VPS lub serwer dedykowany i chcesz zainstalować na nim serwer dedykowany Enshrouded? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="Jak skonfigurować serwer dedykowany Enshrouded na Windows VPS!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy coś dla Ciebie! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć info w najbardziej angażujący sposób!"/>



## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Dostęp początkowy (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby pobrać niezbędne pliki serwera dedykowanego. SteamCMD to **wersja konsolowa (CLI)** klienta Steam, która pozwala łatwo pobierać pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwaliśmy go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i wrzuć go do folderu `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z wbudowanej funkcji rozpakowywania Windows lub dowolnej aplikacji jak .7zip czy Winrar. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom **steamcmd.exe** i poczekaj, aż proces instalacji zakończy się całkowicie.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja zakończyła się sukcesem i możesz przejść do instalacji serwera dedykowanego Enshrouded w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać komendy w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Najpierw musisz się zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz zacząć pobierać pliki.

:::tip
Opcjonalnie: Możesz ustawić własny katalog instalacji, używając komendy `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na wybraną lokalizację serwera. Na przykład:
```
force_install_dir C:\Enshrouded-Server
```
:::

Teraz wpisz komendę `app_update 2278520`, która rozpocznie pobieranie. App ID **2278520** to aplikacja **Enshrouded**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu, gdzie pobrano pliki serwera. Tam możesz uruchomić **enshrouded_server.exe**, aby wystartować serwer. Jednak najpierw zalecamy skonfigurować przekierowanie portów.

### Przekierowanie portów na serwerze

Aby Twój serwer był dostępny publicznie, musisz ustawić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić łatwiej przez polecenia Powershell lub tradycyjnie przez zaporę Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Kliknij prawym i wybierz **Uruchom jako administrator**, żeby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że uruchamiasz Powershell w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Skopiuj i wklej poniższe komendy do konsoli Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Te komendy automatycznie utworzą reguły zapory niezbędne, by Twój serwer Enshrouded był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzy się podstawowa strona zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego panelu.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera Enshrouded. Zrób to, klikając kolejno na reguły przychodzące i wychodzące i dodając je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 15636-15637
- UDP przychodzące i wychodzące: 15636-15637

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny publicznie, co oznacza, że możesz się do niego podłączyć przez adres IP serwera. Wybierz postać w menu głównym, przejdź do zakładki **Znajdź gry** i kliknij **Dodaj serwer**. Wpisz tam adres IP serwera, port (domyślnie 15636) oraz hasło serwera (jeśli ustawione, jeśli nie, zostaw puste).

:::tip
Sprawdź nasz [poradnik Konfiguracja serwera](enshrouded-configuration.md), jeśli chcesz ustawić hasło i dostosować inne opcje.
:::

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer Enshrouded. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Przejdź do katalogu:
```
..EnshroudedServer/ (katalog główny)
```

Znajdziesz tam plik konfiguracyjny **enshrouded_server.json**. W tym pliku możesz ustawić różne parametry serwera. Zobacz nasz [poradnik Konfiguracja serwera](enshrouded-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do katalogu głównego serwera Enshrouded i uruchom **enshrouded_server.exe**, aby rozpocząć start serwera. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces uruchamiania. Teraz możesz połączyć się bezpośrednio z serwerem, przechodząc do zakładki **Znajdź gry**, klikając **Dodaj serwer** i wpisując adres IP serwera oraz port (domyślnie 15636).

Gratulacje! Pomyślnie zainstalowałeś Enshrouded na swoim Windows serwerze dedykowanym.