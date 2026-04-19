---
id: windrose-manage-worlds
title: "Windrose: Hantera Världar"
description: "Lär dig hur du hanterar flera Windrose-världar, byter världssparningar och konfigurerar dina världinställningar på en dedikerad server med korrekt världstruktur. -> Lär dig mer nu"
sidebar_label: Hantera Världar
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windrose stödjer flera världar på en och samma dedikerade server, där varje värld använder sin egen sparfil och `WorldDescription.json`-konfiguration. I den här guiden lär du dig hur du skapar nya världar, byter mellan befintliga, säkerhetskopierar och raderar dem på ett säkert sätt.

## Preparation

Innan du börjar, se till att du har tillgång till din Windrose-spelserver via ZAP-Hostings webbgränssnitt och att servern är offline innan du gör ändringar i sparfiler eller konfiguration.

:::info Krävd åtkomst
Du behöver åtkomst till ZAP-Hostings spelserverhantering, inklusive **Filhanteraren**, **Konfigurationer** och **Säkerhetskopior**, för att kunna hantera dina Windrose-världar på ett säkert sätt.
:::

:::caution Stoppa servern först
Du bör alltid stoppa servern innan du redigerar `ServerDescription.json`, ändrar `WorldDescription.json`, skapar världsmappar eller tar bort spardata. Detta förhindrar korruption och ofullständiga världsskrivningar.
:::

## Förstå Windrose världstruktur

Windrose lagrar all världdata i sparprofilens katalog. Den första världen skapas automatiskt när du startar servern för första gången.

Den relevanta strukturen ser ut så här:

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

I praktiken finns världsmapparna här:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Varje världsmapp är namngiven efter dess unika `IslandId`. Servern använder detta ID internt för att veta vilken värld som ska laddas.

| Fil eller Mapp | Syfte |
| --- | --- |
| `ServerDescription.json` | Definierar den aktiva serverkonfigurationen, inklusive vilken värld som är laddad |
| `RocksDB/[your_game_version]/Worlds/` | Lagrar alla tillgängliga världssparmappar |
| `[your_world_id]/WorldDescription.json` | Lagrar konfigurationen för en specifik värld |
| `WorldIslandId` | Värdet i `ServerDescription.json` som talar om för servern vilken värld som ska laddas |

:::danger Byt aldrig namn på världsmappar
Du får aldrig byta namn manuellt på en världsmapp. Windrose använder mappnamnet som det interna `IslandId` i RocksDB-databasen. Att byta namn kan korrupta världen eller göra den oanvändbar.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Hitta den aktiva världen

Innan du byter eller skapar världar är det bra att veta vilken värld som är aktiv just nu.

### Kontrollera serverkonfigurationen

Öppna **Konfigurationer** i din spelserverhantering och hitta `ServerDescription.json`. Om filen inte finns där, använd **Filhanteraren** och öppna `ServerDescription.json` i rotkatalogen.

Leta efter följande fält:

```json
"WorldIslandId": "[your_world_id]"
```

Detta värde definierar vilken värld servern laddar vid start.

### Kontrollera ett värld-ID

För att identifiera en specifik sparad värld, öppna dess `WorldDescription.json` i världsmappen och leta efter värdet `IslandId`.

Exempel:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "World_Example_ID",
    "WorldName": "My World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

`IslandId` i denna fil måste exakt matcha mappnamnet.

## Byt mellan världar

Om du redan har flera sparade världar på servern kan du byta mellan dem genom att ändra det aktiva `WorldIslandId`.

### Uppdatera målvärlden

Stoppa först servern via ZAP-Hostings webbgränssnitt.

Öppna sedan `ServerDescription.json` i **Konfigurationer** eller via **Filhanteraren** i rotkatalogen.

Hitta detta fält:

```json
"WorldIslandId": "PASTE_TARGET_WORLD_ID_HERE"
```

Byt ut värdet mot `IslandId` för den värld du vill ladda. Du hittar detta ID genom att öppna mål världens `WorldDescription.json`.

### Spara och starta om servern

Spara filen och starta servern igen. Windrose kommer nu att ladda den valda världen.

:::tip Kontrollera världens ID noggrant
Om `WorldIslandId` inte exakt matchar en befintlig världsmapp och dess `IslandId` kan servern misslyckas med att ladda rätt värld eller skapa en ny istället.
:::

## Skapa en ny värld

Vill du köra flera världssessioner på en server kan du skapa en ny värld manuellt.

### Skapa världsmappen

Stoppa servern först.

Öppna **Filhanteraren** och navigera till:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Skapa en ny mapp med ett unikt namn. Detta namn blir den nya världens `IslandId`.

Exempel:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/MySecondWorld
```

### Skapa världens beskrivningsfil

I den nya mappen, skapa en fil som heter `WorldDescription.json` och klistra in följande mall:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "YOUR_NEW_WORLD_ID",
    "WorldName": "My Second World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

Byt ut `YOUR_NEW_WORLD_ID` mot ditt valda värld-ID.

:::caution Matchande ID:n krävs
`IslandId` i `WorldDescription.json` måste vara identiskt med mappnamnet. Även små skillnader som versaler/gemener eller extra mellanslag kan förhindra att världen laddas korrekt.
:::

### Sätt den nya världen som aktiv

Öppna nu `ServerDescription.json` och uppdatera `WorldIslandId` så att det pekar på ditt nya värld-ID.

Exempel:

```json
"WorldIslandId": "MySecondWorld"
```

Spara filen och starta servern. Windrose kommer att generera den nya världen från början vid start.

## Säkerhetskopiera en värld

Innan du byter värld, raderar data eller testar nya inställningar bör du skapa en säkerhetskopia av din världssparning.

### Använd ZAP-Hostings säkerhetskopieringsfunktion

Stoppa servern först.

I panelens sidomeny, öppna **Säkerhetskopior** och skapa en ny backup. Detta är det säkraste sättet om du vill återställa hela serverns tillstånd senare.

### Ladda ner världsfilerna manuellt

Vill du bara ha en direkt kopia av spardata, öppna **Filhanteraren** och ladda ner hela `RocksDB/`-mappen med zip- eller nedladdningsfunktionen.

Relevant sökväg:

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| Säkerhetskopieringsmetod | Rekommenderad användning |
| --- | --- |
| Panelbackup | Bäst för fullständig serveråterställning |
| Manuell nedladdning av `RocksDB/` | Bäst för direkt arkivering av världssparningar |
| Båda metoderna | Bäst för viktiga världar eller före radering |

:::note Rekommendation för säkerhetskopiering
Om du hanterar flera världar ger både panelbackup och manuell kopia av `RocksDB/` dig mest flexibilitet vid återställning av en specifik värld senare.
:::

## Radera en värld

Vill du återställa en värld helt kan du ta bort dess sparmapp och låta servern generera en ny.

### Ta bort världssparningen

Stoppa servern.

Öppna **Filhanteraren** och navigera till:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Ta bort mappen för den värld du vill radera.

### Generera världen på nytt

Se till att `ServerDescription.json` fortfarande pekar på det raderade värld-ID:t via `WorldIslandId`.

När du startar servern igen kommer Windrose att upptäcka att världsmappen saknas och skapa en ny värld för det ID:t.

:::danger Kontrollera rätt mapp innan du raderar
Att ta bort fel världsmapp raderar permanent spardata för den världen om du inte har en backup. Dubbelkolla mappnamnet och `IslandId` innan du fortsätter.
:::

## Hantera världinställningar

Varje värld har sin egen `WorldDescription.json`, vilket betyder att du kan ha separata inställningar för olika världar på samma server.

### Exempel på världskonfiguration

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MySecondWorld",
    "WorldName": "My Second World",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### Viktiga värden

| Nyckel | Beskrivning |
| --- | --- |
| `Version` | Konfigurationsversion som används av filen |
| `IslandId` | Internt värld-ID, måste matcha mappnamnet |
| `WorldName` | Visningsnamn för världen |
| `WorldPresetType` | Förinställd typ för världsgenerering |
| `WorldSettings` | Ytterligare världsspecifika inställningar om stöds |

:::info Hantering av konfiguration i panelen
Windrose-konfigurationsfiler kan hanteras i din spelserverhantering under **Konfigurationer**. Om en fil inte finns där, använd **Filhanteraren** för att redigera den direkt.
:::

## Bästa praxis för att hantera flera världar

Att hantera flera världar på en server är användbart för testning, event eller separata spelargrupper. För att hålla ordning, följ dessa rekommendationer:

- Använd tydliga och unika värld-ID:n som `[your_pvp_world]` eller `[your_build_world]`
- Håll mappnamnet och `IslandId` exakt lika
- Skapa backup innan du byter eller raderar någon värld
- Undvik att ändra filer medan servern körs
- Dokumentera vilken `WorldIslandId` som hör till varje världnamn

Detta hjälper dig att undvika förvirring, särskilt om du har många världar över tid.

## Conclusion

Grattis, du har framgångsrikt hanterat Windrose-världar på din server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support, som finns tillgänglig dagligen för att hjälpa dig! 🙂