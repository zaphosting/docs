---
id: humanitz-airdrop-management
title: "HumanitZ: Gestión de Airdrops"
description: "Aprende a activar, desactivar y configurar los airdrops en tu servidor de HumanitZ → Aprende más ahora"
sidebar_label: "Gestión de Airdrops"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

Los airdrops en HumanitZ ofrecen botín valioso y pueden influir mucho en el movimiento de jugadores, zonas de conflicto y la dinámica general del servidor. Dependiendo del estilo de juego de tu servidor, puede que quieras airdrops frecuentes para aumentar la acción o desactivarlos por completo para una experiencia de supervivencia con recursos más escasos.

<InlineVoucher />

## Configuración

Los ajustes de airdrop se controlan en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo en el panel de gestión de tu servidor bajo **Configs**. Dentro del archivo de configuración, localiza los siguientes parámetros:

```
; Establece si los airdrops están activados o no
AirDrop=true
;Cuántos días de juego pasan entre cada Airdrop
AirDropInterval=1
```

La configuración funciona así:

- `AirDrop=true` – Activa los airdrops  
- `AirDrop=false` – Desactiva los airdrops por completo  
- `AirDropInterval` – Define cuántos días dentro del juego pasan entre cada airdrop  

Por ejemplo, si quieres que los airdrops ocurran cada tres días dentro del juego:

```
AirDrop=true
AirDropInterval=3
```

Si quieres desactivar los airdrops completamente:

```
AirDrop=false
```

Después de editar el archivo, guarda los cambios y reinicia el servidor para que los nuevos ajustes tengan efecto.

## Conclusión

¡Felicidades! Modificando los valores `AirDrop` y `AirDropInterval` en el `GameServerSettings.ini`, has configurado con éxito el comportamiento de los airdrops en tu servidor de HumanitZ. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />