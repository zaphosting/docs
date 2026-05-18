---
id: server-linux-gluetun-webui
title: "Konfiguracja Gluetun WebUI na serwerze Linux - Łatwe zarządzanie kontenerem VPN"
description: "Dowiedz się, jak zainstalować i uruchomić Gluetun WebUI na swoim Linux VPS, aby monitorować i zarządzać kontenerem VPN Gluetun → Sprawdź teraz"
sidebar_label: Instalacja Gluetun WebUI
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) to lekki interfejs webowy stworzony, by uprościć zarządzanie kontenerem VPN Gluetun. Sam Gluetun to popularny kontener Docker, który służy do kierowania ruchu innych aplikacji przez bezpieczne połączenie VPN.

WebUI dodaje wygodny panel główny, który pozwala monitorować status VPN, zarządzać połączeniami i kontrolować działanie kontenera bez potrzeby ręcznej obsługi komend Docker czy plików konfiguracyjnych.

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

Samodzielne hostowanie Gluetun WebUI na własnym serwerze daje Ci centralny panel do zarządzania konfiguracją VPN, co jest szczególnie przydatne, gdy masz kilka kontenerów zależnych od połączenia VPN Gluetun.

Planujesz uruchomić Gluetun WebUI na swoim VPS? Ten poradnik przeprowadzi Cię krok po kroku przez instalację i konfigurację.

<InlineVoucher />



## Zastosowania Gluetun WebUI

Gluetun WebUI przyda się każdemu, kto uruchamia aplikacje w kontenerach za VPN. Typowe zastosowania to:

- Monitorowanie statusu połączenia VPN w czasie rzeczywistym
- Zarządzanie kontenerami kierującymi ruch przez VPN Gluetun
- Uproszczenie konfiguracji i rozwiązywania problemów z kontenerem VPN
- Kontrola usług VPN bez używania skomplikowanych komend Docker
- Prowadzenie scentralizowanego panelu zarządzania VPN w środowiskach self-hosted

WebUI jest szczególnie przydatne w homelabach lub na VPS, gdzie wiele aplikacji korzysta z kontenera VPN.



## Wymagania wstępne

Przed instalacją Gluetun WebUI upewnij się, że Twój serwer spełnia poniższe wymagania.

| Sprzęt | Minimum | Zalecane |
|----------|---------|-------------|
| CPU | 1 rdzeń | 2 rdzenie |
| RAM | 1 GB | 4 GB |
| Miejsce na dysku | 5 GB | 10 GB |

Wymagane oprogramowanie:

- Docker
- Docker Compose

Jeśli Docker nie jest jeszcze zainstalowany, skorzystaj z naszego poradnika instalacji Dockera przed kontynuacją.

<InlineServiceLink />

## Przygotowanie

Przed instalacją Gluetun WebUI sprawdź, czy Docker i Docker Compose są dostępne na Twoim serwerze. Wykonaj poniższe komendy, aby potwierdzić, że Docker jest zainstalowany i gotowy do użycia:

```
docker --version
docker compose version
```
Następnie utwórz katalog na instalację Gluetun WebUI.
```
mkdir gluetun-webui
cd gluetun-webui
```
W tym katalogu będzie znajdować się konfiguracja Docker Compose do uruchomienia interfejsu webowego.

## Instalacja

Stwórz plik Docker Compose dla Gluetun WebUI.
```
nano compose.yaml
```
Wklej poniższą konfigurację:

```yaml
services:
  gluetun-webui:
    image: ghcr.io/sir-scuzza/gluetun-webui:latest
    container_name: gluetun-webui
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - GLUETUN_API_URL=http://gluetun:8000
    volumes:
      - ./data:/app/data
```

Ta konfiguracja:

- Uruchomi kontener Gluetun WebUI
- Połączy go z API Gluetun
- Udostępni WebUI na porcie 8000
- Przechowa trwałe dane konfiguracyjne w katalogu `data`

Zapisz plik i wyjdź z edytora.

## Uruchomienie Gluetun WebUI

Uruchom kontener za pomocą Docker Compose.

```
docker compose up -d
```

Docker pobierze potrzebny obraz i wystartuje kontener WebUI. Aby sprawdzić, czy kontener działa, użyj:

```
docker ps
```

## Dostęp do interfejsu webowego

Gdy kontener działa, otwórz WebUI w przeglądarce.

```
http://TWÓJ_ADRES_IP_SERWERA:8000
```

Zamień `TWÓJ_ADRES_IP_SERWERA` na adres IP Twojego VPS. Po otwarciu panelu będziesz mógł:

- Monitorować status połączenia VPN
- Zarządzać działaniem kontenera Gluetun
- Przeglądać szczegóły konfiguracji VPN
- Kontrolować usługi kierowane przez kontener VPN



## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś **Gluetun WebUI** na swoim serwerze Linux. Teraz masz prosty w obsłudze panel do monitorowania i zarządzania kontenerem VPN Gluetun bez konieczności ręcznego korzystania z komend Docker.

Uruchomienie Gluetun WebUI obok kontenera VPN ułatwia zarządzanie i daje jasny obraz statusu oraz konfiguracji Twojego połączenia VPN.

Masz pytania lub potrzebujesz pomocy? Nasz support jest do Twojej dyspozycji codziennie i chętnie pomoże! 🙂

<InlineVoucher />