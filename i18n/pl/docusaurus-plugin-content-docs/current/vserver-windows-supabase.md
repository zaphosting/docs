---
id: vserver-windows-supabase
title: "VPS: Instalacja Supabase na Windows"
description: "Dowiedz się, jak zainstalować i skonfigurować Supabase – niezawodną, open-source’ową platformę Postgresa z autoryzacją i funkcjami realtime → Sprawdź teraz"
sidebar_label: Instalacja Supabase
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Supabase to open-source’owa platforma developerska Postgresa, która oferuje pełną bazę danych Postgres wraz z autoryzacją, natychmiastowymi API, funkcjami realtime oraz storage, stanowiąc tym samym open-source’ową alternatywę dla Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

<InlineVoucher />

## Wymagania wstępne

Przed instalacją **Supabase** upewnij się, że Twój hosting spełnia poniższe wymagania, aby instalacja przebiegła bezproblemowo, a wydajność była optymalna.

| Sprzęt    | Minimum      | Rekomendacja ZAP-Hosting  |
| --------- | ------------ | ------------------------- |
| CPU       | 1 rdzeń vCPU | 4 rdzenie vCPU            |
| RAM       | 4 GB         | 8 GB                      |
| Miejsce na dysku | 25 GB  | 25 GB                     |

Oprogramowanie wymaga zainstalowania wszystkich niezbędnych zależności oraz działania na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed rozpoczęciem instalacji:

**Zależności:** `Git`, `Docker (Engine i Compose)`

**System operacyjny:** Najnowsza wersja Ubuntu/Debian wspierająca Docker 2

Sprawdź, czy wszystkie zależności są zainstalowane, a system operacyjny jest odpowiedni, aby uniknąć problemów z kompatybilnością podczas instalacji Supabase.

## Przygotowanie

Przed konfiguracją **Supabase** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. Te kroki zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.

### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i ma aktualne poprawki bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Dzięki temu Twój serwer będzie zabezpieczony i gotowy do dalszych działań.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przystąpić do instalacji zależności.

#### Git
Dane Supabase będą pobierane z GitHuba, dlatego najpierw musisz mieć zainstalowany Git. Zainstaluj [Git dla Windows](https://git-scm.com/downloads/win) na swoim serwerze.

#### Docker

Supabase będzie uruchamiane w kontenerze Docker na Twoim VPS. Wymaga to wcześniejszej instalacji Dockera. Zainstaluj [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) na swoim serwerze.

Pełny poradnik instalacji i obsługi Dockera znajdziesz w naszym [poradniku Docker](vserver-windows-docker.md).

## Instalacja
Gdy spełnisz wszystkie wymagania i przygotujesz środowisko, możesz przejść do instalacji Supabase. Otwórz wiersz poleceń. Pobierz repozytorium Supabase, utwórz dedykowany katalog projektu i skopiuj do niego pliki Dockera oraz przykładowy plik środowiskowy.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

Przejdź do katalogu projektu, pobierz najnowsze obrazy kontenerów i uruchom stack w trybie odłączonym.

```
cd supabase-project
docker compose pull
docker compose up -d
```

Teraz możesz uzyskać dostęp do Supabase Studio pod adresem `http://<twoje-ip>:8000`. Zostaniesz poproszony o nazwę użytkownika i hasło. Domyślne dane to:

- Nazwa użytkownika: `supabase`
- Hasło: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Domyślne dane logowania
Twoja aplikacja działa teraz na domyślnych danych logowania. Zabezpiecz swoje usługi jak najszybciej, korzystając z instrukcji poniżej.
:::

## Konfiguracja
Nigdy nie wdrażaj aplikacji z domyślnymi lub przykładowymi wartościami. Zastąp wszystkie placeholdery silnymi, unikalnymi sekretami, sprawdź konfigurację pod kątem wymagań bezpieczeństwa i zrestartuj wszystkie usługi, aby zmiany zaczęły działać.

Wygeneruj bezpieczne klucze API zanim udostępnisz jakąkolwiek usługę. Zacznij od wyboru 40-znakowego sekretu JWT. Możesz użyć podanej wartości lub stworzyć własną. Przechowuj ten sekret lokalnie w bezpiecznym miejscu. Nie udostępniaj go i nie commituj do systemu kontroli wersji. Użyj sekretu do wygenerowania JWT, a następnie wygeneruj klucze anon i service API korzystając z formularza opisanego w dokumentacji Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Uruchom formularz dwukrotnie, aby wygenerować oba klucze. Zaktualizuj plik `./docker/.env` o:

- `ANON_KEY`: klucz anon
- `SERVICE_ROLE_KEY`: klucz serwisowy

Zaktualizuj wymagane sekrety w `./docker/.env`. Te wartości muszą być ustawione, aby wdrożenie działało poprawnie:

- `POSTGRES_PASSWORD`: hasło dla roli `postgres`
- `JWT_SECRET`: używany przez PostgREST i GoTrue
- `SITE_URL`: podstawowy URL Twojej strony
- `SMTP_*`: dane serwera pocztowego
- `POOLER_TENANT_ID`: tenant id używany przez Supavisor pooler

Zabezpiecz panel główny nowymi danymi przed użyciem produkcyjnym. Edytuj `./docker/.env`:

- `DASHBOARD_USERNAME`: użytkownik panelu
- `DASHBOARD_PASSWORD`: hasło panelu

Możesz zdefiniować wielu użytkowników panelu w `./docker/volumes/api/kong.yml`:

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

Aby włączyć wszystkie funkcje panelu poza `localhost`, ustaw `SUPABASE_PUBLIC_URL` w `./docker/.env` na URL lub IP, pod którym będziesz się łączyć z panelem.

Zastosuj zmiany konfiguracji, restartując stack:

```
docker compose down
docker compose up -d
```

## Podsumowanie i dodatkowe zasoby

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś Supabase na swoim VPS. Polecamy też rzucić okiem na poniższe materiały, które mogą Ci pomóc i wesprzeć podczas konfiguracji serwera:

- [Supabase.com](https://Supabase.com/) – Oficjalna strona
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) – Dokumentacja Supabase

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz pomocy lub masz dodatkowe pytania, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />