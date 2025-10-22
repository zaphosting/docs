---
id: dedicated-windows-fs-22-epic
title: "Serwer dedykowany: Farming Simulator 2022 (Epic Games) - konfiguracja serwera dedykowanego Windows"
description: "Dowiedz się, jak skonfigurować serwer dedykowany dla Farming Simulator 22 w wersji Epic Games z optymalną wydajnością i unikalnymi wymaganiami → Sprawdź teraz"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Konfiguracja serwera dla Farming Simulator 22 w wersji Epic Games różni się nieco od standardowego serwera. Ten poradnik przeprowadzi Cię przez cały proces, skupiając się na unikalnych aspektach wersji Epic Games.

<InlineVoucher />

## Przygotowanie

Przed rozpoczęciem upewnij się, że Twoja konfiguracja spełnia następujące wymagania:
- **System operacyjny:** Windows Server 2016/2019 (64-bit)
- **CPU:** Minimum 4x 2.4 GHz (AMD/Intel)
- **Pamięć RAM:** Minimum 4GB (DDR3/4)
- **Miejsce na dysku:** Minimum 50GB wolnego miejsca (preferowany dysk SSD lub lepszy)
- **Konto Epic Games:** Konto Epic Games z zakupionym Farming Simulator 22.

:::info
Podczas uruchamiania serwera nie możesz jednocześnie hostować serwera i grać na tym samym koncie Epic Games. Oznacza to, że jeśli chcesz grać na serwerze, potrzebujesz drugiej kopii gry na innym koncie.
:::

## Krok 1: Przygotowanie do instalacji serwera
Zacznij od połączenia się z serwerem przez Pulpit Zdalny (RDP). Jeśli potrzebujesz pomocy, zajrzyj do naszego [Poradnika dostępu początkowego (RDP)](vserver-windows-userdp.md).

Po połączeniu musisz zainstalować niezbędny komponent, Microsoft Visual C++ Redistributable, który możesz pobrać ze [strony Microsoft](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). Po pobraniu postępuj zgodnie z instrukcjami wyświetlanymi na ekranie, aby zakończyć instalację.

:::tip
Możliwe, że masz już zainstalowane narzędzia C++ Redistributable. W takim wypadku instalator może wyświetlić błąd — możesz go bezpiecznie zignorować i kontynuować.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Następnie zainstaluj Epic Games Launcher, który pobierzesz ze [strony Epic Games](https://store.epicgames.com/en-US/download). Ponownie postępuj zgodnie z instrukcjami instalatora.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Po instalacji launcher prawdopodobnie pobierze kilka dodatkowych plików i aktualizacji przed uruchomieniem.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Po otwarciu launchera zaloguj się na konto Epic Games, które posiada Farming Simulator 2022 w swojej bibliotece.

## Krok 2: Pobieranie Farming Simulator 2022

W Epic Games Launcher przejdź do zakładki **Biblioteka** i znajdź Farming Simulator 22. Kliknij przycisk **Zainstaluj** i wybierz lokalizację, gdzie chcesz pobrać grę.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Teraz musisz poczekać na zakończenie pobierania i instalacji. Prędkość pobierania zależy od przepustowości Twojego serwera.

## Krok 3: Ustawianie opcji uruchamiania

Po zainstalowaniu gry wróć do zakładki **Biblioteka** w Epic Games Launcher. Znajdź Farming Simulator 22, kliknij trzy kropki obok i wybierz **Zarządzaj**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Przewiń do sekcji **Opcje uruchamiania** i ją włącz. W polu tekstowym wpisz `-server` i zamknij menu.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Krok 4: Uruchamianie serwera

Teraz możesz uruchomić Farming Simulator 2022 z Epic Games Launcher lub skrótu na pulpicie. Gra powinna wystartować w trybie serwera dedykowanego przez wiersz poleceń (CMD). Jeśli tak się nie stanie, upewnij się, że poprawnie ustawiłeś opcję uruchamiania.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Krok 5: Włączanie interfejsu webowego (opcjonalnie)

Serwery dedykowane Farming Simulator 22 mają dostępny interfejs webowy, który możesz włączyć. To opcja dodatkowa, ale może być bardzo przydatna do zarządzania ustawieniami i wieloma innymi funkcjami, dlatego polecamy ją aktywować.

Przed kontynuacją zamknij serwer, wychodząc z wiersza poleceń, aby zmiany nie zostały nadpisane.

Przejdź do folderu instalacyjnego gry, zazwyczaj jest to `C:\Program Files\Epic Games\FarmingSimulator22`, jeśli instalowałeś w domyślnym katalogu.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Znajdź i otwórz plik `dedicatedServer.xml` w katalogu głównym za pomocą edytora tekstu, np. Notatnika.

Ustaw nazwę użytkownika i hasło administratora, modyfikując odpowiednie pola:
```xml
  <initial_admin>
    <username>admin</username> //nazwa użytkownika
    <passphrase>twoje_hasło</passphrase> //hasło
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

Zapisz plik przed zamknięciem i uruchom `dedicatedServer.exe` znajdujący się w tym samym katalogu głównym.

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

Teraz powinieneś mieć dostęp do interfejsu webowego pod adresem `http://[adres_IP_twojego_serwera]:8080` w przeglądarce, zamieniając `[adres_IP_twojego_serwera]` na adres IP Twojego serwera. Jeśli chcesz uzyskać dostęp do panelu bezpośrednio na tym samym serwerze, możesz też użyć `http://127.0.0.1:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
Ze względu na unikalną konfigurację wersji Epic Games, możesz napotkać ograniczenia w korzystaniu z interfejsu webowego. Możesz w nim wprowadzać zmiany i zatrzymywać serwer, ale na przykład nie możesz uruchomić serwera przez ten panel.

W razie problemów najpierw zatrzymaj dedicatedServer.exe, potem uruchom Farming Simulator 22 bezpośrednio, aby upewnić się, że serwer działa. Następnie uruchom dedicatedServer.exe, aby aktywować interfejs webowy.

Ważne jest, aby najpierw uruchomić serwer, a dopiero potem interfejs webowy, bo inaczej Epic Games może wykryć oba pliki jako ten sam i zablokować uruchomienie serwera.
:::

## Krok 6: Przekierowanie portów

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces serwera dedykowanego. Możesz to zrobić przez polecenia PowerShell, co jest łatwiejsze, lub przez panel zapory Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że PowerShell jest uruchomiony w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Następnie wklej poniższe polecenia w okno PowerShell:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer Farming Simulator 22 był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzysz podstawową stronę zapory, kliknij **Ustawienia zaawansowane**, aby przejść do właściwego panelu.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz utworzyć nowe reguły dla swojego serwera Farming Simulator 22. Kliknij na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 3724, 27015
- UDP przychodzące i wychodzące: 3724, 27015

Jeśli potrzebujesz pomocy, skorzystaj z naszego [Poradnika przekierowania portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Krok 7: Łączenie się z serwerem
Uruchom grę i przejdź do menu multiplayer. Znajdź nazwę serwera, którą zobaczysz w interfejsie webowym i którą możesz dostosować.

Po znalezieniu serwera kliknij, aby się połączyć. Jeśli pojawi się prośba, wpisz hasło, które również znajdziesz w interfejsie webowym.

Gratulacje! Pomyślnie zainstalowałeś Farming Simulator 22 (wersja Epic Games) na swoim serwerze dedykowanym Windows.

<InlineVoucher />