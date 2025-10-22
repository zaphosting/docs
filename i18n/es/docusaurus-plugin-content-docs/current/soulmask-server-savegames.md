---
id: soulmask-server-savegames
title: "Soulmask: Gestión de partidas guardadas de Soulmask"
description: "Descubre cómo gestionar y hacer copias de seguridad de tus partidas guardadas de Soulmask localmente y en tu servidor para un juego seguro → Aprende más ahora"
sidebar_label: Gestionar partidas guardadas
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En esta guía, exploraremos cómo gestionar tus partidas guardadas de Soulmask en tu servidor de juegos, incluyendo cómo hacer copias de seguridad de tus partidas locales y del servidor, así como subirlas a tu servidor.

<InlineVoucher />

## Preparación

Para acceder a los archivos de tu servidor, necesitarás un cliente FTP como [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), ambos de código abierto y gratuitos.

Tendrás que conectarte a tu servidor mediante un cliente FTP usando las credenciales que encontrarás en **Herramientas->FTP-Browser** en el panel web de tu servidor de juegos. Usa nuestra [guía de acceso vía FTP](gameserver-ftpaccess.md) para más ayuda para conectar con tu servidor.

## Copia de seguridad de la partida guardada

### Partida guardada local

Las partidas guardadas locales son las que creas mientras alojas una partida multijugador localmente en tu dispositivo. Estas se encuentran dentro del AppData local de Windows, específicamente en la siguiente ruta:
```
../AppData/Local/WS/[tu_steamid]/AutoGames
```

:::tip
Puedes acceder fácilmente a esta ruta presionando `CTRL` + `R` al mismo tiempo y buscando la siguiente ruta en el cuadro de ejecución: `%userprofile%/appdata/local/WS/`. Simplemente presiona **OK** y abre la carpeta con tu SteamID para llegar a la carpeta AutoGames.

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

En esta ubicación podrás ver todas tus partidas guardadas locales. Cada carpeta estará etiquetada con el código de invitación del servidor, lo que facilita identificar el mundo correcto.

### Acceso a la partida guardada vía FTP

Hacer una copia de seguridad de tu partida guardada desde el servidor es sencillo. Una vez conectado a tu servidor de juegos mediante un cliente FTP, dirígete a la siguiente ruta:
```
../soulmask/WS/Saved/Worlds/Dedicated
```

En esta ubicación podrás ver la carpeta principal `Level01_Main`, que es donde se encuentra la partida guardada para el servidor dedicado. Simplemente haz clic derecho en la carpeta y usa el botón **Descargar** para guardarla localmente en tu dispositivo.

:::note
Actualmente, los servidores dedicados de Soulmask solo soportan una partida guardada a la vez, que se encuentra en la carpeta principal `Level01_Main`.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### Copia de seguridad automática

También ofrecemos una opción para hacer copias de seguridad automáticas de tu partida guardada (y archivo de configuración) directamente desde nuestro panel web. Solo tienes que ir al panel web de tu servidor de juegos y entrar en la sección **Herramientas->Copias de seguridad**. Aquí puedes configurar varias opciones para programar copias automáticas para tu servidor. Te damos 10GB de almacenamiento gratuito para copias de seguridad donde se guardarán tus backups. Para más info sobre copias de seguridad, echa un vistazo a nuestra guía dedicada de [Copias de seguridad](gameserver-backups.md).

## Subir partida guardada

Al igual que hacer copias de seguridad, subir tu partida guardada es fácil. Primero asegúrate de conectarte a tu servidor de juegos mediante un cliente FTP y de apagar tu servidor.

:::note
Actualmente, los servidores dedicados de Soulmask solo soportan una partida guardada a la vez, que se encuentra en la carpeta principal `Level01_Main`.
:::

Cuando estés listo, ve a la siguiente ruta:
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

Ahora arrastra y suelta el archivo **world.db** de la partida que quieres subir y reemplaza el archivo existente. Asegúrate de descargar el archivo existente del servidor si quieres conservarlo, de lo contrario se perderá al sobrescribirlo.

También puedes subir tu archivo de configuración de juego, yendo a la siguiente ruta:
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

Arrastra y suelta el archivo **GameXishu.json** de la partida que quieres subir y reemplaza el archivo existente. De nuevo, descarga el archivo existente si quieres conservarlo antes de reemplazarlo.

:::tip
Si la partida que usas tiene un nombre ligeramente diferente para el archivo **GameXishu.json**, por ejemplo `GameXishu_2.json`, cambia el nombre del archivo de vuelta a `GameXishu.json` para que sea reconocido por el servidor dedicado.
:::

Ahora simplemente inicia el servidor de nuevo, y tu partida debería cargarse correctamente en el servidor.

<InlineVoucher />