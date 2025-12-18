---
id: fivem-resolve-dbconnection
title: "FiveM: Soluciona problemas de conexión a la base de datos"
description: "Descubre cómo arreglar problemas de conexión a la base de datos en tu servidor FiveM y restaurar la comunicación sin interrupciones con tu base de datos → Aprende más ahora"
sidebar_label: Solucionar conexión BD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Oxmysql es un recurso open-source súper útil para FiveM que viene preinstalado en tu servidor FiveM, para permitir la comunicación entre el servidor y tu base de datos. Durante el desarrollo, puede que hagas cambios (como actualizar las credenciales de la base de datos) que requieran modificar la cadena de conexión de oxmysql. Ejemplo de problema de conexión a la base de datos:

![](https://screensaver01.zap-hosting.com/index.php/s/G5zACEEErfP4EHG/preview)

En esta guía, exploraremos cómo resolver problemas de conexión a la base de datos en tu servidor FiveM ajustando la cadena de conexión en el archivo de configuración de tu servidor.

<InlineVoucher />

## Método Automático

Primero, abre el panel web de tu servidor en la web y dirígete a la sección **Settings**.

![img](https://screensaver01.zap-hosting.com/index.php/s/nizHMSk7oXCsJS4/download)

En esta página, baja hasta el final donde encontrarás los botones de **Actions**. Simplemente usa el botón **Reconfigure MySQL connection string** y, una vez presionado, reinicia tu servidor para que los cambios se apliquen.

![](https://screensaver01.zap-hosting.com/index.php/s/eZoSBJcbCr7422K/preview)

Esto actualizará automáticamente tu archivo `server.cfg` con las credenciales actuales correctas, lo que significa que tu base de datos debería volver a funcionar sin problemas.

## Método Manual

Para resolverlo manualmente, necesitarás acceso a tu archivo `server.cfg` donde ajustarás la cadena de conexión con las credenciales que encuentres en el panel web. Inicia sesión en la interfaz de txAdmin y abre el editor CFG. Ahora, en otra pestaña, ve a la sección **Tools->Databases** donde podrás ver tus credenciales actuales.

![](https://screensaver01.zap-hosting.com/index.php/s/7JJgtatLzZRXCDM/preview)

En tu archivo `server.cfg`, añade la siguiente línea (o **reemplázala** si ya existe), completando los datos con tus propias credenciales de base de datos que encontraste en el panel web.

```
set mysql_connection_string "mysql://USER:PASSWORD@SERVER:3306/DATABASE"
```

![](https://screensaver01.zap-hosting.com/index.php/s/sf9sMJoZyJttHBE/preview)

Cuando termines, guarda el archivo y reinicia tu servidor.

## Conclusión

La próxima vez que arranques el servidor, tu base de datos debería estar accesible nuevamente y todo debería funcionar al 100%. ¡Has solucionado con éxito los problemas de conexión a la base de datos! Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂.

<InlineVoucher />