---
id: gameserver-tebex
title: 'Gameserver: Tebex monetiseringssetup'
description: "Upptäck hur du kan tjäna pengar på din gameserver med Tebex och öka intäkterna från försäljning av in-game items och ranks → Läs mer nu"
sidebar_label: Tebex Monetisering
services:
  - gameserver
---

import Cards, { Card } from '@site/src/components/Cards/Cards';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Tebex är en plattform som låter dig tjäna pengar på din gameserver genom att sälja in-game items, ranks och mycket mer. Plattformen ger dig en proffsig webbutik där du kan sälja varor och följa hur din butik går. Kolla in [tebex.io](https://affiliate.tebex.io/r/690a6731-fee1-4054-84e1-30c26729403a) för mer info om hur det funkar.

<InlineVoucher />

## Stödda spel

Följande spel, som vi även erbjuder för vår egen gameserver-produkt, stöds av Tebex. För mer info och andra tillgängliga spel rekommenderar vi att du kollar in den officiella [webbplatsen](https://www.tebex.io/game-servers).

<Cards columns={2} layout="horizontal">
  <Card title="ARK" description="" link="https://www.tebex.io/pricing-for-game-servers/ark" image="https://screensaver01.zap-hosting.com/index.php/s/qnWELD8ik9srBDG/preview"/>
  <Card title="CS:GO" description="" link="https://www.tebex.io/pricing-for-game-servers/csgo" image="https://screensaver01.zap-hosting.com/index.php/s/RojGnj9TcpGSdzm/preview"/>
  <Card title="Minecraft" description="" link="https://www.tebex.io/pricing-for-game-servers/minecraft" image="https://screensaver01.zap-hosting.com/index.php/s/e6BtaFzTZ7czqXy/preview"/>
  <Card title="FiveM" description="" link="https://www.tebex.io/pricing-for-game-servers/fivem" image="https://screensaver01.zap-hosting.com/index.php/s/PQKfzYiMAmSjXNz/preview"/>
  <Card title="Hurtworld" description="" link="https://www.tebex.io/pricing-for-game-servers/hurtworld" image="https://screensaver01.zap-hosting.com/index.php/s/EJpzMG9gHL4fe5W/preview"/>
  <Card title="Rust" description="" link="https://www.tebex.io/pricing-for-game-servers/rust" image="https://screensaver01.zap-hosting.com/index.php/s/G82jnYsbexscj5W/preview"/>
  <Card title="Space Engineers" description="" link="https://zap-hosting.com/guides/docs/spaceengineers-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/wgp2Jofo2BTkcR9/preview"/>
  <Card title="Team Fortress 2" description="" link="https://zap-hosting.com/guides/docs/tf2-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/PPRN8qRJDBjEzmG/preview"/>
  <Card title="Unturned" description="" link="https://www.tebex.io/pricing-for-game-servers/7-days-to-die" image="https://screensaver01.zap-hosting.com/index.php/s/GTxekqqTxQyttDS/preview"/>
  <Card title="Garry's Mod" description="" link="https://zap-hosting.com/guides/docs/gmod-firststeps-dashboard" image="https://screensaver01.zap-hosting.com/index.php/s/LddW8FyQ2ZKKTzN/preview"/>
</Cards>

## Koppla Tebex

Att sätta upp Tebex med ZAP är superenkelt. Installationen och konfigurationen kräver bara några få steg, som vi går igenom mer i detalj nedan.

### Välj stödd titel

Välj ett spel som stöds av Tebex och lägg till det på din gameserver. Klicka på din gameserver och välj `Games` i sidomenyn. Välj ett stödd spel under `Available Games` och klicka på nedladdningsknappen för att installera det.

### Begär Tebex-inbjudan

Om spelet du valde stöder Tebex kommer du att se en flik som heter "Tebex Shop" i sidomenyn. Klicka på bilden som dyker upp när sidan laddas.

![](https://screensaver01.zap-hosting.com/index.php/s/SztAWeeNX8fx5kF/preview)

Tebex skickar nu en inbjudan till den e-postadress som är kopplad till ditt ZAP-Hosting-kundkonto. Följ instruktionerna i mejlet för att aktivera ditt Tebex-konto. Du kommer att guidas genom grundläggande konfiguration av din butik.

### Installera Tebex-plugin

Den här processen är normalt automatiserad. Om vi inte har något plugin för automatisk setup på våra servrar eller om vi saknar pingback från Tebex måste du göra en manuell installation.

### Konfigurera Tebex-plugin

Installera rätt gameserver-plugin för ditt spel manuellt. Installationsprocessen skiljer sig mellan spelen. Grundläggande instruktioner för hur du installerar plugins hittar du [här](https://docs.tebex.io/store/integrating-with-your-game-server-or-website/minecraft-java-edition).

## Verifiera kopplingen med Tebex

Till sist måste du bekräfta att du installerat gameserver-pluginet korrekt.

![](https://screensaver01.zap-hosting.com/index.php/s/DkDtPMtij2QTKGS/preview)

I vissa fall kan du behöva ange din Tebex webbutiks plugin API-nyckel för att etablera kopplingen från ZAP till din Tebex-butik. Då ser du att kopplingen lyckades:
![](https://screensaver01.zap-hosting.com/index.php/s/4YS2SwHfSTgn4DE/preview)

## Slutsats

Du har nu kopplat Tebex till din gameserver-tjänst! Har du fler frågor eller behöver hjälp är det bara att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />