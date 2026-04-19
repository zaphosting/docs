---
id: windrose-world-modifiers
title: "Windrose: Modyfikatory Świata"
description: "Konfiguracja modyfikatorów świata w Windrose z pełnym odniesieniem do parametrów typu float, ustawień walki oraz przykładami skalowania kooperacji -> Dowiedz się więcej"
sidebar_label: Modyfikatory świata
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Modyfikatory świata w Windrose pozwalają szczegółowo dostosować walkę, walkę morską, eksplorację, zadania oraz skalowanie kooperacji. W tym poradniku nauczysz się edytować plik `WorldDescription.json`, zrozumiesz każdy parametr i zastosujesz własne ustawienia na swoim serwerze gier Windrose.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz:

- Aktywny serwer gier Windrose w ZAP-Hosting
- Dostęp do zarządzania serwerem gier
- Serwer zatrzymany przed edycją plików
- Dostęp do sekcji **Konfiguracje** lub **Menedżer plików** w panelu zarządzania serwerem

:::info Lokalizacja pliku konfiguracyjnego
Modyfikatory świata są przechowywane w pliku `WorldDescription.json` w bloku `WorldSettings`.
:::

:::caution Zatrzymaj serwer przed edycją
Zawsze zatrzymuj serwer przed edycją pliku `WorldDescription.json`. Zapobiega to uszkodzeniu pliku lub nadpisaniu zmian podczas uruchamiania lub automatycznego zapisu.
:::

## Zrozumienie modyfikatorów świata

Każde niestandardowe ustawienie jest definiowane indywidualnie w pliku `WorldDescription.json` w sekcji `WorldSettings`. Gra rozdziela wartości według typu:

- `float` dla liczbowych mnożników, takich jak zdrowie czy obrażenia
- `bool` dla opcji prawda/fałsz
- `tag` dla nazwanych wartości trudności, np. trudność walki

Ta struktura jest ważna, ponieważ każdy parametr musi znajdować się w odpowiedniej sekcji. Jeśli umieścisz wartość `float` w `bool` lub użyjesz nieprawidłowego taga, ustawienie może nie działać poprawnie.

:::note Typy parametrów
Jeśli nie znasz terminu *parametr*, oznacza on po prostu konfigurowalną wartość używaną przez grę. W tym poradniku każdy parametr kontroluje jeden aspekt trudności świata lub zachowania rozgrywki.
:::

## Otwórz plik konfiguracyjny świata

Aby zastosować niestandardowe modyfikatory świata, musisz edytować właściwy plik świata.

1. Zatrzymaj swój serwer Windrose w panelu zarządzania serwerem.
2. Otwórz **Menedżer plików**.
3. Przejdź do następującej ścieżki:

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

Podstaw następujące wartości:

| Placeholder | Znaczenie |
| --- | --- |
| `[your_game_version]` | Folder z aktualną wersją gry Windrose |
| `[your_world_id]` | ID świata, który chcesz modyfikować |

:::tip Znajdowanie właściwego świata
Jeśli masz wiele światów, upewnij się, że edytujesz plik `WorldDescription.json` w odpowiednim folderze `[your_world_id]`. W przeciwnym razie zmiany wpłyną na inny zapis.
:::

## Edytuj blok WorldSettings

W pliku `WorldDescription.json` znajdź blok `WorldSettings`. Dodaj lub zmodyfikuj tam swoje niestandardowe wartości.

Użyj następującej struktury:

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

Po zapisaniu pliku uruchom serwer ponownie.

:::info Zachowanie presetów
Jeśli ręcznie ustawisz jakąkolwiek wartość, `WorldPresetType` automatycznie zmieni się na `Custom` przy następnym uruchomieniu serwera. Jeśli chcesz użyć czystego presetu zamiast wartości niestandardowych, powinieneś korzystać z odpowiedniej konfiguracji presetów, a nie mieszać obu metod.
:::

## Pełne odniesienie parametrów

Poniższe tabele zawierają pełne odniesienie do wszystkich dostępnych niestandardowych modyfikatorów świata.

### Parametry walki

| Parametr | Sekcja | Domyślnie | Zakres | Efekt |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Mnożnik zdrowia przeciwników |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Mnożnik obrażeń przeciwników |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | Agresja bossów i trudność walki |

`CombatDifficulty` musi być zapisany jako wartość taga, na przykład:

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

Dostępne wartości:

| Trudność | Wartość TagName |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Parametry walki morskiej

| Parametr | Sekcja | Domyślnie | Zakres | Efekt |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | Mnożnik zdrowia statków przeciwników |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | Mnożnik obrażeń statków przeciwników |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Liczba przeciwników do pokonania podczas abordażu |

Te ustawienia są przydatne, jeśli chcesz ułatwić bitwy morskie dla mniejszych załóg lub znacznie je utrudnić dla doświadczonych grup.

### Parametry skalowania kooperacji

| Parametr | Sekcja | Domyślnie | Zakres | Efekt |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | Dostosowuje zdrowie i utratę postawy przeciwników w zależności od liczby graczy |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | Dostosowuje zdrowie statków przeciwników w zależności od liczby graczy |

Te wartości są szczególnie przydatne dla większych załóg. Pozwalają utrzymać zbalansowaną walkę wraz ze wzrostem liczby graczy w świecie.

### Parametry eksploracji

| Parametr | Sekcja | Domyślnie | Efekt |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | Wyłącza markery na mapie dla punktów zainteresowania |

:::note Nazwa EasyExplore
Mimo nazwy, ustawienie `EasyExplore` na `true` utrudnia eksplorację, ponieważ wyłącza markery na mapie dla punktów zainteresowania. To w praktyce tryb immersyjnej eksploracji.
:::

### Parametry zadań

| Parametr | Sekcja | Domyślnie | Efekt |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | Gdy jeden gracz ukończy zadanie kooperacyjne, jest ono automatycznie ukończone dla wszystkich innych graczy, którzy je mają aktywne |

To ustawienie jest przydatne, jeśli chcesz uprościć postęp grupy lub wymagać, aby każdy gracz wykonywał cele indywidualnie.

## Skala mnożników

Jeśli nie jesteś pewien, jak wartość `float` wpływa na rozgrywkę, użyj tego szybkiego odniesienia skali.

| Wartość | Efekt |
| --- | --- |
| `0.5` | `50%` - zauważalnie łatwiejsze |
| `1.0` | `100%` - domyślne lub normalne |
| `2.0` | `200%` - zauważalnie trudniejsze |
| `5.0` | `500%` - ekstremalnie trudne |

Ta tabela to praktyczny przykład parametrów do wyważenia świata. Niższe wartości zmniejszają trudność, wyższe znacznie ją zwiększają.

:::tip Zacznij od małych zmian
Jeśli testujesz zmiany balansu, zwiększaj lub zmniejszaj jeden parametr na raz. Ułatwia to zrozumienie, które ustawienie wpłynęło na różnicę w rozgrywce.
:::

## Przykładowe konfiguracje

Poniższe przykłady pomogą Ci stworzyć własną niestandardową konfigurację.

### Załoga casual

To ustawienie obniża presję walki, utrzymuje współdzielenie zadań i ułatwia abordaż.

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Hardcore na morzu

To ustawienie zwiększa trudność lądową i morską, wyłącza współdzielenie zadań i włącza immersyjną eksplorację.

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### Skalowanie dla dużej grupy

To ustawienie jest przydatne dla większych grup, np. 8 graczy, gdzie domyślne skalowanie może być zbyt łatwe.

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Najlepsze praktyki edycji wartości

### Używaj poprawnych zakresów

Każdy parametr `float` obsługuje tylko określony zakres. Trzymanie się dokumentowanego zakresu pomaga uniknąć nieoczekiwanego zachowania.

| Parametr | Minimum | Maksimum |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution Nieprawidłowe wartości
Jeśli użyjesz nieobsługiwanych wartości, błędnego formatowania lub umieścisz parametr w złej sekcji, gra może zignorować ustawienie lub nie zastosować go poprawnie.
:::

### Zachowaj poprawny format JSON

Podczas edycji `WorldDescription.json` upewnij się, że:

- Wszystkie klucze są w podwójnych cudzysłowach
- Przecinki są poprawnie umieszczone
- Nawiasy `{}` i `[]` są poprawnie zamknięte
- `true` i `false` są zapisane małymi literami
- Wartości dziesiętne używają kropki, np. `1.5`

Uszkodzony plik JSON może uniemożliwić poprawne załadowanie konfiguracji świata.

### Restart po zapisie

Po zakończeniu edycji:

1. Zapisz plik `WorldDescription.json`
2. Uruchom serwer ponownie
3. Dołącz do serwera i przetestuj zmiany w rozgrywce

Niektóre wartości najłatwiej zweryfikować podczas walki, abordażu lub sesji kooperacyjnej, a nie od razu po zalogowaniu.

## Zarządzanie konfiguracjami w panelu zarządzania serwerem gier

Możesz zarządzać plikami konfiguracyjnymi Windrose bezpośrednio w panelu zarządzania serwerem gier ZAP-Hosting, korzystając z dostępnych opcji konfiguracji i menedżera plików. To zalecany sposób edycji `WorldDescription.json`, jeśli nie chcesz używać zewnętrznych narzędzi.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Jeśli dokładny wpis konfiguracyjny nie jest widoczny bezpośrednio, użyj **Menedżera plików** i przejdź ręcznie do ścieżki pliku świata podanej wcześniej w poradniku.

:::info Zarządzanie konfiguracją
W zależności od aktualnego interfejsu serwera gier i Twojej konfiguracji świata, dokładna lista plików może się różnić. Jeśli nie widzisz konkretnego wpisu konfiguracyjnego, użyj bezpośredniej ścieżki pliku zamiast zakładać brak funkcji.
:::

## Rozwiązywanie problemów

### Zmiany się nie stosują

Jeśli Twoje modyfikatory nie działają po restarcie, sprawdź:

- Czy edytujesz właściwy plik `WorldDescription.json`
- Czy serwer był zatrzymany przed edycją
- Czy składnia JSON jest poprawna
- Czy każdy parametr jest w odpowiedniej sekcji: `float`, `bool` lub `tag`
- Czy serwer został w pełni zrestartowany po zapisie

### Trudność nie uległa zmianie

Niektóre modyfikatory są bardziej zauważalne niż inne. Na przykład:

- `MobHealthMultiplier` jest najłatwiejszy do zauważenia podczas zwykłej walki
- `ShipHealthMultiplier` jest widoczny tylko podczas walki morskiej
- `Coop_StatsCorrectionModifier` jest najbardziej widoczny przy wielu graczach
- `EasyExplore` wpływa tylko na zachowanie eksploracji i markery na mapie

### Preset zmienił się na Custom

To normalne zachowanie po ręcznym ustawieniu wartości niestandardowych. Gra automatycznie zmienia typ presetu świata na `Custom` przy następnym uruchomieniu.

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś modyfikatory świata w Windrose. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂