---
id: palworld-enable-raids
title: "Palworld: Activar Incursiones"
description: "Aprende cómo activar o desactivar las incursiones en tu servidor de Palworld editando la configuración correcta para los ataques de enemigos invasores. -> Aprende más ahora"
sidebar_label: Palworld: Activar Incursiones
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Las incursiones en Palworld son ataques de enemigos invasores que pueden dirigirse a las bases de los jugadores en tu servidor. En esta guía, aprenderás cómo activar o desactivar las incursiones editando manualmente el archivo de configuración correcto en la administración de tu servidor de juegos ZAP-Hosting.



## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld a través de la interfaz web de ZAP-Hosting y permiso para editar los archivos de configuración del servidor.

:::info Configuración Manual Requerida
Esta configuración se realiza editando manualmente la configuración del servidor Palworld en **Configs** dentro de la administración de tu servidor de juegos. Después de guardar los cambios, debes reiniciar el servidor para que la nueva configuración tenga efecto.
:::

## Localiza el Archivo de Configuración Correcto

Para activar o desactivar las incursiones, necesitas editar el archivo `PalWorldSettings.ini`.

En la administración de tu servidor de juegos ZAP-Hosting:

1. Abre tu servidor de juegos **Palworld**.
2. Navega a **Configs**.
3. Abre el archivo llamado `PalWorldSettings.ini`.

Este archivo contiene los valores principales de configuración del gameplay para tu servidor Palworld, incluyendo la configuración que controla si las incursiones están activadas.

## Edita la Configuración de Incursiones

Dentro de `PalWorldSettings.ini`, busca la sección `OptionSettings`. La clave de configuración relevante es:

```ini
bEnableInvaderEnemy=True
```

Esta configuración controla si las incursiones de enemigos invasores están activas en el servidor.

### Activar Incursiones

Si quieres que las incursiones estén activadas, establece el valor en `True`:

```ini
bEnableInvaderEnemy=True
```

Con este valor, pueden ocurrir ataques periódicos de enemigos a las bases de los jugadores durante el juego.

### Desactivar Incursiones

Si quieres desactivar las incursiones, establece el valor en `False`:

```ini
bEnableInvaderEnemy=False
```

Esto desactiva completamente los ataques de enemigos invasores, lo que puede crear una experiencia de construcción más pacífica y puede reducir ligeramente la carga del servidor.

## Referencia de Configuración

Usa la siguiente tabla como referencia rápida para la configuración de incursiones:

| Archivo de Configuración | Clave de Configuración | Valor | Efecto |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `True` | Activa las incursiones y ataques de enemigos invasores |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `False` | Desactiva todas las incursiones y ataques de enemigos invasores |

:::note Comportamiento Predeterminado
El comportamiento predeterminado del servidor Palworld es generalmente `bEnableInvaderEnemy=True`, lo que significa que las incursiones están activadas a menos que cambies la configuración manualmente.
:::

## Guarda y Aplica los Cambios

Después de editar el valor en `PalWorldSettings.ini`, guarda el archivo en la sección **Configs** de ZAP-Hosting.

Luego, necesitas reiniciar tu servidor Palworld para que se cargue la configuración actualizada.

### Reinicia el Servidor

Usa la función de reinicio en la administración de tu servidor de juegos ZAP-Hosting después de guardar el archivo.

:::caution Reinicio Requerido
Si no reinicias el servidor, la configuración de incursiones modificada puede no aplicarse. Solo editar el archivo no es suficiente.
:::

## Verifica la Configuración

Después de que el reinicio se complete, tu nueva configuración de incursiones debería estar activa.

- Si `bEnableInvaderEnemy=True`, las incursiones están activadas.
- Si `bEnableInvaderEnemy=False`, las incursiones están desactivadas.

Si la configuración no parece aplicarse, vuelve a abrir `PalWorldSettings.ini` y confirma que el valor se guardó correctamente sin errores de formato.

:::tip Construcción de Bases en Paz
Desactivar las incursiones puede ser útil si quieres enfocarte en la exploración, construcción de bases o un gameplay cooperativo con menos presión sin ataques periódicos de enemigos.
:::

## Conclusión

Felicitaciones, has activado o desactivado con éxito las incursiones en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡que está disponible todos los días para ayudarte! 🙂