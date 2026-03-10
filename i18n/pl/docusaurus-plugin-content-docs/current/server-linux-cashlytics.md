---
id: server-linux-cashlytics
title: "Konfiguracja Cashlytics na serwerze Linux – Samodzielny hosting AI asystenta finansowego"
description: "Dowiedz się, jak zainstalować i uruchomić Cashlytics na swoim Linux VPS za pomocą Dockera, aby zarządzać finansami osobistymi i budżetowaniem z pomocą AI → Sprawdź teraz"
sidebar_label: Instalacja Cashlytics
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai) to nowoczesna **platforma do zarządzania finansami osobistymi i budżetowaniem**, która pomaga śledzić wydatki, zarządzać budżetami i zyskać wgląd w swoje nawyki finansowe. Analizując dane transakcji i kategorie wydatków, Cashlytics pomaga zrozumieć, na co idą Twoje pieniądze i jak możesz poprawić swoje planowanie finansowe.

Platforma może też opcjonalnie integrować się z **asystentem AI**, który analizuje dane finansowe, identyfikuje wzorce wydatków i dostarcza inteligentne wskazówki dotyczące Twojego budżetowania.

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

Samodzielny hosting Cashlytics na własnym serwerze daje Ci **pełną kontrolę nad danymi finansowymi**, a jednocześnie umożliwia dostęp do narzędzi budżetowych z każdego miejsca przez przeglądarkę. Planujesz samodzielnie hostować Cashlytics? Ten poradnik przeprowadzi Cię przez proces instalacji z użyciem Dockera na Twoim Linux VPS.

<InlineVoucher />

## Zastosowania Cashlytics

Cashlytics sprawdzi się w różnych sytuacjach osobistych i zawodowych, gdzie ważna jest organizacja finansów i budżetowanie. Typowe zastosowania to:

- Śledzenie wydatków osobistych i miesięcznych budżetów
- Monitorowanie wzorców wydatków i nawyków finansowych
- Zarządzanie wieloma źródłami dochodów i kategoriami finansowymi
- Generowanie inteligentnych wskazówek AI dla mądrzejszego budżetowania
- Hosting prywatnego i samodzielnie kontrolowanego panelu finansowego

Dzięki samodzielnemu hostingowi, Cashlytics jest idealny dla użytkowników szukających prywatnej alternatywy dla chmurowych narzędzi finansowych.

## Wymagania wstępne

Przed instalacją Cashlytics upewnij się, że Twój VPS spełnia poniższe wymagania.

| Sprzęt | Minimum | Zalecane |
|--------|---------|----------|
| CPU | 1 rdzeń | 2 rdzenie |
| RAM | 2 GB | 4 GB |
| Miejsce na dysku | 10 GB | 20 GB |



Dodatkowo, musisz mieć zainstalowane:

- Docker
- Docker Compose

Jeśli Docker nie jest jeszcze zainstalowany, skorzystaj z naszego poradnika instalacji [Docker](dedicated-linux-docker.md) przed kontynuacją.



<InlineServiceLink />



## Przygotowanie

Najpierw utwórz katalog projektu dla instalacji Cashlytics.

```bash
mkdir cashlytics && cd cashlytics
```

Następnie pobierz oficjalne pliki konfiguracyjne Dockera dla Cashlytics.

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

Utwórz swój plik konfiguracyjny środowiska, kopiując plik przykładowy.

```
cp .env.example .env
```

Plik `.env` zawiera zmienne konfiguracyjne potrzebne do uruchomienia Cashlytics.



## Instalacja



### Otwórz plik `.env`

Otwórz plik `.env` i skonfiguruj wymagane zmienne środowiskowe.

```
nano .env
```



### Skonfiguruj hasło do bazy danych

Ustaw bezpieczne hasło do bazy danych PostgreSQL używanej przez Cashlytics.

```
POSTGRES_PASSWORD=twoje_bezpieczne_haslo
```



### Skonfiguruj połączenie z bazą danych

Zaktualizuj łańcuch połączenia do bazy danych, używając tego samego hasła co powyżej.

```
DATABASE_URL=postgresql://cashlytics:twoje_bezpieczne_haslo@postgres:5432/cashlytics
```



### Opcjonalny asystent AI

Cashlytics wspiera opcjonalnego asystenta AI, który analizuje dane finansowe i dostarcza wskazówki budżetowe. Aby włączyć tę funkcję, dodaj swój klucz API OpenAI.

```
OPENAI_API_KEY=sk-twoj-klucz-openai
```

Jeśli nie chcesz korzystać z asystenta AI, możesz zostawić tę zmienną pustą.



## Uruchomienie Cashlytics

Po zakończeniu konfiguracji uruchom aplikację za pomocą Docker Compose.

```
docker compose -f docker-compose.selfhost.yml up -d
```

Docker pobierze teraz wymagane obrazy kontenerów i uruchomi usługi Cashlytics. Aby sprawdzić, czy kontenery działają, użyj:

```
docker ps
```



## Dostęp do Cashlytics

Po pomyślnym uruchomieniu kontenerów, możesz uzyskać dostęp do interfejsu webowego Cashlytics. Otwórz przeglądarkę i przejdź pod adres:

```
http://TWOJ_ADRES_IP_SERWERA:3000
```

Zamień TWOJ_ADRES_IP_SERWERA na adres IP Twojego VPS. Po załadowaniu interfejsu możesz zacząć konfigurować finanse, budżety i kategorie.

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś Cashlytics na swoim serwerze Linux. Teraz możesz zacząć korzystać z platformy do śledzenia wydatków, zarządzania budżetami i uzyskiwania wglądu w swoje dane finansowe.

Uruchamianie Cashlytics na własnym VPS/serwerze dedykowanym gwarantuje, że Twoje informacje finansowe pozostają pod Twoją kontrolą, a jednocześnie korzystasz z nowoczesnych narzędzi budżetowych i opcjonalnej analizy AI.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />