---
id: palworld-enable-predator-pals
title: "Palworld: Włączanie Predator Pals"
description: "Dowiedz się, jak włączyć lub wyłączyć predator pals na swoim serwerze Palworld, naprawić problem z ich niepojawianiem się oraz jak ręcznie skonfigurować odpowiednie ustawienie. -> Sprawdź teraz"
sidebar_label: "Włączanie Predator Pals"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

*Predator Pals* to potężne Pals typu boss, które mogą pojawiać się w świecie Palworld. W tym poradniku nauczysz się, jak włączyć lub wyłączyć predator pals na swoim serwerze gier Palworld w ZAP-Hosting, edytując ręcznie odpowiedni plik konfiguracyjny.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu głównym ZAP-Hosting oraz uprawnienia do zarządzania plikami konfiguracyjnymi.

:::info Dostęp do plików konfiguracyjnych
Do tej konfiguracji musisz ręcznie edytować ustawienia serwera przez sekcję **Configs** w panelu administracyjnym serwera gier.
:::

## Otwórz konfigurację Palworld

Aby zmienić, czy predator pals mogą się pojawiać, musisz edytować plik `PalWorldSettings.ini`.

### Znajdź odpowiedni plik w panelu ZAP

Najpierw otwórz swój serwer gier Palworld w panelu głównym ZAP-Hosting. Następnie przejdź do sekcji **Configs** w panelu administracyjnym serwera i otwórz plik `PalWorldSettings.ini`.

To główny plik konfiguracyjny używany do ustawień związanych z rozgrywką, w tym zachowania predator boss pals.

:::note Wymagana ręczna edycja
To ustawienie musi być zmienione ręcznie w pliku konfiguracyjnym. Jeśli w panelu nie widzisz dedykowanego przełącznika dla tej opcji, bezpośrednia edycja `PalWorldSettings.ini` jest właściwą metodą.
:::

## Edytuj ustawienie Predator Pals

W pliku `PalWorldSettings.ini` znajdź sekcję `OptionSettings`. Odpowiedni klucz konfiguracyjny to `EnablePredatorBossPal`.

### Wartość konfiguracyjna

Użyj jednej z poniższych wartości w zależności od efektu, jaki chcesz osiągnąć:

| Ustawienie | Wartość | Efekt |
| --- | --- | --- |
| Włącz predator pals | `True` | Predator boss Pals mogą pojawiać się w świecie |
| Wyłącz predator pals | `False` | Predator boss Pals nie będą się pojawiać w świecie |

### Przykładowy wpis

Jeśli ustawienie już istnieje, zmień jego wartość. Jeśli go brakuje, dodaj je w sekcji `OptionSettings`.

```ini
EnablePredatorBossPal=True
```

Aby wyłączyć predator pals, użyj:

```ini
EnablePredatorBossPal=False
```

:::tip Sprawdź najpierw istniejącą składnię
Ustawienia serwera Palworld są zwykle przechowywane jako część dłuższej linii `OptionSettings` w `PalWorldSettings.ini`. Jeśli plik już zawiera taką strukturę, dodaj lub zmodyfikuj `EnablePredatorBossPal=True` lub `EnablePredatorBossPal=False` w istniejącej liście ustawień zamiast tworzyć osobną, niepowiązaną sekcję.
:::

## Zapisz i zastosuj zmiany

Po edycji pliku zapisz zmiany w sekcji **Configs**.

### Uruchom ponownie serwer

Po zapisaniu pliku zrestartuj swój serwer Palworld, aby nowe ustawienie zostało poprawnie załadowane.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Uruchom ponownie serwer | Tak |
| Dodatkowe polecenie konsoli | Nie |

:::caution Wymagany restart
Nowe ustawienie predator pals nie zacznie działać, dopóki serwer nie zostanie zrestartowany. Jeśli predator pals nadal się nie pojawiają po zmianie, upewnij się, że plik został poprawnie zapisany, a restart serwera zakończył się sukcesem.
:::

## Sprawdź ustawienie

Po restarcie dołącz do serwera i sprawdź, czy predator pals zachowują się zgodnie z oczekiwaniami.

Jeśli je włączyłeś, a predator pals się nie pojawiają, sprawdź ponownie wpis w `PalWorldSettings.ini` i upewnij się, że wartość jest dokładnie `True` lub `False`. Potwierdź też, że ustawienie znajduje się w odpowiednim miejscu w istniejącej składni konfiguracji serwera.

:::note Zachowanie pojawiania się
To ustawienie kontroluje, czy predator boss Pals mogą pojawiać się w świecie. Nie zapewnia mapy lokalizacji predator pals, nie zmienia pojedynczych punktów pojawiania się ani nie gwarantuje natychmiastowych spotkań w konkretnym obszarze.
:::

## Referencje konfiguracji

| Plik | Lokalizacja w ZAP-Hosting | Klucz | Możliwe wartości | Domyślne zachowanie | Wymagany restart |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | Administracja serwerem gier → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | Tak |

## Podsumowanie

Gratulacje, pomyślnie włączyłeś lub wyłączyłeś predator pals na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂