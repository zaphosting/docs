---
id: tf2-plugins
title: "Team Fortress 2: Instala plugins en tu propio servidor"
description: "Descubre cómo personalizar y mejorar tu servidor de juegos con plugins de Sourcemod y Metamod para una mejor gestión y funciones → Aprende más ahora"
sidebar_label: Instalar Plugins
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/tf2-plugins.json';


## Introducción

Conoce cómo instalar Sourcemod y Metamod y cómo usar plugins en tu servidor. Ambas extensiones te permiten personalizar juegos como CS:S, CS:GO, DoD:S o TF2 y ampliar significativamente las opciones de gestión del servidor.

Con Sourcemod y Metamod, puedes añadir plugins, activar funciones especiales y adaptar tu servidor exactamente a tus gustos.

<InlineVoucher />



## Instalación de Sourcemod / Metamod

### Preparación

Las extensiones necesarias se pueden descargar desde [Sourcemod](https://sourcemod.net/) y [Metamod](https://www.sourcemm.net/downloads.php?branch=stable). Siempre usa las versiones **estables** más recientes para asegurar la máxima funcionalidad y compatibilidad.

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

Necesitas los paquetes para Linux de **Sourcemod** y **Metamod**. Descárgalos desde las fuentes indicadas. Tras la descarga, deberías tener dos archivos comprimidos. Extráelos en tu PC para obtener un directorio addons que contiene las carpetas `sourcemod` y `metamod`.

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### Instalación

Una vez completados los pasos anteriores, puedes continuar con la instalación. Sube los archivos a tu servidor vía FTP usando un cliente FTP. Si no estás familiarizado con FTP y su funcionamiento, consulta esta guía: [Acceso vía FTP](gameserver-ftpaccess.md)

Luego, sube la carpeta **addons** al directorio principal de tu servidor. La estructura de carpetas debería quedar así:

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

La configuración de **Sourcemod** y **Metamod** ya está lista. Conéctate a tu servidor en el juego y usa el comando ``sm version`` en la consola para verificar que Sourcemod y Metamod se instalaron correctamente. La salida debería verse así:

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

Si aparece el mensaje **Unknown command**, algo salió mal durante la instalación.



## Instalación de plugins

### Preparación

Una vez que Sourcemod y Metamod estén instalados y funcionando correctamente, puedes empezar a añadir plugins. Descarga los plugins que quieras instalar en tu servidor desde [Sourcemod](https://sourcemod.net/), donde encontrarás una gran y creciente colección publicada a lo largo de los años. Para cada plugin, asegúrate de obtener el archivo .smx correspondiente.

### Instalación

Cuando tengas los plugins descargados, procede a instalarlos. Esto se hace vía FTP subiendo los archivos de los plugins al directorio:

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## Plugins populares
¿Sigues buscando los plugins perfectos para tu servidor? Navega por nuestra lista cuidadosamente seleccionada de los plugins más populares y recomendados para mejorar tu experiencia de juego y darle a tu servidor ese toque final que se merece. Inspírate y encuentra justo las adiciones que encajan con tu proyecto.
<SearchableItemList items={items} />


## Conclusión

Si seguiste todos los pasos, deberías haber instalado con éxito Sourcemod/Metamod y los plugins que querías. Para cualquier duda o ayuda, no dudes en contactar con nuestro equipo de soporte, ¡disponible todos los días para echarte una mano! 🙂

<InlineVoucher />