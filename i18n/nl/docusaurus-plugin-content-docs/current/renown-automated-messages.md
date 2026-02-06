---
id: renown-automated-messages
title: "Renown: Geautomatiseerde Serverberichten - Houd je spelers op de hoogte van nieuws, social links en meer!"
description: "Stel geautomatiseerde serverberichten in met geplande taken om terugkerende aankondigingen te tonen"
sidebar_label: Geautomatiseerde Serverberichten
services:
- gameserver-renown
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Geautomatiseerde serverberichten zijn een simpele maar effectieve manier om belangrijke info direct in-game aan je spelers te communiceren. Je kunt ze gebruiken om serverregels te tonen, events aan te kondigen, handige tips te delen of herinneringen te geven op vaste momenten, zonder dat admins er handmatig mee bezig hoeven te zijn.

Met **Geplande Taken** worden serverberichten automatisch in de **Renown** in-game chat gestuurd door vooraf ingestelde commando’s op een terugkerend schema uit te voeren.

<InlineVoucher />



## Hoe geautomatiseerde berichten werken

Geautomatiseerde berichten maak je aan door een taak in te plannen die een servercommando uitvoert op een bepaald tijdstip of interval. Het commando kan een chatbericht, broadcast of servermelding sturen.

Zodra het ingesteld is, draait de taak automatisch op de achtergrond en toont het bericht aan alle verbonden spelers. Zo heb je altijd consistente communicatie zonder dat er staff online hoeft te zijn.



## Een geautomatiseerd bericht maken

Om geautomatiseerde serverberichten te maken, open je je game server dashboard en ga je naar de sectie **Geplande Taken**. Maak een nieuwe geplande taak aan en kies voor het uitvoeren van een **commando**. Vul in het commando-veld het berichtcommando in dat jouw game server ondersteunt.

```
<bericht commando> <jouw berichttekst>
```

Vervang het commando door het gamecommando of een commando van een extensie dat je wilt gebruiken om berichten te triggeren en `<jouw berichttekst>` door de tekst die je spelers wilt laten zien.

Daarna kun je instellen hoe vaak het bericht verstuurd moet worden, bijvoorbeeld elke paar minuten, elk uur of op specifieke tijden van de dag. Voor een uitgebreide uitleg over het maken van geplande taken, check de [Geplande taken](gameserver-scheduled-tasks.md) gids.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Berichteninterval aanpassen

Met geplande taken bepaal je precies wanneer en hoe vaak berichten verschijnen. Veelgebruikte voorbeelden zijn:

- Serverregels elke paar minuten tonen
- Aankondigen van aankomende events op vaste tijden
- Gameplay tips sturen naar nieuwe of terugkerende spelers
- Spelers herinneren aan Discord- of website-links

Je kunt het interval altijd aanpassen zonder de server te herstarten, wat super flexibel is naarmate je server groeit.



## Belangrijke opmerkingen

De functionaliteit van geautomatiseerde serverberichten hangt af van wat de game en de beschikbare commando’s ondersteunen. Basis geplande berichten kun je meestal met standaard servercommando’s doen, maar dit kan beperkt zijn qua opmaak, voorwaarden of geavanceerde aanpassingen.

Als de game extra plugins, mods of extensies ondersteunt die meer flexibiliteit en maatwerk bieden, is het vaak de moeite waard om die te gebruiken. Die gespecialiseerde messaging systemen bieden vaak meer features dan de standaard gamecommando’s en zijn beter geschikt voor complexe of sterk aangepaste server setups.



## Conclusie

Geautomatiseerde serverberichten zijn een betrouwbare manier om spelers geïnformeerd en betrokken te houden zonder handmatig werk. Door geplande taken te gebruiken die berichtcommando’s uitvoeren, zorg je voor consistente communicatie op je server.

Eenmaal ingesteld draaien de berichten zelfstandig en kun je ze makkelijk hergebruiken door simpelweg het game-specifieke commando en de tekst aan te passen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />