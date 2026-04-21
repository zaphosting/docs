---
id: dedicated-ilo
title: "Dedicated Server: iLO"
description: "Ontdek hoe je jouw Enterprise Dedicated Server volledig beheert met iLO voor naadloze controle en monitoring → Leer nu meer"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Op onze Enterprise Dedicated Servers gebruiken we de managementinterface iLO, hiermee heb je onbeperkte volledige controle over je server.  
De functies omvatten server starten/stoppen/herstarten, een managementconsole via Java of HTML5, en het mounten van bootmedia (ISO’s).  
Pas de instellingen zorgvuldig aan, want verkeerde wijzigingen kunnen grote problemen veroorzaken.

## iLO toegang
Open het serverdashboard van je ZAP Dedicated Server met een browser naar keuze. Daar vind je al de belangrijkste info over je iLO.  
Klik simpelweg op "Activate iLO" om iLO te activeren.  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

Let op: het kan een paar seconden duren voordat je iLO volledig beschikbaar is.  
Als het systeem is opgestart en de managementinterface toegankelijk is, zie je de inloggegevens.  
Klik op het getoonde IP-adres om iLO te openen en log in met de inloggegevens.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

Na een korte moment ben je ingelogd in de beheerinterface van je dedicated server.  
Hier vind je veel belangrijke info:

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Overzicht
* **System Health**  
Moet meestal groen zijn. Bij elke serverstart checkt de hardware zichzelf; als er problemen zijn, meldt het systeem die direct.  
Mogelijke statussen: groen (OK), geel (Degraded) en rood (Critical). Soms wordt je SSD als degraded weergegeven, meestal geen probleem.  
Je kunt natuurlijk support inschakelen, dan checken wij of er actie nodig is. Bij rood ("Critical") moet support direct geïnformeerd worden.  
De eerste stap om het probleem op te lossen is altijd een volledige reboot van de server.

* **iLO Health**  
Toont meer info over de iLO-parameters, hier horen geen significante veranderingen te zijn.  
Het is niet nodig hier iets aan te passen.

* **Server Power**  
Toont de status van je server, bijvoorbeeld "ON" betekent dat je server draait.

* **Integrated Remote Console**  
Hier kun je visueel je server bekijken en commando’s uitvoeren.  
De remote consoles verschillen op twee punten:  
HTML5 start direct in je webbrowser, zonder extra software.  
Java Web Start gebruikt Java om de managementconsole te openen.  
Eventuele beveiligingswaarschuwingen kun je veilig wegklikken.  
Hoe je stap voor stap met een remote console verbindt, lees je in de gedetailleerde handleiding.

* **Active Sessions**  
Hier zie je alle gebruikers die momenteel verbonden zijn met iLO.

### iLO Event Log
Slaat alle wijzigingen op die via iLO zijn gemaakt, zoals logins, server starts/stops en instellingen.

### Integrated Management Log
Hierin staan alle hardware-relevante info, bijvoorbeeld de resultaten van de POST (Power on Self Test) die bij elke serverstart wordt uitgevoerd.  
Als er hardwareproblemen zijn, worden die hier getoond.

### Virtual Media
Je eigen bootmedia (ISO’s) toevoegen doe je via het submenu "Connect CD/DVD-ROM".  
De bootvolgorde is zo ingesteld dat standaard altijd eerst een geregistreerde ISO wordt geboot.  
De volgorde kun je aanpassen in het menu "Boot Order".

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

Bij "Scripted Media URL" vul je de volledige link in van de ISO die je wilt mounten, bijvoorbeeld: http://mijndomein.com/bootimage.iso  
Je link moet direct naar de ISO verwijzen en eindigen op .iso.  
Klik daarna op "Insert Media" en herstart je server via "Power Management".  
De server laadt nu de door jou ingevoegde ISO.

### Power Management
In dit menu regel je alles rondom het starten & stoppen van je ZAP Dedicated Server.

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Graceful Power Off**  
Sluit je server netjes af, hetzelfde effect als één keer de aan/uit-knop van je laptop/computer indrukken.  
Alle applicaties worden correct afgesloten en de server gaat gecontroleerd uit.  
Dit kan afhankelijk van de applicaties even duren.

* **Force Power Off**  
Als je server direct uit moet zonder wachten, gebruik je deze optie. Dit is hetzelfde als de stekker eruit trekken.  
Het systeem gaat meteen uit, zonder vertraging.

* **Force System Reset**  
Laat je systeem direct herstarten.

### Power Meter
Toont het gemiddelde stroomverbruik van je systeem; hoe hoger het verbruik, hoe zwaarder de belasting.

### Network
Toont de netwerkconfiguratie van je iLO. Let op: deze instellingen hebben niks te maken met de netwerkconfiguratie van je server zelf.

:::info
Om je server in te stellen of als netwerktoegang niet werkt, kun je altijd direct naar je server kijken.
:::

## Remote Consoles (Display)
iLO biedt standaard twee soorten remote consoles:

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### De HTML5 Console {#the-html5-console}
Met één klik ben je al op je server, je hebt geen extra software nodig en het wordt direct in je webbrowser gestart.  
Hij biedt veel handige tools:

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - power management instellingen (start, stop, reboot) van de server  
* 2 - Verzenden van toetsenbord shortcuts (bijv. CTRL + ALT + DEL)  
* 3 - ISO’s toevoegen > CD/DVD > Scripted Media URL  
* 4 - System Health  
* 5 - Server Power Status (AAN / UIT)

Als je server een grafische interface (GUI) heeft, kun je je muis normaal gebruiken en wordt je toetsenbordinvoer ook doorgegeven.

### De Java Console
Voor de Java Console moet je Java geïnstalleerd hebben. (Download via java.com)  
:::info
Beveiligingsmeldingen kun je negeren.
:::

Na het openen van het bestand krijg je de volgende melding, bevestig met "Continue".  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

We accepteren het risico en bevestigen met "Run".

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Nu opent de Java console.  
:::info
De applicatie zet vaak het toetsenbord op "EN".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - Power management instellingen (start, stop, reboot) van de server  
* 2 - ISO’s toevoegen > URL CD/DVD-ROM  
* 3 - Verzenden van toetscombinaties (bijv. CTRL + ALT + DEL)  
* 4 - System Health  
* 5 - Server Power Status (AAN / UIT)

Als je server een grafische interface (GUI) heeft, kun je je muis normaal gebruiken en wordt je toetsenbordinvoer ook doorgegeven.

## Veelvoorkomende problemen, tips & tricks

* Server blijft hangen in POST (Power on Self Test) en boot niet meer.  
Verbind met een remote console en check waar de server precies blijft hangen. Worden er fouten getoond?  
Schakel de server uit via Power Management (Force Power Off) voor een paar seconden en start hem dan weer op (Momentary Press).  
Boot de server nog steeds niet? Neem contact op met support.

* ISO wordt niet geladen.  
Check of de link naar je ISO echt klopt. Test dit door de link in je browser te plakken; als er een download start, is alles goed.  
Zorg dat de link correct is ingevuld bij Virtual Media en dat de server opnieuw is gestart. Kijk ook naar de bootvolgorde en of de CD/DVD-drive bovenaan staat.

* Mijn server doet lang over het opstarten.  
Enterprise hardware kan wat langer doen over booten, dat is normaal. Het kan 10-15 minuten duren.

* Ik kan iLO niet meer openen.  
Check of iLO ingeschakeld is in je serverdashboard. De managementinterface schakelt uit veiligheidsoverwegingen automatisch uit na een tijdje.  
Je kunt iLO natuurlijk uit- en weer inschakelen. (Wacht minimaal 5 minuten na activeren)

## Conclusie

Dit maakt je beheer een stuk makkelijker zodra je alles goed hebt doorgelezen. Voor vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂