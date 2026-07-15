---
id: palworld-change-death-penalty
title: "Palworld: Cambiar la Penalización por Muerte"
description: "Aprende cómo cambiar la penalización por muerte en Palworld editando la configuración del servidor, incluyendo los valores de DeathPenalty y los pasos para reiniciar. -> Aprende más ahora"
sidebar_label: "Cambiar la Penalización por Muerte"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar qué pierden los jugadores al morir cambiando la configuración `DeathPenalty` del servidor. En esta guía, aprenderás a editar el archivo de configuración correcto en el panel web de ZAP-Hosting y aplicar el cambio correctamente.



## Preparación

Antes de comenzar, asegúrate de que:

- tienes acceso a tu servidor de juegos Palworld en el panel web de ZAP-Hosting
- tu servidor esté apagado o estés preparado para reiniciarlo después de hacer cambios
- entiendes qué comportamiento de muerte quieres aplicar para tus jugadores

:::info Acceso al Archivo de Configuración
Para servidores Palworld en ZAP-Hosting, las configuraciones relevantes se pueden editar desde la administración de tu servidor de juegos en la sección **Configs**.
:::

## Abrir el Archivo de Configuración de Palworld

Para cambiar la penalización por muerte, necesitas editar el archivo `PalWorldSettings.ini`.

### Encontrar el archivo en el panel de ZAP-Hosting

Primero, inicia sesión en el panel web de ZAP-Hosting y abre tu servidor de juegos Palworld. Luego navega a la sección **Configs** en la administración del servidor y abre el archivo llamado `PalWorldSettings.ini`.

Este archivo contiene los valores principales de configuración del gameplay para tu servidor Palworld, incluyendo el comportamiento de la penalización por muerte.

:::note Cambios Manuales en la Configuración
La configuración de la penalización por muerte está almacenada en el archivo de configuración. Debes editar el valor manualmente en lugar de usar una opción rápida separada, a menos que tu interfaz actual la proporcione explícitamente.
:::

## Cambiar el Valor de DeathPenalty

Dentro de `PalWorldSettings.ini`, busca la sección `OptionSettings` donde se definen las configuraciones del gameplay. Debes encontrar la entrada `DeathPenalty` y cambiar su valor por la opción que desees.

### Valores soportados para DeathPenalty

Los siguientes valores son los que Palworld usa actualmente para la configuración `DeathPenalty`:

| Valor | Efecto |
| --- | --- |
| `None` | Los jugadores no pierden nada al morir |
| `Item` | Los jugadores pierden objetos, pero conservan el equipo |
| `ItemAndEquipment` | Los jugadores pierden objetos y equipo |
| `All` | Los jugadores pierden objetos, equipo y todos los Pals de su equipo |

:::tip Elegir la Configuración Correcta
Si quieres una experiencia más casual en el servidor, `None` o `Item` suelen ser la mejor opción. Si prefieres la experiencia de supervivencia por defecto, usa `All`.
:::

### Ejemplo de entrada en la configuración

En la mayoría de las configuraciones de servidores Palworld, la opción aparece como parte de una línea más larga `OptionSettings`. Por ejemplo:

```ini
OptionSettings=(DeathPenalty=All)
```

Para desactivar completamente la penalización por muerte, cámbialo a:

```ini
OptionSettings=(DeathPenalty=None)
```

Si tu archivo ya contiene muchas configuraciones en el mismo bloque `OptionSettings=(...)`, solo cambia el valor de `DeathPenalty` y deja las demás entradas sin modificar. Por ejemplo:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

En este caso, solo reemplazarías `ItemAndEquipment` por el valor que prefieras.

:::caution Preservar la Sintaxis Existente
No elimines comas, corchetes u otras configuraciones existentes dentro del bloque `OptionSettings=(...)`. Una sintaxis incorrecta puede impedir que el servidor cargue la configuración correctamente.
:::

## Guardar y Aplicar los Cambios

Después de editar el valor de `DeathPenalty`, guarda los cambios en `PalWorldSettings.ini`.

### Reiniciar el servidor

Una vez guardado el archivo, reinicia tu servidor Palworld desde el panel web de ZAP-Hosting. Es necesario reiniciar para que el servidor cargue la configuración actualizada.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Ejecutar comandos adicionales en consola | No |

:::info Reinicio Obligatorio
Palworld lee esta configuración desde el archivo del servidor. El nuevo comportamiento de muerte solo tendrá efecto después de un reinicio completo del servidor.
:::

## Verificar la Nueva Configuración de Muerte

Después de que el servidor haya reiniciado, conéctate y prueba el comportamiento en el juego si quieres confirmar el cambio.

### Qué verificar

Dependiendo del valor que seleccionaste, verifica si los jugadores:

- conservan todos los objetos después de morir
- pierden solo los objetos del inventario
- pierden objetos del inventario y equipo
- pierden objetos del inventario, equipo y los Pals del equipo

Si la configuración no parece haber cambiado, vuelve a abrir `PalWorldSettings.ini` y confirma que:

- el valor de `DeathPenalty` esté escrito exactamente igual
- el cambio se guardó correctamente
- el servidor fue reiniciado después de la edición

:::danger Usa los Nombres Exactos de los Valores
La configuración `DeathPenalty` es sensible a mayúsculas y minúsculas cuando se escribe en el archivo de configuración. Usa siempre los nombres exactos `None`, `Item`, `ItemAndEquipment` o `All`.
:::

## Conclusión

Felicidades, has cambiado con éxito la penalización por muerte en Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂