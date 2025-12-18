---
id: discordbot-setup
title: Stel je Discord Bot in
description: "Ontdek hoe je Discord bots draait en beheert voor moderatie, muziek, giveaways en meer met naadloze serverhosting → Leer het nu"
sidebar_label: Setup
services:
  - discord-bot
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';


## Introductie

Een **Discord bot server** laat je toe om je Discord bots soepel en continu te laten draaien. Deze bots kunnen allerlei taken uitvoeren, zoals automatisch je Discord kanaal modereren, muziek afspelen, giveaways en polls organiseren, en nog veel meer.

<YouTube videoId="OoKA8UJ_N5A" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/ffjmn3snRrkoeoK/preview" title="Hoe stel je een Discord bot server in en upload je bot bestanden!" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>

<InlineVoucher />



## Ondersteunde talen

Discord bots kunnen in verschillende talen geprogrammeerd worden. Ons product ondersteunt Discord Bots geschreven in een van de volgende programmeertalen:

- Java
- Python
- NodeJS

  
  

## Voorbereiding



### Bot verkrijgen

Om te starten heb je een volledig functionele Discord bot nodig. Je kunt er zelf een maken of een kant-en-klare bot van internet downloaden. Sla deze op je computer op zodat je hem makkelijk kunt uploaden naar je service.

### Bestanden uploaden

De bestanden van je Discord bot moeten geüpload worden. Dit kan via FTP. Als je niet zeker weet hoe FTP werkt, raden we je aan om de [Toegang via FTP](gameserver-ftpaccess.md) gids te bekijken voor een stap-voor-stap uitleg.

![](https://screensaver01.zap-hosting.com/index.php/s/x4WPiNS6xQcWQrp/preview)


Als je de map hebt geopend, kun je nu simpelweg de bot bestanden uploaden naar de lege map:

![](https://screensaver01.zap-hosting.com/index.php/s/t7DDaF684PZkXjn/preview)



## Configuratie

Om je bot via het Dashboard te kunnen draaien, moet de bot geconfigureerd worden in het Discord Bot Dashboard onder de **Instellingen** pagina.

![](https://screensaver01.zap-hosting.com/index.php/s/HoPpfJKsTC6ozNy/preview)

Daar moet je nu instellen welke programmeertaal de bot gebruikt en hoe het hoofdbestand heet. In dit voorbeeld wordt Python 3 gebruikt en is de naam van het uit te voeren Discord bestand `main.py`.

![](https://screensaver01.zap-hosting.com/index.php/s/ixfz2xKYCepS9Ek/preview)



:::danger Dependencies
Discord bots bevatten vaak extra dependencies voor hun functionaliteit. Zorg dat ze allemaal aanwezig en correct geconfigureerd zijn in de Discord bot. Deze staan gedefinieerd in de volgende bestanden:

- Python: Dependencies in `requirements.txt`.
- Node.js: Dependencies in `package.json`.
- Java: Dependencies in `pom.xml` (Maven) of `build.gradle` (Gradle).

:::



## Functionaliteit testen

Na het opslaan van de instellingen kun je de bot simpel starten met de groene startknop bovenaan de pagina. In de live console kun je dan checken of de bot succesvol is gestart.



## Conclusie

Gefeliciteerd, je hebt je Discord Bot succesvol geïnstalleerd en geconfigureerd. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂






<InlineVoucher />