---
id: factorio-becomeadmin
title: "Factorio: Bli Admin"
description: "Upptäck hur du ger administratörsrättigheter för full kontroll över din server och hantera spelalternativ effektivt → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att ge administratörsrättigheter för din server beskrivs nedan.  
<InlineVoucher />

## Konfiguration

Administratörsrättigheter låter dig göra ändringar direkt i spelet på din server utan att behöva ändra i Config. Att lägga till en admin görs via **server-settings.json**-configen, som du hittar i gränssnittet under Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

Längst ner i config-filen finns den viktiga delen. Admins definieras där:

```
  "_comment_admins": "List of case insensitive usernames, that will be promoted immediately",
  "admins": []
}
```

Namnen på spelarna som ska få administratörsrättigheter måste anges där. Om flera admins läggs till kan det till exempel se ut så här:

```
  "_comment_admins": "List of case insensitive usernames, that will be promoted immediately",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

Spelarna med namnen **PlayerName1, PlayerName2, PlayerName3** har nu fått rättigheterna. Admin-kommandon kan nu köras i spelet via konsolen. Nedan hittar du en översikt över vanliga kommandon.



### Vanliga kommandon

|                Kommando                 |                         Beskrivning                          |
| :------------------------------------: | :----------------------------------------------------------: |
|                 /admin                 |               Öppnar spelarhanterings-GUI:n.                 |
|           /ban player reason           |                          Banna spelare                        |
|                 /bans                  |               Visar en lista över bannade spelare.           |
|             /unban player              |                         Avbanna spelare                       |
|  /banlist add/remove/get/clear player  | Lägger till eller tar bort en spelare från banlistan. Samma som /ban eller /unban. |
|          /kick player reason           |                         Kicka spelare                         |
|              /mute player              |                         Muta spelare                          |
|             /unmute player             |                        Avmuta spelare                         |
| /whitelist add/remove/get/clear player |         Lägger till eller tar bort en spelare från whitelist  |

Fler tillgängliga kommandon hittar du i den officiella [Factorio Wiki](https://wiki.factorio.com/Console).


## Avslutning

Grattis, du har nu konfigurerat administratörsrättigheterna! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />