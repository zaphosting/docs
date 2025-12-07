---
id: minecraft-addop
title: "Minecraft: Ge OP-rättigheter på servern"
description: "Lär dig hur du ger OP-rättigheter till spelare och hanterar serverbehörigheter effektivt för bättre kontroll → Läs mer nu"
sidebar_label: OP-Rättigheter
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Ge OP-rättigheter

För att kunna ge OP-rättigheter till dig själv eller andra spelare måste du först öppna konsolen, såvida ingen annan spelare redan har tillräckliga OP-rättigheter för att göra det direkt i spelet.

För att öppna konsolen måste du först gå in på servern via **Dashboard**. I serverns gränssnitt hittar du "Live Console" i listan till vänster under fliken "INFORMATION".

![](https://screensaver01.zap-hosting.com/index.php/s/PAaZQPXF75aW4Bi/preview)

Nu bör du se ett mörkt fönster som visar serverns konsol. Under det finns ett inmatningsfält där du kan skriva kommandon som skickas till konsolen. För att ge OP-rättigheter skriver du kommandot "op player" (utan "/") i inmatningsfältet och klickar sedan på den gröna knappen "Send command" för att skicka kommandot till konsolen.

![](https://screensaver01.zap-hosting.com/index.php/s/myba237CL5XMfKi/preview)

Efter några sekunder bör kommandot synas i konsolen, följt av meddelandet "Made player a server operator", vilket betyder att det lyckades. Nu har den spelaren alla OP-rättigheter och kan till exempel ändra spelläge.

:::info
Att ge OP-rättigheter går numera även att göra direkt i spelet, så du bör justera rättighetsnivån som förklaras i nästa steg om du vill.
:::

## Rättighetsnivåer

OP-rättigheterna är uppdelade i fyra nivåer, där nivå 4 alltid är standard. Varje nivå innehåller olika rättigheter, så att du kan dela upp behörigheterna efter spelare. Här är vad varje nivå ger:

| Nivå | Beskrivning | Rättigheter |
| :-----: |:-------------:| :-----:|
| 1 | Moderator | Kan göra ändringar inom det skyddade spawn-området. |
| 2 | Gamemaster | Kan sätta och redigera kommandoblock samt använda olika fusk-kommandon (t.ex.: /gamemode). |
| 3 | Admin | Kan kicka och banna spelare samt använda andra kommandon för serveradministration. Kan även utse fler operatörer. |
| 4 | Ägare | Inga begränsningar alls. |

:::info
Genom att installera ett permissions-plugin som LuckPerms på din Bukkit/Spigot-server kan du styra rättigheter mycket mer detaljerat. Du kan också skapa flera grupper, vilket gör rättighetsfördelningen enklare.
:::

## Ändra rättighetsnivå

För att ändra en spelares nivå måste hen först ha blivit utsedd till operatör, som förklarat under "Ge OP-rättigheter". För att ändra nivån måste filen "ops.json" redigeras via FTP.

När du kopplat upp dig mot servern via FTP, navigera till serverns mapp. I FileZilla högerklickar du på filen och väljer "View/Edit" i menyn som dyker upp.

![](https://screensaver01.zap-hosting.com/index.php/s/TTeL8WqnQfrdEDq/preview)

Nu ändrar du värdet på "level" till önskad nivå för den spelaren och sparar filen med **CTRL+S**.

![](https://screensaver01.zap-hosting.com/index.php/s/WKQkAR3oALsSNAc/preview)

För att ändringarna ska börja gälla måste servern startas om, vilket du gör genom att hålla in den röda Stop-knappen i servergränssnittet.

<InlineVoucher />