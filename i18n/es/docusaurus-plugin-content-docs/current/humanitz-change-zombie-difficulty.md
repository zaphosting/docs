---
id: humanitz-change-zombie-difficulty
title: "HumanitZ: Cambiar la Dificultad de los Zombies"
description: "Aprende a ajustar la dificultad de los zombies y la IA en tu servidor de HumanitZ → Descubre más ahora"
sidebar_label: "Cambiar la Dificultad de los Zombies"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

La dificultad de los zombies juega un papel clave en la experiencia de supervivencia en HumanitZ. Desde la fuerza y velocidad de los zombies hasta los multiplicadores de aparición y eventos de asalto de la IA, estos ajustes determinan qué tan peligroso se vuelve el mundo.

Todas las opciones de dificultad relacionadas con zombies y la IA se configuran dentro del archivo `GameServerSettings.ini` y te permiten controlar completamente la intensidad de los encuentros PvE en tu servidor.

<InlineVoucher />

## Configuración

Los ajustes de dificultad de los zombies se controlan en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo en el panel de gestión de tu servidor bajo **Configs**. Dentro del archivo de configuración, localiza los siguientes parámetros:

```
;Dificultad de salud donde 0=Muy Fácil, 1=Fácil, 2=Por Defecto, 3=Difícil, 4=Muy Difícil, 5=Pesadilla
ZombieDiffHealth=1

;Dificultad de velocidad donde 0=Muy Fácil, 1=Fácil, 2=Por Defecto, 3=Difícil, 4=Muy Difícil, 5=Pesadilla
ZombieDiffSpeed=2

;Dificultad de daño donde 0=Muy Fácil, 1=Fácil, 2=Por Defecto, 3=Difícil, 4=Muy Difícil, 5=Pesadilla
ZombieDiffDamage=3

;Multiplicador de cantidad de zombies, 2 por ejemplo significaría el doble de zombies. 0.5 significaría la mitad de zombies.
ZombieAmountMulti=1

;Multiplicador de cantidad de bandidos humanos, 2 por ejemplo significaría el doble de bandidos humanos. 0.5 significaría la mitad de bandidos humanos.
HumanAmountMulti=1

;Los perros zombies aparecen principalmente de noche. 2 por ejemplo significaría el doble de perros zombies. 0.5 significaría la mitad de perros zombies.
ZombieDogMulti=1

;El tiempo en minutos que tarda en reaparecer un zombie, ponlo en 0 para desactivar la reaparición de zombies.
ZombieRespawnTimer=90

;El juego a veces genera eventos de IA como zombies o humanos asaltando tu ubicación. 0 = Desactivado, 1 = Bajo, 2 = Por Defecto, 3 = Alto, 4 = Insano
AIEvent=2
```

Aquí tienes un desglose de lo que controla cada ajuste:

- `ZombieDiffHealth` – Controla la dificultad de salud de los zombies  
- `ZombieDiffSpeed` – Controla la velocidad de movimiento de los zombies  
- `ZombieDiffDamage` – Controla el daño que hacen los zombies  
- `ZombieAmountMulti` – Multiplica el número total de zombies que aparecen  
- `HumanAmountMulti` – Multiplica el número de bandidos humanos que aparecen  
- `ZombieDogMulti` – Multiplica el número de perros zombies que aparecen  
- `ZombieRespawnTimer` – Define cuánto tarda en reaparecer un zombie (0 desactiva la reaparición)  
- `AIEvent` – Controla la frecuencia de los eventos de asalto de la IA  

Después de hacer cambios, guarda el archivo y reinicia el servidor para que los nuevos ajustes tengan efecto.



## Ejemplos de Configuraciones de Dificultad

### Configuración Fácil de Zombies

Esta configuración crea una experiencia PvE más relajada con menos enemigos y niveles de amenaza reducidos.

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```



### Configuración Difícil de Zombies

Esta configuración aumenta la fuerza de los enemigos, las tasas de aparición y la frecuencia de eventos para un mundo mucho más peligroso.

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```



## Conclusión

¡Felicidades! Al ajustar los valores relacionados con zombies en el `GameServerSettings.ini`, has personalizado con éxito la dificultad de los zombies en tu servidor de HumanitZ. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />