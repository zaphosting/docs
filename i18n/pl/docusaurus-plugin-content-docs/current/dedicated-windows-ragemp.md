---
id: dedicated-windows-ragemp
title: "Serwer dedykowany: Konfiguracja RageMP Dedicated Server na Windows"
description: "Dowiedz się, jak zainstalować RageMP Dedicated Server na swoim serwerze Windows, aby hostować sesje multiplayer GTA V → Sprawdź teraz"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz serwer dedykowany z Windows i chcesz zainstalować na nim usługę RageMP Dedicated Server? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez Remote Desktop (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Initial Access (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer, zacznij od instalacji [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), ponieważ jest to wymóg RageMP. Upewnij się, że jest zainstalowany przed dalszymi krokami. Jeśli nie jesteś pewien, czy już go masz, uruchom instalator, a on poinformuje Cię podczas instalacji.

Gdy zależność jest już zainstalowana, pobierz najnowszą wersję serwera ze [strony RageMP](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Jeśli masz już zainstalowany RageMP, możesz przejść do sekcji **Przełączanie na gałąź serwera**. Nie musisz instalować RageMP ponownie.
:::

## Instalacja

Po pobraniu pliku uruchom plik wykonywalny **RAGEMultiplayer_Setup.exe** i przejdź przez kroki instalacji. Podczas instalacji możesz zmienić ścieżkę instalacji, co zdecydowanie polecamy.

Po zainstalowaniu RageMP uruchom aplikację **RAGE Multiplayer**, która powinna być teraz dostępna w Twoich aplikacjach Windows.

Przy pierwszym uruchomieniu będziesz musiał ustawić ścieżkę do folderu instalacji gry GTA:V. Lokalizacja zależy od launchera, z którego korzystasz, domyślnie będzie to `C:/Program Files` lub `C:/Program Files (x86)`.

Teraz musisz zmienić gałąź, aby pobrać pliki serwera.

### Przełączanie na gałąź serwera

Przejdź do folderu, w którym zainstalowano RageMP. Znajdź plik **config.xml** w tym folderze. Zmień parametr `channel` z `prerelease` na `prerelease_server` i zapisz plik.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Następnie uruchom plik wykonywalny **updater.exe**, który pobierze niezbędne pliki serwera zgodnie ze zmianą gałęzi. Zauważysz nowy folder **server-files** w katalogu RageMP, który będzie Ci potrzebny.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Możesz teraz przywrócić parametr `channel` do `prerelease` i ponownie uruchomić plik **update.exe**, aby wrócić do wersji klienta i móc znowu grać.

:::tip
Możesz przenieść pliki serwera i zmienić nazwę folderu na dowolną, np. na pulpit. Nie musisz uruchamiać tego wewnątrz folderu `RAGEMP`.
:::

Aby uruchomić serwer, po prostu odpal **ragemp-server.exe** znajdujący się w katalogu `server-files` lub w folderze serwera, a serwer zacznie się uruchamiać. Jednak zalecamy najpierw skonfigurować przekierowanie portów i ustawienia serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów, z których korzysta proces serwera dedykowanego. Możesz to zrobić albo przez polecenia PowerShell, co jest prostsze, albo przez panel zapory Windows Defender.

:::tip
Pierwsze uruchomienie serwera powinno wyświetlić monit UAC. Jeśli go zaakceptujesz, reguły zapory zostaną ustawione automatycznie i możesz przejść do następnej sekcji. W przeciwnym razie skorzystaj z jednej z poniższych metod.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że PowerShell jest uruchomiony w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Następnie skopiuj i wklej poniższe polecenia do PowerShell:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory, które są niezbędne, aby Twój serwer RageMP był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzysz podstawową stronę zapory, kliknij **Zaawansowane ustawienia**, aby otworzyć właściwe okno.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz utworzyć nowe reguły dla swojego serwera RageMP. Zrób to, klikając na reguły przychodzące i wychodzące i dodając je dla następujących protokołów i portów:

- TCP przychodzące i wychodzące: 22005
- UDP przychodzące i wychodzące: 22005

Jeśli potrzebujesz więcej pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny, co oznacza, że będziesz mógł połączyć się z nim przez adres IP serwera.

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer RageMP. Możesz dalej konfigurować serwer przez plik konfiguracyjny.

Wróć do folderu głównego. Znajdź i otwórz plik **conf.json**. W tym pliku możesz zmienić kilka parametrów serwera, od portu, przez nazwę serwera, aż po inne ustawienia.

Na przykład, oto kilka ustawień konfiguracyjnych:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do katalogu `server-files` lub folderu serwera i uruchom **ragemp-server.exe**, aby rozpocząć proces startu. Otworzy się konsola serwera w oknie wiersza poleceń i serwer zacznie się uruchamiać.

Teraz możesz połączyć się bezpośrednio z serwerem w grze przez launcher RageMP.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer RageMP na swoim serwerze dedykowanym! Jeśli masz jakiekolwiek pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest dostępny, by Ci pomóc każdego dnia!

<InlineVoucher />