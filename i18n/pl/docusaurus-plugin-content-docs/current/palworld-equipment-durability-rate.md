---
id: palworld-equipment-durability-rate
title: "Palworld: Współczynnik Trwałości Ekwipunku"
description: "Dowiedz się, jak zmienić trwałość ekwipunku i dostosować współczynnik trwałości na swoim serwerze Palworld, edytując odpowiednią wartość w konfiguracji. -> Sprawdź teraz"
sidebar_label: Palworld: Współczynnik Trwałości Ekwipunku
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W Palworld współczynnik trwałości ekwipunku kontroluje, jak szybko twoje narzędzia, bronie i zbroje tracą trwałość podczas używania. W tym poradniku nauczysz się, jak ręcznie zmienić ustawienie `EquipmentDurabilityDamageRate` w konfiguracji serwera Palworld w ZAP-Hosting i poprawnie zastosować tę zmianę.



## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do panelu administracyjnego swojego serwera gier Palworld w interfejsie ZAP-Hosting. Potrzebujesz także uprawnień do edycji plików konfiguracyjnych serwera w sekcji **Konfiguracje**.

:::info Wymagana ręczna konfiguracja
To ustawienie musi zostać zmienione ręcznie w pliku konfiguracyjnym Palworld. Nie ma osobnej komendy do wykonania w grze dla tej konkretnej zmiany.
:::

## Zrozumienie ustawienia trwałości

Palworld przechowuje wiele ustawień rozgrywki w pliku konfiguracyjnym `PalWorldSettings.ini`. Ustawienie dotyczące trwałości ekwipunku to:

- `EquipmentDurabilityDamageRate`

Ta wartość działa jako mnożnik utraty trwałości:

| Klucz konfiguracyjny | Opis | Wartość domyślna |
| --- | --- | --- |
| `EquipmentDurabilityDamageRate` | Kontroluje, jak szybko ekwipunek traci trwałość | `1.000000` |

Niższe wartości zmniejszają utratę trwałości, co oznacza, że twój ekwipunek wytrzyma dłużej. Wartość `0.000000` całkowicie wyłącza utratę trwałości ekwipunku.

:::note Co zmienia to ustawienie
To ustawienie zmienia tempo utraty trwałości ekwipunku takiego jak narzędzia, bronie i zbroje. Nie zwiększa obrażeń przedmiotów, szybkości naprawy ani jakości przedmiotów.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić ustawienie, musisz edytować główny plik konfiguracyjny serwera Palworld z panelu administracyjnego serwera gier ZAP-Hosting.

### Znajdź plik w interfejsie ZAP-Hosting

1. Zaloguj się na stronie ZAP-Hosting.
2. Otwórz panel administracyjny swojego serwera gier **Palworld**.
3. Przejdź do sekcji **Konfiguracje**.
4. Otwórz plik `PalWorldSettings.ini`.

To właśnie w tym pliku przechowywane są wartości rozgrywki Palworld, takie jak trwałość, wytrzymałość, obrażenia i inne ustawienia świata.

## Edytuj współczynnik trwałości ekwipunku

Po otwarciu `PalWorldSettings.ini` znajdź linię `OptionSettings`. Palworld zazwyczaj przechowuje ustawienia rozgrywki jako wpisy oddzielone przecinkami w tej sekcji.

### Dodaj lub zmień wpis konfiguracyjny

Musisz upewnić się, że następujący wpis znajduje się w `OptionSettings`:

```ini
EquipmentDurabilityDamageRate=1.000000
```

Jeśli klucz jest już obecny, zamień jego aktualną wartość na preferowaną. Jeśli go brakuje, dodaj go wewnątrz istniejącego bloku `OptionSettings=(...)`.

### Przykładowe wartości

Możesz użyć poniższych wartości w zależności od efektu, jaki chcesz osiągnąć:

| Wartość | Efekt |
| --- | --- |
| `1.000000` | Domyślna utrata trwałości |
| `0.500000` | Ekwipunek wytrzymuje około dwa razy dłużej |
| `0.250000` | Ekwipunek wytrzymuje około cztery razy dłużej |
| `0.000000` | Ekwipunek staje się niezniszczalny |

### Przykładowy fragment konfiguracji

Dokładna zawartość twojej linii `OptionSettings` może się różnić w zależności od konfiguracji serwera, ale ustawienie trwałości powinno pojawić się na tej samej liście oddzielonej przecinkami, na przykład:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,EquipmentDurabilityDamageRate=0.500000)
```

:::caution Zachowaj istniejące formatowanie
Nie usuwaj innych wartości z linii `OptionSettings` podczas edycji pliku. Palworld oczekuje, że te ustawienia pozostaną w poprawnym formacie oddzielonym przecinkami.
:::

## Zapisz i zastosuj zmiany

Po edycji pliku konfiguracyjnego zapisz zmiany w interfejsie ZAP-Hosting.

### Uruchom ponownie serwer

Aby zastosować nowe ustawienie trwałości, zrestartuj swój serwer Palworld z panelu administracyjnego serwera gier.

Bez restartu zaktualizowana konfiguracja zwykle nie zostanie załadowana przez serwer.

| Działanie | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Uruchom ponownie serwer | Tak |
| Wykonaj komendę w grze | Nie |
| Zainstaluj serwer ponownie | Nie |

:::tip Najpierw przetestuj małą zmianę
Jeśli nie jesteś pewien, która wartość trwałości pasuje do twojego stylu gry, zacznij od `0.500000`. To daje zauważalną poprawę trwałości bez całkowitego wyłączania mechaniki.
:::

## Rozwiązywanie problemów

Jeśli nowe zachowanie trwałości ekwipunku nie działa po restarcie, sprawdź poniższe punkty.

### Sprawdź klucz konfiguracyjny

Upewnij się, że klucz jest napisany dokładnie tak:

```ini
EquipmentDurabilityDamageRate
```

Klucze konfiguracyjne Palworld są praktycznie rozróżniane wielkością liter, aby zapewnić niezawodne zarządzanie, więc skopiuj nazwę dokładnie tak, jak pokazano.

### Sprawdź umiejscowienie w `OptionSettings`

Wartość musi znajdować się wewnątrz sekcji `OptionSettings=(...)` w pliku `PalWorldSettings.ini`. Jeśli umieścisz ją poza tym blokiem, serwer może ją zignorować.

### Potwierdź, że plik został zapisany

Po edycji w **Konfiguracjach** sprawdź, czy twoje zmiany nadal są widoczne po ponownym otwarciu `PalWorldSettings.ini`. Jeśli nie, plik mógł nie zostać poprawnie zapisany.

### W razie potrzeby zrestartuj ponownie

Jeśli podczas zmiany byli zalogowani gracze lub serwer nie zrestartował się poprawnie, wykonaj kolejny pełny restart z panelu administracyjnego.

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś współczynnik trwałości ekwipunku na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!