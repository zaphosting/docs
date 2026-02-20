---
id: vserver-linux-standard-notes
title: "Instalacja Standard Notes na serwerze Linux – Zbuduj swój prywatny system notatek"
description: "Dowiedz się, jak bezpiecznie synchronizować i chronić swoje notatki na różnych urządzeniach dzięki samodzielnemu hostowaniu Standard Notes → Sprawdź teraz"
sidebar_label: Instalacja Standard Notes
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Standard Notes to open-source’owa aplikacja do notatek, która chroni Twoje dane za pomocą audytowanego szyfrowania end-to-end. Tylko Ty masz kontrolę nad kluczami deszyfrującymi. Synchronizuje zaszyfrowane notatki i pliki bezproblemowo na nieograniczoną liczbę urządzeń, zapewnia dostęp offline i aktywnie chroni Twoje treści przed dostępem z zewnątrz.

![img](https://screensaver01.zap-hosting.com/index.php/s/b6ZpyKJGny5qAon/preview)

Myślisz o samodzielnym hostowaniu tej usługi? Przeprowadzimy Cię krok po kroku przez cały proces instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

<InlineVoucher />



## Wymagania wstępne

Przed instalacją **Standard Notes** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby zapewnić płynną instalację i optymalną wydajność.

| Sprzęt    | Minimum     | Zalecenia ZAP-Hosting     |
| --------- | ----------- | ------------------------- |
| CPU       | 1 rdzeń vCPU| 4 rdzenie vCPU            |
| RAM       | 2 GB        | 4 GB                      |
| Miejsce na dysku | 5 GB  | 25 GB                     |

Oprogramowanie wymaga zainstalowania wszystkich niezbędnych zależności oraz działania na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed rozpoczęciem instalacji:

**Zależności:** `Docker (Engine 26+ i Compose)`

**System operacyjny:** Najnowsza wersja Ubuntu/Debian wspierająca Docker 26+

Sprawdź, czy wszystkie zależności są zainstalowane, a system operacyjny jest aktualny, aby uniknąć problemów z kompatybilnością podczas instalacji Standard Notes.



## Przygotowanie

Przed konfiguracją **Standard Notes** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. Te kroki zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.


### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i ma aktualizacje bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Wykonaj polecenie:

```
sudo apt update && sudo apt upgrade -y
```
Dzięki temu Twój system będzie miał najnowsze poprawki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przejść do instalacji zależności. Standard Notes będzie uruchamiany na Twoim serwerze za pomocą zestawu kontenerów Docker, więc najpierw musisz zainstalować Dockera. Wykonaj polecenia:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Pełny poradnik instalacji i korzystania z Dockera znajdziesz w naszym [poradniku Docker](dedicated-linux-docker.md).




## Instalacja
Gdy spełnisz wszystkie wymagania i przygotujesz środowisko, możesz przejść do instalacji Standard Notes.



Najpierw utwórz folder, w którym będą przechowywane wszystkie pliki konfiguracyjne i instalacyjne. Ten folder będzie Twoim katalogiem roboczym podczas instalacji.

```
mkdir standardnotes
cd standardnotes
```

Następnie utwórz plik `.env` w katalogu roboczym i wypełnij go domyślnymi wartościami z przykładowej konfiguracji projektu:
```
touch .env
curl https://raw.githubusercontent.com/standardnotes/server/main/.env.sample > .env
```

Ten plik zawiera minimalny zestaw zmiennych potrzebnych do działania. Pełną listę aktualnie używanych zmiennych znajdziesz tutaj: [docker-entrypoint.sh](https://github.com/standardnotes/server/blob/main/docker/docker-entrypoint.sh)

Otwórz plik `.env` i upewnij się, że wszystkie klucze w sekcji KEYS są poprawnie ustawione. Wygeneruj losowe wartości dla każdej wymaganej zmiennej środowiskowej za pomocą:

```
openssl rand -hex 32
```

Wklej te wartości do pliku `.env`. Standard Notes wymaga skryptu bootstrap dla LocalStack. Pobierz go do katalogu roboczego i nadaj mu prawa do wykonania:

```shell
curl https://raw.githubusercontent.com/standardnotes/server/main/docker/localstack_bootstrap.sh > localstack_bootstrap.sh
chmod +x localstack_bootstrap.sh
```

Pobierz oficjalną przykładową konfigurację i zapisz ją jako `docker-compose.yml` w swoim katalogu roboczym. Ten plik definiuje wszystkie potrzebne usługi kontenerowe dla Standard Notes.

```
curl https://raw.githubusercontent.com/standardnotes/server/main/docker-compose.example.yml > docker-compose.yml
```

Gdy wszystko jest gotowe, pobierz najnowsze obrazy i uruchom usługi w trybie odłączonym:

```
docker compose pull && docker compose up -d
```



## Konfiguracja

Domyślna konfiguracja w dostarczonym pliku `docker-compose.yml` może być dostosowana do Twoich potrzeb. Kluczowym miejscem jest usługa `server`, gdzie możesz zmienić mapowanie portów w właściwości `ports`. Pozwala to wybrać, na których portach hosta aplikacja będzie dostępna, co pomaga uniknąć konfliktów z innymi usługami lub dopasować się do preferowanej konfiguracji sieciowej.

Zabezpieczenie bazy danych to kolejny ważny krok. Domyślne hasła powinny zostać zastąpione silnymi, losowo wygenerowanymi ciągami. Możesz wygenerować bezpieczne hasło poleceniem:

```
openssl rand -hex 12  
```

Dodaj wygenerowaną wartość do pliku `.env` jako `DB_PASSWORD`. Ta sama wartość musi być ustawiona również dla `MYSQL_ROOT_PASSWORD` i `MYSQL_PASSWORD` w pliku `docker-compose.yml`, aby kontenery były zsynchronizowane.

Te zmiany konfiguracji zapewnią, że Twoja instalacja będzie nie tylko działająca, ale też bezpieczna i dopasowana do Twojego środowiska.





## Połączenie z serwerem synchronizacji

Aby założyć konto w Standard Notes, kliknij ikonę awatara w prawym dolnym rogu aplikacji. W wyświetlonym menu wybierz „Create Account”, aby rozpocząć tworzenie nowego profilu użytkownika. Podaj ważny adres e-mail oraz silne hasło.

Przed zakończeniem procesu otwórz sekcję „Advanced Options”. W polu „Sync Server” wybierz opcję „Custom” i wpisz adres IP oraz port swojego serwera w formacie IP:Port. Dzięki temu Twoje notatki nie będą synchronizowane przez domyślną usługę Standard Notes, lecz przez Twój własny serwer.

![img](https://screensaver01.zap-hosting.com/index.php/s/tpsFzSQEokP9xit/download)





## Podsumowanie i dodatkowe zasoby

Gratulacje! Udało Ci się zainstalować i skonfigurować Standard Notes na Twoim VPS/serwerze dedykowanym. Polecamy również zapoznać się z poniższymi zasobami, które mogą dostarczyć dodatkowej pomocy i wskazówek podczas konfiguracji serwera:

- [Standardnotes.com](https://standardnotes.com/) – Oficjalna strona
- [Standardnotes.com/help](https://standardnotes.com/help) – Centrum pomocy Standard Notes (dokumentacja)

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂