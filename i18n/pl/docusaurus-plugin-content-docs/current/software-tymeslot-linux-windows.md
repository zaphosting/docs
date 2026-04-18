---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Dowiedz się, jak wdrożyć Tymeslot za pomocą Dockera, zarządzać kontenerami dockerowymi oraz przejrzeć kluczowe ustawienia konfiguracyjne dla środowisk hostingowych Linux i Windows. -> Dowiedz się więcej teraz"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tymeslot to open-source platforma do umawiania spotkań i terminów, zbudowana w Elixir i Phoenix LiveView. W tym poradniku dowiesz się, czego wymaga Tymeslot, jak wdrożyć ją za pomocą Dockera na Linuxie lub Windowsie oraz które ustawienia warto sprawdzić przed uruchomieniem produkcyjnym.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, potrzebujesz systemu, który może stabilnie uruchomić Dockera i udostępnić Tymeslot w sieci.

### Wymagania

| Wymaganie | Rekomendacja |
| --- | --- |
| CPU | 1 vCPU lub więcej |
| RAM | Minimum 2 GB |
| Miejsce na dysku | Minimum 10 GB |
| System operacyjny | Linux lub Windows |
| Platforma kontenerowa | [Docker](https://www.docker.com/) |
| Port sieciowy | `4000/tcp` |

### Co musisz mieć gotowe

| Element | Dlaczego jest potrzebny |
| --- | --- |
| Serwer Linux lub system Windows | Do hostowania aplikacji |
| Zainstalowany Docker | Tymeslot dostarcza pliki związane z Dockerem w repozytorium |
| Otwarty dostęp sieciowy do portu `4000` lub reverse proxy | Aby uzyskać dostęp do interfejsu webowego |
| Nazwa hosta, np. `[your_domain]` | Zalecane do użytku produkcyjnego |
| Silny, wygenerowany sekret | Wymagany do zabezpieczenia sesji i aplikacji |

:::info Wymaganie instalacji Dockera
Ten poradnik skupia się na Dockerze, ponieważ repozytorium Tymeslot zawiera pliki takie jak `Dockerfile.docker` i `docker-compose.yml`. Natywna instalacja z Elixir i Phoenix może być możliwa, ale dokładne kroki produkcyjne nie były w pełni weryfikowalne na podstawie dostępnych materiałów źródłowych.
:::

### Uwaga dotycząca Windowsa

Na Windowsie zazwyczaj potrzebujesz działającego środowiska Docker, np. Docker Desktop. Jeśli korzystasz z Dockera dla Windows, upewnij się, że masz włączoną wirtualizację i że Docker Desktop jest uruchomiony przed kontynuacją.

## O Tymeslot

Tymeslot jest opisany w repozytorium jako open-source platforma do umawiania spotkań, zbudowana w Elixir i Phoenix LiveView. Przeznaczona jest do samodzielnego hostingu, ale można ją też używać przez zarządzaną chmurę projektu.

### Zweryfikowane dane projektu

| Atrybut | Wartość |
| --- | --- |
| Nazwa | Tymeslot |
| Kategoria | Umawianie terminów |
| Repozytorium źródłowe | `https://github.com/tymeslot/tymeslot` |
| Wzmianka tygodniowa | Self-Host Weekly, 10 kwietnia 2026 |
| Technologia | Elixir / Phoenix LiveView |
| Wsparcie samodzielnego hostingu | Tak |

:::note Weryfikacja źródła
Repozytorium potwierdza nazwę projektu, cel i stos technologiczny. Jednak niektóre szczegóły runtime, takie jak dokładna nazwa opublikowanego obrazu Docker, pełna lista zmiennych środowiskowych i oficjalne mapowanie portów produkcyjnych, nie były w pełni widoczne w dostarczonym materiale źródłowym, więc te elementy należy zweryfikować bezpośrednio w repozytorium przed wdrożeniem produkcyjnym.
:::

## Metoda wdrożenia

Dla większości użytkowników Docker jest najprostszą metodą wdrożenia, ponieważ izoluje zależności i ułatwia aktualizacje.

### Dlaczego zalecamy Dockera

| Korzyść | Wyjaśnienie |
| --- | --- |
| Łatwiejsza konfiguracja | Nie musisz ręcznie instalować Elixir, Erlang i Phoenix |
| Czystsze aktualizacje | Możesz wymieniać obrazy dockerowe bez przebudowy środowiska hosta |
| Lepsza przenośność | Ten sam kontener działa na Linuxie i Windowsie |
| Prostszy rollback | Możesz wrócić do wcześniejszej wersji obrazu w razie potrzeby |

### Ważne ograniczenie

:::caution Nazwa obrazu Docker musi być zweryfikowana
W dostarczonym szkicu użyto `youruser/tymeslot:latest` jako przykładowej nazwy obrazu, ale to tylko placeholder, a nie zweryfikowana oficjalna nazwa. Przed wdrożeniem sprawdź repozytorium Tymeslot, plik `README-Docker.md` lub instrukcje rejestru kontenerów projektu, aby potwierdzić poprawne źródło obrazu.
:::

## Instalacja Tymeslot z Dockerem

Ta sekcja pokazuje proces wdrożenia z użyciem Dockera z przykładowym odniesieniem do obrazu. Zamień `[your_tymeslot_image]` na zweryfikowaną nazwę obrazu z oficjalnego projektu Tymeslot.

### Pobierz obraz

```bash
docker pull [your_tymeslot_image]
```

### Wygeneruj klucz sekretu

Na Linuxie możesz wygenerować silny sekret poleceniem:

```bash
openssl rand -base64 64 | tr -d '\n'
```

Zapisz wynik bezpiecznie i użyj go jako `[your_secret_key_base]`.

Na Windowsie możesz wygenerować bezpieczną losową wartość inną zaufaną metodą, jeśli `openssl` nie jest dostępny w twoim środowisku powłoki.

### Uruchom kontener

```bash
docker run -d \
  --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE='[your_secret_key_base]' \
  -e PHX_HOST='[your_domain_or_ip]' \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  [your_tymeslot_image]
```

### Opis parametrów

| Parametr | Znaczenie |
| --- | --- |
| `-d` | Uruchamia kontener w trybie odłączonym |
| `--name tymeslot` | Nadaje czytelną nazwę kontenerowi |
| `-p 4000:4000` | Mapuje port hosta `4000` na port kontenera `4000` |
| `-e SECRET_KEY_BASE=...` | Ustawia sekret aplikacji |
| `-e PHX_HOST=...` | Ustawia nazwę hosta używaną przez Phoenix |
| `-v tymeslot_data:/app/data` | Zachowuje dane aplikacji |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Zachowuje dane PostgreSQL, jeśli jest używany w kontenerze |

:::caution Zweryfikuj ścieżki wolumenów
Powyższe ścieżki wolumenów pochodzą ze szkicu i nie były w pełni potwierdzone w oficjalnej dokumentacji. Przed użyciem ich w produkcji sprawdź oficjalną dokumentację Dockera Tymeslot.
:::

### Sprawdź status kontenera

```bash
docker ps
```

Aby zobaczyć logi:

```bash
docker logs tymeslot
```

Jeśli masz problemy z uruchomieniem, logi to pierwsze miejsce, które powinieneś sprawdzić.

## Opcjonalne wdrożenie z Docker Compose

Jeśli wolisz zarządzać kontenerami za pomocą Compose, możesz zdefiniować usługę w pliku `docker-compose.yml`. To często łatwiejsze do utrzymania niż długie polecenia `docker run`.

### Przykładowy plik Compose

```yaml
services:
  tymeslot:
    image: [your_tymeslot_image]
    container_name: tymeslot
    ports:
      - "4000:4000"
    environment:
      SECRET_KEY_BASE: "[your_secret_key_base]"
      PHX_HOST: "[your_domain_or_ip]"
    volumes:
      - tymeslot_data:/app/data
      - tymeslot_pg:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  tymeslot_data:
  tymeslot_pg:
```

Uruchom stack poleceniem:

```bash
docker compose up -d
```

:::tip Zarządzanie przez Compose
Korzystanie z Compose ułatwia aktualizacje, restarty i backupy, bo konfiguracja kontenera jest w jednym pliku. To szczególnie przydatne, gdy zarządzasz wieloma obrazami dockerowymi na tym samym hoście.
:::

## Konfiguracja Tymeslot

Po uruchomieniu kontenera przejrzyj najważniejsze wartości konfiguracyjne.

### Podstawowe zmienne środowiskowe

| Zmienna | Cel |
| --- | --- |
| `SECRET_KEY_BASE` | Chroni sesje i sekrety aplikacji |
| `PHX_HOST` | Definiuje publiczną nazwę hosta lub adres IP |

Używaj placeholderów w ten sposób:

- `[your_secret_key_base]` to twój wygenerowany bezpieczny sekret
- `[your_domain_or_ip]` to publiczna nazwa hosta lub adres IP serwera, np. `schedule.[your_domain]` lub `[your_server_ip]`

### Konfiguracja SMTP

Materiał szkicowy wskazuje, że SMTP można skonfigurować do powiadomień e-mail w pliku `config/prod.exs`. Przykład:

```elixir
config :tymeslot, Tymeslot.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.example.com",
  port: 587,
  username: "your_email@example.com",
  password: "your_password",
  tls: :if_available,
  auth: :always
```

:::note Weryfikacja konfiguracji SMTP
Powyższy przykład pochodzi ze szkicu i odzwierciedla typową konfigurację mailera w Elixir. Nadal powinieneś porównać go z aktualnymi plikami konfiguracyjnymi Tymeslot, ponieważ ustawienia maila mogą się zmieniać między wersjami.
:::

## Sieć i dostęp

Gdy Tymeslot działa, musisz upewnić się, że jest dostępny z przeglądarki.

### Dostęp do interfejsu webowego

Otwórz w przeglądarce adres:

```text
http://[your_server_ip]:4000
```

Jeśli skonfigurowałeś reverse proxy i DNS, możesz użyć:

```text
https://[your_domain]
```

### Referencja portów

| Port | Protokół | Cel |
| --- | --- | --- |
| `4000` | TCP | Domyślny dostęp webowy z konfiguracji szkicowej |

### Uwagi dotyczące zapory sieciowej

Musisz zezwolić na ruch przychodzący na `4000/tcp`, jeśli dostęp do Tymeslot jest bezpośredni.

:::caution Publiczne wystawienie
Jeśli wystawiasz Tymeslot bezpośrednio do internetu, zdecydowanie rozważ umieszczenie go za reverse proxy z HTTPS. Poprawia to bezpieczeństwo i umożliwia czystszy dostęp przez domenę.
:::

## Zalecenie dotyczące reverse proxy

Reverse proxy jest zalecane, jeśli chcesz używać nazwy domeny i certyfikatu TLS.

### Dlaczego warto używać reverse proxy

| Korzyść | Wyjaśnienie |
| --- | --- |
| Obsługa HTTPS | Szyfruje ruch między użytkownikami a usługą |
| Dostęp przez domenę | Pozwala używać `[your_domain]` zamiast surowego portu |
| Łatwiejsze zarządzanie certyfikatami | Dobrze współpracuje z Let's Encrypt i podobnymi narzędziami |
| Czystszy dostęp publiczny | Ukrywa wewnętrzne porty aplikacji |

### Co zweryfikować

Dokładna konfiguracja reverse proxy zależy od tego, czy używasz Nginx, Apache czy innego serwera WWW. Ponieważ nie było pełnego oficjalnego przykładu proxy w dostarczonym materiale, przed wdrożeniem sprawdź wymagane nagłówki i obsługę websocketów w oficjalnej dokumentacji Tymeslot.

## Uwagi o natywnej instalacji

Tymeslot jest zbudowany w Elixir i Phoenix LiveView, więc natywna instalacja może być możliwa na środowiskach developerskich Linux lub Windows. Szkic zawierał takie polecenia:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Na co zwrócić uwagę

| Temat | Uwaga |
| --- | --- |
| Elixir i Erlang | Muszą być zainstalowane w kompatybilnych wersjach |
| Zależności Phoenix | Mogą wymagać dodatkowych narzędzi do budowy |
| Konfiguracja bazy danych | Musi być poprawnie ustawiona przed migracjami |
| Utwardzenie produkcyjne | Zazwyczaj bardziej skomplikowane niż Docker |

:::danger Weryfikacja natywnego wdrożenia produkcyjnego
Powyższe kroki natywnej instalacji były w szkicu, ale nie zostały w pełni potwierdzone w dostarczonym repozytorium. Nie polegaj na nich w produkcji bez wcześniejszego sprawdzenia aktualnej oficjalnej dokumentacji i plików repozytorium Tymeslot.
:::

## Weryfikacja instalacji

Po wdrożeniu potwierdź, że aplikacja działa poprawnie.

### Podstawowe kontrole

| Sprawdzenie | Oczekiwany wynik |
| --- | --- |
| `docker ps` | Kontener `tymeslot` działa |
| `docker logs tymeslot` | Brak powtarzających się błędów startu lub bazy danych |
| Dostęp z przeglądarki | Interfejs Tymeslot się ładuje |
| Test portu | Port `4000` odpowiada na serwerze |

### Typowe problemy

| Problem | Możliwa przyczyna |
| --- | --- |
| Strona się nie ładuje | Port `4000` jest zablokowany lub kontener nie działa |
| Kontener natychmiast się zamyka | Nieprawidłowe zmienne środowiskowe lub brakujące zależności |
| Błędy bazy danych w logach | Niepowodzenie inicjalizacji bazy lub błędna ścieżka danych |
| Nieprawidłowe zachowanie nazwy hosta | `PHX_HOST` nie jest poprawnie ustawiony |

## Aktualizacja Tymeslot

Gdy pojawi się nowsza wersja, aktualizuj wdrożenie ostrożnie.

### Przebieg aktualizacji Dockera

1. Pobierz zaktualizowany obraz:
   ```bash
   docker pull [your_tymeslot_image]
   ```
2. Zatrzymaj obecny kontener:
   ```bash
   docker stop tymeslot
   ```
3. Usuń stary kontener:
   ```bash
   docker rm tymeslot
   ```
4. Uruchom nowy kontener z tą samą konfiguracją.

Jeśli używasz Compose, zwykle aktualizujesz poleceniami:

```bash
docker compose pull
docker compose up -d
```

:::tip Backup przed aktualizacją
Przed aktualizacją wykonaj kopię zapasową wolumenów trwałych i danych bazy. Dzięki temu masz możliwość przywrócenia, jeśli nowa wersja wprowadzi migracje lub problemy z kompatybilnością.
:::

## Dodatkowe źródła

| Zasób | Link |
| --- | --- |
| Oficjalne repozytorium Tymeslot | [GitHub - Tymeslot](https://github.com/tymeslot/tymeslot) |
| Oficjalna strona Dockera | [Docker](https://www.docker.com/) |
| Wzmianka Self-Host Weekly | [Self-Host Weekly - 10 kwietnia 2026](https://selfh.st/weekly/2026-04-10/) |

## Conclusion

Congratulations, you have successfully reviewed and deployed Tymeslot on Linux or Windows using Docker. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂