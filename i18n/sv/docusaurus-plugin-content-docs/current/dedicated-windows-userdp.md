---
id: dedicated-windows-userdp
title: "Dedikerad Server: Anslut till Windows Server via Remote Desktop (RDP)"
description: "Upptäck hur du enkelt ansluter till din Windows-server på distans med RDP och får säker åtkomst från olika enheter → Lär dig mer nu"
sidebar_label: Första åtkomst (RDP)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Windows OS använder Remote Desktop (RDP)-protokollet för att enkelt möjliggöra fjärranslutning till andra Windows-system. I den här guiden går vi igenom den enkla anslutningsprocessen via RDP till din Windows-server.





## Ansluta via Windows

Sedan RDP lanserades har Windows OS haft appen **Remote Desktop Connection** installerad som en kärnapp i systemet. Du kan enkelt öppna den genom att söka efter den i Windows sökfält eller genom att trycka på Windows-knappen/ikonen och använda startmenyns sökfält.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

I det nya fönstret fyller du i fältet **Dator** med din servers IP-adress och trycker på **Anslut**. Du bör nu se en Windows-inbyggd inloggningsruta där du anger **Användarnamn** som `Administrator` och **Lösenordet** som är lösenordet till din Windows-server.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Tryck nu på **OK** så ska du kunna fjärransluta till din Windows-server. Om du stöter på problem, dubbelkolla att du har angett rätt inloggningsuppgifter.

:::info
Du kan få upp ett certifikatfel första gången du ansluter. Det är helt normalt och kan tryggt ignoreras.
:::

Du har nu lyckats ansluta till din Windows Server.

## Andra Remote Desktop (RDP)-appar

### Desktop-appar

Följande program är grymma alternativ som funkar bra för att ansluta till din Windows-server via Remote Desktop-protokollet (RDP). Vi rekommenderar starkt att använda den inbyggda appen om du ansluter från Windows (som i föregående steg) eftersom det minskar krångel och fungerar smidigt.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Mobilappar

Numera erbjuder Microsoft en officiell Remote Desktop (RDP)-app för båda stora mobila operativsystem. Vi rekommenderar att använda dessa på mobilen då de har massor av smarta funktioner.

Appen hittar du här för respektive plattform: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) och [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)