---
id: server-linux-coolify
title: Coolify installeren op een Linux-server - Zelfgehoste cloudapplicaties
description: "Ontdek hoe je Coolify installeert en instelt om eenvoudig je eigen applicaties, databases en services zelf te hosten → Leer het nu"
sidebar_label: Coolify installeren
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introductie

[Coolify](https://coolify.io/) is een open-source, zelfgehoste Heroku- en Vercel-alternatief waarmee je eenvoudig je servers, applicaties en databases beheert.

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

Coolify’s intuïtieve dashboard maakt zelfhosten supermakkelijk. Je hebt volledige controle over je infrastructuur, geautomatiseerde GitHub-deployments en houdt je cloudkosten laag.

In deze gids nemen we je stap voor stap mee in het opzetten, het vooraf configureren van je admin-account en alles wat je verder moet weten.

<InlineVoucher />

## Gebruiksscenario’s van Coolify

Coolify is geschikt voor allerlei dagelijkse situaties en ideaal voor iedereen die applicatie-deployments wil automatiseren, databases wil hosten of background workers wil draaien. Perfect voor beginners én experts.

Coolify ondersteunt out-of-the-box Static Sites, Node.js, Python, PHP, Rust en Docker containers. Het heeft trendy one-click templates zoals WordPress, Ghost, Grafana, Appwrite, Nextcloud en PostgreSQL databases. Ook regelt het automatisch Let's Encrypt SSL-certificaten en reverse proxy routing via Traefik.

## Voorbereiding

Hoewel Coolify van zichzelf lichtgewicht is, kan het gebruik van resources flink oplopen afhankelijk van het aantal applicaties, Docker builds en databases die tegelijk draaien. We raden de volgende hardware aan voor het hosten van Coolify op je VPS of Dedicated Server.

| Hardware   | Minimum      | Aanbevolen                |
| ---------- | ------------ | -------------------------- |
| CPU        | 2 vCPU cores | 4 vCPU cores               |
| RAM        | 2 GB         | 4 GB+                      |
| Schijfruimte | 30 GB      | 50 GB+                     |

<InlineServiceLink />

Voordat je Coolify installeert, moet je verbinding maken met je server en zorgen dat het besturingssysteem up-to-date is. Je moet via SSH met rootrechten inloggen. We hebben al een handleiding over [SSH Eerste toegang](vserver-linux-ssh.md) als je hulp nodig hebt.

:::tip[SSH Key Authenticatie]
We **raden sterk aan** om een SSH Key te gebruiken in plaats van een wachtwoord voor authenticatie. Hoe je dat doet, lees je in onze [SSH Key Setup](vserver-linux-sshkey.md) tutorial.
:::

## Installatie

Nadat je verbonden bent met je server, update je de systeem-pakketten en installeer je `curl`, dat nodig is om het Coolify installatie-script te downloaden:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```

### Bereid je admin gebruikersgegevens voor

Coolify hanteert strenge beveiligingsregels voor je administrator-account. Bereid je root-gebruikersgegevens voor volgens deze validatie-eisen voordat je het installatie-commando draait:

* **Gebruikersnaam**
  * Minimaal 3 tekens
  * Maximaal 255 tekens
  * Alleen letters, cijfers, spaties, underscores en koppeltekens toegestaan
* **E-mail**
  * Moet een geldig e-mailadres zijn
  * Moet een geldige DNS-record hebben
  * Maximaal 255 tekens
* **Wachtwoord**
  * Minimaal 8 tekens
  * Moet hoofdletters en kleine letters bevatten
  * Minimaal één cijfer
  * Minimaal één speciaal teken
  * Mag geen veelgebruikt of gelekt wachtwoord zijn

### Voer het installatie-script uit

Coolify biedt een snelle, geautomatiseerde installatiescript. Om de installatie veilig te maken, gebruiken we environment variables om het root admin-account vooraf in te stellen. Zo voorkom je ongeautoriseerde toegang tijdens de setup.

Voer het volgende commando uit, en vervang de gebruikersnaam, e-mail en het wachtwoord door je eigen veilige gegevens:

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[Open Source]
De broncode van het installatiescript vind je in de [Officiële Coolify Repository](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)
:::

Het script installeert automatisch Docker, zet de benodigde netwerken op en configureert de Coolify containers. Dit kan een paar minuten duren, afhankelijk van je serverhardware.

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)

### Toegang tot Coolify

Na de installatie open je je browser en ga je naar het dashboard via het IP-adres van je server gevolgd door poort 8000: `http://[jouw_server_ip]:8000`

Omdat je je credentials al via het installatie-commando hebt opgegeven, zie je direct het inlogscherm in plaats van de setup wizard.

Log in met het e-mailadres en wachtwoord dat je gebruikte in het commando.

### DNS Records instellen

Na het inloggen is het slim om direct een eigen domein te koppelen. Toegang via je IP (`http://[jouw_server_ip]:8000`) is namelijk niet veilig.

Met een domein kan Coolify automatisch gratis SSL-certificaten genereren voor je dashboard en toekomstige apps.

Ga naar het DNS-beheer van je domeinprovider en voeg twee nieuwe `A` records toe die naar je server wijzen. Als je domein bij ZAP-Hosting staat, volg dan onze [Domein Records](domain-records.md) gids om dit makkelijk te doen:

| Naam / Host | Type | Waarde             | TTL           |
| ----------- | ---- | ------------------ | ------------- |
| `@`         | A    | `[jouw_server_ip]` | Auto / Laagste |
| `*`         | A    | `[jouw_server_ip]` | Auto / Laagste |

:::info[DNS Routing]
*   De `@` record zorgt dat Coolify het rootdomein kan gebruiken
*   De `*` (wildcard) record laat Coolify automatisch nieuwe subdomeinen (zoals `api.[jouw_domein]`) routeren zonder dat je voor elk project DNS records hoeft toe te voegen.
:::

### Domein instellen voor je Coolify instance

Om je Coolify instance met een SSL-certificaat te beveiligen, koppel je een domein. Ga naar **Settings** in de linkerzijbalk en zoek het veld **Instance Domain**. Vul hier je domein in, inclusief `https://` (bijv. `https://coolify.[jouw_domein]`). Klik op **Save** om te bevestigen.

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)

## Je eerste app deployen

Daarna kun je naar het tabblad **Projects** gaan en je eerste applicatie deployen!

Klik op **+ Add Resource** om een publieke repository of een Docker Compose bestand toe te voegen, of kies uit de vele vooraf ingestelde services uit de one-click template bibliotheek. Je Coolify installatie is klaar voor gebruik!

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)

## Conclusie en meer bronnen

Top! Je hebt Coolify succesvol op je server geïnstalleerd en kunt direct aan de slag met je projecten. We raden je ook aan om deze bronnen te checken voor extra hulp en tips tijdens je serverconfiguratie:

- [coolify.io](https://coolify.io/) - Officiële website
- [coolify.io/docs](https://coolify.io/docs/) - Coolify documentatie

Heb je nog vragen die hier niet beantwoord worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />