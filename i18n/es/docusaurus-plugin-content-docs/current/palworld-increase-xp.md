---
id: palworld-increase-xp
title: "Palworld: Incrementar XP"
description: "Aprende cómo aumentar el XP en el juego Palworld editando la configuración del servidor Palworld y ajustando correctamente el multiplicador de tasa de XP. -> Aprende más ahora"
sidebar_label: Palworld: Incrementar XP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite ajustar los multiplicadores de juego a través de la configuración del servidor, incluyendo la cantidad de XP que ganan los jugadores. En esta guía, aprenderás cómo aumentar la tasa de XP en tu servidor Palworld de ZAP-Hosting editando el archivo de configuración correcto y aplicando los cambios adecuadamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld mediante la interfaz web de ZAP-Hosting y permiso para editar sus archivos de configuración.

:::info Requisito de acceso a la configuración
Necesitas acceso a la administración web de tu servidor para editar archivos de configuración en la sección `Configs`. Si no puedes acceder a la administración del servidor, verifica primero el acceso a tu producto en el panel de ZAP-Hosting.
:::

## Localiza el archivo de configuración

Para aumentar el XP en tu servidor Palworld, debes editar el archivo `PalWorldSettings.ini`.

En la administración del servidor de juegos de ZAP-Hosting:

1. Abre tu servidor Palworld.
2. Navega a la sección `Configs`.
3. Abre el archivo `PalWorldSettings.ini`.

Este archivo contiene los ajustes principales del juego usados por el servidor dedicado Palworld, incluyendo el multiplicador de XP.

## Edita el multiplicador de XP

La configuración responsable de la ganancia de XP es `ExpRate`.

### Encuentra la configuración correcta

Abre `PalWorldSettings.ini` y busca la línea `OptionSettings` o la sección donde se definen los multiplicadores de juego.

La entrada relevante en la configuración es:

```ini
ExpRate=1.000000
```

### Cambia el valor

Ajusta el valor de `ExpRate` al multiplicador que deseas usar.

| Clave de configuración | Valor por defecto | Valor de ejemplo | Efecto |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | Doble ganancia de XP |
| `ExpRate` | `1.000000` | `3.000000` | Triple ganancia de XP |

Por ejemplo, para activar doble XP, configura:

```ini
ExpRate=2.000000
```

Para activar triple XP, configura:

```ini
ExpRate=3.000000
```

:::tip Formato recomendado para el valor
Las configuraciones del servidor Palworld suelen usar valores decimales como `1.000000` o `2.000000`. Usar este mismo formato ayuda a mantener la configuración consistente y más fácil de leer.
:::

## Ejemplo de configuración

Dependiendo del contenido actual de tu archivo, la configuración normalmente aparecerá dentro del bloque `OptionSettings`. Por ejemplo:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

Si `ExpRate` ya está presente, solo cambia su valor. Si falta, añade `ExpRate=[tu_valor]` dentro del bloque existente `OptionSettings=(...)`.

:::caution Edita cuidadosamente el bloque OptionSettings existente
No crees múltiples entradas `OptionSettings` a menos que tu configuración actual lo requiera específicamente. En la mayoría de los casos, solo debes editar la línea existente `OptionSettings=(...)` y cambiar el valor de `ExpRate` allí.
:::

## Guarda y reinicia el servidor

Después de cambiar el multiplicador de XP:

1. Guarda los cambios en `PalWorldSettings.ini`.
2. Reinicia tu servidor Palworld desde la administración del servidor de ZAP-Hosting.

Es necesario reiniciar porque Palworld no aplica este cambio de configuración de juego inmediatamente mientras el servidor está en ejecución.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Ejecutar comandos adicionales en consola | No |

:::note No se requieren comandos adicionales
Para esta configuración, normalmente no se necesita ningún comando extra dentro del juego o en la consola. La nueva tasa de XP se aplica tras reiniciar el servidor.
:::

## Verifica la nueva tasa de XP

Una vez que el servidor esté en línea, únete y realiza una acción que otorgue XP, como derrotar enemigos, capturar Pals o completar actividades normales del juego.

Si la ganancia de XP no parece cambiar:

- vuelve a abrir `PalWorldSettings.ini`
- confirma que `ExpRate` está presente en el bloque `OptionSettings`
- verifica que el valor esté escrito correctamente, por ejemplo `2.000000`
- asegúrate de que el servidor fue reiniciado completamente después de guardar

:::danger Evita sintaxis inválida en la configuración
Si accidentalmente eliminas comas, corchetes u otros valores de la línea `OptionSettings=(...)`, el servidor puede ignorar la configuración o fallar al cargarla correctamente. Siempre revisa la línea completa antes de guardar.
:::

## Conclusión

Felicidades, has incrementado exitosamente la tasa de ganancia de XP en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂