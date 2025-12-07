---
id: terraria-tmodloader-installmod
title: "Terraria: Mods installeren (tModLoader)"
description: "Ontdek hoe je eenvoudig tModLoader mods voor Terraria installeert en activeert om je game-ervaring te boosten → Leer het nu"
sidebar_label: Mods installeren (tModLoader)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Mods installeren via tModLoader

tModLoader voor Terraria is een superbelangrijke mod die het mogelijk maakt om mods op je Terraria-server te laden. De installatie gaat via drag & drop en met maar één aanpassing op je server, dus het is mega makkelijk en binnen een paar minuten geregeld.


## tModLoader installeren op je PC

Heb je tModLoader nog niet? Geen stress, je kunt ‘m gratis downloaden via Steam. Zoek gewoon op tModLoader in de Steam Store of klik op deze link: [tModLoader in de Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

Na het downloaden en installeren start je tModLoader direct via Steam.

## Mods toevoegen op je PC

Als je in het hoofdmenu bent, open je je mod-map door te klikken op **Mods**, daarna op **Manage Mods** en vervolgens op **Open Mod Folder**:

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

In de geopende map, standaard te vinden onder **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods**, kun je nu je gewenste mods plaatsen.
In dit voorbeeld installeren we de Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
Een mod moet altijd eindigen op **.tmod**, anders kan de server ‘m niet laden!
:::

Sluit daarna de map weer, klik in het spel op **Back** en daarna op **Mods**:

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

Je ziet nu je toegevoegde mod, die je activeert door op **Disabled** te klikken:

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

Klik op **Reload Mods** om de mod actief te maken, sluit het spel daarna af en ga verder met het installeren van de mod op je server.


## Mods installeren op je server

Om de mod op je server te zetten, maak je verbinding via FTP. Hoe dat werkt lees je hier: [Toegang via FTP](gameserver-ftpaccess.md)

Navigeer naar de map: /g******/terraria/mods/ en upload hier het eerder gebruikte **.tmod** bestand:

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
Als het bestand **enabled.json** er nog niet is, start dan eerst je server. Het bestand verschijnt dan vanzelf. Je kunt ‘m ook zelf aanmaken.
:::

Open het bestand **enabled.json** via **Rechtsklik > Bewerken** en voeg hier de naam van je mod toe, zoiets als dit:

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

Wil je meerdere mods toevoegen? Zo doe je dat:

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
Let op: na elke modnaam moet een komma, behalve na de laatste!
:::

Sluit nu de FTP-verbinding, start je server en maak verbinding met je server via de tModLoader die je van Steam hebt gedownload.

Druk op **ESC**, klik op **Settings** en daarna op **Mod Configuration** om te zien welke mods er op de server geladen zijn:

<InlineVoucher />