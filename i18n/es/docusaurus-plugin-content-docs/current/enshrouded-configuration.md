---
id: enshrouded-configuration
title: "Enshrouded: Configuración del Servidor Enshrouded"
description: "Descubre cómo personalizar los ajustes del servidor Enshrouded para un gameplay y gestión óptimos → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Enshrouded al lanzarse tiene algunos parámetros de configuración que puedes personalizar a tu gusto. En esta guía, exploraremos todos los parámetros de configuración disponibles actualmente y explicaremos cada uno con más detalle.

<YouTube videoId="wgvfvQdtwN4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/tc7mcyZqk8Wyafa/preview" title="¡Configura tu servidor Enshrouded en solo 60 segundos!" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o simplemente prefieras absorber la info de la forma más entretenida posible."/>

<InlineVoucher />

## Accediendo a tu Archivo de Configuración

Primero, tendrás que acceder a tu archivo de configuración para poder editar cualquier parámetro. Hay varias formas de editar este archivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="A través del Webinterface" default>

#### A través del Webinterface

El método más amigable es ir a la sección **Settings** en el webinterface de tu servidor de juegos y buscar los ajustes correspondientes ahí, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

</TabItem>

<TabItem value="configs" label="A través del archivo de configuración WI">

#### A través del archivo de configuración WI

:::note
El servidor debe estar detenido antes de que puedas editar la configuración; editar el archivo y reiniciar el servidor hará que los cambios se deshagan.
:::

Alternativamente, para usuarios que quieran editar directamente el archivo en crudo, puedes acceder a esto yendo a la sección **Configs** en el webinterface de tu servidor de juegos y pulsando el botón azul de editar archivo, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/jPep5HzYtWnJTxT/preview)

Esto abrirá un editor de texto directamente en el sitio para que puedas editarlo.

</TabItem>

<TabItem value="ftp" label="A través de FTP">


#### A través de FTP

:::note
El servidor debe estar detenido antes de que puedas editar la configuración; editar el archivo y reiniciar el servidor hará que los cambios se deshagan.
:::

El último método para acceder al archivo en crudo es mediante FTP. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md). Sin embargo, este método tarda más y si quieres editar directamente el contenido del archivo, te recomendamos usar simplemente la sección **Configs** en el webinterface de tu servidor de juegos como mencionamos antes.

</TabItem>
</Tabs>

## Opciones de Configuración del Servidor

Estas son las opciones de configuración del servidor disponibles actualmente que el juego ofrece para personalizar tu servidor, destacando el nombre del servidor, la contraseña y algunos ajustes internos.

:::tip
No recomendamos cambiar el puerto, la IP o los ajustes de directorio, ya que estos son configurados automáticamente por el servidor de juegos. ¡Cambiar estos valores podría romper tu servidor de juegos!
:::

| Nombre del Parámetro | Ejemplo                                 | Descripción                                                 |
| -------------------- | --------------------------------------- | ----------------------------------------------------------- | 
| name                 | ZAP-Hosting Docs Test                   | El nombre de tu servidor                                    |
| password             | iLoveZAP!2024                           | Protege el servidor con una contraseña (privado)           |
| saveDirectory        | ./savegame (por defecto)                | Define un directorio donde quieres que se guarden tus partidas guardadas |
| logDirectory         | ./logs (por defecto)                    | Define un directorio donde quieres que se guarden tus logs  |
| ip                   | 123.123.123.123                         | IP pública en la que corre el servidor                      |
| gamePort             | 15636 (por defecto)                     | Puerto público en el que corre el servidor                  |
| queryPort            | 15637 (por defecto)                     | Puerto público por el que se puede acceder al servidor      |
| slotCount            | 4                                       | Máximo número de jugadores que pueden unirse al servidor (máx 16) |

Después de completar tus cambios, asegúrate de guardar el archivo donde corresponda y reinicia tu servidor. La próxima vez que tu servidor arranque, usará los ajustes que hayas configurado.

<InlineVoucher />