---
id: palworld-hunger-and-stamina
title: "Palworld: Głód i Wytrzymałość"
description: "Dowiedz się, jak dostosować tempo spadku głodu i wytrzymałości dla graczy i Palów, edytując konfigurację serwera. -> Sprawdź teraz"
sidebar_label: Palworld: Głód i Wytrzymałość
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld pozwala kontrolować, jak szybko spada głód i wytrzymałość zarówno graczy, jak i Palów. W tym poradniku nauczysz się, jak edytować odpowiedni plik konfiguracyjny serwera w panelu ZAP-Hosting i bezpiecznie zastosować niestandardowe tempo spadku.

## Preparation

Przed rozpoczęciem upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu administracyjnym ZAP-Hosting.

:::info Wymagany dostęp do konfiguracji
Potrzebujesz dostępu do panelu administracyjnego serwera oraz sekcji `Configs`, aby ręcznie edytować pliki konfiguracyjne Palworld.
:::

## Otwórz plik konfiguracyjny Palworld

Aby zmienić zachowanie głodu i wytrzymałości, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld.
2. Przejdź do sekcji `Configs`.
3. Otwórz plik `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Plik z mnożnikami rozgrywki
Ustawienia głodu i wytrzymałości znajdują się w `PalWorldSettings.ini`. Te wartości są zwykle częścią głównego ciągu opcji używanego przez serwer dedykowany.
:::

## Zmień wartości głodu i wytrzymałości

W pliku `PalWorldSettings.ini` znajdź sekcję ustawień rozgrywki zawierającą wartości opcji serwera. Musisz dodać lub dostosować następujące klucze konfiguracyjne.

:::caution Ważna pisownia w Palworld
Palworld używa pisowni `Decreace` w tych wpisach konfiguracyjnych. Jest to celowe w formacie konfiguracji serwera, więc musisz używać kluczy dokładnie tak, jak poniżej.
:::

### Dostępne klucze konfiguracyjne

| Klucz konfiguracyjny | Opis | Wartość domyślna |
| --- | --- | --- |
| `PlayerStomachDecreaceRate` | Kontroluje tempo spadku głodu gracza | `1.0` |
| `PlayerStaminaDecreaceRate` | Kontroluje tempo spadku wytrzymałości gracza | `1.0` |
| `PalStomachDecreaceRate` | Kontroluje tempo spadku głodu Pala | `1.0` |
| `PalStaminaDecreaceRate` | Kontroluje tempo spadku wytrzymałości Pala | `1.0` |

### Jak działają wartości

Niższe wartości zmniejszają szybkość zużycia głodu lub wytrzymałości.

| Wartość | Efekt |
| --- | --- |
| `1.0` | Domyślne tempo spadku |
| `0.5` | Połowa domyślnego tempa spadku |
| `0.0` | Całkowite wyłączenie spadku |

:::tip Wybór zbalansowanych ustawień
Jeśli chcesz bardziej luźne przeżycie w trybie survival, ale nie chcesz całkowicie usuwać mechaniki, `0.5` to praktyczny punkt startowy dla głodu i wytrzymałości.
:::

## Przykładowa konfiguracja

Dodaj lub edytuj poniższe wartości w `PalWorldSettings.ini` w zależności od pożądanego doświadczenia rozgrywki:

```ini
PlayerStomachDecreaceRate=0.5
PlayerStaminaDecreaceRate=0.5
PalStomachDecreaceRate=0.5
PalStaminaDecreaceRate=0.5
```

Ten przykład zmniejsza tempo spadku głodu i wytrzymałości do połowy domyślnej wartości zarówno dla graczy, jak i Palów.

Jeśli chcesz całkowicie wyłączyć głód i wytrzymałość, użyj:

```ini
PlayerStomachDecreaceRate=0.0
PlayerStaminaDecreaceRate=0.0
PalStomachDecreaceRate=0.0
PalStaminaDecreaceRate=0.0
```

:::note Umiejscowienie ustawień
W zależności od struktury twojego pliku `PalWorldSettings.ini`, te wartości mogą wymagać umieszczenia wewnątrz istniejącej listy opcji, a nie jako osobne linie. Jeśli plik zawiera już długi wpis `OptionSettings`, upewnij się, że zachowujesz istniejący format i zmieniasz lub dodajesz tylko odpowiednie klucze.
:::

## Zapisz i zrestartuj serwer

Po edycji pliku:

1. Zapisz zmiany w `PalWorldSettings.ini`.
2. Zrestartuj swój serwer Palworld z panelu administracyjnego ZAP-Hosting.

Restart jest wymagany, aby nowe ustawienia głodu i wytrzymałości zaczęły działać.

:::caution Wymagany restart
Jeśli nie zrestartujesz serwera, zaktualizowane wartości konfiguracji nie zostaną załadowane przez serwer gier.
:::

## Sprawdź zmiany w grze

Gdy serwer będzie ponownie online, dołącz do niego i przetestuj nowe ustawienia.

### Co sprawdzić

- Czy głód gracza spada wolniej
- Czy wytrzymałość gracza utrzymuje się dłużej podczas ruchu i akcji
- Czy głód Pala zmniejsza się zgodnie z oczekiwaniami
- Czy zużycie wytrzymałości Pala odpowiada skonfigurowanym wartościom

Jeśli wartości nie działają, ponownie otwórz `PalWorldSettings.ini` i sprawdź, czy:

- klucze konfiguracyjne są napisane dokładnie tak, jak pokazano
- wartości to poprawne liczby dziesiętne, np. `1.0`, `0.5` lub `0.0`
- ustawienia zostały poprawnie zapisane
- serwer został w pełni zrestartowany po edycji

## Conclusion

Gratulacje, pomyślnie zmieniłeś tempo spadku głodu i wytrzymałości na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂