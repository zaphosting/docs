---
id: windrose-manage-worlds
title: "Windrose: Zarządzanie Światami"
description: "Dowiedz się, jak zarządzać wieloma światami w Windrose, przełączać zapisy światów i konfigurować ustawienia świata na serwerze dedykowanym z poprawną strukturą świata. -> Dowiedz się więcej teraz"
sidebar_label: Zarządzanie Światami
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Windrose obsługuje wiele światów na jednym serwerze dedykowanym, z każdym światem korzystającym z własnych danych zapisu i konfiguracji `WorldDescription.json`. W tym poradniku nauczysz się, jak tworzyć nowe światy, przełączać się między istniejącymi, tworzyć ich kopie zapasowe oraz bezpiecznie je usuwać.

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Windrose przez panel główny ZAP-Hosting oraz że serwer jest wyłączony przed wprowadzaniem zmian w zapisach lub konfiguracji.

:::info Wymagany dostęp
Potrzebujesz dostępu do zarządzania serwerem gier ZAP-Hosting, w tym do **Menedżera plików**, **Konfiguracji** oraz **Kopii zapasowych**, aby bezpiecznie zarządzać światami Windrose.
:::

:::caution Najpierw zatrzymaj serwer
Zawsze zatrzymuj serwer przed edycją `ServerDescription.json`, modyfikacją `WorldDescription.json`, tworzeniem folderów światów lub usuwaniem danych zapisu. Zapobiega to uszkodzeniom i niekompletnym zapisom świata.
:::

## Zrozumienie struktury świata Windrose

Windrose przechowuje wszystkie dane świata w katalogu profilu zapisu. Pierwszy świat jest tworzony automatycznie przy pierwszym uruchomieniu serwera.

Struktura wygląda następująco:

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

W praktyce foldery światów znajdują się pod ścieżką:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[twoja_wersja_gry]/Worlds/
```

Każdy folder świata nosi nazwę unikalnego `IslandId`. Serwer używa tego ID wewnętrznie, aby określić, który świat ma zostać załadowany.

| Plik lub folder | Przeznaczenie |
| --- | --- |
| `ServerDescription.json` | Definiuje aktywną konfigurację serwera, w tym aktualnie załadowany świat |
| `RocksDB/[twoja_wersja_gry]/Worlds/` | Przechowuje wszystkie dostępne foldery zapisów światów |
| `[twoje_id_świata]/WorldDescription.json` | Przechowuje konfigurację konkretnego świata |
| `WorldIslandId` | Wartość w `ServerDescription.json` wskazująca serwerowi, który świat ma załadować |

:::danger Nie zmieniaj nazw folderów światów
Nigdy nie zmieniaj ręcznie nazwy folderu świata. Windrose używa nazwy folderu jako wewnętrznego `IslandId` w bazie RocksDB. Zmiana nazwy może uszkodzić świat lub sprawić, że stanie się on niedostępny.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Znajdź aktywny świat

Przed przełączaniem lub tworzeniem światów warto zidentyfikować, który świat jest aktualnie aktywny.

### Sprawdź konfigurację serwera

Otwórz sekcję **Konfiguracje** w panelu zarządzania serwerem gier i znajdź plik `ServerDescription.json`. Jeśli plik nie jest tam widoczny, użyj **Menedżera plików** i otwórz `ServerDescription.json` z katalogu głównego.

Znajdź pole:

```json
"WorldIslandId": "[twoje_id_świata]"
```

Ta wartość definiuje świat, który serwer załaduje podczas startu.

### Sprawdź ID świata

Aby zidentyfikować konkretny zapisany świat, otwórz plik `WorldDescription.json` w folderze danego świata i znajdź wartość `IslandId`.

Przykład:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "Przykladowe_ID_Swiata",
    "WorldName": "Mój Świat",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

`IslandId` w tym pliku musi dokładnie odpowiadać nazwie folderu.

## Przełączanie między światami

Jeśli masz już kilka światów zapisanych na serwerze, możesz przełączać się między nimi, zmieniając aktywne `WorldIslandId`.

### Zaktualizuj docelowy świat

Najpierw zatrzymaj serwer przez panel główny ZAP-Hosting.

Następnie otwórz `ServerDescription.json` w sekcji **Konfiguracje** lub przez **Menedżera plików** w katalogu głównym plików serwera.

Znajdź pole:

```json
"WorldIslandId": "WSTAW_TUTAJ_ID_DOCZELOWEGO_SWIATA"
```

Zamień wartość na `IslandId` świata, który chcesz załadować. Możesz znaleźć to ID, otwierając `WorldDescription.json` docelowego świata.

### Zapisz i uruchom serwer ponownie

Zapisz plik i ponownie uruchom serwer. Windrose załaduje teraz wybrany świat.

:::tip Dokładnie sprawdź ID świata
Jeśli `WorldIslandId` nie będzie dokładnie odpowiadać istniejącemu folderowi świata i jego `IslandId`, serwer może nie załadować zamierzonego świata lub wygenerować nowy.
:::

## Tworzenie nowego świata

Jeśli chcesz mieć na serwerze kilka sesji gier w różnych światach, możesz ręcznie stworzyć nowy świat.

### Utwórz folder świata

Najpierw zatrzymaj serwer.

Otwórz **Menedżera plików** i przejdź do:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[twoja_wersja_gry]/Worlds/
```

Stwórz nowy folder o unikalnej nazwie. Ta nazwa folderu stanie się nowym `IslandId` świata.

Na przykład:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[twoja_wersja_gry]/Worlds/MojDrugiSwiat
```

### Utwórz plik opisu świata

W nowym folderze stwórz plik o nazwie `WorldDescription.json` i wklej poniższy szablon:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "TWOJE_NOWE_ID_SWIATA",
    "WorldName": "Mój Drugi Świat",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

Zamień `TWOJE_NOWE_ID_SWIATA` na wybrane ID świata.

:::caution ID muszą się zgadzać
`IslandId` w `WorldDescription.json` musi być identyczne z nazwą folderu. Nawet drobne różnice, takie jak wielkość liter czy spacje, mogą uniemożliwić poprawne załadowanie świata.
:::

### Ustaw nowy świat jako aktywny

Teraz otwórz `ServerDescription.json` i zaktualizuj wartość `WorldIslandId`, aby wskazywała na nowe ID świata.

Przykład:

```json
"WorldIslandId": "MojDrugiSwiat"
```

Zapisz plik i uruchom serwer. Windrose wygeneruje nowy świat przy starcie.

## Tworzenie kopii zapasowej świata

Przed przełączaniem światów, usuwaniem danych lub testowaniem nowych ustawień warto zrobić kopię zapasową zapisu świata.

### Użyj funkcji kopii zapasowej ZAP-Hosting

Najpierw zatrzymaj serwer.

W panelu bocznym otwórz **Kopie zapasowe** i stwórz nową kopię. To najbezpieczniejsza opcja, jeśli chcesz później przywrócić pełny stan serwera.

### Pobierz pliki świata ręcznie

Jeśli chcesz tylko bezpośrednią kopię danych zapisu, otwórz **Menedżera plików** i pobierz cały folder `RocksDB/` za pomocą opcji zip lub pobierz.

Odpowiednia ścieżka:

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| Metoda kopii zapasowej | Zalecane zastosowanie |
| --- | --- |
| Kopia z panelu | Najlepsza do pełnej odbudowy serwera |
| Ręczne pobranie `RocksDB/` | Najlepsze do archiwizacji zapisu świata |
| Obie metody | Najlepsze dla ważnych światów lub przed usunięciem |

:::note Zalecenie dotyczące kopii zapasowych
Jeśli zarządzasz kilkoma światami, posiadanie zarówno kopii z panelu, jak i ręcznej kopii `RocksDB/` daje największą elastyczność przy późniejszym przywracaniu konkretnego świata.
:::

## Usuwanie świata

Jeśli chcesz całkowicie zresetować świat, możesz usunąć jego folder zapisu i pozwolić serwerowi wygenerować nowy.

### Usuń zapis świata

Zatrzymaj serwer.

Otwórz **Menedżera plików** i przejdź do:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[twoja_wersja_gry]/Worlds/
```

Usuń folder świata, który chcesz wyczyścić.

### Wygeneruj świat ponownie

Upewnij się, że `ServerDescription.json` nadal wskazuje na usunięty świat przez pole `WorldIslandId`.

Po ponownym uruchomieniu serwera Windrose wykryje brak folderu docelowego świata i wygeneruje nowy świat dla tego ID.

:::danger Sprawdź folder przed usunięciem
Usunięcie niewłaściwego folderu świata trwale usuwa dane zapisu tego świata, chyba że masz kopię zapasową. Dokładnie sprawdź nazwę folderu i `IslandId` przed kontynuacją.
:::

## Zarządzanie ustawieniami świata

Każdy świat ma własny plik `WorldDescription.json`, co pozwala na utrzymanie osobnych ustawień dla różnych światów na tym samym serwerze.

### Przykładowa konfiguracja świata

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MojDrugiSwiat",
    "WorldName": "Mój Drugi Świat",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### Ważne wartości

| Klucz | Opis |
| --- | --- |
| `Version` | Wersja konfiguracji używana przez plik |
| `IslandId` | Wewnętrzne ID świata, musi zgadzać się z nazwą folderu |
| `WorldName` | Nazwa wyświetlana świata |
| `WorldPresetType` | Typ presetów do generowania świata |
| `WorldSettings` | Dodatkowe ustawienia specyficzne dla świata, jeśli są obsługiwane |

:::info Zarządzanie konfiguracją w panelu
Pliki konfiguracyjne Windrose możesz zarządzać w panelu serwera gier w sekcji **Konfiguracje**. Jeśli plik tam nie jest dostępny, użyj **Menedżera plików**, aby edytować go bezpośrednio.
:::

## Najlepsze praktyki zarządzania wieloma światami

Zarządzanie kilkoma światami na jednym serwerze jest przydatne do testów, eventów lub oddzielnych grup graczy. Aby wszystko było przejrzyste, stosuj się do tych wskazówek:

- Używaj jasnych i unikalnych ID światów, np. `[twoj_swiat_pvp]` lub `[twoj_swiat_build]`
- Zachowaj identyczność nazwy folderu i `IslandId`
- Twórz kopię zapasową przed przełączaniem lub usuwaniem świata
- Nie zmieniaj plików podczas działania serwera
- Dokumentuj, które `WorldIslandId` odpowiada której nazwie świata

Dzięki temu unikniesz zamieszania, zwłaszcza jeśli z czasem zarządzasz wieloma światami.

## Podsumowanie

Gratulacje, pomyślnie zarządzałeś światami Windrose na swoim serwerze. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂