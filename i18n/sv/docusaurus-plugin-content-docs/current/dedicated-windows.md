---
id: dedicated-windows
title: "Dedikerad Server: Installation av Windows Server 2025"
description: "Upptäck hur du installerar och konfigurerar Windows Server 2025 på din dedikerade server för optimal prestanda → Läs mer nu"
sidebar_label: Windows Server 2025
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Här går vi igenom steg för steg hur du installerar och konfigurerar Windows Server-operativsystemet på din dedikerade server. Följ instruktionerna noggrant för att säkerställa en lyckad installation och optimal användning.



:::info Windows Server 2025

Installationsstegen och demonstrationerna i den här guiden baseras på **Windows Server 2025**. **Äldre OS-versioner** kan skilja sig i **struktur** och **utseende**, men själva processen är liknande.  
:::





## Förberedelser
För att installera och konfigurera ett operativsystem är det först viktigt att montera rätt ISO-fil för operativsystemet. Det finns flera sätt att göra detta på:

1. Montera via initial setup
2. Montera via iLO (Virtual Media)
3. Montera via iLO (Remote Console)

Om du inte är van vid att montera ISO-filer än, kolla gärna in våra guider för [Initial setup](dedicated-setup.md) eller [Egen ISO](dedicated-iso.md).



## Installation

När ISO-filen är monterad startar installationen av Windows Server automatiskt vid nästa omstart. Först väljer du språk och tangentbordslayout. Sedan väljer du installationsalternativet där du klickar på **Install Windows Server**.

![img](https://screensaver01.zap-hosting.com/index.php/s/gW4cr5WDGYEdBzw/download)

När installationen startat förbereder systemet nödvändiga komponenter. Det kan ta en stund. När det är klart väljer du vilken Windows Server-version du vill installera. Följande versioner finns:

- Windows Server 2025 Standard Evaluation
- Windows Server 2025 Standard Evaluation (Desktop Experience)
- Windows Server 2025 Datacenter Evaluation
- Windows Server 2025 Datacenter Evaluation (Desktop Experience)

Om du vill ha ett grafiskt gränssnitt och använda RDP bör du välja någon av Desktop Experience-varianterna. Mer info om skillnaderna mellan Standard och Datacenter hittar du på [Microsofts officiella sida](https://learn.microsoft.com/en-us/windows-server/get-started/editions-comparison?pivots=windows-server-2025).

:::warning Windows Server-versioner och licenser
Se till att du väljer den serverversion du har giltig licens för. ZAP-Hosting tillhandahåller inte Windows Server-licenser för den här produkten. När testperioden går ut måste licensen köpas separat.
:::

Efter att du valt version bekräftar du villkoren och väljer partitionen där operativsystemet ska installeras. Skapa en ny partition genom att klicka på **Create Partition**, välj sedan den nya disken/partitionen och klicka på Nästa. Starta installationen genom att **klicka** på Install.

![img](https://screensaver01.zap-hosting.com/index.php/s/2RQcBKiqoJE9MAg/download)

Nu påbörjas installationen av Windows Server. Systemet kommer att starta om flera gånger under processen. Det kan ta en stund innan allt är klart.

Ange inloggningsuppgifter och du är redo att logga in i ditt installerade operativsystem. Spara dina inloggningsuppgifter noga, du kommer behöva dem varje gång du loggar in.

![img](https://screensaver01.zap-hosting.com/index.php/s/FiXwH85pT24DYnJ/download)



## Konfiguration

När operativsystemet är installerat behöver du aktivera RDP-access så att externa anslutningar tillåts. Gå till inställningarna för fjärrskrivbord och slå på rätt alternativ.

![img](https://screensaver01.zap-hosting.com/index.php/s/gCCcTzpn69LpgSr/download)



## Avslutning
Grattis, du har nu installerat Windows Server 2025 på din dedikerade server! Har du frågor eller behöver hjälp är vårt supportteam redo att hjälpa dig varje dag! 🙂