---
id: beammp-addon-map
title: "BeamMP: Instalar Addon de Mapa"
description: "Descubre cómo mejorar tu servidor BeamMP con addons de mapas personalizados para una mejor experiencia multijugador → Aprende más ahora"
sidebar_label: Instalar Addon de Mapa
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

BeamNG.Drive tiene soporte nativo para mods y una comunidad enorme que te permite expandir y mejorar la jugabilidad con tus amigos. Como BeamMP es simplemente una modificación para multijugador, la mayoría de los addons de mapas deberían ser compatibles con tu servidor BeamMP. En esta guía, cubriremos el proceso para instalar y activar un addon de mapa personalizado en tu servidor BeamMP.

<InlineVoucher />

## Preparación

Para instalar un addon de mapa en tu servidor BeamMP, necesitas conectarte a él vía FTP. Si no estás familiarizado con esto, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md).

Antes de proceder con la instalación, también tendrás que buscar los addons de mapas que quieras instalar en tu servidor. Te recomendamos navegar por el [Foro oficial de BeamNG.Drive](https://www.beamng.com/resources/categories/terrains-levels-maps.9/) que contiene una enorme biblioteca de mods y addons de mapas creados por la comunidad.

:::tip
Como BeamMP es una modificación multijugador para BeamNG.Drive, la mayoría de los addons de mapas deberían funcionar en tu servidor BeamMP. Sin embargo, es posible que ciertos mapas específicos no funcionen como se espera, así que tendrás que probar cada mapa.
:::

## Instalación

Para empezar, asegúrate de haber descargado un addon de mapa que quieras añadir a tu servidor. Este debería estar en formato `.zip`.

### Selección del Nombre del Mapa

Antes de continuar con los siguientes pasos, es importante asegurarte de que estás usando el nombre correcto del mapa. El archivo `.zip` que descargaste normalmente debería tener el nombre correcto, pero no siempre es así, por eso es importante verificarlo.

Para hacerlo, abre el archivo `.zip` descargado. Dentro del archivo, localiza y abre el directorio `levels`, que contendrá el mapa real.

![](https://screensaver01.zap-hosting.com/index.php/s/8cGobQaKBJmexwK/preview)

Debes copiar el nombre específico de la carpeta del addon de mapa que encuentres en este directorio. Puedes hacerlo haciendo clic derecho, seleccionando la opción `Propiedades` y copiando el texto resaltado con `CTRL + C`.

![](https://screensaver01.zap-hosting.com/index.php/s/D4AnY5zbfHMgMwR/preview)

### Configuración del Mapa

Ahora que tienes el nombre del mapa, tendrás que ajustar el archivo de configuración y modificar un parámetro que contiene el mapa activo.

#### Desactivar la sobrescritura de configuración

Primero, necesitas desactivar la selección de mapa por defecto en los ajustes, ya que esta sobrescribiría tus cambios.

Esto se hace fácilmente navegando a la sección **Ajustes** en el panel web de tu servidor de juegos.

![](https://screensaver01.zap-hosting.com/index.php/s/SJ5L6APTFzyZKTC/preview)

Ahí desactivas la opción "Map" (Mapa).

![](https://screensaver01.zap-hosting.com/index.php/s/kHSybw6rw5jMaE3/preview)

Luego tienes que guardar los ajustes al final de la página.

#### Cambiar el mapa en la configuración

Para cambiar el mapa en la configuración primero debes ir a la sección **Configs** en tu panel web.

![](https://screensaver01.zap-hosting.com/index.php/s/sBj4CFQ3yKmMy8d/preview)

Busca y abre el archivo de configuración `ServerConfig.toml` y localiza la línea:
`Map = "/levels/gridmap_v2/info.json"`

![](https://screensaver01.zap-hosting.com/index.php/s/JQg3EzkszXDrGFQ/preview)

Después, reemplaza el valor por `Map = "/levels/[tu_nombre_de_mapa]/info.json"` usando el nombre del mapa que determinaste antes y guarda la configuración.

![](https://screensaver01.zap-hosting.com/index.php/s/oNKN34KTAxrSxYX/preview)

:::info
En casos raros, un mapa puede estar formateado de forma diferente. Si el mapa no funciona después de seguir todos los pasos, es posible que en lugar de `Map = "/levels/[tu_nombre_de_mapa]/info.json"`, necesites especificar esta ruta: `Map = "/levels/[tu_nombre_de_mapa]/[tu_nombre_de_mapa].mis"`
:::

:::tip
En cualquier momento, puedes usar los mapas predeterminados del juego simplemente activando la opción en los ajustes de nuevo y eligiendo uno de ellos:
![](https://screensaver01.zap-hosting.com/index.php/s/8SSceQj373GQ3sw/preview)
:::

### Subir el Mapa

Como paso final, tendrás que subir el archivo `.zip` que descargaste previamente con el mapa a tu servidor BeamMP vía FTP. De nuevo, usa nuestra guía de [Acceso vía FTP](gameserver-ftpaccess.md) si necesitas ayuda con esto.

Localiza la siguiente ruta en tu cliente FTP:
```
../beammp/Resources/Client
```

Simplemente arrastra y suelta el archivo `.zip` del addon de mapa en esta ubicación para subir el mapa a tu servidor. Con el archivo de configuración editado y los archivos del mapa subidos, tu addon de mapa debería estar listo para usarse.

## Conclusión

Después de seguir todos los pasos, procede a reiniciar tu servidor BeamMP. Has instalado con éxito un addon de mapa en tu servidor de juegos BeamMP. Para cualquier pregunta o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />