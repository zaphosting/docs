---
id: palworld-item-weight
title: "Palworld: Waga Przedmiotów"
description: "Dowiedz się, jak zmienić mnożnik wagi przedmiotów w Palworld, edytując ustawienie wagi przedmiotów w konfiguracji serwera, aby lepiej zbalansować udźwig. -> Sprawdź teraz"
sidebar_label: Palworld: Waga Przedmiotów
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld pozwala na dostosowanie wagi przedmiotów na Twoim serwerze poprzez zmianę wartości konfiguracyjnej w głównym pliku ustawień serwera. W tym poradniku dowiesz się, gdzie znaleźć odpowiedni plik w panelu ZAP-Hosting, które ustawienie `item weight` edytować oraz jak poprawnie zastosować zmianę.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, upewnij się, że Twój serwer gier Palworld jest online i masz dostęp do jego panelu administracyjnego.

:::info Wymagany dostęp
Potrzebujesz dostępu do panelu administracyjnego serwera Palworld w panelu ZAP-Hosting, aby edytować pliki konfiguracyjne w sekcji **Configs**.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić mnożnik wagi przedmiotów, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld.
2. Przejdź do **Configs**.
3. Otwórz plik `PalWorldSettings.ini`.

Ten plik zawiera główne wartości konfiguracyjne rozgrywki używane przez Twój serwer Palworld.

:::note Cel pliku konfiguracyjnego
`PalWorldSettings.ini` przechowuje wiele modyfikatorów rozgrywki, w tym stawki obrażeń, wytrzymałości, dropów oraz `item weight`.
:::

## Edytuj ustawienie wagi przedmiotów

W pliku `PalWorldSettings.ini` znajdź sekcję `OptionSettings` i wpis `ItemWeightRate`.

Jeśli wpis już istnieje, zmień jego wartość. Jeśli go brakuje, dodaj go w liście parametrów `OptionSettings`.

### Klucz konfiguracyjny

Użyj następującego ustawienia:

```ini
ItemWeightRate=1.000000
```

### Co oznacza ta wartość

`ItemWeightRate` kontroluje mnożnik wagi przedmiotów na Twoim serwerze.

| Klucz konfiguracyjny | Wartość domyślna | Efekt |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | Standardowa waga przedmiotów |
| `ItemWeightRate` mniejszy niż `1.0` | Przykład: `0.500000` | Przedmioty ważą mniej, więc gracze mogą nosić więcej |
| `ItemWeightRate` większy niż `1.0` | Przykład: `2.000000` | Przedmioty ważą więcej, więc gracze mogą nosić mniej |

### Przykładowe wartości

Możesz użyć jednej z poniższych wartości w zależności od balansu rozgrywki, jaki chcesz osiągnąć:

| Pożądany efekt | Wartość |
|---|---:|
| Domyślna waga przedmiotów | `1.000000` |
| Połowa wagi przedmiotów | `0.500000` |
| Bardzo lekkie przedmioty | `0.250000` |
| Podwójna waga przedmiotów | `2.000000` |

:::tip Wybór odpowiedniego mnożnika
Jeśli chcesz bardziej luźne przeżycie survivalowe, niższa wartość `item weight` np. `0.5` to często praktyczny punkt startowy. Zmniejsza to presję na ekwipunek, nie eliminując całkowicie zarządzania wagą.
:::

## Przykładowa konfiguracja

W Palworld wartości rozgrywki są zwykle przechowywane w linii `OptionSettings=(...)` pliku `PalWorldSettings.ini`. Twój plik może już zawierać wiele innych ustawień.

Uproszczony przykład wygląda tak:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

Na wielu serwerach `OptionSettings` zawiera już wiele wartości oddzielonych przecinkami. W takim przypadku dodaj lub edytuj tylko część `ItemWeightRate`, nie usuwając pozostałych wpisów.

Przykład:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution Zachowaj istniejące ustawienia
Nie usuwaj innych wartości z linii `OptionSettings`, chyba że chcesz je celowo zresetować. Usunięcie przecinków, nawiasów lub istniejących wpisów może spowodować błędy konfiguracji.
:::

## Zapisz i zastosuj zmiany

Po edycji pliku:

1. Zapisz zmiany w `PalWorldSettings.ini`.
2. Uruchom ponownie swój serwer Palworld.

Restart jest wymagany, ponieważ serwer odczytuje tę konfigurację rozgrywki podczas startu. Nowa wartość `item weight` nie zostanie w pełni zastosowana bez restartu serwera.

## Sprawdź nową wagę przedmiotów

Po restarcie dołącz do serwera i przetestuj zachowanie udźwigu przedmiotów w grze.

Powinieneś zauważyć, że:

- niższe wartości zmniejszają efektywną wagę przedmiotów
- wyższe wartości zwiększają efektywną wagę przedmiotów
- pojemność ekwipunku odczuwalnie się zmienia w zależności od wybranego mnożnika

Jeśli zmiana nie działa, ponownie otwórz `PalWorldSettings.ini` i sprawdź:

| Sprawdzenie | Co zweryfikować |
|---|---|
| Poprawny plik | Edytowałeś `PalWorldSettings.ini` |
| Poprawna lokalizacja | Plik został otwarty przez **Configs** w panelu administracyjnym |
| Poprawny klucz | `ItemWeightRate` jest obecny |
| Poprawna składnia | Wartość znajduje się w linii `OptionSettings=(...)`, jeśli plik używa tego formatu |
| Restart wykonany | Serwer został zrestartowany po zapisaniu zmian |

## Conclusion

Gratulacje, pomyślnie zmieniłeś ustawienie wagi przedmiotów na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂