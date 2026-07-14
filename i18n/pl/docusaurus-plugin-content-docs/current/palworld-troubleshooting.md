---
id: palworld-troubleshooting
title: "Palworld: Rozwiązywanie problemów"
description: "Naprawiaj typowe problemy z serwerem Palworld, problemy z aktualizacją Steam Palworld oraz błędy połączenia Steam na swoim serwerze gier. -> Dowiedz się więcej teraz"
sidebar_label: Palworld: Rozwiązywanie problemów
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery dedykowane Palworld mogą mieć problemy z różnych powodów, takich jak nieudane aktualizacje Steam, niezgodność wersji, konflikty modów czy tymczasowe problemy z połączeniem Steam. W tym poradniku nauczysz się, jak zidentyfikować typowe problemy serwera Palworld na ZAP-Hosting i zastosować właściwe rozwiązania, w tym kiedy edytować pliki konfiguracyjne, weryfikować pliki lub restartować serwer.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz rozwiązywać problemy, upewnij się, że masz dostęp do panelu administracyjnego i konsoli swojego serwera gier Palworld w panelu ZAP-Hosting.

Przygotuj także:

| Wymaganie | Dlaczego jest potrzebne |
| --- | --- |
| Dostęp do panelu serwera gier ZAP-Hosting | Potrzebny do zatrzymywania, uruchamiania, reinstalacji i edycji plików konfiguracyjnych |
| Dostęp do konsoli serwera | Przydatny do sprawdzenia, czy serwer odpowiada |
| Aktualna kopia zapasowa | Zalecana przed zmianą plików lub usuwaniem modów |
| Bezpośredni adres IP i port serwera | Potrzebne, ponieważ lista Ostatnich Serwerów w grze może działać niestabilnie |

:::caution Utwórz najpierw kopię zapasową
Jeśli planujesz usuwać mody, reinstalować pliki lub resetować części konfiguracji serwera Palworld, najpierw utwórz kopię zapasową, aby uniknąć przypadkowej utraty danych.
:::

## Dostęp do plików konfiguracyjnych Palworld

Niektóre kroki rozwiązywania problemów wymagają ręcznej edycji plików konfiguracyjnych Palworld. Na ZAP-Hosting możesz uzyskać do nich dostęp przez panel administracyjny serwera w sekcji `Configs`.

Dla serwerów dedykowanych Palworld główne ustawienia serwera zazwyczaj znajdują się w pliku:

```text
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

Jeśli Twój serwer działa na innym szablonie platformy, nazwy folderów mogą się różnić, ale na hostowanych serwerach Palworld opartych na Linuksie ścieżka `LinuxServer` jest standardowa.

### Otwórz plik konfiguracyjny w panelu ZAP

Aby uzyskać dostęp do pliku:

1. Otwórz swój serwer Palworld w panelu ZAP-Hosting.
2. Przejdź do sekcji `Configs`.
3. Otwórz plik `PalWorldSettings.ini`.
4. Sprawdź linię `OptionSettings=(...)`, która zawiera większość ustawień rozgrywki i połączenia.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Główny plik konfiguracyjny
Większość opcji serwera Palworld jest przechowywana w `PalWorldSettings.ini`, zwykle w sekcji `OptionSettings=(...)`. Jeśli chcesz zmienić ustawienia rozgrywki, hasła, limity graczy lub wartości związane z siecią, to zazwyczaj ten plik będziesz edytować.
:::

### Zapisz i zrestartuj po edycji

Po zmianie jakichkolwiek wartości konfiguracyjnych:

1. Zapisz plik w sekcji `Configs`.
2. Zrestartuj serwer Palworld z panelu ZAP-Hosting.

Palworld nie stosuje zmian konfiguracyjnych na żywo, więc restart jest konieczny po edycji `PalWorldSettings.ini`.

## Naprawa nieudanych aktualizacji Steam

Znany problem z aktualizacją może pojawić się z komunikatem:

```text
Error! app '2394010' state is 0x6 after update job
```

Zazwyczaj oznacza to, że pliki serwera Palworld Steam nie zostały poprawnie zaktualizowane.

### Zalecane rozwiązanie

Aby to naprawić:

1. Zatrzymaj serwer Palworld.
2. Otwórz panel zarządzania serwerem w ZAP-Hosting.
3. Skorzystaj z funkcji reinstalacji lub weryfikacji plików.
4. Wybierz opcję weryfikacji integralności, aby sprawdzić i ewentualnie ponownie pobrać pliki serwera.
5. Uruchom serwer ponownie.

:::tip Weryfikacja integralności dla uszkodzonych plików
Weryfikacja plików to zwykle najbezpieczniejszy pierwszy krok, ponieważ naprawia brakujące lub uszkodzone pliki serwera Palworld bez konieczności ręcznego przesyłania czegokolwiek.
:::

### Czy trzeba edytować plik konfiguracyjny?

Zazwyczaj nie jest wymagana ręczna zmiana pliku konfiguracyjnego dla tego błędu. Problem zwykle dotyczy uszkodzonych lub niekompletnych plików gry, a nie złych ustawień w `PalWorldSettings.ini`.

## Naprawa błędu "Connection Timed Out"

Jeśli podczas dołączania do serwera Palworld pojawia się błąd `Connection timed out`, może to mieć kilka różnych przyczyn.

## Sprawdź, czy serwer faktycznie działa

Najpierw upewnij się, że serwer poprawnie się uruchomił.

### Użyj konsoli

Otwórz konsolę serwera w panelu ZAP-Hosting i sprawdź, czy widać normalną aktywność startową. Jeśli konsola jest dostępna, wypróbuj prostą komendę:

```text
info
```

Jeśli serwer odpowiada normalnie, prawdopodobnie działa. Brak odpowiedzi lub powtarzające się zatrzymania procesu mogą oznaczać, że serwer się zawiesza lub crashuje podczas startu.

### Sprawdź zużycie zasobów

Jeśli podczas startu zużycie CPU jest bardzo niskie, a serwer nie odpowiada w konsoli, może to oznaczać, że proces serwera Palworld uległ awarii lub nie zainicjował się poprawnie.

| Objaw | Prawdopodobna przyczyna | Zalecane działanie |
| --- | --- | --- |
| Brak odpowiedzi w konsoli | Crash lub zawieszenie podczas startu | Zrestartuj serwer i sprawdź ostatnie zmiany |
| Bardzo niskie zużycie CPU podczas startu | Serwer nie inicjuje się poprawnie | Sprawdź mody, ostatnie aktualizacje i logi |
| Serwer startuje, ale gracze mają timeout | Problem z metodą połączenia lub wersją | Użyj bezpośredniego IP i zweryfikuj wersje |

## Połącz się bezpośrednio przez IP zamiast z listy Ostatnich Serwerów

Częsty problem Palworld to nieudane dołączenie przez zakładkę `Recent Servers` w grze, nawet gdy serwer jest online.

Zamiast tego połącz się bezpośrednio:

1. Skopiuj adres IP i port serwera z panelu ZAP-Hosting.
2. W Palworld połącz się bezpośrednio pod tym adresem.
3. Nie polegaj na liście `Recent Servers` podczas testów.

:::note Bezpośrednie połączenie jest bardziej niezawodne
Jeśli przeglądarka serwerów Steam Palworld lub lista ostatnich serwerów działa niestabilnie, połączenie bezpośrednie przez IP to najlepszy sposób, by sprawdzić, czy serwer jest dostępny.
:::

## Sprawdź problemy z modami lub UE4SS

Jeśli Palworld niedawno otrzymał aktualizację, a Twój serwer korzysta z modów lub `UE4SS`, serwer może przestać działać, dopóki te modyfikacje nie zostaną zaktualizowane.

### Co sprawdzić

Sprawdź, czy ostatnio instalowałeś:

- mody rozgrywki
- niestandardowe modyfikacje serwera
- `UE4SS`
- inne pliki firm trzecich ingerujące w serwer Palworld

Jeśli problem pojawił się zaraz po aktualizacji Steam Palworld, te pliki są prawdopodobną przyczyną.

### Zalecane rozwiązanie

1. Zatrzymaj serwer.
2. Utwórz kopię zapasową.
3. Usuń lub wyłącz niedawno dodane mody lub `UE4SS`.
4. Uruchom serwer ponownie.
5. Przetestuj połączenie przez bezpośrednie IP.

:::caution Kompatybilność modów po aktualizacjach
Aktualizacje Palworld mogą bez ostrzeżenia zepsuć mody. Jeśli serwer działał przed aktualizacją, a po niej przestał, zawsze testuj bez modów przed zmianą innych ustawień.
:::

### Czy wymagane są zmiany w konfiguracji?

Zazwyczaj nie. Timeouty połączeń związane z modami wynikają z niekompatybilnych plików, a nie z wartości w `PalWorldSettings.ini`.

## Naprawa błędów połączenia Steam

Możesz zobaczyć komunikat startowy:

```text
Connecting anonymously to Steam Public...Retrying
```

Zwykle jest to związane z tymczasowymi problemami z połączeniem Steam, a nie uszkodzoną konfiguracją Palworld.

### Co to oznacza

Serwer dedykowany Palworld korzysta z usług Steam podczas startu i aktualizacji. Jeśli Steam ma awarie, duże obciążenie lub planowane prace konserwacyjne, serwer może chwilowo nie móc się połączyć.

Jest to szczególnie częste podczas dużego ruchu lub rutynowych prac Steam, które często odbywają się we wtorki.

### Zalecane rozwiązanie

Spróbuj:

1. Poczekać 5 do 10 minut.
2. Zrestartować serwer.
3. Ponownie przetestować.

Jeśli problem występuje podczas większej awarii Steam, może być konieczne poczekanie na przywrócenie usług.

### Uwagi o automatycznych aktualizacjach

Jeśli serwer wielokrotnie ma problemy z aktualizacją podczas awarii Steam, możesz rozważyć wyłączenie automatycznych aktualizacji w ustawieniach serwera do czasu stabilizacji Steam.

:::tip Unikaj aktualizacji podczas konserwacji Steam
Jeśli to możliwe, unikaj wymuszania aktualizacji Palworld Steam podczas znanych okresów konserwacji Steam. Zmniejszy to liczbę nieudanych prób startu i niepotrzebnego rozwiązywania problemów.
:::

### Czy wymagane są zmiany w konfiguracji?

Nie. Ten problem zwykle nie jest rozwiązywany przez edycję `PalWorldSettings.ini` ani innych plików konfiguracyjnych.

## Naprawa błędu "Incompatible Version of the Game"

Jeśli Palworld pokazuje komunikat, że mecz działa na niekompatybilnej wersji gry, oznacza to, że wersja klienta i serwera się nie zgadzają.

## Zaktualizuj wersję serwera

Zacznij od restartu serwera w panelu ZAP-Hosting. W wielu przypadkach pozwala to zastosować najnowszą aktualizację serwera Palworld.

Jeśli wersja nadal się nie zgadza, użyj standardowego procesu aktualizacji serwera. Jeśli potrzebujesz dedykowanego poradnika aktualizacji, skorzystaj z odpowiedniej dokumentacji Palworld dostępnej w ZAP-Docs.

### Potwierdź wersję klienta

Upewnij się, że lokalna instalacja Palworld jest również w pełni zaktualizowana przez Steam.

| Komponent | Co sprawdzić |
| --- | --- |
| Serwer Palworld | Zrestartowany i zaktualizowany na ZAP-Hosting |
| Lokalna gra Palworld | Zaktualizowana w Steam |
| Mody | Zaktualizowane lub usunięte, jeśli niekompatybilne |

:::info Niezgodność wersji dotyczy obu stron
Ten błąd nie zawsze oznacza, że serwer jest przestarzały. Twój lokalny klient Palworld może być starszą wersją, więc zawsze sprawdzaj obie strony przed głębszymi zmianami.
:::

### Czy wymagane są zmiany w konfiguracji?

Zazwyczaj nie trzeba edytować plików konfiguracyjnych przy niezgodności wersji.

## Zrozumienie komunikatów startowych `steamclient.so`

Podczas startu możesz zobaczyć komunikaty podobne do:

```text
steamclient.so: cannot open shared object file: No such file or directory
```

W wielu środowiskach hostingu Palworld takie komunikaty związane ze Steam pojawiają się nawet, gdy serwer startuje poprawnie.

### Co powinieneś zrobić

Jeśli serwer kontynuuje start i jest dostępny, zwykle możesz zignorować ten komunikat.

### Kiedy to jest problem

Zajmij się tym tylko, jeśli serwer całkowicie nie startuje, a komunikat pojawia się wraz z innymi krytycznymi błędami.

:::note Nie każdy błąd Steam jest krytyczny
Logi startowe często zawierają ostrzeżenia niekrytyczne. Skup się na tym, czy serwer kończy start i przyjmuje połączenia, a nie tylko na pojedynczym ostrzeżeniu w konsoli.
:::

## Rozwiązywanie problemów z połączeniem związanych ze światem i gildią

W niektórych przypadkach gracze mogą mieć problemy z połączeniem związane ze stanem świata lub gildii, a nie z samym procesem serwera.

Przykładem jest sytuacja, gdy członek gildii odchodzi, a inne dane graczy powiązane z gildią pozostają przypisane do offline’owych graczy. To czasem powoduje problemy z dołączaniem.

### Możliwe rozwiązania

Wypróbuj kolejno:

1. Poproś dotkniętego gracza o ponowne dołączenie do gildii, jeśli to możliwe.
2. Zrestartuj serwer Palworld.
3. Jeśli problem nadal występuje, przywróć kopię zapasową lub dokładnie zbadaj dane zapisu.

:::danger Zmiany w danych zapisu mogą być ryzykowne
Jeśli podejrzewasz uszkodzenie świata lub zapisu, unikaj przypadkowych ręcznych zmian plików bez aktualnej kopii zapasowej. Nieprawidłowe edycje mogą trwale uszkodzić dane świata Palworld.
:::

## Warto sprawdzić wartości konfiguracyjne

Chociaż większość problemów w tym poradniku nie wynika bezpośrednio ze złych ustawień, istnieje kilka wartości w `PalWorldSettings.ini`, które warto przejrzeć, jeśli gracze nie mogą dołączyć.

Te wartości zwykle znajdują się w sekcji `OptionSettings=(...)`.

| Klucz konfiguracyjny | Cel | Co sprawdzić |
| --- | --- | --- |
| `ServerName` | Publiczna nazwa serwera | Upewnij się, że jest ustawiona zgodnie z zamierzeniem |
| `ServerDescription` | Opis serwera | Opcjonalny, ale przydatny do identyfikacji |
| `AdminPassword` | Hasło administratora | Ustaw poprawnie, jeśli korzystasz z komend admina |
| `ServerPassword` | Hasło do dołączenia | Usuń lub popraw, jeśli gracze nie mogą się zalogować |
| `PublicPort` | Port połączenia gry | Upewnij się, że odpowiada przypisanemu portowi usługi |
| `PublicIP` | Reklamowany publiczny IP | Zwykle nie zmieniaj, chyba że wymaga tego konfiguracja |
| `bIsMultiplay` | Tryb multiplayer | Powinien być włączony dla normalnego serwera dedykowanego |
| `bIsDedicated` | Tryb serwera dedykowanego | Powinien być włączony dla hostowanych serwerów dedykowanych |

### Przykładowa struktura

Dokładna zawartość pliku może się różnić, ale odpowiednie ustawienia zwykle znajdują się w linii podobnej do tej:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Palworld Server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="",bIsMultiplay=True,bIsDedicated=True)
```

Zamień takie placeholdery jak `[your_admin_password]` i `[your_server_password]` na własne wartości.

:::caution Nie zmieniaj losowo nieznanych wartości
Palworld przechowuje wiele ustawień w jednej linii `OptionSettings`. Jeśli przez pomyłkę usuniesz przecinki, cudzysłowy lub nawiasy, serwer może nie odczytać poprawnie konfiguracji.
:::

## Bezpieczne stosowanie zmian konfiguracyjnych

Jeśli musisz edytować `PalWorldSettings.ini`, postępuj tak:

1. Zatrzymaj serwer, aby uniknąć konfliktów podczas edycji.
2. Otwórz `Configs` w panelu ZAP-Hosting.
3. Edytuj `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`.
4. Z