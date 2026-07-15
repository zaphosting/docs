---
id: palworld-change-day-night-speed
title: "Palworld: Zmiana prędkości dnia i nocy"
description: "Dowiedz się, jak zmienić prędkość cyklu dnia i nocy w Palworld, edytując ustawienia cyklu dnia na swoim serwerze. -> Sprawdź teraz"
sidebar_label: "Zmiana prędkości dnia i nocy"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala Ci dostosować, jak szybko mija cykl dnia i nocy na Twoim serwerze. W tym poradniku nauczysz się, jak zmienić prędkość dnia i nocy, edytując odpowiedni plik konfiguracyjny w panelu administracyjnym serwera gier ZAP-Hosting i poprawnie zastosować zmiany.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld przez panel webowy ZAP-Hosting oraz uprawnienia do edycji plików konfiguracyjnych serwera.

:::info Wymagana ręczna konfiguracja
Ta konfiguracja odbywa się ręcznie poprzez pliki konfiguracyjne serwera. Musisz edytować ustawienia Palworld bezpośrednio, zamiast korzystać z automatycznych komend w grze.
:::

## Znajdź plik konfiguracyjny

Aby zmienić prędkość dnia i nocy, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting uzyskasz dostęp do tego pliku w sekcji **Configs**. Otwórz swój serwer Palworld w panelu webowym i przejdź do zarządzania plikami konfiguracyjnymi.

Odpowiedni plik to:

```ini
PalWorldSettings.ini
```

:::note Lokalizacja pliku konfiguracyjnego
W zależności od szablonu serwera gier i układu panelu, plik jest dostępny w sekcji **Configs** w panelu ZAP-Hosting. Jeśli w interfejsie widzisz pełną ścieżkę wewnętrzną, to zazwyczaj jest to plik ustawień serwera Palworld używany do konfiguracji rozgrywki.
:::

## Edytuj ustawienia prędkości dnia i nocy

W pliku `PalWorldSettings.ini` znajdź wpisy konfiguracyjne dotyczące prędkości dnia i nocy.

Musisz zmodyfikować następujące wartości:

| Klucz konfiguracyjny | Wartość domyślna | Opis |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | Kontroluje, jak szybko mija dzień |
| `NightTimeSpeedRate` | `1.000000` | Kontroluje, jak szybko mija noc |

Wyższe wartości powodują szybsze upływanie czasu, niższe - wolniejsze.

### Przykładowa konfiguracja

Jeśli chcesz, aby dzień i noc mijały szybciej, możesz ustawić wyższe wartości, np.:

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

Jeśli chcesz dłuższy dzień, ale szybszą noc, możesz użyć różnych wartości, np.:

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### Gdzie umieścić wartości

Palworld przechowuje wiele ustawień rozgrywki w sekcji `OptionSettings` pliku `PalWorldSettings.ini`. Powinieneś edytować istniejące wpisy `DayTimeSpeedRate` i `NightTimeSpeedRate` właśnie tam, zamiast dodawać duplikaty gdzie indziej.

Typowa sekcja może wyglądać tak:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

Po edycji może wyglądać tak:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution Ostrożnie edytuj istniejące wpisy
Upewnij się, że zmieniasz tylko wartość po `DayTimeSpeedRate=` i `NightTimeSpeedRate=`. Nie usuwaj przecinków, nawiasów ani innych ustawień w linii `OptionSettings`, ponieważ błędne formatowanie może uniemożliwić poprawne załadowanie konfiguracji przez serwer.
:::

## Zapisz i zastosuj zmiany

Po zaktualizowaniu wartości w `PalWorldSettings.ini` zapisz plik w edytorze konfiguracji ZAP-Hosting.

Po zapisaniu zrestartuj swój serwer Palworld, aby nowe ustawienia cyklu dnia zostały załadowane.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Uruchom dodatkowe komendy konsoli | Nie |

:::tip Wymagany restart
Zmiany konfiguracji świata Palworld nie są stosowane poprawnie, dopóki serwer nie zostanie zrestartowany. Zawsze restartuj serwer po zmianie prędkości dnia lub nocy.
:::

## Sprawdź nowy cykl dnia

Po zakończeniu restartu dołącz do serwera i obserwuj upływ czasu w grze.

Powinieneś zauważyć, że:

- **dzień** mija szybciej lub wolniej zgodnie z wartością `DayTimeSpeedRate`
- **noc** mija szybciej lub wolniej zgodnie z wartością `NightTimeSpeedRate`

Jeśli prędkość się nie zmienia, ponownie otwórz `PalWorldSettings.ini` i sprawdź, czy:

- wartości zostały poprawnie zapisane
- formatowanie linii `OptionSettings` jest nadal poprawne
- serwer został zrestartowany po zmianie

## Szybkie odniesienie konfiguracji

Poniższa tabela to szybkie odniesienie, gdy zechcesz ponownie zmienić ustawienia dnia.

| Ustawienie | Przykład | Efekt |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | Wolniejszy dzień | Dzień trwa dłużej |
| `DayTimeSpeedRate=2.000000` | Szybszy dzień | Dzień mija szybciej |
| `NightTimeSpeedRate=0.500000` | Wolniejsza noc | Noc trwa dłużej |
| `NightTimeSpeedRate=2.000000` | Szybsza noc | Noc mija szybciej |

:::note Zbalansowane ustawienia
Jeśli chcesz bardziej naturalne doświadczenie rozgrywki, unikaj ekstremalnie wysokich wartości. Bardzo szybkie zmiany dnia i nocy mogą utrudnić planowanie farmienia, eksploracji i zarządzania bazą.
:::

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś prędkość dnia i nocy na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂