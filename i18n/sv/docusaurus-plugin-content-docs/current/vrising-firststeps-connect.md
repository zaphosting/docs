---
id: vrising-firststeps-connect
title: "V Rising: Anslut till V Rising-server"
description: "Upptäck hur du ansluter till din V Rising-server direkt eller via serverlistan för en smidig spelupplevelse → Lär dig mer nu"
sidebar_label: Anslut till Server
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

I den här guiden går vi igenom hur du ansluter till din V Rising-server. Det finns två sätt att ansluta: antingen direkt via serverns IP-adress eller via serverlistan. Vi rekommenderar att du konfigurerar servern efter dina önskemål innan, läs mer om detta i vår [Serverkonfiguration](vrising-configuration.md)-guide.

<InlineVoucher />

## Direktanslutning via IP

### Hitta serverns IP

Först behöver du veta IP och Port för din V Rising-server för att kunna ansluta direkt. Gå helt enkelt till ditt [ZAP-Hosting webbgränssnitt](https://zap-hosting.com/en/customer/) på sidan och ha IP och Port redo.

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

Om du kör din V Rising-server som en extern dedikerad server är IP:n den för värddatorn och porten är den du har satt i din konfigurationsfil (standard är 9876). Kolla in vår [Serverkonfiguration](vrising-configuration.md)-guide för mer info om porten.

### Ansluta i spelet

Starta V Rising från din spelklient. I huvudmenyn väljer du **Play**, följt av **Online Play**.

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

Välj den spelläge du ska spela, eller tryck på **Show all Servers** nere till höger för att gå direkt till serverlistan.

Tryck nu på **Direct Connect** längst ner och skriv in din IP följt av porten, exempelvis: `123.456.679.123:9876`. Om det finns ett lösenord kommer spelet be dig skriva in det efter anslutning.

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

Om du inte kan ansluta och får ett timeout-fel, dubbelkolla att IP och port är rätt och att servern är online. Du kan använda konsolsektionen i ditt webbgränssnitt för V Rising-servern för felsökning.

## Anslut via serverlistan

Det enklaste sättet att ansluta till din server är via serverlistan. Men då måste servern vara satt till publik i serverkonfigurationen.

Kolla in vår [Serverkonfiguration](vrising-configuration.md) för att lägga till rätt `Name` och `ListOnMasterServer` parametrar i din konfigurationsfil eller via webbpanelen.

När det är klart, välj i huvudmenyn **Play**, följt av **Online Play** och tryck igen på **Show all Servers** nere till höger. Nu kan du använda serverlistan för att hitta din server med hjälp av filter som namn, spelläge, svårighetsgrad och mycket mer.

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />