---
id: vserver-linux-plesk
title: "VPS: Installatie van Plesk"
description: "Ontdek hoe je websites en servers efficiënt beheert met Plesk, voor beginners en experts → Leer het nu"
sidebar_label: Plesk Installeren
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Plesk is een uitgebreide webhosting- en serverbeheerplatform waarmee je websites, servers, e-mailaccounts en meer kunt beheren via een gebruiksvriendelijke interface. Het is een veelzijdige oplossing die geschikt is voor zowel beginners als ervaren webontwikkelaars en systeembeheerders.

<InlineVoucher />

## Plesk installeren

:::info
Voer vóór de installatie eerst `apt update` en `apt upgrade` uit zodat de nieuwste pakketten op de server staan.
:::
Plesk kan momenteel alleen geïnstalleerd worden op Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x en Virtuozzo Linux 7. De architectuur moet 64-bit zijn.

De verbinding met de server kan bijvoorbeeld via Putty gemaakt worden.

## Start van de installatie

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="One-Click Installatie" default>

Voor een volledig automatische installatie van Plesk met de standaardcomponenten en functies die de meeste Plesk-gebruikers gebruiken, is slechts één commando nodig:

>De Plesk installer installeert altijd de nieuwste versie van Plesk. Het kan voorkomen dat de hier getoonde afbeeldingen/schermafbeeldingen niet de nieuwste versie tonen.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Als deze fout verschijnt: "-bash: curl: command not found" moet je het pakket installeren met `apt install curl`.
:::

Na het uitvoeren van dit commando duurt het meestal tussen de 15 en 60 minuten om Plesk volledig te installeren.

:::info
De SSH-sessie mag niet worden afgesloten zolang de installer actief is. Dit zou anders tot een afbreking leiden.
:::
De server zou anders opnieuw geïnstalleerd moeten worden om de installer opnieuw te starten. 
Als de installer opnieuw wordt gestart zonder eerst de server opnieuw te installeren, kunnen er problemen ontstaan met niet-functionerende functies tijdens de installatie of in het Plesk-paneel zelf.

:::info
Het kan lijken alsof de installer "vastloopt", in 99% van de gevallen blijft de installer na een paar minuten gewoon doorlopen, omdat hij nog pakketten/configuraties moet instellen.
:::

De installatie is voltooid zodra dit verschijnt:

![](https://screensaver01.zap-hosting.com/index.php/s/9o6bEzBr8rCAWzf/preview)

</TabItem>
<TabItem value="Web Installation" label="Web Installatie">

Voor de installatie van Plesk via de webinterface zijn slechts een paar commando’s nodig.

:::info
De Plesk installer installeert altijd de nieuwste versie van Plesk. Het kan voorkomen dat de hier getoonde afbeeldingen/schermafbeeldingen niet de nieuwste versie tonen.
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
De Plesk installer installeert altijd de nieuwste versie van Plesk. Het kan voorkomen dat de hier getoonde afbeeldingen/schermafbeeldingen niet de nieuwste versie tonen.
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

Nadat deze drie commando’s zijn uitgevoerd, moet de licentie goedgekeurd worden met "F":

![](https://screensaver01.zap-hosting.com/index.php/s/XrCa3WYALoDx6H3/preview)

Na goedkeuring vraagt het systeem welke Plesk-versie je wilt installeren, bijvoorbeeld Plesk Obsidian of Plesk Onyx. Er wordt ook aangegeven welke versie stabieler is. Meestal wordt voor productiegebruik een "stable" versie gekozen. Omdat de standaardopties al naar de stabiele versie wijzen, bevestig je dit nogmaals met "F".

De vraag of Plesk data mag verzamelen voor productverbetering kan je beantwoorden met "Y" (Ja) of "n" (Nee).

Daarna vraagt het systeem welk type van de gekozen Plesk-versie je wilt installeren. Meestal is de standaard "Recommended" al voldoende. Modules die je later nodig hebt maar niet meteen installeert, kunnen altijd nog via het Plesk-paneel toegevoegd worden.

De volgende vraag of pakketten geïnstalleerd/geüpgraded mogen worden, bevestig je met "F".

Nu start de installer met de installatie.

:::info
De SSH-sessie mag niet worden afgesloten zolang de installer actief is. Dit leidt anders tot een afbreking en de server moet opnieuw geïnstalleerd worden om de installer opnieuw te starten.
:::
Het kan lijken alsof de installer "vastloopt", in 99% van de gevallen blijft de installer na een paar minuten gewoon doorlopen, omdat hij nog pakketten/configuraties moet instellen.

De installatie is voltooid zodra het volgende verschijnt:

![](https://screensaver01.zap-hosting.com/index.php/s/8K5p6RHapwYDfZY/preview)

</TabItem>
</Tabs>

## Open de Web Installer

Nadat de installer gestart is, wordt de installatie via de browser uitgevoerd. De installatiepagina is bereikbaar via https://IP:8447 of https://Domein.xx:8447.

## Het Plesk Web Paneel

:::info
Bij het openen van het Web Paneel verschijnt de melding: "Dit is geen beveiligde verbinding". Dit moet je de eerste keer bevestigen, daarna opent de pagina.
:::

De webinterface is bereikbaar via https://IP:8443 of https://Domein.xx:8443 van de server. De inloggegevens zijn root/admin en het huidige root-wachtwoord. Je kunt ook simpelweg een van de getoonde URL’s gebruiken. Als deze niet meer werken, kun je nieuwe URL’s aanmaken met het commando ``plesk login``.

### Setup

Zodra de registratie gelukt is, moet het Admin-account ingesteld worden. Je vult een contactnaam, e-mailadres en wachtwoord in. Als je al een Plesk-licentie hebt, kun je die direct invoeren. Anders kun je een 15-daagse triallicentie aanvragen bij Plesk. Tot slot moet je de gebruikersovereenkomst bevestigen.  
Plesk is nu klaar voor gebruik.

### Taal instellen

Na installatie staat het Plesk-paneel standaard in het Engels. Je kunt Duits instellen of selecteren via Tools & Settings ➡️ Plesk Appearance ➡️ Languages. Kies daar "de-DE". Daarna kun je de taal voor iedereen permanent instellen door op "Make default" te klikken.  
Na uit- en inloggen vind je het Plesk-paneel in het Duits.

![](https://screensaver01.zap-hosting.com/index.php/s/6Wo8Qz3oMXGzn3t/preview)

### Domein toevoegen

Klik op de blauwe knop "Add domain" om je eerste domein toe te voegen.

![](https://screensaver01.zap-hosting.com/index.php/s/2S4mgRPctffS452/preview)

Vul nu je eigen domein in. Ook moet je een IP-adres, gebruikersnaam en wachtwoord voor de webruimte van het domein definiëren. Als de subdomein "www" al in de DNS van het domein staat, kan er direct een SSL-certificaat van Let’s Encrypt worden aangemaakt. Deze optie kun je selecteren, na het invoeren van een e-mailadres bevestig je dit met de blauwe "OK" knop.

![](https://screensaver01.zap-hosting.com/index.php/s/SLSBz5TRH2mDBB8/preview)

:::info
Het domein moet naar het IP van de webruimte wijzen. Als het domein bij ZAP-Hosting staat, kan je het eenvoudig via EasyDNS doorverwijzen naar de webruimte. Is het een extern domein, dan moet je een A-record naar het IP zetten en ook de subdomeinen "www" en "webmail" moeten naar het IP wijzen. Daarnaast moet er een MX-record naar het IP van de webruimte worden gezet.

Het kan tot 24 uur duren voordat een nieuwe of gewijzigde DNS-instelling is doorgevoerd.
:::

## SSL-encryptie

Tijdens het registreren van het domein/aanmaken van de webruimte is er al een SSL-certificaat van Let’s Encrypt gegenereerd. Dit kun je nu selecteren onder "Hosting settings" van het domein. Daarna bevestig je met "Apply".

:::info
Om permanent door te sturen naar HTTPS (SSL) bij het openen van de website, moet je het vinkje "Permanent, SEO-suitable 301 forwarding from HTTP to HTTPS" aanzetten.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/HL4tcnTqJtX7be9/preview)

Als je het domein nu opent in de browser, zie je dat het versleuteld is.

![](https://screensaver01.zap-hosting.com/index.php/s/xcqwAQWK77X3yip/preview)

:::info
De installatie en het instellen van het eerste domein met encryptie is nu helemaal klaar.
:::

## Conclusie

Gefeliciteerd, je hebt Plesk succesvol geïnstalleerd en geconfigureerd! Heb je nog vragen of problemen? Neem dan contact op met onze support, die elke dag voor je klaarstaat!

<InlineVoucher />