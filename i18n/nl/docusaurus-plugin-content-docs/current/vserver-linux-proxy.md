---
id: vserver-linux-proxy
title: "VPS: Stel een Reverse Proxy in met nginx op Linux"
description: "Ontdek hoe je een veilige en efficiënte reverse proxy opzet voor websites en game servers om toegang en bescherming te verbeteren → Leer het nu"
sidebar_label: Reverse Proxy
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een reverse proxy server is een server die fungeert als tussenpersoon tussen de eindgebruikers en een andere server. Websites en game servers zijn populaire redenen om een reverse proxy te gebruiken, elk met hun eigen voordelen zoals veiligheid, makkelijke toegang en bescherming.

In deze gids gaan we het proces doorlopen om een algemene reverse proxy op te zetten voor websites, maar ook eentje die specifiek is afgestemd op game servers.

<InlineVoucher />

## Voorbereiding

Om een reverse proxy in te stellen heb je een **Linux Server** nodig die jouw proxy server zal hosten. In dit voorbeeld gebruiken we Ubuntu als Linux distributie, maar de installatie stappen zijn vergelijkbaar voor de meeste Linux distributies.

:::tip Aanbevolen VPS Specificaties
Voor een reverse proxy gericht op game servers raden we sterk aan om hogere netwerksnelheden te kiezen, vooral als je server veel spelers heeft. Dit komt omdat je VPS ruwe TCP/UDP data direct tussen de client (speler) en de game server streamt. Voor een web-gerelateerde proxy volstaat meestal een server met basis specificaties en minimale upgrades. :)
:::

We raden aan om de proxy op te zetten met een **Domein** dat je bezit. Voor elk subdomein dat je wilt gebruiken, maak je een `A` DNS-record aan (bijvoorbeeld `zapdocs.example.com`), die verwijst naar het IP-adres van je __Linux VPS__. Dit is wat gebruikers zullen gebruiken om je website of game server te bereiken.

### Toegang tot VPS

Met je Linux VPS klaar, moet je verbinding maken. Gebruik onze [SSH Eerste Toegang](vserver-linux-ssh.md) gids om te leren hoe je dit doet.

### Nginx installeren

Je gaat Nginx gebruiken om een reverse proxy server te hosten, omdat het een zeer krachtige en populaire open-source webserver is.

Nu je toegang hebt tot je VPS, gebruik je het volgende commando om Nginx te installeren.

```
sudo apt install nginx
```

Na installatie moet je je firewall aanpassen zodat de service vanaf het internet bereikbaar is. Voor deze gids gebruiken we de **UFW Firewall** omdat Nginx zichzelf registreert als een app, wat het makkelijk maakt om instellingen aan te passen. Meer info over UFW vind je in onze [Linux Security Tips](vserver-linux-security-tips.md) gids.

:::note
Gebruik je een andere firewall (zoals Iptables), zorg dan dat je de juiste firewallregels toevoegt voor Nginx, specifiek voor poorten 80 en 443 waar de nginx service op draait.
:::

Je kunt Nginx profielen bekijken met `sudo ufw app list`. In dit geval wil je de optie **Nginx Full** selecteren, die toegang geeft tot HTTP voor testen en HTTPS voor productie.

```
sudo ufw allow 'Nginx Full'
```

Met Nginx nu ingesteld, probeer de pagina te openen in een browser om te checken of het werkt. Als de testpagina goed laadt, kun je verder met de gids.

```
http://[jouw_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Voor Websites

Een reverse proxy voor websites kan super handig zijn om verschillende redenen, zoals het doorsturen naar interne server resources, bijvoorbeeld een vaultwarden instance (zonder dat je de poort in de URL hoeft te zetten), of het doorsturen naar externe content wat handig is voor load balancing en bescherming.

Een van de grootste voordelen is dat je server verzoeken van zoveel bronnen/domeinen kan afhandelen als je wilt, in plaats van één webserver die draait op poort 80/443.

### Nginx Setup

Begin met het aanmaken van een entry in de Nginx directory voor het domein dat je eerder hebt gekozen, meestal een subdomein zoals `zapdocs.example.com` in ons voorbeeld.

:::important
Zorg dat je een `A` record hebt aangemaakt dat verwijst naar het IP-adres van je proxy server voordat je verder gaat. Zonder dit werkt het domein en de volgende stappen niet zoals verwacht.
:::

Ga naar de server block map met het volgende commando. Hier sla je al je proxy configuraties op.

```
cd /etc/nginx/sites-available/
```

Maak nu een nieuw config bestand aan met het volgende commando. We raden aan om het domein als bestandsnaam te gebruiken, zodat je het makkelijk herkent (bijv. zapdocs.example.com). Vervang `[your_filename]` door de bestandsnaam die jij wilt gebruiken.

```
sudo nano [your_filename]
```

Nano opent nu, hier plak je de volgende template. Pas `[your_domain]` aan naar het domein dat je wilt proxyen en `[your_target_server]` naar de server waar je naartoe wilt.

```
upstream targetServer {
    # Voeg hier de server toe die je wilt bereiken. Dit kan zijn:
    # Interne "localhost" redirect (bijv. 127.0.0.1:9090)
    # Externe server (bijv. 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Domein dat afgehandeld moet worden (bijv. zapdocs.example.com)
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
    }
}
```

Als je alles hebt aangepast, sla je het bestand op en sluit je nano af met `CTRL + X`, dan `Y` om te bevestigen en `ENTER`.

Activeer nu het server block bestand door een symlink te maken naar de actieve map.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Check of alles klopt, vooral de syntax, met `sudo nginx -t`. Als het succesvol is, herstart je Nginx om de nieuwe server block te laden.

```
systemctl reload nginx.service
```

Na het herstarten test je of je het domein kunt bereiken in je browser. Als het goed is, laadt de pagina de content die je hebt ingesteld als `targetServer`. Heb je problemen? Check dan de logs met `journalctl -f -u nginx.service` om fouten te vinden.

## Voor Game Servers

Een reverse proxy voor game servers kan super nuttig zijn om extra beveiliging en betrouwbaarheid te bieden, door betere mitigatie en het beperken van toegang tot de hoofdhost.

:::tip
De meeste dedicated game servers werken prima met een raw TCP/UDP endpoint proxy zoals je hier gaat opzetten. Een kleine minderheid van games, zoals BeamMP, werkt mogelijk minder goed met VPN’s en proxies, dus test dit per game.
:::

### Nginx Setup

Hiervoor heb je de **Nginx Stream** module nodig, die niet standaard in Nginx zit.

#### Installeer Nginx stream module

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### Nginx stream configuratie

Je voegt een nieuwe `stream` block toe aan het hoofdconfiguratiebestand `nginx.conf`, waarin je de upstream server en de poort waarop deze bereikbaar is via je proxy definieert.

Open het bestand met:

```
sudo nano /etc/nginx/nginx.conf
```

Plak hierin de volgende template voor een `stream` block. Vervang `[your_target_server]` door de server waar je naartoe wilt streamen, inclusief poort (bijv. `:30120` voor FiveM). Vervang `[your_port_listener]` door de poort waarop mensen via de proxy verbinding maken.

```
stream {
    upstream targetServer {
        # Voeg hier de server toe die je wilt bereiken (bijv. 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Luisterpoort die verbindingen accepteert en doorstuurt (bijv. 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

Kort gezegd luistert Nginx op de opgegeven poort voor inkomende verbindingen en streamt alles door naar de target server die je hebt ingesteld (van je proxy server naar je echte game server).

Sla het bestand op en sluit nano af met `CTRL + X`, dan `Y` en `ENTER`.

Controleer de syntax met `sudo nginx -t`. Als alles goed is, herstart je Nginx om de nieuwe configuratie te laden.

```
systemctl reload nginx.service
```

Probeer nu via het proxy domein verbinding te maken met je game server. Als het werkt, kun je verbinden met de server die je als `targetServer` hebt ingesteld. Bij problemen check je de logs met `journalctl -f -u nginx.service` om fouten te vinden.

## SSL Certificaat

Nu je reverse proxy staat, raden we sterk aan om een SSL Certificaat toe te voegen aan je domeinen zodat de site veilig data verstuurt via HTTPS. Check onze [Certbot Installatie](dedicated-linux-certbot.md) gids, die het hele proces behandelt van aanvragen tot automatisch vernieuwen van SSL certificaten voor je domein(en).

## Conclusie

Gefeliciteerd, je hebt succesvol een reverse proxy opgezet voor een website of je game server (of beide :), wat je meer veiligheid, betrouwbaarheid en betere performance geeft. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />