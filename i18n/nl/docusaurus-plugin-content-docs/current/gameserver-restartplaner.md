---
id: gameserver-restartplaner
title: 'Game server: Restartplanner - Laat serverrestarts automatisch uitvoeren'
description: "Ontdek hoe je dagelijkse game server restarts automatiseert voor betere performance en uptime → Leer het nu"
sidebar_label: Restartplanner
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
De restartplanner is een functie voor game servers waarmee je een automatische restart kunt instellen, zodat de server elke dag op hetzelfde tijdstip automatisch opnieuw opstart.

<YouTube videoId="bcsAePevPnY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pNsgKBQQGEC3tPj/preview" title="Hoe stel je een RESTARTPLANNER in voor je Server!" description="Snap je het beter als je dingen in actie ziet? Wij hebben je gedekt! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier opneemt!"/>

:::info
Deze functie is alleen beschikbaar voor game servers.
:::

Je vindt deze functie in de interface van je game server.

![](https://screensaver01.zap-hosting.com/index.php/s/doBQoGw3kTj8o6r/preview)

<InlineVoucher />

## Nieuwe entries aanmaken

:::info
***Let op:*** Wijzigingen in de restartplanner worden pas toegepast nadat de server opnieuw is gestart.
:::

Wil je een automatische restart toevoegen? Klik dan op de grijze "**+**" knop.

In het volgende venster kies je tussen wekelijkse of dagelijkse restarts. In ons voorbeeld willen we vier restarts per dag met een interval van 6 uur. Daarom selecteren we "**Dagelijks**" en stellen we "**06:00**" in. Bevestig de entry met "**Opslaan**".

Deze procedure herhaal je voor elke gewenste automatische restart. Als je "**24:00**" invoert, krijg je een foutmelding. Gebruik in plaats daarvan "**00:00**" om deze fout te voorkomen.

![](https://screensaver01.zap-hosting.com/index.php/s/j4nyS4efsKTinBS/preview)

### Offline server starten

Als je deze optie aanzet, wordt een gestopte server automatisch op dit tijdstip gestart. Staat deze optie uit, dan wordt de game server alleen herstart als hij voorheen "**Online**" was.

## Command optie

De command optie bij de automatische restarts is bedoeld om commando’s automatisch uit te voeren vlak voordat de restart plaatsvindt. Welke commando’s beschikbaar zijn, hangt af van het spel. Niet alle games bieden deze optie.

Wil je spelers vooraf waarschuwen? Gebruik dan bijvoorbeeld het *say* commando in Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/bcRJQprM2BFeR75/preview)

### Vertraging

Het veld Vertraging bepaalt het interval tussen het uitvoeren van het commando en de restart van de server. Deze vertraging wordt in **seconden** opgegeven. Wil je bijvoorbeeld een vertraging van 5 minuten instellen, dan vul je hier 300 in.

<InlineVoucher />