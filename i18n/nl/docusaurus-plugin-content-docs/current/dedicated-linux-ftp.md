---
id: dedicated-linux-ftp
title: "Dedicated Server: FTP-service werkt niet - Problemen oplossen"
description: "Leer hoe je FTP-toegangsproblemen op je VPS oplost om de serverconnectiviteit te herstellen en je game- of Teamspeak-server effectief te beheren → Meer weten no"
sidebar_label: FTP-service werkt niet
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wat kun je doen als je game- of teamspeak-server niet via FTP bereikbaar is?

:::info
Let op: De volgende stappen werken alleen op je eigen VPS als de ZAP-webinterface geïnstalleerd is!
:::

Als je server niet via FTP te bereiken is, is de FTP-service (ProFTPD) meestal niet actief. In zeldzame gevallen kan het ook door een verkeerde configuratie komen of doordat de FTP-poort 21 bezet is door een ander programma.

## Check het FTP-probleem wat dieper:

### Beschikbaarheid checken
Dit doe je makkelijk via de FTP-browser in de webinterface. Klik in het menu onder Tools van de betreffende server op "FTP browser".

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

Klik daarna één keer op de knop "Directe Verbinding".

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

Waarschijnlijk zie je nu dit scherm:

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

Omdat het nu duidelijk is dat een verbinding via WebFTP of een FTP-tool niet lukt, moet je de FTP-service op de VPS eens goed checken.

### Check de status van ProFTPD

Verbind via SSH / Console met je server en voer het commando `service proftpd status` uit. De status wordt dan uitgelezen en getoond:

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)

Hier zie je dat de status “dead” is, oftewel de service is offline en dus niet bereikbaar.

### FTP-service herstarten
Je kunt de FTP-service herstarten met dit commando:

```
service proftpd start
```

Als er na het uitvoeren geen foutmelding komt, is de service meestal weer online/beschikbaar.

Controleer dit daarna nog even met `service proftpd status`. Het zou er zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

Omdat de status nu “active” is en niet meer “dead”, kun je opnieuw proberen verbinding te maken via je FTP-tool of WebFTP.

### Check de verbinding opnieuw
Je zou nu verbinding moeten kunnen maken en je bestanden moeten kunnen bekijken.

### Probleem opgelost
✅ De FTP-service (ProFTPD) draait weer en er staat niks meer in de weg voor data-uitwisseling!