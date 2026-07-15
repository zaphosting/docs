---
id: palworld-troubleshooting
title: "Palworld: Rozwiązywanie problemów"
description: "Napraw typowe problemy z serwerem Palworld, takie jak błędy aktualizacji Steam, przekroczenia czasu połączenia i błędy Steam na Twoim serwerze gier. -> Dowiedz się więcej teraz"
sidebar_label: "Rozwiązywanie problemów"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery dedykowane Palworld mogą czasem napotkać problemy z aktualizacją, uruchomieniem i połączeniem, zwłaszcza po aktualizacji Steam lub przy zainstalowanych modyfikacjach firm trzecich. W tym poradniku dowiesz się, jak zidentyfikować typowe problemy, które pliki lub ustawienia sprawdzić w panelu administracyjnym serwera gier ZAP-Hosting oraz jakie działania podjąć, aby przywrócić normalne działanie.



## Przygotowanie

Zanim zaczniesz rozwiązywać problemy, upewnij się, że masz dostęp do panelu administracyjnego swojego serwera gier Palworld oraz możesz otworzyć konsolę serwera i sekcję `Configs`.

:::info Wymagany dostęp
Potrzebujesz dostępu do interfejsu webowego ZAP-Hosting dla swojego serwera Palworld, aby móc zatrzymać, uruchomić, przeinstalować serwer oraz edytować pliki konfiguracyjne, jeśli zajdzie taka potrzeba.
:::

:::note O plikach konfiguracyjnych
Większość problemów opisywanych w tym poradniku nie rozwiązuje się jedynie przez zmianę ustawień rozgrywki. Jeśli jednak chcesz przejrzeć lub ręcznie zmodyfikować ustawienia serwera Palworld, odpowiedni plik znajdziesz zwykle w sekcji `Configs` w panelu administracyjnym serwera gier.
:::

## Znajdź odpowiedni plik konfiguracyjny

W przypadku serwerów dedykowanych Palworld główne ustawienia serwera zazwyczaj znajdują się w pliku:

```ini
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

W panelu administracyjnym ZAP-Hosting możesz zwykle uzyskać do niego dostęp przez sekcję `Configs`.

### Do czego służy ten plik

`PalWorldSettings.ini` zawiera główną linię `OptionSettings` z wartościami serwera takimi jak:

- nazwa serwera
- hasło
- hasło administratora
- limity graczy
- mnożniki rozgrywki
- ustawienia PvP i rajdów

Typowa struktura wygląda mniej więcej tak:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="[twoja_nazwa_serwera]",ServerDescription="[twój_opis_serwera]",AdminPassword="[twoje_hasło_admina]",ServerPassword="[twoje_hasło_serwera]",PublicPort=8211,PublicIP="[twój_adres_ip_serwera]")
```

:::caution Edytuj składnię ostrożnie
Palworld używa pojedynczej struktury `OptionSettings=(...)` dla wielu ustawień. Jeśli przez pomyłkę usuniesz przecinek, cudzysłów lub nawias, serwer może nie uruchomić się poprawnie.
:::

### Kiedy powinieneś go edytować

Plik `PalWorldSettings.ini` powinieneś edytować tylko wtedy, gdy:

- musisz poprawić błędne hasło serwera lub administratora
- chcesz usunąć nieprawidłowe wartości po nieudanej ręcznej zmianie
- testujesz, czy problem z uruchomieniem jest spowodowany uszkodzonym wpisem konfiguracyjnym

Po zapisaniu zmian w tym pliku powinieneś zrestartować serwer, aby nowe ustawienia zostały zastosowane.

## Rozwiązywanie problemów z błędami aktualizacji

Jednym z najczęstszych problemów serwera gier Palworld jest nieudana aktualizacja Steam.

### Błąd: `app '2394010' state is 0x6 after update job`

Ten błąd zwykle oznacza, że pliki gry nie zostały poprawnie zaktualizowane przez Steam.

### Jak naprawić ten błąd

1. Całkowicie zatrzymaj swój serwer Palworld.
2. Otwórz panel administracyjny serwera gier w interfejsie webowym ZAP-Hosting.
3. Przejdź do sekcji, gdzie dostępne są opcje reinstalacji lub naprawy.
4. Uruchom reinstalację lub weryfikację integralności plików serwera.
5. Poczekaj, aż proces zakończy się całkowicie.
6. Uruchom serwer ponownie.

:::info Dlaczego to pomaga
Weryfikacja plików lub reinstalacja wymusza ponowne pobranie brakujących lub uszkodzonych plików Steam Palworld. To najpewniejszy sposób na naprawę błędu stanu aktualizacji `0x6`.
:::

### Czy musisz edytować plik konfiguracyjny?

Zwykle nie jest wymagana żadna zmiana konfiguracji dla tego błędu.

| Problem | Wymagany plik konfiguracyjny | Dodatkowe działania |
| --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | Nie | Zatrzymaj serwer, zweryfikuj lub przeinstaluj pliki, potem uruchom serwer ponownie |

## Rozwiązywanie problemów z przekroczeniem czasu połączenia

Jeśli gracze widzą komunikat `Connection timed out`, przyczyną jest zwykle błąd uruchomienia, uszkodzona konfiguracja modów lub problem z metodą połączenia.

### Sprawdź, czy serwer faktycznie działa

Najpierw potwierdź, że serwer uruchomił się poprawnie.

Możesz to sprawdzić poprzez:

- podgląd statusu serwera w interfejsie webowym ZAP-Hosting
- otwarcie konsoli i sprawdzenie normalnego przebiegu uruchomienia
- sprawdzenie, czy serwer odpowiada na polecenia konsoli, jeśli są dostępne

Jeśli serwer wykazuje bardzo niską aktywność i nie odpowiada normalnie, mógł się zawiesić podczas startu.

### Przejrzyj ostatnie zmiany w konfiguracji

Jeśli edytowałeś `PalWorldSettings.ini` tuż przed pojawieniem się problemu, otwórz plik ponownie w `Configs` i sprawdź:

- brakujące przecinki
- uszkodzone cudzysłowy
- zduplikowane wartości
- nieprawidłowe adresy IP lub hasła

Przykładowe wpisy do sprawdzenia:

```ini
ServerName="[twoja_nazwa_serwera]"
ServerPassword="[twoje_hasło_serwera]"
AdminPassword="[twoje_hasło_admina]"
PublicPort=8211
PublicIP="[twój_adres_ip_serwera]"
```

Jeśli nie jesteś pewien, czy problem powoduje konfiguracja, cofnij ostatnie zmiany i zrestartuj serwer.

### Sprawdź problemy z modami lub UE4SS

Jeśli Palworld właśnie otrzymał aktualizację, a Ty korzystasz z modów lub `UE4SS`, serwer może być niekompatybilny.

W takim przypadku powinieneś:

1. Zatrzymać serwer.
2. Wykonać kopię zapasową, jeśli jest dostępna w zarządzaniu produktem.
3. Usunąć lub zaktualizować zainstalowane mody.
4. Uruchomić serwer ponownie i przetestować połączenie.

:::caution Kompatybilność modów po aktualizacjach
Aktualizacje Steam Palworld mogą łamać modyfikacje po stronie serwera. Jeśli problem pojawił się zaraz po aktualizacji, mody są jednym z pierwszych elementów do sprawdzenia.
:::

### Użyj bezpośredniego IP zamiast listy ostatnich serwerów

Klienci Palworld mogą mieć problemy z poprawnym połączeniem przez listę `Recent Servers` w grze.

Zamiast tego połącz się bezpośrednio, używając adresu IP serwera i portu.

Użyj formatu:

```text
[twój_adres_ip_serwera]:8211
```

Zamień `[twój_adres_ip_serwera]` na faktyczny adres IP Twojego serwera gier.

### Problemy ze światem związane z gildią

Timeout może też wystąpić w niektórych sytuacjach stanu świata, np. gdy członek gildii opuszcza ją, a inni członkowie są offline.

Możliwe rozwiązania to:

- ponowne dołączenie dotkniętego gracza do gildii
- restart świata
- przywrócenie ze kopii zapasowej, jeśli świat pozostaje nieużywalny

:::danger Ryzyko uszkodzenia danych świata
Jeśli podejrzewasz uszkodzenie świata lub zapisu, unikaj powtarzających się ręcznych zmian bez kopii zapasowej. Zrób lub przywróć kopię zapasową przed wykonaniem destrukcyjnych zmian.
:::

## Rozwiązywanie problemów z połączeniem Steam

Problemy z połączeniem do Steam mogą uniemożliwić aktualizację lub dostępność Twojego serwera Palworld.

### Błąd: `Connecting anonymously to Steam Public...Retrying`

Ten komunikat zwykle oznacza tymczasowy problem z usługą Steam, a nie uszkodzoną konfigurację Palworld.

### Co powinieneś zrobić

- poczekaj 5 do 10 minut i spróbuj ponownie
- sprawdź, czy Steam nie przechodzi konserwacji lub awarii
- unikaj wielokrotnych restartów podczas tymczasowej awarii Steam

Konserwacje Steam często odbywają się we wtorki, więc krótkie przerwy są możliwe.

### Automatyczne aktualizacje podczas awarii Steam

Jeśli Twój serwer ciągle próbuje się aktualizować podczas awarii Steam, może pozostać niedostępny do czasu przywrócenia normalnej pracy Steam.

Jeśli Twój produkt ma w panelu administracyjnym ustawienie automatycznych aktualizacji, możesz tymczasowo je wyłączyć do zakończenia awarii.

:::tip Obsługa tymczasowej awarii Steam
Jeśli serwer działał wcześniej i nagle pojawiają się próby połączenia z Steam, często najlepiej jest chwilę poczekać zamiast od razu zmieniać pliki konfiguracyjne.
:::

### Czy musisz edytować plik konfiguracyjny?

Zwykle nie jest wymagana żadna zmiana konfiguracji dla tego problemu.

| Problem | Wymagany plik konfiguracyjny | Dodatkowe działania |
| --- | --- | --- |
| `Connecting anonymously to Steam Public...Retrying` | Nie | Poczekaj, sprawdź status Steam, opcjonalnie tymczasowo wyłącz automatyczne aktualizacje |

## Rozwiązywanie problemów z niezgodnością wersji

Jeśli pojawia się komunikat, że mecz działa na niekompatybilnej wersji gry, oznacza to, że wersja serwera i klienta nie pasują do siebie.

### Jak to naprawić

1. Zrestartuj serwer Palworld.
2. Poczekaj, aż serwer zakończy uruchamianie.
3. Zaktualizuj lokalnego klienta Palworld przez Steam, jeśli to konieczne.
4. Spróbuj ponownie się połączyć.

Jeśli serwer nadal zgłasza niekompatybilną wersję, aktualizacja mogła nie zostać poprawnie zastosowana. W takim przypadku powtórz proces weryfikacji lub reinstalacji plików opisany wcześniej.

### Sprawdź ustawienia serwera po aktualizacji

Niezgodność wersji zwykle nie jest spowodowana przez `PalWorldSettings.ini`, ale jeśli serwer nie działa po aktualizacji, warto potwierdzić, że plik konfiguracyjny jest poprawny i niezmieniony.

## Zrozumienie normalnych komunikatów startowych Steam

Niektóre komunikaty startowe wyglądają na krytyczne, choć są oczekiwanym zachowaniem.

### Komunikat: `steamclient.so: cannot open shared object file: No such file or directory`

Ten komunikat jest często zgłaszany podczas uruchamiania i zwykle jest nieszkodliwy dla serwerów dedykowanych Palworld w tym kontekście.

Zwykle nie musisz edytować żadnego pliku ani uruchamiać dodatkowych poleceń tylko z powodu tego komunikatu.

:::note Bezpieczne do zignorowania w większości przypadków
Jeśli serwer uruchamia się normalnie i gracze mogą się połączyć, ten komunikat biblioteki Steam można zwykle zignorować.
:::

## Referencja konfiguracji

Poniższa tabela podsumowuje najważniejsze kontrole podczas rozwiązywania problemów z Palworld.

| Problem | Plik do sprawdzenia | Ścieżka w plikach serwera | Wymagane ręczne zmiany | Wymagany restart |
| --- | --- | --- | --- | --- |
| Błąd aktualizacji `0x6` | Zwykle brak | Nie dotyczy | Nie | Tak |
| Timeout po edycji konfiguracji | `PalWorldSettings.ini` | `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` | Tak, sprawdź wartości `OptionSettings` | Tak |
| Timeout po aktualizacji modów | Pliki modów, nie standardowa konfiguracja | Różne | Usuń lub zaktualizuj niekompatybilne mody | Tak |
| Pętla ponawiania Steam | Zwykle brak | Nie dotyczy | Nie | Czasem, ale najpierw zalecane czekanie |
| Niekompatybilna wersja gry | Zwykle brak | Nie dotyczy | Nie | Tak |
| Ostrzeżenie `steamclient.so` | Brak | Nie dotyczy | Nie | Nie, jeśli serwer działa normalnie |

## Zalecana kolejność rozwiązywania problemów

Jeśli nie wiesz, od czego zacząć, postępuj według tej kolejności:

1. Potwierdź, że serwer jest online.
2. Spróbuj połączyć się bezpośrednio przez IP zamiast przez `Recent Servers`.
3. Sprawdź, czy Palworld lub Steam miały ostatnio aktualizację.
4. Usuń lub zaktualizuj mody, jeśli ich używasz.
5. Przejrzyj `PalWorldSettings.ini` w `Configs` pod kątem błędów składni.
6. Zrestartuj serwer.
7. Zweryfikuj lub przeinstaluj pliki gry, jeśli problemy z aktualizacją się powtarzają.

Takie podejście pozwoli wyeliminować najczęstsze przyczyny bez niepotrzebnych zmian.

## Podsumowanie

Gratulacje, pomyślnie rozwiązałeś typowe problemy z serwerem Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂