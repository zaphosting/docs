---
id: minecraft-crossplay
title: "Minecraft: Crossplay instellen tussen Minecraft Java & Bedrock Editions"
description: "Ontdek hoe je naadloze crossplay tussen Minecraft Java en Bedrock mogelijk maakt met de GeyserMC en Floodgate plugins voor een betere multiplayer ervaring → Lees nu meer"
sidebar_label: Java & Bedrock Crossplay
services:
  - gameserver-minecraft
---

## Introductie

Traditioneel was samen spelen tussen Minecraft Java en Bedrock edities niet mogelijk omdat beide edities als volledig aparte platforms worden gezien. Gelukkig kan je tegenwoordig crossplay mogelijk maken door specifieke plugins te gebruiken op Java Edition servers, waardoor Bedrock spelers kunnen meedoen. In deze gids nemen we je mee door het proces van het installeren en instellen van de GeyserMC plugin samen met de Floodgate plugin, zodat crossplay tussen beide platforms simpel en werkend wordt.

## Voorbereiding

Om crossplay in te stellen, moet je een Minecraft server draaien met één van de compatibele Java server software. Wij raden aan om Paper, Spigot of Bukkit te gebruiken, dit zijn de populairste opties.

Je moet een Minecraft Game Server klaar hebben staan met één van deze games geïnstalleerd en geactiveerd. Hulp nodig? Check dan onze [Game Change](gameserver-gameswitch.md) gids.

## Installatie

Ga om te beginnen naar het webinterface dashboard van je game server en navigeer naar **Instellingen->Plugins**. Zoek hier het dropdown menu van **GeyserMC** en selecteer het. Klik op de install knop om de plugin automatisch op je server te installeren en wacht tot de voortgangsbalk klaar is.

We raden ook aan om de **Floodgate** plugin te installeren, die je in dezelfde sectie vindt, omdat deze verschillende voordelen biedt zoals:
- Bedrock spelers kunnen joinen zonder een Java account.
- Bedrock skins worden zichtbaar op Java edition.
- Diverse voordelen voor developers.

:::note
De Floodgate plugin is optioneel, maar we raden ‘m sterk aan omdat het crossplay veel makkelijker maakt voor Bedrock spelers.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/cagcHmzwR2yBZSo/preview)

Met de plugins geïnstalleerd, ga je door naar de volgende sectie om de instellingen te configureren.

## Plugins Configureren

In dezelfde **Plugins** sectie van de webinterface klik je op het blauwe instellingen-icoon naast de GeyserMC plugin. Dit brengt je automatisch naar het juiste gedeelte in **Instellingen**.

![](https://screensaver01.zap-hosting.com/index.php/s/RAZKNSdePa5wBs4/preview)

Hier kun je de servernaam en MOTD regels aanpassen die specifiek voor Bedrock spelers zichtbaar zijn.

![](https://screensaver01.zap-hosting.com/index.php/s/kBzxQkmNgdsWgZb/preview)

Scroll je naar beneden, dan zie je ook welke poorten aan je server zijn toegewezen.

- De **Game Port** is de hoofdpoort van de server, die je gebruikt bij het verbinden met reguliere Java Edition clients.
- **Port 5** is de poort die de GeyserMC plugin gebruikt. Deze moet je gebruiken bij het verbinden met Bedrock Edition clients.

Zorg dat je bij het verbinden de juiste poort gebruikt, afhankelijk van de Minecraft client editie.

:::tip
Heb je de **Eigen IP** serverconfiguratie? Dan is het mogelijk om op verzoek een custom poort toe te wijzen, zodat je ‘m helemaal naar wens kunt instellen. Je kunt hiervoor een [support ticket](https://zap-hosting.com/en/customer/support/) aanmaken.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/joA62kWeJ5crCmY/preview)

## Verbinden & Problemen Oplossen

Met de plugin ingesteld, herstart je de server zodat de nieuwe instellingen actief worden. Probeer daarna te verbinden vanaf beide edities om te checken of alles werkt.

Gebruik de juiste poorten: **Port 5** voor Bedrock spelers en de **Game Port** voor Java spelers, te vinden onder het tabblad **Instellingen**. Je ziet ze ook als je met je muis over het info-icoon op het dashboard van de webinterface gaat.

![](https://screensaver01.zap-hosting.com/index.php/s/M42ZkamKHieRcEz/preview)

Als het goed is kun je nu crossplayen en makkelijk verbinden vanaf beide edities.

![](https://screensaver01.zap-hosting.com/index.php/s/oMRWkaSs5KKbkzy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/xyMaENLFx4BCSPF/preview)

Heb je problemen met verbinden? Probeer dan deze stappen om de meeste issues op te lossen.

#### Client verouderd - Server verouderd

Deze fout betekent dat de server en client verschillende gameversies gebruiken. Bij Java Edition kun je dit oplossen door in de launcher de juiste gameversie te kiezen.

Bij Bedrock Edition is het lastiger om versies te wisselen. Zorg dus dat zowel de app als de server up-to-date zijn.

We raden ook aan om de ViaVersion en ViaBackwards plugins te gebruiken. Die zorgen ervoor dat de server toegankelijk is voor meerdere gameversies, dus ook oudere of nieuwere clients kunnen verbinden. Ga hiervoor naar de **Plugins** sectie in de webinterface, zoek onder **Alle Plugins** naar **ViaVersion** en **ViaBackwards** en installeer ze met het groene download icoon.

:::note
Lukt het niet om de plugin via de webinterface te installeren? Dan is er mogelijk geen stabiele laatste versie beschikbaar. In dat geval kun je een beta-versie handmatig downloaden van de website en via FTP uploaden. Check onze [FTP Access](gameserver-ftpaccess.md) gids voor hoe je dat doet.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/QCcndf6TGMsrw7x/preview)

Als de plugins geïnstalleerd zijn, probeer dan opnieuw te verbinden. Het zou nu moeten lukken met meer gameversies.

#### Kan niet verbinden met wereld

Meestal komt dit doordat je de verkeerde poort gebruikt bij het toevoegen van de server in je client. Gebruik bij Bedrock de poort onder **Port 5** in de **Instellingen** van je game server webinterface. Voor Java gebruik je de hoofd **Game Port**.

Blijft het probleem? Check dan de GeyserMC configuratie om te zien of de juiste poorten zijn ingesteld. Ga naar **Configs** in de webinterface en open het bestand `plugins/Geyser-[jouw_servertype]/config.yml` met de blauwe edit knop.

Zoek in dit bestand de `port` parameters onder de `bedrock` en `remote` secties. Zorg dat de bedrock poort overeenkomt met **Port 5** uit de **Instellingen** en dat de remote poort staat op **25565** of de **Game Port**.

![](https://screensaver01.zap-hosting.com/index.php/s/AcZ5JAasBcKQpCm/preview)

## Conclusie

Gefeliciteerd, je hebt de GeyserMC plugin succesvol geïnstalleerd en ingesteld op je Minecraft server, waardoor crossplay tussen Java en Bedrock edities mogelijk is geworden! Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂