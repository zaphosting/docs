---
id: palworld-server-modding
title: "Palworld: Mods installeren voor Palworld"
description: "Ontdek hoe je je Palworld-ervaring veilig en effectief kunt verbeteren met mods voor servers en clients → Leer het nu"
sidebar_label: Mods Installeren
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Sinds de release van Palworld verschijnen er steeds meer gave mods online die de game-ervaring verbeteren en het spel nog leuker maken. In deze gids nemen we je mee in het proces van het toevoegen van game-modificaties (mods) aan je Palworld-server en/of gameclient.

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="Hoe Installeer Je Mods Op Je Palworld Server!" description="Snap je het beter als je dingen in actie ziet? Wij fixen het! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever op de meest toffe manier info opneemt!"/>

<InlineVoucher />

### Belangrijke Info

Op dit moment kun je beschikbare mods bekijken en downloaden via externe modding-sites. We raden aan om sites zoals [Nexus Mods](https://www.nexusmods.com/palworld/) of [Curseforge](https://www.curseforge.com/palworld/) te gebruiken, die bekend en betrouwbaar zijn in de modding-community. Mods downloaden via Steam Workshop is momenteel niet mogelijk.

:::note
ZAP-Hosting is niet aansprakelijk voor eventuele wijzigingen of schade aan je serverbestanden of wereld door het installeren van mods. We raden je sterk aan om eerst backups te maken voordat je verder gaat. Lees meer over backups in onze speciale [Savegames beheren](palworld-server-savegames.md) gids, waarin dit uitgebreid wordt uitgelegd.
:::

:::info
We ondersteunen momenteel alleen PAK mods (.PAK-bestanden). Mods die een uitvoerbaar bestand vereisen, kunnen om veiligheidsredenen niet gebruikt worden.
:::



### Server- & Client-side Mods

Bij het kiezen van mods moet je eerst bepalen of ze server-side of client-side zijn. De makkelijkste manier is om de beschrijving op de mod-website te checken of rechtstreeks contact op te nemen met de modmaker.

Server-side scripts installeer je direct op de server en spelers hoeven hier niks voor te doen. Client-side mods moeten door elke speler die wil joinen zelf lokaal in hun gamebestanden worden geïnstalleerd.

:::info
Check altijd of de mod die je wilt gebruiken compatibel is met de huidige game-build van Palworld.
:::



## Stap 1: PAK-bestand Voorbereiden

Ga naar modding-sites, zoals de aanbevolen in de introductie, en browse door het brede aanbod aan mods.

:::info
Reminder: We ondersteunen momenteel alleen PAK mods (.PAK-bestanden) om veiligheidsredenen.
:::

Download de mod die je wilt gebruiken lokaal naar je apparaat. Pak de bestanden uit met een tool zoals [7zip](https://www.7-zip.org/) als dat nodig is, zodat je het **.pak** bestand hebt.

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## Stap 2: Uploaden via FTP

Als je de PAK-bestanden klaar hebt staan, ga je naar de **Tools->FTP-Browser** sectie in het webinterface van je game server.

Je hebt een FTP-client nodig om verbinding te maken met je server. Gebruik onze speciale [Toegang via FTP](gameserver-ftpaccess.md) gids als je nog geen FTP-client hebt of hulp nodig hebt met de FTP-verbinding.

In het webinterface kun je de **Directe Verbinding** knop gebruiken. Dit opent je FTP-programma en logt je automatisch in.

Of gebruik de inloggegevens die op de FTP-Browser pagina staan om handmatig in te loggen in je FTP-client.

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

Upload nu de PAK-bestanden van de mod die je hebt klaargezet naar de volgende map:
```
../g[your_zapid]/palworld-windows/Pal/Content/Paks/ # Voor Windows versie
../g[your_zapid]/palworld-linux/Pal/Content/Paks/ # Voor Linux versie
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

Dat was het voor de serverkant! Nu door naar de clientkant.



## Stap 3: Mods Client-Side Installeren

Nu alle mods op de server staan, moeten ook alle spelers die willen joinen deze mods lokaal installeren. Er is momenteel geen automatische manier voor clients om mods te downloaden bij het joinen.

Open Steam, klik met rechts op Palworld, kies beheren en dan lokale bestanden bekijken.

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

Er opent een map met de Palworld-installatie op je apparaat.

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

Ga naar de volgende map: 
```
../Palworld/Pal/Content/Paks/
```

Zet hier de **.pak** bestanden van de mods in. Herhaal dit voor elke extra mod die je hebt toegevoegd.

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## Stap 4: Palworld Starten & Verbinden met Server

Je kunt nu verbinden met je Palworld-server en genieten van de nieuwe mods. Gebruik onze speciale [Verbinden met Server](palworld-connect.md) gids als je hulp nodig hebt met verbinden.

Als je ingeladen bent, zou je de veranderingen door de mods moeten zien.

Bijvoorbeeld, wij gebruiken de Minecraft blocks mod op onze testserver:

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

Je hebt succesvol mods geïnstalleerd op je Palworld-server. Mocht je problemen tegenkomen met modden, check dan de debugsectie hieronder.



## Debuggen

In deze debugsectie geven we een paar veelvoorkomende oorzaken van problemen en stappen om ze op te lossen. Houd er rekening mee dat modding nog in de kinderschoenen staat en niet officieel is, dus bugs kunnen voorkomen.

#### Check of de Mod-versie compatibel is

Zorg dat de mods die je hebt geïnstalleerd compatibel zijn met de huidige game-build van Palworld. Zo niet, dan kun je fouten krijgen en werken bepaalde functies van de mods niet. Neem contact op met de modmaker voor een update als de mod verouderd is.

#### Herstart de Server

Herstart de server na elke wijziging of als je geen mods ziet. Raadpleeg de modmaker bij fouten of bugs die optreden bij specifieke mods.

#### Check Logs op Fouten

Een goede eerste stap is om de **Informatie->Logbestanden** sectie in het webinterface van je server te bekijken. Hierin staan logs met info over de server, zoals events, hints en foutmeldingen.

Foutmeldingen helpen vaak om de oorzaak van een probleem te vinden en beter te begrijpen. Vaak kun je zo problemen opsporen en oplossen.

:::info
Heb je extra hulp nodig? Geen probleem, join onze [Discord Community](https://discord.com/invite/zaphosting) of maak een post op ons [r/zaphosting Subreddit](https://www.reddit.com/r/zaphosting/) waar wij en de community je kunnen helpen.

Wil je officiële support? Maak dan een [ticket aan](https://zap-hosting.com/en/customer/support/) op onze website met zo veel mogelijk details, dan nemen we zo snel mogelijk contact met je op! :)
:::


<InlineVoucher />