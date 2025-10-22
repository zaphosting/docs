---
id: minecraft-bungeecord-config
title: "Minecraft: Configuración del Servidor BungeeCord"
description: "Entiende cómo optimizar y gestionar la configuración de tu red de servidores BungeeCord para mejorar el rendimiento y la experiencia de los jugadores → Aprende más ahora"
sidebar_label: Propiedades del Servidor
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ¿Para qué necesito una configuración de BungeeCord?

BungeeCord es la gestión de un conjunto de servidores conectados a través de un servidor proxy (servidor BungeeCord). Para personalizar la red de estos servidores, se debe editar el archivo *config.yml*. En esta página aprenderás el significado exacto de cada ajuste y obtendrás información adicional sobre el impacto en los sub-servidores como PaperSpigot y Bukkit.

<InlineVoucher />

## Configuraciones

### forge_support

El valor puede ser false o true. Si lo configuras en true, los jugadores podrán entrar al servidor con un cliente Forge (pensado para modpacks). Si lo pones en false, el servidor negará estas conexiones.

### player_limit

Este valor indica cuántos jugadores pueden conectarse al servidor al mismo tiempo. En comparación con el valor *max_players* de los listeners, este valor es la determinación interna y absoluta del número total de jugadores.

### permissions

En esta sección se pueden asignar ciertos permisos a diferentes grupos. Estos son **solo permisos de BungeeCord** y no, por ejemplo, permisos de Spigot/Bukkit.
La sintaxis y la indentación (en forma de 2 espacios) son importantes:
```
permissions:
  GroupName:
  - Permission.One
  - Permission.Two
```

### timeout

Este número indica el tiempo máximo que el servidor puede no enviar señales a los jugadores antes de que se cierre y corte todas las conexiones. Por defecto, este valor está en 30000, lo que corresponde a un tiempo máximo de respuesta de 30 segundos.

### log_commands

El valor puede ser false o true. Si lo configuras en true, se escribirá un mensaje en la consola cuando un jugador ejecute un comando de BungeeCord. Si lo pones en false, este mensaje no se mostrará.

### network_compression_threshold

Esto establece el tamaño de los paquetes enviados a los jugadores. Un valor menor que el predeterminado *256*, como 128, puede mejorar la conexión para usuarios más lejanos. Sin embargo, esto también aumentará mucho el uso de CPU, por lo que cambiar este valor debe hacerse con precaución.

### online_mode

El valor puede ser false o true. Si lo configuras en true, solo los jugadores que hayan comprado Minecraft podrán acceder al servidor. Si lo pones en false, los jugadores "cracked" también podrán acceder, ya que no habrá comunicación con el servidor de Mojang.
**Importante:** Si quieres que los jugadores cracked puedan jugar en tu servidor, deberías usar un plugin de autorización, de lo contrario otros jugadores podrían suplantarte y obtener privilegios de administrador.

### disabled_commands

Aquí puedes listar comandos que deberían estar deshabilitados y no ejecutables en toda la red. Esta restricción aplica para todos los jugadores de la red.

### servers

Esta lista muestra todos los sub-servidores de tu red. Si falta un servidor aquí, no estará integrado en tu sistema de servidores.
La sintaxis y la indentación (en forma de 2 espacios) son importantes:
```
servers:
  ServerName:
    motd: '&1Just another BungeeCord - Forced Host'
    address: 0.0.0.0:2000
    restricted: false
```
El **motd** es el mensaje que aparece en tu lista de servidores cuando haces ping a un sub-servidor usando la función *forced_hosts*:

![](https://screensaver01.zap-hosting.com/index.php/s/E93qgyfkjfW7Mzf/preview)

En **address** introduces la IP correspondiente del sub-servidor. Si el valor **restricted** es true, el jugador debe tener el permiso *bungeecord.server.ServerName* para entrar al sub-servidor.

### listeners

Detrás de esta variable hay muchas opciones importantes para la conexión al servidor BungeeCord. Se pueden crear varios listeners para permitir la conexión a diferentes direcciones IP y puertos. Un listener consta de los siguientes valores de configuración:
* query_port - Este valor define el puerto del listener.
* motd - Aquí defines el mensaje que se muestra en la lista de servidores si el jugador ha entrado directamente al servidor BungeeCord en su lista.
* tab_list - Aquí puedes elegir entre los valores *GLOBAL_PING*, *GLOBAL* y *SERVER*. Con GLOBAL_PING se muestran todos los jugadores incluyendo sus pings en la lista de pestañas. Usando GLOBAL, también se muestran todos los jugadores en todos los servidores, pero sin el ping. Con SERVER solo se muestran los jugadores que están en el mismo sub-servidor. **Importante:** Esta función no funciona en versiones 1.8 y anteriores.
* query_enabled - El valor puede ser false o true. Si lo configuras en true, se verificará una consulta UDP durante el procedimiento DNS, que solo permite esas conexiones. Si lo pones en false, se pueden hacer otras conexiones redirigiendo al servidor.
* proxy_protocol - El valor puede ser false o true. Si lo configuras en true, puedes usar el protocolo HAProxy. Si lo pones en false, el protocolo será denegado.
* forced_hosts - Aquí puedes permitir conexiones directas individuales a sub-servidores. Sintaxis: `Tu.DominioPropio.net: ServerName`
* ping_passthrough - El valor puede ser false o true. Si lo configuras en true, verás el MOTD real del sub-servidor en lugar del MOTD de la configuración de BungeeCord cuando hagas ping al sub-servidor usando la función *forced_hosts*. Si lo pones en false, devuelve el valor de la variable *servers* especificada.
* priorities - Aquí puedes listar en orden descendente a qué servidor deberían conectarse los jugadores primero. Se saltará un servidor si está offline o no disponible.
* bind_local_address - El valor puede ser false o true. Si lo configuras en true, el sistema siempre intentará redirigir al jugador a servidores que escuchen en la misma IP que el servidor BungeeCord. Si lo pones en false, los sub-servidores pueden tener diferentes direcciones IP. Este valor solo es relevante para redes que ejecutan servidores en diferentes sistemas.
* host - Esta variable establece la IP y el puerto del host. Si se pone 0.0.0.0 como IP, se aceptan todas las direcciones IP y dominios que redirijan al host.
* max_players - El valor numérico determina el número máximo de jugadores de este listener.
* tab_size - Este valor establece el número máximo de jugadores que se muestran en la lista de pestañas.
* El valor puede ser false o true. Si lo configuras en true, el jugador siempre se conectará al servidor por defecto (el primer servidor disponible en *priorities*). Si lo pones en false, el jugador terminará en el sub-servidor donde estuvo la última vez. **Importante:** Si activas este valor, las conexiones vía *forced_hosts* también serán redirigidas al servidor por defecto.

### ip_forward

El valor puede ser false o true. Si lo configuras en true, los jugadores solo podrán acceder a la red directamente a través del servidor BungeeCord. Si lo pones en false, los jugadores también pueden conectarse directamente a un sub-servidor si conocen la IP y el puerto.
**Importante:** Si configuras *online_mode* en true, también deberías activar esta función para cerrar un agujero de seguridad.

### prevent_proxy_connections

El valor puede ser false o true. Si lo configuras en true, las direcciones IP de los jugadores conectados se enviarán al servidor de Mojang. Si lo pones en false, el servidor evitará el reenvío de IP a Mojang.
Este valor no tiene influencia real en la experiencia de juego.

### groups

En esta lista puedes asignar uno o más grupos a jugadores individuales. Esto les dará los permisos relacionados de BungeeCord definidos en *permissions*.
La sintaxis y la indentación (en forma de 2 espacios) son importantes:
```
groups:
  PlayerName:
  - GroupName
```

### connection_throttle

Este valor define cuánto tiempo debe esperar un jugador hasta poder intentar conectarse de nuevo al servidor. Por defecto está en 4000, lo que corresponde a un tiempo máximo de espera de 4 segundos.

### stats

Aquí BungeeCord inserta un código generado aleatoriamente. Se recomienda no cambiar este código, ya que ayuda a optimizar BungeeCord y corregir errores. Los datos de análisis se enviarán de forma anónima y cifrada a los desarrolladores.

### connection_throttle_limit

Este valor determina el número de intentos de conexión que tiene el jugador hasta que debe esperar el tiempo especificado en *connection_throttle* antes de poder intentar conectarse de nuevo.

<InlineVoucher />