---
id: dedicated-linux-proxy
title: "Dedicated Server: Stel een Reverse Proxy in met nginx op Linux"
description: "Ontdek hoe je een veilige en efficiënte reverse proxy opzet voor websites en game servers om toegang en bescherming te verbeteren → Leer het nu"
sidebar_label: Reverse Proxy
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Een reverse proxy server is een server die fungeert als tussenpersoon tussen de eindgebruikers en een andere server. Websites en game servers zijn populaire redenen om een reverse proxy te gebruiken, elk met hun eigen voordelen zoals veiligheid, makkelijke toegang en bescherming.

In deze gids bekijken we hoe je een algemene reverse proxy opzet voor websites, en ook een setup die speciaal gericht is op game servers.

## Voorbereiding

Om een reverse proxy op te zetten heb je een **Linux Server** nodig die jouw proxy server host. In dit voorbeeld gebruiken we Ubuntu als Linux distributie, maar de installatie stappen zijn vergelijkbaar voor de meeste Linux distributies.

:::tip Aanbevolen VPS specificaties
Voor een reverse proxy gericht op game servers raden we sterk aan om hogere netwerksnelheden te kiezen, vooral als je server veel spelers heeft. Dit komt omdat je VPS ruwe TCP/UDP data direct tussen de client (speler) en de game server streamt. Voor een web-gerelateerde proxy volstaat meestal een server met basis specificaties en minimale upgrades. :)
:::

We raden aan om de proxy op te zetten met een **domein** dat je zelf bezit. Voor elk subdomein dat je wilt gebruiken, maak je een `A` DNS-record aan (bijvoorbeeld `zapdocs.example.com`), die verwijst naar het IP-adres van je __Linux VPS__. Dit is wat gebruikers gebruiken om je website of game server te bereiken.

### Toegang tot VPS

Met je Linux VPS klaar, moet je verbinding maken. Gebruik onze [SSH Initial Access](vserver-linux-ssh.md) gids om te leren hoe je dit doet.

### Nginx installeren

Je gebruikt Nginx om een reverse proxy server te hosten, omdat het een zeer krachtige en populaire open-source webserver is.

Nu je toegang hebt tot je VPS, installeer je Nginx met het volgende commando:

```
sudo apt install nginx
```

Na installatie moet je je firewall aanpassen zodat de service bereikbaar is vanaf het internet. Voor deze gids gebruiken we de **UFW Firewall**, omdat Nginx zichzelf registreert als een app, wat het makkelijk maakt om instellingen aan te passen. Meer info over UFW vind je in onze [Linux Security Tips](vserver-linux-security-tips.md) gids.

:::note
Gebruik je een andere firewall (zoals Iptables), zorg dan dat je poorten 80 en 443 openzet voor Nginx, want daar draait de service op.
:::

Je kunt Nginx profielen bekijken met `sudo ufw app list`. Kies hier voor **Nginx Full**, zodat HTTP (voor testen) en HTTPS (voor productie) toegankelijk zijn.

```
sudo ufw allow 'Nginx Full'
```

Met Nginx ingesteld, probeer je de pagina te openen in een browser om te checken of alles werkt. Als de testpagina laadt, kun je verder met de gids.

```
http://[jouw_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Voor Websites

Een reverse proxy voor websites is super handig om verschillende redenen, zoals het doorsturen naar interne server resources (bijvoorbeeld een Vaultwarden instance zonder poort in de URL) of het doorsturen naar externe content, wat handig is voor load balancing en bescherming.

Een groot voordeel is dat je server verzoeken van meerdere bronnen/domeinen kan afhandelen, in plaats van één webserver die alleen op poort 80/443 draait.

### Nginx Setup

Begin met het aanmaken van een entry in de Nginx directory voor het domein dat je eerder hebt gekozen, meestal een subdomein zoals `zapdocs.example.com` in ons voorbeeld.

:::important
Zorg dat je een `A` record hebt aangemaakt dat verwijst naar het IP-adres van je proxy server voordat je verder gaat. Zonder dit werkt het domein en de volgende stappen niet zoals verwacht.
:::

Ga naar de server block map met:

```
cd /etc/nginx/sites-available/
```

Maak nu een nieuw config bestand aan. We raden aan om de domeinnaam als bestandsnaam te gebruiken, zodat het makkelijk te herkennen is (bijv. zapdocs.example.com). Vervang `[your_filename]` door de naam die jij wilt gebruiken.

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

Als je alles hebt aangepast, sla je het bestand op en sluit je nano af met `CTRL + X`, dan `Y` en `ENTER`.

Activeer nu het server block door een symlink te maken naar de actieve map:

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

Check of alles klopt qua syntax met:

```
sudo nginx -t
```

Als het succesvol is, herstart je Nginx om de nieuwe configuratie te laden:

```
systemctl reload nginx.service
```

Test nu in je browser of je domein werkt en de gewenste content laadt die je als `targetServer` hebt ingesteld. Bij problemen check je de logs met:

```
journalctl -f -u nginx.service
```

## Voor Game Servers

Een reverse proxy voor game servers is ook super handig, bijvoorbeeld voor extra beveiliging en betrouwbaarheid door betere mitigatie en het beperken van toegang tot de hoofdhost.

:::tip
De meeste dedicated game servers werken prima met een raw TCP/UDP endpoint proxy zoals je hier gaat opzetten. Een kleine minderheid van games, zoals BeamMP, werkt mogelijk niet goed met VPN’s en proxies, dus test dit per game.
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

Je voegt een nieuwe `stream` block toe aan het hoofdconfiguratiebestand `nginx.conf`, waarin je de upstream server en de poort waarop je proxy luistert definieert.

Open het bestand met:

```
sudo nano /etc/nginx/nginx.conf
```

Plak hierin de volgende template. Vervang `[your_target_server]` door de server waar je naartoe wilt streamen, inclusief poort (bijv. `:30120` voor FiveM). Vervang `[your_port_listener]` door de poort waarop je proxy bereikbaar moet zijn.

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

Nginx luistert dus op de opgegeven poort en streamt alles door naar de target server die je hebt ingesteld.

Sla het bestand op en sluit nano af met `CTRL + X`, dan `Y` en `ENTER`.

Check de syntax met:

```
sudo nginx -t
```

Als alles goed is, herstart je Nginx:

```
systemctl reload nginx.service
```

Probeer nu via je proxy domein verbinding te maken met je game server. Als het werkt, verbind je succesvol met de server die je als `targetServer` hebt ingesteld. Bij problemen check je de logs met:

```
journalctl -f -u nginx.service
```

## SSL Certificaat

Nu je reverse proxy draait, raden we sterk aan om een SSL certificaat toe te voegen aan je domeinen zodat de data veilig via HTTPS wordt verzonden. Bekijk onze [Install Certbot](dedicated-linux-certbot.md) gids, waarin het hele proces van aanvragen en automatisch vernieuwen van SSL certificaten wordt uitgelegd.

## Conclusie

Gefeliciteerd, je hebt succesvol een reverse proxy opgezet voor een website of je game server (of beide :), wat je meer veiligheid, betrouwbaarheid en betere performance geeft. Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂