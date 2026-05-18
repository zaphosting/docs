---
id: rust-custom-map
title: "Rust: Usa un Mapa Personalizado en tu Servidor"
description: "Aprende a configurar y ejecutar un mapa personalizado en tu servidor de Rust usando la opción Level URL → Descubre más ahora"
sidebar_label: Mapa Personalizado
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los mapas personalizados permiten a los propietarios de servidores de Rust crear experiencias de juego únicas que van más allá de los mapas procedurales por defecto. Muchas comunidades usan mapas personalizados para introducir nuevos monumentos, terrenos modificados, eventos especiales o entornos completamente rediseñados.

Estos mapas suelen crearse con herramientas como **RustEdit** y se distribuyen a través de plataformas como **Lone Design**, **Codefling** o repositorios comunitarios de mapas. Una vez que tienes un archivo de mapa o un enlace de descarga, puedes configurarlo directamente en los ajustes de tu servidor.

<InlineVoucher />



## Preparación

Antes de configurar un mapa personalizado, necesitas una **URL válida de descarga del mapa**. Los mapas personalizados normalmente se alojan en plataformas de distribución de mapas o son proporcionados por los creadores de mapas.

La URL generalmente apunta a un archivo `.map` o a un paquete de mapa descargable. Asegúrate de que el enlace sea accesible públicamente para que el servidor de Rust pueda descargarlo durante el inicio. Ejemplo de URL de mapa:

```
https://example-map-host.com/maps/custommap.map
```



## Configuración

Para configurar un mapa personalizado en tu servidor de Rust, abre tu **panel de gestión del servidor de juegos** y ve a **Ajustes**.

Busca el campo de configuración llamado **Level URL**. Esta opción permite que el servidor descargue y cargue un mapa personalizado de Rust durante el inicio. Pega la URL de tu mapa personalizado en el campo **Level URL**. Por ejemplo:

```
https://example-map-host.com/maps/custommap.map
```

Una vez ingresada la URL, guarda los ajustes en el panel. Cuando el servidor se inicie, Rust descargará automáticamente el mapa desde la URL proporcionada y lo cargará en lugar de generar un mapa procedural.

Si tu mapa personalizado requiere parámetros adicionales de configuración (por ejemplo, semillas específicas o tamaños de mundo), normalmente estos son proporcionados por el creador del mapa y pueden necesitar añadirse también a la configuración del servidor.

Después de guardar la configuración, **reinicia el servidor** para que el mapa personalizado pueda descargarse y cargarse.



## Notas importantes

Los mapas personalizados deben ser compatibles con la versión del servidor de Rust que estás usando. Si el archivo del mapa está desactualizado o corrupto, el servidor podría no arrancar o volver a un mapa procedural.

Los mapas personalizados grandes también pueden aumentar el tiempo de inicio del servidor porque este debe descargar y preparar el mapa antes de que esté disponible para los jugadores.

Si los jugadores no pueden conectarse después de cambiar el mapa, asegúrate de que la URL del mapa sea correcta y accesible desde internet.



## Conclusión

¡Felicidades! Has configurado con éxito un mapa personalizado para tu servidor de Rust. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />