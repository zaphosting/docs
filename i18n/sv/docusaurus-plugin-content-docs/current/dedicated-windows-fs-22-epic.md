---
id: dedicated-windows-fs-22-epic
title: "Dedikerad Server: Farming Simulator 2022 (Epic Games) Dedikerad Server Windows Setup"
description: "Upptäck hur du sätter upp en dedikerad server för Farming Simulator 22 Epic Games-version med optimerad prestanda och unika krav → Lär dig mer nu"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att sätta upp en server för Farming Simulator 22 Epic Games-version skiljer sig lite från processen för en vanlig server. Den här guiden tar dig igenom stegen, med fokus på de unika delarna för Epic Games-versionen.

## Förberedelser

Innan du börjar, se till att din setup uppfyller följande krav:
- **Operativsystem:** Windows Server 2016/2019 (64-bit)
- **CPU:** Minst 4x 2.4 GHz (AMD/Intel)
- **RAM:** Minst 4GB (DDR3/4)
- **Diskutrymme:** Minst 50GB ledigt (SSD eller bättre rekommenderas)
- **Epic Games-konto:** Ett Epic Games-konto med Farming Simulator 22.

:::info
När servern körs kan du inte hosta servern och spela på samma Epic Games-konto. Det betyder att du behöver en andra kopia av spelet på ett annat konto om du vill spela på servern.
:::

## Steg 1: Förberedelser för serverinstallationen
Börja med att ansluta till din server via Remote Desktop (RDP). Behöver du hjälp med detta, kolla in vår [Initial Access (RDP)](vserver-windows-userdp.md).

När du är ansluten måste du installera en nödvändig förutsättning, Microsoft Visual C++ Redistributable, som du kan ladda ner från [Microsofts webbplats](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). Följ instruktionerna på skärmen för att slutföra installationen.

:::tip
Det kan hända att du redan har C++ Redistributable installerat, i så fall kan installationsprogrammet ge ett felmeddelande. Det kan du ignorera och fortsätta.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Nu måste du installera Epic Games-launchern, som du laddar ner från [Epic Games webbplats](https://store.epicgames.com/en-US/download). Följ instruktionerna på skärmen för att slutföra installationen.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Efter installationen är det troligt att launchern behöver ladda ner några extra filer och uppdateringar innan den startar.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

När launchern öppnats måste du logga in med ditt Epic Games-konto som äger Farming Simulator 2022 i sitt spelbibliotek.

## Steg 2: Ladda ner Farming Simulator 2022

I Epic Games Launcher, klicka på fliken **Library** och hitta Farming Simulator 22. Använd **Install**-knappen och välj var du vill ladda ner spelet.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Vänta nu tills nedladdning och installation är klar. Nedladdningshastigheten beror på din servers bandbredd.

## Steg 3: Ställ in startalternativ

När spelet är installerat, gå tillbaka till fliken **Library** i Epic Games Launcher. Hitta Farming Simulator 22, klicka på de tre prickarna bredvid och välj **Manage**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Scrolla ner till sektionen **Launch Options** och aktivera den. I textrutan som dyker upp, skriv `-server` och stäng menyn.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Steg 4: Starta servern

Du kan nu starta Farming Simulator 2022 från din Epic Games launcher eller genvägen på skrivbordet. Spelet ska nu starta via ett kommandofönster (CMD) i dedikerat serverläge. Om det inte gör det, dubbelkolla att du ställt in startalternativet korrekt.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Steg 5: Aktivera webbgränssnittet (valfritt)

Farming Simulator 22 dedikerade servrar har ett webbgränssnitt som du kan aktivera för din server. Det är valfritt, men kan vara grymt för att justera inställningar och få en massa info, så vi rekommenderar att du slår på det.

Innan du fortsätter, se till att stänga servern genom att avsluta kommandoprompten. Detta för att säkerställa att ändringar du gör i det här steget inte skrivs över.

Navigera till installationsmappen för spelet, vanligtvis `C:\Program Files\Epic Games\FarmingSimulator22` om du installerade i standardmappen.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Hitta och öppna filen `dedicatedServer.xml` i rotmappen med en textredigerare som Notepad.

Sätt användarnamn och lösenord för admin genom att ändra rätt fält. 
```xml
  <initial_admin>
    <username>admin</username> //användarnamn
    <passphrase>your_password</passphrase> //lösenord
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

Spara filen innan du stänger och kör `dedicatedServer.exe` som finns i samma rotmapp.

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

Du ska nu kunna komma åt webbgränssnittet genom att gå till `http://[din_serverip]:8080` i din webbläsare, där du byter ut `[din_serverip]` mot din servers IP-adress. Vill du nå panelen direkt på samma server kan du också använda `http://127.0.0.1:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
På grund av den unika setupen för Epic Games-versionen kan du stöta på problem med att använda webbgränssnittet fullt ut. Du kan göra ändringar och stoppa servern via webbgränssnittet, men du kan till exempel inte starta servern därifrån.

Om du får problem, stoppa först dedicatedServer.exe, starta sedan Farming Simulator 22 direkt för att säkerställa att servern fungerar. Kör sedan dedicatedServer.exe för att aktivera webbgränssnittet.

Det är viktigt att du startar servern **först** och webbgränssnittet **efteråt**, annars kan Epic Games upptäcka båda som samma fil och hindra dig från att starta huvudservern.
:::

## Steg 6: Port Forwarding

För att din server ska vara tillgänglig för allmänheten måste du ändra port forwarding-regler för de portar som den dedikerade servern använder. Du kan göra detta antingen via PowerShell-kommandon, vilket är enklare, eller via Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökruta och sök efter **PowerShell**. Högerklicka och välj **Kör som administratör** för att få rätt behörigheter och att allt ska funka som det ska.

:::info
Se till att köra PowerShell i administratörsläge, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i PowerShell:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din Farming Simulator 22-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd sökfunktionen i Windows för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du bara öppnar grundinställningarna för Windows Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Skapa nya regler för din Farming Simulator 22-server. Gör detta genom att lägga till inkommande och utgående regler för följande protokoll och portar:
- TCP inkommande och utgående: 3724, 27015
- UDP inkommande och utgående: 3724, 27015

Behöver du mer hjälp med detta, kolla in vår guide för [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Steg 7: Anslut till servern
Starta spelet och gå till multiplayer-menyn. Leta upp servernamnet, som du hittar i webbgränssnittet och kan anpassa.

När du hittat servern, klicka för att ansluta. Om du blir ombedd, skriv in lösenordet som också visas i webbgränssnittet.

Grattis! Du har nu installerat Farming Simulator 22 (Epic Games-versionen) på din Windows Dedikerade Server.