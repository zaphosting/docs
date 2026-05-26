---
id: subnautica-2-connect-to-server
title: "Subnautica 2: Połącz się z serwerem"
description: "Dowiedz się, jak połączyć się z serwerem Subnautica 2, korzystając z poprawnych danych serwera i nawiązać stabilne połączenie bez typowych problemów -> Sprawdź teraz"
sidebar_label: "Subnautica 2: Połącz się z serwerem"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Nie wiesz, jak połączyć się ze swoim serwerem **Subnautica 2** lub jakie dane są do tego potrzebne? Ten poradnik pokaże Ci, jak zdobyć niezbędne informacje o serwerze, nawiązać połączenie oraz rozwiązać typowe problemy z łącznością.

:::info Informacja o Wczesnym Dostępie
Subnautica 2 może nadal być w fazie aktywnego rozwoju, w zależności od aktualnego etapu wydania. W związku z tym funkcje multiplayer, działanie przeglądarki serwerów oraz proces łączenia mogą się zmieniać z czasem.
:::

<InlineVoucher />

## Zdobycie danych serwera

Będziesz potrzebować wszystkich istotnych informacji niezbędnych do połączenia z serwerem. Dane swojego serwera znajdziesz w panelu głównym swojego serwera gier w panelu administracyjnym. Najważniejsze informacje to:

- adres IP i port
- nazwa serwera
- hasło do serwera

Dzięki powyższym danym łatwo zidentyfikujesz swój serwer i upewnisz się, że łączysz się z właściwym.

| Szczegół | Opis |
| --- | --- |
| `adres IP` | Publiczny adres Twojego serwera Subnautica 2 |
| `port` | Port gry używany do połączenia |
| `nazwa serwera` | Nazwa wyświetlana w grze, jeśli dostępna jest lista serwerów lub przeglądarka sesji |
| `hasło do serwera` | Wymagane tylko, jeśli serwer jest chroniony hasłem |

![img](https://screensaver01.zap-hosting.com/index.php/s/tSHRbW66eDXBxJn/preview)

## Nawiązywanie połączenia z serwerem

Sposób połączenia z serwerem **Subnautica 2** zależy od dostępnych opcji multiplayer w wersji gry, której używasz. Zazwyczaj potrzebujesz **adresu IP** i **portu** serwera, a czasem także **hasła do serwera**.

### Dołączanie przez menu multiplayer w grze

Uruchom **Subnautica 2** i otwórz sekcję multiplayer lub dołączania do serwera z menu głównego. Jeśli gra oferuje opcję bezpośredniego połączenia, wpisz dokładnie `adres IP` i `port` swojego serwera tak, jak pokazano w panelu administracyjnym ZAP-Hosting. Jeśli jest ustawione hasło, wpisz je, gdy zostaniesz o to poproszony.

Po potwierdzeniu danych gra spróbuje nawiązać połączenie z Twoim serwerem.

:::note Dostępność Bezpośredniego Połączenia
Dokładne nazwy menu i przycisków mogą się różnić w zależności od wersji gry. Jeśli nie widzisz opcji bezpośredniego połączenia, sprawdź, czy gra wymaga dołączenia przez listę serwerów, system zaproszeń lub przeglądarkę sesji.
:::

### Dołączanie przez listę serwerów lub przeglądarkę sesji

Jeśli **Subnautica 2** korzysta z wbudowanej przeglądarki serwerów zamiast pola do bezpośredniego połączenia, wyszukaj swój serwer po skonfigurowanej `nazwie serwera`. Dlatego ważne jest, aby przed próbą połączenia sprawdzić nazwę serwera w panelu administracyjnym.

Gdy znajdziesz właściwy serwer na liście:

1. Wybierz wpis serwera
2. Sprawdź, czy wyświetlana nazwa zgadza się z Twoim serwerem
3. Dołącz do serwera
4. Wpisz hasło, jeśli zostaniesz o to poproszony

:::tip Używaj Unikalnych Nazw Serwerów
Jeśli Twój serwer trudno zidentyfikować na liście, nadaj mu jasną i unikalną nazwę w konfiguracji serwera. Ułatwi to znalezienie właściwego wpisu i uniknięcie połączenia z niewłaściwym serwerem.
:::

### Jeśli serwer nie jest od razu widoczny

Brak widoczności serwera w przeglądarce w grze nie zawsze oznacza, że serwer jest offline. Czasami listy serwerów odświeżają się z opóźnieniem lub gra pokazuje serwery dopiero po pomyślnej inicjalizacji.

Sprawdź następujące kwestie:

- Serwer jest online w panelu administracyjnym ZAP-Hosting
- Używany jest poprawny port gry
- Serwer został w pełni uruchomiony
- Nazwa serwera jest poprawnie skonfigurowana
- Wpisano hasło, jeśli jest wymagane

![img](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Potencjalne problemy i rozwiązania

Połączenie z serwerem gier może być często zakłócone przez różne czynniki. Najczęstsze problemy i ich rozwiązania opisano poniżej.

### Brak widoczności

Brak widoczności serwera może wystąpić, jeśli proces inicjalizacji nie został poprawnie zakończony. Może to być spowodowane np. błędną konfiguracją lub uszkodzonymi plikami. Więcej informacji zwykle znajdziesz w konsoli serwera lub plikach logów.

:::caution Serwer musi się w pełni uruchomić
Nie próbuj łączyć się, zanim serwer zakończy proces uruchamiania. Jeśli serwer nadal się ładuje lub restartuje, gracze mogą nie mieć możliwości połączenia lub serwer może nie pojawiać się na żadnej liście.
:::

### Niepoprawne dane połączenia

Jeśli nie możesz nawiązać połączenia, sprawdź, czy używasz poprawnego `adresu IP`, `portu` i `hasła do serwera`. Nawet drobny błąd w pisowni może uniemożliwić połączenie.

| Sprawdź | Co zweryfikować |
| --- | --- |
| `adres IP` | Zgadza się z adresem pokazanym w panelu głównym serwera |
| `port` | Zgadza się z przypisanym portem gry |
| `hasło` | Wpisane dokładnie tak, jak skonfigurowano, uwzględniając wielkość liter |
| `nazwa serwera` | Zgadza się z nazwą skonfigurowaną, jeśli wyszukujesz w przeglądarce |

### Serwer jest online, ale połączenie nie działa

Jeśli serwer jest online, ale nadal nie możesz się połączyć, sprawdź konsolę serwera i logi w panelu administracyjnym. Błędy tam mogą wskazywać, czy serwer nie załadował się poprawnie lub czy problem konfiguracyjny blokuje połączenia graczy.

:::tip Najpierw sprawdź logi
Konsola serwera i pliki logów to zwykle najszybszy sposób, by dowiedzieć się, dlaczego połączenie nie działa. Pomogą Ci potwierdzić, czy serwer nasłuchuje poprawnie i czy próby dołączenia docierają do serwera.
:::

### Brak rozwiązania lub brak pomocy

Masz dalej problemy po próbie rozwiązania? W takim przypadku nasz zespół wsparcia jest dostępny codziennie, by Ci pomóc. Po prostu utwórz **[Ticket](https://zap-hosting.com/en/customer/support/)** na naszej stronie i opisz swój problem jak najdokładniej. Dołącz adres IP serwera, port oraz krótki opis tego, co się dzieje podczas próby połączenia.

## Podsumowanie

Gratulacje, pomyślnie połączyłeś się ze swoim serwerem Subnautica 2. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!