---
id: domain-cloudflare-setup
title: "Domän: Ställa in domän med Cloudflare"
description: "Upptäck hur du förbättrar din webbplats säkerhet och prestanda med Cloudflare för ZAP-Hosting-domäner → Lär dig mer nu"
sidebar_label: Cloudflare-inställning
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Cloudflare är en superpopulär CDN (Content Delivery Network)-leverantör som boostar din webbplats med bättre säkerhet, DDoS-skydd och enkel hantering via deras dashboard. Den här guiden visar hur du ställer in din ZAP-Hosting-domän för att använda Cloudflare genom ExpertDNS och att justera nameservers.

<InlineVoucher />

## Förberedelser
För att följa den här guiden behöver du:
- En domän på ditt ZAP-Hosting-konto
- Ett Cloudflare-konto
  
## Steg 1: Aktivera ExpertDNS-alternativet

Börja med att gå till webbgränssnittet för din valda domän på ditt ZAP-Hosting-konto. Hitta **ExpertDNS**-alternativet och aktivera det genom att kryssa i rutan och klicka på spara.

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## Steg 2: Ställa in din domän på Cloudflare

Nästa steg sker i Cloudflare, så logga in på ditt Cloudflare-konto. När du är inloggad, lägg till din webbplats i dashboarden genom att följa Cloudflares egna installationssteg.

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

När du kommer till steg 4 i processen får du nameservers som du måste ställa in.

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

Gå tillbaka till din domäns webbpanel och öppna **ExpertDNS**-sektionen. Ta bort ZAP-Hostings standard nameservers och ersätt dem med de som Cloudflare gav dig.

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

Glöm inte att spara ändringarna när du är klar.

## Steg 3: Slutföra inställningen på Cloudflare

Gå tillbaka till Cloudflare-dashboarden. På sidan där du gjorde inställningarna för din domän ska du kunna klicka på en knapp för att tvinga Cloudflare att kolla dina nameservers igen.

:::info
Det kan ta upp till 24 timmar innan dina nameserver-ändringar registreras, men oftast går det mycket snabbare.
:::

När Cloudflare har registrerat dina nameserver-ändringar får du ett mejl som berättar att din setup är klar. Du kan också kolla i Cloudflare-dashboarden. En lyckad setup visar **Active** under din domän.

Grattis! Du har nu kopplat din domän till Cloudflare och fått bättre prestanda, säkerhet och enklare hantering för din webbplats.

<InlineVoucher />