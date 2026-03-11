---
id: vintagestory-mods
title: "Vintage Story: Installera Mods"
description: "Lär dig hur du installerar mods på din Vintage Story-server för att lägga till nya funktioner och gameplay-mekanismer → Läs mer nu"
sidebar_label: Installera Mods
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Mods är en central del av Vintage Story-upplevelsen och låter serverägare utöka spelet med nya mekaniker, föremål, världsgenereringsfunktioner eller förbättringar för användarvänlighet. Att installera mods på din server säkerställer att alla spelare som är anslutna till servern kan dra nytta av samma gameplay-förbättringar.

Vintage Story erbjuder ett stort community-bibliotek med mods som sträcker sig från små tweaks till kompletta gameplay-översyner. Många av dessa mods finns på den officiella Vintage Story Mod Database eller community-forumen. 

<InlineVoucher />



## Förberedelser

Innan du installerar mods på din Vintage Story-server, se till att du har gjort följande:

- Ladda ner önskad mod från en pålitlig källa som Vintage Story Mod Database  
- Säkerställ att mod-versionen matchar din servers spelversion  
- Stoppa din server innan du laddar upp nya filer  

De flesta Vintage Story-mods distribueras som `.zip`-filer och ska inte packas upp innan installation.



## Installation

Vintage Story-servermods måste laddas upp direkt till serverns filsystem. Detta görs genom att ansluta till servern via [FTP](gameserver-ftpaccess.md). Anslut först till din server med en FTP-klient och logga in med dina FTP-uppgifter.

När du är ansluten, navigera till följande mapp:

```
/gxxxxxx/VintagestoryData/
```

Inuti denna mapp behöver du skapa två mappar om de inte redan finns:

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – innehåller alla installerade servermods  
- **ModConfigs** – lagrar konfigurationsfiler som skapats av installerade mods

Efter att ha skapat dessa mappar, ladda upp dina nedladdade modfiler till **Mods**-mappen. Exempel på struktur:

```
VintagestoryData
└── Mods
├── examplemod.zip
├── anothermod.zip
```

Vintage Story laddar automatiskt alla modfiler som ligger i denna mapp när servern startar. 



## Kontrollera installationen

När alla modfiler har laddats upp, gå tillbaka till din serverpanel och starta om servern. Under uppstart kommer servern att upptäcka mods i `Mods`-mappen och ladda dem automatiskt. Om modden kräver konfiguration kan den skapa en ny konfigurationsfil i `ModConfigs`-mappen efter första starten.

När servern har startat framgångsrikt, anslut till servern och kontrollera att modden är aktiv. Mods bör synas i serverloggarna under uppstart. Om en mod inte laddas, kontrollera följande:

- Att mod-versionen matchar serverns version  
- Att alla nödvändiga beroenden är installerade  
- Att `.zip`-filen ligger i rätt `Mods`-mapp  



## Avslutning

Grattis! Du har nu installerat mods på din Vintage Story-server. Mods låter dig utöka gameplay, introducera nya mekaniker och anpassa upplevelsen för din community.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />