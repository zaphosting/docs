---
id: fivem-gamebuild
title: "FiveM: Activar contenido DLC"
description: "Descubre cómo forzar versiones específicas de DLC en tu servidor FiveM para acceder a los mapas, vehículos y contenido más recientes → Aprende más ahora"
sidebar_label: Activar build DLC
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Forzar un game build te permite fijar una versión específica de DLC en tu servidor, ¡así podrás jugar con los mapas, ropa, vehículos y más actualizados!

<InlineVoucher />

## Gamebuilds disponibles

Aquí tienes un resumen de todos los DLC disponibles y sus Build IDs:

| Build ID |        Nombre del Build         |
| :------: | :-----------------------------: |
|   2060   | Los Santos Summer Special       |
|   2189   |        Cayo Perico              |
|   2372   |         Tuner DLC               |
|   2545   |       The Contract              |
|   2699   | The Criminal Enterprises        |
|   2802   |   Los Santos Drug Wars          |
|   2944   |  San Andreas Mercenaries        |
|   3095   |       The Chop Shop             |
|   3258   |  Bottom Dollar Bounties         |
|   3407   |    Agents of Sabotage           |
|   3570   |        Money Fronts             |



## Cómo activar el build

Para usar contenido DLC adicional como Cayo Perico, el Tuner DLC o Los Santos Summer Special, tienes que configurarlo en tu servidor. Para establecer el build DLC, abre la interfaz de txAdmin y ve a la configuración de FXServer.

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

Ahora simplemente añade el gamebuild que quieras en la sección **Additional Arguments** usando el comando set, reemplazando `BUILD_ID_CHOICE` por uno de la tabla:

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## Conclusión

Una vez elegido tu build, reinicia tu servidor FiveM. Tu servidor arrancará con el build DLC especificado. ¡Has configurado con éxito un gamebuild para tu servidor de juegos FiveM! Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, disponible todos los días para echarte una mano 🙂.

<InlineVoucher />