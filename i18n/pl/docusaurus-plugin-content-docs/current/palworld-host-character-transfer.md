---
id: palworld-host-character-transfer
title: "Palworld: Transfer postaci hosta"
description: "Dowiedz się, jak przenieść postać hosta Palworld z zapisu solo lub kooperacji na serwer dedykowany za pomocą Palworld Save Tools i odpowiednich plików zapisu. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: Transfer postaci hosta
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Transfer postaci hosta w Palworld pozwala na migrację postaci hosta z zapisu solo lub kooperacji do zapisu na serwerze dedykowanym. W tym poradniku przygotujesz wymagane pliki zapisu, użyjesz wspieranego narzędzia migracyjnego i wgrasz zaktualizowane dane postaci z powrotem na swój serwer.

:::danger Eksperymentalne ostrzeżenie dotyczące transferu postaci
Ta procedura jest uważana za eksperymentalną i ręcznie modyfikuje dane zapisu. Aktualizacje Palworld mogą zmieniać strukturę zapisu, co może spowodować, że narzędzia lub kroki migracji przestaną działać poprawnie.
:::

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld oraz lokalny system Windows, na którym możesz uruchomić wymagane narzędzie do migracji zapisu.

### Wymagania

Potrzebujesz następujących elementów:

| Wymaganie | Cel |
| --- | --- |
| Dostęp do serwera Palworld w ZAP-Hosting | Aby pobrać i wgrać wymagane pliki zapisu |
| Lokalna lokalizacja do backupu | Aby zachować bezpieczną kopię oryginalnych danych zapisu |
| [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) | Do wykonania migracji postaci hosta |
| Nowo utworzona postać na serwerze dedykowanym | Na tę postać zostaną przeniesione dane postaci hosta |

:::caution Najpierw wykonaj kopię zapasową
Przed zmianą jakichkolwiek plików zapisu pobierz i zachowaj kompletną kopię zapasową aktualnego zapisu serwera. Jeśli transfer się nie powiedzie lub spowoduje uszkodzenie danych postaci, będziesz potrzebować oryginalnych plików do przywrócenia serwera.
:::

### Ważne informacje o plikach konfiguracyjnych

Ten transfer **nie** jest wykonywany przez edycję pliku konfiguracyjnego Palworld w katalogu `Configs`. Na podstawie dostępnej dokumentacji narzędzia i wskazówek społeczności transfer postaci hosta odbywa się przez zastąpienie plików danych zapisu.

Odpowiednie pliki znajdują się w katalogu zapisu serwera, a nie w standardowym pliku konfiguracyjnym rozgrywki, takim jak `PalWorldSettings.ini`.

## Zrozum, które pliki są używane

Przed rozpoczęciem transferu powinieneś zidentyfikować zaangażowane pliki.

### Pliki zapisu wymagane do transferu

Migracja postaci hosta wykorzystuje następujące dane zapisu:

| Plik lub folder | Lokalizacja | Cel |
| --- | --- | --- |
| `Level.sav` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Level.sav` | Zawiera dane zapisu świata używane przez narzędzie migracyjne |
| `Players/` | `Pal/Saved/SaveGames/0/[your_savefolder_id]/Players/` | Zawiera pliki zapisu graczy, w tym nową postać na serwerze dedykowanym |
| `00000001.sav` | W folderze `Players/` z wgranego zapisu solo lub kooperacji | Zazwyczaj reprezentuje oryginalną postać hosta w zapisach kooperacji |

`[your_savefolder_id]` to długi identyfikator folderu używany przez zapis świata Palworld. Ta wartość różni się dla każdego zapisu.

### Gdzie znaleźć pliki w panelu ZAP

Do wymaganych plików zapisu masz dostęp przez menedżer plików w panelu administracyjnym serwera gier.

Przejdź do:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

W tym folderze powinieneś znaleźć przynajmniej:

- `Level.sav`
- `LevelMeta.sav`
- `Players/`

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotuj postać na serwerze dedykowanym

Zanim przeniesiesz postać hosta, serwer dedykowany musi już zawierać nowo wygenerowany zapis gracza dla twojego konta.

### Utwórz nową postać na serwerze

Dołącz normalnie do swojego serwera dedykowanego Palworld i stwórz nową postać. Następnie graj, aż postać osiągnie co najmniej poziom `2`.

Ten krok jest konieczny, ponieważ narzędzie migracyjne potrzebuje istniejącego pliku postaci serwera dedykowanego jako celu migracji.

### Wymuś lub poczekaj na zapis

Po utworzeniu nowej postaci musisz upewnić się, że serwer zapisał nowe dane gracza na dysku.

Możesz:

- poczekać na automatyczny interwał zapisu, zwykle około `4` minut, lub
- użyć komendy `save` w konsoli serwera

| Komenda | Gdzie uruchomić | Cel |
| --- | --- | --- |
| `save` | Konsola serwera | Wymusza zapis aktualnych danych świata i gracza na dysk |

:::info Wymóg komendy save
Jeśli używasz komendy `save`, uruchom ją przed zatrzymaniem serwera. To pomaga upewnić się, że nowy plik postaci serwera dedykowanego istnieje w folderze `Players/`.
:::

### Zatrzymaj serwer

Gdy zapis zostanie ukończony, zatrzymaj serwer Palworld z panelu administracyjnego.

Nie kontynuuj, gdy serwer jest włączony, ponieważ aktywne zapisy mogą nadpisać lub kolidować z plikami, które zaraz zamierzasz zastąpić.

## Pobierz wymagane dane zapisu

Teraz, gdy nowa postać istnieje na serwerze dedykowanym, możesz pobrać pliki potrzebne do migracji.

### Otwórz katalog zapisu

W menedżerze plików ZAP-Hosting przejdź do:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Pobierz pliki

Pobierz na swój lokalny komputer następujące elementy:

| Element | Wymagany |
| --- | --- |
| `Level.sav` | Tak |
| folder `Players/` | Tak |

Przechowuj oba elementy w tym samym lokalnym katalogu roboczym, aby narzędzie migracyjne mogło je poprawnie przetworzyć.

:::tip Trzymaj pliki razem
Umieść `Level.sav` i folder `Players/` obok siebie w tym samym lokalnym folderze. To odpowiada oczekiwanemu przepływowi pracy używanemu przez Palworld Save Tools.
:::

## Przeprowadź migrację postaci hosta

Gdy pobierzesz dane zapisu, możesz wykonać właściwy transfer postaci hosta.

### Uruchom Palworld Save Tools

Pobierz i rozpakuj [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools), a następnie otwórz `PalworldSaveTools.exe`.

W aplikacji wybierz:

```text
Fix Host Save
```

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Wybierz odpowiednie pliki

W narzędziu migracyjnym:

1. Wybierz pobrany plik `Level.sav`
2. W lewym polu wyboru wybierz `00000001.sav`
3. W prawym polu wyboru wybierz nową postać, którą utworzyłeś na serwerze dedykowanym
4. Rozpocznij migrację, klikając `Migrate`

| Pole narzędzia | Wartość do wyboru |
| --- | --- |
| `Path to Level.sav` | Twój pobrany plik `Level.sav` |
| Lewa postać | `00000001.sav` |
| Prawa postać | Twoja nowo utworzona postać na serwerze dedykowanym |
| Akcja | `Migrate` |

### Co robi migracja

Proces migracji przypisuje oryginalne dane postaci hosta z zapisu solo lub kooperacji do wpisu postaci serwera dedykowanego, który wcześniej utworzyłeś.

Dlatego najpierw musisz dołączyć do serwera i wygenerować świeży zapis gracza, zanim użyjesz narzędzia.

:::caution Sprawdź wybraną postać docelową
Upewnij się, że wybierasz poprawną nową postać serwera po prawej stronie. Wybranie niewłaściwego celu może nadpisać dane zapisu innego gracza.
:::

## Wgraj zaktualizowane pliki zapisu

Po pomyślnym zakończeniu migracji musisz wgrać zmodyfikowane pliki z powrotem na swój serwer.

### Zamień istniejące dane zapisu

Wróć do tego samego katalogu serwera w menedżerze plików ZAP-Hosting:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Wgraj i zastąp:

- zaktualizowany plik `Level.sav`
- zaktualizowany folder `Players/`

Jeśli menedżer plików zapyta o nadpisanie istniejących plików, potwierdź zamianę.

### Zmiany w plikach konfiguracyjnych

Dla tego konkretnego transferu postaci hosta nie ma obecnie potwierdzonej potrzeby edycji pliku konfiguracyjnego Palworld, takiego jak `PalWorldSettings.ini`.

| Element | Wymagany do transferu hosta |
| --- | --- |
| Edycja `PalWorldSettings.ini` | Nie |
| Edycja plików w `Configs` | Brak potwierdzonej potrzeby |
| Zamiana `Level.sav` | Tak |
| Zamiana `Players/` | Tak |

:::note Brak dodatkowych wpisów konfiguracyjnych
Na podstawie dostępnej dokumentacji narzędzia i instrukcji migracji nie są wymagane dodatkowe wpisy konfiguracyjne ani ręczne zmiany `.ini` dla samego transferu.
:::

## Uruchom serwer i przetestuj postać

Po wgraniu zaktualizowanych plików ponownie uruchom swój serwer Palworld.

### Dołącz ponownie do serwera

Połącz się z serwerem używając tego samego konta, które utworzyło nową postać na serwerze dedykowanym. Jeśli migracja się powiodła, powinieneś teraz załadować przeniesioną postać hosta zamiast tymczasowej nowej.

### Sprawdź ważne dane postaci

Po dołączeniu zweryfikuj, czy następujące dane są poprawne:

- poziom postaci
- ekwipunek
- pals (towarzysze)
- własność bazy
- dane postępu

Jeśli coś jest niekompletne lub niepoprawne, natychmiast zatrzymaj serwer i przywróć kopię zapasową przed ponowną próbą.

:::danger Przywróć kopię zapasową, jeśli dane są niepoprawne
Jeśli po migracji dane postaci, ekwipunku lub własności świata są uszkodzone, nie kontynuuj gry. Najpierw przywróć oryginalne pliki `Level.sav` i `Players/`, aby uniknąć dalszych niechcianych zmian.
:::

## Podsumowanie referencyjne

### Wymagane ścieżki, pliki i działania

| Typ | Wartość |
| --- | --- |
| Ścieżka zapisu | `Pal/Saved/SaveGames/0/[your_savefolder_id]/` |
| Wymagany plik | `Level.sav` |
| Wymagany folder | `Players/` |
| Typowo wybrany plik zapisu hosta | `00000001.sav` |
| Komenda serwera | `save` |
| Wymagany restart serwera | Tak |
| Wymagana edycja pliku konfiguracyjnego | Brak potwierdzonej potrzeby |

## Zakończenie

Gratulacje, pomyślnie przeniosłeś postać hosta Palworld na serwer dedykowany. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂