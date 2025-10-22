---
id: minecraft-pluginuploader
title: "Minecraft: Servidor usando el Plugin Uploader de ZAP-Hosting"
description: "Descubre cómo gestionar plugins de servidor de juegos Minecraft fácilmente para servidores Spigot o Bukkit y mejora tu experiencia de juego → Aprende más ahora"
sidebar_label: Plugin Uploader
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugin Uploader

Haz clic en tu servidor de juegos Minecraft en la vista general de servidores. Luego selecciona la pestaña Plugins, que se encuentra en el submenú Configuración.

:::info
Asegúrate de que tu juego actual sea Spigot o Bukkit. El plugin uploader solo está disponible ahí.
:::

## Instalar/Subir Plugins

Hay dos formas diferentes de instalar un plugin en tu servidor de juegos Minecraft.

- Puedes instalar tu plugin desde una de nuestras selecciones predefinidas (si está disponible)
- Puedes subir tus propios plugins usando drag'n drop

### Plugins desde la lista

Selecciona el plugin que quieras de la lista "Todos los plugins" y haz clic en el botón verde "Instalar". La instalación puede tardar un momento dependiendo del tamaño del plugin.

![](https://screensaver01.zap-hosting.com/index.php/s/dxrtY8pQwmtfEP9/preview)

### Sube tu propio Plugin

Arrastra el archivo .jar del plugin deseado dentro del recuadro marcado en la imagen. También es posible arrastrar e instalar varios plugins en esta área al mismo tiempo.

![](https://screensaver01.zap-hosting.com/index.php/s/fM2a4AeyspaQzYd/preview)

Una vez que hayas arrastrado el plugin al campo de subida, tardará un momento hasta que el plugin esté en el servidor.

Para poder usar el plugin, tienes que recargar tu servidor con el comando `/rl` o `/reload` vía la consola de tu servidor de juegos (o reiniciar todo el servidor).

:::info
En casos raros, es necesario reiniciar el servidor para que el plugin funcione sin problemas.
:::


## Desinstalar Plugin

![](https://screensaver01.zap-hosting.com/index.php/s/dKaeJr8M3jzgMBS/preview)

Para desinstalar un plugin, haz clic en el icono de la papelera roja junto a la entrada.

## Desactivar Plugin

Para esto, haz clic en el botón verde con el candado detrás de un plugin instalado. Si el botón cambia de color de verde a naranja, has desactivado tu plugin. Al contrario, lo activas de nuevo. El archivo del plugin sigue en el servidor tras la desactivación, pero ya no es cargado por el servidor de juegos.

:::info
Después de desactivar tu plugin, tienes que recargar el servidor una vez para que los cambios tengan efecto. Usa uno de estos dos comandos en la consola de tu servidor de juegos o en el juego: `/rl` o `/reload`
:::

## Problemas Comunes

**No puedo subir mi plugin usando el área de "Drag'n Drop".**

Soluciones sugeridas:

- Tu plugin puede ser mayor a 5 MB y por eso no es apto para subirlo vía la interfaz web. Alternativamente, usa un cliente FTP.
- Los permisos FTP pueden estar causando problemas. Para solucionarlo, haz clic en la pestaña FTP en la interfaz web y pulsa el botón Restablecer permisos FTP. Deberías poder subir plugins de nuevo.
- Tu plugin puede ser inválido y no contener un plugin.yml válido. En ese caso, usa un cliente FTP como alternativa.
- A veces la lista no se recarga. Simplemente recarga la página con F5, etc.

### No puedo eliminar mi plugin.

:::info
En ese caso, contacta con soporte.
:::

### No puedo desactivar/activar mi plugin.

Soluciones sugeridas:

- ¿Tu plugin sigue en el servidor? Compruébalo haciendo clic en el botón Actualizar al borde de la tabla. Esto re-sincroniza la lista mostrada con los plugins realmente en el servidor. Ahora solo se mostrarán los plugins que estén realmente en el servidor.

### Faltan plugins en la sección Todos los Plugins.

Soluciones sugeridas:

- Puede que no haya una versión actual de este plugin para la versión instalada de tu servidor de juegos. Para solicitar un plugin, usa el botón azul ¿Falta un plugin?.

![](https://screensaver01.zap-hosting.com/index.php/s/DeMjH2s74geaLPq/preview)

### La desinstalación/instalación en la lista predefinida no parece funcionar.

Soluciones sugeridas:

- Recarga la página para solucionar el problema.

### Se muestra un plugin que ni siquiera está en el servidor.

Soluciones sugeridas:

- En ese caso, simplemente elimina la entrada del plugin haciendo clic en el botón desinstalar.
- Alternativamente, prueba a hacer clic en el botón Sincronizar.

<InlineVoucher />