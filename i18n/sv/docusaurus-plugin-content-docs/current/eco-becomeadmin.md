---
id: eco-becomeadmin
title: "ECO: Bli Admin"
description: "Lär dig hur du ger adminrättigheter för full kontroll över din server och smidig spelhantering → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela adminrättigheter ger dig enkel och komplett administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att ge adminrättigheter på din server beskrivs nedan.  
<InlineVoucher />

## Konfiguration
Att lägga till en admin görs via **Users.eco**-configen, som du hittar i gränssnittet under Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)



För att lägga till en ny spelare som admin måste följande del i **Users.eco**-configen justeras:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```



Spelaren som ska bli admin anges i fältet **values**. Vid flera admins läggs de till kommaseparerade. För att identifiera spelaren används SteamID64. 

Du hittar det genom att gå till din Steam-profil och högerklicka var som helst på profilen. Där kan du kopiera Steam-URL:en till din profil.

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)



Sedan klistrar du in URL:en på någon av följande sajter:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)



Där får du fram allmän kontoinformation samt Steam ID. Det Steam ID:t klistrar du sedan in under **values**. Resultatet ser ut så här:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"anotherSteamID"
	]
    }
  },
```



När servern startats om har spelarna som lagts till fått adminrättigheter. Vill du lägga till fler admins behöver du inte alltid göra det via configen längre. Det går även att göra direkt i spelet med följande kommando:

```
/admin [spelare]
```



Nedan hittar du en översikt över vanliga admin-kommandon som du kan använda som admin.



## Vanliga kommandon

|              Kommando              |                      Beskrivning                       |
| :--------------------------------: | :----------------------------------------------------: |
|             /allblocks             |                   Spawna alla block                    |
|          /allconstructed           |         Spawna alla spelarkonstruerbara block          |
|             /allplants             |                Spawna alla växtblock                   |
|             /allskills             |                   Lås upp alla skills                  |
|            /allterrain             |               Spawna alla grävbara block               |
|          /allworldobjects          |                Spawna alla världens objekt             |
|      /kick [spelare],(orsak)       |                      Kicka en användare                |
|       /ban [spelare],(orsak)       |                      Banna en användare                |
|     /give [itemnamn],(antal)       |                 Ge dig själv ett föremål                |
| /giveskillpoints [spelare],(antal) |           Ge skillpoints till en annan spelare          |
|                /fly                |                    Växla flygläge                       |
|         /move [x],[y],[z]          | Flytta dig till position x, y, z; där xyz är heltal.   |
|       /removeadmin [spelare]       |               Ta bort en användare som admin            |

Fler kommandon hittar du i den officiella [ECO Wiki](https://eco.gamepedia.com/Chat_Commands).

## Avslutning

Grattis, du har nu konfigurerat adminrättigheterna! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />