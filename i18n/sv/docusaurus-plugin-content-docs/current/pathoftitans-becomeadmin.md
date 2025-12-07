---
id: pathoftitans-becomeadmin
title: Bli admin
description: "Upptäck hur du tilldelar och hanterar administratörsrättigheter för full kontroll över din spelserver → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver göra för att tilldela adminrättigheter till din server beskrivs nedan.  
<InlineVoucher />

## Förberedelse

Konfigurationen av adminrättigheter görs via konfigurationsfilerna på din server. Gå till **Configs** i din spelserver-panel och öppna konfigurationsfilen Game.ini.



## Konfiguration

Under sektionen [/Script/PathOfTitans.IGameSession] måste Alderon Games ID (AGID) för admin anges. Inmatningen görs med `ServerAdmins=` följt av AGID. Vill du lägga till flera admins ska varje admin anges på en ny rad. Om du vill ge adminrättigheter till totalt tre spelare ser konfigurationen ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. Admin-post
ServerAdmins=XXX-XXX-XXX # 2. Admin-post
ServerAdmins=XXX-XXX-XXX # 3. Admin-post
```

Klicka på Spara och starta sedan om servern. Adminrättigheterna är nu aktiverade. När du har adminrättigheter kan du även utse andra spelare till admins via chattkommandon eller ta bort deras adminstatus. Dessa funktioner är tillgängliga så länge din server är aktiv. Mer info om kommandon hittar du i den officiella [GitHub Wiki](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools).


## Avslutning

Grattis, du har nu konfigurerat administratörsrättigheterna! Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />