---
id: vserver-windows-ip-configuration
title: "VPS: IP-konfiguration (Windows)"
description: "Lär dig hur du konfigurerar IP-inställningar på en Windows VPS → Läs mer nu"
sidebar_label: Konfigurera IP-adresser
services:
- vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Att konfigurera IP-adresser på din Windows VPS ger dig kontroll över hur din server kommunicerar i nätverket. Det inkluderar att tilldela IP-adresser, definiera standardgateway och konfigurera DNS-servrar som krävs för nätverksanslutning.

Rätt IP-konfiguration är viktigt för servrar som kör tjänster som spelservrar, webbservrar, databaser eller fjärråtkomstsystem, eftersom det säkerställer stabil nätverkskommunikation och pålitlig åtkomst.

:::warning Servern är otillgänglig på grund av saknad internetanslutning?
Om din server blir otillgänglig på grund av felaktig nätverkskonfiguration eller saknad internetanslutning kan fjärråtkomst via RDP sluta fungera. Använd [VNC-konsolen](vserver-vnc.md) i webbgränssnittet för att ansluta till din server och fixa nätverksinställningarna.
:::

<InlineVoucher />

## Förberedelser

Innan du konfigurerar IP-adresser, se till att du har följande info till hands:

- IP-adress du vill tilldela
- Subnätmask
- Standardgateway
- DNS-servrar

Denna info hittar du i webbgränssnittet. Öppna din **VPS-hantering** och gå till **IP-adresser**.

## Konfiguration

Anslut till din VPS via **Remote Desktop (RDP)**. När du är inloggad, öppna **Kontrollpanelen**. Navigera till **Kontrollpanelen → Nätverk och Internet → Nätverks- och delningscenter**.

Klicka på **Ändra adapterinställningar** till vänster. Du ser nu tillgängliga nätverksgränssnitt. Högerklicka på din aktiva nätverksadapter (vanligtvis **Ethernet**) och välj **Egenskaper**. I listan, välj **Internet Protocol Version 4 (TCP/IPv4)** och klicka på **Egenskaper**.

![img](https://screensaver01.zap-hosting.com/index.php/s/3EpqZXg5pgWHoLK/download)

Välj **Använd följande IP-adress** och fyll i värdena:

- **IP-adress** → Din tilldelade IP-adress
- **Subnätmask** → Din subnätmask
- **Standardgateway** → Din gateway
- **DNS-servrar →** 1.1.1.1, 8.8.8.8

Konfigurera sedan DNS-servrarna genom att välja **Använd följande DNS-serveradresser** och fylla i dina föredragna DNS-servrar. När alla värden är ifyllda, bekräfta med **OK** och stäng resterande fönster.



## Verifiering

För att verifiera konfigurationen, öppna **Kommandotolken** och kör:
```
ipconfig
```
![img](https://screensaver01.zap-hosting.com/index.php/s/AK8F3jppqL8xnsx/download)

Detta kommando visar alla nätverksgränssnitt och deras aktuella IP-konfiguration. Leta upp din aktiva nätverksadapter och kontrollera att **IPv4-adressen** stämmer överens med den IP-adress du konfigurerade tidigare. Om rätt IP-adress visas har konfigurationen lyckats.





## Avslutning

Grattis! Du har nu konfigurerat IP-inställningarna på din Windows VPS. Har du fler frågor eller behöver hjälp finns vårt supportteam tillgängligt varje dag för att hjälpa dig.

<InlineVoucher />