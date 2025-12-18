---
id: scpservermod-uploadplugins
title: "SCP Secret Laboratory: Plugins installeren op je server"
description: "Ontdek hoe je SMOD-plugins installeert en configureert voor je SCP-server om gameplay en serverfuncties te verbeteren → Leer het nu"
sidebar_label: Plugins Installeren
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Gearchiveerde Gids
Dit document is gearchiveerd. Documenten worden gearchiveerd als ze niet meer relevant, onjuist of verouderd zijn. Het is om de volgende reden gearchiveerd:

Reden: De Servermod-extensie voor SCP is verlaten en wordt daarom niet meer onderhouden. We raden aan om over te stappen op **[SCP:EXILED](exiled-plugins.md)**.
::::

<InlineVoucher />

## Verbinden met FTP

Voordat je plugins kunt installeren, moet de [Toegang via FTP](gameserver-ftpaccess.md) ingesteld zijn.

Als dit is geregeld, kun je verbinden en de volgende servermap openen:
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## Plugins Installeren

### Plugins Vinden

Eerst moet je beschikbare SMOD-compatibele plugins vinden.

De beste plek om deze te halen is direct via hun [Discord](https://discord.gg/T9aurNf).

:::info
Dit is slechts één plek waar je ze kunt vinden. Ze kunnen ook elders beschikbaar zijn. Het is belangrijk om te checken of ze compatibel zijn met jouw SMOD-versie.
:::

In dit voorbeeld gebruiken we de volgende plugin:

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### Plugins Uploaden

Als je de gewenste plugins hebt, upload je ze naar je server via FTP. Je kunt ze simpelweg **drag & drop** doen in de **sm_plugins map.**

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
Let op: Na het installeren van plugins moet je je server **herstarten** zodat ze **actief worden.**
:::

### Plugins Configureren

Afhankelijk van de plugin moet je mogelijk verschillende instellingen toevoegen aan je config_gameplay.txt.

In ons voorbeeldplugin zijn de volgende configuraties gedefinieerd.

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

Om deze toe te voegen, bewerken we de config_gameplay.txt.

Je vindt deze via het tabblad **Configs** aan de linkerkant.

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

Daarna zoeken we de **config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
De configuraties kunnen eigenlijk overal in het bestand staan. Voor de beste praktijk plaatsen we ze onder '#Misc gameplay settings' in het config_gameplay.txt bestand.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
LET OP: Afhankelijk van de plugin kunnen je configuraties verschillen. Lees altijd de instructies bij de plugin zodat je de configs correct toevoegt.
:::

Als de configuraties zijn toegevoegd, herstart je je server (of start je hem) en check je het direct in de game!

<InlineVoucher />