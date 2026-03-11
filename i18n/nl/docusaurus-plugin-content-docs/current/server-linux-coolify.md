---
id: server-linux-coolify
title: "Coolify installeren op een Linux-server - Zelfgehoste Cloud Applicaties"
description: "Ontdek hoe je Coolify installeert en instelt om eenvoudig je eigen applicaties, databases en services zelf te hosten → Leer het nu"
sidebar_label: Coolify Installeren
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introductie

[Coolify](https://coolify.io/) is een open-source, zelfgehost alternatief voor Heroku en Vercel waarmee je eenvoudig je servers, applicaties en databases beheert.

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

Coolify’s intuïtieve dashboard maakt zelfhosten super makkelijk. Je hebt volledige controle over je infrastructuur, geautomatiseerde GitHub deployments en houdt je cloudkosten laag.

In deze gids nemen we je stap voor stap mee in het installatieproces, het vooraf configureren van je admin account en alles wat je verder moet weten.

<InlineVoucher />

## Gebruiksscenario’s van Coolify

Coolify is geschikt voor allerlei dagelijkse situaties en ideaal voor iedereen die applicatie-deployments wil automatiseren, databases wil hosten of background workers wil draaien. Perfect voor beginners én experts.

Coolify ondersteunt out-of-the-box het deployen van Static Sites, Node.js, Python, PHP, Rust en Docker containers. Het heeft trendy one-click templates zoals WordPress, Ghost, Grafana, Appwrite, Nextcloud en PostgreSQL databases. Daarnaast regelt het automatisch Let's Encrypt SSL-certificaten en reverse proxy routing via Traefik.

## Voorbereiding

Hoewel Coolify zelf lichtgewicht is, kan het gebruik van resources flink oplopen afhankelijk van het aantal applicaties, Docker builds en databases die tegelijk draaien. We raden de volgende hardware aan om Coolify te hosten op je VPS of Dedicated Server.

| Hardware   | Minimum      | Aanbevolen                |
| ---------- | ------------ | -------------------------- |
| CPU        | 2 vCPU Cores | 4 vCPU Cores               |
| RAM        | 2 GB         | 4 GB+                      |
| Schijfruimte | 30 GB      | 50 GB+                     |

<InlineServiceLink />

Voordat je Coolify installeert, moet je verbinding maken met je server en zorgen dat het besturingssysteem up-to-date is. Je moet via SSH met rootrechten inloggen. We hebben al een handleiding over [SSH Eerste toegang](vserver-linux-ssh.md) als je hulp nodig hebt bij deze stap.

:::tip[SSH Key Authenticatie]
We **raden sterk aan** om een SSH Key in te stellen in plaats van een wachtwoord als authenticatiemethode. Hoe je dat doet, lees je in onze [SSH Key Setup](vserver-linux-sshkey.md) tutorial.
:::

## Installatie

Nadat je verbonden bent met je server, update je de systeem pakketten en installeer je `curl`, dat nodig is om het Coolify installatie script binnen te halen:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```



### Bereid je Admin Gebruikersgegevens voor

Coolify hanteert strikte beveiligingsregels voor je administrator account. Bereid voordat je het installatiecommando uitvoert je Coolify root gebruikersgegevens voor volgens de volgende validatie-eisen:

* **Gebruikersnaam**
  * Minimaal 3 tekens
  * Maximaal 255 tekens
  * Mag alleen letters, cijfers, spaties, underscores en koppeltekens bevatten
* **E-mail**
  * Moet een geldig e-mailadres zijn
  * Moet een geldige DNS-record hebben
  * Maximaal 255 tekens
* **Wachtwoord**
  * Minimaal 8 tekens
  * Moet hoofdletters en kleine letters bevatten
  * Moet minstens één cijfer bevatten
  * Moet minstens één speciaal teken bevatten
  * Mag geen veelgebruikt of gelekt wachtwoord zijn



### Voer het Installatiescript uit

Coolify biedt een snelle, geautomatiseerde installatiescript. Om de installatie veilig te maken, gebruiken we omgevingsvariabelen om het root administrator account vooraf te definiëren. Zo voorkom je ongeautoriseerde toegang tijdens de setup.

Voer het volgende commando uit en vervang de gebruikersnaam, e-mail en het wachtwoord door je eigen veilige gegevens:

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[Open Source]
Je vindt de broncode van het installatiescript in de [Officiële Coolify Repository](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)
:::

Het script installeert automatisch Docker, zet de benodigde netwerken op en configureert de Coolify containers. Dit kan een paar minuten duren, afhankelijk van de hardware van je server.

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)



### Toegang tot Coolify

Na de installatie is de volgende stap om met je webbrowser het dashboard te openen. Typ het IP-adres van je server gevolgd door poort 8000: `http://[jouw_server_ip]:8000`

Omdat je je credentials al via het installatiecommando hebt opgegeven, zie je direct het inlogscherm in plaats van de setup wizard.

Log in met het e-mailadres en wachtwoord dat je gebruikte in de command line.



### DNS Records instellen

Na het inloggen in je Coolify dashboard is het eerste wat je moet doen het instellen van een eigen domein. Toegang via je IP-adres (`http://[jouw_server_ip]:8000`) is namelijk onveilig.

Door een domein te koppelen kan Coolify automatisch gratis SSL-certificaten genereren voor je dashboard en al je toekomstige applicaties.

Ga naar de DNS beheerpagina van je domeinprovider en voeg twee nieuwe `A` records toe die naar je server wijzen. Als je domein geregistreerd staat bij ZAP-Hosting, kun je onze [Domein Records](domain-records.md) gids volgen om deze entries makkelijk toe te voegen:

| Naam / Host | Type | Waarde             | TTL           |
| ----------- | ---- | ------------------ | ------------- |
| `@`         | A    | `[jouw_server_ip]` | Auto / Laag   |
| `*`         | A    | `[jouw_server_ip]` | Auto / Laag   |

:::info[DNS Routing]
*   De `@` record zorgt dat Coolify de root van je domein kan gebruiken
*   De `*` (wildcard) record laat Coolify automatisch nieuwe subdomeinen (bijv. `api.[jouw_domein]`) routeren zonder dat je voor elk project DNS records hoeft toe te voegen.
:::



### Domein instellen voor je Coolify instance

Om je Coolify instance te beveiligen met een SSL-certificaat, moet je er een domein aan koppelen. Ga naar **Settings** in de linkerzijbalk en zoek het veld **Instance Domain**. Vul hier je domein in, inclusief de `https://` prefix (bijv. `https://coolify.[jouw_domein]`). Klik op **Save** om deze stap af te ronden.

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)



## Je eerste app deployen

Daarna kun je naar het tabblad **Projects** gaan en je eerste applicatie gaan deployen!

Klik op **+ Add Resource** om een publieke repository of een Docker Compose bestand toe te voegen, of kies een van de vele vooraf geconfigureerde services uit de one-click template bibliotheek. Je Coolify installatie is helemaal klaar voor gebruik!

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)



## Conclusie en meer bronnen

Cheers! Je hebt Coolify succesvol op je server geïnstalleerd en kunt direct aan de slag met het deployen van je projecten. We raden je ook aan om de volgende bronnen te checken, die je extra hulp en tips kunnen geven tijdens het configureren van je server.

- [coolify.io](https://coolify.io/) - Officiële Website
- [coolify.io/docs](https://coolify.io/docs/) - Coolify Documentatie

Heb je specifieke vragen die hier niet behandeld worden? Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />