---
id: palworld-randomized-pals
title: "Palworld: Losowe Pals"
description: "Dowiedz się, jak włączyć losowe Pals w Palworld, edytując konfigurację serwera, w tym typ randomizera i ustawienia seed dla świata gry Palworld. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: Losowe Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld zawiera ustawienia randomizera, które mogą zmieniać sposób pojawiania się Pals w całym świecie gry. W tym poradniku nauczysz się, jak ręcznie włączyć i skonfigurować losowe Pals na swoim serwerze Palworld w ZAP-Hosting, edytując odpowiedni plik konfiguracyjny.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting oraz uprawnienia do edycji plików konfiguracyjnych serwera.

:::info Wymagany dostęp do konfiguracji
Musisz mieć dostęp do panelu administracyjnego serwera, aby otworzyć sekcję `Configs` i edytować pliki konfiguracyjne Palworld.
:::

## Otwórz właściwy plik konfiguracyjny

Aby skonfigurować losowe Pals, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer **Palworld**.
2. Przejdź do zakładki **Configs**.
3. Otwórz plik o nazwie `PalWorldSettings.ini`.

Ten plik zawiera główne wartości konfiguracyjne rozgrywki dla twojego serwera Palworld, w tym opcje randomizera.

## Konfiguracja losowych Pals

Ustawienia randomizera są zapisane jako klucze w pliku `PalWorldSettings.ini`. Musisz znaleźć istniejący blok ustawień i ręcznie dostosować odpowiednie wartości.

### Przegląd ustawień randomizera

Użyj następujących kluczy konfiguracyjnych do losowego pojawiania się Pals:

| Klucz konfiguracyjny | Dozwolone wartości | Domyślna | Cel |
| --- | --- | --- | --- |
| `RandomizerType` | `None`, `Region` | `None` | Kontroluje, czy losowe pojawianie się Pals jest wyłączone czy losowe według regionu |
| `bIsRandomizerPalLevelRandom` | `True`, `False` | `False` | Włącza całkowicie losowy poziom dzikich Pals, gdy ustawione na `True` |
| `RandomizerSeed` | `[twoja_wartość_seed]` lub puste | `""` | Definiuje seed używany podczas generowania świata |

:::caution Kompatybilność z serwerem dedykowanym
Wartość `All` jest zgłaszana jako niekompatybilna z serwerami dedykowanymi Palworld. Powinieneś używać tylko wspieranych wartości, takich jak `None` lub `Region`.
:::

### Przykładowa konfiguracja

Dodaj lub zmodyfikuj następujące wartości w pliku `PalWorldSettings.ini` według potrzeb:

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

Zamień `zaphosting` na własną wartość seed, jeśli chcesz mieć konkretną losową konfigurację. Seed zapewnia, że ten sam wzór losowości zostanie użyty podczas generowania świata.

### Co robi każde ustawienie

#### `RandomizerType`

To ustawienie kontroluje, czy pojawianie się Pals jest losowe.

- `None` wyłącza losowość
- `Region` włącza losowość według regionów pojawiania się Pals

Jeśli chcesz mieć losowe Pals na mapie świata Palworld, ustaw tę wartość na `Region`.

#### `bIsRandomizerPalLevelRandom`

To ustawienie kontroluje poziomy dzikich Pals.

- `False` zachowuje normalne zachowanie poziomów
- `True` włącza całkowicie losowe poziomy dzikich Pals

Może to znacznie utrudnić przewidywalność gry, szczególnie na wczesnym etapie rozgrywki.

#### `RandomizerSeed`

To opcjonalne ustawienie definiuje seed losowości używany podczas generowania świata.

Przykład:

```ini
RandomizerSeed="[twoja_wartość_seed]"
```

Zamień `[twoja_wartość_seed]` na dowolny tekst lub liczbę, którą chcesz użyć jako seed.

:::note Zachowanie seed
Seed randomizera jest stosowany podczas generowania świata. Jeśli zmienisz `RandomizerSeed` później na istniejącym świecie, zmiana nie zostanie zastosowana, chyba że zresetujesz świat lub zaczniesz nowy.
:::

## Zapisz i zastosuj zmiany

Po edycji pliku zapisz zmiany w sekcji `Configs` w panelu ZAP-Hosting.

Po zapisaniu pliku zrestartuj serwer Palworld, aby załadować zaktualizowaną konfigurację.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Uruchom dodatkowe polecenia konsoli | Nie |
| Zresetuj świat, jeśli zmieniasz seed na istniejącym zapisie | Tak |

:::tip Kiedy zacząć nowy świat
Jeśli włączasz randomizację po raz pierwszy, zwłaszcza z własnym `RandomizerSeed`, najlepiej użyć świeżego świata, aby mieć pewność, że ustawienia zostaną zastosowane poprawnie.
:::

## Sprawdź efekt

Po restarcie dołącz do serwera i sprawdź, czy pojawianie się Pals działa zgodnie z wybranymi ustawieniami randomizera.

Powinieneś zweryfikować:

- czy losowe pojawianie się według regionów jest aktywne
- czy poziomy dzikich Pals są losowe, jeśli włączono tę opcję
- czy zachowanie świata odpowiada skonfigurowanemu seedowi na nowym świecie

Jeśli zmiany nie działają, ponownie otwórz `PalWorldSettings.ini` i sprawdź, czy:

- klucze zostały wpisane poprawnie
- wartości mają poprawną wielkość liter, np. `True` i `False`
- serwer został zrestartowany po zapisie
- utworzono nowy świat, jeśli zmieniałeś seed

## Rozwiązywanie problemów

### Losowe Pals się nie pojawiają

Sprawdź, czy w `PalWorldSettings.ini` jest `RandomizerType=Region`. Jeśli jest ustawione na `None`, randomizacja jest wyłączona.

### Zmiany seed nie zostały zastosowane

Zazwyczaj oznacza to, że świat został już wygenerowany przed dodaniem nowego seeda. W takim przypadku musisz zresetować świat lub utworzyć nowy, aby seed zadziałał.

### Problemy z serwerem po zmianie ustawień randomizera

Jeśli użyłeś nieobsługiwanej wartości, np. `All`, cofnij ustawienie do wspieranej wartości, takiej jak `None` lub `Region`, zapisz plik i ponownie zrestartuj serwer.

:::danger Unikaj nieobsługiwanych wartości randomizera
Nie używaj `RandomizerType=All` na serwerze dedykowanym, chyba że oficjalna dokumentacja serwera Palworld potwierdzi wsparcie. To ustawienie jest obecnie znane jako niekompatybilne w środowiskach serwerów dedykowanych.
:::

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś losowe Pals na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!