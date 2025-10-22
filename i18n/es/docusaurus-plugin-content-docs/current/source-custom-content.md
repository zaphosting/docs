---
id: source-custom-content
title: Instalación de contenido personalizado y mods en servidores de juegos
description: "Descubre cómo el contenido personalizado mejora la experiencia en juegos Source como Counter-Strike y Garry's Mod con mapas, skins y sonidos → Aprende más ahora"
sidebar_label: Contenido Personalizado
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ¿Qué es el contenido personalizado?

Algunos juegos Source como Counter-Strike o Garry's Mod se han hecho famosos por su variedad. Todo esto fue posible gracias al soporte de plugins y **contenido personalizado**. A lo largo de los años se han desarrollado varios modos de juego, como Zombie Mod, Hide and Seek, Minijuegos, Jailbreak y muchos más.

![](https://screensaver01.zap-hosting.com/index.php/s/MxDRfHZDFRHEjog/preview)

<InlineVoucher />

Estos servidores suelen usar mapas, skins de jugador y sonidos creados por la comunidad. Para que los jugadores puedan usar o ver el contenido personalizado del servidor, primero deben descargarlo desde el servidor. Aquí hay dos opciones:

- FastDL
- Steam Workshop

Dependiendo del uso, una opción es más útil que la otra. Aquí tienes un resumen de las diferencias entre FastDL y Workshop:

|  Contenido Personalizado  | FastDL | Steam Workshop |
| :-----------------------: | :----: | :------------: |
|          Mapas            |   ✓    |       ✓        |
| Materiales/Modelos        |   ✓    |       ✗        |
|          Sonidos          |   ✓    |       ✗        |



## Configurar contenido personalizado



### FastDL

A continuación se explica la configuración del servidor FastDL usando uno de nuestros [productos de hosting web](https://zap-hosting.com/en/shop/product/webspace/). Sin embargo, también puedes usar cualquier otra opción que ofrezca un servidor web accesible públicamente. Para empezar con la configuración, abrimos el producto de hosting web y accedemos a la administración:

![](https://screensaver01.zap-hosting.com/index.php/s/JdmBxGiicrQTxDt/preview)



Una vez allí, abrimos el administrador de archivos y creamos las siguientes carpetas:

![](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)



Después, hay que autorizar el hosting web para que la descarga del contenido en el juego funcione correctamente:

![](https://screensaver01.zap-hosting.com/index.php/s/7xSDbPRW6MYomk4/preview)

:::info
¡Los permisos deben configurarse para todas las carpetas!
:::

Ahora se puede subir el contenido personalizado. Para ello, los archivos deben estar disponibles tanto en el servidor como en el FastDL (hosting web). En el servidor de juegos los archivos se suben descomprimidos y en el FastDL deben subirse comprimidos en bzip2. Se recomienda usar el programa 7Zip para esto.

Finalmente, solo queda especificar el servidor FastDL en el servidor de juegos. La configuración se hace vía el **server.cfg**. Para ello, hay que añadir los siguientes comandos al Config:

```
sv_allowdownload 1
sv_allowupload 1
sv_downloadurl "https://zapXXXXX-1.plesk08.zap-hosting.com" // Sustituye la URL por la URL de tu hosting web ZAP.
```

Tras reiniciar y conectarte al servidor, el contenido correspondiente debería descargarse. Esto también se puede comprobar en la consola del juego:

![](https://screensaver01.zap-hosting.com/index.php/s/Xbk5gSQAMQSK9Me/preview)



### Steam Workshop

A continuación se explica la configuración del Steam Workshop. Primero, hay que abrir la página del Steam Workshop. Para ello, selecciona el juego correspondiente en Steam y abre el workshop allí. En este caso tomamos como ejemplo [CS:GO](https://steamcommunity.com/workshop/browse/?appid=730&browsesort=trend&section=collections). Una vez allí, hacemos clic en el menú Browse y seleccionamos Collection:

![](https://screensaver01.zap-hosting.com/index.php/s/PaTrSqacw7733yB/preview)

Allí hacemos clic derecho en Collection y creamos la colección para el servidor de juegos:

![](https://screensaver01.zap-hosting.com/index.php/s/JZmsT6KexmteeJw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/99bEm45t48rCzAT/preview)

La colección se ha creado con éxito. Sin embargo, por defecto sigue vacía. Por eso ahora volvemos a abrir el workshop del juego y seleccionamos los objetos que queremos añadir:

![](https://screensaver01.zap-hosting.com/index.php/s/WpYrLbYESYjmmWa/preview)

Cuando termines de recopilar, tienes que volver a la colección, hacer clic derecho y seleccionar Copiar URL de la página. Se necesita el ID de la colección que aparece en la URL, que puede ser así:

...steamcommunity.com/sharedfiles/filedetails/?id=**2108505414**

Al final, esto debe añadirse en Steam Workshop en la administración de tu servidor de juegos:

![](https://screensaver01.zap-hosting.com/index.php/s/6gCM5rWoeBeg57M/preview)

<InlineVoucher />