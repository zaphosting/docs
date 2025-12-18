---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: Addons Installeren"
description: "Ontdek hoe je jouw Minecraft Bedrock-server kunt uitbreiden met addons om de gameplay te verrijken en je wereld te customizen → Leer het nu"
sidebar_label: Addons Installeren
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introductie
Minecraft Bedrock Edition heeft native modding-ondersteuning en een enorme community, waardoor je de gameplay samen met je vrienden kunt uitbreiden en verbeteren. In deze gids leggen we uit hoe je een addon installeert en activeert op je Minecraft Bedrock-server.

<InlineVoucher />

## Voorbereiding

Om een addon map te installeren op je Minecraft: Bedrock-server, moet je verbinding maken via FTP. Als je hier niet bekend mee bent, raden we je aan om eerst de [FTP toegang](gameserver-ftpaccess.md) gids te bekijken.

Voordat je begint met installeren, moet je ook addons zoeken die je op je server wilt installeren. We raden aan om te browsen op [CurseForge](https://www.curseforge.com/minecraft-bedrock), want daar vind je een enorme bibliotheek met addons en resource packs gemaakt door de community.

## Installatie

Er zijn twee manieren om een addon te installeren in Minecraft Bedrock. Je kunt de addons installeren in een nieuwe wereld, wat het proces heel makkelijk maakt, of je kunt ze installeren in een bestaande wereld, wat wat lastiger is.

## Nieuwe Wereld gebruiken (makkelijk)

Om een nieuwe wereld met addons te maken, hoef je alleen maar het gedownloade `.mcaddon` of `.mcpack` bestand te openen.  
Dit opent Minecraft Bedrock en importeert de addon in het spel.

### Wereld aanmaken

Om een wereld aan te maken en de addons te installeren, klik je op `Play` en daarna op `Create new world`.  
Je kunt dan alle normale wereldinstellingen kiezen die je wilt:

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### Addons installeren

Voordat je op `Create` klikt, moet je naar `Resource packs` of `Behavior packs` navigeren.  
Daar klik je op `Activate` naast de naam van de addon:

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

Sommige addons hebben zowel een resource pack als een behavior pack, dus je moet ze allebei activeren. Als je alle gewenste addons hebt geactiveerd, kun je op `Create` klikken.

Om de wereld te exporteren en naar je server te uploaden, kun je de [Eigen Wereld Importeren](minecraft-bedrock-add-world.md) gids gebruiken.

## Bestaande Wereld gebruiken (lastiger)

Een addon installeren in een bestaande wereld is wat lastiger, maar het voordeel is dat je met de addon kunt spelen en je voortgang behoudt.

### 7-zip installeren

Om de addon in een bestaande Minecraft-wereld te installeren, moet je 7-zip installeren zodat je het addon-bestand kunt openen.  
Het installatieproces is heel simpel: bezoek de [7-zip downloadpagina](https://www.7-zip.org/) om de nieuwste setup-versie te downloaden:

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

Open het bestand na het downloaden en klik op **Install**.

### Addon uitpakken

Zodra je de gewenste addon hebt gedownload, kun je deze uitpakken met 7-zip door met de rechtermuisknop op het `.mcaddon` bestand te klikken, te hoveren over `7-zip` en te kiezen voor `Extract to FOLDERNAME`:

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

Als de addon zowel een resource pack als een behavior pack bevat, moet je hetzelfde doen voor de inhoud van die map, want dat zijn ook `.mcpack` bestanden:

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

Het verschil tussen resource packs en behavior packs zie je aan de mapnaam. Resource Pack-mappen bevatten `RP` in de naam, behavior packs `BP`.

<Tabs>
  <TabItem value="resource-pack" label="Resource Pack" default>

### Resource Pack uploaden

Om het resource pack te uploaden, navigeer je met je FTP-client naar deze map:

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

Sleep vervolgens de RP-map naar de FTP-client:

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
Zorg dat je de juiste map uploadt die direct het resource pack bevat, niet alleen een submap.  
De inhoud van de map die je uploadt zou er zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### Resource Pack activeren

Om het resource pack te activeren, open je het `manifest.json` bestand in de RP-map.  
Ga daarna met je FTP-client naar de wereldmap:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Open daar het bestand `world_resource_packs.json`.  
Als je nog nooit addons hebt geïnstalleerd, moet je dit bestand aanmaken. Plak de volgende tekst erin:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [versie, nummer, hier]
  }
]
```

Vervang de waarden van `pack_id` en `version` met de waarden uit het manifest.json dat je eerder opende:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
Wil je meerdere packs installeren? Voeg dan meerdere items toe.  
Let op dat je komma’s `,` gebruikt om de items te scheiden, maar niet achter het laatste item:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [versie, nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [versie, nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [versie, nummer, hier]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="Behavior Pack">

### Behavior Pack uploaden

Om het behavior pack te uploaden, navigeer je met je FTP-client naar deze map:

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

Sleep vervolgens de BP-map naar de FTP-client:

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
Zorg dat je de juiste map uploadt die direct het behavior pack bevat, niet alleen een submap.  
De inhoud van de map die je uploadt zou er zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### Behavior Pack activeren

Om het behavior pack te activeren, open je het `manifest.json` bestand in de BP-map.  
Ga daarna met je FTP-client naar de wereldmap:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Open daar het bestand `world_behavior_packs.json`.  
Als je nog nooit addons hebt geïnstalleerd, moet je dit bestand aanmaken. Plak de volgende tekst erin:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [versie, nummer, hier]
  }
]
```

Vervang de waarden van `pack_id` en `version` met de waarden uit het manifest.json dat je eerder opende:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
Wil je meerdere packs installeren? Voeg dan meerdere items toe.  
Let op dat je komma’s `,` gebruikt om de items te scheiden, maar niet achter het laatste item:

```
[
  {
    "pack_id" : "UUID HIER",
    "version" : [versie, nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [versie, nummer, hier]
  },
  {
    "pack_id" : "UUID HIER",
    "version" : [versie, nummer, hier]
  }
]
```
:::
</TabItem>
</Tabs>

### Controleer de wijzigingen

Start je server, maak verbinding en check of de addons correct zijn geïnstalleerd. Test de nieuwe features of resources om zeker te weten dat alles werkt zoals het hoort. Als er iets niet goed gaat, controleer dan de stappen nog eens, kijk of de bestanden goed zijn geüpload en check de serverconsole op eventuele fouten.

## Conclusie

Addons installeren op je Minecraft Bedrock-server is een top manier om de gameplay uit te breiden en nieuwe content toe te voegen. Met deze gids kun je makkelijk addons installeren en je server customizen. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />