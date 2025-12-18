---
id: satisfactory-addmods
title: "Satisfactory: Mods Installeren"
description: "Ontdek hoe je mods veilig beheert en installeert voor Satisfactory-servers terwijl je je savegame beschermt → Leer het nu"
sidebar_label: Mods Installeren
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::danger
**BELANGRIJK**

Mods werken momenteel niet!
:::

:::info
**LET OP**

Mods worden **niet officieel** ondersteund door de ontwikkelaars, maar ze worden wel getolereerd!

In het ergste geval kan het installeren van mods je savegame kapot maken, tijdelijk onbespeelbaar maken door een update of zelfs volledig vernietigen!

Maak **altijd een backup vóór** het installeren van mods en maak regelmatig backups voor de zekerheid!
:::

<InlineVoucher />

## Modded Satisfactory op de server installeren

Om überhaupt mods op je server te kunnen installeren, moet je eerst een Modded Satisfactory Server bestellen: https://zap-hosting.com/en/satisfactory-server-hosting/
Als je al een Satisfactory-server hebt gehuurd, kun je het spel op elk moment wijzigen dankzij het cloud-systeem, zoals beschreven in [Game Change](gameserver-gameswitch.md).

## Mod-Manager installeren

De tool "SatisfactoryModManager" maakt het beheren en installeren van mods super makkelijk en kan met een paar klikken gedaan worden.
De tool is beschikbaar voor Windows en Linux en kan hier gedownload worden: https://github.com/satisfactorymodding/SatisfactoryModManager/releases

Alle versies staan op de gelinkte pagina; meestal gebruik je gewoon de nieuwste versie, oftewel de eerste bovenaan.
Je kunt de tool downloaden onder "Assets". Afhankelijk van je besturingssysteem (Windows of Linux) klik je op het juiste bestand, dat automatisch begint met downloaden of, afhankelijk van je browser of instellingen, moet je het downloaden bevestigen.

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

Als de download klaar is, open je het bestand en installeer je de mod manager op je PC, waarbij je tijdens de installatie de opties kiest die jij wilt.

## Mods installeren

Dezelfde mods moeten 1:1 geïnstalleerd worden op de client (door alle spelers!) én op de server, zodat de verbinding werkt en er geen crashes ontstaan.
In de eerste stap worden de mods op de client samengesteld en geïnstalleerd, zodat ze daarna naar de server kunnen worden overgezet.

:::info
**WAARSCHUWING**

Niet alle mods zijn compatible met multiplayer!

Als een mod multiplayer-compatible is, staat dat meestal in de beschrijving van de mod.

Let op: ook als er staat dat een mod multiplayer-compatible is, is dat geen garantie!
:::

### Client

Mods worden opgeslagen in profielen, zodat je bijvoorbeeld andere mods kunt testen in een testwereld en met één klik weer terug kunt naar je normale mods.
Selecteer dus eerst een profiel of maak een nieuw profiel aan, zoals in de screenshot.

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

Zet eerst de filter op "Compatible" zodat alleen mods worden getoond die op dit moment compatible zijn met jouw versie.

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

Mods kun je nu installeren door simpelweg op het download-icoon te klikken, mits je zeker weet dat de mod multiplayer-compatible is, zoals hierboven beschreven.

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### Server

Als alle gewenste mods op de client zijn geïnstalleerd en je hebt gecontroleerd dat ze multiplayer-compatible zijn, kunnen de mods op de server geïnstalleerd worden.
Zorg ervoor dat je server **uitgeschakeld** is voordat je de mods uploadt, om problemen te voorkomen!

Verbind nu via FTP met je server om de mods te uploaden.
Alles over FTP-verbindingen vind je in [Toegang via FTP](gameserver-ftpaccess.md).
Als je verbonden bent, open je de volgende map: `/gXXXX/modded-satisfactory/FactoryGame/Mods`

Open nu de lokale Satisfactory-map op je PC.
De stappen verschillen iets tussen Steam en Epic Games:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Als je Satisfactory via Steam hebt geïnstalleerd, kun je de map direct openen via de Steam-client:

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Games heeft geen knop om de installatiemap te openen, dus moet je deze handmatig openen.
Open Windows Verkenner en navigeer naar de map waar Epic Games door jou is geïnstalleerd.
Dit is meestal: `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

De mods die via de mod manager op de client zijn geïnstalleerd, moeten nu via FTP geüpload worden.
Om bij de mods zelf te komen, open je achtereenvolgens de mappen: `FactoryGame -> Mods`.

Selecteer nu alle mappen **behalve de SML-map** door de CTRL-toets ingedrukt te houden en op de mappen te klikken.

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

Sleep de geselecteerde mappen vervolgens naar de eerder geopende mod-map in FTP.

## Server starten

Als de mods zijn geüpload, kun je de server gewoon starten via de webinterface. De server zou nu joinbaar moeten zijn, meer info vind je in de [Verbinden met Server](satisfactory-connect.md) handleiding.

<InlineVoucher />