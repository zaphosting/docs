---
id: vserver-windows-fivem
title: "VPS: FiveM Dedikerad Server Setup"
description: "Upptäck hur du installerar och konfigurerar din egen FiveM Dedikerade Server på en VPS för smidig multiplayer-gaming → Lär dig mer nu"
sidebar_label: FiveM
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduktion

Har du en VPS och vill installera och köra din egen FiveM Dedikerade Server med txAdmin? Då har du kommit rätt! Här går vi igenom alla nödvändiga steg för hur du installerar och konfigurerar den samt vad du behöver tänka på. 


## Förberedelser

För att sätta upp en FiveM-server krävs vissa förberedelser som måste göras innan själva installationen av den Dedikerade FiveM-servern kan börja.



### Sätt upp databas

Om du vill använda och installera resurser som kräver en databas behöver du en extra **databasserver**. Det finns olika sätt att sätta upp en sådan server. I vår guide [Installera MySQL](vserver-windows-installmysql.md) visar vi hur du installerar din egen **databasserver** på din **VPS**.



### Ladda ner FiveM Server-mjukvara

Nästa steg är att ladda ner FiveM-servermjukvaran. Gå till FiveMs [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) via valfri webbläsare på din VPS och ladda ner den senaste FiveM-serverversionen. 

Packa upp den nedladdade filen i mappen Downloads och flytta sedan FiveM-serverfilerna till en separat mapp. I detta exempel ligger servermjukvaran i en mapp som heter **FiveM** på skrivbordet. 

:::warning Packningsverktyg krävs
För att packa upp den nedladdade FiveM-servermjukvaran behövs ett packningsverktyg för den packade filen. I detta exempel används [7Zip](https://7-zip.com/). 
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Skapa FiveM Server licensnyckel

Varje FiveM-server behöver sin egen licensnyckel som hanteras via nya [Cfx.re Portalen](http://portal.cfx.re/). Licensnyckeln kopplas till ditt Cfx.re-konto. Logga in på webbplatsen, gå till kategorin **Server** och klicka på knappen **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguration

Nu kan du börja installera FiveM-servern och txAdmin. Öppna din FiveM-servermapp igen och kör programmet `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


När serverprogrammet startat öppnas serverkonsolen och txAdmin. I txAdmin-gränssnittet måste du koppla ditt **Cfx.re-konto** till txAdmin.  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdmin Setup

Under txAdmin-setup installeras och konfigureras din FiveM-server i fem steg. Följ instruktionerna i txAdmin och börja med att ange ett **servernamn**. Välj sedan önskad **servertype**. I detta exempel visas installation av en FiveM-server med förinstallerat QBCore.

Välj alternativet **Popular Recipes** under **Deployment Type** och sedan **QBCore Framework Template**. Bekräfta önskad **Data Directory** och starta **Recipe Deployer** för att slutföra installationen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Under Recipe Deployer måste du ange den sista nödvändiga informationen innan servern kan startas. Fyll i din tidigare skapade FiveM-licensnyckel i fältet **License Key**. Klicka sedan på **Show/Hide Database Options (Advanced)** och fyll i inloggningsuppgifterna till din databasserver. Här behövs endast det tidigare angivna lösenordet för användaren **root**. Alla andra inställningar kan lämnas som de är. Kontrollera dina uppgifter och klicka sedan på **Run Recipe** för att starta processen.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Brandväggskonfiguration
För att din server ska vara tillgänglig utåt måste du ändra port-forwarding-regler för de portar som den dedikerade serverprocessen använder. Det kan du göra antingen via Powershell-kommandon, vilket är enklare, eller via Windows Defender-brandväggens inställningar.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökruta och sök efter **Powershell**. Högerklicka och välj **Kör som administratör** för att ha rätt behörigheter så att allt funkar som det ska.

:::info
Se till att du kör Powershell i administratörsläge, annars kan inställningarna misslyckas.
:::

Klistra in följande kommandon i Powershell-fönstret:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som krävs för att din FiveM-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du startar från grundinställningarna för Windows-brandväggen.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Du måste skapa nya regler för din FiveM-server. Klicka på inkommande och utgående regler som nedan och lägg till regler för följande protokoll och portar:
- TCP inkommande och utgående: 30120
- UDP inkommande och utgående: 30120

Behöver du mer hjälp med detta, kolla in vår guide [Port Forwarding (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

## Avslutning

Du har nu framgångsrikt installerat och konfigurerat en FiveM Dedikerad Server på din VPS. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂


<InlineVoucher />