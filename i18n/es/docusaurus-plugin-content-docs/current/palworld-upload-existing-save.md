---
id: palworld-upload-existing-save
title: "Palworld: Subir Partida Guardada Existente"
description: "Aprende cómo subir una partida guardada existente de Palworld, subir los datos correctamente y configurar tu servidor para cargar la carpeta del mundo correcta. -> Aprende más ahora"
sidebar_label: Palworld: Subir Partida Guardada Existente
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld almacena los datos del mundo del servidor de juegos dedicado en una carpeta de guardado específica y requiere una entrada de configuración que coincida para cargarla correctamente. En esta guía, aprenderás cómo subir una partida guardada existente a tu servidor de juegos Palworld de ZAP-Hosting y configurar el servidor para que inicie con los datos del mundo correctos.

:::danger Fuentes de Guardado No Soportadas
No puedes transferir partidas guardadas de consola Xbox o de la nube de PS5 directamente a un servidor dedicado de Palworld. Solo se pueden migrar partidas guardadas desde una instalación en PC o desde otro servidor dedicado existente con este método.
:::



## Preparación

Antes de comenzar, asegúrate de tener lo siguiente:

| Requisito | Detalles |
| --- | --- |
| Partida guardada existente de Palworld | Una carpeta de guardado desde una instalación en PC o desde otro servidor dedicado |
| Acceso a tu servidor de juegos ZAP-Hosting | Necesitas acceso a la interfaz web, incluyendo el administrador de archivos y la sección `Configs` |
| Servidor detenido | El servidor Palworld debe estar detenido antes de reemplazar los datos guardados |
| Nombre de la carpeta de guardado | Necesitas el nombre exacto de la carpeta que subiste, por ejemplo `[your_savefolder_id]` |

:::info Acceso a Archivos de Configuración
En ZAP-Hosting, los archivos de configuración relevantes de Palworld se pueden acceder a través de la administración de tu servidor de juegos en `Configs`. No necesitas editar el archivo directamente desde el administrador de archivos a menos que prefieras verificar la ruta manualmente.
:::

## Entender la Estructura Requerida del Guardado

Antes de subir cualquier archivo, es importante entender qué carpeta carga realmente Palworld.

La ubicación del guardado del servidor es:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

Dentro de esta carpeta, normalmente deberías ver archivos y carpetas similares a los siguientes:

```text
Level.sav
LevelMeta.sav
Players/
```

En algunas partidas guardadas antiguas o migradas, también puedes encontrar:

```text
WorldOption.sav
```

:::caution Eliminar WorldOption.sav Obsoleto
Si `WorldOption.sav` está presente en la carpeta de guardado subida, elimínalo antes de iniciar el servidor. Se sabe que este archivo causa problemas con configuraciones más recientes de servidores Palworld y no debe usarse para partidas migradas a menos que un setup confirmado lo requiera específicamente.
:::

## Encontrar el Archivo de Configuración Correcto

Para que el servidor cargue tu mundo subido, necesitas editar `GameUserSettings.ini`.

En la administración del servidor de juegos ZAP-Hosting:

1. Abre tu servidor Palworld.
2. Ve a `Configs`.
3. Abre `GameUserSettings.ini`.

Dependiendo del entorno actual del servidor, la ruta del archivo suele ser una de las siguientes:

| Ruta posible | Notas |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Común en despliegues de servidores Palworld basados en Linux |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Puede aparecer en despliegues basados en Windows |

:::note Diferencias en la Ruta
Las instalaciones de servidores Palworld pueden usar `LinuxServer` o `WindowsServer` en la ruta de configuración según la plataforma actual usada por el proveedor. Si editas el archivo a través de `Configs`, el archivo correcto ya está expuesto ahí, solo asegúrate de modificar `GameUserSettings.ini`.
:::

## Subir una Partida Guardada Desde Otro Servidor Dedicado

Si tu partida guardada ya proviene de otro proveedor de alquiler de servidores, puedes migrarla directamente.

### Haz una Copia de Seguridad del Guardado Existente

En tu proveedor anterior, localiza y descarga la carpeta de guardado existente desde:

```text
Pal/Saved/SaveGames/0/
```

Copia la carpeta completa con el nombre alfanumérico aleatorio, por ejemplo:

```text
[your_savefolder_id]
```

### Detén el Servidor ZAP-Hosting

Antes de subir la nueva partida guardada, detén tu servidor Palworld en la interfaz web de ZAP-Hosting.

:::caution Evita Conflictos de Guardado
No reemplaces archivos de guardado mientras el servidor esté en ejecución. Esto puede causar cargas incompletas, datos sobrescritos o una partida guardada corrupta.
:::

### Reemplaza la Carpeta de Guardado Predeterminada

Abre el administrador de archivos de tu servidor de juegos y navega a:

```text
Pal/Saved/SaveGames/0/
```

Elimina la carpeta de guardado predeterminada que creó automáticamente el servidor y luego sube tu carpeta de guardado existente en la misma ubicación.

Después de la subida, la estructura debería verse así:

```text
Pal/Saved/SaveGames/0/[your_savefolder_id]/
```

### Configura la Carpeta de Guardado Correcta en GameUserSettings.ini

Ahora abre `GameUserSettings.ini` a través de `Configs` y busca la entrada `DedicatedServerName`.

Configúrala con el nombre exacto de la carpeta de guardado que subiste:

```ini
DedicatedServerName=[your_savefolder_id]
```

| Entrada de configuración | Valor requerido |
| --- | --- |
| `DedicatedServerName` | El nombre exacto de la carpeta dentro de `Pal/Saved/SaveGames/0/` |

:::tip Coincidencia Exacta Obligatoria
`DedicatedServerName` debe coincidir exactamente con el nombre de la carpeta subida, incluyendo todas las letras y números. Si el valor no coincide, el servidor puede iniciar un mundo diferente o parecer que carga sin progreso en el mapa.
:::

### Inicia el Servidor

Después de guardar la configuración, inicia tu servidor Palworld nuevamente.

Normalmente no se requiere ningún comando adicional en la consola tras la subida. Un reinicio completo del servidor es suficiente para que se cargue la nueva partida guardada.

## Subir una Partida Guardada Desde un Mundo Cooperativo de Steam

Si antes alojabas tu mundo localmente a través del cooperativo de Steam, también puedes subir esa partida guardada a tu servidor dedicado.

### Localiza la Partida Guardada Local de Steam

En tu PC con Windows, presiona `Windows` + `R` y abre:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames
```

Dentro de esta ubicación, abre la carpeta con tu SteamID64. Luego localiza la carpeta del mundo que quieres subir:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[your_steamid64]\[your_savefolder_id]
```

### Sube la Partida Guardada al Servidor

Una vez que hayas identificado la carpeta de guardado correcta:

1. Detén tu servidor Palworld.
2. Abre el administrador de archivos.
3. Navega a `Pal/Saved/SaveGames/0/`.
4. Elimina la carpeta de guardado predeterminada.
5. Sube tu carpeta de guardado existente.
6. Abre `GameUserSettings.ini` en `Configs`.
7. Configura:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Guarda el archivo y vuelve a iniciar el servidor.

:::caution Limitación del Personaje Anfitrión
Al migrar un mundo cooperativo local de Steam, el personaje anfitrión no se transfiere automáticamente igual que los datos de los jugadores conectados. En la práctica, esto significa que el anfitrión original puede necesitar pasos adicionales de conversión o transferencia de personaje con herramientas de terceros si se requiere continuidad del personaje.
:::

## Subir una Partida Guardada Desde PC Game Pass

Las partidas guardadas de PC Game Pass usan un formato diferente y no están listas directamente para un servidor dedicado de Palworld.

### Localiza la Partida Guardada de Game Pass

Los datos locales de guardado de Game Pass suelen almacenarse en:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

### Convierte Primero la Partida Guardada

Para usar una partida guardada de PC Game Pass en un servidor dedicado, necesitas convertirla a un formato compatible con Steam usando una herramienta de conversión de terceros.

Una opción comúnmente usada es [Palworld Save Tools](https://github.com/cheahjs/palworld-save-tools).

:::danger Aviso Sobre Herramientas de Terceros
Las herramientas de conversión de partidas guardadas de terceros no son desarrolladas ni mantenidas por ZAP-Hosting. Su funcionalidad puede cambiar con el tiempo y la compatibilidad no está garantizada. Siempre crea una copia de seguridad de tu partida original antes de usar cualquier herramienta de conversión.
:::

Después de la conversión, la partida exportada suele colocarse en una carpeta como:

```text
XGP_converted_saves
```

### Sube la Partida Convertida

Después de convertir la partida guardada:

1. Detén tu servidor.
2. Abre el administrador de archivos.
3. Ve a `Pal/Saved/SaveGames/0/`.
4. Elimina la carpeta de guardado predeterminada.
5. Sube la carpeta de guardado convertida.
6. Abre `GameUserSettings.ini` en `Configs`.
7. Configura el nombre correcto de la carpeta:

```ini
DedicatedServerName=[your_savefolder_id]
```

8. Guarda el archivo y arranca el servidor.

## Cambios de Configuración Requeridos

El paso manual más importante en este proceso es editar correctamente `GameUserSettings.ini`.

### Resumen de la Entrada de Configuración

| Archivo | Ubicación en la interfaz ZAP | Entrada a cambiar | Valor de ejemplo |
| --- | --- | --- | --- |
| `GameUserSettings.ini` | `Configs` | `DedicatedServerName` | `DedicatedServerName=84B5E2264EC387DEDB43179D666031A1` |

### Ejemplo de Configuración

Si tu carpeta de guardado subida se llama `84B5E2264EC387DEDB43179D666031A1`, la entrada debería verse así:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

No agregues comillas adicionales a menos que ya existan en la sintaxis del archivo usada por tu plantilla de configuración actual.

## Verifica la Subida

Después de que el servidor inicie, conéctate y verifica si tus datos del mundo se cargaron correctamente.

Debes comprobar lo siguiente:

| Verificación | Resultado esperado |
| --- | --- |
| Carga del mundo | El mapa y las estructuras existentes están presentes |
| Datos de jugador | Los datos de jugador transferidos previamente están disponibles donde corresponda |
| Coincidencia de carpeta de guardado | `DedicatedServerName` coincide exactamente con la carpeta subida |
| Archivo obsoleto eliminado | `WorldOption.sav` ya no está presente si causaba problemas |

## Solución de Problemas

Si la subida no funciona como esperabas, revisa estas causas comunes.

### El Servidor Inicia un Mundo Nuevo

Si el servidor crea un mundo nuevo en lugar de cargar tu partida subida, la causa más común es un valor incorrecto en `DedicatedServerName`.

Asegúrate de que:

- la carpeta subida esté dentro de `Pal/Saved/SaveGames/0/`
- el nombre de la carpeta esté copiado exactamente
- `DedicatedServerName=[your_savefolder_id]` coincida exactamente con esa carpeta

### Faltan Datos del Mapa

Si el servidor inicia pero tu progreso o datos del mapa parecen faltar, verifica nuevamente la coincidencia del nombre de carpeta.

Este problema suele ser causado por una discrepancia entre:

- el nombre de la carpeta de guardado subida
- el valor `DedicatedServerName` en `GameUserSettings.ini`

### La Subida Parece Correcta Pero Sigue Fallando

Si la estructura de carpetas parece correcta pero la partida no carga:

- confirma que la partida proviene de una fuente soportada
- elimina `WorldOption.sav` si existe
- asegúrate de que el servidor estuviera completamente detenido antes de reemplazar archivos
- reinicia el servidor después de guardar los cambios en la configuración

:::tip Buenas Prácticas para Subir Archivos
Si subes una partida guardada grande, espera a que la transferencia se complete totalmente antes de iniciar el servidor. Iniciar demasiado pronto puede dejar la partida incompleta y evitar que el mundo se cargue correctamente.
:::

## Conclusión

Felicidades, has subido exitosamente una partida guardada existente de Palworld a tu servidor ZAP-Hosting. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂