---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Skonfiguruj Yet Another Rclone Dashboard, nowoczesny interfejs rclone gui i przeglądarkę rclone dla Linux i Windows, aby bezpiecznie zarządzać swoim demonem rclone -> Dowiedz się więcej teraz"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard to nowoczesny webowy panel do `rclone rcd`, który daje Ci graficzny interfejs do zarządzania zdalnymi lokalizacjami, przeglądania plików i monitorowania transferów. W tym poradniku nauczysz się, jak go wdrożyć na Linuxie lub Windowsie i podłączyć do istniejącej konfiguracji Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, upewnij się, że Twój system spełnia podstawowe wymagania i że Rclone jest już zainstalowany.

### Wymagania

| Komponent | Wymaganie |
| --- | --- |
| System operacyjny | Linux lub Windows |
| Wersja Rclone | Zalecana `v1.72.0` lub nowsza |
| Metoda dostępu | Lokalna powłoka, SSH lub RDP |
| Domyślny port | `5572/tcp` |
| Opcjonalne | Reverse proxy, np. Nginx lub Caddy |

### Co potrzebujesz przed instalacją

Potrzebujesz:

- Działającej instalacji [Rclone](https://rclone.org/)
- Co najmniej jednego skonfigurowanego zdalnego miejsca Rclone, jeśli chcesz mieć dostęp do chmury, np. *rclone Google Drive*
- Dostępu do otwartego lub przekierowanego portu `5572`, jeśli chcesz łączyć się zdalnie
- Przeglądarki do dostępu do panelu

:::info Wymaganie Rclone
Yet Another Rclone Dashboard to tylko frontend dla `rclone rcd`. Nie zastępuje samego Rclone, więc musisz najpierw zainstalować i skonfigurować Rclone.
:::

### Ważne placeholdery używane w tym poradniku

Poniższe polecenia używają placeholderów, które musisz zastąpić własnymi wartościami.

| Placeholder | Znaczenie |
| --- | --- |
| `[your_dashboard_path]` | Ścieżka, gdzie przechowywane są pliki dashboardu |
| `[your_server_ip]` | Publiczny lub prywatny adres IP Twojego serwera |
| `[your_domain]` | Nazwa domeny używana do dostępu przez reverse proxy |
| `[your_rc_user]` | Nazwa użytkownika do uwierzytelniania Rclone RC |
| `[your_rc_password]` | Hasło do uwierzytelniania Rclone RC |

## O Yet Another Rclone Dashboard

Yet Another Rclone Dashboard to statyczny frontend webowy opublikowany na [GitHub](https://github.com/outlook84/yet-another-rclone-dashboard). Według README projektu jest zaprojektowany dla `rclone rcd` i wspiera funkcje takie jak:

- łączenie się z Rclone w trybie demona
- zarządzanie wieloma profilami połączeń
- podgląd informacji o systemie i statusu
- przeglądanie katalogów
- praca ze zdalnymi lokalizacjami i konfiguracją

Ponieważ to frontend, faktyczne operacje na plikach wykonuje nadal Rclone. Oznacza to, że dashboard wymaga działającej instancji `rclone rcd`.

## Metody instalacji

Dashboard możesz wdrożyć na kilka sposobów, w zależności od tego, jak chcesz mieć do niego dostęp. Najpopularniejsze metody to użycie Rclone bezpośrednio z plikami statycznymi lub pozwolenie Rclone na automatyczne pobranie GUI.

### Przegląd instalacji

| Metoda | Najlepsze zastosowanie | Uwagi |
| --- | --- | --- |
| `--rc-files` | Ręczne wdrożenia | Sam pobierasz i rozpakowujesz dashboard |
| `--rc-web-gui` z `--rc-web-fetch-url` | Szybka konfiguracja | Rclone pobiera najnowszą wersję dashboardu |
| Zewnętrzny serwer WWW | Własny hosting | Przydatne z Nginx lub Caddy |
| Reverse proxy z bramką auth | Zaawansowane konfiguracje | Najlepsze do zabezpieczonego dostępu zdalnego |

## Pobierz dashboard ręcznie

Jeśli chcesz mieć pełną kontrolę nad wersją, możesz pobrać najnowsze wydanie ręcznie z GitHub projektu.

### Linux

Utwórz katalog dla dashboardu, pobierz najnowszy archiwum i rozpakuj je.

```bash
mkdir -p [your_dashboard_path]
cd [your_dashboard_path]
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip
```

### Windows

Na Windows pobierz archiwum z oficjalnej strony GitHub i rozpakuj do folderu, np.:

```text
C:\rclone-dashboard
```

:::note Wersja wydania
W momencie pisania poradnika najnowszą zweryfikowaną wersją jest `v0.3.8`. Jeśli dostępna jest nowsza, możesz jej użyć.
:::

## Uruchom dashboard z Rclone

Gdy pliki są dostępne, możesz uruchomić `rclone rcd` i serwować dashboard przez Rclone.

### Dostęp lokalny na Linuxie

Użyj tej metody, jeśli chcesz mieć dostęp do dashboardu tylko lokalnie na tym samym systemie.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Dostęp zdalny na Linuxie

Użyj tej metody, jeśli chcesz mieć dostęp do dashboardu z innego urządzenia w sieci.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Dostęp lokalny na Windowsie

Otwórz Wiersz polecenia lub PowerShell i uruchom:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

### Dostęp zdalny na Windowsie

Dla dostępu zdalnego uruchom:

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-web-gui-no-open-browser --rc-user="[your_rc_user]" --rc-pass="[your_rc_password]" --rc-addr=0.0.0.0:5572 --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution Nie wystawiaj niezabezpieczonego GUI Rclone
Jeśli wiążesz Rclone z `0.0.0.0`, nie używaj `--rc-no-auth`. Zawsze zabezpieczaj dostęp zdalny uwierzytelnianiem lub reverse proxy.
:::

## Użyj Rclone WebGUI Fetcher

Rclone może też automatycznie pobrać dashboard z GitHub. To wygodne, jeśli nie chcesz ręcznie pobierać i rozpakowywać plików.

### Tryb lokalny

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Tryb zdalny

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Automatyczne aktualizacje
Ta metoda jest wygodna, jeśli chcesz, aby Rclone automatycznie pobierał najnowszą wersję dashboardu. To często najszybsza opcja do testowania nowego GUI rclone.
:::

## Serwuj dashboard przez serwer WWW

Ponieważ Yet Another Rclone Dashboard to statyczny frontend, możesz też hostować go na standardowym serwerze WWW i mieć `rclone rcd` uruchomiony osobno w tle.

### Przykład Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_dashboard_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Przykład Caddy

```caddy
[your_domain] {
    root * [your_dashboard_path]
    file_server
}
```

Ta metoda jest przydatna, jeśli już używasz reverse proxy lub chcesz mieć czystszy dostęp do aplikacji dashboardu przez domenę.

## Zaawansowana konfiguracja reverse proxy

Jeśli chcesz zabezpieczyć dostęp przez zewnętrzną warstwę uwierzytelniania, możesz użyć reverse proxy przed Rclone i przekazać uwierzytelnionego użytkownika przez nagłówek.

### Komenda Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Przykład Caddy z przekazanym nagłówkiem użytkownika

```caddy
@rclone host [your_domain]
handle @rclone {
    reverse_proxy 127.0.0.1:5572 {
        header_up X-Remote-User {http.auth.user.id}
        header_up -Authorization
    }
}
```

:::info Zaawansowane uwierzytelnianie
Dokładna implementacja bramki uwierzytelniania zależy od Twojego środowiska. Powyższy przykład pokazuje tylko wzorzec integracji Rclone i reverse proxy. Jeśli używasz dodatkowego oprogramowania, np. dostawcy tożsamości lub wtyczki Caddy, skonfiguruj je zgodnie z oficjalną dokumentacją tego oprogramowania.
:::

## Referencja konfiguracji

Najważniejsze opcje Rclone RC używane z tym dashboardem to:

| Opcja | Cel |
| --- | --- |
| `--rc-files` | Serwuje rozpakowane pliki dashboardu |
| `--rc-web-gui` | Włącza wsparcie dla Rclone WebGUI |
| `--rc-web-fetch-url` | Pobiera metadane wydania dashboardu z GitHub |
| `--rc-no-auth` | Wyłącza uwierzytelnianie, nadaje się tylko do użytku lokalnego |
| `--rc-user` | Ustawia nazwę użytkownika Rclone RC |
| `--rc-pass` | Ustawia hasło Rclone RC |
| `--rc-addr` | Definiuje adres i port nasłuchu |
| `--rc-allow-origin` | Pozwala na dostęp z przeglądarki z określonego URL |
| `--rc-web-gui-no-open-browser` | Zapobiega automatycznemu otwieraniu przeglądarki |
| `--rc-user-from-header` | Akceptuje uwierzytelnionego użytkownika z nagłówka proxy |

### Wybór poprawnego `--rc-allow-origin`

Ustaw `--rc-allow-origin` na dokładny URL, którego używasz w przeglądarce.

| Typ dostępu | Przykładowa wartość |
| --- | --- |
| Dostęp lokalny | `http://127.0.0.1:5572` |
| Dostęp zdalny po IP | `http://[your_server_ip]:5572` |
| Reverse proxy z HTTPS | `https://[your_domain]` |

:::caution Origin musi się zgadzać
Jeśli `--rc-allow-origin` nie będzie zgodny z URL używanym w przeglądarce, dashboard może się nie załadować poprawnie z powodu ograniczeń bezpieczeństwa przeglądarki.
:::

## Dostęp i weryfikacja dashboardu

Gdy `rclone rcd` działa, otwórz dashboard w przeglądarce.

### Popularne adresy dostępu

| Scenariusz | URL |
| --- | --- |
| Lokalna maszyna | `http://127.0.0.1:5572` |
| Zdalnie po IP | `http://[your_server_ip]:5572` |
| Reverse proxy | `https://[your_domain]` |

### Co sprawdzić po uruchomieniu

Po otwarciu strony zweryfikuj:

- czy interfejs Yet Another Rclone Dashboard się ładuje
- czy widoczne są skonfigurowane zdalne lokalizacje
- czy działa przeglądanie plików w widoku przeglądarki Rclone
- czy panele transferów i informacji systemowych reagują poprawnie

Jeśli strona się nie ładuje, najpierw sprawdź konsolę Rclone. Najczęstsze przyczyny to błędy uwierzytelniania, niezgodność origin i problemy z wiązaniem portu.

## Zalecenia bezpieczeństwa

Uruchomienie dashboardu do zarządzania chmurą wymaga ostrożnych ustawień bezpieczeństwa, zwłaszcza jeśli wystawiasz go do internetu.

### Zalecane praktyki bezpieczeństwa

| Zalecenie | Powód |
| --- | --- |
| Używaj `--rc-user` i `--rc-pass` dla dostępu zdalnego | Zapobiega nieautoryzowanemu dostępowi |
| Preferuj HTTPS przez reverse proxy | Chroni dane uwierzytelniające w trakcie transmisji |
| Wiąż z `127.0.0.1` jeśli to możliwe | Ogranicza ekspozycję |
| Ogranicz dostęp zapory do `5572/tcp` | Zmniejsza powierzchnię ataku |
| Unikaj `--rc-no-auth` w sieciach publicznych | Zapobiega otwartemu dostępowi do instancji Rclone |

:::danger Ryzyko publicznej ekspozycji
Niezabezpieczona i wystawiona instancja `rclone rcd` może umożliwić dostęp do Twoich skonfigurowanych zdalnych lokalizacji i plików. Jeśli zastanawiasz się „czy rclone jest bezpieczny”, odpowiedź w dużej mierze zależy od tego, jak bezpiecznie wystawiasz i uwierzytelniasz usługę.
:::

## Rozwiązywanie problemów

Jeśli dashboard nie działa zgodnie z oczekiwaniami, sprawdź poniższe kwestie.

### Strona dashboardu się nie otwiera

Możliwe przyczyny:

- `rclone rcd` nie działa
- port `5572` jest zablokowany przez zaporę
- usługa jest związana z `127.0.0.1`, a próbujesz połączyć się zdalnie

### Interfejs się ładuje, ale akcje nie działają

Możliwe przyczyny:

- niepoprawne `--rc-user` lub `--rc-pass`
- błędne `--rc-allow-origin`
- brak lub uszkodzona konfiguracja zdalnego Rclone

### Dashboard nie ładuje się przez reverse proxy

Możliwe przyczyny:

- proxy kieruje do złego backendu
- adres HTTPS nie zgadza się z `--rc-allow-origin`
- wymagane nagłówki nie są poprawnie przekazywane

### Przydatne sprawdzenia

Linux:

```bash
ss -tulpn | grep 5572
```

Windows PowerShell:

```powershell
netstat -ano | findstr 5572
```

Test lokalnego endpointu:

```bash
curl http://127.0.0.1:5572
```

:::tip Najpierw sprawdź logi Rclone
Większość problemów z uruchomieniem i połączeniem jest widoczna bezpośrednio w terminalu lub logach usługi, gdzie działa `rclone rcd`. Zawsze sprawdzaj te logi przed zmianą konfiguracji.
:::

## Dodatkowe informacje

Yet Another Rclone Dashboard był prezentowany w Self-Host Weekly 10 kwietnia 2026 i jest publicznie hostowany na GitHub. W momencie pisania poradnika projekt jest rozwiązaniem frontendowym mającym na celu poprawę doświadczenia użytkownika zarządzającego Rclone przez przeglądarkę.

Niektóre metody wdrożenia, takie jak Docker, mogą być możliwe w niestandardowych środowiskach, ale nie było dostępnych zweryfikowanych instrukcji Docker w źródłowym materiale. Dlatego ten