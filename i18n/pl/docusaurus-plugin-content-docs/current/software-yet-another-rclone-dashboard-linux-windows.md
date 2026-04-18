---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Dowiedz się, jak skonfigurować Yet Another Rclone Dashboard jako nowoczesny interfejs GUI i przeglądarkę rclone dla systemów Linux i Windows. -> Dowiedz się więcej teraz"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard to nowoczesny webowy panel do `rclone rcd`, który daje Ci graficzny interfejs do przeglądania plików, inspekcji zdalnych lokalizacji i zarządzania konfiguracją Rclone. W tym poradniku nauczysz się, jak go uruchomić na Linuxie lub Windowsie i bezpiecznie połączyć z działającym demonem Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, upewnij się, że Twój system spełnia podstawowe wymagania i że Rclone jest już zainstalowany.

### Requirements

| Wymaganie | Szczegóły |
|---|---|
| System operacyjny | Linux lub Windows |
| Wersja Rclone | Zalecana `v1.72.0` lub nowsza |
| Metoda dostępu | Konsola lokalna, SSH lub RDP |
| Sieć | Dostęp do URL panelu z przeglądarki |
| Domyślny port | `5572/tcp` |

### What you need to know first

Yet Another Rclone Dashboard nie jest samodzielną usługą storage. To frontend dla `rclone rcd`, czyli trybu demona zdalnego sterowania Rclone. Oznacza to, że musisz uruchomić `rclone rcd` z odpowiednimi opcjami webowymi, aby panel mógł się załadować i komunikować z backendem.

:::info Rclone jest wymagany
Musisz mieć działającą instalację [Rclone](https://rclone.org/) przed użyciem tego panelu. Jeśli Rclone nie jest jeszcze zainstalowany, najpierw go zainstaluj i skonfiguruj.
:::

### Recommended preparation checklist

| Zadanie | Dlaczego to ważne |
|---|---|
| Zainstaluj Rclone | Wymagane do uruchomienia `rclone rcd` |
| Skonfiguruj przynajmniej jedno zdalne | Potrzebne, jeśli chcesz przeglądać chmurę, np. `rclone google drive` |
| Otwórz lub przekieruj wymagany port | Potrzebne do zdalnego dostępu przez przeglądarkę |
| Wybierz dostęp lokalny lub zdalny | Określa, czy wymagana jest autoryzacja |

## Understanding how the dashboard works

Yet Another Rclone Dashboard to statyczna aplikacja webowa łącząca się z API zdalnego sterowania Rclone. Możesz serwować pliki panelu bezpośrednio przez Rclone lub hostować frontend osobno na serwerze WWW, np. Nginx lub Caddy.

### Main features

Na podstawie opublikowanych informacji, panel oferuje następujące funkcje:

| Funkcja | Opis |
|---|---|
| Wiele profili połączeń | Połącz się z różnymi instancjami `rclone rcd` |
| Informacje o systemie | Podgląd statusu Rclone i środowiska |
| Inspekcja zdalnych | Przegląd dostępnych zdalnych i konfiguracji |
| Przeglądarka plików | Przeglądaj katalogi i zarządzaj plikami |
| Podgląd multimediów | Podgląd obsługiwanych treści |
| Widok transferów | Monitoruj aktywność transferów |
| Interfejs ustawień | Dostosuj opcje panelu |

### When to use this dashboard

Projekt jest przydatny, jeśli chcesz lekki `rclone gui` lub `rclone browser` zamiast pracy tylko w terminalu. Szczególnie pomocny przy zarządzaniu chmurą z VPS, serwera dedykowanego lub lokalnego Windowsa.

## Installation methods

Yet Another Rclone Dashboard możesz wdrożyć na kilka sposobów. Wybór zależy od tego, czy chcesz najprostsze ustawienie, ręczną instalację, czy reverse proxy przed usługą.

### Method 1: Serve the dashboard with local files

Ta metoda używa rozpakowanego buildu panelu z opcją `--rc-files` Rclone.

#### Download the release

Pobierz najnowszy release z GitHub projektu:

- Projekt GitHub: [Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard)
- Najnowszy zweryfikowany release w źródle: `v0.3.8`
- Archiwum release: `yet-another-rclone-dashboard-v0.3.8.zip`

Rozpakuj archiwum w wybranej lokalizacji.

Przykładowe lokalizacje:

| Platforma | Przykładowa ścieżka |
|---|---|
| Linux | `/opt/yet-another-rclone-dashboard` |
| Windows | `C:\yet-another-rclone-dashboard` |

#### Start Rclone on Linux

Jeśli uruchamiasz panel lokalnie na tej samej maszynie i chcesz tylko lokalny dostęp przez przeglądarkę, możesz związać go z `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

Jeśli chcesz mieć dostęp zdalny z innego urządzenia, użyj autoryzacji i nasłuchuj na wszystkich interfejsach.

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Start Rclone on Windows

Otwórz `Command Prompt` lub `PowerShell` i uruchom:

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

Zamień placeholdery na swoje wartości:

| Placeholder | Znaczenie |
|---|---|
| `[your_rc_username]` | Nazwa użytkownika do logowania do API Rclone |
| `[your_rc_password]` | Hasło chroniące API Rclone |
| `[your_server_ip]` | Publiczny lub prywatny adres IP do dostępu do panelu |

:::caution Nie wystawiaj niezabezpieczonego API Rclone
Nie używaj `--rc-no-auth` razem z `0.0.0.0:5572` na serwerze dostępnym z internetu. To wystawi interfejs sterowania Rclone bez ochrony.
:::

### Method 2: Use Rclone's WebGUI fetcher

Ta metoda pozwala Rclone automatycznie pobrać panel zamiast ręcznie ściągać pliki buildu. Upraszcza wdrożenie, jeśli chcesz szybkie ustawienie.

#### Local access example

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Remote access example

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

:::note Automatyczne pobieranie
Dokładna ścieżka, gdzie Rclone zapisuje pobrane pliki GUI, zależy od Twojego środowiska Rclone. Jeśli chcesz pełną kontrolę nad plikami i aktualizacjami, metoda manualna `--rc-files` jest zwykle łatwiejsza do zarządzania.
:::

### Method 3: Serve the frontend with a web server

Ponieważ projekt to statyczna aplikacja webowa, możesz hostować frontend osobno na serwerze WWW i mieć `rclone rcd` działające w tle.

#### Nginx example

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

#### Caddy example

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

To rozwiązanie jest przydatne, jeśli już korzystasz z reverse proxy i chcesz serwować panel z własnej domeny.

:::tip Najlepsza praktyka reverse proxy
Jeśli używasz domeny lub reverse proxy, ustaw `--rc-allow-origin` na dokładny URL, który otwierasz w przeglądarce, np. `https://[your_domain]`.
:::

### Method 4: Advanced reverse proxy with external authentication

Zaawansowana konfiguracja może używać zewnętrznej bramki autoryzacyjnej i przekazywać uwierzytelnionego użytkownika do Rclone przez nagłówek. To dla doświadczonych użytkowników.

#### Rclone example

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

#### Caddy example

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

:::danger Zaawansowana konfiguracja autoryzacji
Uwierzytelnianie oparte na nagłówkach powinno być używane tylko za zaufanym reverse proxy. Błędna konfiguracja może umożliwić nieautoryzowany dostęp do Twojej instancji Rclone.
:::

## Important Rclone options

Poniższe opcje są najważniejsze przy wdrażaniu Yet Another Rclone Dashboard.

| Opcja | Cel |
|---|---|
| `--rc-files` | Serwuje rozpakowane pliki panelu przez Rclone |
| `--rc-web-gui` | Włącza wsparcie GUI webowego przez Rclone |
| `--rc-web-fetch-url` | Pobiera metadane release GUI z zewnętrznego źródła |
| `--rc-user` | Ustawia nazwę użytkownika API |
| `--rc-pass` | Ustawia hasło API |
| `--rc-no-auth` | Wyłącza autoryzację |
| `--rc-addr` | Definiuje adres i port nasłuchu |
| `--rc-allow-origin` | Pozwala na dostęp z przeglądarki z określonego źródła |
| `--rc-web-gui-no-open-browser` | Zapobiega automatycznemu otwarciu przeglądarki |
| `--rc-user-from-header` | Akceptuje uwierzytelnionego użytkownika z nagłówka reverse proxy |

## Configuration guidance

Po wyborze metody instalacji, sprawdź główne wartości konfiguracyjne przed pierwszym użyciem.

### Authentication settings

Jeśli panel jest używany tylko lokalnie na Twoim komputerze, dostęp lokalny bez autoryzacji może być akceptowalny. W przypadku zdalnego lub publicznego dostępu zawsze stosuj autoryzację.

| Typ dostępu | Zalecane ustawienie |
|---|---|
| Tylko lokalny | `127.0.0.1` z opcjonalnym `--rc-no-auth` |
| Dostęp LAN lub internet | `0.0.0.0` z `--rc-user` i `--rc-pass` |
| Reverse proxy z domeną | `127.0.0.1` lub prywatny bind plus autoryzacja proxy |

### Allowed origin

Wartość `--rc-allow-origin` musi odpowiadać URL, z którego przeglądarka ładuje panel.

Przykłady:

| URL dostępu | Pasujący `--rc-allow-origin` |
|---|---|
| `http://127.0.0.1:5572` | `http://127.0.0.1:5572` |
| `http://[your_server_ip]:5572` | `http://[your_server_ip]:5572` |
| `https://[your_domain]` | `https://[your_domain]` |

Jeśli wartość nie pasuje, przeglądarka może blokować żądania, a panel może się nie załadować poprawnie.

## Starting and verifying the dashboard

Gdy polecenie działa, otwórz skonfigurowany adres w przeglądarce.

### What to expect

Jeśli konfiguracja jest poprawna, zobaczysz interfejs Yet Another Rclone Dashboard i będziesz mógł połączyć się z skonfigurowanym demonem Rclone.

Typowe przykłady:

| Scenariusz | URL |
|---|---|
| Lokalny dostęp Linux lub Windows | `http://127.0.0.1:5572` |
| Zdalny dostęp po IP | `http://[your_server_ip]:5572` |
| Dostęp przez reverse proxy | `https://[your_domain]` |

### Basic verification steps

1. Uruchom `rclone rcd` wybraną metodą.
2. Otwórz URL panelu w przeglądarce.
3. Zaloguj się, jeśli włączona jest autoryzacja.
4. Sprawdź, czy widać zdalne lokalizacje, funkcje przeglądarki plików lub informacje o statusie.
5. Przetestuj prostą akcję odczytu, np. otwarcie katalogu.

## Troubleshooting

Jeśli panel się nie ładuje lub nie łączy poprawnie, sprawdź poniższe typowe przyczyny.

### Connection refused

Jeśli pojawia się błąd odmowy połączenia, sprawdź:

- czy `rclone rcd` faktycznie działa
- czy używany jest poprawny port `5572`
- czy usługa nasłuchuje na oczekiwanym interfejsie
- czy zapora sieciowa pozwala na dostęp przy potrzebie

### Browser origin or login issues

Jeśli strona się ładuje, ale żądania API nie działają:

- zweryfikuj `--rc-allow-origin`
- potwierdź, że URL w przeglądarce dokładnie pasuje do dozwolonego źródła
- sprawdź `--rc-user` i `--rc-pass`
- upewnij się, że reverse proxy poprawnie przekazuje żądania

### File path issues

Jeśli używasz `--rc-files` i interfejs się nie pojawia:

- potwierdź, że rozpakowane pliki panelu są w poprawnym katalogu
- zweryfikuj składnię ścieżki dla Linuxa lub Windowsa
- upewnij się, że zawartość archiwum została rozpakowana, a nie tylko pobrana

:::tip Sprawdź output konsoli Rclone
Rclone zwykle wypisuje przydatne informacje startowe i błędy bezpośrednio w terminalu. Sprawdź ten output najpierw, jeśli panel, `rclone download` lub funkcje przeglądarki zdalnej nie działają poprawnie.
:::

## Security recommendations

Panel sterujący Rclone ma dostęp do zdalnych lokalizacji i operacji na plikach, więc bezpieczeństwo jest ważne.

| Zalecenie | Powód |
|---|---|
| Używaj autoryzacji przy dostępie zdalnym | Chroni API Rclone |
| Wiąż z `127.0.0.1` jeśli to możliwe | Zmniejsza ekspozycję |
| Używaj HTTPS za reverse proxy | Chroni dane uwierzytelniające w tranzycie |
| Ogranicz ekspozycję zapory | Zmniejsza powierzchnię ataku |
| Używaj silnych danych logowania | Zapobiega nieautoryzowanemu dostępowi |

:::caution Wrażliwe zdalne lokalizacje
Jeśli Twoja konfiguracja Rclone obejmuje chmurę, np. Google Drive, niebezpieczne wystawienie panelu może też ujawnić dostęp do tych lokalizacji i danych.
:::

## Additional project information

Projekt jest opublikowany na GitHub i był prezentowany w Self-Host Weekly 10 kwietnia 2026.

| Element | Wartość |
|---|---|
| Nazwa projektu | Yet Another Rclone Dashboard |
| Kategoria | Frontend |
| Źródło | [Repozytorium GitHub](https://github.com/outlook84/y