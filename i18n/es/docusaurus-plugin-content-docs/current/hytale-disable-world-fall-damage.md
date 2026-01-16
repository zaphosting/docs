---
id: hytale-disable-world-fall-damage
title: "Hytale: Desactivar daño por caída en el mundo"
description: "Descubre cómo desactivar el daño por caída en tu servidor de Hytale → Aprende más ahora"
sidebar_label: Desactivar daño por caída en el mundo
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

En un servidor de Hytale, la gravedad y el daño por caída son parte de la mecánica del juego en el mundo. Cuando el daño por caída está activado, los jugadores reciben daño al caer desde alturas grandes; cuando está desactivado, los jugadores pueden caer libremente sin recibir daño. Desactivar el daño por caída puede ser útil para servidores creativos, proyectos de construcción, entornos de prueba o cualquier escenario donde el daño por caída no debería afectar la experiencia del jugador.

<InlineVoucher />



## Configuración

El daño por caída se controla de forma individual para cada mundo usando el archivo de configuración del mundo. Cada mundo en el universo del servidor tiene su propio `config.json`, y dentro de este archivo hay un ajuste que determina si se aplica el daño por caída.

Para desactivar el daño por caída, abre el `config.json` del mundo ubicado en la carpeta correspondiente bajo `universe/worlds/<nombre_del_mundo>/config.json`. Busca el ajuste que controla el daño por caída, normalmente representado como una bandera booleana llamada `IsFallDamageEnabled`, y pon su valor en `false`:

```
{
  "IsFallDamageEnabled": false
}
```

Cuando este valor está en `false`, los jugadores ya no recibirán daño por caer. Si quieres que el daño por caída siga activado, el valor debe estar en `true`:

```
{
  "IsFallDamageEnabled": true
}
```

Después de actualizar el archivo, guarda los cambios y **reinicia el servidor**. Los cambios en la configuración solo se aplican cuando el servidor recarga el mundo, así que es necesario un reinicio para que el nuevo ajuste tenga efecto.



## Conclusión

Configurando la bandera de daño por caída en el archivo de configuración del mundo, tienes control total sobre si los jugadores reciben daño al caer. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />