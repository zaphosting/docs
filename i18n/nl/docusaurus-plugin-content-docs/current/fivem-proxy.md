---
id: fivem-proxy
title: "FiveM: Stel een Reverse Proxy in"
description: "Ontdek hoe je de beveiliging en betrouwbaarheid van je FiveM-server verbetert met een reverse proxy setup voor betere DDoS-bescherming en prestaties → Leer het nu"
sidebar_label: Reverse Proxy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een reverse proxy server fungeert als tussenpersoon tussen de eindgebruikers (jouw spelers) en je FiveM-server. Dit is super handig voor servers die vaak DDoS-aanvallen krijgen, omdat het een extra beveiligingslaag en betrouwbaarheid biedt door de zichtbaarheid van de hoofdhost te verminderen en extra mitigatie toe te voegen.

In deze gids nemen we je mee door het proces van het instellen van een reverse proxy voor je FiveM-server. Er zijn twee soorten reverse proxies in dit scenario; de connect proxy die gebruikt wordt voor het connect endpoint en een server proxy die gebruikt wordt voor het server endpoint waar raw TCP/UDP proxying plaatsvindt. Beide kunnen onafhankelijk van elkaar worden ingesteld.

<InlineVoucher />

## Voorbereiding

Om een reverse proxy in te stellen heb je een **Linux Server** nodig (zoals een VPS) die je proxy server host. In dit voorbeeld gebruiken we Ubuntu als Linux distributie, maar de installatie stappen zijn vergelijkbaar voor de meeste Linux distributies.

:::tip Aanbevolen VPS Specificaties
We raden sterk aan om hogere netwerksnelheden te kiezen als je een server proxy wilt opzetten, vooral als je server veel spelers heeft. Dit komt omdat je VPS raw TCP/UDP direct tussen de client (speler) en de FiveM-server streamt. Anders volstaat een server met basis specificaties en minimale upgrades. :)
:::

We raden ook aan om de proxy op te zetten met een **Domein** dat je bezit. Maak een `A` record aan op het domein dat je wilt gebruiken (bijvoorbeeld `zapdocs.example.com`), en laat deze verwijzen naar het IP-adres van je __Linux VPS__. Dit is wat spelers gebruiken om verbinding te maken met de server, hoewel je technisch gezien ook het IP-adres van je proxy server kunt gebruiken als je dat wilt.

### Toegang tot VPS

Met je Linux VPS klaar, moet je verbinding maken. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids om te leren hoe je dit doet.

### Nginx Installeren

Je gaat Nginx gebruiken om een reverse proxy server te hosten, omdat het een zeer krachtige en populaire open-source webserver is.

Nu je toegang hebt tot je VPS, gebruik je het volgende commando om Nginx te installeren.

```
sudo apt install nginx
```

Na installatie moet je je firewall aanpassen zodat de service toegankelijk is vanaf het internet. Voor deze gids gebruiken we de **UFW Firewall** omdat Nginx zichzelf registreert als een app, wat het makkelijk maakt om instellingen aan te passen. Meer info over de UFW Firewall vind je in onze [Linux Security Tips](vserver-linux-security-tips.md) gids.

:::note
Gebruik je een andere firewall (zoals Iptables), zorg dan dat je de juiste firewall toegang geeft aan Nginx, specifiek op poort 80 en 443 waar de nginx service draait.
:::

Je kunt Nginx profielen bekijken met `sudo ufw app list`. In dit geval wil je de **Nginx Full** optie selecteren, die toegang geeft tot HTTP voor testen en HTTPS voor productie.

```
sudo ufw allow 'Nginx Full'
```

Met Nginx nu ingesteld, probeer de pagina te openen in een browser om te checken of alles werkt. Als de testpagina goed laadt, kun je verder met de gids.

```
http://[jouw_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Connect Proxy

Een connect proxy wordt gebruikt om het connect endpoint van je FiveM-server te proxien. Dit betekent dat je proxy server verantwoordelijk is voor het ontvangen van connect endpoint verzoeken en deze doorstuurt naar je hoofd FiveM-server. Dit helpt enorm om het echte IP-adres van je FiveM host te verbergen in de serverlijst, waardoor je zichtbaarheid vermindert.

### Nginx Setup

Begin met het aanmaken van een entry in de Nginx directory voor de host die je eerder hebt gekozen tijdens de domein setup. In dit voorbeeld gebruiken we weer `zapdocs.example.com`.

Gebruik het volgende commando om het serverblok voor je domein aan te maken, vervang `[your_domain]` door je eigen domein.

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

Kopieer nu de volgende template in je editor en pas deze aan met jouw gegevens.

```
upstream backend {
    # FiveM Server IP-adres
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # Bijvoorbeeld: zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # Nodig om auth headers correct door te geven
        proxy_pass_request_headers on;
        # Nodig om te voorkomen dat deferrals de verbinding meteen sluiten
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # Extra blok voor een caching proxy
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

Als je alle waarden hebt aangepast aan jouw setup, sla je het bestand op en sluit je nano af met `CTRL + X`, gevolgd door `Y` om te bevestigen en dan `ENTER`.

Nu moet je het serverblok activeren door een symlink te maken naar de actieve directory.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Om te checken of alles klopt, vooral qua syntax, gebruik je `sudo nginx -t`. Als het succesvol is, herstart je Nginx om het nieuwe serverblok actief te maken.

```
systemctl reload nginx.service
```

Na het herstarten test je of je het domein kunt bereiken in je browser. Als het lukt, zou de pagina de gewenste content moeten laden die je hebt ingesteld als `targetServer` parameter. Heb je problemen? Check dan de logs met `journalctl -f -u nginx.service` om fouten te vinden.

### FiveM Configuratie

Met de proxy ingesteld, moet je wat waarden aanpassen in het `server.cfg` configuratiebestand van je FiveM-server.

Voeg de volgende regels toe, vervang de waarden door jouw setup.

```
# Voorkomt dat de serverlijst je server toont met het echte IP
set sv_forceIndirectListing true

# Laat de serverlijst backend je domein gebruiken in plaats van standaard (bijv. zapdocs.example.com)
set sv_listingHostOverride "[your_domain]"

# Een spatie-gescheiden lijst van IPv4 netwerken in CIDR notatie die 'X-Real-IP' mogen doorgeven en de rate limiter omzeilen
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# Het daadwerkelijke endpoint waar je server op draait, of één of meerdere server endpoint proxies
set sv_endpoints "[your_fivem_serverip]:30120"
```

Sla het bestand op en herstart de server. De volgende keer dat je server opstart, zou je domein moeten verwijzen naar je FiveM-server en kun je hiermee verbinden.

Je kunt checken of alles werkt door te proberen: `https://[your_domain]/info.json` te openen. Als het laadt, werkt je connect proxy.

## Server Proxy

Een server proxy wordt gebruikt om het server endpoint van je FiveM-server te proxien, wat direct raw TCP/UDP endpoints en streams proxied.

### Nginx Setup

Hiervoor gebruik je de **stream** module van Nginx. Open het `nginx.conf` bestand met nano.

```
sudo nano /etc/nginx/nginx.conf
```

Kopieer nu de volgende inhoud in de root scope en pas aan met jouw gegevens.

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

Sla het bestand op en sluit nano af met `CTRL + X`, gevolgd door `Y` en `ENTER`.

Check de syntax met `sudo nginx -t`. Als het succesvol is, herstart je Nginx om de nieuwe configuratie actief te maken.

```
systemctl reload nginx.service
```

Na het herstarten probeer je via het proxy domein verbinding te maken met je game server. Als het lukt, kun je verbinden met de server die je als `targetServer` hebt ingesteld. Problemen? Check de logs met `journalctl -f -u nginx.service` voor fouten.

### FiveM Configuratie

Met de proxy ingesteld, moet je een waarde aanpassen in het `server.cfg` bestand van je FiveM-server.

:::tip
Heb je de `set sv_endpoints` parameter al ingesteld via een Connect Proxy? Dan kun je deze stap overslaan.
:::

Voeg deze regel toe, vervang de waarde door jouw setup.

```
# Het daadwerkelijke endpoint waar je server op draait, of één of meerdere server endpoint proxies
set sv_endpoints "[your_fivem_serverip]:30120"
```

Sla het bestand op en herstart de server. De volgende keer dat de server start, streamen de raw TCP/UDP endpoints via je reverse proxy.

Je kunt dit controleren door het IP-adres van spelers te analyseren; deze zouden allemaal het IP-adres van je proxy server moeten hebben, gevolgd door willekeurig toegewezen poorten.

## SSL Certificaat

Nu je FiveM reverse proxy staat, raden we sterk aan om een SSL-certificaat toe te voegen aan je domeinen zodat de site veilig data verstuurt via HTTPS.

Check onze [Install Certbot](dedicated-linux-certbot.md) gids, die het hele proces behandelt van het aanvragen en automatisch vernieuwen van SSL-certificaten voor je domein(en).

## Conclusie

Gefeliciteerd, je hebt succesvol een reverse proxy opgezet voor je FiveM-server, wat je diverse verbeteringen in beveiliging, betrouwbaarheid en prestaties oplevert. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />