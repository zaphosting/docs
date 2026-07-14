---
id: palworld-supply-drop-settings
title: "Palworld: Ustawienia Dostaw"
description: "Dowiedz się, jak zmienić częstotliwość dostaw w Palworld na swoim serwerze gier Palworld, edytując ręcznie ustawienie SupplyDropSpan. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: Ustawienia Dostaw
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld zawiera dostawy pojawiające się w określonych odstępach czasu, które mogą dostarczyć przydatne zasoby podczas rozgrywki. W tym poradniku nauczysz się, jak ręcznie zmienić częstotliwość dostaw na swoim serwerze gier Palworld w ZAP-Hosting, edytując odpowiedni plik konfiguracyjny.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu administracyjnym ZAP-Hosting oraz uprawnienia do edycji plików konfiguracyjnych serwera.

:::info Wymagana ręczna konfiguracja
Ta konfiguracja jest wykonywana ręcznie przez panel administracyjny w sekcji **Configs**. Po zmianie ustawienia musisz zrestartować serwer, aby Palworld załadował zaktualizowaną konfigurację.
:::

## Znajdź właściwy plik konfiguracyjny

Aby zmienić odstęp między dostawami, musisz edytować plik `PalWorldSettings.ini`.

W panelu administracyjnym ZAP-Hosting:

1. Otwórz panel administracyjny swojego serwera gier Palworld.
2. Przejdź do sekcji **Configs**.
3. Otwórz plik `PalWorldSettings.ini`.

Ten plik zawiera główne wartości konfiguracyjne rozgrywki dla twojego serwera Palworld, w tym ustawienie timera dostaw.

## Edytuj ustawienie dostaw

W pliku `PalWorldSettings.ini` znajdź sekcję `OptionSettings` i odszukaj wpis `SupplyDropSpan`.

Odpowiedni klucz konfiguracyjny wygląda następująco:

| Ustawienie | Opis | Przykład |
| --- | --- | --- |
| `SupplyDropSpan` | Definiuje odstęp między dostawami w minutach | `180` |

Jeśli wpis już istnieje, zmień jego wartość na preferowany przez siebie odstęp.

### Przykładowe wartości

Możesz użyć poniższych wartości jako odniesienia:

| Wartość | Efekt |
| --- | --- |
| `30` | Bardzo częste dostawy |
| `60` | Dostawy co 1 godzinę |
| `180` | Domyślne ustawienie, co 3 godziny |
| `360` | Dostawy co 6 godzin |

### Przykładowa konfiguracja

W zależności od zawartości twojego pliku, ustawienie pojawi się jako część większej linii `OptionSettings`. Na przykład:

```ini
OptionSettings=(SupplyDropSpan=180)
```

Jeśli plik zawiera już wiele ustawień w tym samym bloku `OptionSettings=(...)`, zmień tylko wartość `SupplyDropSpan`, pozostawiając pozostałe wpisy bez zmian.

Na przykład:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution Zachowaj istniejące ustawienia
Nie usuwaj innych wartości z bloku `OptionSettings` podczas edycji `SupplyDropSpan`. Jeśli przypadkowo usuniesz przecinki, nawiasy lub inne wpisy, konfiguracja Palworld może przestać się poprawnie ładować.
:::

## Zapisz i zastosuj zmiany

Po zaktualizowaniu wartości `SupplyDropSpan`:

1. Zapisz zmiany w pliku `PalWorldSettings.ini`.
2. Zrestartuj swój serwer Palworld z panelu administracyjnego ZAP-Hosting.

Restart jest konieczny, ponieważ Palworld nie stosuje tej zmiany na żywo podczas działania serwera.

:::note Nie jest wymagane dodatkowe polecenie
Zazwyczaj nie jest potrzebne żadne dodatkowe polecenie w grze ani w konsoli. Restart serwera to niezbędny krok, aby zastosować nowy odstęp między dostawami.
:::

## Sprawdź nowy odstęp między dostawami

Po restarcie serwer będzie korzystał z nowej wartości `SupplyDropSpan`. Możesz zweryfikować zmianę, obserwując czas między pojawianiem się dostaw podczas rozgrywki.

Jeśli zmiana nie zostanie zastosowana, sprawdź następujące kwestie:

| Sprawdzenie | Co zweryfikować |
| --- | --- |
| Poprawny plik | Edytowałeś plik `PalWorldSettings.ini` |
| Poprawna lokalizacja | Plik został otwarty przez sekcję **Configs** w panelu administracyjnym |
| Poprawna składnia | `SupplyDropSpan` jest poprawnie zapisane i znajduje się w bloku `OptionSettings` |
| Restart serwera | Serwer został w pełni zrestartowany po zapisaniu zmian |

:::tip Wybierz zrównoważoną wartość
Bardzo niskie wartości mogą powodować, że dostawy pojawią się znacznie częściej niż zamierzono w normalnej rozgrywce Palworld. Jeśli chcesz częstsze wydarzenia, ale bez przesady, `60` to zwykle rozsądny punkt startowy.
:::

## Podsumowanie

Gratulacje, pomyślnie zmieniłeś częstotliwość dostaw na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!