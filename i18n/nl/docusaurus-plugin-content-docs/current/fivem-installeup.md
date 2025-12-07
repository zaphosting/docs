---
id: fivem-installeup
title: "FiveM: Installeer EUP (Emergency Uniform Pack)"
description: "Ontdek hoe je het Emergency Uniform Pack installeert voor free mode personages met een Element Club abonnement → Leer het nu"
sidebar_label: Installeer EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introductie

**EUP**, oftewel Emergency Uniform Pack, geeft je de mogelijkheid om nooddiensten-uniformen te dragen op een free mode personage. Hieronder leggen we precies uit hoe je dit installeert.

:::warning Element Club abonnement vereist
Om EUP te installeren en te gebruiken, heb je een Element Club abonnement nodig. Scoor jouw abonnement via het [Cfx.re Portal](https://portal.cfx.re/subscriptions/element-club)!
:::

<InlineVoucher />



## Voorbereiding

Voordat je begint met het installeren van **EUP**, moet je een paar dingen voorbereiden. Download en pak op je eigen pc de volgende bestanden uit: [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) en [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip). Na het downloaden zou je deze ZIP-bestanden moeten hebben:

- `eup-ui.7z`
- `eup-stream.7z`
- `NativeUI-master.zip`

Pak deze bestanden lokaal uit op je computer. Je zou nu een `__resource.lua` of `fxmanifest.lua` en de bijbehorende scriptbestanden/mappen moeten zien.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
Voor NativeUI moet je eerst de map "NativeUI-master" openen, daar vind je de juiste scripts. Als dat niet zo is, zitten ze waarschijnlijk in een submap met dezelfde naam.
:::

## Installatie
Je bent nu klaar om te installeren. Verbind via [FTP](gameserver-ftpaccess.md) met je server en upload de bestanden. Upload de bestanden/mappen naar de `resources` map. Deze vind je in de volgende directory-structuur:

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## Configuratie

Om ervoor te zorgen dat de geïnstalleerde resources geladen worden, moet je ze toevoegen aan het serverconfiguratiebestand. Log hiervoor in op de txAdmin interface en ga naar de CFG Editor.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## Afronding

Je hebt EUP succesvol geïnstalleerd op je FiveM server. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂


<InlineVoucher />