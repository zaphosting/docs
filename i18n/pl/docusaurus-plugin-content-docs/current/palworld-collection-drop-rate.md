---
id: palworld-collection-drop-rate
title: "Palworld: Współczynnik Zbierania Surowców"
description: "Dowiedz się, jak dostosować ustawienia zbierania w Palworld, zwiększyć ilość zbieranych surowców i przyspieszyć odradzanie się zasobów na Twoim serwerze gier Palworld. -> Dowiedz się więcej"
sidebar_label: Palworld: Współczynnik Zbierania Surowców
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld pozwala kontrolować, ile surowców gracze zbierają oraz jak szybko odradzają się obiekty do zbierania. W tym poradniku nauczysz się, jak ręcznie edytować odpowiedni plik konfiguracyjny na swoim serwerze gier Palworld w ZAP-Hosting, aby zmienić współczynnik zbierania i powiązane ustawienia surowców.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu głównym ZAP-Hosting oraz że serwer jest aktualnie wyłączony lub może zostać zrestartowany po wprowadzeniu zmian.

:::info Dostęp do pliku konfiguracyjnego
W Palworld odpowiednie ustawienia rozgrywki znajdują się w pliku `PalWorldSettings.ini`. W panelu administracyjnym serwera gier ZAP-Hosting możesz uzyskać do niego dostęp w sekcji `Configs`.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić ustawienia zbierania, musisz edytować główny plik konfiguracyjny serwera Palworld.

### Znajdź plik w panelu ZAP-Hosting

1. Zaloguj się do [panelu głównego ZAP-Hosting](https://zap-hosting.com).
2. Otwórz swój serwer gier Palworld.
3. Przejdź do sekcji `Configs` w panelu administracyjnym serwera.
4. Otwórz plik o nazwie `PalWorldSettings.ini`.

:::note Poprawny plik
Ustawienia związane ze zbieraniem opisane w tym poradniku znajdują się w pliku `PalWorldSettings.ini`. Jeśli nie widzisz od razu oczekiwanych wpisów, zwykle znajdują się one wewnątrz linii konfiguracyjnej `OptionSettings`.
:::

## Edytuj ustawienia zbierania

Palworld przechowuje wiele opcji rozgrywki jako pary klucz-wartość w sekcji `OptionSettings` pliku `PalWorldSettings.ini`. Aby zwiększyć ilość zbieranych surowców lub zmienić szybkość odradzania się zasobów, musisz dostosować odpowiednie wartości.

### Istotne klucze konfiguracyjne

Użyj poniższych ustawień dotyczących zachowania zbierania:

| Klucz konfiguracyjny | Wartość domyślna | Opis |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | Kontroluje, ile przedmiotów gracze otrzymują z zasobów do zbierania. Wyższe wartości zwiększają ilość zbieraną. |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | Kontroluje, jak szybko odradzają się obiekty do zbierania. Wyższe wartości przyspieszają odradzanie zasobów. |
| `CollectionObjectHpRate` | `1.000000` | Kontroluje ilość HP obiektów do zbierania, takich jak skały czy drzewa. Wyższe wartości zwykle wydłużają czas ich zniszczenia. |

### Przykładowe wartości konfiguracyjne

Jeśli chcesz podwoić ilość zbieranych surowców i sprawić, że zasoby będą odradzać się dwa razy szybciej, ustaw obie wartości na `2.000000`.

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

Jeśli chcesz również, aby obiekty do zbierania były łatwiejsze do zniszczenia, możesz obniżyć mnożnik HP:

```ini
CollectionObjectHpRate=0.500000
```

:::tip Zalecane wartości startowe
Wartość `2.000000` to popularny punkt startowy zarówno dla `CollectionDropRate`, jak i `CollectionObjectRespawnSpeedRate`. Zapewnia zauważalnie szybszy postęp bez zbyt agresywnej zmiany rozgrywki Palworld.
:::

## Zastosuj zmiany w `PalWorldSettings.ini`

Po otwarciu pliku `PalWorldSettings.ini` znajdź istniejący wpis `OptionSettings` i dostosuj odpowiednie klucze bezpośrednio w nim.

### Przykładowy fragment `OptionSettings`

W zależności od aktualnej konfiguracji serwera, linia może już zawierać wiele ustawień. Musisz zmienić tylko wartości dla kluczy związanych ze zbieraniem, jeśli już istnieją, lub dodać je, jeśli ich brakuje.

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution Zachowaj istniejącą składnię
Upewnij się, że zachowujesz oryginalny format linii `OptionSettings`. Nie usuwaj przecinków, nawiasów ani innych ustawień przez przypadek, bo serwer może nie załadować poprawnie konfiguracji.
:::

## Zapisz i zrestartuj serwer

Po zakończeniu edycji pliku zapisz zmiany w sekcji `Configs`.

### Wymagany restart

Palworld nie stosuje tych zmian konfiguracyjnych rozgrywki natychmiast podczas działania serwera. Musisz zrestartować serwer po zapisaniu pliku, aby nowe wartości zostały załadowane.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Dodatkowa komenda konsoli | Brak potwierdzonej potrzeby |

:::info Wymagany restart
Po zmianie `CollectionDropRate`, `CollectionObjectRespawnSpeedRate` lub `CollectionObjectHpRate` wymagany jest pełny restart serwera. Nie jest potrzebna żadna dodatkowa komenda w grze ani w konsoli dla tych ustawień.
:::

## Sprawdź nowe zachowanie zbierania

Po zakończeniu restartu dołącz do serwera i przetestuj kilka obiektów do zbierania, takich jak drzewa, kamienie czy złoża rudy.

### Co sprawdzić

- Czy gracze otrzymują więcej materiałów za jedno zebranie
- Czy zniszczone zasoby odradzają się szybciej niż wcześniej
- Czy obiekty do zbierania są łatwiejsze lub trudniejsze do zniszczenia, jeśli zmieniłeś `CollectionObjectHpRate`

Jeśli efekt jest zbyt silny lub zbyt słaby, wróć do pliku `PalWorldSettings.ini` i ponownie dostosuj mnożniki.

:::tip Dopracuj swój serwer
Jeśli chcesz bardziej zbalansowane ustawienia zbierania w Palworld, zwiększaj wartości stopniowo, np. z `1.000000` do `1.500000`, zanim przejdziesz do wyższych mnożników.
:::

## Podsumowanie konfiguracji

Poniższa tabela podsumowuje najważniejsze wartości dla tego ustawienia zbierania w Palworld.

| Ustawienie | Przykład | Efekt |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | Domyślne | Standardowa ilość zbieranych surowców |
| `CollectionDropRate=2.000000` | Zwiększone | Podwojona ilość zbieranych surowców |
| `CollectionObjectRespawnSpeedRate=1.000000` | Domyślne | Standardowa szybkość odradzania |
| `CollectionObjectRespawnSpeedRate=2.000000` | Zwiększone | Szybsze odradzanie zasobów |
| `CollectionObjectHpRate=1.000000` | Domyślne | Standardowa ilość HP obiektów do zbierania |
| `CollectionObjectHpRate=0.500000` | Zmniejszone | Obiekty do zbierania szybciej się niszczą |

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś współczynnik zbierania surowców na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂