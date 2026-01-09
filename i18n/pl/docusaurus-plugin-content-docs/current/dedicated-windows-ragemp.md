---
id: dedicated-windows-ragemp
title: "Serwer dedykowany: Konfiguracja RageMP na Windows"
description: "Dowiedz się, jak skonfigurować RageMP na swoim serwerze dedykowanym z Windows, aby hostować sesje multiplayer GTA V → Sprawdź teraz"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz serwer dedykowany z Windows i chcesz zainstalować na nim serwer RageMP? Trafiłeś idealnie. W tym poradniku pokażemy Ci krok po kroku, jak zainstalować tę usługę na Twoim serwerze.

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez Remote Desktop (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Initial Access (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, zacznij od instalacji [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), ponieważ jest to wymóg RageMP. Upewnij się, że jest zainstalowany przed dalszymi krokami. Jeśli nie jesteś pewien, czy już go masz, uruchom instalator – podczas instalacji poinformuje Cię, czy jest potrzebny.

Gdy zależność jest już zainstalowana, pobierz najnowszą wersję serwera ze [strony RageMP](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Jeśli masz już zainstalowany RageMP, możesz przejść do sekcji **Przełączanie na gałąź serwera**. Nie musisz instalować RageMP ponownie.
:::

## Instalacja

Po pobraniu pliku uruchom **RAGEMultiplayer_Setup.exe** i przejdź przez proces instalacji. Podczas instalacji możesz zmienić ścieżkę instalacji – zdecydowanie polecamy to zrobić.

Po instalacji RageMP uruchom aplikację **RAGE Multiplayer**, która powinna być teraz dostępna w Twoich aplikacjach Windows.

Przy pierwszym uruchomieniu będziesz musiał wskazać ścieżkę do folderu z instalacją GTA:V. Lokalizacja zależy od launchera, z którego korzystasz, domyślnie będzie to `C:/Program Files` lub `C:/Program Files (x86)`.

Teraz musisz zmienić gałąź, z której pobierane są pliki serwera.

### Przełączanie na gałąź serwera

Przejdź do folderu, w którym zainstalowano RageMP. Znajdź plik **config.xml** i zmień parametr `channel` z `prerelease` na `prerelease_server`, a następnie zapisz plik.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Następnie uruchom plik **updater.exe**, który pobierze niezbędne pliki serwera zgodnie ze zmianą gałęzi. Zauważysz nowy folder **server-files** w katalogu RageMP – to właśnie te pliki będą Ci potrzebne.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Możesz teraz przywrócić parametr `channel` do `prerelease` i ponownie uruchomić **update.exe**, aby wrócić do wersji klienta i móc dalej grać.

:::tip
Możesz przenieść pliki serwera i zmienić nazwę folderu na dowolną, np. na pulpit. Nie musisz uruchamiać serwera w folderze `RAGEMP`.
:::

Aby uruchomić serwer, po prostu odpal **ragemp-server.exe** znajdujący się w folderze `server-files` lub w Twoim folderze serwera – serwer zacznie się uruchamiać. Zalecamy jednak najpierw skonfigurować przekierowanie portów.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Przekierowanie portów na serwerze

Aby Twój serwer był dostępny publicznie, musisz ustawić reguły przekierowania portów dla portów używanych przez serwer dedykowany. Możesz to zrobić przez polecenia PowerShell, co jest łatwiejsze, lub przez interfejs Windows Defender Firewall.

:::tip
Przy pierwszym uruchomieniu serwera powinien pojawić się monit UAC. Jeśli go zaakceptujesz, reguły zapory zostaną ustawione automatycznie i możesz przejść dalej. W przeciwnym razie skorzystaj z jednej z poniższych metod.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że PowerShell działa w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Wklej poniższe polecenia do konsoli PowerShell:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory, które pozwolą na publiczny dostęp do Twojego serwera RageMP.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows **Windows Firewall Settings with Advanced Security**. Jeśli otworzy się podstawowy panel zapory, kliknij **Advanced Settings**, aby przejść do zaawansowanych ustawień.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera RageMP. Dodaj je zarówno dla reguł przychodzących, jak i wychodzących, dla następujących protokołów i portów:

- TCP przychodzący i wychodzący: 22005
- UDP przychodzący i wychodzący: 22005

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu reguł Twój serwer będzie dostępny publicznie i będziesz mógł łączyć się z nim przez adres IP serwera.

Zalecamy najpierw skonfigurować ustawienia serwera, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer RageMP. Możesz dalej konfigurować serwer przez plik konfiguracyjny.

Przejdź do folderu głównego serwera i otwórz plik **conf.json**. W tym pliku możesz zmienić różne parametry serwera, takie jak port, nazwa serwera i inne.

Przykładowe ustawienia:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do folderu `server-files` lub swojego folderu serwera i uruchom **ragemp-server.exe**. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie się proces startu.

Teraz możesz połączyć się bezpośrednio z serwerem w grze przez launcher RageMP.

## Podsumowanie

Gratulacje! Udało Ci się zainstalować i skonfigurować serwer RageMP na swoim serwerze dedykowanym! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem – jesteśmy do Twojej dyspozycji codziennie!