---
id: hytale-advanced-permissions-luckperms
title: "Hytale: Permisos Avanzados con LuckPerms"
description: "Descubre cómo instalar y configurar LuckPerms para gestionar permisos avanzados y rangos en un servidor de Hytale → Aprende más ahora"
sidebar_label: Permisos Avanzados
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Gestionar permisos en un servidor de Hytale se vuelve cada vez más importante cuando empiezas a trabajar con roles de staff, rangos personalizados o perks especiales para jugadores. Aunque el sistema de permisos por defecto dentro del juego es adecuado para administración básica, rápidamente se queda corto cuando necesitas un control detallado sobre comandos y funciones.

**LuckPerms** ofrece un sistema de permisos robusto y altamente personalizable para servidores de Hytale. Te permite definir con precisión qué permisos y comandos pueden usar diferentes jugadores o grupos.

<InlineVoucher />



## Instalando LuckPerms

Para instalar los mods de LuckPerms, primero descarga el archivo `.jar` más reciente de LuckPerms.  
Después de descargarlo, abre el panel de gestión de tu servidor y detén el servidor para subir el mod de forma segura.

Navega a la sección **Archivos** de tu servidor y abre la carpeta `mods`. Sube el archivo `.jar` de LuckPerms en esta carpeta. Para una explicación detallada sobre cómo instalar mods, te recomendamos echar un vistazo a la [guía de Instalación de Mods](hytale-mods).

Una vez completada la subida del archivo, inicia el servidor nuevamente. Tras el arranque, abre la consola del servidor y verifica que LuckPerms esté funcionando correctamente. Si se instaló con éxito, LuckPerms mostrará mensajes de inicio en la consola.



## Otorgando permisos iniciales

Después de la instalación, LuckPerms necesita configurarse antes de poder usarse eficazmente. Para empezar a gestionar permisos, debes otorgarte permiso para usar los comandos de LuckPerms. En la consola o en el chat del juego ejecuta el siguiente comando:

```
lp user <playername> permission set luckperms.* true
```

Esto le da al jugador seleccionado acceso completo a los comandos de LuckPerms.



## Usando el editor web de LuckPerms

LuckPerms incluye un editor web que ofrece una interfaz cómoda para crear grupos y gestionar permisos. Para generar una sesión del editor, ingresa:

```
lp editor
```

LuckPerms imprimirá un enlace generado para el editor en la consola. Abre este enlace en tu navegador para acceder al editor web.

```
[LP] Preparando una nueva sesión del editor, por favor espera...
[LP] Haz clic en el enlace de abajo para abrir el editor:
https://luckperms.net/editor/XXXXXXXXXX
```

![img](https://screensaver01.zap-hosting.com/index.php/s/5Cx2sGY4axZ6TBo/preview)

Dentro del editor, copia el **enlace de comando** que se muestra. Regresa a la consola de tu servidor y pega el enlace de comando para establecer confianza y conectar la sesión del editor con tu servidor.

```
/lp trusteditor XXXX-XXXX
```

Una vez conectado el editor, puedes configurar usuarios, grupos y permisos directamente desde la interfaz web. Después de hacer cambios, haz clic en **Apply** para guardar la configuración. Si LuckPerms proporciona un comando para aplicar, cópialo y pégalo en la consola del servidor para finalizar los cambios.



## Creando un grupo admin

Abre el enlace del editor en tu navegador y navega a la sección **Groups**. Crea un nuevo grupo usando el icono de más y ponle el nombre `admin`. Opcionalmente, puedes configurar detalles adicionales como nombre para mostrar, peso, grupo padre y prefijo/sufijo.

![img](https://screensaver01.zap-hosting.com/index.php/s/xEWHSBkxKy5q8qr/preview)

Después de crear el grupo, selecciona el grupo `admin` en el editor y añade permisos. Para otorgar permisos completos de Hytale al grupo, ingresa:

```
hytale.*
```

Este permiso otorga acceso total a todos los permisos de Hytale. Tras añadir los permisos, asigna un jugador al grupo.  
En el editor, abre la sección **Users**, selecciona el usuario deseado y añade el grupo `admin` bajo **Parent groups**.

Finalmente, haz clic en **Apply** para guardar los cambios. Si se te solicita, pega el comando de aplicar en la consola del servidor.



## Comandos comunes de LuckPerms

LuckPerms puede gestionarse tanto vía el editor web como directamente con comandos. Los siguientes comandos son los más usados para gestionar permisos:

| Comando                                                      | Descripción                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/lp user <playername> parent add <group>`                   | Añade al jugador al grupo de permisos.                       |
| `/lp user <playername> parent remove <group>`                | Elimina al jugador del grupo de permisos.                    |
| `/lp user <playername> permission set <permission>`          | Otorga el permiso al jugador.                                |
| `lp user <playername> permission settemp <permission> true <duration>` | Otorga un permiso temporal al jugador con duración como `1h` para 1 hora o `1m` para 1 minuto. |
| `/lp user <playername> permission unset <permission>`        | Elimina el permiso del jugador.                              |
| `/lp group <group> permission set <permission>`              | Otorga el permiso al grupo.                                  |
| `/lp group <group> permission unset <permission>`            | Elimina el permiso del grupo.                                |



## Conclusión

LuckPerms es una solución potente para la gestión avanzada de permisos en servidores de Hytale. Usando grupos, permisos y el editor web, puedes crear un sistema de roles estructurado que crece con tu comunidad.

Una vez configurado, LuckPerms facilita mantener rangos de staff, perks para jugadores y control de acceso, manteniendo la administración del servidor limpia, consistente y optimizada para el rendimiento.

Si tienes más preguntas o necesitas ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />