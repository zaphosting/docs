---
id: dedicated-linux-openvpn
title: "Installera OpenVPN på en Linux-server - Skapa din säkra VPN-infrastruktur"
description: "Upptäck hur du säkrar din internetanslutning och får tillgång till begränsat innehåll med OpenVPN på Linux-servrar → Läs mer nu"
sidebar_label: Installera OpenVPN
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

OpenVPN är en kraftfull och flexibel VPN-mjukvara som möjliggör en säker anslutning över internet. Det är en open source-lösning som erbjuder robust och konfigurerbar VPN-teknik för att skapa en krypterad förbindelse mellan din enhet och en VPN-server. Genom att använda OpenVPN kan du säkra din internetanslutning, skydda din online-integritet och få tillgång till geo-blockerat innehåll oavsett var du befinner dig i världen. I den här guiden går vi igenom hur du installerar och konfigurerar **OpenVPN** på en Linux-server.

## Förberedelser

Först måste nätverksdrivrutinen **TUN** aktiveras. Detta steg krävs inte för root-servrar.  
För att göra detta behöver du skapa en ny fil som heter **tunscript.sh** i mappen **/usr/sbin**.

```
nano /usr/sbin/tunscript.sh 
```

Klistra in följande rader:
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Spara filen genom att trycka `CTRL+O`, sedan `Y` och avsluta med `Enter`. För att stänga filen, tryck `CTRL+X`. Kör sedan följande kommando:

```
chmod +x /usr/sbin/tunscript.sh
```

När det är klart, kör ``crontab -e`` och välj **nano-editor** [1]. Lägg till denna rad längst ner i filen:
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Spara filen med `CTRL+O`, `Y` och `Enter`. Avsluta med `CTRL+X`. Nu ska skriptet köras automatiskt efter omstart.

## Installation

För att installera OpenVPN, kör följande kommando i konsolen:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

En dialogruta dyker upp där du får välja mellan UDP eller TCP. Vi rekommenderar UDP, så skriv `1` och tryck `Enter`. Sedan blir du ombedd att ange en port för OpenVPN, vi rekommenderar att du använder standardporten.

Nästa steg är att konfigurera DNS-servern. Vi rekommenderar att använda antingen Google Public DNS eller Cloudflare DNS:
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

Därefter ska du ange ett klientnamn. Du kan välja vilket namn du vill, till exempel namnet på din enhet.

## Konfiguration

### Lägg till fler klienter

Vill du skapa flera anslutningar är det smidigt att skapa flera konton. För att skapa ett nytt konto, kör samma kommando igen:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Välj `1` och bekräfta. Ange sedan klientnamnet.

### Ta bort klienter

För att ta bort en klient, kör:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Välj numret på klienten i listan som du vill ta bort och tryck `Enter`. Bekräfta borttagningen genom att trycka `Y` och sedan `Enter`. Klienten tas bort.

## Avinstallation

Om du inte längre behöver OpenVPN kan du avinstallera det så här:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Tryck `3` och bekräfta. Bekräfta en gång till så avinstalleras OpenVPN.

## Anslut till VPN

För att ansluta till din VPN rekommenderar vi att du använder **[OpenVPN-klienten](https://openvpn.net/community-downloads/)**. Ladda ner den på den enhet du vill ansluta från.

Anslut via SFTP till din server för att ladda ner den skapade .ovpn-filen och ta sedan bort filen från servern. När klienten är installerad, starta programmet. Högerklicka på OpenVPN-ikonen i aktivitetsfältet. Klicka på 'Import file' och välj filen du laddade ner, klicka på 'Open'. För att ansluta, klicka på ikonen igen och välj "Connect".

:::info
Om du har importerat flera filer måste du välja vilken klient du vill använda innan du klickar på Connect.
:::