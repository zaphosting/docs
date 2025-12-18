---
id: vserver-windows-rdp-port
title: "VPS: Byt Windows RDP-port"
description: "Lär dig hur du byter Windows RDP-port → Läs mer nu"
sidebar_label: Byt RDP-port
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Remote Desktop Protocol använder port 3389 som standard. Den här porten är välkänd och ofta måltavla för automatiska skanningar. Att byta RDP-port kan minska oönskade anslutningsförsök och förbättra grundläggande säkerhet.

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

Hitta registernyckeln som heter **PortNumber**. Ändra värdeformatet till **Decimal** och skriv in den nya porten du vill använda. En port över 1024 som inte redan används av en annan tjänst rekommenderas. När du har ändrat, stäng Registereditorn.

## Justera Windows brandväggsregler

Den nya RDP-porten måste tillåtas genom Windows-brandväggen. Öppna **Windows Defender-brandväggen med avancerad säkerhet** och gå till sektionen för inkommande regler.

Ändra den befintliga Remote Desktop-regeln eller skapa en ny inkommande regel som tillåter TCP-trafik på den nya porten. Se till att regeln tillåter anslutningen och gäller för de nätverksprofiler du behöver.

## Starta om tjänsten för att aktivera ändringarna

Portbytet träder i kraft först efter att Remote Desktop-tjänsterna har startats om eller systemet har rebootats. Vi rekommenderar en fullständig omstart av servern för att säkerställa att konfigurationen tillämpas korrekt.

## Anslut med den nya porten

När du skapar en ny Remote Desktop-anslutning måste porten anges explicit genom att lägga till den efter IP-adressen eller värdnamnet. Exempel:

```
203.0.113.10:3390
```

## Sammanfattning

Att byta Windows RDP-port minskar risken för automatiska skanningar och obehöriga anslutningsförsök. Processen innebär att uppdatera Windows-registret, tillåta den nya porten i brandväggen och starta om systemet eller tjänsterna.

Efteråt bör du direkt testa åtkomsten och dokumentera den nya porten för att undvika framtida anslutningsproblem. Har du frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />