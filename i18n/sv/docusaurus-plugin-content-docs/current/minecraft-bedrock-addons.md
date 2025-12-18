---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: Installera Addons"
description: "Upptäck hur du kan förbättra din Minecraft Bedrock-server med addons för att utöka spelupplevelsen och anpassa din värld → Lär dig mer nu"
sidebar_label: Installera Addons
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduktion
Minecraft Bedrock Edition har inbyggt stöd för moddar och en enorm community, vilket gör att du kan utöka och förbättra spelupplevelsen tillsammans med dina vänner. I den här guiden går vi igenom hur du installerar och aktiverar ett addon på din Minecraft Bedrock-server.

<InlineVoucher />

## Förberedelser

För att installera en addon-karta på din Minecraft: Bedrock-server behöver du ansluta till den via FTP. Om du inte är bekant med detta rekommenderar vi att du kollar in vår guide för [FTP-åtkomst](gameserver-ftpaccess.md).

Innan du fortsätter med installationen behöver du också hitta de addons du vill installera på din server. Vi rekommenderar att du kollar in [CurseForge](https://www.curseforge.com/minecraft-bedrock) där det finns ett enormt bibliotek av addons och resource packs skapade av communityn.

## Installation

Det finns två sätt att installera ett addon i Minecraft Bedrock. Du kan antingen installera addons i en ny värld, vilket är väldigt enkelt, eller installera dem i en befintlig värld, vilket är lite mer avancerat.

## Använda ny värld (enkelt)

För att skapa en ny värld med addons behöver du först bara öppna den nedladdade `.mcaddon` eller `.mcpack` filen.  
Detta öppnar Minecraft Bedrock och importerar addon till spelet.

### Skapa värld

För att skapa en värld och installera addons i den, klicka på `Play` och sedan `Create new world`.  
Därefter kan du välja alla vanliga världinställningar du vill ha:

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### Installera Addons

Innan du klickar på `Create` behöver du gå till `Resource packs` eller `Behavior packs`.  
Där klickar du på `Activate` bredvid addon-namnet:

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

Vissa addons har både resource pack och behavior pack, så du måste aktivera båda. När du har aktiverat alla önskade addons kan du klicka på `Create`.

För att exportera världen och ladda upp den till din server kan du använda guiden [Import own World](minecraft-bedrock-add-world.md).

## Använda befintlig värld (avancerat)

Att installera addon i en befintlig värld är lite mer komplicerat, men ger fördelen att du kan spela med addon och behålla ditt redan gjorda framsteg.

### Installera 7-zip

För att installera addon i en befintlig Minecraft-värld behöver du installera 7-zip så att du kan öppna addon-filen.  
Installationsprocessen är enkel, besök bara [7-zip nedladdningssida](https://www.7-zip.org/) för att ladda ner den senaste installationsfilen:

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

När du laddat ner, öppna filen och klicka på **Install**.

### Extrahera Addon

När du har laddat ner ditt önskade addon kan du extrahera det med 7-zip genom att högerklicka på `.mcaddon`-filen, hovra över `7-zip` och klicka på `Extract to FOLDERNAME`:

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

Om addon innehåller både resource pack och behavior pack måste du göra samma sak för innehållet i mappen, eftersom de också är `.mcpack`-filer:

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

Skillnaden mellan resource packs och behavior packs syns i mappnamnet. Resource Pack-mappar har `RP` i namnet, behavior packs har `BP`.

<Tabs>
  <TabItem value="resource-pack" label="Resource Pack" default>

### Ladda upp Resource Pack

För att ladda upp resource pack, navigera till denna mapp i din FTP-klient:

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

Dra sedan och släpp RP-mappen i FTP-klienten:

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
Se till att du laddar upp rätt mapp som direkt innehåller resource packet, inte bara en undermapp.  
Innehållet i mappen du laddar upp ska se ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### Aktivera Resource Pack

För att aktivera resource packet måste du öppna `manifest.json` i RP-mappen.  
Sedan navigerar du till världsmappen i din FTP-klient:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Där öppnar du filen `world_resource_packs.json`.  
Om du aldrig installerat addons tidigare måste du skapa denna fil. Klistra in följande text i filen:

```
[
  {
    "pack_id" : "UUID HÄR",
    "version" : [version, nummer, här]
  }
]
```

Byt ut värdena för `pack_id` och `version` med värdena från manifest.json du öppnade tidigare:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
Vill du installera fler än ett pack kan du lägga till flera värden.  
Det är viktigt att ha ett kommatecken `,` mellan värdena, men inte efter det sista:

```
[
  {
    "pack_id" : "UUID HÄR",
    "version" : [version, nummer, här]
  },
  {
    "pack_id" : "UUID HÄR",
    "version" : [version, nummer, här]
  },
  {
    "pack_id" : "UUID HÄR",
    "version" : [version, nummer, här]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="Behavior Pack">

### Ladda upp Behavior Pack

För att ladda upp behavior pack, navigera till denna mapp i din FTP-klient:

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

Dra sedan och släpp BP-mappen i FTP-klienten:

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
Se till att du laddar upp rätt mapp som direkt innehåller behavior packet, inte bara en undermapp.  
Innehållet i mappen du laddar upp ska se ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### Aktivera Behavior Pack

För att aktivera behavior packet måste du öppna `manifest.json` i BP-mappen.  
Sedan navigerar du till världsmappen i din FTP-klient:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Där öppnar du filen `world_behavior_packs.json`.  
Om du aldrig installerat addons tidigare måste du skapa denna fil. Klistra in följande text i filen:

```
[
  {
    "pack_id" : "UUID HÄR",
    "version" : [version, nummer, här]
  }
]
```

Byt ut värdena för `pack_id` och `version` med värdena från manifest.json du öppnade tidigare:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
Vill du installera fler än ett pack kan du lägga till flera värden.  
Det är viktigt att ha ett kommatecken `,` mellan värdena, men inte efter det sista:

```
[
  {
    "pack_id" : "UUID HÄR",
    "version" : [version, nummer, här]
  },
  {
    "pack_id" : "UUID HÄR",
    "version" : [version, nummer, här]
  },
  {
    "pack_id" : "UUID HÄR",
    "version" : [version, nummer, här]
  }
]
```
:::
</TabItem>
</Tabs>

### Kontrollera ändringarna

Starta din server, anslut till den och kontrollera att addons har installerats korrekt. Testa de nya funktionerna eller resurserna för att säkerställa att allt fungerar som det ska. Om något inte går som planerat, dubbelkolla stegen och se till att filerna har laddats upp korrekt, samt leta efter eventuella fel i serverkonsolen.

## Avslutning

Att installera addons på din Minecraft Bedrock-server är ett grymt sätt att utöka spelupplevelsen och lägga till nytt innehåll. Med den här guiden kan du enkelt installera addons och anpassa din server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />