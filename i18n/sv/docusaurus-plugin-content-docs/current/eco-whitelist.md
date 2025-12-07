---
id: eco-whitelist
title: "ECO: Aktivera Whitelist"
description: "Lär dig hur du skyddar din server genom att hantera spelartillgång med ECO:s whitelist-funktion → Läs mer nu"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

ECO:s whitelist låter dig skydda din server genom att endast tillåta utvalda spelare på listan att ansluta till servern.

<InlineVoucher />

### Aktivering (Konfiguration)

Aktiveringen av whitelist sker automatiskt. Den blir aktiv så fort minst en spelare har lagts till på listan. Spelarna måste läggas till i **Users.eco** konfigurationsfilen. 

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



Fältet **$values** innehåller SteamID:n för de spelare som ska läggas till på whitelist. Du hittar dem genom att först öppna din Steam-profil och sedan högerklicka någonstans i den. Där kan du kopiera Steam-URL:en för profilen. 



![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)


Öppna sedan någon av följande sidor och klistra in URL:en till din profil där: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/


![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

Detta ger dig allmän information samt Steam ID för ditt konto. Här behöver vi bara SteamID64. SteamID64 ska sedan sättas in i **$values**. Det kommer se ut så här:

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "ytterligareSteamID"      
      ]
    }
```



### Aktivering (Chat)

Alternativt går det också att lägga till fler spelare i whitelist med administratörsrättigheter i spelet. Att lägga till spelare i whitelist görs via chatten/konsolen med följande kommando:

```
/whitelist [spelare]
```



## Hantera Whitelist

Hantera whitelist kan endast göras i **Users.eco** konfigurationsfilen, eftersom det inte finns något serverkommando för att ta bort en spelare från whitelist. Vill du ta bort en spelare behöver du helt enkelt ta bort hen från konfigurationsfilen. En omstart av servern krävs också för att ändringen ska träda i kraft. 

<InlineVoucher />