---
id: sunkenland-setup-server
title: "Sunkenland: Sunkenland Server Setup"
description: "Ontdek hoe je jouw Sunkenland game server instelt voor soepele gameplay en optimale werking → Leer het nu"
sidebar_label: Server Setup
services:
  - gameserver-sunkenland
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Sunkenland servers hebben een snelle eerste setup nodig om correct te functioneren. In deze gids nemen we je mee door de stappen om jouw Sunkenland game server in te stellen.

<InlineVoucher />

## Voorbereiding
Voordat je begint, moet je Sunkenland opstarten en een wereld opslaan. Zorg dat je de wereld opslaat voordat je verder gaat.

Om later in de gids toegang te krijgen tot je serverbestanden, heb je ook een FTP-client nodig zoals [WinSCP](https://winscp.net/eng/index.php) of [FileZilla](https://filezilla-project.org/), beide open-source en gratis te downloaden.

## Toegang tot je lokale data
De eerste stap is toegang krijgen tot je Sunkenland savegame data.

Druk simpelweg op `CTRL+R` op je toetsenbord en voer het volgende in bij het Windows Uitvoeren-venster:
```
%localappdata%low\Vector3 Studio\Sunkenland\
```

Op deze locatie vind je een `Worlds` map met al je lokale savegame bestanden. Kies de wereld die je op de server wilt hosten, of als het een nieuwe is, selecteer de nieuwe wereld die je hebt aangemaakt voordat je deze gids startte.

:::tip
Zie je hier niks? Zorg dan dat je Sunkenland hebt opgestart en een wereld hebt opgeslagen, dit maakt een nieuwe map aan.
:::

## Savegame uploaden
De volgende stap is verbinden met je game server via FTP en het uploaden van de savegame die je in de vorige stap hebt geselecteerd.

Verbind eerst met je server via een FTP-client met de inloggegevens die je vindt onder **Tools->FTP-Browser** in het webinterface van je game server. Gebruik onze [Toegang via FTP](gameserver-ftpaccess.md) gids als je hulp nodig hebt bij het verbinden.

Eenmaal verbonden, ga naar de Sunkenland map, open de "AppData" map en daarna de "Worlds" map. Selecteer de savegame van de vorige stap en upload deze naar deze map.

De mappenstructuur zou er nu zo uit moeten zien, waarbij `Marvin's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86` jouw eigen savegame is.
![](https://screensaver01.zap-hosting.com/index.php/s/eFg6Ek3giFM3DLs/preview)

:::important
Kopieer op dit punt de GUID die achteraan de naam van de savegame wereld staat. Je hebt deze nodig in de volgende stap om je server werkend te krijgen.

De GUID ziet er zo uit:
```
ZAP-Hosting's World~cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # Volledige wereldnaam
cef76ff5-447a-48df-b3a8-74b9ea5b7a86 # De GUID die je nodig hebt
```
:::

## Server activeren
Ga tot slot naar de **Instellingen** sectie in het webinterface van je game server.

Zoek hier naar de optie **World GUID**. Plak in dit veld de GUID die je in de vorige stap hebt gekopieerd.

Druk op de groene **Opslaan** knop onderaan de pagina. Probeer nu je server te starten, deze zou nu correct moeten opstarten.

Je hebt je Sunkenland game server succesvol ingesteld.

<InlineVoucher />