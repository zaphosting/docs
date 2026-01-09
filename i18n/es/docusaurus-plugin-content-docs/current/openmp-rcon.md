---
id: openmp-rcon
title: "Open.mp: Servidor usando RCON"
description: "Descubre cómo gestionar servidores de juegos de forma remota usando RCON para un control eficiente y seguro → Aprende más ahora"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ¿Qué es RCON?

RCON es una interfaz en varios programas, como servidores de juegos, con la que se puede realizar mantenimiento y administración remota. Esta interfaz permite gestionar servidores que ya están en funcionamiento y son accesibles. Se puede acceder a la interfaz con un programa específico de mantenimiento remoto y así administrar el servidor.

<InlineVoucher />

## Accediendo a tu Archivo de Configuración

Para usar RCON, primero debes acceder a la configuración de tu servidor y activar esta función. Puedes editar el archivo de configuración ya sea a través del panel web de tu servidor o directamente mediante FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="Archivo de Config vía panel web">

#### Archivo de Config vía panel web

Recomendamos usar este método porque es el más fácil.

:::note
El servidor debe estar detenido antes de editar la configuración, editar el archivo y reiniciar el servidor hará que los cambios se deshagan.
:::

Simplemente ve a la sección **Configs** en el panel web de tu servidor de juegos y presiona el botón azul para editar el archivo, como se muestra a continuación:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Se abrirá un editor de texto que te permitirá modificar el archivo directamente. Busca la sección `rcon`. Ahí, configura el parámetro `enable` a `true`, por ejemplo: `"enable":true`. Te recomendamos usar `CTRL+F` para abrir la herramienta de búsqueda de tu navegador y facilitar esto.

En la misma sección, también debes configurar una contraseña para el acceso a la interfaz RCON ajustando el parámetro `password`. Esto evita accesos no autorizados y debe mantenerse privado.

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
El servidor debe estar detenido antes de editar la configuración, editar el archivo y reiniciar el servidor hará que los cambios se deshagan.
:::

Otra forma de editar tu archivo de configuración es mediante FTP. Si no estás familiarizado con FTP, te recomendamos echar un vistazo a la [guía de Acceso vía FTP](gameserver-ftpaccess.md). Sin embargo, este método es más lento y si quieres editar el contenido directamente, lo mejor es usar la sección **Configs** en el panel web de tu servidor de juegos como mencionamos antes.

Una vez conectado a tu servidor vía FTP, ve al siguiente directorio:
```
..g[zap_id]/gta-openmp/
```

En esta ruta, encuentra el archivo `config.json` y ábrelo. Este es el archivo de configuración del servidor que debes editar.

En el archivo, busca la sección `rcon`. Configura el parámetro `enable` a `true` y establece una contraseña para la interfaz RCON con el parámetro `password`.

</TabItem>
</Tabs>

:::info
Asegúrate de reiniciar tu servidor una vez que hayas ajustado los detalles de configuración.
:::

## Usando RCON

Ahora que has activado RCON en la configuración de tu servidor, podrás acceder a la interfaz RCON de Open.mp a través del puerto definido en el archivo.

Necesitarás usar un programa RCON para conectarte. Recomendamos usar [RCON Console](https://sourceforge.net/projects/rconconsole/) porque es open-source.

En el programa RCON que elijas, deberás ingresar la dirección IP y el puerto de tu servidor. Asegúrate de que tu servidor de juegos esté online y funcionando.

Si la conexión es exitosa, ahora podrás enviar comandos a tu servidor Palworld a través del programa RCON Console que elegiste.

:::tip
Consulta nuestros [Comandos del Servidor](openmp-server-commands.md) para ver todos los comandos disponibles que puedes ejecutar vía RCON.
:::

Has activado RCON exitosamente en tu servidor Palworld.

<InlineVoucher />