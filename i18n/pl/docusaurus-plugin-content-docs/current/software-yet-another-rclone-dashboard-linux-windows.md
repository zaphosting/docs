---
id: software-yet-another-rclone-dashboard-linux-windows
title: "Software - Yet Another Rclone Dashboard (Linux/Windows)"
description: "Learn how to set up Yet Another Rclone Dashboard, a modern rclone gui and rclone browser for Linux and Windows, using rclone rcd and release files from rclone GitHub -> Learn more now"
sidebar_label: Software - Yet Another Rclone Dashboard (Linux/Windows)
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Yet Another Rclone Dashboard to nowoczesny webowy panel do `rclone rcd`, który oferuje graficzny interfejs do przeglądania plików, podglądu zdalnych lokalizacji i zarządzania transferami. W tym poradniku dowiesz się, do czego służy to oprogramowanie, czego wymaga i jak uruchomić je na Linuxie lub Windowsie, korzystając z obsługiwanych metod wdrożenia.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Zanim zaczniesz, potrzebujesz działającej instalacji [Rclone](https://rclone.org/), ponieważ Yet Another Rclone Dashboard to tylko frontend dla demona zdalnego sterowania Rclone.

### Wymagania

Poniższe wymagania bazują na dostępnych informacjach o projekcie i szkicu konfiguracji.

| Wymaganie | Szczegóły |
| --- | --- |
| System operacyjny | Linux lub Windows |
| Wymagane oprogramowanie | `rclone` |
| Zalecana wersja Rclone | `v1.72.0` lub nowsza |
| Opcjonalne oprogramowanie | `Docker`, `Nginx` lub `Caddy` w zależności od metody wdrożenia |
| Domyślny port | `5572/tcp` |
| Dostęp do internetu | Wymagany, jeśli chcesz pobierać wersje lub korzystać z metody web fetch |

### Od czego zależy dashboard

Yet Another Rclone Dashboard nie zastępuje Rclone. Łączy się z `rclone rcd`, czyli *demonem zdalnego sterowania* Rclone.

| Komponent | Funkcja |
| --- | --- |
| Yet Another Rclone Dashboard | Webowy frontend |
| `rclone rcd` | Backend API i operacje na plikach |
| Zdalne lokalizacje Rclone | Twoje skonfigurowane połączenia z chmurą, np. Google Drive |

:::info Rclone jest wymagany
Nie możesz używać tego dashboardu samodzielnie. Musisz mieć zainstalowany `rclone` i uruchomić go w trybie demona z włączonym interfejsem zdalnego sterowania.
:::

### Placeholdery używane w poradniku

W kilku poleceniach w poradniku użyto placeholderów. Zastąp je swoimi wartościami przed uruchomieniem poleceń.

| Placeholder | Znaczenie |
| --- | --- |
| `[your_user]` | Nazwa użytkownika do uwierzytelniania zdalnego sterowania Rclone |
| `[your_password]` | Hasło do uwierzytelniania zdalnego sterowania Rclone |
| `[your_server_ip]` | Publiczny lub prywatny adres IP twojego serwera |
| `[your_domain]` | Nazwa domeny używana do dostępu przez reverse proxy |
| `[your_build_path]` | Ścieżka do rozpakowanych plików dashboardu |

## Dostępne metody wdrożenia

Możesz uruchomić Yet Another Rclone Dashboard na kilka sposobów, w zależności od tego, jak chcesz mieć do niego dostęp.

| Metoda | Najlepsze zastosowanie | Uwagi |
| --- | --- | --- |
| `--rc-files` | Ręczne wdrożenia | Używa rozpakowanych statycznych plików build |
| `--rc-web-gui` z `--rc-web-fetch-url` | Szybka konfiguracja | Pozwala Rclone pobrać najnowszą wersję dashboardu |
| Serwer WWW jak Nginx lub Caddy | Własny hosting | Serwuje statyczny frontend osobno |
| Reverse proxy z zewnętrzną autoryzacją | Zaawansowane konfiguracje | Przydatne, jeśli chcesz scentralizowaną autoryzację |

## Pobierz wersję dashboardu

Jeśli chcesz użyć metody ręcznej `--rc-files` lub serwować frontend własnym serwerem WWW, najpierw pobierz najnowszy archiwum z wersją z GitHub projektu.

Oficjalne źródło projektu: [Yet Another Rclone Dashboard na GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

W momencie pisania poradnika najnowsza wersja to `v0.3.8` i zawiera plik `yet-another-rclone-dashboard-v0.3.8.zip`.

### Przykład pobrania na Linux

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_build_path]
```

### Przykład pobrania na Windows

Na Windows pobierz plik `.zip` z strony wydania na GitHub i rozpakuj go do folderu, np.:

```text
C:\yet-another-rclone-dashboard
```

:::note Informacja o wersji wydania
Wersja wydania może się zmieniać z czasem. Jeśli jest dostępna nowsza wersja, użyj aktualnego pliku z GitHub projektu zamiast przykładowej wersji pokazanej tutaj.
:::

## Uruchom dashboard z Rclone rc-files

To najprostsza metoda, jeśli już pobrałeś i rozpakowałeś pliki frontendu.

### Przykład na Linux

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Przykład na Windows

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Przykład lokalny na pulpicie

Jeśli chcesz korzystać z dashboardu tylko lokalnie na tym samym systemie, możesz go związać z `127.0.0.1`.

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

:::caution Nie wystawiaj Rclone bez uwierzytelnienia
Używaj `--rc-no-auth` tylko do testów lokalnych na `127.0.0.1`. Jeśli powiążesz Rclone z `0.0.0.0`, zabezpiecz go uwierzytelnieniem lub odpowiednio skonfigurowanym reverse proxy.
:::

## Uruchom dashboard z Rclone web fetch

Rclone może automatycznie pobrać web GUI, co upraszcza wdrożenie, jeśli twoja konfiguracja to obsługuje.

### Przykład na Linux

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Przykład na Windows

```powershell
rclone rcd `
  --rc-web-gui `
  --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Wyjaśnienie ważnych flag

| Flaga | Funkcja |
| --- | --- |
| `--rc-web-gui` | Włącza obsługę web GUI w Rclone |
| `--rc-web-fetch-url` | Wskazuje Rclone metadane najnowszej wersji |
| `--rc-user` | Ustawia nazwę użytkownika do logowania |
| `--rc-pass` | Ustawia hasło do logowania |
| `--rc-addr` | Definiuje adres IP i port do nasłuchu |
| `--rc-allow-origin` | Pozwala na żądania z podanego URL w przeglądarce |
| `--rc-web-gui-no-open-browser` | Zapobiega automatycznemu otwieraniu przeglądarki |

:::tip Dokładnie dopasuj Origin
Ustaw `--rc-allow-origin` na dokładny URL, którego używasz w przeglądarce, łącznie z protokołem, np. `http://` lub `https://`. To szczególnie ważne przy korzystaniu z reverse proxy.
:::

## Serwuj dashboard przez serwer WWW

Ponieważ Yet Another Rclone Dashboard to statyczna aplikacja webowa, możesz ją też hostować na standardowym serwerze WWW, np. Nginx lub Caddy.

To rozwiązanie jest przydatne, jeśli chcesz serwować frontend na jednym porcie lub domenie, a Rclone uruchomić osobno w tle.

### Przykład Nginx

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_build_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Przykład Caddy

```caddy
[your_domain] {
    root * [your_build_path]
    file_server
}
```

### Co warto mieć na uwadze

Jeśli serwujesz frontend osobno, Rclone musi działać w tle z kompatybilnymi ustawieniami `rc`. Musisz też zapewnić, że żądania z przeglądarki są dozwolone z adresu frontendu.

| Ustawienie | Przykład |
| --- | --- |
| URL frontendu | `https://[your_domain]` |
| Adres powiązania Rclone | `127.0.0.1:5572` lub `0.0.0.0:5572` |
| Dozwolony origin | `https://[your_domain]` |

## Zaawansowana konfiguracja z autoryzacją reverse proxy

W zaawansowanych środowiskach możesz umieścić dashboard za reverse proxy i użyć zewnętrznej bramki autoryzacji. Przykład odnosi się do opcji Rclone `--rc-user-from-header`.

### Przykład Rclone

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_build_path]' \
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

:::info Zaawansowana konfiguracja autoryzacji
Ta metoda zależy od twojego reverse proxy i stosu autoryzacji. Dokładna konfiguracja narzędzi takich jak `caddy-security` wykracza poza zakres tego poradnika, ale powyższy przykład pokazuje, jak dashboard może otrzymywać nagłówek z uwierzytelnionym użytkownikiem.
:::

## Konfiguracja dostępu i bezpieczeństwa

Zanim zaczniesz korzystać z dashboardu, sprawdź najważniejsze ustawienia dostępu.

### Zalecane wartości konfiguracji

| Opcja | Zalecenie |
| --- | --- |
| `--rc-user` | Ustaw dedykowaną nazwę użytkownika, np. `zaphosting` |
| `--rc-pass` | Użyj silnego hasła |
| `--rc-addr` | Używaj `127.0.0.1:5572` za reverse proxy, jeśli to możliwe |
| `--rc-allow-origin` | Dopasuj dokładny URL używany w przeglądarce |
| Zapora sieciowa | Otwórz `5572/tcp` tylko jeśli potrzebujesz bezpośredniego dostępu |

### Najlepsze praktyki bezpieczeństwa

- Używaj uwierzytelniania przy wystawianiu usługi w sieci
- Preferuj reverse proxy z HTTPS dla dostępu publicznego
- Ogranicz bezpośredni dostęp do `5572/tcp` jeśli to możliwe
- Aktualizuj Rclone, jeśli korzystasz z niego do dostępu do chmury, np. `rclone google drive`

:::danger Ryzyko publicznego wystawienia
Dostęp zdalnego sterowania Rclone daje potężne możliwości zarządzania plikami i zdalnymi lokalizacjami. Nie wystawiaj go publicznie bez uwierzytelnienia i odpowiednich ograniczeń sieciowych.
:::

## Uruchom i zweryfikuj dashboard

Gdy masz już wybraną konfigurację, uruchom `rclone rcd` i otwórz dashboard w przeglądarce.

### Przykłady dostępu

| Scenariusz | URL |
| --- | --- |
| Dostęp lokalny | `http://127.0.0.1:5572` |
| Bezpośredni dostęp do serwera | `http://[your_server_ip]:5572` |
| Dostęp przez reverse proxy | `https://[your_domain]` |

### Co powinieneś zobaczyć

Jeśli wszystko jest poprawnie skonfigurowane, interfejs Yet Another Rclone Dashboard powinien się załadować i pozwolić na:

- połączenie z demonem Rclone
- podgląd skonfigurowanych zdalnych lokalizacji
- przeglądanie plików
- podgląd transferów
- przegląd ustawień i informacji o systemie

Jeśli strona się nie ładuje, sprawdź następujące kwestie:

| Sprawdzenie | Dlaczego to ważne |
| --- | --- |
| Proces Rclone działa | Dashboard potrzebuje backendowego demona |
| Port `5572` jest dostępny | Wymagany do bezpośredniego dostępu |
| `--rc-allow-origin` jest poprawny | Zapobiega problemom z dostępem z przeglądarki |
| Nazwa użytkownika i hasło są poprawne | Wymagane do uwierzytelnionego dostępu |
| Nagłówki reverse proxy są poprawne | Ważne dla zaawansowanych konfiguracji autoryzacji |

## Rozwiązywanie problemów

### Przeglądarka nie może się połączyć

Jeśli przeglądarka nie otwiera dashboardu, sprawdź, czy Rclone nasłuchuje na oczekiwanym adresie i porcie.

Na Linuxie możesz sprawdzić nasłuchujące porty narzędziem:

```bash
ss -tulpn | grep 5572
```

Na Windows użyj:

```powershell
netstat -ano | findstr 5572
```

### Błąd uwierzytelniania

Jeśli logowanie nie działa:

- potwierdź wartości `--rc-user` i `--rc-pass`
- upewnij się, że reverse proxy nie usuwa wymaganych nagłówków
- unikaj używania `--rc-no-auth` na interfejsach zdalnych lub publicznych

### Frontend się ładuje, ale akcje nie działają

To zwykle oznacza problem z origin lub komunikacją z backendem.

Sprawdź dokładnie te wartości:

- `--rc-allow-origin`
- `--rc-addr`
- adres docelowy reverse proxy
- URL w przeglądarce używany do dostępu do dashboardu

:::tip Używaj logów do szybszej diagnozy
Jeśli dashboard nie działa jak należy, najpierw sprawdź wyjście konsoli Rclone. Problemy z uwierzytelnianiem, powiązaniem i origin często są tam od razu widoczne.
:::

## Odwołanie do oprogramowania

### Szczegóły projektu

| Element | Wartość |
| --- | --- |
| Nazwa | Yet Another Rclone Dashboard |
| Kategoria | Frontend |
| Źródło | [Repozytorium GitHub](https://github.com/outlook84/yet-another-rclone-dashboard) |
| Referencyjne wydanie | `v0.3.8` |
| Plik wydania | `yet-another-rclone-dashboard-v0.3.8.zip` |
| Zalecany backend | `rclone v1.72.0` lub nowszy |

### Znane funkcje z strony projektu

Na podstawie informacji z repozytorium dashboard obsługuje:

- wiele profili połączeń
- informacje o systemie i podsumowanie statusu Rclone
- podgląd zdalnych lokalizacji
- import i eksport konfiguracji Rclone
- przeglądanie i