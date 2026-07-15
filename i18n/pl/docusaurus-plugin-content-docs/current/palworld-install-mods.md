---
id: palworld-install-mods
title: "Palworld: Instalacja Modów"
description: "Dowiedz się, jak zainstalować mody do Palworld, w tym UE4SS Palworld, mody Lua oraz .pak na swoim serwerze dedykowanym. -> Dowiedz się więcej"
sidebar_label: "Instalacja Modów"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld obsługuje kilka typów modów serwerowych, najczęściej `UE4SS`, `.lua` oraz `.pak`. W tym poradniku nauczysz się, jak przygotować serwer, rozpoznać właściwy typ modu, przesłać potrzebne pliki i zrestartować serwer, aby mody działały poprawnie.



## Przygotowanie

Przed instalacją modów upewnij się, że Twój serwer i wybrany mod są ze sobą kompatybilne.

:::danger Najpierw zrób kopię zapasową świata
Zawsze twórz kopię zapasową swojego zapisu Palworld przed instalacją modów. Jeśli mod jest niekompatybilny lub powoduje problemy z uruchomieniem, może być konieczne przywrócenie poprzedniego stanu świata.
:::

Najpierw sprawdź następujące kwestie:

| Wymaganie | Szczegóły |
| --- | --- |
| Wersja serwera | Dedykowane serwery Palworld korzystają z wersji **Steam**. Mody przeznaczone wyłącznie dla wersji **Game Pass** nie powinny być używane. |
| Kompatybilność modów | Potwierdź, że autor modu wyraźnie zaznacza, że mod działa na serwerze dedykowanym. |
| Typ modu | Sprawdź, czy mod to `UE4SS`, `.lua` czy `.pak`. |
| Wymagania klienta | Niektóre mody muszą być zainstalowane zarówno na **serwerze**, jak i na wszystkich **klientach graczy**. |
| Wersja serwera | Sprawdź aktualną wersję serwera przed instalacją modu. |

### Sprawdź wersję serwera

Aby potwierdzić aktualną wersję serwera Palworld, otwórz konsolę serwera w panelu administracyjnym serwera gier ZAP-Hosting i wpisz:

```text
info
```

Wyświetli się informacja o wersji, którą możesz porównać z wymaganiami modu.

:::tip Instaluj mody pojedynczo
Instaluj tylko jeden mod na raz i przetestuj go, zanim dodasz kolejny. Ułatwia to diagnozowanie problemów, jeśli serwer nie chce się uruchomić lub mod nie działa poprawnie.
:::

## Zrozum, jaki typ modu instalujesz

Mody do Palworld nie instalują się wszystkie tak samo. Musisz rozpoznać typ modu przed przesłaniem plików.

| Typ modu | Typowa zawartość | Typowa ścieżka instalacji | Uwagi |
| --- | --- | --- | --- |
| `UE4SS` / `.lua` mod | Folder ze skryptami, np. `main.lua` | `Pal/Binaries/Win64/ue4ss/Mods/` | Zazwyczaj wymaga frameworka `UE4SS` |
| `.pak` mod | Jeden lub więcej plików `.pak`, czasem z dodatkowymi plikami | `Pal/Content/Paks/~mods/` | Niektóre mody mogą używać `Pal/Content/Paks/LogicMods/` |
| Mod po stronie klienta | Różne | Nie zawsze instalowalny na serwerze | Używaj tylko jeśli autor potwierdza wsparcie serwera |

:::caution Stosuj się do ścieżek podanych przez autora modu
Ścieżki w tym poradniku to najczęściej używane lokalizacje modów Palworld. Niektóre mody mogą wymagać innej struktury folderów. Zawsze stosuj się do instrukcji autora modu, jeśli się różnią.
:::

## Dostęp do plików serwera w panelu ZAP

Będziesz korzystać z obszarów zarządzania plikami w panelu administracyjnym serwera gier ZAP-Hosting.

### Otwórz sekcję Configs

Pliki konfiguracyjne znajdziesz w panelu administracyjnym serwera gier pod **Configs**. To miejsce przydatne do sprawdzania i edycji dostępnych plików konfiguracyjnych dla Twojego serwera Palworld.

:::note Configs a pliki modów
Instalacja modów Palworld zwykle nie polega tylko na zmianie ustawienia w jednym pliku konfiguracyjnym. W większości przypadków musisz przesłać faktyczne pliki modów do odpowiednich katalogów serwera, a niektóre mody mogą dodatkowo wymagać zmian konfiguracyjnych w plikach dostępnych pod **Configs**.
:::

### Otwórz menedżer plików

Aby przesłać pliki modów, takie jak archiwa `.pak` lub foldery skryptów `UE4SS`, potrzebujesz dostępu do plików serwera przez menedżer plików w panelu ZAP.

Jeśli mod zawiera własny plik konfiguracyjny, prześlij go dokładnie tak, jak dostarczył to autor modu, i edytuj tylko wtedy, gdy autor dokumentuje obsługiwane wartości.

## Zainstaluj framework UE4SS, jeśli jest wymagany

`UE4SS` to framework modderski używany przez wiele modów Lua i opartych na skryptach Palworld. Potrzebujesz go tylko, jeśli wybrany mod od niego zależy.

### Potwierdź, że Twój serwer działa na Windows

`UE4SS` dla Palworld jest zwykle używany z wersją serwera Windows. Jeśli Twój serwer nie korzysta ze środowiska Windows, mody oparte na `UE4SS` mogą nie działać poprawnie.

:::info Wymaganie UE4SS
Jeśli wybrany mod to `UE4SS` lub `.lua`, powinieneś potwierdzić, że framework jest już zainstalowany, zanim prześlesz sam mod.
:::

### Sprawdź ścieżkę instalacji UE4SS

Jeśli `UE4SS` jest zainstalowany, odpowiedni katalog to zazwyczaj:

```text
Pal/Binaries/Win64/ue4ss/
```

Folder modów używany przez większość modów `UE4SS` i Lua to:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Jeśli Twój produkt ZAP-Hosting oferuje w panelu administracyjnym opcję modowania lub `UE4SS`, możesz z niej skorzystać, jeśli jest dostępna. Jeśli taka opcja nie jest widoczna, nie zakładaj, że istnieje dla Twojego produktu lub typu serwera.

## Prześlij i zainstaluj mody Lua lub UE4SS

Mody Lua i inne oparte na `UE4SS` zwykle są dystrybuowane jako foldery, a nie pojedyncze pliki `.pak`.

### Wypakuj mod na swoim urządzeniu

Pobierz archiwum modu ze strony oficjalnej autora i najpierw wypakuj je na komputerze. Nie przesyłaj pliku `.zip` lub `.rar`, chyba że autor wyraźnie to zaleca.

### Prześlij folder modu do właściwej ścieżki

Dla większości modów Lua lub `UE4SS` prześlij wypakowany folder modu do:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Typowa struktura modu Lua wygląda tak:

```text
Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua
```

Zamień `UploadedMod` na faktyczną nazwę folderu podaną przez autora modu.

### Przykładowa struktura

| Element | Przykładowa ścieżka |
| --- | --- |
| Folder modu | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/` |
| Plik skryptu | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua` |

:::caution Nie zmieniaj nazw plików i folderów bez powodu
Nie zmieniaj nazwy folderu modu, plików skryptów ani wewnętrznej struktury katalogów, chyba że autor modu wyraźnie to zaleca. Wiele modów `UE4SS` wymaga oryginalnej struktury, aby działać poprawnie.
:::

## Prześlij i zainstaluj mody .pak

Mody `.pak` instalują się inaczej niż mody Lua lub `UE4SS`.

### Prześlij plik `.pak`

Dla większości modów `.pak` Palworld prześlij plik do:

```text
Pal/Content/Paks/~mods/
```

Przykład:

```text
Pal/Content/Paks/~mods/UploadedMod.pak
```

Niektóre mody mogą wymagać zamiast tego:

```text
Pal/Content/Paks/LogicMods/
```

### Sprawdź dodatkowe pliki, jeśli są dołączone

Niektóre mody `.pak` mogą zawierać więcej niż jeden plik, np. metadane lub pliki towarzyszące. Jeśli archiwum modu zawiera wiele wymaganych plików, prześlij je wszystkie dokładnie tak, jak opisuje to autor.

| Typowa lokalizacja `.pak` | Zastosowanie |
| --- | --- |
| `Pal/Content/Paks/~mods/` | Najczęstsza lokalizacja dla ogólnych modów `.pak` |
| `Pal/Content/Paks/LogicMods/` | Używana przez niektóre mody zgodnie z instrukcjami autora |

## Edytuj pliki konfiguracyjne modów, jeśli jest to wymagane

Niektóre mody Palworld mają własne pliki konfiguracyjne, które trzeba edytować po przesłaniu. Te ustawienia nie są uniwersalne, więc nazwa pliku i wartości zależą od wybranego modu.

### Gdzie znaleźć plik konfiguracyjny

Jeśli mod dostarcza plik konfiguracyjny, może on znajdować się w jednej z tych lokalizacji po przesłaniu:

| Typ modu | Możliwa lokalizacja pliku konfiguracyjnego |
| --- | --- |
| `UE4SS` / `.lua` mod | W folderze modu pod `Pal/Binaries/Win64/ue4ss/Mods/[twoj_mod]/` |
| `.pak` mod | Czasem brak edytowalnego pliku konfiguracyjnego; sprawdź dokumentację modu |
| Integracja z konfiguracją serwera | W niektórych przypadkach dodatkowe ustawienia można edytować przez **Configs** w panelu ZAP |

### Co zmieniać

Zmieniaj tylko wartości wyraźnie udokumentowane przez autora modu. Typowe przykłady to:

- włączanie lub wyłączanie funkcji modu
- ustawianie mnożników lub limitów
- definiowanie zachowań tylko dla adminów
- zmiana nazw klawiszy lub opcji wewnętrznych używanych przez mod

Ponieważ mody Palworld nie korzystają z jednego standardowego formatu konfiguracyjnego, nie ma uniwersalnego wpisu konfiguracyjnego dla wszystkich modów.

:::info Brak uniwersalnego wpisu konfiguracyjnego modów Palworld
Obecnie nie istnieje jeden plik konfiguracyjny serwera Palworld ani wbudowana sekcja konfiguracyjna, która globalnie włączałaby wszystkie mody. W praktyce instalacja modów polega na umieszczeniu odpowiednich plików w właściwych katalogach i ewentualnej edycji plików konfiguracyjnych specyficznych dla modu, jeśli takie istnieją.
:::

## Zrestartuj serwer i przetestuj mod

Po przesłaniu plików modów i wprowadzeniu wymaganych zmian konfiguracyjnych musisz zrestartować serwer Palworld.

### Zrestartuj serwer

Użyj funkcji restartu w panelu administracyjnym serwera gier ZAP-Hosting, aby całkowicie zrestartować usługę.

Ten krok jest konieczny, ponieważ Palworld zwykle nie ładuje nowo przesłanych modów serwerowych, dopóki serwer nie zostanie ponownie uruchomiony.

### Przetestuj działanie

Po restarcie:

1. Dołącz do serwera.
2. Przetestuj funkcje modu w grze.
3. Sprawdź konsolę serwera pod kątem błędów, jeśli mod nie działa.
4. Usuń właśnie dodane pliki modów, jeśli serwer nie chce się uruchomić lub działa nieprawidłowo.

:::tip Rozwiązywanie problemów z modami
Jeśli mod powoduje problemy, najpierw usuń pliki z ostatnio zainstalowanego modu i ponownie zrestartuj serwer. To najszybszy sposób, by potwierdzić, czy to ten mod jest przyczyną.
:::

## Szybkie podsumowanie

| Zadanie | Działanie |
| --- | --- |
| Sprawdzenie wersji serwera | W konsoli serwera wpisz `info` |
| Podstawowa ścieżka UE4SS | `Pal/Binaries/Win64/ue4ss/` |
| Ścieżka modów UE4SS/Lua | `Pal/Binaries/Win64/ue4ss/Mods/` |
| Typowy plik skryptu Lua | `scripts/main.lua` |
| Typowa ścieżka modów `.pak` | `Pal/Content/Paks/~mods/` |
| Alternatywna ścieżka `.pak` | `Pal/Content/Paks/LogicMods/` |
| Dostęp do plików konfiguracyjnych | Otwórz **Configs** w panelu administracyjnym ZAP |
| Ostatni krok | Zrestartuj serwer |

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś mody na swoim serwerze Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂