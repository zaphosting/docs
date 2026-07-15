---
id: palworld-max-guild-bases
title: "Palworld: Maksymalna liczba baz gildii"
description: "Dowiedz się, jak zmienić ustawienie maksymalnej liczby baz gildii w Palworld, edytując wartość BaseCampMaxNumInGuild na swoim serwerze. -> Dowiedz się więcej teraz"
sidebar_label: "Maksymalna liczba baz gildii"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala kontrolować maksymalną liczbę baz, które każda gildia może postawić na Twoim serwerze. W tym poradniku nauczysz się, jak ręcznie edytować odpowiedni plik konfiguracyjny w panelu ZAP-Hosting, zmienić ustawienie `BaseCampMaxNumInGuild` i zastosować zmianę przez restart serwera.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting.

:::info Wymagany dostęp
Potrzebujesz dostępu do administracji serwera Palworld oraz sekcji `Configs`, aby edytować pliki konfiguracyjne.
:::

## Znajdź plik konfiguracyjny

Aby zmienić maksymalną liczbę baz gildii, musisz edytować plik `PalWorldSettings.ini`.

W panelu ZAP-Hosting otwórz administrację swojego serwera gier Palworld i przejdź do:

`Configs` → `PalWorldSettings.ini`

Ten plik zawiera główne wartości konfiguracyjne rozgrywki dla Twojego serwera Palworld, w tym limity gildii i baz.

## Edytuj wartość maksymalnej liczby baz gildii

W pliku `PalWorldSettings.ini` znajdź sekcję `OptionSettings`. Ustawienie, które musisz zmienić, to:

`BaseCampMaxNumInGuild=[twoja_wartość]`

Zamień `[twoja_wartość]` na liczbę baz, które chcesz pozwolić postawić każdej gildii.

### Przykładowa konfiguracja

Jeśli chcesz pozwolić na maksymalnie `6` baz na gildię, wpis powinien wyglądać tak:

```ini
BaseCampMaxNumInGuild=6
```

Jeśli ustawienie już istnieje, zmień tylko jego wartość. Jeśli go brakuje, dodaj je w istniejącej liście parametrów `OptionSettings` w pliku.

:::note Domyślna i standardowa maksymalna wartość
Aktualne informacje wskazują, że wartość domyślna to `4`, a standardowy maksymalny limit w wersji vanilla to `10`. Wartości powyżej `10` zazwyczaj nie są wspierane na niezmodyfikowanym serwerze Palworld.
:::

### Referencja wartości

| Klucz konfiguracyjny | Opis | Wartość domyślna | Maksimum vanilla |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | Maksymalna liczba baz dozwolona na gildię | `4` | `10` |

:::caution Używaj poprawnych wartości
Ustaw `BaseCampMaxNumInGuild` tylko na rozsądną, wspieraną wartość. Wartości powyżej `10` zazwyczaj wymagają modyfikacji po stronie serwera i mogą nie działać poprawnie na standardowym serwerze Palworld.
:::

## Zapisz konfigurację

Po zmianie wartości zapisz plik `PalWorldSettings.ini` w edytorze konfiguracji ZAP-Hosting.

Nowe ustawienie maksymalnej liczby baz zostanie zapisane, ale nie zacznie działać, dopóki serwer nie zostanie zrestartowany.

## Zrestartuj serwer

Po zapisaniu pliku zrestartuj swój serwer Palworld z poziomu panelu administracyjnego.

Restart jest konieczny, ponieważ Palworld odczytuje konfigurację `PalWorldSettings.ini` podczas uruchamiania serwera. Bez restartu nowy limit baz gildii zwykle nie zostanie zastosowany.

### Co zrobić po restarcie

Zazwyczaj nie są potrzebne żadne dodatkowe komendy konsolowe po edycji `BaseCampMaxNumInGuild`. Po restarcie nowa wartość powinna działać automatycznie.

| Akcja | Wymagana |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Uruchom dodatkowe komendy | Nie |

:::tip Przetestuj nowy limit
Po restarcie dołącz na serwer i przetestuj limit stawiania baz z gildii, aby potwierdzić, że nowe ustawienie zostało zastosowane zgodnie z oczekiwaniami.
:::

## Rozwiązywanie problemów

Jeśli ustawienie maksymalnej liczby baz gildii nie zmienia się, sprawdź poniższe punkty.

### Sprawdź wpis w konfiguracji

Upewnij się, że `BaseCampMaxNumInGuild` jest poprawnie napisane i używa wartości numerycznej, np.:

```ini
BaseCampMaxNumInGuild=8
```

Błąd w nazwie klucza lub nieprawidłowa wartość mogą uniemożliwić działanie ustawienia.

### Potwierdź zapisanie pliku

Sprawdź, czy zmiany zostały zapisane w `Configs` → `PalWorldSettings.ini` przed restartem serwera.

### Wykonaj pełny restart serwera

Po zmianie tego ustawienia wymagany jest pełny restart serwera. Jeśli tylko zapisałeś plik bez restartu, stara wartość może nadal obowiązywać.

### Trzymaj się limitu vanilla

Jeśli ustawisz wartość powyżej `10`, serwer może ją zignorować lub zachowywać się nieprzewidywalnie, chyba że używasz kompatybilnych modów. Na standardowym serwerze trzymaj się wartości `10` lub niższej.

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś maksymalną liczbę baz gildii na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!