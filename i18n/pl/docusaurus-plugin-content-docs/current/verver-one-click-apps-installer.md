---
id: verver-one-click-apps-installer
title: "VPS: Instalator aplikacji One Click"
description: "Wdrażaj aplikacje za pomocą instalatora One Click Apps na VPS, zarządzaj projektami przez interfejs webowy i korzystaj z Coolify do zaawansowanego zarządzania aplikacjami -> Dowiedz się więcej"
sidebar_label: Instalator One Click Apps
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Instalator One Click Apps pozwala przeglądać rozbudowany katalog aplikacji i wdrażać je bezpośrednio z panelu webowego VPS. W tym poradniku nauczysz się, jak przygotować serwer, wybrać odpowiedni typ instalacji, instalować i zarządzać aplikacjami oraz korzystać z zaawansowanych ustawień i narzędzi do rozwiązywania problemów.

<InlineVoucher />

## Przygotowanie

Przed użyciem instalatora One Click Apps Twój VPS musi spełniać minimalne wymagania i korzystać z obsługiwanego systemu operacyjnego.

:::info Minimalne wymagania
Funkcja aplikacji wymaga, aby Twój VPS był online i miał wystarczające zasoby do niezawodnego uruchomienia zarówno usług platformy, jak i zainstalowanych aplikacji.
:::

| Wymaganie | Minimum | Zalecane |
| --- | --- | --- |
| Status serwera | Online | Online |
| Pamięć dyskowa | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 rdzenie | 4 rdzenie |
| System operacyjny | Debian lub Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Zalecany świeży system operacyjny
Zaleca się instalację funkcji aplikacji na świeżo zainstalowanym systemie operacyjnym. Pomaga to uniknąć konfliktów z istniejącymi usługami, zajętymi portami, konfiguracjami Dockera lub niestandardowymi ustawieniami już obecnymi na serwerze.
:::

Jeśli musisz przeinstalować VPS przed kontynuacją, użyj świeżego, obsługiwanego obrazu Debian lub Ubuntu LTS z panelu zarządzania VPS.

## Dostęp do instalatora One Click Apps

Otwórz swój VPS w panelu webowym ZAP-Hosting i znajdź sekcję One Click Apps. Stamtąd możesz rozpocząć wstępną konfigurację, a później wrócić, aby zarządzać wszystkimi aplikacjami zainstalowanymi na serwerze.

Przy pierwszym uruchomieniu tej funkcji musisz wybrać, jak platforma ma zostać zainstalowana na Twoim VPS.

## Wybór typu instalacji

Możesz wybrać pełną instalację lub instalację tylko węzła. Właściwa opcja zależy od tego, czy VPS ma hostować zarówno panel zarządzania, jak i aplikacje, czy tylko działać jako powiązany węzeł dla innego panelu.

### Pełna instalacja

Wybierz **Pełną instalację**, jeśli chcesz skonfigurować serwer z panelem i samym serwerem jako węzłem. To zalecana opcja dla użytkowników po raz pierwszy i większości standardowych wdrożeń.

Dzięki tej metodzie możesz:

- wdrażać aplikacje z katalogu aplikacji
- zarządzać projektami i środowiskami
- organizować wszystkie aplikacje w jednym miejscu
- korzystać z zintegrowanych narzędzi zarządzania przez interfejs webowy
- uzyskać dostęp do zaawansowanego panelu w razie potrzeby

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Zalecane dla większości użytkowników
Jeśli korzystasz z funkcji aplikacji po raz pierwszy, wybierz pełną instalację. Zapewnia najprostszy setup i pełne zarządzanie bezpośrednio z panelu webowego ZAP-Hosting.
:::

### Instalacja tylko węzła

Wybierz **Instalację tylko węzła**, jeśli chcesz, aby ten VPS działał wyłącznie jako węzeł. Możesz go wtedy połączyć z innym serwerem VPS lub zewnętrzną instancją panelu.

Ta opcja jest przydatna, jeśli chcesz:

- skalować infrastrukturę na wiele VPS-ów
- scentralizować zarządzanie na jednym panelu
- połączyć ten serwer z istniejącym wdrożeniem
- rozbudować istniejącą konfigurację multi-węzłową

:::note Zaawansowana opcja wdrożenia
Instalacja tylko węzła jest przeznaczona dla użytkowników, którzy mają już inną instancję panelu lub chcą podłączyć serwer do zewnętrznego środowiska.
:::

## Instalacja funkcji aplikacji

Po wybraniu typu instalacji rozpocznij konfigurację z poziomu panelu webowego. Początkowa instalacja zwykle trwa tylko kilka minut.

W trakcie tego procesu na VPS wdrażane są usługi platformy wymagane do działania funkcji One Click Apps. Po zakończeniu katalog aplikacji i sekcje zarządzania stają się dostępne w panelu webowym.

:::info Przebieg instalacji
Szczegóły postępu instalacji mogą się różnić w zależności od wydajności VPS, stanu systemu operacyjnego i warunków sieciowych. Jeśli instalacja nie powiedzie się, zapoznaj się z sekcją rozwiązywania problemów w dalszej części poradnika.
:::

## Przeglądanie katalogu aplikacji

Po zakończeniu instalacji możesz otworzyć katalog aplikacji i przeglądać dostępne aplikacje. Katalog zawiera ponad 300 gotowych do wdrożenia aplikacji i umożliwia filtrowanie, aby szybko znaleźć odpowiednią aplikację.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Wyszukiwanie i filtrowanie aplikacji

W katalogu możesz wyszukiwać aplikacje po nazwie i filtrować według kategorii. Pomaga to zawęzić listę dostępnych aplikacji i znaleźć właściwy cel wdrożenia dla Twojego projektu.

Typowe działania to:

- wyszukiwanie po nazwie aplikacji
- filtrowanie według kategorii
- przeglądanie dostępnych wpisów aplikacji
- wybór aplikacji do wdrożenia

Ten sposób pracy jest szczególnie przydatny, jeśli zarządzasz wieloma aplikacjami lub porównujesz różne usługi przed instalacją.

### Rozpoczęcie instalacji aplikacji

Po wybraniu aplikacji z katalogu rozpocznij instalację przez panel webowy. W zależności od aplikacji może być konieczne podanie wartości takich jak:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Te pola to wartości specyficzne dla Twojego wdrożenia. Na przykład `[your_domain]` powinno zostać zastąpione domeną, której chcesz użyć dla aplikacji.

:::tip Projekty i środowiska
Używaj projektów i środowisk, aby utrzymać porządek w wdrożeniach. Jest to szczególnie pomocne, gdy hostujesz wiele aplikacji, testujesz wersje lub oddzielasz środowiska produkcyjne i testowe.
:::

## Zarządzanie zainstalowanymi aplikacjami

Po wdrożeniu zainstalowane aplikacje są wyświetlane w sekcji zarządzania panelu webowego. Stąd możesz monitorować i kontrolować swoje usługi bez konieczności ręcznej pracy z kontenerami.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Dostępne akcje zarządzania

Sekcja z zainstalowanymi aplikacjami pozwala wykonywać typowe operacje cyklu życia bezpośrednio z panelu webowego.

| Akcja | Cel |
| --- | --- |
| Start | Uruchamia zatrzymaną aplikację |
| Stop | Zatrzymuje działającą aplikację |
| Sprawdź logi | Otwiera logi aplikacji do diagnostyki |
| Reinstaluj | Ponownie wdraża aplikację |

Te narzędzia ułatwiają zarządzanie wszystkimi aplikacjami z jednego miejsca, szczególnie jeśli chcesz prostą kontrolę przez przeglądarkę zamiast ręcznej administracji w terminalu.

### Organizacja projektów i środowisk

Projekty i środowiska pomagają jasno uporządkować wdrożenia. Możesz ich używać do rozdzielenia:

- aplikacji prywatnych i produkcyjnych
- środowisk testowych i produkcyjnych
- wdrożeń dla różnych klientów lub zespołów
- różnych stacków na tym samym VPS

Ta organizacja staje się coraz ważniejsza, gdy kolekcja aplikacji w sklepie rośnie i zarządzasz wieloma usługami na jednym lub kilku węzłach.

## Domeny, dostęp do chmury i SSL

Funkcja One Click Apps obsługuje własne domeny i integrację z ZAP Cloud. Pozwala to na bezpieczne udostępnianie aplikacji i automatyczne wystawianie certyfikatów SSL dla wdrożeń.

:::info Obsługa domen i SSL
Możesz używać własnych domen dla aplikacji i korzystać z automatycznego wystawiania certyfikatów SSL tam, gdzie platforma to wspiera.
:::

Przy przypisywaniu domeny upewnij się, że rekordy DNS wskazują na `[your_server_ip]`. Jeśli domena nie jest poprawnie skonfigurowana, aplikacja może być niedostępna z internetu.

| Wartość | Opis |
| --- | --- |
| `[your_domain]` | Domenę lub subdomenę przypisaną do aplikacji |
| `[your_server_ip]` | Publiczny adres IP Twojego VPS |

:::caution DNS musi wskazywać na Twój VPS
Jeśli DNS dla `[your_domain]` nie wskazuje na `[your_server_ip]`, walidacja domeny i dostęp do aplikacji mogą się nie powieść.
:::

## Korzystanie z zaawansowanych ustawień

Zaawansowani użytkownicy mogą uzyskać dostęp do dodatkowej funkcjonalności przez zewnętrzny panel dostępny w sekcji zaawansowanych ustawień.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Jest to przydatne, jeśli potrzebujesz głębszej personalizacji, rozszerzonej kontroli wdrożeń lub bezpośredniego dostępu do funkcji wykraczających poza standardowy interfejs webowy.

### Ważne ograniczenie wsparcia

:::caution Zakres wsparcia dla zaawansowanego panelu
Zaawansowani użytkownicy mogą korzystać z zewnętrznego panelu Coolify dla dodatkowej personalizacji i funkcji. Jednak wsparcie ogranicza się do panelu webowego ZAP-Hosting. Jeśli dokonasz zmian poza panelem webowym, pomoc w zakresie tych modyfikacji może nie być dostępna.
:::

### Kiedy używać zaawansowanego panelu

Możesz chcieć użyć zaawansowanego panelu, jeśli potrzebujesz:

- bardziej szczegółowej personalizacji wdrożenia
- bezpośrednich przepływów pracy łączenia węzłów
- zaawansowanej konfiguracji aplikacji
- zarządzania na poziomie panelu wykraczającego poza uproszczony interfejs

Jeśli stracisz dostęp lub integracja przestanie odpowiadać, skorzystaj z narzędzi do rozwiązywania problemów opisanych poniżej, zanim wykonasz ręczne zmiany.

## Łączenie węzłów

Jeśli wybrałeś instalację tylko węzła, możesz połączyć ten VPS z innym serwerem VPS lub zewnętrzną instancją panelu. Pozwala to skalować infrastrukturę i zarządzać wieloma węzłami z jednego miejsca.

Łączenie węzłów jest przydatne, gdy chcesz:

- rozproszyć aplikacje na kilka VPS-ów
- scentralizować zarządzanie
- zwiększyć pojemność bez tworzenia izolowanych wdrożeń
- połączyć się z zewnętrznym środowiskiem panelu

:::note Łączenie z zewnętrznym panelem
Możesz połączyć swój węzeł z innym VPS lub zewnętrzną instancją panelu. Szczegóły łączenia zależą od środowiska docelowego już używanego.
:::

## Rozwiązywanie problemów ze stanem obniżonej jakości

Jeśli panel webowy pokazuje stan obniżonej jakości, oznacza to, że platforma nie może skontaktować się lub pobrać danych z instancji obsługującej funkcję One Click Apps. Postępuj według kroków rozwiązywania problemów w kolejności chronologicznej.

### Wskaźniki statusu

Okno rozwiązywania problemów może pokazywać takie wskaźniki:

| Status | Znaczenie |
| --- | --- |
| Stan Coolify: Aktywny | Usługa panelu działa |
| Stan API: Dostępne | API jest obecnie osiągalne |
| Stan usługi: Online | Twój VPS jest online |

Jeśli jedna lub więcej części nie działa poprawnie, kontynuuj poniższe kroki.

### Krok 1: Potwierdź, że VPS jest online

Najpierw upewnij się, że Twój VPS jest online w panelu webowym ZAP-Hosting. Jeśli serwer jest offline, platforma aplikacji nie może działać.

### Krok 2: Odśwież status

Użyj akcji **Odśwież status**, aby ponownie wykonać kontrolę stanu z najnowszymi danymi. Może to rozwiązać tymczasowe problemy z łącznością.

:::tip Tymczasowe problemy z łącznością
Stan obniżonej jakości może być spowodowany krótkotrwałym problemem komunikacyjnym. Odświeżenie statusu to najszybsza pierwsza kontrola.
:::

### Krok 3: Uruchom ponownie Dockera

Jeśli status nadal jest obniżony, użyj akcji **Uruchom ponownie Dockera**. Wymusza to restart instancji platformy. Po pozytywnej odpowiedzi odczekaj `1-2 minuty` i ponownie odśwież status.

:::caution Restart usługi
Restart Dockera może tymczasowo przerwać działanie uruchomionych aplikacji podczas restartu usług.
:::

### Krok 4: Odśwież dane uwierzytelniające

Na koniec użyj **Odśwież dane uwierzytelniające**. Jest to szczególnie ważne, jeśli status pokazuje online, ale funkcje panelu webowego, takie jak instalacja aplikacji, nie działają.

Ta akcja:

- **nie** usuwa Twoich danych
- odświeża dane uwierzytelniające użytkownika root
- odświeża token API używany przez panel webowy
- automatycznie aktualizuje dane uwierzytelniające panelu po sukcesie

:::info Bezpieczne odświeżanie danych uwierzytelniających
Odświeżanie danych uwierzytelniających nie usuwa zainstalowanych aplikacji ani danych wdrożenia. Odnawia tylko dane potrzebne do dostępu i komunikacji.
:::

### Kiedy kontaktować się z supportem

Jeśli problem nadal występuje po wykonaniu wszystkich kroków, utwórz zgłoszenie do supportu przez stronę ZAP-Hosting.

## Najlepsze praktyki

Aby utrzymać stabilność i łatwość zarządzania instalatorem One Click Apps, stosuj się do poniższych zaleceń:

| Najlepsza praktyka | Powód |
| --- | --- |
| Używaj świeżej instalacji systemu | Zmniejsza konflikty z istniejącymi usługami i portami |
| Spełniaj zalecane wymagania zasobów | Poprawia wydajność i niezawodność |
| Organizuj aplikacje w projekty i środowiska | Ułatwia zarządzanie wdrożeniami |
| Konfiguruj DNS przed przypisaniem domen | Zapobiega problemom z dostępem i SSL |
| Ostrożnie korzystaj z zaawansowanych ustawień | Unikasz nieobsługiwanych zmian niestandardowych |

:::tip Utrzymuj porządek w wdrożeniach
Jeśli planujesz hostować wiele aplikacji, stwórz jasny schemat nazewnictwa dla `[your_project_name]`, `[your_environment_name]` i `[your_app_name]` przed wdrożeniem pierwszych usług.
:::

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś i użyłeś instalatora One Click Apps na VPS do wdrażania i zarządzania aplikacjami na swoim serwerze. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!

<InlineVoucher />