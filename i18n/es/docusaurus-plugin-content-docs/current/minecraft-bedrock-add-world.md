---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock: Importa tu propio Mundo"
description: "Descubre cómo importar y compartir tus mundos personalizados de Minecraft Bedrock en tu servidor para una experiencia multijugador sin interrupciones → Aprende más ahora"
sidebar_label: Importa tu propio Mundo
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Minecraft Bedrock Edition te permite crear tus propios mundos y usarlos en tu servidor. En esta guía, te mostraremos cómo importar un mundo propio en tu servidor de Minecraft: Bedrock para compartirlo con tus amigos.

<InlineVoucher />

## Preparación

Para importar un mundo en tu servidor de Minecraft Bedrock, necesitas conectarte vía FTP. Si no estás familiarizado con esto, te recomendamos echar un vistazo a la [guía de acceso FTP](gameserver-ftpaccess.md).

Asegúrate de haber guardado ya el mundo que quieres importar en tu computadora. El mundo debe estar en una carpeta con los archivos correspondientes.
Si quieres subir un mundo de Minecraft: Bedrock en modo un jugador, lo puedes encontrar en la siguiente ruta:
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## Instalación

### Detén el Servidor

Antes de comenzar la importación, necesitas detener tu servidor de Minecraft Bedrock. Esto asegura que no se pierdan datos y que la importación se realice sin problemas.

### Sube el Mundo

Navega vía FTP al directorio donde se almacenan los mundos de tu servidor. La ruta suele ser:

```
/gXXXXXX/minecraft-bedrock/worlds
```

Aquí verás las carpetas de todos los mundos que están actualmente en tu servidor. Cada mundo tiene un nombre único.

Sube la carpeta del mundo que quieres importar dentro de este directorio. Asegúrate de no cambiar el nombre de la carpeta, ya que Minecraft no reconocerá el mundo si lo haces.

Luego, necesitas abrir el archivo `server.properties`, que está en la carpeta principal del servidor, y cambiar el valor de `level-name` en la siguiente configuración al nombre de la carpeta de tu mundo:

```
level-name=Bedrock level
```
:::tip
Si quieres volver a usar tu mundo por defecto, solo cambia el valor de nuevo a `Bedrock level` y reinicia el servidor.
:::

### Inicia el Servidor

Después de subir el mundo con éxito, inicia tu servidor nuevamente. El mundo importado debería cargarse automáticamente.

### Verifica los Cambios

Conéctate a tu servidor y verifica que el mundo importado se haya cargado correctamente. Ahora deberías poder jugar en el nuevo mundo. Si algo no funciona como esperabas, revisa los pasos y asegúrate de que las carpetas del mundo estén nombradas y ubicadas correctamente.

## Conclusión

Importar un mundo en tu servidor de Minecraft Bedrock es un proceso sencillo que te permite compartir tus propias creaciones con otros. Para cualquier duda o ayuda, no dudes en contactar a nuestro equipo de soporte, ¡estamos disponibles todos los días para ayudarte! 🙂

<InlineVoucher />