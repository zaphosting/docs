---
id: rimworldtogether-configuration
title: "RimWorld Together: Configuración del Servidor"
description: "Explora los ajustes del servidor de RimWorld Together para personalizar la jugabilidad y gestionar el acceso para una experiencia multijugador a tu medida → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores de RimWorld Together vienen con una amplia variedad de parámetros de configuración que puedes personalizar a tu gusto. En esta guía, exploraremos todos los parámetros de configuración disponibles actualmente y explicaremos cada uno con más detalle.

<InlineVoucher />

## Accediendo a tu Archivo de Configuración

Primero, tendrás que acceder a tu archivo de configuración para poder editar cualquier parámetro. Actualmente, la única forma de editar estos archivos es accediendo a tu servidor vía FTP. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md).

:::note
El servidor debe estar detenido antes de que puedas editar cualquier configuración; editar un archivo de configuración y reiniciar el servidor hará que los cambios se deshagan.
:::

Con tu cliente FTP listo, navega hasta el siguiente directorio:
```
../rimworld-together/Core
```

Esta carpeta contiene una gran variedad de archivos de configuración `.json` para tu servidor de RimWorld Together.

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## Opciones de Configuración del Servidor

En las secciones siguientes, te mostramos cómo ajustar algunas opciones de configuración populares y comunes para tu servidor de RimWorld Together. Puedes aprender más sobre cada uno de los archivos leyendo la [guía oficial de RimWorld Together](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core) que cubre las opciones de configuración.

:::tip
No recomendamos cambiar los ajustes de Puerto o IP que se encuentran en el archivo **ServerConfig.json**, ya que estos son configurados automáticamente por el servidor de juegos. ¡Cambiar estos valores podría romper tu servidor de juegos!
:::

#### Lista Blanca del Servidor

Activar o desactivar la lista blanca del servidor es sencillo. Abre el archivo de configuración **Whitelist.json** y establece el parámetro `UseWhitelist` en true.

Luego ajusta el parámetro `WhitelistedUsers`, añadiendo los nombres de usuario dentro del juego de las personas que quieras incluir en la lista. Cualquiera que no esté en esta lista no podrá conectarse.

#### Ajustes de Jugabilidad

Puedes modificar una amplia gama de parámetros de dificultad para tus servidores de RimWorld Together a través del archivo **DifficultyValues.json**.

También es posible ajustar la configuración de guardado mediante el archivo **WorldConfig.json**. Se recomienda no editar este archivo si ya estás avanzado en tu partida, ya que podría arruinar la experiencia.

<InlineVoucher />