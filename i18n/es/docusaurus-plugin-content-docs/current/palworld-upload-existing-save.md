---
id: palworld-upload-existing-save
title: "Palworld: Subir Partida Existente"
description: "Aprende cómo subir una partida existente de Palworld, migrar un mundo de servidor y actualizar correctamente el archivo de configuración requerido en tu servidor de juegos ZAP-Hosting. -> Aprende más ahora"
sidebar_label: Palworld: Subir Partida Existente
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld guarda los datos del mundo del servidor dedicado en una carpeta de guardado específica y enlaza esa carpeta mediante la configuración del servidor. En esta guía, aprenderás cómo subir una partida existente a tu servidor Palworld de ZAP-Hosting y actualizar la configuración necesaria para que el servidor cargue el mundo correcto.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, asegúrate de tener la carpeta de guardado existente de Palworld disponible en tu dispositivo local.

:::danger Fuentes de Guardado No Soportadas
Las partidas en la nube de consolas Xbox y PS5 no pueden transferirse directamente a un servidor dedicado de Palworld. Solo puedes migrar partidas desde una instalación en PC o desde otro servidor dedicado existente.
:::

:::info Acceso Requerido
Necesitas acceso a la interfaz web de tu servidor de juegos ZAP-Hosting, incluyendo el administrador de archivos y la sección `Configs`.
:::

Si necesitas ayuda para acceder a los archivos de tu servidor, utiliza la guía correspondiente de gestión de archivos en la documentación de ZAP-Hosting si está disponible para tu producto.

## Entender la Estructura Requerida del Guardado

Antes de subir cualquier archivo, debes confirmar que tu guardado tiene la estructura correcta.

En un servidor dedicado de Palworld, el guardado activo del mundo se almacena en:

```text
Pal/Saved/SaveGames/0/[tu_id_de_carpeta_de_guardado]/
```

El nombre de la carpeta `[tu_id_de_carpeta_de_guardado]` suele ser una cadena larga de letras y números, por ejemplo:

```text
84B5E2264EC387DEDB43179D666031A1
```

Una carpeta de guardado válida normalmente contiene archivos y carpetas similares a los siguientes:

| Elemento | Propósito |
| --- | --- |
| `Level.sav` | Datos principales del mundo guardado |
| `LevelMeta.sav` | Metadatos del mundo |
| `Players/` | Datos guardados de los jugadores |
| `WorldOption.sav` | Archivo legado de opciones del mundo que puede necesitar ser eliminado |

:::caution Eliminar WorldOption.sav Obsoleto
Si la carpeta de guardado que subas contiene `WorldOption.sav`, elimínalo antes de iniciar el servidor. Se sabe que este archivo causa problemas en configuraciones actuales de servidores dedicados y no debe usarse para partidas migradas a menos que un cambio oficial más reciente de Palworld lo requiera específicamente.
:::

## Encontrar el Archivo de Configuración en la Interfaz ZAP

Después de subir la carpeta de guardado, debes indicar al servidor que use esa carpeta editando la configuración de Palworld.

En la administración del servidor de juegos ZAP-Hosting, abre la sección `Configs` y localiza:

```text
GameUserSettings.ini
```

Dependiendo del entorno actual del servidor, este archivo suele estar en una de las siguientes rutas:

| Ruta posible | Notas |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Ruta común en servidores Palworld basados en Linux |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Ruta antigua o alternativa en configuraciones basadas en Windows |

:::note Ruta LinuxServer vs WindowsServer
Los servidores dedicados de Palworld se despliegan comúnmente con la ruta de configuración `LinuxServer`. Si no ves `WindowsServer`, revisa `LinuxServer`. En la interfaz ZAP, el método más sencillo es abrir `Configs` y seleccionar directamente `GameUserSettings.ini`.
:::

## Subir la Partida Existente

El proceso de subida depende de dónde provenga tu guardado, pero la ubicación destino en el servidor ZAP es la misma.

### Detén el Servidor Primero

Antes de reemplazar el mundo por defecto, detén tu servidor Palworld desde la interfaz web de ZAP-Hosting.

:::caution Evitar Corrupción de Guardado
No subas ni reemplaces archivos del mundo mientras el servidor esté en ejecución. Detener el servidor primero ayuda a prevenir escrituras incompletas y datos de guardado corruptos.
:::

### Eliminar la Carpeta de Guardado por Defecto

Abre el administrador de archivos y navega a:

```text
Pal/Saved/SaveGames/0/
```

Dentro de este directorio normalmente encontrarás una carpeta de guardado generada por defecto. Elimina esa carpeta por defecto antes de subir tu propia partida.

### Sube Tu Carpeta de Guardado Existente

Sube tu carpeta de guardado existente a:

```text
Pal/Saved/SaveGames/0/
```

Después de la subida, la estructura debería verse así:

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [tu_id_de_carpeta_de_guardado]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

Si existe `WorldOption.sav`, elimínalo después de la subida.

:::tip Copia Exactamente el Nombre de la Carpeta
Necesitarás el nombre exacto de la carpeta subida para el siguiente paso. Copia `[tu_id_de_carpeta_de_guardado]` tal como aparece en el administrador de archivos, incluyendo todas las letras y números.
:::

## Editar GameUserSettings.ini

Después de completar la subida del guardado, debes actualizar la configuración del servidor para que Palworld cargue el mundo correcto.

Abre `GameUserSettings.ini` desde la sección `Configs` y busca la entrada `DedicatedServerName`.

Configúrala con el nombre exacto de la carpeta de guardado subida:

```ini
DedicatedServerName=[tu_id_de_carpeta_de_guardado]
```

Ejemplo:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### Entrada de Configuración Requerida

Usa la siguiente referencia al editar el archivo:

| Archivo de configuración | Clave | Valor requerido |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | Nombre exacto de la carpeta de guardado subida |

### Qué Hace Esta Configuración

`DedicatedServerName` indica al servidor dedicado de Palworld qué carpeta dentro de `Pal/Saved/SaveGames/0/` debe cargarse como el mundo activo.

Si este valor no coincide exactamente con el nombre de la carpeta subida, el servidor puede crear un mundo nuevo o cargar incorrectamente.

:::danger Coincidencia Exacta Obligatoria
Si ves progreso del mapa faltante, un mundo vacío o una partida recién generada después del inicio, la causa más común es que `DedicatedServerName` no coincide exactamente con el nombre de la carpeta subida.
:::

## Ubicaciones de Guardado Según la Fuente

Si no estás seguro de dónde obtener tu guardado original, usa la ruta correcta según la fuente a continuación.

### Desde Otro Proveedor de Servidor Dedicado

En tu proveedor anterior, haz una copia de seguridad de la carpeta de guardado desde:

```text
Pal/Saved/SaveGames/0/
```

Copia toda la carpeta del mundo con su nombre original y luego súbela a tu servidor ZAP-Hosting como se describió arriba.

### Desde una Partida Cooperativa de Steam

Para guardados locales de Steam en Windows, abre la siguiente ruta:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[tu_steamid64]\[tu_id_de_carpeta_de_guardado]
```

La carpeta `[tu_steamid64]` es tu ID de Steam de 64 bits, y `[tu_id_de_carpeta_de_guardado]` es la carpeta del mundo que quieres migrar.

:::caution Limitación del Personaje Anfitrión
Al migrar un mundo cooperativo local de Steam a un servidor dedicado, el personaje anfitrión original no se transfiere automáticamente igual que los datos de los jugadores conectados. Puede que necesites herramientas de conversión de guardados o transferencia de personajes de terceros si quieres preservar el personaje anfitrión.
:::

### Desde PC Game Pass

Para instalaciones de PC Game Pass, los datos locales de guardado suelen almacenarse en:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

Los guardados de Game Pass no se almacenan en el mismo formato que los de Steam o servidores dedicados. En la práctica, normalmente necesitas una herramienta de conversión de terceros para convertir el guardado a un formato compatible con Steam o servidores dedicados antes de subirlo.

:::info Requisito de Conversión para Game Pass
Subir directamente datos crudos de guardado de PC Game Pass generalmente no es suficiente. Debes convertir primero el guardado y luego subir la carpeta del mundo convertida a `Pal/Saved/SaveGames/0/` y configurar `DedicatedServerName` en consecuencia.
:::

## Iniciar el Servidor

Una vez que la carpeta de guardado ha sido subida y `GameUserSettings.ini` actualizado, inicia tu servidor nuevamente desde la interfaz web de ZAP-Hosting.

Normalmente no se requieren comandos adicionales en la consola para este proceso de migración.

Después del inicio, conéctate al servidor y verifica que:

- se cargue el mundo correcto
- estén presentes los edificios y el progreso del mapa
- los datos de los jugadores estén disponibles como se espera

## Solución de Problemas

Si el guardado subido no carga correctamente, revisa los siguientes puntos.

### El Servidor Creó un Mundo Nuevo

Verifica que el siguiente valor en `GameUserSettings.ini` coincida exactamente con el nombre de la carpeta subida:

```ini
DedicatedServerName=[tu_id_de_carpeta_de_guardado]
```

También confirma que el guardado subido esté ubicado directamente en:

```text
Pal/Saved/SaveGames/0/[tu_id_de_carpeta_de_guardado]/
```

### Falta Progreso del Mapa o Mundo

Esto suele significar una de las siguientes causas:

| Causa posible | Solución |
| --- | --- |
| Valor incorrecto de `DedicatedServerName` | Reingresa el nombre exacto de la carpeta subida |
| Carpeta de guardado subida en directorio incorrecto | Muévela a `Pal/Saved/SaveGames/0/` |
| Subida incompleta | Vuelve a subir la carpeta completa y verifica que todos los archivos estén presentes |

### Problemas Causados por WorldOption.sav

Si tu guardado contiene `WorldOption.sav`, elimínalo y reinicia el servidor.

Este archivo está asociado con un comportamiento antiguo de manejo de guardados y puede interferir con mundos migrados a servidores dedicados.

## Conclusión

Felicidades, has subido exitosamente una partida existente de Palworld a tu servidor ZAP-Hosting. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂