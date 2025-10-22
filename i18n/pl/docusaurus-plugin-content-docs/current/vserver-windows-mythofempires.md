---
id: vserver-windows-mythofempires
title: "VPS: Konfiguracja dedykowanego serwera Myth of Empires na Windows"
description: "Dowiedz się, jak szybko i sprawnie skonfigurować dedykowany serwer Myth of Empires na swoim Windows VPS → Sprawdź teraz"
sidebar_label: Konfiguracja serwera MOE
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Windows VPS i chcesz zainstalować na nim dedykowany serwer MOE? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.
<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/4WnZSyGqLyN7pmG/preview" title="Jak skonfigurować serwer Myth Of Empires na Windows VPS!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu wolisz chłonąć info w najbardziej angażujący sposób!"/>
<InlineVoucher />

## Przygotowanie
Na początek połącz się ze swoim VPS przez Pulpit zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Pierwszy dostęp (RDP)](vserver-windows-userdp.md).

Po zalogowaniu na serwer, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki dedykowanego serwera. SteamCMD to **wersja konsolowa (CLI)** klienta Steam, która pozwala łatwo pobierać pliki z warsztatu Steam i dedykowane serwery. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwaliśmy go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i wrzuć go do folderu `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z wbudowanej funkcji rozpakowywania Windows lub użyj programów takich jak 7zip czy WinRAR. W efekcie powinien pojawić się plik **steamcmd.exe**.

Po prostu uruchom **steamcmd.exe** i poczekaj, aż instalacja zakończy się w 100%.

![](https://github.com/zaphosting/docs/assets/42719082/ffb8e8a1-26e3-4d16-9baf-938e17ec1613)

Gdy zobaczysz komunikat **Loading Steam API.... OK**, proces zakończył się sukcesem i możesz przejść do instalacji dedykowanego serwera MOE w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać komendy w konsoli **steamcmd.exe**, którą uruchomiłeś wcześniej. Najpierw musisz się zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz zacząć pobierać pliki.

:::tip
Opcjonalnie: Możesz ustawić własny katalog instalacji, wpisując komendę `force_install_dir [ścieżka]`, gdzie `[ścieżka]` to folder, w którym chcesz mieć serwer. Na przykład:
```
force_install_dir C:\MOE-Server
```
:::

Teraz wpisz komendę `app_update 1794810`, która rozpocznie pobieranie. App ID **1794810** to aplikacja **MOE**.

![](https://github.com/zaphosting/docs/assets/42719082/29931eec-fd19-4806-88dc-69e585e42370)

:::info
Nie przerywaj procesu przed zakończeniem, żeby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu, gdzie pobrano wszystkie pliki serwera.

### Dostęp do PrivateServerTool

W przeciwieństwie do standardowych instalacji SteamCMD, MOE wymaga, abyś skopiował folder z lokalnej instalacji gry Steam, żeby móc uruchomić serwer na Windows.

Otwórz Steam na swoim komputerze, kliknij prawym przyciskiem na grę **Myth of Empires** i wybierz **Przeglądaj pliki lokalne** w sekcji **Zarządzaj**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

W otwartym folderze głównym znajdź folder **PrivateServerTool**. To właśnie ten folder musisz skopiować na swój serwer. Najprościej zrób to przez `CTRL+C` na swoim PC i `CTRL+V` na serwerze Windows przez RDP. Wklej go do katalogu głównego dedykowanego serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

Teraz przejdź do kolejnej sekcji, aby przekierować porty i skonfigurować serwer.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów, z których korzysta proces dedykowanego serwera. Możesz to zrobić albo przez polecenia Powershell (łatwiejsze), albo przez panel Zapory Windows Defender.

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
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

Te komendy automatycznie utworzą reguły zapory, które są niezbędne, aby Twój serwer MOE był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzy się podstawowy panel zapory, kliknij **Ustawienia zaawansowane**, aby otworzyć właściwe okno.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz utworzyć nowe reguły dla swojego serwera MOE. Kliknij na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 11888, 12888
- UDP przychodzące i wychodzące: 11888, 12888

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Przejdź do kolejnej sekcji, aby stworzyć plik konfiguracyjny i plik startowy `.bat`.

## Konfiguracja

Teraz użyjesz narzędzia serwera, które skopiowałeś wcześniej z plików gry, aby stworzyć plik konfiguracyjny i plik startowy `.bat`, którym uruchomisz serwer.

Przejdź do katalogu, który skopiowałeś wcześniej:
```
../MOE/PrivateServerTool
```

W tym folderze uruchom plik **PrivateServerTool.exe**. Za pomocą tego narzędzia skonfiguruj opcje serwera według własnych preferencji, w tym mody, ustawienia gry i wiele więcej.

Polecamy ustawić przynajmniej podstawowe parametry, takie jak **Nazwa serwera**, zanim przejdziesz dalej.

Gdy wszystko będzie gotowe, przejdź do zakładki **Start Console** w narzędziu i kliknij przycisk **Save Config**, a potem **Start Server**. To wygeneruje plik `StartPrivateServer.bat`, którego użyjesz do uruchamiania serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

Polecamy utworzyć skrót do pliku `StartPrivateServer.bat` klikając prawym i wybierając **Utwórz skrót**, żeby łatwiej było go uruchamiać.

:::note
Może być konieczna edycja ścieżki do folderu gry w automatycznie wygenerowanym pliku `StartPrivateServer.bat`. Otwórz go w notatniku lub innym edytorze i upewnij się, że ścieżka na początku pliku zgadza się z lokalizacją serwera.

Jeśli ścieżka jest błędna, możesz kliknąć dwukrotnie pasek ścieżki w folderze głównym serwera MOE, aby skopiować aktualną ścieżkę i wkleić ją w odpowiednie miejsce w pliku.
:::

## Uruchamianie i łączenie z serwerem

Czas uruchomić serwer. Przejdź do katalogu serwera Myth of Empires i uruchom **StartPrivateServer.bat** (lub skrót, jeśli go zrobiłeś), aby rozpocząć start serwera. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces uruchamiania. Teraz możesz połączyć się bezpośrednio z serwerem, przechodząc do zakładki **Custom Server** i wyszukując swój serwer w polu wyszukiwania.

:::tip
Jeśli masz problemy z połączeniem, otwórz plik `StartPrivateServer.bat` w notatniku i sprawdź, czy dwa parametry IP zgadzają się z adresem IP Twojego serwera Windows. Narzędzie powinno automatycznie je uzupełnić, ale to dobry krok do debugowania.
:::

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Myth of Empires na swoim VPS! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />