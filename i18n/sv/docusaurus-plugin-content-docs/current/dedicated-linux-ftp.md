---
id: dedicated-linux-ftp
title: "Dedikerad Server: FTP-tjänsten fungerar inte - Felsökning"
description: "Lär dig hur du felsöker FTP-åtkomstproblem på din VPS för att återställa serveranslutningen och hantera din spel- eller Teamspeak-server effektivt → Läs mer no"
sidebar_label: FTP-tjänsten fungerar inte
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Vad kan du göra om spelservern eller teamspeak-servern inte är åtkomlig via FTP?

:::info
Obs: Följande steg fungerar endast på din egen VPS om ZAP-webbgränssnittet är installerat!
:::

Om den skapade servern inte går att nå via FTP är FTP-tjänsten (ProFTPD) oftast inte aktiv. I sällsynta fall kan det också bero på en felaktig konfiguration eller en upptagen port, alltså att FTP-port 21 används/upptas av ett annat program.



## Kolla FTP-problemet närmare:

### Kontrollera tillgänglighet
Det kan du enkelt göra med FTP-bläddraren i webbgränssnittet. Klicka på "FTP browser" i menyn under Verktyg för den aktuella servern

![](https://screensaver01.zap-hosting.com/index.php/s/G394GJkDc9WXEzs/preview)

Tryck sedan på knappen "Direktanslutning" en gång.

![](https://screensaver01.zap-hosting.com/index.php/s/KLCmb8A4xSjWmy9/preview)

Nu ser du troligen följande bild:

![](https://screensaver01.zap-hosting.com/index.php/s/FFJo8XeEJcX7RTM/preview)

Eftersom det nu är tydligt att en anslutning via WebFTP eller FTP-verktyg inte är möjlig måste du titta närmare på FTP-tjänsten på VPS:en.

### Kontrollera ProFTPD-status

För att göra detta ansluter du till din server via SSH / Konsol och skriver sedan kommandot "service proftpd status". Statusen läses nu av och visas så här:

![](https://screensaver01.zap-hosting.com/index.php/s/zsg8qwFJsWEAZkA/preview)


Här ser du att statusen rapporterar "dead", alltså är tjänsten offline och därmed inte åtkomlig.


### Starta om FTP-tjänsten
FTP-tjänsten kan startas om med följande kommando:

```
service proftpd start
```

Om det inte kommer något svar efter att kommandot körts är tjänsten vanligtvis online/tillgänglig igen.

Det hela kan sedan kontrolleras igen med kommandot "service proftpd status". Det bör se ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/8QNNnoMFYG4rt2D/preview)

Eftersom status nu är "active" igen och inte längre "dead" kan FTP-anslutningen testas igen med FTP-verktyget och WebFTP.

### Kontrollera anslutningen igen
Du bör nu kunna upprätta en anslutning och se dina filer.

### Problem löst
✅ FTP-tjänsten (ProFTPD) är nu startad/aktiv igen och inget står i vägen för datautbyte!