---
id: csgo-configuration
title: "CSGO: Configuración del servidor"
description: "Descubre cómo configurar servidores de Counter-Strike para varios modos de juego y ajustes para optimizar la experiencia → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Guía Archivada
Este documento ha sido archivado. Los documentos se archivan si ya no son relevantes, son incorrectos o están desactualizados. Ha sido archivado por las siguientes razones:

Razón: CS:GO ya no se ofrece activamente ni se desarrolla. CS2 es el sucesor de CS:GO. Recomendamos cambiar a CS2.
::::



## Introducción

Los servidores de Counter-Strike pueden configurarse de muchas formas. Los ajustes básicos se configuran mediante el archivo **Server.cfg** y a través de la página de configuración en la interfaz web. La configuración avanzada se realiza mediante los archivos de configuración del modo de juego, como gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg, gamemode_demolition.cfg, etc.

En la configuración puedes elegir el modo de juego que quieres usar. Los comandos de esta configuración se cargan en consecuencia. Estos pueden gestionarse desde la administración del servidor de juegos o manualmente vía FTP en **gXXXXXX/csgo/csgo/cfg/**. 


<InlineVoucher />

## Configuración


### Configuración vía interfaz (Ajustes)

En la página de ajustes puedes modificar configuraciones básicas para el token GSL, tipo de juego/modo de juego, grupo de mapas, tickrate y más.  

![](https://screensaver01.zap-hosting.com/index.php/s/rfHJDH8e4mSQ4Mg/preview)



**Token GSL**

Los Tokens de Login para Servidores de Juegos (GSLTs) son un procedimiento que Steam implementó como medida de protección. Para ejecutar servidores de juegos de ciertos juegos de Steam (principalmente juegos Source) es necesario generar un token. Más información detallada aquí:

[GSL-Token](source-gsltoken.md)



**Tipo de juego**

Existen diferentes modos de juego. Aquí tienes una lista de todas las opciones disponibles:

- Classic Casual
- Classic Competitive
- Arms Race
- Demolition
- Deathmatch
- Wingman



**Grupo de mapas**

Los grupos de mapas son conjuntos de mapas que normalmente corresponden a una categoría determinada. Por defecto existen los grupos **mg_active, mg_armsrace, mg_demolition, mg_allclassic**. Opcionalmente puedes crear los tuyos propios. Esto debe añadirse en el archivo **Gamemodes_server.txt**. La estructura de un grupo de mapas es sencilla y se ve así:

```
{	 	 	 	 
 	"mg_meine_mapgroup"	 	 	 
 	{	 	 	 
 	 	"name"	"mg_meine_mapgroup"	 
 	 	"maps"	 	 
 	 	{	 	 
 	 	 	"de_map1"	""
 	 	 	"de_map2"	""
 	 	 	"de_map3"	""
 	 	 	"de_map4"	""
 	 	}	 	 
 	}	 	 	 
}
```



**Tickrate**

El tickrate determina la frecuencia con la que el servidor envía la posición de un jugador a los demás jugadores. Cuanto mayor sea el valor, mejor será la experiencia de juego. Los valores que se pueden configurar son: 33, 64, 100 y 128 (el mejor valor). 



**Mapa de inicio**

El mapa de inicio determina qué mapa se carga durante el proceso de arranque. Es importante que el nombre del mapa esté escrito completo y correctamente. La extensión del archivo no es necesaria. 



**Pingboost**

Pingboost es una forma de modificar la sensación del juego mediante varios métodos para lograr el ping más bajo posible.



### Configuración vía server.cfg

En el **server.cfg** puedes cambiar ajustes como el nombre del servidor, la contraseña rcon y la contraseña del servidor. 

![](https://screensaver01.zap-hosting.com/index.php/s/RRyRgMzwaQPTR8b/preview)



**hostname**

El nombre de host define el nombre del servidor. Este nombre se mostrará en la lista de servidores y en el marcador.



**rcon_password**

La contraseña rcon es necesaria para ejecutar comandos del servidor dentro del juego o mediante herramientas Rcon como HLSW. Se usa con los siguientes comandos:

```
rcon_password TuContraseña
rcon comando // Por ejemplo: rcon changelevel de_dust2
```



**sv_password**

Si quieres usar tu servidor de forma privada o solo quieres que ciertas personas tengan acceso, puedes establecer una contraseña para el servidor. Se te pedirá la contraseña al conectarte.



**sv_cheats**

Algunos comandos están protegidos y solo pueden usarse si los cheats están habilitados. El comando se activa o desactiva con el valor 0 (desactivado) o 1 (activado). Comandos protegidos incluyen, por ejemplo:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 y algunos más.



### Configuración específica del modo de juego

Como se describió al principio, puedes definir el modo de juego/tipo de juego que quieres usar en la interfaz en la página de ajustes. Luego debes ajustar tus configuraciones y modificar el archivo de configuración correspondiente. En los archivos de configuración del modo de juego puedes hacer cambios detallados en la jugabilidad, comportamiento de bots, etc.



#### Comandos para bots



**bot_chatter**
Este comando define qué pueden decir los bots en el juego. Puede configurarse en off, radio, minimal o normal.



**bot_difficulty**
Este comando define la dificultad de los bots. Los valores posibles son:  

- 0 - fácil
- 1 - normal
- 2 - difícil
- 3 - experto



**bot_quota**
Este comando define el número máximo de bots que puedes tener en tu servidor. El valor por defecto es 10.



**bot_quota_mode**
Este comando define el modo que controla la cantidad de bots. Las opciones son: normal, fill y match. Normal es comportamiento estándar. Fill llena el servidor con tantos bots como se haya configurado en "bot_quota". Match llena los slots de jugadores. Por ejemplo, si hay 3 jugadores conectados y se han configurado 10 bots, solo se usarán 7 bots.




#### Comandos de dinero

**cash_player_bomb_defused**
Define cuánto dinero gana un jugador por desactivar una bomba. No puedes dar más que el máximo permitido en el servidor.



**cash_player_bomb_planted**
Define cuánto dinero recibe un jugador por plantar la bomba.



**cash_player_damage_hostage**
Define cuánto dinero se resta o gana por herir a un rehén. Por defecto, el jugador pierde $30 cada vez que hiere a un rehén.



**cash_player_interact_with_hostage**
Define el dinero ganado o perdido por interactuar con un rehén.



**cash_player_killed_enemy_default**
Define cuánto dinero se gana o pierde al matar a un enemigo con un arma estándar.



**cash_player_killed_enemy_factor**
Define cuánto dinero se gana al matar a un enemigo con una de las armas principales (pistolas estándar, rifles principales como AK/M4, etc.).



**cash_player_killed_hostage**
Define cuánto dinero se gana o pierde al matar a un rehén.



**cash_player_killed_teammate**
Define cuánto dinero se gana o pierde al matar a un compañero de equipo.



**cash_player_rescued_hostage**
Define cuánto dinero se gana o pierde por rescatar con éxito a un rehén en el modo Rehén.



**cash_team_elimination_bomb_map**
Define cuánto dinero gana cada miembro del equipo si eliminan a los 5 enemigos en un mapa de bomba como Mirage o Dust II.



**cash_team_elimination_hostage_map_t**
Define cuánto dinero gana cada terrorista por ganar una ronda en un mapa de rehenes por eliminación.



**cash_team_elimination_hostage_map_ct**
Define cuánto dinero gana cada miembro del equipo CT si eliminan a los 5 terroristas en un mapa de rehenes.



**cash_team_hostage_alive**
Define cuánto dinero se gana o pierde si un rehén sobrevive la ronda. 



**cash_team_hostage_interaction**
Define cuánto dinero se gana o pierde por la interacción de un jugador con un rehén.



**cash_team_loser_bonus**
Define el dinero inicial que gana un equipo por perder una ronda. Este bono aumenta en pasos fijos, controlados por otro comando.



**cash_team_loser_bonus_consecutive_rounds**
Define cuánto dinero se incrementa por una racha de derrotas. Si este valor es $500 (configuración por defecto), significa que cada ronda consecutiva perdida da $500 más que la anterior. Esto aplica hasta 5 rondas consecutivas.



**cash_team_planted_bomb_but_defused**
Define cuánto dinero gana el equipo Terrorista por plantar una bomba que finalmente es desactivada. Esto **se acumula junto con el bono por perder la ronda**. El valor por defecto es $800.



**cash_team_rescued_hostage**
Define cuánto dinero gana **todo el equipo** cuando un jugador rescata a un rehén.



**cash_team_terrorist_win_bomb**
Define cuánto dinero gana cada jugador del equipo Terrorista al ganar una ronda por la explosión de la bomba.



**cash_team_win_by_defusing_bomb**
Define cuánto dinero gana el equipo CT al ganar una ronda desactivando la bomba.



**cash_team_win_by_hostage_rescue**
Este comando cheat define cuánto dinero ganan los miembros del equipo al ganar una ronda rescatando a un rehén.



**cash_team_win_by_time_running_out_hostage**
Define cuánto dinero gana el equipo que protege a los rehenes si ganan la ronda porque no permiten que rescaten a ningún rehén dentro del tiempo límite.



**cash_team_win_by_time_running_out_bomb**
Define cuánto dinero ganan los jugadores de los contra-terroristas al ganar una ronda cuando se acaba el tiempo. Esto significa que los terroristas no han plantado la bomba ni eliminado a todos los contra-terroristas en el tiempo requerido.



#### Comandos de jugabilidad



**mp_afterroundmoney**
Define cuánto dinero recibe cada jugador de cada equipo al final de una ronda, independientemente de si ganan o pierden. El valor por defecto es 0 (el bono por victoria/derrota se configura con otro comando).



**mp_buytime**
Define el tiempo (en segundos) que los jugadores tienen para comprar equipo después de que empieza la ronda. 



**mp_buy_anywhere**
Define si los jugadores pueden acceder al menú de compra fuera de la zona de compra. Ten en cuenta que el tiempo de compra sigue aplicando. 



**mp_death_drop_defuser**
Define si los kits de desactivación se sueltan al morir o no. 



**mp_death_drop_grenade**
Define qué granada (si alguna) se suelta cuando un jugador muere:

- Valor: 0 - No soltar granadas al morir
- Valor: 1 - Soltar la granada más valiosa al morir



**mp_death_drop_gun**
Define qué arma se suelta cuando un jugador muere. La configuración por defecto es 1 (la mejor). Opciones:

- Valor: 0 - No soltar armas al morir
- Valor: 1 - Soltar el mejor arma al morir
- Valor: 2 - Si el jugador tiene un arma en la mano al morir, soltar esa; si no, soltar su arma más valiosa



**mp_defuser_allocation**
Define si los jugadores reciben un kit de desactivación gratis al inicio de la ronda y quién lo recibe:

- Valor: 1 - No kits gratis
- Valor: 2 - Jugadores aleatorios reciben un kit
- Valor: 3 - Todos los jugadores reciben un kit



**mp_force_pick_time** 

Define la duración en segundos que un jugador tiene para elegir equipo. Tras ese tiempo, se asigna un equipo automáticamente. El valor por defecto es 15 segundos.



**mp_forcecamera**

Define el alcance que tienen los espectadores (a quién pueden ver cuando mueren). Opciones:

- Valor: 0 - Jugadores muertos pueden ver a todos los jugadores
- Valor: 1 - Jugadores muertos pueden ver solo a sus compañeros
- Valor: 2 - La pantalla se pone negra hasta la siguiente ronda.



**mp_free_armor**

Define si un jugador recibe armadura y casco gratis al inicio de la ronda:

- Valor: 0 - Desactivado
- Valor: 1 - Activado



**mp_freezetime**

Define cuánto tiempo están congelados los jugadores al inicio de cada ronda. Este tiempo permite comprar equipo y planear tácticas antes de que empiece la ronda. Por defecto es 15 segundos.



**mp_friendlyfire**

Define si el fuego amigo está activado o desactivado. Cuando está activado, los jugadores pueden dañar a sus compañeros. La configuración por defecto depende del modo de juego. En modos competitivos está activado, en casual no.



**mp_win_panel_display_time**

Define el tiempo (en segundos) que se muestra el marcador entre rondas. Por defecto es 3 segundos.



**mp_respawn_immunitytime**

Define cuántos segundos de inmunidad tienen los jugadores tras reaparecer. Se usa en el modo Deathmatch.



**mp_halftime**

Define si los equipos cambian al medio tiempo o no. El valor por defecto es 1.



**mp_maxmoney**

Define la cantidad máxima de dinero que puede tener un jugador.



**mp_maxrounds**

Define la cantidad máxima de rondas que el servidor jugará.



**mp_roundtime**

Define la duración máxima en minutos de una ronda antes de que se gane o pierda. Si la ronda termina tras este tiempo, la victoria se otorga a los contra-terroristas. Los segundos se indican en decimales, 1.92 = 1m55s.



**mp_solid_teammates**

Define si puedes chocar con tus compañeros o no:

- Valor: 0 - Colisión desactivada
- Valor: 1 - Colisión activada



**mp_startmoney**

Define cuánto dinero recibe un jugador al inicio de una mitad. El valor por defecto es $800.



**mp_timelimit**

Define la duración máxima de cada partida en minutos. Por defecto está desactivado (0).



**mp_warmuptime**

Define cuánto dura el periodo de calentamiento antes de que empiece la partida. El tiempo se define en segundos.



**sv_allow_votes**

Define si se permiten votaciones (por ejemplo, para pedir un timeout):

- Valor: 0 - Desactivado
- Valor: 1 - Activado



**sv_infinite_ammo**

Define si los jugadores tienen munición ilimitada o no:

- Valor: 1 - Munición infinita que se puede disparar sin recargar.
- Valor: 2 - Número infinito de cargadores, pero hay que recargar cuando se vacían.



**ammo_grenade_limit_flashbang**

Define cuántas granadas cegadoras puede llevar un jugador.



**ammo_grenade_limit_total**

Define cuántas granadas puede llevar un jugador en total.





### Configuración Esport-Ready (Configs ESL)

Si quieres usar el servidor para e-sports, vale la pena subir las configs que proporciona ESL. Puedes descargarlas desde la web oficial de ESL: [Descargar](https://play.eslgaming.com/download/26251762/)

Las configs deben subirse al directorio **cfg** y pueden ejecutarse en el juego con los siguientes comandos:

```
rcon_password TuContraseña // Login vía rcon para ejecutar comandos rcon
rcon exec esl5on5
```

¡Después de eso, se cargarán todos los valores de comandos ESL y el juego puede comenzar!

<InlineVoucher />