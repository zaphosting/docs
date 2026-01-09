---
id: vserver-windows-fivem
title: "VPS: Konfiguracja Serwera Dedykowanego FiveM"
description: "Dowiedz się, jak zainstalować i skonfigurować własny Serwer Dedykowany FiveM na VPS, aby cieszyć się płynną rozgrywką multiplayer → Sprawdź teraz"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Wprowadzenie

Masz VPS i chcesz zainstalować oraz prowadzić własny Serwer Dedykowany FiveM z txAdmin? Trafiłeś idealnie! Poniżej wyjaśnimy wszystkie niezbędne kroki, jak go zainstalować i skonfigurować oraz na co zwrócić uwagę.


## Przygotowanie

Aby uruchomić serwer FiveM, potrzebne są pewne przygotowania, które muszą zostać wykonane zanim przystąpisz do właściwej instalacji Serwera Dedykowanego FiveM.



### Konfiguracja bazy danych

Jeśli chcesz korzystać i instalować zasoby wymagające bazy danych, potrzebujesz dodatkowego **serwera bazy danych**. Istnieje kilka sposobów na jego uruchomienie. W naszym [poradniku Instalacja MySQL](vserver-windows-installmysql.md) pokazujemy, jak zainstalować własny **serwer bazy danych** na Twoim **VPS**.



### Pobierz oprogramowanie serwera FiveM

Kolejnym krokiem jest pobranie oprogramowania serwera FiveM. Wejdź na stronę [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) FiveM za pomocą dowolnej przeglądarki internetowej i pobierz najnowszą wersję serwera FiveM.

Rozpakuj pobrany plik w katalogu Pobrane i przenieś pliki serwera FiveM najlepiej do osobnego folderu. W tym przykładzie oprogramowanie serwera znajduje się w folderze **FiveM** na pulpicie.

:::warning Potrzebne narzędzie do rozpakowywania
Do rozpakowania pobranego oprogramowania serwera FiveM potrzebne jest narzędzie do rozpakowywania archiwów. W tym przykładzie używamy [7Zip](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Utwórz klucz licencyjny serwera FiveM

Każdy serwer FiveM wymaga własnego klucza licencyjnego, którym zarządza się przez nowe [Cfx.re Portal](http://portal.cfx.re/). Klucz licencyjny jest powiązany z Twoim kontem Cfx.re. Zaloguj się na stronie, przejdź do kategorii **Server** i kliknij przycisk **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguracja

Teraz możesz rozpocząć instalację Serwera FiveM i txAdmin. Aby to zrobić, otwórz ponownie katalog serwera FiveM i uruchom aplikację `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Po uruchomieniu aplikacji serwera otworzy się konsola serwera oraz txAdmin. W panelu txAdmin musisz połączyć swoje **konto Cfx.re** z txAdmin.


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### Konfiguracja txAdmin

Podczas konfiguracji txAdmin Twój własny serwer FiveM zostanie zainstalowany i skonfigurowany w pięciu krokach. Postępuj zgodnie z instrukcjami w panelu txAdmin i najpierw zdefiniuj **nazwę serwera**. Następnie wybierz pożądany **typ serwera**. W tym przykładzie pokazujemy instalację serwera FiveM z preinstalowanym QBCore.

W kroku **Deployment Type** wybierz opcję **Popular Recipes**, a następnie **QBCore Framework Template**. Potwierdź wybrany **katalog danych** i uruchom **Recipe Deployer**, aby zakończyć instalację.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Podczas działania Recipe Deployer musisz podać ostatnie niezbędne informacje, zanim serwer zostanie uruchomiony. W polu **License Key** wpisz wcześniej utworzony klucz licencyjny FiveM. Następnie kliknij **Show/Hide Database Options (Advanced)** i wpisz dane logowania do serwera bazy danych. W tym przypadku wystarczy hasło użytkownika **root**. Pozostałe ustawienia możesz pozostawić bez zmian. Sprawdź poprawność danych i kliknij **Run Recipe**, aby rozpocząć proces.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Konfiguracja zapory sieciowej

Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów, z których korzysta proces serwera dedykowanego. Możesz to zrobić albo przez polecenia Powershell, co jest łatwiejsze, albo standardowo przez panel Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Kliknij prawym przyciskiem i wybierz **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia i wszystko działało poprawnie.

:::info
Upewnij się, że uruchamiasz Powershell w trybie administratora, inaczej ustawienia mogą nie zostać poprawnie zastosowane.
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

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Jeśli otworzysz standardową stronę zapory, może być konieczne kliknięcie **Zaawansowane ustawienia**, aby otworzyć właściwe okno.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Musisz utworzyć nowe reguły dla swojego serwera FiveM. Zrób to, klikając kolejno na reguły przychodzące i wychodzące i dodając je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 30120
- UDP przychodzące i wychodzące: 30120

Jeśli potrzebujesz pomocy, skorzystaj z naszego [poradnika Przekierowanie portów (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Podsumowanie

Pomyślnie zainstalowałeś i skonfigurowałeś Serwer Dedykowany FiveM na swoim VPS. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />