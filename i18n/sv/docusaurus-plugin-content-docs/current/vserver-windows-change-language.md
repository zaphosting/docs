---
id: vserver-windows-change-language
title: "VPS: Hantera språk på Windows Server"
description: "Upptäck hur du anpassar språkinställningarna på din Windows-server för en lokaliserad upplevelse och bättre användarvänlighet → Lär dig mer nu"
sidebar_label: Lägg till & Hantera språk
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Windows OS finns lokaliserat på en mängd olika språk, vilket gör det enkelt att använda ditt modersmål. I den här guiden går vi igenom de tillgängliga metoderna för att ändra språket på din Windows-server.

:::info
Under den initiala serverkonfigurationen kan du välja mellan engelska eller tyska serverversioner, som markeras med **(EN)** och **(DE)** under valet av OS-version.
:::

<InlineVoucher />

## Lägg till språkpaket

Språkpaket är en smidig funktion inbyggd i Windows som låter dig enkelt hantera lokaliserade språkpaket på din server.

Börja med att ansluta till din Windows-server via RDP. Om du behöver hjälp med detta, kolla in vår guide för [Initial Access (RDP)](vserver-windows-userdp.md).

När du är ansluten, sök efter **Språk** via Windows sökfält eller genom att trycka på Windows-knappen/ikonen och använda startmenyns sökfält.

![](https://screensaver01.zap-hosting.com/index.php/s/iwnxdwsYHPy9AMP/preview)

På den här sidan, hitta språksektionen och klicka på knappen **Lägg till ett språk**.

![](https://screensaver01.zap-hosting.com/index.php/s/EJxNz66LPBDiE9J/preview)

Använd menyn för att söka efter det språk du vill installera och välj det genom att klicka på **Nästa**. På nästa sida, se till att alla alternativ är ikryssade, inklusive **Ange som Windows visningsspråk** om du vill aktivera det direkt.

:::important
För att ändra språket i hela Windows OS, se till att det valda språket stöder funktionen **Visningsspråk**.
:::

:::tip
Om du inte ser några språk med fältet **Visningsspråk**, installera eventuella väntande Windows-uppdateringar via **Uppdatering & Säkerhet** i Inställningar, vilket löser detta [bugg](https://learn.microsoft.com/en-us/troubleshoot/windows-server/shell-experience/cannot-configure-language-pack-windows-server-desktop-experience).
:::

![](https://screensaver01.zap-hosting.com/index.php/s/ZENz49zaSmkLNER/preview)

Windows börjar nu ladda ner det valda språkpaketet. Ha tålamod, detta kan ta lite tid.

När nedladdningen är klar, om du inte valde **Ange som Windows visningsspråk** tidigare, gå tillbaka till språk-sidan och välj det i dropdown-menyn.

![](https://screensaver01.zap-hosting.com/index.php/s/Ee3rMKzXTidr9Jk/preview)

Starta slutligen om din server så kommer det nya språket att användas. Du har nu framgångsrikt hanterat språkpaket på din Windows-server.

## Installera om server-OS

Om du har problem med att ändra språkpaket eller om din server är helt ny, kan du välja att helt enkelt installera om din Windows-server på engelska eller tyska via de tillgängliga OS-versionerna.

:::warning
Att installera om OS är en destruktiv process och **kommer** att radera all data på servern. Säkerhetskopiera all viktig data innan du fortsätter.
:::

Detta gör du via serverns webbpanel under sektionen **Inställningar**.

På den här sidan kan du välja mellan **Windows (EN)** och **Windows (DE)** för respektive språk och välja att installera om servern.

![](https://screensaver01.zap-hosting.com/index.php/s/gxw8pKDr8sBBTHQ/preview)

När du startat ominstallationen, ha tålamod då det kan ta upp till 30 minuter för servern att slutföra processen.

<InlineVoucher />