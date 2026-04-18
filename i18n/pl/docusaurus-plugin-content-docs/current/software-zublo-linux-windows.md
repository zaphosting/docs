---
id: software-zublo-linux-windows
title: "Software - Zublo (Linux/Windows)"
description: "Dowiedz się, jak wdrożyć Zublo do bezpiecznego zarządzania danymi subskrypcji, śledzenia płatności cyklicznych i samodzielnie hostowanych analiz danych za pomocą Dockera -> Dowiedz się więcej teraz"
sidebar_label: Software - Zublo (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Zublo to open-source’owy, samodzielnie hostowany tracker subskrypcji, który pomaga zarządzać płatnościami cyklicznymi i powiązanymi danymi w jednym miejscu. W tym poradniku nauczysz się, jak wdrożyć Zublo na serwerze Linux lub Windows za pomocą Dockera oraz jak zweryfikować poprawność działania interfejsu webowego.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, upewnij się, że Twój serwer spełnia podstawowe wymagania i ma zainstalowanego Dockera.

### Requirements

| Komponent | Zalecane minimum |
| --- | --- |
| CPU | 1 vCore |
| RAM | 512 MB |
| Dysk | 1 GB wolnego miejsca na dysku |
| System operacyjny | Linux lub Windows z obsługą Dockera |
| Sieć | Dostęp do portu `9597` |

### Required software

Potrzebujesz zainstalowanego następującego oprogramowania:

| Oprogramowanie | Cel |
| --- | --- |
| [Docker](https://www.docker.com/) | Uruchamia kontener Zublo |
| Docker Compose | Uruchamia i zarządza stosem kontenerów |

:::info Wymaganie Dockera
Ten poradnik opiera się na metodzie wdrożenia za pomocą Dockera, zgodnie z repozytorium projektu. Jeśli Docker nie jest jeszcze zainstalowany, musisz to zrobić przed kontynuacją.
:::

:::caution Dostęp do portu
Zublo domyślnie korzysta z portu `9597`. Upewnij się, że port ten nie jest zajęty przez inną usługę i jest dozwolony w zaporze sieciowej, jeśli chcesz mieć zdalny dostęp do interfejsu webowego.
:::

## About Zublo

Zublo służy do śledzenia subskrypcji, płatności cyklicznych i danych związanych z wydatkami poprzez samodzielnie hostowaną aplikację webową. Według repozytorium projektu, jest to rozwiązanie „Docker-first” stworzone dla osób, które chcą mieć pełną kontrolę nad swoimi danymi.

### Co oferuje aplikacja

Na podstawie dostępnych informacji projekt skupia się na następujących obszarach:

| Obszar funkcji | Opis |
| --- | --- |
| Śledzenie subskrypcji | Zarządzanie usługami i płatnościami cyklicznymi |
| Samodzielne hostowanie | Przechowywanie danych subskrypcji na własnym serwerze |
| Interfejs webowy | Dostęp do aplikacji przez przeglądarkę |
| Dostęp do API | Korzystanie z wbudowanego endpointu API |
| Panel administracyjny | Dostęp do panelu admina PocketBase |

:::note Dostępność funkcji
Niektóre zaawansowane funkcje wymieniane w opisach zewnętrznych, takie jak analiza wspomagana AI, mogą zależeć od wersji projektu. Jeśli dana funkcja nie jest widoczna w Twojej instalacji, sprawdź oficjalne repozytorium pod kątem szczegółów wersji: [Zublo GitHub repository](https://github.com/danielalves96/zublo)
:::

## Utwórz katalog projektu Zublo

Najpierw utwórz dedykowany katalog dla wdrożenia Zublo, aby konfiguracja i dane trwałe były uporządkowane.

### Linux

W terminalu wykonaj polecenia:

```bash
mkdir -p zublo-data
cd zublo-data
```

### Windows

Jeśli używasz PowerShell, wpisz:

```powershell
mkdir zublo-data
cd zublo-data
```

Ten folder będzie zawierał plik `docker-compose.yml` oraz katalog z trwałymi danymi aplikacji.

## Utwórz konfigurację Docker Compose

Następnie stwórz plik `docker-compose.yml` w katalogu projektu.

### Przykładowa konfiguracja

Użyj poniższej konfiguracji:

```yaml
services:
  zublo:
    image: ghcr.io/danielalves96/zublo:latest
    container_name: zublo
    restart: unless-stopped
    ports:
      - "9597:9597"
    environment:
      PB_ENCRYPTION_KEY: "[your_secure_encryption_key]"
    volumes:
      - ./zublo-data:/pb/pb_data
```

### Przegląd konfiguracji

| Klucz | Przykładowa wartość | Cel |
| --- | --- | --- |
| `image` | `ghcr.io/danielalves96/zublo:latest` | Pobiera najnowszy obraz kontenera Zublo |
| `container_name` | `zublo` | Ustawia czytelną nazwę kontenera |
| `restart` | `unless-stopped` | Automatycznie restartuje kontener po restarcie lub awarii |
| `ports` | `9597:9597` | Udostępnia aplikację webową na porcie `9597` |
| `PB_ENCRYPTION_KEY` | `[your_secure_encryption_key]` | Chroni wrażliwe dane przechowywane w aplikacji |
| `volumes` | `./zublo-data:/pb/pb_data` | Przechowuje dane aplikacji na serwerze |

:::danger Użyj silnego klucza szyfrowania
Nie zostawiaj klucza szyfrowania na słabej lub domyślnej wartości. Zamień `[your_secure_encryption_key]` na długi, losowy sekret przed uruchomieniem kontenera w środowisku produkcyjnym.
:::

### Zapisz plik

Zapisz plik jako `docker-compose.yml` w bieżącym katalogu. Po zapisaniu możesz uruchomić usługę.

## Uruchom Zublo

Po utworzeniu pliku Compose uruchom stos kontenerów.

```bash
docker compose up -d
```

Jeśli Twoje środowisko korzysta ze starszej składni Docker Compose, może być potrzebne:

```bash
docker-compose up -d
```

### Sprawdź, czy kontener działa

Status kontenera sprawdzisz poleceniem:

```bash
docker ps
```

Na liście powinien pojawić się kontener o nazwie `zublo`.

### Sprawdź logi w razie potrzeby

Jeśli usługa nie uruchamia się poprawnie, przejrzyj logi:

```bash
docker logs zublo
```

To pomoże zidentyfikować problemy, takie jak błędna konfiguracja, konflikt portów lub problemy z uprawnieniami do danych trwałych.

## Dostęp do interfejsu webowego

Gdy kontener działa, możesz otworzyć Zublo w przeglądarce.

### Adresy aplikacji

Zamień `[your_server_ip]` na publiczny adres IP Twojego serwera lub lokalny adres w sieci.

| Interfejs | URL |
| --- | --- |
| Główna aplikacja | `http://[your_server_ip]:9597` |
| Panel admina PocketBase | `http://[your_server_ip]:9597/_/` |
| Endpoint API | `http://[your_server_ip]:9597/api/` |

:::info Lokalny dostęp vs zdalny
Jeśli pracujesz bezpośrednio na tej samej maszynie, gdzie jest zainstalowane Zublo, możesz też użyć `http://localhost:9597`. Do zdalnego dostępu użyj rzeczywistego IP serwera lub skonfigurowanej domeny.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Konfiguracja bezpiecznego dostępu

Po potwierdzeniu, że Zublo jest dostępne, sprawdź, jak jest wystawione do internetu.

### Zapora sieciowa

Jeśli nie możesz się połączyć z aplikacją z innego urządzenia, upewnij się, że port `9597` jest otwarty w konfiguracji zapory.

| Port | Protokół | Cel |
| --- | --- | --- |
| `9597` | TCP | Interfejs webowy Zublo, panel admina i API |

### Użycie reverse proxy

Jeśli chcesz korzystać z domeny takiej jak `[your_domain]`, możesz umieścić Zublo za reverse proxy, np. Nginx lub innym wspieranym proxy. Proxy przekierowuje wtedy ruch do `http://127.0.0.1:9597` lub wewnętrznego adresu Dockera.

:::tip Używaj HTTPS przy dostępie z internetu
Jeśli planujesz publiczne wystawienie Zublo, zaleca się użycie reverse proxy z SSL, aby dane subskrypcji były szyfrowane podczas przesyłu.
:::

## Zarządzanie danymi trwałymi

Zublo przechowuje trwałe dane aplikacji w zamontowanym katalogu określonym w pliku Compose.

### Lokalizacja danych

W tym poradniku użyto mapowania wolumenu:

```yaml
volumes:
  - ./zublo-data:/pb/pb_data
```

Oznacza to, że dane aplikacji są przechowywane lokalnie w folderze `zublo-data` w katalogu projektu.

### Dlaczego trwałość danych jest ważna

Trwała pamięć zapewnia, że dane aplikacji pozostaną dostępne po:

- restartach kontenera
- rebootach serwera
- aktualizacjach obrazu
- pracach konserwacyjnych

:::caution Zalecenie tworzenia kopii zapasowej
Ponieważ Zublo przechowuje ważne dane osobiste dotyczące subskrypcji, powinieneś regularnie robić kopię zapasową katalogu `zublo-data` przed większymi zmianami lub aktualizacjami.
:::

## Podstawowa konserwacja

Gdy Zublo działa, czasem będziesz musiał je zaktualizować lub zrestartować.

### Restart kontenera

```bash
docker restart zublo
```

### Zatrzymanie wdrożenia

```bash
docker compose down
```

### Aktualizacja do najnowszego obrazu

Pobierz najnowszy obraz i odtwórz kontener:

```bash
docker compose pull
docker compose up -d
```

### Przydatne polecenia

| Polecenie | Cel |
| --- | --- |
| `docker compose up -d` | Uruchom Zublo w tle |
| `docker ps` | Sprawdź działające kontenery |
| `docker logs zublo` | Zobacz logi kontenera |
| `docker restart zublo` | Zrestartuj kontener |
| `docker compose down` | Zatrzymaj i usuń kontener |
| `docker compose pull` | Pobierz najnowszy obraz |

## Rozwiązywanie problemów

Jeśli Zublo nie działa zgodnie z oczekiwaniami, sprawdź poniższe typowe przyczyny.

### Port `9597` jest już zajęty

Jeśli Docker zgłasza błąd wiązania portu, inna usługa już korzysta z `9597`. Musisz zatrzymać tę usługę lub zmienić mapowanie portów po stronie hosta.

Przykład z innym portem zewnętrznym:

```yaml
ports:
  - "9600:9597"
```

Wtedy aplikację otworzysz pod adresem `http://[your_server_ip]:9600`.

### Kontener startuje, ale strona się nie ładuje

Sprawdź:

- czy kontener działa poleceniem `docker ps`
- logi kontenera `docker logs zublo`
- czy zapora sieciowa przepuszcza wybrany port
- czy używasz poprawnego adresu IP lub nazwy hosta

### Problemy z kluczem szyfrowania

Jeśli zmienisz `PB_ENCRYPTION_KEY` po pierwszym uruchomieniu, istniejące zaszyfrowane dane mogą stać się nieczytelne. Jeśli musisz zmienić ten klucz, najpierw sprawdź oficjalną dokumentację projektu, ponieważ dokładne zachowanie migracji nie jest opisane w dostarczonym materiale źródłowym.

:::note Brak szczegółów dotyczących zachowania
Dostarczony materiał źródłowy nie dokumentuje w pełni wszystkich kroków pierwszego uruchomienia, tworzenia konta admina ani zaawansowanych opcji konfiguracji. Jeśli potrzebujesz tych informacji, sprawdź dokumentację projektu: [Zublo GitHub repository](https://github.com/danielalves96/zublo)
:::

## Conclusion

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś Zublo na Linux lub Windows za pomocą Dockera. Jeśli masz dalsze pytania lub potrzebujesz pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂