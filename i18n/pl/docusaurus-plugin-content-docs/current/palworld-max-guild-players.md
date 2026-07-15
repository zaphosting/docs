---
id: palworld-max-guild-players
title: "Palworld: Maksymalna liczba graczy w gildii"
description: "Dowiedz się, jak zmienić limit graczy w gildii w Palworld, edytując ustawienie maksymalnej liczby graczy w gildii na swoim serwerze. -> Dowiedz się więcej teraz"
sidebar_label: "Maksymalna liczba graczy w gildii"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala kontrolować, ile osób może dołączyć do jednej gildii na Twoim serwerze. W tym poradniku nauczysz się, jak ręcznie zmienić maksymalny limit graczy w gildii, edytując odpowiedni plik konfiguracyjny w panelu administracyjnym serwera gier ZAP-Hosting.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do panelu administracyjnego swojego serwera gier Palworld w interfejsie webowym ZAP-Hosting.

:::info Wymagany dostęp do konfiguracji
Potrzebujesz dostępu do panelu administracyjnego serwera Palworld oraz sekcji `Configs`, ponieważ to ustawienie musi zostać zmienione ręcznie w pliku konfiguracyjnym serwera.
:::

## Znajdź właściwy plik konfiguracyjny

Aby zmienić limit graczy w gildii, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer **Palworld**
2. Przejdź do **Configs**
3. Otwórz plik o nazwie `PalWorldSettings.ini`

Ten plik zawiera główne wartości konfiguracyjne rozgrywki dla Twojego serwera Palworld, w tym ustawienia związane z gildiami.

## Edytuj ustawienie maksymalnej liczby graczy w gildii

W pliku `PalWorldSettings.ini` znajdź linię konfiguracyjną `OptionSettings`. Limit graczy w gildii kontroluje klucz `GuildPlayerMaxNum`.

### Wartość konfiguracyjna

Użyj poniższego ustawienia, aby określić maksymalną liczbę graczy dozwolonych w jednej gildii:

```ini
GuildPlayerMaxNum=[twoja_wartość]
```

Zamień `[twoja_wartość]` na liczbę graczy, którą chcesz ustawić jako limit na gildii.

### Domyślne i przykładowe wartości

| Klucz konfiguracyjny | Opis | Wartość domyślna |
| --- | --- | --- |
| `GuildPlayerMaxNum` | Maksymalna liczba graczy dozwolona w jednej gildii | `20` |

Na przykład, jeśli chcesz pozwolić na maksymalnie `30` graczy w gildii, ustaw:

```ini
GuildPlayerMaxNum=30
```

:::note Edytuj istniejącą linię OptionSettings
W Palworld ustawienia serwera zazwyczaj znajdują się w jednej linii `OptionSettings=(...)`. Zazwyczaj musisz zmienić istniejącą wartość `GuildPlayerMaxNum` w tej linii, zamiast dodawać drugą, zduplikowaną.
:::

### Przykładowy fragment

Twoja konfiguracja może wyglądać podobnie do tego:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

Jeśli plik zawiera już wiele ustawień w `OptionSettings=(...)`, zmień tylko część `GuildPlayerMaxNum`, pozostawiając pozostałe wartości bez zmian.

:::caution Unikaj zduplikowanych kluczy
Nie dodawaj `GuildPlayerMaxNum` wielokrotnie w tym samym bloku konfiguracyjnym. Zduplikowane klucze mogą powodować nieoczekiwane zachowanie lub niejasności, która wartość zostanie użyta przez serwer.
:::

## Zapisz i zastosuj zmiany

Po edycji wartości:

1. Zapisz zmiany w pliku `PalWorldSettings.ini`
2. Zrestartuj swój serwer Palworld

Restart jest wymagany, aby serwer załadował nowy limit graczy w gildii.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Restart serwera | Tak |
| Dodatkowa komenda konsolowa | Brak potwierdzonej potrzeby |

:::tip Wymagany restart
Zaktualizowana wartość maksymalnej liczby graczy w gildii nie zostanie zastosowana natychmiast podczas działania serwera. Musisz w pełni zrestartować serwer po zapisaniu konfiguracji.
:::

## Sprawdź nowy limit gildii

Po restarcie serwera nowy limit wielkości gildii powinien być aktywny dla graczy dołączających lub zarządzających gildiami na Twoim serwerze Palworld.

Jeśli zmiana nie została zastosowana, sprawdź następujące kwestie:

- czy edytowałeś właściwy plik: `PalWorldSettings.ini`
- czy `GuildPlayerMaxNum` jest poprawnie zapisane
- czy wartość znajduje się w aktywnej konfiguracji `OptionSettings=(...)`
- czy restart serwera zakończył się pomyślnie

:::caution Formatowanie konfiguracji
Pliki konfiguracyjne Palworld są wrażliwe na formatowanie. Jeśli przypadkowo usuniesz przecinki, nawiasy lub inne istniejące wartości w `OptionSettings=(...)`, serwer może zignorować ustawienie lub nie załadować go poprawnie.
:::

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś maksymalny limit graczy w gildii na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!