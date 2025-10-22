---
id: eco-whitelist
title: "ECO: Activar Whitelist"
description: "Descubre cómo proteger tu servidor gestionando el acceso de jugadores con la función whitelist de ECO → Aprende más ahora"
sidebar_label: Whitelist
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

La whitelist de ECO te permite proteger tu servidor permitiendo que solo los jugadores seleccionados en la lista puedan conectarse al servidor.

<InlineVoucher />

### Activación (Configuración)

La activación de la whitelist se realiza automáticamente. Se activa tan pronto como al menos un jugador ha sido añadido a la lista. Los jugadores deben ser añadidos al archivo de configuración **Users.eco**. 

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
```



El campo **$values** contiene los SteamIDs de los jugadores que deben añadirse a la whitelist. Puedes encontrarlos abriendo primero tu perfil de Steam y luego haciendo clic derecho en cualquier parte del mismo. Ahí puedes copiar la URL de Steam del perfil. 



![](https://screensaver01.zap-hosting.com/index.php/s/BoY3ZapTkQfyKKX/preview)


Después abre una de las siguientes páginas y pega la URL de tu perfil allí: 

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/


![](https://screensaver01.zap-hosting.com/index.php/s/trfGtL9obL4WRkp/preview)

Esto te proporcionará información general así como el Steam ID de tu cuenta. En este caso solo necesitamos el SteamID64. El SteamID64 se establecerá en **$values**. Esto se verá así:

```
  "WhiteList": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
            "123456789",
            "otroSteamID"      
      ]
    }
```



### Activación (Chat)

Alternativamente, también es posible añadir más jugadores a la whitelist con permisos de administrador dentro del juego. Añadir jugadores a la whitelist se hace vía chat/consola con el siguiente comando:

```
/whitelist [jugador]
```



## Gestionar Whitelist

La gestión de la whitelist solo puede hacerse en el archivo de configuración **Users.eco**, porque no existe un comando del servidor para eliminar un jugador de la whitelist. Si quieres eliminar a un jugador, solo tienes que borrarlo del archivo de configuración. También es necesario reiniciar el servidor para que el cambio tenga efecto. 

<InlineVoucher />