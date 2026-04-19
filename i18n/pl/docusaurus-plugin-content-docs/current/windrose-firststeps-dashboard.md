---
id: windrose-firststeps-dashboard
title: "Windrose: Przegląd panelu głównego"
description: "Odkryj panel główny Windrose w ZAP-Hosting i naucz się zarządzać wynajmem serwerów gier, monitorować wydajność oraz efektywnie korzystać z kluczowych funkcji administracyjnych -> Dowiedz się więcej już teraz"
sidebar_label: Panel główny
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Panel główny **Windrose** to centralne miejsce do zarządzania Twoim serwerem gier w interfejsie webowym ZAP-Hosting. W tym poradniku poznasz uporządkowany przegląd dostępnych sekcji panelu oraz nauczysz się efektywnie korzystać z najważniejszych narzędzi administracyjnych, monitorujących i hostingowych.

<InlineVoucher />

## Administracja produktu

W obszarze **Administracja produktu** znajdziesz najważniejsze strony do kontroli i monitoringu Twojego serwera **Windrose**. Te strony pomogą Ci zarządzać aktualnym stanem serwera, przeglądać zdarzenia techniczne oraz szybko uzyskać dostęp do kluczowych informacji o usłudze.

### Panel główny

**Panel główny** to główna strona przeglądu Twojego serwera **Windrose**. Znajdziesz tu zazwyczaj najważniejsze informacje o usłudze na pierwszy rzut oka, takie jak aktualny status serwera, lokalizacja, adres połączenia oraz wykorzystanie zasobów.

![img](https://screensaver01.zap-hosting.com/index.php/s/boTwmEC5HSjbKYK/preview)

W zależności od aktualnej konfiguracji serwera i integracji gry, panel może również wyświetlać dodatkowe dane, takie jak aktywna mapa, nazwa serwera, używana pamięć czy wykorzystanie slotów dla graczy. To także miejsce, gdzie możesz bezpośrednio uruchomić, zatrzymać lub zrestartować usługę.

Panel główny jest szczególnie przydatny, ponieważ łączy kontrolę serwera i monitoring w jednym miejscu. Dzięki temu szybko sprawdzisz, czy usługa jest online i od razu zareagujesz, jeśli zajdzie taka potrzeba.

### Statystyki

W sekcji **Statystyki** możesz przejrzeć historyczne dane o wykorzystaniu Twojego serwera. Pomaga to lepiej zrozumieć, jak działa Twój hosting **Windrose** na przestrzeni czasu.

![](https://screensaver01.zap-hosting.com/index.php/s/N8jcmdqqG2Xt4Bk/preview)

Dostępne wykresy zwykle obejmują takie wartości jak użycie CPU, pamięci oraz wykorzystanie slotów. Często możesz przełączać się między różnymi zakresami czasowymi, aby analizować krótkoterminowe skoki lub długoterminowe trendy.

| Metryka | Cel |
| --- | --- |
| Użycie CPU | Pomaga zidentyfikować obciążenie procesora i możliwe wąskie gardła wydajności |
| Użycie pamięci | Pokazuje, ile RAM zużywa Twój serwer |
| Wykorzystanie slotów | Informuje, ile dostępnych slotów dla graczy jest aktywnie używanych |

:::tip Analiza wydajności
Jeśli zauważysz lagi, crash’e lub wolne reakcje, strona ze statystykami to jedno z najlepszych miejsc, by zacząć diagnozę. Pomoże Ci ustalić, czy problem jest związany z wykorzystaniem zasobów lub wystąpił tylko w określonym czasie.
:::

### Menedżer DDoS

**Menedżer DDoS** pozwala przeglądać informacje o wykrytych i zneutralizowanych atakach DDoS na Twoją usługę. To przydatne, jeśli chcesz zrozumieć nietypowe wzorce ruchu lub zbadać przerwy w działaniu spowodowane złośliwym ruchem.

![](https://screensaver01.zap-hosting.com/index.php/s/ScCCCY52CMLgfyE/preview)

W zależności od wykupionych opcji i dostępnej ochrony w wybranej lokalizacji serwera, możesz mieć też możliwość podglądu aktywnych ataków i szczegółów ruchu w czasie rzeczywistym.

:::info Dostępność Menedżera DDoS
Menedżer DDoS jest dostępny tylko, jeśli Twoja usługa zawiera dedykowany adres IP lub dodatkową opcję **Przegląd Menedżera DDoS**. Jeśli nie masz tego w aktualnym pakiecie, musisz najpierw dokonać aktualizacji usługi.
:::

### Pliki logów

Jeśli Twój serwer **Windrose** wyświetla błędy lub zachowuje się nieoczekiwanie, sekcja **Pliki logów** jest jednym z najważniejszych miejsc do sprawdzenia. Pliki logów zawierają techniczne dane wyjściowe serwera, w tym ostrzeżenia, komunikaty startowe i szczegóły błędów.

Te pliki są szczególnie przydatne, gdy musisz zidentyfikować przyczynę crash’y, nieudanych startów lub problemów konfiguracyjnych.

:::caution Ograniczenia przeglądu logów
Jeśli dane z logów są niejasne lub nie pomagają zidentyfikować problemu, powinieneś skontaktować się z supportem przez oficjalną [stronę wsparcia](https://zap-hosting.com/en/customer/support/). Dołącz jasny opis problemu oraz odpowiednie komunikaty z logów, aby przyspieszyć diagnozę.
:::

### Dziennik zdarzeń

**Dziennik zdarzeń** daje przegląd akcji i zdarzeń związanych z Twoją usługą. Może to obejmować uruchomienia, zatrzymania, crash’e, instalacje, aktualizacje i działania backupowe.

![](https://screensaver01.zap-hosting.com/index.php/s/xNzsaMbW5BS5KJC/preview)

Ta sekcja jest szczególnie pomocna, jeśli chcesz zweryfikować, kiedy nastąpiła zmiana lub czy zadanie automatyczne zostało wykonane poprawnie.

### Konsola na żywo

**Konsola na żywo** pokazuje w czasie rzeczywistym wyjście serwera podczas działania Twojego serwera **Windrose**. Pozwala monitorować, co aktualnie dzieje się na serwerze i pomaga natychmiast wykryć problemy.

![](https://screensaver01.zap-hosting.com/index.php/s/J9SsmSrPXnG7P9w/preview)

Jeśli oprogramowanie serwera to wspiera, możesz też wysyłać komendy bezpośrednio przez konsolę na żywo. To przydatne do działań administracyjnych, które trzeba wykonać bez restartu usługi.

| Funkcja | Opis |
| --- | --- |
| Wyjście w czasie rzeczywistym | Wyświetla aktualne zdarzenia i komunikaty serwera |
| Widoczność błędów | Pomaga zidentyfikować problemy na bieżąco |
| Wprowadzanie komend | Pozwala wysyłać obsługiwane komendy serwera bezpośrednio |

### Przerwy w działaniu usługi

Jeśli Twój serwer był chwilowo niedostępny i nie ma oczywistej przyczyny w dzienniku zdarzeń lub plikach logów, problem może dotyczyć systemu hostującego, a nie samej usługi.

W sekcji **Przerwy w działaniu usługi** możesz przejrzeć historię przerw związanych ze środowiskiem hosta Twojego serwera gier. Dla szerszych informacji o statusie platformy możesz też sprawdzić oficjalną [stronę statusu](https://status.zap-hosting.com/).

## Ustawienia

Obszar **Ustawienia** zawiera główne strony konfiguracyjne Twojego serwera **Windrose**. Tutaj możesz dostosować zachowanie usługi, zmienić zainstalowane gry tam, gdzie to możliwe, zarządzać aktualizacjami i konfigurować funkcje automatyzacji.

### Ustawienia

Strona **Ustawienia** oferuje uproszczony przegląd najczęściej używanych opcji serwera. To szczególnie przydatne, jeśli dopiero zaczynasz przygodę z wynajmem serwerów gier i chcesz wprowadzać zmiany bez bezpośredniej edycji plików konfiguracyjnych.

Jeśli dostępne dla **Windrose**, opcje te mogą obejmować ustawienia związane z rozgrywką lub inne popularne parametry usługi. Konkretne opcje mogą się różnić w zależności od integracji gry.

### Konfiguracje

Sekcja **Konfiguracje** pozwala na edycję plików konfiguracyjnych bezpośrednio przez interfejs webowy. Daje to precyzyjniejszą kontrolę niż uproszczona strona ustawień i jest zwykle lepsze dla zaawansowanych użytkowników.

:::caution Nadpisywanie wartości
Niektóre wartości mogą być zarządzane przez uproszczoną stronę **Ustawienia**. Jeśli zauważysz, że ręczne zmiany w edytorze konfiguracji są nadpisywane, sprawdź, czy ta sama opcja nie jest kontrolowana tam.
:::

### Gry

W sekcji **Gry** możesz przełączyć się na inną dostępną grę lub wariant gry, jeśli Twoja usługa to wspiera. Gry o tej samej cenie za slot zwykle można wybrać bezpośrednio, natomiast inne mogą wymagać najpierw zmiany pakietu.

Jeśli chcesz dowiedzieć się więcej o zmianie zainstalowanej gry na swojej usłudze, zajrzyj do poradnika [Zmiana gry](gameserver-gameswitch.md).

![](https://screensaver01.zap-hosting.com/index.php/s/xkkECw7o52fAMWk/preview)

### Wersje

Strona **Wersje** pozwala zarządzać zainstalowaną wersją serwera dla Twojej usługi **Windrose**, jeśli zarządzanie wersjami jest wspierane. Zazwyczaj możesz zaktualizować do najnowszej dostępnej wersji i włączyć automatyczne aktualizacje.

![](https://screensaver01.zap-hosting.com/index.php/s/BH2JzyRHTeLdKHz/preview)

Automatyczne aktualizacje pomagają utrzymać środowisko hostingowe na bieżąco, ale po większych zmianach wersji warto zweryfikować kompatybilność.

### Zadania zaplanowane

Dzięki **Zadaniom zaplanowanym** możesz automatyzować powtarzalne akcje na swoim serwerze. To przydatne, jeśli chcesz ograniczyć ręczną administrację i utrzymać usługę w stabilnym działaniu.

![](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

Typowe automatyczne akcje to:

| Typ zadania | Przykładowe zastosowanie |
| --- | --- |
| Uruchomienie usługi | Automatyczne włączenie serwera o określonej godzinie |
| Zatrzymanie usługi | Wyłączenie serwera podczas okien konserwacyjnych |
| Restart usługi | Wykonywanie rutynowych restartów dla stabilności |
| Tworzenie kopii zapasowej | Regularne backupy bez ręcznej obsługi |
| Własne komendy | Automatyczne uruchamianie obsługiwanych komend |

### Planer restartów

**Planer restartów** jest dedykowany do harmonogramowania automatycznych restartów serwera. Przydaje się, jeśli chcesz regularnie restartować swój serwer **Windrose**, np. w godzinach o niskiej aktywności.

![](https://screensaver01.zap-hosting.com/index.php/s/Y6WciDS7YP98P4m/preview)

### Ustawienia DNS

W **Ustawieniach DNS** możesz przypisać bardziej przyjazny adres do swojej usługi. Ułatwia to zapamiętanie serwera i dzielenie się nim z innymi graczami.

![](https://screensaver01.zap-hosting.com/index.php/s/tM5FGTHRSbZA5rN/preview)

W zależności od konfiguracji i wykupionych opcji możesz użyć subdomeny dostarczonej przez ZAP lub własnej domeny.

## Narzędzia

Sekcja **Narzędzia** zawiera dodatkowe funkcje zarządzania usługą, które wspierają dostęp do plików, zarządzanie bazami danych i obsługę kopii zapasowych.

### Przeglądarka FTP

W **Przeglądarce FTP** znajdziesz dane potrzebne do połączenia z plikami serwera. Dostęp FTP jest przydatny, gdy musisz przesłać, pobrać lub edytować pliki bezpośrednio.

![](https://screensaver01.zap-hosting.com/index.php/s/sX85i9HyzR9wmAM/preview)

Dla łatwiejszego zarządzania plikami zalecamy korzystanie z zewnętrznego klienta FTP, takiego jak [FileZilla](https://filezilla-project.org/) lub [WinSCP](https://winscp.net/). Jeśli potrzebujesz pomocy z połączeniem, zajrzyj do poradnika [Dostęp przez FTP](gameserver-ftpaccess.md).

### Bazy danych

W sekcji **Bazy danych** możesz tworzyć i zarządzać bazami danych dołączonymi do Twojego serwera gier, jeśli są wymagane przez konfigurację. To przydatne dla usług, modów lub narzędzi potrzebujących strukturalnego przechowywania danych.

![](https://screensaver01.zap-hosting.com/index.php/s/WFLwCbZSQfYjrmD/preview)

Zwykle możesz tu przeglądać dane dostępowe, tworzyć nowe bazy oraz importować istniejące kopie zapasowe.

### Kopie zapasowe

Sekcja **Kopie zapasowe** pozwala tworzyć i zarządzać backupami Twojego serwera oraz, tam gdzie to wspierane, powiązanych danych bazodanowych.

![](https://screensaver01.zap-hosting.com/index.php/s/nm9za5LTMEcNsga/preview)

Regularne kopie zapasowe są mocno zalecane, ponieważ pozwalają przywrócić usługę po błędach konfiguracyjnych, uszkodzeniu plików lub niespodziewanych problemach.

:::tip Najlepsze praktyki backupu
Przed większymi zmianami, takimi jak edycja plików konfiguracyjnych, zmiana wersji czy zmiana gry, wykonaj ręczną kopię zapasową. Zapewni Ci to bezpieczny punkt przywracania na wypadek problemów.
:::

## Dalsze linki

Sekcja **Dalsze linki** zawiera dodatkowe zasoby związane z Twoją usługą i ogólnym korzystaniem z platformy ZAP-Hosting.

### Najczęściej zadawane pytania

Obszar **Najczęściej zadawane pytania** zawiera odpowiedzi na typowe tematy dotyczące Twojej usługi. To może pomóc szybciej rozwiązać standardowe problemy bez konieczności kontaktu z supportem.

### Dokumentacja ZAP-Hosting

**Dokumentacja ZAP-Hosting** daje dostęp do szerokiej bazy wiedzy obejmującej administrację serwerami, konfigurację hostingu, rozwiązywanie problemów i pokrewne tematy. Jeśli szukasz bardziej zaawansowanych poradników poza tym przeglądem panelu **Windrose**, to najlepsze miejsce, by kontynuować.

![](https://screensaver01.zap-hosting.com/index.php/s/n48ct6aZBrNq7eT/preview)

### Aktualności

Sekcja **Aktualności** zawiera ogłoszenia dotyczące Twojej usługi. Mogą to być informacje techniczne, komunikaty o konserwacjach, zmiany funkcji i inne ważne aktualizacje.

Regularne sprawdzanie tej sekcji pomaga być na bieżąco ze zmianami, które mogą wpłynąć na środowisko hostingu Twojego serwera **Windrose**.

<InlineVoucher />

## Podsumowanie

Masz teraz pełny przegląd najważniejszych obszarów panelu głównego **Windrose** w panelu ZAP-Hosting, od monitoringu serwera i logów po ustawienia, narzędzia i funkcje automatyzacji. Ta wiedza pozwoli Ci sprawniej poruszać się po usłudze hostingowej i zarządzać serwerem z większą pewnością.

Gratulacje, pomyślnie nauczyłeś się korzystać z panelu głównego Windrose. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂