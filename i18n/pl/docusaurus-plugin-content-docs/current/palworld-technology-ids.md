---
id: palworld-technology-ids
title: "Palworld: ID technologii"
description: "Dowiedz się, jak zarządzać ID technologii w Palworld, wyłączać konkretne technologie oraz bezpiecznie edytować właściwą konfigurację serwera. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: ID technologii
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld używa *ID technologii* do identyfikacji odblokowywanych technologii oraz niektórych ustawień związanych z przedmiotami w konfiguracji serwera. W tym poradniku nauczysz się, jak wyłączyć konkretne technologie, edytując ustawienie `DenyTechnologyList` w konfiguracji serwera Palworld na ZAP-Hosting.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting oraz uprawnienia do edycji plików konfiguracyjnych.

:::info Wymagany dostęp do konfiguracji
Potrzebujesz dostępu do administracji serwera gier oraz sekcji `Configs`, aby edytować plik `PalWorldSettings.ini`.
:::

:::note Źródło ID technologii
ID technologii w Palworld to wartości tekstowe, takie jak `GrapplingGun`, `GrapplingGun2` czy `SkillUnlock_JetDragon`. Aktualna lista referencyjna od zewnętrznego źródła jest dostępna tutaj: [Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids).

Ponieważ aktualizacje Palworld mogą zmieniać dostępne technologie, zawsze sprawdzaj, czy ID, których chcesz użyć, są aktualne w obecnej wersji gry.
:::

## Zrozumienie ID technologii

ID technologii to wewnętrzne identyfikatory używane przez Palworld do wpisów odblokowywanych technologii. Na serwerach dedykowanych można ich używać w konkretnych opcjach konfiguracyjnych do kontrolowania zachowań w grze.

Najważniejszym ustawieniem w tym temacie jest `DenyTechnologyList`, które pozwala zablokować wybrane technologie przed odblokowaniem lub użyciem na Twoim serwerze.

### Obsługiwane użycie w konfiguracji

Poniższa tabela pokazuje klucz konfiguracyjny omawiany w tym poradniku:

| Klucz konfiguracji | Cel | Format wartości |
| --- | --- | --- |
| `DenyTechnologyList` | Wyłącza konkretne technologie na serwerze | Lista ID technologii oddzielona przecinkami |

### Przykładowe ID technologii

Poniżej przykłady często używanych ID:

| ID technologii | Przykładowe znaczenie |
| --- | --- |
| `GrapplingGun` | Hakowy pistolet (Grappling Gun) |
| `GrapplingGun2` | Wyższy poziom hakowego pistoletu |
| `SkillUnlock_JetDragon` | Odblokowanie związane z Jetragonem |
| `SkillUnlock_IceHorse` | Odblokowanie związane z Frostallionem |
| `PALBOX` | Technologia związana z Palbox |
| `RepairBench` | Stół naprawczy |
| `AIcore` | Rdzeń AI |

:::caution Używaj dokładnych wartości ID
ID technologii są rozróżniane wielkością liter. Jeśli wpiszesz błędne ID, Palworld może je zignorować, a technologia nie zostanie wyłączona zgodnie z zamierzeniem.
:::

## Otwórz plik konfiguracyjny Palworld

Aby skonfigurować ID technologii na swoim serwerze ZAP-Hosting, musisz ręcznie edytować właściwy plik ustawień Palworld.

### Znajdź plik w panelu ZAP-Hosting

1. Zaloguj się do panelu ZAP-Hosting.
2. Otwórz swój serwer gier **Palworld**.
3. Przejdź do sekcji **Configs** w administracji serwera.
4. Otwórz plik `PalWorldSettings.ini`.

To jest plik konfiguracyjny, w którym znajduje się i jest edytowane ustawienie `DenyTechnologyList`.



### Znajdź odpowiednie ustawienie

W pliku `PalWorldSettings.ini` poszukaj bloku opcji serwera zawierającego ustawienia Palworld.

Musisz znaleźć lub dodać wpis `DenyTechnologyList`.

:::tip Szybkie wyszukiwanie w pliku
Użyj funkcji wyszukiwania w przeglądarce za pomocą `CTRL` + `F` i wpisz `DenyTechnologyList`, aby szybciej znaleźć to ustawienie.
:::

## Konfiguracja `DenyTechnologyList`

Teraz możesz określić, które technologie mają być zablokowane na Twoim serwerze.

### Format wartości

`DenyTechnologyList` przyjmuje listę ID technologii oddzielonych przecinkami.

Przykładowy format:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

Każdy wpis musi być poprawnym ID technologii Palworld. Nie dodawaj opisów, dodatkowych spacji w samym ID ani nieobsługiwanych znaków.

### Dodaj lub edytuj ustawienie

Jeśli ustawienie już istnieje, zamień jego wartość na swoją listę.

Jeśli nie ma jeszcze tego wpisu, dodaj go w odpowiedniej sekcji ustawień serwera w `PalWorldSettings.ini`.

Przykład:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

Ten przykład wyłącza kilka technologii według ich ID.

### Przykładowe odniesienia konfiguracji

| Przykładowy wpis | Efekt |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | Wyłącza tylko podstawową technologię hakowego pistoletu |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | Wyłącza kilka poziomów technologii hakowego pistoletu |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | Wyłącza wybrane specjalne odblokowania technologii |

:::note Powiązane użycie ID przedmiotów
Niektóre ustawienia związane z przedmiotami w Palworld również używają wartości opartych na ID. Na przykład zewnętrzne źródła wskazują, że `AdditionalDropItemWhenPlayerKillingInPvPMode` może używać ID Palworld dla przedmiotów PvP. Ten poradnik skupia się jednak wyłącznie na `DenyTechnologyList`.
:::

## Zapisz i zastosuj zmiany

Po edycji konfiguracji musisz zapisać plik i zrestartować serwer, aby Palworld załadował zaktualizowane ustawienia.

### Zapisz plik

Po zakończeniu edycji `PalWorldSettings.ini`:

1. Zapisz zmiany w edytorze w sekcji `Configs`.
2. Sprawdź jeszcze raz, czy wpisane ID są poprawne i bez błędów.

### Zrestartuj serwer

Po zapisaniu pliku zrestartuj swój serwer Palworld z poziomu panelu administracji serwera gier ZAP-Hosting.

Restart jest konieczny, ponieważ zmiany w `PalWorldSettings.ini` nie są stosowane poprawnie, dopóki serwer nie uruchomi się ponownie z nowym plikiem.

:::info Wymagany restart serwera
Po zmianie `DenyTechnologyList` wymagany jest restart serwera. Zazwyczaj nie jest potrzebna żadna dodatkowa komenda w grze przy korzystaniu z metody pliku konfiguracyjnego.
:::

## Sprawdź, czy technologie zostały wyłączone

Po restarcie powinieneś potwierdzić, że konfiguracja działa zgodnie z oczekiwaniami.

### Co sprawdzić

Możesz zweryfikować efekt, sprawdzając, czy wybrane technologie są nadal dostępne w grze.

Użyj poniższej listy kontrolnej:

| Sprawdzenie | Oczekiwany rezultat |
| --- | --- |
| Serwer zrestartowany poprawnie | Serwer uruchamia się normalnie |
| `PalWorldSettings.ini` zapisany poprawnie | Wpis `DenyTechnologyList` jest nadal obecny |
| Test wyłączonej technologii w grze | Wybrana technologia nie jest już dostępna, zgodnie z oczekiwaniami |

### Jeśli ustawienie nie działa

Jeśli technologie są nadal dostępne, sprawdź następujące kwestie:

| Możliwy problem | Co zweryfikować |
| --- | --- |
| Nieprawidłowe ID | Upewnij się, że ID technologii dokładnie odpowiada aktualnej wersji gry |
| Błąd formatowania | Sprawdź, czy lista jest oddzielona przecinkami i zawiera tylko czyste ID |
| Plik nie został zapisany | Otwórz ponownie `PalWorldSettings.ini` i potwierdź, że wartość jest obecna |
| Serwer nie został zrestartowany | Zrestartuj serwer ponownie po zapisaniu zmian |

:::caution Aktualizacje gry mogą zmieniać ID
Palworld jest stale aktualizowany, a informacje o technologiach mogą się zmieniać. Jeśli wcześniej poprawne ID przestaje działać, sprawdź je w aktualnym i wiarygodnym źródle, zanim zaczniesz dalsze debugowanie.
:::

## Podsumowanie

Gratulacje, pomyślnie wyłączyłeś wybrane technologie na swoim serwerze Palworld, korzystając z ID technologii. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!