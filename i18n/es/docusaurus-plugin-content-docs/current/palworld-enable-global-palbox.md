---
id: palworld-enable-global-palbox
title: "Palworld: Activar Global Palbox"
description: "Aprende cómo activar la configuración global de palbox en Palworld para importar y exportar palboxes globales en tu servidor dedicado. -> Aprende más ahora"
sidebar_label: "Activar Global Palbox"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

El *Global Palbox* en Palworld permite a los jugadores transferir Pals entre servidores usando el sistema global de almacenamiento en la nube de Palworld. En esta guía, aprenderás cómo activar la importación y exportación global de Palbox en tu servidor de Palworld de ZAP-Hosting editando manualmente el archivo de configuración correcto.



## Preparación

Antes de comenzar, asegúrate de que:

- tienes acceso a tu servidor de juegos Palworld en la interfaz web de ZAP-Hosting
- tu servidor esté detenido actualmente o pueda reiniciarse después de los cambios
- puedes acceder a la sección `Configs` en la administración de tu servidor de juegos

:::info Acceso al Archivo de Configuración
Para servidores Palworld de ZAP-Hosting, las configuraciones relevantes se pueden editar desde la administración del servidor de juegos en la sección `Configs`. No necesitas acceso externo a archivos si el editor de configuración está disponible allí.
:::

## Abre el Archivo de Configuración de Palworld

Para activar la función Global Palbox, necesitas editar el archivo `PalWorldSettings.ini`.

### Encuentra el Archivo de Configuración en la Interfaz de ZAP

1. Inicia sesión en el [sitio web de ZAP-Hosting](https://zap-hosting.com).
2. Abre la administración de tu servidor de juegos Palworld.
3. Navega a la sección `Configs`.
4. Abre el archivo llamado `PalWorldSettings.ini`.

Este archivo contiene las configuraciones principales del servidor usadas por Palworld, incluyendo las opciones del Global Palbox.

:::note Configuración Manual Requerida
La configuración del Global Palbox se realiza manualmente a través del archivo de configuración del servidor. Si no ves un interruptor separado para esta función en la interfaz, editar directamente `PalWorldSettings.ini` es el método correcto.
:::

## Activa la Importación y Exportación del Global Palbox

Una vez abierto `PalWorldSettings.ini`, debes localizar la lista de opciones del servidor y ajustar las entradas del Global Palbox.

### Claves de Configuración Requeridas

Las siguientes configuraciones controlan el comportamiento del Global Palbox:

| Clave de configuración | Valor | Función |
| --- | --- | --- |
| `bAllowGlobalPalboxImport` | `True` o `False` | Permite a los jugadores importar Pals desde el Global Palbox |
| `bAllowGlobalPalboxExport` | `True` o `False` | Permite a los jugadores exportar Pals al Global Palbox |

Según material de referencia de terceros actual, `bAllowGlobalPalboxImport` está desactivado por defecto con `False`, mientras que `bAllowGlobalPalboxExport` está activado por defecto con `True`. Si tu archivo ya contiene estos valores, solo necesitas ajustarlos según sea necesario.

### Establece los Valores

Para activar completamente las transferencias del Global Palbox entre servidores, configura ambos valores en `True`.

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Si estas opciones ya existen en el archivo, reemplaza los valores existentes. Si no están presentes, agrégalas en la sección de configuraciones del servidor en `PalWorldSettings.ini`.

:::caution Mantén la Sintaxis Existente Intacta
Los archivos de configuración de Palworld son sensibles al formato. Solo cambia los valores requeridos y evita eliminar comas, corchetes u otras entradas existentes si estas opciones forman parte de una línea de configuración más grande en tu archivo.
:::

## Guarda los Cambios

Después de editar el archivo:

1. Guarda los cambios en el editor de `PalWorldSettings.ini`.
2. Confirma que ambos valores del Global Palbox estén presentes y configurados correctamente.

Si tu panel de servidor solo ofrece un botón de guardar, úsalo primero antes de reiniciar el servidor en el siguiente paso.

## Reinicia el Servidor

Después de cambiar las configuraciones del Global Palbox, necesitas reiniciar el servidor de Palworld para que se cargue la nueva configuración.

### Aplica las Nuevas Configuraciones

Reinicia tu servidor desde la administración del servidor de juegos después de guardar el archivo.

| Acción | Requerido |
| --- | --- |
| Guardar `PalWorldSettings.ini` | Sí |
| Reiniciar el servidor | Sí |
| Ejecutar comandos adicionales en consola | No |

No se requieren comandos adicionales después de editar el archivo de configuración. Un reinicio normal del servidor es suficiente para aplicar la nueva configuración del Global Palbox de Palworld.

:::tip Verifica la Función en el Juego
Después del reinicio, únete a tu servidor y prueba si los jugadores pueden importar y exportar Pals a través del Global Palbox. Esta es la forma más sencilla de confirmar que la configuración se aplicó correctamente.
:::

## Solución de Problemas

Si el Global Palbox no funciona después del reinicio, revisa los siguientes puntos.

### Confirma que los Valores se Guardaron Correctamente

Abre `PalWorldSettings.ini` nuevamente y verifica que estos valores sigan presentes:

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Si los valores se revirtieron, es posible que el archivo no se haya guardado correctamente.

### Revisa Problemas de Formato

Si insertaste los valores en un bloque de configuración existente, asegúrate de que la sintaxis circundante siga siendo válida. Un formato incorrecto en `PalWorldSettings.ini` puede hacer que Palworld ignore las configuraciones o falle al cargarlas correctamente.

### Reinicia el Servidor Otra Vez

Si guardaste el archivo mientras el servidor estaba en ejecución, realiza otro reinicio completo para asegurarte de que la nueva configuración se aplique.

:::danger Disponibilidad de la Función Depende de la Versión del Juego
Global Palbox es una función del juego proporcionada por Palworld. Si la configuración no funciona aunque la configuración sea correcta, la función puede depender de la versión actual del servidor de Palworld o de limitaciones temporales del juego. En ese caso, verifica que tu servidor esté completamente actualizado.
:::

## Conclusión

Felicidades, has activado con éxito la importación y exportación del Global Palbox en tu servidor de Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂