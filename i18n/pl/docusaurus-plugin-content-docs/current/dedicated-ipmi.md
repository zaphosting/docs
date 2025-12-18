---
id: dedicated-ipmi
title: "Serwer dedykowany: Zarządzanie serwerem przez IPMI"
description: "Dowiedz się, jak w pełni zarządzać swoim Enterprise Serwerem dedykowanym za pomocą IPMI dla płynnej kontroli i monitoringu → Sprawdź teraz"
sidebar_label: IPMI
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Nasze serwery dedykowane AMD Ryzen są zarządzane przez **Supermicro IPMI**, potężne i sprawdzone rozwiązanie do zarządzania poza pasmem, stworzone z myślą o profesjonalnych środowiskach serwerowych. W przeciwieństwie do naszych konfiguracji opartych na Intel, które korzystają z HPE iLO, platforma AMD Ryzen wykorzystuje sprzęt Supermicro i dlatego oferuje IPMI jako natywne narzędzie zarządzania.

Supermicro IPMI zapewnia pełną zdalną kontrolę nad serwerem, niezależnie od stanu systemu operacyjnego. Możesz włączyć lub wyłączyć system, zrestartować go, monitorować stan sprzętu, mieć dostęp do sensorów oraz korzystać z konsoli zdalnej, by pracować bezpośrednio na serwerze, jakbyś był na miejscu. To gwarantuje maksymalną kontrolę, szybkie reakcje i niezawodne zarządzanie nawet w krytycznych sytuacjach.


## Dostęp do IPMI
Otwórz panel główny swojego ZAP Serwera dedykowanego w wybranej przeglądarce. Znajdziesz tam już najważniejsze informacje o swoim IPMI.
Aby aktywować IPMI, po prostu kliknij **Aktywuj IPMI**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dXjjzc65gCDsDdx/preview)

Pamiętaj, że może to potrwać kilka sekund, zanim IPMI będzie w pełni dostępne. 
Gdy system uruchomi interfejs zarządzania i będzie on dostępny, zobaczysz dane do logowania.
Aby otworzyć IPMI, kliknij wyświetlony adres IP i zaloguj się przy użyciu podanych danych.



## Przegląd

Ciekawi Cię, jak zbudowany jest interfejs zarządzania IPMI i do czego służy każdy jego obszar? Ten przegląd przedstawia różne strony interfejsu i pokazuje, jak zorganizowane są monitoring, wgląd w sprzęt i zdalne zarządzanie.

To przewodnik startowy, który pomoże Ci poznać środowisko IPMI i zrozumieć, jak poszczególne widoki współpracują, by dać pełną kontrolę i widoczność nad serwerem.

### Panel główny

Daje skondensowany przegląd aktualnego stanu serwera i kluczowych funkcji zarządzania. Wyświetlane są informacje systemowe, takie jak model sprzętu, wersja BIOS, firmware BMC oraz status operacyjny, dla szybkiego odniesienia.

Sekcja zasilania pokazuje aktualny stan zasilania i odczyty zużycia energii, umożliwiając bezpośrednią kontrolę nad włączaniem, wyłączaniem i restartem, a także dając wgląd w zużycie energii.

Bezpośredni dostęp do konsoli zdalnej jest dostępny z tej strony, pozwalając na pełną zdalną kontrolę klawiatury, obrazu i myszy do zadań takich jak instalacja systemu operacyjnego, rozwiązywanie problemów i konserwacja, niezależnie od stanu działania serwera.

![img](https://screensaver01.zap-hosting.com/index.php/s/MK8wE2HBmKSkafM/preview)

### System

#### Informacje o komponentach

Pokazuje szczegółowy przegląd zainstalowanych komponentów sprzętowych i ich aktualny stan. Informacje obejmują CPU, moduły pamięci, zasilacze, dostarczanie energii, sieciowe AOC, sensory i elementy chłodzenia.

Każda sekcja prezentuje szczegóły sprzętowe, takie jak model, konfiguracja i stan operacyjny. Wskaźniki statusu pozwalają szybko zidentyfikować zdrowe komponenty oraz ostrzeżenia lub awarie.

![img](https://screensaver01.zap-hosting.com/index.php/s/SwNfo9DkCsLSZ7n/preview)

#### Dziennik zdarzeń zdrowotnych

Wyświetla zdarzenia systemowe rejestrowane przez kontroler zarządzania, tworząc chronologiczną historię aktywności sprzętowych i zdrowotnych. Wpisy obejmują zdarzenia zasilania, procesy rozruchu, przekroczenia progów sensorów, ostrzeżenia temperaturowe, nieregularności napięcia i błędy sprzętowe.

![img](https://screensaver01.zap-hosting.com/index.php/s/GfKiZZRno6AY3Se/preview)

#### Monitorowanie pamięci masowej

Daje przegląd podłączonych urządzeń pamięci masowej i ich aktualnego stanu operacyjnego. Informacje obejmują wykryte dyski, typ interfejsu, pojemność i wskaźniki zdrowia raportowane przez kontroler i dostępne sensory.

![img](https://screensaver01.zap-hosting.com/index.php/s/wr5JCqGj7bmqizs/preview)



### Konfiguracja

#### Usługi kont

Wyświetla listę istniejących kont użytkowników wraz z przypisanymi rolami i poziomami uprawnień. Strona ma charakter informacyjny, pozwalając zobaczyć, które konta mają dostęp do interfejsu zarządzania.

![img](https://screensaver01.zap-hosting.com/index.php/s/zic5k7yftMjBFD7/preview)

#### Powiadomienia

Pokazuje aktualną konfigurację powiadomień systemowych i obsługi alertów. Ta sekcja wskazuje, które typy zdarzeń mogą wywoływać powiadomienia, takie jak awarie sprzętu, przekroczenia progów temperatury, problemy z zasilaniem czy ostrzeżenia sensorów.

![img](https://screensaver01.zap-hosting.com/index.php/s/X46mcTArtEda3ef/preview)

#### Sieć

Prezentuje konfigurację sieciową interfejsu zarządzania. Obejmuje przypisany adres IP, maskę podsieci, bramę, adres MAC oraz aktualny status połączenia portu sieciowego IPMI.

![img](https://screensaver01.zap-hosting.com/index.php/s/jHfKc9fxJXEzNJs/preview)

#### Wirtualne media

Pozwala na korzystanie z obrazów mediów zdalnych przez interfejs zarządzania. Pokazuje status zamontowanych wirtualnych mediów, takich jak obrazy ISO czy zdalne urządzenia pamięci podłączone do serwera.

Wirtualne media można wykorzystać do uruchomienia systemu, instalacji systemu operacyjnego lub wykonania zadań odzyskiwania i konserwacji bez fizycznego dostępu do sprzętu.

![img](https://screensaver01.zap-hosting.com/index.php/s/bXYMP8xne8CyRLW/preview)

#### Ustawienia BMC

Pokazuje szczegóły konfiguracji Baseboard Management Controller. Ta sekcja zawiera informacje o wersji firmware, danych identyfikacyjnych systemu oraz ogólnym zachowaniu kontrolera.

![img](https://screensaver01.zap-hosting.com/index.php/s/9FcXmeyfiSQWJwx/preview)

### Zdalne sterowanie

Zapewnia dostęp do funkcji używanych do bezpośredniej zdalnej interakcji z serwerem. Sekcja zawiera opcje kontroli zasilania, takie jak włączanie, wyłączanie, reset i bezpieczne wyłączanie.

Jest też punktem startowym do funkcji zdalnego zarządzania, które pozwalają na interakcję z systemem niezależnie od stanu systemu operacyjnego.

![img](https://screensaver01.zap-hosting.com/index.php/s/JWKfcCkAQSMHxFq/preview)


### Konserwacja

#### Zarządzanie firmware

Daje wgląd w poziom firmware środowiska zarządzania, w tym aktywny firmware BMC i powiązane komponenty. Można przeglądać wersje firmware i ich aktualny stan, by potwierdzić spójność stosu zarządzania. Aktualizacje lub modyfikacje są celowo niedostępne dla klientów.

![img](https://screensaver01.zap-hosting.com/index.php/s/DA2HJAK8twGqYYK/preview)



#### Dziennik zdarzeń konserwacyjnych

Rejestruje działania związane z konserwacją i operacje systemowe wykonywane przez interfejs zarządzania. Zalogowane wpisy obejmują zmiany konfiguracji, operacje firmware, resetowanie i działania administracyjne.

![img](https://screensaver01.zap-hosting.com/index.php/s/FqC3EdagiiS5zAG/preview)



## Typowe problemy, wskazówki i triki

- **Serwer nie uruchamia się lub zatrzymuje podczas POST:**
   Jeśli serwer nie kończy procesu rozruchu lub zatrzymuje się podczas POST, otwórz konsolę zdalną, aby zidentyfikować dokładny etap zatrzymania. Możesz tam zobaczyć komunikaty inicjalizacji sprzętu lub błędy.
   Wykonaj cykl zasilania, wymuszając wyłączenie na kilka sekund, a następnie ponowne włączenie serwera. Jeśli system nadal się nie uruchamia, skontaktuj się z supportem.

- **Konsola zdalna się nie otwiera lub pozostaje czarna:**
   Upewnij się, że sesja konsoli zdalnej nie jest już używana przez inne połączenie. Zamknij istniejące sesje i spróbuj ponownie.
   Czasem odświeżenie przeglądarki lub ponowne otwarcie konsoli rozwiązuje problemy z ładowaniem. Jeśli problem się utrzymuje, sprawdź, czy serwer jest włączony i dostępny.

- **Wirtualne media ISO nie są wykrywane:**
   Sprawdź, czy źródło ISO jest dostępne i czy plik można otworzyć bezpośrednio, np. w przeglądarce.
   Upewnij się, że wirtualne media są poprawnie zamontowane i zrestartuj serwer po dołączeniu ISO. Sprawdź też kolejność bootowania, aby wirtualne CD/DVD miało priorytet.

- **Serwer długo się uruchamia:**
   Długie czasy rozruchu są normalne dla sprzętu klasy enterprise. Inicjalizacja sprzętu, kontrole kontrolera i trening pamięci mogą trwać kilka minut, zwłaszcza po pełnym cyklu zasilania.

- **Interfejs IPMI jest chwilowo niedostępny:**
   Po zmianach konfiguracji lub dłuższej nieaktywności interfejs zarządzania może być tymczasowo niedostępny. Odczekaj kilka minut i spróbuj ponownie.
   Jeśli dostęp nie wraca, skontaktuj się z supportem, aby zweryfikować status interfejsu zarządzania.



## Podsumowanie

Po dokładnym przeczytaniu tego poradnika zarządzanie Twoim serwerem będzie dużo prostsze. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem supportu, który jest do Twojej dyspozycji codziennie! 🙂