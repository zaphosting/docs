---
id: openmp-configuration
title: "Open.mp: Configuración del servidor Open.mp"
description: "Descubre cómo personalizar los ajustes del servidor Open.mp para optimizar tu experiencia de juego y el rendimiento del servidor → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores Open.mp vienen con una amplia gama de parámetros de configuración que puedes personalizar a tu gusto. En esta guía, exploraremos todos los parámetros de configuración disponibles actualmente y explicaremos cada uno con más detalle.

<InlineVoucher />

## Accediendo a tu Archivo de Configuración

Primero, tendrás que acceder a tu archivo de configuración para poder editar cualquier parámetro. Hay varias formas de editar este archivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Vía Webinterface" default>

#### Vía Webinterface

El método más amigable para editar los ajustes básicos es dirigirte a la sección **Settings** en el webinterface de tu servidor de juegos y buscar los ajustes apropiados allí, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Ten en cuenta que no todas las opciones de configuración estarán accesibles aquí. Si deseas configurar todo, usa la pestaña **WI Config File** para editar fácilmente el archivo necesario directamente en el webinterface.

</TabItem>

<TabItem value="configs" label="Vía archivo WI Config">

#### Vía archivo WI Config

:::note
El servidor debe estar detenido antes de que se pueda editar la configuración; editar la configuración y reiniciar el servidor hará que los cambios se deshagan.
:::

Para los usuarios que desean editar directamente el archivo y todas las opciones de configuración, pueden acceder a esto yendo a la sección **Configs** en el webinterface de tu servidor de juegos y presionando el botón azul de editar archivo, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Esto abrirá un editor de texto directamente en el sitio para que puedas editarlo.

</TabItem>

<TabItem value="ftp" label="Vía FTP">


#### Vía FTP

:::note
El servidor debe estar detenido antes de que se pueda editar la configuración; editar la configuración y reiniciar el servidor hará que los cambios se deshagan.
:::

El método final para acceder al archivo en bruto es a través de FTP. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md). Sin embargo, este método toma más tiempo y si deseas editar directamente el contenido del archivo, recomendamos simplemente usar la sección **Configs** en el webinterface de tu servidor de juegos como se mencionó.

Una vez que hayas iniciado sesión con tu cliente FTP, dirígete al siguiente directorio, reemplazando `[zap_id]` con tu propio ID de ZAP:
```
..g[zap_id]/gta-openmp/
```

En esta ruta, encuentra el archivo `config.json` y ábrelo. Este es el archivo de configuración del servidor que debes editar.

</TabItem>
</Tabs>

## Opciones de Configuración del Servidor

### Detalles del Servidor

Estas son opciones de configuración del servidor que ajustan la información de tu servidor en el navegador público de servidores. Tendrás que encontrar estas opciones en tu archivo de configuración, lo cual se puede hacer fácilmente usando `CTRL+F` en tu navegador o aplicación de edición para buscar.

| Nombre del Parámetro          | Ejemplo                                | Descripción                                                                        |
| ------------------------------ | ------------------------------------- | ---------------------------------------------------------------------------------- |
| name                           | ZAP-Hosting Docs Test                  | Establece el nombre de host para tu servidor                                      |
| language                       | English                              | Idioma que aparecerá en el navegador del servidor para tu servidor                |
| website                        | zap-hosting.com/                     | Añade un sitio web que la gente pueda visitar para obtener más info sobre tu servidor |
| discord.invite                 | discord.gg/zaphosting                | Enlace del servidor de Discord que aparece en el navegador del servidor           |
| banners.light                  | zap-hosting.com/lighticon.png        | Establece una URL para el banner del tema claro que aparece en el navegador del servidor |
| banners.dark                   | zap-hosting.com/darkicon.png         | Establece una URL para el banner del tema oscuro que aparece en el navegador del servidor |
| game.map                       | ZAPtastic Stunt Map                   | El nombre del mapa que debería aparecer en el navegador del servidor              |
| game.mode                      | Survival                            | El modo de juego que debería aparecer en el navegador del servidor                |
| announce                       | true                                | Activa o desactiva si tu servidor debe mostrarse en el navegador público de servidores |
| enable_query                   | true                                | Activa o desactiva si la información de tu servidor debe mostrarse en el navegador de servidores |

Después de completar tus cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que tu servidor se inicie, usará los ajustes que has proporcionado.

### Ajustes Básicos del Servidor

Estas son opciones de configuración más importantes que ajustan la funcionalidad de tu servidor. Tendrás que encontrar estas opciones en tu archivo de configuración, lo cual se puede hacer fácilmente usando `CTRL+F` en tu navegador o aplicación de edición para buscar.

| Nombre del Parámetro          | Ejemplo                                | Descripción                                                                                     |
| ------------------------------ | ------------------------------------- | ----------------------------------------------------------------------------------------------- | 
| max_players                    | 50 (por defecto)                      | Establece la cantidad máxima de jugadores que el servidor puede alojar al mismo tiempo          |
| max_bots                       | 0 (por defecto)                       | Establece la cantidad máxima de NPCs que el servidor puede alojar. Esto contribuye al total de max_players |
| password                       | iLoveZAP!2024                        | Establece una contraseña que los jugadores deben usar para conectarse al servidor               |
| rcon.enable                    | true                                | Activa o desactiva la función RCON                                                             |
| rcon.password                  | ZAP-IS-AWESOME                      | Establece una contraseña que debe usarse para acceder a RCON desde los clientes                 |
| logging.enable                 | true                                | Activa o desactiva el registro de logs                                                          |
| logging.file                   | log.txt                             | Ruta y nombre del archivo que se usará para el registro si está activado                         |
| logging.log_chat               | true                                | Activa o desactiva si el chat de los jugadores debe mostrarse en la consola del servidor        |

Después de completar tus cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que tu servidor se inicie, usará los ajustes que has proporcionado.

## Ajustes de Juego y Red

Open.mp tiene una amplia gama de opciones de juego y red que te permiten ajustar tu servidor en gran medida. Aquí resumiremos algunas de las más importantes. Tendrás que encontrar estas opciones en tu archivo de configuración, lo cual se puede hacer fácilmente usando `CTRL+F` en tu navegador o aplicación de edición para buscar.

Si deseas ajustar todos los ajustes, recomendamos leer la [guía config.json de open.mp](https://www.open.mp/docs/server/config.json) que presenta todas las opciones de configuración disponibles actualmente.

:::tip
No recomendamos cambiar los ajustes de Puerto o IP, ya que estos son configurados automáticamente por el servidor de juegos. Cambiar los valores de IP/Puerto puede romper tu servidor de juegos.
:::

| Nombre del Parámetro          | Descripción                                                                                  | 
| ------------------------------ | -------------------------------------------------------------------------------------------- | 
| game.use_chat_radius           | Activa o desactiva si el radio de chat debe estar activo                                    |
| game.chat_radius               | Establece una limitación de radio para el chat                                              |
| game.time                      | Establece la hora global que usa el servidor                                               |
| game.use_nametags              | Activa o desactiva el dibujo de etiquetas de nombre, barras de salud y armadura sobre los jugadores |
| game.use_vehicle_friendly_fire | Activa el fuego amigo para vehículos de equipo                                             |
| game.vehicle_respawn_time      | Tiempo de reaparición de vehículos en milisegundos                                         |
| game.weather                   | Clima global que usa el servidor                                                           |
| network.bind                   | La dirección IP que debe usar el servidor (recomendamos no cambiar esto para servidores de juegos) |
| network.port                   | El puerto que debe usar el servidor (nuevamente, recomendamos no cambiar esto para servidores de juegos) |
| network.messages_limit         | Número máximo de mensajes que un usuario puede enviar por segundo                           |
| network.player_timeout         | Tiempo en milisegundos tras el cual un jugador será desconectado por timeout si no envía datos al servidor |

Después de completar tus cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que tu servidor se inicie, usará los ajustes que has proporcionado.

<InlineVoucher />