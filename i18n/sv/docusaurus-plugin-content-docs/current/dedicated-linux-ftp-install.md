---
id: dedicated-linux-ftp-install
title: "Sätt upp ProFTPD på en Linux-server - Host en säker FTP-tjänst"
description: "Lär dig hur du sätter upp och hanterar en säker FTP-server på Linux med FileZilla Server för smidigare filöverföringar och användarhantering → Läs mer nu"
sidebar_label: Installera FTP-server
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

**FTP (File Transfer Protocol)** är ett nätverksprotokoll som används för att överföra filer över ett TCP/IP-nätverk. Protokollet utvecklades för att göra det enkelt att byta filer mellan system. Med **FileZilla Server** kan du sätta upp en sådan FTP-server på ett Linux-operativsystem. FileZilla Server är enkel att installera och konfigurera, och erbjuder massor av funktioner som möjligheten att skapa användarkonton, hantera åtkomsträttigheter och överföra filer. I den här guiden går vi igenom hur du installerar och konfigurerar **FileZilla Server** på en Linux-server.

## Hur installerar jag FTP-servern för att lägga till en användare?

För att lägga till en FTP-användare måste du först installera FTP-servern. Anslut till servern en gång via SSH (Putty).

För att installera FTP-servern skriver du nu in följande: **apt-get install proftpd**. Bekräfta med **Y** och tryck enter:

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

Nu måste vi justera konfigurationen. Skriv in: **nano /etc/proftpd/proftpd.conf** och tryck enter. Då öppnas konfigurationsfilen i Nano-editorn:

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

Följande rader måste läggas till:

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

Nu måste FTP-servern startas om för att ändringarna ska träda i kraft. Det gör du med kommandot: **service proftpd restart**

## Hur lägger jag till en FTP-användare?

För att skapa en ny FTP-användare måste vi först skapa en FTP-grupp. Det gör vi med kommandot **addgroup ftpuser**. Det ser ut så här:

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

Nu kan vi lägga till vår första FTP-användare med kommandona: **adduser benutzerftp -shell /bin/false -home /var/www** och sedan **adduser benutzerftp ftpuser**.

Nu blir du ombedd att sätta ett lösenord:

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

Sedan bekräftar du att uppgifterna är korrekta:

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

Sista steget är att tilldela den nya användaren till gruppen via **adduser benutzerftp ftpuser**:

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

Nu kan vi ansluta med våra inställda uppgifter:

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)