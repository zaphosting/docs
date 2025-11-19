---
id: dedicated-linux-supabase
title: "Serwer dedykowany: Instalacja Supabase na Linux"
description: "Dowiedz się, jak zainstalować i skonfigurować Supabase do samodzielnego hostingu, aby zbudować potężną, open-source’ową platformę Postgresa → Sprawdź teraz"
sidebar_label: Instalacja Supabase
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Supabase to open-source’owa platforma developerska Postgresa, która oferuje pełną bazę danych Postgres wraz z uwierzytelnianiem, natychmiastowymi API, realtime i storage, stanowiąc otwartoźródłową alternatywę dla Firebase.

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.



## Wymagania wstępne

Przed instalacją **Supabase** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby instalacja przebiegła gładko, a wydajność była optymalna.

| Sprzęt    | Minimum    | Rekomendacja ZAP-Hosting |
| --------- | ----------| ------------------------ |
| CPU       | 1 rdzeń CPU | 4 rdzenie CPU           |
| RAM       | 4 GB       | 8 GB                    |
| Miejsce na dysku | 25 GB | 25 GB                   |

Oprogramowanie wymaga zainstalowania wszystkich niezbędnych zależności oraz działania na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed przystąpieniem do instalacji:

**Zależności:** `Git`, `Docker (Engine i Compose)`

**System operacyjny:** Najnowsza wersja Ubuntu/Debian wspierająca Docker 2

Sprawdź, czy wszystkie zależności są zainstalowane, a system operacyjny jest odpowiedni, aby uniknąć problemów z kompatybilnością podczas instalacji Supabase.



## Przygotowanie

Przed konfiguracją **Supabase** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. To zapewni stabilne środowisko i pomoże uniknąć problemów podczas lub po instalacji.


### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i ma aktualizacje bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Wykonaj polecenie:

```
sudo apt update && sudo apt upgrade -y
```
Dzięki temu Twój system będzie miał najnowsze poprawki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przejść do instalacji zależności.

#### Git
Dane Supabase będą pobierane z GitHuba, więc najpierw musisz mieć zainstalowany Git. Wykonaj polecenie:
```
sudo apt install git-all
```

#### Docker

Supabase będzie uruchamiane na Twoim serwerze w kontenerze Docker, więc Docker musi być zainstalowany. Wykonaj polecenia:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Pełny poradnik instalacji i obsługi Dockera znajdziesz w naszym [poradniku Docker](dedicated-linux-docker.md).


## Instalacja
Gdy spełnisz wszystkie wymagania i przygotujesz system, możesz przejść do instalacji Supabase.

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

Teraz możesz uzyskać dostęp do Supabase Studio pod adresem `http://<twoje-ip>:8000`. Zostaniesz poproszony o nazwę użytkownika i hasło. Domyślne dane to:

- Nazwa użytkownika: `supabase`
- Hasło: `this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning Domyślne dane logowania
Twoja aplikacja działa teraz na domyślnych danych logowania. Zabezpiecz swoje usługi jak najszybciej, korzystając z instrukcji poniżej.
:::



## Konfiguracja
Nigdy nie wdrażaj aplikacji z domyślnymi lub przykładowymi wartościami. Zamień wszystkie placeholdery na silne, unikalne sekrety, sprawdź konfigurację pod kątem wymagań bezpieczeństwa i zrestartuj wszystkie usługi, aby zmiany zaczęły działać.

Wygeneruj bezpieczne klucze API zanim udostępnisz jakąkolwiek usługę. Zacznij od wyboru 40-znakowego sekretu JWT. Możesz użyć podanej wartości lub stworzyć własną. Przechowuj ten sekret lokalnie w bezpiecznym miejscu. Nie udostępniaj go i nie commituj do systemu kontroli wersji. Użyj sekretu do wygenerowania JWT, a następnie wygeneruj klucze anon i service API korzystając z formularza opisanego w dokumentacji Supabase: https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

Uruchom formularz dwukrotnie, aby wygenerować oba klucze. Zaktualizuj plik `./docker/.env`:

- `ANON_KEY`: klucz anon
- `SERVICE_ROLE_KEY`: klucz serwisowy

Zaktualizuj wymagane sekrety w `./docker/.env`. Te wartości muszą być ustawione, aby wdrożenie działało:

- `POSTGRES_PASSWORD`: hasło dla roli `postgres`
- `JWT_SECRET`: używany przez PostgREST i GoTrue
- `SITE_URL`: podstawowy URL Twojej strony
- `SMTP_*`: dane serwera pocztowego
- `POOLER_TENANT_ID`: tenant id używany przez pooler Supavisor

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

Gratulacje! Właśnie pomyślnie zainstalowałeś i skonfigurowałeś Supabase na swoim serwerze dedykowanym. Polecamy też rzucić okiem na poniższe zasoby, które mogą pomóc i wesprzeć Cię podczas konfiguracji serwera:

- [Supabase.com](https://Supabase.com/) - Oficjalna strona
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Dokumentacja Supabase

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz dalszej pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂