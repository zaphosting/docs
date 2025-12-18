---
id: domain-gameserver-srv-link
title: "Domein: Game server doorsturen instellen"
description: "Ontdek hoe je je domein of subdomein doorstuurt naar een game server voor makkelijke toegang en betere connectiviteit → Leer het nu"
sidebar_label: Gameserver doorsturen
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Je kunt je domein helemaal doorsturen of alleen een subdomein naar je game server. Dit is handig omdat mensen zo via een domein verbinding kunnen maken met je game server, in plaats van ingewikkelde IP-adressen met alleen maar cijfers te moeten onthouden. In deze gids leggen we uit hoe je een domein instelt om door te sturen naar je game server via DNS-records.

<InlineVoucher />

:::info
Houd er rekening mee dat het altijd tot 24 uur kan duren voordat wijzigingen in DNS-instellingen actief worden!
:::

## Functionaliteit

Voor het doorsturen van het IP-adres maak je óf een subdomein aan dat doorstuurt naar het IP-adres van de game server, óf je stuurt het hele domein door zonder subdomein. Dit is genoeg als de game server de standaardpoort van het spel gebruikt. Als de game server een andere poort gebruikt dan de standaardpoort, heb je een extra **SRV-record** nodig om het subdomein door te sturen naar de game server.

:::info
Niet alle games ondersteunen het doorsturen van een domein naar de gamepoort via een SRV-record, check dus vooraf of jouw game SRV-records ondersteunt.
:::

### SRV Service

De servicenaam hangt af van de game en begint altijd met een **underscore**. Bijvoorbeeld, de servicenaam voor een Minecraft server is altijd **_minecraft** en voor een FiveM server **_cfx**.

### SRV protocol

Als protocol geef je het internetprotocol op dat gebruikt wordt voor de verbinding. Hier zijn **UDP** en **TCP** beschikbaar. Welk protocol je gebruikt hangt ook af van de game. De specificatie van het protocol begint ook altijd met een **underscore** en is óf **_udp** óf **_tcp**.

## Voorbereiding

Om je domein door te sturen naar een game server zonder subdomein aan te maken, open je eerst je domein in het dashboard en daarna open je het DNS-beheer in het menu links.

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

Daar zie je alle bestaande DNS-records voor je domein.

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## Domein doorsturen (Minecraft)

Eerst moet je het IP en de poort van de Minecraft server weten waar je naartoe wilt doorsturen. Met deze info kun je de volgende stappen volgen.

In ons voorbeeld gebruiken we `testserver-domain.de` als domeinnaam, `123.123.123.123` als server IP en `25500` als POORT.

### A-record aanmaken

Klik op de knop **Nieuw record** om een nieuw record aan te maken.

Er opent een venster met vier velden die je moet invullen:

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

De **Naam** is het hoofd- of subdomein waarover de doorsturing naar het IP plaatsvindt, deze naam mag je zelf kiezen. Het **Type** laat je in deze stap op **A** staan. Bij **Waarde** vul je alleen het IP van de Minecraft server in die je eerder hebt opgezocht. In ons voorbeeld ziet dat er zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

Als je dit opslaat, wordt het record correct weergegeven:

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### SRV-record aanmaken

Nu moet je een SRV-record aanmaken, dit is nodig voor het doorsturen van de poort als je niet de standaardpoort gebruikt. Klik daarom weer op **Nieuw record**.

Bij **Naam** vul je het protocol en het verbindingsdomein in. De domeinnaam die je hier invult, gebruik je later om verbinding te maken met de server. Bij **Type** kies je in het dropdownmenu voor **SRV**:

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

Bij **Waarde** vul je nu drie waarden in: eerst de prioriteit (standaard 0), dan de poort van de game server (in ons voorbeeld `25500`) en als laatste de domeinnaam van het zojuist aangemaakte **A-record**.

In ons voorbeeld ziet dat er zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### Problemen oplossen & resultaat

:::important
Aan het einde van de invoer moet een punt worden toegevoegd, zonder deze punt probeert het systeem het domein aan te vullen.
:::

Als je dit niet doet, stuurt het systeem `minecraft.testserver-domain.de` door naar `minecraft.testserver-domain.de.testserver-domain.de` en mislukt de doorsturing.

## Domein doorsturen (FiveM)

Eerst moet je het IP en de poort van de FiveM server weten waar je naartoe wilt doorsturen. Met deze gegevens kun je de volgende stappen volgen.

In ons voorbeeld gebruiken we `testserver-domain.de` als domeinnaam, `123.123.123.123` als server IP en POORT `30300`.

### A-record aanmaken

Klik op de knop **Nieuw record** om een nieuw record aan te maken.

Er opent een venster met vier velden die je moet invullen:

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

De **Naam** is het hoofd- of subdomein waarover de doorsturing naar het IP plaatsvindt, deze naam mag je zelf kiezen. Het **Type** laat je in deze stap op **A** staan. Bij **Waarde** vul je alleen het IP van de FiveM server in die je eerder hebt opgezocht. In ons voorbeeld ziet dat er zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

Als je dit opslaat, wordt het record correct weergegeven:

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### SRV-record aanmaken

Nu moet je een SRV-record aanmaken, dit is nodig voor het doorsturen van de poort als je niet de standaardpoort gebruikt. Klik daarom weer op **Nieuw record**.

Bij **Naam** vul je het protocol en het verbindingsdomein in. De domeinnaam die je hier invult, gebruik je later om verbinding te maken met de server. Bij **Type** kies je in het dropdownmenu voor **SRV**:

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

Bij **Waarde** vul je nu drie waarden in: eerst de prioriteit (standaard 0), dan de poort van de game server (in ons voorbeeld `30300`) en als laatste de domeinnaam van het zojuist aangemaakte **A-record**.

In ons voorbeeld ziet dat er zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### Problemen oplossen & resultaat

:::important
Aan het einde van de invoer moet een punt worden toegevoegd, zonder deze punt probeert het systeem het domein aan te vullen.
:::

Als je dit niet doet, stuurt het systeem `fivem.testserver-domain.de` door naar `fivem.testserver-domain.de.testserver-domain.de` en mislukt de doorsturing.

<InlineVoucher />