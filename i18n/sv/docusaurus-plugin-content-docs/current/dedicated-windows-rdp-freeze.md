---
id: dedicated-windows-rdp-freeze
title: "Dedikerad Server: Remote Desktop-anslutningen bryts"
description: "Upptäck hur du fixar RDP-frysningar genom att förbättra anslutningsstabiliteten och förhindra sessionavbrott → Läs mer nu"
sidebar_label: RDP-anslutningen bryts
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

RDP-frysproblemet är ett vanligt fenomen där fjärrskrivbordsessioner plötsligt fryser, beroende på operativsystem och version. Det här kan vara riktigt frustrerande och påverka produktiviteten rejält. I det här dokumentet får du veta mer om vad som orsakar problemet och hur du fixar det.

## Huvudorsak

Flera källor pekar allt mer på att problemet beror på att RDP-protokollet har sämre tålighet mot paketförlust eller korrupta paket. Dessutom kan en bugg i vissa Windows-versioner göra att operativsystemet inte smidigt kan växla mellan TCP- och UDP-protokollen, vilket förvärrar problemet.

## Lösningsförslag

För att lösa problemet kan du stänga av UDP-protokollet för RDP-anslutningen och istället använda det stabilare TCP-protokollet. Gör så här: öppna Kommandotolken (cmd.exe) som administratör på din dator och kör följande kommando:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

När du kört kommandot kommer din dator använda TCP-protokollet istället för UDP för RDP-sessionen. Det kan göra anslutningen mycket stabilare, särskilt i nätverk med ostabila förbindelser eller hög paketförlust.

:::info 
**Bekräfta kommandot** genom att trycka på Enter och **starta sedan om datorn** så att ändringen träder i kraft.
:::