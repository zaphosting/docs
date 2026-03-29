---
id: over-the-top-wwi-configure-damage-settings
title: "Over the Top WWI: Configura los Ajustes de Daño"
description: "Aprende a ajustar el daño y el comportamiento de combate en tu servidor de Over the Top WWI → Aprende más ahora"
sidebar_label: Ajustes de Daño
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los ajustes de daño en **Over the Top WWI** determinan qué tan letal es el combate y cómo se comportan las armas durante el juego. Ajustar estos valores te permite crear una experiencia más realista o un ambiente más casual y permisivo.

Modificando los multiplicadores de daño y las mecánicas de combate, puedes influir significativamente en la rapidez con la que los jugadores son eliminados y cómo se desarrollan los enfrentamientos.

<InlineVoucher />

## Configuración

Los ajustes de daño se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
ShootingDamageMulti = 100
MeleeDamageMulti = 300
ShootingVelocityMulti = 100
DragEffector = 30
WindEffector = 15
RandomEffectorr = 10
```

- `ShootingDamageMulti` controla el daño que hacen las armas a distancia

- `MeleeDamageMulti` define el daño de los ataques cuerpo a cuerpo

- `ShootingVelocityMulti` afecta la velocidad del proyectil y puede influir en la precisión y el registro de impactos

- `DragEffector` influye en qué tan rápido las balas pierden velocidad con la distancia

- `WindEffector` determina qué tan fuerte afecta el viento la trayectoria de la bala

- `RandomEffectorr` añade aleatoriedad al comportamiento de la bala, afectando la precisión

Ajustar estos valores te permite crear un comportamiento balístico más realista o simplificar las mecánicas de combate según el estilo de tu servidor.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los nuevos ajustes de daño y combate se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito los ajustes de daño en tu **servidor de Over the Top WWI**. Ajustando estos parámetros, puedes afinar el comportamiento del combate y crear una experiencia de juego que encaje con tu comunidad.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />