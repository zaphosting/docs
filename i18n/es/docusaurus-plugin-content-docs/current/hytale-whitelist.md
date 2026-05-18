---
id: hytale-whitelist
title: "Hytale: Configuración y Gestión de la Lista Blanca"
description: "Descubre cómo asegurar tu servidor de Hytale gestionando el acceso de jugadores con funciones de lista blanca y protege tu experiencia de juego → Aprende más ahora"
sidebar_label: Lista Blanca
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
La lista blanca es una función de seguridad y control de acceso que te permite limitar quién puede unirse a tu servidor de Hytale. Cuando está activada, solo los jugadores que estén explícitamente listados en la lista blanca podrán conectarse. Esto es especialmente útil para servidores privados, servidores comunitarios, entornos de desarrollo o fases de prueba donde el acceso debe estar restringido solo a jugadores de confianza.

:::info Aviso de Acceso Anticipado

Hytale se lanzó el 13 de enero de 2026 y actualmente está disponible en Acceso Anticipado. Como el juego aún está en una fase activa de desarrollo, el software del servidor, archivos de configuración, soporte para mods y flujos de instalación pueden seguir cambiando con el tiempo.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/mMjZWsYdmbnwQkQ/preview)



<InlineVoucher />

## Activar lista blanca

La lista blanca puede activarse ya sea desde la consola del servidor o directamente en el juego. Asegúrate de tener los permisos necesarios, como derechos de operador, antes de ejecutar estos comandos.

Para activar la lista blanca, ejecuta el siguiente comando:

```
/whitelist enable
```



Una vez activada, cualquier jugador que no esté en la lista blanca será denegado al intentar unirse al servidor. Para verificar si la lista blanca está activa, usa:

```
/whitelist status
```

Este comando devuelve el estado actual de la lista blanca y ayuda a confirmar que la configuración se aplicó correctamente.



## Desactivar lista blanca

Si quieres permitir que todos los jugadores se unan al servidor nuevamente, la lista blanca puede desactivarse en cualquier momento. Usa el siguiente comando para desactivarla:

```
/whitelist disable
```

Después de desactivar la lista blanca, el servidor ya no restringirá el acceso basado en ella y todos los jugadores podrán conectarse.



## Gestionar lista blanca

La lista blanca puede gestionarse dinámicamente mientras el servidor está en funcionamiento. Los jugadores pueden añadirse o eliminarse en cualquier momento sin necesidad de reiniciar el servidor usando comandos.



### Añadir jugador a la lista blanca

Para otorgar acceso a un jugador específico, añádelo a la lista blanca con:

```
/whitelist add <playername>
```

El jugador especificado podrá unirse inmediatamente al servidor, siempre que la lista blanca esté activada.



### Eliminar jugador de la lista blanca

Para revocar el acceso de un jugador, elimínalo de la lista blanca:

```
/whitelist remove <playername>
```

Una vez eliminado, el jugador ya no podrá unirse mientras la lista blanca esté activa.



### Listar jugadores en la lista blanca

Para ver todos los jugadores que actualmente tienen permiso para unirse al servidor, ejecuta:

```
/whitelist list
```

Este comando muestra la lista completa de nombres de jugadores en la lista blanca.



### Limpiar lista blanca

Si quieres eliminar a todos los jugadores de la lista blanca de una vez, puedes limpiarla completamente:

```
/whitelist clear
```

Esto borrará todas las entradas existentes en la lista blanca pero no desactivará la lista blanca en sí.



## Gestionar lista blanca vía archivo

Además de los comandos, la lista blanca también puede gestionarse directamente a través de un archivo de configuración. Este método es útil para cambios masivos o para preparar una lista blanca antes de iniciar el servidor. El archivo responsable de esta configuración se llama `whitelist.json` y está ubicado en el directorio del servidor.

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

¡Felicidades, has configurado exitosamente la lista blanca para tu servidor de Hytale! Tu servidor ahora está restringido solo a jugadores aprobados, ayudándote a mantener el control, la privacidad y un entorno multijugador más seguro.

Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂