---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Dowiedz się, jak korzystać z Yet Another Rclone Dashboard jako nowoczesnego GUI dla rclone na Linux i Windows, w tym dostęp do przeglądarki rclone i konfigurację demona z rclone rcd. -> Dowiedz się więcej teraz"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard to nowoczesny webowy panel do zarządzania `rclone rcd` przez przeglądarkę. W tym poradniku dowiesz się, co robi to oprogramowanie, czego wymaga i jak je skonfigurować na Linuxie lub Windowsie przy użyciu wspieranych metod wdrożenia.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, upewnij się, że Twój system spełnia podstawowe wymagania i że `rclone` jest już zainstalowane.

### Requirements

Według repozytorium projektu, Yet Another Rclone Dashboard jest zaprojektowany dla `rclone rcd` i zaleca **Rclone w wersji `v1.72.0` lub nowszej**.

| Wymaganie | Szczegóły |
|---|---|
| System operacyjny | Linux lub Windows |
| Główne zależności | `rclone` |
| Zalecana wersja Rclone | `v1.72.0` lub nowsza |
| Metoda dostępu | Przeglądarka internetowa |
| Domyślny port RC | `5572/tcp` |
| Opcjonalne oprogramowanie | `Docker`, `Nginx` lub `Caddy` w zależności od konfiguracji |

### Co oferuje panel

Projekt opisuje Yet Another Rclone Dashboard jako frontend dla `rclone rcd`. Na podstawie dostępnych informacji zawiera następujące funkcje:

| Funkcja | Opis |
|---|---|
| Wiele profili połączeń | Połącz się z różnymi instancjami `rclone rcd` |
| Informacje o systemie | Podgląd informacji i statusu Rclone |
| Zarządzanie zdalnymi | Przeglądaj zdalne lokalizacje i importuj lub eksportuj konfigurację Rclone |
| Przeglądarka plików | Przeglądaj katalogi i zarządzaj plikami przez panel |

:::info Wymaganie Rclone
To oprogramowanie nie jest samodzielnym serwerem storage. Potrzebujesz działającej instalacji `rclone` i musisz uruchomić `rclone` w trybie demona z `rcd`.
:::

### Pobierz źródła

Oficjalne źródła projektu są dostępne na GitHub:

- [Yet Another Rclone Dashboard na GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

Na moment przygotowania materiału najnowsza wersja to `v0.3.8` z plikiem `yet-another-rclone-dashboard-v0.3.8.zip`.

## Jak działa panel

Yet Another Rclone Dashboard to statyczny frontend webowy, który łączy się z *Rclone remote control API* udostępnianym przez `rclone rcd`. Oznacza to, że sam panel nie zastępuje `rclone`, lecz zapewnia wygodny interfejs w stylu GUI rclone w przeglądarce.

W praktyce masz kilka sposobów użycia:

| Metoda | Zastosowanie | Uwagi |
|---|---|---|
| `--rc-files` | Ręczne wdrożenie lokalne lub na serwerze | Serwuje rozpakowane pliki panelu bezpośrednio przez `rclone rcd` |
| `--rc-web-gui` z URL pobierania | Automatyczne pobieranie przez Rclone | Pozwala Rclone pobrać najnowszą wersję panelu |
| Reverse proxy | Dostęp przez domenę | Przydatne, jeśli chcesz udostępnić panel przez `Nginx` lub `Caddy` |
| Zewnętrzny serwer WWW | Hosting statycznych plików | Serwuj frontend osobno i łącz z `rclone rcd` |

:::note Dostęp przez przeglądarkę
Ponieważ to panel webowy, uzyskasz do niego dostęp przez przeglądarkę po uruchomieniu i poprawnej konfiguracji `rclone rcd`.
:::

## Pobierz pliki panelu

Jeśli chcesz użyć ręcznej metody wdrożenia, najpierw pobierz najnowszy archiwum z GitHub i rozpakuj je na serwerze lub lokalnie.

### Przykład Linux

Możesz pobrać aktualną wersję za pomocą `wget`:

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
```

Następnie rozpakuj:

```bash
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_dashboard_directory]
```

Zamień `[your_dashboard_directory]` na folder, w którym chcesz przechowywać rozpakowane pliki, np. `/opt/yet-another-rclone-dashboard`.

### Przykład Windows

Na Windows pobierz archiwum `.zip` ze strony GitHub i rozpakuj do folderu, np.:

```text
C:\yet-another-rclone-dashboard
```

:::tip Przechowuj pliki w stałej lokalizacji
Nie rozpakowuj panelu do folderu tymczasowego. `rclone rcd` musi mieć ciągły dostęp do plików, jeśli używasz metody `--rc-files`.
:::

## Uruchom Rclone z panelem

Gdy pliki są gotowe, możesz uruchomić `rclone rcd` i udostępnić panel.

### Metoda 1: Ręczna konfiguracja z `--rc-files`

Ta metoda korzysta bezpośrednio z rozpakowanych plików panelu.

#### Przykład Linux lokalny

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Przykład Linux serwer

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Przykład Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Metoda 2: Automatyczna konfiguracja z `--rc-web-gui`

Ta metoda pozwala Rclone automatycznie pobrać panel z GitHub API.

#### Przykład lokalny

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Przykład zdalny serwer

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution Nie wystawiaj niezabezpieczonego interfejsu RC
Jeśli powiążesz `rclone rcd` z `0.0.0.0`, usługa może być dostępna z innych systemów. Użyj `--rc-user` i `--rc-pass` lub umieść ją za poprawnie skonfigurowanym reverse proxy.
:::

## Ważne opcje Rclone

Poniższe opcje są najważniejsze przy konfiguracji tego panelu.

| Opcja | Cel |
|---|---|
| `--rc-files` | Serwuje statyczne pliki panelu z lokalnego katalogu |
| `--rc-web-gui` | Włącza mechanizm pobierania GUI Rclone |
| `--rc-web-fetch-url` | Określa endpoint API do pobierania panelu |
| `--rc-no-auth` | Wyłącza uwierzytelnianie, nadaje się tylko do zaufanego lokalnego użytku |
| `--rc-user` | Ustawia nazwę użytkownika RC |
| `--rc-pass` | Ustawia hasło RC |
| `--rc-addr` | Definiuje adres i port nasłuchu |
| `--rc-allow-origin` | Pozwala na dostęp z przeglądarki z określonego źródła |
| `--rc-web-gui-no-open-browser` | Zapobiega automatycznemu otwieraniu przeglądarki na systemach bez GUI |
| `--rc-user-from-header` | Akceptuje uwierzytelnionego użytkownika z nagłówka reverse proxy |

### Wyjaśnienie placeholderów

Używaj poniższych placeholderów w przykładach:

| Placeholder | Znaczenie |
|---|---|
| `[your_dashboard_directory]` | Folder z rozpakowanymi plikami panelu |
| `[your_rc_username]` | Nazwa użytkownika do uwierzytelniania `rclone rcd` |
| `[your_rc_password]` | Hasło do uwierzytelniania `rclone rcd` |
| `[your_server_ip]` | Publiczny lub prywatny adres IP Twojego serwera |

## Konfiguracja dostępu przez przeglądarkę

Po uruchomieniu `rclone rcd` otwórz w przeglądarce adres panelu.

### Dostęp lokalny

Jeśli uruchomiłeś usługę lokalnie na tym samym komputerze, otwórz:

```text
http://127.0.0.1:5572
```

### Dostęp zdalny

Jeśli uruchomiłeś usługę na zdalnym serwerze Linux lub Windows i zezwoliłeś na dostęp z zewnątrz, otwórz:

```text
http://[your_server_ip]:5572
```

Jeśli korzystasz z domeny i reverse proxy, otwórz skonfigurowany adres, np.:

```text
https://[your_domain]
```

:::info Dopasowanie Allowed Origin
Wartość użyta w `--rc-allow-origin` powinna odpowiadać adresowi, z którego faktycznie korzystasz w przeglądarce. Jeśli się nie zgadza, panel może nie połączyć się poprawnie.
:::

## Użycie reverse proxy

Reverse proxy przydaje się, jeśli chcesz mieć ładniejsze URL-e, HTTPS lub dodatkową kontrolę dostępu.

### Przykład Nginx

Poniższy przykład serwuje rozpakowane statyczne pliki panelu przez `Nginx`:

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root /path/to/extracted/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Przykład Caddy

Poniższy przykład serwuje statyczne pliki panelu przez `Caddy`:

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Hosting statycznego frontendu
Te przykłady serwują tylko pliki frontendu. Nadal potrzebujesz działającego backendu `rclone rcd`, do którego panel się podłączy.
:::

## Zaawansowane uwierzytelnianie z reverse proxy

Projekt dokumentuje też zaawansowaną konfigurację, gdzie uwierzytelnianie obsługuje zewnętrzna brama i przekazuje je do Rclone przez `--rc-user-from-header`.

### Przykład Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Przykład reverse proxy Caddy

```caddy
@rclone host [your_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::caution Zaawansowane uwierzytelnianie wymaga testów
Ta konfiguracja zależy od poprawnego przekazywania nagłówków przez reverse proxy i bramę uwierzytelniania. Jeśli nagłówek jest brakujący lub źle skonfigurowany, dostęp może nie działać lub zachowywać się nieprzewidywalnie.
:::

## Weryfikacja instalacji

Gdy wszystko działa, sprawdź, czy panel ładuje się poprawnie.

### Podstawowe kontrole

Potwierdź następujące punkty:

| Sprawdzenie | Oczekiwany rezultat |
|---|---|
| Proces `rclone rcd` działa | Brak błędów startowych w konsoli lub logach |
| Port `5572` nasłuchuje | Usługa jest dostępna lokalnie lub zdalnie |
| Przeglądarka otwiera skonfigurowany URL | Ładuje się interfejs Yet Another Rclone Dashboard |
| Uwierzytelnianie działa | Możesz się zalogować, jeśli włączono uwierzytelnianie RC |

### Typowe problemy

| Problem | Możliwa przyczyna | Sugerowane działanie |
|---|---|---|
| Panel się nie ładuje | Zły URL lub usługa nie działa | Sprawdź wartość `--rc-addr` i status procesu |
| Błędy połączenia w przeglądarce | Port zablokowany przez zaporę | Zezwól na ruch przychodzący na `5572/tcp` jeśli potrzeba |
| Nie można się zalogować | Błędne `--rc-user` lub `--rc-pass` | Uruchom ponownie `rclone rcd` z poprawnymi danymi |
| Frontend się ładuje, ale wywołania API nie działają | Niepasujące `--rc-allow-origin` | Ustaw origin dokładnie na URL z przeglądarki |
| Brak dostępu zdalnego | Usługa nasłuchuje tylko na `127.0.0.1` | Użyj `0.0.0.0:5572`, jeśli chcesz dostęp zdalny |

:::danger Publiczne wystawienie bez zabezpieczeń
Nie wystawiaj panelu bezpośrednio do internetu bez uwierzytelniania lub bezpiecznego reverse proxy. Jeśli planujesz używać tego jako zdalnej przeglądarki rclone lub zarządzać zdalnymi `rclone google drive` przez sieć, najpierw zabezpiecz punkt dostępu.
:::

## Dodatkowe uwagi dla Linux i Windows

### Linux

Linux to zwykle najprostsze środowisko do długotrwałego uruchamiania `rclone rcd`. Możesz uruchomić polecenie ręcznie, przez terminal multiplexer lub jako usługę, w zależności od projektu systemu.

### Windows

Na Windows upewnij się, że ścieżka podana w `--rc-files` wskazuje na rozpakowany katalog panelu oraz że zapora pozwala na ruch na skonfigurowanym porcie, jeśli potrzebujesz dostępu zdalnego.

### Uwaga o Dockerze

Materiał źródłowy wspomina Docker jako opcjonalną zależność, ale nie zawiera zweryfikowanej procedury wdrożenia Dockera dla tego projektu. Jeśli chcesz korzystać z workflow `rclone docker`, sprawdź repozytorium upstream przed dalszymi krokami, zamiast zakładać gotową konfigurację kontenera.

## Conclusion

Gratulacje, pomyślnie skonfigurowałeś Yet Another Rclone Dashboard na Linuxie lub Windowsie. W razie dalszych pytań lub potrzeby pomocy, nie wahaj się skontaktować z naszym zespołem wsparcia, który jest dostępny codziennie, aby Ci pomóc! 🙂