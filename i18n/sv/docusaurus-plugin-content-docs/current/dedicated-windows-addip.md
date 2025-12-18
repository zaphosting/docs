---
id: dedicated-windows-addip
title: "Dedikerad Server: Konfigurera extra IP-adresser på Windows"
description: "Upptäck hur du optimerar serverns prestanda och säkerhet genom att använda flera IP-adresser effektivt → Lär dig mer nu"
sidebar_label: Extra IP-adresser
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Att ha flera IP-adresser på en server kan vara grymt för flera anledningar, särskilt i komplexa nätverksmiljöer eller för att uppfylla specifika krav på nätverksprestanda, säkerhet och hantering. Genom att tilldela olika IP-adresser till olika tjänster eller applikationer på samma server kan du få bättre isolering.




## Förberedelser

Att använda flera IP-adresser förutsätter att ditt serverpaket inkluderar dem. Om du inte redan har bokat några extra IP-adresser som standard behöver du först lägga till dem via en uppgradering. Sen ansluter du till din server via [RDP](dedicated-windows-userdp).




## Konfiguration



### Samla information

Först behöver du info om vilka IP-adresser som finns tillgängliga. Extra IP-adresser kan du se i serverhanteringen under IP-adresser.

![img](https://screensaver01.zap-hosting.com/index.php/s/zAfKskX42rMSRmb/preview)





### Öppna nätverksinställningar

Det finns flera sätt att komma åt nätverksinställningarna på en Windows Server. Ett enkelt sätt är via Kontrollpanelen under **Nätverk och delningscenter**.

Öppna **Kontrollpanelen**, klicka på **Nätverk och Internet** och sen på **Nätverk och delningscenter**. Gå därefter till "Ändra adapterinställningar" och dubbelklicka på nätverksadaptern (Ethernet 2). Då öppnas nätverksadaptern där du ska in i egenskaperna.

I **Egenskaper** för nätverksadaptern väljer du **Internet Protocol Version 4 (TCP/IPv4)**. Där ser du info om huvud-IP, subnetmask, standardgateway och DNS-servrar. Klicka på **Avancerat** för att lägga till extra IP-adresser.

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### Lägg till IP-adress(er)

Nu lägger du till den extra IP-adressen via **Avancerade TCP/IP-inställningar**. Klicka på **Lägg till** under IP-adresser och fyll i fälten för **IP-adress** och **Subnetmask**. I IP-adressfältet skriver du in den extra IP-adressen. Subnetmasken som används är 255.255.255.0.

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## Avslutning

IP-adressen är nu konfigurerad och tillagd utan problem. Har du fler frågor eller behöver hjälp är det bara att höra av dig till vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂