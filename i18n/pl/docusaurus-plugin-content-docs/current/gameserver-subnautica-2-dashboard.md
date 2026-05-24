---
id: gameserver-subnautica-2-dashboard
title: "Serwer gier - Subnautica 2 - Panel główny"
description: "Dowiedz się, jak zarządzać swoim serwerem Subnautica 2 za pomocą panelu głównego ZAP-Hosting, monitorować wydajność hostingu i korzystać z ważnych funkcji administracyjnych zap -> Sprawdź teraz"
sidebar_label: Serwer gier - Subnautica 2 - Panel główny
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Interesujesz się serwerem gier **Subnautica 2** lub już go posiadasz, ale brakuje Ci pełnego przeglądu administracji i łatwego dostępu do wszystkich potrzebnych opcji? Szczególnie na początku może to być wyzwanie. Ten poradnik zapewni Ci szczegółowe wprowadzenie do zarządzania usługą, abyś miał jak najlepszy przegląd.

Po przejściu przez ten poradnik będziesz mógł łatwo i efektywnie zarządzać swoim serwerem oraz szybko i wygodnie znaleźć wszystkie potrzebne opcje i funkcje. Otrzymasz tu uporządkowany przegląd, który krok po kroku pomoże Ci zapoznać się z administracją serwera i celowo poszerzyć swoją wiedzę. Dzięki temu Twój serwer gier **Subnautica 2** będzie optymalnie dopasowany do Twoich potrzeb, a Ty wykorzystasz maksymalnie dostępne opcje w panelu **ZAP-Hosting**.

<InlineVoucher />

## Product Administration

W sekcji **Product Administration** znajdziesz wszystkie niezbędne strony do zarządzania swoim serwerem. Poniżej szczegółowo opisano dostępne opcje zarządzania serwerem.

### Dashboard

**Panel główny** Twojego serwera to serce administracji. Znajdziesz tu przejrzyście przedstawione wszystkie podstawowe i kluczowe informacje o Twojej usłudze. Należą do nich na przykład dane o lokalizacji, statusie, IP: Porcie, używanej pamięci, aktualnej grze, nazwie serwera, mapie oraz liczbie dostępnych slotów. Dodatkowo wyświetlane jest wykorzystanie CPU, pamięci i RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

W panelu głównym masz także możliwość uruchomienia, zatrzymania lub ponownego uruchomienia usługi, aby mieć pełną kontrolę nad jej działaniem. Ponadto możesz uzyskać dostęp do konsoli na żywo, aby otrzymywać informacje w czasie rzeczywistym o stanie serwera i w razie potrzeby podejmować bezpośrednie działania.

### Statistics

W zakładce **Statistics** otrzymujesz kompleksowy przegląd obciążenia Twojego serwera. Znajdziesz tam informacje o różnych aspektach, takich jak obciążenie dostępnych slotów, CPU i pamięci. Dane możesz przeglądać dla różnych okresów, na przykład za ostatnie **60 minut, 24 godziny, 3 dni, 7 dni** lub **30 dni**.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Dzięki tym informacjom zyskujesz dobry wgląd w wykorzystanie serwera. Statystyki te często pomagają także zidentyfikować potencjalne problemy z wydajnością i zawęzić ich przyczyny. Możesz na przykład prześledzić, kiedy wzrosło obciążenie i czy jest to powiązane z konkretnymi wydarzeniami lub zmianami. To szczególnie ważne przy nagłych problemach, bo pozwala podjąć ukierunkowane kroki do diagnozy i systematycznej analizy możliwych przyczyn.

### DDoS Manager

Przeglądaj przeszłe ataki DDoS, aby lepiej ocenić potencjalne zagrożenia i wzorce. Włącz powiadomienia o trwających atakach DDoS na Twoim serwerze, aby szybko reagować w razie incydentu.

W zależności od lokalizacji serwera i dostępnej tam ochrony DDoS możesz także monitorować aktywne ataki w czasie rzeczywistym. Obejmuje to szczegółowe dane o ruchu, pokazujące zarówno ruch legalny, jak i ilość ruchu zablokowanego przez systemy mitigacji. Taki poziom przejrzystości pomaga zrozumieć działanie ochrony i umożliwia wczesne wykrywanie potencjalnych zagrożeń.

:::info Brak dostępu do DDoS Managera
Korzystanie z DDoS Managera wymaga posiadania dedykowanego adresu IP lub dodatkowej opcji `DDoS Manager Overview`. Jeśli Twój obecny pakiet nie zawiera tych elementów, możesz je dodać w każdej chwili, dokonując aktualizacji usługi.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

:::caution Wymagania DDoS Managera
Korzystanie z DDoS Managera jest możliwe tylko wtedy, gdy posiadasz własny adres IP lub wykupioną opcję `DDoS Manager Overview`. Jeśli tych elementów brakuje w Twoim pakiecie, możesz je dodać w każdej chwili, dokonując aktualizacji.
:::

### Log files

Masz problem techniczny i nie wiesz, co go powoduje? Pierwszym krokiem może być sprawdzenie **plików logów**. Zawierają one wiele informacji o serwerze, takich jak bieżące zdarzenia, wskazówki czy komunikaty o błędach.

Szczególnie komunikaty o błędach pomagają zidentyfikować i lepiej zrozumieć przyczynę problemu. Często można dzięki temu wykryć i rozwiązać trudności, przyglądając się dokładnie plikom logów.

:::caution Potrzebujesz pomocy z plikami logów?
Znaleziona tam informacja nie pomaga lub jej nie rozumiesz? W takim wypadku możesz utworzyć **[Ticket](https://zap-hosting.com/en/customer/support/)** i opisać swój problem. Support jest dostępny codziennie i pomoże Ci dalej analizować problem.
:::

### Event log

**Dziennik zdarzeń** daje Ci pełny przegląd wszystkich działań związanych z administracją serwera. Możesz w nim śledzić, kiedy serwer został uruchomiony, zatrzymany lub uległ awarii, a także kiedy wykonano aktualizacje, kopie zapasowe lub nowe instalacje.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Live Console

**Konsola na żywo** oferuje podgląd w czasie rzeczywistym wszystkich aktualnych zdarzeń na Twoim serwerze. Zobaczysz tam informacje o aktywnościach graczy oraz ewentualne komunikaty o błędach i systemowe. Ten przegląd pozwala uzyskać pełny obraz tego, co dzieje się na serwerze i wykryć potencjalne problemy na wczesnym etapie.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Oprócz monitorowania zdarzeń możesz także wysyłać komendy bezpośrednio do serwera w **Konsoli na żywo**. Przydaje się to do szybkiego dostosowania ustawień, wykonania określonych akcji lub reakcji na pojawiające się problemy.

### Service Interruptions

Twój serwer był chwilowo offline i nie potrafisz wyjaśnić dlaczego? Sprawdzenie dziennika zdarzeń i plików logów nie dało żadnych informacji? Przyczyną problemu może być nie sam serwer, lecz system hostujący, na którym działa Twój serwer gier.

Jeśli system monitorujący wykryje ogólną przerwę w działaniu, technicy są automatycznie powiadamiani i zajmują się problemem najszybciej, jak to możliwe.

W tej sekcji znajdziesz przegląd historii przerw w działaniu systemu hostującego Twój serwer gier. Więcej informacji oraz aktualny status usługi znajdziesz na [stronie statusu](https://status.zap-hosting.com/).

## Settings

W sekcji **Settings** znajdziesz wszystkie potrzebne strony do konfiguracji serwera. Poniżej szczegółowo opisano dostępne opcje konfiguracji.

### Settings

W zakładce **Settings** znajdziesz przegląd najczęściej używanych opcji konfiguracyjnych serwera wraz z krótkim wyjaśnieniem. Korzystanie z tej strony jest szczególnie polecane dla osób początkujących w administracji serwerem.

Jeśli czujesz się pewniej i chcesz wprowadzać bardziej precyzyjne zmiany, zalecane jest korzystanie z Edytora Konfiguracji. Więcej informacji o tym znajdziesz w kategorii **Configs**.

### Configs

Edytor plików konfiguracyjnych pozwala na bezpośrednią edycję plików konfiguracyjnych z poziomu strony internetowej w klasyczny sposób, bez uproszczonego widoku. Ta opcja umożliwia dostosowanie ustawień serwera według własnych preferencji.

Dzięki edytorowi masz bezpośredni dostęp do wszystkich dostępnych opcji i możesz je precyzyjnie modyfikować. To szczególnie przydatne dla zaawansowanych użytkowników, którzy chcą mieć pełną kontrolę nad ustawieniami serwera i dokładnie wiedzą, jakie zmiany chcą wprowadzić.

:::caution Możliwość nadpisania wartości konfiguracji
Zauważyłeś, że niektóre zmiany są częściowo nadpisywane? Pamiętaj, że niektóre wartości opcji są pobierane ze strony ustawień. Jeśli chcesz wprowadzić te zmiany bezpośrednio w konfiguracji, najpierw wyłącz odpowiednie opcje na stronie ustawień.
:::

### Games

W zakładce **Games** zawsze możesz zmienić wariant gry na swoim serwerze lub zainstalować inną grę. Gry o tej samej cenie za slot możesz wybrać bezpośrednio w sekcji **Available Games**. W przypadku innych gier konieczna jest najpierw zmiana ceny slotów. Więcej informacji znajdziesz w poradniku [Zmiana gry](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Versions

W zakładce **Versions** możesz przeglądać i zarządzać aktualną wersją swojego serwera gier. Masz tu możliwość aktualizacji do najnowszej wersji w dowolnym momencie lub włączenia automatycznych aktualizacji, aby serwer był zawsze na bieżąco.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Dodatkowo możesz włączyć powiadomienia e-mail o automatycznych aktualizacjach, aby być na bieżąco z nowościami.

### Scheduled Tasks

Twórz zadania zaplanowane, które będą wykonywane automatycznie o określonych godzinach, aby zautomatyzować różne procesy na serwerze. Możesz ustawić, czy zadanie ma być wykonane jednokrotnie, czy powtarzane według potrzeb. Obsługiwane typy zadań to m.in. uruchamianie, zatrzymywanie lub restartowanie usług, restart serwera, jeśli jest online, tworzenie kopii zapasowych lub wykonywanie własnych komend.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Restart planner

Chcesz zaplanować restart serwera na określone godziny? Restart Planner pozwala ustawić automatyczne restartowanie serwera gier o wybranych porach lub w regularnych odstępach czasu.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### DNS settings

Dzięki ustawieniom DNS ZAP możesz tworzyć łatwe do zapamiętania adresy dla swojej usługi. Możesz użyć subdomeny jednej z dostępnych domen lub utworzyć wpis DNS na własnej domenie, aby mieć adres lepiej kojarzący się z Twoim projektem.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Tools

W sekcji **Tools** w panelu nawigacyjnym znajdziesz różne podsekcje, które pomogą Ci zarządzać serwerem. Należą do nich **FTP Browser**, **Databases** oraz **Backups**. Poniżej znajdziesz szczegółowe wprowadzenie do tych obszarów.

### FTP-Browser

Korzystając z **FTP Browser**, otrzymasz wszystkie potrzebne dane do nawiązania połączenia z dostępem FTP. Dostęp FTP pozwala na bezpośredni dostęp do plików Twojego serwera gier. Dla optymalnego użytkowania zalecamy korzystanie z zewnętrznego programu FTP, takiego jak [FileZilla](https://filezilla-project.org/) lub [WinSCP](https://winscp.net/eng/index.php). Jeśli nie znasz się na FTP, pomocny może być poradnik [Dostęp przez FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla to jeden z najprostszych i najbardziej znanych klientów FTP. Po instalacji uruchamiasz program i wpisujesz dane dostępowe w górnym pasku, korzystając z danych pokazanych w panelu. Po szybkim kliknięciu połącz zostajesz zalogowany na serwer i możesz zarządzać plikami.

**WinSCP:** WinSCP jest głównie przeznaczony do SCP i SFTP, ale obsługuje też standardowe połączenia FTP. Program jest nieco bardziej rozbudowany niż FileZilla, dlatego często lepiej sprawdza się u zaawansowanych użytkowników.

### Databases

Poza produktami serwerów gier dostępnych jest także 10 baz danych w pakiecie. Bazy danych są potrzebne np. wtedy, gdy dane muszą być przechowywane w bazie. W zakładce **Databases** możesz utworzyć bazę danych i zobaczyć dane dostępowe. Masz też opcję włączenia backupu oraz importu istniejących kopii zapasowych bazy.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Backups

W zakładce **Backups** możesz tworzyć zarówno ręczne, jak i automatyczne kopie zapasowe swojego serwera i powiązanej bazy danych. Ułatwia to odzyskanie danych w razie problemów lub utraty danych.

W ustawieniach możesz określić, czy backupy mają być tworzone automatycznie oraz czy mają być wykonywane codziennie lub co tydzień. Dodatkowo możesz zdecydować, czy najstarsze kopie mają być usuwane w razie potrzeby, np. gdy zabraknie miejsca na dysku.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Domyślnie dla produktów serwerów gier udostępniane jest 10 GB przestrzeni dyskowej na backupy na serwerze storage. Jeśli potrzebujesz więcej miejsca, możesz dokupić rozszerzenie za dodatkową opłatą. Dzięki temu masz pewność, że zawsze masz wystarczająco dużo miejsca na kopie zapasowe i możesz w razie potrzeby sięgnąć po starsze backupy.

## Further Links

W sekcji **Further Links** znajdziesz dodatkowe linki istotne dla Twojego produktu.

### Frequently Asked Questions

Sekcja **Frequently Asked Questions** zawiera przegląd najczęściej zadawanych pytań przez klientów. Znajdziesz tam pomocne odpowiedzi i szczegółowe informacje na różne tematy, które pomogą Ci szybko i skutecznie.

### ZAP-Hosting Documentation

Dostępna jest obszerna dokumentacja produktów, która służy jako baza wiedzy dla najczęściej pojawiających się pytań i problemów. Znajdziesz tam różne poradniki i pomoc na różne tematy, które wspierają Cię w korzystaniu i zarządzaniu produktem.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### News

Sekcja **News** daje Ci pełny przegląd wszystkich ogłoszeń i nowości dotyczących Twojej usługi. Znajdziesz tam ważne informacje na różne tematy, takie jak:

- Zmiany w usłudze, np. przez aktualizacje lub nowe funkcje
- Ogłoszenia o możliwych pracach serwisowych lub problemach technicznych
- Oferty specjalne i promocje, które dają Ci ekskluzywne korzyści lub rabaty
- Inne istotne informacje, które mogą mieć znaczenie dla korzystania z usługi

Regularne sprawdzanie **News** pozwala być na bieżąco i dostosować usługę, aby wyciągnąć z serwera jak najwięcej.

<InlineVoucher />

## Conclusion

Masz teraz pełny przegląd najważniejszych obszarów panelu głównego **Subnautica 2** i wiesz, gdzie znaleźć centralną administrację, konfigurację, narzędzia i strony informacyjne w panelu **ZAP-Hosting**.

Congratulations, you have successfully learned how to use the Subnautica