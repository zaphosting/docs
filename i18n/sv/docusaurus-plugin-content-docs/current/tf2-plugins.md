---
id: tf2-plugins
title: "Team Fortress 2: Installera plugins på din egen server"
description: "Upptäck hur du anpassar och förbättrar din spelserver med Sourcemod och Metamod-plugins för bättre hantering och funktioner → Lär dig mer nu"
sidebar_label: Installera Plugins
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/tf2-plugins.json';


## Introduktion

Lär dig hur du installerar Sourcemod och Metamod och hur du använder plugins för din server. Båda tilläggen låter dig anpassa spel som CS:S, CS:GO, DoD:S eller TF2 och utökar kraftigt de tillgängliga serverhanteringsmöjligheterna.

Med Sourcemod och Metamod kan du lägga till plugins, aktivera specialfunktioner och skräddarsy din server precis som du vill ha den.

<InlineVoucher />



## Installation av Sourcemod / Metamod

### Förberedelse

De nödvändiga tilläggen kan laddas ner från [Sourcemod](https://sourcemod.net/) och [Metamod](https://www.sourcemm.net/downloads.php?branch=stable). Använd alltid de senaste **stabila** versionerna för att säkerställa full funktionalitet och kompatibilitet.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Du behöver Linux-paketen **Sourcemod** och **Metamod**. Ladda ner dem från angiven källa. Efter nedladdning ska du ha två komprimerade filer. Packa upp dem på din dator för att få en addons-mapp som innehåller mapparna `sourcemod` och `metamod`.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Installation

När ovanstående steg är klara kan du fortsätta med installationen. Ladda upp filerna till din server via FTP med en FTP-klient. Om du är osäker på FTP och hur det fungerar, kolla in guiden: [Åtkomst via FTP](gameserver-ftpaccess.md)

Ladda sedan upp **addons**-mappen till serverns huvudkatalog. Mappstrukturen ska då se ut så här:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

Installationen av **Sourcemod** och **Metamod** är nu klar. Du kan ansluta till din server i spelet och använda kommandot ``sm version`` i konsolen för att kontrollera att Sourcemod och Metamod installerades korrekt. Utdatan ska se ut ungefär så här:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Om meddelandet **Unknown command** visas har något gått fel under installationen.



## Installation av plugins

### Förberedelse

När Sourcemod och Metamod är installerade och fungerar som de ska kan du börja lägga till plugins. Ladda ner de plugins du vill installera på din server från [Sourcemod](https://sourcemod.net/), där du hittar en stor och växande samling som publicerats under åren. För varje plugin, se till att du får motsvarande .smx-fil.

### Installation

När du har laddat ner de önskade pluginsen kan du fortsätta med installationen. Detta görs via FTP genom att ladda upp plugin-filerna till katalogen:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## Populära plugins
Letar du fortfarande efter de perfekta pluginsen till din server? Bläddra igenom vår noga utvalda lista med de mest populära och starkt rekommenderade pluginsen för att förbättra din spelupplevelse och ge din server den där sista touchen den förtjänar. Bli inspirerad och hitta precis de tillägg som passar ditt projekt.
<SearchableItemList items={items} />


## Slutsats

Om du följt alla steg bör du nu ha installerat Sourcemod/Metamod och dina önskade plugins utan problem. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />