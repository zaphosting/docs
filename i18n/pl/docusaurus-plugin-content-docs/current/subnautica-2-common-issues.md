---
id: subnautica-2-common-issues
title: "Subnautica 2: Najczęstsze problemy"
description: "Poznaj najczęstsze problemy serwera gier Subnautica 2, problemy z połączeniem i sposoby na poprawę wydajności, aby utrzymać grę online i stabilną -> Dowiedz się więcej teraz"
sidebar_label: "Najczęstsze problemy"
services:
  - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Problemy z serwerem Subnautica 2 mogą obejmować błędy podczas uruchamiania, awarie, lagi, problemy z połączeniem oraz słabą wydajność w grze. W tym poradniku dowiesz się, jak zidentyfikować typowe problemy na swoim serwerze gier Subnautica 2 i zastosować praktyczne rozwiązania, aby gra działała płynnie i bez przerw.

:::info Zmiany w Wczesnym Dostępie
Jeśli oprogramowanie serwera Subnautica 2 jest nadal aktywnie rozwijane, niektóre zachowania, pliki konfiguracyjne lub dostępne funkcje mogą różnić się między wersjami. Jeśli zauważysz różnice na swoim serwerze, zawsze porównaj je z aktualnie zainstalowaną wersją w panelu głównym ZAP-Hosting.
:::

<InlineVoucher />

## Problemy i rozwiązania

Problemy z serwerem nie zawsze wynikają z jednej usterki. Często przyczyną są przestarzałe pliki, błędne ustawienia, niewystarczające zasoby lub tymczasowe warunki sieciowe. Poniższe sekcje pomogą Ci krok po kroku rozwiązać najczęstsze problemy.

### Problemy ogólne

Problemy ogólne zwykle dotyczą podstawowej dostępności serwera, jego widoczności lub zachowania podczas uruchamiania. To często pierwsze rzeczy, które powinieneś sprawdzić przed szukaniem bardziej zaawansowanych przyczyn.

<details>
  <summary>Serwer nie jest widoczny w grze</summary>

Jeśli Twój serwer Subnautica 2 nie jest widoczny, może to oznaczać, że serwer nie uruchomił się poprawnie lub nie zakończył procesu inicjalizacji. Może to wynikać z nieprawidłowych wartości konfiguracyjnych, niekompletnych plików instalacyjnych lub błędów podczas startu.

Sprawdź następujące kwestie:

- Upewnij się, że serwer jest pokazany jako uruchomiony w panelu głównym ZAP-Hosting
- Przejrzyj konsolę serwera pod kątem błędów startowych
- Sprawdź pliki logów pod kątem brakujących plików lub nieudanych kroków inicjalizacji
- Potwierdź, że używasz poprawnych filtrów wyszukiwania w przeglądarce serwerów w grze
- Odczekaj kilka minut po starcie, ponieważ niektóre serwery potrzebują dodatkowego czasu, zanim pojawią się publicznie

Jeśli serwer nadal się nie pojawia, zrestartuj go raz i obserwuj konsolę od początku procesu uruchamiania.

</details>

<details>
  <summary>Serwer nie uruchamia się</summary>

Jeśli serwer w ogóle się nie uruchamia, przyczyną zwykle są uszkodzone pliki, niekompletna aktualizacja lub nieprawidłowa konfiguracja.

Powinieneś sprawdzić następujące punkty:

| Sprawdzenie | Dlaczego to ważne |
| --- | --- |
| Wyjście konsoli serwera | Pokazuje dokładny błąd startowy, jeśli występuje |
| Ostatnie zmiany w konfiguracji | Pojedyncza nieprawidłowa wartość może uniemożliwić start |
| Ostatnie przesłane lub zmodyfikowane pliki | Ręcznie zmienione pliki mogą być niekompletne lub niekompatybilne |
| Aktualna wersja gry | Niezgodność plików serwera może powodować natychmiastową awarię startu |

Jeśli niedawno zmieniałeś pliki konfiguracyjne, cofnij ostatnie zmiany i spróbuj ponownie. Jeśli problem pojawił się po aktualizacji lub ręcznej modyfikacji plików, przywrócenie kopii zapasowej może zaoszczędzić czas.

:::tip Korzystaj z kopii zapasowych przed większymi zmianami
Przed edycją ważnych plików lub aktualizacją serwera utwórz kopię zapasową, aby szybko cofnąć zmiany w razie pojawienia się problemów.
:::

</details>

<details>
  <summary>Hasło lub ustawienia dostępu do serwera nie działają prawidłowo</summary>

Jeśli gracze nie mogą dołączyć mimo że serwer jest online, dokładnie sprawdź ustawienia związane z dostępem. Błędne hasło, przestarzałe zapisane dane klienta lub rozbieżność między ustawieniami publicznymi i prywatnymi mogą blokować dostęp.

Powinieneś zweryfikować:

- Czy hasło wpisywane przez graczy dokładnie odpowiada aktualnemu hasłu serwera
- Czy serwer został zrestartowany po zmianie ustawień dostępu
- Czy nie są używane stare, zapisane po stronie klienta dane połączenia
- Czy wszelkie ustawienia prywatne lub whitelisty są skonfigurowane zgodnie z zamierzeniem, jeśli są dostępne w Twojej wersji serwera

Jeśli nie jesteś pewien, czy problem wynika z konfiguracji, tymczasowo uprość ustawienia i przetestuj z minimalnymi ograniczeniami.

</details>

### Problemy z awariami

Nieoczekiwane awarie przerywają rozgrywkę i mogą prowadzić do utraty danych, jeśli zdarzają się często. Najczęstsze przyczyny to przestarzałe pliki serwera, niekompatybilne modyfikacje lub przeciążone zasoby.

<details>
  <summary>Utrzymanie serwera w najnowszej wersji</summary>

Uruchamianie najnowszej dostępnej wersji serwera Subnautica 2 jest ważne dla stabilności, kompatybilności i bezpieczeństwa. Starsze wersje mogą zawierać błędy, które zostały już naprawione, lub mogą nie działać poprawnie z aktualnym klientem gry.

Przestarzały serwer może powodować:

- błędy podczas uruchamiania
- losowe awarie
- błędy niezgodności wersji
- niestabilne zachowanie w grze

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Jeśli Twój serwer zaczął się zawieszać po aktualizacji gry, najpierw sprawdź, czy w panelu głównym jest dostępna nowsza wersja serwera. Po aktualizacji zrestartuj serwer i przetestuj ponownie.

</details>

<details>
  <summary>Błędne lub niekompatybilne mody i dodatkowa zawartość</summary>

Jeśli Subnautica 2 w Twojej wersji obsługuje mody lub inne dodatkowe treści po stronie serwera, mogą one być częstą przyczyną awarii. Niekompatybilna lub przestarzała zawartość może ładować się częściowo, ale wywoływać błędy podczas rozgrywki.

Typowe objawy to:

- serwer zawiesza się po starcie
- serwer zawiesza się, gdy dołącza gracz
- serwer zamraża się podczas ładowania świata
- pojawiają się błędy po dodaniu nowej zawartości

Aby wyizolować przyczynę, wykonaj następujące kroki:

1. Zatrzymaj serwer
2. Usuń lub wyłącz niedawno dodaną zawartość
3. Uruchom serwer z minimalną konfiguracją
4. Przetestuj stabilność
5. Włączaj zawartość pojedynczo, aż problem się pojawi

Ta metoda pozwala dokładnie zidentyfikować, który plik lub pakiet powoduje problem.

:::caution Kompatybilność wersji
Używaj tylko modów, frameworków lub innych rozszerzeń potwierdzonych jako kompatybilne z Twoją aktualną wersją serwera Subnautica 2. Nawet jeden przestarzały element może powodować powtarzające się awarie.
:::

</details>

<details>
  <summary>Uszkodzony świat lub dane zapisu</summary>

Jeśli serwer zawiesza się podczas ładowania świata lub zaraz po dołączeniu graczy, dane zapisu mogą być uszkodzone. Może się to zdarzyć po wymuszonym wyłączeniu, przerwanych zapisach lub powtarzających się awariach.

Możliwe objawy to:

- serwer zawiesza się na tym samym etapie ładowania za każdym razem
- nowy świat uruchamia się poprawnie, ale istniejący nie
- konsola zgłasza błędy zapisu lub ładowania świata

Jeśli podejrzewasz uszkodzenie zapisu, przetestuj serwer z kopią zapasową lub świeżym światem, jeśli jest dostępny. Jeśli nowy świat działa bez problemów, problem prawdopodobnie dotyczy istniejących danych zapisu.

:::danger Ryzyko utraty danych
Nie usuwaj od razu istniejących plików świata. Najpierw wykonaj kopię zapasową, aby w razie potrzeby móc spróbować odzyskania danych.
:::

</details>

### Problemy z wydajnością

Problemy z wydajnością zwykle objawiają się lagami, opóźnionymi akcjami, wolnym ładowaniem świata lub niestabilną rozgrywką. Często wynikają z ustawień konfiguracyjnych, niewystarczających zasobów sprzętowych lub dużej ilości dodatkowej zawartości.

<details>
  <summary>Zła konfiguracja serwera</summary>

Nieprawidłowe wartości konfiguracyjne mogą zwiększać obciążenie CPU, pamięci lub dysku i obniżać ogólną wydajność serwera. Jeśli Twój serwer Subnautica 2 działa wolno lub niestabilnie, dokładnie sprawdź ustawienia.

Szczególnie zwróć uwagę, czy:

- limity związane z graczami są realistyczne dla Twojego pakietu
- ustawienia świata nie są bardziej wymagające niż to konieczne
- niedawno zmieniono ustawienia eksperymentalne lub niestandardowe
- serwer został zrestartowany po wprowadzeniu zmian

Konfigurację zwykle zarządza się w sekcji **Settings** lub przez dostępne pliki w **Configs** w panelu głównym ZAP-Hosting.

</details>

<details>
  <summary>Pakiet serwera nie spełnia wymagań projektu</summary>

Zbyt mały serwer dla Twojego projektu może powodować przycinanie, długie czasy ładowania i niestabilność. Jest to bardziej widoczne przy zwiększonej liczbie graczy, dodatkowej zawartości lub dużym, aktywnym świecie.

ZAP-Hosting oferuje rekomendowane konfiguracje podczas zamawiania, które pomagają dobrać odpowiednie zasoby do gry.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Poniższa tabela to ogólna pomoc w rozwiązywaniu problemów:

| Objaw | Możliwa przyczyna | Zalecane działanie |
| --- | --- | --- |
| Częste skoki lagów | Zbyt ograniczone zasoby CPU | Zmniejsz obciążenie lub ulepsz pakiet |
| Wolne czasy ładowania | Wąskie gardło w pamięci lub dysku | Sprawdź zużycie i rozważ więcej zasobów |
| Awarie przy dużej liczbie graczy | Niewystarczająca ogólna pojemność | Zmniejsz obciążenie lub zwiększ serwer |
| Dobra wydajność na pustym serwerze, słaba przy wielu graczach | Pakiet za mały do aktywnego użytkowania | Ulepsz pakiet zgodnie z oczekiwaną aktywnością |

:::note Minimalne zalecenia
Rekomendowane rozmiary pakietów to tylko punkt wyjścia. Jeśli Twój serwer gier Subnautica 2 używa większego świata, więcej graczy lub dodatkowej zawartości, od początku możesz potrzebować więcej zasobów.
:::

</details>

<details>
  <summary>Wysokie zużycie zasobów przez mody lub dodatkową zawartość</summary>

Nawet jeśli dodatkowa zawartość nie powoduje awarii serwera, może powodować poważne problemy z wydajnością. Słabo zoptymalizowane mody mogą zwiększać zużycie CPU, pochłaniać zbyt dużo pamięci lub wywoływać powtarzające się procesy w tle.

Dobrym sposobem na diagnozę jest porównanie wydajności z zawartością i bez niej. Jeśli serwer działa normalnie na minimalnej konfiguracji, stopniowo dodawaj zawartość, aż problem się pojawi.

Ta metoda jest szczególnie przydatna, gdy:

- lagi pojawiły się po instalacji nowej zawartości
- serwer staje się niestabilny z czasem
- spadki wydajności występują tylko w określonych obszarach lub sytuacjach
- zużycie zasobów rośnie bez widocznych zmian w konfiguracji

</details>

<details>
  <summary>Duży świat lub długo działający zapis powoduje spowolnienia</summary>

Wraz ze wzrostem świata serwera i aktywności graczy wydajność może spadać. To częste na długo działających serwerach z dużą ilością zapisanych danych świata.

Jeśli zauważysz, że wydajność była dobra na początku, a potem się pogorszyła, rozważ:

- przetestowanie, czy nowsza kopia zapasowa działa lepiej
- sprawdzenie, czy nie jest zbyt wielu aktywnych graczy jednocześnie
- usunięcie niepotrzebnej dodatkowej zawartości
- sprawdzenie, czy problem występuje tylko w jednym konkretnym świecie

Jeśli świeży świat testowy działa znacznie lepiej, spowolnienie może być związane z rozmiarem świata lub złożonością zapisu.

</details>

### Problemy sieciowe

Problemy sieciowe wpływają na to, jak gracze łączą się i korzystają z Twojego serwera. Mogą objawiać się wysokim pingiem, skokami lagów, rozłączeniami lub całkowitą niedostępnością.

<details>
  <summary>Skoki pingu, lagi i opóźnienia sieciowe</summary>

Skoki pingu i opóźnienia sieciowe często wynikają z obciążenia serwera i warunków trasowania. Nawet jeśli gra jest online, przeciążony sprzęt lub duża odległość geograficzna mogą pogarszać doświadczenie.

Typowe przyczyny to:

- lokalizacja serwera jest daleko od bazy graczy
- serwer jest mocno obciążony CPU lub pamięcią
- wielu graczy jest połączonych jednocześnie
- zadania w tle lub inne procesy zużywają zasoby
- występują tymczasowe problemy z trasowaniem lub utratą pakietów między graczami a serwerem

Aby poprawić jakość sieci, sprawdź:

| Sprawdzenie | Efekt |
| --- | --- |
| Wybierz lokalizację blisko graczy | Niższe średnie opóźnienie |
| Zmniejsz niepotrzebne obciążenie serwera | Mniej skoków lagów podczas gry |
| Utrzymuj serwer zaktualizowany | Lepsza stabilność i kompatybilność |
| Testuj o różnych porach | Pomaga wykryć tymczasowe problemy z trasowaniem |

Jeśli problem dotyczy tylko jednego gracza, przyczyna może leżeć po stronie jego łącza. Jeśli wszyscy gracze mają problem, przyczyna jest prawdopodobnie po stronie serwera lub trasy.

</details>

<details>
  <summary>Gracze rozłączają się losowo</summary>

Losowe rozłączenia mogą być spowodowane niestabilnym trasowaniem, przeciążeniem zasobów serwera lub tymczasową niestabilnością oprogramowania. Jeśli gracze są wyrzucani bez wyraźnego powodu w grze, porównaj czas rozłączeń z komunikatami w konsoli i skokami wydajności.

Sprawdź:

- czy rozłączenia występują podczas szczytowego obciążenia
- czy serwer się restartuje lub chwilowo zamraża
- czy wszyscy gracze rozłączają się jednocześnie, czy tylko pojedyncze osoby
- czy problem pojawił się po ostatniej aktualizacji lub zmianie konfiguracji

Jeśli wszyscy gracze rozłączają się jednocześnie, problem zwykle dotyczy serwera lub ścieżki sieciowej. Jeśli tylko jeden gracz, przyczyna jest często lokalna po jego stronie.

</details>

<details>
  <summary>Ataki DDoS i inne zagrożenia sieciowe</summary>

Serwery gier mogą być czasem celem złośliwego ruchu, w tym ataków Distributed Denial of Service. Mogą one powodować lagi, problemy z połączeniem lub tymczasową niedostępność.

ZAP-Hosting zapewnia ochronę DDoS dla hostowanych usług, co pomaga zm