---
id: moe-server-savegames
title: "Myth of Empires: Gestión de Savegames"
description: "Descubre cómo gestionar y hacer copias de seguridad de tus partidas guardadas de Myth of Empires para una continuidad de juego sin interrupciones → Aprende más ahora"
sidebar_label: Gestionar Savegames
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En esta guía, descubrirás cómo gestionar tus partidas guardadas de Myth of Empires en tu servidor de juegos, incluyendo cómo hacer copias de seguridad de tus partidas locales y del servidor, así como subirlas a tu servidor.

<InlineVoucher />

## Preparación

Para acceder a los archivos de tu servidor, necesitarás un cliente FTP como [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), ambos de código abierto y gratuitos.

Deberás conectarte a tu servidor mediante un cliente FTP usando las credenciales que encontrarás en **Herramientas->FTP-Browser** en el panel web de tu servidor de juegos. Usa nuestra [guía de Acceso vía FTP](gameserver-ftpaccess.md) para más ayuda para conectarte a tu servidor.

## Copia de seguridad del Savegame

### Savegame local

Los Savegames locales son los que creas mientras alojas una partida multijugador localmente en tu dispositivo. MOE los guarda en una carpeta dentro de la ubicación de instalación del juego.

Abre Steam en tu sistema, haz clic derecho en tu juego **Myth of Empires** y selecciona **Explorar archivos locales** mientras estás en la sección **Gestionar**.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Navega a la siguiente ruta:
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

En esta carpeta podrás ver todos tus Savegames locales existentes.

### Accediendo al Savegame vía FTP

Hacer una copia de seguridad de tu Savegame desde el servidor es sencillo. Una vez conectado a tu servidor de juegos mediante un cliente FTP, ve a la siguiente ruta:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

En esta ubicación deberías ver carpetas, que son tus Savegames. Simplemente haz clic derecho en la carpeta y usa el botón **Descargar** para guardarla localmente en tu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Copia de seguridad automática

También ofrecemos una opción para hacer copias de seguridad automáticas de tu Savegame (y archivo de configuración) directamente desde nuestro panel web. Solo ve al panel web de tu servidor de juegos y entra en la sección **Herramientas->Copias de seguridad**. Aquí puedes configurar varias opciones para programar copias automáticas para tu servidor. Te damos 10 GB de almacenamiento gratuito para copias de seguridad donde se guardarán tus backups. Para más info sobre copias de seguridad, echa un vistazo a nuestra guía dedicada [Copias de seguridad](gameserver-backups.md).

## Subir Savegame

Al igual que hacer una copia, subir tu Savegame es fácil. Primero asegúrate de conectarte a tu servidor de juegos mediante un cliente FTP. Cuando estés listo, ve a la siguiente ruta:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Simplemente arrastra y suelta cualquiera de tus Savegames en esta carpeta a través del cliente FTP y se subirá a tu servidor.

## Activar Savegame

Para usar tu Savegame, tendrás que seleccionarlo en la configuración de tu servidor. La forma más fácil es ir a la sección **Ajustes** en el panel web de tu servidor de juegos. Usa nuestra [guía de Configuración del servidor](moe-configuration.md) para más detalles.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

En esta sección, busca el parámetro **Nombre del mapa** en la configuración básica, y tu mundo subido debería aparecer aquí. Si no lo ves, asegúrate de reiniciar tu servidor después de subirlo.

¡Has añadido exitosamente un Savegame a tu servidor de juegos!

<InlineVoucher />