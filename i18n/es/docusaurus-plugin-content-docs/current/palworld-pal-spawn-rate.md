---
id: palworld-pal-spawn-rate
title: "Palworld: Tasa de Aparición de Pals"
description: "Aprende cómo cambiar la tasa de aparición de Pals en Palworld editando la configuración de frecuencia de aparición en tu servidor -> Aprende más ahora"
sidebar_label: Palworld: Tasa de Aparición de Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite controlar con qué frecuencia aparecen los Pals en tu mundo mediante una configuración del servidor. En esta guía, aprenderás a editar el archivo de configuración correcto en la administración de tu servidor de juegos ZAP-Hosting y aplicar una nueva tasa de aparición de Pals de forma segura.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de que:

- tienes acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting
- tu servidor esté apagado o estés preparado para reiniciarlo después de hacer cambios
- entiendes que valores más altos de aparición pueden aumentar la carga del servidor y reducir el rendimiento

:::info Configuración Manual Requerida
Este cambio se realiza manualmente editando el archivo de configuración del servidor en la sección **Configs** dentro de la administración del servidor de juegos. No existe un control deslizante específico documentado para esta configuración en el panel de ZAP-Hosting.
:::

## Abre el Archivo de Configuración de Palworld

Para cambiar la tasa de aparición de Pals, necesitas editar el archivo `PalWorldSettings.ini`.

En la administración de tu servidor de juegos ZAP-Hosting:

1. Abre tu servidor **Palworld**.
2. Navega a **Configs**.
3. Abre el archivo `PalWorldSettings.ini`.

Este archivo contiene las configuraciones principales relacionadas con la jugabilidad del servidor, incluyendo el multiplicador de aparición de Pals.

:::note Ubicación del Archivo de Configuración
Para servidores Palworld de ZAP-Hosting, el archivo relevante está disponible directamente en la sección **Configs** dentro de la administración del servidor, tal como se proporciona en la configuración del servidor.
:::

## Cambia la Tasa de Aparición de Pals

La configuración que necesitas es `PalSpawnNumRate`.

### Qué Hace `PalSpawnNumRate`

`PalSpawnNumRate` controla el multiplicador de frecuencia de aparición de Pals en tu servidor.

| Clave de configuración | Valor por defecto | Descripción |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | Controla cuántos Pals aparecen en el mundo. Valores más altos aumentan la frecuencia de aparición. |

En Palworld, este valor suele estar dentro de la línea `OptionSettings` en el archivo `PalWorldSettings.ini`.

### Edita la Configuración

Abre `PalWorldSettings.ini` y busca la sección `OptionSettings=`. Dentro de esa sección, encuentra la entrada `PalSpawnNumRate`.

Si la entrada ya existe, cambia su valor. Por ejemplo:

```ini
PalSpawnNumRate=1.000000
```

Puedes aumentarlo así:

```ini
PalSpawnNumRate=2.000000
```

Este ejemplo duplica el multiplicador de aparición de Pals respecto al valor por defecto.

:::tip Valores Iniciales Recomendados
Comienza con aumentos pequeños como `1.500000` o `2.000000` y prueba el rendimiento del servidor antes de usar valores más agresivos.
:::

### Ejemplo de Fragmento de Configuración

Dependiendo del contenido actual de tu archivo, la configuración puede aparecer dentro de una línea larga `OptionSettings` similar a esta:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution Conserva la Sintaxis Existente
No elimines comas, corchetes ni otros valores existentes en la línea `OptionSettings`. Un formato incorrecto en `PalWorldSettings.ini` puede impedir que el servidor cargue la configuración correctamente.
:::

## Valores Recomendados e Impacto en el Rendimiento

Puedes usar diferentes valores según la experiencia de juego que desees.

| Valor | Efecto |
| --- | --- |
| `1.000000` | Tasa de aparición de Pals por defecto |
| `1.500000` | Frecuencia de aparición ligeramente aumentada |
| `2.000000` | Más Pals visibles en el mundo |
| `3.000000` o más | Aumento fuerte en las apariciones, puede afectar el rendimiento |

Valores más altos pueden hacer que el mundo se sienta más activo, pero también aumentan la cantidad de entidades que el servidor debe procesar.

:::danger Valores Altos Pueden Reducir la Estabilidad
Configuraciones muy altas pueden afectar negativamente el rendimiento del servidor, especialmente en servidores con mucha actividad o combinadas con otras configuraciones exigentes del mundo. Si notas lag, reduce el valor y reinicia el servidor.
:::

## Guarda y Reinicia el Servidor

Después de editar el archivo:

1. Guarda los cambios en `PalWorldSettings.ini`.
2. Reinicia tu servidor Palworld desde la administración del servidor de juegos ZAP-Hosting.

Es necesario reiniciar para que la nueva tasa de aparición de Pals tenga efecto.

## Verifica el Cambio

Una vez que el servidor esté en línea, únete a tu servidor Palworld y observa la actividad en las zonas donde normalmente aparecen los Pals.

Si la tasa de aparición no parece haber cambiado:

- vuelve a abrir `PalWorldSettings.ini` y confirma que `PalSpawnNumRate` está presente
- asegúrate de que el valor esté dentro de la sección correcta `OptionSettings`
- verifica que el archivo se haya guardado correctamente
- reinicia el servidor nuevamente después de confirmar el cambio

## Referencia de Configuración

| Elemento | Valor |
| --- | --- |
| Archivo de configuración | `PalWorldSettings.ini` |
| Ubicación en ZAP-Hosting | Administración del servidor de juegos → `Configs` |
| Nombre de la configuración | `PalSpawnNumRate` |
| Valor por defecto | `1.000000` |
| Reinicio requerido | Sí |

## Conclusión

Felicidades, has cambiado con éxito la tasa de aparición de Pals en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂