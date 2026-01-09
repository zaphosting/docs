---
id: dedicated-windows-fivem
title: "Dedikerad Server: FiveM Dedikerad Server Setup"
description: "Upptäck hur du sätter upp och kör din egen FiveM Dedikerade Server med txAdmin för smidig multiplayer-gaming → Lär dig mer nu"
sidebar_label: FiveM
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduktion

Har du en dedikerad server och vill installera och driva din egen FiveM Dedikerade Server med txAdmin? Då har du kommit rätt! Här går vi igenom alla nödvändiga steg för hur du installerar och konfigurerar den samt vad du behöver tänka på. 



:::warning  Operativsystem valt och installerat
Det förutsätts att du redan har valt och installerat ett operativsystem på din dedikerade server. Om du inte har gjort detta än måste du först följa stegen i guiden [Initial setup](dedicated-setup.md) för dedikerade servrar.
:::



## Förberedelser

För att kunna sätta upp en FiveM-server krävs vissa förberedelser som måste göras innan den faktiska installationen av FiveM Dedikerade Server kan påbörjas.



### Sätt upp databas

Om du vill använda och installera resurser som kräver en databas behöver du en extra **databasserver**. Det finns olika sätt att sätta upp en sådan server på. I vår guide [Install MySQL](dedicated-windows-installmysql.md) visar vi hur du installerar din egen **databasserver** på din **dedikerade server**.



### Ladda ner FiveM Server Software

Nästa steg är att ladda ner FiveM-serverprogramvaran. Gå till FiveMs [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) via en av dina installerade webbläsare och ladda ner den senaste FiveM-serverbuilden.

Packa upp den nedladdade filen i mappen Downloads och flytta sedan FiveM-serverfilerna till en separat mapp. I detta exempel ligger serverprogramvaran i en mapp som heter **FiveM** på skrivbordet.

:::warning Uppackningsverktyg krävs
För att packa upp den nedladdade FiveM Server-programvaran behövs ett uppackningsverktyg för den packade filen. I detta exempel används [7Zip Software](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Skapa FiveM Server licensnyckel

Varje FiveM-server behöver sin egen licensnyckel som hanteras via det nya [Cfx.re Portal](http://portal.cfx.re/). Licensnyckeln kopplas till ditt Cfx.re-konto. Logga in på webbplatsen, gå till kategorin **Server** och klicka på knappen **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Konfiguration

Nu kan du börja installera FiveM Server och txAdmin. Öppna din FiveM Server-mapp igen och kör programmet `FXServer.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


När serverprogrammet startat öppnas serverkonsolen och txAdmin. I txAdmin-gränssnittet måste du koppla ditt **Cfx.re-konto** till txAdmin.  


![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdmin Setup

Under txAdmin-setup installeras och konfigureras din FiveM-server i fem steg. Följ instruktionerna i txAdmin och börja med att ange ett **servernamn**. Välj sedan önskad **servertyp**. I detta exempel visas installation av en FiveM-server med förinstallerat QBCore.

Välj alternativet **Popular Recipes** under steget **Deployment Type** och sedan **QBCore Framework Template**. Bekräfta önskad **Data Directory** och starta **Recipe Deployer** för att slutföra installationen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Under Recipe Deployer måste sista nödvändiga informationen fyllas i innan servern kan startas. Ange din tidigare skapade FiveM-licensnyckel i fältet **License Key**. Klicka sedan på **Show/Hide Database Options (Advanced)** och fyll i inloggningsuppgifterna till din databasserver. Här behövs endast det tidigare definierade lösenordet för användaren **root**. Alla andra inställningar kan lämnas som de är. Kontrollera dina uppgifter och klicka sedan på **Run Recipe** för att starta processen.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Brandväggskonfiguration
För att din server ska vara tillgänglig utåt måste du ändra port-forwarding-regler för de portar som den dedikerade serverprocessen använder. Detta kan du göra antingen via Powershell-kommandon, vilket är enklare, eller via Windows Defender Firewall.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökruta och sök efter **Powershell**. Högerklicka och välj **Kör som administratör** för att få rätt behörigheter så att allt fungerar som det ska.

:::info
Se till att du kör Powershell i administratörsläge, annars kan inställningarna misslyckas.
:::

Klistra sedan in följande kommandon i Powershell:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som behövs för att din FiveM-server ska vara tillgänglig utåt.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du öppnar den vanliga brandväggssidan.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Du måste skapa nya regler för din FiveM-server. Klicka på inkommande och utgående regler som beskrivs nedan och lägg till regler för följande protokoll och portar:
- TCP inkommande och utgående: 30120
- UDP inkommande och utgående: 30120

Använd gärna vår guide [Port Forwarding (Firewall)](vserver-windows-port.md) om du behöver mer hjälp med detta.

</TabItem>
</Tabs>

## Avslutning

Du har nu framgångsrikt installerat och konfigurerat en FiveM Dedikerad Server på din dedikerade server. Har du fler frågor eller behöver hjälp är du varmt välkommen att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂



