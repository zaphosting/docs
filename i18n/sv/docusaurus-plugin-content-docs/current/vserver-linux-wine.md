---
id: vserver-linux-wine
title: "VPS: Wine Compatibility Layer Linux Setup"
description: "Discover how to set up Wine on Linux to run Windows software and game servers smoothly on your system → Learn more now"
sidebar_label: Setup Wine Compatibility Layer
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Wine är ett open-source kompatibilitetslager för Linux som gör det möjligt att köra programvara som ursprungligen är utvecklad för Windows på Linux-system. Detta är extra viktigt för dedikerade spelservrar som bara erbjuder Windows-serverfiler och kan vara ett krav för våra andra guider för Linux dedikerade spelservrar. I den här guiden går vi igenom hur du sätter upp Wine på din Linux-server för första gången. Vi använder Ubuntu i exemplen, men processen är väldigt liknande för andra distributioner.

<InlineVoucher />

## Förberedelser

Börja med att ansluta till din VPS via SSH. Använd vår [SSH Initial Access](vserver-linux-ssh.md)-guide om du behöver hjälp med det.

## Installera Wine

Starta installationen genom att säkerställa att katalogen `/etc/apt/keyrings/` finns, eftersom den behövs för Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Ladda sedan ner och spara Wine GPG-nyckeln i den här katalogen för att verifiera att paketet är äkta.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Du måste också spara källistan för WineHQ, vilket du gör med följande färdigskrivna kommando:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Kör uppdateringskommandot för att se till att dina paketändringar läses in och installeras.
```
sudo apt update
```

Nu kan du fortsätta med huvudsteget och ladda ner den senaste versionen av Wine. Detta kan ta en stund.
```
sudo apt install --install-recommends winehq-staging
```

Till sist behöver du installera några extra paket för att säkerställa att Wine fungerar bra med dedikerade spelservrar genom att köra följande kommando.
```
sudo apt install cabextract winbind screen xvfb
```

## Avslutning

Du har nu framgångsrikt satt upp Wine-kompatibilitetslagret, vilket gör att du kan köra Windows-program på din Linux-server. Med detta viktiga förutsättning installerad kan du nu gå vidare och installera dedikerade spelservrar även om de är byggda för Windows.

Vi rekommenderar att du kollar in de andra guiderna i den här sektionen som täcker installation av specifika spel via SteamCMD och eventuellt Wine för Windows-baserade dedikerade serverfiler.

<InlineVoucher />