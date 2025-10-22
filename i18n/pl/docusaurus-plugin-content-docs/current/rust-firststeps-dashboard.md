---
id: rust-firststeps-dashboard
title: "Rust: Przegląd panelu głównego"
description: "Dowiedz się, jak efektywnie zarządzać i optymalizować swój serwer Rust dzięki przejrzystemu przeglądowi wszystkich kluczowych funkcji i opcji → Sprawdź teraz"
sidebar_label: Panel główny
services:
  - gameserver-rust
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Interesujesz się **serwerem gier Rust** lub już go posiadasz, ale brakuje Ci pełnego przeglądu administracji i łatwego dostępu do wszystkich niezbędnych opcji? Zwłaszcza na początku może to być wyzwanie. Spokojnie, poniżej zapewnimy Ci szczegółowe wprowadzenie do zarządzania Twoim serwerem, abyś miał jak najlepszy przegląd.

Po przejściu przez ten poradnik, z łatwością będziesz mógł efektywnie zarządzać swoim serwerem i szybko znajdować wszystkie potrzebne opcje oraz funkcje. Otrzymasz tu uporządkowany przegląd, który krok po kroku pomoże Ci zapoznać się z administracją serwera i celowo poszerzać swoją wiedzę. Dzięki temu zapewnisz, że Twój **serwer Rust** będzie optymalnie dopasowany do Twoich potrzeb i wykorzystasz maksymalnie dostępne możliwości.

<YouTube videoId="kR2rgVwDdCM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/gn7pPPbLm2xmBdA/preview" title="Konfiguracja serwera Rust w zaledwie MINUTĘ!" description="Wolisz uczyć się, widząc wszystko na żywo? Mamy coś dla Ciebie! Zanurz się w naszym wideo, które wszystko rozkłada na czynniki pierwsze. Niezależnie czy się spieszysz, czy po prostu chcesz chłonąć wiedzę w najbardziej angażujący sposób!"/>

<InlineVoucher />

## Administracja produktu

W sekcji **Administracja produktu** znajdziesz wszystkie niezbędne strony do zarządzania swoim serwerem. Poniżej szczegółowo opisujemy dostępne opcje zarządzania.

### Panel główny

**Panel główny** Twojego serwera to serce administracji. Wszystkie podstawowe i kluczowe informacje o Twojej usłudze są tutaj przejrzyście przedstawione. Znajdziesz tu m.in. informacje o lokalizacji, statusie, adresie IP: porcie, używanej pamięci, aktualnej grze, nazwie serwera, mapie oraz liczbie dostępnych slotów. Dodatkowo wyświetlane jest wykorzystanie CPU, pamięci i RAM.

![](https://screensaver01.zap-hosting.com/index.php/s/qA8a4KYbeJaTcQD/preview)

W panelu głównym masz też możliwość uruchomienia, zatrzymania lub restartu serwera, aby mieć pełną kontrolę nad jego działaniem. Ponadto możesz uzyskać dostęp do konsoli na żywo, by otrzymywać informacje w czasie rzeczywistym o stanie serwera i w razie potrzeby podejmować bezpośrednie działania.

### Statystyki

W zakładce **Statystyki** otrzymujesz kompleksowy przegląd obciążenia Twojego serwera. Znajdziesz tam dane dotyczące różnych aspektów, takich jak obciążenie slotów, CPU i pamięci. Możesz przeglądać te dane dla różnych okresów, np. ostatnich **60 minut, 24 godzin, 3 dni, 7 dni** lub **30 dni**.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Dzięki tym informacjom zyskujesz dobry wgląd w wykorzystanie serwera. Statystyki te często pomagają też zidentyfikować potencjalne problemy z wydajnością i zawęzić ich przyczyny. Możesz np. prześledzić, kiedy wzrosło obciążenie i czy jest to powiązane z konkretnymi wydarzeniami lub zmianami. To szczególnie ważne przy nagłych problemach, bo pozwala podjąć celowe kroki do diagnozy i systematycznej analizy przyczyn.

### Menedżer DDoS

Przeglądaj przeszłe ataki DDoS, aby lepiej ocenić potencjalne zagrożenia i wzorce. Włącz powiadomienia o trwających atakach DDoS na Twoim serwerze, by szybko reagować w razie incydentu.

W zależności od lokalizacji serwera i dostępnej tam ochrony DDoS, możesz także monitorować aktywne ataki w czasie rzeczywistym. Obejmuje to szczegółowe dane o ruchu, pokazujące zarówno legalny ruch, jak i ilość ruchu zablokowanego przez systemy ochronne. Taki poziom przejrzystości pomaga zrozumieć, jak działa ochrona i pozwala wcześnie wykrywać potencjalne zagrożenia.

:::info Brak dostępu do Menedżera DDoS?
Korzystanie z Menedżera DDoS wymaga dedykowanego adresu IP lub dodatkowej opcji "Przegląd Menedżera DDoS". Jeśli Twój obecny pakiet nie zawiera tych elementów, możesz je dodać w każdej chwili, aktualizując usługę.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

### Sklep Tebex

Dzięki Tebex możesz zamienić swój serwer gier w źródło zarobku, sprzedając wirtualne przedmioty i rangi za prawdziwe pieniądze. To potężne i niezawodne narzędzie stworzone specjalnie dla administratorów serwerów gier, którzy chcą zaoferować lepsze doświadczenia swoim graczom.

![](https://screensaver01.zap-hosting.com/index.php/s/TbwafKd3Kmq4WrS/preview)

Tebex jest łatwy w obsłudze i oferuje wiele funkcji do personalizacji i optymalizacji Twojego sklepu. Możesz dostosować wygląd sklepu, dodać opcje płatności, a nawet uruchomić kampanie marketingowe, by dotrzeć do większej liczby graczy.

Klikając na obrazek, możesz stworzyć własny sklep serwera gier z Tebex. Konfiguracja jest szybka i prosta, więc w krótkim czasie zaczniesz sprzedawać swoje wirtualne dobra.

### Pliki logów

Masz problem techniczny i nie wiesz, co jest jego przyczyną? Pierwszą możliwą strategią jest sprawdzenie **plików logów**. Zawierają one mnóstwo informacji o serwerze, takich jak bieżące zdarzenia, wskazówki czy komunikaty o błędach.

Szczególnie komunikaty o błędach mogą pomóc zidentyfikować i lepiej zrozumieć przyczynę problemu. Często trudności można wykryć i rozwiązać, dokładnie analizując pliki logów.

:::info
Nie pomogły Ci znalezione informacje lub ich nie rozumiesz? Spokojnie! W takim przypadku jesteśmy codziennie dostępni w supportcie. Po prostu załóż **[Ticket](https://zap-hosting.com/en/customer/support/)** i opisz swój problem. Sprawdzimy go jak najszybciej i pomożemy rozwiązać problem! :)
:::

### Dziennik zdarzeń

**Dziennik zdarzeń** daje Ci pełny przegląd wszystkich aktywności związanych z administracją serwera. Możesz w nim śledzić, kiedy serwer został uruchomiony, zatrzymany lub uległ awarii, a także kiedy wykonano aktualizacje, kopie zapasowe lub nowe instalacje.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

### Przerwy w działaniu

Twój serwer był chwilowo offline i nie potrafisz wyjaśnić dlaczego? Sprawdzenie dziennika zdarzeń i plików logów nie dało żadnych informacji? Możliwe, że przyczyna problemu nie leży bezpośrednio po stronie Twojego serwera, lecz systemu hostującego, na którym działa Twój serwer.

Jeśli nasz system monitoringu wykryje ogólną przerwę w działaniu, nasi technicy są automatycznie powiadamiani i zajmują się problemem jak najszybciej.

W tej sekcji znajdziesz przegląd historii przerw systemu hostującego, na którym działa Twój serwer gier. Więcej informacji oraz najnowszą wersję statusu usługi znajdziesz na naszej nowej [stronie statusu](https://status.zap-hosting.com/).

## Ustawienia

W sekcji **Ustawienia** znajdziesz wszystkie niezbędne strony do konfiguracji swojego serwera. Dostępne opcje konfiguracji serwera opisujemy szczegółowo poniżej.

### Ustawienia

W ustawieniach znajdziesz przegląd najczęściej używanych opcji konfiguracyjnych dla Twojego serwera. Dołączone są też krótkie wyjaśnienia. Korzystanie z tej strony jest szczególnie polecane dla osób początkujących w administracji serwerem.

![](https://screensaver01.zap-hosting.com/index.php/s/Ymijoa34iNWEwLb/preview)

Możesz tu m.in. zmienić: 

- Podstawowe ustawienia: Nazwa serwera, opis serwera, URL serwera, obraz nagłówka, mapa, rozmiar świata, interwał zapisu, towarzysz, hasło RCON, tagi serwera, Web RCON, antycheat EAC, tryb Hardcore

Jeśli czujesz się pewniej i chcesz wprowadzać bardziej precyzyjne zmiany, polecamy skorzystać z Edytora konfiguracji. Więcej informacji znajdziesz w kategorii **Konfiguracje**.

### Konfiguracje

Edytor plików konfiguracyjnych pozwala na bezpośrednią edycję plików konfiguracyjnych z poziomu strony, w klasycznym widoku, bez uproszczeń. Ta opcja umożliwia dostosowanie ustawień serwera według własnych preferencji.

Korzystając z edytora, masz bezpośredni dostęp do wszystkich dostępnych opcji i możesz je precyzyjnie modyfikować. To szczególnie przydatne dla zaawansowanych użytkowników, którzy chcą mieć pełną kontrolę nad ustawieniami serwera i dokładnie wiedzą, co chcą zmienić.

:::info
Zauważyłeś, że niektóre zmiany są częściowo nadpisywane? Pamiętaj, że niektóre wartości opcji są pobierane ze strony ustawień. Jeśli chcesz wprowadzić te zmiany bezpośrednio w konfiguracji, najpierw wyłącz odpowiednie opcje na stronie ustawień.
:::

### Gry

W zakładce **Gry** zawsze możesz zmienić wariant gry na swoim serwerze lub zainstalować zupełnie inną grę. Gry o tej samej cenie za slot możesz wybrać bezpośrednio w sekcji **Dostępne gry**. W przypadku innych gier konieczna jest najpierw zmiana ceny za slot. Więcej informacji znajdziesz w poradniku [Zmiana gry](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/QB82f3CSKmJgwqk/preview)

### Wersje

W zakładce **Wersje** możesz przeglądać i zarządzać aktualną wersją swojego serwera gier. W każdej chwili możesz zaktualizować do najnowszej wersji lub włączyć automatyczne aktualizacje, aby Twój serwer był zawsze na bieżąco.

![](https://screensaver01.zap-hosting.com/index.php/s/oxYF3tLpaa4Kz3W/preview)

Dodatkowo możesz włączyć powiadomienia e-mail o automatycznych aktualizacjach, aby być na bieżąco z nowościami.

### Zaplanowane zadania

Twórz zaplanowane zadania, które będą wykonywane automatycznie o określonych godzinach, aby zautomatyzować różne procesy na serwerze. Możesz ustawić, czy zadanie ma być wykonane jednokrotnie, czy powtarzane według potrzeb. Obsługiwane typy zadań to m.in. uruchamianie, zatrzymywanie lub restartowanie usług, restart serwera, jeśli jest online, tworzenie kopii zapasowych lub wykonywanie własnych komend.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

### Planer restartów

Chcesz zaplanować restart serwera na określone godziny? Planer restartów pozwala ustawić automatyczne, zaplanowane restarty Twojego serwera gier. Dzięki tej funkcji możesz ustawić restarty o konkretnych godzinach lub w regularnych odstępach czasu.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Ustawienia DNS

Dzięki ustawieniom DNS ZAP możesz tworzyć łatwe do zapamiętania adresy dla swojej usługi. Możesz skorzystać z subdomeny jednej z naszych domen lub utworzyć wpis DNS na własnej domenie, aby mieć adres lepiej kojarzony z Tobą.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

## Narzędzia

W sekcji **Narzędzia** w panelu nawigacyjnym znajdziesz różne podsekcje, które pomogą Ci zarządzać serwerem. Należą do nich **Przeglądarka FTP**, **Bazy danych** oraz **Kopie zapasowe**. Poniżej znajdziesz szczegółowe wprowadzenie do tych obszarów.

### Przeglądarka FTP

Korzystając z **Przeglądarki FTP**, otrzymasz wszystkie niezbędne dane do nawiązania połączenia z dostępem FTP. Dostęp FTP pozwala na bezpośredni dostęp do plików Twojego serwera gier. Dla optymalnego użytkowania polecamy korzystanie z zewnętrznych programów FTP, takich jak **FileZilla** lub **WinSCP**. Jeśli nie znasz się na FTP, warto zajrzeć do poradnika [Dostęp przez FTP](gameserver-ftpaccess.md).

![](https://screensaver01.zap-hosting.com/index.php/s/fZSYpSi4KwPos5P/preview)

**FileZilla:** FileZilla to najprostszy i najbardziej znany klient FTP. Wystarczy zainstalować, uruchomić i wpisać dane dostępowe w górnym pasku, które znajdziesz na tej stronie nieco wyżej. Po szybkim kliknięciu "Połącz" zalogujesz się bezpośrednio na serwer i możesz zarządzać plikami.

**WinSCP:** WinSCP jest przeznaczony głównie do SCP i SFTP (szyfrowane wersje protokołu FTP), ale obsługuje też FTP. Program jest bardziej rozbudowany niż FileZilla i nadaje się dla zaawansowanych użytkowników.

### Bazy danych

Oprócz serwerów gier oferujemy także 10 wliczonych baz danych. Bazy te są potrzebne np. gdy dane muszą być przechowywane w bazie. W zakładce **Bazy danych** możesz utworzyć bazę i zobaczyć dane dostępowe. Masz też opcję włączenia kopii zapasowej i importu istniejących backupów bazy.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

### Kopie zapasowe

W zakładce **Kopie zapasowe** możesz tworzyć zarówno ręczne, jak i automatyczne kopie zapasowe swojego serwera i powiązanej bazy danych. Ułatwia to odzyskanie danych w razie problemów lub utraty danych.

W ustawieniach możesz określić, czy kopie mają być tworzone automatycznie oraz czy codziennie, czy co tydzień. Dodatkowo możesz zdecydować, czy najstarsze kopie mają być usuwane w razie potrzeby, np. gdy zabraknie miejsca na dysku.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Domyślnie dla naszych serwerów gier zapewniamy 10 GB miejsca na serwerze do przechowywania kopii zapasowych. Jeśli potrzebujesz więcej przestrzeni, możesz ją dokupić. Dzięki temu zawsze masz wystarczająco miejsca na backupy i dostęp do starszych kopii, gdy zajdzie taka potrzeba.

## Dalsze linki

W sekcji **Dalsze linki** znajdziesz dodatkowe odnośniki istotne dla Twojego produktu.

### Najczęściej zadawane pytania

Sekcja **Najczęściej zadawane pytania** zawiera przegląd najczęściej pojawiających się pytań od naszych klientów. Znajdziesz tu pomocne odpowiedzi i szczegółowe informacje na różne tematy, które pomogą Ci szybko i sprawnie.

### Dokumentacja ZAP-Hosting

Oferujemy obszerną dokumentację naszych produktów, która służy jako baza wiedzy dla najczęściej zadawanych pytań i problemów. Znajdziesz tam różne poradniki i pomoc na różne tematy, które ułatwią Ci korzystanie i zarządzanie produktem.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Aktualności

Sekcja **Aktualności** dostarcza Ci pełny przegląd wszystkich ogłoszeń i nowości związanych z Twoją usługą. Znajdziesz tu ważne informacje na różne tematy, takie jak:

- Zmiany w usłudze, np. przez aktualizacje lub nowe funkcje
- Ogłoszenia o możliwych pracach serwisowych lub problemach technicznych
- Specjalne oferty i promocje, które dają Ci ekskluzywne korzyści lub rabaty
- Inne istotne informacje, które mogą mieć znaczenie dla korzystania z usługi

Regularne sprawdzanie **Aktualności** pozwoli Ci być na bieżąco i dostosować usługę, by wyciągnąć z serwera jak najwięcej.

<InlineVoucher />