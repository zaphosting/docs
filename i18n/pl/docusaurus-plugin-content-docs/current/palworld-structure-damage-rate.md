---
id: palworld-structure-damage-rate
title: "Palworld: Wskaźnik uszkodzeń struktur"
description: "Dowiedz się, jak zmienić wskaźnik uszkodzeń i rozkładu struktur w Palworld, edytując plik konfiguracyjny serwera w sposób bezpieczny i poprawny. -> Dowiedz się więcej"
sidebar_label: Palworld: Wskaźnik uszkodzeń struktur
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld pozwala kontrolować, jak dużo uszkodzeń otrzymują struktury oraz jak szybko ulegają rozkładowi w czasie. W tym poradniku nauczysz się, jak ręcznie edytować odpowiedni plik konfiguracyjny w panelu administracyjnym serwera gier ZAP-Hosting i zastosować nowe ustawienia uszkodzeń struktur.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Przed rozpoczęciem upewnij się, że Twój serwer Palworld jest już zainstalowany i masz dostęp do jego panelu administracyjnego przez przeglądarkę.

:::info Wymagany dostęp
Potrzebujesz dostępu do panelu administracyjnego serwera gier ZAP-Hosting oraz do sekcji `Configs` na swoim serwerze Palworld.
:::

:::note Ręczna konfiguracja
Ta konfiguracja odbywa się poprzez ręczną edycję pliku konfiguracyjnego Palworld. W tym poradniku nie zmieniamy ustawień przez osobny przełącznik jednym kliknięciem.
:::

## Otwórz właściwy plik konfiguracyjny

Aby zmienić uszkodzenia i rozkład struktur, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer **Palworld**.
2. Przejdź do zakładki **Configs**.
3. Otwórz plik `PalWorldSettings.ini`.

Ten plik zawiera główne wartości konfiguracyjne rozgrywki na Twoim serwerze, w tym mnożniki dotyczące struktur.

## Edytuj ustawienia uszkodzeń struktur

Odpowiednie wartości znajdują się w wpisach ustawień serwera w pliku `PalWorldSettings.ini`.

### Klucze konfiguracyjne

Użyj poniższych ustawień, aby kontrolować zachowanie uszkodzeń struktur:

| Klucz konfiguracyjny | Opis | Wartość domyślna |
| --- | --- | --- |
| `BuildObjectDamageRate` | Kontroluje, ile uszkodzeń otrzymują struktury | `1.0` |
| `BuildObjectDeteriorationDamageRate` | Kontroluje, jak szybko struktury ulegają rozkładowi w czasie | `1.0` |

Wartość `1.0` to normalna domyślna wartość. Niższe wartości zmniejszają efekt, wyższe go zwiększają.

### Przykład konfiguracji

W zależności od zawartości Twojego pliku, te wartości zwykle są częścią listy opcji serwera w `PalWorldSettings.ini`.

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

Jeśli Twoja konfiguracja używa łączonego ciągu opcji, upewnij się, że zmieniasz tylko wartości, zachowując otaczającą składnię.

Na przykład:

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution Zachowaj istniejącą składnię
Plik `PalWorldSettings.ini` może zawierać wiele ustawień w jednej linii `OptionSettings=(...)`. Jeśli tak jest na Twoim serwerze, nie usuwaj przecinków, nawiasów ani innych istniejących wpisów podczas edycji pliku.
:::

## Wybierz odpowiednie wartości

Możesz dostosować mnożniki w zależności od tego, jak wytrzymałe mają być struktury budowane przez graczy.

### Mnożnik uszkodzeń struktur

`BuildObjectDamageRate` zmienia, ile bezpośrednich uszkodzeń otrzymuje struktura.

| Wartość | Efekt |
| --- | --- |
| `0.5` | Struktury otrzymują połowę uszkodzeń |
| `1.0` | Domyślne uszkodzenia struktur |
| `2.0` | Struktury otrzymują podwójne uszkodzenia |

### Mnożnik rozkładu struktur

`BuildObjectDeteriorationDamageRate` zmienia, jak szybko struktury ulegają rozkładowi w czasie.

| Wartość | Efekt |
| --- | --- |
| `0.1` | Bardzo wolny rozkład |
| `1.0` | Domyślna szybkość rozkładu |
| `2.0` | Szybszy rozkład |

:::tip Zalecane minimum rozkładu
Zaleca się utrzymywać `BuildObjectDeteriorationDamageRate` na poziomie `0.1` lub wyższym. Bardzo niski lub wyłączony rozkład może pozostawiać nieużywane struktury na dłużej, co może negatywnie wpływać na sprzątanie i wydajność serwera z czasem.
:::

## Zapisz plik i zrestartuj serwer

Po edycji wartości w `PalWorldSettings.ini` zapisz plik w sekcji `Configs`.

Następnie musisz zrestartować serwer Palworld, aby nowe ustawienia uszkodzeń struktur zostały załadowane.

### Wymagane działania po edycji

| Działanie | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Dodatkowe polecenie konsoli | Nie jest wymagane żadne potwierdzone polecenie |

:::info Wymagany restart
Zmiany w `BuildObjectDamageRate` i `BuildObjectDeteriorationDamageRate` nie są stosowane poprawnie, dopóki serwer nie zostanie zrestartowany.
:::

## Sprawdź zmiany

Gdy serwer będzie ponownie online, dołącz do swojego serwera Palworld i przetestuj nowe zachowanie.

Możesz zweryfikować zmiany, sprawdzając, czy:

- struktury otrzymują więcej lub mniej bezpośrednich uszkodzeń niż wcześniej
- opuszczone lub odsłonięte struktury rozkładają się zgodnie z oczekiwaną szybkością

Jeśli zmiany nie wydają się działać, ponownie otwórz `PalWorldSettings.ini` i upewnij się, że:

- nazwy ustawień są dokładnie zapisane jako `BuildObjectDamageRate` i `BuildObjectDeteriorationDamageRate`
- wartości znajdują się w odpowiedniej sekcji lub linii `OptionSettings`
- serwer został zrestartowany po zapisaniu zmian

## Conclusion

Gratulacje, pomyślnie zmieniłeś wskaźnik uszkodzeń i rozkładu struktur na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂