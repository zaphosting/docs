---
id: dedicated-linux-odoo
title: "Installera Odoo på en Linux-server – Kör ditt eget open source ERP och CRM"
description: "Upptäck hur du hanterar och automatiserar affärsprocesser med Odoos integrerade ERP- och CRM-plattform för smidigare företagsdrift → Läs mer nu"
sidebar_label: Installera Odoo
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Odoo är en modulär open source-plattform som kombinerar Enterprise Resource Planning (ERP) och Customer Relationship Management (CRM). Den låter företag hantera och automatisera processer som bokföring, lager, projektledning och försäljning från ett och samma system.

Med sina flexibla tillägg kan Odoo anpassas efter specifika behov och erbjuder en integrerad lösning för att hantera alla delar av företaget.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Fundera på att hosta tjänsten själv? Vi guidar dig steg för steg hur du installerar och konfigurerar den, samt allt du behöver ha koll på.



## Förutsättningar

Innan du installerar **Odoo**, se till att din hostingmiljö uppfyller följande krav för en smidig installation och optimal prestanda.

| Hårdvara  | Minsta       | Rekommenderat |
| --------- | ------------ | ------------- |
| CPU       | 1 vCPU-kärna | 4 vCPU-kärnor |
| RAM       | 1 GB         | 4 GB          |
| Diskutrymme | 15 GB      | 25 GB         |

Mjukvaran kräver att alla nödvändiga beroenden är installerade och att den körs på ett stöds operativsystem. Kontrollera att din server uppfyller följande innan du fortsätter med installationen:

**Beroenden:** `Docker`

**Operativsystem:** Senaste versionen av Ubuntu/Debian som stödjer Docker 26+

Se till att alla beroenden är installerade och att rätt OS-version används för att undvika kompatibilitetsproblem vid installation av Odoo.



## Förberedelser

Innan du sätter upp **Odoo** behöver du förbereda systemet. Det innebär att uppdatera operativsystemet till senaste versionen och installera alla nödvändiga beroenden. Dessa steg säkerställer en stabil miljö och minskar risken för problem under eller efter installationen.


### Uppdatera systemet
För att säkerställa att systemet körs med de senaste säkerhetsuppdateringarna och mjukvaruversionerna bör du alltid börja med att uppdatera systemet. Kör följande kommando:

```
sudo apt update && sudo apt upgrade -y
```
Detta ser till att du har de senaste säkerhetspatcharna och mjukvaruversionerna innan du går vidare.

### Installera beroenden
När uppdateringen är klar kan du installera beroenden. Odoo kommer att köras i Docker-containrar, så Docker måste installeras först. Kör följande kommando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

En komplett guide för installation och användning av Docker finns i vår [Docker](dedicated-linux-docker.md)-guide.



### Konfigurera din domän

Som standard körs Odoo på servern via portarna 80 (HTTP) och 443 (HTTPS). Sätt upp en domän med DNS-poster som pekar till servern. Om domänen hanteras av oss kan du enkelt göra detta via [EasyDNS](domain-easydns.md).




## Installation
När alla krav är uppfyllda och förberedelserna klara kan du fortsätta med installationen av Odoo.

När du jobbar med flera Docker-projekt är det smart att ha en tydlig mappstruktur för att hålla projekten isolerade. Ett vanligt sätt är att skapa en *docker*-mapp i användarens hemkatalog, med en egen undermapp för varje domän. Då kan flera projekt hostas på samma server utan konfigurationskonflikter.

Exempel för att förbereda strukturen för domänen `example.com`:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

I projektmappen rekommenderas att skapa undermappar som mountas som volymer i containrarna. Dessa volymer gör att data kan delas mellan tjänster eller sparas permanent. Ett viktigt exempel är den delade webrooten som både nginx och certbot behöver för att skapa och förnya SSL-certifikat. En lämplig struktur kan skapas så här:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

Det ger dedikerade mappar för nginx-konfiguration, SSL-certifikat, inkluderingsfiler och Odoo-specifikt innehåll som configs och addons.




### Skapa Docker Compose

I din docker-projektmapp, skapa filen compose.yml med `nano compose.yml`. Klistra in följande kod:

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



### Brandvägg

För att nginx och certbot ska fungera måste TCP-portarna 80 (HTTP) och 443 (HTTPS) vara öppna i brandväggen. Dessa portar är viktiga eftersom certbot använder port 80 för HTTP-validering och port 443 krävs för krypterad HTTPS-trafik. Om UFW (Uncomplicated Firewall) är aktiverat kan du lägga till reglerna med:

```
sudo ufw allow http
sudo ufw allow https
```

Kontrollera sedan med `sudo ufw status` att portarna är öppna. Se till att inga andra brandväggsregler blockerar dessa portar, annars kan certifikatgenerering eller säker HTTPS-trafik misslyckas.



### Nginx-konfiguration

Börja med att skapa en konfigurationsfil för din domän i `nginx/conf`. Skapa en ny fil med domännamnet, t.ex. `nano nginx/conf/example.com.conf`, och lägg in följande grundläggande direktiv. Byt ut `example.com` mot din riktiga domän:

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

Denna konfiguration låter certbot slutföra ACME-utmaningen och utfärda giltiga SSL-certifikat. Den ser också till att all HTTP-trafik omdirigeras till HTTPS.

När filen är sparad kan du starta de nödvändiga containrarna: databasen, Odoo och nginx. Kör:

```
sudo docker compose up -d db odoo nginx
```

Containrarna körs i bakgrunden och nginx använder redan den nya konfigurationen, vilket gör att certbot kan generera certifikat i nästa steg.


### Generera SSL-certifikat

Kör kommandot nedan för att skapa SSL-certifikat med certbot. Ange din egen domän efter `-d` och byt ut `user@mail.com` mot din giltiga e-postadress.

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Skapa sedan en dedikerad DH-parameterfil för att stärka säkerheten vid nyckelutbytet:

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Skapa nu filen `ssl.conf` med `nano nginx/ssl/ssl.conf` och lägg in följande innehåll. Byt ut `example.com` mot din domän:

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



## Konfiguration



### Nginx-konfiguration

Redigera nginx-konfigurationsfilen du skapade tidigare och ersätt innehållet med nedanstående konfiguration för att säkerställa att din sida bara serveras över HTTPS.

Kom ihåg att byta ut `example.com` mot din riktiga domän i `server_name` och ange korrekta sökvägar till certifikatfilerna i `ssl_certificate` och `ssl_certificate_key`.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # Inkludera Mozillas SSL-inställningar
    include /etc/nginx/ssl/ssl.conf;

    # Certifikatvägar (se till att de matchar dina mountade volymer)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Säkerhetsheaders
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    #Gzip
    include /etc/nginx/inc/gzip.conf;

    # Proxyinställningar för Odoo
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
        # Rekommenderade timeouts för standardförfrågningar
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # Cache för statiska filer
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # Öka timeouts för long polling
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

    # Detta tillåter Certbot att nå challenge-URL:en
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```



När du sparat ändringarna i nginx-konfigurationen måste du ladda om inställningarna genom att starta om nginx-containern:

```
sudo docker compose restart nginx
```

Omstarten gör att nginx laddar den uppdaterade konfigurationen och börjar direkt servera med nya inställningar. Håll utkik efter felmeddelanden under omstarten. Om problem uppstår kan du kolla loggarna med `sudo docker compose logs nginx` för felsökning. När containern kör utan fel, testa din webbplats för att bekräfta att HTTPS fungerar och sidan serveras som den ska.



### Odoo-konfigurationsalternativ

För att använda egna inställningar kan du skapa en dedikerad konfigurationsfil för Odoo. Skapa en ny fil på `config/odoo.conf` och lägg in önskade alternativ.

I filen kan du definiera flera användbara parametrar: `list_db = False` döljer databasvalet på inloggningssidan, `proxy_mode = True` talar om för Odoo att den körs bakom en reverse proxy, och om du vill använda egna addons kan du avkommentera raden `addons_path` och peka på addons-mappen du skapade tidigare. Exempel:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### Ta bort -i base-flaggan

`-i base`-flaggan måste tas bort från `compose.yml`-filen, annars skapas databasen om varje gång du startar om Odoo-containern. För att ta bort den, öppna compose-filen med `nano compose.yml` och ändra kommandot till:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## Åtkomst till webbplatsen

När installation och konfiguration är klar och alla tjänster körs kan du säkert nå din webbplats genom att skriva in din domän i webbläsarens adressfält.



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Detta laddar startsidan för din nya installation. För första inloggningen finns ett standardkonto med användarnamn `admin` och lösenord `admin`. Vi rekommenderar starkt att du byter dessa direkt.



## Avslutning och fler resurser

Grattis! Du har nu installerat och konfigurerat Odoo på din VPS/Dedikerade server. Vi rekommenderar även att kolla in följande resurser som kan ge dig extra hjälp och vägledning under serverkonfigurationen:

- [Odoo.com](https://odoo.com) – Officiell webbplats
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) – Odoo-dokumentation

Har du frågor som inte täcks här? Tveka inte att kontakta vår support, vi finns tillgängliga varje dag för att hjälpa dig! 🙂