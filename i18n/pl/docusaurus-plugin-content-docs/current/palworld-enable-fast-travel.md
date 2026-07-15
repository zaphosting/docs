---
id: palworld-enable-fast-travel
title: "Palworld: Włącz szybkie podróże"
description: "Dowiedz się, jak skonfigurować szybkie podróże na swoim serwerze Palworld, w tym ustawienia podróży tylko między bazami oraz ręczne zmiany w konfiguracji. -> Sprawdź teraz"
sidebar_label: Palworld: Włącz szybkie podróże
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala kontrolować, jak gracze korzystają z szybkich podróży na Twoim serwerze poprzez główną konfigurację serwera. W tym poradniku nauczysz się, jak edytować odpowiedni plik konfiguracyjny w panelu ZAP-Hosting, dostosować ustawienia szybkich podróży i poprawnie zastosować zmiany.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting oraz uprawnienia do edycji plików konfiguracyjnych.

:::info Wymagana ręczna konfiguracja
Ta konfiguracja odbywa się poprzez ręczną edycję pliku konfiguracyjnego serwera Palworld. Możesz uzyskać dostęp do wymaganego pliku w panelu administracyjnym serwera gier w sekcji `Configs`.
:::

## Znajdź plik konfiguracyjny

Aby zmienić zachowanie szybkich podróży, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld.
2. Przejdź do `Configs`.
3. Otwórz plik `PalWorldSettings.ini`.

Ten plik zawiera ustawienia rozgrywki serwera, w tym opcje szybkich podróży.

:::note Lokalizacja konfiguracji
W zależności od aktualnego układu panelu, plik jest zarządzany przez sekcję `Configs` w panelu administracyjnym serwera. Jeśli dokładna ścieżka nie jest widoczna w interfejsie, nadal możesz bezpiecznie edytować wymagane wartości bezpośrednio w `PalWorldSettings.ini`.
:::

## Zrozum ustawienia szybkich podróży

Palworld oferuje dwa kluczowe parametry konfiguracyjne dotyczące zachowania szybkich podróży.

| Klucz konfiguracyjny | Typ wartości | Wartość domyślna | Funkcja |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | Włącza lub wyłącza całkowicie szybkie podróże |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | Ogranicza szybkie podróże tylko do przemieszczania się między bazami |

Te wartości są częścią ciągu opcji serwera w pliku `PalWorldSettings.ini`.

:::tip Wybierz odpowiednią konfigurację
Jeśli chcesz bardziej immersyjne doświadczenie podróży i większą eksplorację, możesz całkowicie wyłączyć szybkie podróże. Jeśli chcesz zachować możliwość podróży, ale ograniczyć swobodę poruszania się po mapie, lepszą opcją jest szybka podróż tylko między bazami.
:::

## Edytuj wartości szybkich podróży

Otwórz `PalWorldSettings.ini` i znajdź sekcję `OptionSettings=`. W Palworld wiele ustawień serwera jest przechowywanych jako wartości oddzielone przecinkami w tej linii.

### Włącz standardowe szybkie podróże

Aby zezwolić na standardowe szybkie podróże, upewnij się, że znajduje się tam następująca wartość:

```ini
bEnableFastTravel=True
```

Jeśli chcesz, aby gracze mogli korzystać ze wszystkich normalnych opcji szybkich podróży, upewnij się również, że ta wartość jest ustawiona tak:

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### Wyłącz wszystkie szybkie podróże

Aby całkowicie wyłączyć szybkie podróże, ustaw:

```ini
bEnableFastTravel=False
```

Po wyłączeniu gracze muszą podróżować ręcznie po świecie.

### Ogranicz szybkie podróże tylko do baz

Jeśli chcesz zezwolić na szybkie podróże tylko między bazami, użyj takiej kombinacji:

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

To ustawienie jest często preferowane na serwerach PvP, ponieważ pozwala na ograniczone podróże bez dawania graczom pełnej swobody ruchu.

:::caution Zachowaj istniejącą składnię
Nie usuwaj innych istniejących wartości z linii `OptionSettings=`, chyba że celowo chcesz je zmienić. Palworld przechowuje wiele ustawień w jednej linii oddzielonej przecinkami, więc błędne formatowanie może spowodować, że ustawienia nie zostaną załadowane.
:::

## Przykładowa konfiguracja

Poniżej przykład, jak może wyglądać odpowiednia część konfiguracji w `PalWorldSettings.ini`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

Zamień wartości szybkich podróży w swojej istniejącej konfiguracji zgodnie z wybraną opcją.

:::note Istniejące konfiguracje serwera
Twoja linia `OptionSettings=` zwykle zawiera znacznie więcej wartości niż w powyższym przykładzie. Musisz zmienić tylko `bEnableFastTravel` i `bEnableFastTravelOnlyBaseCamp`, zachowując resztę linii bez zmian.
:::

## Zalecane konfiguracje

Możesz użyć następujących kombinacji w zależności od typu serwera, jaki chcesz prowadzić:

| Styl serwera | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | Efekt |
| --- | --- | --- | --- |
| Domyślna rozgrywka | `True` | `False` | Pełne szybkie podróże włączone |
| Skupienie na eksploracji | `False` | `False` | Wszystkie szybkie podróże wyłączone |
| PvP lub ograniczone podróże | `True` | `True` | Szybkie podróże tylko między bazami |

## Zastosuj zmiany

Po zapisaniu zmian w `PalWorldSettings.ini` musisz zrestartować serwer, aby nowe ustawienia zostały załadowane.

### Restart serwera

Użyj funkcji restartu w panelu administracyjnym serwera gier ZAP-Hosting po zapisaniu pliku.

Zazwyczaj nie są potrzebne żadne dodatkowe komendy w grze ani konsoli. Nowa konfiguracja szybkich podróży zostanie zastosowana po ponownym uruchomieniu serwera.

:::info Wymagany restart
Zmiany w `PalWorldSettings.ini` nie zostaną poprawnie zastosowane, dopóki serwer Palworld nie zostanie zrestartowany.
:::

## Sprawdź efekt

Gdy serwer będzie ponownie online, dołącz do niego i przetestuj działanie szybkich podróży w grze.

Sprawdź, czy:

- pełne szybkie podróże działają, jeśli są włączone
- brak opcji szybkich podróży, jeśli są wyłączone
- szybkie podróże działają tylko między bazami, jeśli włączyłeś tę opcję

:::tip Rozwiązywanie problemów z nieprawidłowym działaniem
Jeśli ustawienie nie działa, ponownie otwórz `PalWorldSettings.ini` i sprawdź błędy formatowania w linii `OptionSettings=`, zwłaszcza brakujące przecinki, zduplikowane klucze lub nieprawidłowe wartości `True` / `False`.
:::

## Podsumowanie

Gratulacje, pomyślnie włączyłeś lub skonfigurowałeś szybkie podróże na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!