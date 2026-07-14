---
id: palworld-max-guild-bases
title: "Palworld: Máximo de Bases por Guild"
description: "Aprende a cambiar el ajuste de máximo de bases por guild en Palworld editando el valor BaseCampMaxNumInGuild en tu servidor. -> Aprende más ahora"
sidebar_label: Palworld: Máximo de Bases por Guild
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar el número máximo de bases que cada guild puede colocar en tu servidor. En esta guía, aprenderás a editar manualmente el archivo de configuración correcto en el panel web de ZAP-Hosting, cambiar el ajuste `BaseCampMaxNumInGuild` y aplicar el cambio reiniciando tu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en el panel web de ZAP-Hosting.

:::info Acceso Requerido
Necesitas acceso a la administración de tu servidor Palworld y a la sección `Configs` para editar archivos de configuración.
:::

## Localiza el archivo de configuración

Para cambiar el ajuste de máximo de bases por guild, debes editar el archivo `PalWorldSettings.ini`.

En el panel web de ZAP-Hosting, abre la administración de tu servidor de juegos Palworld y navega a:

`Configs` → `PalWorldSettings.ini`

Este archivo contiene los valores principales de configuración del gameplay para tu servidor Palworld, incluyendo los límites de guilds y bases.

## Edita el valor máximo de bases por guild

Dentro de `PalWorldSettings.ini`, busca la sección `OptionSettings`. El ajuste que necesitas cambiar es:

`BaseCampMaxNumInGuild=[tu_valor]`

Reemplaza `[tu_valor]` con el número de bases que quieres permitir que cada guild coloque.

### Ejemplo de configuración

Si quieres permitir hasta `6` bases por guild, la entrada debería verse así:

```ini
BaseCampMaxNumInGuild=6
```

Si el ajuste ya existe, solo cambia su valor. Si falta, agrégalo dentro de la lista de parámetros `OptionSettings` existente en el archivo.

:::note Valor predeterminado y máximo vanilla
La información de referencia actual indica que el valor predeterminado es `4` y el máximo normal en vanilla es `10`. Valores por encima de `10` generalmente no son compatibles en un servidor Palworld sin mods.
:::

### Referencia de valores

| Clave de configuración | Descripción | Valor predeterminado | Máximo vanilla |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | Número máximo de bases permitidas por guild | `4` | `10` |

:::caution Usa valores válidos
Configura `BaseCampMaxNumInGuild` solo con un valor razonable y soportado. Valores superiores a `10` normalmente requieren mods en el servidor y pueden no funcionar correctamente en un servidor Palworld estándar.
:::

## Guarda la configuración

Después de cambiar el valor, guarda el archivo `PalWorldSettings.ini` en el editor de configuración de ZAP-Hosting.

Esto almacena el nuevo ajuste máximo para guilds, pero no tendrá efecto hasta que el servidor sea reiniciado.

## Reinicia el servidor

Una vez guardado el archivo, reinicia tu servidor Palworld desde la interfaz de administración del servidor.

El reinicio es necesario porque Palworld lee la configuración de `PalWorldSettings.ini` durante el inicio del servidor. Sin reiniciar, el nuevo límite de bases por guild normalmente no se aplicará.

### Qué debes hacer después

Normalmente no se requieren comandos adicionales en la consola tras editar `BaseCampMaxNumInGuild`. Después del reinicio, el nuevo valor debería estar activo automáticamente.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Ejecutar comandos adicionales | No |

:::tip Prueba el nuevo límite
Después del reinicio, únete al servidor y prueba el límite de colocación de bases con una guild para confirmar que el nuevo ajuste se aplicó correctamente.
:::

## Solución de problemas

Si el ajuste de máximo de bases por guild no parece cambiar, revisa los siguientes puntos.

### Verifica la entrada de configuración

Asegúrate de que `BaseCampMaxNumInGuild` esté escrito correctamente y use un valor numérico, por ejemplo:

```ini
BaseCampMaxNumInGuild=8
```

Un error tipográfico en el nombre de la clave o un valor inválido puede impedir que el ajuste funcione.

### Confirma que el archivo fue guardado

Verifica que tus cambios se hayan guardado en `Configs` → `PalWorldSettings.ini` antes de reiniciar el servidor.

### Reinicia el servidor completamente

Se requiere un reinicio completo del servidor después de cambiar este ajuste. Si solo guardaste el archivo sin reiniciar, el valor antiguo puede seguir en uso.

### Mantente dentro del límite vanilla

Si configuras un valor superior a `10`, el servidor puede ignorarlo o comportarse de forma inesperada a menos que uses mods compatibles. Si tienes un servidor estándar, mantén el valor en `10` o menos.

## Conclusión

Felicidades, has cambiado con éxito el número máximo de bases por guild en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂