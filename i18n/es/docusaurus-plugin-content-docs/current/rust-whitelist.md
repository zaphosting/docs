---
id: rust-whitelist
title: "Rust: Lista blanca"
description: "Información sobre cómo poner en lista blanca tu servidor de Rust en ZAP-Hosting → Aprende más ahora"
sidebar_label: Lista blanca
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Una lista blanca es un mecanismo de control de acceso que limita quién puede unirse a tu servidor. Los servidores dedicados de Rust no incluyen una función de lista blanca integrada, por lo que el enfoque común usado por los proveedores de alquiler de servidores es instalar uMod Oxide y un plugin de lista blanca que bloquea las conexiones a menos que un jugador esté explícitamente autorizado.

<InlineVoucher />


## Activar la lista blanca

Conéctate a tu servidor vía FTP e instala uMod Oxide si aún no está presente. Después de instalar uMod, sube el archivo del plugin de lista blanca `Whitelist.cs` a la carpeta de plugins, comúnmente `oxide/plugins/Whitelist.cs`.

Una vez que el plugin esté en su lugar, reinicia el servidor o recarga los plugins para que se cargue. El plugin de lista blanca generalmente funciona requiriendo un permiso específico antes de que un jugador pueda conectarse.

## Gestionar jugadores en lista blanca

Abre la Consola en Vivo en el panel de gestión del servidor de juegos de ZAP-Hosting y otorga el permiso de lista blanca a un jugador usando su SteamID64.

```text
oxide.grant user 76561198000000000 whitelist.allow
```

Para revocar el acceso, elimina el permiso.

```text
oxide.revoke user 76561198000000000 whitelist.allow
```

Para verificar qué permisos tiene un usuario, consulta sus permisos.

```text
oxide.show user 76561198000000000
```

## Verificar el funcionamiento de la lista blanca

Intenta conectarte con una cuenta que no tenga el permiso de lista blanca. El plugin debería negar la conexión. Luego conéctate con una cuenta a la que le hayas otorgado `whitelist.allow` para confirmar el acceso.

Si todos aún pueden unirse, confirma que el plugin está cargado y que uMod está funcionando. Reiniciar el servidor después de subir el plugin es la forma más fiable de asegurarte de que está activo.

## Conclusión

Si seguiste correctamente todos los pasos anteriores, tu lista blanca ya está activa y puedes controlar exactamente quién puede unirse al servidor. Si el acceso aún no funciona como esperas, reinicia el servidor una vez más y revisa el archivo o la salida de comandos para confirmar que el cambio se aplicó.

Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />