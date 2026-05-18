---
id: hytale-world-management
title: "Hytale: Gestión de Mundos"
description: "Descubre cómo asegurar tu servidor de Hytale gestionando el acceso de jugadores con funciones de whitelist y protege tu experiencia de juego → Aprende más ahora"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

La gestión de mundos en un servidor de Hytale implica controlar el entorno persistente del juego en el que los jugadores exploran, construyen e interactúan. Un mundo consiste en todos los datos del terreno, estructuras, progreso de los jugadores y configuraciones que definen la experiencia compartida. Poder crear, renombrar, reiniciar u organizar mundos es una parte clave para mantener un servidor tanto para comunidades privadas como públicas.

:::info Aviso de Acceso Anticipado

Hytale se lanzó el 13 de enero de 2026 y actualmente está disponible en Acceso Anticipado. Como el juego aún está en fase activa de desarrollo, el software del servidor, archivos de configuración, soporte para mods y flujos de instalación pueden seguir cambiando con el tiempo.

:::

## Creación de un nuevo mundo

Crear un nuevo mundo le da a tu servidor un entorno fresco para generar terreno, estructuras y progresión de juego desde cero. Usando la consola en vivo, se pueden crear o cambiar mundos emitiendo los comandos relacionados con mundos correspondientes.  
Cuando se especifica un nuevo nombre de mundo, el servidor cargará un mundo existente con ese nombre o generará uno nuevo si no se encuentra ningún dato de mundo que coincida.

```
/world create <worldname>
```

Este comando crea un nuevo mundo llamado `<worldname>`. Si no hay datos de mundo existentes para ese nombre, el servidor genera un entorno de mundo nuevo.



## Establecer un mundo como predeterminado

Se puede marcar un mundo específico como el mundo predeterminado para que se cargue automáticamente cuando el servidor arranque. Establecer un mundo predeterminado es útil cuando existen varios mundos y uno de ellos debe usarse siempre como el entorno principal.

Usando la consola en vivo, el mundo predeterminado se puede actualizar sin editar manualmente archivos de configuración. Una vez establecido, el servidor priorizará este mundo en el próximo reinicio.

```
/world setdefault <worldname>
```

Este comando establece el mundo llamado `mainworld` como el mundo predeterminado. Después de reiniciar el servidor, este mundo se cargará automáticamente.



## Eliminar un mundo existente

Además de crear y cargar mundos, la consola en vivo también puede usarse para eliminar mundos existentes del servidor. Esto es útil cuando mundos obsoletos, sin uso o de prueba ya no son necesarios. Eliminar un mundo borra sus datos asociados del servidor. Esta acción es permanente y no se puede deshacer a menos que exista una copia de seguridad.

```
/world remove <worldname>
```

Este comando elimina el mundo llamado `worldname` del servidor. Si el mundo está activo, debe descargarse o el servidor podría rechazar el comando según la implementación del servidor.



## Conclusión

Gestionar mundos a través de la consola en vivo ofrece una forma rápida y flexible de controlar el entorno activo en un servidor de Hytale. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡disponible a diario para asistirte! 🙂