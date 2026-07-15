---
id: palworld-upload-existing-save
title: "Palworld: Wgrywanie Istniejącego Save'a"
description: "Dowiedz się, jak wgrać istniejący save Palworld, poprawnie przesłać pliki oraz skonfigurować serwer, aby załadował właściwy folder świata. -> Sprawdź teraz"
sidebar_label: "Wgrywanie Istniejącego Save'a"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld przechowuje dane świata serwera dedykowanego w określonym folderze save i wymaga odpowiedniego wpisu konfiguracyjnego, aby poprawnie go załadować. W tym poradniku nauczysz się, jak wgrać istniejący save na swój serwer Palworld w ZAP-Hosting oraz jak skonfigurować serwer, aby uruchamiał się z właściwymi danymi świata.

:::danger Nieobsługiwane Źródła Save'ów
Nie możesz bezpośrednio przenieść save'ów z konsoli Xbox lub chmury PS5 na dedykowany serwer Palworld. Metoda ta działa tylko dla save'ów z instalacji na PC lub z innego serwera dedykowanego.
:::



## Preparation

Przed rozpoczęciem upewnij się, że masz:

| Wymaganie | Szczegóły |
| --- | --- |
| Istniejący save Palworld | Folder save z instalacji na PC lub innego serwera dedykowanego |
| Dostęp do swojego serwera gier ZAP-Hosting | Dostęp do panelu głównego, w tym menedżera plików i sekcji `Configs` |
| Serwer zatrzymany | Serwer Palworld powinien być zatrzymany przed podmianą danych save |
| Nazwa folderu save | Dokładna nazwa folderu wgranego save'a, np. `[your_savefolder_id]` |

:::info Dostęp do pliku konfiguracyjnego
W ZAP-Hosting odpowiednie pliki konfiguracyjne Palworld znajdziesz w panelu administracyjnym serwera gier w sekcji `Configs`. Nie musisz edytować pliku bezpośrednio przez menedżera plików, chyba że chcesz ręcznie zweryfikować ścieżkę.
:::

## Zrozumienie Wymaganej Struktury Save'a

Zanim cokolwiek wgrasz, ważne jest, aby zrozumieć, który folder Palworld faktycznie ładuje.

Lokalizacja save'a serwera to:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

W tym folderze zwykle znajdziesz pliki i foldery podobne do poniższych:

```text
Level.sav
LevelMeta.sav
Players/
```

W niektórych starszych lub migrowanych save'ach może też występować:

```text
WorldOption.sav
```

:::caution Usuń Przestarzały Plik WorldOption.sav
Jeśli w wgranym folderze save znajduje się `WorldOption.sav`, usuń go przed uruchomieniem serwera. Ten plik jest znany z powodowania problemów w nowszych konfiguracjach serwera Palworld i nie powinien być używany przy migrowanych save'ach, chyba że jest to wyraźnie wymagane przez potwierdzoną aktualną konfigurację.
:::

## Znajdź Poprawny Plik Konfiguracyjny

Aby serwer załadował Twój wgrany świat, musisz edytować plik `GameUserSettings.ini`.

W panelu administracyjnym serwera gier ZAP-Hosting:

1. Otwórz swój serwer Palworld.
2. Przejdź do `Configs`.
3. Otwórz `GameUserSettings.ini`.

W zależności od środowiska serwera, ścieżka pliku to zazwyczaj jedna z poniższych:

| Możliwa ścieżka | Uwagi |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Typowa dla serwerów Palworld na Linuxie |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Może występować na serwerach Windows |

:::note Różnice w ścieżkach
Instalacje serwera Palworld mogą używać `LinuxServer` lub `WindowsServer` w ścieżce konfiguracyjnej w zależności od platformy dostawcy. Jeśli edytujesz plik przez `Configs`, masz już dostęp do właściwego pliku, więc wystarczy, że zmodyfikujesz `GameUserSettings.ini`.
:::

## Wgrywanie Save'a z Innego Serwera Dedykowanego

Jeśli Twój save pochodzi już od innego dostawcy hostingu, możesz go bezpośrednio przenieść.

### Zrób Kopię Zapasową Istniejącego Save'a

U poprzedniego dostawcy znajdź i pobierz istniejący folder save z lokalizacji:

```text
Pal/Saved/SaveGames/0/
```

Skopiuj cały folder o losowej nazwie alfanumerycznej, np.:

```text
[your_savefolder_id]
```

### Zatrzymaj Serwer ZAP-Hosting

Przed wgraniem nowego save'a zatrzymaj swój serwer Palworld w panelu głównym ZAP-Hosting.

:::caution Unikaj Konfliktów Save'ów
Nie podmieniaj plików save podczas działania serwera. Może to spowodować niepełne przesłanie, nadpisanie danych lub uszkodzenie save'a.
:::

### Podmień Domyślny Folder Save

Otwórz menedżera plików serwera gier i przejdź do:

```text
Pal/Saved/SaveGames/0/
```

Usuń domyślny folder save, który został utworzony automatycznie przez serwer, a następnie wgraj swój istniejący folder save w to samo miejsce.

Po wgraniu struktura powinna wyglądać tak:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Ustaw Poprawny Folder Save w GameUserSettings.ini

Teraz otwórz `GameUserSettings.ini` przez `Configs` i znajdź wpis `DedicatedServerName`.

Ustaw go na dokładną nazwę wgranego folderu save:

```ini
DedicatedServerName=[your_savefolder_id]
```

| Wpis konfiguracyjny | Wymagana wartość |
| --- | --- |
| `DedicatedServerName` | Dokładna nazwa folderu w `Pal/Saved/SaveGames/0/` |

:::tip Wymagana Dokładna Zgodność
`DedicatedServerName` musi dokładnie odpowiadać nazwie wgranego folderu, łącznie z literami i cyframi. Jeśli wartość się nie zgadza, serwer może uruchomić inny świat lub wydawać się, że ładuje się bez postępu na mapie.
:::

### Uruchom Serwer

Po zapisaniu konfiguracji ponownie uruchom serwer Palworld.

Zazwyczaj nie jest potrzebne żadne dodatkowe polecenie konsoli po wgraniu. Pełny restart serwera wystarczy, aby załadować nowy save.

## Wgrywanie Save'a ze Steam Co-op

Jeśli wcześniej hostowałeś świat lokalnie przez Steam co-op, możesz też wgrać ten save na swój serwer dedykowany.

### Znajdź Lokalny Save Steam

Na swoim Windowsie naciśnij `Windows` + `R` i otwórz:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

W tym miejscu otwórz folder nazwany swoim SteamID64. Następnie znajdź folder świata, który chcesz wgrać:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### Wgraj Save na Serwer

Gdy już zidentyfikujesz właściwy folder save:

1. Zatrzymaj serwer Palworld.
2. Otwórz menedżera plików.
3. Przejdź do `Pal/Saved/SaveGames/0/`.
4. Usuń domyślny folder save.
5. Wgraj swój istniejący folder save.
6. Otwórz `GameUserSettings.ini` w `Configs`.
7. Ustaw:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Zapisz plik i uruchom serwer ponownie.

:::caution Ograniczenie Postaci Hostującej
Podczas migracji lokalnego świata Steam co-op postać hostująca nie jest automatycznie przenoszona tak samo jak dane podłączonych graczy. W praktyce oznacza to, że oryginalny host może potrzebować dodatkowych kroków konwersji save'a lub transferu postaci za pomocą narzędzi zewnętrznych, jeśli wymagana jest ciągłość postaci.
:::

## Wgrywanie Save'a z PC Game Pass

Save'y PC Game Pass używają innego formatu i nie są bezpośrednio gotowe do serwera dedykowanego Palworld.

### Znajdź Save Game Pass

Lokalne dane save Game Pass zwykle znajdują się w:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### Najpierw Konwertuj Save

Aby użyć save'a PC Game Pass na serwerze dedykowanym, musisz go przekonwertować do formatu kompatybilnego ze Steam za pomocą narzędzia zewnętrznego.

Popularną opcją jest [Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools).

:::danger Zastrzeżenie dotyczące narzędzi zewnętrznych
Narzędzia do konwersji save'ów tworzone przez osoby trzecie nie są rozwijane ani wspierane przez ZAP-Hosting. Ich funkcjonalność może się zmieniać, a kompatybilność nie jest gwarantowana. Zawsze wykonaj kopię zapasową oryginalnego save'a przed użyciem jakiegokolwiek narzędzia konwertującego.
:::

Po konwersji wyeksportowany save zwykle trafia do folderu takiego jak:

```text
XGP_converted_saves
```

### Wgraj Przekonwertowany Save

Po konwersji save'a:

1. Zatrzymaj serwer.
2. Otwórz menedżera plików.
3. Przejdź do `Pal/Saved/SaveGames/0/`.
4. Usuń domyślny folder save.
5. Wgraj przekonwertowany folder save.
6. Otwórz `GameUserSettings.ini` w `Configs`.
7. Ustaw właściwą nazwę folderu:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Zapisz plik i uruchom serwer.

## Wymagane Zmiany Konfiguracji

Najważniejszym ręcznym krokiem w tym procesie jest poprawna edycja `GameUserSettings.ini`.

### Przegląd Wpisów Konfiguracyjnych

| Plik | Lokalizacja w panelu ZAP | Wpis do zmiany | Przykładowa wartość |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### Przykład Konfiguracji

Jeśli Twój wgrany folder save ma nazwę `84B5E2264EC387DEDB43179D666031A1`, wpis powinien wyglądać tak:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

Nie dodawaj dodatkowych cudzysłowów, chyba że już występują w składni pliku konfiguracyjnego używanego przez Twój szablon.

## Weryfikacja Wgrania

Po uruchomieniu serwera dołącz do niego i sprawdź, czy dane świata załadowały się poprawnie.

Powinieneś zweryfikować następujące:

| Sprawdzenie | Oczekiwany rezultat |
| --- | --- |
| Świat się ładuje | Istniejąca mapa i struktury są obecne |
| Dane graczy | Przeniesione dane graczy są dostępne tam, gdzie to możliwe |
| Zgodność folderu save | `DedicatedServerName` dokładnie odpowiada wgranemu folderowi |
| Usunięcie przestarzałych plików | `WorldOption.sav` nie występuje, jeśli powodował problemy |

## Rozwiązywanie Problemów

Jeśli wgranie nie działa zgodnie z oczekiwaniami, sprawdź te najczęstsze przyczyny.

### Serwer Uruchamia Nowy Świat

Jeśli serwer tworzy nowy świat zamiast załadować wgrany save, najczęstszą przyczyną jest błędna wartość `DedicatedServerName`.

Upewnij się, że:

- wgrany folder znajduje się w `Pal/Saved/SaveGames/0/`
- nazwa folderu jest skopiowana dokładnie
- `DedicatedServerName=[your_savefolder_id]` dokładnie odpowiada tej nazwie

### Brak Danych Mapy

Jeśli serwer się uruchamia, ale postęp świata lub dane mapy wydają się brakować, ponownie sprawdź zgodność nazwy folderu.

Ten problem zwykle wynika z niezgodności między:

- nazwą wgranego folderu save
- wartością `DedicatedServerName` w `GameUserSettings.ini`

### Save Wygląda Poprawnie, ale Nie Ładuje Się

Jeśli struktura folderów wygląda dobrze, ale save nadal się nie ładuje:

- potwierdź, że save pochodzi ze wspieranego źródła
- usuń `WorldOption.sav`, jeśli istnieje
- upewnij się, że serwer był całkowicie zatrzymany przed podmianą plików
- zrestartuj serwer po zapisaniu zmian w konfiguracji

:::tip Najlepsze Praktyki Przy Wgrywaniu Plików
Jeśli wgrywasz duży save, poczekaj aż transfer całkowicie się zakończy, zanim uruchomisz serwer. Zbyt wczesne uruchomienie może spowodować niekompletny save i uniemożliwić poprawne załadowanie świata.
:::

## Conclusion

Gratulacje, pomyślnie wgrałeś istniejący save Palworld na swój serwer ZAP-Hosting. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂