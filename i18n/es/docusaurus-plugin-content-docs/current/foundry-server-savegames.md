---
id: foundry-server-savegames
title: "Foundry: Gestión de partidas guardadas de Foundry"
description: "Descubre cómo hacer copias de seguridad y gestionar tus partidas guardadas de Foundry de forma segura, tanto localmente como en tu servidor, para una continuidad de juego sin interrupciones → Aprende más ahora"
sidebar_label: Gestionar partidas guardadas
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

En esta guía, exploraremos cómo gestionar tus partidas guardadas de Foundry en tu servidor de juegos, incluyendo cómo hacer copias de seguridad de tus partidas locales y del servidor, así como subirlas a tu servidor.

<InlineVoucher />

## Preparación

Para acceder a los archivos de tu servidor, necesitarás un cliente FTP como [WinSCP](https://winscp.net/eng/index.php) o [FileZilla](https://filezilla-project.org/), ambos de código abierto y gratuitos.

Tendrás que conectarte a tu servidor mediante un cliente FTP usando las credenciales que encontrarás en **Herramientas->Explorador FTP** en el panel web de tu servidor de juegos. Usa nuestra [guía de acceso vía FTP](gameserver-ftpaccess.md) para más ayuda sobre cómo conectarte a tu servidor.

## Copia de seguridad de la partida guardada

### Partida guardada local

Las partidas guardadas locales son las que creas mientras alojas una partida multijugador localmente en tu dispositivo. Estas se encuentran dentro del AppData LocalLow de Windows, específicamente en la siguiente ruta:
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
Puedes acceder fácilmente a esta ruta directamente presionando `CTRL` + `R` al mismo tiempo y buscando la siguiente ruta en el cuadro de ejecutar: `%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`. Simplemente presiona **OK** y serás llevado a la carpeta.

![](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

En esta ubicación podrás ver todas tus partidas guardadas locales.

![](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### Acceder a la partida guardada vía FTP

Hacer una copia de seguridad de tu partida guardada desde el servidor es sencillo. Una vez conectado a tu servidor de juegos mediante un cliente FTP, dirígete a la siguiente ruta:
```
../foundry/saves/save
```

En esta ubicación deberías ver carpetas, cada una representando una partida guardada. Simplemente haz clic derecho sobre la carpeta y usa el botón **Descargar** para guardarla localmente en tu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### Copia de seguridad automática

También ofrecemos una opción para hacer copias de seguridad automáticas de tu partida guardada (y archivo de configuración) directamente desde nuestro panel web. Solo tienes que ir al panel web de tu servidor de juegos y entrar en la sección **Herramientas->Copias de seguridad**. Aquí puedes configurar varias opciones para programar copias automáticas para tu servidor. Te damos 10 GB de almacenamiento gratuito para copias de seguridad donde se guardarán tus backups. Para más info sobre copias de seguridad, echa un vistazo a nuestra guía dedicada [Copias de seguridad](gameserver-backups.md).

## Subir partida guardada

Al igual que hacer una copia de seguridad, subir tu partida guardada es fácil. Primero asegúrate de conectarte a tu servidor de juegos mediante un cliente FTP. Cuando estés listo, ve a la siguiente ruta:
```
../foundry/saves/save
```

![](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

Simplemente arrastra y suelta cualquiera de tus partidas guardadas en esta carpeta a través del cliente FTP y se subirá a tu servidor.

:::tip
Puede ser útil copiar el nombre de la carpeta de la partida guardada que has subido, ya que lo necesitarás para activarla en la siguiente sección.
:::

## Activar partida guardada

Para usar una partida guardada específica, tendrás que editar un archivo de configuración. Hay varias formas de hacerlo, pero cubriremos cómo hacerlo desde el panel web, ya que es lo más sencillo. Si quieres ver otros métodos para editar el archivo, consulta nuestra [Configuración del servidor](foundry-configuration.md) que trata este tema.

Solo tienes que ir a la sección **Ajustes** en el panel web de tu servidor de juegos y encontrar la opción **Savename**.

Cambia esta opción al nombre de la carpeta de la partida guardada que subiste en el paso anterior. Cuando termines, asegúrate de guardar abajo con el botón verde **Guardar** y luego reinicia tu servidor.

<InlineVoucher />