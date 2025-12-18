---
id: gmod-ttt
title: "Garry's Mod: Configuración"
description: "Descubre cómo optimizar la configuración de tu servidor TTT para mejorar la jugabilidad y la gestión de rondas → Aprende más ahora"
sidebar_label: Configuración Garry's Mod TTT
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## La configuración de tu servidor TTT

**Importante: Apaga tu servidor para realizar todos los cambios.**

La configuración básica se puede hacer fácilmente en nuestro panel web, por ejemplo, nombre del servidor, contraseña Rcon y contraseña del servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

Cuando hayas configurado el servidor a tu gusto, podemos proceder a configurar los ajustes específicos del modo de juego TTT. Puedes usar para eso nuestro panel web o modificar el archivo vía FTP.

Puedes encontrar el editor de configuración en nuestro panel web en la pestaña "Configs", abre ahí el archivo server.cfg.
En nuestro panel web encontrarás esta función bajo "Configs", donde abres el server.cfg

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

Ahí encontrarás los valores para modificar la jugabilidad en tu servidor TTT, las variables importantes explicadas rápido:

<InlineVoucher />

## Rondas y cambio de mapa.

ttt_round_limit  
:::info  
Número máximo de rondas antes de que se cambie el mapa. (Por defecto: 6)  
:::

ttt_time_limit_minutes  
:::info  
Número máximo de minutos antes de que se cambie el mapa o se inicie una votación. (Por defecto: 75)  
:::

ttt_postround_dm  
:::info  
Activa el daño después de que termina una ronda. Las muertes no se registran para puntuación, así que es un todos contra todos. (Por defecto: 1)  
:::

ttt_ragdoll_pinning_innocents  
:::info  
Permite que jugadores no traidores también puedan sujetar cadáveres. (Por defecto: 1)  
:::

## Jugabilidad

ttt_traitor_pct  
:::info  
Porcentaje del total de jugadores que serán traidores. El número de jugadores se multiplica por este valor y luego se redondea hacia abajo. Si el resultado es menor que 1 o mayor que el número de jugadores, se ajusta a esos valores. (Por defecto: 0.25)  
:::

ttt_traitor_max  
:::info  
Número máximo de traidores. (Por defecto: 32)  
:::

ttt_detective_pct  
:::info  
Porcentaje del total de jugadores que serán detectives. (Por defecto: 0.13)  
:::

ttt_detective_max  
:::info  
Número máximo de detectives. Se puede usar para limitar o desactivar detectives. (Por defecto: 32)  
:::

ttt_detective_min_players  
:::info  
Número mínimo de jugadores para que entren en juego los detectives. (Por defecto: 5)  
:::

ttt_detective_karma_min  
:::info  
Si el Karma de un jugador baja de este punto, sus probabilidades de ser detective se reducen. (Por defecto: 600)  
:::

ttt_minimum_players  
:::info  
Número de jugadores que deben estar presentes antes de que comience la ronda. Se verifica antes de la fase de preparación y antes de que empiece la ronda real. (Por defecto: 2)  
:::

## ADN

ttt_killer_dna_range  
:::info  
Rango máximo dentro del cual se planta una muestra de ADN del asesino en el cadáver de la víctima. (Por defecto: 300)  
:::

## Karma

ttt_karma  
:::info  
Activa el sistema de karma. Los jugadores empiezan con cierta cantidad de karma y lo pierden cuando dañan/matan a "compañeros" (es decir, inocentes si son inocentes, traidores si son traidores). La cantidad que pierden depende del karma de la persona que dañaron o mataron. (Por defecto: 1)  
:::

ttt_karma_strict  
:::info  
Si está activado, la penalización por daño aumenta más rápido a medida que baja el karma. Cuando está desactivado, la penalización por daño es muy baja mientras la gente se mantenga por encima de 800. (Por defecto: 1)  
:::

ttt_karma_starting  
:::info  
Karma con el que empiezan los jugadores. Si quieres que puedan "ganar" un bono de daño, podrías ponerlo en 850 o así. Jugando rondas limpias podrán subirlo hasta 1000 y hacer un poco más de daño que un jugador nuevo. (Por defecto: 1000)  
:::

ttt_karma_max  
:::info  
Karma máximo que un jugador puede tener. Ten en cuenta que subirlo por encima de 1000 no significa que jugadores con 1100 de karma tengan bono de daño. Solo les da un "colchón" antes de recibir penalización por daño. (Por defecto: 1000)  
:::

ttt_karma_ratio  
:::info  
Proporción del daño que se usa para calcular cuánto karma de la víctima se resta del atacante. (Por defecto: 0.001)  
:::

ttt_karma_kill_penalty  
:::info  
Todas las penalizaciones de karma se basan en el daño causado. La penalización por matar es una cantidad extra de "daño" cuando matas a alguien. Por ejemplo, si esto es 100 y haces un disparo a la cabeza con un rifle, te penalizaría como si hubieras hecho 200 de daño. (Por defecto: 15)  
:::

ttt_karma_round_increment  
:::info  
Cantidad base con la que se "cura" el karma de todos al final de cada ronda. (Por defecto: 5)  
:::

ttt_karma_clean_bonus  
:::info  
Si un jugador no ha dañado ni matado a un compañero en esta ronda, se le "cura" un extra de 30 de karma. (Por defecto: 30)  
:::

ttt_karma_traitordmg_ratio  
:::info  
Como ttt_karma_ratio, pero para la recompensa de karma por dañar a un traidor. Por defecto, dañar a un traidor recompensa aproximadamente 1/4 de la penalización que tendrías si fuera un inocente con karma completo. (Por defecto: 30)  
:::

ttt_karma_traitorkill_bonus  
:::info  
Bono de karma por matar a un traidor. (Por defecto: 40)  
:::

ttt_karma_low_autokick  
:::info  
Expulsa automáticamente a jugadores con karma bajo al final de una ronda. (Por defecto: 1)  
:::

ttt_karma_low_amount  
:::info  
Nivel de karma al que los jugadores son expulsados al final de la ronda. (Por defecto: 300)  
:::

ttt_karma_low_ban  
:::info  
Si low_autokick está activado, también banea a los jugadores si esto está activado. No tiene efecto si autokick está desactivado. (Por defecto: 1)  
:::

ttt_karma_low_ban_minutes  
:::info  
Minutos de ban para los jugadores. (Por defecto: 60)  
:::

ttt_karma_persist  
:::info  
Guarda el karma de un jugador en almacenamiento persistente al final de la ronda o si se desconecta. Luego, al reconectarse, se carga. Esto significa que el karma persiste incluso cuando cambia el mapa. (Por defecto: 1)  
:::

ttt_karma_clean_half  
:::info  
Cuando el karma de un jugador está por encima del nivel inicial (lo que significa que el máximo de karma se configuró más alto), todos sus aumentos de karma se reducen según cuánto esté por encima de ese nivel inicial. Así que sube más lento cuanto más alto esté. (Por defecto: 0.25)  
:::

Cuando hayas cambiado todas las variables a tu gusto, el siguiente paso es guardar tus cambios.

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

¡Después de eso, ya puedes arrancar tu servidor!

<InlineVoucher />