---
id: fivem-qbcore-spawnpoints
title: "FiveM: Gestiona y personaliza los puntos de spawn con QbCore"
description: "Descubre cómo personalizar y añadir puntos de spawn en el framework QBCore para una experiencia de juego mejorada → Aprende más ahora"
sidebar_label: Puntos de spawn
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Quieres cambiar los puntos de spawn por defecto o añadir más? El manejo de los puntos de spawn en el **framework QBCore** se define a través del recurso `qb-spawn`. A continuación te explicamos cómo puedes personalizarlos.

<InlineVoucher />

## Configuración

Los puntos de spawn se ajustan mediante el archivo de configuración `config.lua` del recurso `qb-spawn`. Este archivo se puede editar vía FTP. Si aún no sabes cómo usar FTP, te recomendamos echar un vistazo a la [guía de acceso FTP](gameserver-ftpaccess.md).

La configuración por defecto de los puntos de spawn es la siguiente:

```
QB.Spawns = {
    ["legion"] = { -- Índice para la tabla
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- Dónde aparece el jugador
        location = "legion", -- así es como el javascript sabe cuál elegiste
        label = "Legion Square", -- Lo que el jugador ve en el menú
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

Supongamos que quieres añadir más puntos de spawn, entonces tendrías que agregar otro registro al archivo de configuración:

```
["new_spawn_name"] = { -- Tiene que ser único
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coordenadas donde aparecerá el jugador
    location = "new_spawn_name", -- Tiene que ser único
    label = "New spawn name", -- Esta es la etiqueta que aparecerá en el menú de selección.
},
```

:::info Determinar coordenadas
Se necesita un recurso adecuado para obtener las coordenadas actuales. Encontrarás varios para elegir en Internet y puedes decidir cuál te va mejor. :)
:::

El resultado final quedaría así:

```
    QB.Spawns = {
    
        ["legion"] = { -- Índice para la tabla
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- Dónde aparece el jugador
            location = "legion", -- así es como el javascript sabe cuál elegiste
            label = "Legion Square", -- Lo que el jugador ve en el menú
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- Tiene que ser único
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coordenadas donde aparecerá el jugador
        location = "new_spawn_name", -- Tiene que ser único
        label = "New spawn name", -- Esta es la etiqueta que aparecerá en el menú de selección.
         },
    }
```




## Conclusión

Has cambiado con éxito los puntos de spawn existentes o añadido nuevos siguiendo este método. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para echarte una mano! 🙂

<InlineVoucher />