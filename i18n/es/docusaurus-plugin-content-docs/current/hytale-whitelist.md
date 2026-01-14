---
id: hytale-whitelist
title: "Hytale: Configuración y Gestión de la Whitelist"
description: "Descubre cómo asegurar tu servidor de juegos Hytale gestionando el acceso de jugadores con funciones de whitelist y protege tu experiencia → Aprende más ahora"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
La whitelist es una función de seguridad y control de acceso que te permite limitar quién puede unirse a tu servidor de juegos Hytale. Cuando está activada, solo los jugadores que estén explícitamente listados en la whitelist pueden conectarse. Esto es especialmente útil para servidores privados, servidores comunitarios, entornos de desarrollo o fases de prueba donde el acceso debe estar restringido solo a jugadores de confianza.

:::info Aviso de Acceso Anticipado

Hytale se lanzó el 13 de enero de 2026 y actualmente está disponible en Acceso Anticipado. Como el juego aún está en una fase activa de desarrollo, el software del servidor, archivos de configuración, soporte para mods y flujos de instalación pueden seguir cambiando con el tiempo.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Activar whitelist

La whitelist se puede activar ya sea a través de la consola del servidor o directamente en el juego. Asegúrate de tener los permisos necesarios, como derechos de operador, antes de ejecutar estos comandos.

Para activar la whitelist, ejecuta el siguiente comando:

```
/whitelist enable
```



Una vez activada, cualquier jugador que no esté en la whitelist será denegado al intentar unirse al servidor. Para verificar si la whitelist está activa, usa:

```
/whitelist status
```

Este comando devuelve el estado actual de la whitelist y ayuda a confirmar que la configuración se aplicó correctamente.



## Desactivar whitelist

Si quieres permitir que todos los jugadores se unan al servidor nuevamente, la whitelist se puede desactivar en cualquier momento. Usa el siguiente comando para desactivarla:

```
/whitelist disable
```

Después de desactivar la whitelist, el servidor ya no restringirá el acceso basado en la whitelist y todos los jugadores podrán conectarse.



## Gestionar whitelist

La whitelist se puede gestionar dinámicamente mientras el servidor está en funcionamiento. Los jugadores pueden ser añadidos o eliminados en cualquier momento sin necesidad de reiniciar el servidor usando comandos.



### Añadir jugador a la whitelist

Para otorgar acceso a un jugador específico, añádelo a la whitelist con:

```
/whitelist add <playername>
```

El jugador especificado podrá unirse inmediatamente al servidor, siempre que la whitelist esté activada.



### Eliminar jugador de la whitelist

Para revocar el acceso de un jugador, elimínalo de la whitelist:

```
/whitelist remove <playername>
```

Una vez eliminado, el jugador ya no podrá unirse mientras la whitelist esté activa.



### Listar jugadores en la whitelist

Para ver todos los jugadores que actualmente tienen permiso para unirse al servidor, ejecuta:

```
/whitelist list
```

Este comando muestra la lista completa de nombres de jugadores en la whitelist.



### Limpiar whitelist

Si quieres eliminar a todos los jugadores de la whitelist de una vez, puedes limpiarla completamente:

```
/whitelist clear
```

Esto borrará todas las entradas existentes en la whitelist pero no desactiva la whitelist en sí.



## Gestionar whitelist vía archivo

Además de los comandos, la whitelist también se puede gestionar directamente a través de un archivo de configuración. Este método es útil para cambios masivos o cuando preparas una whitelist antes de iniciar el servidor. El archivo responsable de esta configuración se llama `whitelist.json` y está ubicado en el directorio del servidor.

````
{
  "enabled": true,
  "players": [
    "PlayerName1",
    "PlayerName2"
  ]
}
````



## Conclusión

¡Felicidades, has configurado exitosamente la whitelist para tu servidor de juegos Hytale! Tu servidor ahora está restringido solo a jugadores aprobados, ayudándote a mantener el control, la privacidad y un entorno multijugador más seguro.

Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂