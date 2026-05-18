---
id: starrupture-firststeps-dashboard
title: "StarRupture: Przegląd panelu głównego"
description: "Dowiedz się, jak efektywnie zarządzać i optymalizować swój serwer StarRupture, aby uzyskać najlepszą wydajność i kontrolę → Sprawdź teraz"
sidebar_label: Panel główny
services:
  - gameserver-starrupture
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Interesujesz się serwerem **StarRupture** lub już go posiadasz, ale brakuje Ci pełnego przeglądu administracji i łatwego dostępu do wszystkich potrzebnych opcji? Zwłaszcza na początku może to być wyzwanie. Spokojnie, poniżej dostarczymy Ci szczegółowe wprowadzenie do zarządzania Twoim serwerem, abyś miał jak najlepszy przegląd.

Po przejściu przez ten poradnik, z łatwością będziesz mógł efektywnie zarządzać swoim serwerem i szybko oraz łatwo znajdować wszystkie potrzebne opcje i funkcje. Otrzymasz tu uporządkowany przegląd, który krok po kroku pomoże Ci zapoznać się z administracją serwera i celowo poszerzać swoją wiedzę. Dzięki temu zapewnisz, że Twój serwer **StarRupture** będzie optymalnie dopasowany do Twoich potrzeb i wykorzystasz maksymalnie dostępne możliwości.


<InlineVoucher />

## Administracja produktu

W sekcji **Administracja produktu** znajdziesz wszystkie niezbędne strony do zarządzania swoim serwerem. Poniżej szczegółowo wymienione są opcje zarządzania Twoim serwerem.



### Panel główny

**Panel główny** Twojego serwera to serce administracji. Wszystkie podstawowe i kluczowe informacje o Twojej usłudze są tutaj przejrzyście przedstawione. Znajdziesz tu na przykład informacje o lokalizacji, statusie, adresie IP: porcie, używanej pamięci, aktualnej grze, nazwie serwera, mapie oraz liczbie dostępnych slotów. Dodatkowo wyświetlane jest wykorzystanie CPU, pamięci i RAM.

![img](https://screensaver01.zap-hosting.com/index.php/s/x6DtKCaCaAoj6bF/preview)

W panelu głównym masz także możliwość uruchomienia, zatrzymania lub restartu usługi, aby mieć pełną kontrolę nad jej działaniem. Ponadto możesz uzyskać dostęp do konsoli na żywo, aby otrzymywać informacje w czasie rzeczywistym o stanie serwera i w razie potrzeby podejmować bezpośrednie działania.




### Statystyki

W zakładce **Statystyki** otrzymujesz kompleksowy przegląd obciążenia Twojego serwera. Znajdziesz tam informacje o różnych aspektach, takich jak obciążenie dostępnych slotów, CPU oraz pamięci. Dane możesz przeglądać dla różnych okresów czasu, na przykład dla ostatnich **60 minut, 24 godzin, 3 dni, 7 dni** lub **30 dni.**

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Dzięki tym informacjom zyskujesz dobry wgląd w wykorzystanie swojego serwera. Dodatkowo statystyki te często pomagają zidentyfikować ewentualne problemy z wydajnością i zawęzić ich przyczyny. Na przykład możesz prześledzić, kiedy wzrosło obciążenie i czy jest to powiązane z konkretnymi wydarzeniami lub zmianami. To szczególnie ważne, gdy pojawiają się nagłe problemy, bo pozwala podjąć celowe kroki do diagnozy i systematycznej analizy możliwych przyczyn.



### Menedżer DDoS

Przeglądaj przeszłe ataki DDoS, aby lepiej ocenić potencjalne zagrożenia i wzorce. Włącz powiadomienia o trwających atakach DDoS na Twoim serwerze, aby szybko reagować, gdy wystąpi incydent.

W zależności od lokalizacji serwera i dostępnej tam ochrony DDoS, możesz także monitorować aktywne ataki w czasie rzeczywistym. Obejmuje to szczegółowe informacje o ruchu, pokazujące zarówno legalny ruch, jak i ilość ruchu zablokowanego przez systemy mitigacji. Taki poziom przejrzystości pomaga zrozumieć, jak działa ochrona i pozwala wcześnie wykrywać potencjalne zagrożenia.

:::info Brak dostępu do menedżera DDoS?
Korzystanie z Menedżera DDoS wymaga posiadania dedykowanego adresu IP lub dodatkowej opcji "Przegląd Menedżera DDoS". Jeśli Twój obecny pakiet nie zawiera tych elementów, możesz je dodać w każdej chwili, dokonując upgrade’u usługi.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)





:::warning
Korzystanie z Menedżera DDoS jest możliwe tylko wtedy, gdy masz wykupiony własny adres IP lub opcję "Przegląd Menedżera DDoS" jako dodatek. Jeśli tych elementów brakuje w Twoim obecnym pakiecie, możesz je dodać w każdej chwili, dokonując upgrade’u.
:::



### Pliki logów

Masz problem techniczny i nie wiesz, co jest jego przyczyną? Pierwszą możliwą strategią rozwiązania jest sprawdzenie **plików logów**. Zawierają one mnóstwo informacji o serwerze, takich jak bieżące zdarzenia, wskazówki czy komunikaty o błędach.

Szczególnie komunikaty o błędach mogą pomóc zidentyfikować i lepiej zrozumieć przyczynę problemu. Często trudności można wykryć i rozwiązać, dokładnie analizując pliki logów.

:::warning
Znalezione tam informacje nie pomagają lub ich nie rozumiesz? Spokojnie! W takim wypadku jesteśmy dostępni codziennie w supportcie. Po prostu załóż **[ticket](https://zap-hosting.com/en/customer/support/)** i opisz swój problem. Sprawdzimy go jak najszybciej i pomożemy rozwiązać problem! :)
:::


### Dziennik zdarzeń

**Dziennik zdarzeń** daje Ci pełny przegląd wszystkich aktywności związanych z administracją serwera. Możesz w nim śledzić, kiedy serwer był uruchamiany, zatrzymywany lub uległ awarii, a także kiedy wykonywano aktualizacje, kopie zapasowe lub nowe instalacje.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)



### Przerwy w działaniu usługi

Twój serwer był chwilowo offline i nie potrafisz wyjaśnić dlaczego? Sprawdzenie dziennika zdarzeń i plików logów nie dało żadnych informacji? Możliwe, że przyczyna problemu nie leży bezpośrednio po stronie Twojego serwera, lecz systemu hostującego, na którym działa Twój serwer.

Jeśli nasz system monitoringu wykryje ogólną przerwę, nasi technicy są automatycznie powiadamiani i zajmują się problemem najszybciej, jak to możliwe.

W tej sekcji znajdziesz przegląd historii przerw systemu hostującego, na którym działa Twój serwer gier. Więcej informacji oraz aktualny status usługi znajdziesz na naszej nowej [stronie statusu](https://status.zap-hosting.com/).












## Ustawienia

W sekcji **Ustawienia** znajdziesz wszystkie potrzebne strony do konfiguracji swojego serwera. Dostępne opcje konfiguracji serwera są szczegółowo wymienione poniżej.



### Ustawienia

W ustawieniach znajdziesz przegląd najczęściej używanych opcji konfiguracyjnych dla Twojego serwera. Znajduje się tam także krótki opis. Korzystanie ze strony ustawień jest szczególnie polecane dla osób początkujących w administracji serwerem.

Jeśli czujesz się pewniej i chcesz wprowadzać bardziej precyzyjne zmiany, polecamy skorzystać z Edytora konfiguracji. Więcej informacji na ten temat znajdziesz w kategorii **Konfiguracje**.



### Konfiguracje

Edytor plików konfiguracyjnych pozwala na bezpośrednią edycję plików konfiguracyjnych z poziomu strony, w klasyczny sposób, bez uproszczonego widoku. Ta opcja pozwala dostosować ustawienia serwera według własnych preferencji.

Korzystając z edytora, masz bezpośredni dostęp do wszystkich dostępnych opcji i możesz je precyzyjnie modyfikować. Jest to szczególnie przydatne dla zaawansowanych użytkowników, którzy chcą mieć pełną kontrolę nad ustawieniami serwera i dokładnie wiedzą, jakie zmiany chcą wprowadzić.

:::warning
Zauważyłeś, że niektóre zmiany są częściowo nadpisywane? Pamiętaj, że niektóre wartości opcji są pobierane ze strony ustawień. Jeśli chcesz wprowadzać te zmiany bezpośrednio w konfiguracji, najpierw wyłącz odpowiednie opcje na stronie ustawień.
:::


### Gry

W zakładce **Gry** zawsze masz możliwość zmiany wariantu gry na swoim serwerze lub zainstalowania innej gry. Gry o tej samej cenie za slot możesz wybrać bezpośrednio w sekcji **Dostępne gry**. W przypadku pozostałych gier konieczna jest najpierw zmiana ceny za slot. Więcej informacji na ten temat znajdziesz w poradniku [Zmiana gry](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)



### Wersje

W zakładce **Wersje** możesz przeglądać i zarządzać aktualną wersją swojego serwera gier. Możesz w każdej chwili zaktualizować do najnowszej wersji lub włączyć automatyczne aktualizacje, aby mieć pewność, że Twój serwer jest zawsze na bieżąco.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Dodatkowo możesz włączyć powiadomienia mailowe o automatycznych aktualizacjach, aby być na bieżąco z nowościami i mieć pewność, że Twój serwer jest zawsze aktualny.



### Zaplanowane zadania

Twórz zaplanowane zadania, które będą automatycznie wykonywane o określonych porach, aby zautomatyzować różne procesy na serwerze. Możesz ustawić, czy zadanie ma być wykonane jednokrotnie, czy powtarzane według potrzeb. Obsługiwane typy zadań to m.in. uruchamianie, zatrzymywanie lub restartowanie usług, restart serwera, jeśli jest online, tworzenie kopii zapasowych lub wykonywanie własnych poleceń.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planer restartów

Chcesz zaplanować restarty serwera na konkretne godziny? Planer restartów pozwala ustawić automatyczne, zaplanowane restarty Twojego serwera gier. Dzięki tej funkcji możesz ustawić restarty o określonych godzinach lub w regularnych odstępach czasu.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Ustawienia DNS
Dzięki ustawieniom DNS ZAP możesz tworzyć łatwe do zapamiętania adresy dla swojej usługi. Możesz skorzystać z subdomeny jednej z naszych domen lub utworzyć wpis DNS na własnej domenie, dzięki czemu adres będzie lepiej kojarzony z Tobą jako osobą.
![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Narzędzia

W sekcji **Narzędzia** w panelu nawigacyjnym znajdziesz różne podsekcje, które pomogą Ci zarządzać serwerem. Należą do nich **Przeglądarka FTP**, **Bazy danych** oraz **Kopie zapasowe**. Poniżej znajdziesz szczegółowe wprowadzenie do tych obszarów.



### Przeglądarka FTP

Korzystając z **Przeglądarki FTP**, otrzymasz wszystkie niezbędne informacje do nawiązania połączenia z dostępem FTP. Dostęp FTP pozwala na bezpośredni dostęp do plików Twojego serwera gier. Dla optymalnego użytkowania polecamy korzystanie z zewnętrznego programu FTP, takiego jak **FileZilla** lub **WinSCP**. Jeśli nie znasz się na FTP, warto zajrzeć do poradnika [Dostęp przez FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

**FileZilla:** FileZilla to chyba najprostszy i najbardziej znany klient FTP. Wystarczy zainstalować, uruchomić i w górnym pasku wpisać dane dostępowe, które znajdziesz na tej stronie nieco wyżej. Po szybkim kliknięciu "Połącz" jesteś od razu zalogowany na serwer i możesz zarządzać plikami.

**WinSCP:** WinSCP jest właściwie przeznaczony do SCP i SFTP (szyfrowane odmiany protokołu FTP), ale równie dobrze radzi sobie z klasycznym FTP. Program jest trochę bardziej rozbudowany niż FileZilla i bardziej nadaje się dla zaawansowanych użytkowników.



### Bazy danych

Oprócz naszych produktów serwerów gier oferujemy także 10 wliczonych baz danych. Bazy te są potrzebne na przykład wtedy, gdy dane muszą być przechowywane w bazie. W zakładce **Bazy danych** możesz utworzyć bazę i zobaczyć dane dostępowe. Masz też opcję włączenia kopii zapasowej oraz importu istniejących kopii baz danych.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)



### Kopie zapasowe

W zakładce **Kopie zapasowe** możesz tworzyć zarówno ręczne, jak i automatyczne kopie zapasowe swojego serwera oraz powiązanej bazy danych. Ułatwia to odzyskanie danych w razie problemów lub utraty danych.

W ustawieniach możesz określić, czy kopie mają być tworzone automatycznie oraz czy ma to być codziennie czy co tydzień. Dodatkowo możesz zdecydować, czy najstarsze kopie mają być usuwane w razie potrzeby, np. gdy dostępne miejsce na dysku zaczyna się kończyć.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Domyślnie dla naszych produktów serwerów gier zapewniamy 10 GB przestrzeni dyskowej na serwerze do przechowywania kopii zapasowych. Jeśli potrzebujesz więcej miejsca, możesz dokupić upgrade za dodatkową opłatą. Dzięki temu masz pewność, że zawsze masz wystarczająco dużo miejsca na kopie i w razie potrzeby dostęp do starszych backupów.

## Dalsze linki
W sekcji **Dalsze linki** znajdziesz dodatkowe odnośniki istotne dla Twojego produktu.

### Najczęściej zadawane pytania
Sekcja **Najczęściej zadawane pytania** zawiera przegląd najczęściej zadawanych pytań przez naszych klientów. Znajdziesz tam pomocne odpowiedzi i szczegółowe informacje na różne tematy, które pomogą Ci szybko i sprawnie.

### Dokumentacja ZAP-Hosting
Oferujemy obszerną dokumentację naszych produktów, która służy jako baza wiedzy dla najczęściej pojawiających się pytań i problemów. Znajdziesz tam różne poradniki i pomoc na różne tematy, które ułatwią Ci korzystanie i zarządzanie produktem.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Aktualności
Sekcja **Aktualności** dostarcza Ci pełny przegląd wszystkich ogłoszeń i nowości dotyczących Twojej usługi. Znajdziesz tu ważne informacje na różne tematy, takie jak:

- Zmiany w usłudze, np. przez aktualizacje lub nowe funkcje
- Ogłoszenia o możliwych pracach serwisowych lub problemach technicznych
- Oferty specjalne i promocje, które dają Ci ekskluzywne korzyści lub rabaty
- Inne istotne informacje, które mogą mieć wpływ na korzystanie z usługi

Regularne sprawdzanie **Aktualności** pozwoli Ci być na bieżąco i odpowiednio dostosować usługę, aby wyciągnąć z serwera jak najwięcej.

<InlineVoucher />