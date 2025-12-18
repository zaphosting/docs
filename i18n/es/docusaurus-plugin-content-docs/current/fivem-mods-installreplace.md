---
id: fivem-mods-installreplace
title: "FiveM: Instala mods de coches reemplazados en el servidor"
description: "Descubre cómo configurar y subir mods a tu servidor FiveM para experiencias de juego personalizadas → Aprende más ahora"
sidebar_label: Instalar Mods de Coches Reemplazados
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Conéctate vía FTP
Primero debes conectarte a tu servidor vía FTP, puedes usar nuestra [guía de Acceso vía FTP](gameserver-ftpaccess.md) para esto.

## Preparación

Ahora crea una carpeta para tus mods dentro de la carpeta "resources".

:::info
Puedes nombrar la carpeta como quieras siempre que no contenga caracteres especiales. En nuestro ejemplo se llama "assets".
:::

Ahora crea un archivo fxmanifest.lua en la carpeta "assets" que acabas de crear.

El siguiente texto debe ir en este archivo:

```
fx_version 'cerulean'
games { 'gta5' }

```

Luego guarda y cierra el fxmanifest.lua, ya no lo necesitaremos.

Dentro de tu carpeta assets ahora crea una carpeta llamada "stream".

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## Sube los Mods

Ahora abre esta carpeta stream, aquí puedes subir todos los archivos ytd y yft arrastrándolos y soltándolos:

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

Después de subir todos los mods, solo tienes que añadir tu recurso en el server.cfg, que encontrarás en la carpeta "server-data" de tu servidor FiveM.

Puedes abrirlo con cualquier editor de texto, bajo las entradas "start" ahora puedes añadir tu recurso así:

```
start assets
```

¡Listo! Tras reiniciar el servidor, ¡el Carmod debería estar disponible en el servidor!

<InlineVoucher />