---
id: palworld-building-limits
title: "Palworld: Limity Budowy"
description: "Dowiedz się, jak zmienić limity budowy w Palworld, zasady budowania baz oraz ograniczenia obszarów, edytując ręcznie konfigurację serwera. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: Limity Budowy
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld pozwala kontrolować różne limity i ograniczenia budowy poprzez konfigurację serwera. W tym poradniku nauczysz się, jak ręcznie edytować odpowiedni plik konfiguracyjny w panelu ZAP-Hosting, zmieniać wartości dotyczące budowy i poprawnie zastosować zmiany.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, upewnij się, że:

- masz dostęp do swojego serwera gier Palworld w panelu administracyjnym ZAP-Hosting
- serwer jest aktualnie wyłączony lub jesteś gotowy na jego ponowne uruchomienie po wprowadzeniu zmian
- wiesz, że ten poradnik dotyczy ogólnych limitów budowy i ograniczeń obszarów, a nie limitów baz przypisanych do gildii

:::info Wymagana ręczna konfiguracja
Te ustawienia muszą być zmieniane ręcznie w pliku konfiguracyjnym. Odpowiedni plik znajdziesz w panelu administracyjnym serwera gier ZAP-Hosting w sekcji `Configs`.
:::

:::note Limity baz gildii
Jeśli chcesz zmienić liczbę baz na gildie zamiast ogólnych limitów budowy opisanych tutaj, powinieneś skorzystać z osobnego poradnika dotyczącego limitów baz gildii, jeśli jest dostępny w ZAP-Docs.
:::

## Otwórz plik konfiguracyjny

Aby zmienić limity budowy, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld.
2. Przejdź do `Configs`.
3. Otwórz plik `PalWorldSettings.ini`.

Ten plik zawiera główne ustawienia świata i rozgrywki dla twojego serwera Palworld, w tym kilka wpisów konfiguracyjnych związanych z budową.

## Edytuj ustawienia limitów budowy

Odpowiednie wartości znajdują się w sekcji `OptionSettings` w pliku `PalWorldSettings.ini`.

### Istotne klucze konfiguracyjne

Użyj poniższych ustawień, aby kontrolować limity budowy i ograniczenia obszarów:

| Klucz konfiguracyjny | Opis | Przykładowa wartość |
| --- | --- | --- |
| `MaxBuildingLimitNum` | Ustawia maksymalną liczbę budynków na gracza. `0` wyłącza limit. | `0` |
| `BaseCampMaxNum` | Ustawia maksymalną liczbę baz na całym serwerze. | `128` |
| `bBuildAreaLimit` | Kontroluje, czy ograniczenia budowy w pobliżu określonych struktur są włączone. | `False` |

### Przykład konfiguracji

W zależności od zawartości twojego pliku, wartości te zwykle znajdują się w linii `OptionSettings=(...)`.

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

Jeśli twój plik zawiera już dłuższą linię `OptionSettings`, nie usuwaj innych istniejących wartości. Wystarczy zmienić lub dodać odpowiednie wpisy w tym samym bloku ustawień.

### Co oznacza każda wartość

| Ustawienie | Efekt |
| --- | --- |
| `MaxBuildingLimitNum=0` | Usuwa limit budowy na gracza |
| `MaxBuildingLimitNum=[twoja_liczba]` | Ogranicza każdego gracza do określonej liczby budynków |
| `BaseCampMaxNum=[twoja_liczba]` | Ustawia całkowitą liczbę baz dozwolonych na serwerze |
| `bBuildAreaLimit=True` | Blokuje budowę w pobliżu chronionych struktur, np. punktów szybkiej podróży |
| `bBuildAreaLimit=False` | Wyłącza to ograniczenie obszaru |

:::caution Zachowaj poprawną składnię
Plik `PalWorldSettings.ini` jest wrażliwy na formatowanie. Upewnij się, że zmieniasz tylko potrzebne wartości i zachowujesz istniejące przecinki, nawiasy oraz strukturę `OptionSettings=(...)`.
:::

## Zapisz zmiany

Po edycji wartości:

1. Zapisz plik w sekcji `Configs`.
2. Sprawdź jeszcze raz linię pod kątem błędów formatowania.

Jeśli składnia jest niepoprawna, serwer może zignorować zmienione ustawienia lub nie zastosować ich prawidłowo.

### Przykładowe niestandardowe wartości

Przykład ograniczający każdego gracza do `5000` budynków, pozwalający na maksymalnie `20` baz na serwerze i włączający ograniczenia obszarów:

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

Przykład usuwający limit budowy na gracza i wyłączający ograniczenia obszarów:

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## Uruchom ponownie serwer

Po zapisaniu konfiguracji musisz zrestartować swój serwer Palworld, aby nowe ustawienia zostały załadowane.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. zatrzymaj serwer, jeśli nadal działa
2. uruchom serwer ponownie

Pełny restart jest wymagany, aby zmiany w `PalWorldSettings.ini` zaczęły działać.

:::tip Pewne zastosowanie zmian
Jeśli wprowadzasz kilka zmian w konfiguracji naraz, warto najpierw zapisać wszystkie edycje, a potem wykonać jeden restart. To pomaga uniknąć niepotrzebnych przestojów.
:::

## Sprawdź nowe limity

Gdy serwer będzie ponownie online, dołącz do niego i przetestuj nowe zachowanie budowy.

Powinieneś zweryfikować:

- czy gracze mogą postawić więcej lub mniej budynków niż wcześniej
- czy całkowita liczba baz odpowiada twojej konfiguracji
- czy budowa w pobliżu chronionych struktur jest dozwolona lub zablokowana zgodnie z `bBuildAreaLimit`

Jeśli zmiany nie są widoczne, otwórz ponownie `PalWorldSettings.ini` i sprawdź, czy:

- wartości zostały poprawnie zapisane
- klucze znajdują się w bloku `OptionSettings`
- serwer został w pełni zrestartowany po edycji

## Referencje konfiguracji

| Plik | Lokalizacja w ZAP-Hosting | Wymagana akcja po edycji |
| --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` w panelu administracyjnym serwera gier | Restart serwera |

| Ustawienie | Zalecane użycie |
| --- | --- |
| `MaxBuildingLimitNum` | Kontrola limitów budowy na gracza |
| `BaseCampMaxNum` | Kontrola całkowitej liczby baz na serwerze |
| `bBuildAreaLimit` | Pozwala na włączanie lub blokowanie budowy przy chronionych strukturach mapy |

## Conclusion

Gratulacje, pomyślnie zmieniłeś limity budowy na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂