---
id: gameserver-automated-messages
title: "[Game]: Geautomatiseerde Serverberichten - Houd je spelers op de hoogte van nieuws, social links en meer!"
description: "Stel geautomatiseerde serverberichten in met geplande taken om terugkerende aankondigingen te tonen"
sidebar_label: Geautomatiseerde Serverberichten
services:
- gameserver-[Game]
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Geautomatiseerde serverberichten zijn een simpele maar effectieve manier om belangrijke info direct in-game aan je spelers te communiceren. Je kunt ze gebruiken om serverregels te tonen, events aan te kondigen, handige tips te delen of herinneringen te sturen op vaste momenten, zonder dat admins er handmatig mee bezig hoeven te zijn.

Met **Geplande Taken** worden serverberichten automatisch in de **[Game]** in-game chat gestuurd door vooraf ingestelde commando’s op een terugkerend schema uit te voeren.

<InlineVoucher />



## Hoe geautomatiseerde berichten werken

Geautomatiseerde berichten maak je door een taak in te plannen die een servercommando uitvoert op een bepaald tijdstip of interval. Het commando kan een chatbericht, broadcast of servermelding sturen.

Zodra ingesteld, draait de taak automatisch op de achtergrond en toont het bericht aan alle verbonden spelers. Zo heb je altijd consistente communicatie zonder dat er staff online hoeft te zijn.



## Een geautomatiseerd bericht maken

Om geautomatiseerde serverberichten te maken, open je je game server dashboard en ga je naar de sectie **Geplande Taken**. Maak een nieuwe geplande taak aan en kies voor het uitvoeren van een **commando**. Vul in het commando-veld het berichtcommando in dat jouw game server ondersteunt.

```
<message command> <jouw berichttekst>
```

Vervang het commando door het gamecommando of commando van een extensie dat je wilt gebruiken om berichten te triggeren en `<jouw berichttekst>` door het bericht dat je spelers wilt laten zien.

Je kunt vervolgens instellen hoe vaak het bericht verstuurd moet worden, bijvoorbeeld elke paar minuten, elk uur of op specifieke tijden van de dag. Voor een uitgebreide uitleg over het maken van geplande taken, check de [Geplande taken](gameserver-scheduled-tasks.md) handleiding.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Berichteninterval aanpassen

Met geplande taken bepaal je precies wanneer en hoe vaak berichten verschijnen. Veelgebruikte toepassingen zijn:

- Serverregels elke paar minuten tonen
- Aankondigen van aankomende events op vaste tijden
- Gameplay tips sturen naar nieuwe of terugkerende spelers
- Spelers herinneren aan Discord of website links

Het interval kun je altijd aanpassen zonder de server te herstarten, zo blijf je flexibel terwijl je server groeit.



## Belangrijke tips

De mogelijkheden van geautomatiseerde serverberichten hangen af van wat het spel en de beschikbare commando’s ondersteunen. Basis geplande berichten kun je vaak met standaard servercommando’s maken, maar dit kan beperkt zijn qua opmaak, voorwaarden of geavanceerde aanpassingen.

Als het spel extra plugins, mods of extensies ondersteunt die meer flexibiliteit en opties bieden, is het vaak de moeite waard om die te gebruiken. Speciale berichtensystemen bieden dan vaak meer functies dan de standaard gamecommando’s en zijn beter geschikt voor complexe of sterk aangepaste server setups.



## Conclusie

Geautomatiseerde serverberichten zijn een betrouwbare manier om spelers geïnformeerd en betrokken te houden zonder handmatig werk. Door geplande taken te gebruiken die berichtcommando’s uitvoeren, zorg je voor consistente communicatie op je server.

Eenmaal ingesteld, draaien de geautomatiseerde berichten zelfstandig en kun je ze makkelijk hergebruiken door simpelweg het game-specifieke berichtcommando en de tekst aan te passen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂

<InlineVoucher />