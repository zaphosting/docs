---
id: palworld-increase-xp
title: "Palworld: Zwiększanie XP"
description: "Dowiedz się, jak zwiększyć XP w grze Palworld, edytując konfigurację serwera Palworld i poprawnie dostosowując mnożnik XP. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: Zwiększanie XP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala na dostosowanie mnożników rozgrywki poprzez konfigurację serwera, w tym ilości zdobywanego XP przez graczy. W tym poradniku nauczysz się, jak zwiększyć mnożnik XP na swoim serwerze gier Palworld w ZAP-Hosting, edytując odpowiedni plik konfiguracyjny i poprawnie stosując zmiany.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld przez panel administracyjny ZAP-Hosting oraz uprawnienia do edycji plików konfiguracyjnych.

:::info Wymagany dostęp do konfiguracji
Potrzebujesz dostępu do panelu administracyjnego serwera, aby edytować pliki konfiguracyjne w sekcji `Configs`. Jeśli nie masz dostępu do administracji serwera, najpierw sprawdź swoje uprawnienia w panelu ZAP-Hosting.
:::

## Znajdź plik konfiguracyjny

Aby zwiększyć XP na swoim serwerze Palworld, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld.
2. Przejdź do sekcji `Configs`.
3. Otwórz plik `PalWorldSettings.ini`.

Ten plik zawiera główne ustawienia rozgrywki używane przez serwer dedykowany Palworld, w tym mnożnik XP.

## Edytuj mnożnik XP

Ustawienie odpowiedzialne za zdobywanie XP to `ExpRate`.

### Znajdź właściwe ustawienie

Otwórz `PalWorldSettings.ini` i znajdź linię `OptionSettings` lub sekcję, w której definiowane są mnożniki rozgrywki.

Odpowiedni wpis konfiguracyjny to:

```ini
ExpRate=1.000000
```

### Zmień wartość

Dostosuj wartość `ExpRate` do mnożnika, którego chcesz użyć.

| Klucz konfiguracyjny | Wartość domyślna | Przykładowa wartość | Efekt |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | Podwójne XP |
| `ExpRate` | `1.000000` | `3.000000` | Potrójne XP |

Na przykład, aby włączyć podwójne XP, ustaw:

```ini
ExpRate=2.000000
```

Aby włączyć potrójne XP, ustaw:

```ini
ExpRate=3.000000
```

:::tip Zalecany format wartości
Ustawienia serwera Palworld zwykle używają wartości dziesiętnych, takich jak `1.000000` lub `2.000000`. Używanie tego samego formatu pomaga zachować spójność konfiguracji i ułatwia jej czytanie.
:::

## Przykładowa konfiguracja

W zależności od zawartości pliku, ustawienie zwykle pojawia się w bloku `OptionSettings`. Na przykład:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

Jeśli `ExpRate` jest już obecne, zmień tylko jego wartość. Jeśli go brakuje, dodaj `ExpRate=[twoja_wartość]` wewnątrz istniejącego bloku `OptionSettings=(...)`.

:::caution Ostrożnie edytuj istniejący blok OptionSettings
Nie twórz wielu wpisów `OptionSettings`, chyba że Twoja obecna konfiguracja tego wymaga. W większości przypadków powinieneś edytować tylko istniejącą linię `OptionSettings=(...)` i zmienić tam wartość `ExpRate`.
:::

## Zapisz i zrestartuj serwer

Po zmianie mnożnika XP:

1. Zapisz zmiany w `PalWorldSettings.ini`.
2. Zrestartuj swój serwer Palworld z panelu administracyjnego ZAP-Hosting.

Restart jest konieczny, ponieważ Palworld nie stosuje tej zmiany ustawień rozgrywki natychmiast podczas działania serwera.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Uruchom dodatkowe komendy konsoli | Nie |

:::note Nie są potrzebne dodatkowe komendy
Dla tego ustawienia nie jest zwykle wymagana żadna dodatkowa komenda w grze ani w konsoli. Nowy mnożnik XP zostanie zastosowany po restarcie serwera.
:::

## Sprawdź nowy mnożnik XP

Gdy serwer będzie ponownie online, dołącz do niego i wykonaj czynność, która daje XP, np. pokonaj przeciwników, złap Pals lub wykonaj normalne zadania w grze.

Jeśli zdobywanie XP nie wydaje się się zmieniać:

- ponownie otwórz `PalWorldSettings.ini`
- upewnij się, że `ExpRate` jest obecne w bloku `OptionSettings`
- sprawdź, czy wartość jest poprawnie zapisana, np. `2.000000`
- upewnij się, że serwer został w pełni zrestartowany po zapisaniu zmian

:::danger Unikaj błędnej składni konfiguracji
Jeśli przypadkowo usuniesz przecinki, nawiasy lub inne wartości z linii `OptionSettings=(...)`, serwer może zignorować ustawienie lub nie załadować poprawnie konfiguracji. Zawsze sprawdzaj całą linię przed zapisaniem.
:::

## Podsumowanie

Gratulacje, udało Ci się zwiększyć mnożnik zdobywanego XP na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!