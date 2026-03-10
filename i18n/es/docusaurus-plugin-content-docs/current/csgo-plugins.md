---
id: csgo-plugins
title: "CS:GO: Instalación de plugins"
description: "Aprende cómo instalar plugins de Sourcemod en tu servidor de juegos CS:GO y amplía la experiencia con funciones personalizadas → Aprende más ahora"
sidebar_label: Instalar plugins
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## Introducción

CS:GO continúa la larga tradición de personalización de servidores impulsada por la comunidad. Los plugins permiten a los propietarios de servidores ampliar la jugabilidad, añadir funciones que mejoran la experiencia, implementar reglas personalizadas o crear modos de juego completamente nuevos.

Para servidores de CS:GO, **Sourcemod** es el framework más utilizado para plugins del lado del servidor. Sourcemod funciona junto con **Metamod:Source**, que actúa como la capa base que permite a los plugins engancharse al motor del juego. Al instalar ambos componentes, los administradores del servidor pueden gestionar fácilmente los plugins y ampliar la funcionalidad del servidor.

<InlineVoucher />



## Instalación de Metamod:Source

Metamod:Source debe instalarse primero, ya que Sourcemod depende de él. Comienza descargando la última versión de Metamod:Source desde la página oficial. Extrae el archivo descargado en tu ordenador.

Dentro del archivo encontrarás un directorio `addons`. Sube este directorio a tu servidor de juegos CS:GO usando [FTP](gameserver-ftpaccess.md) para que se fusione con el directorio del juego existente `../csgo/`.


Después de subir los archivos, reinicia tu servidor. Para verificar que Metamod está funcionando correctamente, abre la consola del servidor y ejecuta el siguiente comando:

```
meta version
```


Si Metamod está instalado correctamente, la consola mostrará la versión instalada y más información.

<Button label="Descargar Metamod:Source" link="https://www.metamodsource.net/downloads.php" block />



## Instalación de Sourcemod

Una vez instalado Metamod:Source, puedes instalar Sourcemod. Descarga la última versión estable de Sourcemod desde la página oficial y extrae el archivo. Sube las carpetas `addons` y `cfg` incluidas a tu servidor de juegos CS:GO usando [FTP](gameserver-ftpaccess.md). Los directorios deben colocarse en el directorio del juego CS:GO `../csgo/`. Tras subir los archivos, reinicia el servidor. Sourcemod se cargará automáticamente a través de Metamod.

Para confirmar que Sourcemod está funcionando, abre la consola del servidor y ejecuta:

```
sm version
```


Si la instalación fue exitosa, el servidor devolverá la versión actual de Sourcemod y la información de compilación.

<Button label="Descargar Sourcemod" link="https://www.sourcemod.net/downloads.php" block />



## Instalación de Plugins

Los plugins para Sourcemod suelen distribuirse como archivos `.smx`. Estos archivos de plugins compilados deben subirse al directorio `plugins` dentro de la instalación de Sourcemod.

```
../csgo/addons/sourcemod/plugins/
```


Después de subir el archivo del plugin, reinicia el servidor o recarga el plugin directamente desde la consola del servidor usando el siguiente comando:

```
sm plugins load <pluginname>
```


Si un plugin no se carga correctamente, revisa los logs del servidor ubicados en el directorio `logs` de Sourcemod para posibles mensajes de error.

Algunos plugins también pueden incluir archivos de configuración adicionales. Estos archivos suelen colocarse dentro de:

```
../csgo/addons/sourcemod/configs/
```


Sigue siempre las instrucciones de instalación proporcionadas por el desarrollador del plugin para asegurar su correcto funcionamiento.



## Plugins Populares

<SearchableItemList items={items} />



## Conclusión

Si has seguido todos los pasos, deberías haber instalado con éxito Metamod:Source, Sourcemod y los plugins que deseas en tu servidor de juegos CS:GO. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />