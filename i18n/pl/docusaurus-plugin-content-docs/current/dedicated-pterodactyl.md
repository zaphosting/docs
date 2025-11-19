---
id: dedicated-pterodactyl
title: "Serwer dedykowany: Instalacja Pterodactyl"
description: "Dowiedz się, jak efektywnie skonfigurować i zarządzać własnym panelem serwera gier Pterodactyl → Sprawdź teraz"
sidebar_label: Instalacja Pterodactyl
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Panel Pterodactyl to open source’owy panel administracyjny stworzony, aby łatwo zarządzać i hostować serwery gier. Oferuje interfejs użytkownika, który pozwala administratorom centralnie konfigurować i zarządzać wieloma serwerami gier.

W tym poradniku przejdziemy przez kroki potrzebne do uruchomienia własnej instancji Pterodactyl na Twoim serwerze.

## Przygotowanie

Do instalacji panelu Pterodactyl potrzebujesz serwera dedykowanego z systemem Linux. Powinieneś użyć jednego z kompatybilnych systemów operacyjnych wymienionych w tabeli poniżej.

| System operacyjny | Kompatybilne wersje |
| ----------------- | ------------------- |
| Ubuntu            | 20.04, 22.04        |
| CentOS            | 7, 8                |
| Debian            | 11, 12              |

## Zależności

Pterodactyl wymaga szeregu zależności, aby poprawnie się zainstalować i działać. Opiera się też na popularnym menedżerze zależności dla PHP o nazwie Composer.

### Lista zależności

Oto krótka lista zależności, które będą potrzebne w tym poradniku. W kolejnej sekcji znajdziesz instrukcje, jak je zainstalować.

- PHP 8.1 z następującymi rozszerzeniami: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml lub dom, curl, zip oraz fpm.
- MariaDB
- Serwer WWW – w tym poradniku użyjemy Nginx.
- curl
- tar
- unzip
- git
- composer v2

### Instalacja zależności

Najpierw uruchom polecenie, które pozwoli Ci dodać pakiety spoza domyślnych repozytoriów systemu.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

Teraz zainstaluj dodatkowe repozytoria dla PHP, Redis i MariaDB (MySQL).

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

Musisz też zainstalować Redis, który jest potrzebny do tymczasowego przechowywania danych.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

Do serwera WWW wybraliśmy Nginx, bo jest niezawodny i open-source. Możesz też użyć innych serwerów WWW, jak Apache czy Caddy, ale nie będą one objęte tym poradnikiem.

```bash
sudo apt install nginx # Pobierz i zainstaluj Nginx
sudo ufw allow 'Nginx Full' # Dostosuj zaporę sieciową
```

Zalecamy wejść na `http://[twój_adres_ip_serwera]/`, podmieniając `[twój_adres_ip_serwera]` na adres IP Twojego serwera, aby przetestować i upewnić się, że Nginx działa. Powinna pojawić się domyślna strona powitalna.

Następnie zainstaluj MariaDB, która będzie Twoją bazą danych MySQL.

```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Na koniec zaktualizuj listę repozytoriów i zainstaluj pozostałe zależności.

```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

Teraz masz zainstalowane wszystkie niezbędne zależności i możesz przejść do instalacji Composera.

### Instalacja Composera

Gdy główne zależności są już zainstalowane, musisz zainstalować Composera – popularnego menedżera zależności dla PHP. Umożliwi Ci to łatwe pobranie i instalację całego serwisu Pterodactyl.

Wystarczy, że uruchomisz poniższe polecenie:

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Pobierz panel

Gdy wszystkie wymagania są spełnione, musisz zainstalować panel Pterodactyl.

Najpierw utwórz folder, w którym będzie przechowywany panel:

```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Teraz możesz sklonować oficjalne repozytorium Pterodactyl z GitHub, aby pobrać potrzebne pliki.

```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

Po zakończeniu pobierania panel jest gotowy. W kolejnej sekcji skonfigurujesz różne ustawienia, aby panel działał poprawnie.

## Instalacja

Pierwszym krokiem instalacji jest utworzenie bazy danych MySQL, która będzie przechowywać wszystkie dane panelu Pterodactyl. Jeśli masz już gotową bazę MySQL z odpowiednim użytkownikiem, możesz pominąć następną podsekcję.

### Konfiguracja bazy danych

Zaloguj się do swojej bazy MySQL. Jeśli to świeża instalacja MySQL, możesz to zrobić poleceniem:

```
mysql -u root -p
```

Jeśli masz już instancję MySQL, użyj swojego loginu z `-u` jako nazwą użytkownika i `-p` do wpisania hasła.

Po zalogowaniu musisz utworzyć nowego użytkownika, którego użyjesz dla Pterodactyl. Pamiętaj, aby zastąpić `[twoje_hasło]` wybranym hasłem:

```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[twoje_hasło]';
```

Teraz utwórz bazę danych dla Pterodactyl i nadaj uprawnienia nowemu użytkownikowi:

```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

Udało Ci się skonfigurować użytkownika i bazę danych dla Pterodactyl, więc możesz kontynuować instalację. Wpisz `exit`, aby wyjść z MySQL.

### Kontynuacja konfiguracji

Teraz skopiuj domyślny plik środowiskowy, w którym przechowasz swoje tajne tokeny:

```bash
cp .env.example .env
```

Następnie użyj Composera, aby automatycznie zainstalować wszystkie potrzebne pakiety:

```bash
composer install --no-dev --optimize-autoloader
```

Musisz też wygenerować klucz szyfrowania dla aplikacji:

```bash
php artisan key:generate --force
```

### Konfiguracja środowiska

Teraz skonfigurujesz swoją instancję Pterodactyl. Wystarczy uruchomić poniższe polecenia, które przeprowadzą Cię przez interaktywną konfigurację różnych ustawień, takich jak sesje, e-mail, cache i inne.

```bash
php artisan p:environment:setup # Pierwsze polecenie
php artisan p:environment:database # Drugie polecenie
```

### Konfiguracja bazy danych

Następny krok to załadowanie podstawowych danych potrzebnych do działania panelu, korzystając z wcześniej utworzonej bazy danych. Wykonaj poniższe polecenie.

:::info
To może potrwać kilka minut. Nie przerywaj procesu, bo może to spowodować błędy. Bądź cierpliwy :)
:::

```bash
php artisan migrate --seed --force
```

### Tworzenie użytkownika administratora

Gdy baza danych jest gotowa, musisz utworzyć pierwszego użytkownika administratora, aby zalogować się do panelu Pterodactyl:

```bash
php artisan p:user:make
```

### Ustawianie uprawnień

Kolejnym krokiem jest ustawienie odpowiednich uprawnień do plików panelu, aby instancja panelu mogła bez problemu czytać i zapisywać dane.

Ustaw uprawnienia poleceniem:

```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

Po tym powinieneś mieć dostęp do panelu Pterodactyl pod adresem, podmieniając `twoj_adres_ip` na IP Twojego serwera:

```
http://[twoj_adres_ip]/
```

### Kolejkowanie zadań (Queue Workers)

Ostatni krok instalacji to konfiguracja cronjobu, który będzie uruchamiał się co minutę, oraz kolejki zadań odpowiedzialnej za wiele procesów w tle.

Najpierw otwórz crontab poleceniem `sudo crontab -e`. Po otwarciu dodaj poniższą linię, która uruchamia cronjob co minutę:

```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

Teraz utwórz queue worker korzystając z `systemd`, który będzie działał w tle.

Stwórz nowy plik worker’a, otwierając edytor nano:

```
nano /etc/systemd/system/pteroq.service
```

Wklej do pliku poniższą zawartość:

```
# Pterodactyl Queue Worker File
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# Na niektórych systemach użytkownik i grupa mogą się różnić.
# Czasem to `apache` lub `nginx`.
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

:::note
Jeśli używasz CentOS, zamień `redis-server.service` na `redis.service` w powyższym pliku.
:::

Zapisz plik, naciskając `CTRL + X`, a następnie `Y`, aby potwierdzić.

Na koniec włącz usługę Redis oraz worker, aby startowały przy uruchomieniu systemu:

```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

Pomyślnie zainstalowałeś Pterodactyl na swoim serwerze. Panel powinien być dostępny pod adresem, podmieniając `[twoj_adres_ip_serwera]` na IP Twojego serwera:

```
http://[twoj_adres_ip_serwera]
```

## Opcjonalnie: Konfiguracja serwera WWW

Dodatkowo możesz skonfigurować swój serwer WWW. W tym poradniku użyliśmy Nginx, więc poniżej znajdziesz instrukcje, jak dostosować konfigurację.

Dzięki temu będziesz mógł ustawić panel na własnej domenie i dodać certyfikat SSL dla strony panelu.

### Rekord DNS domeny

Aby Twój serwer był dostępny pod domeną, musisz ustawić rekord DNS typu `A` dla tej domeny. To zależy od dostawcy domeny, ale zwykle znajdziesz to w panelu zarządzania DNS.

Wartość rekordu powinna wskazywać na adres IP Twojego serwera.

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### Usuwanie domyślnej konfiguracji

Najpierw usuń domyślną konfigurację Nginx:

```bash
rm /etc/nginx/sites-enabled/default
```

Teraz możesz stworzyć nowy plik konfiguracyjny dla panelu Pterodactyl. Na tym etapie zdecyduj, czy chcesz używać SSL, bo konfiguracja będzie się różnić.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx z SSL" default>

### Konfiguracja Certbota

Aby Twoja strona miała certyfikat SSL, musisz skonfigurować system automatycznego zarządzania i odnawiania certyfikatów. Użyjemy Certbota, który jest open-source.

Najpierw zainstaluj Certbota na serwerze. Dla Nginx potrzebujesz też pakietu python3-certbot-nginx.

```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

Następnie musisz ustawić weryfikację, aby wygenerować certyfikat. Użyjemy wyzwania DNS, które jest bezpieczniejsze niż HTTP.

Musisz utworzyć rekord DNS typu `TXT` dla domeny, którą chcesz użyć. To zależy od dostawcy domeny, ale zwykle znajdziesz to w panelu zarządzania DNS.

Uruchom poniższe polecenie, które poda Ci zawartość rekordu `TXT`. Zamień `[twoja_domena]` na swoją domenę.

```bash
certbot -d [twoja_domena] --manual --preferred-challenges dns certonly
```

Po ustawieniu rekordu DNS, skonfiguruj automatyczne odnawianie certyfikatu przez cronjob. Otwórz crontab poleceniem `sudo crontab -e` i dodaj linię, która będzie odnawiać certyfikat codziennie o 23:00 czasu systemowego.

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### Tworzenie pliku konfiguracyjnego

Gdy masz już certyfikat SSL, możesz stworzyć plik konfiguracyjny.

Uruchom edytor nano:

```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Wklej poniższą konfigurację, pamiętając, aby zastąpić `[twoja_domena]` swoją domeną.

:::warning
Upewnij się, że masz certyfikat SSL, inaczej serwer WWW nie uruchomi się poprawnie.
:::

```
server_tokens off;

server {
    listen 80;
    server_name [twoja_domena];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [twoja_domena];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[twoja_domena]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[twoja_domena]/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
<TabItem value="Nginx Without SSL" label="Nginx bez SSL">

#### Tworzenie pliku konfiguracyjnego

Uruchom edytor nano:

```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Wklej poniższą konfigurację, pamiętając, aby zastąpić `[twoja_domena]` domeną, dla której ustawiłeś rekord DNS wskazujący na IP serwera.

:::warning
Upewnij się, że masz certyfikat SSL, inaczej serwer WWW nie uruchomi się poprawnie.
:::

```
server {
    listen 80;
    server_name [twoja_domena];

    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
</Tabs>

### Zastosowanie konfiguracji

Po wprowadzeniu zmian musisz je aktywować:

```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # Niepotrzebne na CentOS

sudo systemctl restart nginx # Restart Nginx
```

Jeśli wszystko poszło dobrze, teraz możesz wygodnie korzystać z panelu Pterodactyl pod domeną, którą skonfigurowałeś.

Gratulacje! Skonfigurowałeś serwer WWW, aby używać własnej domeny i dodałeś certyfikat SSL do swojej strony.