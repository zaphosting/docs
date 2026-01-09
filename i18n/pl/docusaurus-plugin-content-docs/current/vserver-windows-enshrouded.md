---
id: vserver-windows-enshrouded
title: "VPS: Enshrouded Serwer Dedykowany Windows - Instalacja"
description: "Dowiedz się, jak zainstalować Enshrouded Serwer Dedykowany na swoim Windows VPS, aby cieszyć się płynną rozgrywką i pełną kontrolą → Sprawdź teraz"
sidebar_label: Enshrouded
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Windows VPS i chcesz zainstalować usługę Enshrouded Serwer Dedykowany na swoim serwerze? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować tę usługę na Twoim serwerze.

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/qQy4x4cS5Rz8WR4/preview" title="Jak skonfigurować Enshrouded Serwer Dedykowany na Windows VPS!" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>
<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit Zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Dostęp Początkowy (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, musisz zainstalować **SteamCMD**, aby móc pobrać niezbędne pliki serwera dedykowanego. SteamCMD to **wersja wiersza poleceń (CLI)** klienta Steam, która pozwala łatwo pobierać pliki z warsztatu Steam i serwerów dedykowanych. Pobierz [SteamCMD z oficjalnej strony Valve](https://developer.valvesoftware.com/wiki/SteamCMD) lub bezpośrednio [tutaj](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip).

Utwórz nowy folder gdzieś na serwerze, w tym przykładzie nazwaliśmy go `steamcmd`. Przejdź do folderu Pobrane, znajdź plik **steamcmd.zip**, który właśnie pobrałeś i umieść go w folderze `steamcmd`. Teraz rozpakuj plik, klikając prawym przyciskiem i korzystając z funkcji rozpakowywania Windows lub dowolnej aplikacji, np. 7zip czy Winrar. W efekcie powinien pojawić się plik **steamcmd.exe**.

Uruchom **steamcmd.exe** i poczekaj, aż proces instalacji zostanie w pełni zakończony.

![](https://screensaver01.zap-hosting.com/index.php/s/nGsEGWDrSG7gBZs/preview)

Gdy pojawi się komunikat **Loading Steam API.... OK**, proces zakończył się pomyślnie i możesz przejść do instalacji serwera dedykowanego Enshrouded w kolejnej sekcji.

## Instalacja

Po instalacji powinieneś móc wykonywać polecenia w oknie konsoli **steamcmd.exe**, które uruchomiłeś wcześniej. Musisz się najpierw zalogować jako użytkownik **anonymous**, wpisując komendę: `login anonymous`

Po zalogowaniu możesz rozpocząć pobieranie plików.

:::tip
Opcjonalnie: Możesz ustawić preferowany katalog instalacji za pomocą komendy `force_install_dir [ścieżka]`, zamieniając `[ścieżka]` na wybraną lokalizację dla serwera. Na przykład:
```
force_install_dir C:\Enshrouded-Server
```
:::

Teraz wpisz komendę `app_update 2278520`, która rozpocznie pobieranie. App ID **2278520** to aplikacja **Enshrouded**.

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
Nie przerywaj procesu przed jego zakończeniem, aby uniknąć błędów. Może to chwilę potrwać, ale warto być cierpliwym! :)
:::

Po zakończeniu przejdź do katalogu, w którym pobrano pliki serwera. Tam możesz uruchomić **enshrouded_server.exe**, aby wystartować serwer. Zalecamy jednak najpierw skonfigurować przekierowanie portów i ustawienia serwera.

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić bezpośrednio przez polecenia Powershell (łatwiejsze) lub przez panel Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że uruchamiasz Powershell w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Następnie wklej poniższe polecenia w okno Powershell:
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer Enshrouded był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia Zapory Windows z Zaawansowanym Bezpieczeństwem**. Jeśli otworzysz podstawową stronę Zapory Windows, kliknij **Ustawienia Zaawansowane**, aby przejść do właściwego panelu.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera Enshrouded. Kliknij kolejno na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 15636-15637
- UDP przychodzące i wychodzące: 15636-15637

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie Portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny publicznie, co oznacza, że możesz połączyć się z nim przez adres IP serwera. Wybierz postać w menu głównym, przejdź do zakładki **Znajdź Gry** i kliknij **Dodaj Serwer**. Wpisz tam adres IP serwera, port (domyślnie 15636) oraz hasło serwera (jeśli ustawione, w przeciwnym razie zostaw puste).

:::tip
Sprawdź nasz [poradnik Konfiguracja Serwera](enshrouded-configuration.md), jeśli chcesz ustawić hasło do serwera i dostosować inne opcje.
:::

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer Enshrouded. Możesz dalej konfigurować serwer przez plik konfiguracyjny znajdujący się w katalogu serwera.

Przejdź do katalogu:
```
..EnshroudedServer/ (katalog główny)
```

Znajdziesz tam plik konfiguracyjny **enshrouded_server.json**. W tym pliku możesz ustawić różne parametry serwera. Zobacz nasz [poradnik Konfiguracja Serwera](enshrouded-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do głównego katalogu serwera Enshrouded i uruchom **enshrouded_server.exe**, aby rozpocząć start serwera. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces uruchamiania. Po starcie możesz połączyć się bezpośrednio z serwerem, przechodząc do zakładki **Znajdź Gry**, klikając **Dodaj Serwer** i wpisując adres IP oraz port serwera (domyślnie 15636).

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Enshrouded na swoim VPS! Jeśli masz jakiekolwiek pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />