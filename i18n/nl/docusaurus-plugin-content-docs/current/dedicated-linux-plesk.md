---
id: dedicated-linux-plesk
title: "Dedicated Server: Installatie van Plesk"
description: "Ontdek hoe je websites en servers efficiënt beheert met Plesk’s veelzijdige platform voor alle niveaus → Leer nu meer"
sidebar_label: Plesk Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Plesk is een uitgebreide webhosting- en serverbeheerplatform waarmee je websites, servers, e-mailaccounts en meer kunt beheren via een gebruiksvriendelijke interface. Het is een veelzijdige oplossing die geschikt is voor beginners, maar ook voor ervaren webdevelopers en systeembeheerders. 



## Plesk Installeren

:::info
Voer voor de installatie eerst `apt update` en `apt upgrade` uit zodat de nieuwste pakketten op de server staan.
:::
Plesk kan momenteel alleen geïnstalleerd worden op Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x en Virtuozzo Linux 7. De architectuur moet 64-bit zijn.

De verbinding met de server kan bijvoorbeeld via Putty gemaakt worden.


## Starten met de installatie 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="One-Click Installatie" default>

Voor een volledig automatische installatie van Plesk met de standaardcomponenten en functies die de meeste Plesk-gebruikers gebruiken, is slechts één commando nodig:

>De Plesk installer installeert altijd de nieuwste versie van Plesk. Het kan voorkomen dat de hier getoonde afbeeldingen/screenshots niet de allernieuwste versie tonen.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Als deze fout verschijnt: "-bash: curl: command not found" moet je het pakket installeren met `apt install curl`.
:::

Na het uitvoeren van dit commando duurt het meestal tussen de 15 en 60 minuten voordat Plesk volledig is geïnstalleerd.

:::info
De SSH-sessie mag niet worden afgesloten zolang de installer actief is. Dit zou anders tot een afbreking leiden.
:::
De server zou dan opnieuw geïnstalleerd moeten worden om de installer opnieuw te kunnen starten. 
Als de installer opnieuw wordt gestart zonder eerst de server opnieuw te installeren, kunnen er problemen ontstaan met niet-functionerende functies tijdens de installatie of in het Plesk-paneel zelf.

:::info
Het kan lijken alsof de installer "vastloopt", in 99% van de gevallen blijft de installer na een paar minuten gewoon doorlopen omdat hij nog pakketten/configuraties moet instellen.
:::


De installatie is klaar zodra dit wordt weergegeven

![](https://screensaver01.zap-hosting.com/index.php/s/gpNWyd7xZaw22zW/preview)

</TabItem>
<TabItem value="Web Installation" label="Web Installatie">

Voor de installatie van Plesk via de webinterface zijn slechts een paar commando’s nodig.

:::info
De Plesk installer installeert altijd de nieuwste versie van Plesk. Het kan voorkomen dat de hier getoonde afbeeldingen/screenshots niet de allernieuwste versie tonen.
:::

Download de Plesk Installer:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Geef de juiste rechten:

```
chmod +x plesk-installer
```

Start de installer:

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Console Installatie">

Voor de installatie van Plesk via de console zijn slechts een paar commando’s nodig.

:::info
De Plesk installer installeert altijd de nieuwste versie van Plesk. Het kan voorkomen dat de hier getoonde afbeeldingen/screenshots niet de allernieuwste versie tonen.
:::

Download de installer:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Geef de juiste rechten:

```
chmod +x plesk-installer
```

Start de installer:

```
./plesk-installer
```

Nadat deze drie startcommando’s zijn uitgevoerd, moet de licentie met "F" worden goedgekeurd:

![](https://screensaver01.zap-hosting.com/index.php/s/dJiJ3sTxCqoC3RR/preview)

Na goedkeuring vraagt het systeem welke Plesk-versie je wilt installeren, bijvoorbeeld Plesk Obsidian of Plesk Onyx. Er wordt ook aangegeven welke versie stabieler is. Meestal wordt voor productiegebruik een "stabiele" versie gekozen. Omdat de standaardopties al naar de stabiele versie wijzen, bevestig je dit nogmaals met "F".

De vraag of Plesk data mag verzamelen voor productverbetering kan je beantwoorden met "Y" (Ja) of "n" (Nee).

Daarna vraagt het systeem welk type van de gekozen Plesk-versie je wilt installeren. Meestal is de standaard "Recommended" al voldoende. Modules die je later nodig hebt maar niet hebt geïnstalleerd, kunnen alsnog via het Plesk-paneel worden toegevoegd.

De volgende vraag of pakketten mogen worden geïnstalleerd/geüpgraded bevestig je met "F".

Nu start de installer met de installatie.

:::info
De SSH-sessie mag niet worden afgesloten zolang de installer actief is. Dit leidt tot een afbreking en de server moet opnieuw geïnstalleerd worden om de installer opnieuw te kunnen starten.
:::
Het kan lijken alsof de installer "vastloopt", in 99% van de gevallen blijft de installer na een paar minuten gewoon doorlopen omdat hij nog pakketten/configuraties moet instellen.

De installatie is klaar zodra het volgende verschijnt:

![](https://screensaver01.zap-hosting.com/index.php/s/2Wk2Nm2HXCkQjkQ/preview)

</TabItem>
</Tabs>

## Open de Web Installer

Nadat de installer is gestart, wordt de installatie via de browser uitgevoerd. De installatiepagina is bereikbaar via https://IP:8447 of via https://Domein.xx:8447.

## Het Plesk Webpaneel

:::info
Bij het openen van het Webpaneel verschijnt de melding: "This is not a secure connection". Dit moet je de eerste keer bevestigen, daarna opent de pagina.
:::

De webinterface is bereikbaar via https://IP:8443 of https://Domein.xx:8443 van de server. De inloggegevens zijn root/admin en het huidige root-wachtwoord. Je kunt ook simpelweg een van de getoonde URL’s gebruiken. Als deze niet meer werken, kun je nieuwe URL’s aanmaken met het commando ``plesk login``.

### Setup

Zodra de registratie gelukt is, moet het Admin-account worden ingesteld. Je vult een contactnaam, e-mail en wachtwoord in. Als je al een Plesk-licentie hebt, kun je die direct invoeren. Anders kun je een 15-daagse triallicentie aanvragen bij Plesk. Tot slot moet je de gebruikersovereenkomst bevestigen. 
Plesk is nu klaar voor gebruik.

### Taal instellen


Na installatie staat het Plesk-paneel standaard in het Engels. Je kunt Duits instellen of selecteren via Tools & Settings ➡️ Plesk Appearance ➡️ Languages. Kies daar "de-DE". Daarna kun je de taal permanent voor iedereen instellen door op "Make default" te klikken. 
Na uit- en inloggen vind je het Plesk-paneel in het Duits.

![](https://screensaver01.zap-hosting.com/index.php/s/GtTGYGCYXwewxNQ/preview)

### Domein toevoegen

Klik op de blauwe knop "Add domain" om je eerste domein toe te voegen.

[](https://screensaver01.zap-hosting.com/index.php/s/G3fetgKfLNKFr7N/preview)

Vul nu je eigen domein in. Ook moet je een IP-adres, gebruikersnaam en wachtwoord voor de webruimte van het domein definiëren. Als de subdomein "www" al in de DNS van het domein staat, kan er direct een SSL-certificaat van Let's Encrypt worden aangemaakt. Deze optie kun je selecteren, na het invoeren van een e-mailadres bevestig je dit met de blauwe "OK" knop.

[](https://screensaver01.zap-hosting.com/index.php/s/Pw2PSFDKGFDXZi2/preview)


:::info
Het domein moet naar het IP van de webruimte wijzen. Als het domein bij ZAP-Hosting is, kan je het makkelijk via EasyDNS doorsturen naar de webruimte. Is het een extern domein, dan moet er een A-record naar het IP worden gezet en ook de subdomeinen "www" en "webmail" moeten naar het IP wijzen. Daarnaast moet er een MX-record naar het IP van de webruimte worden ingesteld.

Het kan tot 24 uur duren voordat een nieuwe of gewijzigde DNS-instelling is doorgevoerd.
:::

## SSL-encryptie

Tijdens het registreren van het domein/aanmaken van de webruimte is er al een SSL-certificaat van Let's Encrypt gegenereerd. Dit kan nu worden geselecteerd onder "Hosting settings" van het domein. Daarna bevestig je met "Apply".

:::info
Om ervoor te zorgen dat bezoekers altijd via HTTPS (SSL) worden doorgestuurd, moet je het vinkje "Permanent, SEO-suitable 301 forwarding from HTTP to HTTPS" aanvinken.
:::

[](https://screensaver01.zap-hosting.com/index.php/s/xad7pbeZWY6QQHK/preview)

Open je nu het domein in de browser, dan zie je dat het versleuteld is.

![](https://screensaver01.zap-hosting.com/index.php/s/JrNEjciJfz2LzCX/preview)

:::info
De installatie en het instellen van het eerste domein met encryptie is nu helemaal klaar.
:::
