---
id: palworld-supply-drop-settings
title: "Palworld: Configuración de Supply Drop"
description: "Aprende a cambiar la frecuencia de supply drops en tu servidor de juegos Palworld editando manualmente el ajuste SupplyDropSpan. -> Aprende más ahora"
sidebar_label: Palworld: Configuración de Supply Drop
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld incluye supply drops que aparecen en intervalos temporizados y pueden proporcionar recursos útiles durante el juego. En esta guía, aprenderás cómo cambiar manualmente la frecuencia de los supply drops en tu servidor de juegos Palworld de ZAP-Hosting editando el archivo de configuración correcto.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting y permiso para editar archivos de configuración del servidor.

:::info Configuración Manual Requerida
Esta configuración se realiza manualmente a través de la administración de tu servidor en **Configs**. Después de cambiar el ajuste, necesitas reiniciar el servidor para que Palworld cargue la configuración actualizada.
:::

## Localiza el archivo de configuración correcto

Para cambiar el intervalo de los supply drops, debes editar el archivo `PalWorldSettings.ini`.

En la interfaz web de ZAP-Hosting:

1. Abre la administración de tu servidor de juegos Palworld.
2. Navega a **Configs**.
3. Abre el archivo `PalWorldSettings.ini`.

Este archivo contiene los valores principales de configuración del juego para tu servidor Palworld, incluyendo el ajuste del temporizador de supply drops.

## Edita el ajuste de supply drop

Dentro de `PalWorldSettings.ini`, busca la sección `OptionSettings` y localiza la entrada `SupplyDropSpan`.

La clave de configuración relevante se muestra a continuación:

| Ajuste | Descripción | Ejemplo |
| --- | --- | --- |
| `SupplyDropSpan` | Define el intervalo entre supply drops en minutos | `180` |

Si la entrada ya existe, cambia su valor al intervalo que prefieras.

### Valores de ejemplo

Puedes usar los siguientes valores como referencia:

| Valor | Resultado |
| --- | --- |
| `30` | Supply drops muy frecuentes |
| `60` | Supply drops cada 1 hora |
| `180` | Ajuste por defecto, cada 3 horas |
| `360` | Supply drops cada 6 horas |

### Configuración de ejemplo

Dependiendo del contenido actual de tu archivo, el ajuste aparecerá como parte de la línea más grande `OptionSettings`. Por ejemplo:

```ini
OptionSettings=(SupplyDropSpan=180)
```

Si tu archivo ya contiene muchos ajustes en el mismo bloque `OptionSettings=(...)`, solo cambia el valor de `SupplyDropSpan` y deja el resto de las entradas existentes sin modificar.

Por ejemplo:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution Conserva los Ajustes Existentes
No elimines otros valores del bloque `OptionSettings` al editar `SupplyDropSpan`. Si borras accidentalmente comas, corchetes u otras entradas, la configuración de Palworld podría no cargarse correctamente.
:::

## Guarda y aplica los cambios

Una vez que hayas actualizado el valor de `SupplyDropSpan`:

1. Guarda los cambios en `PalWorldSettings.ini`.
2. Reinicia tu servidor Palworld desde la administración del servidor en ZAP-Hosting.

Es necesario reiniciar porque Palworld no aplica este ajuste en vivo mientras el servidor está en ejecución.

:::note No se requiere comando adicional
Normalmente no se necesita ningún comando extra dentro del juego o consola para este cambio. Reiniciar el servidor es el paso necesario para aplicar el nuevo intervalo de supply drops.
:::

## Verifica el nuevo intervalo de supply drop

Después del reinicio, tu servidor usará el nuevo valor de `SupplyDropSpan`. Puedes verificar el cambio monitoreando el tiempo entre eventos de supply drop durante el juego.

Si el cambio no parece aplicarse, verifica lo siguiente:

| Verificación | Qué comprobar |
| --- | --- |
| Archivo correcto | Editaste `PalWorldSettings.ini` |
| Ubicación correcta | El archivo fue abierto a través de **Configs** en la administración de tu servidor |
| Sintaxis correcta | `SupplyDropSpan` está escrito correctamente y permanece dentro del bloque `OptionSettings` |
| Reinicio del servidor | El servidor fue reiniciado completamente después de guardar |

:::tip Elige un valor equilibrado
Valores muy bajos pueden hacer que los supply drops aparezcan mucho más seguido de lo esperado en el juego normal de Palworld. Si quieres eventos más frecuentes sin que sean excesivos, `60` suele ser un buen punto de partida.
:::

## Conclusión

Felicidades, has cambiado con éxito la frecuencia de supply drops en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂