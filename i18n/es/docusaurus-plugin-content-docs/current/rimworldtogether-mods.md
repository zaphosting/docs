---
id: rimworldtogether-mods
title: "RimWorld Together: Instalación de mods"
description: "Descubre cómo mejorar tu servidor de RimWorld Together con mods populares para una experiencia cooperativa online sin interrupciones → Aprende más ahora"
sidebar_label: Instalar Mods
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## Introducción

RimWorld Together es un mod multijugador de código abierto súper popular, gestionado completamente por la comunidad de RimWorld, que permite jugar en CO-OP online en el juego RimWorld. En esta guía, te mostraremos cómo instalar mods en tu servidor de RimWorld Together.

<InlineVoucher />

## Recolectando Mods

Puedes instalar una gran variedad de mods diferentes de RimWorld en tu servidor de RimWorld Together.

Los mods se pueden clasificar en tres tipos diferentes:
- **Mods Obligatorios**: Son necesarios, lo que significa que el cliente debe tenerlos o no podrá conectarse.
- **Mods Opcionales**: No son obligatorios, el cliente puede conectarse aunque no los tenga.
- **Mods Prohibidos**: Los mods en esta categoría están baneados, lo que significa que el servidor rechazará la conexión del cliente inmediatamente.

Verás estos tres tipos en la siguiente sección para subir mods, ya que los mods se dividen en tres carpetas.

### Archivos Core y DLCs

RimWorld Together te permite descargar fácilmente Archivos Core y DLCs. Estos se tratan exactamente igual que cualquier otro mod.

Puedes descargar el Core y los DLCs directamente desde el [Repositorio de RimWorld Together en GitHub](https://github.com/RimworldTogether/RimWorld-Together), descargando específicamente la carpeta **Extras.zip**.

### Otros Mods

Puedes encontrar una gran variedad de mods para RimWorld simplemente buscando en internet. Recomendamos mucho usar la página del [Steam Workshop de RimWorld](https://steamcommunity.com/app/294100/workshop/) para buscar mods, debido a su alta popularidad y la gran cantidad de mods disponibles.

Cuando te suscribes a mods directamente a través del Steam Workshop, se descargarán vía tu cliente de Steam en el siguiente directorio: `../steamapps/workshop/content/294100`.

:::tip
Si no tienes RimWorld en Steam, aún puedes descargar archivos y mods del Steam Workshop usando SteamCMD. Empieza descargando [SteamCMD desde la web oficial de Valve](https://developer.valvesoftware.com/wiki/SteamCMD) o directamente [aquí](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Ejecuta **steamcmd.exe** y espera a que termine la instalación. Cuando esté listo, escribe `login anonymous` en la consola.

Ahora puedes empezar a descargar mods ejecutando `workshop_download_item 294100 [workshop_id]`, reemplazando `[workshop_id]` con el ID del mod del Steam Workshop. Puedes encontrar el ID del mod simplemente analizando la URL, específicamente la parte final, por ejemplo: `/?id=3230195082`.

Cualquier mod que descargues vía SteamCMD se guardará en la siguiente ruta: `../steamapps/workshop/content/294100`.
:::

Una vez que tengas los mods descargados, puedes continuar con la siguiente sección que explica cómo subirlos a tu servidor de juegos.

:::note
Hay ciertos mods que están garantizados como incompatibles con RimWorld Together. Puedes ver la lista de mods confirmados como [incompatibles aquí](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md).

Además, puede haber otros mods que no funcionen como se espera al usarlos con RimWorld Together, así que puede que tengas que investigar y probar para asegurarte de que los mods funcionen correctamente.
:::

## Subiendo Mods

Ahora que tienes los mods listos, puedes empezar conectándote a tu servidor de juegos vía FTP. Lee nuestra [guía de Acceso vía FTP](gameserver-ftpaccess.md) para aprender cómo hacerlo.

Con tu cliente FTP listo, navega al siguiente directorio:
```
../rimworld-together/Mods
```

En este directorio, verás tres carpetas separadas para los diferentes tipos de mods. Esto se relaciona con la explicación del tipo de mods que dimos al principio de la sección anterior. Si no la has leído aún, te recomendamos volver a leerla para entender dónde colocar cada mod.

Con esto en mente, ahora debes acceder a los archivos de los mods que descargaste y subir uno por uno cada carpeta de mod en la carpeta correspondiente según su categoría en tu servidor de juegos.

:::note
El servidor debe estar detenido antes de añadir o editar mods, de lo contrario cualquier cambio podría perderse.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## Iniciando el Servidor

Una vez que hayas subido los mods que querías tener, simplemente inicia tu servidor de nuevo. La próxima vez que arranque, todos los mods que agregaste deberían estar activos en el servidor.

¡Has instalado con éxito nuevos mods en tu servidor de juegos RimWorld Together!

## Mods Populares

¿Sigues buscando los mods perfectos para tu servidor? Navega por nuestra lista cuidadosamente seleccionada de los mods más populares y recomendados para mejorar tu experiencia de juego y darle a tu servidor ese toque final que se merece. Inspírate y encuentra justo las adiciones que encajan con tu proyecto.

<SearchableItemList items={items} />

<InlineVoucher />