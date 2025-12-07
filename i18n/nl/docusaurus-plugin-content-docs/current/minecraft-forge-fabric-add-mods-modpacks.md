---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Mods / Modpacks Installeren"
description: "Ontdek hoe je Minecraft mods en modpacks downloadt en installeert om je server gameplay te verbeteren → Leer het nu"
sidebar_label: Mods / Modpacks Installeren
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## Introductie

Je leert hoe je een Mod / Modpack downloadt en installeert op je Minecraft server.

<InlineVoucher />

## Voorbereiding

- Een Gameserver ([hier te bestellen](https://zap-hosting.com/en/gameserver-hosting/))
- Een FTP-client (bijv. WinSCP, FileZilla)
- Verbind met je server via FTP: ([Toegang via FTP](gameserver-ftpaccess.md))



## Mods of modpacks zoeken & downloaden

Er zijn veel plekken online om mods / modpacks te vinden. De grootste platform voor mods en modpacks is CurseForge. Bijna 99% van alle Minecraft mods / modpacks vind je daar en kun je met een paar klikken downloaden. Deze gids focust op het gebruik van CurseForge. Je kunt mods zoeken [hier](https://www.curseforge.com/minecraft/mc-mods) en modpacks [hier](https://curseforge.com/minecraft/modpacks).

:::note
Mods werken alleen met een specifieke versie van de modloader. Check de modpagina welke versie je nodig hebt. Als je meerdere mods installeert, zorg dan dat ze allemaal dezelfde versie gebruiken. Forge mods zijn niet compatibel met Fabric mods, en andersom ook niet.
:::

Ga naar de pagina van je gekozen mod / modpack en klik op het tabblad "Files".

![](https://github.com/Yoshlix/docs/assets/26007280/cc528cf6-9fc8-4524-aca0-b954e24716f8)


Zoek de versie die je wilt en klik erop om naar de sectie "File Details" te gaan.

:::tip
Je kunt filteren op versie en modloader via het dropdown-menu bovenaan het geselecteerde "Files" tabblad.

![](https://github.com/Yoshlix/docs/assets/26007280/6867b2f2-e9db-4a4c-be88-b9b22b800e72)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="Voor Mods" default>
In de sectie "File Details" klik je op de knop "Download". Sla dit bestand ergens op, je hebt het later nodig.

![](https://github.com/Yoshlix/docs/assets/26007280/7b84ae33-1bef-4568-80d7-ef651a654b08)

</TabItem>

<TabItem value="Modpacks" label="Voor Modpacks">
In de sectie "File Details" scroll je naar beneden tot je "Additional Files" ziet, klik op de drie puntjes en kies "Download file". Sla dit bestand ergens op, je hebt het later nodig.

![](https://github.com/Yoshlix/docs/assets/26007280/49fb9317-fdd3-474e-8140-b78b102c5f3d)

</TabItem>
</Tabs>

## Stap 2 - Bestanden uit downloads uitpakken (alleen voor modpacks)

Zoek het gedownloade bestand op je pc, klik er met rechts op en kies "Alles uitpakken...". Kies een map waar je de uitgepakte bestanden wilt opslaan. Onthoud deze locatie!

![](https://github.com/Yoshlix/docs/assets/26007280/edbc753d-1906-4d81-9f05-354ff48ceebb)

![extract the file german version](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

Je uitgepakte map zou een mods, config en defaultconfig map moeten bevatten. Er kunnen ook meer mappen zijn dan hier getoond.

:::note
Sommige modpacks vereisen extra stappen, zoals AllOfFabric6. Bij AllOfFabric6 moet je "startserver.bat" (Windows) of "startserver.sh" (Linux / MacOS) draaien om de genoemde mappen te krijgen. Het script downloadt de mappen voor je. Meestal zijn de mappen er echter al zonder extra stappen. Als er geen script in de uitgepakte map staat, zoek dan even online hoe je de serverbestanden voor jouw modpack krijgt.
:::


## Stap 3 - De juiste serverversie installeren

In het Zap-Hosting webinterface selecteer je je Gameserver en ga je naar "Games" in de instellingen.

![](https://github.com/Yoshlix/docs/assets/26007280/47e88856-0120-408a-8bec-41e54e3b0738)

Vouw de sectie "Available Games" uit en zoek je modloader (Forge voor Forge mods / modpacks, Fabric voor Fabric mods / modpacks). Klik op de groene downloadknop.

![](https://github.com/Yoshlix/docs/assets/26007280/e3b4e5d3-11c9-4f09-ae46-27cea93a58a3)


Klik op het dropdown-menu onder "Game version" en selecteer je Minecraft-versie die overeenkomt met de juiste versie voor je mod/modpack. Voor Forge kun je kiezen tussen de nieuwste versie of de aanbevolen versie. Probeer eerst de nieuwste versie, en als je server niet werkt zoals verwacht, probeer dan de aanbevolen versie. Klik op "Accept and Install".

![](https://github.com/Yoshlix/docs/assets/26007280/3530466f-bd58-4d0e-9ca3-8d964ac76d80)


:::tip
Weet je niet welke Minecraft-versie je nodig hebt? Ga terug naar de "File Details" pagina op CurseForge. Naast het gamecontroller-icoon zie je de versie.

![](https://github.com/Yoshlix/docs/assets/26007280/89f751c1-7179-4107-b8bc-7c4381a7d94c)

:::

Als de installatie klaar is, zie je een blauwe knop naast de naam van je game (bijv. Forge, Fabric). Klik hierop om de game te activeren.

![](https://github.com/Yoshlix/docs/assets/26007280/53cf9569-3529-42fb-9a7d-6ae636ca4f9c)
![activate the game german version](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## Stap 4 - Verbinden & mods / modpack uploaden via FTP

Verbind met je server via je gekozen FTP-client. Zorg dat je server gestopt is.

### Een mod uploaden

Als je verbonden bent, navigeer je naar je game map (bijv. minecraft-forge, minecraft-fabric). Open de mods map en sleep je gedownloade mod-bestanden erin.

![](https://github.com/Yoshlix/docs/assets/26007280/8619fc4f-4fab-415a-9692-f74f8930da3f)

Als het uploaden klaar is, kun je je server starten.

### Een modpack uploaden

Als je verbonden bent, navigeer je naar je game map (bijv. minecraft-forge, minecraft-fabric). Verwijder de world, mods, config en defaultconfig mappen op je server. Upload nu alle mappen uit de eerder uitgepakte map, behalve de jre en libraries mappen. Selecteer gewoon alle mappen en sleep ze naar je server directory.

![](https://github.com/Yoshlix/docs/assets/26007280/1424a94d-aa96-40ca-8b30-7c1905e67c21)

Als het uploaden klaar is, kun je je server starten.



## Populaire Mods

Nog op zoek naar de perfecte mods voor je server? Blader door onze zorgvuldig samengestelde lijst met de populairste en meest aanbevolen mods om je gameplay te verbeteren en je server die finishing touch te geven die ‘ie verdient. Laat je inspireren en vind precies de toevoegingen die bij jouw project passen.

<SearchableItemList items={mods} />

## Populaire Modpacks

Nog op zoek naar de perfecte modpacks voor je server? Blader door onze zorgvuldig samengestelde lijst met de populairste en meest aanbevolen modpacks om je gameplay te verbeteren en je server die finishing touch te geven die ‘ie verdient. Laat je inspireren en vind precies de toevoegingen die bij jouw project passen.

<SearchableItemList items={modpacks} />

<InlineVoucher />