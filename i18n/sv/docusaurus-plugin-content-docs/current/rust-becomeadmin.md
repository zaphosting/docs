---
id: rust-becomeadmin
title: "Rust: Bli admin på din egen server"
description: "Upptäck hur du ger administratörsrättigheter för full kontroll över din server och hantera ditt spel effektivt → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och komplett administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver följa för att ge administratörsrättigheter på din server beskrivs nedan.  
<InlineVoucher />

## Använd RCON för att bli admin

Med RCON kan du köra ett kommando direkt för att göra dig själv till admin.  
Först måste du [ansluta via RCON](rust-connectrcon.md).

När du är ansluten, navigera till där du kan köra konsolkommandon. I vårt exempel använder vi RustAdmin.

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

Här kör du kommandot:  
`ownerid Steam64ID`

:::info
Byt ut **Steam64ID** mot ditt riktiga Steam64ID. Du kan hitta ditt Steam64ID med det här [verktyget](https://steamid.io/)
:::

Då blir du direkt admin.

:::info
Om du är inne i spelet när du kör kommandot, logga bara ut och in på servern igen.
:::

Nu är du admin! :)

## Använd FTP för att bli admin

Alternativt kan du ge dig själv admin direkt via FTP.  
Först måste du ansluta med [FTP-åtkomst](gameserver-ftpaccess.md).

När du är ansluten navigerar du till följande mapp:

`/g#####/rust/server/<your_server_save>/cfg`

I den här mappen behöver du **skapa** en **ny fil** som du döper till **users.cfg**

I den filen lägger du till dina poster med formatet:

`<roll> <Steam64ID> <anledning/användare>`

:::info
Byt ut **Steam64ID** mot ditt riktiga Steam64ID. Du kan hitta ditt Steam64ID med det här [verktyget](https://steamid.io/)
:::

Ett exempel på en post:

```
ownerid 76561198114248380 "Du kan skriva vad som helst här som referens"
moderatorid 76561198114248380 "Testperson"
```
:::info
Du måste starta om servern för att ändringarna ska träda i kraft.
:::

## Avslutning

Grattis, du har nu konfigurerat administratörsrättigheterna! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />