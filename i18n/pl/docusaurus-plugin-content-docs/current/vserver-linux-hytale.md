---
id: vserver-linux-hytale
title: "VPS: Konfiguracja serwera dedykowanego Hytale"
description: "Dowiedz się, jak skonfigurować serwer dedykowany Hytale na swoim Linux VPS, aby zarządzać rozgrywką bez problemów → Sprawdź teraz"
sidebar_label: Hytale
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie
Masz Linux VPS i chcesz zainstalować na nim Hytale? Trafiłeś idealnie. W tym poradniku krok po kroku wyjaśnimy, jak zainstalować ten serwer na Twoim Linuxowym VPS.

<InlineVoucher />

## Przygotowanie

Aby uruchomić serwer Hytale, Twój system musi spełniać kilka podstawowych wymagań. Serwer działa na Javie 25 i wymaga co najmniej 4 GB pamięci RAM. Obsługiwane są architektury x64 oraz arm64. Rzeczywiste zużycie zasobów zależy od liczby graczy, odległości renderowania i aktywności świata, więc na większe serwery mogą być potrzebne dodatkowe zasoby.

Przed kontynuacją upewnij się, że Java 25 jest zainstalowana na Twoim systemie. Możesz to sprawdzić poleceniem:

```
java --version
```

Jeśli Java nie jest jeszcze zainstalowana, skorzystaj z naszego dedykowanego [poradnika Instalacja Java](vserver-linux-java) dla serwerów Linux. Ten poradnik pokaże Ci, jak poprawnie zainstalować i skonfigurować Javę w Twoim środowisku.



## Instalacja

Zacznij od utworzenia dedykowanego katalogu dla serwera Hytale. Dzięki temu wszystkie pliki serwera będą uporządkowane w jednym miejscu.

```
sudo mkdir -p /opt/hytale
sudo chown -R $(whoami):$(whoami) /opt/hytale
cd /opt/hytale
```

Serwer wymaga dwóch głównych komponentów: samej aplikacji serwera oraz zasobów gry. Pliki te można pobrać za pomocą Hytale command line downloadera, który jest przeznaczony do wdrożeń serwerowych i ułatwia aktualizacje.

CLI downloader zapewnia uporządkowany sposób pobierania i aktualizacji plików serwera Hytale. Po pobraniu archiwum downloadera, rozpakuj je do tymczasowego katalogu. W archiwum znajdziesz plik QUICKSTART.md, który opisuje podstawowe użycie narzędzia.

Uruchom downloader z linii poleceń i postępuj zgodnie z instrukcjami, aby pobrać najnowszą wersję serwera. Po zakończeniu procesu skopiuj pobrane pliki serwera oraz archiwum zasobów do katalogu serwera. Po tym kroku katalog powinien zawierać plik JAR serwera oraz archiwum zasobów, np. Assets.zip.

| **Polecenie**                                   | **Opis**                              |
| :-------------------------------------------- | :----------------------------------- |
| `./hytale-downloader`                         | Pobierz najnowszą wersję             |
| `./hytale-downloader -print-version`          | Pokaż wersję gry bez pobierania      |
| `./hytale-downloader -version`                | Pokaż wersję hytale-downloadera      |
| `./hytale-downloader -check-update`           | Sprawdź aktualizacje hytale-downloadera |
| `./hytale-downloader -download-path game.zip` | Pobierz do konkretnego pliku          |
| `./hytale-downloader -patchline pre-release`  | Pobierz z kanału pre-release          |
| `./hytale-downloader -skip-update-check`      | Pomiń automatyczne sprawdzanie aktualizacji |



## Konfiguracja

### Uruchamianie serwera

Serwer uruchamia się przez odpalenie pliku JAR i wskazanie ścieżki do archiwum zasobów. Dostosuj ścieżkę, jeśli Twoje zasoby są w innym miejscu.

```
java -jar HytaleServer.jar --assets /opt/hytale/Assets.zip --bind 0.0.0.0:5520
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

Po uwierzytelnieniu Twój serwer może przyjmować połączenia graczy.



### Konfiguracja zapory sieciowej

Domyślnie serwer nasłuchuje na UDP port 5520 i wiąże się ze wszystkimi dostępnymi interfejsami. Możesz zmienić adres i port, jeśli potrzebujesz. Serwer komunikuje się przez UDP używając protokołu QUIC. Upewnij się, że Twoja zapora sieciowa pozwala na przychodzący ruch UDP na wybranym porcie, korzystając z Iptables lub UFW.

```
sudo iptables -A INPUT -p udp --dport 5520 -j ACCEPT
sudo ufw allow 5520/udp
```



## Wskazówki dotyczące wydajności

Odległość renderowania to jeden z najważniejszych czynników wpływających na zużycie pamięci. Wyższe wartości zwiększają użycie RAM, ponieważ więcej danych świata musi być aktywnych jednocześnie.

Dla większości konfiguracji maksymalna odległość renderowania 12 chunków (384 bloki) zapewnia dobry balans między wydajnością serwera a komfortem gry.

Dla porównania, serwery Minecrafta domyślnie używają odległości renderowania 10 chunków (160 bloków). Domyślne 384 bloki w Hytale to mniej więcej 24 chunków Minecrafta, co tłumaczy wyższe wymagania pamięciowe. Ta wartość powinna być dostosowana do przewidywanej liczby graczy i dostępnych zasobów systemowych.



## Podsumowanie

Gratulacje, masz teraz działający serwer Hytale na swoim systemie. Od tego momentu możesz rozbudować konfigurację, instalując mody, dostosowując ustawienia świata i optymalizując parametry wydajności, aby dopasować je do swojej społeczności graczy. Zalecamy regularne monitorowanie zużycia zasobów, aby zapewnić stabilną pracę serwera wraz z jego rozwojem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />