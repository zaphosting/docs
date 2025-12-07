---
id: vserver-windows-rdp-freeze
title: "VPS: Remote Desktop Verbinding Verbreekt"
description: "Ontdek hoe je RDP-vastlopers oplost door de verbinding stabieler te maken en je remote desktop productiviteit te boosten → Leer het nu"
sidebar_label: RDP Verbinding Verbreekt
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Het RDP-vastloopprobleem is een veelvoorkomend fenomeen waarbij remote desktop sessies onverwachts vastlopen, afhankelijk van het gebruikte besturingssysteem en de versie. Dit kan super frustrerend zijn en je productiviteit flink in de weg zitten. In dit artikel leer je wat de oorzaak is en hoe je het oplost.

<InlineVoucher />

## Hoofdoorzaak

Verschillende bronnen wijzen steeds vaker naar het feit dat het probleem komt door de beperkte veerkracht van het RDP-protocol tegen pakketverlies of corrupte pakketten. Daarnaast kan een bug in bepaalde Windows-versies ervoor zorgen dat het besturingssysteem niet soepel schakelt tussen het TCP- en UDP-protocol, wat het probleem alleen maar erger maakt.

## Oplossing

Om het probleem te fixen, kun je het UDP-protocol voor de RDP-verbinding uitschakelen en in plaats daarvan het stabielere TCP-protocol gebruiken. Open hiervoor de Opdrachtprompt (cmd.exe) als administrator op je pc en voer de volgende command uit:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

Door deze command uit te voeren, gebruikt je pc nu het TCP-protocol in plaats van UDP voor je RDP-sessie. Dit kan de stabiliteit van je verbinding flink verbeteren, vooral bij netwerken met onstabiele verbindingen of veel pakketverlies.

:::info 
**Bevestig de invoer** door op Enter te drukken en **herstart daarna je pc** zodat de wijziging wordt toegepast en actief wordt.
:::

<InlineVoucher />