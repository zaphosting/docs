---
id: minecraft-worlds
title: "Minecraft: Beheer wereldsaves"
description: "Ontdek hoe je Minecraft-werelden beheert, converteert en back-upt over verschillende platforms om je voortgang veilig en soepel te houden → Leer het nu"
sidebar_label: Werelden beheren
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Minecraft slaat zijn game saves op als **werelden**, waarbij elke wereld een op zichzelf staande save is. In deze gids duiken we in het beheren van werelden op je Minecraft game server, inclusief het converteren van werelden tussen platforms, het regenereren van werelden, het back-uppen van je lokale en serverwerelden en het uploaden van werelden naar je server.

<InlineVoucher />

## Voorbereiding

Om je werelden te beheren, moet je eerst toegang krijgen tot je Minecraft game server via FTP. Als je niet bekend bent met FTP, bekijk dan onze [Toegang via FTP](gameserver-ftpaccess.md) gids.

## Verschillen tussen platforms vergelijken

Een belangrijk verschil tussen vanilla servers en serverplatforms is dat vanilla servers de normale wereld, de Nether en de End dimensies combineren in één enkele save.

Serverplatforms zoals Spigot, PaperMC en Bukkit splitsen daarentegen elke dimensie op als een aparte wereldsave. Hieronder zie je een tabel die laat zien hoe een voorbeeldwereld genaamd **zapdocs** wordt behandeld door beide soorten serverplatforms.

| Wereld Dimensie  | Vanilla Server (Gecombineerd) | Server Platforms (Individueel)  |
| ---------------- | ----------------------------- | ------------------------------ |
| Normale Wereld/Overworld | zapdocs                   | zapdocs                        |
| Nether           | zapdocs                       | zapdocs_nether                 |
| The End          | zapdocs                       | zapdocs_the_end                |

## Werelden converteren

Als je wisselt tussen een vanilla server en een serverplatform, wil je misschien je wereldsave behouden. Door de verschillen hierboven moet je de mappenstructuur aanpassen om individuele werelden voor de Nether en End dimensies te extraheren of samen te voegen, afhankelijk van de actie.

:::info
Dit is alleen nodig als je wisselt tussen vanilla en serverplatforms en een bestaande wereld wilt behouden en verplaatsen. Als je alleen tussen vanilla servers of tussen serverplatforms wisselt, hoef je niets te converteren.
:::

:::note
Zorg dat je de server uitzet voordat je begint om conflicten of rollbacks te voorkomen.
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="Converteren van Vanilla" default>

Om een wereld van vanilla naar serverplatform-formaat te converteren, moet je bepaalde mappen extraheren om nieuwe individuele werelden voor elke dimensie te maken. Het is natuurlijk de bedoeling dat je alle werelden naar een nieuwe server verplaatst die een serverplatform zoals Spigot, PaperMC of Bukkit draait.

Ga via FTP naar `../vanilla/[jouw_wereld]` om de wereldsave te openen die je wilt converteren. Zoek de mappen **DIM1** en **DIM-1**.

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

De map **DIM1** bevat de End-data, terwijl **DIM-1** de Nether-data bevat.

Je moet elke map in een eigen nieuwe wereldmap plaatsen, als volgt:
- Voor de Nether maak je een nieuwe map `[jouw_wereld]_nether` aan in de root folder. Verplaats de **DIM-1** map naar deze nieuwe aparte wereldmap.
- Voor de End maak je een nieuwe map `[jouw_wereld]_the_end` aan in de root folder. Verplaats de **DIM1** map naar deze nieuwe aparte wereldmap.

:::info
Je moet mogelijk de `DIM` mappen overschrijven, dat is normaal omdat serverplatforms standaard alle dimensies meteen genereren.
:::

In dit voorbeeld heet de wereld `world`, dus zijn er nieuwe mappen `world_nether` en `world_the_end` aangemaakt in de root folder, met de juiste `DIM` map erin verplaatst.

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

De drie individuele werelden zijn nu klaar voor gebruik op serverplatforms.

</TabItem>

<TabItem value="converting-to-vanilla" label="Converteren naar Vanilla">

Om een wereld van een serverplatform naar vanilla-formaat te converteren, is het proces praktisch hetzelfde maar dan omgekeerd. Je moet data uit de individuele werelden voor de Nether en End dimensies halen en samenvoegen tot één wereldsave. Het is natuurlijk de bedoeling dat je deze gecombineerde wereld naar een nieuwe vanilla server verplaatst.

Ga via FTP naar de root folder. Zoek de drie individuele wereldmappen: `[jouw_wereld]`, `[jouw_wereld]_nether` en `[jouw_wereld]_the_end`, waarbij `[jouw_wereld]` de naam van de wereld is.

Open de map `[jouw_wereld]_nether` en verplaats de `DIM-1` map naar de hoofdmap `[jouw_wereld]`. In dit voorbeeld heet de wereld standaard `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

Herhaal dit voor de map `[jouw_wereld]_the_end` en verplaats `DIM1` naar de hoofdmap `[jouw_wereld]`.

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

De gecombineerde wereld is nu klaar voor gebruik op een vanilla server.

</TabItem>
</Tabs>

## Werelden genereren

Werelden genereren is simpel: je kunt een volledig nieuwe wereld maken of de huidige wereld als nieuw regenereren. Minecraft gebruikt een **seed** systeem waarbij elke wereld een unieke seed heeft. Met alleen de seed kun je een exacte kopie van het begin van een wereld regenereren.

<Tabs>
<TabItem value="generating-new" label="Nieuwe wereld genereren" default>

Om een nieuwe wereld te genereren, zet je de server uit en maak je verbinding via FTP. Open ook het `server.properties` configuratiebestand, via de **Configs** sectie in het webinterface paneel van je server of via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Om een nieuwe wereld te genereren kun je:
- Via FTP de wereldmap verwijderen die dezelfde naam heeft als de `level-name` parameter in het configbestand.
- Of de `level-name` parameter in het configbestand aanpassen naar een andere naam en opslaan.

Als je de oude save wilt bewaren, raden we optie 2 aan. Zo blijft de oude wereld op de server staan maar is deze "inactief".

Start de server opnieuw op. De server merkt dat de wereld met de `level-name` naam ontbreekt en genereert een nieuwe wereld met een nieuwe seed.

</TabItem>

<TabItem value="regenerating-current" label="Huidige wereld regenereren">

Om de huidige wereld te regenereren, moet je de seed weten. Dit kan via de **Console** sectie in het webinterface paneel of direct in-game (je hebt wel OP-rechten nodig om dit in-game te doen).

Voer het commando `/seed` uit in de console of in-game. Dit geeft de **seed** van de huidige wereld terug. Noteer deze seed.

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

Met de seed bekend, pas je de `level-seed` parameter aan in het `server.properties` configuratiebestand. Dit kan via de **Configs** sectie in het webinterface paneel of via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
Zorg dat je de server eerst uitzet zodat het bestand correct wordt opgeslagen.
:::

Verander de `level-seed` parameter naar de seed waarde en sla het bestand op. Maak verbinding met je server via FTP.

Om de wereld te regenereren kun je:
- Via FTP de wereldmap verwijderen die dezelfde naam heeft als de `level-name` parameter in het configbestand.
- Of de `level-name` parameter aanpassen naar een andere naam en opslaan.

Als je de oude save wilt bewaren, raden we optie 2 aan. Zo blijft de oude wereld op de server staan maar is deze "inactief".

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

Start de server opnieuw op. De server merkt dat de wereld met de `level-name` naam ontbreekt en regenereert de huidige wereld met de seed die je hebt opgegeven via de `level-seed` parameter.

</TabItem>
</Tabs>

## Wereldsaves back-uppen

### Lokale saves

Lokale wereldsaves zijn die je hebt gemaakt tijdens singleplayer. Die vind je in je Windows AppData, specifiek op deze locatie:
```
../AppData/Roaming/.minecraft/saves
```

:::tip
Je opent deze map makkelijk door tegelijk `CTRL` + `R` te drukken en in het run-venster deze map te typen: `%appdata%/.minecraft/saves/`. Klik op **OK** en je bent er.

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

In deze map zie je al je lokale wereldsaves overzichtelijk bij elkaar.

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### Saves via FTP benaderen

Je wereldsave van de server back-uppen is simpel. Zodra je verbonden bent met je game server via een FTP client, ga je naar de root folder van het serverplatform dat je gebruikt. Wereldsaves staan daar direct, standaard heet de wereldmap `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### Automatische backup

We bieden ook een optie om automatisch je wereldsave (en config-bestand) te back-uppen via onze webinterface. Ga naar je game server webinterface en open de sectie **Tools->Backups**. Hier stel je allerlei opties in om automatische backups te plannen. Je krijgt 10GB gratis backup opslagruimte voor je backups. Meer info over backups vind je in onze speciale [Backups](gameserver-backups.md) gids.

## Wereldsave uploaden

Net als bij back-uppen is het uploaden van je wereldsave makkelijk. Zorg dat je verbonden bent met je game server via FTP. Ga naar de root folder van het serverplatform dat je gebruikt.

:::info Vanilla & Server Platform Werelden
Onthoud dat vanilla servers en serverplatforms werelden iets anders opslaan.

Als je een save verplaatst van vanilla naar een serverplatform zoals PaperMC, of andersom, bekijk dan eerst de sectie over werelden converteren.
:::

Sleep je wereldsave map simpelweg in de root folder via je FTP client en hij wordt geüpload naar je server.

:::tip
Het kan handig zijn om de naam van de geüploade wereldmap te kopiëren, want die heb je nodig om hem te activeren in de volgende stap.
:::

## Wereldsave activeren

Om een specifieke wereldsave te gebruiken, moet je het `server.properties` configuratiebestand aanpassen, specifiek de `level-name` parameter.

Dit kan via de **Configs** sectie in het webinterface paneel van je server of via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Zoek in het bestand de `level-name` parameter en pas deze aan naar de naam van de map van je wereldsave. Gebruik bij serverplatforms de hoofdmapnaam, niet de `_nether` of `_the_end` mappen.





## Conclusie

Je weet nu hoe je je Minecraft werelden met vertrouwen beheert. Van het converteren van saves tussen vanilla en serverplatforms, tot het genereren van nieuwe werelden, het regenereren van oude met seeds, het maken van betrouwbare backups, het uploaden van custom werelden en het activeren ervan op je server. Met deze kennis beheer je je werelden soepel en houd je je avonturen veilig en georganiseerd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />