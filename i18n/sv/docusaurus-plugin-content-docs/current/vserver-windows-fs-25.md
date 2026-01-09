---
id: vserver-windows-fs-25
title: "VPS: Farming Simulator 2025 Dedikerad Server Windows-Setup"
description: "Upptäck hur du sätter upp en dedikerad Farming Simulator 2025-server på din Windows VPS för smidig multiplayer → Läs mer nu"
sidebar_label: Farming Simulator 2025
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows VPS och vill installera Farming Simulator Dedicated Server 2025 på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.

<InlineVoucher />

## Förberedelser

För att kunna hosta en dedikerad Farming Simulator 2025-server behöver du en Windows-server redo samt en giltig spellicens för att köra den dedikerade servern.

Innan du fortsätter med installationen, anslut till din Windows-server via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

### Spellicens

För att hosta den dedikerade servern på din Windows-server måste du äga en digital kopia av Farming Simulator 2025 direkt från [Farming Simulator](https://www.farming-simulator.com/buy-now.php)-webbplatsen.

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Du kan inte använda samma licensnyckel som du spelar spelet med, så du behöver köpa en **andra** kopia av spelet enbart för din dedikerade server.

:::info Steam-spellicens
Det går att använda en Steam-licens för att hosta din dedikerade server, men det är ganska opraktiskt eftersom du då måste ha Steam-klienten igång i bakgrunden hela tiden. Det innebär också att du inte kan spela andra spel på andra system med samma Steam-konto på grund av Steams begränsningar. Vi rekommenderar därför starkt att du köper en fristående nyckel direkt från webbplatsen för att slippa krångel.

Om du ändå planerar att använda en **Steam**-licens, bör du istället installera filerna via Steam som vanligt och hoppa direkt till avsnittet **Dedikerad Server Setup** i guiden.
:::

När du köpt en digital version från webbplatsen får du en produktkod via den e-postadress du angav vid köpet. Denna licensnyckel behöver du i nästa steg för att ladda ner spelet och validera din dedikerade server under setup.

## Installation

### Installera filer

Nu när din licensnyckel och Windows-server är redo, gå till [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) på din Windows-server och mata in licensnyckeln du fick via e-post.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

När det lyckas får du tillgång till en sida med olika nedladdningsalternativ för spelet. Leta upp huvudalternativet för Windows **Farming Simulator 25 (Windows 10/11)** och välj ladda ner.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Nedladdningen startar nu och kan ta en stund eftersom hela spelet laddas ner, så ha tålamod.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

När nedladdningen är klar, gå till din mapp för nedladdningar och hitta **.img**-filen du laddade ner. Dubbelklicka på den för att montera enheten i Utforskaren.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Kör sedan **Setup.exe** och acceptera UAC-prompten. Följ installationsmenyn för att installera spelet, vilket inkluderar att godkänna villkoren och justera installationsvägen om du vill.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Var tålamod och vänta tills hela installationen är klar. När den är klar, avsluta installationsmenyn. Vi rekommenderar att du högerklickar på den monterade **DVD-enheten** i Utforskaren och väljer **Mata ut** för att ta bort den då den inte längre behövs. Nu är basinstallationen av spelet klar.

### Aktivera spelet

När spelet är installerat måste du köra det minst en gång för att aktivera det. Starta spelet via skrivbordsikonen eller Windows sökfält.

Vid uppstart ska du få en prompt för att ange licensnyckeln. Mata in licensnyckeln du fick via e-post och bekräfta. När det lyckas aktiveras spelet och laddningen fortsätter.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Du kan nu stänga spelet eftersom det inte behövs mer och gå vidare till nästa steg för att sätta upp den dedikerade servern och webbgränssnittet som följer med. Om du får ett **Video Driver**-fel, välj bara **nej** för att avbryta uppstarten direkt.

## Dedikerad Server Setup

Nu när spelet är klart behöver du justera några konfigurationsinställningar för din dedikerade server. Börja med att öppna din spelinstallationsmapp. Som standard ligger den under `C:\Program Files (x86)\Farming Simulator 2025`, men kan vara annorlunda om du ändrade sökvägen vid installation.

Hitta och öppna filen **dedicatedServer.xml** med en textredigerare.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Vi rekommenderar att du ändrar fälten `username` och `passphrase` högst upp i filen till egna värden. Det blir dina inloggningsuppgifter till serverns webbgränssnitt. Spara filen och stäng när du är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Komma åt webbgränssnittet

När inloggningsuppgifterna är konfigurerade kan du starta servern genom att köra **dedicatedServer.exe** i samma mapp som spelet.

:::info Administratörsrättigheter
Se till att du startar den dedikerade serverns .exe-fil med administratörsrättigheter, annars kan du få problem när du försöker starta själva serverspelet. Högerklicka på filen och välj **Kör som administratör**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Det öppnas ett nytt CMD-fönster som automatiskt skapar certifikat, installerar uppdateringar och nödvändiga verktyg. Detta kan ta en stund vid första starten, så ha tålamod.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

När det är klart kan du komma åt webbgränssnittet genom att skriva `http://[din_serverip]:8080` i en webbläsare. Logga in med de uppgifter du sparade tidigare.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

I webbgränssnittet kan du göra en mängd olika inställningar för din server, som att ändra konfiguration, hantera sparade spel, mods och mycket mer.

### Portforwarding för din server

För att din server ska vara tillgänglig utifrån måste du öppna portarna som den dedikerade servern använder. Det kan du göra antingen via PowerShell-kommandon, vilket är enklare, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **PowerShell**. Högerklicka och välj **Kör som administratör** så att rättigheter finns och allt funkar som det ska.

:::info
Se till att köra PowerShell som administratör, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i PowerShell:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Farming Simulator 2025-server ska vara tillgänglig utifrån.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du startar från vanliga brandväggsinställningarna.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din FS2025-server. Klicka på inkommande och utgående regler och lägg till följande protokoll och portar:
- TCP inkommande och utgående: 8080, 10823
- UDP inkommande och utgående: 8080, 10823

Behöver du mer hjälp, kolla vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När reglerna är tillagda är din server tillgänglig från internet, vilket betyder att du kan nå webbgränssnittet och ansluta till servern i spelet.

### Starta servern

När du justerat inställningar och brandväggsregler, gå till startsidan i webbgränssnittet och klicka på **Start** för att starta servern.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Servern bör nu starta och du kan följa processen i gränssnittet och i det nya CMD-fönstret som kör serverspelet. Om du får fel vid start, kontrollera att du kör gränssnittet som administratör.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Avslutning

Grattis, du har nu installerat och konfigurerat Farming Simulator 2025 dedikerad server på din VPS! Har du fler frågor eller problem, kontakta gärna vår support som finns tillgänglig varje dag!

<InlineVoucher />