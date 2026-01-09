---
id: vserver-windows-fs-22-epic
title: "VPS: Farming Simulator 2022 (Epic Games) Dedykowany Serwer Windows - Konfiguracja"
description: "Dowiedz się, jak skonfigurować dedykowany serwer Farming Simulator 22 dla Epic Games, aby zoptymalizować rozgrywkę i hosting → Sprawdź teraz"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Konfiguracja serwera dla wersji Farming Simulator 22 z Epic Games różni się nieco od standardowego serwera. Ten poradnik przeprowadzi Cię przez cały proces, skupiając się na unikalnych aspektach wersji Epic Games.
<InlineVoucher />

## Przygotowanie

Przed rozpoczęciem upewnij się, że Twój setup spełnia następujące wymagania:
- **System operacyjny:** Windows Server 2016/2019 (64-bit)
- **CPU:** Minimum 4x 2.4 GHz (AMD/Intel)
- **Pamięć RAM:** Minimum 4GB (DDR3/4)
- **Miejsce na dysku:** Minimum 50GB wolnego miejsca (preferowany dysk SSD lub lepszy)
- **Konto Epic Games:** Konto Epic Games z zakupionym Farming Simulator 22.

:::info
Podczas uruchamiania serwera nie możesz jednocześnie hostować serwera i grać na tym samym koncie Epic Games. Oznacza to, że jeśli chcesz grać na serwerze, potrzebujesz drugą kopię gry na innym koncie.
:::

## Krok 1: Przygotowanie do instalacji serwera
Zacznij od połączenia się z serwerem przez Pulpit Zdalny (RDP). Jeśli potrzebujesz pomocy, zajrzyj do naszego [poradnika Początkowy dostęp (RDP)](vserver-windows-userdp.md).

Po połączeniu musisz zainstalować niezbędny komponent, Microsoft Visual C++ Redistributable, który pobierzesz ze [strony Microsoft](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). Po pobraniu postępuj zgodnie z instrukcjami wyświetlanymi na ekranie, aby zakończyć instalację.

:::tip
Możliwe, że masz już zainstalowane narzędzia C++ Redistributable. W takim wypadku instalator może wyświetlić błąd — możesz go bezpiecznie zignorować i iść dalej.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Teraz musisz zainstalować Epic Games Launcher, który pobierzesz ze [strony Epic Games](https://store.epicgames.com/en-US/download). Ponownie, postępuj zgodnie z instrukcjami na ekranie, aby zakończyć instalację.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Po instalacji launcher prawdopodobnie pobierze kilka dodatkowych plików i aktualizacji przed uruchomieniem.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Po otwarciu launchera zaloguj się na konto Epic Games, które posiada Farming Simulator 2022 w bibliotece gier.

## Krok 2: Pobieranie Farming Simulator 2022

W Epic Games Launcher kliknij zakładkę **Biblioteka** i znajdź Farming Simulator 22. Użyj przycisku **Zainstaluj** i wybierz lokalizację, gdzie chcesz pobrać grę.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Teraz musisz poczekać na zakończenie pobierania i instalacji. Prędkość pobierania zależy od przepustowości Twojego serwera.

## Krok 3: Ustawianie opcji uruchamiania

Po zainstalowaniu gry wróć do zakładki **Biblioteka** w Epic Games Launcher. Znajdź Farming Simulator 22, kliknij trzy kropki obok i wybierz **Zarządzaj**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Przewiń do sekcji **Opcje uruchamiania** i ją włącz. W polu tekstowym wpisz `-server` i zamknij menu.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Krok 4: Uruchamianie serwera

Teraz możesz uruchomić Farming Simulator 2022 z Epic Games Launcher lub skrótu na pulpicie. Gra powinna wystartować przez wiersz poleceń (CMD) w trybie dedykowanego serwera. Jeśli tak się nie stanie, upewnij się, że poprawnie ustawiłeś opcję uruchamiania.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Krok 5: Włączanie interfejsu webowego (opcjonalnie)

Dedykowane serwery Farming Simulator 22 mają interfejs webowy, który możesz włączyć dla swojego serwera. To opcja, ale może być bardzo przydatna do zarządzania ustawieniami i wieloma innymi funkcjami, więc polecamy ją włączyć.

Przed kontynuacją zamknij serwer, wychodząc z wiersza poleceń. To ważne, aby zmiany w tym kroku nie zostały nadpisane.

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

Teraz powinieneś mieć dostęp do interfejsu webowego, wpisując w przeglądarce `http://[adres_IP_twojego_serwera]:8080`, zamieniając `[adres_IP_twojego_serwera]` na adres IP Twojego serwera. Jeśli chcesz uzyskać dostęp do panelu bezpośrednio na tym samym serwerze, możesz też użyć `http://127.0.0.1:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
Ze względu na unikalną konfigurację wersji Epic Games, możesz napotkać problemy z pełnym wykorzystaniem interfejsu webowego. Możesz w nim dokonywać zmian i zatrzymywać serwer, ale nie możesz na przykład uruchomić serwera przez ten panel.

Jeśli pojawią się problemy, najpierw zatrzymaj dedicatedServer.exe, następnie uruchom Farming Simulator 22 bezpośrednio, aby upewnić się, że serwer działa. Potem uruchom dedicatedServer.exe, aby aktywować interfejs webowy.

Ważne jest, aby najpierw uruchomić serwer, a dopiero potem interfejs webowy, inaczej Epic Games może wykryć oba pliki jako ten sam i zablokować uruchomienie głównego serwera.
:::

## Krok 6: Przekierowanie portów

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces dedykowanego serwera. Możesz to zrobić albo przez polecenia PowerShell, co jest łatwiejsze, albo tradycyjnie przez panel zapory Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że uruchamiasz PowerShell w trybie administratora, inaczej ustawienia mogą się nie zastosować poprawnie.
:::

Następnie skopiuj i wklej poniższe polecenia do PowerShell:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer Farming Simulator 22 był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Możesz potrzebować kliknąć **Ustawienia zaawansowane**, aby otworzyć właściwe okno, jeśli otworzysz podstawową stronę zapory.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera Farming Simulator 22. Kliknij na reguły przychodzące i wychodzące i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 3724, 27015
- UDP przychodzące i wychodzące: 3724, 27015

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Krok 7: Łączenie się z serwerem
Uruchom grę i przejdź do menu multiplayer. Znajdź nazwę serwera, którą zobaczysz w interfejsie webowym i którą możesz dostosować.

Po znalezieniu serwera kliknij, aby się połączyć. Jeśli pojawi się prośba, wpisz hasło, które również znajdziesz w interfejsie webowym.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś serwer Farming Simulator 2022 na swoim VPS! Jeśli masz dodatkowe pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji każdego dnia!

<InlineVoucher />