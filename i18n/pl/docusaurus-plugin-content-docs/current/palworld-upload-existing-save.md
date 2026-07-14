---
id: palworld-upload-existing-save
title: "Palworld: Wgrywanie Istniejącego Save'a"
description: "Dowiedz się, jak wgrać istniejący save Palworld, przenieść świat serwera i poprawnie zaktualizować wymagany plik konfiguracyjny na swoim serwerze gier ZAP-Hosting. -> Sprawdź teraz"
sidebar_label: Palworld: Wgrywanie Istniejącego Save'a
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld przechowuje dane świata serwera dedykowanego w określonym folderze save i łączy ten folder przez konfigurację serwera. W tym poradniku nauczysz się, jak wgrać istniejący save na swój serwer Palworld w ZAP-Hosting oraz jak zaktualizować wymagane ustawienie, aby serwer ładował właściwy świat.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, upewnij się, że masz dostępny na swoim urządzeniu lokalnym istniejący folder save Palworld.

:::danger Nieobsługiwane Źródła Save'ów
Save'y z konsol Xbox i chmury PS5 nie mogą być bezpośrednio przeniesione na serwer dedykowany Palworld. Możesz migrować tylko save'y z instalacji na PC lub z innego istniejącego serwera dedykowanego.
:::

:::info Wymagany Dostęp
Potrzebujesz dostępu do panelu administracyjnego swojego serwera gier ZAP-Hosting, w tym do menedżera plików oraz sekcji `Configs`.
:::

Jeśli potrzebujesz pomocy z dostępem do plików serwera, skorzystaj z odpowiedniego poradnika zarządzania plikami w dokumentacji ZAP-Hosting, jeśli jest dostępny dla Twojego produktu.

## Zrozumienie Wymaganej Struktury Save'a

Zanim cokolwiek wgrasz, powinieneś potwierdzić, że Twój save ma poprawną strukturę.

Na serwerze dedykowanym Palworld aktywny save świata jest przechowywany w:

```text
Pal/Saved/SaveGames/0/[twoje_id_folderu_save]
```

Nazwa folderu `[twoje_id_folderu_save]` to zwykle długi ciąg liter i cyfr, na przykład:

```text
84B5E2264EC387DEDB43179D666031A1
```

Prawidłowy folder save zwykle zawiera pliki i foldery podobne do poniższych:

| Element | Przeznaczenie |
| --- | --- |
| `Level.sav` | Główne dane save'a świata |
| `LevelMeta.sav` | Metadane świata |
| `Players/` | Dane save'a graczy |
| `WorldOption.sav` | Przestarzały plik opcji świata, który może wymagać usunięcia |

:::caution Usuń Przestarzały Plik WorldOption.sav
Jeśli wgrywany folder save zawiera `WorldOption.sav`, usuń go przed uruchomieniem serwera. Ten plik jest znany z powodowania problemów na obecnych konfiguracjach serwerów dedykowanych i nie powinien być używany dla migrowanych save'ów, chyba że jest to wyraźnie wymagane przez nowszą oficjalną zmianę Palworld.
:::

## Znajdź Plik Konfiguracyjny w Panelu ZAP

Po wgraniu folderu save musisz wskazać serwerowi ten folder, edytując konfigurację Palworld.

W panelu administracyjnym serwera gier ZAP-Hosting otwórz sekcję `Configs` i znajdź:

```text
GameUserSettings.ini
```

W zależności od środowiska serwera, plik ten zwykle znajduje się w jednej z poniższych ścieżek:

| Możliwa ścieżka | Uwagi |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Typowa ścieżka na serwerach Palworld opartych na Linux |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Starsza lub alternatywna ścieżka na konfiguracjach Windows |

:::note Ścieżka LinuxServer vs WindowsServer
Serwery dedykowane Palworld są zwykle uruchamiane z konfiguracją `LinuxServer`. Jeśli nie widzisz `WindowsServer`, sprawdź `LinuxServer`. W panelu ZAP najprościej jest otworzyć `Configs` i wybrać `GameUserSettings.ini` bezpośrednio.
:::

## Wgraj Istniejący Save

Proces wgrywania zależy od źródła Twojego save'a, ale docelowa lokalizacja na serwerze ZAP jest zawsze ta sama.

### Najpierw Zatrzymaj Serwer

Przed podmianą domyślnego świata zatrzymaj swój serwer Palworld w panelu ZAP-Hosting.

:::caution Zapobiegaj Uszkodzeniu Save'a
Nie wgrywaj ani nie podmieniaj plików świata, gdy serwer jest uruchomiony. Zatrzymanie serwera najpierw pomaga uniknąć niekompletnych zapisów i uszkodzenia danych save.
:::

### Usuń Domyślny Folder Save

Otwórz menedżera plików i przejdź do:

```text
Pal/Saved/SaveGames/0/
```

W tym katalogu zwykle znajdziesz domyślny wygenerowany folder save. Usuń ten domyślny folder przed wgraniem własnego save'a.

### Wgraj Swój Istniejący Folder Save

Wgraj swój istniejący folder save do:

```text
Pal/Saved/SaveGames/0/
```

Po wgraniu struktura powinna wyglądać tak:

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [twoje_id_folderu_save]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

Jeśli istnieje `WorldOption.sav`, usuń go po wgraniu.

:::tip Skopiuj Nazwę Folderu Dokładnie
Będziesz potrzebować dokładnej nazwy wgranego folderu do następnego kroku. Skopiuj `[twoje_id_folderu_save]` dokładnie tak, jak jest pokazane w menedżerze plików, łącznie ze wszystkimi literami i cyframi.
:::

## Edytuj GameUserSettings.ini

Po zakończeniu wgrywania save'a musisz zaktualizować konfigurację serwera, aby Palworld ładował właściwy świat.

Otwórz `GameUserSettings.ini` w sekcji `Configs` i znajdź wpis `DedicatedServerName`.

Ustaw go na dokładną nazwę wgranego folderu save:

```ini
DedicatedServerName=[twoje_id_folderu_save]
```

Przykład:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### Wymagany Wpis Konfiguracyjny

Skorzystaj z poniższej tabeli jako odniesienia podczas edycji pliku:

| Plik konfiguracyjny | Klucz | Wymagana wartość |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | Dokładna nazwa wgranego folderu save |

### Co Robi To Ustawienie

`DedicatedServerName` mówi serwerowi dedykowanemu Palworld, który folder w `Pal/Saved/SaveGames/0/` ma być załadowany jako aktywny świat.

Jeśli ta wartość nie będzie dokładnie odpowiadać nazwie wgranego folderu, serwer może stworzyć nowy świat lub załadować się niepoprawnie.

:::danger Wymagana Dokładna Zgodność
Jeśli po starcie widzisz brak postępu na mapie, pusty świat lub nowo wygenerowany save, najczęstszą przyczyną jest to, że `DedicatedServerName` nie odpowiada dokładnie nazwie wgranego folderu.
:::

## Lokalizacje Save'ów w Zależności od Źródła

Jeśli nie jesteś pewien, skąd wziąć oryginalny save, skorzystaj z odpowiedniej ścieżki źródłowej poniżej.

### Z Innego Dostawcy Serwera Dedykowanego

U swojego poprzedniego dostawcy wykonaj kopię zapasową folderu save z:

```text
Pal/Saved/SaveGames/0/
```

Skopiuj cały folder świata z oryginalną nazwą, a następnie wgraj ten folder na swój serwer ZAP-Hosting zgodnie z powyższą instrukcją.

### Ze Save'a Steam Co-op

Dla lokalnych save'ów Steam na Windows otwórz następującą ścieżkę:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[twoje_steamid64]\[twoje_id_folderu_save]
```

Folder `[twoje_steamid64]` to Twój 64-bitowy Steam ID, a `[twoje_id_folderu_save]` to folder świata, który chcesz migrować.

:::caution Ograniczenie Postaci Hostującej
Podczas migracji lokalnego świata Steam co-op na serwer dedykowany oryginalna postać hosta nie jest automatycznie przenoszona tak samo jak dane podłączonych graczy. Może być potrzebne użycie dodatkowych narzędzi do konwersji save'a lub transferu postaci, jeśli chcesz zachować postać hosta.
:::

### Z PC Game Pass

Dla instalacji PC Game Pass lokalne dane save są zwykle przechowywane pod:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

Save'y Game Pass nie są przechowywane w tym samym formacie co save'y Steam lub serwera dedykowanego. W praktyce zwykle potrzebujesz narzędzia konwertującego, aby przekształcić save do formatu kompatybilnego ze Steam lub serwerem dedykowanym przed wgraniem.

:::info Wymagana Konwersja Game Pass
Bezpośrednie wgranie surowych danych save PC Game Pass zwykle nie wystarczy. Najpierw musisz przekonwertować save, a następnie wgrać przekonwertowany folder świata do `Pal/Saved/SaveGames/0/` i odpowiednio ustawić `DedicatedServerName`.
:::

## Uruchom Serwer

Gdy folder save zostanie wgrany i `GameUserSettings.ini` zaktualizowany, ponownie uruchom serwer z panelu ZAP-Hosting.

Zazwyczaj nie są potrzebne dodatkowe komendy konsolowe do tego procesu migracji.

Po starcie dołącz do serwera i sprawdź, czy:

- ładuje się właściwy świat
- budynki i postęp na mapie są widoczne
- dane graczy są dostępne zgodnie z oczekiwaniami

## Rozwiązywanie Problemów

Jeśli wgrany save nie ładuje się poprawnie, sprawdź poniższe punkty.

### Serwer Stworzył Nowy Świat

Zweryfikuj, czy wartość w `GameUserSettings.ini` dokładnie odpowiada nazwie wgranego folderu:

```ini
DedicatedServerName=[twoje_id_folderu_save]
```

Potwierdź też, że wgrany save znajduje się bezpośrednio w:

```text
Pal/Saved/SaveGames/0/[twoje_id_folderu_save]/
```

### Brak Postępu na Mapie lub Świecie

Zwykle oznacza to jedno z poniższych:

| Możliwa przyczyna | Rozwiązanie |
| --- | --- |
| Błędna wartość `DedicatedServerName` | Wpisz ponownie dokładną nazwę wgranego folderu |
| Folder save wgrany do złego katalogu | Przenieś go do `Pal/Saved/SaveGames/0/` |
| Niekompletne wgranie | Wgraj ponownie cały folder i sprawdź, czy wszystkie pliki są obecne |

### Problemy z WorldOption.sav

Jeśli Twój save zawiera `WorldOption.sav`, usuń go i uruchom serwer ponownie.

Ten plik jest powiązany ze starszym sposobem obsługi save'ów i może powodować konflikty z migrowanymi światami serwerów dedykowanych.

## Conclusion

Gratulacje, pomyślnie wgrałeś istniejący save Palworld na swój serwer ZAP-Hosting. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂