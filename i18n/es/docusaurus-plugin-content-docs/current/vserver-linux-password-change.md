---
id: vserver-linux-password-change
title: "VPS: Cambiar la contraseña root en servidor Linux"
description: "Descubre cómo cambiar y gestionar tu contraseña de servidor de forma segura vía interfaz web o consola para un mejor control de acceso → Aprende más ahora"
sidebar_label: Cambiar Contraseña
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Interfaz web

La contraseña se puede cambiar a través de nuestra interfaz web. Abre la página "Acceso y Seguridad", que encontrarás en la parte izquierda de la navegación.

![](https://screensaver01.zap-hosting.com/index.php/s/9nMFt4ZAGmQEHnZ/preview)

El campo para la contraseña root está ahí, donde puedes establecer la contraseña deseada.

:::info
Ten en cuenta que debe tener al menos 8 caracteres y contener letras mayúsculas y minúsculas (a-z/A-Z), números (1-9) y caracteres especiales (!@=#$%&-?_;:.,). Si no cumple con esto, no se aplicará al servidor.
:::

Después de ingresar la contraseña, aparecerá un mensaje emergente que puedes confirmar con "ok".

![](https://screensaver01.zap-hosting.com/index.php/s/sybJP9oeJKY2SLr/preview)

Si se cumplen todos los requisitos, el sistema confirmará que la contraseña se ha cambiado con éxito.

✅ La contraseña ha sido cambiada.

A partir de ahora, la contraseña podrá verse en nuestra interfaz web durante 3 horas. Después de eso, se eliminará por razones de seguridad. Para ver la contraseña, solo haz clic en el icono del ojo en "Contraseña".

![](https://screensaver01.zap-hosting.com/index.php/s/rFKrYA6en8Z9ypz/preview)

Luego aparecerá una ventana emergente donde se mostrará la contraseña.

## Consola del servidor

La contraseña también se puede cambiar vía Consola del servidor, no importa si accedes mediante Putty o consola serial.

:::info
Importante: Esta opción solo se puede usar si aún tienes acceso al servidor.
:::

Si estás dentro de la consola, puedes cambiar la contraseña con el comando "passwd". Después debes escribir la contraseña nuevamente para confirmarla. Si esto se hace y la contraseña coincide con la primera, la consola confirmará el cambio.

Si ambas contraseñas no son iguales, la consola cancelará la operación. En ese caso, debes ejecutar el comando "passwd" nuevamente.

:::info
Importante: Si cambias la contraseña vía Consola, no podrá verse durante 3 horas en nuestra interfaz web bajo Acceso y Seguridad.
:::

<InlineVoucher />