---
id: vserver-windows-fs-25
title: "VPS: Farming Simulator 2025 Serwer Dedykowany Windows - Instalacja"
description: "Dowiedz się, jak zainstalować serwer dedykowany Farming Simulator 2025 na swoim Windows VPS, aby cieszyć się płynną rozgrywką multiplayer → Sprawdź teraz"
sidebar_label: Farming Simulator 2025
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Masz Windows VPS i chcesz zainstalować serwer dedykowany Farming Simulator 2025? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować tę usługę na Twoim serwerze.

<InlineVoucher />

## Przygotowanie

Aby hostować serwer dedykowany Farming Simulator 2025, musisz mieć gotowy serwer Windows oraz ważną licencję na grę, która pozwoli uruchomić serwer dedykowany.

Przed rozpoczęciem instalacji połącz się ze swoim serwerem Windows przez Pulpit Zdalny (RDP). Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Dostęp Początkowy (RDP)](vserver-windows-userdp.md).

### Licencja na grę

Aby hostować serwer dedykowany na swoim serwerze Windows, musisz posiadać cyfrową kopię Farming Simulator 2025 zakupioną bezpośrednio na stronie [Farming Simulator](https://www.farming-simulator.com/buy-now.php).

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Nie możesz użyć tej samej licencji, na której grasz, dlatego musisz kupić **drugą** kopię gry wyłącznie na potrzeby serwera dedykowanego.

:::info Licencja Steam
Możesz użyć licencji Steam do hostowania serwera dedykowanego, ale jest to dość niewygodne, ponieważ wymaga ciągłego uruchomienia klienta Steam w tle. Oznacza to też, że nie możesz grać na innym systemie na tym samym koncie Steam z powodu ograniczeń Steam. Dlatego zdecydowanie polecamy zakup osobnego klucza bezpośrednio na stronie, aby uniknąć tych problemów.

Jeśli jednak planujesz użyć licencji **Steam**, zainstaluj pliki przez Steam jak zwykle i przejdź do sekcji [**Konfiguracja Serwera Dedykowanego**](#dedicated-server-setup).
:::

Po zakupie cyfrowej wersji otrzymasz kod produktu na adres e-mail podany podczas zakupu. Będziesz potrzebować tego klucza w kolejnej części, aby pobrać grę i aktywować serwer dedykowany podczas konfiguracji.

## Instalacja

### Instalacja plików

Gdy masz już klucz licencyjny i serwer Windows gotowy, przejdź na stronie [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) na swoim serwerze i wpisz klucz licencyjny, który otrzymałeś e-mailem.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Po poprawnym wpisaniu klucza uzyskasz dostęp do strony z różnymi metodami pobierania gry. Znajdź główną opcję Windows **Farming Simulator 25 (Windows 10/11)** i kliknij pobierz.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Pobieranie rozpocznie się i może potrwać chwilę, ponieważ pobierana jest cała gra, więc prosimy o cierpliwość.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Po zakończeniu przejdź do folderu z pobranymi plikami i znajdź plik **.img**. Otwórz go dwuklikiem, co zamontuje obraz jako napęd w Eksploratorze plików.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Teraz uruchom plik **Setup.exe** i zaakceptuj monit UAC. Postępuj zgodnie z kreatorem instalacji, akceptując regulamin i ewentualnie zmieniając ścieżkę instalacji.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Poczekaj cierpliwie na zakończenie instalacji. Po jej zakończeniu zamknij kreator. Zalecamy kliknąć prawym przyciskiem na zamontowany napęd DVD w Eksploratorze i wybrać **Wysuń**, ponieważ nie będzie już potrzebny. W tym momencie podstawowa instalacja gry jest zakończona.

### Aktywacja gry

Po instalacji musisz uruchomić grę przynajmniej raz, aby ją aktywować. Uruchom ją z pulpitu lub przez wyszukiwarkę Windows.

Po uruchomieniu pojawi się monit o wpisanie klucza licencyjnego. Wprowadź klucz, który otrzymałeś na e-mail i potwierdź. Po poprawnej aktywacji gra załaduje się dalej.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Teraz możesz zamknąć grę, ponieważ nie będzie już potrzebna. Przejdź do następnej sekcji, aby skonfigurować serwer dedykowany i panel webowy. Jeśli pojawi się błąd **Video Driver**, wybierz **nie**, co natychmiast przerwie uruchamianie gry.

## Konfiguracja Serwera Dedykowanego

Gdy gra jest gotowa, musisz zmodyfikować kilka ustawień serwera dedykowanego. Zacznij od wejścia do folderu instalacyjnego gry. Domyślnie jest to `C:\Program Files (x86)\Farming Simulator 2025`, chyba że zmieniłeś ścieżkę podczas instalacji.

Znajdź i otwórz plik **dedicatedServer.xml** w edytorze tekstowym.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Zalecamy zmianę pól `username` i `passphrase` na własne dane. To będą dane logowania do panelu webowego Twojego serwera. Zapisz plik i zamknij go.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Dostęp do panelu webowego

Po skonfigurowaniu danych możesz uruchomić serwer, klikając plik **dedicatedServer.exe** w tym samym folderze co gra.

:::info Uprawnienia Administratora
Upewnij się, że uruchamiasz plik serwera dedykowanego z uprawnieniami administratora, inaczej mogą wystąpić problemy z uruchomieniem serwera. Kliknij prawym i wybierz **Uruchom jako administrator**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Otworzy się nowe okno CMD, które automatycznie wygeneruje potrzebne certyfikaty, zainstaluje aktualizacje i niezbędne narzędzia. Może to potrwać chwilę przy pierwszym uruchomieniu, więc bądź cierpliwy.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Gdy wszystko będzie gotowe, uzyskasz dostęp do panelu webowego, wpisując w przeglądarce `http://[twoj_adres_ip]:8080`. Zaloguj się danymi, które ustawiłeś wcześniej.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

W panelu webowym możesz zarządzać wieloma ustawieniami serwera, w tym konfiguracją, zapisami gry, modami i wieloma innymi.

### Przekierowanie portów

Aby Twój serwer był dostępny publicznie, musisz ustawić reguły przekierowania portów dla portów używanych przez serwer dedykowany. Możesz to zrobić przez PowerShell (łatwiej) lub przez zaporę Windows Defender.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Przez PowerShell" default>

Otwórz wyszukiwarkę Windows i wpisz **PowerShell**. Kliknij prawym i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia.

:::info
Upewnij się, że PowerShell działa w trybie administratora, inaczej ustawienia mogą się nie zastosować.
:::

Wklej poniższe komendy w PowerShell:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Te komendy automatycznie utworzą reguły zapory, które pozwolą na dostęp do Twojego serwera Farming Simulator 2025 z internetu.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Wyszukaj w Windows **Ustawienia Zapory Windows z Zaawansowanym Bezpieczeństwem**. Jeśli otworzy się podstawowa zapora, kliknij **Ustawienia Zaawansowane**, aby przejść do właściwego okna.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz utworzyć nowe reguły przychodzące i wychodzące dla serwera FS2025. Dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 8080, 10823
- UDP przychodzące i wychodzące: 8080, 10823

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie Portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

Po dodaniu reguł Twój serwer będzie dostępny publicznie, co oznacza, że panel webowy i serwer w grze będą osiągalne z internetu.

### Uruchamianie serwera

Po skonfigurowaniu ustawień i zapory przejdź do strony głównej panelu webowego i kliknij przycisk **Start**, aby uruchomić serwer.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Po uruchomieniu serwer zacznie się ładować, co potwierdzisz w panelu oraz nowym oknie CMD, które będzie działać jako serwer gry. Jeśli pojawią się błędy, upewnij się, że uruchamiasz panel jako Administrator.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś i skonfigurowałeś serwer dedykowany Farming Simulator 2025 na swoim VPS! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest dostępny codziennie i chętnie pomoże!

<InlineVoucher />