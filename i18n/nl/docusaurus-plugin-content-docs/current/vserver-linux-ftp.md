---
id: vserver-linux-ftp
title: "VPS: FTP-service werkt niet - Problemen oplossen"
description: "Leer hoe je FTP-toegang op je VPS kunt herstellen als game- of Teamspeak-servers niet bereikbaar zijn → Ontdek het nu"
sidebar_label: FTP-service werkt niet
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Wat kun je doen als de game-server of teamspeak-server niet via FTP bereikbaar is?

:::info
Let op: De volgende stappen werken alleen op je eigen VPS als de ZAP-webinterface is geïnstalleerd!
:::

Als de aangemaakte server niet via FTP te bereiken is, is de FTP-service (ProFTPD) in de meeste gevallen niet actief. In zeldzame gevallen kan dit ook komen door een verkeerde configuratie of een bezette poort, bijvoorbeeld als FTP-poort 21 in gebruik is door een ander programma.

## FTP-probleem nader bekijken:

### Beschikbaarheid controleren
Dit kun je eenvoudig doen via de FTP-browser in de webinterface. Klik in het menu onder Tools van de betreffende server op "FTP-browser".

![](https://screensaver01.zap-hosting.com/index.php/s/GiqyC6G5cLsbSqp/preview)

Klik daarna één keer op de knop "Directe verbinding".

![](https://screensaver01.zap-hosting.com/index.php/s/ZSbrF5raYzdMgzZ/preview)

Waarschijnlijk zie je nu het volgende scherm:

![](https://screensaver01.zap-hosting.com/index.php/s/GtcCWfqadKGJoY7/preview)

Omdat nu duidelijk is dat een verbinding via WebFTP of een FTP-tool niet mogelijk is, moet je de FTP-service op de VPS nader bekijken.

### Status van ProFTPD controleren

Verbind hiervoor via SSH / Console met je server en voer het commando "service proftpd status" uit. De status wordt nu uitgelezen en weergegeven:

![](https://screensaver01.zap-hosting.com/index.php/s/TWqySPM3D5RmgYL/preview)

Hier zie je dat de status "dead" aangeeft, oftewel de service is offline en daardoor niet bereikbaar.

### FTP-service herstarten
De FTP-service kun je herstarten met het volgende commando:

```
service proftpd start
```

Als er na het uitvoeren van het commando geen reactie komt, is de service meestal weer online/beschikbaar.

Dit kun je vervolgens controleren met het commando "service proftpd status". Het zou er zo uit moeten zien:

![](https://screensaver01.zap-hosting.com/index.php/s/iYxKMLJ2QfgzBKD/preview)

Omdat de status nu weer "active" is en niet meer "dead", kun je opnieuw proberen verbinding te maken via de FTP-tool en WebFTP.

### Verbind opnieuw
Je zou nu verbinding moeten kunnen maken en je data moeten kunnen bekijken.

### Probleem opgelost
✅ De FTP-service (ProFTPD) is nu gestart/actief en er staat niets meer in de weg voor data-uitwisseling!

<InlineVoucher />