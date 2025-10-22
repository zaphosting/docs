---
id: minecraft-default-config
title: "Minecraft: Configuración del servidor"
description: "Descubre cómo optimizar la configuración de tu servidor de juegos Minecraft para rendimiento y estabilidad mientras personalizas la experiencia de juego → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ¿Qué puedo configurar en este archivo?

Minecraft ya viene con una pequeña configuración llamada *server.properties*.  
El servidor se puede configurar fundamentalmente aquí. Aquí te explicamos qué hace cada punto y qué debes tener en cuenta al hacer cambios. Algunas configuraciones se deben manejar con **cuidado**, ya que a veces afectan drásticamente el rendimiento del servidor, lo que puede causar, entre otras cosas, inestabilidad.

<InlineVoucher />

### view-distance

Con esta opción, el servidor define la *visibilidad máxima*. Independientemente de cómo esté configurada la visibilidad en el cliente, el servidor nunca enviará datos de chunks más allá de este valor. Aquí también puedes bajar el valor para proteger el rendimiento del servidor. La experiencia de juego no se ve afectada incluso con un valor de 5. No se recomiendan valores menores a 5, ya que en casos raros pueden causar problemas.  
**IMPORTANTE:** Bajo ninguna circunstancia (a menos que sea absolutamente necesario) se debe aumentar este valor, ya que podría causar graves problemas de rendimiento.

:::info
Esta configuración solo se aplica a servidores Vanilla o Forge.

Para Bukkit, Spigot y Paper Spigot, el valor debe configurarse en sus propios archivos.
:::

### max-build-height

Define hasta qué altura (coordenada Y) se puede construir o destruir. Valores mayores a 256 **no están permitidos** y el servidor los ignora. Esta configuración es útil si quieres limitar la altura máxima.

### server-ip

Si tienes varias IPs contratadas para tu servidor dedicado o VPS, aquí puedes especificar cuál usar. Si solo tienes una IP, este campo puede quedar vacío — lo mismo aplica para un servidor de juegos.

### level-seed

Por defecto, el generador de mundos crea un [seed](https://minecraft.fandom.com/wiki/Seed_(level_generation)) aleatorio, generando un mundo completamente random.  
Aquí puedes definir tu propio seed con **letras o números**, y el servidor generará el mundo correspondiente. No excedas los **32 caracteres**.

:::info
Existen generadores de seeds donde puedes configurar un mundo según tus ideas.

[Este](https://minecraft.tools/en/custom.php) es uno de los mejores y casi puede hacer de todo.
:::

### gamemode

Esta opción define el modo de juego por defecto en tu servidor. Se asigna a cada jugador en su primera visita y luego puede cambiarse con el comando [/gamemode](https://minecraft.fandom.com/wiki/Gameplay).

Si no sabes los IDs de los modos de juego, aquí tienes la lista:

| valor | Modo de juego |
|--|--|
| 0 | Supervivencia |
| 1 | Creativo |
| 2 | Aventura |
| 3 | Espectador |

### server-port

Puedes asignar un puerto fijo para que tu servidor sea accesible junto con la IP. Si quieres correr varios servidores en la misma máquina, cada uno debe tener un puerto diferente. Normalmente esta opción no se toca y solo es necesaria para redes BungeeCord.

### enable-command-block

Activa los [command blocks](https://minecraft.fandom.com/wiki/Command_Block) en el servidor. Si no los necesitas, ponlo en *false* porque hay métodos que pueden dañar o destruir el servidor usando command blocks.

### allow-nether

Activa o desactiva el Nether. Si está desactivado, no se podrá acceder al Nether vía portal. Sin embargo, plugins como [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/) aún permiten el acceso.

### enable-rcon

Permite ejecutar comandos desde cualquier lugar en la consola usando RCON. Requiere una contraseña y un puerto separado. Se configura aquí en el archivo. Recomendamos desactivar RCON para evitar accesos no autorizados.

### op-permission-level

Define el nivel OP estándar que se asigna a un nuevo operador. Los niveles y asignaciones por jugador están explicados [aquí](minecraft-addop.md).

### enable-query

El query permite que servicios externos, como una web, obtengan datos separados, como el número actual de jugadores o la lista exacta de jugadores conectados. Por ejemplo, puedes mostrar datos en una web con PHP. Algunas listas de servidores usan esta función para mostrar el servidor correctamente.

### prevent-proxy-connections

Determina si los jugadores pueden conectarse usando VPN o proxy. Las VPN suelen usarse para evitar baneos por IP, así que esta opción puede ser muy útil. A veces puede bloquear conexiones legítimas por error.

:::info
Para controlar mejor las conexiones VPN/proxy, vale la pena instalar un plugin.

Hay muchos plugins gratuitos, pero este (de pago) [plugin](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates) nos convenció más y protege tu servidor de ataques bot.
:::

### generator-settings

Como en el modo un jugador, el servidor puede crear un mundo con ciertas especificaciones. Similar a un seed, el mundo se configura antes y luego el servidor lo genera. Es un mundo random, pero no igual a cualquier otro.

Un código para un mapa plano sería así:

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

Si quieres usar un paquete de texturas especial en el servidor, pon aquí el **link directo de descarga**.  
El pack se descargará y activará automáticamente tras la confirmación del jugador.

### player-idle-timeout

Con esta opción puedes expulsar automáticamente a jugadores inactivos tras el número de segundos indicado. Muy útil si el servidor está lleno y quieres liberar espacio para jugadores activos.

### level-name

Por defecto, el mundo se llama "world". Aquí puedes definir otro nombre para el mundo. Si ya existe un mundo y cambias el nombre, se creará uno nuevo con ese nombre. El mundo viejo queda en la carpeta anterior.

### motd

Aquí puedes definir un mensaje que se muestra en la lista de servidores si está agregado. No se muestra en la conexión directa a menos que el cliente tenga mods especiales. Puedes usar todos los colores y formatos que Minecraft ofrece.

:::info
El MOTD se puede crear fácil y rápido con esta [herramienta](https://minecraft.tools/en/motd.php).
:::

### force-gamemode

Define si el jugador siempre debe entrar con el modo de juego estándar, sin importar en qué modo salió la última vez.

### hardcore

El modo hardcore hace que los jugadores sean baneados o puestos en modo espectador al morir. Si quieres usarlo, **debes crear un mundo nuevo** porque afecta la generación del mundo.

### white-list

Activa la [Whitelist](https://minecraft.fandom.com/wiki/Commands/whitelist), donde solo los jugadores en la lista pueden entrar. Los comandos para agregar o quitar jugadores están en esa página.

### broadcast-console-to-ops

Define si los operadores reciben notificaciones en el chat cuando se ejecutan comandos en el juego.

### pvp

Activa o desactiva el PVP en el servidor. Si está desactivado, los jugadores no pueden dañarse entre sí. No impide que, por ejemplo, se coloque lava para atacar.

### spawn-npcs

Si está activado, en las aldeas aparecerán aldeanos. Si está en *false*, no habrá aldeanos en todo el servidor. Útil si quieres limitar el comercio solo a jugadores y fortalecer la economía del servidor.

### generate-structures

Esta opción afecta al generador de mundos. Define si se generan estructuras como aldeas o templos.

### spawn-animals

Define si los animales aparecen en el servidor. Lista completa de animales [aquí](https://minecraft.fandom.com/wiki/Animal).

### snooper-enabled

Si está activado, el servidor envía datos anónimos a Mojang para mejorar el juego. No afecta el rendimiento del servidor.

### difficulty

Define la dificultad general del servidor. Por ejemplo, los mobs hacen más o menos daño. Más info y opciones [aquí](https://minecraft.fandom.com/wiki/Difficulty).

### network-compression-threshold

Define el tamaño a partir del cual los datos entre cliente y servidor se comprimen. Un valor pequeño como el estándar 256 hace que se intercambien datos unas 20 veces por segundo. Un valor de 512 es recomendable para aliviar el rendimiento sin efectos negativos. Nunca pongas un valor mayor a 1024.

**Esta configuración debe manejarse con cuidado, ya que valores incorrectos pueden causar problemas graves a los jugadores y daños irreparables al mundo.**

### level-type

Define el tipo de mundo que genera el servidor. Tras cambiar esta opción, **debes crear un mundo nuevo** para evitar cortes extraños donde se generen chunks nuevos.

| Valor | Significado |
|--|--|
| DEFAULT | Mundo normal con montañas, valles, aldeas, etc. |
| FLAT | Mundo completamente plano con solo aldeas |
| LARGEBIOMES | Similar al mundo normal, pero con biomas más grandes |
| AMPLIFIED | Similar al normal, pero con terreno muy accidentado y grandes diferencias de altura |
| BUFFET | Mundo buffet, donde las configuraciones se definen con *generator-settings* |

### spawn-monsters

Define si los monstruos aparecen en el servidor. Lista completa de monstruos [aquí](https://minecraft.fandom.com/wiki/Mob).

### max-tick-time

Regula la duración máxima de un tick. El servidor asigna tareas a cada tick. Si un tick dura más de 60 segundos (por defecto), el servidor se detiene automáticamente.

En servidores Forge esto puede ser molesto porque los mods suelen exigir más tiempo. En ese caso, pon el valor en *-1* para desactivar la parada automática.

### max-players

Define la cantidad máxima de slots y jugadores que pueden estar en el servidor.

### enforce-whitelist

Con esta opción, los cambios en la whitelist se aplican directamente. Normalmente hay que recargar la whitelist para activarla.

### online-mode

Define si los jugadores pueden entrar sin cuenta premium. En servidores públicos, esto puede permitir que alguien tome el nombre de un operador y obtenga permisos sin autorización. Para evitarlo, instala urgentemente un plugin de contraseña en servidores con soporte para plugins como Spigot.

### allow-flight

Activa o desactiva el AntiCheat propio de Minecraft para vuelos. Muchos hack clients permiten volar sin permiso.

:::info
¡Pero siempre recomendamos instalar un AntiCheat en forma de plugin!
:::

### function-permission-level

Define el nivel OP necesario para ejecutar comandos. En nivel 4, por ejemplo, pueden detener el servidor o banear jugadores.

<InlineVoucher />