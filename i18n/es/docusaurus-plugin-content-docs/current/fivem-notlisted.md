---
id: fivem-notlisted
title: "FiveM: El servidor no aparece en la lista de servidores"
description: "Descubre cómo solucionar problemas de listado y asegúrate de que tu servidor aparezca correctamente en la lista → Aprende más ahora"
sidebar_label: Servidor no en la lista
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Si el servidor no aparece en la lista de servidores, esto puede deberse a varias razones. Si esta guía no soluciona el problema, te pedimos que contactes con nuestro [Soporte](https://zap-hosting.com/en/customer/support/).

<InlineVoucher />

## Error de configuración

A menudo son errores simples de configuración los que causan este problema. Primero debemos comprobar si nuestro servidor tiene deshabilitado el listado, para esto revisamos la línea `sv_master1`:

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
Esta línea **siempre** debe estar comentada con un #, si no es así, el servidor no se listará.
:::

También se debe revisar el nombre del servidor (`sv_hostname`):

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)

En este caso falta la comilla al final de la línea. Con algunos nombres de servidor también pueden surgir problemas por el formato, recomendamos eliminarlos en ese caso, por ejemplo [DE], caracteres especiales como ä, ü, ö.

## Recursos problemáticos

También es posible que algunos recursos impidan que el servidor se liste. En este caso recomendamos eliminar los últimos recursos instalados y luego dejar el servidor online por ~1h. En la mayoría de los casos debería volver a aparecer.

## Reinstalación

Si nada de esto ayuda, se recomienda una instalación limpia, esto restablecerá todos los archivos del servidor a los valores predeterminados.

:::info
Asegúrate de hacer una copia de seguridad antes de reinstalar, de lo contrario se perderán los datos del servidor.
:::

<InlineVoucher />