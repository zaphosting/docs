---
id: dedicated-linux-odoo
title: "Serwer dedykowany: Instalacja Odoo (Open Source ERP i CRM) na Linux"
description: "Dowiedz się, jak zarządzać i automatyzować procesy biznesowe dzięki zintegrowanej platformie ERP i CRM Odoo dla usprawnienia działania firmy → Sprawdź teraz"
sidebar_label: Instalacja Odoo
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Odoo to modułowa platforma open source łącząca funkcje Enterprise Resource Planning (ERP) i Customer Relationship Management (CRM). Pozwala firmom zarządzać i automatyzować procesy takie jak księgowość, magazyn, zarządzanie projektami i sprzedażą z poziomu jednego systemu.

Dzięki elastycznym rozszerzeniom Odoo można dostosować do indywidualnych potrzeb, oferując zintegrowane rozwiązanie do zarządzania wszystkimi obszarami firmy.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Myślisz o samodzielnym hostingu tego serwisu? Przeprowadzimy Cię przez każdy krok instalacji i konfiguracji oraz podpowiemy, na co zwrócić uwagę.

<InlineVoucher />

## Wymagania wstępne

Przed instalacją **Odoo** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby zapewnić płynną instalację i optymalną wydajność.

| Sprzęt    | Minimum     | Zalecane   |
| --------- | ----------- | ---------- |
| CPU       | 1 rdzeń vCPU| 4 rdzenie vCPU |
| RAM       | 1 GB        | 4 GB       |
| Miejsce na dysku | 15 GB  | 25 GB      |

Oprogramowanie wymaga zainstalowania wszystkich niezbędnych zależności oraz działania na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed przystąpieniem do instalacji:

**Zależności:** `Docker`

**System operacyjny:** Najnowsza wersja Ubuntu/Debian wspierająca Docker 26+

Sprawdź, czy wszystkie zależności są zainstalowane, a system operacyjny jest odpowiedni, aby uniknąć problemów z kompatybilnością podczas instalacji Odoo.

## Przygotowanie

Przed konfiguracją **Odoo** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. Te przygotowania zapewnią stabilne środowisko i pomogą uniknąć problemów podczas lub po instalacji.

### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i z poprawkami bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Wykonaj polecenie:

```
sudo apt update && sudo apt upgrade -y
```
To zapewni, że system ma najnowsze poprawki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przejść do instalacji zależności. Odoo będzie uruchamiane na Twoim serwerze za pomocą zestawu kontenerów Docker, dlatego najpierw musisz zainstalować Docker. Wykonaj polecenia:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Pełny poradnik instalacji i korzystania z Dockera znajdziesz w naszym [poradniku Docker](vserver-linux-docker.md).

### Konfiguracja domeny

Domyślnie Odoo działa na hoście na portach 80 (HTTP) i 443 (HTTPS). Skonfiguruj domenę z rekordami DNS wskazującymi na Twój serwer. Jeśli domena jest zarządzana przez nas, możesz to łatwo zrobić za pomocą opcji [EasyDNS](domain-easydns.md).

## Instalacja

Gdy spełnisz wszystkie wymagania i przygotujesz środowisko, możesz przystąpić do instalacji Odoo.

Przy pracy z wieloma konfiguracjami Docker warto stworzyć przejrzystą strukturę katalogów, aby projekty były od siebie odizolowane. Popularnym rozwiązaniem jest utworzenie folderu *docker* w katalogu domowym użytkownika, z osobnym podfolderem dla każdej domeny. Dzięki temu na jednym serwerze można hostować wiele projektów bez konfliktów konfiguracji.

Na przykład, aby przygotować strukturę dla domeny `example.com`:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

W tym katalogu projektu warto utworzyć podfoldery, które będą montowane jako wolumeny przez kontenery. Wolumeny pozwalają na współdzielenie danych między usługami lub ich trwałość. Szczególnie ważny jest współdzielony webroot, do którego muszą mieć dostęp nginx i certbot, aby generować i odnawiać certyfikaty SSL. Możesz utworzyć strukturę:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

Zapewnia to dedykowane katalogi na konfigurację nginx, certyfikaty SSL, pliki include oraz zawartość specyficzną dla Odoo, jak konfiguracje i dodatki.

### Utwórz Docker Compose

W katalogu projektu docker utwórz plik `compose.yml` za pomocą `nano compose.yml` i wklej poniższy kod:

```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  odoo:
    image: odoo:18.0
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons
    command: odoo -d odoo_db -i base --db_user=odoo --db_password=odoo --db_host=db

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf:/etc/nginx/conf.d
      - ./nginx/inc:/etc/nginx/inc
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt
    depends_on:
      - odoo

  certbot:
    image: certbot/certbot
    volumes:
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt

volumes:
  odoo-db-data:
  odoo-web-data:
```

### Zapora sieciowa

Aby nginx i certbot działały poprawnie, musisz otworzyć w zaporze sieciowej porty TCP 80 (HTTP) i 443 (HTTPS). Port 80 jest potrzebny do weryfikacji certbot, a port 443 do obsługi szyfrowanego ruchu HTTPS. Jeśli korzystasz z UFW (Uncomplicated Firewall), dodaj reguły:

```
sudo ufw allow http
sudo ufw allow https
```

Sprawdź status reguł poleceniem `sudo ufw status`, aby potwierdzić, że porty są otwarte. Upewnij się, że inne konfiguracje zapory nie blokują tych portów, bo może to uniemożliwić generowanie certyfikatów lub ruch HTTPS.

### Konfiguracja nginx

Konfiguracja nginx zaczyna się od utworzenia pliku konfiguracyjnego dla Twojej domeny. W katalogu `nginx/conf` stwórz plik o nazwie domeny, np. `nano nginx/conf/example.com.conf`, i wklej podstawowe dyrektywy, zamieniając `example.com` na swoją domenę:

```
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

Ta konfiguracja pozwala certbotowi przeprowadzić wyzwanie ACME i wydać ważne certyfikaty SSL. Zapewnia też przekierowanie całego ruchu HTTP na HTTPS.

Po zapisaniu pliku uruchom wymagane kontenery: bazę danych, Odoo i nginx:

```
sudo docker compose up -d db odoo nginx
```

Kontenery będą działać w tle, a nginx zacznie korzystać z nowej konfiguracji, umożliwiając certbotowi generowanie certyfikatów w kolejnym kroku.

### Generowanie certyfikatów SSL

Uruchom poniższe polecenie, aby wygenerować certyfikaty SSL za pomocą certbot. Pamiętaj, aby podać własną domenę po `-d` oraz zastąpić `user@mail.com` swoim prawidłowym adresem e-mail.

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Następnie wygeneruj dedykowany plik parametrów DH, aby wzmocnić bezpieczeństwo wymiany kluczy kryptograficznych:

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Teraz utwórz plik `ssl.conf` za pomocą `nano nginx/ssl/ssl.conf` i wklej do niego poniższą zawartość, pamiętając o zamianie `example.com` na swoją domenę:

```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;
ssl_dhparam "/etc/nginx/ssl/dhparam.pem";
ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
resolver 1.1.1.1 1.0.0.1 valid=300s;
```

## Konfiguracja

### Konfiguracja nginx

Edytuj plik konfiguracyjny nginx, który utworzyłeś wcześniej, i zastąp jego zawartość poniższą konfiguracją, aby serwis działał wyłącznie po HTTPS.

Pamiętaj, aby w dyrektywie `server_name` wpisać swoją domenę oraz podać poprawne ścieżki do plików certyfikatów w `ssl_certificate` i `ssl_certificate_key`.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # Wczytaj ustawienia SSL Mozilli
    include /etc/nginx/ssl/ssl.conf;

    # Ścieżki do certyfikatów (upewnij się, że pasują do zamontowanych wolumenów)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Nagłówki bezpieczeństwa
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    # Gzip
    include /etc/nginx/inc/gzip.conf;

    # Proxy dla Odoo
    location / {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        proxy_redirect off;
        proxy_request_buffering off;
        # Zalecane timeouty dla standardowych żądań
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # Cache statycznych plików
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # Wydłużone timeouty dla long polling
    location /longpolling {
        proxy_pass http://odoo:8069;
        proxy_connect_timeout 60s;
        proxy_send_timeout    300s;
        proxy_read_timeout    300s;
        send_timeout          300s;
    }

    location /websocket {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name example.com;

    # Pozwala Certbotowi na dostęp do wyzwania ACME
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

Po zapisaniu zmian w konfiguracji nginx, zastosuj je, restartując kontener nginx:

```
sudo docker compose restart nginx
```

Restart spowoduje załadowanie nowej konfiguracji i natychmiastowe serwowanie ruchu z nowymi ustawieniami. Obserwuj komunikaty o błędach podczas restartu. W razie problemów sprawdź logi kontenera poleceniem `sudo docker compose logs nginx`. Gdy kontener działa bez błędów, odwiedź swoją stronę, aby potwierdzić, że HTTPS działa i serwis jest dostępny.

### Opcje konfiguracji Odoo

Aby zastosować własne ustawienia, możesz stworzyć dedykowany plik konfiguracyjny dla Odoo. Umieść nowy plik w `config/odoo.conf` i dodaj tam wybrane opcje.

W pliku możesz zdefiniować przydatne parametry: `list_db = False` ukrywa wybór bazy danych na stronie logowania, `proxy_mode = True` informuje Odoo, że działa za reverse proxy, a jeśli chcesz korzystać z własnych dodatków, odkomentuj linię `addons_path` i wskaż katalog z dodatkami. Przykładowa konfiguracja:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```

### Usuń flagę -i base

Flaga `-i base` musi zostać usunięta z pliku `compose.yml`, bo inaczej przy każdym odtworzeniu kontenera Odoo baza będzie tworzona na nowo. Aby to zrobić, otwórz plik `compose.yml` za pomocą `nano compose.yml` i zmodyfikuj linię `command` tak:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```

## Dostęp do strony

Po zakończeniu instalacji i konfiguracji oraz uruchomieniu wszystkich usług możesz bezpiecznie wejść na swoją stronę, wpisując domenę w przeglądarce.

![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Załaduje się strona startowa Twojej nowej instalacji. Do pierwszego logowania użyj domyślnego konta z nazwą użytkownika `admin` i hasłem `admin`. Zalecamy jak najszybszą zmianę tych danych.

## Podsumowanie i dodatkowe materiały

Gratulacje! Udało Ci się zainstalować i skonfigurować Odoo na serwerze dedykowanym. Polecamy też zapoznać się z poniższymi zasobami, które mogą pomóc w dalszej konfiguracji i użytkowaniu serwera:

- [Odoo.com](https://odoo.com) - Oficjalna strona
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Dokumentacja Odoo

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz pomocy lub wsparcia, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />