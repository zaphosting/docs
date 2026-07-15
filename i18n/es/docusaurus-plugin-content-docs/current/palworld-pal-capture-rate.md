---
id: palworld-pal-capture-rate
title: "Palworld: Tasa de Captura de Pal"
description: "Aprende cómo cambiar la tasa de captura de Pal en Palworld editando el ajuste PalCaptureRate para facilitar la captura en tu servidor. -> Aprende más ahora"
sidebar_label: "Tasa de Captura de Pal"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld te permite ajustar la tasa de captura de Pal en tu servidor mediante la configuración principal del mundo. En esta guía, aprenderás dónde encontrar el archivo de configuración correcto en la interfaz de ZAP-Hosting, qué valor cambiar y cómo aplicar la nueva tasa de captura.



## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld a través de la interfaz web de ZAP-Hosting y que el servidor esté configurado y en funcionamiento.

:::info Acceso al Archivo de Configuración
Para servidores de Palworld en ZAP-Hosting, los ajustes relevantes se pueden editar desde la administración del servidor de juegos en la sección `Configs`.
:::

## Localiza el Archivo de Configuración de Palworld

Para cambiar la tasa de captura de Pal, necesitas editar el archivo `PalWorldSettings.ini`.

### Abre la Sección Configs

Primero, inicia sesión en la interfaz web de ZAP-Hosting y abre tu servidor de juegos Palworld. En la administración del servidor, navega a `Configs`.

Allí, busca el archivo llamado:

```ini
PalWorldSettings.ini
```

### Identifica el Ajuste Correcto

Dentro de `PalWorldSettings.ini`, Palworld guarda muchos ajustes de jugabilidad en la sección `OptionSettings`. El ajuste relevante para la captura de Pal es:

```ini
PalCaptureRate=[tu_valor]
```

El valor predeterminado suele ser:

```ini
PalCaptureRate=1.000000
```

Un valor más alto facilita la captura de Pals, mientras que un valor más bajo hace que los intentos de captura sean más difíciles.

## Edita la Tasa de Captura de Pal

Ahora que has abierto el archivo correcto, puedes ajustar la tasa de captura para que se adapte al equilibrio de juego que prefieras.

### Cambia el Valor de Configuración

Busca dentro de `PalWorldSettings.ini` la entrada `PalCaptureRate` y reemplaza su valor por el multiplicador que prefieras.

Por ejemplo:

```ini
PalCaptureRate=2.000000
```

Esto duplicaría la tasa de captura en comparación con el valor predeterminado.

### Valores de Ejemplo

Usa la siguiente tabla como referencia general:

| Valor | Efecto |
| --- | --- |
| `1.000000` | Tasa de captura de Pal predeterminada |
| `1.500000` | Captura ligeramente más fácil |
| `2.000000` | Captura notablemente más fácil |
| `3.000000` | Captura mucho más fácil |

:::tip Configuración Equilibrada
Si quieres capturas más fáciles sin que se sientan garantizadas, un valor entre `1.500000` y `2.000000` suele ser un buen punto de partida.
:::

## Guarda y Aplica los Cambios

Después de editar el valor `PalCaptureRate`, guarda los cambios en el editor de configuración de ZAP-Hosting.

### Reinicia el Servidor

Palworld no aplica este ajuste en vivo. Después de guardar el archivo, necesitas reiniciar tu servidor de juegos desde la administración de ZAP-Hosting para que se cargue la nueva tasa de captura.

:::caution Reinicio Obligatorio
Si no reinicias el servidor después de editar `PalWorldSettings.ini`, la nueva tasa de captura no tendrá efecto.
:::

## Referencia de Configuración

La siguiente tabla resume el ajuste utilizado para este cambio:

| Archivo | Clave de configuración | Valor predeterminado | Propósito | Reinicio requerido |
| --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | `PalCaptureRate` | `1.000000` | Controla el multiplicador de la tasa de captura de Pal | Sí |

## Solución de Problemas

Si la nueva tasa de captura no parece funcionar, revisa los siguientes puntos.

### Verifica el Formato del Ajuste

Asegúrate de que la línea esté escrita correctamente y use un valor numérico, por ejemplo:

```ini
PalCaptureRate=2.000000
```

Evita agregar caracteres extra o cambiar entradas no relacionadas en el archivo.

### Confirma que el Archivo Fue Guardado

Después de editar, verifica que los cambios se hayan guardado realmente en `PalWorldSettings.ini` a través de la sección `Configs`.

### Reinicia de Nuevo si es Necesario

Si el servidor no se reinició correctamente después del cambio, realiza otro reinicio desde la administración del servidor.

:::note Ajuste de Jugabilidad en el Servidor
`PalCaptureRate` es un ajuste de jugabilidad del servidor, por lo que los jugadores solo notarán la nueva tasa después de que el servidor haya recargado la configuración actualizada.
:::

## Conclusión

Felicidades, has cambiado con éxito la tasa de captura de Pal en tu servidor de Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂