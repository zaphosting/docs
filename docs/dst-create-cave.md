---
id: dst-create-cave
title: "Don't Starve Together: Creating caves on servers"
description: "Discover how to set up master and slave servers for caves in Don't Starve Together to enhance gameplay experience → Learn more now"
sidebar_label: Create Caves
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Preparation for Caves

In order to use caves at Don't Starve Together, two servers ordered through us are required. One server would be the "master" which is used for the upper world and the second server would be the "slave" which is used solely for the caves. Which server you make the "master" and which one becomes the "slave" is decided by the configurations of the server.ini and cluster.ini.

Both configs can be seen in the interface under "**Configs**" and can be edited there.

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

Only the "**[SHARD]**" part is edited in both .ini files 

## Master

The master is the Upperworld server, this server must be set as the master in the configs.

### server.ini

:::info
**IMPORTANT** the "**MASTERIP**" would mean the IP of the master server, if this IP is 123.123.123.123 then "bind_ip = 123.123.123.123" must be entered there. eingetragen werden.

"**MASTERIP**" is not a static value that may be entered in the server.ini at "bind_ip = ".
:::

By default, "**[SHARD]**" only says "is_master = true" in server.ini, the following commands are now added there
```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

By default, "**[SHARD]**" in cluster.ini contains only "is_master = true", where the following commands are now added.

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## Slave

The slave is the cave server, where the data from the master must be entered in the configs.

### server.ini

:::info
**IMPORTANT** the "**SLAVEIP**" would mean the IP of the slave server, if this IP is 123.123.123.123.123 then "bind_ip = 123.123.123.123.123" must be entered there.

"**SLAVEIP**" is not a static value that may be entered in the server.ini at "bind_ip = ".

"**MASTERIP**" is not a static value that may be entered in the server.ini at "master_ip = ".
:::

By default, "**[SHARD]**" in the server.ini contains only "is_master = true", the following commands are now added there.

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

By default, "**[SHARD]**" in cluster.ini contains only "is_master = true", where the following commands are now added.
```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### Generate New World

If all configs have been set correctly, a new world must be generated for the slave server. A new file is required so that the caves are created correctly.

Use the [Access via FTP](gameserver-ftpaccess.md) guide to navigate to the slave server in the directory: */starve/Save/Cluster_1/Master/*
A new file with the name  "*worldgenoverride.lua*" is now created in this directory.
This file is filled with the following content.

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

Afterwards you have to hold the "**TAB**" button on the server to get the server status. Here you can click on 3 dots at the top left and regenerate the world once with the overwritten parameter with "**Regenerate World**".

As soon as it has been reloaded, everything is finished and you can play with caves on your server.

<InlineVoucher />
