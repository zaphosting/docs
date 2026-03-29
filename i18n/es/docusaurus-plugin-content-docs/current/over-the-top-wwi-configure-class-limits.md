---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI: Configurar Límites de Clases"
description: "Aprende a configurar los límites de clases en tu servidor Over the Top WWI → Aprende más ahora"
sidebar_label: Límites de Clases
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los límites de clases en **Over the Top WWI** controlan cuántos jugadores pueden usar tipos específicos de unidades como francotiradores, zapadores o unidades pesadas. Ajustar estos límites ayuda a equilibrar la jugabilidad y evita que ciertas clases se vuelvan demasiado usadas.

Al configurar los límites de clases, puedes asegurar composiciones de equipo justas y crear una experiencia de juego más estructurada y táctica.

<InlineVoucher />

## Configuración

Los límites de clases se configuran dentro del archivo de configuración del servidor. Puedes acceder y editar este archivo en tu **panel de gestión del servidor de juegos** bajo **Configs**. Localiza y abre el archivo de configuración `ServerConfiguration.ini`. Dentro de este archivo, encuentra los siguientes parámetros:

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` activa o desactiva las restricciones de clases  
- `0` → Desactivado  
- `1` → Activado  

- `PercentofCavPerTeam` define el porcentaje de unidades de caballería permitidas por equipo  

- `NumberOfSappers`, `NumberOfSpecialists`, `NumberOfSnipers`, `NumberOfHeavys`, `NumberofStormTroops` definen cuántos jugadores pueden usar cada clase  

- `NumberofInfOfficers` controla la cantidad de roles de oficiales disponibles  

- `MinimumNumOfPlayerForClassLimits` define cuántos jugadores deben estar en el servidor antes de que se apliquen los límites de clases  

Ajusta estos valores para controlar cuántos jugadores pueden seleccionar cada clase y para equilibrar tu servidor según tu estilo de juego preferido.

Después de modificar el `ServerConfiguration.ini`, guarda el archivo y reinicia tu servidor. Los nuevos límites de clases se aplicarán automáticamente.

## Conclusión

¡Felicidades! Has configurado con éxito los límites de clases en tu **servidor Over the Top WWI**. Esto te permite equilibrar las composiciones de equipo y mejorar la experiencia de juego en general.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />