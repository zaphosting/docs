---
id: dst-create-cave
title: "Don't Starve Together: Crea grotte sui server"
description: "Scopri come configurare server master e slave per le grotte in Don't Starve Together per migliorare l'esperienza di gioco → Scopri di più ora"
sidebar_label: Crea Grotte
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Preparazione per le Grotte

Per usare le grotte in Don't Starve Together, servono due server ordinati da noi. Un server sarà il "master", usato per il mondo superiore, e il secondo sarà lo "slave", dedicato solo alle grotte. Quale server diventa master e quale slave si decide tramite le configurazioni di server.ini e cluster.ini.

Entrambi i file di configurazione si trovano nell’interfaccia sotto "**Configs**" e possono essere modificati lì.

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

Si modifica solo la sezione "**[SHARD]**" in entrambi i file .ini

## Master

Il master è il server dell’Upperworld, questo server deve essere impostato come master nelle config.

### server.ini

:::info
**IMPORTANTE** il valore "**MASTERIP**" indica l’IP del server master, se questo IP è 123.123.123.123 allora va inserito "bind_ip = 123.123.123.123".

"**MASTERIP**" non è un valore statico da inserire direttamente in server.ini su "bind_ip = ".
:::

Di default, in server.ini la sezione "**[SHARD]**" contiene solo "is_master = true", ora vanno aggiunti questi comandi:
```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

Di default, in cluster.ini la sezione "**[SHARD]**" contiene solo "is_master = true", qui vanno aggiunti questi comandi:
```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## Slave

Lo slave è il server delle grotte, dove vanno inseriti i dati del master nelle config.

### server.ini

:::info
**IMPORTANTE** il valore "**SLAVEIP**" indica l’IP del server slave, se questo IP è 123.123.123.123 allora va inserito "bind_ip = 123.123.123.123".

"**SLAVEIP**" non è un valore statico da inserire direttamente in server.ini su "bind_ip = ".

"**MASTERIP**" non è un valore statico da inserire direttamente in server.ini su "master_ip = ".
:::

Di default, in server.ini la sezione "**[SHARD]**" contiene solo "is_master = true", ora vanno aggiunti questi comandi:
```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

Di default, in cluster.ini la sezione "**[SHARD]**" contiene solo "is_master = true", qui vanno aggiunti questi comandi:
```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### Genera Nuovo Mondo

Se tutte le config sono impostate correttamente, devi generare un nuovo mondo per il server slave. Serve un file nuovo per creare correttamente le grotte.

Segui la guida [Accesso via FTP](gameserver-ftpaccess.md) per entrare nel server slave nella directory: */starve/Save/Cluster_1/Master/*  
Qui crea un nuovo file chiamato "*worldgenoverride.lua*".  
Inserisci questo contenuto nel file:

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

Dopodiché tieni premuto il tasto "**TAB**" sul server per vedere lo stato. Clicca sui 3 puntini in alto a sinistra e rigenera il mondo una volta con il parametro sovrascritto cliccando su "**Regenerate World**".

Quando il mondo si sarà ricaricato, è tutto pronto e puoi giocare con le grotte sul tuo server.

<InlineVoucher />