---
id: dedicated-linux-fivem
title: "Serwer dedykowany: Konfiguracja FiveM Dedicated Server na Linux (Interfejs GS/TS3)"
description: "Dowiedz się, jak skonfigurować i uruchomić własny FiveM Dedicated Server z txAdmin dla płynnej rozgrywki multiplayer → Sprawdź teraz"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Wprowadzenie
Masz serwer dedykowany i chcesz zainstalować oraz prowadzić własny FiveM Dedicated Server z txAdmin? Trafiłeś idealnie! Poniżej wyjaśnimy wszystkie niezbędne kroki, jak go zainstalować, skonfigurować i na co zwrócić uwagę.

:::warning  Wybrany i zainstalowany system operacyjny
Zakładamy, że wybrałeś i zainstalowałeś już system operacyjny na swoim serwerze dedykowanym. Jeśli jeszcze tego nie zrobiłeś, najpierw wykonaj kroki z [Pierwszej konfiguracji](dedicated-setup.md) dla serwerów dedykowanych.
:::



## Przygotowanie

Aby skonfigurować serwer FiveM, potrzebne są pewne przygotowania, które muszą zostać wykonane zanim zaczniesz właściwą instalację FiveM Dedicated Server.


### Konfiguracja bazy danych

Dla naszej opcji interfejsu GS/TS3 zapewniamy już własne bazy danych w pakiecie. Jeśli jednak wolisz postawić własny serwer bazy danych i bazę, polecamy zerknąć na poradnik [Instalacja bazy danych](dedicated-linux-databases.md). 

:::warning
Jeśli korzystasz z własnej bazy danych, podczas konfiguracji txAdmin musisz podmienić domyślne dane bazy na swoje.
:::



### Instalacja interfejsu GS/TS3
Dzięki przyjaznemu interfejsowi GS/TS3 możesz zainstalować swój FiveM Dedicated Server kilkoma kliknięciami. Nie potrzebujesz żadnej wiedzy technicznej. Instalacja wszystkich potrzebnych pakietów, plików serwera i samej gry jest w pełni zautomatyzowana, co oszczędza Twój czas i nerwy.

:::warning
Funkcja interfejsu GS/TS3 działa na następujących systemach operacyjnych:

- Debian: 10, 11
- Ubuntu: 20.04

(*) Pracujemy już nad wsparciem dla innych i nowszych systemów oraz wersji.
:::

Jeśli jeszcze nie znasz interfejsu GS/TS3, polecamy zajrzeć do naszego poradnika [Interfejs GS/TS3](dedicated-linux-gs-interface.md). 

Jeśli masz już zainstalowany interfejs GS/TS3, otwórz nowo utworzoną usługę serwera gier. Następnie wybierz grę. Przejdź do zakładki **Gry**, kliknij na dostępne gry, wyszukaj txAdmin i kliknij przycisk instalacji. 

![img](https://screensaver01.zap-hosting.com/index.php/s/jJaHrkd7LQAHx46/download)




### Utwórz klucz licencyjny FiveM Server

Każdy serwer FiveM wymaga własnego klucza licencyjnego, którym zarządza się przez nowe [Cfx.re Portal](http://portal.cfx.re/). Klucz licencyjny jest powiązany z Twoim kontem Cfx.re. Zaloguj się na stronie, przejdź do kategorii **Server** i kliknij przycisk **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguracja

Teraz możesz zacząć konfigurować serwer FiveM i txAdmin. Otwórz panel główny swojego serwera gier. Link i dane logowania do instancji txAdmin znajdziesz w sekcji txAdmin. Otwórz go i zaloguj się.

![img](https://screensaver01.zap-hosting.com/index.php/s/W5xoFtgfZkeZFgQ/preview)

### Konfiguracja txAdmin

Podczas konfiguracji txAdmin Twój własny serwer FiveM zostanie zainstalowany i skonfigurowany w pięciu krokach. Postępuj zgodnie z instrukcjami w interfejsie txAdmin i najpierw zdefiniuj **nazwę serwera**. Następnie wybierz pożądany **typ serwera**. W tym przykładzie pokazujemy instalację serwera FiveM z preinstalowanym QBCore.

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

Pomyślnie zainstalowałeś i skonfigurowałeś usługę FiveM Dedicated Server na swoim serwerze dedykowanym. W razie dalszych pytań lub pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂



