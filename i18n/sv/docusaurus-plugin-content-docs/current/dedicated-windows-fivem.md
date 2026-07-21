---
id: dedicated-windows-fivem
title: "FiveM Dedicated Server Setup"
description: "Discover how to set up and run your own FiveM Dedicated Server with txAdmin for seamless multiplayer gaming → Learn more now"
sidebar_label: FiveM
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';




## Introduction

Äger du en dedikerad server och vill installera och driva din egen FiveM Dedicated Server-tjänst med txAdmin? Då har du kommit rätt! Här förklarar vi alla nödvändiga steg för hur du installerar och konfigurerar den samt vad du behöver tänka på.



:::warning  Operativsystem valt och installerat
Det förutsätts att du redan har valt och installerat ett operativsystem för din VPS/Dedikerade server. Om du inte har gjort detta steg än måste du först följa instruktionerna i guiden [Initial setup](dedicated-setup.md) för dedikerade servrar.
:::



## Preparation

För att kunna sätta upp en FiveM-server krävs vissa förberedelser som måste genomföras innan den faktiska installationen av FiveM Dedicated Server kan påbörjas.



### Sätt upp databas

Om du vill använda och installera resurser som kräver en databas behöver du en extra **databasserver**. Det finns olika sätt att sätta upp en sådan server. I vår guide [Install MySQL](dedicated-windows-installmysql.md) visar vi hur du installerar din egen **databasserver** på din **dedikerade server**.



### Ladda ner FiveM Server Software

Nästa steg är att ladda ner FiveM-serverprogramvaran. Gå till FiveMs [Server Build List](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/) via någon av dina installerade webbläsare och ladda ner den senaste FiveM-serverversionen.

Packa upp den nedladdade filen i mappen Downloads och flytta sedan FiveM-serverfilerna till en separat mapp. I detta exempel ligger serverprogramvaran i en mapp som heter **FiveM** på skrivbordet.

:::warning Uppackningsverktyg krävs
För att packa upp den nedladdade FiveM-serverprogramvaran krävs ett uppackningsverktyg för den packade filen. I detta exempel används [7Zip Software](https://7-zip.com/).
:::

![img](https://screensaver01.zap-hosting.com/index.php/s/B9Qs9raB3fRZjJ4/download)



### Skapa FiveM Server licensnyckel

Varje FiveM-server behöver en egen licensnyckel som hanteras via det nya [Cfx.re Portal](http://portal.cfx.re/). Licensnyckeln kopplas till ditt Cfx.re-konto. Logga in på webbplatsen, gå till kategorin **Server** och klicka på knappen **Generate Key**.

![img](https://screensaver01.zap-hosting.com/index.php/s/X6kHcs6o2dcFJqw/preview)



## Configuration

Nu kan du börja med installationen av FiveM Server och txAdmin. För att starta detta steg öppnar du din FiveM Server-mapp igen och kör programmet `cfx-server.exe`.

![img](https://screensaver01.zap-hosting.com/index.php/s/aSEbx3LnJe2rZpd/download)


När serverprogrammet har startats öppnas serverkonsolen och txAdmin. I txAdmin-gränssnittet måste du koppla ditt **Cfx.re-konto** till txAdmin.



![img](https://screensaver01.zap-hosting.com/index.php/s/EDcJWjKSrrwARTL/download)



### txAdmin Setup

Under txAdmin-installationen installeras och konfigureras din egen FiveM-server i fem steg. Följ instruktionerna i txAdmin-gränssnittet och ange först ett **servernamn**. Välj sedan önskad **servertype**. Detta exempel visar installation av en FiveM-server med förinstallerad QBCore.

Välj alternativet **Popular Recipes** i steget **Deployment Type** och sedan **QBCore Framework Template**. Bekräfta önskad **Data Directory** och starta **Recipe Deployer** för att slutföra installationen.

![img](https://screensaver01.zap-hosting.com/index.php/s/WACQEdocRxNrRrk/download)

Under Recipe Deployer måste den sista nödvändiga informationen fyllas i innan servern kan startas. Ange din tidigare skapade FiveM-licensnyckel i fältet **License Key**. Klicka sedan på **Show/Hide Database Options (Advanced)** och fyll i inloggningsuppgifterna för din databasserver. I detta fall krävs endast det tidigare definierade lösenordet för användaren **root**. Alla andra inställningar kan lämnas oförändrade. Kontrollera dina uppgifter och klicka sedan på **Run Recipe** för att starta processen.

![img](https://screensaver01.zap-hosting.com/index.php/s/QPyEctyQbp3kCxa/download)


### Brandväggskonfiguration
För att säkerställa att din server är tillgänglig för allmänheten måste du ändra portvidarebefordringsregler för de portar som VPS/Dedikerad server-processen använder. Detta kan du göra antingen direkt via Powershell-kommandon, vilket är enklare, eller via Windows Defender Firewall-sidan.

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Öppna Windows sökruta och sök efter **Powershell**. Se till att högerklicka och välja **Run as Administrator** så att rätt behörigheter finns och allt fungerar korrekt.

:::info
Se till att du kör Powershell i administratörsläge, annars kan inställningarna misslyckas.
:::

Kopiera och klistra sedan in följande kommandon i din Powershell-prompt:
```
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Inbound -LocalPort 30120 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FiveM Server" -Direction Outbound -LocalPort 30120 -Protocol UDP -Action Allow
```

Dessa kommandon skapar automatiskt brandväggsregler som krävs för att din FiveM-server ska vara tillgänglig för allmänheten.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Använd Windows sökfunktion för att öppna **Windows Firewall Settings with Advanced Security**. Du kan behöva klicka på **Advanced Settings** för att öppna rätt fönster om du öppnar den vanliga Windows Firewall-sidan.

![](https://screensaver01.zap-hosting.com/index.php/s/woitzXpAAirg9JN/preview)

Du måste skapa nya regler för din FiveM-server. Gör detta genom att klicka på inkommande och utgående regler som beskrivs nedan och lägg till dem för följande protokoll och portar:
- TCP inkommande och utgående: 30120
- UDP inkommande och utgående: 30120

Använd gärna vår guide [Port Forwarding (Firewall)](vserver-windows-port.md) om du behöver mer hjälp med detta.

</TabItem>
</Tabs>

## Conclusion

Du har nu framgångsrikt installerat och konfigurerat en FiveM Dedicated Server-tjänst på din VPS/Dedikerade server. För ytterligare frågor eller hjälp, tveka inte att kontakta vår support som finns tillgänglig dagligen för att hjälpa dig! 🙂