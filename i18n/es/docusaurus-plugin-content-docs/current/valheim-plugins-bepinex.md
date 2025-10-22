---
id: valheim-plugins-bepinex
title: "Valheim: Instalación de plugins en el servidor (BepInEx)"
description: "Descubre cómo mejorar tu experiencia en Valheim con plugins BepInEx y desbloquea nuevas posibilidades de modding → Aprende más ahora"
sidebar_label: Instalar plugins (BepInEx)
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/valheim-plugins.json';

## Introducción
BepInEx es un framework de plugins y mods open-source súper popular que permite a los jugadores añadir mods a varios juegos que tradicionalmente no soportan modding oficial. En esta guía, te mostramos cómo instalar plugins a través de BepInEx en Valheim.

<InlineVoucher />

## Versión del juego BepInEx

Para usar plugins compatibles con **BepInEx** en Valheim, primero tienes que instalar la versión del juego **Valheim Plus** en tu servidor. También tenemos una versión independiente llamada **Valheim BepInEx**, pero recomendamos instalar Valheim Plus porque viene con todo incluido. Esto se puede hacer fácilmente usando nuestra función de cambio de juego en el servidor, aprende más leyendo nuestra [guía de Cambio de Juego](gameserver-gameswitch.md).

:::info
Valheim Plus también debe estar instalado localmente en tu PC. Aquí puedes descargar Valheim Plus: [Descarga Valheim Plus](https://www.nexusmods.com/valheim/mods/4).
:::

## Subiendo Plugins

Empieza buscando mods compatibles con BepInEx que quieras añadir a tu servidor. Normalmente, en la página de descarga del plugin puedes ver información sobre su compatibilidad.

:::important
Los plugins deben ser compatibles con **BepInEx**, ¡si no, no funcionarán!
:::

Cuando tengas un mod listo, conéctate a tu servidor de juegos vía FTP. Lee nuestra [guía de Acceso vía FTP](gameserver-ftpaccess.md) para saber cómo hacerlo.

Con tu cliente FTP listo, navega hasta el siguiente directorio:
```
../valheim-linux-plus/BepInEx/plugins
```

En esta carpeta debes subir los mods que descargaste. Normalmente, serán archivos con extensión `.dll`.

:::note
El servidor debe estar detenido antes de añadir o editar mods, si no, los cambios podrían no guardarse.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## Arrancando el servidor

Una vez que hayas subido los plugins que querías, simplemente vuelve a iniciar tu servidor.

:::info
Algunos plugins pueden requerir instalación también en el cliente de tu PC. Consulta la información en la web del plugin para saber si es necesario.
:::

¡Has instalado con éxito nuevos plugins BepInEx en tu servidor de juegos Valheim!

## Plugins Populares

¿Sigues buscando los plugins perfectos para tu servidor?

Explora nuestra lista cuidadosamente seleccionada con los plugins más populares y recomendados para mejorar tu experiencia y darle a tu servidor ese toque final que se merece. Inspírate y encuentra justo las adiciones que encajan con tu proyecto.

<SearchableItemList items={items} />

<InlineVoucher />