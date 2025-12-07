---
id: vserver-linux-ftp-install
title: "VPS: Installation av en FTP-server"
description: "Upptäck hur du sätter upp och hanterar en säker FTP-server på Linux med FileZilla Server för effektiv filöverföring → Läs mer nu"
sidebar_label: Installera FTP-server
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

**FTP (File Transfer Protocol)** är ett nätverksprotokoll som används för att överföra filer över ett TCP/IP-nätverk. Protokollet utvecklades för att möjliggöra enkel filutbyte mellan system. Med **FileZilla Server** kan du sätta upp en sådan FTP-server på ett Linux-operativsystem. FileZilla Server är lätt att installera och konfigurera, och erbjuder många funktioner som att skapa användarkonton, hantera åtkomsträttigheter och överföra filer. I den här guiden går vi igenom hur du installerar och konfigurerar **FileZilla Server** på en Linux-server.

<InlineVoucher />

## Installation

För att lägga till en FTP-användare måste du först installera FTP-servern. Anslut till servern en gång via SSH (Putty).

För att installera FTP-servern skriver du nu **apt-get install proftpd**. Bekräfta med **Y** och tryck enter:

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

Nu måste vi justera konfigurationen. Skriv **nano /etc/proftpd/proftpd.conf** och tryck enter. Konfigurationsfilen öppnas då i Nano-editorn:

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

Följande rader måste läggas till:

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

Nu måste FTP-servern startas om för att ändringarna ska träda i kraft. Det gör du med kommandot: **service proftpd restart**

## Lägg till användare

För att skapa en ny FTP-användare måste vi först skapa en FTP-grupp. Det gör vi med kommandot **addgroup ftpuser**. Det ser ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

Nu kan vi lägga till vår första FTP-användare med kommandona: **adduser benutzerftp -shell /bin/false -home /var/www** och sedan **adduser benutzerftp ftpuser**.

Nu blir du ombedd att sätta ett lösenord:

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

Bekräfta sedan att uppgifterna är korrekta:

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

Sista steget är att tilldela den nya användaren till gruppen med **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

Nu kan vi ansluta med våra inställda uppgifter:

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)



## Avslutning

Grattis, du har nu installerat och konfigurerat FTP! Har du fler frågor eller problem är du varmt välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig!

<InlineVoucher />