---
id: dedicated-centos
title: "Dedikerad Server: Installation av CentOS"
description: "Upptäck hur du installerar och konfigurerar CentOS på din dedikerade server för bästa prestanda och säkerhet → Lär dig mer nu"
sidebar_label: Installera CentOS
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Här går vi igenom steg för steg hur du installerar och konfigurerar operativsystemet CentOS på din dedikerade server. Följ instruktionerna noga för att säkerställa att installationen blir lyckad och att du får ut det mesta av systemet.

:::info

Guiden är baserad på CentOS 8.3. Installationer från äldre eller nyare versioner kan skilja sig något i processen.

:::



## Förberedelser

För att installera och konfigurera operativsystemet behöver du först montera rätt ISO-fil. Det finns flera sätt att göra detta på:

1. Montera via initial setup
2. Montera via iLO (Virtual Media)
3. Montera via iLO (Remote Console)

Om du inte är van vid att montera ISO-filer, kolla gärna in våra guider för [Initial setup](dedicated-setup.md) eller [Egen ISO](dedicated-iso.md).



## Installation

När ISO-filen är laddad startar servern installationsprocessen.

![](https://screensaver01.zap-hosting.com/index.php/s/YFQt6Jmw5wi4QZZ/preview)

* Tangentbord  
Välj ditt föredragna tangentbordslayout

* Tid & Datum  
Välj din tidszon

* Root-lösenord  
Sätt ett lösenord för root-kontot. Det kan vara vilket som helst, men använd ett starkt lösenord och spara det säkert.

* Installationsdestination  
Välj SSD:n där CentOS ska installeras

* Nätverk & Hostnamn  
På grund av en kompatibilitetsbugg kunde nätverket inte konfigureras än, det fixar vi i slutet.

När du är nöjd med inställningarna, klicka på 'Begin Installation'.

![](https://screensaver01.zap-hosting.com/index.php/s/iqF8KzziQix3jyd/preview)

När installationen är klar, ta bort ISO-filen från servern och klicka på 'Reboot System'.



## Konfiguration

### Nätverk

Nu ska vi konfigurera nätverkskortet, vilket kräver att vi uppdaterar vissa filer. Montera ISO-filen på din server via remote console eller iLO.

![](https://screensaver01.zap-hosting.com/index.php/s/skiKLacFGZnMwr9/preview)

```http://185.223.30.65/dedicatedisos/centos-network-554flb.iso```

När ISO-filen är monterad behöver vi montera den i systemet för att komma åt innehållet.

```mount /dev/sr0 /mnt```

ISO-filen är nu monterad på `/mnt`

```rpm -i /mnt/be2net.rpm```

Installera uppdateringspaketet.

```modprobe be2net```

Nu kör vi uppdateringen, det kan ta några sekunder.  
Du kan kolla med `ip a s` om ett nätverkskort som heter `eno1` finns. Om det gör det, starta om systemet.

När systemet har startat om, fortsätt med att konfigurera nätverkskortet.

```nano /etc/sysconfig/network-scripts/ifcfg-eno1```

Fyll i följande i filen:

```
DEVICE=eno1
BOOTPROTO=dhcp
ONBOOT=yes
```

Avsluta nano med `CTRL+X` och bekräfta med `Y`

Starta nätverkskortet med `ifup eno1` 

:::info
Din dedikerade server borde nu ha en fungerande internetanslutning.
:::





## Avslutning

Grattis! Du har nu installerat CentOS på din dedikerade server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂