---
id: factorio-whitelist
title: "Factorio: Lista blanca"
description: "Información sobre cómo poner en lista blanca tu servidor de juegos Factorio en ZAP-Hosting → Aprende más ahora"
sidebar_label: Lista blanca
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es una lista de acceso que restringe el acceso al servidor solo a cuentas de Factorio aprobadas. En la mayoría de los servidores alojados, la lista blanca se activa tan pronto como se añade al menos un jugador, y se guarda en un archivo `server-whitelist.json`.

<InlineVoucher />

## Activar la lista blanca

Abre la Consola en vivo en la gestión del servidor de juegos de ZAP-Hosting y añade el primer jugador a la lista blanca. Añadir el primer nombre normalmente activa la lista blanca de inmediato.

```text
/whitelist add PlayerName
```

Si tu host tiene un comando explícito para activar, también puedes ejecutarlo antes de añadir usuarios.

```text
/whitelist enable
```

Normalmente no es necesario reiniciar para que el cambio surta efecto, pero reiniciar una vez después de la configuración inicial asegura que el archivo de la lista blanca se escriba y cargue al iniciar.

## Gestionar jugadores en la lista blanca

Para añadir más jugadores, ejecuta el comando add de nuevo con su nombre de usuario de Factorio.

```text
/whitelist add AnotherPlayer
```

Para eliminar un jugador, usa el comando remove.

```text
/whitelist remove PlayerName
```

Para mostrar la lista blanca actual, usa el comando get.

```text
/whitelist get
```

## Verificar el funcionamiento de la lista blanca

Después de añadir al menos un jugador, intenta unirte con una cuenta que no esté en la lista. La conexión debería ser rechazada. Luego únete con una cuenta en la lista blanca para confirmar que funciona.

Si el servidor sigue permitiendo a todos, verifica que los comandos se ejecutaron en el servidor correcto y reinicia una vez para confirmar que el archivo de la lista blanca se carga al iniciar.

## Conclusión

Si seguiste correctamente todos los pasos anteriores, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso sigue sin funcionar como esperas, reinicia el servidor una vez y revisa el archivo o la salida de comandos para confirmar que el cambio se aplicó.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />