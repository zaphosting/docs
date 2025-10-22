---
id: dedicated-windows-openmp
title: "Serwer dedykowany: Open.mp Serwer dedykowany Windows - konfiguracja"
description: "Dowiedz się, jak zainstalować i uruchomić serwer dedykowany open.mp na Windows, aby cieszyć się płynną rozgrywką multiplayer → Sprawdź teraz"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz serwer dedykowany z Windows i chcesz zainstalować na nim usługę serwera dedykowanego open.mp? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować tę usługę na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Na początek połącz się ze swoim serwerem dedykowanym przez Pulpit zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Dostęp początkowy (RDP)](vserver-windows-userdp.md).

Po uzyskaniu dostępu do serwera pobierz najnowszą wersję z [repozytorium open.mp na GitHub](https://github.com/openmultiplayer/open.mp/releases). Upewnij się, że wybierasz wersję **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Instalacja

Po pobraniu pliku rozpakuj jego zawartość za pomocą narzędzia takiego jak 7zip lub WinRAR. Powinno to utworzyć folder **Server**, który zawiera wszystkie niezbędne pliki serwera.

Aby uruchomić serwer, wystarczy odpalić **omp-server.exe**, a serwer zacznie się ładować. Jednak zalecamy najpierw skonfigurować przekierowanie portów i ustawienia serwera.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Przekierowanie portów na serwerze

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów, z których korzysta proces serwera dedykowanego. Możesz to zrobić bezpośrednio przez polecenia PowerShell, co jest łatwiejsze, lub standardowo przez panel zapory Windows Defender.

:::tip
Pierwsze uruchomienie serwera powinno wywołać monit UAC. Jeśli go zaakceptujesz, reguły zapory zostaną ustawione automatycznie i możesz przejść do kolejnej sekcji. W przeciwnym razie skorzystaj z jednej z poniższych metod.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia i wszystko działało poprawnie.

:::info
Upewnij się, że PowerShell jest uruchomiony w trybie administratora, inaczej ustawienia mogą się nie zastosować.
:::

Następnie skopiuj i wklej poniższe polecenia do PowerShell:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory niezbędne, aby Twój serwer open.mp był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Może być konieczne kliknięcie **Ustawienia zaawansowane**, aby otworzyć odpowiednie okno, jeśli otworzysz tylko podstawową stronę zapory.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz stworzyć nowe reguły dla swojego serwera open.mp. Kliknij na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 7777
- UDP przychodzące i wychodzące: 7777

Jeśli potrzebujesz więcej pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu tych reguł Twój serwer będzie już dostępny, co oznacza, że możesz połączyć się z nim przez adres IP serwera.

Zalecamy najpierw skonfigurować ustawienia serwera w kolejnej sekcji, zanim zaczniesz z niego korzystać.

## Konfiguracja

Na tym etapie masz już gotowy serwer open.mp. Możesz dalej konfigurować serwer przez plik konfiguracyjny.

Przejdź do katalogu głównego. Znajdź i otwórz plik **config.json**. W tym pliku możesz dostosować wiele parametrów serwera, od portu, przez hasło, aż po inne opcje.

Na przykład, oto kilka ustawień konfiguracyjnych:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Zobacz nasz [poradnik Konfiguracja serwera](openmp-configuration.md), aby poznać wszystkie dostępne opcje i ich działanie.

## Uruchamianie i łączenie się z serwerem

Teraz czas uruchomić serwer. Przejdź do katalogu głównego i uruchom **omp-server.exe**, aby rozpocząć proces startu. Otworzy się konsola serwera w oknie wiersza poleceń i serwer zacznie działać.

Teraz możesz połączyć się bezpośrednio z serwerem w grze przez launcher open.mp. Jeśli chcesz, aby informacje o serwerze były widoczne na liście serwerów, sprawdź nasz [poradnik Konfiguracja serwera](openmp-configuration.md) i upewnij się, że parametr `enable_query` jest ustawiony na true (powinno być domyślnie). Po zapisaniu pliku uruchom ponownie serwer.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer open.mp na swoim serwerze dedykowanym! Jeśli masz jakiekolwiek pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />