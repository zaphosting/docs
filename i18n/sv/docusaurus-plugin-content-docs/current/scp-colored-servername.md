---
id: scp-colored-servername
title: "SCP Secret Laboratory: Färgat Servernamn"
description: "Lär dig hur du anpassar ditt servernamn med färgad text för bättre synlighet och stil → Läs mer nu"
sidebar_label: Färgat Servernamn
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
För att visa din server i den offentliga serverlistan krävs det att du anger ett pastebin-ID. Du hittar vår guide [Pastebin ID](scp-pastebin.md).

Servern måste vara avstängd för att ändringarna ska träda i kraft.
:::

<InlineVoucher />

Öppna dina serverinställningar och kolla om 'SCP Servername' är tomt.

![](https://screensaver01.zap-hosting.com/index.php/s/Y9BXkJnBGXy3jWP/preview)

När du är säker på att det inte står något där, navigera till fliken 'Configs', som ligger en meny under inställningarna.

Öppna nu config_gameplay.txt genom att klicka på den blå knappen.

![](https://screensaver01.zap-hosting.com/index.php/s/FAm8KQfAonpTWp2/preview)

Vår Config-Editor är nu öppen, du kan ändra ditt servernamn med "server_name" och använda [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html) för att använda flera olika färger.

![](https://screensaver01.zap-hosting.com/index.php/s/jebLtwqZToWJ27C/preview)

I det här exemplet vill jag att "Green Text", "Blue Text" och "Red Text" ska visas i matchande färg.

För att göra det måste du använda taggen `<color="COLOR">Din Text</color>`. Du kan se alla tillgängliga färger [här](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/StyledText.html). Det går även att ändra andra attribut, som storlek.
:::info
Det är viktigt att komma ihåg att citattecken " " krävs runt själva färgen i taggen, precis som i exemplet ovan.
:::

När du är klar med din anpassning, spara ändringarna.

:::info
Starta din server, så kommer ditt servernamn nu att vara färgat.
:::

<InlineVoucher />