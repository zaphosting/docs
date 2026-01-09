---
id: vserver-windows-openmp
title: "VPS: Open.mp Serwer Dedykowany Windows - Konfiguracja"
description: "Dowiedz się, jak zainstalować i skonfigurować serwer dedykowany open.mp na swoim Windows VPS, aby cieszyć się płynną rozgrywką multiplayer → Sprawdź teraz"
sidebar_label: Open.mp
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS i chcesz zainstalować serwer dedykowany open.mp? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim VPS przez Pulpit Zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [Poradnika Dostępu Początkowego (RDP)](vserver-windows-userdp.md).

Po zalogowaniu się na serwer pobierz najnowszą wersję z [repozytorium open.mp na GitHub](https://github.com/openmultiplayer/open.mp/releases). Upewnij się, że wybierasz wersję **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Instalacja

Po pobraniu pliku rozpakuj go za pomocą narzędzia takiego jak 7zip lub WinRAR. Powinno to utworzyć folder **Server**, który zawiera wszystkie niezbędne pliki serwera.

Aby uruchomić serwer, wystarczy kliknąć **omp-server.exe** i serwer zacznie się uruchamiać. Zalecamy jednak najpierw skonfigurować przekierowanie portów i ustawienia serwera.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Przekierowanie portów serwera

Aby Twój serwer był dostępny publicznie, musisz ustawić reguły przekierowania portów dla portów, z których korzysta proces serwera dedykowanego. Możesz to zrobić bezpośrednio przez polecenia PowerShell, co jest prostsze, lub tradycyjnie przez zaporę Windows Defender.

:::tip
Pierwsze uruchomienie serwera powinno wywołać monit UAC. Jeśli go zaakceptujesz, reguły zapory zostaną ustawione automatycznie i możesz przejść do kolejnego kroku. W przeciwnym razie skorzystaj z jednej z poniższych metod.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że PowerShell działa w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Następnie wklej poniższe polecenia do konsoli PowerShell:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory niezbędne, aby Twój serwer open.mp był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzy się podstawowa strona zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego panelu.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera open.mp. Kliknij kolejno na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 7777
- UDP przychodzące i wychodzące: 7777

Jeśli potrzebujesz więcej pomocy, sprawdź nasz [Poradnik Przekierowania Portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie dostępny i będziesz mógł połączyć się z nim przez adres IP serwera.

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer open.mp. Możesz dalej konfigurować serwer przez plik konfiguracyjny.

Przejdź do katalogu głównego i otwórz plik **config.json**. W tym pliku możesz zmieniać wiele parametrów serwera, od portu, przez hasło, aż po inne opcje.

Przykładowo, oto kilka ustawień:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Zobacz nasz [Poradnik Konfiguracji Serwera](openmp-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do katalogu głównego i uruchom **omp-server.exe**, aby rozpocząć start serwera. Otworzy się konsola serwera w oknie wiersza poleceń i rozpocznie proces uruchamiania.

Teraz możesz połączyć się bezpośrednio z serwerem w grze przez launcher open.mp. Jeśli chcesz, aby serwer był widoczny na liście serwerów, sprawdź nasz [Poradnik Konfiguracji Serwera](openmp-configuration.md) i upewnij się, że parametr `enable_query` jest ustawiony na true (to ustawienie domyślne). Po zapisaniu pliku uruchom ponownie serwer.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer open.mp na swoim VPS! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />