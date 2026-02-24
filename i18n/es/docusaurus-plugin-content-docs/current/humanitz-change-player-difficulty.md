---
id: humanitz-change-player-difficulty
title: "HumanitZ: Cambiar la Dificultad del Jugador"
description: "Aprende cómo ajustar la dificultad del jugador y las configuraciones de supervivencia en tu servidor de HumanitZ → Descubre más ahora"
sidebar_label: "Cambiar la Dificultad del Jugador"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

La dificultad del jugador en HumanitZ determina qué tan dura es la experiencia de supervivencia. Desde la muerte permanente hasta la velocidad de drenaje de las vitales y la fuerza de los bandidos, estas configuraciones impactan directamente en qué tan desafiante se siente tu servidor.

<InlineVoucher />

## Configuración

Los ajustes de dificultad del jugador se controlan en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo en el panel de gestión de tu servidor bajo **Configs**. Dentro del archivo de configuración, localiza los siguientes parámetros:

````
;Cuando está en true, el jugador que muere pierde su personaje y debe crear uno nuevo
PermaDeath=false

;0=No pierde nada, 1=Pierde mochila y arma en mano, 2=Anterior + bolsillos y mochila, 3=Todo lo anterior + equipo
OnDeath=2

;Efecto de privación de sueño false=Desactivado true=Activado
Sleep=true

;Qué tan rápido se drenan tus vitales 0=Lento, 1=Normal, 2=Rápido
VitalDrain=1

;Salud del compañero perro 0=Baja 1=Por defecto 2=Alta
CompanionHealth=1

;Daño del compañero perro 0=Bajo 1=Por defecto 2=Alto
CompanionDmg=1

;Tiempo en minutos para que los bandidos humanos reaparezcan, pon 0 para desactivar el respawn de bandidos humanos.
HumanRespawnTimer=90

;Dificultad de salud de bandidos humanos donde 0=Muy fácil, 1=Fácil, 2=Por defecto, 3=Difícil, 4=Muy difícil, 5=Pesadilla
HumanHealth=2

;Dificultad de velocidad de bandidos humanos donde 0=Muy fácil, 1=Fácil, 2=Por defecto, 3=Difícil, 4=Muy difícil, 5=Pesadilla
HumanSpeed=2

;Dificultad de daño de bandidos humanos donde 0=Muy fácil, 1=Fácil, 2=Por defecto, 3=Difícil, 4=Muy difícil, 5=Pesadilla
HumanDamage=2
````

Aquí tienes un desglose de lo que controla cada ajuste:

- `PermaDeath` – Si está en `true`, los jugadores pierden permanentemente su personaje al morir y deben crear uno nuevo  
- `OnDeath` – Define cuánto inventario se pierde cuando un jugador muere  
- `Sleep` – Activa o desactiva los efectos de privación de sueño  
- `VitalDrain` – Controla qué tan rápido disminuyen el hambre, la sed y otras vitales  
- `CompanionHealth` – Ajusta el nivel de salud del compañero perro  
- `CompanionDmg` – Ajusta el nivel de daño del compañero perro  
- `HumanRespawnTimer` – Determina cuánto tarda en reaparecer un bandido humano (0 desactiva el respawn)  
- `HumanHealth` – Ajusta la dificultad de salud de los bandidos  
- `HumanSpeed` – Ajusta la dificultad de velocidad de los bandidos  
- `HumanDamage` – Ajusta la dificultad de daño de los bandidos  

Modifica los valores según el nivel de dificultad que quieras. Después de editar el archivo, guarda los cambios y reinicia el servidor para que las nuevas configuraciones tengan efecto.



## Ejemplos de Presets de Dificultad

### Configuración de Supervivencia Fácil

Esta configuración crea una experiencia más relajada con drenaje lento de vitales, enemigos más débiles y sin muerte permanente.

```
PermaDeath=false
OnDeath=1
Sleep=false
VitalDrain=0
CompanionHealth=2
CompanionDmg=2
HumanRespawnTimer=180
HumanHealth=1
HumanSpeed=1
HumanDamage=1
```



### Configuración de Supervivencia Difícil

Esta configuración aumenta la presión de supervivencia con muerte permanente, drenaje rápido de vitales y bandidos más fuertes.

```
PermaDeath=true
OnDeath=3
Sleep=true
VitalDrain=2
CompanionHealth=0
CompanionDmg=0
HumanRespawnTimer=60
HumanHealth=4
HumanSpeed=4
HumanDamage=4
```



## Conclusión

¡Felicidades! Ajustando los valores relacionados con la dificultad en el `GameServerSettings.ini`, has personalizado con éxito la dificultad del jugador en tu servidor de HumanitZ. Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />