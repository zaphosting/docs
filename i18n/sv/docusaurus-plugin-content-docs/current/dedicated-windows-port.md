---
id: dedicated-windows-port
title: "Dedikerad Server: Hantera Windows Defender Firewall-regler"
description: "Upptäck hur du effektivt hanterar Windows Defender Firewall-regler och optimerar port forwarding för säker serverkommunikation → Lär dig mer nu"
sidebar_label: Port Forwarding (Firewall)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Windows OS har sin egen Windows Defender Firewall som hanterar inkommande och utgående trafik mellan servern och internet. I den här guiden går vi igenom hur du hanterar brandväggsregler och ger allmänna tips för port forwarding.

## Så här öppnar du Windows Defender Firewall

Windows OS inkluderar **Windows Defender Firewall med avancerad säkerhet** som en kärnapp i systemet, vilket gör det enkelt att hantera brandväggsregler på ett och samma ställe.

Du öppnar den enkelt genom att söka efter den i Windows sökfält eller genom att trycka på Windows-knappen/ikonen och använda startmenyns sökfält.

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## Hantera regler

De flesta applikationer och processer, särskilt sådana som måste vara åtkomliga över internet som spelservrar eller webbservrar, kräver port forwarding för att klienter ska kunna kommunicera med din server (hosten).

:::info
Som standard öppnar Windows bara brandväggen för applikationer som behöver det och håller alla andra portar stängda. Detta görs för att undvika onödig exponering av portar och minska risken. Det är också därför du kan få UAC-promptar när du startar spel för första gången, för att bekräfta en ny brandväggsregel.
:::

I Windows hanteras regler enkelt på två sätt; genom att skapa regler för program eller genom att skapa regler som täcker portar i allmänhet (och därmed alla program eller processer som använder dem).

Det finns två typer av regler:
- Inkommande regel: En regel som styr inkommande kommunikation (från internet till din server).
- Utgående regel: En regel som styr utgående kommunikation (från din server till internet).

Vanligtvis när du gör port forwarding behöver du skapa båda typerna av regler för att tillåta kommunikation med klienter. Men det beror på din specifika användning och setup.

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### Programregler

Att skapa en programregel är oftast det rekommenderade valet eftersom det begränsar kommunikationen till ett specifikt program eller process, istället för en hel port där vilket program/tjänst som helst kan kommunicera.

Nu ska du skapa två programregler, en utgående och en inkommande regel som båda tillåter anslutning.

I exemplet nedan ställer du bara in den **inkommande** regeln. Stegen är exakt samma, så du bör upprepa dem för att även skapa den utgående regeln själv.

Börja med att högerklicka på **Inbound Rules** i sidomenyn och välj **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

I första steget väljer du **Program** som regeltyp.

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

Nu måste du välja programmet du vill skapa port forwarding-regeln för, med hjälp av bläddringsknappen. I det här exemplet valdes Mozilla Firefox som exempelprogram.

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

I åtgärdssektionen väljer du **Allow the Connection**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

I profilssektionen låter du alla alternativ vara ikryssade och går vidare till sista steget. Här ska du ge regeln ett namn som du lätt kommer ihåg och kan lägga till en valfri beskrivning om du vill.

När du är klar trycker du på **Finish** för att skapa regeln.

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

Du har nu skapat din egen programregel för din Windows-server. Upprepa samma steg för att skapa en **Outbound Rule** under Outbound Rules-sektionen.

### Portregler

Att skapa en generell portregel kan också vara användbart i många fall och följer liknande steg som ovan.

Nu ska du skapa två portregler, en utgående och en inkommande regel som båda tillåter anslutning.

I exemplet nedan ställer du bara in den **inkommande** regeln. Stegen är exakt samma, så du bör upprepa dem för att även skapa den utgående regeln själv.

Börja med att högerklicka på **Inbound Rules** i sidomenyn och välj **New Rules...**.

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

I första steget väljer du **Port** som regeltyp.

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

Nu måste du definiera porttypen (TCP eller UDP) och vilka port(ar) du vill portforwarda. Om du behöver portforwarda både TCP och UDP måste du skapa två separata regler, en för varje porttyp.

I det här exemplet användes port 25565 (TCP) som är standardporten för Minecraft.

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

I åtgärdssektionen väljer du **Allow the Connection**.

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

I profilssektionen låter du alla alternativ vara ikryssade och går vidare till sista steget. Här ska du ge regeln ett namn som du lätt kommer ihåg och kan lägga till en valfri beskrivning om du vill.

När du är klar trycker du på **Finish** för att skapa regeln.

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

Du har nu skapat din egen portregel för din Windows-server. Upprepa samma steg för att skapa en **Outbound Rule** under Outbound Rules-sektionen.