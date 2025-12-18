---
id: vserver-windows-bitwarden
title: "VPS: Bitwarden installeren op Windows"
description: "Ontdek hoe je Bitwarden veilig zelf host voor het beheren van wachtwoorden met end-to-end encryptie en sterke credential features → Leer het nu"
sidebar_label: Bitwarden installeren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Bitwarden is een open source wachtwoordmanager voor wachtwoorden en passkeys die zero knowledge, end-to-end encryptie gebruikt om je data te beschermen. Je kunt het als cloudservice gebruiken of zelf hosten, met functies om sterke credentials te genereren, opslaan en automatisch in te vullen.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Overweeg je om deze service zelf te hosten? We nemen je stap voor stap mee in het opzetten en configureren, inclusief alles waar je op moet letten.

<InlineVoucher />

## Vereisten

Voordat je **Bitwarden** installeert, check je of je hostingomgeving aan de volgende eisen voldoet voor een soepele installatie en optimale performance.

| Hardware   | Minimum      | ZAP-Hosting Aanbeveling   |
| ---------- | ------------ | ------------------------- |
| CPU        | 1 vCPU Core  | 4 vCPU Cores              |
| RAM        | 2 GB         | 4 GB                      |
| Schijfruimte | 12 GB      | 25 GB                     |

De software vereist dat alle benodigde dependencies geïnstalleerd zijn en dat het draait op een ondersteund besturingssysteem. Zorg dat je server aan de volgende eisen voldoet voordat je verder gaat met installeren:

**Dependencies:** `Docker (Engine 26+ en Compose)`

**Besturingssysteem:** Laatste versie van Windows Server die Docker 26+ ondersteunt

Zorg dat alle dependencies geïnstalleerd zijn en dat je de juiste OS-versie gebruikt om compatibiliteitsproblemen tijdens de installatie van Bitwarden te voorkomen.

## Voorbereiding

Voordat je **Bitwarden** installeert, moet je je systeem klaarmaken. Dit betekent je besturingssysteem updaten naar de nieuwste versie en alle benodigde dependencies installeren. Deze voorbereidingen zorgen voor een stabiele omgeving en helpen problemen tijdens of na de installatie te voorkomen.

### Systeem updaten
Om zeker te zijn dat je systeem draait met de nieuwste software en beveiligingsupdates, voer je eerst altijd een systeemupdate uit. Zo heb je de laatste security patches en softwareversies voordat je verder gaat.

### Dependencies installeren
Als de update klaar is, kun je de dependencies installeren. Bitwarden draait in een set Docker containers, dus Docker moet eerst geïnstalleerd zijn. Installeer hiervoor [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/) op je server.

Een volledige walkthrough van de installatie en het gebruik van Docker vind je in onze [Docker](vserver-windows-docker.md) gids.

### Gebruiker & map aanmaken

We raden aan om je Windows server te configureren met een dedicated `bitwarden` service account, waarvandaan je Bitwarden installeert en runt. Zo blijft je Bitwarden instance geïsoleerd van andere applicaties op je server.

Open PowerShell als administrator. Maak de lokale Bitwarden gebruiker aan met de volgende commando’s. Na het eerste commando verschijnt een tekstinvoerveld. Vul het gewenste wachtwoord in en bevestig. Daarna voer je het tweede commando uit om de setup af te ronden.

```
PS C:\> $Password = Read-Host -AsSecureString
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

Maak daarna een Bitwarden map aan onder `C:\` voor de nieuwe gebruiker:

```
PS C:\> mkdir Bitwarden
```

Ga in Docker Desktop naar **Settings → Resources → File Sharing**. Voeg de map `C:\Bitwarden` toe aan de gedeelde paden. Klik op Apply & Restart om de wijzigingen door te voeren.

### Domein configureren

Standaard draait Bitwarden op de host via poorten 80 (HTTP) en 443 (HTTPS). Richt een domein in met DNS records die naar je host wijzen, bijvoorbeeld server.example.com, zeker als je het via internet beschikbaar maakt. Vermijd het gebruik van “Bitwarden” in de hostname om te voorkomen dat je serverrol of software te veel prijsgeeft.

## Installatie

Nu aan alle eisen is voldaan en de voorbereidingen klaar zijn, kun je Bitwarden installeren.

Download het Bitwarden installatiescript naar je machine en voer het uit:

```
cd C:\Bitwarden
Invoke-RestMethod -OutFile bitwarden.ps1 -Uri "https://func.bitwarden.com/api/dl/?app=self-host&platform=windows"
.\bitwarden.ps1 -install
```

In de installer voer je eerst de domeinnaam van je Bitwarden instance in, meestal de DNS record die je hebt ingesteld. Daarna kies je of Let’s Encrypt een gratis vertrouwd SSL-certificaat moet genereren. Kies je ja, dan geef je een e-mailadres op voor vervaldatum notificaties. Kies je nee, dan volgen vragen over het certificaat.

Voer je Installatie ID en Installatie Key in, beide te vinden op [Bitwarden](https://bitwarden.com/host). Kies vervolgens regio US of EU, wat alleen relevant is als je een self-hosted instance koppelt aan een betaald abonnement.

Gebruik je geen Let’s Encrypt? Dan kun je een bestaand certificaat gebruiken door de bestanden te plaatsen in `C:\Bitwarden\bwdata\ssl\<your_domain>` en aan te geven of het vertrouwd is. Je kunt ook een zelf-ondertekend certificaat genereren, wat alleen aanbevolen is voor testdoeleinden. Kies je geen certificaat, dan moet je een HTTPS proxy voor de installatie zetten, anders werkt Bitwarden niet.

## Configuratie

Na installatie maak je de basisconfig af met twee bestanden. Bewerk eerst het environment bestand `\bwdata\env\global.override.env`. Vul hier je SMTP servergegevens in, zoals host, poort, SSL, gebruikersnaam en wachtwoord, zodat Bitwarden verificatie- en uitnodigingsmails kan versturen. Wil je toegang tot het System Administrator Portal? Voeg dan een admin e-mail toe aan `adminSettings__admins`.

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Test de SMTP setup. Bij een correcte configuratie krijg je een succesmelding; anders zie je meldingen over ontbrekende OpenSSL of foutieve waarden. Pas wijzigingen toe met `.\bitwarden.ps1 -start`.

Controleer daarna de installatieparameters in `.\bwdata\config.yml`. Dit bestand regelt de gegenereerde assets en moet je aanpassen voor speciale omgevingen, bijvoorbeeld als je achter een proxy draait of andere poorten gebruikt. Pas wijzigingen toe met `.\bitwarden.ps1 -rebuild`.

Start tenslotte de instance met `.\bitwarden.ps1 -start`. De eerste keer kan het even duren omdat Docker images binnenhaalt. Met `docker ps` check je of alle containers gezond zijn. Open daarna de web vault via je domein en registreer een account als dat nodig is. E-mail verificatie werkt alleen met correct ingestelde SMTP variabelen.

## Conclusie en meer bronnen

Gefeliciteerd! Je hebt Bitwarden nu succesvol geïnstalleerd en geconfigureerd op je VPS. We raden je ook aan om deze bronnen te bekijken, die je extra hulp en tips kunnen geven tijdens je serverconfiguratie:

- [bitwarden.com](https://bitwarden.com/) - Officiële website
- https://bitwarden.com/help/ - Bitwarden Help Center (Documentatie)

Heb je nog vragen die hier niet beantwoord worden? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat om je te helpen! 🙂