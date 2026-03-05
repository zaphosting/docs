---
id: csgo-plugins
title: "CS:GO: Instalación de plugins"
description: "Explora el panorama en evolución de los plugins y proyectos comunitarios de CS:GO para mejorar tu experiencia en Counter-Strike → Aprende más ahora"
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

Con la transición a Source 2, el ecosistema de plugins ha cambiado significativamente. Para CS:GO, **CounterStrikeSharp** se ha consolidado como el framework principal y activamente mantenido para el desarrollo de plugins del lado del servidor.

<InlineVoucher />



## Instalación de Metamod:Source

Primero debe instalarse Metamod, ya que CounterStrikeSharp depende de él. Después de descargar el [Metamod:Source 2.x Dev Build](https://www.metamodsource.net/downloads.php?branch=dev), extrae el archivo. Dentro del archivo encontrarás un directorio `addons`. Este directorio debe subirse directamente al directorio del juego CS:GO vía [FTP](gameserver-ftpaccess.md).

```
../game/csgo/
```

Después de copiar los archivos, localiza el archivo `gameinfo.gi` dentro de `/game/csgo/`. Ábrelo con un editor de texto. Dentro del archivo, busca la línea que contiene `Game_LowViolence csgo_lv`. Justo debajo de esta línea, añade la siguiente entrada:

```
Game csgo/addons/metamod
```

<Button label="Descargar Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## Instalación de CounterStrikeSharp

Una vez confirmado que Metamod está funcionando, se puede instalar CounterStrikeSharp. CounterStrikeSharp se distribuye a través de su repositorio oficial en GitHub y se ofrece como un paquete precompilado. Descarga la versión de CounterStrikeSharp que incluye el runtime. Extrae el archivo y copia el directorio `addons` incluido en el mismo directorio del juego CS:GO vía [FTP](gameserver-ftpaccess.md).

```
/game/csgo/
```

No combines ni renombres directorios manualmente. La estructura proporcionada por el archivo debe mantenerse intacta. Después de subir los archivos, reinicia el servidor. Durante el arranque, Metamod cargará automáticamente CounterStrikeSharp. Para verificar la instalación, abre la consola del servidor y ejecuta:

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="Descargar CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## Instalación de Plugins

Los plugins para CounterStrikeSharp se proporcionan como archivos `.dll` compilados. Estos archivos se colocan en el directorio `plugins` dentro de la ruta de instalación de CounterStrikeSharp.

Después de copiar un plugin en este directorio y reiniciar el servidor, CounterStrikeSharp carga automáticamente todos los plugins disponibles. Si un plugin no se carga, revisa los logs del servidor para mensajes de error relacionados con CounterStrikeSharp o el plugin en cuestión.




## Plugins Populares

<SearchableItemList items={items} />



## Conclusión

Si has seguido todos los pasos, deberías haber instalado correctamente Metamod/CounterStrikeSharp y los plugins que deseas. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para ayudarte! 🙂




<InlineVoucher />