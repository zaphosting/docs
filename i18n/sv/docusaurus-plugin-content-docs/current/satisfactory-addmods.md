---
id: satisfactory-addmods
title: "Satisfactory: Installera Mods"
description: "Upptäck hur du säkert hanterar och installerar mods för Satisfactory-servrar samtidigt som du skyddar ditt sparande → Läs mer nu"
sidebar_label: Installera Mods
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::danger
**VIKTIGT**

Mods fungerar för tillfället inte!
:::

:::info
**VARNING**

Mods är **inte officiellt** stödda av utvecklarna, men de tolereras!

I värsta fall kan installation av mods förstöra sparfilen, göra den temporärt ospelbar efter en uppdatering eller till och med radera den!

En backup bör alltid skapas **innan** du installerar mods och det är smart att göra regelbundna backuper för säkerhets skull!
:::

<InlineVoucher />

## Installera Moddad Satisfactory på servern

För att kunna installera mods på din server måste du först beställa en Moddad Satisfactory-server: https://zap-hosting.com/en/satisfactory-server-hosting/
Om du redan hyr en Satisfactory-server kan spelet bytas när som helst tack vare molnsystemet, som beskrivs i [Byt spel](gameserver-gameswitch.md).

## Installera Mod-Manager

Verktyget "SatisfactoryModManager" gör administration och installation av mods superenkelt och går att göra med bara några klick.
Verktyget finns för Windows och Linux och kan laddas ner här: https://github.com/satisfactorymodding/SatisfactoryModManager/releases

Alla versioner finns listade på sidan; som regel bör du alltid använda den senaste versionen, alltså första posten från toppen.
Verktyget laddas ner under "Assets". Beroende på vilket operativsystem (Windows eller Linux) du använder klickar du på rätt fil, som antingen startar nedladdningen automatiskt eller så måste du bekräfta den beroende på din webbläsare eller inställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

När nedladdningen är klar, kör filen och installera mod-managern på din dator, välj de alternativ som passar dig under installationen.

## Installera Mods

Samma mods måste installeras 1:1 på klienten (av alla spelare!) och på servern för att anslutningen ska fungera och för att undvika krascher.
I första steget kompileras och installeras mods på klienten så att de sedan kan överföras till servern.

:::info
**OBS**

Alla mods är inte kompatibla med multiplayer!

Om en mod är kompatibel med multiplayer står det oftast i modbeskrivningen.

Obs: Även om det står att modden är kompatibel med multiplayer är det ingen garanti!
:::

### Klient

Mods sparas i profiler så att du till exempel kan testa andra mods i en testvärld och enkelt byta tillbaka till dina vanliga mods med ett klick.
Välj först en profil eller skapa en ny som på bilden.

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

Ställ sedan in filtret på "Compatible" så visas bara mods som är kompatibla med den aktuella versionen.

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

Mods kan nu installeras enkelt genom att klicka på nedladdningsikonen, förutsatt att modden är kompatibel med multiplayer som beskrivet ovan.

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### Server

När alla önskade mods är installerade på klienten och du har säkerställt att modden är kompatibel med multiplayer kan mods installeras på servern.
För att undvika problem med överföringen, se till att din server är stoppad innan!

Anslut nu till din server via FTP för att kunna ladda upp mods i nästa steg.
Allt om FTP-anslutning hittar du i [Åtkomst via FTP](gameserver-ftpaccess.md).
När du är ansluten, öppna följande mapp: `/gXXXX/modded-satisfactory/FactoryGame/Mods`

Öppna nu den lokala Satisfactory-mappen på din dator.
Stegen skiljer sig lite mellan Steam och Epic Games:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Om du har installerat Satisfactory via Steam kan du öppna mappen direkt via Steam-klienten:

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Games har ingen knapp för att öppna installationsmappen, så du måste öppna den manuellt.
Öppna Windows Utforskaren och navigera till mappen där du installerade Epic Games.
Vanligtvis är sökvägen: `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

De mods som installerats på klienten via mod-managern måste nu laddas upp via FTP.
För att komma åt själva mods-mappen öppnar du följande mappar i ordning: `FactoryGame -> Mods`.

Markera nu alla mappar **utom SML-mappen** genom att hålla ner CTRL och klicka på mapparna.

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

Dra och släpp sedan de markerade mapparna till den öppnade mod-mappen i FTP.

## Starta servern

När mods är uppladdade kan du enkelt starta servern via webbgränssnittet. Servern ska nu gå att ansluta till, mer om det hittar du i guiden [Anslut till server](satisfactory-connect.md).

<InlineVoucher />