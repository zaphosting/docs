---
id: arma3-serverconfig
title: "Arma 3: Redigera serverns konfigurationsfil"
description: "Upptäck hur du anpassar dina Arma 3-serverinställningar för bästa gameplay och prestanda → Lär dig mer nu"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Server.cfg-parametrar och konfiguration

Server.cfg för Arma 3 krävs för att någon Arma 3-server ska fungera och erbjuder en mängd möjligheter att konfigurera din Arma 3-server helt efter dina önskemål.

Server.cfg redigeras antingen direkt via FTP på en förinstallerad gameserver eller VPS.  
På en gameserver finns även menyalternativet Configs till vänster i servergränssnittet, där du med några klick kan redigera Server.cfg.

<InlineVoucher />

## Redigera Server.cfg via ZAP-editorn

För att redigera server.cfg på din Arma 3-server i ZAP-editorn klickar du först på din server i gränssnittet och väljer sedan "Configs" i menyn till vänster under "Inställningar".

![](https://puu.sh/Fo5i6/183ee65ef3.png)

Där ser du en lista på tillgängliga konfigurationsfiler för Arma 3, vi redigerar bara Server.cfg nu.  
Klicka på den blå knappen "Open file" för att öppna filen i ZAP-editorn.

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)

Här kan du konfigurera din Arma 3-server helt efter dina önskemål, inklusive servernamn och antal slots. Justera inställningarna som du vill och klicka sedan på "Save".

![](https://puu.sh/Fk7I1/407a039e38.png)

När du anger servernamnet, se till att omge namnet med citationstecken, annars kan inte servern läsa det. Det är också viktigt att avsluta varje rad med semikolon (;), annars kan inte servern läsa efterföljande inställningar. Ett undantag är alternativet "motd[]", där varje rad ska avslutas med ett kommatecken, förutom den sista raden där det ska utelämnas.

## Rätt:

Här är citationstecken, semikolon och kommatecken korrekt satta.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)

## Fel:

Här saknas citationstecken, semikolon och kommatecken, och servern skulle inte starta så här.

![](https://puu.sh/Fk7NK/f96a31199d.png)

## Redigera Server.cfg via FTP

Istället för ZAP-editorn kan du också redigera Server.cfg direkt via FTP. I det här exemplet använder vi **FileZilla** för att skapa en FTP-anslutning till din gameserver och dess mappar.

Här lär du dig hur du ansluter till din gameserver via FTP: [Access via FTP](gameserver-ftpaccess.md).

## Skapa anslutning och navigera till server.cfg:s sökväg

:::info
Se till att din gameserver är stoppad medan du jobbar med den via FTP.
:::

När du har anslutit till din gameserver via FTP som beskrivet ovan, navigerar du i FileZilla i det nedre högra fönstret till mappen där server.cfg ligger, som du hittar under: **/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
Namnet på den första mappen (g198376) är ID:t för din server, så du kan hålla mapparna isär om du har flera gameservrar.
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

I den här mappen hittar du Server.cfg för din Arma 3-server samt andra konfigurationsfiler.  
Högerklicka på server.cfg och välj **View/Edit**.

![](https://puu.sh/Fo5fM/f3519a8936.png)

En standardredigerare öppnas där du kan redigera din Server.cfg som beskrivet ovan.  
När du är klar sparar du med **CTRL+S** och stänger editorn.  
Din server är nu redo att startas om.

<InlineVoucher />