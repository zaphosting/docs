---
id: palworld-structure-damage-rate
title: "Palworld: Tasa de Daño a Estructuras"
description: "Aprende cómo cambiar la tasa de daño y deterioro de estructuras en Palworld editando la configuración del servidor de forma segura y correcta. -> Aprende más ahora"
sidebar_label: "Tasa de Daño a Estructuras"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar cuánto daño reciben las estructuras y qué tan rápido se deterioran con el tiempo. En esta guía, aprenderás a editar manualmente el archivo de configuración correcto en la administración de tu servidor de juegos ZAP-Hosting y aplicar los nuevos ajustes de daño a estructuras.



## Preparación

Antes de comenzar, asegúrate de que tu servidor Palworld ya esté instalado y que puedas acceder a su administración web.

:::info Acceso Requerido
Necesitas acceso al panel de administración de tu servidor de juegos ZAP-Hosting y al área de `Configs` para tu servidor Palworld.
:::

:::note Configuración Manual
Esta configuración se realiza editando manualmente el archivo de configuración de Palworld. Los ajustes exactos no se cambian mediante un interruptor de un solo clic en esta guía.
:::

## Abre el archivo de configuración correcto

Para cambiar el daño y deterioro de estructuras, debes editar el archivo `PalWorldSettings.ini`.

En la administración de tu servidor de juegos ZAP-Hosting:

1. Abre tu servidor **Palworld**.
2. Navega a **Configs**.
3. Abre el archivo `PalWorldSettings.ini`.

Este archivo contiene los valores principales de configuración del juego para tu servidor, incluyendo los multiplicadores relacionados con las estructuras.

## Edita los ajustes de daño a estructuras

Los valores relevantes están almacenados en las entradas de configuración del servidor dentro de `PalWorldSettings.ini`.

### Claves de configuración relevantes

Usa los siguientes ajustes para controlar el comportamiento del daño a estructuras:

| Clave de configuración | Descripción | Valor por defecto |
| --- | --- | --- |
| `BuildObjectDamageRate` | Controla cuánto daño reciben las estructuras | `1.0` |
| `BuildObjectDeteriorationDamageRate` | Controla qué tan rápido se deterioran las estructuras con el tiempo | `1.0` |

Un valor de `1.0` es la tasa normal por defecto. Valores más bajos reducen el efecto, mientras que valores más altos lo aumentan.

### Ejemplo de configuración

Dependiendo del contenido actual de tu archivo, estos valores suelen formar parte de la lista de opciones del servidor en `PalWorldSettings.ini`.

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

Si tu configuración usa una cadena de opciones combinada, asegúrate de cambiar solo los valores y mantener intacta la sintaxis circundante.

Por ejemplo:

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution Mantén la Sintaxis Existente
`PalWorldSettings.ini` puede contener muchas configuraciones en una sola línea `OptionSettings=(...)`. Si este es el caso en tu servidor, no elimines comas, paréntesis u otras entradas existentes al editar el archivo.
:::

## Elige valores adecuados

Puedes ajustar los multiplicadores según qué tan duraderas quieras que sean las estructuras construidas por los jugadores.

### Multiplicador de daño a estructuras

`BuildObjectDamageRate` cambia cuánto daño directo recibe una estructura.

| Valor | Efecto |
| --- | --- |
| `0.5` | Las estructuras reciben la mitad de daño |
| `1.0` | Daño por defecto a estructuras |
| `2.0` | Las estructuras reciben el doble de daño |

### Multiplicador de deterioro de estructuras

`BuildObjectDeteriorationDamageRate` cambia qué tan rápido se deterioran las estructuras con el tiempo.

| Valor | Efecto |
| --- | --- |
| `0.1` | Deterioro muy lento |
| `1.0` | Velocidad de deterioro por defecto |
| `2.0` | Deterioro más rápido |

:::tip Mínimo Recomendado para Deterioro
Se recomienda mantener `BuildObjectDeteriorationDamageRate` en `0.1` o superior. Un deterioro muy bajo o deshabilitado puede dejar estructuras sin usar por más tiempo, lo que podría afectar negativamente la limpieza y el rendimiento del servidor con el tiempo.
:::

## Guarda el archivo y reinicia el servidor

Después de editar los valores en `PalWorldSettings.ini`, guarda el archivo en la sección `Configs`.

Luego necesitas reiniciar el servidor Palworld para que se carguen los nuevos ajustes de daño a estructuras.

### Acción requerida después de editar

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Comando adicional en consola | No se requiere comando verificado |

:::info Reinicio Requerido
Los cambios en `BuildObjectDamageRate` y `BuildObjectDeteriorationDamageRate` no se aplican de forma confiable hasta que el servidor haya sido reiniciado.
:::

## Verifica los cambios

Una vez que el servidor esté en línea nuevamente, únete a tu servidor Palworld y prueba el nuevo comportamiento.

Puedes verificar los cambios comprobando si:

- las estructuras reciben más o menos daño directo que antes
- las estructuras abandonadas o expuestas se deterioran a la velocidad esperada

Si los cambios no parecen aplicarse, vuelve a abrir `PalWorldSettings.ini` y confirma que:

- los nombres de las configuraciones están escritos exactamente como `BuildObjectDamageRate` y `BuildObjectDeteriorationDamageRate`
- los valores están en la sección correcta o línea `OptionSettings`
- el servidor fue reiniciado después de guardar

## Conclusión

Felicidades, has cambiado con éxito las tasas de daño y deterioro de estructuras en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂