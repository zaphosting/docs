---
id: foundry-configuration
title: "Foundry: Configuración del Servidor"
description: "Descubre cómo personalizar la configuración de tu servidor Foundry para un juego y gestión óptimos → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores Foundry vienen con un montón de parámetros de configuración que puedes personalizar a tu gusto. En esta guía, exploraremos todos los parámetros de configuración disponibles actualmente y explicaremos cada uno con más detalle.

<InlineVoucher />

## Accediendo a tu Archivo de Configuración

Primero, tendrás que acceder a tu archivo de configuración para poder editar cualquier parámetro. Hay varias formas de editar este archivo.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="A través del Webinterface" default>

#### A través del Webinterface

El método más amigable es ir a la sección **Settings** en el webinterface de tu servidor de juegos y buscar ahí los ajustes correspondientes, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="A través del archivo de configuración del WI">

#### A través del archivo de configuración del WI

:::note
El servidor debe estar detenido antes de que se pueda editar la configuración; editar el archivo y reiniciar el servidor hará que los cambios se pierdan.
:::

Alternativamente, para usuarios que quieran editar directamente el archivo en crudo, puedes acceder a él yendo a la sección **Configs** en el webinterface de tu servidor de juegos y pulsando el botón azul de editar archivo, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

Esto abrirá un editor de texto directamente en el sitio para que puedas editarlo.

</TabItem>

<TabItem value="ftp" label="A través de FTP">

#### A través de FTP

:::note
El servidor debe estar detenido antes de que se pueda editar la configuración; editar el archivo y reiniciar el servidor hará que los cambios se pierdan.
:::

El último método para acceder al archivo en crudo es mediante FTP. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md). Sin embargo, este método tarda más y si quieres editar directamente el contenido del archivo, te recomendamos usar simplemente la sección **Configs** en el webinterface de tu servidor de juegos como se mencionó antes.

</TabItem>
</Tabs>

## Opciones de Configuración del Servidor

En la tabla de abajo, te presentamos las opciones importantes de configuración del servidor que están disponibles actualmente en los servidores Foundry.

:::tip
No recomendamos cambiar los ajustes de Puerto, ya que estos son configurados automáticamente por el servidor de juegos. ¡Cambiar los valores del Puerto podría romper tu servidor de juegos!
:::

### Ajustes Importantes del Servidor

| Nombre del Parámetro | Ejemplo                   | Descripción                                                                          |
| -------------------- | ------------------------- | ------------------------------------------------------------------------------------ | 
| server_world_name    | ZAPDocsTest               | Define el nombre del mundo, que también será la carpeta donde se guardarán los archivos |
| server_name          | ZAP-Hosting Docs Test     | Nombre que aparece en la lista de servidores para tu servidor                        |
| server_password      | iLoveZAP!2024             | Establece una contraseña requerida para unirse al servidor                          |
| server_is_public     | true/false                | Activa o desactiva si el servidor se muestra en el navegador de servidores          |
| server_port          | 3724 (por defecto)        | Define el puerto de red que usará el juego                                          |
| server_query_port    | 27015 (por defecto)       | Define el puerto de consulta usado para devolver info sobre el servidor en la lista |
| server_max_players   | 32                        | Define la cantidad máxima de jugadores que pueden estar en el servidor a la vez      |

### Ajustes de Configuración de Juego

| Nombre del Parámetro    | Ejemplo     | Descripción                                                                       |
| ----------------------- | ----------- | --------------------------------------------------------------------------------- | 
| pause_server_when_empty | true/false  | Activa o desactiva si el servidor debe seguir funcionando sin jugadores conectados |
| map_seed                | 42938743982 | Define una semilla personalizada para la generación del mundo                    |
| autosave_interval       | 300         | Define cada cuánto tiempo en segundos el servidor guarda automáticamente          |

Después de completar tus cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que tu servidor arranque, usará los ajustes que hayas configurado.

<InlineVoucher />