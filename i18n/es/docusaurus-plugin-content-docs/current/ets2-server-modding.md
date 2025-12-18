---
id: ets2-server-modding
title: "ETS2: Instalando Mods/DLCs en tu servidor de ETS2"
description: "Descubre cómo mejorar tu experiencia en Euro Truck Simulator 2 añadiendo mods y DLCs para un juego más inmersivo → Aprende más ahora"
sidebar_label: Instalar Mods/DLCs
services:
  - gameserver-factorio-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Euro Truck Simulator 2 tiene soporte nativo para mods a través del Steam Workshop integrado en el juego, lo que te permite añadir una gran variedad de mods tanto a tu juego como a tu servidor, junto con los DLCs comprados. En esta guía, cubriremos el proceso de instalación de mods en tu cliente y posteriormente en tu servidor de ETS2.

<InlineVoucher />

## Añadiendo Mods y DLCs

Para empezar, tendrás que encontrar y seleccionar los mods y DLCs que quieras usar. Puedes hacerlo dentro del juego accediendo a las opciones **Gestor de Mods** y **Navegador de DLC** en el menú principal.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Puedes acceder a los Mods a través de la opción **Gestor de Mods** en el menú principal, que te permite encontrar mods fácilmente mediante el Steam Workshop.

Una vez que hayas instalado algunos mods, asegúrate de moverlos a la lista de **Mods Activos** usando las flechas junto a cada mod.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Finalmente, confirma los cambios y entra al juego, en modo un jugador.

### DLCs

Puedes acceder a los DLCs que has comprado en tu cuenta mediante la opción **Navegador de DLC** en el menú principal.

En esta página, puedes ver todos los DLCs que actualmente posees y tienes instalados en tu cliente.

## Exportando Paquetes para el Servidor

Ahora que has activado los mods y estás listo en el juego, tendrás que exportar tus mods como paquetes para el servidor. Para esto, deberás abrir la consola dentro del juego, que por defecto está deshabilitada.

Para habilitarla, ve a la siguiente ruta y abre el archivo `config.cfg`:
```
C:/Users/[tu_usuario]/Documents/Euro Truck Simulator 2
```

En este archivo, busca la línea `uset g_developer "0"` y cámbiala por `uset g_developer "1"` para habilitarla. De igual forma, busca la línea `uset g_console "0"` y cámbiala por `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Reinicia tu juego, y ahora podrás abrir la consola con una de las siguientes teclas según la distribución de tu teclado:
```
` O ~ O \
```

Ahora que estás listo, en la consola escribe el siguiente comando para exportar los paquetes para el servidor:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Se exportarán dos archivos en tu carpeta `Documents/Euro Truck Simulator 2`, los archivos `server_packages.dat` y `server_packages.sii`, que contienen información sobre los DLCs/mods y se usarán en la siguiente sección.

## Subiendo los Paquetes al Servidor

Con los paquetes para el servidor exportados, tendrás que subirlos a tu servidor de ETS2 vía FTP. Usa nuestra [guía de Acceso FTP](gameserver-ftpaccess.md) para ayudarte a conectar con tu servidor.

Una vez conectado, ve al directorio raíz principal **Euro Truck Simulator 2**. Sube ambos archivos de paquetes del servidor a esta carpeta. Si estos archivos ya existen, simplemente reemplázalos.

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
Cuando moddeas, los mods deben estar sincronizados entre el cliente y el servidor. Esto significa que si te conectas a un servidor con mods que no tienes, se te pedirá descargar los mods faltantes.
:::

Finalmente, reinicia tu servidor para activar e instalar automáticamente los mods. ¡Has instalado mods exitosamente en tu servidor de ETS2!

<InlineVoucher />