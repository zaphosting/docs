---
id: minecraft-commands
title: "Minecraft: Comandos Generales del Servidor"
description: "Descubre cómo usar comandos de Minecraft para mejorar la jugabilidad y gestionar funciones de forma efectiva → Aprende más ahora"
sidebar_label: Comandos generales
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

### ¿Qué son los comandos?

Los comandos se pueden usar en Minecraft para realizar funciones adicionales o especiales. Minecraft ya incluye más de **100 comandos** sin necesidad de modificaciones, que se pueden usar para activar, gestionar o ejecutar una gran variedad de funciones.

En este artículo de nuestra documentación profundizaremos en los comandos más importantes, que se usan y necesitan muy a menudo.
Si un comando no está listado aquí, la [Minecraft-Wiki oficial](https://minecraft-de.gamepedia.com/) es muy útil, porque cada parte (incluyendo todos los comandos) está explicada en detalle.

<InlineVoucher />

### Uso

Cada comando siempre empieza con una "/". Así que si quieres usar un comando, tienes que abrir el chat en el juego y escribir primero la "/", luego puedes escribir el comando en sí. Al presionar la tecla TAB se muestra una vista previa de todos los comandos disponibles. Con esto, los comandos también se pueden completar rápida y fácilmente de forma automática, como en las búsquedas en Internet.

:::info
Si vas a ejecutar comandos desde la consola, la "/" no es necesaria y debe eliminarse.

Este carácter solo se usa para distinguir entre un mensaje normal de chat o un comando dentro del juego.
:::

### Derechos / Permisos

Para poder usar comandos, se requieren los derechos necesarios. En Minecraft-Vanilla o Forge no existe un sistema real de permisos que pueda ser usado por plugins como en Spigot. Aquí solo se puede usar el sistema de niveles de derechos OP. Aquí puedes encontrar un tutorial sobre el sistema de derechos OP:  [Permisos OP](minecraft-addop.md)

Si se ha instalado un sistema de permisos y se desea asignar derechos a ciertos comandos de Minecraft, los permisos respectivos se pueden asignar como se describe a continuación.

:::info
La sintaxis de los permisos para cada comando es siempre la misma y se puede ajustar en consecuencia.

Si quieres asignar permisos para el comando Locate como ejemplo, se deben establecer los siguientes permisos: ``minecraft.command.locate``
:::



## Comandos

### /tp

Con el comando **/tp**, los administradores pueden teletransportarse a otros jugadores o incluso teletransportar a un jugador a otro jugador objetivo.
El comando también se puede usar para teletransportar mobs o para teletransportarse a uno mismo a una ubicación introduciendo coordenadas como ejemplo. Más detalles a continuación.

**Ejemplos:**

``/tp PlayerA``

Teletransporta al ejecutor del comando a otro jugador.

``/tp PlayerA PlayerB``

Teletransporta a *PlayerA* a *PlayerB*. No importa quién ejecute el comando, los jugadores especificados son los que se teletransportan.
Si el ejecutor del comando es *PlayerB*, *PlayerA* se teletransportaría a sí mismo.

``/tp -100 75 985``

El ejecutor del comando se teletransporta a las coordenadas especificadas.
Al especificar un jugador delante de las coordenadas (``/tp PlayerA -100 75 985``), el comando teletransportaría a ese jugador en lugar de teletransportarse a sí mismo.

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

Te teletransporta a la vaca más cercana dentro de un radio de 10 bloques.
``@s`` también puede ser reemplazado por un jugador como *PlayerA*, lo que teletransportaría a ese jugador.

### /locate

Con el comando **/locate** es posible obtener las coordenadas del edificio que buscas, como una aldea de aldeanos.

**Ejemplos:**

``/locate fortress``

Encuentra y muestra la posición de la fortaleza del Nether más cercana cuando estás en el Nether.

``/locate village``

Encuentra y muestra la posición de la misma forma que para fortalezas del Nether, pero en este caso para una aldea de aldeanos.

### /worldborder

Con este comando se puede crear un borde mundial dentro del mundo actual. Esto impide que los jugadores exploren el mundo más allá del límite especificado con este comando.

**Ejemplos:**

``/worldborder center 0 0``

Esto establece el punto central del mundo en las coordenadas 0;0, desde donde se calcula y establece el radio.

``/worldborder set 16000``

Establece el límite a 16,000x16,000 bloques. Esto sería un radio de 8,000 bloques en cada dirección.

### /effect

Esto permite dar efectos de poción normales a jugadores (o incluso entidades).
Algunos efectos solo se pueden obtener usando comandos, como el efecto de suerte, que aún no tiene función asignada.

:::info
El comando ha cambiado a lo largo de las versiones y ha sido ampliado y modificado.

Los ejemplos de comandos mostrados a continuación son de la versión más reciente y por eso pueden verse diferentes en versiones antiguas.
:::

**Ejemplos:**

``/effect give PlayerA minecraft:speed``

Esto dará al jugador *PlayerA* un efecto de velocidad de nivel **1**.

### /gamerule

Este comando se usa para cambiar configuraciones especiales en un mundo o para activar/desactivar funciones especiales.
Por ejemplo, como se muestra en el ejemplo a continuación, se puede activar que los jugadores mantengan su inventario en caso de muerte.

**Ejemplos:**

``/gamerule keepInventory true``

Esta es una configuración para el mundo que permite a los jugadores conservar su inventario (incluida la experiencia) en caso de muerte.

``/gamerule mobGriefing false``

Este comando se usa para definir si los monstruos como un Creeper pueden causar daño al mundo.

### /save-all

El servidor guarda el mundo cada 5 minutos y escribe los datos en disco.
Con este comando el mundo se guarda inmediatamente y el contador para el guardado automático se reinicia a 5 minutos.

### /tps

Este comando se usa para comprobar los TPS (ticks por segundo) en Spigot y Paper Spigot.
Los TPS dan información sobre el rendimiento del servidor. El máximo y mejor TPS que el servidor puede alcanzar es 20.
Los TPS muestran los últimos 60 segundos, los dos valores siguientes son el promedio de 5 y 15 minutos.

### /ban

Este comando se usa para excluir a un jugador del servidor, de modo que el jugador ya no pueda entrar bajo ninguna circunstancia. La cuenta del jugador es baneada basándose en su UUID.

:::info
En servidores con modo online desactivado, los jugadores pueden cambiar sus nombres y recuperar el acceso. En ese caso, un baneo por IP mediante plugins sería la mejor solución.
:::

**Ejemplos:**

``/ban PlayerA``

En este ejemplo el jugador *PlayerA* es baneado del servidor.

``/ban @a``

Al ejecutar este comando, todos los jugadores actuales en el servidor son baneados. Los administradores con privilegios OP no se ven afectados y permanecen en el servidor.

### /pardon

Con este comando es posible desbanear (como se describió un punto arriba) para que el jugador pueda volver a entrar al servidor.

**Ejemplos:**

``/pardon PlayerA``

El jugador *PlayerA* será removido de la lista de baneados y podrá volver a entrar al servidor.

### /kick

Este comando cierra la conexión entre el servidor y el jugador especificado. Esto obliga al jugador a salir del servidor, pero aún puede reconectarse.

**Ejemplos:**

``/kick PlayerA``

Esto expulsa al jugador *PlayerA* del servidor con el mensaje "Kicked by an operator".

``/kick PlayerA Reason``

Esto expulsa al jugador *PlayerA* del servidor con el mensaje "Reason".

<InlineVoucher />