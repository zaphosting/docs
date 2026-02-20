---
id: dedicated-linux-odoo
title: "Odoo installeren op een Linux Server - Run je eigen Open Source ERP en CRM"
description: "Ontdek hoe je bedrijfsprocessen beheert en automatiseert met Odoo’s geïntegreerde ERP- en CRM-platform voor gestroomlijnde bedrijfsvoering → Leer nu meer"
sidebar_label: Odoo Installeren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Odoo is een modulair open-source platform dat Enterprise Resource Planning (ERP) en Customer Relationship Management (CRM) functies combineert. Het stelt bedrijven in staat om processen zoals boekhouding, voorraadbeheer, projectmanagement en sales te beheren en automatiseren vanuit één systeem.

Dankzij de flexibele uitbreidingen kan Odoo op maat gemaakt worden voor specifieke behoeften en biedt het een geïntegreerde oplossing voor het beheer van alle bedrijfsgebieden.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Overweeg je deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles wat je moet weten.



## Vereisten

Voordat je **Odoo** installeert, zorg dat je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale prestaties.

| Hardware   | Minimaal    | Aanbevolen  |
| ---------- | ----------- | ----------- |
| CPU        | 1 vCPU Core | 4 vCPU Cores|
| RAM        | 1 GB        | 4 GB        |
| Schijfruimte | 15 GB     | 25 GB       |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Controleer dat je server aan de volgende eisen voldoet voordat je verder gaat met de installatie:

**Dependencies:** `Docker`

**Besturingssysteem:** Laatste versie van Ubuntu/Debian met ondersteuning voor Docker 26+

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Odoo te voorkomen.



## Voorbereiding

Voordat je **Odoo** installeert, moet je je systeem voorbereiden. Dit betekent dat je het besturingssysteem bijwerkt naar de nieuwste versie en alle benodigde dependencies installeert. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.


### Systeem updaten
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je eerst een systeemupdate uit met het volgende commando:

```
sudo apt update && sudo apt upgrade -y
```
Dit zorgt ervoor dat je systeem de laatste beveiligingspatches en softwareversies heeft voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren. Odoo wordt gedraaid via Docker containers, dus Docker moet eerst geïnstalleerd worden. Gebruik hiervoor het volgende commando:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Een uitgebreide uitleg over het installatieproces en het gebruik van Docker vind je in onze [Docker](dedicated-linux-docker.md) gids.



### Domein configureren

Standaard draait Odoo op de server via poorten 80 (HTTP) en 443 (HTTPS). Stel een domein in met DNS-records die naar je server wijzen. Als je domein bij ons beheerd wordt, kun je dit eenvoudig regelen via de [EasyDNS](domain-easydns.md) optie.




## Installatie
Nu aan alle vereisten is voldaan en de voorbereidingen zijn afgerond, kun je doorgaan met het installeren van de Odoo applicatie.

Bij het werken met meerdere Docker-projecten is het slim om een duidelijke mappenstructuur aan te houden om projecten gescheiden te houden. Een veelgebruikte aanpak is een *docker* map aanmaken in de home directory van de gebruiker, met voor elk domein een aparte submap. Zo kun je meerdere projecten op dezelfde server hosten zonder configuratieconflicten.

Bijvoorbeeld, om de structuur voor het domein `example.com` klaar te zetten:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

Binnen deze projectmap is het aan te raden submappen te maken die als volumes door de containers worden gebruikt. Deze volumes zorgen ervoor dat data gedeeld of persistent blijft. Een belangrijk voorbeeld is de gedeelde webroot, die zowel door nginx als certbot gebruikt wordt om SSL-certificaten te genereren en vernieuwen. Een geschikte structuur maak je zo aan:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

Dit creëert aparte mappen voor nginx configuratie, SSL-certificaten, include-bestanden en Odoo-specifieke content zoals configs en addons.




### Docker Compose aanmaken

Maak in je docker projectmap het bestand `compose.yml` aan met `nano compose.yml`. Plak daar de volgende code in:

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

Voor een goede werking van nginx en certbot moeten de TCP-poorten 80 (HTTP) en 443 (HTTPS) openstaan in de firewall. Certbot gebruikt poort 80 voor HTTP-validatie en poort 443 is nodig voor versleuteld HTTPS-verkeer. Als UFW (Uncomplicated Firewall) actief is, voeg je de regels toe met:

```
sudo ufw allow http
sudo ufw allow https
```

Controleer daarna met `sudo ufw status` of de poorten openstaan. Zorg dat geen andere firewallregels deze poorten blokkeren, anders kan het genereren van certificaten of HTTPS-verkeer mislukken.



### Nginx configuratie

Begin met het aanmaken van een configuratiebestand voor je domein in de map `nginx/conf`. Maak een nieuw bestand aan met de naam van je domein, bijvoorbeeld `nano nginx/conf/example.com.conf`, en voeg de volgende basisconfiguratie toe. Vervang `example.com` door je eigen domeinnaam:

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

Deze configuratie zorgt ervoor dat certbot de ACME challenge kan voltooien en geldige SSL-certificaten kan uitgeven. Ook worden alle HTTP-verzoeken doorgestuurd naar HTTPS.

Sla het bestand op en start daarna de benodigde containers: de database, Odoo en nginx. Gebruik het commando:

```
sudo docker compose up -d db odoo nginx
```

De containers draaien nu op de achtergrond en nginx gebruikt direct de nieuwe configuratie, zodat certbot certificaten kan genereren in de volgende stap.


### SSL-certificaten genereren

Gebruik het volgende commando om SSL-certificaten aan te maken met certbot. Vervang `example.com` door je eigen domein en `user@mail.com` door je geldige e-mailadres.

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Maak daarna een dedicated DH-parameterbestand aan om de veiligheid van de cryptografische sleuteluitwisseling te versterken:

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Maak nu het bestand `ssl.conf` aan met `nano nginx/ssl/ssl.conf` en voeg de volgende inhoud toe. Vervang `example.com` door je domein:

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

Bewerk het nginx-configuratiebestand dat je eerder hebt aangemaakt en vervang de inhoud door de onderstaande configuratie om ervoor te zorgen dat je site alleen via HTTPS bereikbaar is.

Vervang `example.com` door je eigen domeinnaam en pas de paden naar je certificaatbestanden aan in de `ssl_certificate` en `ssl_certificate_key` directives.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # Mozilla's SSL instellingen includen
    include /etc/nginx/ssl/ssl.conf;

    # Certificaatpaden (zorg dat deze overeenkomen met je gemounte volumes)
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

    # Proxy instellingen voor Odoo
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
        # Aanbevolen timeouts voor standaard requests
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # Cache statische bestanden
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # Verhoog timeouts voor long polling
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

    # Hiermee kan Certbot de challenge URL bereiken
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```



Sla de wijzigingen op en pas de nieuwe instellingen toe door de nginx container te herstarten:

```
sudo docker compose restart nginx
```

Door te herstarten laadt nginx de nieuwe configuratie en begint direct met het bedienen van verzoeken volgens de nieuwe instellingen. Let op foutmeldingen tijdens het herstarten. Bij problemen kun je de logs bekijken met `sudo docker compose logs nginx` om configuratiefouten op te sporen. Als de container zonder fouten draait, bezoek dan je website om te controleren of HTTPS actief is en alles werkt zoals verwacht.



### Odoo Configuratie-opties

Voor aangepaste instellingen kun je een dedicated configuratiebestand voor Odoo aanmaken. Plaats een nieuw bestand op `config/odoo.conf` en voeg de gewenste opties toe.

In dit bestand kun je handige parameters definiëren: `list_db = False` verbergt de databasekeuze op de loginpagina, `proxy_mode = True` geeft aan dat Odoo achter een reverse proxy draait, en als je custom addons wilt gebruiken, kun je de `addons_path` regel decommentariëren en verwijzen naar de addons map die je eerder hebt aangemaakt. Voorbeeldconfiguratie:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### Verwijder de -i base flag

De `-i base` flag moet verwijderd worden uit het `compose.yml` bestand, anders wordt de database telkens opnieuw aangemaakt als je de Odoo container herstart. Open het compose bestand met `nano compose.yml` en pas de commandoregel aan naar:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## Website bereiken

Als de installatie en configuratie klaar zijn en alle services draaien, kun je je website veilig bereiken door je domein in de browser in te voeren.



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Dit laadt de startpagina van je nieuwe installatie. Voor de eerste login is er een standaardaccount met gebruikersnaam `admin` en wachtwoord `admin`. Wij raden sterk aan deze inloggegevens direct te wijzigen.



## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Odoo succesvol geïnstalleerd en geconfigureerd op je VPS/Dedicated Server. We raden je ook aan om de volgende bronnen te bekijken, die je extra hulp en tips kunnen bieden tijdens je serverconfiguratie:

- [Odoo.com](https://odoo.com) - Officiële website
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Odoo Documentatie

Heb je specifieke vragen die hier niet behandeld worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat om je te helpen! 🙂



