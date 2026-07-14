---
id: palworld-enable-global-palbox
title: "Palworld: Włącz Globalny Palbox"
description: "Dowiedz się, jak włączyć globalne ustawienie palboxa w Palworld na swoim serwerze dedykowanym, aby umożliwić globalny import i eksport palów. -> Sprawdź teraz"
sidebar_label: Palworld: Włącz Globalny Palbox
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

*Globalny Palbox* w Palworld pozwala graczom na transfer Palów między serwerami za pomocą globalnego, chmurowego systemu przechowywania Palów. W tym poradniku nauczysz się, jak włączyć import i eksport Globalnego Palboxa na swoim serwerze Palworld w ZAP-Hosting, edytując odpowiedni plik konfiguracyjny ręcznie.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Przed rozpoczęciem upewnij się, że:

- masz dostęp do swojego serwera gier Palworld w panelu głównym ZAP-Hosting
- serwer jest zatrzymany lub możesz go zrestartować po wprowadzeniu zmian
- masz dostęp do sekcji `Configs` w panelu administracyjnym serwera gier

:::info Dostęp do pliku konfiguracyjnego
W serwerach Palworld ZAP-Hosting odpowiednie ustawienia można edytować bezpośrednio w panelu administracyjnym serwera gier w sekcji `Configs`. Nie potrzebujesz zewnętrznego dostępu do plików, jeśli edytor konfiguracji jest tam dostępny.
:::

## Otwórz plik konfiguracyjny Palworld

Aby włączyć funkcję Globalnego Palboxa, musisz edytować plik `PalWorldSettings.ini`.

### Znajdź plik konfiguracyjny w panelu ZAP

1. Zaloguj się na [stronę ZAP-Hosting](https://zap-hosting.com).
2. Otwórz panel administracyjny swojego serwera gier Palworld.
3. Przejdź do sekcji `Configs`.
4. Otwórz plik o nazwie `PalWorldSettings.ini`.

Ten plik zawiera główne ustawienia serwera używane przez Palworld, w tym opcje Globalnego Palboxa.

:::note Konfiguracja ręczna wymagana
Ustawienie Globalnego Palboxa konfiguruje się ręcznie przez plik konfiguracyjny serwera. Jeśli nie widzisz osobnego przełącznika tej funkcji w panelu, edycja `PalWorldSettings.ini` jest właściwym sposobem.
:::

## Włącz import i eksport Globalnego Palboxa

Po otwarciu `PalWorldSettings.ini` musisz znaleźć listę opcji serwera i dostosować wpisy dotyczące Globalnego Palboxa.

### Wymagane klucze konfiguracyjne

Poniższe ustawienia kontrolują działanie Globalnego Palboxa:

| Klucz konfiguracyjny | Wartość | Funkcja |
| --- | --- | --- |
| `bAllowGlobalPalboxImport` | `True` lub `False` | Pozwala graczom importować Paly z Globalnego Palboxa |
| `bAllowGlobalPalboxExport` | `True` lub `False` | Pozwala graczom eksportować Paly do Globalnego Palboxa |

Według aktualnych materiałów referencyjnych, `bAllowGlobalPalboxImport` jest domyślnie wyłączone (`False`), a `bAllowGlobalPalboxExport` domyślnie włączone (`True`). Jeśli Twój plik już zawiera te wartości, wystarczy je odpowiednio dostosować.

### Ustaw wartości

Aby w pełni włączyć transfery Globalnego Palboxa między serwerami, ustaw obie wartości na `True`.

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Jeśli opcje te już istnieją w pliku, zamień istniejące wartości. Jeśli ich nie ma, dodaj je do sekcji ustawień serwera w `PalWorldSettings.ini`.

:::caution Zachowaj istniejącą składnię
Pliki konfiguracyjne Palworld są wrażliwe na formatowanie. Zmieniaj tylko wymagane wartości i unikaj usuwania przecinków, nawiasów lub innych istniejących wpisów, jeśli te opcje są częścią większej linii ustawień w Twoim pliku.
:::

## Zapisz zmiany

Po edycji pliku:

1. Zapisz zmiany w edytorze `PalWorldSettings.ini`.
2. Upewnij się, że obie wartości Globalnego Palboxa są obecne i ustawione poprawnie.

Jeśli Twój panel serwera oferuje tylko przycisk zapisu, użyj go najpierw, zanim zrestartujesz serwer w kolejnym kroku.

## Zrestartuj serwer

Po zmianie ustawień Globalnego Palboxa musisz zrestartować serwer Palworld, aby nowa konfiguracja została załadowana.

### Zastosuj nowe ustawienia

Zrestartuj serwer z panelu administracyjnego serwera gier po zapisaniu pliku.

| Akcja | Wymagane |
| --- | --- |
| Zapisz `PalWorldSettings.ini` | Tak |
| Zrestartuj serwer | Tak |
| Wykonaj dodatkowe polecenia konsoli | Nie |

Po edycji pliku konfiguracyjnego nie są potrzebne żadne dodatkowe polecenia. Wystarczy normalny restart serwera, aby zastosować nowe ustawienie Globalnego Palboxa.

:::tip Sprawdź funkcję w grze
Po restarcie dołącz do serwera i przetestuj, czy gracze mogą importować i eksportować Paly przez Globalny Palbox. To najprostszy sposób, by potwierdzić, że ustawienie zostało poprawnie zastosowane.
:::

## Rozwiązywanie problemów

Jeśli Globalny Palbox nie działa po restarcie, sprawdź następujące kwestie.

### Potwierdź poprawne zapisanie wartości

Otwórz ponownie `PalWorldSettings.ini` i zweryfikuj, czy te wartości nadal są obecne:

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Jeśli wartości się cofnęły, plik mógł nie zostać poprawnie zapisany.

### Sprawdź problemy z formatowaniem

Jeśli dodałeś wartości do istniejącego bloku ustawień, upewnij się, że składnia wokół nich jest nadal poprawna. Nieprawidłowe formatowanie w `PalWorldSettings.ini` może spowodować, że Palworld zignoruje ustawienia lub nie załaduje ich poprawnie.

### Zrestartuj serwer ponownie

Jeśli zapisałeś plik podczas działania serwera, wykonaj kolejny pełny restart, aby mieć pewność, że nowa konfiguracja została zastosowana.

:::danger Dostępność funkcji zależy od wersji gry
Globalny Palbox to funkcja gry dostarczana przez sam Palworld. Jeśli ustawienie nie działa mimo poprawnej konfiguracji, funkcja może zależeć od aktualnej wersji serwera Palworld lub tymczasowych ograniczeń po stronie gry. W takim wypadku sprawdź, czy Twój serwer jest w pełni zaktualizowany.
:::

## Podsumowanie

Gratulacje, pomyślnie włączyłeś import i eksport Globalnego Palboxa na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!