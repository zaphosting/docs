---
id: subnautica-2-mods
title: "Subnautica 2: Instalacja Modów"
description: "Dowiedz się, jak zainstalować mody do Subnautica 2 na swoim serwerze gier, dodając mody Lua lub C++ do odpowiedniego folderu, aby Twój serwer Subnautica automatycznie je ładował przy starcie. -> Dowiedz się więcej teraz"
sidebar_label: "Instalacja Modów"
services:
 - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Mody pozwalają Ci dostosować i wzbogacić doświadczenie na serwerze gier Subnautica 2, dodając nowe funkcje rozgrywki, ulepszając mechaniki lub wprowadzając świeże treści. W tym poradniku pokażemy, jak zainstalować mody do Subnautica 2 na Twoim serwerze gier ZAP-Hosting, przesyłając obsługiwane mody Lua lub C++ do właściwego folderu, aby były automatycznie ładowane przy starcie serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Przygotowanie

Zanim zaczniesz, potrzebujesz dostępu do plików swojego serwera gier Subnautica 2 przez panel główny ZAP-Hosting lub inną dostępną metodę zarządzania plikami.

:::info Wymagany Typ Modu
Używaj tylko modów Lua lub C++ zaprojektowanych dla Subnautica 2. Jeśli mod jest przeznaczony dla innej gry, np. Subnautica 1 lub Subnautica Below Zero, nie można zakładać kompatybilności.
:::

:::note Źródła Pobierania Modów
Mody do Subnautica 2 można na przykład pobrać z platform społecznościowych, takich jak [Nexus Mods](https://www.nexusmods.com/games/subnautica2). Ponieważ strony z modami mogą się zmieniać, zawsze sprawdzaj opis i instrukcje instalacji przed przesłaniem plików.
:::

## Pobierz Kompatybilne Mody

Najpierw pobierz mody, które chcesz użyć na swoim serwerze. Upewnij się, że mod jest przeznaczony specjalnie dla **Subnautica 2** i sprawdź, czy autor podaje dodatkowe wymagania.

### Sprawdź Zawartość Modu

Po pobraniu archiwum z modem rozpakuj je na swoim komputerze i przejrzyj zawarte pliki.

Typowe elementy do sprawdzenia:

- pliki skryptów Lua
- pliki modów C++
- struktura folderów dostarczona przez autora moda
- plik `README`, notatka instalacyjna lub lista zależności

:::caution Sprawdź Kompatybilność
Nie wszystkie mody do gier są kompatybilne z serwerem. Niektóre mody są przeznaczone tylko dla klienta i mogą nie działać na dedykowanym serwerze gier Subnautica 2. Jeśli autor moda nie wspomina o wsparciu dla serwera, testuj go ostrożnie przed użyciem na produkcji.
:::

## Uzyskaj Dostęp do Plików Serwera Gier

Następnie otwórz system plików swojego serwera gier Subnautica 2 i znajdź główny katalog serwera.

Jeśli korzystasz z panelu głównego ZAP-Hosting, otwórz menedżer plików dla swojego serwera gier i przejdź do katalogu głównego instalacji serwera.

### Znajdź Folder Mods

W głównym katalogu serwera gier znajdź folder `mods`.

Docelowa ścieżka instalacji to:

```text
[main_gameserver_directory]/mods
```

Zamień `[main_gameserver_directory]` na bazowy katalog plików Twojego serwera Subnautica 2.

:::info Automatyczne Ładowanie Modów
Serwer podczas uruchamiania sprawdza folder `mods`. Jeśli poprawnie umieścisz tam obsługiwany mod Lua lub C++, zostanie on automatycznie załadowany przy następnym starcie serwera.
:::

## Prześlij i Zainstaluj Mody

Gdy masz już odpowiednie pliki modów i otwarty folder `mods`, możesz przesłać zawartość moda.

### Skopiuj Pliki Modu

Prześlij lub przenieś rozpakowane pliki modów Lua lub C++ do folderu `mods` w głównym katalogu serwera gier.

W zależności od moda może to oznaczać:

- przesłanie pojedynczego pliku bezpośrednio do `mods`
- przesłanie całego folderu moda do `mods`
- zachowanie dokładnej struktury folderów dostarczonej przez autora moda

### Zachowaj Oryginalną Strukturę

Jeśli pobrane archiwum zawiera już folder moda, nie zmieniaj układu plików wewnątrz, chyba że autor wyraźnie to zaleca.

| Element | Co zrobić |
| --- | --- |
| Pojedynczy plik Lua | Prześlij do folderu `mods` |
| Pojedynczy plik C++ | Prześlij do folderu `mods` |
| Mod w folderze | Prześlij cały folder do `mods` |
| Plik archiwum np. `.zip` | Najpierw rozpakuj, potem prześlij zawartość jeśli wymagane |

:::caution Nie Przesyłaj Spakowanych Archiwów, Jeśli Nie Są Wspierane
Jeśli prześlesz tylko plik `.zip` lub inne archiwum bez rozpakowania, serwer może nie wykryć moda. Jeśli autor moda nie podaje inaczej, przesyłaj rozpakowane pliki lub foldery.
:::

## Uruchom Serwer Ponownie

Po przesłaniu modów zrestartuj swój serwer gier Subnautica 2.

Jest to konieczne, ponieważ serwer ładuje mody podczas startu. Jeśli serwer już działa, nowo przesłane pliki zwykle nie zostaną zastosowane do następnego uruchomienia.

### Potwierdź Załadowanie Modu

Po restarcie sprawdź, czy mod jest aktywny w grze lub przez dostępne logi i wyjścia serwera.

Potwierdzenie może obejmować:

- zmienione zachowanie rozgrywki
- nowe komendy lub funkcje
- widoczne wpisy w logach od moda
- pomyślne uruchomienie serwera bez błędów

:::tip Instaluj Mody Po Kolei
Jeśli chcesz używać wielu modów, instaluj i testuj je pojedynczo. Ułatwia to identyfikację problematycznego moda, jeśli serwer przestanie się poprawnie uruchamiać.
:::

## Rozwiązywanie Problemów

Jeśli Twoje mody do Subnautica 2 nie działają, sprawdź kilka typowych przyczyn.

### Typowe Problemy

| Problem | Możliwa przyczyna | Rozwiązanie |
| --- | --- | --- |
| Mod się nie ładuje | Pliki przesłane do złego katalogu | Upewnij się, że pliki są w folderze `mods` w głównym katalogu serwera gier |
| Serwer startuje, ale mod nie działa | Mod jest tylko po stronie klienta lub niekompatybilny | Sprawdź stronę moda i potwierdź wsparcie dla serwera dedykowanego |
| Serwer nie uruchamia się | Uszkodzone pliki moda lub niezgodność wersji | Usuń ostatnio zainstalowany mod i zrestartuj serwer |
| Pliki modów są, ale ignorowane | Przesłano archiwum zamiast rozpakowanych plików | Rozpakuj pobrane pliki i prześlij faktyczne pliki moda |
| Konflikt między modami | Dwa mody modyfikują te same elementy | Testuj mody osobno i zostaw tylko kompatybilne kombinacje |

### Usuń Problemowy Mod

Jeśli nowo zainstalowany mod powoduje problemy, usuń odpowiadający mu plik lub folder z katalogu `mods` i ponownie zrestartuj serwer.

```text
[main_gameserver_directory]/mods
```

:::danger Korzystaj Tylko z Zaufanych Źródeł Modów
Pobieraj mody tylko z zaufanych źródeł. Pliki od osób trzecich mogą zawierać uszkodzone, przestarzałe lub złośliwe treści. Dokładnie sprawdzaj stronę moda i unikaj nieznanych pobrań bez jasnych informacji o instalacji i kompatybilności.
:::

## Najlepsze Praktyki

Aby utrzymać stabilność serwera, zarządzaj modami ostrożnie i nie instaluj wielu naraz.

### Zalecany Proces

1. Pobierz jeden kompatybilny mod do Subnautica 2.
2. Rozpakuj pliki lokalnie.
3. Prześlij pliki lub folder do katalogu `mods` na serwerze.
4. Zrestartuj serwer.
5. Przetestuj działanie.
6. Powtórz dla kolejnego moda.

### Zachowaj Lokalną Kopię Zapasową

Przed zmianą aktywnego zestawu modów zachowaj kopię zapasową:

- aktualnych plików modów
- powiązanych plików konfiguracyjnych
- listy zainstalowanych modów i ich wersji

To pozwoli szybko przywrócić działającą konfigurację, jeśli nowy mod spowoduje problemy.

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś mody na swoim serwerze gier Subnautica 2. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂