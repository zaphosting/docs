---
id: vrising-plugins-bepinex
title: "V Rising: Instalación de plugins en el servidor (BepInEx)"
description: "Descubre cómo mejorar tu experiencia en V Rising con mods de BepInEx y personalizar tu servidor → Aprende más ahora"
sidebar_label: Instalar plugins (BepInEx)
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Guía Archivada
Este documento ha sido archivado. Los documentos se archivan cuando ya no son relevantes, son incorrectos o están desactualizados. Ha sido archivado por las siguientes razones:

**Razón**: El producto V Rising con BepInEx ya no funciona y por eso ha sido retirado de la tienda. 
::::

## Introducción
BepInEx es un framework de plugins y mods open-source súper popular que permite a los jugadores añadir mods a varios juegos que tradicionalmente no soportan modding oficial. En esta guía te mostramos cómo instalar plugins a través de BepInEx en V Rising.
<InlineVoucher />

## Versión del juego BepInEx

Para usar plugins compatibles con **BepInEx** en V Rising, primero tienes que instalar la versión del juego **V Rising BepInEx** en tu servidor. Esto se puede hacer fácilmente usando nuestra función de cambio de juego para servidores, aprende más leyendo nuestra [Guía de Cambio de Juego](gameserver-gameswitch.md).

## Subir Plugins

Empieza buscando mods compatibles con BepInEx que quieras añadir a tu servidor. Normalmente puedes ver información sobre la compatibilidad del plugin en la página de descarga correspondiente.

:::important
Los plugins que uses deben ser compatibles con **BepInEx**, ¡si no no funcionarán!
:::

Cuando tengas un mod listo, conéctate a tu servidor de juegos vía FTP. Lee nuestra guía de [Acceso vía FTP](gameserver-ftpaccess.md) para aprender cómo hacerlo.

Con tu cliente FTP listo, navega hasta el siguiente directorio:
```
../vrising/BepInEx/plugins
```

En esta carpeta debes subir los mods que descargaste. Normalmente serán archivos con extensión `.dll`. En este ejemplo, subimos un mod framework que es útil para crear comandos.

:::note
El servidor debe estar detenido antes de añadir o editar mods, si no, los cambios podrían no guardarse.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## Arrancar el Servidor

Una vez que hayas subido los plugins que querías, simplemente vuelve a iniciar tu servidor.

:::info
Algunos plugins pueden requerir instalación también en el cliente de tu PC. Consulta la información en la web del plugin para saber si es necesario.
:::

¡Has instalado con éxito nuevos plugins BepInEx en tu servidor de juegos V Rising!

<InlineVoucher />