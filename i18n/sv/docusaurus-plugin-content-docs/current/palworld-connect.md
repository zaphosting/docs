---
id: palworld-connect
title: "Palworld: Anslut till Palworld-server"
description: "Upptäck hur du ansluter till din Palworld-server och hoppar in i multiplayer-spel smidigt → Lär dig mer nu"
sidebar_label: Anslut till Server
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I den här guiden går vi igenom hur du ansluter till din Palworld-server. Vi rekommenderar att du konfigurerar servern efter dina önskemål i förväg, läs mer om detta i vår [Serverkonfiguration](palworld-configuration.md)-guide.

:::tip
Vi har nu en separat **Palworld (Xbox)**-version tillgänglig på våra Gameservers, som låter dig spela på Xbox/Microsoft Store-versionerna. Kolla in vår [Spelbyte](gameserver-gameswitch.md)-guide för att enkelt byta spel. Glöm inte att alltid säkerhetskopiera dina sparfiler.
:::

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/eA3xonLFkB4x3G6/preview" title="Sätt upp Palworld-server på bara EN MINUT!" description="Känns det lättare att förstå när du ser det i praktiken? Vi fixar det! Kolla in vår video som förklarar allt. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>

<InlineVoucher />

## Hitta Server-IP

Först och främst behöver du veta IP och Port till din Palworld-server för att kunna ansluta direkt. Gå helt enkelt till ditt [ZAP-Hosting webbgränssnitt](https://zap-hosting.com/en/customer/) på sajten och ha IP och Port redo.

![](https://screensaver01.zap-hosting.com/index.php/s/DRxKHE7bP3FbFMo/preview)

Om du kör din Palworld-server som en extern dedikerad server är IP:t den hostande maskinens och Porten den du satt i din konfigurationsfil (standard är 8211). Kolla in vår [Serverkonfiguration](palworld-configuration.md)-guide för mer info om porten.

## Direktanslutning

Börja med att starta Palworld från din spelklient. I huvudmenyn väljer du **Join Multiplayer Game**.

![](https://screensaver01.zap-hosting.com/index.php/s/TZzLAS29rnpPmi6/preview)

I den dedikerade serverbläddraren scrollar du ner till botten av sidan. Skriv in din IP och Port i sökrutan längst ner. När du är redo, klicka på **Connect** och du ansluts till din server.

:::note
Se till att använda sökrutan längst ner, inte den överst. Den översta används för att söka efter servrar via namn i serverlistan.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CG5gARbSxC3RpTb/preview)

Om du inte kan ansluta och får ett timeout-fel, dubbelkolla att IP och Port är korrekta och att din server är online. Du kan använda konsolsektionen i ditt webbgränssnitt för Palworld-servern för att felsöka.

<InlineVoucher />