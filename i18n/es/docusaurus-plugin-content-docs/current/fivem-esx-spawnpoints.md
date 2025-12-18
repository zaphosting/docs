---
id: fivem-esx-spawnpoints
title: "FiveM: Gestiona y personaliza los puntos de spawn con ESX"
description: "Descubre cómo personalizar y ampliar los puntos de spawn en el framework ESX para una experiencia de juego mejorada → Aprende más ahora"
sidebar_label: Puntos de spawn
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Quieres cambiar los puntos de spawn por defecto o añadir más? El manejo de los puntos de spawn en el **framework ESX** está definido en `es_extended`. A continuación te explicamos cómo puedes personalizarlos.

<InlineVoucher />

## Configuración

Los puntos de spawn se ajustan a través del archivo de configuración `main.lua` de `es_extended` (../es_extended/shared/config/). Este archivo se puede editar vía FTP. Si aún no sabes cómo usar FTP, te recomendamos echar un vistazo a la [guía de acceso FTP](gameserver-ftpaccess.md).

La configuración por defecto de los puntos de spawn es la siguiente:

```
Config.DefaultSpawns = { -- Si quieres tener más posiciones de spawn y seleccionarlas aleatoriamente, descomenta el código comentado o añade más ubicaciones
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

Supongamos que quieres añadir más puntos de spawn, entonces tendrías que añadir otro registro en el archivo de configuración:

```
Config.DefaultSpawns = { -- Si quieres tener más posiciones de spawn y seleccionarlas aleatoriamente, descomenta el código comentado o añade más ubicaciones
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // NUEVO SPAWN
}
```

:::info Determinar coordenadas
Para obtener las coordenadas actuales necesitas un recurso adecuado. Encontrarás varios en Internet y puedes elegir el que mejor te funcione. :)
:::

## Conclusión

Has cambiado con éxito los puntos de spawn existentes o añadido nuevos siguiendo este método. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para echarte una mano! 🙂

<InlineVoucher />