---
id: vserver-windows-nointernet
title: "VPS: Felsök Ingen Internetanslutning"
description: "Lär dig hur du felsöker och fixar internetanslutningsproblem på din Windows VPS effektivt → Läs mer nu"
sidebar_label: Felsök Ingen Internet
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

En avbruten eller felaktig internetanslutning kan bero på flera saker, som felaktig IP-adress, subnetmask, gateway, DNS-server eller brandväggsinställningar. I den här guiden förklarar vi hur du kan felsöka och lösa potentiella nätverksproblem.

<YouTube videoId="VfZyNge5ikA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/pqpjBWoHGJWztQG/preview" title="Så Fixar du Internetanslutningsproblem på Windows VPS" description="Känns det lättare att förstå när du ser det i praktiken? Vi har dig! Kolla in vår video som bryter ner allt för dig. Oavsett om du har bråttom eller bara gillar att ta in info på det mest engagerande sättet!"/>



<InlineVoucher />

## VNC-åtkomst utan Internet

Om du inte kan ansluta till din server via RDP (Remote Desktop) på grund av att internetanslutningen inte fungerar, kan du istället använda VNC (Virtual Network Computing) konsolen som finns på vår webbplats.

Det här alternativet låter dig komma åt din server och lösa problem även om internetanslutningen är nere. Du hittar det under **Verktyg->VNC-Konsol** i serverns webbgränssnitt.

På sidan kan du aktivera konsolen genom att klicka på **Öppna Webbläsarklient** och logga in med dina vanliga inloggningsuppgifter.

![](https://screensaver01.zap-hosting.com/index.php/s/L9ZPLHEXbydc6ZS/preview)

## Felsökningsmetoder

### Kontrollera IP-adress, Subnetmask, Gateway-inställningar

Första steget i felsökningen är att säkerställa att den tekniska konfigurationen för nätverksadaptern på din server är korrekt, inklusive IP-adress, subnetmask och gateway.

Börja med att gå till **Inställningar->IP-Adresser** i serverns webbpanel där du kan se alla IP-adresser du hyr med din tjänst.

![](https://screensaver01.zap-hosting.com/index.php/s/8gF7Qsq5k5aYxbq/preview)

Logga sedan in på din server via RDP eller VNC-konsolen om du har problem. Gå in i Windows nätverksadapterinställningar via: 
```
Inställningar -> Nätverk och Internet -> Ändra adapteralternativ -> Nätverksadapter
```

Hitta alternativet **Internet Protocol, Version 4 (TCP/IPv4)** i listan och välj **Egenskaper**.

![](https://screensaver01.zap-hosting.com/index.php/s/xYSSa2txkRkM4bx/preview)

#### Konfigurera adaptern

Jämför informationen i adaptern och se till att de är inställda enligt följande:
- IP-adress: Ska vara samma som IP-adressen du ser på **IP-Adresser**-sidan i webbgränssnittet.
- Subnetmask: Vanligtvis `255.255.255.0` eftersom vårt nätverk använder nätverksklass C.
- Standardgateway: Ska vara din IP-adress med sista oktetten (`.xxx`) borttagen och ersatt med `.1`.

#### Exempel på inställning

:::info
Observera att detta är ett **exempel** för att göra det lättare att förstå. Du ska byta ut IP-adressen mot din **egna** servers IP-adress.
:::

Med IP-adressen `185.223.28.163` ska din konfiguration se ut så här:

| Inställning     | Värde          |
| --------------- | -------------- |
| IP-adress       | 185.223.28.163 |
| Subnetmask      | 255.255.255.0  |
| Standardgateway | 185.223.28.1   |

![](https://screensaver01.zap-hosting.com/index.php/s/PTjQZc5gqP2okAC/preview)

När du är klar, klicka på **Ok** för att spara ändringarna. Vi rekommenderar att du startar om servern för att slutföra felsökningen.



### DNS-serverinställningar

Om du fortfarande har problem med internet kan nästa steg vara att kontrollera att DNS-servern är korrekt konfigurerad. Byt ut eventuella saknade eller felaktiga DNS-värden mot en känd och pålitlig DNS-server.

Vi rekommenderar att använda Googles eller Cloudflares DNS-servrar eftersom de är välkända och stabila.

| DNS-leverantör | DNS-servervärden                     |
| -------------- | ---------------------------------- |
| Google         | Primär: 8.8.8.8 / Sekundär: 8.8.4.4 |
| Cloudflare     | Primär: 1.1.1.1 / Sekundär: 1.0.0.1 |

![](https://screensaver01.zap-hosting.com/index.php/s/oqcR5BHBKLa3ink/preview)

Klicka på **Ok** igen för att spara ändringarna. Här rekommenderar vi också att starta om servern för att slutföra felsökningen.

:::tip
Du kan öppna kommandotolken (cmd.exe) på din server och köra följande kommando för att snabbt och enkelt sätta DNS-servrarna: 
```
powershell “Get-NetAdapter | Get-NetIPAddress | ForEach-Object { netsh interface ip set dns name=”$($_.InterfaceAlias)“ static 8.8.8.8; netsh interface ip add dns name=”$($_.InterfaceAlias)“ 1.1.1.1 index=2 }”
```
:::



### Brandväggsinställningar

Sista steget i felsökningen är att kontrollera att Windows-brandväggen är korrekt konfigurerad.

Vi rekommenderar att du tillfälligt stänger av hela Windows-brandväggen för att se om problemen kvarstår. Använd sökfunktionen i Windows för att öppna **Windows Defender Brandväggsinställningar** och välj alternativet **Aktivera eller inaktivera Windows Defender Brandvägg** i vänstermenyn.

![](https://screensaver01.zap-hosting.com/index.php/s/bWcPqHcCZ7ajJSA/preview)

Om problemen försvinner när brandväggen är avstängd är det troligt att problemet beror på en felkonfiguration i brandväggen.

Lösningen på brandväggsproblem beror mycket på vad som orsakar problemet. Använd gärna vår guide om [Port Forwarding (Brandvägg)](vserver-windows-port.md) om du behöver hjälp med att hantera brandväggsregler.



## Återställ nätverkskonfiguration

Du kan återställa nätverkskonfigurationen i webbgränssnittets administrationspanel för din VPS genom att klicka på knappen **Återställ nätverkskonfiguration** på inställningssidan. Under processen återställs IP-adress, subnetmask, gateway och DNS-server till ursprungliga värden.

![img](https://screensaver01.zap-hosting.com/index.php/s/YsLZZJZEaf3pemt/preview)


## Slutsats
Om du följt alla stegen bör anslutningen fungera som vanligt igen. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />