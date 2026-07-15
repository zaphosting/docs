---
id: palworld-host-character-transfer
title: "Palworld: Transferencia de Personaje Host"
description: "Aprende cómo transferir tu personaje host de Palworld desde una partida en solitario o cooperativa a un servidor dedicado usando Palworld Save Tools y los archivos de guardado correctos. -> Aprende más ahora"
sidebar_label: "Transferencia de Personaje Host"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

La transferencia de personaje host en Palworld te permite migrar el personaje de un host en solitario o cooperativo a una partida guardada en un servidor dedicado. En esta guía, prepararás los archivos de guardado necesarios, usarás la herramienta de migración compatible y subirás los datos actualizados del personaje a tu servidor.

:::danger Advertencia: Transferencia Experimental de Personaje
Este procedimiento se considera experimental y modifica manualmente los datos de guardado. Las actualizaciones de Palworld pueden cambiar la estructura de los guardados, lo que puede hacer que las herramientas o los pasos de migración dejen de funcionar correctamente.
:::

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Palworld y a un sistema Windows local donde puedas ejecutar la herramienta de migración de guardados requerida.

### Requisitos

Necesitas lo siguiente:

| Requisito | Propósito |
| --- | --- |
| Acceso a tu servidor Palworld de ZAP-Hosting | Para descargar y subir los archivos de guardado necesarios |
| Una ubicación local para copia de seguridad | Para mantener una copia segura de tus datos originales |
| [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) | Para realizar la migración del personaje host |
| Un personaje nuevo creado en el servidor dedicado | Los datos del personaje host se migran a este personaje del servidor dedicado |

:::caution Haz una Copia de Seguridad Primero
Antes de modificar cualquier archivo de guardado, descarga y guarda una copia completa de tu guardado actual del servidor. Si la transferencia falla o produce datos corruptos, necesitarás los archivos originales para restaurar el servidor.
:::

### Notas Importantes Sobre Archivos de Configuración

Esta transferencia **no** se realiza editando un archivo de configuración de Palworld dentro de `Configs`. Según la documentación disponible y la comunidad, la transferencia del personaje host se hace reemplazando archivos de datos de guardado.

Los archivos relevantes están en el directorio de guardado del servidor, no en el archivo de configuración normal de juego como `PalWorldSettings.ini`.

## Entender Qué Archivos Se Usan

Antes de iniciar la transferencia, debes identificar los archivos involucrados.

### Archivos de Guardado Requeridos para la Transferencia

La migración del personaje host usa los siguientes datos de guardado:

| Archivo o Carpeta | Ubicación | Propósito |
| --- | --- | --- |
| `Level.sav` | `Pal/Saved/SaveGames/0/[tu_id_de_carpeta_guardado]/Level.sav` | Contiene datos del mundo usados por la herramienta de migración |
| `Players/` | `Pal/Saved/SaveGames/0/[tu_id_de_carpeta_guardado]/Players/` | Contiene archivos de guardado de jugadores, incluyendo el nuevo personaje del servidor dedicado |
| `00000001.sav` | Dentro de `Players/` del guardado en solitario o cooperativo subido | Normalmente representa el personaje host original en partidas cooperativas |

`[tu_id_de_carpeta_guardado]` es el nombre largo de la carpeta usado por tu mundo guardado en Palworld. Este valor es diferente para cada guardado.

### Dónde Encontrar los Archivos en la Interfaz de ZAP

Puedes acceder a los archivos de guardado necesarios a través del administrador de archivos de la administración de tu servidor de juegos.

Navega a:

```text
Pal/Saved/SaveGames/0/[tu_id_de_carpeta_guardado]/
```

Dentro de esta carpeta deberías encontrar al menos:

- `Level.sav`
- `LevelMeta.sav`
- `Players/`



## Prepara el Personaje del Servidor Dedicado

Antes de migrar el personaje host, el servidor dedicado debe contener ya un guardado de jugador recién generado para tu cuenta.

### Crea un Nuevo Personaje en el Servidor

Únete normalmente a tu servidor dedicado Palworld y crea un personaje nuevo. Luego juega hasta que el personaje alcance al menos nivel `2`.

Este paso es necesario porque la herramienta de transferencia necesita un archivo de personaje existente en el servidor dedicado como destino de la migración.

### Fuerza o Espera un Guardado

Después de crear el nuevo personaje, debes asegurarte de que el servidor haya escrito los datos del jugador en disco.

Puedes:

- esperar el intervalo automático de guardado, que suele ser alrededor de `4` minutos, o
- ejecutar el comando `save` en la consola del servidor

| Comando | Dónde ejecutarlo | Propósito |
| --- | --- | --- |
| `save` | Consola del servidor | Fuerza al servidor a escribir los datos actuales del mundo y jugador en disco |

:::info Requisito del Comando Save
Si usas el comando `save`, ejecútalo antes de detener el servidor. Esto ayuda a asegurar que el archivo del nuevo personaje del servidor dedicado exista en la carpeta `Players/`.
:::

### Detén el Servidor

Una vez completado el guardado, detén el servidor Palworld desde la administración de tu servidor.

No continúes mientras el servidor esté en ejecución, porque los guardados activos pueden sobrescribir o entrar en conflicto con los archivos que vas a reemplazar.

## Descarga los Datos de Guardado Requeridos

Ahora que el nuevo personaje existe en el servidor dedicado, puedes descargar los archivos necesarios para la migración.

### Abre el Directorio de Guardado

En el administrador de archivos de ZAP-Hosting, ve a:

```text
Pal/Saved/SaveGames/0/[tu_id_de_carpeta_guardado]/
```

### Descarga los Archivos

Descarga los siguientes elementos a tu computadora local:

| Elemento | Requerido |
| --- | --- |
| `Level.sav` | Sí |
| Carpeta `Players/` | Sí |

Guarda ambos elementos en la misma carpeta local para que la herramienta de migración pueda procesarlos correctamente.

:::tip Mantén los Archivos Juntos
Coloca `Level.sav` y la carpeta `Players/` juntos en la misma carpeta local. Esto coincide con el flujo de trabajo esperado por Palworld Save Tools.
:::

## Migra el Personaje Host

Una vez descargados los datos de guardado, puedes realizar la transferencia real del personaje host.

### Inicia Palworld Save Tools

Descarga y extrae [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools), luego abre `PalworldSaveTools.exe`.

En la aplicación, elige:

```text
Fix Host Save
```



### Selecciona los Archivos Correctos

Dentro de la herramienta de migración:

1. Selecciona tu `Level.sav` descargado
2. En el campo de selección izquierdo, elige `00000001.sav`
3. En el campo de selección derecho, elige el nuevo personaje que creaste en el servidor dedicado
4. Inicia la migración seleccionando `Migrate`

| Campo de la Herramienta | Valor a seleccionar |
| --- | --- |
| `Path to Level.sav` | Tu `Level.sav` descargado |
| Campo de personaje izquierdo | `00000001.sav` |
| Campo de personaje derecho | Tu personaje nuevo del servidor dedicado |
| Acción | `Migrate` |

### Qué Hace la Migración

El proceso de migración reasigna los datos del personaje host original del guardado en solitario o cooperativo al personaje del servidor dedicado que creaste antes.

Por eso debes unirte primero al servidor y generar un guardado fresco de jugador antes de usar la herramienta.

:::caution Verifica el Personaje Destino
Asegúrate de seleccionar el personaje correcto del servidor nuevo en el lado derecho. Elegir un destino incorrecto puede sobrescribir los datos de guardado de otro jugador.
:::

## Sube los Archivos de Guardado Actualizados

Después de que la migración se complete con éxito, debes subir los archivos modificados de vuelta a tu servidor.

### Reemplaza los Datos de Guardado Existentes

Regresa al mismo directorio del servidor en el administrador de archivos de ZAP-Hosting:

```text
Pal/Saved/SaveGames/0/[tu_id_de_carpeta_guardado]/
```

Sube y reemplaza:

- el `Level.sav` actualizado
- la carpeta `Players/` actualizada

Si el administrador de archivos te pregunta si deseas sobrescribir archivos existentes, confirma el reemplazo.

### Cambios en Archivos de Configuración

Para esta transferencia específica de personaje host, actualmente no hay un requisito verificado para editar un archivo de configuración de Palworld como `PalWorldSettings.ini`.

| Elemento | Requerido para transferencia host |
| --- | --- |
| Editar `PalWorldSettings.ini` | No |
| Editar archivos bajo `Configs` | No hay requisito verificado |
| Reemplazar `Level.sav` | Sí |
| Reemplazar `Players/` | Sí |

:::note No se Requieren Entradas de Configuración Adicionales
Según la documentación y las instrucciones de migración disponibles, no se requieren entradas de configuración extra ni cambios manuales en `.ini` para la transferencia en sí.
:::

## Inicia el Servidor y Prueba el Personaje

Una vez que los archivos actualizados estén subidos, inicia tu servidor Palworld nuevamente.

### Reúnete con el Servidor

Conéctate al servidor usando la misma cuenta que creó el nuevo personaje del servidor dedicado. Si la migración fue exitosa, ahora deberías cargar el personaje host transferido en lugar del temporal.

### Verifica Datos Importantes del Personaje

Después de unirte, verifica que los siguientes datos aparezcan correctamente:

- nivel del personaje
- inventario
- pals
- propiedad de la base
- datos de progresión

Si algo falta o está incorrecto, detén el servidor inmediatamente y restaura tu copia de seguridad antes de intentar de nuevo.

:::danger Restaura la Copia de Seguridad si los Datos Son Incorrectos
Si tu personaje, inventario o datos de propiedad del mundo aparecen dañados tras la migración, no continúes jugando. Restaura primero la copia original de `Level.sav` y `Players/` para evitar guardar cambios no deseados.
:::

## Resumen de Referencia

### Rutas, Archivos y Acciones Requeridas

| Tipo | Valor |
| --- | --- |
| Ruta de guardado | `Pal/Saved/SaveGames/0/[tu_id_de_carpeta_guardado]/` |
| Archivo requerido | `Level.sav` |
| Carpeta requerida | `Players/` |
| Archivo de guardado host típicamente seleccionado | `00000001.sav` |
| Comando del servidor | `save` |
| Reinicio del servidor requerido | Sí |
| Edición de archivo de configuración requerida | No hay requisito verificado |

## Conclusión

Felicitaciones, has transferido exitosamente tu personaje host de Palworld a un servidor dedicado. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para ayudarte! 🙂