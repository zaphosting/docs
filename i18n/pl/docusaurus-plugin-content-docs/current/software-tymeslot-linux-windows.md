---
id: software-tymeslot-linux-windows
title: "Software - Tymeslot (Linux/Windows)"
description: "Dowiedz się, jak wdrożyć Tymeslot za pomocą Dockera, kontenerów Docker i podstaw instalacji Dockera na Linuxie lub Windowsie do samodzielnego zarządzania terminarzem. -> Dowiedz się więcej"
sidebar_label: Software - Tymeslot (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Tymeslot to open-source platforma do umawiania spotkań i terminów, zbudowana w Elixir i Phoenix LiveView. W tym poradniku dowiesz się, czym jest Tymeslot, co jest potrzebne do jego uruchomienia oraz jak wdrożyć go na Linuxie lub Windowsie za pomocą Dockera.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim wdrożysz Tymeslot, upewnij się, że Twój system spełnia podstawowe wymagania i że masz zainstalowanego Dockera.

### Wymagania

Poniższe wymagania bazują na dostępnych informacjach o projekcie oraz dostarczonym szkicu konfiguracji:

| Wymaganie | Rekomendacja |
|---|---|
| CPU | Co najmniej `1` vCPU |
| RAM | Co najmniej `2 GB` |
| Miejsce na dysku | Co najmniej `10 GB` |
| System operacyjny | Linux lub Windows |
| Środowisko kontenerowe | Docker |
| Sieć | Dostęp do portu `4000` |

### Co jest zweryfikowane, a co nie

:::info Dostępność źródeł
Repozytorium Tymeslot potwierdza, że projekt to open-source’owa platforma do umawiania spotkań zbudowana w Elixir i Phoenix LiveView oraz że w repozytorium znajdują się pliki związane z Dockerem, takie jak `Dockerfile.docker` i `docker-compose.yml`.

Jednak dokładne kroki wdrożenia produkcyjnego, nazwa obrazu oraz wszystkie wymagane zmienne środowiskowe nie są w pełni weryfikowalne na podstawie dostępnych materiałów źródłowych. Dlatego ten poradnik korzysta z dostępnych szkiców i wyraźnie oznacza wartości, które powinieneś zweryfikować w oficjalnym repozytorium przed użyciem produkcyjnym.
:::

### Instalacja Dockera

Musisz mieć Dockera, aby uruchomić Tymeslot w kontenerze.

- Na Linuxie zainstaluj Docker Engine korzystając z oficjalnej [dokumentacji Dockera](https://docs.docker.com/engine/install/)
- Na Windowsie zainstaluj [Docker Desktop](https://www.docker.com/products/docker-desktop/)

:::tip Docker na Windowsie
Jeśli używasz Dockera na Windowsie, upewnij się, że masz włączoną wirtualizację i że Docker Desktop jest uruchomiony, zanim przejdziesz dalej.
:::

## Software Overview

Tymeslot należy do kategorii *Scheduling* i służy do samodzielnego zarządzania umawianiem terminów i spotkań.

| Właściwość | Wartość |
|---|---|
| Nazwa | `Tymeslot` |
| Kategoria | `Scheduling` |
| Źródło | `https://github.com/tymeslot/tymeslot` |
| Stos technologiczny | `Elixir`, `Phoenix LiveView` |
| Styl wdrożenia | Samodzielne hostowanie, wsparcie Docker |
| Wzmianka tygodniowa | Self-Host Weekly, 10 kwietnia 2026 |

### Dlaczego warto używać Tymeslot

Tymeslot może być przydatny, jeśli chcesz:

- hostować własną platformę do umawiania terminów
- przechowywać dane rezerwacji na własnej infrastrukturze
- zarządzać spotkaniami bez polegania na zewnętrznej platformie SaaS
- wdrożyć nowoczesną aplikację webową w kontenerach Docker

## Deployment Options

Na podstawie dostępnych informacji istnieją dwie możliwe metody:

| Metoda | Status |
|---|---|
| Wdrożenie Docker | Zalecane |
| Nattywna instalacja Elixir/Phoenix | Możliwa, ale bardziej zaawansowana |

Dla większości użytkowników Docker to lepsza opcja, ponieważ upraszcza instalację, aktualizacje i zarządzanie usługą.

## Install Tymeslot with Docker

To najpraktyczniejsza metoda dla systemów Linux i Windows.

### Pobierz obraz Dockera

Dostarczony szkic używa następującego odniesienia do obrazu:

```bash
docker pull youruser/tymeslot:latest
```

:::caution Zweryfikuj najpierw obraz Dockera
Dokładna nazwa publicznego obrazu nie jest potwierdzona na podstawie pobranych materiałów z repozytorium. Przed użyciem tego polecenia w produkcji zweryfikuj poprawną nazwę obrazu w oficjalnym repozytorium Tymeslot, notatkach do wydań lub na stronie Docker Hub, jeśli jest dostępna.
:::

### Uruchom kontener

Możesz uruchomić Tymeslot za pomocą poniższego polecenia ze szkicu konfiguracji:

```bash
docker run --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE="$(openssl rand -base64 64 | tr -d '\n')" \
  -e PHX_HOST=localhost \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  youruser/tymeslot:latest
```

Jeśli używasz Windows PowerShell, polecenie `openssl` może nie być domyślnie dostępne. W takim wypadku wygeneruj bezpieczną losową wartość osobno i ręcznie podmień `SECRET_KEY_BASE`.

### Przykładowe wyjaśnienie polecenia

| Opcja | Cel |
|---|---|
| `--name tymeslot` | Ustawia nazwę kontenera |
| `-p 4000:4000` | Udostępnia Tymeslot na porcie `4000` |
| `-e SECRET_KEY_BASE=...` | Definiuje sekret aplikacji do szyfrowania i sesji |
| `-e PHX_HOST=localhost` | Ustawia nazwę hosta używaną przez Phoenix |
| `-v tymeslot_data:/app/data` | Zachowuje dane aplikacji |
| `-v tymeslot_pg:/var/lib/postgresql/data` | Zachowuje dane PostgreSQL |
| `youruser/tymeslot:latest` | Nazwa obrazu Dockera ze szkicu |

### Generowanie sekretu na Linuxie

Jeśli masz zainstalowany `openssl`, możesz wygenerować sekret tak:

```bash
openssl rand -base64 64 | tr -d '\n'
```

### Generowanie sekretu na Windows PowerShell

Możesz wygenerować przykładowy sekret w PowerShell tak:

```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

:::danger Użyj własnej wartości sekretu
Nie używaj przykładowych sekretów w produkcji. Zawsze generuj własny `SECRET_KEY_BASE` i przechowuj go bezpiecznie.
:::

## Configure Tymeslot

Przed pierwszym użyciem powinieneś przejrzeć najważniejsze ustawienia środowiskowe.

### Zmienne środowiskowe

Szkic potwierdza następujące zmienne środowiskowe:

| Zmienna | Przykład | Cel |
|---|---|---|
| `SECRET_KEY_BASE` | `[your_secret_key]` | Zabezpiecza sesje i funkcje szyfrowania |
| `PHX_HOST` | `[your_domain]` lub `[your_server_ip]` | Definiuje publiczną nazwę hosta używaną przez aplikację |

Przy używaniu placeholderów:

- `[your_secret_key]` to Twój wygenerowany bezpieczny sekret
- `[your_domain]` to Twoja publiczna domena, jeśli ją masz
- `[your_server_ip]` to adres IP Twojego serwera do bezpośredniego dostępu

### Konfiguracja SMTP

Dostarczony szkic wspomina też o konfiguracji SMTP w `config/prod.exs` do powiadomień mailowych:

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

:::note Weryfikacja SMTP
Dokładny format konfiguracji mailera powinien być zweryfikowany w oficjalnym repozytorium Tymeslot przed zastosowaniem w produkcji, ponieważ konfiguracja aplikacji może się zmieniać między wersjami.
:::

## Access Tymeslot

Gdy kontener działa, możesz przetestować interfejs webowy.

### Dostęp lokalny

Jeśli testujesz lokalnie, otwórz:

```text
http://localhost:4000
```

### Dostęp zdalny

Jeśli Tymeslot działa na zdalnym serwerze, otwórz:

```text
http://[your_server_ip]:4000
```

Jeśli skonfigurowałeś domenę i reverse proxy, możesz też uzyskać dostęp przez:

```text
https://[your_domain]
```

## Firewall and Network

Tymeslot potrzebuje dostępu sieciowego na porcie, który udostępniasz z Dockera.

### Wymagany port

| Port | Protokół | Cel |
|---|---|---|
| `4000` | TCP | Dostęp webowy do aplikacji Tymeslot |

### Uwagi dotyczące zapory sieciowej

Powinieneś upewnić się, że:

- port `4000` jest otwarty w zaporze serwera, jeśli chcesz mieć bezpośredni dostęp
- zapora chmurowa lub zapora dostawcy również pozwala na ten port
- reverse proxy poprawnie przekierowuje ruch, jeśli używasz domeny

:::caution Publiczne wystawienie portu
Jeśli wystawisz port `4000` bezpośrednio do internetu, upewnij się, że rozumiesz konsekwencje bezpieczeństwa. W produkcji lepszym wyborem jest reverse proxy z HTTPS.
:::

## Optional Native Installation

Natywna instalacja może być możliwa, jeśli nie chcesz używać Dockera. Ta metoda jest bardziej zaawansowana i wymaga środowiska kompatybilnego z Elixir i Phoenix.

### Podstawowe kroki natywne

Według dostarczonego szkicu proces wygląda tak:

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### Uwagi do natywnego wdrożenia

Do natywnego wdrożenia potrzebujesz też:

- Elixir
- Erlang/OTP
- zależności Phoenix
- obsługiwana baza danych
- przegląd konfiguracji produkcyjnej

:::info Złożoność natywnej instalacji
Pobrane materiały źródłowe nie dostarczają wystarczająco zweryfikowanych szczegółów, aby bezpiecznie opisać kompletną natywną produkcyjną konfigurację na Linuxie lub Windowsie. Jeśli chcesz użyć tej metody, zapoznaj się bezpośrednio z dokumentacją oficjalnego repozytorium przed wdrożeniem.
:::

## Maintenance and Troubleshooting

Po wdrożeniu powinieneś sprawdzić, czy usługa pozostaje dostępna i czy dane są trwałe.

### Sprawdź status kontenera

```bash
docker ps
```

### Zobacz logi

```bash
docker logs tymeslot
```

### Restart kontenera

```bash
docker restart tymeslot
```

### Typowe problemy

| Problem | Możliwa przyczyna | Sugerowane działanie |
|---|---|---|
| Strona się nie ładuje | Port `4000` jest zablokowany | Sprawdź zaporę i mapowanie portów Dockera |
| Kontener natychmiast się zamyka | Nieprawidłowe zmienne środowiskowe | Sprawdź `SECRET_KEY_BASE` i ustawienia obrazu |
| Błędy związane z bazą danych | Problem z trwałym magazynem lub inicjalizacją bazy | Sprawdź logi i weryfikuj wolumeny |
| Niepoprawna nazwa hosta w linkach | `PHX_HOST` jest błędny | Ustaw `PHX_HOST` na `[your_domain]` lub `[your_server_ip]` |

## Best Practices

### Używaj trwałych wolumenów

Zawsze zachowuj trwałe wolumeny Dockera dla danych aplikacji i bazy, aby odtworzenie kontenera nie usuwało Twoich danych.

### Używaj reverse proxy

Do wdrożeń publicznych zwykle lepiej jest umieścić Tymeslot za reverse proxy, takim jak Nginx lub Apache, i włączyć HTTPS.

### Weryfikuj zmiany upstream

Ponieważ Tymeslot jest aktywnie rozwijany, przed aktualizacją powinieneś przejrzeć oficjalne repozytorium. Szczególnie ważne są:

- zmiany obrazów Dockera
- aktualizacje zmiennych środowiskowych
- migracje bazy danych
- zmiany konfiguracji mailowej

## Additional References

| Zasób | Link |
|---|---|
| Repozytorium Tymeslot na GitHub | [Official Tymeslot Repository](https://github.com/tymeslot/tymeslot) |
| Wzmianka w Self-Host Weekly | [Self-Host Weekly - 10 April 2026](https://selfh.st/weekly/2026-04-10/) |
| Dokumentacja Dockera | [Docker Documentation](https://docs.docker.com/) |
| Pobierz Docker Desktop | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |

## Conclusion

Gratulacje, pomyślnie nauczyłeś się, jak przeglądać i wdrażać Tymeslot na Linuxie lub Windowsie za pomocą Dockera. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc!