---
id: vserver-linux-supabase
title: "Konfiguracja Supabase na serwerze Linux - Uruchom swoją open source platformę backendową"
description: "Dowiedz się, jak hostować i konfigurować Supabase — niezawodną open source platformę Postgres z uwierzytelnianiem i funkcjami realtime → Sprawdź teraz"
sidebar_label: Instalacja Supabase
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Supabase to open source platforma developerska oparta na Postgres, która oferuje pełną bazę danych Postgres wraz z uwierzytelnianiem, natychmiastowymi API, funkcjami realtime oraz storage, stanowiąc open source alternatywę dla Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię krok po kroku przez cały proces instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

## Instalacja Supabase przez One Click Apps Installer

Możesz zainstalować **Supabase** bezpośrednio przez nasz **One Click Apps Installer** w panelu VPS. Po zakończeniu wstępnej konfiguracji aplikacji, otwórz katalog aplikacji, wyszukaj **Supabase** i rozpocznij wdrożenie z wybranymi ustawieniami projektu, środowiska i domeny. To szybki i wygodny sposób na uruchomienie i zarządzanie **Supabase** bez ręcznej konfiguracji w terminalu, a jednocześnie z korzyściami takimi jak zarządzanie przez przeglądarkę, wsparcie dla własnej domeny i automatyczne SSL tam, gdzie jest dostępne.

<InlineVoucher />

## Wymagania wstępne

Przed instalacją **Supabase** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby instalacja przebiegła bezproblemowo i zapewnić optymalną wydajność.

| Sprzęt    | Minimum      | Zalecenia ZAP-Hosting     |
| --------- | ------------ | ------------------------- |
| CPU       | 1 rdzeń vCPU | 4 rdzenie vCPU            |
| RAM       | 4 GB         | 8 GB                      |
| Miejsce na dysku | 25 GB  | 25 GB                     |

Oprogramowanie wymaga zainstalowania wszystkich niezbędnych zależności oraz działania na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed rozpoczęciem instalacji:

**Zależności:** `Git`, `Docker (Engine i Compose)`

**System operacyjny:** Najnowsza wersja Ubuntu/Debian wspierająca Docker 2

Sprawdź, czy wszystkie zależności są zainstalowane, a system operacyjny jest aktualny, aby uniknąć problemów z kompatybilnością podczas instalacji Supabase.

## Przygotowanie

Przed konfiguracją **Supabase** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. Te kroki zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.

### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i ma aktualizacje bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Wykonaj polecenie:

```
sudo apt update && sudo apt upgrade -y
```
Dzięki temu Twój system będzie miał najnowsze poprawki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przejść do instalacji zależności.

#### Git
Dane Supabase będą pobierane z GitHub, więc najpierw musisz mieć zainstalowany Git. Wykonaj polecenie:

```
sudo apt install git-all
```

#### Docker

Supabase będzie uruchamiane w kontenerze Docker na Twoim serwerze, więc Docker musi być zainstalowany. Wykonaj polecenia:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Pełny poradnik instalacji i obsługi Dockera znajdziesz w naszym [poradniku Docker](dedicated-linux-docker.md).

## Instalacja
Gdy spełnisz wszystkie wymagania i przygotujesz środowisko, możesz przejść do instalacji Supabase.

Pobierz repozytorium Supabase, utwórz dedykowany katalog projektu i skopiuj do niego pliki Dockera oraz przykładowy plik środowiskowy.

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project

cp -rf supabase/docker/* supabase-project
cp supabase/docker/.env.example supabase-project/.env
```

Przejdź do katalogu projektu, pobierz najnowsze obrazy kontenerów i uruchom stack w trybie odłączonym.

```
cd supabase-project
docker compose pull
docker compose up -d
```

![img](https://screensaver01.zap-hosting.com/index.php/s/njapji2YePRgema/preview)

Teraz możesz uzyskać dostęp do Supabase Studio pod adresem `http://<twoj-adres-ip>:8000`. Zostaniesz poproszony o nazwę użytkownika i hasło. Domyślne dane to:

- Nazwa użytkownika: `supabase`
- Hasło: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Domyślne dane logowania
Twoja aplikacja działa teraz na domyślnych danych logowania. Zabezpiecz swoje usługi jak najszybciej, korzystając z instrukcji poniżej.
:::

## Konfiguracja
Nigdy nie wdrażaj aplikacji z domyślnymi lub przykładowymi wartościami. Zastąp wszystkie placeholdery silnymi, unikalnymi sekretami, sprawdź konfigurację pod kątem wymagań bezpieczeństwa i zrestartuj wszystkie usługi, aby zastosować zmiany.

Wygeneruj bezpieczne klucze API zanim udostępnisz jakąkolwiek usługę. Zacznij od wyboru 40-znakowego sekretu JWT. Możesz użyć podanej wartości lub stworzyć własną. Przechowuj ten sekret lokalnie w bezpiecznym miejscu. Nie udostępniaj go i nie commituj do systemu kontroli wersji. Użyj sekretu do wygenerowania JWT, a następnie wygeneruj klucze anon i service API korzystając z formularza opisanego w dokumentacji Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Uruchom formularz dwukrotnie, aby wygenerować oba klucze. Zaktualizuj plik `./docker/.env` o:

- `ANON_KEY`: klucz anon
- `SERVICE_ROLE_KEY`: klucz serwisowy

Zaktualizuj wymagane sekrety w `./docker/.env`. Te wartości muszą być ustawione, aby wdrożenie działało poprawnie:

- `POSTGRES_PASSWORD`: hasło dla roli `postgres`
- `JWT_SECRET`: używany przez PostgREST i GoTrue
- `SITE_URL`: podstawowy URL Twojej strony
- `SMTP_*`: dane serwera pocztowego
- `POOLER_TENANT_ID`: tenant id używany przez pooler Supavisor

Zabezpiecz panel główny nowymi danymi przed użyciem produkcyjnym. Edytuj `./docker/.env`:

- `DASHBOARD_USERNAME`: użytkownik panelu
- `DASHBOARD_PASSWORD`: hasło do panelu

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

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś Supabase na swoim VPS/serwerze dedykowanym. Polecamy też zapoznać się z poniższymi materiałami, które mogą Ci pomóc i wesprzeć podczas konfiguracji serwera:

- [Supabase.com](https://Supabase.com/) - Oficjalna strona
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Dokumentacja Supabase

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz pomocy lub masz dodatkowe pytania, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂