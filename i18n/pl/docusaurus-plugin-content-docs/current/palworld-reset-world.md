---
id: palworld-reset-world
title: "Palworld: Resetowanie Świata"
description: "Dowiedz się, jak zresetować świat na swoim serwerze gier Palworld, usuwając aktualne dane zapisu i rozpoczynając nową mapę świata Palworld na tym samym serwerze. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: Resetowanie Świata
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Palworld przechowuje aktywny świat w danych zapisu serwera, a nie w konfigurowalnym ustawieniu świata. W tym poradniku nauczysz się, jak zresetować świat na swoim serwerze gier Palworld w ZAP-Hosting, usuwając istniejący folder zapisu, aby serwer wygenerował nowy świat przy następnym uruchomieniu.

:::danger Trwałe Usunięcie Danych
Resetowanie świata Palworld trwale usuwa aktualny świat, w tym postępy graczy, budowle, Pals oraz inne dane zapisane w tym świecie.
:::



## Przygotowanie

Przed rozpoczęciem upewnij się, że masz dostęp do administracji swojego serwera gier Palworld oraz że serwer jest wyłączony przed usunięciem jakichkolwiek plików zapisu.

:::tip Najpierw Utwórz Kopię Zapasową
Jeśli możesz potrzebować obecnego świata w przyszłości, wykonaj kopię zapasową przed kontynuowaniem. Jeśli Twój produkt to umożliwia, możesz skorzystać z funkcji backupu serwera lub ręcznie pobrać folder zapisu przed jego usunięciem.
:::

## Jak Działa Resetowanie Świata w Palworld

Reset świata Palworld zwykle nie wymaga zmiany żadnej wartości rozgrywki w pliku konfiguracyjnym. Aktywny świat jest przechowywany w katalogu zapisu serwera.

Na podstawie aktualnie dostępnej publicznie struktury serwera dedykowanego Palworld, zapis świata znajduje się zazwyczaj pod ścieżką:

```text
Pal/Saved/SaveGames/0/
```

W tym katalogu zwykle znajdziesz folder o długiej, losowej nazwie szesnastkowej, na przykład:

```text
84B5E2264EC387DEDB43179D666031A1
```

Ten folder zawiera aktualny zapis świata. Po jego usunięciu i ponownym uruchomieniu serwera Palworld automatycznie stworzy nowy świat.

:::note Nie Wymaga Wartości Konfiguracyjnej
Do standardowego resetu świata nie jest zwykle potrzebny żaden dodatkowy wpis konfiguracyjny, komenda konsoli ani parametr startowy. Reset wykonuje się przez usunięcie istniejących danych zapisu.
:::

## Zatrzymaj Serwer

Przed usunięciem plików świata zatrzymaj swój serwer Palworld w panelu administracyjnym ZAP-Hosting.

Usuwanie danych zapisu podczas działania serwera może spowodować uszkodzenie plików lub niepełne usunięcie danych świata.

:::caution Serwer Musi Być Wyłączony
Upewnij się, że serwer jest całkowicie zatrzymany przed kontynuacją. Jeśli serwer nadal działa, może odtworzyć lub zablokować pliki podczas ich edycji.
:::

## Otwórz Katalog Zapisów

W panelu administracyjnym serwera Palworld w ZAP-Hosting otwórz menedżer plików i przejdź do ścieżki:

```text
Pal/Saved/SaveGames/0/
```

W zależności od układu Twojego produktu, możesz mieć do tego dostęp przez menedżer plików lub podobną sekcję dostępu do plików w interfejsie webowym.



### Odniesienie do Ścieżki

| Element | Wartość |
| --- | --- |
| Podstawowa ścieżka zapisu | `Pal/Saved/SaveGames/0/` |
| Nazwa folderu świata | Losowy folder szesnastkowy |
| Przykładowy folder | `84B5E2264EC387DEDB43179D666031A1` |
| Wymagana akcja | Usuń folder świata |

## Usuń Aktualny Zapis Świata

W katalogu `Pal/Saved/SaveGames/0/` znajdź folder o losowej nazwie szesnastkowej. Usuń ten folder całkowicie.

### Co Musisz Usunąć

| Typ folderu | Wymagana akcja |
| --- | --- |
| Aktualny folder zapisu świata w `Pal/Saved/SaveGames/0/` | Usuń go |
| `PalworldSettings.ini` lub inne pliki konfiguracyjne | Nie edytuj ich dla tego resetu, chyba że chcesz zmienić ustawienia serwera |

Jeśli w `Pal/Saved/SaveGames/0/` jest tylko jeden folder szesnastkowy, to zazwyczaj jest to aktywny zapis świata. Jeśli jest ich kilka i nie jesteś pewien, który jest używany, nie zgaduj. W takim przypadku dokładnie sprawdź pliki serwera lub skontaktuj się z supportem przed usunięciem czegokolwiek.

:::info Wyjaśnienie Sekcji Konfiguracji
Chociaż wiele ustawień Palworld można zarządzać przez sekcję **Konfiguracje**, sam reset świata zwykle nie jest wykonywany przez edycję pliku konfiguracyjnego. Wymaganą czynnością jest usunięcie folderu zapisu świata z plików serwera.
:::

## Uruchom Serwer Ponownie

Po usunięciu folderu zapisu uruchom ponownie swój serwer Palworld.

Podczas startu serwer powinien automatycznie wygenerować nowy świat, ponieważ nie ma dostępnego poprzedniego zapisu w oczekiwanej lokalizacji.

### Dodatkowe Komendy lub Zmiany

| Zadanie | Wymagane |
| --- | --- |
| Edycja pliku konfiguracyjnego | Nie |
| Uruchomienie komendy w grze | Nie |
| Uruchomienie komendy konsoli | Nie |
| Restart lub start serwera po usunięciu | Tak |

:::tip Pierwszy Start Może Trwać Dłużej
Pierwszy start po usunięciu zapisu świata może potrwać nieco dłużej niż zwykle, ponieważ Palworld musi wygenerować nowy świat.
:::

## Sprawdź Reset

Gdy serwer będzie ponownie online, połącz się z nim i potwierdź, że został utworzony świeży świat.

Zazwyczaj możesz to zweryfikować, sprawdzając:

- nowy stan punktu startowego
- brak wcześniejszych budowli graczy
- brak wcześniejszego postępu
- nowo wygenerowany folder zapisu w `Pal/Saved/SaveGames/0/`

Jeśli stary świat nadal się pojawia, zatrzymaj serwer ponownie i upewnij się, że usunąłeś właściwy folder zapisu szesnastkowego.

## Podsumowanie

Gratulacje, pomyślnie zresetowałeś swój świat Palworld i rozpocząłeś nowy zapis na istniejącym serwerze. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂