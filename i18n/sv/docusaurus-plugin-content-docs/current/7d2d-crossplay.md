---
id: 7d2d-crossplay
title: "7 Days to Die: Aktivera Crossplay för Console- och PC-spelare"
description: "Lär dig hur du konfigurerar din 7 Days to Die-server för att stödja crossplay mellan PC och konsolspelare → Läs mer nu"
sidebar_label: Aktivera Crossplay
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Med de nyare versionerna av **7 Days to Die** kan crossplay låta spelare från **PC och stödda konsolplattformar** ansluta till samma server. Det gör att communityn kan spela tillsammans oavsett vilken plattform de använder.

För att göra crossplay möjligt måste vissa inställningar konfigureras på servern. Dessa inställningar säkerställer att servern är kompatibel med konsolanslutningar och korrekt registrerad via Epic Online Services.

<InlineVoucher />



## Konfiguration

Crossplay-konfigurationen finns i filen `serverconfig-zap.xml`. För att redigera den, öppna din **gameserver-administration** och gå till **Configs**. Leta upp och öppna konfigurationsfilen `serverconfig-zap.xml`.

Inuti filen, se till att följande värden är korrekt inställda:

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

Dessa parametrar krävs för crossplay-kompatibilitet. `ServerMaxPlayerCount` får inte överstiga **8 spelare**, eftersom konsol-crossplay för närvarande stödjer max åtta deltagare. `ServerAllowCrossplay` måste vara aktiverad för att konsolspelare ska kunna ansluta till servern.

Dessutom måste `EACEnabled` vara påslaget eftersom crossplay förlitar sig på **Epic Online Services och Easy Anti-Cheat** för autentisering och matchmaking. Värdet `IgnoreEOSSanctions` måste vara satt till `false` så att EOS-begränsningar följs korrekt för cross-platform-sessioner.

Efter att du ändrat inställningarna, spara filen och **starta om din server** så att de nya inställningarna träder i kraft.



## Viktiga noteringar

Crossplay kräver att alla spelare kör en kompatibel spelversion. Servrar med icke-stödda mods eller kraftigt anpassade konfigurationer kan hindra konsolspelare från att ansluta. Om konsolspelare inte kan hitta eller gå med i servern, kontrollera att crossplay-inställningarna är korrekta och att servern kör den senaste stödda versionen.



## Slutsats

Grattis! Du har nu framgångsrikt konfigurerat din **7 Days to Die-server för crossplay**, vilket gör att både PC- och konsolspelare kan spela tillsammans i samma värld. Med rätt serverinställningar på plats kan din community spela ihop över olika plattformar.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />