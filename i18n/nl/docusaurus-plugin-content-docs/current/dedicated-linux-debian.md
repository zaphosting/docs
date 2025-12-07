---
id: dedicated-linux-debian
title: "Dedicated Server: Debian Installeren"
description: "Leer hoe je het Debian OS installeert en configureert op je dedicated server voor optimale prestaties en betrouwbaarheid → Ontdek het nu"
sidebar_label: Debian Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Hier leggen we je stap voor stap uit hoe je het Debian besturingssysteem installeert en configureert op je dedicated server. Volg deze instructies goed om ervoor te zorgen dat je het OS succesvol opzet en optimaal gebruikt.

:::info

De gids is gebaseerd op Debian 10. Installaties van oudere of nieuwere versies kunnen iets afwijken in het proces.

:::



## Voorbereiding

Voor het installeren en configureren van een besturingssysteem is het belangrijk om eerst de juiste ISO van het OS te mounten. Dit kan op verschillende manieren:

1. Mounten via de initiële setup
2. Mounten via iLO (Virtual Media)
3. Mounten via iLO (Remote Console)

Als je nog niet bekend bent met het mounten van een ISO-bestand, check dan onze [Initiële setup](dedicated-setup.md) of [Eigen ISO](dedicated-iso.md) handleidingen.



## Installatie

Als de ISO succesvol is geladen, start de setup van de server.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

In dit voorbeeld doorlopen we de installatie met de "klassieke" installatiemethode.

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

Kies de taal waarin de installatie-assistent wordt weergegeven. Houd er rekening mee dat deze taal later invloed heeft op het geïnstalleerde systeem.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

Onze gewenste locatie staat niet op de eerste pagina, dus gaan we verder met "Andere".

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

In ons voorbeeld kiezen we "Europa".

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

Afhankelijk van de gewenste tijdzone kiezen we hier de Duitse tijdzone.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

We kiezen Verenigde Staten als locale.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

In ons geval kiezen we het Duitse toetsenbord, het QWERTZ-layout. Als je uit Amerika komt is de standaard QWERTY.

:::info
Je server bereidt nu enkele componenten voor die nodig zijn voor de installatie, dit kan een paar minuten duren.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

Je server configureert automatisch de netwerkinterface via DHCP. Selecteer `eno1`, dit is de standaard netwerkadapter van je ZAP Dedicated Server. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

De hostname kun je aanpassen als je wilt, maar dat is niet verplicht.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

De domeinnaam hoeft ook niet aangepast te worden.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

Hier stel je het wachtwoord in voor je "root" account. Noteer dit wachtwoord goed.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

Ter bevestiging voer je het wachtwoord nogmaals in.

:::info
De installatie-assistent vraagt je om een tweede gebruikersaccount aan te maken.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

Voer nu de naam in van de eigenaar voor een normaal gebruikersaccount. Je mag hier natuurlijk zelf kiezen wat je invult.

:::info
Je kunt uiteindelijk natuurlijk ook gewoon de "root" account gebruiken.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

Voer nu de gebruikersnaam in. Kies ook een wachtwoord en bevestig dat weer. Je server bereidt nu de volgende installatie stappen voor.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

Je kunt nu partities aanmaken of de hele SSD als 1 partitie gebruiken. Wil je niks veranderen aan de partities, kies dan "Geleid - Hele schijf gebruiken".

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

Selecteer de SSD die in je server zit. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

In principe is het prima om de hele structuur op één partitie te zetten. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

Bevestig de configuratie met "Partitionering afronden en wijzigingen naar schijf schrijven".

:::info
Als er oude partities op je SSD staan, bevestig dan het overschrijven met "Ja".
:::

Je server voert nu de partitionering uit en bereidt de installatie voor.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

Wil je andere installatiemedium toevoegen, bijvoorbeeld voor bepaalde pakketten, kan dat nu. Normaal gesproken kun je alle pakketten later makkelijk via de package manager (apt) downloaden.

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

Onze dedicated servers staan in Duitsland, dus het is aan te raden om de Duitse mirror te kiezen voor de beste downloadsnelheid.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

We raden aan om de standaard Debian repository te gebruiken.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

Wil je een HTTP proxy gebruiken, dan kun je die hier invoeren (niet verplicht).

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

Het systeem wil anonieme statistieken verzamelen, dit kun je weigeren of accepteren.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

Selecteer nu de pakketten die je wilt installeren:

* Debian desktopomgeving  
  Maakt een grafische interface op je server, maar in dit voorbeeld gebruiken we alleen de shell.

* SSH-server  
  Nodig om bijvoorbeeld via PuTTY te verbinden.

* Standaard systeemtools  
  Zorgt voor een aantal basispakketten.

Je selecteert pakketten met `TAB` en pijltjestoetsen. Met de spatiebalk selecteer of deselecteer je pakketten. Als je klaar bent, druk je op `TAB` tot je bij Doorgaan bent en bevestig je met Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

Bevestig dat dit het enige besturingssysteem op de server is met `Ja`.

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

Als opslaglocatie kiezen we de standaard locatie op onze SSD.

:::info
🎉 De installatie van je Debian systeem is nu afgerond.
:::

Open "Virtual Media" in je iLO en klik op "Media uitwerpen" om de ISO uit het systeem te verwijderen.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

Als dat gelukt is, kies je Doorgaan, de server zal nu herstarten.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## Configuratie

### SSH Login

Na de reboot en succesvolle installatie krijg je nu een login prompt.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

Je wilt natuurlijk ook via SSH (bijvoorbeeld PuTTY) je server beheren, dus we moeten de login daarvoor nog inschakelen:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

Open met nano het configuratiebestand van de SSH service `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

Zoek `#PermitRootLogin no` en verander dit naar `PermitRootLogin yes`.

Druk nu op `CTRL + X` en bevestig met `Y`.

Daarna moet je de SSH service herstarten met `service ssh restart`.

Je SSH login is nu actief en je kunt verbinden via PuTTY bijvoorbeeld.  
Voer het IP-adres van je server in (te vinden in je ZAP dashboard) en gebruik de eerder ingestelde inloggegevens.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
Heb je nog vragen of problemen? Onze support helpt je graag verder!
:::





## Afsluiting

Gefeliciteerd, je hebt Debian succesvol geïnstalleerd op je dedicated server. Voor vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂