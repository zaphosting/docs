---
id: redm-txadmin-setup
title: "RedM: Konfiguracja txAdmin"
description: "Dowiedz się, jak efektywnie zarządzać i monitorować swój serwer RedM za pomocą w pełni funkcjonalnego panelu webowego txAdmin → Sprawdź teraz"
sidebar_label: Konfiguracja txAdmin
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

txAdmin to całkowicie darmowy, w pełni funkcjonalny panel webowy do zarządzania i monitorowania Twojego serwera RedM. Oferuje szeroki wachlarz funkcji, które sprawiają, że zarządzanie serwerem RedM jest dziecinnie proste. Konfiguracja txAdmin jest całkowicie darmowa — zacznij swoją przygodę z najprostszym, a zarazem funkcjonalnym panelem webowym dla serwera RedM.

<InlineVoucher />

## Dostęp

Link oraz dane dostępowe do txAdmin znajdziesz w sekcji txAdmin na panelu głównym Twojego serwera gier. To właśnie tam znajdziesz wszystkie informacje potrzebne, aby łatwo wejść do interfejsu txAdmin i rozpocząć konfigurację.

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

Skopiuj dane użytkownika i hasło, a następnie kliknij w link (adres IP:port), aby wejść do interfejsu txAdmin i się zalogować. Interfejs txAdmin otworzy się w nowym oknie, gdzie musisz zalogować się podanymi danymi dostępowymi.

![](https://screensaver01.zap-hosting.com/index.php/s/pp8GLQBoX4LoqTA/preview)



## Konfiguracja

Po pomyślnym zalogowaniu możesz zacząć konfigurować txAdmin i swój serwer. Powinieneś zobaczyć stronę główną txAdmin (panel główny). W lewym górnym rogu pojawi się komunikat, że Twój serwer wymaga jeszcze konfiguracji. Kliknij **Przejdź do strony konfiguracji**, aby rozpocząć proces ustawień.

![](https://screensaver01.zap-hosting.com/index.php/s/oXakf3qoJaim7ex/download)



### Powitanie i nazwa serwera

Na początek zdefiniuj nazwę serwera, której chcesz używać w swoim projekcie. Ta nazwa nie będzie widoczna na liście serwerów, służy wyłącznie do użytku w interfejsie txAdmin oraz w wiadomościach na czacie/Discordzie.

![](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)



### Typ wdrożenia

W sekcji Typ wdrożenia musisz teraz wybrać, jak chcesz skonfigurować swój serwer. Masz do wyboru: **Popularne szablony**, Dane istniejącego serwera, **Zdalny szablon URL** oraz **Własny szablon**. Każda z tych opcji zostanie dokładniej wyjaśniona poniżej, abyś mógł wybrać tę, która najlepiej odpowiada Twoim potrzebom.

![](https://screensaver01.zap-hosting.com/index.php/s/52HfyJSNLscApNE/preview)



### Popularne szablony

Popularne szablony to gotowe pakiety, które możesz od razu wykorzystać, co czyni tę opcję najprostszą drogą do uruchomienia serwera RedM. Jeśli to Twój pierwszy serwer, zdecydowanie polecamy tę opcję. Szablony zawierają wszystkie niezbędne konfiguracje i zasoby, aby szybko postawić działający serwer, dzięki czemu możesz skupić się na personalizacji i rozgrywce, zamiast na początkowej konfiguracji. Wystarczy wybrać szablon dopasowany do Twoich potrzeb.

![](https://screensaver01.zap-hosting.com/index.php/s/rrw962gMMpn86fW/preview)



### Dane istniejącego serwera

Ta opcja jest dla Ciebie, jeśli już prowadziłeś serwer z txAdmin i chcesz teraz hostować go u nas. W takim przypadku możesz po prostu przesłać dane serwera przez FTP i wskazać ścieżkę podczas konfiguracji. Jeśli nie znasz jeszcze podstaw korzystania z FTP, warto zerknąć na nasz [poradnik dostęp FTP](gameserver-ftpaccess.md). Przeprowadzi Cię on krok po kroku, aby transfer plików serwera przebiegł bezproblemowo i szybko uruchomisz serwer na naszej platformie.

![img](https://screensaver01.zap-hosting.com/index.php/s/jCZ4DffkkAHA6dj/preview)





### Zdalny szablon URL

Jeśli chcesz zastosować szablon, który nie jest dostępny bezpośrednio w txAdmin, ta funkcja pozwala wskazać własny przepis przez zdalny URL. Szablon zostanie pobrany i wykonany na Twoim serwerze. Ta opcja jest szczególnie przydatna do wdrażania niestandardowych konfiguracji serwera lub specyficznych ustawień, które nie są dostępne w domyślnych opcjach txAdmin. Podając URL, txAdmin automatycznie pobierze i zastosuje szablon, zapewniając konfigurację serwera zgodnie z Twoimi wymaganiami.

![](https://screensaver01.zap-hosting.com/index.php/s/jrGzTGp9FwLc82i/preview)

### Własny szablon

Ta opcja jest przeznaczona dla użytkowników, którzy już stworzyli własny przepis i chcą go ponownie załadować. Pozwala szybko i łatwo zastosować własne konfiguracje bez konieczności ustawiania wszystkiego od nowa. Wystarczy wybrać istniejący przepis, a txAdmin zajmie się resztą, zapewniając, że serwer będzie skonfigurowany dokładnie tak, jak chcesz.

![](https://screensaver01.zap-hosting.com/index.php/s/Z75q5RKakwfpHGy/preview)



### Kreator wdrożenia przepisu

Po wybraniu typu wdrożenia i wykonaniu wskazanych kroków, możesz zakończyć klikając **Przejdź do kreatora wdrożenia przepisu**. Tam musisz wykonać ostatnie kroki: **Przejrzyj przepis**, **Wprowadź parametry**, **Uruchom przepis** oraz **Skonfiguruj server.cfg**.

W pierwszym kroku możesz dodatkowo dostosować wybrany lub dodany przepis. Jeśli nie potrzebujesz żadnych zmian, przejdź do kroku 2. Tutaj możesz wpisać swój własny [klucz licencyjny](redm-licensekey.md) i sprawdzić dane bazy danych. Gdy wszystko będzie gotowe, kliknij **Uruchom przepis**. Ten proces może chwilę potrwać. Na koniec możesz dostosować plik konfiguracyjny serwera (`server.cfg`) według potrzeb.

![](https://screensaver01.zap-hosting.com/index.php/s/wFMD576sBQAAdxZ/download)

Na koniec kliknij **Zapisz i uruchom serwer**. To kończy konfigurację txAdmin i możesz już połączyć się ze swoim serwerem.


## Dodatkowe wsparcie

W przypadku pytań dotyczących txAdmin, skontaktuj się z zespołem txAdmin przez ich [oficjalną stronę](https://txadm.in/) lub dołącz do społeczności na [Discordzie](https://discord.gg/txAdmin/). Społeczność i zespół wsparcia są gotowi pomóc w każdej kwestii związanej z txAdmin, abyś miał jak najlepsze doświadczenia z zarządzaniem swoim serwerem.

<InlineVoucher />