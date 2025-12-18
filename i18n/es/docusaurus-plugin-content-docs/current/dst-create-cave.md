---
id: dst-create-cave
title: "Don't Starve Together: Crear cuevas en servidores"
description: "Descubre cómo configurar servidores master y slave para cuevas en Don't Starve Together y mejora tu experiencia de juego → Aprende más ahora"
sidebar_label: Crear Cuevas
services:
  - gameserver-dst
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Preparación para las Cuevas

Para usar cuevas en Don't Starve Together, necesitas dos servidores contratados con nosotros. Uno será el "master", que se usa para el mundo superior, y el segundo será el "slave", que se usa exclusivamente para las cuevas. Cuál servidor será el "master" y cuál el "slave" se decide con las configuraciones de los archivos server.ini y cluster.ini.

Ambas configs las puedes ver en el panel bajo "**Configs**" y editarlas ahí mismo.

![](https://screensaver01.zap-hosting.com/index.php/s/mgjpecSGBsyasmc/preview)

Solo se edita la parte "**[SHARD]**" en ambos archivos .ini

## Master

El master es el servidor del mundo superior, este servidor debe estar configurado como master en las configs.

### server.ini

:::info
**IMPORTANTE** el "**MASTERIP**" es la IP del servidor master, si esta IP es 123.123.123.123 entonces debe ponerse "bind_ip = 123.123.123.123".

"**MASTERIP**" no es un valor estático que puedas poner directamente en server.ini en "bind_ip = ".
:::

Por defecto, en "**[SHARD]**" solo aparece "is_master = true" en server.ini, ahora se añaden estos comandos:

```
shard_enabled = true
is_master = true
bind_ip = MASTERIP
name = Overworld
id=100
```

### cluster.ini

Por defecto, en "**[SHARD]**" de cluster.ini solo está "is_master = true", ahora se añaden estos comandos:

```
shard_enabled = true
is_master = true
master_ip = MASTERIP
master_port = 27002
shard_name = Overworld
cluster_key = deinclusterkey
```

## Slave

El slave es el servidor de las cuevas, donde deben ponerse los datos del master en las configs.

### server.ini

:::info
**IMPORTANTE** el "**SLAVEIP**" es la IP del servidor slave, si esta IP es 123.123.123.123 entonces debe ponerse "bind_ip = 123.123.123.123".

"**SLAVEIP**" no es un valor estático que puedas poner directamente en server.ini en "bind_ip = ".

"**MASTERIP**" tampoco es un valor estático que puedas poner directamente en server.ini en "master_ip = ".
:::

Por defecto, en "**[SHARD]**" de server.ini solo está "is_master = true", ahora se añaden estos comandos:

```
shard_enabled = true
is_master = false
bind_ip = SLAVEIP
master_ip = MASTERIP
name = Caves
id=200
```

### cluster.ini

Por defecto, en "**[SHARD]**" de cluster.ini solo está "is_master = true", ahora se añaden estos comandos:

```
shard_enabled = true
is_master = false
master_ip = MASTERIP
master_port = 27002
shard_name = Caves
cluster_key = deinclusterkey
```

### Generar Nuevo Mundo

Si todas las configs están bien configuradas, debes generar un mundo nuevo para el servidor slave. Se necesita un archivo nuevo para que las cuevas se creen correctamente.

Usa la [guía de Acceso vía FTP](gameserver-ftpaccess.md) para navegar al servidor slave en el directorio: */starve/Save/Cluster_1/Master/*  
Ahora crea un archivo nuevo llamado "*worldgenoverride.lua*" en este directorio.  
Llena este archivo con el siguiente contenido:

```
return {
override_enabled = true,
preset = "DST_CAVE", -- "SURVIVAL_TOGETHER", "MOD_MISSING", "SURVIVAL_TOGETHER_CLASSIC", "SURVIVAL_DEFAULT_PLUS", "COMPLETE_DARKNESS", "DST_CAVE", "DST_CAVE_PLUS"
overrides = {},
}
```

Después debes mantener presionada la tecla "**TAB**" en el servidor para obtener el estado del servidor. Ahí puedes hacer clic en los 3 puntos arriba a la izquierda y regenerar el mundo una vez con el parámetro sobrescrito usando "**Regenerate World**".

Cuando se recargue, ¡todo estará listo y podrás jugar con cuevas en tu servidor!

<InlineVoucher />