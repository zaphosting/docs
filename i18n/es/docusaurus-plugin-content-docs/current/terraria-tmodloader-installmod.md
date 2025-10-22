---
id: terraria-tmodloader-installmod
title: "Terraria: Instalación de mods (tModLoader)"
description: "Descubre cómo instalar y activar fácilmente mods de tModLoader para Terraria y mejora tu experiencia de juego → Aprende más ahora"
sidebar_label: Instalar mods (tModLoader)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Instalación de mods vía tModLoader

El tModLoader para Terraria es una modificación clave que permite cargar mods en tu servidor de juegos de Terraria. La instalación se hace mediante arrastrar y soltar y con solo un ajuste en tu servidor, así que es muy fácil y se hace en pocos minutos.


## Instalación de tModLoader en tu PC

Si aún no tienes instalado tModLoader, puedes descargarlo gratis directamente desde Steam. Simplemente busca tModLoader en la tienda de Steam o usa el siguiente enlace: [tModLoader en Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

Después de descargarlo e instalarlo, puedes iniciar tu tModLoader directamente desde Steam.

## Añadir mods en tu PC

Una vez en el menú principal, abre tu carpeta de mods, para eso haz clic en **Mods** y luego en **Manage Mods** y después en **Open Mod Folder**:

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

En la carpeta que se abre, que por defecto está en **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods**, puedes poner los mods que quieras.
En este ejemplo estamos instalando el Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
Un mod siempre debe tener la extensión **.tmod**, ¡si no, el servidor no podrá cargarlo!
:::

Luego puedes cerrar la carpeta, hacer clic en **Back** en el juego y luego en **Mods**:

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

Ahí verás el mod que agregaste y podrás activarlo haciendo clic en **Disabled**:

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

Para activar el mod, haz clic en **Reload Mods**, luego puedes cerrar el juego y empezar a instalar el mod en tu servidor.


## Instalación de mods en tu servidor

Para poder instalar el mod en tu servidor, conéctate a tu servidor vía FTP, aquí te explicamos cómo: [Acceso vía FTP](gameserver-ftpaccess.md)

Navega hasta el directorio: /g******/terraria/mods/ y ahí sube el archivo **.tmod** que usaste antes:

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
Si no existe un archivo llamado **enabled.json**, primero tienes que iniciar el servidor para que se cree. Alternativamente, puedes crear el archivo tú mismo.
:::

Luego abre el archivo **enabled.json** con **Click derecho > Editar** y añade el nombre de tu mod, que debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

Si quieres añadir varios mods, hazlo así:

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
Recuerda que debes poner una coma después de cada nombre de mod, excepto después del último nombre.
:::

Ahora puedes cerrar la conexión FTP, iniciar tu servidor y conectarte con el tModLoader que descargaste de Steam.

Presionando **ESC**, luego haciendo clic en **Settings** y después en **Mod Configuration** podrás ver los mods cargados en el servidor:

<InlineVoucher />