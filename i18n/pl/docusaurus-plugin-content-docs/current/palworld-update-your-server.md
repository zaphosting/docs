---
id: palworld-update-your-server
title: "Palworld: Aktualizacja Twojego Serwera"
description: "Dowiedz się, jak zaktualizować serwer Palworld, wymusić aktualizację wersji i sprawdzić najnowszą wersję gry Palworld na ZAP-Hosting -> Dowiedz się więcej"
sidebar_label: Palworld: Aktualizacja Twojego Serwera
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Aktualizacje serwera Palworld są niezbędne, aby Twój serwer był kompatybilny z najnowszą wersją gry Palworld i aktualizacją klienta. W tym poradniku nauczysz się, jak zaktualizować serwer Palworld na ZAP-Hosting, gdzie sprawdzić odpowiednie ustawienia oraz co zrobić, gdy aktualizacja nie zostanie poprawnie zastosowana.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, upewnij się, że masz dostęp do swojego serwera gier Palworld w panelu ZAP-Hosting oraz uprawnienia do restartu lub reinstalacji serwera, jeśli zajdzie taka potrzeba.

:::info Wymagany dostęp do serwera
Potrzebujesz dostępu do administracji serwera gier, w tym do zakładek **Configs**, **Console** oraz kontroli zasilania serwera w panelu ZAP-Hosting.
:::

:::note O plikach konfiguracyjnych
Do aktualizacji Palworld zazwyczaj nie musisz edytować plików konfiguracyjnych gry, aby zainstalować nową wersję. Proces aktualizacji jest zwykle obsługiwany automatycznie przez instalację serwera. Mimo to warto sprawdzić ustawienia serwera w panelu, jeśli zarządzasz aktualizacjami ręcznie.
:::

## Jak działają aktualizacje serwera Palworld na ZAP-Hosting

Serwery dedykowane Palworld na platformach hostingowych zwykle aktualizują się podczas uruchamiania, gdy instalacja serwera sprawdza dostępność nowszej wersji. Na podstawie dostępnych informacji serwery ZAP-Hosting zazwyczaj wykonują tę kontrolę automatycznie przy starcie lub restarcie serwera.

Jeśli Twój serwer jest skonfigurowany do automatycznych aktualizacji, zwykle wystarczy go zrestartować po wydaniu nowej wersji Palworld. Jeśli automatyczne aktualizacje zostały wyłączone w ustawieniach usługi, musisz ręcznie zrestartować serwer po każdej łatce, aby uruchomić sprawdzenie aktualizacji.

:::caution Dostępność automatycznych aktualizacji
Dokładne nazewnictwo i dostępność opcji automatycznych aktualizacji może się różnić w zależności od aktualnego interfejsu serwera gier ZAP-Hosting i konfiguracji produktu. Jeśli nie widzisz przełącznika związanego z aktualizacją w ustawieniach serwera, nie zakładaj, że opcja jest na stałe niedostępna; może się ona różnić w zależności od wersji produktu lub być obsługiwana automatycznie w tle.
:::

## Sprawdź odpowiednie ustawienia serwera

Na początek otwórz swój serwer Palworld w panelu ZAP-Hosting i przejrzyj dostępne ustawienia związane z aktualizacjami i zachowaniem przy starcie.

### Otwórz panel administracyjny serwera

1. Zaloguj się do panelu ZAP-Hosting.
2. Otwórz swój serwer gier **Palworld**.
3. Sprawdź dostępne sekcje, takie jak **Configs**, **Console** oraz kontrolki zasilania serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Sprawdź, czy trzeba edytować plik konfiguracyjny

W procesie aktualizacji Palworld nie ma potwierdzonego pliku konfiguracyjnego, który ręcznie zmienia wersję gry w standardowej pracy serwera. Pliki konfiguracyjne Palworld w zakładce **Configs** służą głównie do ustawień serwera, takich jak zasady rozgrywki, a nie do pobierania nowej wersji serwera.

Najczęściej używany plik ustawień Palworld to:

| Plik | Typowe zastosowanie | Lokalizacja |
| --- | --- | --- |
| `PalWorldSettings.ini` | Ustawienia rozgrywki i zachowania serwera | Administracja serwera gier w zakładce **Configs** |

:::note Brak ręcznego wpisu wersji
Nie ma potwierdzonego klucza w `PalWorldSettings.ini`, który wymuszałby aktualizację konkretnej wersji serwera Palworld w standardowej konfiguracji ZAP-Hosting. Jeśli chcesz tylko zaktualizować oprogramowanie serwera, edycja `PalWorldSettings.ini` zwykle nie jest wymagana.
:::

## Aktualizacja serwera

Po potwierdzeniu dostępu do serwera i sprawdzeniu ustawień możesz wywołać proces aktualizacji.

### Zrestartuj serwer, aby wymusić sprawdzenie aktualizacji

Podstawową metodą jest restart serwera. Na wielu hostowanych serwerach Palworld uruchomienie serwera wywołuje sprawdzenie dostępności aktualizacji gry.

1. Zatrzymaj lub zrestartuj serwer Palworld z panelu ZAP-Hosting.
2. Poczekaj, aż serwer całkowicie się wyłączy.
3. Uruchom serwer ponownie.
4. Poczekaj kilka minut na zakończenie procesu uruchamiania i aktualizacji.

Jeśli automatyczne aktualizacje ZAP-Hosting są aktywne dla Twojej usługi, ten restart powinien wymusić pobranie i zastosowanie najnowszej dostępnej aktualizacji Palworld.

### Jeśli automatyczne aktualizacje są wyłączone

Jeśli Twoja usługa jest skonfigurowana bez automatycznych aktualizacji, musisz ręcznie restartować serwer po każdej wydanej łatce lub aktualizacji wersji Palworld.

Postępuj tak samo:

1. Zatrzymaj serwer.
2. Uruchom serwer ponownie.
3. Poczekaj na zakończenie uruchamiania serwera.

:::tip Najlepsza praktyka po wydaniu Palworld
Po ogłoszeniu nowej wersji lub łatki Palworld restartuj serwer w czasie niskiej aktywności graczy. Zapobiegnie to problemom z połączeniem spowodowanym niezgodnością wersji klienta i serwera.
:::

## Sprawdź, czy aktualizacja została zastosowana

Po ponownym uruchomieniu serwera powinieneś potwierdzić, że nowa wersja jest aktywna.

### Sprawdź logi konsoli

Otwórz **Console** w panelu administracyjnym serwera i przejrzyj logi startowe. Szukaj informacji, że serwer uruchomił się poprawnie i nie wystąpiły błędy aktualizacji lub weryfikacji plików.

Ponieważ dokładne linie logów mogą się różnić w zależności od wersji serwera, skup się na tym, czy serwer uruchomił się poprawnie i akceptuje połączenia klientów z najnowszą wersją gry Palworld.

### Użyj komendy `info`

Jeśli konsola serwera obsługuje tę komendę, wpisz:

```text
info
```

Ta komenda pozwala sprawdzić informacje o serwerze po uruchomieniu.

| Komenda | Cel |
| --- | --- |
| `info` | Wyświetla informacje o serwerze do weryfikacji po aktualizacji |

:::note Dostępność komend
Obsługa komend w konsoli może się różnić w zależności od implementacji serwera dedykowanego Palworld i sposobu udostępniania dostępu do konsoli przez hosta. Jeśli `info` nie zwraca przydatnych danych, użyj logów startowych i testu połączenia z aktualnym klientem gry.
:::

## Rozwiązywanie problemów z nieudaną aktualizacją

Jeśli restart nie zaktualizował serwera, skorzystaj z opcji naprawczych dostępnych w panelu ZAP-Hosting.

### Reinstalacja lub weryfikacja plików serwera

Jeśli po restarcie serwer nadal działa na starej wersji:

1. Całkowicie zatrzymaj serwer.
2. Otwórz opcję reinstalacji lub naprawy w panelu administracyjnym serwera gier ZAP-Hosting.
3. Jeśli dostępna, użyj opcji **Verify integrity** lub podobnej do sprawdzenia plików.
4. Po zakończeniu procesu uruchom serwer ponownie.

Ten proces ponownie sprawdza lub pobiera pliki serwera Palworld i może rozwiązać problemy z niekompletnymi lub nieudaną aktualizacją.

:::caution Ostrożność przy danych gry
Przed użyciem funkcji reinstalacji upewnij się, czy wybrana opcja dotyczy tylko plików gry, czy także danych świata. Jeśli panel tego nie wyjaśnia, wykonaj kopię zapasową lub skontaktuj się z supportem przed kontynuacją.
:::

### Sprawdź zgodność wersji klienta i serwera

Czasem serwer jest poprawnie zaktualizowany, ale gracze nie mogą się połączyć, bo ich lokalny klient gry ma inną wersję.

Sprawdź następujące kwestie:

| Sprawdzenie | Dlaczego to ważne |
| --- | --- |
| Serwer zrestartowany po łatce | Restart często wywołuje aktualizację |
| Zainstalowana najnowsza aktualizacja klienta | Gracze muszą mieć tę samą wersję gry |
| Brak błędów startowych w konsoli | Błędy mogą blokować zakończenie aktualizacji |
| Weryfikacja plików wykonana | Uszkodzone pliki mogą blokować aktualizacje |

## Co trzeba edytować w Configs

Ponieważ poradnik dotyczy ręcznego procesu i odnosi się do zakładki **Configs**, ważne jest wyjaśnienie zakresu:

- Pliki konfiguracyjne Palworld w **Configs** służą do ustawień serwera.
- Nie ma potwierdzonego wpisu w `PalWorldSettings.ini`, który ręcznie pobiera lub stosuje aktualizację oprogramowania serwera.
- Do normalnej aktualizacji wersji zwykle **nie trzeba** zmieniać żadnej wartości w pliku konfiguracyjnym.
- Wymagana czynność to zazwyczaj **restart serwera**, a następnie **weryfikacja plików lub reinstalacja** tylko w przypadku niepowodzenia aktualizacji.

Jeśli ZAP-Hosting w przyszłości udostępni dedykowany przełącznik aktualizacji lub parametr startowy w panelu, używaj dokładnej nazwy widocznej w interfejsie zamiast dodawać nieobsługiwane wpisy do pliku konfiguracyjnego.

:::danger Nie dodawaj niezweryfikowanych kluczy konfiguracyjnych
Nie wklejaj losowych komend aktualizacji, parametrów SteamCMD ani nieudokumentowanych kluczy do `PalWorldSettings.ini` lub innych plików w **Configs**, chyba że są one oficjalnie udokumentowane dla Twojej usługi Palworld na ZAP-Hosting. Nieobsługiwane wpisy nie zagwarantują poprawnej aktualizacji i mogą powodować problemy konfiguracyjne.
:::

## Po aktualizacji

Po pomyślnym zastosowaniu aktualizacji:

1. Upewnij się, że serwer działa normalnie.
2. Sprawdź konsolę pod kątem błędów.
3. Przetestuj połączenie z serwerem za pomocą zaktualizowanego klienta Palworld.
4. Jeśli jest dostępna, uruchom komendę `info` w konsoli.

W tym momencie Twój serwer powinien być gotowy dla graczy na najnowszej wersji.

## Podsumowanie

Gratulacje, pomyślnie zaktualizowałeś swój serwer Palworld. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂