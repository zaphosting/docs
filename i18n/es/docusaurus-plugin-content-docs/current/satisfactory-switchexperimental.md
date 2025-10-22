---
id: satisfactory-switchexperimental
title: "Satisfactory: Versión Experimental"
description: "Descubre los beneficios y riesgos de usar la versión experimental de Satisfactory para acceder antes a las grandes actualizaciones y mejorar tu experiencia de juego → Aprende más ahora"
sidebar_label: Versión Experimental
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ¿Qué es la versión experimental?
Satisfactory tiene dos versiones, la versión regular y la versión experimental. La versión regular es más confiable, estable y con menos errores, ya que es una versión más finalizada. Por otro lado, la versión experimental te da acceso primero a los parches importantes antes de que se lancen en la versión regular, por lo que tiene más probabilidades de bugs y actualizaciones mucho más frecuentes, ¡pero la ventaja de probar las grandes novedades antes que nadie!

:::info
Nota: Independientemente de la versión que elijas, tanto tu servidor como tu cliente de juego deben estar en la misma versión para poder conectarse.
:::

<InlineVoucher />

## ¿Cómo cambiar a la versión experimental?
Con nuestro sistema de servidor de juegos, es muy fácil cambiar la versión del servidor desde nuestra web. Antes de empezar, te recomendamos hacer una copia de seguridad de tus partidas guardadas de Satisfactory, ya que cambiar la versión borrará todos los archivos.

### Hacer copia de seguridad de las partidas guardadas
Hacer una copia de seguridad de todo tu servidor de juegos o partidas guardadas es muy sencillo. Ve a la página del producto Satisfactory y entra en la pestaña `Herramientas -> Copias de seguridad`.

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

En esta página puedes hacer muchas funciones, incluyendo copias automáticas que se explican mejor en [Copias de seguridad](gameserver-backups.md). Aquí nos centraremos en una copia manual.

Arriba en la página, simplemente pulsa el icono verde + y acepta el aviso para hacer una copia de seguridad de todo el servidor de juegos en tu almacenamiento de copias de seguridad de ZAP.

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

Tu copia de seguridad ya está creada y puedes acceder a ella vía FTP, explicado en [Acceso vía FTP](gameserver-ftpaccess.md).

Alternativamente, puedes descargar los archivos de la partida guardada directamente desde la sección `Gestor de partidas guardadas` en el panel web. Lo encuentras en [Gestor de partidas guardadas](satisfactory-savegame.md).

### Cambiar a la versión experimental del servidor de juegos
Primero, ve a la página del producto Satisfactory y entra en la pestaña `Ajustes -> Juegos`.

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

Verás la sección `Juegos instalados` que muestra los juegos que ya tienes instalados. Si ya has cambiado entre alguna versión antes, aparecerá ahí y puedes pasar al último paso para activar el juego.

Luego baja y abre el menú desplegable `Juegos disponibles` y busca "Satisfactory" en el cuadro de texto.

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

Pulsa el botón verde de descarga y confirma la instalación en el aviso que aparece. La descarga de la versión del servidor especificada comenzará.

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

>La descarga puede tardar unos minutos. Espera a que termine antes de continuar con el paso final.

Ahora ambas versiones aparecerán en `Juegos instalados` para futuras referencias, facilitando cambiar entre ellas.

Finalmente, tienes que activar el juego en la sección `Juegos instalados`. Pulsa el icono azul de activar juego.

:::info
Atención: Todos los datos del juego se borrarán durante la reinstalación, asegúrate de hacer una copia de seguridad si no lo has hecho ya.
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

Si quieres volver a la versión regular, sigue los mismos pasos pero elige el servidor de juegos Satisfactory regular durante la selección.

## Cambiar el cliente de juego a experimental
:::info
Nota: Independientemente de la versión que elijas, tanto tu servidor como tu cliente de juego deben estar en la misma versión para poder conectarse.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
Primero abre Steam y ve a tu biblioteca de juegos. Busca "Satisfactory", haz clic derecho y selecciona el menú de propiedades.

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

En el nuevo menú, ve a la sección `Betas` y selecciona `experimental`.

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

¡Eso es todo! Ahora solo espera a que Steam actualice el juego a la versión seleccionada y podrás arrancar tu juego y disfrutar de tu servidor.
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Para Epic Games, cambiar a experimental es aún más fácil. Solo tienes que ir a tu biblioteca y buscar el juego "Satisfactory Experimental". Ambas versiones del juego en el launcher de Epic Games aparecen como juegos separados en la biblioteca.

¡Eso es todo! Ahora solo espera a que Epic Games descargue e instale el juego y podrás arrancar tu juego y disfrutar de tu servidor.

</TabItem>
</Tabs>

<InlineVoucher />