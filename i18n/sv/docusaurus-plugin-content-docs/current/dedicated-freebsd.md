---
id: dedicated-freebsd
title: "Dedikerad Server: Installation av FreeBSD"
description: "Upptäck hur du installerar och konfigurerar FreeBSD på din dedikerade server för optimal prestanda och pålitlighet → Lär dig mer nu"
sidebar_label: Installera FreeBSD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Här går vi igenom steg för steg hur du installerar och konfigurerar FreeBSD-operativsystemet på din dedikerade server. Följ instruktionerna noggrant för att säkerställa att du sätter upp operativsystemet korrekt och använder det på bästa sätt.

:::info

Guidens upplägg baseras på FreeBSD version 13.0. Installationer från äldre eller nyare versioner kan skilja sig något i processen.

:::



## Förberedelser

För att installera och konfigurera ett operativsystem är det först viktigt att montera rätt ISO-fil för operativsystemet. Det finns flera sätt att göra detta på:

1. Montera via initial setup
2. Montera via iLO (Virtual Media)
3. Montera via iLO (Remote Console)

Om du inte är van vid att montera ISO-filer än, rekommenderar vi att du kollar in våra guider för [Initial setup](dedicated-setup.md) eller [Egen ISO](dedicated-iso.md).



## Installation
När ISO-filen är korrekt laddad kommer servern in i installationsläget.

![](https://screensaver01.zap-hosting.com/index.php/s/wSa8eGnrtJDLHB5/preview)

Vi startar installationen genom att trycka på `Enter`![](https://screensaver01.zap-hosting.com/index.php/s/CK4xnGEqBe5Kd4y/preview)

Välj tangentbordslayout som du föredrar och fortsätt med continue.

![](https://screensaver01.zap-hosting.com/index.php/s/BSrWrN9TnqEEmmb/preview)

Välj önskat hostname.

![](https://screensaver01.zap-hosting.com/index.php/s/zqXPS6fHdkoMPH2/preview)

Du kan välja valfria systempaket som ska installeras, när du är klar fortsätt med OK.

![](https://screensaver01.zap-hosting.com/index.php/s/zTSBQRGRFLHDxDo/preview)

Här kan du skapa partitioner, i detta exempel använder vi RAID0. Mer info om RAID hittar du i [Konfigurera RAID](dedicated-raid.md)

![](https://screensaver01.zap-hosting.com/index.php/s/DTk5zgjbpCWwbmp/preview)

Du kan fortsätta med `Enter` om inga ändringar ska göras.

![](https://screensaver01.zap-hosting.com/index.php/s/MR3eJKMpdExXnsJ/preview)

Eftersom vi har RAID0 väljer vi ingen redundans.

![](https://screensaver01.zap-hosting.com/index.php/s/Qf5JZMKs5HzDXnT/preview)

Markera din volym med `Space` och fortsätt med `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/4d93FtfDmSEtifY/preview)

Vi bekräftar att all data kommer att raderas

:::info
Din server påbörjar nu installationen, detta kan ta några minuter
:::

![](https://screensaver01.zap-hosting.com/index.php/s/NmR5PcTPe3Kdc4i/preview)

Fyll i ditt lösenord och fortsätt med `Enter`.

![](https://screensaver01.zap-hosting.com/index.php/s/f9aJF57b2w3g9qY/preview)

Välj "No" vid IPv4/IPv6-konfiguration, detta görs i slutet.

![](https://screensaver01.zap-hosting.com/index.php/s/88bxbHsRjwCoYJQ/preview)

Välj "Yes" och ställ in din tidszon samt datum/tid.

![](https://screensaver01.zap-hosting.com/index.php/s/MCtpoQkLdc8Wd7Y/preview)

Du kan ändra vilka systemtjänster som ska startas automatiskt vid serverstart.

![](https://screensaver01.zap-hosting.com/index.php/s/wPbL3HJGYBTLdyD/preview)

Vid behov kan du justera säkerhetsinställningarna.

![](https://screensaver01.zap-hosting.com/index.php/s/BXEs3sFYCbFE4Q4/preview)

Installationen är klar, välj "Exit" och bekräfta med `Enter`.

:::info
Ta bort ISO-filen i din iLO och välj "Reboot"
:::



## Konfiguration

### Nätverk

För att aktivera nätverkskortet, logga in på systemet med ditt lösenord.

Öppna loader.conf med en valfri editor, exempelvis `ee /boot/loader.conf` och lägg till följande rad:

```if_oce_load="YES"```

Avsluta editorn med `CTRL+C` och skriv exit, starta sedan om din dedikerade server.

***

Efter omstart behöver vi ändra rc.conf, exempelvis med `ee /etc/rc.conf`, lägg till följande rader:

```
ifconfig_oce0="DHCP"
```

:::caution
Namnet på nätverkskortet i exemplet **oce0** kan vara annorlunda. Se till att du anger rätt nätverkskort. Det kan du kolla med kommandot ifconfig. Informationen hämtas sedan automatiskt via DHCP-servern.
:::

Det bör se ut ungefär så här:

![](https://screensaver01.zap-hosting.com/index.php/s/mBCZpbG37N9Dj5e/preview)

Avsluta editorn med `CTRL+C` och skriv "exit", kör sedan kommandot `/etc/netstart` en gång.

:::info
Din server bör nu ha en aktiv internetanslutning
:::



## Avslutning

Grattis, du har nu installerat FreeBSD-operativsystemet på din dedikerade server! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂