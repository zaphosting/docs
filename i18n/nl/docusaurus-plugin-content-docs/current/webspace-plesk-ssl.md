---
id: webspace-plesk-ssl
title: "Webspace: SSL-certificaat aanmaken"
description: "Ontdek hoe je je website beveiligt met SSL-encryptie en HTTPS inschakelt voor veiliger surfen → Leer het nu"
sidebar_label: SSL-certificaat aanmaken
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Website beveiligen met SSL

:::info
Er wordt vanuit gegaan dat de domeinnaam al naar het IP-adres van de webspace verwijst.
:::

Als een domein wordt aangemaakt in de webspace, is deze in het begin altijd onbeveiligd. Dit zie je in het Plesk-paneel:

![](https://screensaver01.zap-hosting.com/index.php/s/kkJ67Pd733pt95i/preview)

En de melding in de browser bij het openen van het domein:

![](https://screensaver01.zap-hosting.com/index.php/s/5iwXSgEb4LrY3xf/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/mpmK8TAjAsgY3FW/preview)

Met een SSL-certificaat kun je een domein dus beveiligen/encrypten.

<InlineVoucher />

## Certificaat aanmaken

Stap 1️⃣: Dubbelklik op "SSL/TLS-certificaat" om het volgende menu te openen:

![](https://screensaver01.zap-hosting.com/index.php/s/g5sr6WC4eawqzoF/preview)

Je kunt gratis een Let's Encrypt-certificaat aanvragen.

Stap 2️⃣: Vul de gevraagde gegevens in. Om het certificaat aan te vragen, moeten er gegevens ingevuld worden.

Je moet een e-mailadres opgeven en aangeven waarvoor het certificaat geldig moet zijn. Meestal is de subdomein "www" ook actief, dus die wordt ook geselecteerd als deze in de DNS van het domein staat.

![](https://screensaver01.zap-hosting.com/index.php/s/Mwf3CEWsYRwprS3/preview)

Het certificaat wordt aangevraagd door op "Get it free" te klikken.

Stap 3️⃣: Het certificaat is nu aangemaakt, dat zie je rechtsboven. Daarnaast moet nu de automatische doorverwijzing van HTTP naar HTTPS worden ingeschakeld, want anders werkt de encryptie niet:

![](https://screensaver01.zap-hosting.com/index.php/s/YBdGQqmtNeWKdxA/preview)

Als dit gedaan is, is de doorverwijzing actief. Of je nu de pagina opent met http of https in de browser, je wordt altijd doorgestuurd naar https.

Stap 4️⃣: Je kunt nu in de browser checken of het certificaat herkend wordt:

Het slotje moet zichtbaar zijn:

![](https://screensaver01.zap-hosting.com/index.php/s/DkZoqg9XGgR67EK/preview)

De certificaatinfo, die je opent door op het slotje te klikken, moet ook het domein tonen:

![](https://screensaver01.zap-hosting.com/index.php/s/p5H6RZ25HksHsow/preview)

De website is nu goed beveiligd/encrypt.

## Certificaten voor subdomeinen

Dezelfde stappen kun je in theorie ook volgen voor een subdomein. Maar er is ook een makkelijkere manier om alle subdomeinen tegelijk te beveiligen, ongeacht of ze al bestaan of nieuw zijn. Hiervoor gebruik je een "wildcard-certificaat". Hiervoor is een speciale TXT-record nodig in de DNS van het domein. Zodra die er is, kan het SSL-certificaat voor alle subdomeinen worden uitgegeven.

Stap 1️⃣: Open opnieuw het SSL/TLS-certificaatmenu.

![](https://screensaver01.zap-hosting.com/index.php/s/X4kFeMomqmz3nGp/preview)

Klik dan linksboven op "Renew Certificate". 
Nu opent het Let's Encrypt aanvraagvenster:

![](https://screensaver01.zap-hosting.com/index.php/s/eCcFtaJHxW3XWgF/preview)

Selecteer nu "Secure the wildcard domain":

![](https://screensaver01.zap-hosting.com/index.php/s/5STxWaKf3JWGfZe/preview)

De subdomeinen "www" en "webmail" worden automatisch toegevoegd.
Klik daarna weer op "Get it free".

Stap 2️⃣: Er verschijnt nu een blauw vak met belangrijke info:

![](https://screensaver01.zap-hosting.com/index.php/s/JHag4cd85Lq6gwx/preview)

Er wordt een domeinnaam en een waarde gegeven. Dit moet permanent als TXT-record in de DNS van het domein staan, zodat Let's Encrypt kan verifiëren dat het domein echt is.

Een DNS-record ziet er zo uit:

![](https://screensaver01.zap-hosting.com/index.php/s/qPCeWj5dJRFfYFB/preview)

:::info
Een DNS-record kan tot 24 uur duren voordat het wereldwijd bereikbaar is.
:::

Om te checken of de TXT-record al actief is, kun je de "TXT Lookup SuperTool" van mxtoolbox gebruiken: https://mxtoolbox.com/SuperTool.aspx:

![](https://screensaver01.zap-hosting.com/index.php/s/CPSSWeQRpTDsagY/preview)

Als de ingevoerde record al zichtbaar is, kun je in het blauwe vak in Plesk op "Reload" klikken. Nu wordt gecontroleerd of de DNS-record aanwezig is. Als dat zo is, verschijnt na een paar seconden "protected" bij "SSL/TLS-holder Certificate" oftewel "Wildcard Certificate":

![](https://screensaver01.zap-hosting.com/index.php/s/AwWiJboz3k6iea8/preview)

Als je nu een subdomein aanmaakt, is die meteen beveiligd:

![](https://screensaver01.zap-hosting.com/index.php/s/XLHzsgkeLmwJ55m/preview)

De volledige datatransfer naar de site is nu versleuteld, klaar!

<InlineVoucher />