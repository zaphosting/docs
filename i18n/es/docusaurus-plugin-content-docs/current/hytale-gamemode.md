---
id: hytale-gamemode
title: "Hytale: Configuración del Modo de Juego"
description: "Descubre cómo asegurar tu servidor de Hytale gestionando el acceso de jugadores con funciones de whitelist y protege tu experiencia de juego → Aprende más ahora"
sidebar_label: Modo de Juego
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores de Hytale te permiten configurar ajustes de juego como el modo de juego que define la experiencia del jugador. Cambiar el modo de juego te permite adaptar tu servidor a un estilo de juego específico o a las preferencias de tu comunidad.

:::info Aviso de Acceso Anticipado

Hytale se lanzó el 13 de enero de 2026 y actualmente está disponible en Acceso Anticipado. Como el juego aún está en fase activa de desarrollo, el software del servidor, los archivos de configuración, el soporte para mods y los procesos de instalación pueden seguir cambiando con el tiempo.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## Cambiar modo de juego

### Consola en vivo
El modo de juego puede cambiarse mientras el servidor está en funcionamiento usando la consola en vivo o comandos dentro del juego, siempre que se tengan los permisos necesarios. Este método permite a los administradores cambiar el modo de juego sin editar archivos de configuración.

Usar el comando en consola actualiza el modo de juego activo inmediatamente para la sesión del servidor. Dependiendo de la configuración del servidor, el cambio puede persistir hasta el próximo reinicio o revertir al valor definido en el archivo de configuración.

```
/gamemode <gamemode> <playername>
```

El valor de `GameMode` determina qué modo de juego se aplica cuando el servidor inicia. Según la experiencia de juego que desees, este valor puede ajustarse en consecuencia.

Los valores de modo de juego más usados incluyen:

- `Creative` para construcción y creación de contenido sin restricciones
- `Adventure` para una jugabilidad estructurada con progresión definida y reglas de interacción

Después de cambiar el valor del modo de juego, es necesario reiniciar el servidor para que el nuevo ajuste tenga efecto.



### Archivo de configuración

El modo de juego puede definirse directamente en el archivo de configuración del servidor.  
Este método es recomendado cuando quieres que el servidor siempre inicie con un modo de juego específico o cuando preparas una configuración nueva del servidor.

El archivo de configuración es accesible a través de tu panel de control de hosting o gestor de archivos. Dentro de este archivo, hay un ajuste que controla el modo de juego activo que se usa al iniciar el servidor. Tras modificar este valor, debes reiniciar el servidor para que el cambio surta efecto.

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

El valor de `GameMode` determina qué modo de juego se aplica cuando el servidor inicia. Según la experiencia de juego que desees, este valor puede ajustarse en consecuencia.

Los valores de modo de juego más usados incluyen:

- `Creative` para construcción y creación de contenido sin restricciones
- `Adventure` para una jugabilidad estructurada con progresión definida y reglas de interacción

Después de cambiar el valor del modo de juego, es necesario reiniciar el servidor para que el nuevo ajuste tenga efecto.



## Conclusión

Configurando el modo de juego ya sea a través del archivo de configuración del servidor o la consola en vivo, puedes controlar con precisión la experiencia de juego en tu servidor de Hytale. Para más preguntas o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂