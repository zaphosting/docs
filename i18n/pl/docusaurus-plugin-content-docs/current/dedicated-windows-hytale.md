---
id: dedicated-windows-hytale
title: "Serwer dedykowany: Konfiguracja serwera Hytale na serwerze dedykowanym"
description: "Dowiedz się, jak skonfigurować serwer dedykowany Hytale na swoim serwerze dedykowanym z Windows, aby zarządzać rozgrywką bez problemów → Sprawdź teraz"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz serwer dedykowany i chcesz postawić na nim własny serwer gier Hytale? W tym poradniku krok po kroku wyjaśniamy, jak zainstalować i uruchomić dedykowany serwer Hytale na systemie Windows.

## Przygotowanie

Aby uruchomić serwer Hytale, Twój system musi spełniać kilka podstawowych wymagań. Serwer działa na Javie 25 i wymaga co najmniej 4 GB pamięci RAM. Obsługiwane są architektury x64 oraz arm64. Rzeczywiste zużycie zasobów zależy od liczby graczy, odległości renderowania i aktywności świata, więc na większe serwery mogą być potrzebne dodatkowe zasoby.

Przed kontynuacją upewnij się, że Java 25 jest zainstalowana na Twoim systemie Windows. Możesz to sprawdzić, otwierając wiersz poleceń i wpisując:

```
java --version
```

Jeśli Java nie jest jeszcze zainstalowana, skorzystaj z naszego dedykowanego poradnika Instalacja Java na serwerach Windows. Ten poradnik pokaże Ci, jak poprawnie zainstalować i skonfigurować Javę w Twoim środowisku.



## Instalacja

Zacznij od utworzenia dedykowanego katalogu dla serwera Hytale. Dzięki temu wszystkie pliki serwera będą uporządkowane w jednym miejscu. Na przykład:

```
C:\Hytale
```

Serwer wymaga dwóch głównych komponentów: samej aplikacji serwera oraz zasobów gry. Pliki te można pobrać za pomocą narzędzia wiersza poleceń Hytale downloader, które jest przeznaczone do wdrożeń serwerowych i ułatwia aktualizacje.

CLI downloader zapewnia uporządkowany sposób pobierania i aktualizowania plików serwera Hytale. Po pobraniu archiwum downloadera, rozpakuj je do tymczasowego katalogu. W archiwum znajdziesz plik QUICKSTART.md, który opisuje podstawowe użycie narzędzia.

Uruchom downloader z wiersza poleceń i postępuj zgodnie z instrukcjami, aby pobrać najnowszą wersję serwera. Po zakończeniu procesu skopiuj pobrane pliki serwera oraz archiwum zasobów do swojego katalogu serwera. Po tym kroku katalog powinien zawierać plik JAR serwera oraz archiwum zasobów, np. Assets.zip.

| **Polecenie**                                 | **Opis**                             |
| :-------------------------------------------- | :---------------------------------- |
| `./hytale-downloader`                         | Pobierz najnowszą wersję            |
| `./hytale-downloader -print-version`          | Pokaż wersję gry bez pobierania     |
| `./hytale-downloader -version`                | Pokaż wersję hytale-downloader      |
| `./hytale-downloader -check-update`           | Sprawdź aktualizacje hytale-downloader |
| `./hytale-downloader -download-path game.zip` | Pobierz do określonego pliku        |
| `./hytale-downloader -patchline pre-release`  | Pobierz z kanału pre-release         |
| `./hytale-downloader -skip-update-check`      | Pomiń automatyczne sprawdzanie aktualizacji |



## Konfiguracja

### Uruchamianie serwera

Serwer uruchamia się przez odpalenie pliku JAR i wskazanie ścieżki do archiwum zasobów. Dostosuj ścieżkę, jeśli Twoje zasoby są w innym miejscu. Otwórz wiersz poleceń w katalogu serwera i wpisz:

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
```

### Autoryzacja

Przy pierwszym uruchomieniu serwer musi zostać uwierzytelniony, zanim gracze będą mogli się połączyć. Odbywa się to bezpośrednio przez konsolę serwera za pomocą logowania na urządzeniu. Postępuj zgodnie z instrukcjami wyświetlanymi w konsoli, aby zakończyć autoryzację.

```
/auth login device
```

Wyjście będzie wyglądać tak:

```
> /auth login device
===================================================================
AUTORYZACJA URZĄDZENIA
===================================================================
Odwiedź: https://accounts.hytale.com/device
Wprowadź kod: ABCD-1234
Lub odwiedź: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
Oczekiwanie na autoryzację (wygasa za 900 sekund)...

[Użytkownik kończy autoryzację w przeglądarce]

> Autoryzacja zakończona sukcesem! Tryb: OAUTH_DEVICE
```

Po uwierzytelnieniu Twój serwer może przyjmować połączenia od graczy.



### Konfiguracja zapory sieciowej

Domyślnie serwer nasłuchuje na UDP port 5520 i wiąże się ze wszystkimi dostępnymi interfejsami. Możesz zmienić adres i port, jeśli potrzebujesz. Serwer komunikuje się przez UDP używając protokołu QUIC. Upewnij się, że Twoja zapora sieciowa pozwala na przychodzący ruch UDP na wybranym porcie, korzystając z Iptables lub UFW. W PowerShell możesz łatwo dodać regułę zapory poleceniem:

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```



## Uwagi dotyczące wydajności

Odległość renderowania to jeden z najważniejszych czynników wpływających na zużycie pamięci. Wyższe wartości zwiększają użycie RAM, ponieważ więcej danych świata musi być aktywnych jednocześnie.

Dla większości konfiguracji maksymalna odległość renderowania 12 chunków (384 bloki) zapewnia dobry balans między wydajnością serwera a komfortem gry.

Dla porównania, serwery Minecrafta domyślnie używają odległości 10 chunków (160 bloków). Domyślne 384 bloki w Hytale to mniej więcej 24 chunków Minecrafta, co tłumaczy wyższe wymagania pamięciowe. Wartość tę należy dostosować do przewidywanej liczby graczy i dostępnych zasobów systemowych.



## Podsumowanie

Gratulacje, masz teraz działający serwer Hytale na swoim systemie. Możesz rozbudować konfigurację, instalując mody, dostosowując ustawienia świata i optymalizując parametry wydajności pod swoją społeczność graczy. Zalecamy regularne monitorowanie zużycia zasobów, aby zapewnić stabilną pracę serwera wraz z jego rozwojem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂