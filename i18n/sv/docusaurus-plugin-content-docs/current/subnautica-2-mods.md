---
id: subnautica-2-mods
title: "Subnautica 2: Installera Mods"
description: "Lär dig hur du installerar Subnautica 2 mods på din spelserver genom att lägga till Lua- eller C++-mods i rätt mapp, så att din Subnautica-server laddar dem automatiskt vid start. -> Läs mer nu"
sidebar_label: "Installera Mods"
services:
 - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Mods låter dig anpassa och förbättra din Subnautica 2-serverupplevelse genom att lägga till nya spelmekanismer, förbättra funktioner eller introducera nytt innehåll. Med mods kan du skapa en mer varierad och engagerande miljö för dig och dina spelare. Den här guiden visar hur du installerar Subnautica 2 mods på din ZAP-Hosting spelserver genom att ladda upp stödjade Lua- eller C++-mods till rätt mapp så att de laddas automatiskt när servern startar.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Innan du börjar behöver du tillgång till dina Subnautica 2 spelserverfiler via ZAP-Hostings webbgränssnitt eller en tillgänglig filhanteringsmetod.

:::info Krävd Modtyp
Endast Lua- eller C++-mods som är designade för Subnautica 2 bör användas. Om en mod är gjord för ett annat spel, som Subnautica 1 eller Subnautica Below Zero, kan kompatibilitet inte garanteras.
:::

:::note Nedladdningskällor för Mods
Subnautica 2 mods kan till exempel hämtas från communityplattformar som [Nexus Mods](https://www.nexusmods.com/games/subnautica2). Eftersom tredjepartsmod-sidor kan ändras när som helst bör du alltid läsa modbeskrivningen och installationsanvisningarna innan du laddar upp filer.
:::

## Download Compatible Mods

Börja med att ladda ner de mods du vill använda på din server. Se till att modden är specifikt avsedd för **Subnautica 2** och kontrollera om skaparen anger några extra krav.

### Kontrollera Moddens Innehåll

Efter att ha laddat ner en mod-arkiv, packa upp den på din lokala dator och granska de inkluderade filerna.

Vanliga saker att leta efter:

- Lua-skriptfiler
- C++ modfiler
- en mappstruktur som tillhandahålls av modskaparen
- en `README`, installationsanteckning eller beroendelista

:::caution Kontrollera Kompatibilitet
Inte alla mods för spel är kompatibla med servern. Vissa mods är endast gjorda för klienten och fungerar kanske inte på en dedikerad Subnautica 2 spelserver. Om modskaparen inte nämner serversupport bör du testa noggrant innan du använder den i produktion.
:::

## Access Your Gameserver Files

Öppna sedan filsystemet för din Subnautica 2 spelserver och hitta huvudserverkatalogen.

Om du använder ZAP-Hostings webbgränssnitt, öppna filhanteraren för din spelserver och navigera till rotkatalogen för serverinstallationen.

### Hitta Mods-mappen

Inuti huvudkatalogen för spelservern, leta upp mappen `mods`.

Installationsmålet är:

```text
[main_gameserver_directory]/mods
```

Byt ut `[main_gameserver_directory]` mot basmappen för dina Subnautica 2 serverfiler.

:::info Automatisk Modladdning
Servern kontrollerar `mods`-mappen vid start. Om en stödjad Lua- eller C++-mod placeras där korrekt kommer den att laddas automatiskt vid nästa serverstart.
:::

## Upload and Install Mods

När du har rätt modfiler och har öppnat `mods`-mappen kan du ladda upp modden.

### Kopiera Modfilerna

Ladda upp eller flytta de uppackade Lua- eller C++-modfilerna till `mods`-mappen i din huvudkatalog för spelservern.

Beroende på modden kan detta innebära:

- att ladda upp en enskild fil direkt till `mods`
- att ladda upp en komplett mod-mapp till `mods`
- att behålla mappstrukturen exakt som modskaparen tillhandahåller

### Behåll Originalstrukturen

Om den nedladdade arkiven redan innehåller en mod-mapp, ändra inte de interna filerna om inte skaparen uttryckligen instruerar dig att göra det.

| Objekt | Vad du ska göra |
| --- | --- |
| Enskild Lua modfil | Ladda upp den till `mods`-mappen |
| Enskild C++ modfil | Ladda upp den till `mods`-mappen |
| Mappbaserad mod | Ladda upp hela mappen till `mods`-mappen |
| Arkivfil som `.zip` | Packa upp den först, ladda sedan upp innehållet om det krävs |

:::caution Ladda inte upp komprimerade arkiv om det inte uttryckligen stöds
Om du bara laddar upp en `.zip` eller annat arkiv utan att packa upp det kan servern missa modden. Om inte modskaparen säger något annat, ladda upp de uppackade filerna eller mapparna.
:::

## Restart the Server

Efter att du laddat upp mods, starta om din Subnautica 2 spelserver.

Detta krävs eftersom servern laddar mods vid start. Om servern redan körs kommer nyligen uppladdade filer vanligtvis inte att tillämpas förrän nästa start.

### Bekräfta Modladdningen

Efter omstart, kontrollera om modden är aktiv i spelet eller via loggar eller annan tillgänglig serverutdata.

Eftersom modbeteende kan variera kan bekräftelsen inkludera:

- ändrat spelbeteende
- nya kommandon eller funktioner
- synliga loggposter från modden
- lyckad serverstart utan fel

:::tip Installera Mods En i Taget
Om du vill använda flera mods, installera och testa dem en i taget. Det gör det mycket enklare att identifiera vilken mod som orsakar problem om servern inte startar korrekt.
:::

## Troubleshooting

Om dina Subnautica 2 mods inte fungerar finns det flera vanliga orsaker du bör kontrollera.

### Vanliga Problem

| Problem | Möjlig orsak | Lösning |
| --- | --- | --- |
| Modden laddas inte | Filerna laddades upp till fel katalog | Kontrollera att filerna ligger i `mods`-mappen i huvudkatalogen för spelservern |
| Servern startar men modden har ingen effekt | Modden är endast för klienten eller inkompatibel | Granska moddens sida och bekräfta stöd för dedikerad server |
| Servern startar inte | Trasiga modfiler eller versionskonflikt | Ta bort den senast installerade modden och starta om servern |
| Moddfiler finns men ignoreras | Arkiv laddades upp istället för uppackade filer | Packa upp nedladdningen och ladda upp de faktiska modfilerna |
| Flera mods krockar | Två mods ändrar samma funktion | Testa varje mod separat och behåll bara kompatibla kombinationer |

### Ta Bort en Problemmod

Om en nyligen installerad mod orsakar problem, ta bort motsvarande fil eller modmapp från `mods`-katalogen och starta om servern igen.

```text
[main_gameserver_directory]/mods
```

:::danger Använd Endast Pålitliga Modkällor
Ladda bara ner mods från källor du litar på. Tredjepartsfiler kan innehålla trasigt, föråldrat eller skadligt innehåll. Granska moddens sida noggrant och undvik okända nedladdningar som inte ger tydlig installations- eller kompatibilitetsinformation.
:::

## Best Practices

För att hålla din server stabil bör du hantera mods försiktigt istället för att installera många på en gång.

### Rekommenderad Arbetsgång

1. Ladda ner en kompatibel Subnautica 2 mod.
2. Packa upp filerna lokalt.
3. Ladda upp filerna eller mappen till serverns `mods`-katalog.
4. Starta om servern.
5. Testa funktionaliteten.
6. Upprepa för nästa mod.

### Behåll en Lokal Backup

Innan du ändrar din aktiva moduppsättning, spara en backup av:

- dina nuvarande modfiler
- eventuella relaterade konfigurationsfiler
- en lista över installerade mods och deras versioner

Det hjälper dig att snabbt återställa en fungerande setup om en ny mod orsakar problem.

## Conclusion

Grattis, du har installerat mods på din Subnautica 2 spelserver. För fler frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂