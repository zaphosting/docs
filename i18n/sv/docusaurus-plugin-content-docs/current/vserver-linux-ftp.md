---
id: vserver-linux-ftp
title: "VPS: FTP-tjänsten fungerar inte - Felsökning"
description: "Lär dig hur du felsöker och återställer FTP-åtkomst på din VPS när spel- eller Teamspeak-servrar är otillgängliga → Läs mer nu"
sidebar_label: FTP-tjänsten fungerar inte
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Vad kan du göra om spelservern eller teamspeak-servern inte är åtkomlig via FTP?

:::info
Obs: Följande steg fungerar bara på din egen VPS om ZAP-webbgränssnittet är installerat!
:::

Om den skapade servern inte går att nå via FTP är FTP-tjänsten (ProFTPD) oftast inte aktiv. I sällsynta fall kan det också bero på en felaktig konfiguration eller en upptagen port, alltså att FTP-port 21 används/upptas av ett annat program.

## Kolla FTP-problemet närmare:

### Kontrollera tillgänglighet
Det kan du enkelt göra med FTP-browsern i webbgränssnittet. Klicka på "FTP-browser" i menyn under Verktyg för den aktuella servern

![](https://screensaver01.zap-hosting.com/index.php/s/GiqyC6G5cLsbSqp/preview)

Tryck sedan på knappen "Direktanslutning" en gång.

![](https://screensaver01.zap-hosting.com/index.php/s/ZSbrF5raYzdMgzZ/preview)

Nu ser du troligtvis följande bild:

![](https://screensaver01.zap-hosting.com/index.php/s/GtcCWfqadKGJoY7/preview)

Eftersom det nu är klart att en anslutning via WebFTP eller FTP-verktyg inte är möjlig måste du kolla närmare på FTP-tjänsten på VPS:en.

### Kontrollera ProFTPD-status

För att göra det ansluter du till din server via SSH / Konsol och skriver sedan kommandot "service proftpd status". Statusen läses då av och visas så här:

![](https://screensaver01.zap-hosting.com/index.php/s/TWqySPM3D5RmgYL/preview)

Där ser du att statusen rapporterar "dead", alltså är tjänsten offline och därmed inte åtkomlig.

### Starta om FTP-tjänsten
FTP-tjänsten kan startas om med följande kommando:

```
service proftpd start
```

Om det inte kommer något svar efter att kommandot körts är tjänsten oftast online/tillgänglig igen.

Det hela kan sedan kontrolleras igen med kommandot "service proftpd status". Det bör se ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/iYxKMLJ2QfgzBKD/preview)

Eftersom statusen nu är "active" igen och inte längre "dead" kan FTP-anslutningen testas igen med FTP-verktyget och WebFTP.

### Testa anslutningen igen
Nu borde du kunna ansluta och se dina filer.

### Problem löst
✅ FTP-tjänsten (ProFTPD) är nu startad/aktiv igen och inget står i vägen för datautbyte!

<InlineVoucher />