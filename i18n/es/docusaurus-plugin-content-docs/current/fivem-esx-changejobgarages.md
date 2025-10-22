---
id: fivem-esx-changejobgarages
title: "FiveM: Garajes de Trabajo - Añadir Coches"
description: "Descubre cómo personalizar y ampliar los garajes de trabajo con coches adicionales para mejorar tu experiencia de juego → Aprende más ahora"
sidebar_label: Añadir Coches a Garajes de Trabajo
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

¿Quieres cambiar o ampliar los coches disponibles en tus garajes de trabajo? ¡Aquí te explicamos cómo hacerlo y qué pasos debes seguir!

<InlineVoucher />



## Configuración

Los coches adicionales se añaden a los garajes de trabajo vía FTP. Para ello, conéctate a tu servidor de juegos mediante FTP. Si aún no sabes cómo usar FTP, echa un vistazo a nuestra [guía de acceso FTP](gameserver-ftpaccess.md).

Una vez conectado por FTP, navega hasta la carpeta del recurso ESX y abre la carpeta esx_addons. La estructura de carpetas debería ser algo así: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

Ahora selecciona, por ejemplo, el trabajo de Ambulancia o Policía y abre el archivo de configuración `config.lua` dentro de los recursos.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)



En el archivo de configuración, la sección `Config.AuthorizedVehicles` debe ser ajustada. Puedes buscarla con la función de búsqueda y luego modificarla o ampliarla según tus deseos:

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
Asegúrate de que haya una coma al final de la línea anterior cuando añadas nuevos vehículos, si no podrían surgir problemas.
:::



## Conclusión

Si has seguido todos los pasos, ahora deberías haber personalizado o ampliado con éxito el garaje de tus trabajos. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para echarte una mano! 🙂

<InlineVoucher />