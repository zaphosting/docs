---
id: dedicated-windows-fs-25
title: "Serwer dedykowany: Farming Simulator 2025 Serwer dedykowany Windows - konfiguracja"
description: "Dowiedz się, jak skonfigurować serwer dedykowany Farming Simulator 2025 na Windows, aby płynnie hostować gry multiplayer → Sprawdź teraz"
sidebar_label: Farming Simulator 2025
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz serwer dedykowany z Windows i chcesz zainstalować na nim serwer dedykowany Farming Simulator 2025? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować tę usługę na Twoim serwerze.

## Przygotowanie

Aby hostować serwer dedykowany Farming Simulator 2025, musisz mieć gotowy serwer Windows oraz ważną licencję na grę, która pozwoli uruchomić serwer dedykowany.

Przed rozpoczęciem instalacji połącz się ze swoim serwerem Windows przez Pulpit zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Początkowy dostęp (RDP)](vserver-windows-userdp.md).

### Licencja na grę

Aby hostować serwer dedykowany na swoim serwerze Windows, musisz posiadać cyfrową kopię Farming Simulator 2025 zakupioną bezpośrednio na stronie [Farming Simulator](https://www.farming-simulator.com/buy-now.php).

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Nie możesz użyć tej samej licencji, na której grasz, dlatego musisz kupić **drugą** kopię gry wyłącznie na potrzeby serwera dedykowanego.

:::info Licencja Steam
Możesz użyć licencji Steam do hostowania serwera dedykowanego, ale jest to dość niewygodne, ponieważ wymaga ciągłego uruchomienia klienta Steam w tle. Oznacza to też, że nie możesz grać na innym systemie na tym samym koncie Steam z powodu ograniczeń Steam. Dlatego zdecydowanie polecamy zakup osobnego klucza bezpośrednio na stronie, aby uniknąć tych problemów.

Jeśli jednak planujesz użyć licencji **Steam**, zainstaluj pliki przez Steam jak zwykle i przejdź od razu do sekcji **Konfiguracja serwera dedykowanego** w tym poradniku.
:::

Po zakupie cyfrowej wersji na stronie otrzymasz kod produktu na podany podczas zakupu adres e-mail. Będziesz potrzebować tego klucza w kolejnej sekcji, aby pobrać grę i zweryfikować serwer dedykowany podczas konfiguracji.

## Instalacja

### Instalacja plików

Gdy masz już klucz licencyjny i serwer Windows gotowy, przejdź na stronie [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) na swoim serwerze i wpisz otrzymany klucz licencyjny.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Po poprawnym wpisaniu klucza uzyskasz dostęp do strony z różnymi metodami pobierania gry. Znajdź główną opcję Windows **Farming Simulator 25 (Windows 10/11)** i kliknij pobierz.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Pobieranie rozpocznie się i może potrwać chwilę, ponieważ pobierana jest cała gra, więc bądź cierpliwy.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Po zakończeniu przejdź do folderu z pobranymi plikami i znajdź plik **.img**. Otwórz go dwuklikiem, co zamontuje obraz jako dysk w Eksploratorze plików.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Teraz uruchom plik **Setup.exe** i zaakceptuj monit UAC. Postępuj zgodnie z kreatorem instalacji, akceptując regulamin i ewentualnie zmieniając ścieżkę instalacji.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Poczekaj cierpliwie na zakończenie instalacji. Po jej zakończeniu wyjdź z kreatora. Zalecamy kliknąć prawym przyciskiem na zamontowany dysk DVD w Eksploratorze i wybrać **Wysuń**, bo nie będzie już potrzebny. Na tym etapie podstawowa instalacja gry jest zakończona.

### Aktywacja gry

Po instalacji musisz uruchomić grę przynajmniej raz, aby ją aktywować. Uruchom grę z ikony na pulpicie lub przez wyszukiwarkę Windows.

Po starcie pojawi się monit o wpisanie klucza licencyjnego. Wprowadź klucz, który otrzymałeś na maila i potwierdź. Po poprawnej aktywacji gra załaduje się dalej.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Teraz możesz zamknąć grę, bo nie będzie już potrzebna. Przejdź do kolejnej sekcji, aby skonfigurować serwer dedykowany i panel webowy. Jeśli pojawi się błąd **Video Driver**, wybierz **nie**, co natychmiast przerwie uruchamianie gry.

## Konfiguracja serwera dedykowanego

Gdy gra jest gotowa, musisz zmodyfikować kilka ustawień serwera dedykowanego. Zacznij od wejścia do folderu instalacyjnego gry. Domyślnie to `C:\Program Files (x86)\Farming Simulator 2025`, chyba że zmieniłeś ścieżkę podczas instalacji.

Znajdź i otwórz plik **dedicatedServer.xml** w edytorze tekstu.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Polecamy zmienić pola `username` i `passphrase` na własne dane. To będą dane do logowania do panelu webowego serwera. Zapisz plik i zamknij go.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Dostęp do panelu webowego

Po ustawieniu danych możesz uruchomić serwer, uruchamiając plik **dedicatedServer.exe** w tym samym folderze gry.

:::info Uprawnienia administratora
Upewnij się, że uruchamiasz plik serwera dedykowanego z uprawnieniami administratora, inaczej mogą wystąpić problemy z uruchomieniem serwera. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Otworzy się nowe okno CMD, które automatycznie wygeneruje potrzebne certyfikaty, zainstaluje aktualizacje i narzędzia. Może to chwilę potrwać przy pierwszym uruchomieniu, więc bądź cierpliwy.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Gdy będzie gotowe, możesz wejść do panelu webowego, wpisując w przeglądarce `http://[twoj_adres_ip_serwera]:8080`. Zaloguj się danymi, które ustawiłeś wcześniej.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

W panelu webowym możesz zmieniać mnóstwo ustawień serwera, zarządzać zapisami, modami i wieloma innymi opcjami.

### Przekierowanie portów

Aby Twój serwer był dostępny publicznie, musisz ustawić reguły przekierowania portów dla portów używanych przez serwer dedykowany. Możesz to zrobić przez PowerShell, co jest łatwiejsze, albo przez zaporę Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że PowerShell działa w trybie administratora, inaczej ustawienia mogą się nie zastosować.
:::

Wklej poniższe komendy do PowerShell:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Te komendy automatycznie utworzą reguły zapory sieciowej, które pozwolą na publiczny dostęp do Twojego serwera Farming Simulator 2025.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzy się podstawowa zapora, kliknij **Ustawienia zaawansowane**, aby otworzyć właściwe okno.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz stworzyć nowe reguły dla serwera FS2025. Dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 8080, 10823
- UDP przychodzące i wychodzące: 8080, 10823

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu reguł Twój serwer będzie dostępny publicznie, czyli panel webowy i serwer w grze będą osiągalne z internetu.

### Uruchamianie serwera

Po ustawieniu wszystkiego i skonfigurowaniu zapory, przejdź do strony głównej panelu webowego i kliknij przycisk **Start**, aby uruchomić serwer.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Po uruchomieniu serwer zacznie się ładować, co potwierdzisz w panelu i nowym oknie CMD, które będzie działać jako serwer gry. Jeśli masz problemy z uruchomieniem, upewnij się, że panel uruchamiasz jako administrator.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś i skonfigurowałeś serwer dedykowany Farming Simulator 2025 na swoim serwerze dedykowanym! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!