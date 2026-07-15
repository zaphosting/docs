---
id: palworld-reset-server
title: "Palworld: Reiniciar Servidor"
description: "Aprende cómo reiniciar tu servidor de Palworld en la interfaz web de ZAP, entiende qué configuraciones se eliminan y cómo restaurar los datos predeterminados del servidor de forma segura. -> Aprende más ahora"
sidebar_label: "Reiniciar Servidor"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld guarda tu mundo, progreso de jugador y configuraciones del servidor en el servidor de juegos. En esta guía, aprenderás cómo reiniciar completamente tu servidor de Palworld en ZAP-Hosting y comenzar de nuevo con una instalación predeterminada fresca.

:::danger Advertencia de Eliminación Completa de Datos
Un reinicio completo elimina permanentemente tus datos guardados existentes, cambios de configuración y cualquier otro archivo del servidor almacenado en la instalación actual. Solo debes usar esto como último recurso.
:::



## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting y de que ya no necesitas los datos actuales del mundo.

:::info Haz una Copia de Seguridad de Datos Importantes Primero
Si quieres conservar una copia de tu mundo o configuración actual, crea una copia de seguridad antes de continuar. Una vez completado el reinicio, los datos eliminados normalmente no se pueden restaurar.
:::

## Entiende qué hace un reinicio de servidor Palworld

Un reinicio completo de Palworld no es lo mismo que cambiar una sola configuración en el archivo de configuración. En cambio, reinstala todo el servidor y elimina los datos actuales del servidor.

El proceso de reinicio normalmente elimina lo siguiente:

| Tipo de dato | Eliminado durante el reinicio |
| --- | --- |
| Datos guardados del mundo | Sí |
| Progreso del jugador | Sí |
| Cambios en la configuración del servidor | Sí |
| Mods instalados o archivos personalizados | Sí |
| Archivos predeterminados del juego | Reinstalados automáticamente |

Después del reinicio, tu servidor arrancará con una instalación fresca y configuraciones predeterminadas.

## Revisa primero la ubicación de la configuración

Para cambios normales en la configuración de Palworld, puedes acceder a los archivos relevantes en la administración de tu servidor de juegos bajo `Configs`. Las configuraciones principales de Palworld suelen estar en el siguiente archivo:

| Archivo | Propósito |
| --- | --- |
| `PalWorldSettings.ini` | Archivo principal de configuración del servidor Palworld |

En la interfaz de ZAP-Hosting, normalmente puedes acceder a esto a través de la administración de tu servidor Palworld en `Configs`.

:::note El Reinicio No Requiere Edición Manual de Configuración
Un reinicio completo del servidor no requiere que edites manualmente `PalWorldSettings.ini`. Este archivo es relevante para cambios normales de configuración, pero un reinicio completo se realiza reinstalando o formateando el servidor para que todos los archivos se recrean con valores predeterminados.
:::

Si tu objetivo es solo cambiar configuraciones de juego en lugar de eliminar todo el servidor, deberías editar el archivo de configuración en `Configs` en lugar de hacer un reinicio completo.

## Detén el servidor

Antes de iniciar el reinicio, necesitas detener completamente el servidor Palworld.

1. Inicia sesión en la interfaz web de ZAP-Hosting.
2. Abre tu servidor de juegos Palworld.
3. Detén el servidor usando los controles de administración del servidor.
4. Espera hasta que el estado del servidor confirme que está offline.

:::caution No Reinicies Mientras el Servidor Está Activo
Si inicias un reinicio mientras el servidor sigue activo, los archivos pueden no eliminarse correctamente y los datos guardados pueden quedar inconsistentes.
:::

## Reinstala y reinicia el servidor

Un reinicio completo en Palworld se realiza reinstalando el servidor con opciones de formateo o reinicio en la interfaz de ZAP.

### Abre la función de reinstalación

En la administración de tu servidor Palworld, busca la función de reinstalación o reinicio en el área de gestión del servidor.

Como las etiquetas de la interfaz pueden variar entre versiones del panel, el texto exacto puede diferir ligeramente. En ZAP-Hosting, esta función generalmente está en el área de administración del servidor donde están disponibles las acciones de reinstalar o formatear.



### Inicia el reinicio completo

Usa la opción de reinstalación disponible que realiza un formateo o reinicio completo de los datos del servidor.

Durante este paso, confirma la acción si el panel solicita confirmación.

:::danger Esta Acción Borra Todos los Datos del Servidor
Una reinstalación o formateo completo elimina guardados, configuraciones y archivos personalizados del servidor. Solo continúa si estás seguro de que quieres reiniciar todo.
:::

### Espera a que termine la instalación

Después de confirmar el reinicio, espera hasta que el proceso de reinstalación haya finalizado. Dependiendo del estado del panel y del tamaño del servidor, esto puede tardar unos minutos.

No interrumpas el proceso mientras el servidor se está reinstalando.

## Inicia el servidor Palworld fresco

Una vez que la reinstalación haya terminado, inicia el servidor Palworld nuevamente desde la administración del servidor.

Después del inicio:

- se creará un nuevo mundo guardado
- se usarán configuraciones predeterminadas del servidor
- el progreso previo de jugadores y mundo ya no estará presente

Si es necesario, ahora puedes volver a `Configs` y ajustar tus configuraciones de Palworld nuevamente en `PalWorldSettings.ini`.

## Verifica el resultado del reinicio

Después de que el servidor haya arrancado, conéctate y confirma que el reinicio fue exitoso.

Debes verificar lo siguiente:

| Verificación | Resultado esperado |
| --- | --- |
| Estado del mundo | Mundo nuevo y fresco |
| Datos del jugador | Sin progreso previo |
| Configuraciones del servidor | Valores predeterminados a menos que se cambien de nuevo |
| Archivos personalizados o mods | Eliminados a menos que se reinstalen manualmente |

Si el mundo antiguo sigue apareciendo, detén el servidor y revisa si el proceso de reinstalación se completó correctamente en el panel de ZAP. Si el panel no realizó un formateo completo, puede que necesites repetir el proceso con cuidado.

## Reconfigura las configuraciones del servidor después del reinicio

Después de un reinicio exitoso, tu servidor Palworld usará valores de configuración predeterminados. Si quieres personalizar el servidor otra vez, abre la sección `Configs` en la administración de tu servidor de juegos y edita `PalWorldSettings.ini`.

Las tareas típicas después del reinicio pueden incluir:

- cambiar el nombre del servidor
- establecer una contraseña
- ajustar la dificultad o valores de juego
- reaplicar cambios personalizados de configuración
- reinstalar mods soportados o archivos adicionales si es necesario

:::tip Reaplica Configuraciones con Cuidado
Si una configuración previa causó problemas, evita copiar todas las configuraciones antiguas de inmediato. Reaplica solo las configuraciones que realmente necesites para identificar más fácilmente cambios problemáticos.
:::

## Referencia de configuración

La siguiente tabla resume el archivo relevante y el comportamiento del reinicio:

| Ítem | Detalles |
| --- | --- |
| Archivo principal de configuración | `PalWorldSettings.ini` |
| Ubicación en ZAP para editar configuración | `Configs` en la administración del servidor de juegos |
| Cambio manual de configuración requerido para reinicio completo | No |
| Acción requerida para reinicio completo | Reinstalar o formatear/reiniciar el servidor |
| Reinicio requerido después | Sí, inicia el servidor nuevamente tras reinstalar |
| Comandos adicionales requeridos | Ninguno confirmado |

:::note El Nombre de la Interfaz Puede Variar
El texto exacto de la opción de reinstalación o formateo puede variar según la versión actual de la interfaz web de ZAP. Si no encuentras la función de reinicio, contacta soporte antes de intentar métodos alternativos de eliminación de archivos.
:::

## Conclusión

Felicidades, has reiniciado exitosamente tu servidor de Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂