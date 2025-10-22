---
id: soulmask-configuration
title: "Soulmask: Configuración del Servidor"
description: "Descubre cómo personalizar los ajustes del servidor Soulmask y optimizar la configuración del juego para una experiencia a tu medida → Aprende más ahora"
sidebar_label: Configuración del Servidor
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introducción

Los servidores de Soulmask vienen con un amplio rango de parámetros de configuración que puedes personalizar a tu gusto. En esta guía, exploraremos todos los parámetros de configuración disponibles actualmente y explicaremos cada uno con más detalle.

<InlineVoucher />

## Accediendo a tu Archivo de Configuración

Primero, tendrás que acceder a tus archivos de configuración para poder editar cualquier parámetro. Puedes ajustar la configuración de tu servidor de juegos vía el panel web y la configuración del juego vía FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Vía Panel Web" default>

#### Vía Panel Web

El método principal para acceder a las opciones de configuración de tu servidor es dirigiéndote a la sección **Configuración** en el panel web de tu servidor de juegos y buscando los ajustes correspondientes, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="Vía FTP">

#### Vía FTP

:::note
El servidor debe estar detenido antes de que puedas editar la configuración; editar el archivo y reiniciar el servidor sin detenerlo primero hará que los cambios se deshagan.
:::

El método principal para acceder al archivo de configuración del juego es a través de FTP. Si no estás familiarizado con el uso de FTP, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md).

</TabItem>
</Tabs>

## Opciones de Configuración del Servidor
En las siguientes secciones, cubriremos cómo acceder a las opciones de configuración y exploraremos algunas de las opciones disponibles tanto para la configuración del servidor como para la del juego.

### Ajustes Importantes del Servidor

Actualmente, la única forma de ajustar los ajustes del servidor es a través de la sección **Configuración** en el panel web de tu servidor de juegos. En esta sección, podrás modificar lo siguiente:

| Nombre del Parámetro | Ejemplo               | Descripción                                             |
| -------------------- | --------------------- | ------------------------------------------------------- | 
| Nombre del servidor  | ZAP-Hosting Docs Test | Define el nombre de tu servidor                         |
| Contraseña del servidor de juegos | iLoveZAP!2024         | Establece una contraseña para tu servidor, o déjalo vacío para no usar ninguna |
| Contraseña de Admin  | iLoveZAP!2024         | Establece una contraseña para el acceso de Admin       |
| Modo de juego        | PVE/PVP               | Selecciona si quieres que tu juego sea PVE o PVP       |

Una vez que termines, asegúrate de usar el botón de guardar al final de la sección y reinicia tu servidor.

### Ajustes de Configuración del Juego

Por ahora, la única opción para acceder al archivo de configuración es vía FTP. Asegúrate de detener tu servidor antes de editar el archivo, de lo contrario los cambios probablemente se revertirán.

Ve a la siguiente ruta y abre el archivo **GameXishu.json**:
```
../soulmask/WS/Saved/GameplaySettings
```

Este archivo contiene una gran cantidad de opciones de configuración del juego que puedes ajustar a tu gusto.

Después de completar tus cambios, asegúrate de guardar el archivo donde corresponda y reinicia tu servidor. La próxima vez que tu servidor arranque, usará los ajustes que hayas configurado.

<InlineVoucher />