---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock: Importera egen värld"
description: "Upptäck hur du importerar och delar dina egna Minecraft Bedrock-världar på din server för smidig multiplayer-action → Läs mer nu"
sidebar_label: Importera egen värld
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Minecraft Bedrock Edition låter dig skapa egna världar och använda dem på din server. I den här guiden visar vi hur du importerar en egen värld till din Minecraft: Bedrock-server för att dela den med dina kompisar.

<InlineVoucher />

## Förberedelser

För att importera en värld till din Minecraft Bedrock-server behöver du ansluta via FTP. Om du inte är bekant med det rekommenderar vi att du kollar in guiden för [FTP-åtkomst](gameserver-ftpaccess.md).

Se till att du redan har sparat världen du vill importera på din dator. Världen ska ligga i en mapp med tillhörande filer.  
Om du vill ladda upp en värld från Minecraft: Bedrock singleplayer hittar du den på följande sökväg:
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## Installation

### Stoppa servern

Innan du börjar importen måste du stoppa din Minecraft Bedrock-server. Det säkerställer att inga data går förlorade och att importen går smidigt.

### Ladda upp världen

Navigera via FTP till mappen där dina servervärldar sparas. Sökvägen är vanligtvis:

```
/gXXXXXX/minecraft-bedrock/worlds
```

Här ser du mapparna för alla världar som finns på din server just nu. Varje värld har ett unikt namn.

Ladda upp mappen för den värld du vill importera till den här katalogen. Se till att mappnamnet inte ändras, annars känner inte Minecraft igen världen.

Öppna sedan filen `server.properties` som ligger i serverns huvudmapp och ändra värdet för `level-name` till mappnamnet på din värld:

```
level-name=Bedrock level
```
:::tip
Vill du använda din standardvärld igen? Ändra bara tillbaka värdet till `Bedrock level` och starta om servern!
:::

### Starta servern

När du har laddat upp världen framgångsrikt startar du servern igen. Den importerade världen bör nu laddas automatiskt.

### Kontrollera ändringarna

Anslut till din server och kontrollera att den importerade världen har laddats korrekt. Nu ska du kunna spela i din nya värld. Om något inte funkar som det ska, dubbelkolla stegen och att världsmappen är rätt namngiven och placerad.

## Sammanfattning

Att importera en värld till din Minecraft Bedrock-server är en enkel process som låter dig dela dina egna skapelser med andra. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />