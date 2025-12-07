---
id: vserver-windows-userdp
title: "VPS: Så ansluter du till Windows Server via Remote Desktop (RDP)"
description: "Lär dig hur du säkert ansluter till din Windows-server på distans med RDP och enkelt hanterar åtkomst → Läs mer nu"
sidebar_label: Första åtkomst (RDP)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Windows OS använder Remote Desktop (RDP)-protokollet för att enkelt möjliggöra fjärranslutning till andra Windows-system. I den här guiden går vi igenom den enkla anslutningsprocessen via RDP till din Windows-server.

<InlineVoucher />

## Förbered anslutningsuppgifter

Oavsett vilken app du använder för att ansluta till Windows-servern kommer du alltid behöva ange inloggningsuppgifter för att koppla upp dig mot servern.

Börja med att gå till din servers webbpanel och navigera till sektionen **Access & Security**. På den här sidan kan du se all nödvändig info, främst serverns **IP-adress** och användaruppgifter för anslutning. Dina användaruppgifter består av fältet **Username** som ska vara `Administrator` och fältet **Password**.

Om din server är ny kan du hitta ditt initialt slumpgenererade lösenord på den här sidan via en prompt. Annars är lösenordet dolt av säkerhetsskäl, men om du glömmer det kan du enkelt generera eller sätta ett nytt på samma sida.

![](https://screensaver01.zap-hosting.com/index.php/s/amLy6sC6XzBN5fQ/preview)

När du har dina anslutningsuppgifter redo, gå vidare till nästa avsnitt för att välja en passande app för att ansluta.

## Ansluta via Windows

Sedan RDP introducerades har Windows OS haft appen **Remote Desktop Connection** förinstallerad som en kärnapp. Du hittar den enkelt genom att söka efter den i Windows sökfält eller genom att trycka på Windows-knappen/ikonen och använda startmenyns sökfält.

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

I det nya fönstret fyller du i fältet **Computer** med din servers IP-adress och klickar på **Connect**. Nu bör en Windows-inloggningsprompt visas där du anger **Username** som `Administrator` och **Password** som är lösenordet till din Windows-server.

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

Tryck sedan på **OK** så ska du kunna fjärransluta till din Windows-server. Om du stöter på problem, dubbelkolla att du skrivit in rätt inloggningsuppgifter.

:::info
Du kan få upp ett certifikatfel första gången du ansluter. Det är helt normalt och kan tryggt ignoreras.
:::

Du har nu lyckats ansluta till din Windows Server.

## Andra appar för fjärranslutning (RDP)

### Desktop-appar

Följande program är grymma alternativ som funkar bra för att ansluta till din Windows-server via Remote Desktop-protokollet (RDP). Vi rekommenderar starkt att använda den inbyggda appen om du ansluter från Windows (som i föregående steg) eftersom det är smidigt och stabilt.

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### Appar för mobila enheter

Numera erbjuder Microsoft en officiell Remote Desktop (RDP)-app för båda stora mobila operativsystem. Vi rekommenderar att använda dessa på mobilen då de har massor av användbara funktioner.

Appen hittar du här för respektive plattform: [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) och [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />