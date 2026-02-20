---
id: dedicated-linux-certbot
title: "Certbot instellen op een Linux-server - Beveilig je websites met Let's Encrypt SSL"
description: "Ontdek hoe je je website beveiligt met gratis SSL-certificaten via Certbot en Let's Encrypt voor veilige datatransmissie → Leer het nu"
sidebar_label: Certbot installeren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

SSL-certificaten zijn onmisbaar op het internet en zorgen ervoor dat data veilig wordt verzonden tussen client en host. In deze gids laten we zien hoe je de open-source tool [**Certbot**](https://certbot.eff.org/) instelt om gratis SSL-certificaten aan te vragen bij de non-profit certificaatautoriteit **Let's Encrypt**.

## Voorbereiding

Om Certbot te gebruiken heb je een Linux-server nodig en een **domein** dat je bezit. Je moet toegang hebben tot de DNS-instellingen van het domein en je **moet** een `A` DNS-record aanmaken die verwijst naar het IP-adres van je __Linux-server__ voor elk rootdomein of subdomein dat je wilt gebruiken.

Certbot heeft ook extra plugins waarmee je met één klik een certificaat kunt instellen voor een domein, wat werkt met verschillende webservers zoals Nginx of Apache. Wij raden Nginx aan omdat het een snelle en populaire open-source webserver is. Bekijk onze [Linux reverse proxy](dedicated-linux-proxy.md) gids voor hulp bij het instellen hiervan.

## Installatie

Begin met het installeren van het open-source [**Certbot**](https://certbot.eff.org/) pakket, waarmee je gratis SSL-certificaten van **Let's Encrypt** kunt aanvragen.

```
sudo apt install certbot
```

Nu Certbot geïnstalleerd is, kun je certificaten aanvragen voor je domein(en). Let's Encrypt en Certbot bieden verschillende ACME Challenges om het eigenaarschap van het domein te verifiëren.

Wij raden sterk aan om de standaard **HTTP-01** methode te gebruiken omdat deze automatische verlenging ondersteunt. Mocht je hier problemen mee hebben, dan kun je als alternatief de **DNS-01** methode proberen. Deze is handmatig en ondersteunt geen automatische verlengingen omdat het werkt via een **TXT** DNS-record.

:::tip Gebruik Webserver Plugins
Als je een webserver gebruikt zoals Nginx, Apache of je eigen webserver, raden we aan om naar de sectie **Web Server Plugins** hieronder te gaan. Daar leggen we uit hoe je extra Certbot-plugins gebruikt voor deze webservers, zodat je met één klik een certificaat kunt aanvragen zonder de webserver uit te schakelen.
:::

### HTTP-01 Challenge

Nu Certbot geïnstalleerd is, kun je certificaten aanvragen voor je domein(en). In dit voorbeeld gebruiken we de standalone modus, wat betekent dat Certbot tijdelijk een webserver start om de benodigde acties uit te voeren. Dit betekent dat je poort 80 in je firewall moet openen en dat er geen andere webservers of services op poort 80 mogen draaien, zodat de tijdelijke webserver kan starten en de challenge opgehaald kan worden (vandaar de `HTTP` in de naam van de challenge).

In het volgende commando gebruik je de parameter `--standalone` om Certbot te vertellen dat je de tijdelijke webserver wilt gebruiken.

```
# Voor rootdomeinen
certbot certonly --standalone -d [jouw_root_domein] -d www.[jouw_root_domein]

# Voor subdomeinen
certbot certonly --standalone -d [jouw_domein]

# Interactieve setup
certbot certonly --standalone
```

Na het uitvoeren van het commando moet je mogelijk een eerste interactieve setup doorlopen. Hierbij voer je een e-mailadres in voor communicatie over het certificaat, gevolgd door een optionele mailinglijst en de algemene voorwaarden die je moet accepteren.

Certbot genereert nu een ACME Challenge en host deze via de tijdelijke webserver. De Let's Encrypt-servers proberen deze op te halen van jouw server en bij succes worden de certificaten aangemaakt en opgeslagen in de map `/etc/letsencrypt/live/[jouw_domein]`.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

Je kunt de SSL-certificaten nu overal gebruiken door simpelweg het lokale pad naar de certificaten te geven.

### TXT DNS-record

Als je problemen hebt met het verifiëren van je domein via de **HTTP-01** methode, kun je als alternatief de **DNS-01** methode proberen. Hierbij maak je een **TXT** DNS-record aan met een waarde die Let's Encrypt je geeft.

Zoals eerder genoemd ondersteunt deze methode géén automatische verlenging, tenzij je zelf een infrastructuur opzet om dit te beheren. Daarom raden we aan waar mogelijk de **HTTP-01** methode te gebruiken.

In het volgende commando gebruik je de parameter `--preferred-challenges` om Certbot te vertellen dat je de `DNS-01` methode wilt gebruiken.

```
# Voor rootdomeinen
certbot certonly --preferred-challenges dns-01 -d [jouw_root_domein] -d www.[jouw_root_domein] --manual -m [jouw_root_domein] -m www.[jouw_root_domein]

# Voor subdomeinen
certbot certonly --preferred-challenges dns-01 -d [jouw_domein] --manual -m [jouw_domein]

# Interactieve setup
certbot certonly --preferred-challenges dns-01
```

Na het uitvoeren van het commando moet je mogelijk een eerste interactieve setup doorlopen. Hierbij voer je een e-mailadres in voor communicatie over het certificaat, gevolgd door een optionele mailinglijst en de algemene voorwaarden die je moet accepteren.

Certbot geeft je nu instructies om een **TXT** DNS-record aan te maken met een specifieke waarde. De target is meestal `_acme-challenge.` voorafgaand aan je domein (in dit voorbeeld `_acme-challenge.zapdocs.example.com`) en de waarde wordt in de console weergegeven.

Zodra je het record hebt aangemaakt, druk je op enter om door te gaan. Als alles klopt en is gepropageerd, worden de certificaten aangemaakt en opgeslagen in `/etc/letsencrypt/live/[jouw_domein]`.

:::note
Wees geduldig, want DNS-recordwijzigingen kunnen even duren om te propagateren. Meestal gebeurt dit binnen enkele minuten, maar in zeldzame gevallen kan het langer duren.
:::

Je kunt de SSL-certificaten nu overal gebruiken door simpelweg het lokale pad naar de certificaten te geven.

## Webserver Plugins

Certbot heeft verschillende extra webserver-plugins die het beheren van certificaten nog makkelijker maken, omdat de plugins automatisch de relevante serverblokken aanpassen. Om een plugin te gebruiken voeg je simpelweg de juiste parameter toe aan je `certbot` commando.

Beide methodes gebruiken de **HTTP-01** challenge en werken in principe hetzelfde. Wanneer een plugin wordt gebruikt, zoekt Certbot eerst het serverblok op dat het gevraagde domein bevat als `server_name` parameter. Vervolgens genereert Certbot een ACME Challenge en voegt een tijdelijke `location /.well-known/acme-challenge/...` locatie toe aan het serverblok.

De Let's Encrypt-servers proberen dit op te halen van jouw server en bij succes wordt het certificaat gegenereerd. De serverblokconfiguratie van de gekozen webserver wordt automatisch aangepast om HTTPS (poort 443) te gebruiken en de paden naar het nieuwe certificaat toe te voegen.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginx Plugin

Zorg eerst dat de plugin geïnstalleerd is.

```
sudo apt install python3-certbot-nginx
```

Gebruik de `--nginx` parameter in je commando om de Nginx plugin te gebruiken.

```
# Voor rootdomeinen
certbot --nginx -d [jouw_root_domein] -d www.[jouw_root_domein]

# Voor subdomeinen
certbot --nginx -d [jouw_domein]

# Interactieve setup
certbot --nginx
```

:::tip
Wil je automatische "one-click" aanpassingen van serverblokken door Certbot uitschakelen? Voeg dan de parameter `certonly` toe, bijvoorbeeld `certbot certonly`.
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Apache Plugin

Zorg eerst dat de plugin geïnstalleerd is.

```
sudo apt install python3-certbot-apache
```

Gebruik de `--apache` parameter in je commando om de Apache plugin te gebruiken.

```
# Voor rootdomeinen
certbot --apache -d [jouw_root_domein] -d www.[jouw_root_domein]

# Voor subdomeinen
certbot --apache -d [jouw_domein]

# Interactieve setup
certbot --apache
```

:::tip
Wil je automatische "one-click" aanpassingen van serverblokken door Certbot uitschakelen? Voeg dan de parameter `certonly` toe, bijvoorbeeld `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webroot Plugin

Als je je eigen lokale webserver draait die geen traditionele software gebruikt, kun je de webroot-methode gebruiken om je eigen webserver te blijven gebruiken zonder deze te hoeven stoppen.

Gebruik de `--webroot` parameter in je commando en voeg ook `-w [jouw_webserver_pad]` toe (kort voor `--webroot-path`), dit is het pad naar de hoofddirectory van je webserver.

```
# Voor rootdomeinen
certbot --webroot -w [jouw_webserver_pad] -d [jouw_root_domein] -d www.[jouw_root_domein]

# Voor subdomeinen
certbot --webroot -w [jouw_webserver_pad] -d [jouw_domein]

# Interactieve setup
certbot --webroot -w [jouw_webserver_pad]
```

:::tip
Een van de meest gebruikte webroot-locaties is `/var/www/html`. Dit kun je ook gebruiken voor webservers zoals Nginx of Apache als je de webserver wilt blijven gebruiken zonder automatische serverblok-aanpassingen zoals de native plugins bieden.
:::

</TabItem>
</Tabs>

## Automatische verlenging

In de meeste gevallen stelt Certbot automatisch de verlenging van certificaten voor je in via een cronjob en/of systemd timer. Je kunt dit testen met het volgende commando dat de `--dry-run` parameter gebruikt.

```
certbot renew --dry-run
```

:::tip
Zoals eerder genoemd ondersteunt de **DNS-01** methode geen automatische verlenging via Certbot, tenzij je zelf een infrastructuur opzet om dit te beheren. Daarom raden we aan om de **HTTP-01** methode te gebruiken.
:::

Als alles goed is ingesteld, zal dit succesvol zijn. Wil je de automatische verlenging bekijken of aanpassen, dan vind je het commando in een van de volgende locaties: `/etc/crontab/`, `/etc/cron.*/*` of via `systemctl list-timers`.

### Handmatige cronjob instellen

Als om wat voor reden dan ook de automatische verlenging niet is ingesteld, kun je dit zelf toevoegen via een cronjob. Open de crontab met `crontab -e`. Als dit de eerste keer is, wordt je gevraagd een editor te kiezen. Kies de eerste optie, meestal `/bin/nano`.

Voeg in het geopende bestand de volgende regel toe om de verlenging elke dag om 6 uur 's ochtends lokaal uit te voeren.

```
0 6 * * * certbot renew
```

Sla het bestand op en sluit nano af met `CTRL + X`, gevolgd door `Y` om te bevestigen en tenslotte `ENTER`.

## Conclusie

Je hebt Certbot succesvol ingesteld voor je domein(en) via verschillende methodes zoals standalone, webroot of via een van de plugins. Hiermee zorg je dat je website veilig data verzendt via HTTPS. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂