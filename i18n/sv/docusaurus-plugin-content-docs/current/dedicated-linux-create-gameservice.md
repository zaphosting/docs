---
id: dedicated-linux-create-gameservice
title: "Dedikerad Server: Sätt upp din Dedikerade Spelserver som en Linux-tjänst"
description: "Upptäck hur du sätter upp och hanterar dedikerade spelserver-tjänster på Linux för smidig automation och enkel kontroll → Lär dig mer nu"
sidebar_label: Sätt upp Linux-tjänst
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Tjänster är en självklar del av Linux och syftar på en process eller applikation som körs i bakgrunden, antingen som en fördefinierad uppgift eller en händelsebaserad uppgift. Detta ger flera fördelar, inklusive automatisk serverstart vid boot, automatiska serveruppdateringar, enkel hantering och tillgång till loggar, och mycket mer! I den här guiden går vi igenom hur du skapar en tjänst för din dedikerade spelserver.

## Förberedelser

Börja med att ansluta till din dedikerade server via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md)-guide om du behöver hjälp med detta.

Du bör också följa någon av våra guider för dedikerade spelservrar i den här sektionen för att installera och konfigurera en spelserver på ditt Linux-system. I den här guiden använder vi [Palworld dedikerad spelserver](dedicated-linux-palworld.md) som exempel, men instruktionerna kan anpassas för alla våra guider.

## Skapa en tjänst

Börja med att skapa en ny tjänstfil för den dedikerade spelserver du har satt upp. Byt ut `[your_game]` mot det namn du vill använda. Vi rekommenderar att använda spelets namn för att hålla ordning, så vi använder `palworld.service`.
```
sudo nano /etc/systemd/system/[your_game].service
```

## Sätta upp tjänsten

När nano-editorn är öppen, kopiera följande grundläggande innehåll som är en mall för tjänstfilen som du kan återanvända. Vi har två versioner, en för guider som använder SteamCMD och en annan för icke-SteamCMD-spel.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="SteamCMD-spel" default>

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="Vanligt spel">

```
[Unit]
Description=[your_server] Server
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

Låt oss bryta ner innehållet i filen för att förstå allt bättre.
- `Description`: Kan vara vad som helst, användbart för att enkelt skilja tjänstens syfte.
- `User`: Med våra guider bör du ha skapat en separat `steam`-användare för SteamCMD, eller `gameservers`-användaren för icke-SteamCMD-spel. Om inte, ska detta vara den användare som ska köra tjänsten.
- `WorkingDirectory`: Sökvägen till huvudmappen som innehåller allt tjänsten behöver.
- `ExecStartPre` (endast SteamCMD): Här sätter vi upp samma SteamCMD-installationskommando som tidigare, som körs varje gång servern startas om för att säkerställa att den är uppdaterad. Kopiera detta från respektive dedikerad spelserver-guide, eller ersätt värdena manuellt med spelets värden.
- `ExecStart`: Den fördefinierade uppgiften som ska köras med tjänsten. Kopiera sökvägen från respektive dedikerad spelserver-guide, eller ersätt värdena manuellt för att navigera till startfilen.
:::important Wine-kompatibilitetslager
För spel som kräver **Wine**-kompatibilitetslagret för att kunna köras, bör du inkludera **xvfb-run** och **wine** i `ExecStart`-parametern. Exempel för V-Rising:
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

Se även till att ditt `ExecStartPre` SteamCMD-installationskommando inkluderar `+@sSteamCmdForcePlatformType`-parametern om det behövs för att tvinga en plattformsvariant.
:::

När du anpassat alla värden för din dedikerade spelserver kan du spara filen och avsluta nano med `CTRL + X`, följt av `Y` för att bekräfta och sedan `ENTER`.

Med vårt Palworld-exempel skulle filen se ut så här:
```
[Unit]
Description=Palworld Server
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## Hantera tjänsten

När din tjänstfil är skapad behöver du aktivera den. Med exemplet `palworld.service` ersätts `[your_service]` med bara `palworld`.
```
sudo systemctl enable [your_service]
```

:::tip
Om du gör ändringar i din tjänstfil, glöm inte att köra `systemctl daemon-reload` efteråt för att ändringarna ska träda i kraft.
:::

Du kan nu starta servern med kommandot `systemctl start`. På samma sätt kan du enkelt stoppa och starta om servern med liknande kommandon.
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
För att se detaljer om tjänsten kan du använda kommandot `systemctl status`. Om du behöver loggar för felsökning kan du använda `journalctl -u [your_service].service` för att visa de senaste loggarna från tjänsten.
:::

Slutligen, om du vill stoppa tjänsten från att starta automatiskt vid boot, kan du enkelt inaktivera den.
```
sudo systemctl disable [your_service]
```

## Slutsats

Du har nu framgångsrikt satt upp en tjänst för din dedikerade spelserver. Servern startar nu automatiskt vid serverns uppstart.

Du har också lärt dig om innehållet i tjänstfilen samt hur du hanterar tjänsten med olika kommandon.