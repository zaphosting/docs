---
id: palworld-enemy-drop-rate
title: "Palworld: Współczynnik Dropu Przeciwników"
description: "Dowiedz się, jak zmienić współczynnik dropu przeciwników w Palworld na swoim serwerze gier Palworld, edytując odpowiednią wartość w konfiguracji dla lepszego balansu łupów. -> Dowiedz się więcej teraz"
sidebar_label: "Współczynnik Dropu Przeciwników"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

`EnemyDropItemRate` kontroluje, ile łupów zostawiają przeciwnicy w Palworld. W tym poradniku nauczysz się, jak ręcznie edytować odpowiedni plik konfiguracyjny w panelu administracyjnym swojego serwera gier ZAP-Hosting i skutecznie zastosować nowy współczynnik dropu przeciwników.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do panelu administracyjnego swojego serwera gier Palworld oraz uprawnienia do edycji plików konfiguracyjnych serwera.

:::info Wymagana Ręczna Konfiguracja
Ta konfiguracja jest wykonywana poprzez ręczną edycję pliku konfiguracyjnego serwera. Odpowiedni plik znajdziesz w panelu administracyjnym serwera gier ZAP-Hosting w sekcji `Configs`.
:::

## Znajdź Plik Konfiguracyjny

Aby zmienić współczynnik dropu przeciwników, musisz edytować plik `PalWorldSettings.ini`.

### Otwórz Sekcję Configs

Zaloguj się do panelu administracyjnego serwera gier ZAP-Hosting i otwórz swój serwer Palworld. Następnie przejdź do sekcji `Configs`, gdzie znajdują się dostępne pliki konfiguracyjne.

### Wybierz `PalWorldSettings.ini`

Otwórz plik `PalWorldSettings.ini` z sekcji `Configs`. Ten plik zawiera główne wartości konfiguracyjne rozgrywki twojego serwera gier Palworld, w tym ustawienia dotyczące łupów i dropu.

:::note Przegląd Pliku Konfiguracyjnego
Na serwerach dedykowanych Palworld ustawienia rozgrywki zazwyczaj przechowywane są w pliku `PalWorldSettings.ini`. Współczynnik dropu przeciwników konfiguruje się tam przez wpis `EnemyDropItemRate`.
:::

## Edytuj Współczynnik Dropu Przeciwników

Teraz, gdy masz otwarty właściwy plik, możesz dostosować mnożnik dropu łupów.

### Znajdź Odpowiednie Ustawienie

Wyszukaj w pliku `PalWorldSettings.ini` linię `OptionSettings` i znajdź następujący klucz:

```ini
EnemyDropItemRate=1.000000
```

Jeśli klucz jest już obecny, zmień jego wartość na preferowany mnożnik.

### Ustaw Swój Wymarzony Mnożnik

`EnemyDropItemRate` używa wartości numerycznej jako mnożnika:

| Klucz konfiguracyjny | Wartość domyślna | Przykładowa wartość | Efekt |
| --- | --- | --- | --- |
| `EnemyDropItemRate` | `1.000000` | `2.000000` | Przeciwnicy zostawiają dwa razy więcej przedmiotów |
| `EnemyDropItemRate` | `1.000000` | `0.500000` | Przeciwnicy zostawiają mniej przedmiotów |
| `EnemyDropItemRate` | `1.000000` | `3.000000` | Przeciwnicy zostawiają trzy razy więcej przedmiotów |

Na przykład, aby podwoić ilość dropu od pokonanych przeciwników, dzikich Palów i bossów, ustaw:

```ini
EnemyDropItemRate=2.000000
```

Jeśli edytujesz cały wpis `OptionSettings`, może on wyglądać podobnie do tego fragmentu:

```ini
OptionSettings=(EnemyDropItemRate=2.000000)
```

:::caution Zachowaj Istniejące Ustawienia
W wielu konfiguracjach serwera Palworld `OptionSettings` zawiera wiele wartości w jednej linii. Zmieniaj tylko wartość `EnemyDropItemRate` i unikaj usuwania przecinków, nawiasów lub innych istniejących ustawień, ponieważ może to spowodować błąd konfiguracji.
:::

## Sprawdź Powiązane Limity Dropu

Wyższe mnożniki dropu mogą zwiększyć liczbę przedmiotów pozostawionych na ziemi. Może to wpłynąć na wydajność serwera, szczególnie podczas intensywnych walk lub starć z bossami.

### Sprawdź `DropItemMaxNum`

Jeśli na twoim serwerze już występuje duża liczba jednocześnie upuszczonych przedmiotów, sprawdź ustawienie `DropItemMaxNum` w tym samym pliku konfiguracyjnym.

| Klucz konfiguracyjny | Cel |
| --- | --- |
| `EnemyDropItemRate` | Mnoży ilość łupów pozostawianych przez pokonanych przeciwników |
| `DropItemMaxNum` | Ogranicza maksymalną liczbę przedmiotów upuszczonych jednocześnie |

:::tip Zbalansuj Łupy i Wydajność
Jeśli znacznie zwiększysz `EnemyDropItemRate`, rozważ utrzymanie `DropItemMaxNum` na rozsądnym poziomie, aby zmniejszyć ryzyko nadmiernego nagromadzenia przedmiotów i problemów z wydajnością.
:::

## Zapisz i Zastosuj Zmiany

Po edycji pliku zapisz `PalWorldSettings.ini` w sekcji `Configs`.

### Uruchom Serwer Ponownie

Po zapisaniu pliku zrestartuj swój serwer Palworld, aby nowe ustawienie zostało załadowane.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Dodatkowa komenda konsoli | Nie jest wymagana żadna zweryfikowana komenda |

:::info Wymagany Restart
Zmiany w `PalWorldSettings.ini` nie są stosowane natychmiast podczas działania serwera. Po zapisaniu pliku musisz zrestartować serwer.
:::

## Zweryfikuj Nowy Współczynnik Dropu

Po zakończeniu restartu dołącz do swojego serwera Palworld i pokonaj przeciwników, aby potwierdzić, że nowy mnożnik dropu działa zgodnie z oczekiwaniami.

Jeśli ilość dropu nie uległa zmianie, ponownie otwórz `PalWorldSettings.ini` i sprawdź, czy:

- `EnemyDropItemRate` jest poprawnie napisane
- wartość znajduje się w odpowiedniej konfiguracji `OptionSettings`
- plik został poprawnie zapisany
- serwer został zrestartowany po zmianie

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś współczynnik dropu przeciwników na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!