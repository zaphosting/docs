---
id: webspace-plesk-ssl
title: "Webbplatsutrymme: Skapa SSL-certifikat"
description: "Upptäck hur du säkrar din webbplats med SSL-kryptering och aktiverar HTTPS för säkrare surfning → Lär dig mer nu"
sidebar_label: Skapa SSL-certifikat
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Kryptera webbplats med SSL

:::info
Det förutsätts att domänen redan pekar på IP-adressen för webbplatsutrymmet.
:::

När en domän skapas i webbplatsutrymmet är den alltid okrypterad från början. Det syns i Plesk-panelen:

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

Och notifikationen i webbläsaren när domänen öppnas:

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

Med ett SSL-certifikat kan en domän skyddas/krypteras på rätt sätt.

<InlineVoucher />

## Skapa certifikatet

Steg 1️⃣: Dubbelklicka på "SSL/TLS Certificate" så öppnas följande meny:

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

Ett Let's Encrypt-certifikat kan begäras helt gratis.

Steg 2️⃣: Fyll i den efterfrågade informationen. För att certifikatet ska kunna begäras måste detaljer anges.

En mailadress måste anges och det måste kryssas för vad certifikatet ska gälla för. Som regel har varje domän även subdomänen "www" aktiv, därför väljs den också om den finns inlagd i domänens DNS.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

Certifikatet begärs sedan genom att klicka på "Get it free".

Steg 3️⃣: Certifikatet är nu skapat, det syns uppe till höger. Dessutom måste automatisk omdirigering från HTTP till HTTPS aktiveras, annars kan inte kryptering upprättas:

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

När detta är gjort är omdirigeringen aktiv. Oavsett om du öppnar sidan med http eller https direkt i webbläsaren så dirigeras du alltid till https.

Steg 4️⃣: Nu kan du kolla i webbläsaren om certifikatet känns igen:

Låset måste synas:

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

Certifikatsinformationen, som öppnas genom att klicka på låset, bör också visa domänen:

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

Webbplatsen är nu korrekt skyddad/krypterad.

## Certifikat för subdomäner

Samma steg kan i teorin följas för en subdomän. Men det finns också ett enklare sätt att kryptera alla subdomäner samtidigt, oavsett om de redan finns eller är nya. Ett "wildcard-certifikat" kan användas för detta. Det kräver en speciell TXT-post i domänens DNS. Så fort den finns kan ett SSL-certifikat utfärdas för alla subdomäner.

Steg 1️⃣: Menyn för SSL/TLS-certifikat öppnas igen.

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

Klicka sedan på "Renew Certificate" uppe till vänster. 
Nu öppnas Let's Encrypt-begäran:

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

Välj nu "Secure the wildcard domain":

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

Subdomänerna "www" och "webmail" läggs till automatiskt.
Knappen "Get it free" klickas på igen.

Steg 2️⃣: En blå ruta med viktig info dyker upp:

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

Där står ett domännamn och ett värde. Detta måste finnas permanent som en TXT-post i domänens DNS, det är enda sättet för Let's Encrypt att säkerställa att domänen är äkta och kan verifieras.

En DNS-post ska se ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
En DNS-post kan ta upp till 24 timmar innan den är tillgänglig överallt i världen.
:::

För att kolla att TXT-posten redan är aktiv kan "TXT Lookup SuperTool" från mxtoolbox användas: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

Om posten visas kan du bekräfta i den blå rutan i Plesk genom att klicka på "Reload". Nu kontrolleras om DNS-posten finns, och när den gör det visas efter några sekunder "protected" för "SSL/TLS-holder Certificate" aka "Wildcard Certificate":

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

Om en subdomän skapas nu är den redan skyddad:

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

Nu är hela datatrafiken till sidan krypterad, klart.

<InlineVoucher />