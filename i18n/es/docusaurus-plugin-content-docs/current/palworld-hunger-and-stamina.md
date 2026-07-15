---
id: palworld-hunger-and-stamina
title: "Palworld: Hambre y Resistencia"
description: "Aprende a ajustar las tasas de agotamiento de hambre y resistencia para jugadores y Pals en Palworld editando la configuración de tu servidor. -> Aprende más ahora"
sidebar_label: "Hambre y Resistencia"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar qué tan rápido se agotan el hambre y la resistencia tanto para jugadores como para Pals. En esta guía, aprenderás a editar el archivo de configuración correcto del servidor en el panel web de ZAP-Hosting y aplicar tasas personalizadas de agotamiento de forma segura.

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la administración de servidores de juegos de ZAP-Hosting.

:::info Requisito de acceso a configuración
Necesitas acceso al panel de administración del servidor y a la sección `Configs` para editar manualmente los archivos de configuración de Palworld.
:::

## Abre el archivo de configuración de Palworld

Para cambiar el comportamiento del hambre y la resistencia, debes editar el archivo `PalWorldSettings.ini`.

En la administración de servidores de juegos de ZAP-Hosting:

1. Abre tu servidor Palworld.
2. Ve a la sección `Configs`.
3. Abre el archivo `PalWorldSettings.ini`.



:::note Archivo usado para multiplicadores de juego
Los ajustes de hambre y resistencia se almacenan en `PalWorldSettings.ini`. Estos valores suelen formar parte de la cadena principal de opciones usada por el servidor dedicado.
:::

## Cambia los valores de hambre y resistencia

Dentro de `PalWorldSettings.ini`, busca la sección de configuración de juego que contiene los valores de opciones de tu servidor. Debes agregar o ajustar las siguientes claves de configuración.

:::caution Ortografía importante en Palworld
Palworld usa la ortografía `Decreace` en estas entradas de configuración. Esto es intencional en el formato de configuración del servidor, por lo que debes usar las claves exactamente como se muestran a continuación.
:::

### Claves de configuración disponibles

| Clave de configuración | Descripción | Valor predeterminado |
| --- | --- | --- |
| `PlayerStomachDecreaceRate` | Controla la tasa de agotamiento del hambre del jugador | `1.0` |
| `PlayerStaminaDecreaceRate` | Controla la tasa de agotamiento de la resistencia del jugador | `1.0` |
| `PalStomachDecreaceRate` | Controla la tasa de agotamiento del hambre del Pal | `1.0` |
| `PalStaminaDecreaceRate` | Controla la tasa de agotamiento de la resistencia del Pal | `1.0` |

### Cómo funcionan los valores

Valores más bajos reducen la velocidad con la que se consume el hambre o la resistencia.

| Valor | Efecto |
| --- | --- |
| `1.0` | Tasa de agotamiento predeterminada |
| `0.5` | Mitad de la tasa de agotamiento |
| `0.0` | Desactiva completamente el agotamiento |

:::tip Elección de ajustes equilibrados
Si quieres una experiencia de supervivencia más relajada sin eliminar completamente la mecánica, `0.5` es un punto de partida práctico tanto para hambre como para resistencia.
:::

## Ejemplo de configuración

Agrega o edita los siguientes valores en `PalWorldSettings.ini` según la experiencia de juego que desees:

```ini
PlayerStomachDecreaceRate=0.5
PlayerStaminaDecreaceRate=0.5
PalStomachDecreaceRate=0.5
PalStaminaDecreaceRate=0.5
```

Este ejemplo reduce el agotamiento de hambre y resistencia a la mitad de la tasa predeterminada para jugadores y Pals.

Si quieres desactivar completamente el hambre y la resistencia, usa:

```ini
PlayerStomachDecreaceRate=0.0
PlayerStaminaDecreaceRate=0.0
PalStomachDecreaceRate=0.0
PalStaminaDecreaceRate=0.0
```

:::note Ubicación de los ajustes
Dependiendo de cómo esté estructurado tu `PalWorldSettings.ini`, estos valores pueden necesitar incluirse dentro de la lista de opciones existente en lugar de colocarse como líneas independientes. Si tu archivo ya contiene una larga entrada `OptionSettings`, asegúrate de preservar el formato existente y solo cambiar o insertar las claves relevantes.
:::

## Guarda y reinicia el servidor

Después de editar el archivo:

1. Guarda los cambios en `PalWorldSettings.ini`.
2. Reinicia tu servidor Palworld desde la administración de servidores de juegos de ZAP-Hosting.

Es necesario reiniciar para que los nuevos ajustes de hambre y resistencia tengan efecto.

:::caution Reinicio obligatorio
Si no reinicias el servidor, los valores de configuración actualizados no serán cargados por el servidor de juegos.
:::

## Verifica los cambios en el juego

Una vez que el servidor esté en línea, únete y prueba los nuevos ajustes.

### Qué verificar

- Que el hambre del jugador se agote más lentamente
- Que la resistencia del jugador dure más durante el movimiento y acciones
- Que el hambre del Pal disminuya a la tasa esperada
- Que el uso de resistencia del Pal coincida con los valores configurados

Si los valores no parecen aplicarse, vuelve a abrir `PalWorldSettings.ini` y verifica que:

- las claves de configuración estén escritas exactamente como se muestran
- los valores sean números decimales válidos como `1.0`, `0.5` o `0.0`
- los ajustes se hayan guardado correctamente
- el servidor haya sido reiniciado completamente después de editar

## Conclusión

Felicidades, has cambiado con éxito las tasas de agotamiento de hambre y resistencia en tu servidor Palworld. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para asistirte! 🙂