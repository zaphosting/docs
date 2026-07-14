---
id: palworld-change-hp-regeneration
title: "Palworld: Zmiana regeneracji HP"
description: "Dowiedz się, jak zmienić regenerację HP w Palworld, edytując ustawienia regeneracji gracza i Pala na swoim serwerze, aby przyspieszyć, spowolnić lub wyłączyć leczenie -> Sprawdź teraz"
sidebar_label: Palworld: Zmiana regeneracji HP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala na zmianę ustawień regeneracji zarówno dla graczy, jak i Palów poprzez główną konfigurację serwera. W tym poradniku nauczysz się, jak edytować odpowiedni plik konfiguracyjny w panelu ZAP-Hosting, dostosować wartości regeneracji HP i poprawnie zastosować zmiany.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że Twój serwer Palworld jest online i masz dostęp do jego panelu administracyjnego przez panel ZAP-Hosting.

:::info Wymagany dostęp do konfiguracji
Potrzebujesz dostępu do administracji serwera gier oraz sekcji `Configs`, aby ręcznie edytować pliki konfiguracyjne Palworld.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić regenerację HP, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld.
2. Przejdź do `Configs`.
3. Otwórz plik `PalWorldSettings.ini`.

Ten plik zawiera główne wartości konfiguracyjne rozgrywki na Twoim serwerze, w tym mnożniki regeneracji zdrowia gracza i Pala.

:::note Ręczne zmiany konfiguracji
W zależności od Twojej aktualnej konfiguracji, ustawienia mogą znajdować się w długiej linii parametrów w sekcji `OptionSettings`. Edytuj istniejące wartości ostrożnie, zachowując formatowanie.
:::

## Zmień wartości regeneracji HP

Ustawienia regeneracji HP są przechowywane jako mnożniki liczbowe. Wartość `1.0` oznacza domyślną szybkość regeneracji.

### Obsługiwane ustawienia regeneracji

Użyj następujących kluczy konfiguracyjnych w pliku `PalWorldSettings.ini`:

| Klucz konfiguracyjny | Opis | Wartość domyślna |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | Naturalna szybkość regeneracji HP gracza | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | Regeneracja HP gracza podczas snu | `1.0` |
| `PalAutoHPRegeneRate` | Naturalna szybkość regeneracji HP Pala | `1.0` |
| `PalAutoHpRegeneRateInSleep` | Regeneracja HP Pala podczas snu w Palboxie | `1.0` |

### Zachowanie wartości

Możesz stosować następującą logikę wartości przy zmianie regeneracji:

| Wartość | Efekt |
| --- | --- |
| `1.0` | Domyślna szybkość regeneracji |
| Większa niż `1.0` | Szybsze leczenie |
| Mniejsza niż `1.0` | Wolniejsze leczenie |
| `0.0` | Wyłącza regenerację |

:::tip Wybór odpowiednich wartości regeneracji
Jeśli chcesz nieco łatwiejszą rozgrywkę, wypróbuj wartości takie jak `1.5` lub `2.0`. Jeśli chcesz większe wyzwanie, użyj wartości poniżej `1.0` lub całkowicie wyłącz regenerację ustawiając `0.0`.
:::

## Edytuj wpisy konfiguracyjne

W większości konfiguracji serwera Palworld te wartości znajdują się w linii `OptionSettings=(...)` w pliku `PalWorldSettings.ini`.

### Przykład konfiguracji

Dodaj wpisy, jeśli ich brakuje, lub zmień istniejące wartości, jeśli już są obecne:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

Na przykład, jeśli chcesz szybszą naturalną regenerację dla graczy i Palów, możesz użyć:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

Jeśli chcesz zmienić tylko konkretne wartości, dostosuj tylko te wpisy i pozostaw resztę istniejących wartości `OptionSettings` bez zmian.

:::caution Zachowaj istniejące wartości OptionSettings
Nie usuwaj niezwiązanych wpisów z linii `OptionSettings`. Ta sekcja zwykle zawiera wiele ustawień rozgrywki, a ich usunięcie może niezamierzenie zresetować inne części konfiguracji serwera.
:::

## Zapisz i zastosuj zmiany

Po edycji pliku zapisz zmiany w sekcji `Configs` panelu ZAP-Hosting.

Aby zastosować nowe ustawienia regeneracji, zrestartuj serwer Palworld.

### Restart serwera

1. Zapisz edytowany plik `PalWorldSettings.ini`.
2. Wróć do panelu administracyjnego serwera.
3. Zrestartuj serwer.

Restart jest konieczny, ponieważ Palworld odczytuje te ustawienia rozgrywki podczas uruchamiania serwera.

:::info Wymagany restart
Zmiany w regeneracji HP nie zaczną działać natychmiast podczas działania serwera. Musisz zrestartować serwer po zapisaniu konfiguracji.
:::

## Sprawdź nowe ustawienia regeneracji

Po restarcie serwera dołącz do niego i przetestuj nowe zachowanie leczenia w grze.

Możesz zweryfikować zmianę, sprawdzając:

- naturalną regenerację HP gracza
- leczenie gracza podczas snu
- naturalną regenerację HP Pala
- zachowanie leczenia Pala w Palboxie podczas snu

Jeśli regeneracja nie działa zgodnie z oczekiwaniami, ponownie otwórz `PalWorldSettings.ini` i upewnij się, że:

- klucze konfiguracyjne są dokładnie poprawnie napisane
- wartości to poprawne liczby dziesiętne, np. `1.0` lub `2.0`
- wpisy pozostają w sekcji `OptionSettings`
- serwer został zrestartowany po zapisaniu zmian

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś regenerację HP w Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂