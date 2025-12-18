---
id: fivem-txadmin-setup
title: "FiveM: Konfiguracja txAdmin"
description: "Dowiedz się, jak łatwo zarządzać i monitorować swój serwer FiveM dzięki darmowemu, pełnoprawnemu panelowi webowemu txAdmin → Sprawdź teraz"
sidebar_label: Konfiguracja txAdmin
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

txAdmin to całkowicie darmowy, pełnoprawny panel webowy do zarządzania i monitorowania Twojego serwera FiveM. Oferuje szeroki wachlarz funkcji, które sprawiają, że zarządzanie serwerem FiveM jest dziecinnie proste. Konfiguracja txAdmin jest całkowicie bezpłatna — zacznij swoją przygodę z najbardziej prostym, a zarazem funkcjonalnym panelem webowym dla serwerów FiveM.

<YouTube videoId="n3RoiExrvN0" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/AeKiyc9Jtat5ygE/preview" title="Konfiguracja serwera txAdmin" description="Wolisz zobaczyć wszystko w akcji, żeby lepiej zrozumieć? Mamy to! Zanurz się w naszym wideo, które wszystko Ci wyjaśni. Niezależnie czy się spieszysz, czy po prostu lubisz chłonąć wiedzę w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Dostęp

Link i dane dostępowe do txAdmin znajdziesz w sekcji txAdmin w panelu głównym swojego serwera gier. To właśnie tam znajdziesz wszystkie informacje potrzebne, by łatwo wejść do interfejsu txAdmin i rozpocząć konfigurację.

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

Skopiuj dane użytkownika i hasło, a następnie kliknij w link (adres IP:port), aby wejść do interfejsu txAdmin i się zalogować. Interfejs txAdmin otworzy się w nowym oknie, gdzie musisz się zalogować podanymi danymi.

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Konfiguracja

Po pomyślnym zalogowaniu możesz zacząć konfigurować txAdmin i swój serwer. Powinieneś zobaczyć stronę główną txAdmin (panel główny). W lewym górnym rogu pojawi się komunikat, że serwer wymaga jeszcze konfiguracji. Kliknij **Przejdź do strony konfiguracji**, aby rozpocząć proces.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Powitanie i nazwa serwera

Na początek zdefiniuj nazwę serwera, której chcesz używać w swoim projekcie. Ta nazwa nie jest przeznaczona do listy serwerów, a wyłącznie do użytku w interfejsie txAdmin oraz w wiadomościach na czacie/Discordzie.

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Typ wdrożenia

W sekcji Typ wdrożenia musisz teraz wybrać, jak chcesz skonfigurować swój serwer. Masz do wyboru: **Popularne szablony**, Dane istniejącego serwera, **Zdalny szablon URL** oraz **Szablon niestandardowy**. Każda z tych opcji zostanie dokładniej wyjaśniona poniżej, abyś mógł wybrać tę, która najlepiej pasuje do Twoich potrzeb.

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Popularny szablon

Popularne szablony to gotowe pakiety, które możesz od razu wykorzystać, co czyni tę opcję najprostszą drogą do uruchomienia serwera FiveM. Jeśli to Twój pierwszy serwer, zdecydowanie polecamy tę opcję. Szablony zawierają wszystkie niezbędne konfiguracje i zasoby, by szybko postawić działający serwer, dzięki czemu możesz skupić się na personalizacji i rozgrywce, zamiast na początkowej konfiguracji. Wystarczy wybrać szablon dopasowany do Twoich potrzeb.

![](https://screensaver01.zap-hosting.com/index.php/s/PSsf22NeebNBRw7/preview)



### Dane istniejącego serwera

Wybierz tę opcję, jeśli wcześniej prowadziłeś serwer z txAdmin i chcesz teraz hostować go u nas. W takim wypadku możesz po prostu przesłać dane serwera przez FTP i podać ścieżkę podczas konfiguracji. Jeśli nie znasz jeszcze podstaw FTP, warto zerknąć na nasz [poradnik dostęp FTP](gameserver-ftpaccess.md). Przeprowadzi Cię on krok po kroku, aby transfer plików serwera przebiegł bezproblemowo i szybko uruchomisz serwer na naszej platformie.

![img](https://screensaver01.zap-hosting.com/index.php/s/KS4raRtHWmmw5iN/preview)





### Zdalny szablon URL

Jeśli chcesz zastosować szablon, który nie jest dostępny bezpośrednio w txAdmin, ta funkcja pozwala wskazać własny przepis przez zdalny URL. Szablon zostanie pobrany i wykonany na Twoim serwerze. Ta opcja jest szczególnie przydatna do wdrażania niestandardowych konfiguracji lub specyficznych setupów, które nie są dostępne w domyślnych opcjach txAdmin. Podając URL, txAdmin automatycznie pobierze i zastosuje szablon, zapewniając konfigurację serwera dokładnie według Twoich wymagań.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Szablon niestandardowy

Ta opcja jest dla użytkowników, którzy już stworzyli własny przepis i chcą go ponownie załadować. Pozwala szybko i łatwo zastosować własne konfiguracje bez konieczności ustawiania wszystkiego od nowa. Wystarczy wybrać istniejący przepis, a txAdmin zajmie się resztą, zapewniając konfigurację serwera dokładnie tak, jak chcesz.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Wdrożenie przepisu

Po wybraniu typu wdrożenia i wykonaniu kolejnych kroków, możesz zakończyć klikając **Przejdź do wdrożenia przepisu**. Tam musisz wykonać ostatnie kroki: **Przejrzyj przepis**, **Wprowadź parametry**, **Uruchom przepis** oraz **Skonfiguruj server.cfg**.

W pierwszym kroku możesz dodatkowo dostosować wybrany lub dodany przepis. Jeśli nie potrzebujesz dalszych zmian, przejdź do kroku 2. Tutaj możesz wpisać swój własny [klucz licencyjny](fivem-licensekey.md) i zweryfikować dane bazy danych. Gdy wszystko będzie gotowe, kliknij **Uruchom przepis**. To może chwilę potrwać. Na koniec możesz dostosować plik konfiguracyjny serwera (`server.cfg`) według potrzeb.

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Na koniec kliknij **Zapisz i uruchom serwer**. To kończy konfigurację txAdmin i możesz już połączyć się ze swoim serwerem.


## Dodatkowe wsparcie

W przypadku pytań dotyczących txAdmin, skontaktuj się z zespołem txAdmin przez ich [oficjalną stronę](https://txadm.in/) lub dołącz do społeczności na [Discordzie](https://discord.gg/txAdmin/). Społeczność i support są gotowi pomóc z każdym problemem czy pytaniem, abyś miał jak najlepsze doświadczenia z zarządzaniem swoim serwerem.

<InlineVoucher />