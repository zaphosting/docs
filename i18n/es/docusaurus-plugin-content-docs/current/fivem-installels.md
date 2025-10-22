---
id: fivem-installels
title: "FiveM: Instalando ELS en tu servidor"
description: "Descubre cómo configurar y activar ELS-FiveM con carmods para mejorar la experiencia de juego en tu servidor → Aprende más ahora"
sidebar_label: Instalar ELS
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Conéctate al FTP

Para poder instalar el recurso, es necesario configurar el [Acceso vía FTP](gameserver-ftpaccess.md).

## Preparación

Primero descargamos la última [versión de ELS-FiveM](https://github.com/MrDaGree/ELS-FiveM/releases/latest), que encontrarás bajo "Assets".

Una vez descargado ELS, descomprime el archivo y abre la carpeta "ELS-FiveM".

## Configuración

Ahora configuramos ELS-FiveM haciendo una copia del archivo `vcf.default.lua` y renombrándola a `vcf.lua`.

:::info
Nota: No elimines el archivo original `vcf.default.lua`.
:::

Otras configuraciones también se pueden ajustar en el archivo "config.lua", pero las dejaremos por defecto.

## Subir el recurso

Puedes instalar ELS-FiveM subiendo los archivos mediante drag & drop a la carpeta "resources".

Una vez subidos, abre el archivo server.cfg que está en la carpeta server-data:

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

Entre las entradas de inicio para recursos, ahora puedes añadir la entrada para ELS-FiveM.

Después reinicia el servidor y ¡ELS-FiveM estará disponible en el juego!

## Configuración de Carmods

Para añadir nuevos carmods a ELS-FiveM primero necesitas el ELS-Config, que normalmente se encuentra en la carpeta del carmod descargado. Usualmente se llama `autoname.xml`, en nuestro caso es `scpdvic.xml`.

Súbelos a la carpeta "vcf" dentro de la carpeta de ELS-FiveM vía FTP.

Ahora que el archivo está subido, abre el archivo 'vcf.lua' en la carpeta de ELS-FiveM.

:::info
Asegúrate de que la línea anterior siempre termine con una coma.
:::

¡Listo! Tu Carmod debería estar habilitado para ELS y funcionando después de reiniciar el servidor.

<InlineVoucher />