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
Masz Linux VPS i chcesz zainstalować na nim Hytale? Trafiłeś idealnie. W tym poradniku krok po kroku pokażemy Ci, jak zainstalować ten serwer na Twoim Linuxowym VPS.

<InlineVoucher />

## Przygotowanie

Aby uruchomić serwer Hytale, Twój system musi spełniać kilka podstawowych wymagań. Serwer działa na Javie 25 i wymaga minimum 4 GB pamięci RAM. Obsługiwane są architektury x64 oraz arm64. Rzeczywiste zużycie zasobów zależy od liczby graczy, odległości renderowania i aktywności świata, więc na większe serwery mogą być potrzebne dodatkowe zasoby.

Zanim zaczniesz, upewnij się, że masz zainstalowaną Javę 25. Sprawdź to poleceniem:

```
java --version
```

Jeśli Java nie jest jeszcze zainstalowana, skorzystaj z naszego dedykowanego [poradnika Instalacja Java](vserver-linux-java) dla serwerów Linux. Ten poradnik pokaże Ci, jak poprawnie zainstalować i skonfigurować Javę w Twoim środowisku.



## Instalacja

Zacznij od stworzenia dedykowanego katalogu dla serwera Hytale. Dzięki temu wszystkie pliki serwera będą uporządkowane w jednym miejscu.

```
sudo mkdir -p /opt/hytale
sudo chown -R $(whoami):$(whoami) /opt/hytale
cd /opt/hytale
```

Serwer wymaga dwóch głównych komponentów: samej aplikacji serwera oraz zasobów gry. Pliki te można pobrać za pomocą Hytale command line downloadera, który jest stworzony do wdrożeń serwerowych i ułatwia aktualizacje.

CLI downloader to wygodny sposób na pobieranie i aktualizowanie plików serwera Hytale. Po pobraniu archiwum downloadera, rozpakuj je do tymczasowego katalogu. W środku znajdziesz plik QUICKSTART.md, który opisuje podstawowe użycie narzędzia.

Uruchom downloader z linii poleceń i postępuj zgodnie z instrukcjami, aby pobrać najnowszą wersję serwera. Po zakończeniu skopiuj pobrane pliki serwera oraz archiwum zasobów do katalogu serwera. Po tym kroku katalog powinien zawierać plik JAR serwera oraz archiwum zasobów, np. Assets.zip.

| **Polecenie**                                 | **Opis**                             |
| :-------------------------------------------- | :---------------------------------- |
| `./hytale-downloader`                         | Pobierz najnowszą wersję            |
| `./hytale-downloader -print-version`          | Pokaż wersję gry bez pobierania     |
| `./hytale-downloader -version`                | Pokaż wersję hytale-downloadera     |
| `./hytale-downloader -check-update`           | Sprawdź aktualizacje downloadera    |
| `./hytale-downloader -download-path game.zip` | Pobierz do konkretnego pliku         |
| `./hytale-downloader -patchline pre-release`  | Pobierz z kanału pre-release         |
| `./hytale-downloader -skip-update-check`      | Pomiń automatyczne sprawdzanie aktualizacji |



## Konfiguracja

### Uruchamianie serwera

Serwer uruchamiasz, wywołując plik JAR i podając ścieżkę do archiwum zasobów. Dostosuj ścieżkę, jeśli Twoje zasoby są w innym miejscu.

```
java -jar HytaleServer.jar --assets /opt/hytale/Assets.zip --bind 0.0.0.0:5520
```

### Autoryzacja

Przy pierwszym uruchomieniu serwer musi zostać uwierzytelniony, zanim gracze będą mogli się połączyć. Robi się to bezpośrednio przez konsolę serwera, korzystając z logowania opartego na urządzeniu. Postępuj zgodnie z instrukcjami wyświetlanymi w konsoli, aby zakończyć autoryzację.

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

Po autoryzacji Twój serwer może przyjmować połączenia od graczy.



### Konfiguracja zapory sieciowej

Domyślnie serwer nasłuchuje na UDP port 5520 i wiąże się ze wszystkimi dostępnymi interfejsami. Możesz zmienić adres i port, jeśli chcesz. Komunikacja serwera odbywa się przez UDP z użyciem QUIC. Upewnij się, że Twoja zapora sieciowa pozwala na przychodzący ruch UDP na wybranym porcie, korzystając z Iptables lub UFW.

```
sudo iptables -A INPUT -p udp --dport 5520 -j ACCEPT
sudo ufw allow 5520/udp
```



## Wskazówki dotyczące wydajności

Odległość renderowania (view distance) to jeden z najważniejszych czynników wpływających na zużycie pamięci. Wyższe wartości zwiększają użycie RAM, bo więcej danych świata musi być aktywnych jednocześnie.

Dla większości konfiguracji maksymalna odległość renderowania 12 chunków (384 bloków) to dobry balans między wydajnością serwera a komfortem gry.

Dla porównania, serwery Minecrafta domyślnie mają view distance 10 chunków (160 bloków). Domyślne 384 bloki w Hytale to mniej więcej 24 chunków Minecrafta, co tłumaczy wyższe wymagania pamięciowe. Ta wartość powinna być dostosowana do przewidywanej liczby graczy i dostępnych zasobów systemowych.



## Podsumowanie

Gratulacje, masz teraz działający serwer Hytale na swoim systemie. Możesz dalej rozbudowywać konfigurację, instalując mody, dostosowując ustawienia świata i optymalizując parametry wydajności pod swoją społeczność graczy. Regularne monitorowanie zużycia zasobów pomoże utrzymać stabilność działania serwera wraz z jego rozwojem.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />