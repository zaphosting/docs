---
id: palworld-server-modding
title: "Palworld: Instalación de Mods para Palworld"
description: "Descubre cómo mejorar tu experiencia en Palworld con mods para servidores y clientes de forma segura y efectiva → Aprende más ahora"
sidebar_label: Instalar Mods
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Desde el lanzamiento de Palworld, han empezado a aparecer mods nuevos y emocionantes en línea para mejorar la experiencia de juego y hacer el juego aún más divertido. En esta guía exploraremos el proceso de añadir modificaciones (mods) a tu servidor de juegos Palworld y/o cliente de juego.

<YouTube videoId="x4tfL3Vi5qE" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/5LynAssgfXj6qgr/preview" title="¡Cómo instalar mods en tu servidor de Palworld!" description="¿Sientes que entiendes mejor cuando ves las cosas en acción? ¡Te tenemos cubierto! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la información de la forma más entretenida posible."/>

<InlineVoucher />

### Información clave

Actualmente, puedes ver y descargar mods disponibles a través de sitios de modding de terceros. Recomendamos usar sitios como [Nexus Mods](https://www.nexusmods.com/palworld/) o [Curseforge](https://www.curseforge.com/palworld/) que son reconocidos en la comunidad de mods. No es posible descargar mods a través de Steam Workshop en este momento.

:::note
ZAP-Hosting no se hace responsable de posibles modificaciones o daños a los archivos de tu servidor o mundo al instalar mods. Te recomendamos encarecidamente hacer copias de seguridad antes de continuar. Aprende más sobre copias de seguridad en nuestra guía dedicada [Gestionar partidas guardadas](palworld-server-savegames.md) que profundiza en este tema.
:::

:::info
Actualmente solo soportamos mods en formato PAK (.PAK). No podrás usar mods que requieran un archivo ejecutable por motivos de seguridad.
:::



### Mods para servidor y cliente

Al elegir mods, primero debes determinar si son para el servidor o para el cliente. La forma más fácil de saberlo es buscando la descripción del mod en la web o contactando directamente al autor del mod.

Los scripts para servidor se instalan directamente en el servidor y no requieren acción por parte de los jugadores. Por otro lado, los mods para cliente requieren que cada usuario que quiera conectarse descargue e instale el mod localmente en sus archivos de juego.

:::info
Debes verificar que el mod que quieres usar sea compatible con la versión actual del build del juego Palworld.
:::



## Paso 1: Preparar el archivo PAK

Visitando sitios de modding, como los sugeridos en la introducción, podrás navegar y descargar una amplia selección de mods diferentes.

:::info
Recordatorio: Actualmente solo soportamos mods en formato PAK (.PAK) por motivos de seguridad.
:::

Ve al mod que quieras usar y descárgalo localmente en tu dispositivo. Si es necesario, descomprime los archivos usando una herramienta como [7zip](https://www.7-zip.org/) para extraer el archivo **.pak**.

![](https://screensaver01.zap-hosting.com/index.php/s/EA4NBWkQAZQoqfi/preview)



## Paso 2: Subir vía FTP

Una vez que tengas los archivos PAK listos para subir, ve a la sección **Herramientas->FTP-Browser** en el panel web de tu servidor de juegos.

Necesitarás un cliente FTP para conectarte a tu servidor. Usa nuestra guía dedicada [Acceso vía FTP](gameserver-ftpaccess.md) si no tienes un cliente FTP configurado o necesitas ayuda con la conexión FTP.

Dentro del panel web, puedes usar el botón **Conexión Directa**. Esto debería abrir el programa FTP que prefieras y conectarte automáticamente.

Alternativamente, usa las credenciales que aparecen en la página FTP-Browser para introducirlas manualmente en tu cliente FTP y conectarte.

![](https://screensaver01.zap-hosting.com/index.php/s/nWYPNMRbnrDbDLF/preview)

Luego, tendrás que subir los archivos PAK del mod que preparaste antes. Debes subirlos a la siguiente carpeta:
```
../g[your_zapid]/palworld-windows/Pal/Content/Paks/ # Para versión Windows
../g[your_zapid]/palworld-linux/Pal/Content/Paks/ # Para versión Linux
```

![](https://screensaver01.zap-hosting.com/index.php/s/87wqpW65SibyLGz/preview)

¡Y listo para el lado del servidor! Ahora toca trabajar en el lado del cliente.



## Paso 3: Instalar mods en el cliente

Ahora que todos los mods están instalados en el servidor, debemos asegurarnos de hacer lo mismo para cualquier cliente que quiera unirse al servidor. Ellos tendrán que repetir este proceso. Actualmente no hay forma de que un cliente descargue mods automáticamente al unirse.

Abre Steam, haz clic derecho en Palworld, selecciona administrar y luego examinar archivos locales.

![](https://screensaver01.zap-hosting.com/index.php/s/zf8iSjsJNit9sqB/preview)

Se abrirá una carpeta con la instalación local de Palworld en tu dispositivo.

![](https://screensaver01.zap-hosting.com/index.php/s/GwSzNffxDJaJCrX/preview)

Ahora navega a la siguiente carpeta:
```
../Palworld/Pal/Content/Paks/
```

Mueve los archivos **.pak** de los mods a esta carpeta. Repite esto para cada mod adicional que hayas añadido.

![](https://screensaver01.zap-hosting.com/index.php/s/ZmAtezELEbNCwc4/preview)



## Paso 4: Iniciar Palworld y conectar al servidor

Ahora podrás conectarte a tu servidor de juegos Palworld y disfrutar la experiencia con un montón de mods nuevos. Usa nuestra guía dedicada [Conectar al servidor](palworld-connect.md) si necesitas ayuda para conectarte.

Una vez dentro, deberías poder ver las diferencias que los mods han generado.

Por ejemplo, estamos usando un mod de bloques de Minecraft en nuestro servidor de prueba:

![](https://screensaver01.zap-hosting.com/index.php/s/dxytjjrwaqLtiik/preview)

Has instalado mods exitosamente en tu servidor de Palworld. Si tienes problemas con los mods, revisa la sección de depuración a continuación.



## Depuración

En esta sección de depuración te damos algunas causas comunes de problemas y pasos para solucionarlos y así acotar el problema. Ten en cuenta que el modding aún está en etapas tempranas y no es oficial, por lo que es probable que aparezcan bugs.

#### Asegura la versión compatible del mod

Asegúrate de que los mods que instalaste sean compatibles con la versión actual del build de Palworld. Si no es así, podrías recibir errores y algunas funciones de los mods podrían no funcionar. Contacta al autor del mod para pedir una actualización si está desactualizado.

#### Reinicia el servidor

Asegúrate de reiniciar el servidor después de cualquier cambio o si no ves los mods activos. Te recomendamos consultar con el autor del mod sobre cualquier error o bug que experimentes con mods específicos.

#### Revisa los logs en busca de errores

Una estrategia inicial para solucionar problemas es revisar la sección **Información->Archivos de registro** en el panel web de tu servidor de juegos. Estos archivos contienen logs con información sobre el servidor, como eventos actuales, pistas o mensajes de error.

Los mensajes de error en particular pueden ayudar a identificar y entender mejor la causa de un problema. Muchas veces, los problemas se pueden descubrir y resolver con una revisión enfocada de los logs.

:::info
¿Necesitas ayuda extra? No hay problema, únete a nuestra [Comunidad en Discord](https://discord.com/invite/zaphosting) o crea un post en nuestro [Subreddit r/zaphosting](https://www.reddit.com/r/zaphosting/) donde nosotros y la comunidad te ayudaremos con tus dudas.

¿Quieres soporte oficial? Por favor [crea un ticket](https://zap-hosting.com/en/customer/support/) en nuestra web con la mayor cantidad de detalles posible y te responderemos lo antes posible. :)
:::


<InlineVoucher />