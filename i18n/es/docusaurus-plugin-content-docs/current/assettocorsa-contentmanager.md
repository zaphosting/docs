---
id: assettocorsa-contentmanager
title: "Assetto Corsa: Configura tu Servidor con Content Manager"
description: "Descubre cómo configurar y gestionar eficientemente tu servidor de juegos para un rendimiento óptimo y personalización → Aprende más ahora"
sidebar_label: Configura tu Servidor con Content Manager
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
**Importante** Para gestionar el servidor con Content Manager, se requiere la versión completa, la versión lite *no* puede gestionar servidores.
:::

<InlineVoucher />


## Preparación

Primero, abrimos nuestro Content Manager y hacemos clic en el menú hamburguesa en la esquina superior derecha, donde seleccionamos "Server":

![](https://screensaver01.zap-hosting.com/index.php/s/LGKdDPSCMCEMEZj/preview)

Aquí creamos un nuevo preset y lo seleccionamos:

![](https://screensaver01.zap-hosting.com/index.php/s/XLTcJkwrAAwB65o/preview)

## Configurar Slots del Servidor

Primero necesitamos definir la capacidad de nuestro servidor, en nuestro caso el servidor tiene solo 10 slots, así que seleccionamos '10' en Capacidad:

![](https://screensaver01.zap-hosting.com/index.php/s/XreNRjbpSJJqEsQ/preview)

## Seleccionar Mapa

Por defecto está seleccionado Imola como mapa, haciendo clic en el mapa podemos elegir el que queramos:

![](https://screensaver01.zap-hosting.com/index.php/s/B87ywSwXHL6qzFD/preview)



## Configurar Coches

Ahora cambiamos a la pestaña "Entry List", aquí podemos añadir nuevos coches:


![](https://screensaver01.zap-hosting.com/index.php/s/bY5Q5WB7nDq7f8q/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/w6oxDfGJifFZbd7/preview)


:::info
Ten en cuenta que todos los slots de coches deben estar llenos y no se debe superar la cantidad de slots disponibles.

![](https://screensaver01.zap-hosting.com/index.php/s/tSZn2QJLzfDx4r9/preview)
:::

## Configurar Subida FTP

Desde el menú "Advanced" podemos configurar un uploader FTP para que puedas subir la configuración de tu servidor con un solo clic.

![](https://screensaver01.zap-hosting.com/index.php/s/7TmdJPGKAbAJnDP/preview)


Ahora introduce tus datos FTP aquí:

![](https://screensaver01.zap-hosting.com/index.php/s/7R9xNeEbDQpF4BD/preview)

:::info
En la "Carpeta" debes ingresar el ID de tu servidor de juegos tal como aparece en la URL de tu servidor, por ejemplo:

> https://zap-hosting.com/en/customer/gameserver/show/**427814**/ftpBrowser/
:::

En nuestro caso, sería:

```
/g427814/assetto-corsa/
```

Para AssettoServer: 

```
/g427814/assettoserver/
```

Después de eso, puedes hacer clic en "Upload Content", la configuración, pista y coches que hayas configurado se subirán automáticamente, ¡luego solo tienes que arrancar tu servidor!

<InlineVoucher />