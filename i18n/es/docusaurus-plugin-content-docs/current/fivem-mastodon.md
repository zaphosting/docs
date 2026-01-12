---
id: fivem-mastodon
title: "FiveM: Configurar un feed de actividad usando Mastodon"
description: "Descubre cómo integrar un feed de actividad de Mastodon en tu servidor para actualizaciones en tiempo real y mayor interacción con la comunidad → Aprende más ahora"
sidebar_label: Configurar Feed de Actividad
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introducción

Un feed de actividad ayuda a mantener a los jugadores informados directamente dentro de tu servidor FiveM. Al conectar una cuenta de Mastodon, las actualizaciones del servidor, anuncios y mensajes cortos pueden mostrarse en tiempo real, sin que los jugadores tengan que revisar plataformas externas.

Esta integración crea un canal de comunicación claro entre el servidor y su comunidad, asegurando que la información importante siempre esté visible en un lugar centralizado.

## Preparación

Antes de configurar el feed de actividad, necesitas una cuenta de Mastodon. Esta cuenta se usará para publicar las actualizaciones que luego aparecerán en el servidor.

Si aún no tienes una cuenta, regístrate en una instancia de [Mastodon](https://joinmastodon.org/) que prefieras. Después de registrarte, asegúrate de que el perfil sea accesible y esté listo para publicar actualizaciones, ya que estas publicaciones se mostrarán en el feed de actividad.



## Configuración

Abre tu perfil de Mastodon y copia tu nombre de usuario completo.  
El nombre de usuario suele tener este formato:

```
usuario@instancia.dominio
```

En este ejemplo, el nombre de usuario es `zaphosting@mstdn.instance`. Luego, abre la sección **Configs** de tu servidor FiveM y edita el archivo `server.cfg`. Desplázate hasta el final del archivo y añade la siguiente línea:

```
sets activitypubFeed usuario
```

Reemplaza `usuario` con tu propio nombre de usuario de Mastodon.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Guarda el archivo y reinicia el servidor. Después del reinicio, puede tardar hasta 20 minutos en que el feed de actividad esté disponible. Una vez activo, aparecerá una nueva pestaña **Feed** al abrir el servidor, mostrando las publicaciones de la cuenta de Mastodon vinculada.



## Conclusión

Con el feed de actividad configurado, las actualizaciones y anuncios del servidor se muestran directamente a los jugadores de forma clara y accesible. Esta configuración mejora la transparencia, fortalece la interacción con la comunidad y ofrece un método eficiente para compartir noticias e información sin depender de enlaces o plataformas externas.



Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂