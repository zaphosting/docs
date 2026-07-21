---
id: dedicated-windows-fivem
title: "Konfiguracja Serwera Dedykowanego FiveM"
description: "Dowiedz się, jak zainstalować i uruchomić własny serwer dedykowany FiveM z txAdmin dla płynnej rozgrywki multiplayer → Sprawdź teraz"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Posiadasz serwer dedykowany i chcesz zainstalować oraz uruchomić własny serwer dedykowany FiveM z txAdmin? Trafiłeś idealnie! W tym poradniku wyjaśnimy wszystkie niezbędne kroki instalacji i konfiguracji oraz na co zwrócić uwagę.

:::warning Wybrany i zainstalowany system operacyjny
Zakładamy, że wybrałeś i zainstalowałeś już system operacyjny na swoim VPS/serwerze dedykowanym. Jeśli jeszcze tego nie zrobiłeś, najpierw wykonaj kroki z poradnika [Pierwsza konfiguracja](dedicated-setup.md) dla serwerów dedykowanych.
:::

## Przygotowanie

Aby skonfigurować serwer FiveM, potrzebne są pewne przygotowania, które muszą zostać wykonane przed rozpoczęciem właściwej instalacji serwera dedykowanego FiveM.

### Konfiguracja bazy danych

Jeśli chcesz korzystać i instalować zasoby wymagające bazy danych, potrzebujesz dodatkowego **serwera bazy danych**. Istnieje kilka sposobów na jego konfigurację. W naszym poradniku [Instalacja MySQL](dedicated-windows-installmysql.md) pokazujemy, jak zainstalować własny **serwer bazy danych** na **serwerze dedykowanym**.

### Pobranie oprogramowania serwera FiveM

Kolejnym krokiem jest pobranie oprogramowania serwera FiveM. Przejdź do strony [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) FiveM za pomocą dowolnej przeglądarki internetowej zainstalowanej na Twoim serwerze i pobierz najnowszą wersję serwera FiveM.

Rozpakuj pobrany plik w katalogu Downloads i przenieś pliki serwera FiveM najlepiej do osobnego folderu. W tym przykładzie oprogramowanie serwera znajduje się w folderze o nazwie **FiveM** na pulpicie.

:::warning Wymagane narzędzie do rozpakowywania
Do rozpakowania pobranego oprogramowania serwera FiveM potrzebne jest narzędzie do rozpakowywania archiwów. W tym przykładzie używamy [7Zip](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)

### Utworzenie klucza licencyjnego serwera FiveM

Każdy serwer FiveM wymaga własnego klucza licencyjnego, którym zarządza się przez nowe [Cfx.re Portal](http://portal.cfx.re/). Klucz licencyjny jest powiązany z Twoim kontem Cfx.re. Zaloguj się na stronie, przejdź do kategorii **Server** i kliknij przycisk **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)

## Konfiguracja

Teraz możesz rozpocząć instalację serwera FiveM i txAdmin. Aby to zrobić, otwórz ponownie katalog serwera FiveM i uruchom aplikację `cfx-server.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)

Po uruchomieniu aplikacji serwera otworzy się konsola serwera oraz txAdmin. W interfejsie txAdmin musisz powiązać swoje **konto Cfx.re** z txAdmin.

![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)

### Konfiguracja txAdmin

Podczas konfiguracji txAdmin Twój własny serwer FiveM zostanie zainstalowany i skonfigurowany w pięciu krokach. Postępuj zgodnie z instrukcjami w interfejsie txAdmin i najpierw zdefiniuj **nazwę serwera**. Następnie wybierz żądany **typ serwera**. W tym przykładzie pokazano instalację serwera FiveM z preinstalowanym QBCore.

W kroku **Deployment Type** wybierz opcję **Popular Recipes**, a następnie **QBCore Framework Template**. Potwierdź wybrany **Data Directory** i uruchom **Recipe Deployer**, aby zakończyć instalację.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Podczas działania Recipe Deployer musisz podać ostatnie niezbędne informacje, zanim serwer będzie mógł zostać uruchomiony. Wprowadź wcześniej utworzony klucz licencyjny FiveM w polu **License Key**. Następnie kliknij **Show/Hide Database Options (Advanced)** i wpisz dane logowania do swojego serwera bazy danych. W tym przypadku potrzebne jest tylko wcześniej zdefiniowane hasło dla użytkownika **root**. Pozostałe ustawienia mogą pozostać bez zmian. Sprawdź poprawność danych i kliknij **Run Recipe**, aby rozpocząć proces.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)

### Konfiguracja zapory sieciowej

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów używanych przez proces VPS/serwera dedykowanego. Możesz to zrobić bezpośrednio za pomocą poleceń Powershell, co jest łatwiejsze, lub standardowo przez stronę Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Upewnij się, że klikniesz prawym przyciskiem i wybierzesz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia i wszystko działało poprawnie.

:::info
Upewnij się, że uruchamiasz Powershell w trybie administratora, w przeciwnym razie ustawienia mogą nie zostać poprawnie zastosowane.
:::

Następnie skopiuj i wklej poniższe polecenia do konsoli Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Te polecenia automatycznie utworzą reguły zapory sieciowej, które są niezbędne, aby Twój serwer FiveM był dostępny publicznie.

</TabItem>

<TabItem value="windefender" label="Przez Windows Defender">

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzysz podstawową stronę zapory Windows, może być konieczne kliknięcie **Zaawansowane ustawienia**, aby otworzyć właściwe okno.

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

Musisz utworzyć nowe reguły dla swojego serwera FiveM. Kliknij na reguły przychodzące i wychodzące, jak opisano poniżej, i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 30120
- UDP przychodzące i wychodzące: 30120

Jeśli potrzebujesz dodatkowej pomocy, skorzystaj z naszego poradnika [Przekierowanie portów (Zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Podsumowanie

Pomyślnie zainstalowałeś i skonfigurowałeś serwer dedykowany FiveM na swoim VPS/serwerze dedykowanym. Jeśli masz dalsze pytania lub potrzebujesz pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂