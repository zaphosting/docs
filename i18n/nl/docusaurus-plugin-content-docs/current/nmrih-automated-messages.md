---
id: nmrih-automated-messages
title: "No More Room In Hell: Geautomatiseerde Serverberichten - Houd je spelers op de hoogte van nieuws, socials en meer!"
description: "Stel geautomatiseerde serverberichten in met geplande taken om terugkerende aankondigingen te tonen"
sidebar_label: Geautomatiseerde Serverberichten
services:
- gameserver-nmrih
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Geautomatiseerde serverberichten zijn een simpele maar super effectieve manier om belangrijke info direct in-game aan je spelers te communiceren. Gebruik ze om serverregels te tonen, events aan te kondigen, handige tips te delen of reminders te geven op vaste momenten – zonder dat admins er steeds handmatig mee bezig hoeven te zijn.

Met **Geplande Taken** kun je serverberichten automatisch in de **No More Room In Hell** in-game chat laten verschijnen door vooraf ingestelde commando’s op een terugkerend schema uit te voeren.

<InlineVoucher />



## Hoe geautomatiseerde berichten werken

Geautomatiseerde berichten maak je door een taak in te plannen die op een bepaald tijdstip of interval een servercommando uitvoert. Dat commando kan een chatbericht, broadcast of servernotificatie sturen.

Zodra dit is ingesteld, draait de taak automatisch op de achtergrond en krijgen alle verbonden spelers het bericht te zien. Zo blijft je communicatie consistent, zonder dat er altijd iemand van het team online hoeft te zijn.



## Een geautomatiseerd bericht maken

Om geautomatiseerde serverberichten te maken, open je je game server dashboard en ga je naar de sectie **Geplande Taken**. Maak een nieuwe taak aan en kies voor het uitvoeren van een **commando**. Vul in het commando-veld het berichtcommando in dat jouw game server ondersteunt.

```
<message command> <jouw berichttekst>
```

Vervang het commando door het gamecommando of een commando van een extensie dat je wilt gebruiken om berichten te triggeren en `<jouw berichttekst>` door de tekst die je spelers moeten zien.

Daarna kun je instellen hoe vaak het bericht verstuurd moet worden, bijvoorbeeld elke paar minuten, elk uur of op specifieke tijden van de dag. Voor een uitgebreide uitleg over het maken van geplande taken, check de [Geplande taken](gameserver-scheduled-tasks.md) gids.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Berichteninterval aanpassen

Met geplande taken heb je volledige controle over wanneer en hoe vaak berichten verschijnen. Veelgebruikte toepassingen zijn:

- Serverregels elke paar minuten tonen
- Aankondigen van aankomende events op vaste tijden
- Gameplay tips sturen naar nieuwe of terugkerende spelers
- Spelers herinneren aan Discord- of website-links

Je kunt het interval op elk moment aanpassen zonder de server te herstarten, wat super flexibel is naarmate je server groeit.



## Belangrijke tips

De mogelijkheden van geautomatiseerde serverberichten hangen af van wat het spel en de beschikbare commando’s ondersteunen. Basis geplande berichten kun je vaak met standaard servercommando’s maken, maar dit is soms beperkt qua opmaak, voorwaarden of geavanceerde aanpassingen.

Als het spel extra plugins, mods of extensies ondersteunt die meer flexibiliteit en custom opties bieden, kan het de moeite waard zijn om die te gebruiken. Die gespecialiseerde messaging systemen bieden vaak meer features dan de standaard gamecommando’s en zijn beter geschikt voor complexe of sterk aangepaste server setups.



## Conclusie

Geautomatiseerde serverberichten zijn een betrouwbare manier om je spelers geïnformeerd en betrokken te houden zonder dat je er steeds handmatig mee bezig hoeft te zijn. Door geplande taken te gebruiken om berichtcommando’s uit te voeren, zorg je voor consistente communicatie op je server.

Eenmaal ingesteld, draaien de geautomatiseerde berichten zelfstandig en kun je ze makkelijk hergebruiken door simpelweg het game-specifieke berichtcommando en de tekst aan te passen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />