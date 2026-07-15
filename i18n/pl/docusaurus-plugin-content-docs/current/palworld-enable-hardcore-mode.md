---
id: palworld-enable-hardcore-mode
title: "Palworld: Włącz tryb Hardcore"
description: "Dowiedz się, jak włączyć tryb hardcore w Palworld, edytując odpowiednią konfigurację serwera, ustawiając wartości True lub False oraz bezpiecznie stosując opcje permadeath. -> Sprawdź teraz"
sidebar_label: "Włącz tryb Hardcore"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

*Tryb hardcore* w Palworld włącza zasady trwałej śmierci dla graczy, a opcjonalnie także dla Pals. W tym poradniku nauczysz się, jak ręcznie włączyć tryb hardcore na swoim serwerze gier Palworld w ZAP-Hosting, edytując odpowiedni plik konfiguracyjny i restartując serwer.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu głównym ZAP-Hosting. Potrzebujesz również uprawnień do edycji plików konfiguracyjnych serwera w sekcji **Configs** panelu administracyjnego serwera gier.

:::danger Ostrzeżenie o trwałej utracie danych
Po włączeniu ustawień hardcore postacie mogą zostać trwale utracone po śmierci. Jeśli włączysz również utratę Pal, twoje Pals również mogą zostać trwale utracone.
:::

:::tip Najpierw wykonaj kopię zapasową
Przed zmianą ustawień rozgrywki, takich jak tryb hardcore, zaleca się wykonanie kopii zapasowej serwera lub zapisanych danych, jeśli opcja kopii zapasowej jest dostępna dla twojej usługi.
:::

## Otwórz plik konfiguracyjny Palworld

Aby włączyć tryb hardcore, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld.
2. Przejdź do **Configs**.
3. Otwórz plik `PalWorldSettings.ini`.

:::info Poprawny plik konfiguracyjny
Ustawienia hardcore znajdują się w pliku `PalWorldSettings.ini`. Jeśli edytujesz inny plik, zmiany nie zostaną zastosowane na twoim serwerze Palworld.
:::

## Edytuj ustawienia Hardcore

Palworld przechowuje wiele ustawień rozgrywki w wpisie konfiguracyjnym `OptionSettings` w pliku `PalWorldSettings.ini`. Musisz ręcznie ustawić tam odpowiednie wartości hardcore.

### Wymagane klucze konfiguracyjne

Poniższe klucze konfiguracyjne kontrolują zachowanie trybu hardcore:

| Klucz konfiguracyjny | Wartość | Efekt |
| --- | --- | --- |
| `bHardcore` | `True` lub `False` | Włącza lub wyłącza trwałą śmierć gracza |
| `bPalLost` | `True` lub `False` | Włącza lub wyłącza trwałą utratę Pals po śmierci |
| `bCharacterRecreateInHardcore` | `True` lub `False` | Pozwala na stworzenie nowej postaci po śmierci w trybie hardcore |

### Zalecany przegląd wartości

| Scenariusz | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| Tylko permadeath gracza | `True` | `False` | `False` lub `True` |
| Pełny hardcore z utratą Pal | `True` | `True` | `False` lub `True` |
| Wyłącz tryb hardcore | `False` | `False` | `False` |

:::note Wartości True i False
Te ustawienia używają wartości boolean, co oznacza, że musisz wpisać dokładnie `True` lub `False`, zgodnie z formatem konfiguracji.
:::

### Przykładowa konfiguracja

Jeśli klucze są już obecne w twoim `OptionSettings`, zmień ich wartości według potrzeb. Jeśli ich brakuje, dodaj je w tej samej linii `OptionSettings`.

Przykład:

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

Jeśli twoja linia `OptionSettings` zawiera już wiele innych ustawień, nie usuwaj ich. Dodaj lub zmodyfikuj tylko wpisy związane z hardcore w istniejących nawiasach.

:::caution Zachowaj istniejące ustawienia
Plik `PalWorldSettings.ini` często zawiera wiele aktywnych ustawień serwera w jednym wpisie `OptionSettings`. Usunięcie innych wartości przez pomyłkę może zresetować niezwiązane opcje rozgrywki na twoim serwerze.
:::

## Zapisz i zastosuj zmiany

Po edycji pliku:

1. Zapisz zmiany w `PalWorldSettings.ini`.
2. Zrestartuj swój serwer Palworld z panelu administracyjnego serwera gier ZAP-Hosting.

Restart jest wymagany, aby serwer mógł załadować zaktualizowaną konfigurację hardcore.

## Sprawdź, czy tryb Hardcore jest aktywny

Po restarcie dołącz do serwera i potwierdź, że zasady hardcore są aktywne.

### Co sprawdzić

| Ustawienie | Oczekiwane zachowanie |
| --- | --- |
| `bHardcore=True` | Gracze nie mogą kontynuować normalnie po śmierci |
| `bPalLost=True` | Pals są trwale tracone po śmierci |
| `bCharacterRecreateInHardcore=True` | Można stworzyć nową postać po śmierci w trybie hardcore |

:::info Ważna uwaga dotycząca zachowania
Dokładny efekt w grze zależy od tego, które z trzech ustawień hardcore włączyłeś. Jeśli chcesz trwałą śmierć gracza, ale chcesz, aby użytkownicy mogli zacząć od nowa z nową postacią, włącz `bCharacterRecreateInHardcore=True`.
:::

## Rozwiązywanie problemów

Jeśli tryb hardcore nie działa zgodnie z oczekiwaniami, sprawdź poniższe punkty.

### Potwierdź poprawną edycję pliku

Upewnij się, że edytowałeś plik `PalWorldSettings.ini` w sekcji **Configs** twojego serwera Palworld w ZAP-Hosting, a nie inny plik.

### Sprawdź składnię

Klucze hardcore muszą znajdować się wewnątrz wpisu `OptionSettings=(...)`. Niepoprawna interpunkcja, brakujące przecinki lub umieszczenie wartości poza właściwą sekcją mogą uniemożliwić serwerowi ich odczytanie.

Przykład poprawnej składni:

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### Zrestartuj serwer ponownie

Jeśli serwer nie został zrestartowany po zapisaniu pliku, nowe ustawienia nie zostaną załadowane. Wykonaj pełny restart i przetestuj ponownie.

## Podsumowanie

Gratulacje, pomyślnie włączyłeś tryb hardcore na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!