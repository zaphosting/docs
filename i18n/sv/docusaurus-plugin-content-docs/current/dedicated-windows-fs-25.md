---
id: dedicated-windows-fs-25
title: "Dedikerad Server: Farming Simulator 2025 Dedikerad Server Windows-Setup"
description: "Upptäck hur du sätter upp en Farming Simulator 2025 dedikerad server på Windows för smidig multiplayer → Läs mer nu"
sidebar_label: Farming Simulator 2025
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Har du en Windows Dedikerad Server och vill installera Farming Simulator Dedicated Server 2025-tjänsten på den? Då har du kommit rätt. I den här guiden går vi igenom steg för steg hur du installerar tjänsten på din server.



## Förberedelser

För att kunna hosta en Farming Simulator 2025 dedikerad server behöver du en Windows-server redo samt en giltig spellicens för att köra den dedikerade servern.

Innan du fortsätter med installationen, anslut till din Windows Server via Remote Desktop (RDP). Använd vår [Initial Access (RDP)](vserver-windows-userdp.md)-guide om du behöver hjälp med detta.

### Spellicens

För att kunna hosta den dedikerade servern på din Windows-server måste du äga en digital kopia av Farming Simulator 2025 direkt från [Farming Simulator](https://www.farming-simulator.com/buy-now.php)-webbplatsen.

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Du kan inte använda samma licensnyckel som du spelar spelet med, så du behöver köpa en **andra** kopia av spelet enbart för din Dedikerade Server.

:::info Steam Spellicens
Det går att använda en Steam-licens för att hosta din dedikerade server, men det kan vara väldigt opraktiskt eftersom du då måste ha Steam-klienten igång i bakgrunden hela tiden. Det innebär också att du inte kan spela andra spel på någon annan dator med samma Steam-konto på grund av Steams begränsningar. Vi rekommenderar därför starkt att du köper en fristående nyckel direkt från webbplatsen för att slippa krånglet.

Om du ändå planerar att använda en **Steam**-licens, bör du istället installera filerna via Steam som vanligt och hoppa direkt till avsnittet **Dedikerad Server Setup** i guiden.
:::

När du köpt en digital version från webbplatsen får du en produktkod skickad till den e-postadress du angav vid köpet. Du behöver denna licensnyckel i nästa steg för att ladda ner spelet och validera din dedikerade server under installationen.

## Installation

### Installera filer

Nu när din licensnyckel och Windows-server är redo, gå till [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) på din Windows-server och mata in licensnyckeln du fick via e-post.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

När det lyckas får du tillgång till en sida med olika nedladdningsalternativ för spelet. Leta upp huvudalternativet för Windows **Farming Simulator 25 (Windows 10/11)** och välj ladda ner.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

Nedladdningen startar nu och kan ta en stund eftersom hela spelet laddas ner, så ha tålamod.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

När den är klar, gå till dina nedladdningar och hitta **.img**-filen du laddade ner. Öppna den genom att dubbelklicka, vilket monterar enheten i Utforskaren.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Kör sedan **Setup.exe** och acceptera UAC-prompten. Följ installationsmenyn för att installera spelet, vilket inkluderar att godkänna villkoren och justera installationsvägen om du vill.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Var tålamodig och vänta tills hela installationen är klar. När den är färdig, avsluta installationsmenyn. Vi rekommenderar att du högerklickar på den monterade **DVD-enheten** i Utforskaren och väljer **Mata ut** för att ta bort den då den inte längre behövs. Nu är basinstallationen av spelet klar.

### Aktivera spelet

När spelet är installerat måste du köra det minst en gång för att aktivera det. Starta spelet via genvägen på skrivbordet eller via Windows sökfält.

Vid start ska du få en prompt för att ange licensnyckeln. Skriv in licensnyckeln du fick på e-post och bekräfta. Om det lyckas aktiveras spelet och laddningen fortsätter.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Du kan nu stänga spelet eftersom det inte behövs mer och gå vidare till nästa steg för att sätta upp den dedikerade servern och webbgränssnittet som följer med. Om du får ett **Video Driver**-fel, välj bara **nej** för att avbryta uppstarten direkt.

## Dedikerad Server Setup

Nu när spelet är klart behöver du justera några konfigurationsinställningar för din dedikerade server. Börja med att öppna din spelinstallationsmapp. Som standard ligger den under `C:\Program Files (x86)\Farming Simulator 2025`, men kan vara annorlunda om du ändrade sökvägen vid installation.

Hitta och öppna filen **dedicatedServer.xml** med en textredigerare.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Vi rekommenderar att du ändrar fälten `username` och `passphrase` högst upp i filen till egna värden. Det är de uppgifterna du använder för att logga in i serverns webbgränssnitt. Spara filen och stäng när du är klar.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Komma åt webbgränssnittet

När inloggningsuppgifterna är konfigurerade kan du starta servern genom att köra **dedicatedServer.exe** i samma mapp som spelet.

:::info Administratörsrättigheter
Se till att du startar den dedikerade serverns .exe-fil med administratörsrättigheter, annars kan du få problem när servern ska starta. Högerklicka på filen och välj **Kör som administratör**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Det öppnas ett nytt CMD-fönster som automatiskt skapar certifikat, installerar uppdateringar och nödvändiga verktyg. Det kan ta en stund första gången, så ha tålamod.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

När det är klart kan du öppna webbgränssnittet genom att skriva `http://[din_serverip]:8080` i en webbläsare. Logga in med de uppgifter du sparade tidigare.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

I webbgränssnittet kan du göra en massa inställningar på din server, som att ändra konfiguration, hantera sparade spel, mods och mycket mer.

### Portforwarding för din server

För att din server ska vara tillgänglig utifrån måste du öppna rätt portar i brandväggen. Det kan du göra via PowerShell-kommandon, vilket är enklast, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökfält och sök efter **PowerShell**. Högerklicka och välj **Kör som administratör** så att rätt behörigheter finns.

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

Använd sökfunktionen i Windows för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du startar från grundläggande brandväggsinställningar.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din FS2025-server. Gör detta genom att lägga till inkommande och utgående regler för följande protokoll och portar:
- TCP inkommande och utgående: 8080, 10823
- UDP inkommande och utgående: 8080, 10823

Behöver du mer hjälp, kolla vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

När du lagt till reglerna är din server tillgänglig från internet, vilket betyder att du kan nå webbgränssnittet och ansluta till servern i spelet.

### Starta servern

När du justerat inställningar och brandväggsregler, gå till startsidan i webbgränssnittet och klicka på **Start** för att starta servern.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Om allt går som det ska startar servern och du ser detta i gränssnittet samt i ett nytt CMD-fönster som kör själva serverspelet. Får du fel vid start, kontrollera att du kör gränssnittet som administratör.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Avslutning

Grattis, du har nu installerat och konfigurerat Farming Simulator 2025 dedikerad server på din Dedikerade Server! Har du fler frågor eller problem, kontakta vår support som finns tillgänglig varje dag!