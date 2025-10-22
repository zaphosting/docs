---
id: fivem-esx-changemoneyicon
title: "FiveM: Cambiar el icono del dinero"
description: "Descubre cómo personalizar el icono del dinero en tu servidor para una experiencia en el juego más personalizada → Aprende más ahora"
sidebar_label: Cambiar Icono del Dinero
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guía Archivada
Este documento ha sido archivado. Los documentos se archivan si ya no son relevantes, son incorrectos o están desactualizados. Ha sido archivado por las siguientes razones:

**Razón**: El método de realización es para una versión antigua de ESX. Este enfoque no se puede usar para la versión actual de ESX, ya que la estructura ha cambiado. 
::::



<InlineVoucher />

## Conectar con FTP

Primero se debe configurar el [Acceso vía FTP](gameserver-ftpaccess.md).


Una vez configurado, ya puedes conectarte y abrir la carpeta del servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/pxEfN8qRjRJGWzN/preview)


Aquí abrimos el archivo `server.cfg` en la carpeta `server-data`.

## Editar Configuración

Ahora añadimos lo siguiente justo encima de la línea `start essentialmode`:

```Lua
set es_moneyIcon "$"
```

Aquí podemos reemplazar el $ por nuestro propio icono.

![](https://screensaver01.zap-hosting.com/index.php/s/gYapTyixG98AQo5/preview)


Después de guardar el archivo y reiniciar el servidor, el icono del dinero cambiará dentro del juego.

<InlineVoucher />