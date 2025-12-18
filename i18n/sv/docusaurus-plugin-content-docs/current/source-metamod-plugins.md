---
id: source-metamod-plugins
title: Installera plugins
description: "Lär dig hur du hanterar och felsöker Sourcemod-plugins effektivt för bättre serverprestanda → Läs mer nu"
sidebar_label: Plugins
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Installera plugins

Här förklarar vi hur du installerar plugins. För att kunna använda plugins behöver du Sourcemod / Metamod. Instruktioner för hur du installerar det hittar du här: [Installation](source-metamod-installation.md)



För att installera plugins måste du ladda upp dem via FTP. Plugin-filerna ska laddas upp i **Plugins**-mappen under **../addons/sourcemod/**. Beroende på pluginets komplexitet kan det redan finnas konfigurations- och översättningsfiler tillgängliga. Om så är fallet måste dessa laddas upp i mapparna **configs** och **translations**.



## Inaktivera / ta bort plugins

I **Plugins**-mappen hittar du en undermapp som heter **disabled**. Där kan du lägga in plugins som du vill inaktivera temporärt. Det räcker att flytta motsvarande **.smx**-fil dit.



Vill du inaktivera ett plugin permanent måste du ta bort plugin-filerna. Pluginet stängs då av efter en kartbyte eller serveromstart.



## Vanliga problem


**Varför fungerar inte mitt installerade plugin?**

Lösningar:

- Se till att alla förutsättningar är uppfyllda vid plugin-installationen. Vissa plugins kräver en databas för att fungera korrekt. I så fall måste du göra ytterligare inställningar i **database.cfg** som finns i config-mappen.
- Source-motorn uppdateras regelbundet. Därför kan ett plugin som släpptes för länge sedan och inte underhållits längre vara inkompatibelt. Då är det enda alternativet att besöka Alliedmodders Forum för att hitta en oofficiell fixad version eller att använda ett alternativt plugin.
- Om inget av ovanstående funkar rekommenderar vi att du kollar i Live Console eller loggfilerna. Oftast hittar du orsaken till problemet där.

<InlineVoucher />