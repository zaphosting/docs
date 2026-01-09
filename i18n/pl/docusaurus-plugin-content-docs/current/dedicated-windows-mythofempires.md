---
id: dedicated-windows-mythofempires
title: "Serwer dedykowany: Konfiguracja Myth of Empires na Windows"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować serwer dedykowany Myth of Empires na swoim Windows VPS → Sprawdź teraz"
sidebar_label: Konfiguracja serwera MOE
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Windows VPS i chcesz zainstalować na nim serwer dedykowany MOE? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="Jak skonfigurować serwer Myth Of Empires na Windows VPS!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy coś dla Ciebie! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>



## Przygotowanie
Na początek połącz się ze swoim VPS przez Pulpit zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Pierwszy dostęp (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to **wersja konsolowa (CLI)** klienta Steam, która pozwala łatwo pobierać różne pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwij go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i wrzuć go do folderu `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z funkcji rozpakowywania Windows lub dowolnego programu jak 7zip czy Winrar. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom **steamcmd.exe** i poczekaj, aż proces instalacji zakończy się całkowicie.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, oznacza to, że instalacja zakończyła się sukcesem i możesz przejść do instalacji serwera dedykowanego MOE w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Najpierw musisz się zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz zacząć pobierać pliki.

:::tip
Opcjonalnie: Możesz ustawić własny katalog instalacji, wpisując komendę `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na lokalizację, w której chcesz mieć serwer. Na przykład:
```
force_install_dir C:\MOE-Server
```
:::
 
Teraz wpisz komendę `app_update 1794810`, która rozpocznie pobieranie. App ID **1794810** to aplikacja **MOE**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto uzbroić się w cierpliwość! :)
:::

Po zakończeniu przejdź do katalogu, w którym pobrano wszystkie pliki serwera.

### Dostęp do PrivateServerTool

W przeciwieństwie do standardowych instalacji SteamCMD, MOE wymaga, abyś skopiował folder z lokalnej instalacji gry Steam, aby móc uruchomić serwer na Windows.

Otwórz Steam na swoim komputerze, kliknij prawym przyciskiem na grę **Myth of Empires** i wybierz **Przeglądaj pliki lokalne** w sekcji **Zarządzaj**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

W otwartym folderze głównym znajdź folder **PrivateServerTool**. To właśnie ten folder musisz skopiować na swój serwer. Najprościej zrób to przez `CTRL+C` na lokalnym PC i `CTRL+V` na serwerze Windows przez RDP. Upewnij się, że wklejasz go do katalogu głównego serwera dedykowanego.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Przejdź teraz do kolejnej sekcji, aby przekierować porty i skonfigurować serwer.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić albo przez polecenia Powershell (łatwiejsze), albo przez panel zapory Windows Defender.

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
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer MOE był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows i otwórz **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzy się podstawowy panel zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego okna.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera MOE. Kliknij kolejno na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 11888, 12888
- UDP przychodzące i wychodzące: 11888, 12888

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Przejdź do kolejnej sekcji, aby stworzyć plik konfiguracyjny i plik startowy `.bat`.

## Konfiguracja

Teraz użyjesz narzędzia serwera, które skopiowałeś wcześniej z plików gry, aby stworzyć plik konfiguracyjny i plik startowy `.bat`, którym będziesz uruchamiać serwer.

Przejdź do katalogu, który skopiowałeś wcześniej:
```
../MOE/PrivateServerTool
```

W tym folderze uruchom plik **PrivateServerTool.exe**. Za pomocą tego narzędzia skonfiguruj opcje serwera według własnych preferencji, w tym mody, ustawienia gry i wiele więcej.

Zalecamy przynajmniej ustawienie podstawowych parametrów, takich jak **Nazwa serwera**, zanim przejdziesz dalej.

Gdy będziesz gotowy, przejdź do zakładki **Start Console** w narzędziu i kliknij przycisk **Save Config**, a następnie **Start Server**. To wygeneruje plik `StartPrivateServer.bat`, którego będziesz używać do uruchamiania serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Polecamy utworzyć skrót do pliku `StartPrivateServer.bat` przez kliknięcie prawym i wybranie **Utwórz skrót**, aby łatwiej było go uruchamiać.

:::note
Może być konieczna edycja ścieżki do folderu gry w automatycznie wygenerowanym pliku `StartPrivateServer.bat`. Otwórz go w notatniku i upewnij się, że ścieżka na początku pliku zgadza się z lokalizacją serwera.

Jeśli ścieżka jest niepoprawna, możesz kliknąć dwukrotnie pasek ścieżki w katalogu głównym serwera MOE, aby skopiować aktualną ścieżkę i wkleić ją w odpowiednie miejsce w pliku.
:::

## Uruchamianie i łączenie z serwerem

Czas uruchomić serwer. Przejdź do katalogu serwera Myth of Empires i uruchom **StartPrivateServer.bat** (lub skrót, jeśli go utworzyłeś), aby rozpocząć proces startu. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie się uruchamianie. Teraz możesz połączyć się bezpośrednio z serwerem, przechodząc do zakładki **Custom Server** i wyszukując swój serwer w polu wyszukiwania.

:::tip
Jeśli masz problemy z połączeniem, otwórz plik `StartPrivateServer.bat` w notatniku i upewnij się, że dwa parametry IP odpowiadają adresowi IP Twojego serwera Windows. Powinno to być automatycznie ustawione przez narzędzie, ale to dobry krok do diagnozy problemów.
:::

Gratulacje! Pomyślnie zainstalowałeś Myth of Empires na swoim Windows serwerze dedykowanym.