---
id: palworld-install-mods
title: "Palworld: Instalar Mods"
description: "Aprende cómo instalar mods de Palworld, incluyendo UE4SS Palworld, mods Lua y mods .pak, en tu servidor dedicado. -> Aprende más ahora"
sidebar_label: "Instalar Mods"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Palworld soporta varios tipos de mods para servidores, siendo los más comunes los mods `UE4SS`, `.lua` y `.pak`. En esta guía, aprenderás a preparar tu servidor, identificar el tipo correcto de mod, subir los archivos necesarios y reiniciar tu servidor para que los mods se carguen correctamente.



## Preparación

Antes de instalar cualquier mod, debes asegurarte de que tu servidor y el mod seleccionado sean compatibles.

:::danger Haz una copia de seguridad de tu mundo primero
Siempre debes crear una copia de seguridad de tus datos guardados de Palworld antes de instalar mods. Si un mod es incompatible o causa problemas al iniciar, puede que necesites restaurar el estado previo de tu mundo.
:::

Debes verificar lo siguiente primero:

| Requisito | Detalles |
| --- | --- |
| Edición del servidor | Los servidores dedicados de Palworld usan la versión **Steam**. No se deben usar mods diseñados solo para la versión **Game Pass**. |
| Compatibilidad del mod | Confirma que el autor del mod indique explícitamente que el mod funciona en un servidor dedicado. |
| Tipo de mod | Verifica si el mod es un mod `UE4SS`, `.lua` o `.pak`. |
| Requisito del cliente | Algunos mods deben instalarse tanto en el **servidor** como en todos los **clientes jugadores**. |
| Versión del servidor | Revisa la versión actual de tu servidor antes de instalar un mod. |

### Verifica la versión de tu servidor

Para confirmar la versión actual de tu servidor Palworld, abre la consola del servidor en la administración de tu servidor de juegos ZAP-Hosting y ejecuta:

```text
info
```

Esto mostrará información de la versión que puedes comparar con los requisitos del mod.

:::tip Instala un mod a la vez
Solo debes instalar un mod a la vez y probarlo antes de añadir otro. Esto facilita mucho la solución de problemas si el servidor no inicia o un mod no funciona correctamente.
:::

## Entiende qué tipo de mod estás instalando

Los mods de Palworld no se instalan todos de la misma forma. Necesitas identificar el tipo de mod antes de subir los archivos.

| Tipo de mod | Contenido típico | Ruta común de instalación | Notas |
| --- | --- | --- | --- |
| Mod `UE4SS` / `.lua` | Carpeta con scripts como `main.lua` | `Pal/Binaries/Win64/ue4ss/Mods/` | Usualmente requiere el framework `UE4SS` |
| Mod `.pak` | Uno o más archivos `.pak`, a veces con archivos adicionales | `Pal/Content/Paks/~mods/` | Algunos mods usan `Pal/Content/Paks/LogicMods/` en su lugar |
| Mod del lado cliente | Varía | No siempre instalable en servidor | Solo debe usarse si el autor confirma soporte en servidor |

:::caution Sigue la ruta del autor del mod
Las rutas en esta guía son las ubicaciones más comunes usadas actualmente para mods de Palworld. Sin embargo, algunos mods requieren una estructura de carpetas diferente. Siempre debes seguir las instrucciones proporcionadas por el autor del mod si difieren.
:::

## Accede a los archivos de tu servidor en la interfaz ZAP

Necesitarás usar las áreas de gestión de archivos en la administración de tu servidor de juegos ZAP-Hosting.

### Abre la sección Configs

Los archivos de configuración relevantes se pueden acceder en la administración de tu servidor de juegos bajo **Configs**. Esta área es útil para revisar y editar archivos de configuración disponibles para tu servidor Palworld.

:::note Configs vs. Archivos de mod
La instalación de mods en Palworld generalmente no se completa solo cambiando una configuración de juego dentro de un único archivo config. En la mayoría de los casos, debes subir los archivos reales del mod en los directorios correctos del servidor, y algunos mods pueden requerir además cambios de configuración dentro de archivos disponibles en **Configs**.
:::

### Abre el administrador de archivos

Para subir archivos de mods como archivos `.pak` o carpetas de scripts `UE4SS`, también necesitas acceso a los archivos de tu servidor a través del administrador de archivos en la interfaz ZAP.

Si un mod incluye su propio archivo de configuración, debes subirlo exactamente como lo proporciona el autor del mod y luego editarlo solo si el autor documenta valores soportados.

## Instala el framework UE4SS si es necesario

`UE4SS` es un framework de mods usado por muchos mods Lua y basados en scripts de Palworld. Solo lo necesitas si tu mod seleccionado depende de él.

### Confirma que tu servidor usa Windows

`UE4SS` para Palworld generalmente se usa con la versión de servidor Windows. Si tu servidor no usa un entorno de servidor Palworld Windows, los mods basados en `UE4SS` pueden no funcionar como se espera.

:::info Requisito UE4SS
Si tu mod elegido es un mod `UE4SS` o `.lua`, debes confirmar que el framework ya está presente antes de subir el mod en sí.
:::

### Verifica la ruta de instalación de UE4SS

Si `UE4SS` está instalado, el directorio relevante suele ser:

```text
Pal/Binaries/Win64/ue4ss/
```

La carpeta de mods usada por la mayoría de mods `UE4SS` y Lua es:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Si tu producto ZAP-Hosting ofrece una opción integrada de modding o `UE4SS` en la administración del servidor, puedes usar esa opción si está disponible. Si no ves esa opción en tu interfaz, no asumas que existe para tu producto o tipo de servidor.

## Sube e instala mods Lua o UE4SS

Los mods Lua y otros mods basados en `UE4SS` para Palworld suelen distribuirse como carpetas en lugar de un solo archivo `.pak`.

### Extrae el mod en tu dispositivo local

Descarga el archivo del mod desde la página oficial del autor y extráelo primero en tu computadora. No debes subir el archivo `.zip` o `.rar` a menos que el autor te indique explícitamente hacerlo.

### Sube la carpeta del mod a la ruta correcta

Para la mayoría de mods Lua o `UE4SS`, sube la carpeta extraída del mod a:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Una estructura típica de un mod Lua se ve así:

```text
Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua
```

Reemplaza `UploadedMod` con el nombre real de la carpeta que proporciona el autor del mod.

### Estructura de ejemplo

| Elemento | Ruta de ejemplo |
| --- | --- |
| Carpeta del mod | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/` |
| Archivo de script | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua` |

:::caution No renombres archivos arbitrariamente
No debes renombrar la carpeta del mod, archivos de script ni la estructura interna de directorios a menos que el autor del mod te lo indique explícitamente. Muchos mods `UE4SS` dependen de la estructura original para cargarse correctamente.
:::

## Sube e instala mods .pak

Los mods `.pak` se instalan de forma diferente a los mods Lua o basados en scripts `UE4SS`.

### Sube el archivo `.pak`

Para la mayoría de mods `.pak` de Palworld, sube el archivo a:

```text
Pal/Content/Paks/~mods/
```

Ejemplo:

```text
Pal/Content/Paks/~mods/UploadedMod.pak
```

Algunos mods pueden indicarte usar en su lugar:

```text
Pal/Content/Paks/LogicMods/
```

### Verifica archivos adicionales si están incluidos

Algunos mods `.pak` pueden incluir más de un archivo, como metadatos o archivos complementarios. Si el archivo del mod contiene varios archivos requeridos, sube todos exactamente como indica el autor del mod.

| Ubicación común de `.pak` | Caso de uso |
| --- | --- |
| `Pal/Content/Paks/~mods/` | Ubicación más común para mods `.pak` generales |
| `Pal/Content/Paks/LogicMods/` | Usado por algunos mods según instrucciones del autor |

## Edita archivos de configuración del mod si el mod lo requiere

Algunos mods de Palworld incluyen sus propios archivos de configuración que deben editarse después de subirlos. Estas configuraciones no son universales, por lo que el nombre exacto del archivo y los valores dependen del mod seleccionado.

### Dónde encontrar el archivo de configuración

Si el mod proporciona un archivo de configuración, puede aparecer en alguna de estas ubicaciones tras subirlo:

| Tipo de mod | Posible ubicación del config |
| --- | --- |
| Mod `UE4SS` / `.lua` | Dentro de la carpeta del mod en `Pal/Binaries/Win64/ue4ss/Mods/[tu_mod]/` |
| Mod `.pak` | A veces no incluye config editable; revisa la documentación del mod |
| Integración con config del servidor | En algunos casos, ajustes adicionales pueden editarse en **Configs** en la administración ZAP |

### Qué cambiar

Solo debes cambiar valores que el autor del mod documente explícitamente. Ejemplos típicos incluyen:

- activar o desactivar funciones del mod
- establecer multiplicadores o límites
- definir comportamientos solo para admins
- cambiar nombres de teclas u opciones internas usadas por el mod

Como los mods de Palworld no usan un formato de configuración estándar único, no existe una entrada universal que aplique a todos los mods.

:::info No existe una configuración universal para mods de Palworld
Actualmente no hay un único archivo de configuración del servidor Palworld ni sección integrada que habilite todos los mods globalmente. En la práctica, la instalación de mods se hace colocando los archivos correctos en los directorios correctos y luego editando archivos de configuración específicos solo si el mod los incluye.
:::

## Reinicia el servidor y prueba el mod

Después de subir los archivos del mod y hacer los cambios de configuración necesarios, debes reiniciar tu servidor Palworld.

### Reinicia el servidor

Usa la función de reinicio en la administración de tu servidor de juegos ZAP-Hosting para reiniciar completamente el servicio.

Este paso es necesario porque Palworld normalmente no carga mods nuevos en el servidor hasta que este se reinicia.

### Prueba la funcionalidad

Después del reinicio:

1. Entra al servidor.
2. Prueba la función del mod en el juego.
3. Revisa la consola del servidor por errores si el mod no funciona.
4. Elimina los archivos del mod recién añadidos si el servidor no inicia o se comporta de forma inesperada.

:::tip Solución rápida para mods que fallan
Si un mod causa problemas, elimina primero solo los archivos del mod instalado más recientemente y reinicia el servidor otra vez. Esta es la forma más rápida de confirmar si ese mod es la causa.
:::

## Referencia rápida

| Tarea | Acción |
| --- | --- |
| Verificar versión del servidor | Ejecuta `info` en la consola del servidor |
| Ruta base UE4SS | `Pal/Binaries/Win64/ue4ss/` |
| Ruta mods UE4SS/Lua | `Pal/Binaries/Win64/ue4ss/Mods/` |
| Archivo común de script Lua | `scripts/main.lua` |
| Ruta común mods `.pak` | `Pal/Content/Paks/~mods/` |
| Ruta alternativa mods `.pak` | `Pal/Content/Paks/LogicMods/` |
| Acceso a archivos de configuración | Abre **Configs** en la administración del servidor ZAP |
| Paso final | Reinicia el servidor |

## Conclusión

Felicitaciones, has instalado mods exitosamente en tu servidor Palworld. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible diariamente para ayudarte! 🙂