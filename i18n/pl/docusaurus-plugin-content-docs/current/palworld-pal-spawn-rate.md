---
id: palworld-pal-spawn-rate
title: "Palworld: Współczynnik pojawiania się Palów"
description: "Dowiedz się, jak zmienić współczynnik pojawiania się Palów w Palworld, edytując ustawienie częstotliwości pojawiania się Palów na swoim serwerze -> Sprawdź teraz"
sidebar_label: "Współczynnik pojawiania się Palów"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala kontrolować, jak często Pals pojawiają się w Twoim świecie za pomocą ustawienia konfiguracyjnego serwera. W tym poradniku nauczysz się, jak bezpiecznie edytować odpowiedni plik konfiguracyjny w panelu administracyjnym serwera gier ZAP-Hosting i zastosować nowy współczynnik pojawiania się Palów.



## Przygotowanie

Zanim zaczniesz, upewnij się, że:

- masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting
- Twój serwer jest offline lub jesteś gotowy na jego restart po wprowadzeniu zmian
- rozumiesz, że wyższe wartości pojawiania się mogą zwiększyć obciążenie serwera i obniżyć wydajność

:::info Wymagana ręczna konfiguracja
Ta zmiana jest wykonywana ręcznie poprzez edycję pliku konfiguracyjnego serwera w sekcji **Configs** w panelu administracyjnym serwera gier. Nie ma osobnego suwaka w panelu ZAP-Hosting dla tego konkretnego ustawienia.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić współczynnik pojawiania się Palów, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer **Palworld**.
2. Przejdź do **Configs**.
3. Otwórz plik `PalWorldSettings.ini`.

Ten plik zawiera główne ustawienia rozgrywki serwera, w tym mnożnik pojawiania się Palów.

:::note Lokalizacja pliku konfiguracyjnego
Dla serwerów Palworld ZAP-Hosting odpowiedni plik jest dostępny bezpośrednio w sekcji **Configs** w panelu administracyjnym serwera, zgodnie z konfiguracją serwera.
:::

## Zmień współczynnik pojawiania się Palów

Ustawienie, którego potrzebujesz, to `PalSpawnNumRate`.

### Co robi `PalSpawnNumRate`

`PalSpawnNumRate` kontroluje mnożnik częstotliwości pojawiania się Palów na Twoim serwerze.

| Klucz konfiguracyjny | Wartość domyślna | Opis |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | Kontroluje, ile Palów pojawia się w świecie. Wyższe wartości zwiększają częstotliwość pojawiania się. |

W Palworld ta wartość jest zwykle częścią linii `OptionSettings` w pliku `PalWorldSettings.ini`.

### Edytuj ustawienie

Otwórz `PalWorldSettings.ini` i znajdź sekcję `OptionSettings=`. W tej sekcji znajdź wpis `PalSpawnNumRate`.

Jeśli wpis już istnieje, zmień jego wartość. Na przykład:

```ini
PalSpawnNumRate=1.000000
```

Możesz zwiększyć ją tak:

```ini
PalSpawnNumRate=2.000000
```

Ten przykład podwaja mnożnik pojawiania się Palów względem wartości domyślnej.

:::tip Zalecane wartości startowe
Zacznij od niewielkich zwiększeń, takich jak `1.500000` lub `2.000000`, i przetestuj wydajność serwera przed zastosowaniem bardziej agresywnych wartości.
:::

### Przykładowy fragment konfiguracji

W zależności od zawartości Twojego pliku, ustawienie może pojawić się w długiej linii `OptionSettings` podobnej do tej:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution Zachowaj istniejącą składnię
Nie usuwaj przecinków, nawiasów ani innych istniejących wartości z linii `OptionSettings`. Nieprawidłowe formatowanie pliku `PalWorldSettings.ini` może uniemożliwić poprawne załadowanie konfiguracji przez serwer.
:::

## Zalecane wartości i wpływ na wydajność

Możesz użyć różnych wartości w zależności od tego, jaką chcesz mieć rozgrywkę.

| Wartość | Efekt |
| --- | --- |
| `1.000000` | Domyślny współczynnik pojawiania się Palów |
| `1.500000` | Nieznacznie zwiększona częstotliwość pojawiania się |
| `2.000000` | Wyraźnie więcej Palów w świecie |
| `3.000000` lub więcej | Duże zwiększenie pojawiania się, może wpłynąć na wydajność |

Wyższe wartości mogą sprawić, że świat będzie bardziej aktywny, ale też zwiększają liczbę obiektów, które serwer musi przetwarzać.

:::danger Wysokie wartości pojawiania się mogą obniżyć stabilność
Bardzo wysokie ustawienia pojawiania się mogą negatywnie wpłynąć na wydajność serwera, szczególnie na obciążonych serwerach lub w połączeniu z innymi wymagającymi ustawieniami świata. Jeśli zauważysz lagi, zmniejsz wartość i zrestartuj serwer.
:::

## Zapisz i zrestartuj serwer

Po edycji pliku:

1. Zapisz zmiany w `PalWorldSettings.ini`.
2. Zrestartuj swój serwer Palworld z panelu administracyjnego serwera gier ZAP-Hosting.

Restart jest wymagany, aby nowy współczynnik pojawiania się Palów zaczął działać.

## Sprawdź zmianę

Gdy serwer będzie ponownie online, dołącz do swojego serwera Palworld i obserwuj aktywność w miejscach, gdzie zwykle pojawiają się Pals.

Jeśli współczynnik pojawiania się nie wydaje się zmieniony:

- ponownie otwórz `PalWorldSettings.ini` i potwierdź, że `PalSpawnNumRate` jest obecny
- upewnij się, że wartość znajduje się w odpowiedniej sekcji `OptionSettings`
- sprawdź, czy plik został poprawnie zapisany
- po potwierdzeniu zmiany zrestartuj serwer jeszcze raz

## Referencje konfiguracji

| Element | Wartość |
| --- | --- |
| Plik konfiguracyjny | `PalWorldSettings.ini` |
| Lokalizacja w ZAP-Hosting | Panel administracyjny serwera gier → `Configs` |
| Nazwa ustawienia | `PalSpawnNumRate` |
| Wartość domyślna | `1.000000` |
| Wymagany restart | Tak |

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś współczynnik pojawiania się Palów na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!