---
id: vserver-vnc
title: "VPS: VNC (Virtual Network Computing) konsol"
description: "Upptäck hur du fjärrstyr och kontrollerar din server även under uppstart eller nätverksproblem för smidig hantering → Lär dig mer nu"
sidebar_label: VNC-konsol
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

VNC (Virtual Network Computing) är en mjukvara som visar skärminnehållet från en fjärrdator på din lokala dator och skickar tillbaka tangentbords- och musrörelser från din lokala dator till fjärrdatorn. Det gör att du kan komma åt din server på distans även om den inte startar upp eller fungerar som den ska.

Vid uppstarts- eller nätverksproblem har du fortfarande möjlighet att komma åt systemet och vidta åtgärder.

<InlineVoucher />


## Användning av VNC
VNC-webbklienten hittar du i VPS-dashboarden. Klicka på alternativet för seriell konsol under verktyg i administrationen och öppna sedan VNC-anslutningen via knappen **Starta VNC-tunnel**.

![](https://screensaver01.zap-hosting.com/index.php/s/AgSL8QcynHSfXFA/preview)



Därefter öppnas webbklienten för VNC-konsolen. Här kan du se den information som servern visar just nu. Det kan till exempel vara uppstartsprocessen, inloggningsskärmen eller operativsystemets GUI.

Exemplet nedan visar en Windows VPS. Denna server har startat upp framgångsrikt, så VNC-konsolen visar inloggningsskärmen i detta läge. Du kan logga in här även om servern saknar aktiv internetanslutning. Klicka på knappen "Skicka CtrlAltDel" och logga in med ditt användarnamn och lösenord.



![](https://screensaver01.zap-hosting.com/index.php/s/XTFS35AJBJaS86r/preview)

<InlineVoucher />