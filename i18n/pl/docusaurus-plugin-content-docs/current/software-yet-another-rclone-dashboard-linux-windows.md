---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to use Yet Another Rclone Dashboard as an rclone gui for Linux and Windows, including rclone download and browser-based dashboard access -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard to nowoczesny webowy panel do zarządzania `rclone rcd` przez przeglądarkę. W tym poradniku dowiesz się, do czego służy to oprogramowanie, jakie ma wymagania i jak je skonfigurować na Linuxie lub Windowsie z Rclone.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, potrzebujesz działającej instalacji [Rclone](https://rclone.org/), ponieważ ten panel jest zaprojektowany do łączenia się z `rclone rcd`, a nie do działania jako samodzielny backend.

### Wymagania

Poniższe wymagania opierają się na dostępnych informacjach z projektu i dostarczonym szkicu konfiguracji.

| Wymaganie | Szczegóły |
| --- | --- |
| System operacyjny | Linux lub Windows |
| Wymagane oprogramowanie | `rclone` |
| Zalecana wersja Rclone | `v1.72.0` lub nowsza |
| Opcjonalne oprogramowanie | `Nginx`, `Caddy` lub inny serwer www, jeśli chcesz serwować statyczne pliki osobno |
| Opcjonalne zależności do budowy | `Node.js`, jeśli planujesz budować projekt ze źródeł |
| Domyślny port RC | `5572/tcp` |

:::info Rclone jest wymagany
Yet Another Rclone Dashboard to frontend dla `rclone rcd`. Nie możesz go używać bez działającej instancji zdalnego sterowania Rclone.
:::

### Dostęp i kwestie sieciowe

Upewnij się też, że system, na którym uruchamiasz Rclone, pozwala na dostęp do skonfigurowanego portu, jeśli chcesz otworzyć panel zdalnie.

| Scenariusz | Zalecany adres wiązania | Przykładowy URL |
| --- | --- | --- |
| Dostęp lokalny | `127.0.0.1:5572` | `http://127.0.0.1:5572` |
| Dostęp zdalny w sieci | `0.0.0.0:5572` | `http://[your_server_ip]:5572` |
| Konfiguracja reverse proxy | `127.0.0.1:5572` | `https://[your_domain]` |

:::caution Bezpieczne wystawianie panelu
Jeśli powiążesz Rclone z `0.0.0.0`, usługa może być dostępna z innych systemów. Powinieneś użyć uwierzytelniania i jeśli to możliwe, reverse proxy z HTTPS.
:::

## O Yet Another Rclone Dashboard

Yet Another Rclone Dashboard to webowy frontend dla trybu demona Rclone. Według repozytorium projektu obsługuje łączenie się z `rclone rcd`, wiele profili połączeń, podgląd zdalnych, import i eksport konfiguracji, przeglądanie plików oraz zarządzanie transferami.

Oznacza to, że możesz go używać jako `rclone gui` lub `rclone browser` do typowych zadań, które normalnie wymagałyby bezpośredniej pracy w terminalu.

### Szczegóły projektu

| Element | Wartość |
| --- | --- |
| Nazwa | Yet Another Rclone Dashboard |
| Kategoria | Frontend |
| Źródło | [Repozytorium GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Ostatnia wersja | `v0.3.8` |
| Plik wydania | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Zalecany backend | `rclone rcd` |

### Obsługiwany model użytkowania

Informacje z projektu potwierdzają, że panel jest przeznaczony do pracy z trybem zdalnego sterowania Rclone. Dokładne zachowanie pakowania specyficzne dla systemu operacyjnego nie jest w pełni udokumentowane, więc poradnik skupia się na zweryfikowanych metodach wdrożenia z repozytorium.

## Metody instalacji

Yet Another Rclone Dashboard możesz wdrożyć na kilka sposobów, w zależności od tego, jak chcesz mieć do niego dostęp. Najprostsza metoda to pozwolić Rclone samemu serwować pliki panelu.

### Metoda 1: Serwowanie panelu z `--rc-files`

Ta metoda używa wyodrębnionych plików panelu i każe `rclone rcd` serwować je bezpośrednio.

#### Pobierz pliki wydania

Pobierz najnowszy archiwum wydania ze strony GitHub projektu:

- [Wydania Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard/releases)

W momencie pisania poradnika najnowszy plik to:

- `yet-another-rclone-dashboard-v0.3.8.zip`

Wypakuj archiwum do folderu na serwerze lub lokalnym systemie.

:::note Zamień ścieżki zastępcze
W poniższych poleceniach zamień `[your_dashboard_path]` na folder zawierający wypakowane pliki panelu.
:::

#### Przykład Linux

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Przykład Windows

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Przykład serwera zdalnego z uwierzytelnianiem

Na serwerze bez GUI użyj uwierzytelniania i powiąż tylko z adresem dostępnym z zewnątrz, jeśli to konieczne.

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Metoda 2: Użyj wbudowanego fetchera web GUI Rclone

Dostarczony szkic konfiguracji odnosi się też do wbudowanego fetchera web GUI Rclone. Może on automatycznie pobrać i serwować panel bez ręcznego rozpakowywania.

#### Przykład Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Przykład Windows

```powershell
rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### Przykład serwera zdalnego

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip Używaj fetchera dla łatwiejszych aktualizacji
Jeśli chcesz prostszy workflow pobierania plików panelu, metoda z fetcherem może być wygodniejsza niż ręczne pobieranie archiwów.
:::

### Metoda 3: Serwuj statyczne pliki przez serwer www

Ponieważ Yet Another Rclone Dashboard to statyczna aplikacja webowa, możesz też serwować frontend osobno przez standardowy serwer www, np. [Nginx](https://nginx.org/) lub [Caddy](https://caddyserver.com/).

W tej konfiguracji Rclone nadal zapewnia backend przez `rclone rcd`, a twój serwer www serwuje pliki frontendowe.

#### Przykład Nginx

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

#### Przykład Caddy

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note Oddziel frontend i backend
Jeśli używasz osobnego serwera www, upewnij się, że frontend nadal może się połączyć z endpointem RC Rclone. W takim wypadku wartość `--rc-allow-origin` jest szczególnie ważna.
:::

## Ważne opcje Rclone

Poniższe opcje są najważniejsze przy konfiguracji Yet Another Rclone Dashboard.

| Opcja | Cel |
| --- | --- |
| `--rc-files` | Serwuje statyczne pliki panelu z lokalnego katalogu |
| `--rc-web-gui` | Włącza mechanizm web GUI Rclone |
| `--rc-web-fetch-url` | Definiuje URL źródła wydania do pobrania panelu |
| `--rc-serve` | Serwuje interfejs RC przez HTTP |
| `--rc-addr` | Ustawia adres IP i port nasłuchu |
| `--rc-no-auth` | Wyłącza uwierzytelnianie |
| `--rc-user` | Ustawia nazwę użytkownika RC |
| `--rc-pass` | Ustawia hasło RC |
| `--rc-allow-origin` | Pozwala na dostęp z przeglądarki z określonego źródła |
| `--rc-web-gui-no-open-browser` | Zapobiega automatycznemu otwieraniu przeglądarki |
| `--rc-user-from-header` | Akceptuje użytkownika z nagłówka zaufanego reverse proxy |

### Wybór poprawnego `--rc-allow-origin`

Powinieneś ustawić `--rc-allow-origin` na dokładny URL, którego używasz w przeglądarce.

| Metoda dostępu | Przykładowa wartość |
| --- | --- |
| Dostęp lokalny | `http://127.0.0.1:5572` |
| Dostęp bezpośredni po IP | `http://[your_server_ip]:5572` |
| Reverse proxy z HTTPS | `https://[your_domain]` |

:::caution Niepasujące originy mogą zepsuć panel
Jeśli `--rc-allow-origin` nie będzie zgodne z faktycznym URL w przeglądarce, panel może nie połączyć się z Rclone z powodu zabezpieczeń przeglądarki.
:::

## Zaawansowana konfiguracja reverse proxy

Jeśli chcesz umieścić panel za bramką uwierzytelniającą, szkic konfiguracji zawiera przykład zaawansowany z reverse proxy i `--rc-user-from-header`.

### Przykład Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Przykład Caddy

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

:::danger Ufać tylko nagłówkom z twojego proxy
Opcję `--rc-user-from-header` powinieneś używać tylko, gdy Rclone jest powiązany z zaufanym lokalnym interfejsem, np. `127.0.0.1`, i dostępny tylko przez reverse proxy. W przeciwnym razie klient może podszyć się pod nagłówki.
:::

## Pierwsze uruchomienie i weryfikacja

Po wybraniu metody wdrożenia możesz sprawdzić, czy panel działa poprawnie.

### Uruchom usługę

Uruchom `rclone rcd` z wybraną komendą i pozostaw proces działający.

### Otwórz panel

Otwórz odpowiedni URL w przeglądarce:

- `http://127.0.0.1:5572`
- `http://[your_server_ip]:5572`
- `https://[your_domain]`

### Potwierdź poprawny dostęp

Jeśli wszystko jest skonfigurowane poprawnie, zobaczysz interfejs Yet Another Rclone Dashboard i będziesz mógł połączyć się z backendem Rclone.

Możesz wtedy przeglądać zdalne, pliki i zarządzać transferami, w zależności od konfiguracji Rclone.

## Rozwiązywanie problemów

Jeśli panel się nie ładuje lub nie może się połączyć, sprawdź poniższe punkty.

### Typowe problemy

| Problem | Możliwa przyczyna | Sugerowane działanie |
| --- | --- | --- |
| Przeglądarka nie otwiera strony | Rclone nie działa | Uruchom ponownie `rclone rcd` i sprawdź output w terminalu |
| Panel się ładuje, ale nie łączy | `--rc-allow-origin` jest niepoprawne | Ustaw na dokładny URL przeglądarki |
| Dostęp zdalny nie działa | Port `5572` jest zablokowany | Otwórz port w zaporze lub użyj reverse proxy |
| Uwierzytelnianie nie działa | Błędny `--rc-user` lub `--rc-pass` | Sprawdź swoje dane logowania |
| Reverse proxy nie działa | Niepasujące nagłówki lub origin | Sprawdź nagłówki proxy i `--rc-allow-origin` |

### Przegląd logów

Zawsze najpierw sprawdź output konsoli Rclone. Dostarczony materiał nie zawiera ścieżki do logów specyficznych dla Yet Another Rclone Dashboard, więc najpewniejszym krokiem jest analiza aktywnego outputu procesu Rclone.

:::tip Preferuj HTTPS przy dostępie zdalnym
Jeśli chcesz mieć dostęp do panelu przez internet, lepiej umieść go za reverse proxy z TLS zamiast wystawiać czysty HTTP.
:::

## Dodatkowe uwagi

Szkic konfiguracji wspomina o opcjonalnych scenariuszach Docker i budowy ze źródeł, ale pobrany materiał nie zawiera zweryfikowanych instrukcji wdrożenia Dockera. Dlatego poradnik nie podaje komendy Docker, by nie dokumentować niepotwierdzonego zachowania.

Podobnie dokładna nazwa katalogu build może się różnić w zależności od struktury archiwum, więc przed ustawieniem `[your_dashboard_path]` warto potwierdzić zawartość wypakowanego folderu.

## Conclusion

Congratulations, you have successfully set up Yet Another Rclone Dashboard with Rclone on Linux or Windows. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂