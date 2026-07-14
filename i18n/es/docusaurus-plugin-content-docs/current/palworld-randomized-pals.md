---
id: palworld-randomized-pals
title: "Palworld: Pals Aleatorios"
description: "Aprende cómo activar Pals aleatorios en Palworld editando la configuración de tu servidor, incluyendo el tipo de randomizador y la semilla para el mundo del juego Palworld. -> Aprende más ahora"
sidebar_label: Palworld: Pals Aleatorios
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld incluye ajustes de randomizador que pueden cambiar cómo aparecen los Pals en tu mundo de juego. En esta guía, aprenderás a activar y configurar manualmente Pals aleatorios en tu servidor Palworld de ZAP-Hosting editando el archivo de configuración correcto.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting y permiso para editar archivos de configuración del servidor.

:::info Requisito de acceso a configuración
Necesitas acceso a la administración web de tu servidor para abrir la sección `Configs` y editar los archivos de configuración de Palworld.
:::

## Abre el archivo de configuración correcto

Para configurar Pals aleatorios, debes editar el archivo `PalWorldSettings.ini`.

En la administración del servidor de juegos ZAP-Hosting:

1. Abre tu servidor **Palworld**.
2. Navega a **Configs**.
3. Abre el archivo llamado `PalWorldSettings.ini`.

Este archivo contiene los valores principales de configuración del juego para tu servidor Palworld, incluyendo las opciones del randomizador.

## Configura los Pals aleatorios

Los ajustes del randomizador se almacenan como claves dentro de `PalWorldSettings.ini`. Debes localizar el bloque de configuración existente y ajustar manualmente los valores relevantes.

### Resumen de ajustes del randomizador

Usa las siguientes claves de configuración para los Pals aleatorios:

| Clave de configuración | Valores permitidos | Predeterminado | Propósito |
| --- | --- | --- | --- |
| `RandomizerType` | `None`, `Region` | `None` | Controla si el spawn aleatorio de Pals está desactivado o se randomiza por región |
| `bIsRandomizerPalLevelRandom` | `True`, `False` | `False` | Activa niveles de Pals salvajes completamente aleatorios al ponerlo en `True` |
| `RandomizerSeed` | `[tu_valor_semilla]` o vacío | `""` | Define la semilla usada al generar el mundo |

:::caution Compatibilidad con servidor dedicado
Se ha reportado que el valor `All` no es compatible con servidores dedicados de Palworld. Solo debes usar valores soportados como `None` o `Region`.
:::

### Ejemplo de configuración

Agrega o ajusta los siguientes valores en tu archivo `PalWorldSettings.ini` según sea necesario:

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

Reemplaza `zaphosting` con tu propio valor de semilla si quieres una configuración aleatoria específica. Una semilla asegura que se use el mismo patrón de randomización al generar el mundo.

### Qué hace cada ajuste

#### `RandomizerType`

Este ajuste controla si los spawns de Pals son aleatorios.

- `None` desactiva la randomización
- `Region` activa la randomización regional para los spawns de Pals

Si quieres Pals aleatorios en el mapa mundial de Palworld, configura este valor en `Region`.

#### `bIsRandomizerPalLevelRandom`

Este ajuste controla los niveles de los Pals salvajes.

- `False` mantiene el comportamiento normal de niveles
- `True` activa niveles de Pals salvajes completamente aleatorios

Esto puede hacer que el juego Palworld sea mucho menos predecible, especialmente en la progresión temprana.

#### `RandomizerSeed`

Este ajuste opcional define la semilla de randomización usada durante la generación del mundo.

Ejemplo:

```ini
RandomizerSeed="[tu_valor_semilla]"
```

Reemplaza `[tu_valor_semilla]` con cualquier texto o número personalizado que quieras usar como semilla.

:::note Comportamiento de la semilla
La semilla del randomizador se aplica cuando se genera el mundo. Si cambias `RandomizerSeed` después en un mundo existente, el cambio no se aplicará a menos que reinicies el mundo o comiences uno nuevo.
:::

## Guarda y aplica los cambios

Después de editar el archivo, guarda tus cambios en la sección `Configs` de ZAP-Hosting.

Una vez guardado el archivo, reinicia tu servidor Palworld para que se cargue la configuración actualizada.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Ejecutar comandos adicionales en consola | No |
| Reiniciar mundo para cambios de semilla en una partida existente | Si cambias `RandomizerSeed` |

:::tip Cuándo empezar un mundo nuevo
Si activas la randomización por primera vez, especialmente con una `RandomizerSeed` personalizada, es mejor usar un mundo nuevo para asegurar que los ajustes se apliquen correctamente.
:::

## Verifica el resultado

Después del reinicio, únete a tu servidor y verifica si los spawns de Pals se comportan según los ajustes de randomizador que seleccionaste.

Debes comprobar:

- si los spawns regionales aleatorios están activos
- si los niveles de Pals salvajes están aleatorizados si está activado
- si el comportamiento esperado del mundo coincide con la semilla configurada en un mundo nuevo

Si los cambios no parecen funcionar, vuelve a abrir `PalWorldSettings.ini` y confirma que:

- las claves fueron ingresadas correctamente
- los valores usan la capitalización válida como `True` y `False`
- el servidor fue reiniciado después de guardar
- se creó un mundo nuevo si cambiaste la semilla

## Solución de problemas

### No aparecen Pals aleatorios

Verifica que `RandomizerType=Region` esté presente en `PalWorldSettings.ini`. Si sigue en `None`, la randomización está desactivada.

### Cambios en la semilla no surten efecto

Esto suele significar que el mundo ya fue generado antes de agregar la nueva semilla. En ese caso, debes reiniciar el mundo o crear uno nuevo para que la semilla se aplique.

### Problemas en el servidor tras cambiar ajustes del randomizador

Si usaste un valor no soportado, como `All`, vuelve a un valor soportado como `None` o `Region`, guarda el archivo y reinicia el servidor nuevamente.

:::danger Evita valores no soportados en el randomizador
No uses `RandomizerType=All` en un servidor dedicado a menos que la documentación oficial de Palworld confirme soporte para ello. Actualmente, se sabe que este ajuste es incompatible en entornos de servidores dedicados.
:::

## Conclusión

Felicidades, has configurado con éxito Pals aleatorios en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para ayudarte! 🙂