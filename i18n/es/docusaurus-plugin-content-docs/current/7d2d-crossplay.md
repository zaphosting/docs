---
id: 7d2d-crossplay
title: "7 Days to Die: Activa el Crossplay para jugadores de Consola y PC"
description: "Aprende cómo configurar tu servidor de 7 Days to Die para soportar crossplay entre jugadores de PC y consola → Descubre más ahora"
sidebar_label: Activa el Crossplay
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Con las versiones más recientes de **7 Days to Die**, el crossplay permite que jugadores de **PC y plataformas de consola compatibles** se unan al mismo servidor. Esto hace posible que las comunidades jueguen juntas sin importar la plataforma que usen.

Para que el crossplay funcione, hay que configurar ciertos ajustes en el servidor. Estos ajustes aseguran que el servidor sea compatible con conexiones desde consola y esté correctamente registrado a través de Epic Online Services.

<InlineVoucher />



## Configuración

La configuración del crossplay está en el archivo `serverconfig-zap.xml`. Para editarlo, abre la **administración de tu servidor de juegos** y ve a **Configs**. Busca y abre el archivo de configuración `serverconfig-zap.xml`.

Dentro del archivo, asegúrate de que los siguientes valores estén configurados correctamente:

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

Estos parámetros son necesarios para la compatibilidad con crossplay. El `ServerMaxPlayerCount` no debe superar los **8 jugadores**, ya que el crossplay en consola soporta un máximo de ocho participantes. La opción `ServerAllowCrossplay` debe estar activada para permitir que los jugadores de consola se unan al servidor.

Además, `EACEnabled` debe permanecer activado porque el crossplay depende de **Epic Online Services y Easy Anti-Cheat** para la autenticación y el matchmaking. El valor `IgnoreEOSSanctions` debe mantenerse en `false` para que las restricciones de EOS se apliquen correctamente en sesiones multiplataforma.

Después de modificar estos valores, guarda el archivo y **reinicia tu servidor** para que los nuevos ajustes se apliquen.



## Notas importantes

El soporte para crossplay requiere que todos los jugadores usen una versión compatible del juego. Los servidores que usen modificaciones no soportadas o configuraciones muy personalizadas pueden impedir que los jugadores de consola se conecten. Si los jugadores de consola no pueden encontrar o unirse al servidor, verifica que los ajustes de crossplay estén correctos y que el servidor esté ejecutando la última versión soportada.



## Conclusión

¡Felicidades! Has configurado con éxito tu **servidor de 7 Days to Die para crossplay**, permitiendo que jugadores de PC y consola compartan el mismo mundo. Con los ajustes correctos, tu comunidad podrá jugar junta sin importar la plataforma.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />