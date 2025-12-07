---
id: dst-create-cave
title: "Don't Starve Together: Caves aanmaken op servers"
description: "Ontdek hoe je master- en slave-servers instelt voor caves in Don't Starve Together om je gameplay te verbeteren → Leer het nu"
sidebar_label: Caves aanmaken
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Voorbereiding voor Caves

Om caves te gebruiken in Don't Starve Together heb je twee servers nodig die je via ons bestelt. Eén server is de "master" die gebruikt wordt voor de bovenwereld, en de tweede server is de "slave" die exclusief voor de caves is. Welke server de "master" wordt en welke de "slave" hangt af van de instellingen in de server.ini en cluster.ini.

Beide configs vind je in de interface onder "**Configs**" en kun je daar aanpassen.

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

Alleen het "**[SHARD]**" gedeelte wordt aangepast in beide .ini-bestanden.

## Master

De master is de server voor de bovenwereld, deze moet als master ingesteld worden in de configs.

### server.ini

:::info
**BELANGRIJK**: "**MASTERIP**" staat voor het IP-adres van de masterserver. Als dit IP bijvoorbeeld 123.123.123.123 is, moet je "bind_ip = 123.123.123.123" invullen.

"**MASTERIP**" is geen statische waarde die je zomaar in server.ini bij "bind_ip = " kunt invullen.
:::

Standaard staat er in "**[SHARD]**" in server.ini alleen "is_master = true". Voeg hier de volgende regels aan toe:
```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

Standaard bevat "**[SHARD]**" in cluster.ini alleen "is_master = true". Voeg hier de volgende regels aan toe:

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## Slave

De slave is de cave-server, hier moeten de gegevens van de master in de configs worden ingevuld.

### server.ini

:::info
**BELANGRIJK**: "**SLAVEIP**" staat voor het IP-adres van de slaveserver. Als dit IP bijvoorbeeld 123.123.123.123 is, moet je "bind_ip = 123.123.123.123" invullen.

"**SLAVEIP**" is geen statische waarde die je zomaar in server.ini bij "bind_ip = " kunt invullen.

"**MASTERIP**" is ook geen statische waarde die je zomaar in server.ini bij "master_ip = " kunt invullen.
:::

Standaard staat er in "**[SHARD]**" in server.ini alleen "is_master = true". Pas dit aan naar:

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

Standaard bevat "**[SHARD]**" in cluster.ini alleen "is_master = true". Pas dit aan naar:

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### Nieuwe Wereld Genereren

Als alle configs correct zijn ingesteld, moet je een nieuwe wereld genereren voor de slaveserver. Er is een nieuw bestand nodig zodat de caves correct worden aangemaakt.

Gebruik de [Toegang via FTP](gameserver-ftpaccess.md) handleiding om naar de slaveserver te navigeren in de map: */starve/Save/Cluster_1/Master/*  
Maak hier een nieuw bestand aan met de naam "*worldgenoverride.lua*".  
Vul dit bestand met de volgende inhoud:

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

Daarna houd je de "**TAB**" knop ingedrukt op de server om de serverstatus te openen. Klik linksboven op de drie puntjes en kies "**Regenerate World**" om de wereld opnieuw te genereren met de overschreven parameters.

Zodra dit is geladen, ben je klaar en kun je met caves spelen op je server.

<InlineVoucher />