---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ: Activar o Desactivar el Chat de Voz"
description: "Aprende cómo activar o desactivar el chat de voz en tu servidor de HumanitZ → Descubre más ahora"
sidebar_label: "Activar/Desactivar Chat de Voz"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

La comunicación por voz puede cambiar totalmente la atmósfera de un servidor de HumanitZ. Activar el chat de voz permite a los jugadores comunicarse directamente en proximidad, mejorando la inmersión y la cooperación. Desactivarlo puede fomentar el uso de plataformas externas para comunicarse o crear una experiencia de supervivencia más tranquila y aislada.

En HumanitZ, el chat de voz se configura directamente dentro del archivo de configuración del servidor.

<InlineVoucher />



## Configuración

Los ajustes del chat de voz se controlan en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo desde el panel de control de tu servidor en la sección **Configs**. Dentro del archivo de configuración, localiza el siguiente parámetro:

```
;Cuando está en 1 o true el chat de voz estará activado, pon 0 o false para desactivarlo
Voip=true
```

La configuración funciona así:

- `Voip=true` o `Voip=1` – Activa el chat de voz  
- `Voip=false` o `Voip=0` – Desactiva el chat de voz  

Para cambiar el ajuste del chat de voz, simplemente modifica el valor según tu preferencia. Después de editar el archivo, guarda los cambios y reinicia el servidor para que la nueva configuración tenga efecto.



## Conclusión

¡Felicidades! Modificando el valor `Voip` en el `GameServerSettings.ini` has activado o desactivado con éxito el chat de voz en tu servidor de HumanitZ. Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />