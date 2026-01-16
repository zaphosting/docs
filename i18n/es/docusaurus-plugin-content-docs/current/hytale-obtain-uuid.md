---
id: hytale-obtain-uuid
title: "Hytale: Obtener UUID"
description: "Descubre cómo encontrar u obtener el UUID de un jugador para usarlo en la configuración y permisos del servidor → Aprende más ahora"
sidebar_label: Obtener UUID
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Cada jugador en un servidor de Hytale es identificado internamente por un UUID, también conocido como Identificador Único Universal. Este identificador es permanente y no cambia, incluso si el jugador cambia su nombre de usuario más adelante.

Los UUID son necesarios para varias tareas administrativas como gestionar permisos, asignar grupos o referenciar jugadores en comandos y archivos de configuración del servidor.

:::info Aviso de Acceso Anticipado

Hytale se lanzó el 13 de enero de 2026 y actualmente está disponible en Acceso Anticipado. Como el juego aún está en fase activa de desarrollo, el software del servidor, archivos de configuración, soporte para mods y flujos de instalación pueden seguir cambiando con el tiempo.

:::

<InlineVoucher />


## Obtener UUID

El UUID de un jugador se puede obtener directamente desde el juego usando el comando de chat incorporado del servidor. Este método es especialmente útil cuando el jugador ya está en línea y se necesita el UUID de inmediato.

Con sesión iniciada y permisos suficientes, abre el chat dentro del juego y ejecuta el comando para buscar el UUID del jugador deseado:

```
/whoami <nombrejugador>
```

Después de ejecutar el comando, el servidor responde directamente en el chat con el UUID asociado al jugador especificado. El UUID devuelto identifica de forma única a ese jugador y puede copiarse para usarlo en la gestión de permisos, asignación de grupos, entradas en la whitelist u otras operaciones del servidor.



![img](https://screensaver01.zap-hosting.com/index.php/s/E7QrJGn3q79Kzm6/preview)



## Conclusión

Obtener el UUID de un jugador es un paso esencial en tareas avanzadas de gestión de servidores en un servidor de Hytale. Para más preguntas o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂


<InlineVoucher />