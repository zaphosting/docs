---
id: dedicated-windows-fivem
title: "Serwer dedykowany: Konfiguracja serwera FiveM dedykowanego"
description: "Dowiedz się, jak zainstalować i uruchomić własny serwer FiveM dedykowany z txAdmin dla płynnej rozgrywki multiplayer → Sprawdź teraz"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Wprowadzenie

Masz serwer dedykowany i chcesz zainstalować oraz prowadzić własny serwer FiveM dedykowany z txAdmin? Trafiłeś idealnie! Poniżej wyjaśnimy wszystkie niezbędne kroki, jak go zainstalować, skonfigurować i na co zwrócić uwagę.



:::warning  Wybrany i zainstalowany system operacyjny
Zakładamy, że wybrałeś i zainstalowałeś już system operacyjny na swoim serwerze dedykowanym. Jeśli jeszcze tego nie zrobiłeś, najpierw wykonaj kroki z [Pierwszej konfiguracji](dedicated-setup.md) dla serwerów dedykowanych.
:::



## Przygotowanie

Aby skonfigurować serwer FiveM, potrzebne są pewne przygotowania, które muszą zostać wykonane zanim rozpoczniesz właściwą instalację serwera FiveM dedykowanego.



### Konfiguracja bazy danych

Jeśli chcesz korzystać i instalować zasoby wymagające bazy danych, potrzebujesz dodatkowego **serwera bazy danych**. Istnieje kilka sposobów na jego konfigurację. W naszym poradniku [Instalacja MySQL](dedicated-windows-installmysql.md) pokazujemy, jak zainstalować własny **serwer bazy danych** na Twoim **serwerze dedykowanym**.



### Pobierz oprogramowanie serwera FiveM

Kolejnym krokiem jest pobranie oprogramowania serwera FiveM. Wejdź na stronę [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) FiveM przez dowolną przeglądarkę internetową i pobierz najnowszą wersję serwera FiveM.

Rozpakuj pobrany plik w katalogu Pobrane i przenieś pliki serwera FiveM najlepiej do osobnego folderu. W tym przykładzie oprogramowanie serwera znajduje się w folderze **FiveM** na pulpicie.

:::warning Wymagane narzędzie do rozpakowywania
Do rozpakowania pobranego oprogramowania serwera FiveM potrzebne jest narzędzie do rozpakowywania archiwów. W tym przykładzie używamy [7Zip](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Utwórz klucz licencyjny serwera FiveM

Każdy serwer FiveM wymaga własnego klucza licencyjnego, którym zarządza się przez nowe [Cfx.re Portal](http://portal.cfx.re/). Klucz licencyjny jest powiązany z Twoim kontem Cfx.re. Zaloguj się na stronie, przejdź do kategorii **Server** i kliknij przycisk **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguracja

Teraz możesz rozpocząć instalację serwera FiveM i txAdmin. Aby zacząć, otwórz ponownie katalog serwera FiveM i uruchom aplikację `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


Po uruchomieniu aplikacji serwera otworzy się konsola serwera oraz txAdmin. W interfejsie txAdmin musisz połączyć swoje **konto Cfx.re** z txAdmin.



![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### Konfiguracja txAdmin

Podczas konfiguracji txAdmin Twój własny serwer FiveM zostanie zainstalowany i skonfigurowany w pięciu krokach. Postępuj zgodnie z instrukcjami w interfejsie txAdmin i najpierw zdefiniuj **nazwę serwera**. Następnie wybierz pożądany **typ serwera**. Ten przykład pokazuje instalację serwera FiveM z preinstalowanym QBCore.

W kroku **Deployment Type** wybierz opcję **Popular Recipes**, a następnie **QBCore Framework Template**. Potwierdź wybrany **katalog danych** i uruchom **Recipe Deployer**, aby zakończyć instalację.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Podczas działania Recipe Deployer musisz podać ostatnie niezbędne informacje, zanim serwer będzie mógł zostać uruchomiony. Wpisz wcześniej utworzony klucz licencyjny FiveM w polu **License Key**. Następnie kliknij **Show/Hide Database Options (Advanced)** i wpisz dane logowania do swojego serwera bazy danych. W tym przypadku potrzebne jest tylko wcześniej ustalone hasło dla użytkownika **root**. Pozostałe ustawienia mogą pozostać bez zmian. Sprawdź wpisane dane i kliknij **Run Recipe**, aby rozpocząć proces.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Konfiguracja zapory sieciowej
Aby Twój serwer był dostępny publicznie, musisz zmienić reguły przekierowania portów dla portów, z których korzysta proces serwera dedykowanego. Możesz to zrobić albo bezpośrednio przez polecenia Powershell, co jest łatwiejsze, albo standardowo przez panel Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Przez Powershell" default>

Otwórz wyszukiwarkę Windows i wpisz **Powershell**. Pamiętaj, aby kliknąć prawym przyciskiem i wybrać **Uruchom jako administrator**, aby mieć odpowiednie uprawnienia i wszystko działało poprawnie.

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

Użyj wyszukiwarki Windows, aby otworzyć **Ustawienia zapory Windows z zaawansowanym zabezpieczeniem**. Może być konieczne kliknięcie **Zaawansowane ustawienia**, aby otworzyć odpowiednie okno, jeśli otworzysz podstawową stronę zapory Windows.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Musisz utworzyć nowe reguły dla swojego serwera FiveM. Zrób to, klikając na reguły przychodzące i wychodzące, jak opisano poniżej, i dodaj je dla następujących protokołów i portów:
- TCP przychodzące i wychodzące: 30120
- UDP przychodzące i wychodzące: 30120

Jeśli potrzebujesz pomocy, skorzystaj z naszego poradnika [Przekierowanie portów (zapora)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Podsumowanie

Pomyślnie zainstalowałeś i skonfigurowałeś serwer FiveM dedykowany na swoim serwerze dedykowanym. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />