---
id: arma3-serverconfig
title: "Arma 3: Editar archivo de configuración del servidor"
description: "Descubre cómo personalizar la configuración de tu servidor de juegos Arma 3 para un gameplay y rendimiento óptimos → Aprende más ahora"
sidebar_label: Server.cfg
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Parámetros y configuración del Server.cfg

El Server.cfg de Arma 3 es necesario para el funcionamiento de cualquier servidor de juegos Arma 3 y ofrece una variedad de 
posibilidades para configurar un servidor de juegos Arma 3 de forma individual.

El Server.cfg se edita ya sea directamente vía FTP en un servidor de juegos o VPS preinstalado. 
Con un servidor de juegos también está disponible el apartado Configs en el menú lateral izquierdo de la interfaz del servidor de juegos, desde ahí se puede editar el
Server.cfg con unos pocos clics.

<InlineVoucher />

## Editar el Server.cfg vía el editor ZAP

Para editar el server.cfg de tu servidor de juegos Arma 3 en el editor ZAP, primero haz clic en tu servidor en la interfaz y luego selecciona "Configs" en el menú lateral izquierdo bajo "Ajustes". 

![](https://puu.sh/Fo5i6/183ee65ef3.png)


Ahí verás una lista de los archivos de configuración disponibles para Arma 3, ahora solo editamos el Server.cfg. 
Con un clic en el botón azul "Abrir archivo" entras al editor ZAP. 

![](https://puu.sh/Fk7Ez/b0f32d8c61.png)


Ahí tienes la posibilidad de configurar tu servidor de juegos Arma 3 de forma individual, incluyendo el nombre del servidor y el número de slots. Puedes ajustar los ajustes a tu gusto y luego hacer clic en "Guardar".

![](https://puu.sh/Fk7I1/407a039e38.png)


Al especificar el nombre del servidor, asegúrate de encerrar el nombre entre comillas, de lo contrario el servidor no podrá leerlo. También es importante terminar cada línea con un punto y coma (;), de lo contrario el servidor no podrá leer las configuraciones siguientes. Una excepción es la opción "motd[]", donde debes terminar cada línea con una coma, excepto la última que debe ir sin coma. 

## Correcto:

Aquí, las comillas, punto y coma y coma están configurados correctamente.

![](https://puu.sh/Fk7Mq/e2542b12f7.png)


## Incorrecto: 

Aquí falta la configuración correcta de comillas, punto y coma y coma, el servidor no arrancaría así.

![](https://puu.sh/Fk7NK/f96a31199d.png)


## Editar el Server.cfg vía FTP

En lugar del editor ZAP, el Server.cfg también puede editarse directamente vía FTP. En este ejemplo usamos **FileZilla**
para establecer una conexión FTP con el servidor de juegos y navegar por los directorios de tu servidor de juegos.

Aquí aprendes cómo conectarte a tu servidor de juegos vía FTP: [Acceso vía FTP](gameserver-ftpaccess.md).


## Establecer la conexión y navegar a la ruta del server.cfg

:::info
Asegúrate de que tu servidor de juegos esté detenido mientras trabajas en él vía FTP.
:::

Después de conectarte a tu servidor de juegos vía FTP como se explicó arriba, navega con FileZilla en la ventana inferior derecha hasta el directorio de tu server.cfg, que encontrarás en: **/g198376/arma3/config**

![](https://puu.sh/Fo5eC/4d222f5a99.png)

:::info
El nombre de la primera carpeta (g198376) es el ID de tu servidor, así puedes diferenciar las carpetas si tienes más de un servidor de juegos.
:::

![](https://puu.sh/Fo4Tw/06f7a53914.png)

En el directorio encontrarás el Server.cfg de tu servidor de juegos Arma 3 así como otros archivos de configuración existentes.
Ahora puedes hacer **clic derecho** sobre el server.cfg y seleccionar **Ver/Editar**.

![](https://puu.sh/Fo5fM/f3519a8936.png)

Se abrirá un editor estándar donde podrás editar tu Server.cfg como se describió arriba. 
Después de editar tu Server.cfg puedes guardarlo presionando **CTRL+S**. Luego puedes cerrar el editor,
tu servidor ya está listo para arrancar de nuevo.



<InlineVoucher />