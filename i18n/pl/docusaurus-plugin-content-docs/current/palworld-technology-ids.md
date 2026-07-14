---
id: palworld-technology-ids
title: "Palworld: ID technologii"
description: "Dowiedz się, jak zarządzać ID technologii w Palworld, wyłączać konkretne technologie oraz jakie wartości konfiguracyjne są wymagane na Twoim serwerze -> Dowiedz się więcej"
sidebar_label: Palworld: ID technologii
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld używa *ID technologii* do identyfikacji odblokowywanych technologii oraz niektórych powiązanych ustawień opartych na przedmiotach. W tym poradniku nauczysz się, jak wyłączyć konkretne technologie na swoim serwerze Palworld w ZAP-Hosting, edytując odpowiedni wpis konfiguracyjny ręcznie.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting oraz uprawnienia do edycji plików konfiguracyjnych serwera.

:::info Wymagany dostęp
Potrzebujesz dostępu do administracji serwera Palworld oraz sekcji `Configs` w panelu ZAP-Hosting, aby wykonać tę konfigurację.
:::

:::note Źródła ID technologii
ID technologii w Palworld to wewnętrzne ciągi znaków definiowane przez grę, takie jak `GrapplingGun` czy `SkillUnlock_JetDragon`. Nie ma oficjalnej listy w panelu ZAP-Hosting, więc musisz korzystać z wiarygodnych zewnętrznych źródeł, aby poznać poprawne ID.
:::

## Zrozumienie ID technologii

ID technologii to wewnętrzne identyfikatory używane przez Palworld do oznaczania odblokowywanych technologii. Zamiast widocznej nazwy w grze, konfiguracja serwera wymaga dokładnego ciągu ID.

Do wyłączania technologii Palworld używa ustawienia `DenyTechnologyList`. Wartość ta przyjmuje listę ID technologii rozdzielonych przecinkami.

### Co robi `DenyTechnologyList`

Gdy dodasz poprawne ID technologii do `DenyTechnologyList`, te technologie zostaną zablokowane na Twoim serwerze. Przydaje się to, gdy chcesz ograniczyć postęp, usunąć konkretne narzędzia mobilności lub dostosować zasady rozgrywki dla swojej społeczności.

### Obsługiwany format wartości

Wartość musi być wpisana jako lista ID technologii rozdzielona przecinkami, bez dodatkowych wyjaśnień.

| Klucz konfiguracyjny | Cel | Format | Przykład |
|---|---|---|---|
| `DenyTechnologyList` | Wyłącza wybrane technologie | Lista ID technologii rozdzielona przecinkami | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution Dokładne dopasowanie ID
ID technologii muszą dokładnie odpowiadać wewnętrznym wartościom gry. Jeśli ID jest błędnie napisane lub nieaktualne dla obecnej wersji Palworld, ustawienie może nie działać poprawnie.
:::

## Otwórz właściwy plik konfiguracyjny

W ZAP-Hosting tę zmianę wykonujesz, ręcznie edytując plik konfiguracyjny Palworld.

### Plik do edycji

Musisz edytować następujący plik:

```ini
PalWorldSettings.ini
```

### Gdzie go znaleźć w panelu ZAP-Hosting

Otwórz administrację swojego serwera gier Palworld, a następnie przejdź do:

```text
Configs
```

Stamtąd otwórz `PalWorldSettings.ini`.

:::tip Lokalizacja konfiguracji w ZAP-Hosting
Jeśli Twój serwer udostępnia wiele plików do edycji, upewnij się, że wybierasz `PalWorldSettings.ini`, ponieważ to właśnie ten plik zawiera ustawienia serwera związane z rozgrywką, takie jak `DenyTechnologyList`.
:::

## Edytuj ustawienie ID technologii

Po otwarciu `PalWorldSettings.ini` znajdź listę opcji serwera i dodaj lub zmodyfikuj wpis `DenyTechnologyList`.

### Dodaj ID technologii do `DenyTechnologyList`

Użyj listy ID technologii rozdzielonych przecinkami, które chcesz wyłączyć.

Przykład:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

Ten przykład wyłącza:

| ID technologii | Znaczenie |
|---|---|
| `GrapplingGun` | Hakowy pistolet (Grappling Gun) |
| `GrapplingGun2` | Wyższy wariant hakowego pistoletu |
| `SkillUnlock_JetDragon` | Odblokowanie JetDragona |

:::note Format cytowania
W zależności od struktury Twojego istniejącego wpisu w `PalWorldSettings.ini`, wartość może znajdować się wewnątrz większego bloku opcji. Zachowaj styl składni już używany w pliku i zmień tylko wartość dla `DenyTechnologyList`.
:::

### Przykład w bloku opcji

Na wielu serwerach Palworld ustawienia są przechowywane w większej linii `OptionSettings`. W takim przypadku wpis może wyglądać tak:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

Jeśli `DenyTechnologyList` nie jest jeszcze obecne, dodaj je w tym samym bloku `OptionSettings=(...)`, oddzielając przecinkiem od innych wpisów.

:::caution Zachowaj istniejącą składnię
Nie usuwaj innych ustawień z `OptionSettings`. Brakujący przecinek, nawias lub cudzysłów może spowodować, że konfiguracja nie załaduje się poprawnie.
:::

## Wybierz poprawne ID technologii

Musisz używać poprawnych wewnętrznych ID technologii, a nie nazw wyświetlanych w grze.

### Przykładowe ID technologii

Poniżej znajdują się znane przykłady ID technologii używanych w Palworld:

| ID technologii | Przykładowe znaczenie |
|---|---|
| `AIcore` | Rdzeń AI |
| `GrapplingGun` | Hakowy pistolet |
| `GrapplingGun2` | Wariant hakowego pistoletu |
| `GrapplingGun3` | Wariant hakowego pistoletu |
| `GrapplingGun4` | Wariant hakowego pistoletu |
| `GrapplingGun5` | Wariant hakowego pistoletu |
| `SkillUnlock_JetDragon` | Odblokowanie JetDragona |
| `SkillUnlock_IceHorse` | Odblokowanie Ice Horse |
| `PALBOX` | Technologia związana z Palbox |
| `RepairBench` | Stół naprawczy |

Ponieważ Palworld jest aktualizowany, pełna lista ID może się zmieniać. Jeśli potrzebujesz szerszej listy, zweryfikuj ID w aktualnym i wiarygodnym źródle przed ich zastosowaniem.

### Powiązane użycie ID w innych ustawieniach

Wewnętrzne ID technologii mogą być też używane w innych opcjach konfiguracyjnych Palworld. Jednym z przykładów jest:

| Klucz konfiguracyjny | Cel |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Ustawia niestandardowy drop przedmiotu przy zabójstwach w trybie PvP |

:::info Powiązane ustawienie PvP
Jeśli planujesz używać ID do dostosowania dropu przedmiotów w PvP, upewnij się, że typ ID wymagany przez `AdditionalDropItemWhenPlayerKillingInPvPMode` odpowiada przedmiotowi, którego chcesz użyć. Ten poradnik skupia się wyłącznie na `DenyTechnologyList`.
:::

## Zapisz i zrestartuj serwer

Po edycji pliku zapisz zmiany w panelu ZAP-Hosting.

Aby zastosować nową konfigurację, zrestartuj swój serwer Palworld.

### Wymagane działania po edycji

| Działanie | Wymagane |
|---|---|
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Uruchom dodatkowe komendy konsoli | Nie jest potwierdzone |

Restart jest konieczny, ponieważ Palworld odczytuje ustawienia serwera podczas uruchamiania. Bez restartu nowe ograniczenia technologii mogą nie zostać zastosowane.

:::tip Testuj po restarcie
Po restarcie serwera dołącz do niego i sprawdź, czy wybrane technologie są faktycznie niedostępne. To pomoże potwierdzić, że ID i składnia zostały wpisane poprawnie.
:::

## Rozwiązywanie problemów

Jeśli technologie nadal są dostępne po restarcie, sprawdź następujące kwestie.

### Sprawdź pisownię ID

Upewnij się, że każde ID technologii jest napisane dokładnie tak, jak wymaga tego gra, łącznie z wielkością liter.

### Sprawdź składnię konfiguracji

Jeśli edytowałeś blok `OptionSettings=(...)`, potwierdź, że:

- każde ustawienie jest oddzielone przecinkiem
- cudzysłowy są poprawnie otwarte i zamknięte
- nawiasy są kompletne
- `DenyTechnologyList` znajduje się w odpowiednim bloku ustawień

### Potwierdź, że serwer zrestartował się poprawnie

Jeśli serwer nie zrestartował się prawidłowo, zaktualizowana konfiguracja mogła nie zostać załadowana.

:::danger Ryzyko błędnej konfiguracji
Niepoprawnie sformatowany plik `PalWorldSettings.ini` może uniemożliwić poprawne załadowanie ustawień. W takim przypadku przywróć poprzednią działającą wersję pliku i ponownie ostrożnie wprowadź zmiany.
:::

## Podsumowanie

Gratulacje, udało Ci się wyłączyć konkretne technologie na swoim serwerze Palworld za pomocą ID technologii. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂