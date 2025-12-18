---
id: beammp-addon-map
title: "BeamMP: Installera Addon-karta"
description: "Upptäck hur du förbättrar din BeamMP-server med custom map addons för bättre multiplayer-upplevelse → Läs mer nu"
sidebar_label: Installera Addon-karta
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

BeamNG.Drive har inbyggt stöd för moddar och en stor community som låter dig utöka och förbättra spelet tillsammans med dina vänner. Eftersom BeamMP bara är en multiplayer-modifikation, bör de flesta map addons vara kompatibla med din BeamMP-server. I den här guiden går vi igenom hur du installerar och aktiverar en custom map addon på din BeamMP-server.

<InlineVoucher />

## Förberedelser

För att installera en addon-karta på din BeamMP-server behöver du ansluta till den via FTP. Om du inte är bekant med detta rekommenderar vi att du kollar in guiden [Access via FTP](gameserver-ftpaccess.md).

Innan du fortsätter med installationen behöver du också hitta de map addons du vill installera på din server. Vi rekommenderar att du kollar in [officiella BeamNG.Drive Forum](https://www.beamng.com/resources/categories/terrains-levels-maps.9/) som har ett enormt bibliotek med mods och map addons skapade av communityn.

:::tip
Eftersom BeamMP är en multiplayer-modifikation för BeamNG.Drive, bör de flesta map addons fungera på din BeamMP-server. Men vissa specifika kartor kan eventuellt inte fungera som förväntat, så du behöver testa varje karta.
:::

## Installation

Börja med att se till att du har laddat ner en addon-karta som du vill lägga till på din server. Den ska vara i `.zip`-format.

### Välja kartnamn

Innan du går vidare är det viktigt att säkerställa att rätt kartnamn används. `.zip`-filen du laddat ner brukar oftast ha rätt namn, men det är inte alltid fallet, så dubbelkolla.

Öppna den nedladdade `.zip`-filen. Inuti hittar du mappen `levels`, som innehåller själva kartan.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Kopiera namnet på mappen för map addon som finns i den här katalogen. Högerklicka på mappen, välj `Egenskaper` och kopiera den markerade texten med `CTRL + C`.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Konfigurera kartan

När du har kartnamnet måste du justera konfigurationsfilen och ändra parametern som anger vilken karta som är aktiv.

#### Avaktivera config-override

Först måste du stänga av standardvalet för karta i inställningarna, eftersom det annars skulle skriva över dina ändringar.

Det gör du enkelt genom att gå till **Settings** i din spelservers webbpanel.

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

Där avaktiverar du inställningen "Map".

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

Glöm inte att spara inställningarna längst ner på sidan.

#### Ändra kartan i config

För att ändra kartan i config går du till **Configs** i webbgränssnittet.

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

Öppna filen `ServerConfig.toml` och leta upp raden:
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

Byt ut värdet till `Map = "/levels/[ditt_kartnamn]/info.json"` med det kartnamn du tog fram tidigare och spara sedan config-filen.

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
I sällsynta fall kan en karta vara formaterad annorlunda. Om kartan inte fungerar efter alla steg kan det vara så att du istället för `Map = "/levels/[ditt_kartnamn]/info.json"` behöver ange: `Map = "/levels/[ditt_kartnamn]/[ditt_kartnamn].mis"`
:::

:::tip
När som helst kan du använda spelets standardkartor igen genom att aktivera inställningen i settings och välja en av dem:
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### Ladda upp kartan

Som sista steg behöver du ladda upp `.zip`-filen med kartan till din BeamMP-server via FTP. Använd gärna vår guide [Access via FTP](gameserver-ftpaccess.md) om du behöver hjälp.

Navigera till följande sökväg i din FTP-klient:
```
../beammp/Resources/Client
```

Dra och släpp helt enkelt din map addon `.zip`-fil hit för att ladda upp kartan till servern. När config-filen är redigerad och kartfilerna uppladdade är din addon-karta redo att användas.

## Avslutning

När du följt alla steg, starta om din BeamMP-server. Du har nu installerat en addon-karta på din BeamMP-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />