---
id: moe-configuration
title: "Myth of Empires: Configuración del Servidor"
description: "Descubre cómo personalizar tu servidor de Myth of Empires para un juego óptimo y control total → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-moe
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción
Myth of Empires ofrece un montón de opciones de configuración que te permiten personalizar tu servidor a tu gusto. En esta guía, exploraremos algunos de los parámetros de configuración disponibles y explicaremos cada uno con más detalle.

<YouTube videoId="a-tZnWIpOSg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GozxMwycZ43y4sm/preview" title="¡Configura tu servidor de Myth Of Empires en solo UN MINUTO!" description="¿Te enteras mejor viendo las cosas en acción? ¡Aquí te tenemos! Sumérgete en nuestro video que lo explica todo. Ya sea que tengas prisa o prefieras absorber la info de la forma más entretenida posible."/>

<InlineVoucher />

## Accediendo a tu Archivo de Configuración

Primero, tendrás que acceder a tu archivo de configuración para poder editar cualquier parámetro. Hay varias formas de editar este archivo.

:::tip
Recomendamos mucho usar el método del **Webinterface** porque MOE tiene una cantidad considerable de opciones y archivos de configuración, lo que significa que configurar todo será mucho más rápido que editar valores directamente.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Vía Webinterface" default>

#### Vía Webinterface

El método más amigable es ir a la sección de **Configuración** en el webinterface de tu servidor de juegos y buscar ahí los ajustes que necesites, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Podrás ver una gran variedad de secciones y configuraciones donde puedes editar los valores directamente.

</TabItem>

<TabItem value="configs" label="Vía archivo de configuración en WI">

#### Vía archivo de configuración en WI

:::note
El servidor debe estar detenido antes de editar la configuración; si editas el archivo y reinicias el servidor, los cambios se revertirán.
:::

Alternativamente, para quienes quieran editar directamente los archivos de configuración en crudo, pueden acceder a ellos en la sección **Configs** del webinterface de tu servidor de juegos. Para editar un archivo de configuración, simplemente presiona el botón azul de editar archivo, como se muestra aquí:

![](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

Esto abrirá un editor de texto directamente en la web para que puedas modificarlo.

</TabItem>

<TabItem value="ftp" label="Vía FTP">

#### Vía FTP

:::note
El servidor debe estar detenido antes de editar la configuración; si editas el archivo y reinicias el servidor, los cambios se revertirán.
:::

El último método para acceder al archivo en crudo es a través de FTP. Si no estás familiarizado con FTP, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md). Sin embargo, este método es más lento y si quieres editar el contenido directamente, te recomendamos usar la sección de **Configuración** en el webinterface de tu servidor de juegos como mencionamos antes.

</TabItem>
</Tabs>

## Opciones de Configuración del Servidor

Aquí hemos seleccionado algunas de las opciones de configuración más importantes y básicas que probablemente querrás cambiar, incluyendo algunos ajustes internos.

:::tip
No recomendamos cambiar el puerto, la IP o las configuraciones de directorio, ya que estas son configuradas automáticamente por el servidor de juegos. ¡Cambiar estos valores podría romper tu servidor!
:::

| Nombre del Parámetro | Ejemplo                                | Descripción                                               |
| -------------------- | ------------------------------------ | --------------------------------------------------------- | 
| name                 | ZAP-Hosting Docs Test                 | El nombre de tu servidor                                  |
| password             | iLoveZAP!2024                        | Protege el servidor con una contraseña (privado)          |
| description          | ¡Este es un servidor genial!          | Añade una descripción para tu servidor                    |
| gamemode             | PVE / PVP                           | Define el modo de juego para tu servidor                  |
| mapname              | Central Island                      | Define el mapa para tu servidor                            |
| difficulty           | 1                                   | Dificultad de tu mundo                                    |

Después de hacer tus cambios, asegúrate de guardar el archivo donde corresponda y reiniciar tu servidor. La próxima vez que arranque, usará las configuraciones que hayas definido.

<InlineVoucher />