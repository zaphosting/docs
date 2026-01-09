---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Installera Mods / Modpacks"
description: "Upptäck hur du laddar ner och installerar Minecraft-mods och modpacks för att förbättra din serverupplevelse → Lär dig mer nu"
sidebar_label: Installera Mods / Modpacks
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## Introduktion

Här lär du dig hur du laddar ner och installerar ett Mod / Modpack på din Minecraft-server.

<InlineVoucher />

## Förberedelser

- En Gameserver ([du kan skaffa en här](https://zap-hosting.com/en/gameserver-hosting/))
- En FTP-klient (t.ex. WinSCP, FileZilla)
- Anslut till din server via FTP: ([Åtkomst via FTP](gameserver-ftpaccess.md))



## Hitta & ladda ner mods eller modpacks

Det finns massor av ställen på nätet där du kan hitta mods / modpacks. Den största plattformen för mods och modpacks är CurseForge. Nästan 99% av alla mods / modpacks för Minecraft finns där och kan laddas ner med bara några klick. Den här guiden fokuserar på hur du använder CurseForge. Du kan söka efter mods [här](https://www.curseforge.com/minecraft/mc-mods) och modpacks [här](https://curseforge.com/minecraft/modpacks).

:::note
Mods fungerar bara med en specifik version av modloadern. Du måste kolla på mod-sidan vilken version du behöver. Om du installerar flera mods, se till att de alla använder samma version. Dessutom är Forge-mods inte kompatibla med Fabric-mods, och vice versa.
:::

Gå till sidan för ditt valda mod / modpack och klicka på fliken "Files".

![](https://screensaver01.zap-hosting.com/index.php/s/abryep5KdQcqpAi/preview)


Hitta den version du vill ha och klicka på den för att komma till avsnittet "File Details".

:::tip
Du kan filtrera efter version och modloader med hjälp av dropdown-menyn högst upp på den valda "Files"-fliken.

![](https://screensaver01.zap-hosting.com/index.php/s/HoJYzW7bkC4Z6oL/preview)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="För Mods" default>
I avsnittet "File Details", tryck på knappen "Download". Spara filen någonstans, du kommer behöva den senare.

![](https://screensaver01.zap-hosting.com/index.php/s/7ZcEHsmmqZWdZB5/preview)

</TabItem>

<TabItem value="Modpacks" label="För Modpacks">
I avsnittet "File Details", scrolla ner tills du ser "Additional Files" och klicka på de tre prickarna, välj "Download file". Spara filen någonstans, du kommer behöva den senare.

![](https://screensaver01.zap-hosting.com/index.php/s/YzH5Gz4w3yJZjx3/preview)

</TabItem>
</Tabs>

## Steg 2 - Extrahera filer från nedladdningar (endast för modpacks)

Hitta den nedladdade filen på din dator och högerklicka på den, välj "Extract All...". Välj en mapp där du vill extrahera filerna. Kom ihåg den!

![](https://screensaver01.zap-hosting.com/index.php/s/y9SWDpX2HYgekbQ/preview)

![extract the file german version](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

Din uppackade mapp bör innehålla mapparna mods, config och defaultconfig. Det kan också finnas fler mappar än de som visas här. 

:::note
Vissa modpacks kräver extra steg, som AllOfFabric6. För AllOfFabric6 måste du köra "startserver.bat" (Windows) eller "startserver.sh" (Linux / MacOS) för att få fram de ovan nämnda mapparna. Skriptet laddar ner mapparna åt dig. Men i de flesta fall finns mapparna där utan extra steg. Om det inte finns något skript i den uppackade mappen bör du göra en snabb sökning på nätet för hur du får serverfilerna för ditt modpack.
:::


## Steg 3 - Installera rätt serverversion

I Zap-Hostings webbgränssnitt, välj din Gameserver och gå till "Games" i inställningssektionen.

![](https://screensaver01.zap-hosting.com/index.php/s/Ne5B9CnHrbwgmfW/preview)

Expandera sektionen "Available Games" och sök efter din modloader (Forge för Forge mods / modpacks, Fabric för Fabric mods / modpacks). Klicka på den gröna nedladdningsknappen.

![](https://screensaver01.zap-hosting.com/index.php/s/dnBCddmXGAMpMj8/preview)


Klicka på dropdown-menyn under "Game version" och välj din Minecraft-version som motsvarar rätt version för ditt mod/modpack. För Forge kan du välja mellan senaste versionen eller rekommenderad version. Testa senaste versionen först och om din server inte fungerar som förväntat, gå tillbaka och prova den rekommenderade versionen. Klicka på "Accept and Install".

![](https://screensaver01.zap-hosting.com/index.php/s/gCdcwLzc4Hxptqp/preview)


:::tip
Om du inte vet vilken Minecraft-version du behöver, gå tillbaka till "File Details"-sidan på CurseForge. Bredvid gamecontroller-ikonen ser du versionen.

![](https://screensaver01.zap-hosting.com/index.php/s/9TsCBRP9PGQL2fC/preview)

:::

När installationen är klar ser du en blå knapp bredvid namnet på ditt spel (t.ex. Forge, Fabric). Klicka på den knappen för att aktivera spelet.

![](https://screensaver01.zap-hosting.com/index.php/s/YzzBzSJjnsaqKS2/preview)
![activate the game german version](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## Steg 4 - Anslut & ladda upp mods / modpack via FTP

Anslut till din server med din valda FTP-klient. Se till att din server är stoppad.

### Ladda upp en mod

När du är ansluten, navigera till din game-mapp (t.ex. minecraft-forge, minecraft-fabric). Öppna mods-mappen och dra och släpp dina nedladdade mod-filer direkt in i mappen.
![](https://screensaver01.zap-hosting.com/index.php/s/Zwm9SYdgK6MKBdz/preview)

När uppladdningen är klar kan du starta din server.

### Ladda upp ett modpack

När du är ansluten, navigera till din game-mapp (t.ex. minecraft-forge, minecraft-fabric). Radera mapparna world, mods, config och defaultconfig på din server. Ladda nu upp alla mappar från den uppackade mappen du laddade ner tidigare, förutom jre och libraries mapparna. Markera alla mappar och dra dem till din serverkatalog.

![](https://screensaver01.zap-hosting.com/index.php/s/PEyqrSES4xPGaFz/preview)

När uppladdningen är klar kan du starta din server.



## Populära Mods

Letar du fortfarande efter de perfekta mods för din server? Bläddra igenom vår noggrant utvalda lista med de mest populära och rekommenderade mods för att förbättra din spelupplevelse och ge din server den där sista touchen den förtjänar. Bli inspirerad och hitta precis de tilläggen som passar ditt projekt.

<SearchableItemList items={mods} />

## Populära Modpacks

Letar du fortfarande efter de perfekta modsen för din server? Bläddra igenom vår noggrant utvalda lista med de mest populära och rekommenderade modpacks för att förbättra din spelupplevelse och ge din server den där sista touchen den förtjänar. Bli inspirerad och hitta precis de tilläggen som passar ditt projekt.

<SearchableItemList items={modpacks} />

<InlineVoucher />