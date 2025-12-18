---
id: vserver-linux-fivem
title: "VPS: Konfiguracja serwera dedykowanego FiveM na Linux (Interfejs GS/TS3)"
description: "Dowiedz się, jak zainstalować i obsługiwać własny serwer dedykowany FiveM z txAdmin dla płynnej rozgrywki multiplayer → Sprawdź teraz"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Wprowadzenie
Masz VPS i chcesz zainstalować oraz prowadzić własny serwer dedykowany FiveM z txAdmin? Trafiłeś idealnie! Poniżej wyjaśnimy wszystkie niezbędne kroki, jak go zainstalować, skonfigurować i na co zwrócić uwagę.



## Przygotowanie

Aby skonfigurować serwer FiveM, potrzebne są pewne kroki przygotowawcze, które muszą zostać wykonane zanim rozpoczniesz właściwą instalację serwera dedykowanego FiveM.


### Konfiguracja bazy danych

Dla naszej opcji z interfejsem GS/TS3 zapewniamy już własne bazy danych w pakiecie. Jeśli jednak wolisz postawić własny serwer bazy danych i bazę, polecamy zajrzeć do naszego [poradnika Instalacja bazy danych](vserver-linux-databases.md). 

:::warning
Jeśli korzystasz z własnej bazy danych, podczas konfiguracji txAdmin musisz podmienić domyślne dane bazy na swoje własne. 
:::



### Instalacja interfejsu GS/TS3
Dzięki przyjaznemu interfejsowi GS/TS3 możesz zainstalować swój serwer dedykowany FiveM kilkoma kliknięciami. Nie jest wymagana żadna wcześniejsza wiedza. Instalacja wszystkich potrzebnych pakietów, plików serwera oraz samej aplikacji jest w pełni zautomatyzowana, co oszczędza Twój czas i wysiłek.

:::warning
Funkcja interfejsu GS/TS3 działa na następujących systemach operacyjnych:

- Debian: 10, 11
- Ubuntu: 20.04

(*) Pracujemy już nad udostępnieniem innych i nowszych systemów oraz wersji w niedalekiej przyszłości.
:::

Jeśli jeszcze nie znasz interfejsu GS/TS3, polecamy zajrzeć do naszego [poradnika Interfejs GS/TS3](dedicated-linux-gs-interface.md). 

Po zainstalowaniu interfejsu GS/TS3 otwórz nowo utworzoną usługę serwera gier. Następnie wybierz grę, przechodząc do zakładki **Gry**. Kliknij na dostępne gry, wyszukaj txAdmin i kliknij przycisk instalacji. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Utwórz klucz licencyjny serwera FiveM

Każdy serwer FiveM wymaga własnego klucza licencyjnego, który zarządza się przez nowe [Portal Cfx.re](http://portal.cfx.re/). Klucz licencyjny jest powiązany z Twoim kontem Cfx.re. Zaloguj się na stronie, przejdź do kategorii **Server** i kliknij przycisk **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguracja

Teraz możesz zacząć konfigurować serwer FiveM i txAdmin. Otwórz panel główny swojego serwera gier. Link i dane logowania do instancji txAdmin znajdziesz w sekcji txAdmin. Otwórz go i zaloguj się. 

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### Konfiguracja txAdmin

Podczas konfiguracji txAdmin Twój serwer FiveM jest instalowany i konfigurowany w pięciu krokach. Postępuj zgodnie z instrukcjami w interfejsie txAdmin i najpierw zdefiniuj **nazwę serwera**. Następnie wybierz pożądany **typ serwera**. W tym przykładzie pokazujemy instalację serwera FiveM z preinstalowanym QBCore.

W kroku **Deployment Type** wybierz opcję **Popular Recipes**, a następnie **QBCore Framework Template**. Potwierdź wybrany **katalog danych** i uruchom **Recipe Deployer**, aby zakończyć instalację.

![img](https://screensaver01.zap-hosting.com/index.php/s/i7mSNNs29b6QLjz/download)




### Konfiguracja zapory sieciowej

Podczas instalacji serwera FiveM przez interfejs GS/TS3 wszystkie potrzebne przekierowania portów są ustawiane **automatycznie** w zaporze sieciowej. W razie problemów możesz też ustawić przekierowanie portów ręcznie przez SSH, używając poniższych komend: 

```
iptables -A INPUT -p tcp --dport 30120 -j ACCEPT
iptables -A INPUT -p udp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 30120 -j ACCEPT
iptables -A OUTPUT -p udp --dport 30120 -j ACCEPT 
```



## Podsumowanie

Pomyślnie zainstalowałeś i skonfigurowałeś serwer dedykowany FiveM na swoim VPS. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂


<InlineVoucher />