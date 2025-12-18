---
id: dst-create-cave
title: "Don't Starve Together: Skapa grottor på servrar"
description: "Upptäck hur du sätter upp master- och slave-servrar för grottor i Don't Starve Together för en bättre spelupplevelse → Läs mer nu"
sidebar_label: Skapa Grottor
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Förberedelser för Grottor

För att använda grottor i Don't Starve Together krävs två servrar beställda via oss. En server blir "master" som används för övervärlden och den andra servern blir "slave" som används enbart för grottorna. Vilken server som blir "master" och vilken som blir "slave" bestäms av konfigurationerna i server.ini och cluster.ini.

Båda konfigurationerna hittar du i gränssnittet under "**Configs**" och kan redigeras där.

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

Endast delen "**[SHARD]**" redigeras i båda .ini-filerna

## Master

Mastern är servern för övervärlden, denna server måste sättas som master i konfigurationerna.

### server.ini

:::info
**VIKTIGT** "**MASTERIP**" betyder IP-adressen för master-servern, om denna IP är 123.123.123.123 så måste "bind_ip = 123.123.123.123" anges där.

"**MASTERIP**" är inte ett statiskt värde som du skriver in i server.ini på "bind_ip = ".
:::

Som standard står det bara "is_master = true" under "**[SHARD]**" i server.ini, följande rader läggs nu till där:
```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

Som standard innehåller "**[SHARD]**" i cluster.ini bara "is_master = true", följande rader läggs nu till där:

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## Slave

Slaven är grottservern, där datan från mastern måste anges i konfigurationerna.

### server.ini

:::info
**VIKTIGT** "**SLAVEIP**" betyder IP-adressen för slave-servern, om denna IP är 123.123.123.123 så måste "bind_ip = 123.123.123.123" anges där.

"**SLAVEIP**" är inte ett statiskt värde som du skriver in i server.ini på "bind_ip = ".

"**MASTERIP**" är inte ett statiskt värde som du skriver in i server.ini på "master_ip = ".
:::

Som standard innehåller "**[SHARD]**" i server.ini bara "is_master = true", följande rader läggs nu till där:

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

Som standard innehåller "**[SHARD]**" i cluster.ini bara "is_master = true", följande rader läggs nu till där:
```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### Generera Ny Värld

När alla konfigurationer är korrekt inställda måste en ny värld genereras för slave-servern. En ny fil krävs för att grottorna ska skapas korrekt.

Använd guiden [Access via FTP](gameserver-ftpaccess.md) för att navigera till slave-servern i katalogen: */starve/Save/Cluster_1/Master/*
Skapa en ny fil med namnet "*worldgenoverride.lua*" i denna katalog.
Fyll filen med följande innehåll:

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

Efter det håller du inne "**TAB**"-knappen på servern för att få upp serverstatusen. Klicka på de tre prickarna uppe till vänster och regenerera världen en gång med den överskrivna parametern genom att välja "**Regenerate World**".

När världen har laddats om är allt klart och du kan spela med grottor på din server.

<InlineVoucher />