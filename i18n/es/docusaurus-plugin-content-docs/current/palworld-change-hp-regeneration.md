---
id: palworld-change-hp-regeneration
title: "Palworld: Cambiar la regeneración de HP"
description: "Aprende cómo cambiar la regeneración de HP en Palworld editando los ajustes de regeneración de jugadores y Pals en tu servidor para una curación más rápida, más lenta o desactivada -> Aprende más ahora"
sidebar_label: Palworld: Cambiar la regeneración de HP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite cambiar los ajustes de regeneración tanto para jugadores como para Pals mediante la configuración principal del servidor. En esta guía, aprenderás a editar el archivo de configuración correcto en el panel de ZAP-Hosting, ajustar los valores de regeneración de HP y aplicar los cambios correctamente.



## Preparación

Antes de comenzar, asegúrate de que tu servidor de juegos Palworld esté en línea y que puedas acceder a su administración web a través del panel de ZAP-Hosting.

:::info Requisito de acceso a la configuración
Necesitas acceso a la administración de tu servidor de juegos y al área de `Configs` para editar manualmente los archivos de configuración de Palworld.
:::

## Abrir el archivo de configuración de Palworld

Para cambiar la regeneración de HP, debes editar el archivo `PalWorldSettings.ini`.

En la administración del servidor de juegos de ZAP-Hosting:

1. Abre tu servidor Palworld.
2. Navega a `Configs`.
3. Abre el archivo `PalWorldSettings.ini`.

Este archivo contiene los valores principales de configuración del gameplay para tu servidor, incluyendo los multiplicadores de regeneración de salud para jugadores y Pals.

:::note Cambios manuales en la configuración
Dependiendo de tu configuración actual, los ajustes pueden aparecer en una línea larga de parámetros dentro de la sección `OptionSettings`. Debes editar los valores existentes con cuidado y mantener el formato intacto.
:::

## Cambiar los valores de regeneración de HP

Los ajustes de regeneración de HP se almacenan como multiplicadores numéricos. Un valor de `1.0` usa la velocidad de regeneración predeterminada.

### Ajustes de regeneración soportados

Usa las siguientes claves de configuración en `PalWorldSettings.ini`:

| Clave de configuración | Descripción | Valor predeterminado |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | Tasa natural de regeneración de HP del jugador | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | Regeneración de HP del jugador mientras duerme | `1.0` |
| `PalAutoHPRegeneRate` | Tasa natural de regeneración de HP del Pal | `1.0` |
| `PalAutoHpRegeneRateInSleep` | Regeneración de HP del Pal mientras duerme en la Palbox | `1.0` |

### Comportamiento de los valores

Puedes usar la siguiente lógica para los valores al cambiar la regeneración:

| Valor | Efecto |
| --- | --- |
| `1.0` | Velocidad de regeneración predeterminada |
| Mayor que `1.0` | Curación más rápida |
| Menor que `1.0` | Curación más lenta |
| `0.0` | Desactiva la regeneración |

:::tip Elegir buenos valores de regeneración
Si quieres una experiencia de supervivencia un poco más fácil, prueba valores como `1.5` o `2.0`. Si prefieres un reto mayor, usa valores por debajo de `1.0` o desactiva la regeneración completamente con `0.0`.
:::

## Editar las entradas de configuración

En la mayoría de las configuraciones de servidores Palworld, estos valores están dentro de la línea `OptionSettings=(...)` en `PalWorldSettings.ini`.

### Ejemplo de configuración

Agrega las entradas si faltan, o cambia los valores existentes si ya están presentes:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

Por ejemplo, si quieres una curación natural más rápida para jugadores y Pals, podrías usar:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

Si solo quieres cambiar valores específicos, ajusta solo esas entradas y deja el resto de tus valores existentes en `OptionSettings` sin modificar.

:::caution Preservar los valores existentes de OptionSettings
No elimines entradas no relacionadas de la línea `OptionSettings`. Esta sección suele contener muchos ajustes del gameplay, y eliminarlos puede restablecer otras partes de la configuración de tu servidor sin querer.
:::

## Guardar y aplicar los cambios

Después de editar el archivo, guarda los cambios en el área `Configs` de ZAP-Hosting.

Para aplicar los nuevos ajustes de regeneración, reinicia tu servidor Palworld.

### Reiniciar el servidor

1. Guarda el archivo `PalWorldSettings.ini` editado.
2. Regresa a la administración de tu servidor.
3. Reinicia el servidor.

El reinicio es necesario porque Palworld lee estos ajustes de gameplay durante el inicio del servidor.

:::info Reinicio obligatorio
Los cambios en la regeneración de HP no tendrán efecto inmediato mientras el servidor esté en ejecución. Debes reiniciar el servidor después de guardar la configuración.
:::

## Verificar los nuevos ajustes de regeneración

Después de que el servidor se haya reiniciado, únete a tu servidor y prueba el nuevo comportamiento de curación en el juego.

Puedes verificar el cambio comprobando:

- recuperación natural de HP del jugador
- curación del jugador mientras duerme
- recuperación natural de HP del Pal
- comportamiento de curación del Pal en la Palbox mientras duerme

Si la regeneración no funciona como esperas, vuelve a abrir `PalWorldSettings.ini` y confirma que:

- las claves de configuración están escritas exactamente correctamente
- los valores usan números decimales válidos como `1.0` o `2.0`
- las entradas permanecen dentro de la sección `OptionSettings`
- el servidor fue reiniciado después de guardar

## Conclusión

Felicitaciones, has cambiado con éxito la regeneración de HP en Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂