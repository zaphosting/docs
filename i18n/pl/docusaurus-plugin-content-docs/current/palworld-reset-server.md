---
id: palworld-reset-server
title: "Palworld: Reset Serwera"
description: "Dowiedz się, jak zresetować swój serwer Palworld w panelu ZAP, jakie ustawienia zostaną usunięte i jak bezpiecznie przywrócić domyślne dane serwera. -> Sprawdź teraz"
sidebar_label: Palworld: Reset Serwera
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld przechowuje Twój świat, postępy graczy oraz ustawienia serwera na serwerze gier. W tym poradniku nauczysz się, jak całkowicie zresetować swój serwer Palworld na ZAP-Hosting i zacząć od nowa z czystą, domyślną instalacją.

:::danger Ostrzeżenie o Całkowitym Usunięciu Danych
Pełny reset trwale usuwa istniejące dane zapisu, zmiany konfiguracji oraz wszystkie inne pliki serwera przechowywane na bieżącej instalacji. Używaj tego tylko jako ostateczności.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera Palworld w panelu ZAP-Hosting i że nie potrzebujesz już obecnych danych świata.

:::info Najpierw Zrób Kopię Zapasową Ważnych Danych
Jeśli chcesz zachować kopię swojego aktualnego świata lub konfiguracji, wykonaj kopię zapasową przed kontynuacją. Po zakończeniu resetu usuniętych danych zazwyczaj nie da się odzyskać.
:::

## Co robi reset serwera Palworld?

Pełny reset Palworld to nie to samo co zmiana pojedynczego ustawienia w pliku konfiguracyjnym. Reset oznacza ponowną instalację całego serwera i usunięcie obecnych danych serwera.

Proces resetu zazwyczaj usuwa następujące elementy:

| Typ danych | Usuwane podczas resetu |
| --- | --- |
| Dane zapisu świata | Tak |
| Postępy graczy | Tak |
| Zmiany konfiguracji serwera | Tak |
| Zainstalowane mody lub pliki niestandardowe | Tak |
| Domyślne pliki gry | Automatycznie ponownie instalowane |

Po resecie serwer startuje z czystą instalacją i domyślnymi ustawieniami.

## Sprawdź najpierw lokalizację konfiguracji

Do zwykłych zmian konfiguracji Palworld możesz uzyskać dostęp do odpowiednich plików w administracji serwera gier w zakładce `Configs`. Główne ustawienia Palworld są zwykle przechowywane w następującym pliku:

| Plik | Przeznaczenie |
| --- | --- |
| `PalWorldSettings.ini` | Główny plik konfiguracyjny serwera Palworld |

W panelu ZAP-Hosting zazwyczaj znajdziesz go w administracji serwera Palworld pod `Configs`.

:::note Reset Nie Wymaga Ręcznej Edycji Konfiguracji
Pełny reset serwera nie wymaga ręcznej edycji pliku `PalWorldSettings.ini`. Ten plik jest istotny przy zwykłych zmianach ustawień, ale kompletny reset wykonuje się przez ponowną instalację lub formatowanie serwera, co powoduje odtworzenie wszystkich plików z domyślnymi wartościami.
:::

Jeśli chcesz tylko zmienić ustawienia rozgrywki, zamiast usuwać cały serwer, edytuj plik konfiguracyjny w `Configs`.

## Zatrzymaj serwer

Przed rozpoczęciem resetu musisz całkowicie zatrzymać serwer Palworld.

1. Zaloguj się do panelu ZAP-Hosting.
2. Otwórz swój serwer gier Palworld.
3. Zatrzymaj serwer za pomocą narzędzi administracyjnych.
4. Poczekaj, aż status serwera potwierdzi, że jest offline.

:::caution Nie Resetuj, Gdy Serwer Działa
Jeśli rozpoczniesz reset, gdy serwer jest jeszcze aktywny, pliki mogą nie zostać poprawnie usunięte, a dane zapisu mogą stać się niespójne.
:::

## Ponowna instalacja i reset serwera

Pełny reset Palworld wykonuje się przez ponowną instalację serwera z opcją formatowania lub resetu w panelu ZAP.

### Otwórz funkcję ponownej instalacji

W administracji serwera Palworld poszukaj funkcji ponownej instalacji lub resetu w obszarze zarządzania serwerem.

Ponieważ nazwy opcji mogą się różnić w zależności od wersji panelu, dokładne sformułowanie może być nieco inne. Na ZAP-Hosting funkcja ta zwykle znajduje się w obszarze administracji serwera, gdzie dostępne są opcje reinstalacji lub formatowania.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Rozpocznij pełny reset

Skorzystaj z dostępnej opcji reinstalacji, która wykonuje pełne formatowanie lub reset danych serwera.

Na tym etapie potwierdź akcję, jeśli panel poprosi o potwierdzenie.

:::danger Ta Akcja Usuwa Wszystkie Dane Serwera
Pełna reinstalacja lub formatowanie usuwa zapisy, konfiguracje i niestandardowe pliki serwera. Kontynuuj tylko, jeśli jesteś pewien, że chcesz zresetować wszystko.
:::

### Poczekaj na zakończenie instalacji

Po potwierdzeniu resetu poczekaj, aż proces reinstalacji zostanie zakończony. W zależności od stanu panelu i rozmiaru serwera może to potrwać kilka minut.

Nie przerywaj procesu podczas reinstalacji serwera.

## Uruchom świeży serwer Palworld

Po zakończeniu reinstalacji uruchom ponownie serwer Palworld z poziomu administracji serwera.

Po starcie:

- zostanie utworzony nowy zapis świata
- zostaną użyte domyślne ustawienia serwera
- poprzednie postępy graczy i świata nie będą już dostępne

W razie potrzeby możesz teraz wrócić do `Configs` i ponownie dostosować ustawienia Palworld w `PalWorldSettings.ini`.

## Sprawdź efekt resetu

Po uruchomieniu serwera połącz się z nim i potwierdź, że reset przebiegł pomyślnie.

Powinieneś zweryfikować następujące elementy:

| Sprawdzenie | Oczekiwany rezultat |
| --- | --- |
| Stan świata | Nowy, świeży świat |
| Dane graczy | Brak wcześniejszych postępów |
| Ustawienia serwera | Domyślne wartości, chyba że zmienione ponownie |
| Niestandardowe pliki lub mody | Usunięte, chyba że zainstalowane ręcznie ponownie |

Jeśli stary świat nadal się pojawia, zatrzymaj serwer i sprawdź, czy proces reinstalacji zakończył się pomyślnie w panelu ZAP. Jeśli panel nie wykonał pełnego formatowania, może być konieczne powtórzenie procesu.

## Ponowna konfiguracja ustawień serwera po resecie

Po udanym resecie Twój serwer Palworld będzie korzystał z domyślnych wartości konfiguracyjnych. Jeśli chcesz ponownie dostosować serwer, otwórz sekcję `Configs` w administracji serwera i edytuj `PalWorldSettings.ini`.

Typowe zadania po resecie to:

- zmiana nazwy serwera
- ustawienie hasła
- dostosowanie poziomu trudności lub wartości rozgrywki
- ponowne zastosowanie niestandardowych zmian konfiguracji
- ponowna instalacja wspieranych modów lub dodatkowych plików, jeśli jest to potrzebne

:::tip Ostrożnie Przywracaj Ustawienia
Jeśli poprzednia konfiguracja powodowała problemy, unikaj natychmiastowego kopiowania wszystkich starych ustawień. Przywróć tylko te, których faktycznie potrzebujesz, aby łatwiej zidentyfikować problematyczne zmiany.
:::

## Podsumowanie konfiguracji

Poniższa tabela podsumowuje istotne pliki i zachowanie resetu:

| Element | Szczegóły |
| --- | --- |
| Główny plik konfiguracyjny | `PalWorldSettings.ini` |
| Lokalizacja w ZAP do edycji konfiguracji | `Configs` w administracji serwera gier |
| Ręczna zmiana konfiguracji wymagana do pełnego resetu | Nie |
| Wymagana akcja do pełnego resetu | Reinstalacja lub format/reset serwera |
| Wymagany restart po resecie | Tak, uruchom serwer ponownie po reinstalacji |
| Dodatkowe wymagane komendy | Brak potwierdzonych |

:::note Nazewnictwo w Interfejsie Może Się Różnić
Dokładne nazwy opcji reinstalacji lub formatowania mogą się różnić w zależności od wersji panelu ZAP. Jeśli nie możesz znaleźć funkcji resetu, skontaktuj się z supportem przed próbą alternatywnych metod usuwania plików.
:::

## Podsumowanie

Gratulacje, pomyślnie zresetowałeś swój serwer Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂