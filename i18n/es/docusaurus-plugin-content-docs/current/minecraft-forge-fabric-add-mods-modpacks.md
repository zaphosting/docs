---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Instalar Mods / Modpacks"
description: "Descubre cómo descargar e instalar mods y modpacks de Minecraft para mejorar la experiencia en tu servidor → Aprende más ahora"
sidebar_label: Instalar Mods / Modpacks
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## Introducción

Vas a aprender cómo descargar e instalar un Mod / Modpack en tu servidor de juegos Minecraft.

<InlineVoucher />

## Preparación

- Un servidor de juegos ([puedes conseguir uno aquí](https://zap-hosting.com/en/gameserver-hosting/))
- Un cliente FTP (por ejemplo WinSCP, FileZilla)
- Conéctate a tu servidor vía FTP: ([Acceso vía FTP](gameserver-ftpaccess.md))



## Buscar y descargar mods o modpacks

Hay muchos sitios en internet donde encontrar mods / modpacks. La plataforma más grande para mods y modpacks es CurseForge. Casi el 99% de todos los mods / modpacks para Minecraft están ahí y se pueden descargar con solo unos clics. Esta guía se centrará en el uso de CurseForge. Puedes buscar mods [aquí](https://www.curseforge.com/minecraft/mc-mods) y modpacks [aquí](https://curseforge.com/minecraft/modpacks).

:::note
Los mods solo funcionan con una versión específica del modloader. Debes revisar la página del mod para ver qué versión necesitas. Si instalas varios mods, asegúrate de que todos usen la misma versión. Además, los mods de Forge no son compatibles con los de Fabric, y viceversa.
:::

Ve a la página del mod / modpack que elijas y haz clic en la pestaña "Files".

![](https://github.com/Yoshlix/docs/assets/26007280/cc528cf6-9fc8-4524-aca0-b954e24716f8)


Encuentra la versión que quieres y haz clic para ir a la sección "File Details".

:::tip
Puedes filtrar por versión y modloader usando el menú desplegable en la parte superior de la pestaña "Files" seleccionada.

![](https://github.com/Yoshlix/docs/assets/26007280/6867b2f2-e9db-4a4c-be88-b9b22b800e72)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="Para Mods" default>
En la sección "File Details", pulsa el botón "Download". Guarda este archivo en algún lugar, lo necesitarás más adelante.

![](https://github.com/Yoshlix/docs/assets/26007280/7b84ae33-1bef-4568-80d7-ef651a654b08)

</TabItem>

<TabItem value="Modpacks" label="Para Modpacks">
En la sección "File Details", baja hasta que veas "Additional Files" y haz clic en los tres puntos, selecciona "Download file". Guarda este archivo en algún lugar, lo necesitarás más adelante.

![](https://github.com/Yoshlix/docs/assets/26007280/49fb9317-fdd3-474e-8140-b78b102c5f3d)

</TabItem>
</Tabs>

## Paso 2 - Extraer archivos de las descargas (solo para modpacks)

Busca el archivo descargado en tu PC, haz clic derecho y selecciona "Extraer todo...". Elige una carpeta donde quieras los archivos extraídos. ¡Recuerda dónde!

![](https://github.com/Yoshlix/docs/assets/26007280/edbc753d-1906-4d81-9f05-354ff48ceebb)

![extraer el archivo versión en alemán](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

Tu carpeta descomprimida debería contener las carpetas mods, config y defaultconfig. Puede que haya más carpetas además de las mostradas aquí.

:::note
Algunos modpacks requieren pasos adicionales, como AllOfFabric6. En el caso de AllOfFabric6, tendrás que ejecutar "startserver.bat" (Windows) o "startserver.sh" (Linux / MacOS) para obtener las carpetas mencionadas arriba. El script descargará las carpetas por ti. Pero en la mayoría de los casos las carpetas ya estarán ahí sin pasos extra. Si no hay script en la carpeta descomprimida, busca rápido en internet cómo obtener los archivos del servidor para tu modpack.
:::


## Paso 3 - Instalar la versión correcta del servidor

En el panel web de Zap-Hosting, selecciona tu servidor de juegos y ve a "Games" en la sección de ajustes.

![](https://github.com/Yoshlix/docs/assets/26007280/47e88856-0120-408a-8bec-41e54e3b0738)

Despliega la sección "Available Games" y busca tu modloader (Forge para mods / modpacks Forge, Fabric para mods / modpacks Fabric). Selecciona el botón verde de descarga.

![](https://github.com/Yoshlix/docs/assets/26007280/e3b4e5d3-11c9-4f09-ae46-27cea93a58a3)


Haz clic en el menú desplegable bajo "Game version" y selecciona la versión de Minecraft que corresponda con la versión correcta para tu mod/modpack. Para Forge, puedes usar la última versión o la recomendada. Prueba primero la última y si tu servidor no funciona bien, vuelve y prueba la recomendada. Selecciona el botón "Accept and Install".

![](https://github.com/Yoshlix/docs/assets/26007280/3530466f-bd58-4d0e-9ca3-8d964ac76d80)


:::tip
Si no sabes qué versión de Minecraft necesitas, vuelve a la página "File Details" en CurseForge. Al lado del icono del mando puedes ver la versión.

![](https://github.com/Yoshlix/docs/assets/26007280/89f751c1-7179-4107-b8bc-7c4381a7d94c)

:::

Cuando termine la instalación del juego, verás un botón azul junto al nombre de tu juego (ej. Forge, Fabric). Haz clic para activar el juego.

![](https://github.com/Yoshlix/docs/assets/26007280/53cf9569-3529-42fb-9a7d-6ae636ca4f9c)
![activar el juego versión en alemán](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## Paso 4 - Conectar y subir mods / modpack vía FTP

Conéctate a tu servidor usando tu cliente FTP favorito. Asegúrate de que el servidor esté detenido.

### Subir un mod

Cuando estés conectado, navega a la carpeta de tu juego (ej. minecraft-forge, minecraft-fabric). Abre la carpeta mods y simplemente arrastra y suelta los archivos de mods que descargaste.

![](https://github.com/Yoshlix/docs/assets/26007280/8619fc4f-4fab-415a-9692-f74f8930da3f)

Cuando termine la subida, puedes iniciar tu servidor.

### Subir un modpack

Cuando estés conectado, navega a la carpeta de tu juego (ej. minecraft-forge, minecraft-fabric). Borra las carpetas world, mods, config y defaultconfig en tu servidor. Ahora sube todas las carpetas desde la carpeta descomprimida que descargaste antes, excepto las carpetas jre y libraries. Simplemente selecciona todas las carpetas y arrástralas al directorio de tu servidor.

![](https://github.com/Yoshlix/docs/assets/26007280/1424a94d-aa96-40ca-8b30-7c1905e67c21)

Cuando termine la subida, puedes iniciar tu servidor.



## Mods Populares

¿Sigues buscando los mods perfectos para tu servidor? Navega por nuestra lista cuidadosamente seleccionada de los mods más populares y recomendados para mejorar tu experiencia y darle a tu servidor ese toque final que se merece. Inspírate y encuentra justo las adiciones que encajan con tu proyecto.

<SearchableItemList items={mods} />

## Modpacks Populares

¿Sigues buscando los mods perfectos para tu servidor? Navega por nuestra lista cuidadosamente seleccionada de los mods más populares y recomendados para mejorar tu experiencia y darle a tu servidor ese toque final que se merece. Inspírate y encuentra justo las adiciones que encajan con tu proyecto.

<SearchableItemList items={modpacks} />

<InlineVoucher />