---
id: subnautica-2-mods
title: "Subnautica 2: Instalar Mods"
description: "Aprende cómo instalar mods de Subnautica 2 en tu servidor de juegos subiendo mods Lua o C++ a la carpeta correcta, para que tu servidor de Subnautica los cargue automáticamente al iniciar. -> Aprende más ahora"
sidebar_label: Subnautica 2: Instalar Mods
services:
 - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los mods te permiten personalizar y mejorar la experiencia en tu servidor de juegos Subnautica 2 añadiendo nuevas funciones de juego, mejorando mecánicas o introduciendo contenido fresco. Con mods, puedes crear un entorno más variado y atractivo para ti y tus jugadores. Esta guía te mostrará cómo instalar mods de Subnautica 2 en tu servidor de juegos ZAP-Hosting subiendo mods compatibles en Lua o C++ a la carpeta correcta para que se carguen automáticamente al iniciar el servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparación

Antes de comenzar, necesitas acceso a los archivos de tu servidor de juegos Subnautica 2 a través de la interfaz web de ZAP-Hosting o mediante algún método disponible de gestión de archivos.

:::info Tipo de Mod Requerido
Solo debes usar mods en Lua o C++ diseñados para Subnautica 2. Si un mod es para otro juego, como Subnautica 1 o Subnautica Below Zero, no se puede asumir compatibilidad.
:::

:::note Fuentes para Descargar Mods
Los mods de Subnautica 2 pueden obtenerse, por ejemplo, en plataformas comunitarias como [Nexus Mods](https://www.nexusmods.com/games/subnautica2). Como las páginas de mods de terceros pueden cambiar en cualquier momento, siempre revisa la descripción del mod y las notas de instalación antes de subir archivos.
:::

## Descargar Mods Compatibles

Primero, descarga los mods que quieres usar en tu servidor. Asegúrate de que el mod esté específicamente destinado a **Subnautica 2** y verifica si el autor proporciona requisitos adicionales.

### Revisa el Contenido del Mod

Después de descargar un archivo de mod, extráelo en tu computadora local y revisa los archivos incluidos.

Elementos comunes a buscar:

- Archivos de scripts Lua
- Archivos de mods en C++
- Una estructura de carpetas proporcionada por el autor del mod
- Un archivo `README`, nota de instalación o lista de dependencias

:::caution Verifica la Compatibilidad
No todos los mods para juegos son compatibles con servidores. Algunos mods son solo para el cliente y pueden no funcionar en un servidor dedicado de Subnautica 2. Si el autor del mod no menciona soporte para servidor, debes probar cuidadosamente antes de usarlo en producción.
:::

## Accede a los Archivos de tu Servidor de Juegos

Luego, abre el sistema de archivos de tu servidor de juegos Subnautica 2 y localiza el directorio principal del servidor.

Si usas la interfaz web de ZAP-Hosting, abre el administrador de archivos de tu servidor de juegos y navega hasta el directorio raíz de la instalación del servidor.

### Localiza la Carpeta de Mods

Dentro del directorio principal del servidor de juegos, encuentra la carpeta `mods`.

La ruta de instalación es:

```text
[directorio_principal_servidor]/mods
```

Reemplaza `[directorio_principal_servidor]` con el directorio base de los archivos de tu servidor Subnautica 2.

:::info Carga Automática de Mods
El servidor revisa la carpeta `mods` durante el inicio. Si un mod compatible en Lua o C++ está colocado correctamente allí, se cargará automáticamente en el próximo arranque del servidor.
:::

## Sube e Instala los Mods

Una vez que tengas los archivos correctos del mod y hayas abierto la carpeta `mods`, puedes subir el contenido del mod.

### Copia los Archivos del Mod

Sube o mueve los archivos extraídos del mod en Lua o C++ a la carpeta `mods` dentro del directorio principal de tu servidor de juegos.

Dependiendo del mod, esto puede significar:

- subir un solo archivo directamente a `mods`
- subir una carpeta completa del mod a `mods`
- conservar exactamente la estructura de carpetas proporcionada por el autor del mod

### Mantén la Estructura Original

Si el archivo descargado ya contiene una carpeta del mod, no reorganices los archivos internos a menos que el autor te lo indique explícitamente.

| Elemento | Qué hacer |
| --- | --- |
| Archivo único de mod Lua | Súbelo a la carpeta `mods` |
| Archivo único de mod C++ | Súbelo a la carpeta `mods` |
| Mod basado en carpeta | Sube la carpeta completa a `mods` |
| Archivo comprimido como `.zip` | Extráelo primero, luego sube el contenido si es necesario |

:::caution No Subas Archivos Comprimidos a Menos que Esté Soportado
Si solo subes un archivo `.zip` u otro archivo comprimido sin extraerlo, el servidor puede no detectar el mod. A menos que el autor del mod indique lo contrario, sube los archivos o carpetas extraídos.
:::

## Reinicia el Servidor

Después de subir los mods, reinicia tu servidor de juegos Subnautica 2.

Esto es necesario porque el servidor carga los mods durante el inicio. Si el servidor ya está en ejecución, los archivos recién subidos generalmente no se aplicarán hasta el próximo arranque.

### Confirma la Carga del Mod

Tras el reinicio, verifica si el mod está activo en el juego o mediante cualquier registro o salida disponible para tu servidor.

Como el comportamiento de los mods puede variar, la confirmación puede incluir:

- cambios en la jugabilidad
- nuevos comandos o funciones
- entradas visibles en los registros del mod
- inicio exitoso del servidor sin errores

:::tip Instala Mods Uno por Uno
Si quieres usar varios mods, instálalos y pruébalos uno a la vez. Esto facilita identificar qué mod causa problemas si el servidor deja de iniciar correctamente.
:::

## Solución de Problemas

Si tus mods de Subnautica 2 no funcionan, hay varias causas comunes que debes revisar.

### Problemas Comunes

| Problema | Posible causa | Solución |
| --- | --- | --- |
| El mod no se carga | Archivos subidos al directorio incorrecto | Asegúrate de que los archivos estén dentro de la carpeta `mods` en el directorio principal del servidor |
| El servidor inicia pero el mod no tiene efecto | Mod solo para cliente o incompatible | Revisa la página del mod y confirma soporte para servidor dedicado |
| El servidor no inicia | Archivos del mod dañados o incompatibilidad de versión | Elimina el último mod instalado y reinicia el servidor |
| Archivos del mod presentes pero ignorados | Se subió el archivo comprimido en lugar de los archivos extraídos | Extrae la descarga y sube los archivos reales del mod |
| Conflicto entre varios mods | Dos mods modifican el mismo comportamiento | Prueba cada mod por separado y mantén solo combinaciones compatibles |

### Elimina un Mod Problemático

Si un mod recién instalado causa problemas, elimina el archivo o carpeta del mod correspondiente de la carpeta `mods` y reinicia el servidor nuevamente.

```text
[directorio_principal_servidor]/mods
```

:::danger Usa Fuentes de Mods Confiables
Solo descarga mods de fuentes confiables. Los archivos de terceros pueden contener contenido dañado, obsoleto o malicioso. Revisa cuidadosamente la página del mod y evita descargas desconocidas que no proporcionen información clara sobre instalación o compatibilidad.
:::

## Buenas Prácticas

Para mantener tu servidor estable, debes gestionar los mods con cuidado en lugar de instalar muchos a la vez.

### Flujo de Trabajo Recomendado

1. Descarga un mod compatible para Subnautica 2.
2. Extrae los archivos localmente.
3. Sube los archivos o carpeta a la carpeta `mods` del servidor.
4. Reinicia el servidor.
5. Prueba la funcionalidad.
6. Repite con el siguiente mod.

### Mantén una Copia de Seguridad Local

Antes de cambiar tu configuración activa de mods, guarda una copia de seguridad de:

- tus archivos actuales de mods
- cualquier archivo de configuración relacionado
- una lista de mods instalados y sus versiones

Esto te ayuda a restaurar una configuración funcional rápidamente si un mod nuevo causa problemas.

## Conclusión

Felicitaciones, has instalado mods exitosamente en tu servidor de juegos Subnautica 2. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, que está disponible todos los días para ayudarte! 🙂