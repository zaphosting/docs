---
id: humanitz-change-save-interval
title: "HumanitZ: Cambiar el Intervalo de Guardado"
description: "Aprende a ajustar el intervalo de guardado automático del mundo en tu servidor de HumanitZ → Descubre más ahora"
sidebar_label: "Cambiar Intervalo de Guardado"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introducción

El intervalo de guardado determina con qué frecuencia tu servidor de HumanitZ guarda automáticamente el estado del mundo. Guardar regularmente ayuda a prevenir la pérdida de datos en caso de fallos o apagados inesperados, mientras que intervalos más largos pueden reducir ligeramente la actividad del disco.

<InlineVoucher />

## Configuración

El intervalo de guardado del mundo se controla en el archivo `GameServerSettings.ini`. Puedes acceder a este archivo en el panel de gestión de tu servidor bajo **Configs**. Dentro del archivo de configuración, localiza el siguiente parámetro:

```
;El intervalo en segundos en el que el servidor guarda el mundo. Ponlo a 0 para desactivar el guardado automático.
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – El servidor guarda el mundo cada 300 segundos (5 minutos).  
- `SaveIntervalSec=0` – Desactiva el guardado automático del mundo.  

El valor se define en **segundos**. Por ejemplo:

- `600` = 10 minutos
- `900` = 15 minutos

Si quieres aumentar el intervalo a 10 minutos:

```
SaveIntervalSec=600
```

Después de editar el archivo, guarda los cambios y reinicia el servidor para que la nueva configuración tenga efecto.

## Conclusión

¡Felicidades! Modificando el valor `SaveIntervalSec` en el `GameServerSettings.ini`, has ajustado con éxito el intervalo de guardado automático del mundo en tu servidor de HumanitZ.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />