---
id: vserver-one-click-apps-installer
title: "VPS: Instalator Aplikacji One Click"
description: "Wdrażaj aplikacje za pomocą Instalatora Aplikacji One Click na VPS, zarządzaj projektami przez interfejs webowy i korzystaj z Coolify do zaawansowanego zarządzania aplikacjami -> Dowiedz się więcej"
sidebar_label: Instalator Aplikacji One Click
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Instalator Aplikacji One Click pozwala przeglądać rozbudowany katalog aplikacji i wdrażać je bezpośrednio z panelu webowego Twojego VPS. W tym poradniku dowiesz się, jak przygotować serwer, wybrać odpowiedni typ instalacji, instalować i zarządzać aplikacjami oraz korzystać z zaawansowanych ustawień i narzędzi do rozwiązywania problemów, gdy zajdzie taka potrzeba.

![img](https://screensaver01.zap-hosting.com/index.php/s/GDwkwA8Mi4gHS7D/preview)

<InlineVoucher />

## Przygotowanie

Zanim użyjesz Instalatora Aplikacji One Click, Twój VPS musi spełniać minimalne wymagania i korzystać z obsługiwanego systemu operacyjnego.

:::info Minimalne Wymagania
Funkcja aplikacji wymaga, aby Twój VPS był online i miał wystarczające zasoby do stabilnego działania zarówno usług platformy, jak i zainstalowanych aplikacji.
:::

| Wymaganie | Minimum | Zalecane |
| --- | --- | --- |
| Status serwera | Online | Online |
| Pamięć dyskowa | 30 GB | 50 GB |
| Pamięć RAM | 2 GB | 4 GB |
| CPU | 2 rdzenie | 4 rdzenie |
| System operacyjny | Debian lub Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Zalecany Świeży System Operacyjny
Zdecydowanie zalecamy instalację funkcji aplikacji na świeżo zainstalowanym systemie operacyjnym. Pomaga to uniknąć konfliktów z istniejącymi usługami, zajętymi portami, konfiguracjami Dockera lub niestandardowymi ustawieniami już obecnymi na serwerze.
:::

Jeśli musisz przeinstalować VPS przed kontynuacją, użyj świeżego, obsługiwanego obrazu Debian lub Ubuntu LTS z panelu zarządzania VPS.

## Dostęp do Instalatora Aplikacji One Click

Otwórz swój VPS w panelu webowym ZAP-Hosting i znajdź sekcję One Click Apps. Stamtąd możesz rozpocząć wstępną konfigurację, a później wrócić, by zarządzać wszystkimi aplikacjami zainstalowanymi na serwerze.

Przy pierwszym uruchomieniu tej funkcji musisz wybrać, jak platforma ma zostać zainstalowana na Twoim VPS.

## Wybór Typu Instalacji

Możesz wybrać pełną instalację lub instalację tylko węzła. Właściwa opcja zależy od tego, czy VPS ma hostować zarówno panel zarządzania, jak i aplikacje, czy tylko działać jako powiązany węzeł dla innego panelu.

### Pełna Instalacja

Wybierz **Pełną Instalację**, jeśli chcesz skonfigurować serwer z panelem i samym serwerem jako węzłem. To zalecana opcja dla początkujących i większości standardowych wdrożeń.

Dzięki tej metodzie możesz:

- wdrażać aplikacje z katalogu aplikacji
- zarządzać projektami i środowiskami
- organizować wszystkie aplikacje w jednym miejscu
- korzystać z zintegrowanych narzędzi zarządzania przez interfejs webowy
- mieć dostęp do zaawansowanego panelu w razie potrzeby

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Zalecane dla Większości Użytkowników
Jeśli korzystasz z funkcji aplikacji po raz pierwszy, wybierz pełną instalację. To najprostsza konfiguracja i zapewnia pełne zarządzanie bezpośrednio z panelu webowego ZAP-Hosting.
:::

### Instalacja Tylko Węzła

Wybierz **Instalację Tylko Węzła**, jeśli chcesz, aby ten VPS działał wyłącznie jako węzeł. Możesz go wtedy połączyć z innym serwerem VPS lub zewnętrzną instancją panelu.

Ta opcja jest przydatna, jeśli chcesz:

- skalować infrastrukturę na wiele VPS-ów
- scentralizować zarządzanie na jednym panelu
- podłączyć ten serwer do istniejącego wdrożenia
- rozbudować istniejącą konfigurację multi-węzłową

:::note Zaawansowana Opcja Wdrożenia
Instalacja tylko węzła jest przeznaczona dla użytkowników, którzy mają już inną instancję panelu lub chcą połączyć ten serwer z zewnętrznym środowiskiem.
:::

## Instalacja Funkcji Aplikacji

Po wybraniu typu instalacji rozpocznij konfigurację z poziomu panelu webowego. Początkowa instalacja zwykle trwa tylko kilka minut.

W trakcie tego procesu na Twoim VPS zostaną wdrożone usługi platformy wymagane do działania funkcji One Click Apps. Po zakończeniu katalog aplikacji i sekcje zarządzania staną się dostępne w panelu webowym.

:::info Przebieg Instalacji
Szczegóły postępu instalacji mogą się różnić w zależności od wydajności VPS, stanu systemu operacyjnego i warunków sieciowych. Jeśli instalacja nie zakończy się pomyślnie, sprawdź sekcję rozwiązywania problemów w dalszej części poradnika.
:::

## Przeglądanie Katalogu Aplikacji

Po zakończeniu instalacji możesz otworzyć katalog aplikacji i przeglądać dostępne aplikacje. Katalog zawiera ponad 300 gotowych do wdrożenia aplikacji i oferuje filtrowanie, które pomoże Ci szybko znaleźć właściwą aplikację.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Wyszukiwanie i Filtrowanie Aplikacji

W katalogu możesz wyszukiwać aplikacje po nazwie i filtrować je według kategorii. To pomaga zawęzić listę dostępnych aplikacji w stylu sklepu i znaleźć odpowiedni cel wdrożenia dla Twojego projektu.

Typowe działania to:

- wyszukiwanie po nazwie aplikacji
- filtrowanie według kategorii
- przeglądanie dostępnych wpisów aplikacji
- wybór aplikacji do wdrożenia

Ten sposób pracy jest szczególnie przydatny, gdy zarządzasz wieloma aplikacjami lub porównujesz różne usługi przed instalacją.

### Rozpoczęcie Instalacji Aplikacji

Po wybraniu aplikacji z katalogu rozpocznij instalację przez panel webowy. W zależności od aplikacji może być konieczne podanie wartości takich jak:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Te symbole zastępcze oznaczają wartości specyficzne dla Twojego wdrożenia. Na przykład `[your_domain]` powinno zostać zastąpione domeną, której chcesz użyć dla aplikacji.

:::tip Projekty i Środowiska
Używaj projektów i środowisk, aby utrzymać porządek w swoich wdrożeniach. Jest to szczególnie pomocne, gdy hostujesz wiele aplikacji, testujesz wersje lub oddzielasz środowiska produkcyjne od testowych.
:::

## Zarządzanie Zainstalowanymi Aplikacjami

Po wdrożeniu zainstalowane aplikacje są wyświetlane w sekcji zarządzania panelu webowego. Stąd możesz monitorować i kontrolować swoje usługi bez konieczności ręcznej pracy z kontenerami.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Dostępne Akcje Zarządzania

Sekcja z zainstalowanymi aplikacjami pozwala wykonywać typowe operacje cyklu życia aplikacji bezpośrednio z panelu webowego.

| Akcja | Cel |
| --- | --- |
| Start | Uruchamia zatrzymaną aplikację |
| Stop | Zatrzymuje działającą aplikację |
| Sprawdź logi | Otwiera logi aplikacji do diagnostyki |
| Reinstaluj | Ponownie wdraża aplikację |

Te narzędzia ułatwiają zarządzanie wszystkimi aplikacjami z jednego miejsca, szczególnie jeśli chcesz prostą kontrolę przez web zamiast ręcznej administracji w terminalu.

### Organizacja Projektów i Środowisk

Projekty i środowiska pomagają jasno uporządkować Twoje wdrożenia. Możesz ich używać do rozdzielenia:

- aplikacji prywatnych i produkcyjnych
- środowisk testowych i produkcyjnych
- wdrożeń dla różnych klientów lub zespołów
- różnych stacków na tym samym VPS

Ta organizacja staje się coraz ważniejsza, gdy kolekcja aplikacji w sklepie rośnie, a Ty zarządzasz większą liczbą usług na jednym lub wielu węzłach.

## Domeny, Dostęp w Chmurze i SSL

Funkcja One Click Apps wspiera niestandardowe domeny i integrację z ZAP Cloud. Pozwala to na bezpieczne udostępnianie aplikacji i automatyczne wystawianie certyfikatów SSL dla Twoich wdrożeń.

:::info Obsługa Domen i SSL
Możesz używać własnych domen dla aplikacji i korzystać z automatycznego wystawiania certyfikatów SSL tam, gdzie jest to wspierane przez konfigurację platformy.
:::

Przy przypisywaniu domeny upewnij się, że Twoje rekordy DNS wskazują na `[your_server_ip]`. Jeśli domena nie jest poprawnie skonfigurowana, aplikacja może nie być dostępna z internetu.

| Wartość | Opis |
| --- | --- |
| `[your_domain]` | Domena lub subdomena przypisana do aplikacji |
| `[your_server_ip]` | Publiczny adres IP Twojego VPS |

:::caution DNS musi wskazywać na Twój VPS
Jeśli DNS dla `[your_domain]` nie wskazuje na `[your_server_ip]`, walidacja domeny i dostęp do aplikacji mogą się nie powieść.
:::

## Korzystanie z Zaawansowanych Ustawień

Zaawansowani użytkownicy mogą uzyskać dostęp do dodatkowych funkcji przez zewnętrzny panel dostępny w sekcji zaawansowanych ustawień.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

To przydatne, jeśli potrzebujesz głębszej personalizacji, rozszerzonej kontroli wdrożeń lub bezpośredniego dostępu do funkcji wykraczających poza standardowy interfejs webowy.

### Ważne Ograniczenie Wsparcia

:::caution Zakres wsparcia dla zaawansowanego panelu
Zaawansowani użytkownicy mogą korzystać z zewnętrznego panelu Coolify dla dodatkowej personalizacji i funkcji. Jednak wsparcie ogranicza się do panelu webowego ZAP-Hosting. Jeśli wprowadzisz zmiany poza panelem webowym, pomoc w zakresie tych modyfikacji może nie być dostępna.
:::

### Kiedy Korzystać z Zaawansowanego Panelu

Możesz chcieć użyć zaawansowanego panelu, jeśli potrzebujesz:

- bardziej szczegółowej personalizacji wdrożeń
- bezpośrednich przepływów pracy łączenia węzłów
- zaawansowanej konfiguracji aplikacji
- zarządzania na poziomie panelu wykraczającego poza uproszczony interfejs

Jeśli stracisz dostęp lub integracja przestanie odpowiadać, skorzystaj najpierw z narzędzi do rozwiązywania problemów opisanych poniżej, zanim zaczniesz ręczne zmiany.

## Łączenie Węzłów

Jeśli wybrałeś instalację tylko węzła, możesz połączyć ten VPS z innym serwerem VPS lub zewnętrzną instancją panelu. Pozwala to skalować infrastrukturę i zarządzać wieloma węzłami z jednego miejsca.

Łączenie węzłów jest przydatne, gdy chcesz:

- rozproszyć aplikacje na kilka VPS-ów
- scentralizować zarządzanie
- zwiększyć pojemność bez tworzenia izolowanych wdrożeń
- połączyć się z zewnętrznym środowiskiem panelu

:::note Łączenie z zewnętrznym panelem
Możesz połączyć swój węzeł z innym VPS lub zewnętrzną instancją panelu. Szczegóły łączenia zależą od docelowego środowiska już używanego.
:::

## Rozwiązywanie Problemów ze Stanem Degradacji

Jeśli panel webowy pokazuje stan degradacji, oznacza to, że platforma nie może się połączyć lub pobrać danych z instancji obsługującej funkcję One Click Apps. Postępuj według kroków rozwiązywania problemów w kolejności chronologicznej.

### Wskaźniki Statusu

Popup rozwiązywania problemów może pokazywać takie wskaźniki jak:

| Status | Znaczenie |
| --- | --- |
| Status Coolify: Aktywny | Usługa panelu działa |
| Status API: Dostępne | API jest aktualnie osiągalne |
| Status Usługi: Online | Twój VPS jest online |

Jeśli jedna lub więcej części nie działa poprawnie, kontynuuj poniższe kroki.

### Krok 1: Potwierdź, że VPS jest Online

Najpierw upewnij się, że Twój VPS jest online w panelu webowym ZAP-Hosting. Jeśli serwer jest offline, platforma aplikacji nie będzie działać.

### Krok 2: Odśwież Status

Użyj akcji **Odśwież Status**, aby ponownie wykonać kontrolę stanu z najnowszymi danymi. Może to rozwiązać tymczasowe problemy z łącznością.

:::tip Tymczasowe problemy z łącznością
Stan degradacji może być spowodowany krótkotrwałym problemem komunikacyjnym. Odświeżenie statusu to najszybszy pierwszy krok.
:::

### Krok 3: Uruchom ponownie Dockera

Jeśli status nadal jest zdegradowany, użyj akcji **Restart Docker**. To wymusi ponowne uruchomienie instancji platformy. Po pomyślnym restarcie odczekaj `1-2 minuty` i ponownie odśwież status.

:::caution Restart usługi
Restart Dockera może chwilowo przerwać działanie uruchomionych aplikacji podczas ponownego uruchamiania usług.
:::

### Krok 4: Odśwież Dane Logowania

Na koniec użyj **Odśwież Dane Logowania**. Jest to szczególnie ważne, jeśli status jest online, ale funkcje panelu webowego, takie jak instalacja aplikacji, nie działają.

Ta akcja:

- **nie** usuwa Twoich danych
- odświeża dane logowania użytkownika root
- odświeża token API używany przez panel webowy
- automatycznie aktualizuje dane logowania panelu po sukcesie

:::info Bezpieczne odświeżanie danych logowania
Odświeżanie danych logowania nie usuwa zainstalowanych aplikacji ani danych wdrożeniowych. Odnawia tylko dane potrzebne do dostępu i komunikacji.
:::

### Kiedy Kontaktować się z Supportem

Jeśli problem nadal występuje po wykonaniu wszystkich kroków, utwórz zgłoszenie do supportu przez stronę ZAP-Hosting.

## Najlepsze Praktyki

Aby utrzymać Instalator Aplikacji One Click stabilnym i łatwym w zarządzaniu, stosuj się do poniższych zaleceń:

| Najlepsza praktyka | Powód |
| --- | --- |
| Używaj świeżej instalacji systemu | Zmniejsza konflikty z istniejącymi usługami i portami |
| Spełniaj zalecane wymagania zasobów | Poprawia wydajność i stabilność |
| Organizuj aplikacje w projekty i środowiska | Ułatwia zarządzanie wdrożeniami |
| Konfiguruj DNS przed przypisaniem domen | Zapobiega problemom z dostępem i SSL |
| Ostrożnie korzystaj z zaawansowanych ustawień | Unikasz nieobsługiwanych, niestandardowych zmian |

:::tip Utrzymuj porządek w wdrożeniach
Jeśli planujesz hostować wiele aplikacji, stwórz jasny schemat nazewnictwa dla `[your_project_name]`, `[your_environment_name]` i `[your_app_name]` przed wdrożeniem pierwszych usług.
:::

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś i użyłeś Instalatora Aplikacji One Click na VPS do wdrażania i zarządzania aplikacjami na swoim serwerze. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem supportu, który jest dostępny codziennie, by Ci pomóc!

<InlineVoucher />