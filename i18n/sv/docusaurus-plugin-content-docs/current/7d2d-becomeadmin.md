---
id: 7d2d-becomeadmin
title: "7 Days to Die: Så blir du admin för 7 Days to Die"
description: "Upptäck hur du tilldelar och hanterar administratörsrättigheter för full kontroll över din server och skräddarsydda adminroller → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att tilldela adminrättigheter till din server beskrivs nedan.  
<InlineVoucher />

## Konfiguration
Att lägga till en admin görs via **serveradmin.xml**-konfigurationen, som du hittar i webbgränssnittet under Konfigurationer.

![](https://screensaver01.zap-hosting.com/index.php/s/wXpLL2qyZE2zCYa/preview)

Du hittar ditt SteamID64 genom att gå till din Steam-profil och högerklicka var som helst i den. Där klickar du sedan på **Kopiera Steam-URL**. 

![](https://screensaver01.zap-hosting.com/index.php/s/Q9WJ8GwbHCmTRPx/preview)

Öppna sedan någon av följande sidor och klistra in URL:en till din profil där: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

Dessa ger dig allmän info samt Steam ID för ditt konto. Här behöver vi bara SteamID64. SteamID64 anges sedan under ``<admins>...</admins>``. Det ser ut så här:

```
 <users>
    <user steamID="76561198021925107" name="Tips på vem denna användare är" permission_level="0" />
  </users>
```

:::danger  Adminposten känns inte igen? 
Se till att ta bort kommentartecknen `<!--` och `-->` för att göra raden giltig. Annars är raden bara en kommentar och tillämpas inte. Ta helt enkelt bort tecknen i början och slutet av raden för att aktivera den.
:::

Spelet erbjuder möjligheten att definiera olika behörighetsnivåer för adminrättigheterna. Det betyder att du kan skapa olika admingrupper med olika rättigheter. Nivån definieras av ``permission_level``-inställningen. Den kan sättas från 0 till 1000. Beroende på hur detta konfigureras får administratörerna tillgång till de tilldelade rättigheterna. När detta är gjort har adminrättigheterna tilldelats framgångsrikt. 



## Rättigheter

Rättigheterna för alla admin-kommandon definieras under ``permissions``. För detta måste ``permission_level`` justeras, precis som när du lägger till administratörer. Det ser ut så här:

```
<permissions>
	<permission cmd="dm" permission_level="0" ></permission>
	<permission cmd="kick" permission_level="1" ></permission>
	<permission cmd="say" permission_level="1000" ></permission>
    <permission cmd="chunkcache" permission_level="1000" ></permission>
    <permission cmd="debugshot" permission_level="1000" ></permission>
    <permission cmd="debugweather" permission_level="1000" ></permission>
    <permission cmd="getgamepref" permission_level="1000" ></permission>
</permissions>
```

En behörighetsnivå är ett värde mellan 0 och 1000 och avgör vilka rättigheter en spelare har. 1000 är lägst (inga rättigheter) och 0 är högst (fulla adminrättigheter). Beroende på hur rättigheterna ska vara måste detta justeras därefter. 


## Avslutning

Grattis, du har nu konfigurerat adminrättigheterna! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />