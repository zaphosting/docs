---
id: palworld-reset-world
title: "Palworld: Reiniciar Mundo"
description: "Aprende cómo reiniciar el mundo de tu servidor de juegos Palworld eliminando los datos guardados actuales y comenzando un nuevo mapa mundial en el mismo servidor. -> Aprende más ahora"
sidebar_label: Palworld: Reiniciar Mundo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld guarda tu mundo activo en los datos guardados del servidor en lugar de en una configuración de mundo editable. En esta guía, aprenderás cómo reiniciar el mundo de tu servidor de juegos Palworld en ZAP-Hosting eliminando la carpeta de guardado existente para que el servidor genere un nuevo mundo en el próximo inicio.

:::danger Eliminación Permanente de Datos
Reiniciar tu mundo de Palworld elimina permanentemente el mundo actual, incluyendo el progreso de los jugadores, estructuras, Pals y otros datos guardados en ese mundo.
:::



## Preparación

Antes de comenzar, asegúrate de tener acceso a la administración de tu servidor de juegos Palworld y que el servidor esté actualmente apagado antes de eliminar cualquier archivo de guardado.

:::tip Crea una Copia de Seguridad Primero
Si crees que podrías necesitar el mundo actual más adelante, crea una copia de seguridad antes de continuar. Si está disponible para tu producto, puedes usar las funciones de copia de seguridad del servidor o descargar manualmente la carpeta de guardado antes de eliminarla.
:::

## Entiende Cómo Funcionan los Reinicios de Mundo en Palworld

Un reinicio de mundo en Palworld normalmente no requiere cambiar un valor de juego dentro de un archivo de configuración. En cambio, el mundo activo se guarda en el directorio de guardado del servidor.

Según la estructura pública actual del servidor dedicado de Palworld, el guardado del mundo suele estar ubicado en la siguiente ruta:

```text
Pal/Saved/SaveGames/0/
```

Dentro de este directorio, normalmente encontrarás una carpeta con un nombre hexadecimal largo y aleatorio, por ejemplo:

```text
84B5E2264EC387DEDB43179D666031A1
```

Esa carpeta contiene el guardado del mundo actual. Cuando la eliminas y reinicias el servidor, Palworld crea un nuevo mundo automáticamente.

:::note No se Requiere Valor de Configuración
Para un reinicio estándar del mundo, normalmente no se necesita ninguna entrada adicional en la configuración, comando de consola o parámetro de inicio. El reinicio se realiza eliminando los datos guardados existentes.
:::

## Detén el Servidor

Antes de eliminar los archivos del mundo, detén tu servidor Palworld desde la administración del servidor de juegos en ZAP-Hosting.

Eliminar datos guardados mientras el servidor está en funcionamiento puede causar corrupción de archivos o eliminación incompleta de datos del mundo.

:::caution El Servidor Debe Estar Apagado
Asegúrate de que el servidor esté completamente detenido antes de continuar. Si el servidor sigue en ejecución, puede recrear o bloquear archivos mientras los editas.
:::

## Abre el Directorio de Guardado

En la administración de tu servidor Palworld en ZAP-Hosting, abre el área de gestión de archivos y navega a la siguiente ruta:

```text
Pal/Saved/SaveGames/0/
```

Dependiendo de la configuración de tu producto, puedes acceder a esto a través del administrador de archivos o una sección similar de acceso a archivos en la interfaz web.



### Referencia de Ruta

| Ítem | Valor |
| --- | --- |
| Ruta base de guardado | `Pal/Saved/SaveGames/0/` |
| Nombre de carpeta del mundo | Carpeta hexadecimal aleatoria |
| Carpeta de ejemplo | `84B5E2264EC387DEDB43179D666031A1` |
| Acción requerida | Eliminar la carpeta del mundo |

## Elimina el Guardado Actual del Mundo

Dentro de `Pal/Saved/SaveGames/0/`, localiza la carpeta con el nombre hexadecimal aleatorio. Elimínala completamente.

### Qué Necesitas Eliminar

| Tipo de carpeta | Acción requerida |
| --- | --- |
| Carpeta del guardado del mundo actual dentro de `Pal/Saved/SaveGames/0/` | Eliminarla |
| `PalworldSettings.ini` u otros archivos de configuración | No editar para este reinicio a menos que también quieras cambiar configuraciones del servidor |

Si solo hay una carpeta hexadecimal en `Pal/Saved/SaveGames/0/`, esa suele ser la guardada activa del mundo. Si hay varias carpetas y no estás seguro cuál está en uso, no adivines. En ese caso, revisa cuidadosamente tus archivos actuales del servidor o contacta al soporte antes de eliminar algo.

:::info Aclaración sobre la Sección de Configuraciones
Aunque muchas configuraciones de Palworld pueden gestionarse a través del área de **Configs**, un reinicio del mundo normalmente no se completa editando un archivo de configuración. La acción requerida es eliminar la carpeta del guardado del mundo desde los archivos del servidor.
:::

## Inicia el Servidor de Nuevo

Después de eliminar la carpeta de guardado, inicia tu servidor Palworld nuevamente.

Al iniciar, el servidor debería generar automáticamente un nuevo mundo porque no hay un guardado previo disponible en la ubicación esperada.

### Comandos o Cambios Adicionales

| Tarea | Requerido |
| --- | --- |
| Editar un archivo de configuración | No |
| Ejecutar un comando dentro del juego | No |
| Ejecutar un comando en consola | No |
| Reiniciar o iniciar el servidor después de eliminar | Sí |

:::tip El Primer Inicio Puede Tomar Más Tiempo
El primer inicio después de eliminar el guardado del mundo puede tardar un poco más de lo habitual porque Palworld necesita generar un nuevo mundo.
:::

## Verifica el Reinicio

Una vez que el servidor esté en línea nuevamente, conéctate y confirma que se ha creado un mundo nuevo.

Normalmente puedes verificar esto comprobando lo siguiente:

- un estado de aparición nuevo
- sin estructuras construidas previamente por jugadores
- sin progreso anterior
- una carpeta de guardado recién generada en `Pal/Saved/SaveGames/0/`

Si el mundo antiguo sigue apareciendo, detén el servidor nuevamente y confirma que la carpeta hexadecimal correcta fue eliminada.

## Conclusión

Felicitaciones, has reiniciado con éxito tu mundo de Palworld y comenzado una nueva partida en tu servidor existente. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡que está disponible todos los días para ayudarte! 🙂