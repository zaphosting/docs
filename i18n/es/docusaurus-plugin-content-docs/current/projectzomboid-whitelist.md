---
id: projectzomboid-whitelist
title: "Project Zomboid: Lista blanca"
description: "Información sobre cómo poner en lista blanca tu servidor de juegos Project Zomboid en ZAP-Hosting → Aprende más ahora"
sidebar_label: Lista blanca
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es un modo de control de acceso que requiere que crees cuentas de usuario explícitamente antes de que puedan unirse. En Project Zomboid, esto se logra comúnmente desactivando el registro abierto en la configuración del servidor y luego agregando usuarios mediante comandos de consola.

<InlineVoucher />


## Activar la Lista Blanca

Conéctate a tu servidor vía FTP y abre el archivo de configuración de tu servidor. Normalmente se encuentra en `Zomboid/Server/` y lleva el nombre de tu servidor, por ejemplo `servertest.ini` o `<ServerName>.ini`. Localiza la opción `Open` y ponla en false.

```ini
Open=false
```

Guarda el archivo y reinicia el servidor. Con el registro abierto desactivado, solo las cuentas que crees podrán unirse.

## Gestionar Jugadores en la Lista Blanca

Abre la Consola en Vivo en el panel de gestión del servidor de juegos de ZAP-Hosting y crea cuentas para los jugadores permitidos. Usa el comando adduser con un nombre de usuario y contraseña.

```text
/adduser "username" "password"
```

Para quitar el acceso a un usuario, elimínalo de la lista blanca con el comando dedicado.

```text
/removeuserfromwhitelist "username"
```

Si antes permitías el registro abierto y quieres convertir las cuentas ya conectadas en entradas de la lista blanca, usa el comando que añade todos los usuarios conectados actualmente a la lista blanca.

```text
/addalltowhitelist
```

## Verificar el Funcionamiento de la Lista Blanca

Después de activar `Open=false`, un usuario nuevo que no esté añadido con `/adduser` no debería poder unirse. Prueba con una cuenta en lista blanca para confirmar el acceso.

Si usuarios no listados aún pueden unirse, confirma que editaste el archivo activo `<ServerName>.ini` y reiniciaste el servidor.

## Conclusión

Si seguiste correctamente todos los pasos anteriores, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso sigue sin funcionar como esperas, reinicia el servidor una vez más y revisa el archivo o la salida de comandos para confirmar que el cambio se aplicó.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />