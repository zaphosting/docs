---
id: hytale-become-invisible
title: "Hytale: Volverse invisible"
description: "Descubre cómo volverte invisible en un servidor de Hytale → Aprende más ahora"
sidebar_label: Volverse invisible
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Volverse invisible puede ser útil en servidores de Hytale para moderación, pruebas o creación de contenido. Permite a los administradores observar a los jugadores sin ser detectados, revisar actividades sospechosas o explorar áreas sin interferir con el juego. Dependiendo de la configuración del servidor y los permisos disponibles, la invisibilidad generalmente se puede activar mediante comandos dentro del juego o desde la consola en vivo.

<InlineVoucher />

## Requisitos

Para usar las funciones de invisibilidad, debes tener permisos suficientes en el servidor. En la mayoría de los casos, necesitas privilegios de operador o acceso a permisos para comandos de moderación y juego. Si no tienes los permisos requeridos, el comando será denegado y no podrás activar la invisibilidad. Para obtener los permisos necesarios, sigue nuestra [guía para convertirte en admin](hytale-becomeadmin.md).

## Cómo volverse invisible

Para volverte invisible, abre el chat dentro del juego e ingresa el comando de invisibilidad que soporte el servidor. Ejecuta el siguiente comando:

```
/hide <nombrejugador>
```

Una vez que el comando se ejecute correctamente, tu personaje ya no será visible para otros jugadores en el mundo. Aún podrás moverte, interactuar y monitorear la actividad según las reglas del servidor y la implementación de la visibilidad.

Además del comando básico de ocultar, Hytale ofrece opciones extendidas que te permiten controlar quién puede ver a un jugador. Por ejemplo, puedes ocultar a un jugador solo para un jugador objetivo específico, o aplicar invisibilidad para todos en el servidor.

Los siguientes comandos están disponibles:
- `/hide <nombrejugador>`  Hace invisible al jugador especificado.
- `/hide <nombrejugador> --target <nombrejugador>`  Hace invisible al jugador especificado solo para el jugador objetivo.
- `/hide all`  Hace invisibles a todos los jugadores.

## Desactivar la invisibilidad

Para volver a la visibilidad normal, ejecuta nuevamente el comando correspondiente para desactivar la invisibilidad. Después de confirmar el comando, los demás jugadores podrán ver tu personaje como de costumbre.

```
/hide show <nombrejugador>
```

También hay comandos adicionales para eliminar la invisibilidad en escenarios más específicos, como restaurar la visibilidad solo para ciertos jugadores objetivo o eliminar la invisibilidad de todos.

Los siguientes comandos están disponibles:
- `/hide show <nombrejugador>`  Elimina la invisibilidad del jugador especificado.
- `/hide show <nombrejugador> --target <nombrejugador>`  Elimina la invisibilidad del jugador especificado para el jugador objetivo.
- `/hide showall`  Elimina la invisibilidad de todos los jugadores.

## Conclusión

Volverse invisible en un servidor de Hytale es una herramienta útil para administradores y moderadores que necesitan monitorear el juego de forma discreta. Para más preguntas o asistencia, no dudes en contactar a nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂

<InlineVoucher />