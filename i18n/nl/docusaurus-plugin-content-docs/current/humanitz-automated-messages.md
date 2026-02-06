---
id: humanitz-automated-messages
title: "HumanitZ: Geautomatiseerde Serverberichten - Houd je spelers op de hoogte van nieuws, socials en meer!"
description: "Stel geautomatiseerde serverberichten in met geplande taken om terugkerende aankondigingen te tonen"
sidebar_label: Geautomatiseerde Serverberichten
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Geautomatiseerde serverberichten zijn een simpele maar super effectieve manier om belangrijke info direct in-game aan je spelers te communiceren. Gebruik ze om serverregels te tonen, events aan te kondigen, handige tips te delen of reminders te geven op vaste momenten, zonder dat admins er steeds handmatig mee bezig hoeven te zijn.

Met **Geplande Taken** kun je serverberichten automatisch in de **HumanitZ** in-game chat laten verschijnen door vooraf ingestelde commando’s op een terugkerend schema uit te voeren.

<InlineVoucher />



## Hoe geautomatiseerde berichten werken

Geautomatiseerde berichten maak je door een taak in te plannen die op een bepaald tijdstip of interval een servercommando uitvoert. Dat commando kan een chatbericht, broadcast of servernotificatie sturen.

Zodra je het hebt ingesteld, draait de taak automatisch op de achtergrond en krijgen alle verbonden spelers het bericht te zien. Zo blijft je communicatie consistent, zonder dat er steeds iemand van het team online hoeft te zijn.



## Een geautomatiseerd bericht maken

Open je game server dashboard en ga naar de sectie **Geplande Taken** om geautomatiseerde serverberichten aan te maken. Maak een nieuwe geplande taak aan en kies voor het uitvoeren van een **commando**. Vul in het commando-veld het berichtcommando in dat jouw game server ondersteunt.

```
<message command> <jouw berichttekst>
```

Vervang het commando door het gamecommando of een commando uit een extensie dat je wilt gebruiken om berichten te triggeren en `<jouw berichttekst>` door het bericht dat je aan je spelers wilt tonen.

Daarna bepaal je hoe vaak het bericht verstuurd moet worden, bijvoorbeeld elke paar minuten, elk uur of op specifieke tijden van de dag. Voor een uitgebreide uitleg over het maken van geplande taken, check de [Geplande taken](gameserver-scheduled-tasks.md) handleiding.

![img](https://screensaver01.zap-hosting.com/index.php/s/Z9ocneecsLikyRF/preview)



## Berichteninterval aanpassen

Met geplande taken heb je volledige controle over wanneer en hoe vaak berichten verschijnen. Veelgebruikte toepassingen zijn:

- Serverregels elke paar minuten tonen
- Aankondigen van aankomende events op vaste tijden
- Gameplay tips sturen naar nieuwe of terugkerende spelers
- Spelers herinneren aan Discord- of website-links

Je kunt het interval altijd aanpassen zonder de server te hoeven herstarten, wat super flexibel is naarmate je server groeit.



## Belangrijke tips

De mogelijkheden van geautomatiseerde serverberichten hangen af van wat de game en de beschikbare commando’s ondersteunen. Basis geplande berichten kun je vaak met standaard servercommando’s doen, maar dat is soms beperkt qua opmaak, voorwaarden of geavanceerde opties.

Als de game extra plugins, mods of extensies ondersteunt die meer flexibiliteit en maatwerk bieden, is het zeker de moeite waard om die te gebruiken. Die gespecialiseerde messaging systemen hebben vaak veel meer features dan de standaard gamecommando’s en zijn beter geschikt voor complexe of sterk aangepaste server setups.



## Conclusie

Geautomatiseerde serverberichten zijn een betrouwbare manier om je spelers geïnformeerd en betrokken te houden zonder dat je er steeds handmatig mee bezig hoeft te zijn. Door geplande taken te gebruiken die berichtcommando’s uitvoeren, zorg je voor consistente communicatie op je server.

Eenmaal ingesteld draaien de berichten zelfstandig en kun je ze makkelijk hergebruiken door alleen het game-specifieke commando en de tekst aan te passen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />