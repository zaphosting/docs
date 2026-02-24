---
id: server-linux-n8n
title: "Konfiguracja n8n na serwerze Linux - Twórz potężne automatyzacje workflow"
description: "Dowiedz się, jak zainstalować i skonfigurować n8n do samodzielnego hostingu, aby tworzyć automatyzacje workflow z AI, które ułatwią Ci pracę → Sprawdź teraz"
sidebar_label: Instalacja n8n
services:
  - vserver-service-n8n
  - dedicated-service-n8n
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';


## Wprowadzenie

[n8n](https://n8n.io/) to wiodący wizualny edytor do szybkiego iterowania, w którym możesz tworzyć automatyzacje workflow i od razu widzieć efekty. Idealny zarówno do codziennych automatyzacji, jak i złożonych workflow z agentami AI.

![img](https://screensaver01.zap-hosting.com/index.php/s/skzPCRajMZPbfw3/preview)

Wsparcie dla samodzielnego hostingu i edytor Low Code sprawiają, że n8n to ulubieniec każdego deva. Jeśli chcesz mieć maksymalną kontrolę, możliwość personalizacji i obniżyć koszty w dłuższej perspektywie, opcja Self-Hosted jest dla Ciebie strzałem w dziesiątkę.

Planujesz samodzielnie hostować n8n? Przeprowadzimy Cię przez każdy krok instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

<InlineVoucher />



## Zastosowania n8n

n8n sprawdzi się w wielu codziennych scenariuszach i jest idealny dla każdego, kto chce automatyzować zadania, korzystać z edytora low code, budować agentów AI, prowadzić automatyzacje, wspomagać CRM, operacje IT, bezpieczeństwo, prototypowanie backendu i wiele więcej! n8n jest świetny zarówno dla początkujących, jak i ekspertów.

n8n oferuje ponad 1367 integracji, takich jak Google Sheets, Telegram, MySQL, Slack, Discord, Postgres oraz popularne kombinacje automatyzacji jak HubSpot i Salesforce, Twilio i WhatsApp, GitHub i Jira, Asana i Slack, Asana i Salesforce, Jira i Slack oraz mnóstwo szablonów od społeczności.

## Wymagania wstępne

Choć n8n jest lekki, zużycie zasobów może rosnąć w zależności od liczby workflow, wywołań API i węzłów przetwarzających duże ilości danych. Zalecamy następujące wymagania sprzętowe do hostingu n8n na Twoim VPS.

| Sprzęt    | Minimum     | Zalecane                  |
| --------- | ----------- | ------------------------- |
| CPU       | 1 rdzeń vCPU| 2 rdzenie vCPU            |
| RAM       | 2 GB        | 4 GB                      |
| Miejsce na dysku | 20 GB | 50 GB                     |
<InlineServiceLink />

## Przygotowanie

Zanim zaczniesz, musisz zainstalować Dockera i zaktualizować pakiety systemowe. Mamy już poradnik o [Instalacji Dockera](dedicated-linux-docker.md). Upewnij się, że to zrobiłeś, zanim przejdziesz do instalacji.

## Instalacja
Po zainstalowaniu Dockera na serwerze, sprawdź instalację poleceniami:

```
docker --version
docker compose version
```

### Utwórz plik `.env`

Stwórz katalog projektu, w którym będą przechowywane lokalne pliki n8n oraz konfiguracje środowiska, i przejdź do niego:

```
mkdir n8n-compose
cd n8n-compose
```

W katalogu `n8n-compose` utwórz plik `.env` za pomocą `nano .env` i wklej poniższy kod z konfiguracją środowiska n8n.

```
# DOMAIN_NAME i SUBDOMAIN razem określają, pod jakim adresem będzie dostępne n8n
# Główna domena, z której będzie serwowane
DOMAIN_NAME=zap.cloud

# Subdomena, z której będzie serwowane
SUBDOMAIN=silver-octopus-xxxxx

# Powyższy przykład udostępnia n8n pod adresem: https://silver-octopus-xxxxx.zap.cloud

# Opcjonalna strefa czasowa używana przez Cron i inne węzły harmonogramu
GENERIC_TIMEZONE=Europe/Berlin

# Adres e-mail do tworzenia certyfikatu TLS/SSL
SSL_EMAIL=hello@zap-hosting.com
```

:::info
Aby znaleźć DOMAIN_NAME i SUBDOMAIN, przejdź do strony produktu ZAP-Hosting, wejdź na swój VPS i znajdź `Nazwa hosta`.


![img](https://screensaver01.zap-hosting.com/index.php/s/7DoXD5F9m2oYTXX/preview)

:::

Wpisz część `zap.cloud` w DOMAIN_NAME, a poprzednią część w SUBDOMAIN (np. silver-octopus-xxxxx).

![img](https://screensaver01.zap-hosting.com/index.php/s/EaQn97J25TpwDSa/preview)

:::warning Wymóg HTTPS
Nie używaj samego adresu IP w pliku .env. n8n wymaga połączenia HTTPS, a certyfikaty SSL są wydawane tylko dla domen, nie dla adresów IP.
:::

Jeśli chcesz hostować n8n na własnej domenie, utwórz subdomenę dla n8n, dodając rekord A w panelu zarządzania DNS domeny, wskazujący na adres IP VPS, którego używasz.

| Nazwa           | Typ  | Wartość        | TTL  | Priorytet |
| --------------- | ---- | -------------- | ---- | --------- |
| n8n (Subdomena) | A    | Adres IPv4 VPS | 1440 | 0         |

### Utwórz katalog na pliki lokalne

W katalogu projektu stwórz katalog `local-files` do współdzielenia plików między instancją n8n a systemem hosta:

```
mkdir local-files
```

### Utwórz plik Docker Compose

Stwórz plik Docker Compose `compose.yaml` za pomocą `nano compose.yaml` i wklej do niego poniższą zawartość:

```yaml
services:
  traefik:
    image: "traefik"
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
      - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - traefik_data:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro

  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    labels:
      - traefik.enable=true
      - traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)
      - traefik.http.routers.n8n.tls=true
      - traefik.http.routers.n8n.entrypoints=web,websecure
      - traefik.http.routers.n8n.tls.certresolver=mytlschallenge
      - traefik.http.middlewares.n8n.headers.SSLRedirect=true
      - traefik.http.middlewares.n8n.headers.STSSeconds=315360000
      - traefik.http.middlewares.n8n.headers.browserXSSFilter=true
      - traefik.http.middlewares.n8n.headers.contentTypeNosniff=true
      - traefik.http.middlewares.n8n.headers.forceSTSHeader=true
      - traefik.http.middlewares.n8n.headers.SSLHost=${DOMAIN_NAME}
      - traefik.http.middlewares.n8n.headers.STSIncludeSubdomains=true
      - traefik.http.middlewares.n8n.headers.STSPreload=true
      - traefik.http.routers.n8n.middlewares=n8n@docker
    environment:
      - N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=true
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - N8N_RUNNERS_ENABLED=true
      - NODE_ENV=production
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
      - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
      - TZ=${GENERIC_TIMEZONE}
    volumes:
      - n8n_data:/home/node/.n8n
      - ./local-files:/files

volumes:
  n8n_data:
  traefik_data:
```

To zainstaluje n8n, wystawi certyfikat SSL, skonfiguruje i udostępni n8n na Twojej domenie.

### Uruchom n8n

Aby uruchomić n8n, wpisz:

```
sudo docker compose up -d
```

Aby zatrzymać n8n, wpisz:

```
sudo docker compose stop
```

### Dostęp do n8n

Po uruchomieniu n8n, otwórz przeglądarkę i wpisz URL (lub nazwę hosta, jeśli jej użyłeś), aby wejść na stronę konfiguracji. Tutaj musisz utworzyć konto administratora, zanim przejdziesz dalej.

![img](https://screensaver01.zap-hosting.com/index.php/s/3SNBcAtXco8RTQr/preview)

:::info Uwaga na hasło
Pamiętaj swoje hasło, będzie potrzebne później!
:::

Następnie pojawi się krótka ankieta z prośbą o podanie podstawowych informacji.

![img](https://screensaver01.zap-hosting.com/index.php/s/bY8sDwenKtSEBg4/preview)

Opcjonalnie możesz uzyskać darmowy dostęp do niektórych płatnych funkcji, podając swój e-mail i otrzymując klucz licencyjny. Jeśli jesteś zainteresowany, wpisz swój adres e-mail i poproś o klucz licencyjny.

![img](https://screensaver01.zap-hosting.com/index.php/s/7jEtswn3s3gZ3Es/preview)

Klucz licencyjny pojawi się od razu w Twojej skrzynce. Skopiuj go i wklej w Ustawienia > Użytkowanie i Plany > Wprowadź klucz aktywacyjny.

### Tworzenie pierwszego workflow

Po tym możesz wejść do panelu głównego i od razu zacząć korzystać z n8n!

![img](https://screensaver01.zap-hosting.com/index.php/s/RbFAoJ9ZRD9m8Px/preview)

Możesz zacząć od pustego płótna lub skorzystać z gotowego szablonu. Twoja instalacja n8n jest gotowa!

![img](https://screensaver01.zap-hosting.com/index.php/s/y93sTPG9Qwt5PKo/preview)



## Podsumowanie i dodatkowe zasoby

Gratulacje! Udało Ci się zainstalować n8n na serwerze i możesz zacząć go używać od zaraz. Polecamy też rzucić okiem na poniższe materiały, które mogą pomóc i wesprzeć Cię podczas konfiguracji serwera.

- [n8n.io](https://n8n.io/) - Oficjalna strona
- [docs.n8n.io](https://docs.n8n.io/) - Dokumentacja n8n

Masz pytania, których tu nie ma? Jeśli potrzebujesz pomocy lub masz dodatkowe pytania, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂



<InlineVoucher />