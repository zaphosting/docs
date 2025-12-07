---
id: fivem-installeup
title: "FiveM: Installera EUP (Emergency Uniform Pack)"
description: "Upptäck hur du sätter upp Emergency Uniform Pack för free mode-karaktärer med Element Club-prenumeration → Läs mer nu"
sidebar_label: Installera EUP
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

**EUP**, även känt som Emergency Uniform Pack, låter dig ha uniformer för räddningstjänster på en free mode-karaktär. Här förklarar vi i detalj exakt hur du installerar detta.

:::warning Element Club-prenumeration krävs
För att installera och använda EUP krävs en Element Club-prenumeration. Skaffa din egen prenumeration på [Cfx.re Portal](https://portal.cfx.re/subscriptions/element-club)!
:::

<InlineVoucher />



## Förberedelser

För att börja installera **EUP** måste några förberedelser göras först. Du behöver ladda ner och packa upp [EUP](https://forum.cfx.re/t/emergency-uniform-pack-client-server-sided-easy-install-update-5-0-announcement/97599) och [NativeUI](https://github.com/FrazzIe/NativeUILua/archive/master.zip) på din dator. När du laddat ner filerna ska du ha fått följande ZIP-filer:

- `eup-ui.7z`
- `eup-stream.7z` 
- `NativeUI-master.zip`

Packa nu upp dessa filer lokalt på din dator. De ska innehålla en `__resource.lua` eller `fxmanifest.lua` samt skriptfiler/-mappar.

**eup-ui**
![](https://screensaver01.zap-hosting.com/index.php/s/PjXPtC49ZAkiD87/preview)

**eup-stream**
![](https://screensaver01.zap-hosting.com/index.php/s/y4HNTngCjkg8n44/preview)

**NativeUI**
![](https://screensaver01.zap-hosting.com/index.php/s/EwdgkfA5qjWNAYj/preview)

:::info
För NativeUI måste du först öppna mappen "NativeUI-master", där hittar du rätt skript. Om inte kan de ligga i en undermapp, oftast med samma namn.
:::

## Installation
Nu är du redo att starta installationen. Anslut till din server via [FTP](gameserver-ftpaccess.md) och ladda upp filerna. Filerna/mapparna ska laddas upp till `resources`-mappen. Du hittar den under följande mappstruktur:

```
/gxxxxxx/fivem/YourFramework/resources/
```

![](https://screensaver01.zap-hosting.com/index.php/s/qFtS6sJHy67Y773/preview)



## Konfiguration

För att de installerade resurserna ska laddas måste de anges i serverns konfigurationsfil. Logga in i txAdmin-gränssnittet och gå till CFG Editor.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQgkC5npHji4ArM/download)



## Avslutning

Du har nu installerat EUP på din FiveM-server! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂


<InlineVoucher />