---
id: minecraft-pluginuploader
title: "Minecraft: Server med ZAP-Hosting Plugin Uploader"
description: "Upptäck hur du enkelt hanterar Minecraft-server-plugins för Spigot eller Bukkit-servrar och förbättrar din spelupplevelse → Läs mer nu"
sidebar_label: Plugin Uploader
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugin Uploader

Klicka på din Minecraft-server i serveröversikten. Välj sedan fliken Plugins, som finns under Inställningar.

:::info
Se till att ditt spel är Spigot eller Bukkit. Plugin uploadern finns bara där.
:::

## Installera/Ladda upp Plugins

Det finns två sätt att installera ett plugin på din Minecraft-server.

- Du kan installera ett plugin från våra förvalda listor (om tillgängligt)
- Du kan ladda upp egna plugins via drag'n drop

### Plugins från lista

Välj ditt önskade plugin från listan "Alla plugins" och klicka på den gröna "Installera"-knappen. Installationen kan ta en liten stund beroende på pluginets storlek.

![](https://screensaver01.zap-hosting.com/index.php/s/dxrtY8pQwmtfEP9/preview)

### Ladda upp ditt eget Plugin

Dra önskad plugin .jar-fil till rutan som är markerad på bilden. Det går även att dra in och installera flera plugins samtidigt i detta område.

![](https://screensaver01.zap-hosting.com/index.php/s/fM2a4AeyspaQzYd/preview)

När du har dragit in pluginet i uppladdningsfältet tar det en liten stund innan pluginet finns på servern.

För att kunna använda pluginet måste du ladda om servern med kommandot `/rl` eller `/reload` via din spelserverkonsol (eller starta om hela servern).

:::info
I sällsynta fall måste servern startas om för att pluginet ska fungera smidigt.
:::


## Avinstallera Plugin

![](https://screensaver01.zap-hosting.com/index.php/s/dKaeJr8M3jzgMBS/preview)

För att avinstallera ett plugin klickar du på den röda papperskorgen bredvid pluginet.

## Inaktivera Plugin

Klicka på den gröna knappen med lås-ikonen bakom ett installerat plugin. Om knappen ändrar färg från grön till orange har du inaktiverat pluginet. Gör du tvärtom aktiverar du pluginet igen. Plugin-filen finns kvar på servern efter inaktivering, men laddas inte längre av spelservern.

:::info
Efter att du inaktiverat pluginet måste du ladda om servern för att ändringarna ska träda i kraft. Använd något av följande kommandon i din spelserverkonsol eller in-game: `/rl` eller `/reload`
:::

## Vanliga Problem

**Mitt plugin går inte att ladda upp via "Drag'n Drop"-området.**

Förslag på lösningar:

- Ditt plugin kan vara större än 5 MB och därmed olämpligt för uppladdning via webbgränssnittet. Använd istället en FTP-klient.
- FTP-rättigheter kan ställa till problem. För att fixa det, klicka på fliken FTP-browser i webbgränssnittet och tryck på knappen Återställ FTP-rättigheter. Då ska du kunna ladda upp plugins igen.
- Ditt plugin kan vara ogiltigt och sakna en korrekt plugin.yml. Använd i så fall en FTP-klient som alternativ.
- Ibland laddas inte listan om. Ladda helt enkelt om sidan med F5 eller liknande.

### Mitt plugin går inte att ta bort längre.

:::info
Kontakta supporten i det här fallet.
:::

### Mitt plugin går inte att inaktivera/aktivera.

Förslag på lösningar:

- Finns pluginet kvar på servern? Kontrollera detta genom att klicka på Uppdatera-knappen vid tabellens kant. Detta synkroniserar listan med plugins som faktiskt finns på servern. Nu visas bara plugins som finns på servern.

### Plugins saknas i Alla Plugins-sektionen.

Förslag på lösningar:

- Det kan saknas en aktuell version av pluginet för den version av din spelserver som är installerad. För att efterfråga ett plugin, använd den blå knappen Plugin saknas?.

![](https://screensaver01.zap-hosting.com/index.php/s/DeMjH2s74geaLPq/preview)

### Avinstallera/Installera i den förvalda listan verkar inte fungera.

Förslag på lösningar:

- Ladda om sidan för att lösa problemet.

### Ett plugin visas som inte alls finns på servern.

Förslag på lösningar:

- Ta bort plugin-posten genom att klicka på avinstallera-knappen.
- Alternativt kan du prova att klicka på Synkronisera-knappen.

<InlineVoucher />