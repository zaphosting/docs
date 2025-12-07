---
id: vserver-linux-odoo
title: "VPS: Odoo (Open Source ERP en CRM) installeren op Linux"
description: "Ontdek hoe je je bedrijfsprocessen beheert en automatiseert met Odoo’s geïntegreerde ERP- en CRM-platform → Leer het nu"
sidebar_label: Odoo installeren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Odoo is een modulair open-source platform dat Enterprise Resource Planning (ERP) en Customer Relationship Management (CRM) functies combineert. Het stelt bedrijven in staat om processen zoals boekhouding, voorraadbeheer, projectmanagement en sales vanuit één systeem te beheren en te automatiseren.

Met zijn flexibele uitbreidingen kan Odoo op maat worden gemaakt voor specifieke behoeften en biedt het een geïntegreerde oplossing voor het beheer van alle bedrijfsgebieden.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Denk je eraan om deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles wat je moet weten.

<InlineVoucher />

## Vereisten

Voordat je **Odoo** installeert, zorg ervoor dat je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale prestaties.

| Hardware   | Minimaal    | Aanbevolen  |
| ---------- | ----------- | ----------- |
| CPU        | 1 vCPU Core | 4 vCPU Cores|
| RAM        | 1 GB        | 4 GB        |
| Schijfruimte | 15 GB     | 25 GB       |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Controleer of je server aan de volgende eisen voldoet voordat je verder gaat met de installatie:

**Dependencies:** `Docker`

**Besturingssysteem:** Laatste versie van Ubuntu/Debian met ondersteuning voor Docker 26+

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Odoo te voorkomen.

## Voorbereiding

Voordat je **Odoo** installeert, moet je je systeem klaarmaken. Dit betekent dat je je besturingssysteem bijwerkt naar de nieuwste versie en alle benodigde dependencies installeert. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.

### Systeem updaten
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je eerst een systeemupdate uit. Gebruik hiervoor het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Dit zorgt ervoor dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren. Odoo wordt gedraaid via Docker containers, dus Docker moet eerst geïnstalleerd worden. Gebruik hiervoor:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Een volledige uitleg over het installatieproces en het gebruik van Docker vind je in onze [Docker](vserver-linux-docker.md) handleiding.

### Domein configureren

Standaard draait Odoo op de host via poorten 80 (HTTP) en 443 (HTTPS). Stel een domein in met DNS-records die naar je host verwijzen. Als je domein bij ons beheerd wordt, kun je dit eenvoudig regelen via de [EasyDNS](domain-easydns.md) optie.

## Installatie
Nu aan alle vereisten is voldaan en de voorbereidingen zijn getroffen, kun je doorgaan met het installeren van de Odoo applicatie.

Bij het werken met meerdere Docker-projecten is het slim om een duidelijke mappenstructuur aan te houden zodat projecten gescheiden blijven. Een veelgebruikte aanpak is een *docker* map in je home directory aan te maken, met per domein een aparte submap. Zo kun je meerdere projecten op één server hosten zonder configuratieconflicten.

Voorbeeld om de structuur voor het domein `example.com` klaar te zetten:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

Binnen deze projectmap is het aan te raden submappen te maken die als volumes door de containers worden gebruikt. Deze volumes zorgen ervoor dat data gedeeld of persistent blijft. Een belangrijk voorbeeld is de gedeelde webroot, waar zowel nginx als certbot toegang toe moeten hebben om SSL-certificaten te genereren en te vernieuwen. Maak de volgende structuur aan:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

Dit creëert aparte mappen voor nginx configuratie, SSL-certificaten, include-bestanden en Odoo-specifieke content zoals configs en addons.

### Docker Compose aanmaken

Maak in je docker project een bestand `compose.yml` aan met `nano compose.yml` en plak de volgende code erin:

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

### Firewall

Voor nginx en certbot moeten de TCP-poorten 80 (HTTP) en 443 (HTTPS) openstaan in de firewall. Certbot gebruikt poort 80 voor HTTP-validatie en poort 443 is nodig voor versleuteld HTTPS-verkeer. Als je UFW (Uncomplicated Firewall) gebruikt, voeg je de regels toe met:

```
sudo ufw allow http
sudo ufw allow https
```

Controleer daarna met `sudo ufw status` of de poorten openstaan. Zorg dat geen andere firewallregels de toegang blokkeren, anders kan het genereren van certificaten of HTTPS-verkeer mislukken.

### Nginx configuratie

Begin met het aanmaken van een configuratiebestand voor je domein in de map `nginx/conf`. Maak bijvoorbeeld aan met:

```
nano nginx/conf/example.com.conf
```

Voeg de volgende basisconfig toe, vervang `example.com` door je eigen domein:

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

Deze config zorgt dat certbot de ACME challenge kan voltooien en SSL-certificaten kan uitgeven. Ook worden alle HTTP-verzoeken doorgestuurd naar HTTPS.

Sla het bestand op en start de benodigde containers (database, Odoo en nginx) met:

```
sudo docker compose up -d db odoo nginx
```

De containers draaien nu op de achtergrond en nginx gebruikt de nieuwe config, zodat certbot certificaten kan genereren.

### SSL-certificaten genereren

Gebruik het volgende commando om SSL-certificaten aan te maken met certbot. Vervang `example.com` door je domein en `user@mail.com` door je eigen e-mailadres:

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Maak daarna een DH-parameterbestand aan om de veiligheid van de sleuteluitwisseling te versterken:

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Maak het bestand `ssl.conf` aan met:

```
nano nginx/ssl/ssl.conf
```

En voeg deze inhoud toe, vervang `example.com` door je domein:

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

## Configuratie

### Nginx configuratie

Bewerk het nginx-configuratiebestand dat je eerder maakte en vervang de inhoud door de onderstaande configuratie. Zorg dat je je eigen domeinnaam invult bij `server_name` en de juiste paden naar je certificaatbestanden bij `ssl_certificate` en `ssl_certificate_key`.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # Include Mozilla's SSL settings
    include /etc/nginx/ssl/ssl.conf;

    # Certificate paths (ensure these match your mounted volume)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    #Gzip
    include /etc/nginx/inc/gzip.conf;

    # Proxy settings for Odoo
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
        # Recommended timeouts for standard requests
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # Cache static files
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # Increase timeouts for long polling
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

    # This allows Certbot to access the challenge URL
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

Sla de wijzigingen op en herstart de nginx-container om de nieuwe instellingen te laden:

```
sudo docker compose restart nginx
```

Controleer tijdens het herstarten op foutmeldingen. Bij problemen kun je de logs bekijken met `sudo docker compose logs nginx`. Als alles goed draait, bezoek je je website om te checken of HTTPS actief is en de site correct wordt geladen.

### Odoo Configuratie-opties

Voor custom instellingen kun je een eigen configuratiebestand voor Odoo aanmaken. Maak een nieuw bestand aan op `config/odoo.conf` en voeg de gewenste opties toe.

In dit bestand kun je handige parameters definiëren: `list_db = False` verbergt de databasekeuze op de loginpagina, `proxy_mode = True` geeft aan dat Odoo achter een reverse proxy draait, en als je custom addons wilt gebruiken, kun je de `addons_path` regel uitcommentariëren en verwijzen naar de addons map die je eerder maakte. Voorbeeldconfiguratie:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```

### Verwijder de -i base flag

De `-i base` flag moet uit het `compose.yml` bestand verwijderd worden, anders wordt de database telkens opnieuw aangemaakt als je de Odoo container herstart. Open het compose bestand met `nano compose.yml` en pas de commandoregel aan naar:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```

## Website benaderen

Als de installatie en configuratie klaar zijn en alle services draaien, kun je je website veilig bereiken door je domein in de browser in te voeren.

![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Je ziet dan de startpagina van je nieuwe installatie. Voor de eerste login is er een standaardaccount met gebruikersnaam `admin` en wachtwoord `admin`. Wij raden sterk aan deze inloggegevens direct te wijzigen.

## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Odoo nu succesvol geïnstalleerd en geconfigureerd op je VPS. We raden je aan ook eens te kijken naar de volgende bronnen voor extra hulp en tips tijdens je serverconfiguratie:

- [Odoo.com](https://odoo.com) - Officiële website
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Odoo documentatie

Heb je nog vragen die hier niet beantwoord worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />