---
id: hytale-automated-messages
title: "Hytale: Geautomatiseerde Serverberichten - Houd je spelers op de hoogte van nieuws, socials en meer!"
description: "Stel geautomatiseerde serverberichten in met geplande taken om terugkerende aankondigingen te tonen"
sidebar_label: Geautomatiseerde Serverberichten
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Geautomatiseerde serverberichten zijn een simpele maar super effectieve manier om belangrijke info direct in-game aan je spelers te communiceren. Gebruik ze om serverregels te tonen, events aan te kondigen, handige tips te delen of reminders te sturen op vaste momenten, zonder dat admins er steeds handmatig mee bezig hoeven te zijn.

Met **Geplande Taken** kun je serverberichten automatisch in de **Hytale** in-game chat laten verschijnen door vooraf ingestelde commands op een terugkerend schema uit te voeren.

<InlineVoucher />



## Hoe geautomatiseerde berichten werken

Geautomatiseerde berichten maak je door een taak in te plannen die op een bepaald tijdstip of interval een servercommand uitvoert. Dat command kan een chatbericht, broadcast of servernotificatie sturen.

Zodra het ingesteld is, draait de taak automatisch op de achtergrond en laat het bericht zien aan alle spelers die online zijn. Zo heb je altijd consistente communicatie zonder dat je staff constant online hoeft te hebben.



## Een geautomatiseerd bericht maken

Om geautomatiseerde serverberichten te maken, open je je game server dashboard en ga je naar de sectie **Geplande Taken**. Maak een nieuwe taak aan en kies voor het uitvoeren van een **command**. Vul in het command veld het berichtcommand in dat jouw game server ondersteunt.

```
<message command> <jouw berichttekst>
```

Vervang het command door het gamecommand of een command van een extensie dat je wilt gebruiken om berichten te triggeren en `<jouw berichttekst>` door de tekst die je spelers moeten zien.

Daarna bepaal je hoe vaak het bericht verstuurd moet worden, bijvoorbeeld elke paar minuten, elk uur of op specifieke tijden van de dag. Voor een uitgebreide uitleg over het maken van geplande taken, check de [Geplande taken](gameserver-scheduled-tasks.md) gids.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Berichteninterval aanpassen

Met geplande taken heb je volledige controle over wanneer en hoe vaak berichten verschijnen. Veelgebruikte toepassingen zijn:

- Serverregels elke paar minuten tonen
- Aankondigen van aankomende events op vaste tijden
- Gameplay tips sturen naar nieuwe of terugkerende spelers
- Spelers herinneren aan Discord- of website-links

Je kunt het interval op elk moment aanpassen zonder de server te herstarten, zo blijf je flexibel terwijl je server groeit.



## Belangrijke tips

De mogelijkheden van geautomatiseerde serverberichten hangen af van wat het spel en de beschikbare commands ondersteunen. Basis geplande berichten kun je vaak met standaard servercommands maken, maar dit is soms beperkt qua opmaak, voorwaarden of geavanceerde aanpassingen.

Als het spel extra plugins, mods of extensies ondersteunt die meer flexibiliteit en custom opties bieden, is het zeker de moeite waard om die te gebruiken. Die gespecialiseerde messaging systemen bieden vaak meer features dan de standaard gamecommands en zijn beter geschikt voor complexe of sterk aangepaste servers.



## Conclusie

Geautomatiseerde serverberichten zijn een betrouwbare manier om je spelers geïnformeerd en betrokken te houden zonder dat je er steeds handmatig mee bezig hoeft te zijn. Door geplande taken te gebruiken die berichtcommands uitvoeren, zorg je voor consistente communicatie op je server.

Eenmaal ingesteld draaien de berichten zelfstandig en kun je ze makkelijk hergebruiken door alleen het game-specifieke berichtcommand en de tekst aan te passen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />