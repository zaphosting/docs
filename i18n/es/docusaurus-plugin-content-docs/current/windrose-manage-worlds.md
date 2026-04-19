---
id: windrose-manage-worlds
title: "Windrose: Gestionar Mundos"
description: "Aprende a gestionar múltiples mundos de Windrose, cambiar guardados de mundos y configurar los ajustes de tu mundo en un servidor dedicado con la estructura correcta de mundos. -> Aprende más ahora"
sidebar_label: Gestionar Mundos
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Windrose soporta múltiples mundos en un solo servidor dedicado, donde cada mundo usa sus propios datos guardados y la configuración `WorldDescription.json`. En esta guía, aprenderás a crear nuevos mundos, cambiar entre mundos existentes, hacer copias de seguridad y borrarlos de forma segura.

## Preparación

Antes de comenzar, asegúrate de tener acceso a tu servidor de juegos Windrose a través de la interfaz web de ZAP-Hosting y que tu servidor esté apagado antes de realizar cambios en los guardados o configuraciones.

:::info Acceso Requerido
Necesitas acceso a la gestión del servidor de juegos en ZAP-Hosting, incluyendo las secciones **Administrador de Archivos**, **Configs** y **Copias de Seguridad**, para gestionar tus mundos de Windrose de forma segura.
:::

:::caution Detén el Servidor Primero
Siempre debes detener tu servidor antes de editar `ServerDescription.json`, modificar `WorldDescription.json`, crear carpetas de mundos o eliminar datos guardados. Esto ayuda a prevenir corrupción y escrituras incompletas del mundo.
:::

## Entender la Estructura de Mundos en Windrose

Windrose almacena todos los datos del mundo dentro del directorio del perfil de guardado. El primer mundo se crea automáticamente al iniciar el servidor por primera vez.

La estructura relevante es la siguiente:

```text
R5/Saved/SaveProfiles/Default
ServerDescription.json
RocksDB
<game_version>
Worlds
World_1_ID
WorldDescription.json
World_2_ID
```

En la práctica, las carpetas de mundos están ubicadas en:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Cada carpeta de mundo lleva el nombre de su único `IslandId`. El servidor usa este ID internamente para identificar qué mundo debe cargar.

| Archivo o Carpeta | Propósito |
| --- | --- |
| `ServerDescription.json` | Define la configuración activa del servidor, incluyendo el mundo cargado actualmente |
| `RocksDB/[your_game_version]/Worlds/` | Almacena todas las carpetas de guardados de mundos disponibles |
| `[your_world_id]/WorldDescription.json` | Almacena la configuración de un mundo específico |
| `WorldIslandId` | Valor en `ServerDescription.json` que indica al servidor qué mundo cargar |

:::danger No Renombres Carpetas de Mundos
Nunca debes renombrar manualmente una carpeta de mundo. Windrose usa el nombre de la carpeta como el `IslandId` interno en la base de datos RocksDB. Renombrar una carpeta puede corromper el mundo o dejarlo huérfano e inutilizable.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Encontrar el Mundo Activo

Antes de cambiar o crear mundos, es útil identificar cuál está activo actualmente.

### Revisa la Configuración del Servidor

Abre la sección **Configs** en la gestión de tu servidor de juegos y localiza `ServerDescription.json`. Si el archivo no aparece listado, usa el **Administrador de Archivos** y abre `ServerDescription.json` desde la raíz de la lista de archivos.

Busca el siguiente campo:

```json
"WorldIslandId": "[your_world_id]"
```

Este valor define el mundo que el servidor cargará al iniciar.

### Verificar un ID de Mundo

Para identificar un mundo guardado específico, abre su archivo `WorldDescription.json` dentro de la carpeta del mundo y busca el valor `IslandId`.

Ejemplo:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "World_Example_ID",
    "WorldName": "Mi Mundo",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

El `IslandId` en este archivo debe coincidir exactamente con el nombre de la carpeta.

## Cambiar Entre Mundos

Si ya tienes varios mundos guardados en tu servidor, puedes cambiar entre ellos modificando el `WorldIslandId` activo.

### Actualizar el Mundo Destino

Primero, detén tu servidor desde la interfaz web de ZAP-Hosting.

Luego, abre `ServerDescription.json` en la sección **Configs** o mediante el **Administrador de Archivos** en la raíz de los archivos del servidor.

Encuentra este campo:

```json
"WorldIslandId": "PEGA_AQUI_EL_ID_DEL_MUNDO_OBJETIVO"
```

Reemplaza el valor con el `IslandId` del mundo que quieres cargar. Puedes encontrar ese ID abriendo el `WorldDescription.json` del mundo destino.

### Guarda y Reinicia el Servidor

Guarda el archivo y vuelve a iniciar tu servidor. Windrose cargará ahora el mundo seleccionado.

:::tip Verifica el ID del Mundo Cuidadosamente
Si el `WorldIslandId` no coincide exactamente con una carpeta de mundo existente y su `IslandId`, el servidor puede fallar al cargar el mundo deseado o generar uno nuevo en su lugar.
:::

## Crear un Nuevo Mundo

Si quieres alojar varias sesiones de juego en un solo servidor, puedes crear un mundo nuevo manualmente.

### Crear la Carpeta del Mundo

Detén primero tu servidor.

Abre el **Administrador de Archivos** y navega a:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Crea una carpeta nueva con un nombre único. Este nombre será el nuevo `IslandId` del mundo.

Por ejemplo:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/MiSegundoMundo
```

### Crear el Archivo de Descripción del Mundo

Dentro de la nueva carpeta, crea un archivo llamado `WorldDescription.json` y pega esta plantilla:

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "TU_NUEVO_ID_DE_MUNDO",
    "WorldName": "Mi Segundo Mundo",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

Reemplaza `TU_NUEVO_ID_DE_MUNDO` con el ID que hayas elegido para el mundo.

:::caution Los IDs Deben Coincidir
El `IslandId` dentro de `WorldDescription.json` debe ser idéntico al nombre de la carpeta. Incluso diferencias pequeñas, como mayúsculas/minúsculas o espacios extras, pueden impedir que el mundo se cargue correctamente.
:::

### Establecer el Nuevo Mundo como Activo

Ahora abre `ServerDescription.json` y actualiza el valor `WorldIslandId` para que apunte a tu nuevo ID de mundo.

Ejemplo:

```json
"WorldIslandId": "MiSegundoMundo"
```

Guarda el archivo y arranca el servidor. Windrose generará el nuevo mundo desde cero al iniciar.

## Hacer Copia de Seguridad de un Mundo

Antes de cambiar de mundo, borrar datos o probar nuevas configuraciones, deberías crear una copia de seguridad de tu guardado.

### Usa la Función de Copias de Seguridad de ZAP-Hosting

Detén primero tu servidor.

En el panel lateral, abre **Copias de Seguridad** y crea una nueva copia. Esta es la opción más segura si quieres restaurar el estado completo del servidor más adelante.

### Descargar los Archivos del Mundo Manualmente

Si solo quieres una copia directa de los datos guardados, abre el **Administrador de Archivos** y descarga toda la carpeta `RocksDB/` usando la opción de zip o descarga.

Ruta relevante:

```text
R5/Saved/SaveProfiles/Default/RocksDB/
```

| Método de Copia de Seguridad | Uso Recomendado |
| --- | --- |
| Copia desde el panel | Mejor para recuperación completa del servidor |
| Descarga manual de `RocksDB/` | Mejor para archivar guardados de mundos directamente |
| Ambos métodos | Mejor para mundos importantes o antes de un borrado |

:::note Recomendación de Copia de Seguridad
Si gestionas varios mundos, mantener tanto una copia desde el panel como una copia manual de `RocksDB/` te da la máxima flexibilidad para restaurar un mundo específico después.
:::

## Borrar un Mundo

Si quieres reiniciar un mundo completamente, puedes eliminar su carpeta de guardado y dejar que el servidor genere una nueva.

### Eliminar el Guardado del Mundo

Detén tu servidor.

Abre el **Administrador de Archivos** y navega a:

```text
R5/Saved/SaveProfiles/Default/RocksDB/[your_game_version]/Worlds/
```

Elimina la carpeta del mundo que quieres borrar.

### Regenerar el Mundo

Asegúrate de que `ServerDescription.json` siga apuntando a ese ID de mundo eliminado mediante el campo `WorldIslandId`.

Cuando inicies el servidor de nuevo, Windrose detectará que la carpeta del mundo objetivo ya no existe y generará un mundo nuevo para ese ID.

:::danger Confirma la Carpeta Correcta Antes de Eliminar
Eliminar la carpeta equivocada borra permanentemente los datos guardados de ese mundo a menos que tengas una copia de seguridad. Verifica bien el nombre de la carpeta y el `IslandId` antes de continuar.
:::

## Gestionar Configuraciones de Mundo

Cada mundo tiene su propio `WorldDescription.json`, lo que significa que puedes mantener configuraciones separadas para diferentes mundos en el mismo servidor.

### Ejemplo de Configuración de Mundo

```json
{
  "Version": 1,
  "WorldDescription": {
    "IslandId": "MiSegundoMundo",
    "WorldName": "Mi Segundo Mundo",
    "WorldPresetType": "Medium",
    "WorldSettings": {}
  }
}
```

### Valores Importantes

| Clave | Descripción |
| --- | --- |
| `Version` | Versión de configuración usada por el archivo |
| `IslandId` | ID interno del mundo, debe coincidir con el nombre de la carpeta |
| `WorldName` | Nombre visible del mundo |
| `WorldPresetType` | Tipo de preset para la generación del mundo |
| `WorldSettings` | Ajustes adicionales específicos del mundo si están soportados |

:::info Gestión de Configuración en el Panel
Los archivos de configuración de Windrose pueden gestionarse en la gestión de tu servidor de juegos bajo **Configs**. Si un archivo no está disponible allí, usa el **Administrador de Archivos** para editarlo directamente.
:::

## Buenas Prácticas para Gestionar Múltiples Mundos

Gestionar varios mundos en un servidor es útil para pruebas, eventos o grupos de jugadores separados. Para mantener todo organizado, sigue estas recomendaciones:

- Usa IDs de mundo claros y únicos como `[tu_mundo_pvp]` o `[tu_mundo_build]`
- Mantén el nombre de la carpeta y el `IslandId` exactamente iguales
- Haz una copia de seguridad antes de cambiar o borrar cualquier mundo
- Evita modificar archivos mientras el servidor está en ejecución
- Documenta qué `WorldIslandId` corresponde a cada nombre de mundo

Este enfoque te ayuda a evitar confusiones, especialmente si mantienes muchos mundos con el tiempo.

## Conclusión

Felicidades, has gestionado con éxito los mundos de Windrose en tu servidor. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, que está disponible a diario para asistirte! 🙂