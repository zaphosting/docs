---
id: redm-deletecache
title: "RedM: Vaciar Caché"
description: "Descubre cómo limpiar la caché de tu servidor de RedM mejora el rendimiento y soluciona errores para una experiencia de juego más fluida → Aprende más ahora"
sidebar_label: Borrar Caché
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

Vaciar la caché en un servidor de RedM asegura que los archivos almacenados temporalmente sean eliminados. Esto obliga al servidor a descargar o crear todos los archivos necesarios nuevamente la próxima vez que se inicie. Esto ayuda a eliminar datos obsoletos o corruptos, lo que puede solucionar problemas de rendimiento, errores en scripts, caídas o problemas al cargar el mundo del juego.

<InlineVoucher />

## Método sencillo

Borrar la caché en tu servidor de juegos RedM es realmente fácil. Primero, entra en el panel web de tu servidor de juegos. Localiza y abre la sección **Configuración** en el panel web de tu servidor.

![img](https://screensaver01.zap-hosting.com/index.php/s/qAiDSjC7jjmAq5B/download)



Luego, baja hasta el final de la página para encontrar varios botones bajo la subsección **Acciones**. Aquí, pulsa el botón **Borrar archivos de caché** para limpiar la caché de tu servidor de juegos.

![img](https://screensaver01.zap-hosting.com/index.php/s/CW8HcxLbNyrw3Qy/download)

:::warning 
Esto reiniciará tu servidor inmediatamente para borrar los archivos de caché, así que asegúrate de estar preparado para ello.
:::


## Método alternativo

Primero, necesitas conectarte a tu servidor usando FTP. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a la [guía de acceso FTP](gameserver-ftpaccess.md). En el siguiente paso, tienes que encontrar la carpeta de caché y eliminarla. Sigue esta ruta `/gXXXXXX/redm-txadmin/server-data/cache` para acceder a la carpeta de caché.

![img](https://screensaver01.zap-hosting.com/index.php/s/BkcqxjZ2dDeeMK2/download)

Ahora simplemente tienes que vaciar la caché. Para hacerlo, haz clic en la carpeta **Cache** y luego en **Archivos**. Ahora selecciona todas las carpetas que estén dentro de la carpeta **Cache** y elimínalas.

![img](https://screensaver01.zap-hosting.com/index.php/s/sb9Ttc2gEWwAzRP/download)

Por último, reinicia tu servidor de RedM para que los cambios tengan efecto. Cuando el servidor se reinicie, volverá a crear la caché.



## Conclusión

Si has seguido todos los pasos, habrás vaciado correctamente la caché de tu servidor. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />