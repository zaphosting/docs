---
id: palworld-pal-damage-multiplier
title: "Palworld: Multiplicador de Daño de Pal"
description: "Aprende cómo cambiar el multiplicador de daño de los Pals en Palworld editando los ajustes de daño para valores de ataque y defensa en tu servidor. -> Aprende más ahora"
sidebar_label: Palworld: Multiplicador de Daño de Pal
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite ajustar cuánto daño hacen y reciben tus Pals modificando los ajustes del multiplicador de daño en el servidor. En esta guía, aprenderás qué archivo de configuración editar en la interfaz de ZAP-Hosting, qué valores cambiar y cómo aplicar correctamente los nuevos ajustes.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld a través del panel de administración de servidores de juegos de ZAP-Hosting.

:::info Configuración Manual Requerida
Esta configuración se realiza editando manualmente el archivo de configuración de Palworld. No se requiere ningún comando separado dentro del juego para este cambio.
:::

## Abre el archivo de configuración correcto

Para cambiar el multiplicador de daño de los Pals, necesitas editar el archivo `PalWorldSettings.ini`.

En la administración de tu servidor de juegos ZAP-Hosting, abre la sección `Configs` y localiza el archivo `PalWorldSettings.ini`. Este archivo contiene los valores principales de configuración del mundo y la jugabilidad para tu servidor Palworld.

:::note Ubicación de la Configuración
El archivo relevante para esta guía es `PalWorldSettings.ini`, disponible en la administración de tu servidor de juegos bajo `Configs`.
:::

## Edita los valores del multiplicador de daño de Pal

Dentro de `PalWorldSettings.ini`, busca la sección `OptionSettings`. Los ajustes del multiplicador de daño de Pal se almacenan como claves de configuración dentro de esta sección.

Debes ajustar las siguientes entradas:

| Clave de configuración | Valor por defecto | Propósito |
| --- | --- | --- |
| `PalDamageRateAttack` | `1.000000` | Controla cuánto daño hacen tus Pals |
| `PalDamageRateDefense` | `1.000000` | Controla cuánto daño reciben tus Pals |

### Ejemplo de configuración

Si las claves ya existen, cambia sus valores al multiplicador que desees. Si faltan, agrégalas dentro de la entrada `OptionSettings`.

```ini
PalDamageRateAttack=1.500000
PalDamageRateDefense=0.800000
```

### Qué significan los valores

Usa el siguiente comportamiento como referencia al elegir tus valores de multiplicador:

| Cambio de valor | Efecto |
| --- | --- |
| Mayor `PalDamageRateAttack` | Tus Pals hacen más daño |
| Menor `PalDamageRateAttack` | Tus Pals hacen menos daño |
| Mayor `PalDamageRateDefense` | Tus Pals reciben un balance de defensa menos favorable y efectivamente reciben daño según el multiplicador aumentado |
| Menor `PalDamageRateDefense` | Tus Pals reciben más daño |

:::caution Revisa Cuidadosamente Tus Valores de Multiplicador
Los ajustes del servidor Palworld usan valores numéricos decimales. Ingresa solo números decimales válidos como `0.500000`, `1.000000` o `2.000000`. Un formato inválido puede impedir que el servidor cargue la configuración correctamente.
:::

## Guarda los cambios

Después de editar los valores en `PalWorldSettings.ini`, guarda el archivo en el editor de configuración de ZAP-Hosting.

Si estás ajustando el balance para PvE o juego cooperativo, se recomienda cambiar un multiplicador a la vez primero. Esto facilita probar cuánto ha cambiado el daño infligido o recibido.

:::tip Comienza con Ajustes Pequeños
Un aumento pequeño como `1.200000` para `PalDamageRateAttack` suele ser más fácil de balancear que un salto grande como `3.000000`.
:::

## Reinicia el servidor

Una vez que hayas guardado la configuración actualizada, reinicia tu servidor Palworld para que se carguen los nuevos ajustes del multiplicador de daño.

No se requieren comandos adicionales en la consola después de editar el archivo. Un reinicio completo del servidor es suficiente para aplicar los cambios.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Ejecutar comandos extra | No |
| Reiniciar servidor | Sí |

## Verifica los nuevos ajustes de daño

Después de reiniciar el servidor, únete a tu servidor Palworld y prueba el combate con tus Pals. Verifica si:

- tus Pals hacen la cantidad de daño esperada
- tus Pals reciben la cantidad de daño esperada
- el balance de juego sigue adecuado para la configuración de tu servidor

Si el resultado es demasiado fuerte o débil, vuelve a `PalWorldSettings.ini`, ajusta los valores del multiplicador, guarda el archivo y reinicia el servidor nuevamente.

## Conclusión

Felicidades, has cambiado con éxito el multiplicador de daño de Pal en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂