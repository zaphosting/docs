---
id: spaceengineers-whitelist
title: "Space Engineers: Lista blanca"
description: Información sobre cómo poner en lista blanca tu servidor de Space Engineers desde ZAP-Hosting → Aprende más ahora"
sidebar_label: Lista blanca
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es una lista de acceso que restringe quién puede unirse a tu servidor. Space Engineers comúnmente usa una lista blanca basada en un grupo de Steam, donde solo los miembros de un grupo específico de Steam pueden conectarse.

<InlineVoucher />

## Activar la lista blanca

Crea un grupo de Steam para tu servidor y añade a los jugadores que quieres permitir. Luego conéctate a tu servidor vía FTP y abre `SpaceEngineers-Dedicated.cfg`.

Asegúrate de que el servidor esté configurado en modo privado y establece el ID del grupo al final de la configuración.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Reemplaza el ID del grupo con el ID de tu propio grupo de Steam. Guarda el archivo y reinicia el servidor.

## Gestionar jugadores en la lista blanca

Para añadir a alguien a la lista blanca, invítalo al grupo de Steam y asegúrate de que se haya unido. Podrá conectarse una vez que sea miembro del grupo.

Para eliminar a alguien, quítalo del grupo de Steam. Después de que ya no sea miembro, no podrá conectarse. Si alguna vez quieres cambiar la lista blanca a otro grupo, cambia el valor de `<GroupID>` y reinicia el servidor.

## Verificar el funcionamiento de la lista blanca

Después del reinicio, intenta conectarte con una cuenta de Steam que no esté en el grupo de Steam. El servidor debería rechazar la conexión. Luego prueba con una cuenta que sea miembro del grupo.

Si el acceso sigue abierto, confirma que el servidor está funcionando en modo privado y que la entrada `<GroupID>` está presente en el archivo activo `SpaceEngineers-Dedicated.cfg`.

## Conclusión

Si seguiste correctamente todos los pasos anteriores, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso aún no funciona como esperas, reinicia el servidor una vez más y revisa el archivo o la salida de comandos para confirmar que el cambio se aplicó.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡que está disponible todos los días para ayudarte! 🙂

<InlineVoucher />