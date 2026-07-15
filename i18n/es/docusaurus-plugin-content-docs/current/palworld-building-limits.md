---
id: palworld-building-limits
title: "Palworld: Límites de Construcción"
description: "Aprende a cambiar los límites de construcción en Palworld, las reglas de construcción de bases y las restricciones de área editando manualmente la configuración de tu servidor. -> Aprende más ahora"
sidebar_label: "Límites de Construcción"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar varios límites y restricciones de construcción mediante la configuración del servidor. En esta guía, aprenderás a editar manualmente el archivo de configuración correcto en el panel web de ZAP-Hosting, cambiar los valores relevantes de construcción y aplicar los cambios correctamente.



## Preparación

Antes de comenzar, asegúrate de que:

- tienes acceso a tu servidor de juegos Palworld en la administración de servidores de juegos de ZAP-Hosting
- tu servidor esté actualmente apagado o estés preparado para reiniciarlo después de hacer cambios
- sabes que esta guía cubre límites generales de construcción y restricciones de área, no los límites específicos de bases de gremios

:::info Configuración Manual Requerida
Estos ajustes deben cambiarse manualmente en el archivo de configuración. El archivo relevante se puede acceder en la administración de tu servidor de juegos ZAP-Hosting bajo `Configs`.
:::

:::note Límites de Bases de Gremio
Si quieres cambiar el número de bases por gremio en lugar de los límites generales de construcción que se tratan aquí, deberías usar la guía separada de límites de bases de gremio si está disponible en ZAP-Docs.
:::

## Abre el archivo de configuración

Para cambiar los límites de construcción, necesitas editar el archivo `PalWorldSettings.ini`.

En la administración de tu servidor de juegos ZAP-Hosting:

1. Abre tu servidor Palworld.
2. Navega a `Configs`.
3. Abre el archivo `PalWorldSettings.ini`.

Este archivo contiene los ajustes principales del mundo y la jugabilidad para tu servidor Palworld, incluyendo varias entradas de configuración relacionadas con la construcción.

## Edita los ajustes de límite de construcción

Los valores relevantes están almacenados dentro de la sección `OptionSettings` en `PalWorldSettings.ini`.

### Claves de configuración relevantes

Usa los siguientes ajustes para controlar los límites de construcción y las restricciones de área:

| Clave de configuración | Descripción | Valor de ejemplo |
| --- | --- | --- |
| `MaxBuildingLimitNum` | Establece el número máximo de construcciones por jugador. `0` desactiva el límite. | `0` |
| `BaseCampMaxNum` | Establece el número máximo de campamentos base permitidos en todo el servidor. | `128` |
| `bBuildAreaLimit` | Controla si las restricciones de construcción cerca de ciertas estructuras están habilitadas. | `False` |

### Ejemplo de configuración

Dependiendo del contenido actual de tu archivo, estos valores suelen formar parte de la línea `OptionSettings=(...)`.

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

Si tu archivo ya contiene una línea `OptionSettings` más larga, no elimines los otros valores existentes. Solo necesitas cambiar o agregar las entradas relevantes dentro de ese mismo bloque de configuración.

### Qué hace cada valor

| Ajuste | Efecto |
| --- | --- |
| `MaxBuildingLimitNum=0` | Elimina el límite de construcción por jugador |
| `MaxBuildingLimitNum=[tu_número]` | Limita a cada jugador al número especificado de construcciones |
| `BaseCampMaxNum=[tu_número]` | Establece el número total de campamentos base permitidos en todo el servidor |
| `bBuildAreaLimit=True` | Impide construir cerca de estructuras restringidas como puntos de viaje rápido |
| `bBuildAreaLimit=False` | Desactiva esa restricción de área |

:::caution Mantén la Sintaxis Existente Intacta
`PalWorldSettings.ini` es sensible al formato. Asegúrate de cambiar solo los valores que necesitas y mantener las comas, corchetes y la estructura general `OptionSettings=(...)` intactos.
:::

## Guarda tus cambios

Después de editar los valores:

1. Guarda el archivo en la sección `Configs`.
2. Revisa la línea una vez más para detectar errores de formato.

Si la sintaxis es incorrecta, el servidor puede ignorar los ajustes cambiados o no aplicarlos correctamente.

### Ejemplos de valores personalizados

Aquí tienes un ejemplo que limita a cada jugador a `5000` construcciones, permite hasta `20` campamentos base en el servidor y mantiene habilitadas las zonas de construcción restringidas:

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

Aquí otro ejemplo que elimina el límite de construcción por jugador y desactiva las restricciones de área:

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## Reinicia el servidor

Después de guardar la configuración, necesitas reiniciar tu servidor Palworld para que se carguen los nuevos ajustes.

En la administración de tu servidor de juegos ZAP-Hosting:

1. detén el servidor si aún está en ejecución
2. inicia el servidor nuevamente

Se requiere un reinicio completo para que los cambios en `PalWorldSettings.ini` tengan efecto.

:::tip Aplica Cambios de Forma Confiable
Si haces varios cambios de configuración a la vez, es buena idea guardar todas las ediciones primero y luego hacer un solo reinicio. Esto ayuda a evitar tiempos de inactividad innecesarios.
:::

## Verifica los nuevos límites

Una vez que el servidor esté en línea, conéctate y prueba el nuevo comportamiento de construcción.

Debes verificar:

- si los jugadores pueden colocar más o menos estructuras que antes
- si el número total de campamentos base coincide con el valor configurado
- si construir cerca de estructuras restringidas está permitido o bloqueado según `bBuildAreaLimit`

Si los cambios no parecen aplicarse, vuelve a abrir `PalWorldSettings.ini` y confirma que:

- los valores se guardaron correctamente
- las claves están dentro del bloque `OptionSettings`
- el servidor fue reiniciado completamente después de la edición

## Referencia de configuración

| Archivo | Ubicación en ZAP-Hosting | Acción requerida tras editar |
| --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` en la administración de tu servidor de juegos | Reiniciar el servidor |

| Ajuste | Uso recomendado |
| --- | --- |
| `MaxBuildingLimitNum` | Úsalo para controlar los límites de construcción por jugador |
| `BaseCampMaxNum` | Úsalo para controlar el número total de campamentos base en el servidor |
| `bBuildAreaLimit` | Úsalo para permitir o restringir la construcción cerca de estructuras protegidas del mapa |

## Conclusión

Felicidades, has cambiado con éxito los límites de construcción en tu servidor Palworld. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂