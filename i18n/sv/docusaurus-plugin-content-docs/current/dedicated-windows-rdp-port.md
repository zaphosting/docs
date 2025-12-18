---
id: dedicated-windows-rdp-port
title: "Dedikerad Server: Byt Windows RDP-port"
description: "Upptäck hur du byter Windows RDP-port → Lär dig mer nu"
sidebar_label: Byt RDP-port
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Remote Desktop Protocol använder port 3389 som standard. Denna port är välkänd och ofta måltavla för automatiska skanningar. Att byta RDP-port kan minska oönskade anslutningsförsök och förbättra grundläggande säkerhet.

<InlineVoucher />



## Byt RDP-port i registret

Logga in på servern lokalt eller via en befintlig Remote Desktop-anslutning. Öppna Kör-dialogen med **Win + R**, skriv `regedit` och bekräfta för att öppna Registereditorn. Navigera till följande registernyckel:

```
HKEY_LOCAL_MACHINE
 └─ SYSTEM
    └─ CurrentControlSet
       └─ Control
          └─ Terminal Server
             └─ WinStations
                └─ RDP-Tcp
```

Hitta registernyckeln som heter **PortNumber**. Ändra värdeformatet till **Decimal** och skriv in den nya önskade porten. En port över 1024 som inte redan används av en annan tjänst rekommenderas. När ändringen är gjord, stäng Registereditorn.

## Justera Windows brandväggsregler

Den nya RDP-porten måste tillåtas genom Windows-brandväggen. Öppna **Windows Defender-brandväggen med avancerad säkerhet** och gå till avsnittet för inkommande regler.

Ändra den befintliga Remote Desktop-regeln eller skapa en ny inkommande regel som tillåter TCP-trafik på den nya porten. Se till att regeln tillåter anslutningen och gäller för de nätverksprofiler som behövs.

## Starta om tjänsten för att tillämpa ändringar

Portbytet träder i kraft först efter att Remote Desktop Services har startats om eller systemet har rebootats. En fullständig serveromstart rekommenderas för att säkerställa att konfigurationen tillämpas korrekt.

## Anslut med den nya porten

När du skapar en ny Remote Desktop-anslutning måste porten anges explicit genom att lägga till den efter IP-adressen eller värdnamnet. Exempel:

```
203.0.113.10:3390
```

## Sammanfattning

Att byta Windows RDP-port minskar risken för automatiska skanningar och obehöriga anslutningsförsök. Processen innebär att uppdatera Windows-registret, tillåta den nya porten i brandväggen och starta om systemet eller tjänsterna.

Efteråt bör du omedelbart verifiera åtkomsten och dokumentera den konfigurerade porten för att undvika framtida anslutningsproblem. Har du frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />