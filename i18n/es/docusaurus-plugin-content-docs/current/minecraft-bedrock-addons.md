---
id: minecraft-bedrock-addons
title: "Minecraft Bedrock: Instalar Addons"
description: "Descubre cómo mejorar tu servidor de juegos Minecraft Bedrock con addons para ampliar la jugabilidad y personalizar tu mundo → Aprende más ahora"
sidebar_label: Instalar Addons
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introducción
Minecraft Bedrock Edition tiene soporte nativo para mods y una comunidad enorme, lo que te permite ampliar y mejorar la jugabilidad con tus amigos. En esta guía, cubriremos el proceso para instalar y activar un addon en tu servidor de juegos Minecraft Bedrock.

<InlineVoucher />

## Preparación

Para instalar un mapa addon en tu servidor de juegos Minecraft: Bedrock, necesitas conectarte a él vía FTP. Si no estás familiarizado con esto, te recomendamos echar un vistazo a la [guía de acceso FTP](gameserver-ftpaccess.md).

Antes de proceder con la instalación, también tendrás que encontrar los addons que deseas instalar en tu servidor. Recomendamos navegar por [CurseForge](https://www.curseforge.com/minecraft-bedrock) ya que ofrecen una enorme biblioteca de addons y paquetes de recursos creados por la comunidad.

## Instalación

Hay dos formas de instalar un addon en Minecraft Bedrock. Puedes instalar los addons en un mundo nuevo, lo que hace el proceso muy fácil, o puedes instalarlos en un mundo existente, que es más complicado.

## Usando un mundo nuevo (fácil)

Para crear un mundo nuevo con addons, primero solo tienes que abrir el archivo descargado `.mcaddon` o `.mcpack`.
Esto abrirá Minecraft Bedrock e importará el addon al juego.

### Crear Mundo

Para crear un mundo e instalar los addons en él, haz clic en `Jugar` y luego en `Crear nuevo mundo`.
Luego puedes elegir todas las configuraciones regulares del mundo que quieras:

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### Instalar Addons

Antes de hacer clic en `Crear`, necesitas navegar a `Paquetes de recursos` o `Paquetes de comportamiento`.
Ahí haces clic en `Activar`, junto al nombre del addon:

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

Algunos addons tienen tanto un paquete de recursos como un paquete de comportamiento, así que tienes que activar ambos. Si has activado todos los addons deseados, puedes hacer clic en `Crear`.

Para exportar el mundo y subirlo a tu servidor, puedes usar la guía de [Importar mundo propio](minecraft-bedrock-add-world.md).

## Usando un mundo existente (difícil)

Instalar el addon en un mundo existente es más complicado, pero tiene la ventaja de poder jugar con el addon y mantener el progreso que ya tienes.

### Instalando 7-zip

Para instalar el addon en un mundo Minecraft existente, necesitas instalar 7-zip para poder abrir el archivo del addon.
El proceso de instalación es muy fácil, solo tienes que visitar la [página de descarga de 7-zip](https://www.7-zip.org/) para obtener la versión más reciente del instalador:

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

Una vez descargado, abre el archivo y haz clic en **Instalar**.

### Extrayendo el Addon

Tan pronto como hayas descargado el addon que quieres, puedes extraerlo con 7-zip haciendo clic derecho en el archivo `.mcaddon`, pasando el cursor sobre `7-zip` y haciendo clic en `Extraer a NOMBRE_DE_CARPETA`:

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

Si el addon contiene tanto un paquete de recursos como un paquete de comportamiento, entonces tienes que hacer lo mismo con el contenido de la carpeta, ya que también son archivos `.mcpack`:

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

La diferencia entre paquetes de recursos y paquetes de comportamiento se puede ver en el nombre de la carpeta. Las carpetas de paquetes de recursos tienen `RP` en su nombre, las de paquetes de comportamiento tienen `BP`.

<Tabs>
  <TabItem value="resource-pack" label="Paquete de Recursos" default>

### Subiendo Paquete de Recursos

Para subir el paquete de recursos, navega a esta carpeta en tu cliente FTP:

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

Luego puedes arrastrar y soltar el directorio RP en el cliente FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
Asegúrate de subir la carpeta correcta que contiene directamente el paquete de recursos, no solo una subcarpeta.
El contenido de la carpeta que subas debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### Activando Paquete de Recursos

Para activar el paquete de recursos, tienes que abrir el archivo `manifest.json` dentro de la carpeta RP. Luego tienes que navegar a la carpeta del mundo en tu cliente FTP:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Una vez ahí, tienes que abrir el archivo `world_resource_packs.json`.
Si nunca instalaste addons, tienes que crear este archivo. Pega el siguiente texto en el archivo:

```
[
  {
    "pack_id" : "UUID AQUÍ",
    "version" : [versión, número, aquí]
  }
]
```

Reemplaza los valores de `pack_id` y `version` con los valores del manifest.json que abriste antes:

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
Si quieres instalar más de un paquete, puedes añadir múltiples valores.
Es importante tener una coma `,` separando los valores, pero no debes poner una coma al final:

```
[
  {
    "pack_id" : "UUID AQUÍ",
    "version" : [versión, número, aquí]
  },
  {
    "pack_id" : "UUID AQUÍ",
    "version" : [versión, número, aquí]
  },
  {
    "pack_id" : "UUID AQUÍ",
    "version" : [versión, número, aquí]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="Paquete de Comportamiento">

### Subiendo Paquete de Comportamiento

Para subir el paquete de comportamiento, navega a esta carpeta en tu cliente FTP:

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

Luego puedes arrastrar y soltar el directorio BP en el cliente FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
Asegúrate de subir la carpeta correcta que contiene directamente el paquete de comportamiento, no solo una subcarpeta.
El contenido de la carpeta que subas debería verse así:

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### Activando Paquete de Comportamiento

Para activar el paquete de comportamiento, tienes que abrir el archivo `manifest.json` dentro de la carpeta BP. Luego tienes que navegar a la carpeta del mundo en tu cliente FTP:

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

Una vez ahí, tienes que abrir el archivo `world_behavior_packs.json`.
Si nunca instalaste addons, tienes que crear este archivo. Pega el siguiente texto en el archivo:

```
[
  {
    "pack_id" : "UUID AQUÍ",
    "version" : [versión, número, aquí]
  }
]
```

Reemplaza los valores de `pack_id` y `version` con los valores del manifest.json que abriste antes:

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
Si quieres instalar más de un paquete, puedes añadir múltiples valores.
Es importante tener la coma `,` separando los valores, pero no debes poner una coma al final:

```
[
  {
    "pack_id" : "UUID AQUÍ",
    "version" : [versión, número, aquí]
  },
  {
    "pack_id" : "UUID AQUÍ",
    "version" : [versión, número, aquí]
  },
  {
    "pack_id" : "UUID AQUÍ",
    "version" : [versión, número, aquí]
  }
]
```
:::
</TabItem>
</Tabs>

### Verifica los cambios

Inicia tu servidor, conéctate a él y verifica que los addons se hayan instalado correctamente. Prueba las nuevas funciones o recursos para asegurarte de que todo funciona como esperas. Si algo no sale como planeaste, revisa los pasos y asegúrate de que los archivos se hayan subido correctamente, y busca errores en la consola del servidor.

## Conclusión

Instalar addons en tu servidor de juegos Minecraft Bedrock es una forma genial de ampliar la experiencia de juego y añadir contenido nuevo. Con esta guía, puedes instalar addons fácilmente y personalizar tu servidor. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />